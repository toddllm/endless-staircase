#!/usr/bin/env python3
"""
gen1063.py - draw the branch for BEAT 1063 from Toby's October 10, 2026, 2:54 PM message (thread
1a1204179c8e973f "Another Document", msg 1a1272ab6f3e1e29). Same template as 1008-1062 (emit_tail1008.py).

Only Toby's own lines are drawn: "Alex can go so fast, that human eyes can't comprehend it, even if they
try to slow the motion down. He can break anything with the speed, even atoms and air. Alex would slay
Flash and Sonic. Alex makes the game a Minecraft style world... like him." The italic retelling under it
is the chatbot's and is commentary. The attached picture (a Minecraft-style Alex, purple hair, blue
hoodie, holding a microphone) is his image, not a beat.
"""
import io

BASE = 1063
TAG = "1063"
START = 23106.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 10, 2:54 PM ----------------
add(meta(10, '2:54 PM'), 'FASTER THAN HUMAN EYES', '140,220,90',
    ['“ALEX CAN GO SO FAST, THAT HUMAN EYES CAN’T', 'COMPREHEND IT, EVEN IF THEY TRY TO SLOW THE', 'MOTION DOWN... EVEN ATOMS AND AIR.”'],
    [('PAUSE THE GAME', ['1:30 PM: “ALEX MOVES SO FAST THAT YOU NEED', 'TO PAUSE THE GAME TO SEE HIM.”'],
      'NOW EVEN SLOWED-DOWN MOTION CAN’T SHOW HIM.'),
     ('THE ATOMS OF SPACE', ['OCT 3, 5:12 PM: “PUPAHYA RUNS THE SPEED OF', 'LIGHT, CUTS THE ATOMS OF SPACE.”'],
      'NOW ALEX BREAKS ATOMS AND AIR WITH SPEED ALONE.'),
     ('JUST AN ISLAND', ['MAY 30: “ALEX’S WORLD IS ONE MINECRAFT-STYLE/', 'ANIME GAME WHILE CLASSICS IS A WHOLE PLATFORM.”'],
      'NOW ALEX MAKES THE GAME A MINECRAFT STYLE WORLD.')],
    ['“ALEX WOULD SLAY FLASH AND SONIC.”', 'ALEX MAKES THE GAME A MINECRAFT STYLE WORLD... LIKE HIM.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
