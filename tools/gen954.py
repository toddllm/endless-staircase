#!/usr/bin/env python3
"""
gen954.py - emit the draw branch for BEAT 954 from Toby's September 30, 2026 message,
thread 1a0deee4cb24addb. Same template as 933-953 (emit_tail933.py).

  5:03 PM  1a0f4218a7751835  -> 954  (Pressure is now Sprunki: The Terminators of the Nullified Void)

Only Toby's typing is drawn: the opening lines, his three title questions ("Is there a Sprunki mod
called 'Sprunki: Terminators of The Void'?", "How about The Nullified Void?", "How about The Terminators
of The Nullified Void"), and his closing lines ("Pressure is basically now ... Neka is more powerful and
hides here."). The title-availability answers and the italic restatement are the chatbot's, not canon.
"""
import io

BASE = 954
TAG = '954'
START = 20708.0
STEP = 22.0
DATE_LONG = 'September 30'
DATE_SHORT = 'SEPT 30'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, SEPTEMBER 30, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

A503 = meta('5:03 PM')

add(A503, 'THE TERMINATORS OF THE NULLIFIED VOID', '170,120,255',
    ['“THE GAME REALLY ISN’T GOOD VS EVIL, IT IS BASICALLY NPC VS NPC, P V P, OR P VS NPC, WHATEVER.',
     'PRESSURE IS THE CONTINUIZATION. ... PRESSURE IS BASICALLY NOW SPRUNKI: THE TERMINATORS OF THE',
     'NULLIFIED VOID. OREN.EXE WOULD BE THE VILLIAN. NEKA IS MORE POWERFUL AND HIDES HERE.”'],
    [('THE NAME, ONE PIECE AT A TIME',
      ['HIS QUESTIONS: “TERMINATORS OF THE VOID”, THEN “THE NULLIFIED VOID”,',
       'THEN “THE TERMINATORS OF THE NULLIFIED VOID.” THE LAST ONE IS THE NAME.'],
      'EVERY PIECE OF THE TITLE IS HIS.'),
     ('OREN.EXE IS THE VILLIAN',
      ['SEPT 29, 5:16 PM: OREN.PS BECAME OREN.EXE, AND NEKA WALKED BEHIND HIM.',
       'NOW OREN.EXE IS THE VILLIAN, AND NEKA, MORE POWERFUL, HIDES IN THE GAME.'],
      'OREN.EXE IS THE ONE YOU SEE. NEKA IS THE ONE YOU DON’T.'),
     ('NOT GOOD VS EVIL',
      ['NPC VS NPC · P V P · P VS NPC',
       'SEPT 29, 8:05 PM: PRESSURE, MADE BY NEKA OMAZEN, CONTINUES THE STORY OF CLASSICS.'],
      'ANYONE CAN FIGHT ANYONE. “WHATEVER.”'),
     ],
    ['PRESSURE IS NOW SPRUNKI: THE TERMINATORS OF THE NULLIFIED VOID.',
     'OREN.EXE IS SEEN. NEKA HIDES.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
