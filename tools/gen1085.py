#!/usr/bin/env python3
"""
gen1085.py - draw the branches for BEATS 1085-1086 from Toby's October 12, 2026, 6:55-6:57 AM messages
(thread 1a1204179c8e973f "Another Document", msgs 1a12fc13e00fcc28, 1a12fc2c78e0803b). Same template as
1008-1084 (emit_tail1008.py). Only Toby's own lines are drawn; the italic restatements under them (clean
punctuation, "onward without end", "fear of Alex's authority") are the chatbot's rewrites and are commentary.
"""
import io

BASE = 1085
TAG = "1085"
START = 23590.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10', 11: 'OCTOBER 11', 12: 'OCTOBER 12'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 12, 6:55 AM ----------------
add(meta(12, '6:55 AM'), 'INFINITY ROOMS', '120,200,255',
    ['“AREA12X IS SPLIT INTO INFINITY ROOMS CALLED', '“AREAS” AND IT WOULD BE AREA 0, AREA 1,', 'AREA 2, AREA 3,...”'],
    [('THEIR OWN ROOM', ['OCT 8, 7:14 PM: “EVERYONE HAS THEIR OWN ROOM.', 'NEKA HAS THE WHOLE PLACE.”'],
      'FOUR DAYS LATER THE ROOMS GET A NAME: AREAS.'),
     ('AREA 0', ['6:55 AM: “...AREA 0, AREA 1, AREA 2, AREA 3,...”'],
      'THE COUNT STARTS AT ZERO, THE WAY CODE COUNTS.'),
     ('INFINITY', ['6:55 AM: “SPLIT INTO INFINITY ROOMS”'],
      'THERE IS ALWAYS ONE MORE AREA PAST THE LAST ONE.')],
    ['“INFINITY ROOMS CALLED ‘AREAS’”', 'ONE FACILITY. NO LAST NUMBER.'])

# ---------------- October 12, 6:57 AM ----------------
add(meta(12, '6:57 AM'), 'THE FINAL AREA', '200,120,255',
    ['“THE FINAL AREA IS A MYTH, PEOPLE SAY IT IS', 'WHERE EVER ALEX STANDS IN CLASSICS.”', '“...ALEX CAN BASICALLY TAKE THEM OUT OF CODE”'],
    [('A MYTH', ['6:57 AM: “THE FINAL AREA IS A MYTH”'],
      'NO LAST NUMBER, SO PEOPLE INVENTED A LAST ROOM.'),
     ('WHERE EVER ALEX STANDS', ['6:57 AM: “...IT IS WHERE EVER ALEX', 'STANDS IN CLASSICS.”'],
      'NOT A ROOM NUMBER. A PERSON. IT MOVES WHEN HE MOVES.'),
     ('OUT OF CODE', ['6:57 AM: “ALEX CAN BASICALLY TAKE THEM OUT OF', 'CODE, CAN DELETE CLASSICS ACCOUNTS”'],
      'CODE RAN OUT THE DOOR LAST NIGHT FOR THE SAME REASON.')],
    ['“THE FINAL AREA IS A MYTH”', 'THE LAST ROOM IS WHEREVER HE IS.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
