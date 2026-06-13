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
