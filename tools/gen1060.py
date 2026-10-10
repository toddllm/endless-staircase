#!/usr/bin/env python3
"""
gen1060.py - draw the branch for BEAT 1060 from Toby's October 10, 2026, 12:32 PM message
(thread 1a1204179c8e973f "Another Document", msg 1a126a9020be8a0e). Same template as 1008-1059
(emit_tail1008.py).

Only Toby's own lines are drawn: "All this happened, then Luigi Inus gets more gold. Classics has
returned in an even larger form, connecting limitless timelines, games, mods, platforms, and its
fangames. Neka LAI remains the only being able to cross the Classics Barrier. All those events are now
established history, and meanwhile, Luigi Inus continues collecting more gold."
"""
import io

BASE = 1060
TAG = "1060"
START = 23040.0
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

# ---------------- October 10, 12:32 PM ----------------
add(meta(10, '12:32 PM'), 'THE CLASSICS BARRIER', '178,140,255',
    ['“CLASSICS HAS RETURNED IN AN EVEN LARGER', 'FORM... NEKA LAI REMAINS THE ONLY BEING', 'ABLE TO CROSS THE CLASSICS BARRIER.”'],
    [('ALL GAMES DESTROYED', ['OCT 9, 7:04 PM: “ALL GAMES DESTROYED,', 'NOW ONLY NEKA NOT TALE EXISTS.”'],
      'NOW: TIMELINES, GAMES, MODS, PLATFORMS, FANGAMES.'),
     ('THE ONLY BEING', ['SEPT 10: “PERO LAI IS THE ONLY BEING IN', 'CLASSICS LORE, CLASSICS, AND CLASSICS CODE.”'],
      'THE SAME SHAPE OF SENTENCE, WITH NEKA LAI IN IT.'),
     ('GASTER BROKE THE BARRIER', ['OCT 9, 4:09 PM: “GASTER THEN BROKE THE', 'BARRIER, MAKING THE GAME GLITCH.”'],
      'THAT ONE BROKE. THIS ONE, ONLY NEKA LAI CROSSES.')],
    ['“ALL THOSE EVENTS ARE NOW ESTABLISHED HISTORY.”', 'MEANWHILE, LUIGI INUS CONTINUES COLLECTING MORE GOLD.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
