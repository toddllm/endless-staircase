#!/usr/bin/env python3
"""
gen947_948.py - emit the draw branches for BEATS 947-948 from Toby's September 29, 2026 7:08 PM message,
thread 1a0deee4cb24addb, id 1a0ef6d23759b756. Same template as 933-946 (emit_tail933.py).

  7:08 PM  1a0ef6d23759b756  -> 947-948  (Classics is made of data; Neka Treatment Neka)

Only Toby's own typing is drawn: the question ("How do you think Classics will end. Hint- Classics is made of data")
and his answer ("Correct. Neka appears in front of the screen and he consumes the game ..."). The pasted chatbot
guess and its restatement are NOT canon. The "(remove every other tab ...)" wiki request is not a game beat.
"""
import io

BASE = 947
TAG = '947_948'
START = 20554.0
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

A708 = meta('7:08 PM')

add(A708, 'CLASSICS IS MADE OF DATA', '140,230,255',
    ['“HOW DO YOU THINK CLASSICS WILL END. HINT- CLASSICS IS MADE OF DATA”',
     '“CORRECT. NEKA APPEARS IN FRONT OF THE SCREEN AND HE CONSUMES THE GAME.',
     'THAT IS THE NEXT CUTSCENE TO THE NEKA TREATMENT.”'],
    [('THE ONLY ONE WHO CONSUMES DATA',
      ['SEPT 27: NEKA IS THE ONLY ONE WHO CONSUMES DATA.',
       '5:25 PM TODAY THE SCREEN SAID “DATA COLLECTED.”'],
      'AND THE WHOLE GAME IS DATA.'),
     ('IN FRONT OF THE SCREEN',
      ['5:25 PM: “NOW EVERY GAME WILL COME HERE.”',
       'THEN HE STEPS OUT IN FRONT OF THE SCREEN AND EATS THE GAME ITSELF.'],
      'NOT A CHARACTER THIS TIME. ALL OF IT.'),
     ('AFTER THE NEKA TREATMENT',
      ['SEPT 26: AFTER NEKA OMAZEN’S CUTSCENE, THERE IS THE NEKA TREATMENT.',
       'THIS IS THE CUTSCENE THAT COMES NEXT.'],
      'THE ENDING IS A CUTSCENE.'),
     ],
    ['CLASSICS IS MADE OF DATA,',
     'AND NEKA EATS DATA.'])

add(A708, 'NEKA TREATMENT NEKA', '190,255,170',
    ['“OREN.PS REBECOMES HIS GODLY FORM BUT NOW EVEN STRONGER AND COOLER AND MORE POWERFUL,',
     'EVERYONE ELSE GAINED POWER TOO. NEKA DISAPPEARS AND APPEARS IN THE GAME,',
     'NEKA TREATMENT NEKA, HE LOOKS THE COOLEST AND STUFF.”'],
    [('OREN GETS IT BACK',
      ['4:56 PM: OREN.PS BECAME THE NEW CLASSICS GOD. 5:25 PM: WINTER OREN SPRUNKI, NO .PS.',
       '7:08 PM: HE REBECOMES HIS GODLY FORM, STRONGER THAN BEFORE.'],
      '“REBECOMES” IS HIS WORD, AND IT IS KEPT.'),
     ('EVERYONE GAINED POWER TOO',
      ['SEPT 26: IN THE NEKA TREATMENT, EVERYONE ABSORBS SOME CODE.',
       'THIS TIME EVERYONE ELSE GAINED POWER TOO.'],
      'THE WHOLE CAST CHANGES AT ONCE.'),
     ('THE COOLEST',
      ['HE DISAPPEARS FROM IN FRONT OF THE SCREEN',
       'AND APPEARS BACK INSIDE THE GAME HE JUST ATE.'],
      'NEKA TREATMENT NEKA.'),
     ],
    ['IT LOOKED LIKE THE END.',
     'IT WAS ONE MORE CUTSCENE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
