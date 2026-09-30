#!/usr/bin/env python3
"""
gen956.py - emit the draw branch for BEAT 956 from Toby's September 30, 2026 message,
thread 1a0deee4cb24addb. Same template as 933-955 (emit_tail933.py).

  6:26 PM  1a0f46d8bc182b33  -> 956  (the Nullified sword; everything connects to Pressure)

The 6:16 PM message 1a0f464392f12c54 is a bare "create an image" ask (orange eyes, six black
wings) and gets NO BEAT. Only Toby's typing is drawn: the opening paragraph, from "Correct." to
"Everything in the lore connects to the Pressure game." The restatement after it is the chatbot's.
"Oren.ps" is his spelling here and is kept.
"""
import io

BASE = 956
TAG = '956'
START = 20752.0
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

A626 = meta('6:26 PM')

add(A626, 'EVERYTHING CONNECTS TO PRESSURE', '255,150,60',
    ['“OREN.PS ALSO CAN HOLD A LARGE SWORD, IT IS MADE BY ALL OF THE VOID ITSELF, MAKING IT NULLIFIED.',
     'NEKA CREATES DIAMOND EYES, HOLES, AND NEON PATTERNS ONTO OREN.EXE. ALL THE CHARACTERS THEN BECAME',
     'THE STYLE OF SIMPLE-NEON-THING. ... EVERYTHING IN THE LORE CONNECTS TO THE PRESSURE GAME.”'],
    [('THE NULLIFIED SWORD',
      ['A LARGE SWORD MADE BY ALL OF THE VOID ITSELF.',
       'SEPT 30, 5:03 PM: THE TERMINATORS OF THE NULLIFIED VOID.'],
      'THE WHOLE VOID, HELD IN ONE HAND.'),
     ('DIAMOND EYES, HOLES, NEON',
      ['NEKA PUTS THEM ONTO OREN.EXE. EVERY CHARACTER GOES SIMPLE-NEON-THING.',
       'THE DIAMOND EYES RULE: THEY CAN ONLY SEE THE DIAMOND EYES.'],
      'THE WHOLE CAST, ONE STYLE.'),
     ('MADE FROM STARS',
      ['NEKA MADE MINDY STARCHILD BY STARS COLLIDING.',
       'NEKA’S FIRST STAGE: THE LARGEST SUPERNOVA OF ALL FICTION COMBINING.'],
      'MINDY STARCHILD, OF STAR STEED.'),
     ],
    ['NEKA SUMMONS ALL THE CHARACTERS OVER. TIME PARANOID, LUIGI INUS, CLOCKWORKS, CLOCKS AND GEARS.',
     'EVERYTHING IN THE LORE CONNECTS TO THE PRESSURE GAME.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
