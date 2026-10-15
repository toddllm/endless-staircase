#!/usr/bin/env python3
"""levers1164.py - Simon.ps's two new levers from Toby's Oct 15, 2026, 5:48 PM lore (Email 1811):
"Simon.ps creates a new lever that summons spikes on the Endless Staircase" and the staircase "can shake around".
Additive: two LEVERS rows, activate/run/end branches, spike drawing on the steps. Nothing removed."""
import io
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

def splice(anchor, add, before=False):
    global src
    assert src.count(anchor) == 1, anchor
    src = src.replace(anchor, (add + anchor) if before else (anchor + add), 1)

# 1. the two new rows in LEVERS
splice("  { type:'dud',       name:'...NOTHING HAPPENS',   warn:1.0, act:1.4 },\n",
       "  // Toby, Oct 15 2026, 5:48 PM (Email 1811): \"Simon.ps creates a new lever that summons spikes on the\n"
       "  // Endless Staircase\" ... \"the Endless Staircase now ... can shake around.\"\n"
       "  { type:'spikes',    name:'SPIKES ON THE STAIRCASE', warn:1.3, act:3.6 },\n"
       "  { type:'shake',     name:'THE STAIRCASE SHAKES',  warn:1.0, act:3.0 },\n")

# 2. activateLever: spikes rise on every visible step except the one you stand on
splice("  } else if(lever.type==='dud'){\n    // the lever that does nothing — the cruelest trick of all\n",
       "  } else if(lever.type==='spikes'){\n"
       "    // Oct 15 2026 lore: spikes are summoned onto the steps; the one under your feet stays clear,\n"
       "    // so the hit comes from where you land next, not from where you already are\n"
       "    for(const p of vis){ if(p===platforms[0]) continue;\n"
       "      const onIt = (player.x+player.w*0.35>p.x && player.x-player.w*0.35<p.x+p.w\n"
       "                    && Math.abs((player.y+player.h/2)-p.y)<22);\n"
       "      if(onIt) continue;\n"
       "      p.spikes = 1; }\n"
       "    shake = Math.max(shake, 8);\n"
       "  } else if(lever.type==='shake'){\n"
       "    // Oct 15 2026 lore: the staircase \"can shake around\"\n"
       "    shake = Math.max(shake, 14);\n", before=True)

# 3. runLeverEffect: standing on a spiked step hurts (damage() keeps its own i-frames); shake keeps shaking
splice("  } else if(lever.type==='bridge'){\n    const tx = MARGIN, tw = W-MARGIN*2;\n",
       "  } else if(lever.type==='spikes'){\n"
       "    if(player.onGround){\n"
       "      for(const p of platforms){ if(!p.spikes || p.gone) continue;\n"
       "        if(player.x+player.w*0.35>p.x && player.x-player.w*0.35<p.x+p.w\n"
       "           && Math.abs((player.y+player.h/2)-p.y)<8){ damage(); break; } } }\n"
       "  } else if(lever.type==='shake'){\n"
       "    shake = Math.max(shake, 6 + 6*Math.abs(Math.sin(lever.t*9)));\n", before=True)

# 4. endLever: the spikes sink back into the steps
splice("  for(const p of platforms){ if(p.targetX!==undefined) p.targetX=undefined; }\n",
       "  for(const p of platforms){ if(p.spikes) p.spikes = 0; }\n")

# 5. drawSpikes(): red spikes rising out of the top of a spiked step. First spliced into drawPlatforms, then moved
#    (same session, before the commit) into its own layer drawn just under the player, because the era overlays that
#    sit between the steps and the player dimmed the step layer to near black and the spikes with it.
splice("    // living biting step: teeth on the underside + an eye\n",
       "    // Simon.ps's spike lever (Toby, Oct 15 2026): spikes rise out of the top of the step\n"
       "    if(p.spikes){\n"
       "      const rise = (lever && lever.state==='act') ? Math.min(1, lever.t*3) : 1;\n"
       "      ctx.fillStyle='#ff3b5c';\n"
       "      ctx.beginPath();\n"
       "      const spk=Math.max(3,(w/14)|0);\n"
       "      for(let i=0;i<spk;i++){ const tx=x+(i+0.5)*(w/spk);\n"
       "        ctx.moveTo(tx-4,y); ctx.lineTo(tx,y-10*rise); ctx.lineTo(tx+4,y); }\n"
       "      ctx.fill();\n"
       "    }\n", before=True)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: spikes + shake levers spliced (5 additive edits)')
