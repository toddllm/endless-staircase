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
