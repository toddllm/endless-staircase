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
