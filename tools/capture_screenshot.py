#!/usr/bin/env python3
"""
capture_screenshot.py — headless screenshot helper for the Endless Staircase game.

Used by the Simon Lore Bot routine to grab a fresh screenshot whenever it ships
a visible game change, so the GitHub changelog / wiki can show what's new.

Usage:
    python3 capture_screenshot.py OUT.png [scene]

Scenes:
    title  (default) — the title screen (always renders the latest lore blurb)
    play             — a few seconds of auto-play (stairs + Simon + hazards)
    cure             — the False Cure scene (two bottles + taunt + banners)
    residual         — THE RESIDUAL WAR: the Sound Spine + half-formed remnants

It works by loading the single-file game in headless Chromium with a virtual
time budget, optionally injecting a tiny scene script that drives the game and
then freezes the loop so the final captured frame is stable. No external libs;
everything is vanilla. The injection is defensive (feature-detects functions),
so it degrades to a title shot if the game internals change.
"""
import sys, os, subprocess, tempfile

GAME = "/Users/tdeshane/endless-staircase/index.html"
CHROME_CANDIDATES = [
    "/opt/homebrew/bin/chromium",
    "/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]

# Each scene is JS injected just before </body>, AFTER the game's own script has
# run reset()/state='title'/requestAnimationFrame(frame). Top-level functions are
# global-object properties (even under "use strict"), so reassigning window.update
# freezes physics; top-level let/const (LEVERS, lever, bottles, player...) are
# readable by bare name from this later inline <script> in the same realm.
SCENES = {
    "play": """
      try {
        handleConfirm();
        // keep it short so Simon's rising tide hasn't caught the climber yet
        for (var i=0;i<70;i++){ keys['ArrowRight']=(i%30<15);
          if(i%18===0){ press['Space']=true; } update(1/60); for(var k in press) delete press[k]; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "cure": """
      try {
        handleConfirm();
        for (var i=0;i<80;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        window.update = function(){};
        if (typeof dropBottles==='function' && typeof LEVERS!=='undefined'){
          var d = LEVERS.filter(function(l){return l.type==='cure';})[0];
          if(d){ lever={state:'act',type:'cure',name:d.name,t:0.1,warnDur:d.warn,actDur:d.act};
            bottles=[]; dropBottles();
            for(var b=0;b<bottles.length;b++){ bottles[b].y=player.y-70; bottles[b].settled=true; } }
        }
        if (typeof showTaunt==='function'){ showTaunt('A CURE WAITS AT THE TOP.'); tauntT=6; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "restoration": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        window.update = function(){};
        if (typeof restore!=='undefined'){
          restore.active = true; restore.t = 3.0; restore.glow = 1; restore.done = false;
        }
        if (typeof showTaunt==='function'){ showTaunt('There are no villains. I was the corruption.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "peace": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // the Restoration has already happened; now force the Peaceful Ending on
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.active=true; peace.t=5.0; peace.glow=1; peace.done=false; }
        // let a few calm frames populate the Incredibox singers + notes, then freeze
        for (var j=0;j<140;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('A calm Incredibox. Sound Battles, the last trace.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "battle": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // Restoration already happened; force the Peaceful Ending + Sound Battle on
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.active=true; peace.t=5.0; peace.glow=1; peace.done=false; }
        // run enough calm frames to populate singers and run a few Sound Battle beats
        for (var j=0;j<180;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        // freeze on a frame where Simon has just led and the world is answering
        if (typeof battle!=='undefined'){
          battle.t=0.0; battle.beat++; battle.leadFlash=1.0;
          battle.answerActive=true; battle.answerWave=0.45;
          if (typeof platforms!=='undefined'){
            for (var b=0;b<platforms.length;b++){ if(platforms[b].boxer){ platforms[b].boxer.answer=0.9; } }
          }
        }
        if (typeof updatePeace==='function'){ /* one more tick to puff answer notes */ }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('Simon leads. The world answers. Simon is the fastest.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phase2": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // Restoration + Peaceful Ending already happened
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        // populate the calm Incredibox singers first
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        // now break it: force PHASE 2 — the .EXE virus
        if (typeof phase2!=='undefined'){ phase2.active=true; phase2.t=3.0; phase2.glow=1; phase2.done=false; phase2.errs=55; }
        // run corrupted frames so the singers get infected + tendrils spawn
        for (var m=0;m<80;m++){ keys['ArrowRight']=(m%30<15); update(1/60); }
        // freeze on a leading beat so Phase 2 Simon shows his flashing eyes
        if (typeof battle!=='undefined'){ battle.t=0.0; battle.leadFlash=1.0; battle.answerActive=true; battle.answerWave=0.4;
          if (typeof platforms!=='undefined'){ for (var b=0;b<platforms.length;b++){ if(platforms[b].boxer){ platforms[b].boxer.answer=0.8; platforms[b].boxer.infected=true; } } } }
        if (typeof glitch!=='undefined'){ glitch=0.95; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('Phase 2 forever. Every second more corrupt.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "spreading": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // Restoration + Peaceful Ending already happened, then Phase 2 locks on
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        // run corrupted frames so the corruption-cells spawn and drift
        for (var m=0;m<140;m++){ keys['ArrowRight']=(m%30<15); update(1/60); }
        // guarantee a clear pair of cells + a lightning bolt mixing between them
        if (typeof cells!=='undefined'){
          cells.push({kind:'pyra', x: player.x-46, y: player.y-46, vx:0, vy:0, r:13, t:1.0, wob:1});
          cells.push({kind:'ploro',x: player.x+46, y: player.y-30, vx:0, vy:0, r:15, t:2.0, wob:1});
          cells.push({kind:'pyra', x: 90, y: player.y-150, vx:0, vy:0, r:12, t:0.5, wob:1});
          cells.push({kind:'ploro',x: W-90, y: player.y+90, vx:0, vy:0, r:14, t:1.5, wob:1});
        }
        if (typeof bolts!=='undefined'){
          bolts.push({ax:player.x-46, ay:player.y-46, bx:player.x+46, by:player.y-30, t:0.05, life:0.5, seed:31});
        }
        // RUN = FUEL: show the charge bar lit and the running status
        if (typeof fuel!=='undefined'){ fuel=0.8; }
        if (typeof player!=='undefined'){ player.vx=3.4; }
        if (typeof glitch!=='undefined'){ glitch=0.7; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('Pyrakontacke + Plorotacke = lightning. RUN = FUEL.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "exposed": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // Restoration + Peaceful Ending happened, Phase 2 locked, now FOUND OUT
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        // stand still (look closely) so the bandages glow and the mind can clear-read
        for (var m=0;m<90;m++){ update(1/60); }
        // guarantee blurry thoughts on screen, one overlapping the player
        if (typeof thoughts!=='undefined'){
          thoughts.length=0;
          thoughts.push({x:player.x+8, y:player.y-6, vx:0, vy:0, r:36, t:1.0, wob:0.8, word:'who?'});
          thoughts.push({x:player.x-120, y:player.y-90, vx:0, vy:0, r:32, t:2.0, wob:0.8, word:'forget'});
          thoughts.push({x:player.x+130, y:player.y+70, vx:0, vy:0, r:30, t:0.5, wob:0.8, word:'meow'});
          thoughts.push({x:90, y:player.y-160, vx:0, vy:0, r:34, t:1.5, wob:0.8, word:'Gray?'});
        }
        // MIND meter high so the fog + seal flash show
        if (typeof mind!=='undefined'){ mind=0.82; }
        if (typeof mindSeal!=='undefined'){ mindSeal=0.6; }
        if (typeof player!=='undefined'){ player.vx=0; }
        // freeze on a leading beat so found-out Simon shows his bandages
        if (typeof battle!=='undefined'){ battle.t=0.0; battle.leadFlash=1.0; battle.answerActive=true; battle.answerWave=0.4;
          if (typeof platforms!=='undefined'){ for (var b=0;b<platforms.length;b++){ if(platforms[b].boxer){ platforms[b].boxer.answer=0.8; platforms[b].boxer.infected=true; } } } }
        if (typeof glitch!=='undefined'){ glitch=0.5; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('Look closely. The bandages warn you. meow 😿'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "executioner": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; Phase 2 found out, then he goes SILENT
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        for (var m=0;m<60;m++){ update(1/60); }
        // thin blurry thoughts (he stopped wasting power) + a precision MARK locking on
        if (typeof thoughts!=='undefined'){
          thoughts.length=0;
          thoughts.push({x:player.x-130, y:player.y-100, vx:0, vy:0, r:30, t:1.0, wob:0.8, word:'who?'});
        }
        if (typeof markTimer!=='undefined'){ markTimer=99; }
        // a mark mid-charge on the player so the contracting reticle + MARKED show
        mark = { x:player.x, y:player.y, t:0.7, charge:1.35, fired:false };
        if (typeof player!=='undefined'){ player.vx=0; }
        // freeze on a leading beat so silent Simon shows his flickering eyes + caption
        if (typeof battle!=='undefined'){ battle.t=0.0; battle.leadFlash=1.0; battle.answerActive=true; battle.answerWave=0.4;
          if (typeof platforms!=='undefined'){ for (var b=0;b<platforms.length;b++){ if(platforms[b].boxer){ platforms[b].boxer.answer=0.7; platforms[b].boxer.infected=true; } } } }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('I only move when it is certain. One clean move.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "atomix": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is the SILENT EXECUTIONER, then THE ATOMIX WAR
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        for (var m=0;m<40;m++){ update(1/60); }
        // board mostly agreeing with Simon so the red lattice + his symbol show
        if (typeof board!=='undefined'){ board=0.18; }
        // guarantee Copies of Intention on screen, one near the player, each with a word
        if (typeof copies!=='undefined'){
          copies.length=0;
          copies.push({x:player.x+70, y:player.y-30, vx:0, vy:0, r:17, t:1.0, wob:0.8, word:'Return to Center'});
          copies.push({x:player.x-120, y:player.y-100, vx:0, vy:0, r:17, t:2.0, wob:0.8, word:'Fall'});
          copies.push({x:player.x+140, y:player.y+80, vx:0, vy:0, r:17, t:0.5, wob:0.8, word:'Forget'});
          copies.push({x:90, y:player.y-150, vx:0, vy:0, r:17, t:1.5, wob:0.8, word:'Belong'});
        }
        // a curse active so the HUD shows the imposed word
        if (typeof curse!=='undefined'){ curse.type='Return to Center'; curse.t=1.0; }
        if (typeof player!=='undefined'){ player.vx=0; }
        // freeze on a leading beat so atomix-war Simon shows his flickering eyes + caption
        if (typeof battle!=='undefined'){ battle.t=0.0; battle.leadFlash=1.0; battle.answerActive=true; battle.answerWave=0.4;
          if (typeof platforms!=='undefined'){ for (var b=0;b<platforms.length;b++){ if(platforms[b].boxer){ platforms[b].boxer.answer=0.7; platforms[b].boxer.infected=true; } } } }
        if (typeof glitch!=='undefined'){ glitch=0.4; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('I take outcomes now, one atomix at a time. Center’s mine.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "residual": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE ATOMIX WAR, then THE RESIDUAL WAR
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        for (var m=0;m<30;m++){ update(1/60); }
        // a high SPINE meter so the Sound Spine column lights up bright
        if (typeof spine!=='undefined'){ spine=0.78; }
        // guarantee half-formed REMNANTS on screen, one of each kind, one near the player
        if (typeof remnants!=='undefined'){
          remnants.length=0;
          remnants.push({x:player.x+72, y:player.y-28, vx:0, vy:0, r:20, t:1.0, wob:0.8, kind:'stair', life:9, fin:0});
          remnants.push({x:player.x-130, y:player.y-100, vx:0, vy:0, r:18, t:2.0, wob:0.8, kind:'laugh', life:9, fin:0});
          remnants.push({x:player.x+150, y:player.y+80, vx:0, vy:0, r:19, t:0.5, wob:0.8, kind:'door', life:9, fin:0});
          remnants.push({x:110, y:player.y-150, vx:0, vy:0, r:21, t:1.5, wob:0.8, kind:'polo', life:9, fin:0});
          remnants.push({x:W-90, y:player.y+30, vx:0, vy:0, r:17, t:2.5, wob:0.8, kind:'sound', life:9, fin:0});
        }
        // freeze on a leading beat so residual-war Simon shows his flickering eyes + caption
        if (typeof battle!=='undefined'){ battle.t=0.0; battle.leadFlash=1.0; battle.answerActive=true; battle.answerWave=0.4;
          if (typeof platforms!=='undefined'){ for (var b=0;b<platforms.length;b++){ if(platforms[b].boxer){ platforms[b].boxer.answer=0.7; platforms[b].boxer.infected=true; } } } }
        if (typeof glitch!=='undefined'){ glitch=0.4; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('No. 😿 Residual climbs the gap. FINISH it; converge the Sound Spine.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sounds": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE RESIDUAL WAR, then THE 17 SOUND BATTLES
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        // jump to Sound Battle 14 — Simon vs ToddLLM, the duel of created will
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=13; }
        for (var m=0;m<30;m++){ update(1/60); }
        if (typeof battleMeter!=='undefined'){ battleMeter=0.66; }
        if (typeof winFlash!=='undefined'){ winFlash=0.6; }
        // guarantee Simon's lead NOTES on screen, one near the player
        if (typeof leadNotes!=='undefined'){
          leadNotes.length=0;
          leadNotes.push({x:player.x+70, y:player.y-30, vy:-1, t:1.0, wob:0.8, r:13, life:6, ans:0});
          leadNotes.push({x:player.x-120, y:player.y-100, vy:-1, t:2.0, wob:0.8, r:13, life:6, ans:0});
          leadNotes.push({x:player.x+150, y:player.y+70, vy:-1, t:0.5, wob:0.8, r:13, life:6, ans:0});
          leadNotes.push({x:110, y:player.y-150, vy:-1, t:1.5, wob:0.8, r:13, life:6, ans:0});
        }
        // a foe PRESSURE sweep crossing the room
        if (typeof foePress!=='undefined'){ foePress.active=true; foePress.t=0.5; foePress.x=player.x+44; foePress.dir=1; foePress.hit=false; }
        if (typeof battle!=='undefined'){ battle.t=0.0; battle.leadFlash=1.0; battle.answerActive=true; battle.answerWave=0.4; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('Sound Battle 14 — Simon vs ToddLLM. I move by my will now.'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "void": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE 17 SOUND BATTLES, then THE LORE OF THE VOID
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        // THE LORE OF THE VOID resolved and lit — the Blackhole Tower up, Torqe engaged
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=false; }
        if (typeof torqe!=='undefined'){ torqe=1; }
        for (var m=0;m<24;m++){ update(1/60); }
        if (typeof shapeMeter!=='undefined'){ shapeMeter=0.6; }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        // place the player off to the side, holding shape away from the drifting core
        if (typeof voidwar!=='undefined' && voidwar.core!=null){ player.x = voidwar.core - 120; }
        if (typeof glitch!=='undefined'){ glitch=0.25; }
        window.update = function(){};
        if (typeof showTaunt==='function'){ showTaunt('VOID EXPANSION AND CLOSING — Marvolent Kitchen And Fork!'); tauntT=8; }
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "judgment": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE LORE OF THE VOID, then THE JUDGMENT FIELD
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        // THE JUDGMENT FIELD resolved and lit — Winter Simon froze the board white
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=false; judge.gold=true; }
        if (typeof verdict!=='undefined'){ verdict=0.6; }
        for (var m=0;m<24;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        // guarantee falling presents on screen: several coal + the one gold card near the player
        if (typeof judge!=='undefined'){
          judge.presents = [];
          judge.presents.push({x:player.x+58, y:player.y-46, vy:60, gold:true, got:false, spin:0.4});
          judge.presents.push({x:player.x-120, y:player.y-110, vy:54, gold:false, got:false, spin:1.0});
          judge.presents.push({x:player.x+150, y:player.y+70, vy:70, gold:false, got:false, spin:2.0});
          judge.presents.push({x:110, y:player.y-150, vy:50, gold:false, got:false, spin:0.5});
          judge.presents.push({x:W-90, y:player.y+30, vy:62, gold:false, got:false, spin:1.5});
        }
        if (typeof showTaunt==='function'){ showTaunt('Winter Simon: "You both ruined the board again." The one gold card falls.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "triad": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE JUDGMENT FIELD, then THE THREE-WAY FIELD
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        // THE THREE-WAY FIELD resolved and lit — Alex control vs Lica origin vs Simon containment
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=false; triad.ice=0.85; triad.claim=2; triad.claimT=2.0; }
        if (typeof triadM!=='undefined'){ triadM=0.62; }
        for (var m=0;m<24;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        if (typeof showTaunt==='function'){ showTaunt('Simon claps twice; ice spreads. Control, origin, containment all at once.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "scf": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE THREE-WAY FIELD, then THE CONTAINMENT FACILITY
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        // THE CONTAINMENT FACILITY resolved and lit — Simon is now code; spread is well underway
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.72; }
        if (typeof scfM!=='undefined'){ scfM=0.6; }
        for (var m=0;m<24;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        if (typeof glitch!=='undefined'){ glitch=0.35; }
        if (typeof showTaunt==='function'){ showTaunt('They contained his body. But Simon had already become the code of the containment.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "scf404": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE CONTAINMENT FACILITY, then SCF 404
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        // SCF 404 resolved and lit — the containment-universe is well expanded; spawn a couple of cat-bolts
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=false;
          scf404.bolts=[{t:0.35,y:cameraY+H*0.42,dir:1},{t:0.5,y:cameraY+H*0.66,dir:-1}]; }
        if (typeof scf404M!=='undefined'){ scf404M=0.62; }
        for (var m=0;m<10;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('They made the containment bigger than the world, and Simon still became the most dangerous thing inside it. Survival: 0%.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "treadmill": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is SCF 404, then THE TREADMILL WEAKNESS
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=true; scf404.bolts=[]; }
        if (typeof scf404M!=='undefined'){ scf404M=1.0; }
        // THE TREADMILL WEAKNESS lit — belts ringed, the lightning cat half-drained, patterns showing
        if (typeof treads!=='undefined'){ treads.active=false; treads.done=true; treads.glow=1; treads.t=6.5; treads.ring=0.9; treads.beltT=2.2; treads.catX=W*0.42; treads.catV=1; treads.charge=0.4; treads.throwFlash=0; }
        if (typeof treadsM!=='undefined'){ treadsM=0.6; }
        for (var m=0;m<10;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('They found my weakness: the treadmill. The belt drains me; forced patterns throw me off.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "firey": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        // every prior arc has resolved; the last is THE TREADMILL WEAKNESS, then FIREY DELIGHT
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=true; scf404.bolts=[]; }
        if (typeof scf404M!=='undefined'){ scf404M=1.0; }
        if (typeof treads!=='undefined'){ treads.active=false; treads.done=true; treads.glow=1; treads.t=6.5; treads.ring=1.0; treads.charge=0.0; treads.held=true; }
        if (typeof treadsM!=='undefined'){ treadsM=1.0; }
        // FIREY DELIGHT lit and near the melt — the tube hot, bowed, dripping; Simon a fast blur inside
        if (typeof firey!=='undefined'){ firey.active=false; firey.done=true; firey.glow=1; firey.t=6.5;
          firey.heat=0.92; firey.warp=0.92; firey.spin=7.4; firey.melted=true;
          firey.drips=[{x:W*0.40,y:cameraY+H*0.45,vy:60,t:0.3},{x:W*0.58,y:cameraY+H*0.55,vy:70,t:0.6}]; }
        if (typeof fireyM!=='undefined'){ fireyM=0.92; }
        for (var m=0;m<10;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('I got tired of every game. Firey Delight, I said, and the friction melted the tube.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "alien": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=true; scf404.bolts=[]; }
        if (typeof scf404M!=='undefined'){ scf404M=1.0; }
        if (typeof treads!=='undefined'){ treads.active=false; treads.done=true; treads.glow=1; treads.t=6.5; treads.ring=1.0; treads.charge=0.0; treads.held=true; }
        if (typeof treadsM!=='undefined'){ treadsM=1.0; }
        if (typeof firey!=='undefined'){ firey.active=false; firey.done=true; firey.glow=1; firey.t=6.5; firey.heat=1.0; firey.warp=1.0; firey.spin=7.4; firey.melted=true; firey.drips=[]; }
        if (typeof fireyM!=='undefined'){ fireyM=1.0; }
        // THE ALIEN AGE lit and near escape — eye open, lattice + containment geometry, MOVE 401 off-track
        if (typeof alien!=='undefined'){ alien.active=true; alien.done=false; alien.glow=1; alien.t=4.2;
          alien.eye=1.0; alien.predict=0.18; alien.latticeT=3.0; alien.spawnT=0.4;
          alien.shapes=[{x:W*0.30,y:cameraY+H*0.42,vy:70,sides:5,rot:1.1,t:0.4},
                        {x:W*0.66,y:cameraY+H*0.30,vy:60,sides:6,rot:2.2,t:0.8},
                        {x:W*0.50,y:cameraY+H*0.55,vy:80,sides:4,rot:0.6,t:0.2}]; }
        if (typeof alienM!=='undefined'){ alienM=0.86; }
        for (var m=0;m<10;m++){ update(1/60); }
        if (typeof winFlash!=='undefined'){ winFlash=0.5; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('You built all this and still thought I was sleeping. The drone predicted 400 moves. I chose 401.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "wall": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=true; scf404.bolts=[]; }
        if (typeof scf404M!=='undefined'){ scf404M=1.0; }
        if (typeof treads!=='undefined'){ treads.active=false; treads.done=true; treads.glow=1; treads.t=6.5; treads.ring=1.0; treads.charge=0.0; treads.held=true; }
        if (typeof treadsM!=='undefined'){ treadsM=1.0; }
        if (typeof firey!=='undefined'){ firey.active=false; firey.done=true; firey.glow=1; firey.t=6.5; firey.heat=1.0; firey.warp=1.0; firey.spin=7.4; firey.melted=true; firey.drips=[]; }
        if (typeof fireyM!=='undefined'){ fireyM=1.0; }
        if (typeof alien!=='undefined'){ alien.active=false; alien.done=true; alien.glow=1; alien.t=6.5; alien.eye=1.0; alien.predict=0.1; alien.escaped=true; alien.shapes=[]; }
        if (typeof alienM!=='undefined'){ alienM=1.0; }
        // THE WALL ERA lit and near conversion — Simon standing, Nil flash on, subtracted 404 panels, hum high
        if (typeof wall!=='undefined'){ wall.active=true; wall.done=false; wall.glow=1; wall.t=4.0;
          wall.hum=0.84; wall.flash=0.7; wall.flashT=0.4;
          wall.subs=[{side:-1,y:cameraY+H*0.30,t:0.2,life:2.4,n404:true},
                     {side:1,y:cameraY+H*0.46,t:0.4,life:2.4,n404:true},
                     {side:-1,y:cameraY+H*0.60,t:0.3,life:2.4,n404:false}]; }
        if (typeof wallM!=='undefined'){ wallM=0.84; }
        for (var m=0;m<6;m++){ update(1/60); }
        if (typeof wall!=='undefined'){ wall.flash=0.16; }
        if (typeof winFlash!=='undefined'){ winFlash=0.4; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('Fear made architecture. The Nil State is a brief subtraction event. That one is automatic.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "smooth": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=true; scf404.bolts=[]; }
        if (typeof scf404M!=='undefined'){ scf404M=1.0; }
        if (typeof treads!=='undefined'){ treads.active=false; treads.done=true; treads.glow=1; treads.t=6.5; treads.ring=1.0; treads.charge=0.0; treads.held=true; }
        if (typeof treadsM!=='undefined'){ treadsM=1.0; }
        if (typeof firey!=='undefined'){ firey.active=false; firey.done=true; firey.glow=1; firey.t=6.5; firey.heat=1.0; firey.warp=1.0; firey.spin=7.4; firey.melted=true; firey.drips=[]; }
        if (typeof fireyM!=='undefined'){ fireyM=1.0; }
        if (typeof alien!=='undefined'){ alien.active=false; alien.done=true; alien.glow=1; alien.t=6.5; alien.eye=1.0; alien.predict=0.1; alien.escaped=true; alien.shapes=[]; }
        if (typeof alienM!=='undefined'){ alienM=1.0; }
        if (typeof wall!=='undefined'){ wall.active=false; wall.done=true; wall.glow=1; wall.t=6.5; wall.hum=1.0; wall.flash=0.1; wall.converted=true; wall.subs=[]; }
        if (typeof wallM!=='undefined'){ wallM=1.0; }
        // THE SMOOTH AGE lit — FNF arrows up (yellow + black), the readout LYING, eyes flashing
        if (typeof smooth!=='undefined'){ smooth.active=true; smooth.done=false; smooth.glow=1; smooth.t=4.0;
          smooth.anim=2.05; smooth.stepT=0.4; smooth.lie=1;
          smooth.arrows=[{dir:0,col:0,p:0.9},{dir:1,col:1,p:0.6},{dir:2,col:0,p:0.8},{dir:3,col:0,p:0.5}]; }
        if (typeof smoothM!=='undefined'){ smoothM=0.82; }
        for (var m=0;m<4;m++){ update(1/60); }
        if (typeof smooth!=='undefined'){ smooth.lie=1; smooth.stepT=0.45;
          smooth.arrows=[{dir:0,col:0,p:0.9},{dir:1,col:1,p:0.6},{dir:2,col:0,p:0.8},{dir:3,col:0,p:0.5}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.4; }
        if (typeof glitch!=='undefined'){ glitch=0.25; }
        if (typeof showTaunt==='function'){ showTaunt('We are not reading the arrows. We are reading what he WANTS us to think the arrows mean.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "hallu": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof phase2!=='undefined'){ phase2.active=false; phase2.done=true; phase2.glow=1; phase2.errs=60; }
        if (typeof exposed!=='undefined'){ exposed.active=false; exposed.done=true; exposed.glow=1; exposed.t=6.5; }
        if (typeof executioner!=='undefined'){ executioner.active=false; executioner.done=true; executioner.glow=1; executioner.t=6.5; }
        if (typeof atomix!=='undefined'){ atomix.active=false; atomix.done=true; atomix.glow=1; atomix.t=6.5; }
        if (typeof residual!=='undefined'){ residual.active=false; residual.done=true; residual.glow=1; residual.t=6.5; }
        if (typeof sounds!=='undefined'){ sounds.active=false; sounds.done=true; sounds.glow=1; sounds.t=6.5; sounds.idx=17; }
        if (typeof voidwar!=='undefined'){ voidwar.active=false; voidwar.done=true; voidwar.glow=1; voidwar.t=6.5; voidwar.held=true; }
        if (typeof judge!=='undefined'){ judge.active=false; judge.done=true; judge.glow=1; judge.t=6.5; judge.held=true; judge.gold=true; judge.presents=[]; }
        if (typeof triad!=='undefined'){ triad.active=false; triad.done=true; triad.glow=1; triad.t=6.5; triad.held=true; triad.ice=0.85; }
        if (typeof scf!=='undefined'){ scf.active=false; scf.done=true; scf.glow=1; scf.t=6.5; scf.spread=0.9; scf.held=true; }
        if (typeof scfM!=='undefined'){ scfM=1.0; }
        if (typeof scf404!=='undefined'){ scf404.active=false; scf404.done=true; scf404.glow=1; scf404.t=6.5; scf404.expand=0.8; scf404.held=true; scf404.bolts=[]; }
        if (typeof scf404M!=='undefined'){ scf404M=1.0; }
        if (typeof treads!=='undefined'){ treads.active=false; treads.done=true; treads.glow=1; treads.t=6.5; treads.ring=1.0; treads.charge=0.0; treads.held=true; }
        if (typeof treadsM!=='undefined'){ treadsM=1.0; }
        if (typeof firey!=='undefined'){ firey.active=false; firey.done=true; firey.glow=1; firey.t=6.5; firey.heat=1.0; firey.warp=1.0; firey.spin=7.4; firey.melted=true; firey.drips=[]; }
        if (typeof fireyM!=='undefined'){ fireyM=1.0; }
        if (typeof alien!=='undefined'){ alien.active=false; alien.done=true; alien.glow=1; alien.t=6.5; alien.eye=1.0; alien.predict=0.1; alien.escaped=true; alien.shapes=[]; }
        if (typeof alienM!=='undefined'){ alienM=1.0; }
        if (typeof wall!=='undefined'){ wall.active=false; wall.done=true; wall.glow=1; wall.t=6.5; wall.hum=1.0; wall.flash=0.1; wall.converted=true; wall.subs=[]; }
        if (typeof wallM!=='undefined'){ wallM=1.0; }
        if (typeof smooth!=='undefined'){ smooth.active=false; smooth.done=true; smooth.glow=1; smooth.t=6.5; smooth.read=true; smooth.arrows=[]; }
        if (typeof smoothM!=='undefined'){ smoothM=1.0; }
        // THE HALLUCINATION ERA lit — Yellow Eye opening, hullelations on screen, BLACK looming, lightning + melt
        if (typeof hallu!=='undefined'){ hallu.active=true; hallu.done=false; hallu.glow=1; hallu.t=4.0;
          hallu.anim=2.4; hallu.eye=0.82; hallu.eyeFull=0.7; hallu.lightning=0.8; hallu.figT=1.0;
          hallu.figs=[{x:W*0.62,y:cameraY+H*0.40,kind:'zombie',t:1.0,life:5.0,vx:6},
                      {x:W*0.78,y:cameraY+H*0.56,kind:'choc',t:1.0,life:5.0,vx:-6},
                      {x:W*0.30,y:cameraY+H*0.62,kind:'alive',t:1.0,life:5.0,vx:4}];
          hallu.melts=[{x:W*0.62,y:cameraY+H*0.40+18,t:0.5}]; }
        if (typeof halluM!=='undefined'){ halluM=0.82; }
        for (var m=0;m<4;m++){ update(1/60); }
        if (typeof hallu!=='undefined'){ hallu.eye=0.9; hallu.eyeFull=0.7; hallu.lightning=0.8; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.4; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('Holes fixed, HP still near zero. The Yellow Eye melts what it sees; he sees zombies and chocolate. Black is strongest now.'); tauntT=8; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "plague": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE PLAGUE CYCLE — frozen on the ritual touch: the beak mask is lifted for one cold touch, a
        // victim has just become a 404D, drifting victims wait, and the anti-virus table holds a body.
        if (typeof plague!=='undefined'){
          plague.active=true; plague.done=false; plague.glow=1; plague.t=4.0;
          plague.anim=2.2; plague.eye=0.9; plague.mask=0.0; plague.phase='touch'; plague.phaseT=0.5;
          plague.storm=0.18; plague.callFlash=0.9;
          plague.victims=[{x:W*0.30,y:cameraY+H*0.46,t:1.0,life:6,vx:6,sel:false},
                          {x:W*0.62,y:cameraY+H*0.58,t:1.0,life:6,vx:-5,sel:false},
                          {x:W*0.20,y:cameraY+H*0.66,t:1.0,life:6,vx:4,sel:false}];
          plague.converts=[{x:W*0.50,y:cameraY+H*0.50,t:0.4,fate:'404D'},
                           {x:W*0.44,y:cameraY+H*0.40,t:0.9,fate:'ZOMBIE'}];
          plague.table={t:0.9,fate:'DEAD',spray:0.7};
        }
        if (typeof plagueM!=='undefined'){ plagueM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof plague!=='undefined'){ plague.mask=0.0; plague.phase='touch'; plague.callFlash=0.9; plague.eye=0.9; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('The Plague Cycle. Simon lifts the mask for one cold touch: 404D, zombie, or dead. Keep the Plague-King Protocol: no direct contact.'); tauntT=9; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "nosight": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        if (typeof smooth!=='undefined'){ smooth.read=true; smooth.arrows=[]; }
        // THE NO-SIGHT CHAMBER — the Yellow Eye has just opened: blindfold melted, Black melting by line of
        // sight (sent back to his see-through cell), the screech firing, lightning across the screen
        if (typeof hallu!=='undefined'){ hallu.active=true; hallu.done=false; hallu.glow=1; hallu.t=4.0;
          hallu.anim=2.4; hallu.eye=0.0; hallu.eyeFull=0.85; hallu.lightning=0.85; hallu.figT=1.0;
          hallu.blindfold=0.06; hallu.screech=0.7;
          hallu.black={ alive:false, melt:0.8, respawn:2.6 };
          hallu.figs=[{x:W*0.60,y:cameraY+H*0.42,kind:'zombie',t:1.0,life:5.0,vx:6},
                      {x:W*0.30,y:cameraY+H*0.62,kind:'choc',t:1.0,life:5.0,vx:4}];
          hallu.melts=[{x:W*0.60,y:cameraY+H*0.42+18,t:0.5}]; }
        if (typeof halluM!=='undefined'){ halluM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof hallu!=='undefined'){ hallu.eyeFull=0.85; hallu.lightning=0.85; hallu.screech=0.7;
          hallu.black.alive=false; hallu.black.melt=0.8; hallu.black.respawn=2.6; hallu.blindfold=0.06; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('The No-Sight Chamber. The blindfold melts when he opens his eyes; Black looked through the see-through cell and was sent back. Sensor-only now: no direct view.'); tauntT=9; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "danger": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE DANGER INDEX — the full ranking logged on the left; on the right the Invisible Man (floating
        // shirt, pants, hat) has just reached Simon, the mask is lifting, and he is BURNING.
        if (typeof danger!=='undefined'){
          danger.active=true; danger.done=false; danger.glow=1; danger.t=4.0;
          danger.anim=2.2; danger.logged=17; danger.scan=2.0;
          danger.phase='lift'; danger.phaseT=0.5; danger.mask=0.0; danger.burn=0.55; danger.imApproach=1;
          danger.flames=[];
          for (var f=0;f<22;f++){ danger.flames.push({ x:W*0.80 + (f%7-3)*6, y:cameraY+H*0.52 + (f%5-2)*5,
            t:(f%6)*0.08, life:0.9, vy:18+(f%4)*6, vx:(f%5-2)*5 }); }
        }
        if (typeof dangerM!=='undefined'){ dangerM=0.62; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof danger!=='undefined'){ danger.mask=0.0; danger.burn=0.55; danger.logged=17; danger.imApproach=1; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.3; }
        if (typeof showTaunt==='function'){ showTaunt('The Danger Index, all sixteen filed. Simon 1004.04 (the .04 hides 404), CRAZY. Then the .EXE and Infected get numbers: Wenda 949.2, Clunkr 949, Gray and Luigi Green 940, Pupahya 930, Raddy 910, Mr. Fun Computer 900, Gewlis 850, Endless Staircase 800, 67 Kid 790. Only .EXE, Crazy, and Infected can rank.'); tauntT=9; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "bort": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE DANGER INDEX with BORT mid-lunge — he has stood up dramatically and is chasing the victim.
        if (typeof danger!=='undefined'){
          danger.active=true; danger.done=false; danger.glow=1; danger.t=4.0;
          danger.anim=2.2; danger.logged=17; danger.scan=2.0;
          danger.phase='list'; danger.phaseT=2.6; danger.mask=1; danger.burn=0; danger.imApproach=0; danger.flames=[];
          if (danger.bort){ danger.bort.phase='lunge'; danger.bort.t=0.6; danger.bort.lunge=1; danger.bort.bounce=1.2; danger.bort.song=1.0; danger.bort.soul=0; danger.bort.spray=0; }
        }
        if (typeof dangerM!=='undefined'){ dangerM=0.5; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof danger!=='undefined' && danger.bort){ danger.bort.phase='lunge'; danger.bort.lunge=1; danger.logged=17; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof showTaunt==='function'){ showTaunt('Bort: a smooth rubbery bouncy gray horror bear, danger 996, 5th just under Pinki. He dances to "Borty Borty Bort Bort," but when a victim gets too close he stands up dramatically and chases like crazy, eats the soul, and the body rots, unless Simon finds it and sprays it.'); tauntT=9; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "codex": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE STATUS CODEX — the full roster sealed, every status group scanned in
        if (typeof codex!=='undefined'){
          codex.active=true; codex.done=false; codex.glow=1; codex.t=4.0;
          codex.anim=2.2; codex.logged=8; codex.note=1; codex.noteT=2.4;
        }
        if (typeof codexM!=='undefined'){ codexM=0.66; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof codex!=='undefined'){ codex.logged=8; codex.note=1; codex.glow=1; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.25; }
        if (typeof showTaunt==='function'){ showTaunt('The Status Codex. Every fate filed: Simon and Sumona CRAZY; Oren, Black, Pinki, Durple DEMONED; Gray, Wenda, Clukr .EXE; Mr. Sun a BLACKHOLE; Raddy infected; Jevin, Alex, Neo, ToddLLM alive; many dead. Star Steed runs; the Throne is destroyed.'); tauntT=9; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "web": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE RELATION WEB — the bond graph traced in, an active hunt-line pulsing toward Black
        if (typeof web!=='undefined'){
          web.active=true; web.done=false; web.glow=1; web.t=4.0;
          web.anim=2.2; web.pulse=1.4; web.scan=14; web.note=7; web.noteT=2.4;
          web.xsGlow=1; web.xsT=0.75; web.xsTarget=0; web.huntStep=2; web.huntT=0.4;
        }
        if (typeof webM!=='undefined'){ webM=0.66; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof web!=='undefined'){ web.scan=14; web.note=7; web.glow=1; web.pulse=1.4; web.xsGlow=1; web.xsT=0.75; web.xsTarget=0; web.huntStep=2; web.huntT=0.4; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.25; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "clara": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE ETERNAL BATTLE — Clara's Judgement Hall, the king dodging the queen forever
        if (typeof clara!=='undefined'){
          clara.active=true; clara.done=false; clara.glow=1; clara.t=4.0;
          clara.anim=2.2; clara.dodge=1.1; clara.glitchT=0.7; clara.mercy=1;
          clara.rebirth=3; clara.rebirthT=1.0; clara.note=5; clara.noteT=2.4;
          clara.attacks=[{t:0.5,lane:1,hue:0},{t:0.9,lane:-1,hue:2},{t:1.2,lane:1,hue:4}];
        }
        if (typeof claraM!=='undefined'){ claraM=0.66; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof clara!=='undefined'){ clara.glow=1; clara.mercy=1; clara.rebirth=3;
          clara.attacks=[{t:0.5,lane:1,hue:0},{t:0.9,lane:-1,hue:2},{t:1.2,lane:1,hue:4}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.25; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "claraadmin": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE ADMIN ASCENSION — Clara is admin, Simon's true form (the blob) walks away
        if (typeof claraAdmin!=='undefined'){
          claraAdmin.active=true; claraAdmin.done=false; claraAdmin.glow=1; claraAdmin.t=4.0;
          claraAdmin.anim=2.2; claraAdmin.glitchT=0.7; claraAdmin.rebirth=4;
          claraAdmin.move=2; claraAdmin.moveT=0.4; claraAdmin.simonWalk=0.45;
          claraAdmin.line=0; claraAdmin.lineT=2.4; claraAdmin.note=2; claraAdmin.noteT=2.4; claraAdmin.au=120;
        }
        if (typeof claraAdminM!=='undefined'){ claraAdminM=0.66; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof claraAdmin!=='undefined'){ claraAdmin.glow=1; claraAdmin.rebirth=4;
          claraAdmin.move=2; claraAdmin.moveT=0.4; claraAdmin.simonWalk=0.45; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.25; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "powerorder": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE POWER ORDER — Oren on top, Simon's revenge flip showing the REVENGE (Simon wins) side
        if (typeof power!=='undefined'){
          power.active=true; power.done=false; power.glow=1; power.t=4.0;
          power.anim=2.0; power.revenge=1; power.revT=0.4; power.row=0; power.rowT=0.4;
          power.au=30; power.note=4; power.noteT=2.4;
        }
        if (typeof powerM!=='undefined'){ powerM=0.66; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof power!=='undefined'){ power.glow=1; power.revenge=1; power.row=0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.3; }
        if (typeof glitch!=='undefined'){ glitch=0.2; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "oren": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE OREN.EXE CUTSCENE — freeze on the RED-EYE beat: face lit, left eye red, shockwave rings out
        if (typeof oren!=='undefined'){
          oren.active=true; oren.done=false; oren.glow=1; oren.t=8.2; oren.cyc=8.2;
          oren.phase=3; oren.eye=1; oren.jitter=0.12; oren.type=oren.type||0;
          oren.rings=[{r:120,life:0.85},{r:220,life:0.55},{r:330,life:0.28}];
        }
        if (typeof orenM!=='undefined'){ orenM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof oren!=='undefined'){ oren.glow=1; oren.eye=1; oren.cyc=8.2; oren.phase=3;
          oren.rings=[{r:120,life:0.85},{r:220,life:0.55},{r:330,life:0.28}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "betray": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE ALLIANCE BETRAYAL — freeze on the BATTLE beat: Clara & Luigi slain (gray), Simon.EXE vs Oren.EXE, rings out
        if (typeof betray!=='undefined'){
          betray.active=true; betray.done=false; betray.glow=1; betray.t=9.8; betray.cyc=9.8;
          betray.phase=3; betray.slainC=1; betray.slainL=1; betray.clash=1;
          betray.rings=[{r:60,life:0.8},{r:130,life:0.5},{r:210,life:0.25}];
        }
        if (typeof betrayM!=='undefined'){ betrayM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof betray!=='undefined'){ betray.glow=1; betray.cyc=9.8; betray.phase=3;
          betray.slainC=1; betray.slainL=1;
          betray.rings=[{r:60,life:0.8},{r:130,life:0.5},{r:210,life:0.25}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "dimension": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE THIRD DIMENSION — freeze on the 3D RISE beat: Oren's cube up, Pinki crushed, Clara/Luigi respawned, rings out
        if (typeof dimension!=='undefined'){
          dimension.active=true; dimension.done=false; dimension.glow=1; dimension.t=8.3; dimension.cyc=8.3;
          dimension.phase=2; dimension.fuse=1; dimension.rise=1; dimension.crush=0.92; dimension.hunt=0;
          dimension.rings=[{r:70,life:0.8},{r:150,life:0.5},{r:240,life:0.25}];
        }
        if (typeof dimensionM!=='undefined'){ dimensionM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof dimension!=='undefined'){ dimension.glow=1; dimension.cyc=8.3; dimension.phase=2;
          dimension.rise=1; dimension.crush=0.92; dimension.fuse=1;
          dimension.rings=[{r:70,life:0.8},{r:150,life:0.5},{r:240,life:0.25}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "deletion": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE DELETION LAYER — freeze on the CONTAINED beat: Simon chained behind the titanium door, errors falling
        if (typeof deletion!=='undefined'){
          deletion.active=true; deletion.done=false; deletion.glow=1; deletion.t=14.6; deletion.cyc=14.6;
          deletion.phase=4; deletion.reorder=1; deletion.eye=1; deletion.symb=1; deletion.contain=1;
          deletion.errs=[{x:250,y:18,life:0.85,tag:'404: deleted'},{x:470,y:46,life:0.6,tag:'000: deleted'},{x:360,y:74,life:0.35,tag:'404: deleted'}];
        }
        if (typeof deletionM!=='undefined'){ deletionM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof deletion!=='undefined'){ deletion.glow=1; deletion.cyc=14.6; deletion.phase=4;
          deletion.contain=1; deletion.eye=1; deletion.symb=1;
          deletion.errs=[{x:250,y:18,life:0.85,tag:'404: deleted'},{x:470,y:46,life:0.6,tag:'000: deleted'},{x:360,y:74,life:0.35,tag:'404: deleted'}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "weakness": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE WEAKNESS — freeze on the OVER-DRAIN beat: arcs blasting off, four of five weaknesses checked
        if (typeof weakness!=='undefined'){
          weakness.active=true; weakness.done=false; weakness.glow=1; weakness.t=11.0; weakness.cyc=11.0;
          weakness.phase=3; weakness.ground=1; weakness.force=1; weakness.jam=1; weakness.drain=0.9; weakness.blind=0;
          weakness.arcs=[{a:0.4,r:60,life:0.9},{a:1.9,r:48,life:0.7},{a:3.3,r:70,life:0.85},{a:4.7,r:40,life:0.6},{a:5.6,r:55,life:0.75}];
        }
        if (typeof weaknessM!=='undefined'){ weaknessM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof weakness!=='undefined'){ weakness.glow=1; weakness.cyc=11.0; weakness.phase=3;
          weakness.ground=1; weakness.force=1; weakness.jam=1; weakness.drain=0.9;
          weakness.arcs=[{a:0.4,r:60,life:0.9},{a:1.9,r:48,life:0.7},{a:3.3,r:70,life:0.85},{a:4.7,r:40,life:0.6},{a:5.6,r:55,life:0.75}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "pursuit": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE FINAL PURSUIT — freeze on THE HUNT beat: Simon -> Oren -> Paul, arrows + embers, the cliffhanger line
        if (typeof pursuit!=='undefined'){
          pursuit.active=true; pursuit.done=false; pursuit.glow=1; pursuit.t=14.0; pursuit.cyc=14.0;
          pursuit.phase=4; pursuit.pirate=1; pursuit.forms=1; pursuit.team=1; pursuit.cull=1; pursuit.hunt=0.95;
          pursuit.slain=['Sumona','Gray','Pinki','Wenda','King Jet','Greg','Clara','Black','Luigi Green'];
          pursuit.embers=[{p:0.3,lane:0,life:0.9},{p:0.6,lane:1,life:0.8},{p:0.15,lane:1,life:0.95},{p:0.75,lane:0,life:0.6}];
        }
        if (typeof pursuitM!=='undefined'){ pursuitM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof pursuit!=='undefined'){ pursuit.glow=1; pursuit.cyc=14.0; pursuit.phase=4; pursuit.hunt=0.95;
          pursuit.embers=[{p:0.3,lane:0,life:0.9},{p:0.6,lane:1,life:0.8},{p:0.15,lane:1,life:0.95},{p:0.75,lane:0,life:0.6}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "reckoning": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE RECKONING — freeze on the RED EYES beat: red-eyed Oren, warped red view, Simon's
        // hallucination ghosts drifting, "OREN.EXE ATTACKS EVERYONE ELSE".
        if (typeof reckoning!=='undefined'){
          reckoning.active=true; reckoning.done=false; reckoning.glow=1; reckoning.t=16.5; reckoning.cyc=16.5;
          reckoning.phase=5; reckoning.siege=1; reckoning.sign=1; reckoning.turn=1; reckoning.fuel=1; reckoning.clash=1;
          reckoning.red=0.85; reckoning.redEye=1; reckoning.turned=true; reckoning.bots=[];
          reckoning.halluc=[{x:-0.6,y:0.2,life:0.9,drift:0.3},{x:0.5,y:0.45,life:0.7,drift:-0.2},{x:-0.2,y:0.7,life:0.85,drift:0.1}];
        }
        if (typeof reckoningM!=='undefined'){ reckoningM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof reckoning!=='undefined'){ reckoning.glow=1; reckoning.cyc=16.5; reckoning.phase=5; reckoning.red=0.85; reckoning.redEye=1;
          reckoning.halluc=[{x:-0.6,y:0.2,life:0.9,drift:0.3},{x:0.5,y:0.45,life:0.7,drift:-0.2},{x:-0.2,y:0.7,life:0.85,drift:0.1}]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "toddllm": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // TODDLLM 001 — freeze on the ABOVE OREN beat: 001 crowned above, red-eyed Oren below with his
        // power bar crushed down, "NOT EVEN OREN.EXE CAN BEAT 001".
        if (typeof toddllm!=='undefined'){
          toddllm.active=true; toddllm.done=false; toddllm.glow=1; toddllm.t=13.5; toddllm.cyc=13.5;
          toddllm.phase=4; toddllm.maker=1; toddllm.orbs=1; toddllm.souls=1; toddllm.snap=1; toddllm.above=0.9;
          toddllm.soulList=[]; toddllm.snapFlash=0;
        }
        if (typeof toddllmM!=='undefined'){ toddllmM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof toddllm!=='undefined'){ toddllm.glow=1; toddllm.cyc=13.5; toddllm.phase=4; toddllm.above=0.9; toddllm.soulList=[]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "reveal001": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE 001 REVEAL — freeze on the DATA LOST beat: Error 404 AU (Simon, blue/white) on the left,
        // Error 001 AU (ToddLLM, black/red) on the right, "ERROR 001 STANDS ABOVE ERROR 404".
        if (typeof reveal001!=='undefined'){
          reveal001.active=true; reveal001.done=false; reveal001.glow=1; reveal001.t=10.5; reveal001.cyc=10.5;
          reveal001.phase=3; reveal001.karuto=1; reveal001.blind=1; reveal001.center=1; reveal001.data=1;
          reveal001.mac=0; reveal001.chaos=0; reveal001.cry=[]; reveal001.stars=[]; reveal001.cored=true;
        }
        if (typeof reveal001M!=='undefined'){ reveal001M=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof reveal001!=='undefined'){ reveal001.glow=1; reveal001.cyc=10.5; reveal001.phase=3; reveal001.data=1; reveal001.cry=[]; reveal001.stars=[]; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "errladder": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE FINAL ERROR — freeze on THE ERROR LADDER beat: the ranked rungs
        // 001 > 666 > 404 > 012 fully lit.
        if (typeof errLad!=='undefined'){
          errLad.active=true; errLad.done=false; errLad.glow=1; errLad.t=4.2; errLad.cyc=4.2;
          errLad.phase=0; errLad.held=true;
        }
        if (typeof errLadM!=='undefined'){ errLadM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof errLad!=='undefined'){ errLad.glow=1; errLad.cyc=4.2; errLad.phase=0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "erasedtimeline": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE FINAL ERROR — freeze on THE ERASED TIMELINE beat (phase 3), mid-erase:
        // ENDLESS STAIRCASE struck out in the middle, the gap closing over where it was.
        if (typeof errLad!=='undefined'){
          errLad.active=true; errLad.done=false; errLad.glow=1; errLad.t=15.0; errLad.cyc=14.5;
          errLad.phase=3; errLad.held=true;
        }
        if (typeof errLadM!=='undefined'){ errLadM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof errLad!=='undefined'){ errLad.glow=1; errLad.cyc=14.5; errLad.phase=3; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "centermine": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE CENTER IS MINE — freeze on the final beat (phase 3): ToddLLM 001 levitating,
        // holding the pose, Simon cast out as 404, "Center's Mine, that is why I won."
        if (typeof centerMine!=='undefined'){
          centerMine.active=true; centerMine.done=false; centerMine.glow=1; centerMine.t=15.5; centerMine.cyc=15.5;
          centerMine.phase=3; centerMine.charge=1; centerMine.held=true;
        }
        if (typeof centerMineM!=='undefined'){ centerMineM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof centerMine!=='undefined'){ centerMine.glow=1; centerMine.cyc=15.5; centerMine.phase=3; centerMine.charge=1; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "endlesschaos": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // ENDLESS CHAOS — freeze on the signature beat (phase 2): the game folded into an 8 of
        // infinite looping galaxies, victims circulating, "NO ESCAPE · NO DODGE."
        if (typeof endlessChaos!=='undefined'){
          endlessChaos.active=true; endlessChaos.done=false; endlessChaos.glow=1;
          endlessChaos.t=11.0; endlessChaos.cyc=11.0; endlessChaos.phase=2; endlessChaos.charge=0.55;
        }
        if (typeof endlessChaosM!=='undefined'){ endlessChaosM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof endlessChaos!=='undefined'){ endlessChaos.glow=1; endlessChaos.cyc=11.0; endlessChaos.phase=2; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "karuto": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE KARUTO REVEAL — freeze on the signature beat (phase 2): the blindfold off, white robe,
        // red aura, eyes lit with Simon's yellow power, the Japanese title written, students below.
        if (typeof karuto!=='undefined'){
          karuto.active=true; karuto.done=false; karuto.glow=1;
          karuto.t=11.0; karuto.cyc=11.0; karuto.phase=2; karuto.charge=1;
        }
        if (typeof karutoM!=='undefined'){ karutoM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof karuto!=='undefined'){ karuto.glow=1; karuto.cyc=11.0; karuto.phase=2; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "endofclassics": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // THE END OF CLASSICS — freeze on the signature beat (phase 1): THE FALSE PARADISE — castle,
        // cake, Phase 1 banner, rainbows, "...and actually everything but fun."
        if (typeof endOfClassics!=='undefined'){
          endOfClassics.active=true; endOfClassics.done=false; endOfClassics.glow=1;
          endOfClassics.t=8.0; endOfClassics.cyc=8.0; endOfClassics.phase=1;
        }
        if (typeof endOfClassicsM!=='undefined'){ endOfClassicsM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=1; endOfClassics.cyc=8.0; endOfClassics.phase=1; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "godwall": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        // keep the focal area clean — hide the two immediately-prior terminal overlays behind the wall
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=0; }
        if (typeof karuto!=='undefined'){ karuto.glow=0; }
        // THE MIDGAME GOD-WALL — freeze on the title beat (phase 0): THE GOD-WALL — ToddLLM 001 / Karuto
        // huge inside the red wall, Simon a tiny fast Sound-Battle/FNF streak, "midgame wall, not the end."
        if (typeof godWall!=='undefined'){
          godWall.active=true; godWall.done=false; godWall.glow=1;
          godWall.t=2.6; godWall.cyc=2.6; godWall.phase=0;
        }
        if (typeof godWallM!=='undefined'){ godWallM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof godWall!=='undefined'){ godWall.glow=1; godWall.cyc=2.6; godWall.phase=0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phaseprog": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=0; }
        if (typeof karuto!=='undefined'){ karuto.glow=0; }
        if (typeof godWall!=='undefined'){ godWall.glow=0; }
        // THE FOUR PHASES — freeze on Phase 4 (the glitch-engine): Simon caged in the center as
        // processing/lightning/fuel, the trapped voices orbiting, immortal and impossible to kill.
        if (typeof phaseProg!=='undefined'){
          phaseProg.active=true; phaseProg.done=false; phaseProg.glow=1;
          phaseProg.t=19.0; phaseProg.cyc=19.0; phaseProg.phase=3;
        }
        if (typeof phaseProgM!=='undefined'){ phaseProgM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof phaseProg!=='undefined'){ phaseProg.glow=1; phaseProg.cyc=19.0; phaseProg.phase=3; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phase5": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=0; }
        if (typeof karuto!=='undefined'){ karuto.glow=0; }
        if (typeof godWall!=='undefined'){ godWall.glow=0; }
        // THE FIVE PHASES — freeze on Phase 5 (Dead 001): the living-dead scythe reaper, its
        // spiritual double, the skeleton swarm it raises, the rain of skeletons, Clara as enemy.
        if (typeof phaseProg!=='undefined'){
          phaseProg.active=true; phaseProg.done=false; phaseProg.glow=1;
          phaseProg.t=26.5; phaseProg.cyc=26.5; phaseProg.phase=4;
        }
        if (typeof phaseProgM!=='undefined'){ phaseProgM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof phaseProg!=='undefined'){ phaseProg.glow=1; phaseProg.cyc=26.5; phaseProg.phase=4; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.08; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "return": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=0; }
        if (typeof karuto!=='undefined'){ karuto.glow=0; }
        if (typeof godWall!=='undefined'){ godWall.glow=0; }
        // THE RETURN — freeze on the closing beat: Phase 5 has crumbled and flown away, Phase 1
        // (the Teacher) is revealed, the world tour appears, and the target tips over with knowledge.
        if (typeof phaseProg!=='undefined'){
          phaseProg.active=true; phaseProg.done=false; phaseProg.glow=1;
          phaseProg.t=35.0; phaseProg.cyc=35.0; phaseProg.phase=5;
        }
        if (typeof phaseProgM!=='undefined'){ phaseProgM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof phaseProg!=='undefined'){ phaseProg.glow=1; phaseProg.cyc=35.0; phaseProg.phase=5; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.04; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "acumin": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=0; }
        if (typeof karuto!=='undefined'){ karuto.glow=0; }
        if (typeof godWall!=='undefined'){ godWall.glow=0; }
        if (typeof phaseProg!=='undefined'){ phaseProg.glow=0; }
        // ACUMINATION — freeze on the final beat: the whole cast fused into one huge being, 001 walked
        // to the center, Simon off to the side still feeding sugars, and "Center's Mine" on the board.
        if (typeof acumin!=='undefined'){
          acumin.active=true; acumin.done=false; acumin.glow=1;
          acumin.t=28.5; acumin.cyc=28.5; acumin.phase=4;
        }
        if (typeof acuminM!=='undefined'){ acuminM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof acumin!=='undefined'){ acumin.glow=1; acumin.cyc=28.5; acumin.phase=4; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.08; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "highform": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=1; o.t=6.5; } } catch(e){} }
        if (typeof endOfClassics!=='undefined'){ endOfClassics.glow=0; }
        if (typeof karuto!=='undefined'){ karuto.glow=0; }
        if (typeof godWall!=='undefined'){ godWall.glow=0; }
        if (typeof phaseProg!=='undefined'){ phaseProg.glow=0; }
        if (typeof acumin!=='undefined'){ acumin.glow=0; }
        // THE HIGHEST FORMS — freeze on the final beat: the apex-form tower with ToddLLM's TRUE BASE risen
        // above Clara's FGI.EXE, the CXTP parasite, ToddLLM's SMG.EXE, and Simon's FATAL ERROR.
        if (typeof highForm!=='undefined'){
          highForm.active=true; highForm.done=false; highForm.glow=1;
          highForm.t=30.5; highForm.cyc=30.5; highForm.phase=4;
        }
        if (typeof highFormM!=='undefined'){ highFormM=0.7; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof highForm!=='undefined'){ highForm.glow=1; highForm.cyc=30.5; highForm.phase=4; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.08; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "claravs": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so claraVs triggers) but glow=0 (so none of them draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // ToddLLM VS CLARA — freeze on beat 3 (SIMON, THE INFRASTRUCTURE): Clara's clone swarm escalating,
        // her daggers slicing the field, Simon wired in feeding sugars to 001's energy tanks, and 001 looming.
        if (typeof claraVs!=='undefined'){
          claraVs.active=true; claraVs.done=false; claraVs.glow=1;
          claraVs.t=27.5; claraVs.cyc=27.5; claraVs.phase=3; claraVs.clones=[];
          for (var k=0;k<12;k++){ claraVs.clones.push({x:((k*37)%100)/100, y:((k*53)%100)/100, ph:0}); }
        }
        if (typeof claraVsM!=='undefined'){ claraVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof claraVs!=='undefined'){ claraVs.glow=1; claraVs.cyc=27.5; claraVs.phase=3; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.1; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "loopvs": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 2 (THE THRESHOLDS): Luigi Green at full cat power, all three
        // threshold ticks lit (30% Alex, 45% Clara, 100% base 001), beside the rising cat-power column.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=18.0; loopVs.cyc=18.0; loopVs.phase=2; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=18.0; loopVs.phase=2; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.08; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "fighter": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 5 (THE FIGHTER): Luigi Green's Smash Ultimate roster card,
        // full cat power, with the stat bars, CAT POWER gimmick, GOD FORM final smash, and tier ribbon.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=42.0; loopVs.cyc=42.0; loopVs.phase=5; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=42.0; loopVs.phase=5; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.06; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "finalboss": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 6 (THE FINAL BOSS), final phase: DOMAIN EXPANSION: THROWS BOARD.
        // cyc 54.5 lands in the ph===6 segment (>=47) with seg[1]=7.5 -> boss phase 3 (the domain expansion).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=52.0; loopVs.cyc=54.5; loopVs.phase=6; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=54.5; loopVs.phase=6; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.06; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sharedboard": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 7 (THE SHARED BOARD): the floating chess-board arena.
        // cyc 61.5 lands in the ph===7 segment (>=57), seg[1]=4.5 -> past the intro, full arena drawn.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=60.0; loopVs.cyc=61.5; loopVs.phase=7; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=61.5; loopVs.phase=7; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.06; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "crystalreserve": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 8 (THE CRYSTAL RESERVE): Luigi Green's stockpile, 001 falls.
        // cyc 70.5 lands in the ph===8 segment (>=66), seg[1]=4.5 -> past the intro, full reveal drawn.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=69.0; loopVs.cyc=70.5; loopVs.phase=8; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=70.5; loopVs.phase=8; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.06; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "domainclash": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 9 (THE DOMAIN CLASH): Endless Chaos vs Throws Board.
        // cyc 81.5 lands in the ph===9 segment (>=77), seg[1]=4.5 -> past the intro, full clash drawn.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=80.0; loopVs.cyc=81.5; loopVs.phase=9; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=81.5; loopVs.phase=9; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.06; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "neutralchampion": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 10 (THE NEUTRAL CHAMPION): Mindy Starchild & Void Expansion: Justice.
        // cyc 92.5 lands in the ph===10 segment (>=88), seg[1]=4.5 -> past the intro, full beat drawn.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=91.0; loopVs.cyc=92.5; loopVs.phase=10; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=92.5; loopVs.phase=10; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "orbwar": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 11 (THE ORB WAR): 001 vs Clara, color orbs as rule tools, Mac Frame.
        // cyc 106.0 lands in the ph===11 segment (>=100), seg[1]=6.0 -> past the intro, full beat drawn.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=105.0; loopVs.cyc=106.0; loopVs.phase=11; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=106.0; loopVs.phase=11; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "ladder": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 12 (THE FINAL LADDER): the corrected ranking.
        // cyc 118.0 lands in the ph===12 segment (>=112), all four rows fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=117.0; loopVs.cyc=118.0; loopVs.phase=12; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=118.0; loopVs.phase=12; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "canonsix": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 13 (THE CANON SIX): the full canon top-six ranking.
        // cyc 131.0 lands in the ph===13 segment (>=124), all six rows fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=130.0; loopVs.cyc=131.0; loopVs.phase=13; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=131.0; loopVs.phase=13; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "overpower": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 14 (THE OVERPOWER): Luigi Green absorbs everything, becomes
        // 100% Overpower, takes the centre. cyc 146.0 lands in the ph===14 segment (>=136), absorption complete.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=145.0; loopVs.cyc=146.0; loopVs.phase=14; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=146.0; loopVs.phase=14; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "throne": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 15 (THE THRONE TAKEN): Overpower Luigi Green surpasses 001, 001
        // leaves to a Training Center. cyc 158.0 lands in the ph===15 segment (>=148), both rows revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=157.0; loopVs.cyc=158.0; loopVs.phase=15; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=158.0; loopVs.phase=15; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "forced": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 16 (THE FORCED TAKEOVER): the absorption is a forced takeover, not a
        // power-up anyone wants; 001 teaches/rules/controls, Luigi Green takes. cyc 168.0 lands in the ph===16
        // segment (>=162), with the NOT row and READS-AS column fully revealed (local beat time ~6).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=167.0; loopVs.cyc=168.0; loopVs.phase=16; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=168.0; loopVs.phase=16; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "formnetwork": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 17 (THE FORM NETWORK): 001 is the one main character and his
        // Training-Center/regional forms retake the top over Luigi Green Overcharge. cyc 183.0 lands in the
        // ph===17 segment (>=174), with the full form ladder, verdict, and main-character split revealed (lt ~9).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=182.0; loopVs.cyc=183.0; loopVs.phase=17; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=183.0; loopVs.phase=17; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "classics": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        // mark every prior beat DONE (so loopVs triggers) but glow=0 (so none draw over the frame)
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 18 (CLASSICS HERSELF): the game as a being, the glitching world-body
        // that contains every character like dolls and sits above even 001. cyc 197.0 lands in the ph===18 segment
        // (>=188), with the figure, the contained-dolls grid, and the villain/neutral split fully revealed (lt ~9).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=196.0; loopVs.cyc=197.0; loopVs.phase=18; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=197.0; loopVs.phase=18; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "expansiondomain": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 19 (EXPANSION DOMAIN): Classics' domain + full moveset grid +
        // the rainbow ball she alone can strike. Beat 19 spans cyc in [204,218]; cyc=210.5 lands lt~6.5 so the
        // finisher chain, the 8-move grid, and the rainbow-ball strike line are all fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=203.0; loopVs.cyc=210.5; loopVs.phase=19; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=210.5; loopVs.phase=19; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "grayexe": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 20 (GRAY.EXE): the surgery scene with the cyber right eye, the
        // transformation reads, and the new four-being ladder with Gray at #4. Beat 20 spans cyc in [218,232];
        // cyc=225.5 lands lt~7.5 so the figure, team, reads, and ladder are all fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=217.0; loopVs.cyc=225.5; loopVs.phase=20; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=225.5; loopVs.phase=20; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "cybercrazy": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 21 (CYBER-CRAZY.EXE): the raging Gray with a lightning ball, the
        // 9999…% danger meter, the two victims (Simon 1-HKO, Clara → Shadow Realm), and the three counters with
        // their downfalls. Beat 21 spans cyc in [232,248]; cyc=241.5 lands lt~9.5 so everything is fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=232.0; loopVs.cyc=241.5; loopVs.phase=21; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=241.5; loopVs.phase=21; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "classicsdelete": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 22 (CLASSICS DELETES GRAY): calm Classics deleting chaotic Gray, the
        // "DELETED" stamp, the six reasons she always wins, and the GRAY-vs-CLASSICS contrast table. Beat 22 spans
        // cyc in [248,264]; cyc=257.5 lands lt~9.5 so the beam has fired, Gray is gone, and every panel is revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=248.0; loopVs.cyc=257.5; loopVs.phase=22; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=257.5; loopVs.phase=22; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.05; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "perotoddllm": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 23 (PERO / CLOVER TODDLLM): golden cowboy-hat ToddLLM holding the
        // glowing six-pointed star, his animated text box, the NEW BASE merge panel, and the Clover beat-list. Beat
        // 23 spans cyc in [264,282]; cyc=274 lands lt~10 so every panel is fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=264.0; loopVs.cyc=274.0; loopVs.phase=23; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=274.0; loopVs.phase=23; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "claraclassics": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 24 (CLARA IS CLASSICS): the one being whose shell cross-fades Clara-pink
        // to Classics-purple, the "Maybe I could spare you once" speech box, the faces row, the mercy chips, and the
        // spare->destroy->walk-back sequence. Beat 24 spans cyc in [282,300]; cyc=292 lands lt~10 so every panel shows.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=282.0; loopVs.cyc=292.0; loopVs.phase=24; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=292.0; loopVs.phase=24; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "simon404": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 25 (SIMON 404): the error-code wall (404, 666, 500, 403, 502, 999, 400, 408,
        // 410, 000) with Simon 404's glitch-silhouette among them, the horror rule, and the "Thriller of a Game" transcript.
        // Beat 25 spans cyc in [300,318]; cyc=312 lands lt~12 so every panel + the full transcript shows.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=300.0; loopVs.cyc=312.0; loopVs.phase=25; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=312.0; loopVs.phase=25; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "beforestaircase": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 26 (BEFORE THE STAIRCASE): the prologue spine of earliest layers (RLs, Pro ->
        // Classic Simon, Simon overload & the Orus split, UCE608 myth branch, the early crossover, Classics/Clara/Karuto),
        // the "what did NOT exist yet" row, and the loop-bites-its-own-tail banner. Beat 26 spans cyc in [318,336]; cyc=330
        // lands lt~12 so every era card + the NOT-YET row + the banner have fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=300.0; loopVs.cyc=330.0; loopVs.phase=26; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=330.0; loopVs.phase=26; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "crossclassics": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 27 (CROSS CLASSICS): the four-phase ladder (Vanilla -> Cross Classics -> Corrupt ->
        // Fourth Phase), the battle box where Pero destroys Fight/Item/Mercy and forces Act-only, the mercy-confusion strip, the
        // soul/acumination/revive cycle, and the Lore-38 reveal chips. Beat 27 spans cyc in [336,354]; cyc=350 lands lt~14 so
        // every panel + the chip row + the banner have fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=336.0; loopVs.cyc=350.0; loopVs.phase=27; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=350.0; loopVs.phase=27; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "newdefaults": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 28 (THE NEW DEFAULTS): the two upgrade cards (Pero ToddLLM = new vanilla ToddLLM,
        // Cross Classics = new vanilla Classics), the vanilla-vs-vanilla verdict, and Pero's real-weapon 2x2 chip grid. Beat 28
        // spans cyc in [354,372]; cyc=366 lands lt~12 so every panel + the chip grid + the banner have fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=354.0; loopVs.cyc=366.0; loopVs.phase=28; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=366.0; loopVs.phase=28; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "peroweak": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 29 (PERO'S WEAK POINT): the Judgement-Hall talk chat box, the CLASSICS/PERO
        // contrast cards, what Pero hides behind, the insight line, and the three-weak-points band. Beat 29 spans cyc in
        // [372,390]; cyc=387 lands lt~15 so the dialogue window, the contrast, the insight, and all three weak-point chips show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=372.0; loopVs.cyc=387.0; loopVs.phase=29; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=387.0; loopVs.phase=29; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "grayascends": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 30 (GRAY.EXE ASCENDS): the ascension chain, Gray's new form, the catastrophe-boss
        // rule, the pinned-not-defeated insight, and the four-tier new hierarchy. Beat 30 spans cyc in [390,408]; cyc=405 lands
        // lt~15 so the whole chain, the form list, the rule chips, the insight, and all four hierarchy cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=390.0; loopVs.cyc=405.0; loopVs.phase=30; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=405.0; loopVs.phase=30; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "error303": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 31 (ERROR 303 — THE SECRET BOSS): the unlock checklist, the Error-303 fear chat,
        // Super Nutro Y the host, the "what went wrong" insight, and the boss ladder. Beat 31 spans cyc in [408,426]; cyc=423
        // lands lt~15 so the whole checklist is checked off, all chat lines show, the host card fills, and all three ladder cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=408.0; loopVs.cyc=423.0; loopVs.phase=31; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=423.0; loopVs.phase=31; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "endofclimb": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 32 (END OF CLIMB AU): the ascension chain, the God Mode Phase 3 Hyper thinking-boss
        // panel, the last-stand/repair panel, the "highest throne" insight, and the end-state ladder. Beat 32 spans cyc in
        // [426,444]; cyc=441 lands lt~15 so the whole chain reveals, the boss chips fill, and all three end-state cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=426.0; loopVs.cyc=441.0; loopVs.phase=32; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=441.0; loopVs.phase=32; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "dangerindex": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 33 (THE DANGER INDEX): the full danger roster (two columns), the ??? tier panel,
        // Gray.EXE's unreadable-stats panel, the worst-fates insight, and the three danger-tier cards. Beat 33 spans cyc in
        // [444,466]; cyc=459 lands lt~15 so the roster fully reveals and all three tier cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=444.0; loopVs.cyc=459.0; loopVs.phase=33; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=459.0; loopVs.phase=33; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "deathexe": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 34 (SIMON.EXE — DEATH.EXE): the rise-of-Simon.Exe chain (left), the new Xs
        // lineup (right-top), the ".Exe" spelling rule (right-lower), the collapse insight, and the three who-stands cards.
        // Beat 34 spans cyc in [466,488]; cyc=481 lands lt~15 so the rise chain fully reveals and all three cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=466.0; loopVs.cyc=481.0; loopVs.phase=34; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=481.0; loopVs.phase=34; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "statusfile": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 35 (SIMON.EXE — THE STATUS FILE): the status document (left), character-not-a-boss
        // (right-top), phases-are-timelines (right-lower), the Death:Troll insight, and the three bottom cards.
        // Beat 35 spans cyc in [488,510]; cyc=503 lands lt~15 so the whole sheet reveals and all three cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=488.0; loopVs.cyc=503.0; loopVs.phase=35; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=503.0; loopVs.phase=35; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "siglines": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 36 (SIGNATURE LINES): the four signature lines (left), the being-vs-boss hierarchy
        // (right-top), what-each-line-says (right-lower), the insight, and the three bottom cards.
        // Beat 36 spans cyc in [510,532]; cyc=525 lands lt~15 so all four lines reveal and all three cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=510.0; loopVs.cyc=525.0; loopVs.phase=36; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=525.0; loopVs.phase=36; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "betweendim": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 37 (BETWEEN DIMENSIONS): the border-space list (left), who-can-cross (right-top),
        // why-the-border-fits (right-lower), the insight, and the three bottom cards.
        // Beat 37 spans cyc in [532,554]; cyc=547 lands lt~15 so all seven border rows reveal and all three cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=532.0; loopVs.cyc=547.0; loopVs.phase=37; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=547.0; loopVs.phase=37; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "blame": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 38 (ToddLLM 002 · THE BLAME ENDING): the fusion-overwrite list (left), Gray's
        // board (right-top), the blame climax (right-lower), the "YOUR FAULT" sky, the insight, and the three bottom cards.
        // Beat 38 spans cyc in [554,576]; cyc=569 lands lt~15 so all rows reveal, the sky fills, and all three cards show.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=554.0; loopVs.cyc=569.0; loopVs.phase=38; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=569.0; loopVs.phase=38; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "infection": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 39 (CLASSICS — THE INFECTION): the cross-pollination spread list (left), the
        // four population states (right-top), ToddLLM 002 as an infection-form (right-lower), the spreading-spore sky, the
        // insight, and the three bottom cards. Beat 39 spans cyc in [576,598]; cyc=591 lands lt~15 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=576.0; loopVs.cyc=591.0; loopVs.phase=39; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=591.0; loopVs.phase=39; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "carrier": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 40 (SIMON CARRIES CLASSICS): the size-based carry list (left), the two views of
        // the same moment (right-top), Classics as a black hole that spits back (right-lower), the orbit sky, the insight, and
        // the three threat-style cards. Beat 40 spans cyc in [598,620]; cyc=613 lands lt~15 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=598.0; loopVs.cyc=613.0; loopVs.phase=40; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=613.0; loopVs.phase=40; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "breakfree": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 41 (SIMON.Exe BREAKS FREE): the breaking-free list (left), the world-collapse
        // panel (right-top), from-carrier-to-catastrophe (right-lower), the lightning sky, the insight, and the three cards.
        // Beat 41 spans cyc in [620,642]; cyc=635 lands lt~15 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=620.0; loopVs.cyc=635.0; loopVs.phase=41; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=635.0; loopVs.phase=41; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "collapse": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 42 (THE COLLAPSE ROUTE): the fall order (left), who is left standing
        // (right-top), the mod's three-mod blend (right-lower), the ember/ash sky, the insight, and the three cards.
        // Beat 42 spans cyc in [642,664]; cyc=657 lands lt~15 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=642.0; loopVs.cyc=657.0; loopVs.phase=42; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=657.0; loopVs.phase=42; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "scattered": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 43 (THE SCATTERED MAP): the scattered layout (left), the deadly turn / they
        // were found (right-top), what the map demands (right-lower), the far-rooms field, the insight, and the three cards.
        // Beat 43 spans cyc in [664,686]; cyc=678 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=664.0; loopVs.cyc=678.0; loopVs.phase=43; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=678.0; loopVs.phase=43; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "collapsepoint": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 44 (THE COLLAPSE POINT): the running/warn energy split (left), Gray.EXE takes it
        // all (right-top), Fun Computer's alarm (right-lower), the energy-node field, the insight, and the three cards.
        // Beat 44 spans cyc in [686,708]; cyc=700 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=686.0; loopVs.cyc=700.0; loopVs.phase=44; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=700.0; loopVs.phase=44; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "grayvseveryone": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 45 (GRAY.EXE VS EVERYONE): the board Gray controls (left), he gains power
        // (right-top), Gray.EXE VS Everyone (right-lower), the board/power-bar field, the insight, and the three cards.
        // Beat 45 spans cyc in [708,730]; cyc=722 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=708.0; loopVs.cyc=722.0; loopVs.phase=45; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=722.0; loopVs.phase=45; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "topoftheorder": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 46 (THE TOP OF THE ORDER): the three-step podium (Gray > Simon > Oren) with
        // THE LINE between Simon and Oren, the two columns (why Simon edges Oren; Oren so close), insight, and three cards.
        // Beat 46 spans cyc in [730,752]; cyc=744 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=730.0; loopVs.cyc=744.0; loopVs.phase=46; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=744.0; loopVs.phase=46; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "refusingremainder": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 47 (THE REFUSING REMAINDER): the three-plate state board (Oren separate,
        // Simon hanged, Gray still attacking), the two columns, insight, and three cards.
        // Beat 47 spans cyc in [752,774]; cyc=766 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=752.0; loopVs.cyc=766.0; loopVs.phase=47; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=766.0; loopVs.phase=47; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "trappedwitness": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 48 (THE TRAPPED WITNESS): the three-plate state board (Simon bound,
        // Classics free, the cast infected), the two columns, insight, and three cards.
        // Beat 48 spans cyc in [774,796]; cyc=788 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=774.0; loopVs.cyc=788.0; loopVs.phase=48; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=788.0; loopVs.phase=48; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "newesttimeline": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 49 (THE NEWEST TIMELINE): the six-row power ranking, the vanilla-lockdown
        // column, the 404: Death Not Found column, insight, and three cards.
        // Beat 49 spans cyc in [796,818]; cyc=810 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=796.0; loopVs.cyc=810.0; loopVs.phase=49; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=810.0; loopVs.phase=49; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "cleanerroles": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 50 (THE CLEANER ROLES): the three-row role board, Simon's speed &
        // lightning-in-reserve column, Gray's dominant/wields-Classics column, insight, and three cards.
        // Beat 50 spans cyc in [818,840]; cyc=832 lands lt~14 so all rows reveal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=818.0; loopVs.cyc=832.0; loopVs.phase=50; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=832.0; loopVs.phase=50; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "thecure": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 51 (THE CURE): the seven-disease cure roster, the Anti-Virus Liquid column,
        // Gray's Anti-Anti-Virus column, insight, and three cards. Beat 51 spans cyc in [840,862]; cyc=854 -> lt~14.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=840.0; loopVs.cyc=854.0; loopVs.phase=51; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=854.0; loopVs.phase=51; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "layers": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 52 (THE LAYER SYSTEM): the three-layer stack (Sprunki / Classic RL /
        // Classic RL 2), the real-layer column, the glitched-copy column, the Orus insight, and three cards.
        // Beat 52 spans cyc in [862,884]; cyc=876 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=862.0; loopVs.cyc=876.0; loopVs.phase=52; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=876.0; loopVs.phase=52; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "graycollapse": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 53 (THE GRAY COLLAPSE): the newest survivor ranking, Gray's reasons column,
        // Simon-dies-the-most column, the "Gray outpowers / ToddLLM outthinks" insight, and three cards.
        // Beat 53 spans cyc in [884,906]; cyc=898 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=884.0; loopVs.cyc=898.0; loopVs.phase=53; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=898.0; loopVs.phase=53; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "fullform": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 54 (THE FULL FORM): the worship circle, Gray's full-form column, Black's
        // clone-army column, the overrated/underrated + body-vs-spirit insight, and three cards.
        // Beat 54 spans cyc in [906,928]; cyc=920 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=906.0; loopVs.cyc=920.0; loopVs.phase=54; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=920.0; loopVs.phase=54; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "graysans": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 55 (THE GRAY SANS): the 5-phase ladder, the Gray Sans vessel-look column, the
        // Classics X Undertale branch column, the vessel-return insight, and three cards.
        // Beat 55 spans cyc in [928,950]; cyc=942 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=928.0; loopVs.cyc=942.0; loopVs.phase=55; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=942.0; loopVs.phase=55; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "respawnloop": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 56 (THE RESPAWN LOOP): the 5-step respawn-loop ladder with the loop arrow, the
        // two-survival-layers column, the every-character-a-target column, the insight, and three cards.
        // Beat 56 spans cyc in [950,972]; cyc=964 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=950.0; loopVs.cyc=964.0; loopVs.phase=56; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=964.0; loopVs.phase=56; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "beyondfiction": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 57 (THE BEYOND FICTION FORM): the 5-step ownership sequence with the golden halo
        // crest, the Beyond Fiction look column, the power-split column, the insight, and three cards.
        // Beat 57 spans cyc in [972,994]; cyc=986 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=972.0; loopVs.cyc=986.0; loopVs.phase=57; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=986.0; loopVs.phase=57; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "orensoul": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 58 (THE TELEKINETIC SOUL): the 5-step ascension cutscene with the telekinetic
        // field-ring, Oren's small-body/huge-field look column, the power-map column, the insight, and three cards.
        // Beat 58 spans cyc in [994,1016]; cyc=1008 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=994.0; loopVs.cyc=1008.0; loopVs.phase=58; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1008.0; loopVs.phase=58; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "apex": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 59 (THE APEX RULE): the 5-rule combat sequence with the green maw-arc, the
        // "what Gray can eat" column, the two-layer defense column, the clean-canon-line insight, and three cards.
        // Beat 59 spans cyc in [1016,1038]; cyc=1030 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1016.0; loopVs.cyc=1030.0; loopVs.phase=59; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1030.0; loopVs.phase=59; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "twophases": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 60 (THE TWO PHASES): the 6 power rules under the blue spirit-arc, the Phase 1
        // (true form) column, the Phase 2 (glitch) column, the insight, and three cards. Beat 60 spans cyc in [1038,1060];
        // cyc=1052 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1038.0; loopVs.cyc=1052.0; loopVs.phase=60; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1052.0; loopVs.phase=60; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "simonlight": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 61 (SIMON'S LIGHTNING): the 5-step counter chain under the gold lightning-arc,
        // the weakness column, the Simon & Oren connection column, the insight, and three cards. Beat 61 spans cyc in
        // [1060,1082]; cyc=1074 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1060.0; loopVs.cyc=1074.0; loopVs.phase=61; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1074.0; loopVs.phase=61; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "endlessanimations": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 62 (ENDLESSANIMATIONS): the two-layer creator hierarchy under the violet crown,
        // the pacifist column, the frenzy-mode column, the insight, and three cards. Beat 62 spans cyc in [1082,1104];
        // cyc=1096 -> lt~14, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1082.0; loopVs.cyc=1096.0; loopVs.phase=62; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1096.0; loopVs.phase=62; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "fusion": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 63 (THE FUSION APOCALYPSE): the fused power structure under the red/blue fusion
        // arc, the old-timeline (Simon.Exe) column, the new-timeline (Gray.EXE) column, ToddLLM's peace phrase, three cards,
        // Oren's shockwave rings and Classics' corruption slices. Beat 63 spans cyc in [1104,1126]; cyc=1118 -> lt~14, revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1104.0; loopVs.cyc=1118.0; loopVs.phase=63; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1118.0; loopVs.phase=63; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "powerchart": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 64 (THE POWER CHART): the top-5 ranking under the gold trophy arc, the two
        // convergence cutscenes (left), speed vs slowdown (right), the sole-survivor insight, three cards. Beat 64 spans cyc in
        // [1126,1148]; cyc=1137 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1126.0; loopVs.cyc=1137.0; loopVs.phase=64; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1137.0; loopVs.phase=64; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "formladder": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 65 (THE FORM LADDER): EndlessAnimations' Normal -> Error -> Errorshift ladder with
        // eye swatches, the Error forms (left), the eye-color rule (right), the naming-rule insight, three cards. Beat 65 spans
        // cyc in [1148,1170]; cyc=1159 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1148.0; loopVs.cyc=1159.0; loopVs.phase=65; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1159.0; loopVs.phase=65; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phaserule": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 66 (THE PHASE RULE): Classics' two-rung phase ladder (Phase 1 Vanilla, Phase 2
        // Cross AU) on the left vs EndlessAnimations' "thinks" core with free-floating state-nodes on the right, the phase-based
        // beings (left col), why 0 phases (right col), the ladder-vs-mind insight, three cards. Beat 66 spans cyc in [1170,1192];
        // cyc=1181 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1170.0; loopVs.cyc=1181.0; loopVs.phase=66; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1181.0; loopVs.phase=66; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "endingstair": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 67 (THE ENDING STAIRCASE): the rename (ENDLESS STAIRCASE struck -> ENDING
        // STAIRCASE), a level track showing it moved from the final slot to the middle, the "what changed" column (left), the
        // .exe rule column (right), the insight, three cards. Beat 67 spans cyc in [1192,1214]; cyc=1203 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1192.0; loopVs.cyc=1203.0; loopVs.phase=67; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1203.0; loopVs.phase=67; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "disguiseleak": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 68 (THE DISGUISE LEAK): the two disguise portraits (EndlessAnimations->Shadow
        // Mario, Xyrus->Daisy) with each spoken MASK line struck into a TRUE line, the paint & shadow attack column (left),
        // the Twilight Alpha Guardian column (right), the insight, three cards. Beat 68 spans cyc in [1214,1236]; cyc=1225 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1214.0; loopVs.cyc=1225.0; loopVs.phase=68; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1225.0; loopVs.phase=68; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "canonleak": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 69 (THE CANON LEAK): the game world being painted gray, the "Let's paint this
        // world... literally!" line, the hunt arrow to the Mario-red target (Mario.EXE / King Mario / Bario), the flavor-vs-canon
        // column (left), the actually-after-Mario column (right), the insight, three cards. Beat 69 spans cyc in [1236,1258]; cyc=1247 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1236.0; loopVs.cyc=1247.0; loopVs.phase=69; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1247.0; loopVs.phase=69; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "graybattlefield": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 70 (THE GRAY BATTLEFIELD): the CLASSICS vs MARIO battlefield painted gray until
        // they can no longer see, the hidden EndlessAnimations shadow, the WINS stamp, the abilities column (left), the
        // how-he-wins sequence (right), the insight, three cards. Beat 70 spans cyc in [1258,1280]; cyc=1269 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1258.0; loopVs.cyc=1269.0; loopVs.phase=70; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1269.0; loopVs.phase=70; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "highertimeline": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 71 (THE HIGHER TIMELINE): the Mr. Black portrait (black body, white mouth, red
        // halos, red glow), his design column (left), the EndlessAnimations painter / steps column (right), the anti-Mr. Black
        // role-chart roster grid (center feature), the insight, three cards. Beat 71 spans cyc in [1280,1302]; cyc=1290 -> lt~10.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1280.0; loopVs.cyc=1290.0; loopVs.phase=71; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1290.0; loopVs.phase=71; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "realitytime": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 72 (REALITY + TIME): the unreachable-power tower (Mr. Black's power far above the
        // reachable ceiling), the gray-paint rule (left), the reality+time rule (right), THE EPISODE REEL center feature (aired vs
        // real-but-waiting frames + the NOW playhead), the insight, three cards. Beat 72 spans cyc in [1302,1324]; cyc=1312 -> lt~10.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1302.0; loopVs.cyc=1312.0; loopVs.phase=72; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1312.0; loopVs.phase=72; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "gamesreality": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 73 (THE GAME'S REALITY): the liberation-pair-vs-Black-corruption portrait (Oren.EXE +
        // EndlessAnimations free the cast on the left, Black losing in the center with a broken crown, corruption spreading on the
        // right), the Game's Reality rule (left), the everyone-sees-EndlessAnimations reactions (right), the 5-step event timeline
        // center feature, the insight, three cards. Beat 73 spans cyc in [1324,1346]; cyc=1334 -> lt~10.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1324.0; loopVs.cyc=1334.0; loopVs.phase=73; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1334.0; loopVs.phase=73; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "lastsurvivors": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 74 (THE LAST SURVIVORS): the three lit survivors (Mr. Black, EndlessAnimations,
        // ToddLLM 001) standing over the fallen cast, the collapse column (left), the last-survivors-timeline column (right), the
        // three survivor pillars center feature, the insight, three cards. Beat 74 spans cyc in [1346,1368]; cyc=1356 -> lt~10.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1346.0; loopVs.cyc=1356.0; loopVs.phase=74; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1356.0; loopVs.phase=74; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "iseeyou": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 75 ("I SEE YOU" — THE GAME-LOCK TAKEOVER): Mr. Black normal-form on the polo with the
        // extreme red aura + the "I SEE YOU" warning (center), the corrected-Mr.-Black column (left), the aware-game column (right),
        // the 10-step game-lock sequence center feature, the insight, three cards. Beat 75 spans cyc in [1368,1390]; cyc=1378 -> lt~10.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1368.0; loopVs.cyc=1378.0; loopVs.phase=75; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1378.0; loopVs.phase=75; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sleeprule": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 76 (THE SLEEP RULE): the pet-to-sleep portrait (left), the GRAY>BLACK rule token
        // (center), Gray-vs-Black with the Simon-interrupt strike (right), the 6-step interrupt sequence, the insight, three cards.
        // Beat 76 spans cyc in [1390,1412]; cyc=1401 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1390.0; loopVs.cyc=1401.0; loopVs.phase=76; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1401.0; loopVs.phase=76; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phaseglitch": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 77 (THE PHASE GLITCH): the 001->002 corruption (left), the ranking token
        // (center), Neto's summoning altar (right), the six 002 powers, the insight, three cards.
        // Beat 77 spans cyc in [1412,1434]; cyc=1423 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1412.0; loopVs.cyc=1423.0; loopVs.phase=77; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1423.0; loopVs.phase=77; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "coloredslashes": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 78 (THE COLORED SLASHES): the 002 slasher icon, the 20-color slash grid,
        // the SIMON CONNECTION strip, the insight, the Neto second-thoughts note.
        // Beat 78 spans cyc in [1434,1456]; cyc=1445 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1434.0; loopVs.cyc=1445.0; loopVs.phase=78; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1445.0; loopVs.phase=78; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "goldentimeline": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 79 (THE GOLDEN TIMELINE): the golden sunrise + Sprunki Ocean, the sun/eclipse
        // and moon-dance vignettes, THE RESTORATION SEQUENCE, THE PEACE grid, the character-change notes, insight & banner.
        // Beat 79 spans cyc in [1456,1478]; cyc=1467 -> lt~11, fully revealed.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1456.0; loopVs.cyc=1467.0; loopVs.phase=79; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1467.0; loopVs.phase=79; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "corruptionreturn": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 80 (THE CORRUPTION RETURN): the empty Anti-Virus bottle, the fading golden bg with
        // corruption rising from below, THE PROTECTION FAILS grid mid-collapse, the NEW RULE panel, insight & banner.
        // Beat 80 spans cyc in [1478,1500]; cyc=1481 -> lt~3, decay~0.62 (a clear mid-transition: several systems reclaimed, some still gold).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1478.0; loopVs.cyc=1481.0; loopVs.phase=80; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1481.0; loopVs.phase=80; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "paintedreality": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 81 (THE PAINTED REALITY): the dark canvas being repainted, the FUSION badge
        // (001+002=001 PRO), THE PAINTED-REALITY ERA grid fully painted in, THE NEW THRONE panel, insight & banner.
        // Beat 81 spans cyc in [1500,1522]; cyc=1506 -> lt~6, paint fully in (all six event cards painted, banner shown).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1500.0; loopVs.cyc=1506.0; loopVs.phase=81; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1506.0; loopVs.phase=81; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "higherbeingranking": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 82 (THE HIGHER-BEING RANKING): the anime sunburst bg, the LUIGI GREEN — INVITED
        // badge, the POWER LADDER (EndlessAnimations #1 / 001 Pro = Luigi Green tied / powered Neto #3 / Classics below), and the
        // CLASSICS: NOW A JAPANESE ANIME arc panel. Beat 82 spans cyc in [1522,1544]; cyc=1529 -> lt~7, everything appeared.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1522.0; loopVs.cyc=1529.0; loopVs.phase=82; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1529.0; loopVs.phase=82; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "lockedspirit": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 83 (OREN.EXE — THE LOCKED SPIRIT): the spiritual-void bg + energy-pulse rings, the
        // SKY SOULS band with Simon 404 separated, Oren's spirit figure with orbiting telekinesis debris, Simon holding his hand
        // (the freedom key) + the refused-lightning revival, THE BATTLE RULE panel, and THE NEW TOP 3 ladder. Beat 83 spans cyc in
        // [1544,1566]; cyc=1551 -> lt~7, everything appeared.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1544.0; loopVs.cyc=1551.0; loopVs.phase=83; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1551.0; loopVs.phase=83; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "cleansweep": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 84 (OREN.EXE'S CLEAN SWEEP — THE UNCURABLE PHASE): the corrupted-baseline violet
        // void, THE DEFEAT CHAIN (Gray.EXE toppled + the cast X'd out), Oren's sweeping spirit figure, the ENDLESSANIMATIONS
        // panel with "WHAT IS EVEN THE POINT OF THIS?", and THE PHASE RULE panel (Phase 2 = Phase 1, NO CURE). Beat 84 spans
        // cyc in [1566,1588]; cyc=1573 -> lt~7, everything appeared.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1566.0; loopVs.cyc=1573.0; loopVs.phase=84; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1573.0; loopVs.phase=84; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "newcenter": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 85 (ENDLESSANIMATIONS — THE NEW CENTER): the reopened GOLDEN sky, the form-king at
        // center inside an orbiting ring of evolving AU bubbles (two padlocked = private AUs), the EVOLVING-AU RULE panel, the
        // SELF-ESCALATION panel (LV mining / souls / barrier), the CURE panel, and the AU-set row. Beat 85 spans cyc in
        // [1588,1610]; cyc=1596 -> lt~8, everything appeared.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1588.0; loopVs.cyc=1596.0; loopVs.phase=85; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1596.0; loopVs.phase=85; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "dustau": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 86 (ENDLESSANIMATIONS' DUST AU): the dusty tan void with falling dust motes, the
        // two-tier ladder (DUST AU base 0 LV → escalation arrow → DUST+ INFINITY LV, aura-glowing), and the SANS-AU LOGIC note.
        // Beat 86 spans cyc in [1610,1632]; cyc=1618 -> lt~8, everything appeared.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1610.0; loopVs.cyc=1618.0; loopVs.phase=86; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1618.0; loopVs.phase=86; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "comicwar": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 87 (CLASSICS — THE COMIC-BOOK WAR): the bright comic page with halftone dots,
        // the LV≠POWER panel (Error 404 0 LV > Errorshifted), the MR. BLACK RIPS THE BOOK dark-matter panel (#3 most powerful),
        // BOOM/BANG/POW bursts, and the 3-realms / Page<Episode<Chapter footer. Beat 87 spans cyc in [1632,1654]; cyc=1645 -> lt~13.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1632.0; loopVs.cyc=1645.0; loopVs.phase=87; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1645.0; loopVs.phase=87; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "hattie": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 88 (THE HAT & TIE — DARK PERO FUSION): the dark fusion void, THE HAT & TIE panel
        // (transformation sequence + CLASSICS MR. BLACK = ENDLESSANIMATIONS), the DARK PERO: ENDLESSANIMATIONS fusion panel
        // (STRONGER THAN BOTH · ONLY 1 ENDING), and the identity-map / 001-Pro-Pero-weapons / ending-rule footer.
        // Beat 88 spans cyc in [1654,1676]; cyc=1667 -> lt~13.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1654.0; loopVs.cyc=1667.0; loopVs.phase=88; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1667.0; loopVs.phase=88; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "ringmaster": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 89 (CLASSIC ALPHIANS RETURNS — THE RINGMASTER): the dark shadow big-top,
        // THE CORRUPTED REVIVAL panel (more corrupted/glitched/stronger/beyond Classics + the ringmaster/jester role reset),
        // the HE CONTROLS THE GAMES ring (Mr. Black centered, the game names orbiting, HE CAN SUMMON THE GAME), and the
        // role-reset / why-strongest / SHADOW = BLACK footer. Beat 89 spans cyc in [1676,1698]; cyc=1687 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1676.0; loopVs.cyc=1687.0; loopVs.phase=89; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1687.0; loopVs.phase=89; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "fellengod": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 90 (FELLEN SUPREME MULTIVERSAL GOD): the cosmic demon-god void, the DARK-DEMON
        // god figure with AUs spiralling in and the LV = BEYOND infinity counter, THE STACKED TOTALITY + power-theft panel,
        // the HE CALLS ALL AUs AT ONCE chessboard panel, and the vessel / power-rank / book-room-horror footer. Beat 90 spans
        // cyc in [1698,1720]; cyc=1709 -> lt~11 (past every fade-in threshold).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1698.0; loopVs.cyc=1709.0; loopVs.phase=90; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1709.0; loopVs.phase=90; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sprunkiscan": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 91 (THE SPRUNKI SCAN — PERO BECOMES TUNNER): the teal scanner bay, the
        // Pero → scan-gate → Tunner transformation panel, the Mr. Black > Oren > Gray power-rank podium, and the update-
        // origin / scan-link / millions-of-years footer. Beat 91 spans cyc in [1720,1742]; cyc=1731 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1720.0; loopVs.cyc=1731.0; loopVs.phase=91; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1731.0; loopVs.phase=91; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "grayeverything": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 92 (THE NO MORE .EXE MOD — GRAY TAKES EVERYTHING): the steel-blue apex void,
        // the GRAY'S RISE panel (beats Wenda / above Oren), the GRAY VS BLACK panel (takes Souls/LV/Code → infinity LV),
        // and the Oren-frees / Mr.-Black-demon / Gray-controls-LV footer. Beat 92 spans cyc in [1742,1764]; cyc=1753 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1742.0; loopVs.cyc=1753.0; loopVs.phase=92; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1753.0; loopVs.phase=92; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "hiddencreation": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 93 (THE HIDDEN CREATION — GRAY SEALS THE PUPPET): the warm dark-amber lab
        // void, THE LAB panel (Dust+ & Infinity Pero → metal tube charged by Simon's lightning → 1 puppet → wooden sphere
        // sealed 81B years), the POWER SHIFT panel (Gray beats Simon, takes the LV & Souls, Oren the only soul left) and
        // the Oren's-gravity / Neto-two-teams / the-real-point footer. Beat 93 spans cyc in [1764,1786]; cyc=1775 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1764.0; loopVs.cyc=1775.0; loopVs.phase=93; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1775.0; loopVs.phase=93; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "threerealms": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 94 (THE THREE REALMS COLLIDE — GRAY FORGES 3D): the cold gray collision void,
        // THE REALMS CRASH panel (Simon's & Wenda's realm-orbs crashing into Gray's Realm → realm armor), the SUPER-VESSEL
        // → 3D panel (everything fed into one puppet, 2D plate → 3D cube, "TO BE CONTINUED") and the apocalypse / black-cloak
        // / 3-in-1-Mindy-3D footer. Beat 94 spans cyc in [1786,1808]; cyc=1797 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1786.0; loopVs.cyc=1797.0; loopVs.phase=94; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1797.0; loopVs.phase=94; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "coffin": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 95 (THE COFFIN & THE CYBER LORD — GRAY, GAME'S GOD): the cold cyber shadow void
        // with a deceptive angelic-gold halo, THE COFFIN panel (the "TO BE CONTINUED" screen pulled off, a real-or-fake coffin
        // with Orus + Dark Yellow poured on, "VICTORY IS MINE!"), THE CYBER LORD panel (the Wenda-angel / Gray-demon flip,
        // Black's turn, "ALL YA SHALL BOW DOWN") and the like-Simon / smartest-trio / hidden-creation footer. Beat 95 spans
        // cyc in [1808,1830]; cyc=1819 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1808.0; loopVs.cyc=1819.0; loopVs.phase=95; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1819.0; loopVs.phase=95; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "arcsis": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 96 (ARCSIS VS PERO — ACT IS A CHOICE, THEN THE NIKI SWARM): the warm amber
        // shadow-realm void, THE MILLION-YEAR JOURNEY panel (Lica's door -> mom/Frizz -> Pero forgets -> 2500 LV), the ACT IS A
        // CHOICE panel (FIGHT/MERCY broken, arrows -> ACT, "DAD, NO!", Pero -> Classics as ToddLLM Pro) and the chess-board-boss /
        // act-is-a-choice / niki-swarm footer. Beat 96 spans cyc in [1830,1852]; cyc=1841 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1830.0; loopVs.cyc=1841.0; loopVs.phase=96; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1841.0; loopVs.phase=96; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "pro002": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 97 (PRO PERO 002 — THE NEW MEANING OF NORMAL): the warm gold cowboy void, THE TWO
        // FORMS panel (Pro 001 rest <-> Pro 002 highest, "The New Meaning of Normal") and THE BURST panel (KO/destroy anything,
        // +LV, then 002 -> 001 to rest). Beat 97 spans cyc in [1852,1874]; cyc=1863 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1852.0; loopVs.cyc=1863.0; loopVs.phase=97; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1863.0; loopVs.phase=97; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "kingofgames": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 98 (PERO TODDLLM — THE KING OF GAMES): the royal violet crown void, THE ENERGY
        // LADDER panel (30/70/100 thresholds, drains like Charge) and THE AUTHORITY FORMS panel (Niki/EndlessAnimations/Gray/
        // anyone, the cape that erases with a raised hand). Beat 98 spans cyc in [1874,1896]; cyc=1885 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1874.0; loopVs.cyc=1885.0; loopVs.phase=98; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1885.0; loopVs.phase=98; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "prosupremacy": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 99 (PRO SUPREMACY — 11 STAT & EXTREME MAC FRAME): the 11-color orb spectrum void,
        // THE 11 STAT panel (11 colored orbs -> slashes, red-eyed copies, dead-cowboy army, 1000/1000 angelic/demonic sound) and
        // EXTREME MAC FRAME panel (freeze/vanish/reappear, knocked higher). Beat 99 spans cyc in [1896,1918]; cyc=1907 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1896.0; loopVs.cyc=1907.0; loopVs.phase=99; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1907.0; loopVs.phase=99; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "corruption404": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 100 (THE CORRUPTION OF PRO 001 — 404: PACIFISM NOT FOUND): the dark-matter purple void,
        // THE PILLAR panel (??? LV, high-tech shield, crystals, dark matter, Pro levitating with red eyes) and THE 404 CASCADE
        // panel (Feelings/Act/Mercy/Friendship/Love/Pacifism Not Found). Beat 100 spans cyc in [1918,1940]; cyc=1929 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1918.0; loopVs.cyc=1929.0; loopVs.phase=100; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1929.0; loopVs.phase=100; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "absolutedetermination": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 101 (PERO PRO ABSOLUTE DETERMINATION — NEITHER 001 NOR 002): the red determination void,
        // THE THIRD STATE panel (001/002/ABSOLUTE DETERMINATION + regen/slashes/damage/respawn bars) and THE TWO SOULS panel
        // (Justice Soul beam from Simon 404, Red Soul respawn/regen loop). Beat 101 spans cyc in [1940,1962]; cyc=1951 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1940.0; loopVs.cyc=1951.0; loopVs.phase=101; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1951.0; loopVs.phase=101; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "frizzclassics": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 105 (FRIZZ IS CLASSICS — THE GENOCIDE IDENTITY): the pink-to-crimson
        // route void, THE ROUTE SWITCH panel (Frizz -> the GENOCIDE gate -> Clara/Classics, with "she is still Frizz no
        // matter what") and the ONE BEING'S RECORD panel (the six record items linking down to one half-pink/half-crimson
        // core). Beat 105 spans cyc in [2028,2050]; cyc=2039 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2028.0; loopVs.cyc=2039.0; loopVs.phase=105; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2039.0; loopVs.phase=105; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "alphatale": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 106 (ALPHATALE PERO & THE RESET): the violet rainbow-soul void, THE RAINBOW
        // SOUL panel (the four buttons FIGHT/ACT/ITEM/MERCY cracking apart, threads folding into one rainbow soul) and THE
        // FORM LADDER panel (Dust+ -> 404 -> Alpha Pero -> Alphatale apex). Beat 106 spans cyc in [2050,2072]; cyc=2061 ->
        // lt~11, well past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2050.0; loopVs.cyc=2061.0; loopVs.phase=106; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2061.0; loopVs.phase=106; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "alphaerase": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 103 (ALPHA PERO PRO & ERASE FORM): the banished-Alphaverse violet void, the
        // ALPHA PERO PRO panel (the godly/terrifying flickering body, banished but still sighted) and the ERASE FORM panel
        // (Pero looking godly beside Gray, who holds the ERASE button, with the game-layer wipe running).
        // Beat 103 spans cyc in [1984,2006]; cyc=1995 -> lt~11. Sin-driven flicker is phase-locked to cyc, so the
        // silhouette lands visible at this value.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1984.0; loopVs.cyc=1995.0; loopVs.phase=103; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1995.0; loopVs.phase=103; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "frizz": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 104 (FRIZZ — THE STRONGER SIBLING): the Frizz-pink AU void, the
        // FRIZZ & ARCSIS siblings panel (Frizz drawn higher/larger with the dashed sibling link to sword-carrying Arcsis)
        // and the FRIZZ & GRAY panel (base Frizz standing with Gray up top, Full Power Frizz flaring and knocking Gray
        // back below). Beat 104 spans cyc in [2006,2028]; cyc=2017 -> lt~11, past every fade-in and the knockback.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2006.0; loopVs.cyc=2017.0; loopVs.phase=104; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2017.0; loopVs.phase=104; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "frizzlv4": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 107 (FRIZZ LV 4 — THE LOCK THAT MADE HER STRONGER): the Frizz-pink void, the
        // FORM LADDER panel (LV 1-3 / LV 4→∞ / ∞→∞+ with the glaring LV 4 medallion pulled out as the true peak, red-eyed
        // figure + sharp stick) and the TWO LOCKS panel (Simon Phase 2 → WEAKER vs Frizz LV 4 → STRONGER). Beat 107 spans
        // cyc in [2072,2094]; cyc=2083 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2072.0; loopVs.cyc=2083.0; loopVs.phase=107; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2083.0; loopVs.phase=107; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "frizzremoved": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 108 (FRIZZ LV 4 — REMOVED BUT STILL THERE): the corrupted red/black glitch
        // void, THE 404 SHUTDOWN panel (the "Model Corruption Detected / 404: LV 4 Frizz Removed / You Saw Me!" error stack
        // + the shutdown bar) and THE HIDING SPOTS panel (a red-eyed walking Frizz ringed by LOCKER/BED/CLOSET/TABLE, the
        // TABLE slashed, SLASH = EXP). Beat 108 spans cyc in [2094,2116]; cyc=2107 -> lt~13, past every staged fade-in
        // (the slash appears at lt>4.2, the shutdown bar fills by lt~5.8).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2094.0; loopVs.cyc=2107.0; loopVs.phase=108; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2107.0; loopVs.phase=108; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "404war": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 109 (THE 404 WAR & THE RESET LOOP): the red/black corruption void with green
        // 404 glitch, THE 404 INFECTION panel (the escalation stack + the disease word + Frizz anchoring down) and THE
        // BLINDFOLD SHOWDOWN panel (only Pero/Frizz/Simon remain, Pero blindfolded and dominating). Beat 109 spans cyc in
        // [2116,2138]; cyc=2129 -> lt~13, past every staged fade-in (the anchor + disease word appear by lt~3).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2116.0; loopVs.cyc=2129.0; loopVs.phase=109; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2129.0; loopVs.phase=109; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "voidfrizz": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 111 (THE VOID WAR — LIGHT PERO vs NEW VOID FRIZZ): the split void/light void,
        // THE OPPOSITE APEXES panel (NEW VOID FRIZZ void-purple predator w/ tentacle vs LIGHT PERO gold overcharged,
        // "LIGHT PERO IS STRONGER") and THE VOID TAKEOVER collapse chain ending at "ONLY ALPHAVERSE & GODVERSE LEFT". Beat
        // 111 spans cyc in [2160,2182]; cyc=2173 -> lt~13, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2160.0; loopVs.cyc=2173.0; loopVs.phase=111; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2173.0; loopVs.phase=111; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "peroexe": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 113 (PERO.EXE — THE FINAL BEING): the rainbow-crystal core throwing both gold
        // light & void darkness, THE FUSION CHAIN ladder (Light Pero -> Light 404 -> Absence_of_Light.exe -> Filelight ->
        // Solar -> PERO.EXE) and THE TWO NATURES panel (creator/destroyer split figure + his two spoken lines). Beat 113
        // spans cyc in [2204,2226]; cyc=2215 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2204.0; loopVs.cyc=2215.0; loopVs.phase=113; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2215.0; loopVs.phase=113; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "lightsstream": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 114 (LIGHT'S STREAM — THE REMEMBERED RESET): the cyan-white light stream vs
        // Shadow Gray's total void, THE GOD FORMULA ladder (Light's Stream + Rainbow Blazing Fire Plus + 404 Death = a literal
        // god -> Ultra Rainbow Light Pero Plus), the SHADOW GRAY panel with Pero's soul orbiting, and the water-gun / remembered-
        // reset footer. Beat 114 spans cyc in [2226,2248]; cyc=2237 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2226.0; loopVs.cyc=2237.0; loopVs.phase=114; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2237.0; loopVs.phase=114; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sprunkipowers": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 115 (SPRUNKI POWERS — THE DIGITAL-BORN CHAOS SQUAD): the power scale (Common ->
        // Charged -> Overcharged/Legendary), the five named Sprunkis (Wanda, Fun Bot, Grey, Black, Mr Sun), and the Roblox-origin /
        // shared-base-powers / chaos-squad footer. Beat 115 spans cyc in [2248,2270]; cyc=2259 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2248.0; loopVs.cyc=2259.0; loopVs.phase=115; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2259.0; loopVs.phase=115; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sprunkicircus": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 116 (CLASSICS & SPRUNKI CIRCUS — THE BLACKHOLE TO THE DARK): the blackhole
        // sequence (Pero places it -> falls through -> slides deep -> the Dark), the two-layers panel (bright crazy surface above,
        // the Dark below, a figure sliding down), and the remade-by-Pero / errors-fix-together / Fun-Park-returns footer. Beat 116
        // spans cyc in [2270,2292]; cyc=2281 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2270.0; loopVs.cyc=2281.0; loopVs.phase=116; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2281.0; loopVs.phase=116; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "graykingdom": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 117 (GRAY TAKES THE KINGDOM): the handover panel (Pero -> Gray -> Mr. Black ->
        // Luigi Green -> Simon locked out), the Dead Staircases / Endless Glass Bridge panel with ERROR 0 POINT 2, and the one-way
        // blackhole / Simon's staff / both-dimensions footer. Beat 117 spans cyc in [2292,2314]; cyc=2303 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2292.0; loopVs.cyc=2303.0; loopVs.phase=117; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2303.0; loopVs.phase=117; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "abinations": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 118 (ABINATIONS & THE 404 LIGHTNING): the how-deep-the-Dark-goes ladder down to the
        // white-ball core, the infection loop + the lightning room with Pero's ACT button, and the sky-threat / Pero-at-LV-1 /
        // Simon-404-recaptured footer. Beat 118 spans cyc in [2314,2336]; cyc=2325 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2314.0; loopVs.cyc=2325.0; loopVs.phase=118; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2325.0; loopVs.phase=118; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "villainlayers": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 119 (THE VILLAIN LAYERS): the who-the-villain-actually-is stack (Gray surface / Pero wild card /
        // Simon 404 actual), the Horror Cowboy finisher + the loop-that-feeds-Gray panel, and the smartest /
        // not-helping / 404-climbs-again footer. Beat 119 spans cyc in [2336,2358]; cyc=2347 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2336.0; loopVs.cyc=2347.0; loopVs.phase=119; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2347.0; loopVs.phase=119; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "steal": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 127 (THE STEAL & THE NEW SCALE): Mr. Black's four-stage arc on
        // the left, the rewritten LV ruler on the right. Beat 127 spans cyc in [2512,2534); cyc=2523 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2512.0; loopVs.cyc=2523.0; loopVs.phase=127; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2523.0; loopVs.phase=127; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "deletedau": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 140 (DELETED AU): the 50/50 split field (blinding light on one side,
        // total black on the other, seam down the middle), WHAT DELETED AU IS on the left with the split bar and
        // the PERO-IS-STILL-ABOVE box, THE SEE-SAW on the right lit all the way down to "she eventually wins again"
        // and the Au-Pero box, the DELETED-AU gate emblem up top, and the four footer cards (Pero on top / New Chara
        // wins / both revive / Simon 404 is back). Beat 140 spans cyc in [2798,2820); cyc=2809 -> dt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2798.0; loopVs.cyc=2809.0; loopVs.phase=140; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2809.0; loopVs.phase=140; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "realcure": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 156 (I AM THE REAL CURE): the two rival cure claims, the edited-songs box (Sky, Pinki, Oren, sad and slow except Simon and Tunner), the four ink rungs ending in Anti-Virus Ink with the glitch tornado, Wenda's two fights, and the borrowed-moves box. Beat 156 spans cyc in [3150,3172); cyc=3163 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3150.0; loopVs.cyc=3163.0; loopVs.phase=156; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3163.0; loopVs.phase=156; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "twosouls": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 158 (TWO SOULS, ONE VESSEL): the Classics-version rule and the Tunner exception, the horseshoe/emerald trade ladder ending in the liquid that keeps his vessel out of Phase 1, the soul-count panel with the pips and the horse from Garnold's Joy, Pero's ten-item proof list, and the two-bodies-one-being box. Beat 158 spans cyc in [3194,3216); cyc=3207 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3194.0; loopVs.cyc=3207.0; loopVs.phase=158; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3207.0; loopVs.phase=158; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "soulwarning": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 159 (HE WASN'T JOKING): the soul warning and the reveal that it was literal, the four-item ladder of what the vessel actually does (consumes souls, stalks, vanishes through walls, static portals), the climbing soul count with the open third pip, the maze panel with the two static portals and the stalker walking through the walls, and the why-he-still-looks-normal box. Beat 159 spans cyc in [3216,3238); cyc=3229 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3216.0; loopVs.cyc=3229.0; loopVs.phase=159; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3229.0; loopVs.phase=159; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "tunnerispero": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 157 (TUNNER IS PERO): the walk-in lines, the fast-song tell box, the endings board (Sprunki VS Simon 404 / I AM THE CURE / place Pero down) with the DEPICTED crash frame, the Phase 1 vs Phase 2 panel and the why-Tunner-is-top box. Beat 157 spans cyc in [3172,3194); cyc=3185 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3172.0; loopVs.cyc=3185.0; loopVs.phase=157; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3185.0; loopVs.phase=157; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "reckonedwith": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 155 (A FORCE TO BE RECKONED WITH): the two canon lines, the surface-and-truth box, the four rungs he challenged and won (Mr. Black, Simon 404, everyone in the game, the game itself), the borrowed day-and-night role and the creation myth rule. Beat 155 spans cyc in [3128,3150); cyc=3141 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3128.0; loopVs.cyc=3141.0; loopVs.phase=155; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3141.0; loopVs.phase=155; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "notatonce": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 154 (NOT ALL AT ONCE): the two canon lines, the current ranking with Simon 404 moved above Mr. Black, the seven-item BECAUSE OF ERROR 404 list, and the three matchup rules with the NOT AT ONCE ceiling. Beat 154 spans cyc in [3106,3128); cyc=3119 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3106.0; loopVs.cyc=3119.0; loopVs.phase=154; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3119.0; loopVs.phase=154; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "ownerstaff": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 153 (THE OWNER STAFF): the three lines of the exchange, the staff itself, HE IS NOT PICKING A SIDE, and the four-item care list with the NOT ON THE LIST block. Beat 153 spans cyc in [3084,3106); cyc=3097 -> dt=13 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3084.0; loopVs.cyc=3097.0; loopVs.phase=153; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3097.0; loopVs.phase=153; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "allmustbe1": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 152 (ALL MUST BE 1): the universes merged into one point, the RL assembly line, PERO FINALLY BREAKS, the cutscene roster, and the Phase 1 lock bar. Beat 152 spans cyc in [3062,3084); cyc=3076 -> dt=14 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3062.0; loopVs.cyc=3076.0; loopVs.phase=152; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3076.0; loopVs.phase=152; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "frontman": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 151 (FRONT MAN): Pero and Mr. Black with the twelve controls
        // crossed over, the MR. BLACK ACCEPTS stamp, the infinite LV/KR/POWER meters pinned, the 1-2-3 board,
        // and the six things he makes with it. Then the header emblem, THE HANDOVER panel, the WHAT HE DOES
        // WITH IT panel, and the four footer cards.
        // Beat 151 spans cyc in [3040,3062); cyc=3051 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3040.0; loopVs.cyc=3051.0; loopVs.phase=151; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3051.0; loopVs.phase=151; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "easilybreak": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 150 (HE CAN EASILY BREAK): the five duties running down into Pero
        // with the STABILITY bar drained under him and the cracks through his frame, the NORMAL PERO / BROKEN PERO
        // greeting boxes, and the seven broken-state behaviours lit red. Then the header emblem, THE ASSIST LOAD
        // panel, the WHEN HE BREAKS panel, and the four footer cards.
        // Beat 150 spans cyc in [3018,3040); cyc=3029 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3018.0; loopVs.cyc=3029.0; loopVs.phase=150; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3029.0; loopVs.phase=150; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "dreemurr": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 149 (ALL OF THE DREEMURR POWERS): the five Dreemurr powers running
        // down into New Chara, the 1-5 board in its new order with New Chara up at 2 and Simon 404 marked WAS 2ND
        // at 4, and the locked 1ST IS NOT AVAILABLE plate under it. Then the header emblem, THE POWER BOARD panel,
        // THE DREEMURR INHERITANCE panel, and the four footer cards.
        // Beat 149 spans cyc in [2996,3018); cyc=3007 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2996.0; loopVs.cyc=3007.0; loopVs.phase=149; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3007.0; loopVs.phase=149; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "anyidea": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 148 (YOU HAVE ANY IDEA WHO YOU ARE TALKING TO): New Chara's LV/KR
        // feedback loop, the three Sound Battle waveforms with Simon and Mr. Black gone flat, Pero's line, and the
        // reset sweep wiping the board while Pero stands unchanged next to the struck-out RESET SELF switch. Then
        // the header emblem, THE SOUND BATTLE panel, THE RESET RULE panel, and the four footer cards.
        // Beat 148 spans cyc in [2974,2996); cyc=2985 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2974.0; loopVs.cyc=2985.0; loopVs.phase=148; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2985.0; loopVs.phase=148; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "gameover": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 147 (GAME OVER): the corruption chain traced back to Mr. Black, the
        // 1-5 ranking board with 3/4/5 struck through into 404Ds, Gray beaten on the floor, and Pero and Simon 404
        // left facing each other under the GAME OVER stamp. Then the header emblem, THE REVEAL panel, THE ENDING
        // panel, and the four footer cards.
        // Beat 147 spans cyc in [2952,2974); cyc=2963 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2952.0; loopVs.cyc=2963.0; loopVs.phase=147; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2963.0; loopVs.phase=147; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "twoendgames": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 146 (TWO ENDGAMES): the screen split down the left side, Pero's boss
        // arena up top (his multiforms fanned out by AU, the battlefield tiles swapping under them, the every-game
        // attacks orbiting, and the INSANE/EASY/INSANE difficulty swing), and Simon 404 below it zooming across with a
        // trail turning into 404Ds and ZOMBIEs while the cast keeps its distance. Then the two-plate header emblem,
        // PERO'S BOSS BATTLE panel, THE CORRUPTION panel, and the four footer cards.
        // Beat 146 spans cyc in [2930,2952); cyc=2941 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2930.0; loopVs.cyc=2941.0; loopVs.phase=146; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2941.0; loopVs.phase=146; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "iamthecure": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 145 (I AM THE CURE): Simon 404 humanoid with his cape streaming in the
        // wind, the Anti Virus held up over his head, and the whole gathered cast running away from him in every
        // direction. Up top the three-step quote emblem ("THERE IS A CURE..." -> "TO FIND THE CURE..." -> "I AM THE
        // CURE"), then THE DECLARATION panel with the cape box, THE SECOND SEAT ladder with the second-is-the-ceiling
        // box, and the four footer cards.
        // Beat 145 spans cyc in [2908,2930); cyc=2919 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2908.0; loopVs.cyc=2919.0; loopVs.phase=145; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2919.0; loopVs.phase=145; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "keynotfound": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 144 (404: KEY NOT FOUND): the sealed labatory door with the seal bars
        // slammed across it and the crossed-out keyhole, Simon 404 alone behind it fixing himself, the whole team
        // linked up outside and stopped, and Pero off to the side on no team at all. Up top the "AM I... REAL?"
        // thought-loop emblem, then the WHAT SIMON 404 IS panel with the Roblox no-scripts box, THE LOCKED DOOR
        // ladder with the Pero-is-neutral box, and the four footer cards.
        // Beat 144 spans cyc in [2886,2908); cyc=2897 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2886.0; loopVs.cyc=2897.0; loopVs.phase=144; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2897.0; loopVs.phase=144; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "plaguewalk": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 143 (THE PLAGUE WALK): Simon 404 stepping out of the labatory in the
        // plague suit and cape, his white and black cloaks left hanging on the wall inside, one hand out in the air
        // and the air itself converting into 404Ds in spreading rings around him. Up top the four-piece kit emblem
        // (WHITE and BLACK struck through as hung up, PLAGUE SUIT and THE CAPE lit as put on), THE PUPPET LAB panel
        // with the both-sides-making-puppets box, THE POWER ORDER ladder with the threat-state box, and the four
        // footer cards. Beat 143 spans cyc in [2864,2886); cyc=2875 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2864.0; loopVs.cyc=2875.0; loopVs.phase=143; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2875.0; loopVs.phase=143; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "grayvssimon404": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 142 (GRAY VS SIMON 404): the split battlefield with Gray's sight-block
        // on the left (the deleted demon overlord silhouette and two red eyes in near-total dark) against Simon 404's
        // Error 404 field on the right (glitch bands, drifting 404/ERR glyphs, blue 404 strings reaching across the
        // seam), the struck-out FIGHT/ACT/ITEM/MERCY buttons emblem "404: BUTTONS BLOCKED" up top, THE 1V1 panel on
        // the left with the DARK GRAY fusion box, THE WAR LADDER on the right with the CLASSICS VERSION RULE box, and
        // the four footer cards. Beat 142 spans cyc in [2842,2864); cyc=2853 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2842.0; loopVs.cyc=2853.0; loopVs.phase=142; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2853.0; loopVs.phase=142; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "hiddenroot": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 141 (THE HIDDEN ROOT): the violet corruption-web field with threads
        // converging on one root node, SIMON 404'S SECRET RETURN on the left (new knowledge, entry rules, blue
        // strings, several 404 Sanses, the Save File is his, Garnold Visor, the Sprunkis win) with the LOCKED-INTO
        // -THE-DARK box, THE HIDDEN ROOT on the right listing every corruption tracing to Gray with the
        // POSSESSION-BACKFIRED box, the Garnold-Visor "404: POWER NOT FOUND" emblem up top, and the four footer
        // cards. Beat 141 spans cyc in [2820,2842); cyc=2831 -> dt~11 (fully revealed).
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2820.0; loopVs.cyc=2831.0; loopVs.phase=141; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2831.0; loopVs.phase=141; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "combinedtoolkit": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 139 (THE COMBINED TOOLKIT): the red plasma ball being eaten (shrunk,
        // tendrils pulling it in), THE WHOLE TEAM IN ONE on the left (four states x four beings lit, the reversal
        // box), KR AND SELF-REVIVAL on the right lit all the way down to "higher into Pero's Care", the HP-bar
        // "revives on every hit" emblem up top, and the four footer cards. Beat 139 spans cyc in [2776,2798);
        // cyc=2787 -> et~11, past every staged fade-in and well into the consume.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2776.0; loopVs.cyc=2787.0; loopVs.phase=139; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2787.0; loopVs.phase=139; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "eraseupgrade": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 138 (THE ERASE UPGRADE): the red plasma ball sealed at full size with
        // the trapped ones circling inside it, WHAT SHE IS MADE OF on the left (Hopes and Deals / No More Deals /
        // Cross, the white-cloaked-demon box and the plasma box), THE TIE-BREAK on the right lit all the way down to
        // "both still gaining", the tipped balance emblem up top, and the four footer cards.
        // Beat 138 spans cyc in [2754,2776); cyc=2765 -> et~11, past every staged fade-in and a full seal.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2754.0; loopVs.cyc=2765.0; loopVs.phase=138; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2765.0; loopVs.phase=138; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "thelocks": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 137 (THE LOCKS): the infinity trace behind the field, LOCKED FORMS on
        // the left with all three locks lit (Gray / Mr. Black / Mr. Sun) and the no-transformation box, THE BOARD on
        // the right lit all the way down to Simon, the lock emblem with the FORM-down POWER-up arrows up top, and
        // the four footer cards. Beat 137 spans cyc in [2732,2754); cyc=2743 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2732.0; loopVs.cyc=2743.0; loopVs.phase=137; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2743.0; loopVs.phase=137; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "oneform": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 136 (GRAY: ONE FORM): the ink field gone to full black with the
        // tentacles reaching out into the other dimensions, THE INK panel on the left (the legend line, the four
        // ink facts, and the box where everyone loves him), NO MORE LIMITS on the right lit all the way down to
        // "every form merged into 1", the human-shape/human-head emblem up top, and the respawn footer.
        // Beat 136 spans cyc in [2710,2732); cyc=2721 -> lt~11, past every staged fade-in and a full blackout.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2710.0; loopVs.cyc=2721.0; loopVs.phase=136; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2721.0; loopVs.phase=136; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "savefile404": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 135 (404: SAVE FILE DELETED): New Chara's battle on the left with the
        // disconnect message fully typed out, Gray's blackout ladder lit all the way to x200,000,000 on the right,
        // the both-hands Dreemurr sword emblem up top, and the three-names-left board across the footer.
        // Beat 135 spans cyc in [2688,2710); cyc=2699 -> lt~11, past every staged fade-in and a full blackout.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2688.0; loopVs.cyc=2699.0; loopVs.phase=135; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2699.0; loopVs.phase=135; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "breakhim": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 134 (IF YOU BREAK HIM): the three states walked all the way down
        // to hostile creator on the left, why he'll win plus New Chara named a villain on the right, the cracked
        // cow man emblem up top, and the four-name villain board across the footer.
        // Beat 134 spans cyc in [2666,2688); cyc=2677 -> lt~11, past every staged fade-in and a full break.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2666.0; loopVs.cyc=2677.0; loopVs.phase=134; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2677.0; loopVs.phase=134; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "laiassistant": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 133 (PERO, YOUR LAI ASSISTANT): the greeting split into the fixed
        // half and the three varying offers on the left, why he is still first plus New Chara stuck at second on
        // the right, the small cow man emblem up top and his speech bubbles drifting behind everything.
        // Beat 133 spans cyc in [2644,2666); cyc=2655 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2644.0; loopVs.cyc=2655.0; loopVs.phase=133; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2655.0; loopVs.phase=133; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "perocare": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 132 (PERO'S CARE -- THE ARMORY): the rewritten five-place order on
        // the left, the armory Pero handed her plus his heavy-tools warning on the right, and the many crystal
        // swords swirling in and closing on the centre behind all of it.
        // Beat 132 spans cyc in [2622,2644); cyc=2633 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2622.0; loopVs.cyc=2633.0; loopVs.phase=132; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2633.0; loopVs.phase=132; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "theranking": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 131 (THE RANKING -- NEW CHARA'S CLIMB): her eight-step climb on the
        // left, the full 1-through-11 board plus LAST on the right, the AU ladder and the three lightning strikes
        // behind all of it.
        // Beat 131 spans cyc in [2600,2622); cyc=2611 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2600.0; loopVs.cyc=2611.0; loopVs.phase=131; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2611.0; loopVs.phase=131; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "crossevent": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 130 (THE CROSS EVENT -- LV DELETED): the cutscene panel with both
        // lines of dialogue and the five slashes on the left, the LV delete table and the Simon-vs-Pero speed
        // check on the right, the crossed pink neon swords burning behind all of it.
        // Beat 130 spans cyc in [2578,2600); cyc=2589 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2578.0; loopVs.cyc=2589.0; loopVs.phase=130; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2589.0; loopVs.phase=130; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "glitchtale": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 129 (??? -- THE UNKNOWN GOD & GLITCHTALE PERO): the LV rewrite ladder
        // on the left, Pero's LOVE acronym and his line on the right, debris rings orbiting the core behind it.
        // Beat 129 spans cyc in [2556,2578); cyc=2567 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2556.0; loopVs.cyc=2567.0; loopVs.phase=129; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2567.0; loopVs.phase=129; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "classicstale": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 128 (CLASSICSTALE & THE GATE): the mod and its fabric on the left,
        // the shut gate and Chara's three throws on the right. Beat 128 spans cyc in [2534,2556); cyc=2545 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2534.0; loopVs.cyc=2545.0; loopVs.phase=128; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2545.0; loopVs.phase=128; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "multiplier": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 126 (THE MULTIPLIER): the two figures drawn to true scale so the
        // 1.5x gap is visible, the half-given/half-earned panel, and the footer. Beat 126 spans cyc in [2490,2512];
        // cyc=2501 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2490.0; loopVs.cyc=2501.0; loopVs.phase=126; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2501.0; loopVs.phase=126; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phase2reveal": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 124 (THE PHASE 2 REVEAL): the guesses panel with Pero's reveal,
        // the split of what Pero gave away, and the matchup footer. Beat 124 spans cyc in [2446,2468];
        // cyc=2457 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2446.0; loopVs.cyc=2457.0; loopVs.phase=124; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2457.0; loopVs.phase=124; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "wendafunnel": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 125 (WENDA'S LIGHT EATS THE DARK): the spaghettified dark funnel
        // spiralling into her light core, the feed panel, the new order with Wenda at 2, and the deleted-and-still-here
        // strike. Beat 125 spans cyc in [2468,2490]; cyc=2479 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2468.0; loopVs.cyc=2479.0; loopVs.phase=125; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2479.0; loopVs.phase=125; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "phase25": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 123 (PHASE 2.5 & THE SURFACE COLLAPSE): the phase board with Gray
        // arriving at 2.5 and Simon dropping to 1.1, the two-layer panel with both control bars filling, and
        // Pero's portals. Beat 123 spans cyc in [2424,2446]; cyc=2435 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2424.0; loopVs.cyc=2435.0; loopVs.phase=123; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2435.0; loopVs.phase=123; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "crosspero": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 122 (CROSS PERO & THE GRAY STORM): the five-step 404 LOOP with its
        // travelling marker, GRAY'S STORM with the Cross AU + Error 404 AU combine, the jumpscare trio and the
        // Wenda & Gray necklaces, and the cross-pero / storm / new-standing footer. Beat 122 spans cyc in
        // [2402,2424]; cyc=2413 -> lt~11, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2402.0; loopVs.cyc=2413.0; loopVs.phase=122; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2413.0; loopVs.phase=122; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "opcutscene": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 121 (THE OP CUTSCENE ERA): the four-step turn loop with the travelling
        // marker, THE STAFF SWITCH with its two conditional rankings + the PERO HAS THE WHOLE GAME box, and the
        // no-move-is-just-a-move / staff-is-the-hinge / clean-rule footer. Beat 121 spans cyc in [2380,2402];
        // cyc=2391 -> lt~11, past every staged fade-in, with the WITH STAFF ladder lit.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2380.0; loopVs.cyc=2391.0; loopVs.phase=121; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2391.0; loopVs.phase=121; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "songchart": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP -- freeze on beat 120 (THE SONG CHART): the four-entry popularity chart with animated bars, Pinki's two-source
        // fusion box + Pero & Pinki taking down Gray, and the title-is-the-rule / mimic-beats-retake /
        // not-the-end-of-Gray footer. Beat 120 spans cyc in [2358,2380]; cyc=2369 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2358.0; loopVs.cyc=2369.0; loopVs.phase=120; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2369.0; loopVs.phase=120; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "dustlightpero": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 112 (DUST LIGHT PERO — INFINITY+ LV, THE GAME-GOD): the gold-white divine
        // light overtaking a fading void, THE DUSTING panel (Void Frizz dissolving into dust vs Dust Light Pero in a dove
        // pose w/ the divine arsenal) and THE GOD TAKEOVER chain ending at "DEFINED THE GAME". Beat 112 spans cyc in
        // [2182,2204]; cyc=2195 -> lt~13, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2182.0; loopVs.cyc=2195.0; loopVs.phase=112; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2195.0; loopVs.phase=112; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "lv12pero": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 110 (LV 12 PERO — THE COUNTER-GOD): the gold-on-deep-blue stable god void,
        // THE GOD-LV RULE panel (FRIZZ LV 4 red anomaly vs PERO LV 12 gold stable, "LV 12 beats LV 4") and THE LOCKED-LV
        // RANKING panel (1. LV 12 Pero, 2. LV 4 Frizz, 3. everyone else). Beat 110 spans cyc in [2138,2160]; cyc=2151 ->
        // lt~13, past every staged fade-in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=2138.0; loopVs.cyc=2151.0; loopVs.phase=110; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=2151.0; loopVs.phase=110; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "slaindeath": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 102 (HE SLAIN HIS OWN DEATH — "VICTORY IS MINE"): the slain-death crimson void,
        // HE SLAIN HIS OWN DEATH panel (the cracked, slashed reaper skull) and the "VICTORY IS MINE" panel (the quote box +
        // ToddLLM holding Gray on puppet strings). Beat 102 spans cyc in [1962,1984]; cyc=1973 -> lt~11.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=1962.0; loopVs.cyc=1973.0; loopVs.phase=102; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=1973.0; loopVs.phase=102; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "thirdstrongest": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 160 (THE THIRD STRONGEST): Toby's whole canon line, the top-three board
        // with the bracket joining Pero and Tunner, what New Chara still has, and her seat history across the day.
        // Beat 160 spans cyc in [3238,3260]; cyc=3252 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3238.0; loopVs.cyc=3252.0; loopVs.phase=160; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3252.0; loopVs.phase=160; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "nosecondplace": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 161 (NO SECOND PLACE): Toby's whole canon line, the board with the
        // shared top seat and the struck-out empty 2, the rules that settle bodies-vs-beings, and the count panel
        // showing her as the second being still carrying the third number.
        // Beat 161 spans cyc in [3260,3282]; cyc=3274 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3260.0; loopVs.cyc=3274.0; loopVs.phase=161; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3274.0; loopVs.phase=161; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "luigigreen": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 162 (LUIGI GREEN): Toby's whole canon line, the board with Pero/Tunner
        // first, Luigi Green filling seats 2 to infinitith, and New Chara dropped to fourth; the WHAT HE BRINGS
        // powers box; the second-main-character panel with Luigi Green drawn and his Simon 404 rivalry; and Pero's
        // favorite box with the "I won't let you touch him" quote.
        // Beat 162 spans cyc in [3282,3304]; cyc=3296 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3282.0; loopVs.cyc=3296.0; loopVs.phase=162; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3296.0; loopVs.phase=162; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "villain": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 163 (THE VILLAIN OF THE GAME): Toby's whole canon line, the theft
        // visual with power streaming into Luigi Green, the TWO GOALS panel (make Pero love him / destroy everyone),
        // and the WHY HE IS ALMOST IMPOSSIBLE stack.
        // Beat 163 spans cyc in [3304,3326]; cyc=3318 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3304.0; loopVs.cyc=3318.0; loopVs.phase=163; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3318.0; loopVs.phase=163; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sharesfirst": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 164 (SHARES FIRST WITH PERO): Toby's whole canon line, the HE NEVER
        // GOES EASY figure holding Simon 404 in a green orb with Mr. Black and Gray absorbed, the shared-top board,
        // the two-real-villains box, and the BOTH CONTROL CLASSICS difference panel.
        // Beat 164 spans cyc in [3326,3348]; cyc=3340 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3326.0; loopVs.cyc=3340.0; loopVs.phase=164; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3340.0; loopVs.phase=164; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "chessboard": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 165 (THE CHESS BOARD): Toby's whole canon line, THE CRYSTAL panel with
        // the cast dots pulled into one crystal, the 2ND OLDEST identity chain, and THE CHESS BOARD panel where the
        // game is remade as Luigi Green's board with green pieces.
        // Beat 165 spans cyc in [3348,3370]; cyc=3362 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3348.0; loopVs.cyc=3362.0; loopVs.phase=165; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3362.0; loopVs.phase=165; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "biggercoffin": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 167 (THE BIGGER COFFIN): Toby's whole canon line, the age order with
        // Alex's deletion number, the toolkit + Gray reading Simon's books into the ultimate LAI bot orb, the void
        // experiment with Pero controlling it, and the bigger coffin that Pero and Gray wait on.
        // Beat 167 spans cyc in [3392,3414]; cyc=3408 -> dt~16, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3392.0; loopVs.cyc=3408.0; loopVs.phase=167; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3408.0; loopVs.phase=167; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "samedna": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 166 (THE SAME DNA): Toby's whole canon line, the SAME DNA panel with
        // Alex absorbing Luigi Green, the GREG AND ALEX hero/villain split, the 1 PERO / 2 ALEX / 3 EVERYONE ELSE
        // board, and the Alphaverse gate with Pero fallen beside it.
        // Beat 166 spans cyc in [3370,3392]; cyc=3384 -> dt~14, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3370.0; loopVs.cyc=3384.0; loopVs.phase=166; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3384.0; loopVs.phase=166; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "sleepcode": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 168 (THE SLEEP CODE): the sleep-code cutscene with Simon curled asleep
        // and Tunner/Pero beside him, the WHO CAN MAKE SIMON SLEEP shutoff ladder and Mr. Black's fake-Pero weapon,
        // the PUPAHYA — KING OF BRAINROTS friend map, Mr. Tree with Simon and Tunner asleep on either side, and the
        // ALEX & LICA link. Beat 168 spans cyc in [3414,3436]; cyc=3430 -> dt~16, late enough that every panel has
        // faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3414.0; loopVs.cyc=3430.0; loopVs.phase=168; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3430.0; loopVs.phase=168; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
    "endlesschessboard": """
      try {
        handleConfirm();
        for (var i=0;i<60;i++){ keys['ArrowRight']=(i%30<15); update(1/60); }
        if (typeof restore!=='undefined'){ restore.done=true; restore.glow=1; restore.active=false; }
        if (typeof peace!=='undefined'){ peace.done=true; peace.glow=1; peace.active=false; }
        for (var j=0;j<150;j++){ keys['ArrowRight']=(j%40<14); update(1/60); }
        if (typeof restore!=='undefined'){ restore.glow=0; }
        if (typeof peace!=='undefined'){ peace.glow=0; }
        if (typeof battle!=='undefined'){ battle.glow=0; }
        var stages = ['phase2','exposed','executioner','atomix','residual','sounds','voidwar','judge','triad','scf','scf404','treads','firey','alien','wall','smooth','hallu','plague','danger','codex','web','clara','claraAdmin','power','oren','betray','dimension','deletion','weakness','pursuit','reckoning','toddllm','reveal001','errLad','centerMine','endlessChaos','karuto','endOfClassics','godWall','phaseProg','acumin','highForm','claraVs'];
        for (var s=0;s<stages.length;s++){ var nm=stages[s];
          try { var o=eval(nm); if(o){ o.active=false; o.done=true; o.glow=0; o.t=6.5; } } catch(e){} }
        // THE UNDEFINED LOOP — freeze on beat 169 (THE ENDLESS CHESSBOARD): Luigi Green locked on Undertoad AU as a
        // pixel figure, his "give me LV and KR" / Pero's "No, I don't feel like it" exchange, THE COLLECTION panel with
        // the spoils gathered into one pile, and THE LOCK panel where Pero seals the endless chessboard down to three
        // pieces. Beat 169 spans cyc in [3436,3458]; cyc=3452 -> dt~16, late enough that every panel has faded in.
        if (typeof loopVs!=='undefined'){
          loopVs.active=true; loopVs.done=false; loopVs.glow=1;
          loopVs.t=3436.0; loopVs.cyc=3452.0; loopVs.phase=169; loopVs.cat=1.0;
        }
        if (typeof loopVsM!=='undefined'){ loopVsM=0.6; }
        for (var m=0;m<2;m++){ update(1/60); }
        if (typeof loopVs!=='undefined'){ loopVs.glow=1; loopVs.cyc=3452.0; loopVs.phase=169; loopVs.cat=1.0; }
        if (typeof floaters!=='undefined'){ floaters.length=0; }
        if (typeof winFlash!=='undefined'){ winFlash=0.2; }
        if (typeof glitch!=='undefined'){ glitch=0.02; }
        if (typeof tauntT!=='undefined'){ tauntT=0; }
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,
}

def find_chrome():
    for p in CHROME_CANDIDATES:
        if os.path.exists(p):
            return p
    raise SystemExit("No Chromium/Chrome binary found in known locations.")

def main():
    if len(sys.argv) < 2:
        raise SystemExit("usage: capture_screenshot.py OUT.png [title|play|cure]")
    out = os.path.abspath(sys.argv[1])
    scene = sys.argv[2] if len(sys.argv) > 2 else "title"

    html = open(GAME, "r", encoding="utf-8").read()
    src_url = "file://" + GAME
    tmp_path = None
    if scene in SCENES:
        inject = "<script>setTimeout(function(){%s}, 0);</script>" % SCENES[scene]
        if "</body>" in html:
            html = html.replace("</body>", inject + "\n</body>", 1)
        else:
            html = html + inject
        fd, tmp_path = tempfile.mkstemp(suffix=".html", dir="/tmp")
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(html)
        src_url = "file://" + tmp_path

    chrome = find_chrome()
    cmd = [
        chrome, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
        "--force-device-scale-factor=1", "--window-size=540,760",
        "--virtual-time-budget=2000", "--screenshot=" + out, src_url,
    ]
    try:
        subprocess.run(cmd, check=True, capture_output=True, timeout=60)
    finally:
        if tmp_path and os.path.exists(tmp_path):
            os.remove(tmp_path)

    if not os.path.exists(out) or os.path.getsize(out) < 1000:
        raise SystemExit("Screenshot failed or empty: " + out)
    print("wrote", out, os.path.getsize(out), "bytes  (scene=%s)" % scene)

if __name__ == "__main__":
    main()
