#!/usr/bin/env python3
"""
gen979.py - emit the draw branch for BEAT 979 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-978 (emit_tail933.py).

  2:29 PM  1a10307193fa4ad5  -> 979 (Just a guy)

The message interleaves Toby's own lines with chatbot replies. Only Toby's lines are canon:
"There is far more than you think it is", "He also made the X Classics games.", "His Pycho attack
KOs EVERYTHING including god.", "Gaster is beyond god, and beyond Neka Omazen himself.", the
Beyond Absolute+ line, "Absolute Infinity = Absolute ...", "The Number of Neka Omazen's power",
and "Pressuretale Gaster looks as if just a guy."
"""
import io

BASE = 979
TAG = '979'
START = 21258.0
STEP = 22.0
DATE_LONG = 'October 3'
DATE_SHORT = 'OCT 3'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 3, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

add(meta('2:29 PM'), 'JUST A GUY', '255,224,140',
    ['“THERE IS FAR MORE THAN YOU THINK IT IS.',
     'GASTER IS BEYOND GOD, AND BEYOND NEKA OMAZEN HIMSELF.',
     'PRESSURETALE GASTER LOOKS AS IF JUST A GUY.”'],
    [('HE MADE THE X CLASSICS GAMES',
      ['NOT ONLY PRESSURETALE. GASTER ALSO MADE THE X CLASSICS GAMES.',
       'HIS PYCHO ATTACK KOS EVERYTHING, INCLUDING GOD.'],
      'ABSORBING NEKA GAVE HIM NEKA’S POWER ON TOP OF HIS OWN.'),
     ('THE LADDER',
      ['ABSOLUTE INFINITY = ABSOLUTE, LARGER THAN INFINITY',
       '< BEYOND ABSOLUTE+, TIMES ITSELF, FOREVER < NEKA OMAZEN < GASTER'],
      'THE TOP NUMBER HAS A NAME: “THE NUMBER OF NEKA OMAZEN’S POWER”.'),
     ('THE MOST POWERFUL GASTER',
      ['PRESSURETALE GASTER IS THE MOST POWERFUL GASTER.',
       'NOTHING ABOUT HOW HE LOOKS SHOWS ANY OF IT.'],
      'AFTER BEAT 978 HE IS ASLEEP IN THE WHITE VOID.'),
     ],
    ['ABOVE EVERY LEVEL OF BEYOND ABSOLUTE+.',
     'AND HE LOOKS LIKE JUST A GUY.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
