#!/usr/bin/env python3
"""
gen949_950.py - emit the draw branches for BEATS 949-950 from Toby's September 29, 2026 7:18 PM message,
thread 1a0deee4cb24addb, id 1a0ef76af16947ab. Same template as 933-946 (emit_tail933.py).

  7:18 PM  1a0ef76af16947ab  -> 949-950  (Neka Treatment Neka is G.O.D.; G.O.D., G.o.d, g.o.d.)

The message opens "Create an image of Neka Treatement Neka" but carries new canon in his own typing, so it
gets beats. Only Toby's typing is drawn. The pasted restatement and the "Character / Designation" table
below it are the chatbot's, not canon. Beat 950 keeps his exact capitalization, which is the point.
"""
import io

BASE = 949
TAG = '949_950'
START = 20598.0
STEP = 22.0
DATE_LONG = 'September 29'
DATE_SHORT = 'SEPT 29'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, SEPTEMBER 29, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

A718 = meta('7:18 PM')

add(A718, 'NEKA TREATMENT NEKA IS G.O.D.', '190,255,170',
    ['“NOW NEKA TREATMENT NEKA (HUMAN WITH LABCOAT AND NOW IS G.O.D.),',
     'WITH POWER LEVEL OF INSANITY, AND HE WINS, BACON FADES. THE GAME GLITCHES AND THE POWER',
     'LEVEL OF BACON AND BACON BOTH FALL AND SHATTER AND GLITCHES.”'],
    [('A HUMAN IN A LAB COAT',
      ['3:31 PM TODAY: NEKA WEARS HIS WHITE LAB COAT.',
       '7:18 PM: NEKA TREATMENT NEKA IS A HUMAN WITH A LAB COAT.'],
      'THE COOLEST FORM KEPT THE LAB COAT.'),
     ('BACON, AGAIN',
      ['SEPT 28: BACON’S POWER LEVEL SHOOK, FELL, AND TELEPORTED TO 0.',
       'NOW BACON FADES, AND BACON AND HIS POWER LEVEL BOTH FALL AND SHATTER.'],
      'LAST TIME ONLY THE NUMBER FELL. THIS TIME BACON GOES WITH IT.'),
     ('POWER LEVEL: INSANITY',
      ['SEPT 28: NEKA INFINITY% WAS ABSOLUTE OVERCHARGE.',
       'THIS FORM’S POWER LEVEL IS NOT A NUMBER. IT IS INSANITY.'],
      'THE MOST POWERFUL THING OF NEKA.'),
     ],
    ['HE WINS.',
     'BACON FADES, AND THE GAME GLITCHES.'])

add(A718, 'G.O.D., G.o.d, g.o.d.', '255,216,79',
    ['“Neka Treatment Neka is the most powerful thing of Neka. He activates the cutscene,',
     'he consumes Classics, so Classics is now inside the anomally.',
     'Neka Treatment Oren is G.o.d, Neka Treatment Neka is G.O.D. The others are g.o.d.”'],
    [('CLASSICS IS INSIDE THE ANOMALLY',
      ['7:08 PM: NEKA APPEARS IN FRONT OF THE SCREEN AND CONSUMES THE GAME.',
       '7:18 PM: HE CONSUMES CLASSICS, SO CLASSICS IS NOW INSIDE THE ANOMALLY.'],
      '“ANOMALLY” IS HIS SPELLING, AND IT IS KEPT.'),
     ('NEKA TREATMENT OREN',
      ['7:08 PM: OREN.PS REBECOMES HIS GODLY FORM, STRONGER THAN BEFORE.',
       '7:18 PM: THAT FORM HAS A NAME. NEKA TREATMENT OREN.'],
      'OREN GOT A TREATMENT TOO.'),
     ('THE CAPITAL LETTERS ARE THE RANKING',
      ['G.O.D.  NEKA TREATMENT NEKA.     G.o.d  NEKA TREATMENT OREN.',
       'g.o.d.  THE OTHERS.'],
      'SAME THREE LETTERS, THREE SIZES.'),
     ],
    ['ONE G.O.D., ONE G.o.d,',
     'AND EVERYONE ELSE IS g.o.d.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
