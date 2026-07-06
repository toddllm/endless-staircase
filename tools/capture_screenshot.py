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
