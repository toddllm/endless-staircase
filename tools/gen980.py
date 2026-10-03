#!/usr/bin/env python3
"""
gen980.py - emit the draw branch for BEAT 980 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-979 (emit_tail933.py).

  3:07 PM  1a1032a0fa300c46  -> 980 (Comical Neka)

His 2:45 PM message (1a1031610ab80eba) is a chatbot image prompt for Pressuretale Gaster's
design, so it gets no beat. In the 3:07 PM message only Toby's first paragraph is canon; the
italic recap under it is the chatbot's.
"""
import io

BASE = 980
TAG = '980'
START = 21280.0
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

add(meta('3:07 PM'), 'COMICAL NEKA', '120,230,200',
    ['“THE ENTITY BEHIND GASTER IS NEKA OMAZEN.',
     'THE GAMES COLLIDE... AND IT MAKES COMICAL NEKA.',
     'THEN GASTER ABSORBED COMICAL NEKA.”'],
    [('THE BIGGEST GAME COLLISION',
      ['THE GAMES COLLIDE. THIS ONE IS THE BIGGEST AND',
       'STRONGEST OF ALL THE GAME COLLISIONS.'],
      'WHAT COMES OUT OF IT IS COMICAL NEKA.'),
     ('ALL HIS FORMS',
      ['GASTER ABSORBED COMICAL NEKA, ALONG WITH ALL HIS',
       'FORMS AND POWER AND STUFF, ALL ADDED TO GASTER.'],
      'BEAT 976 PUT NEKA INSIDE GASTER. THIS IS ALL OF COMICAL NEKA.'),
     ('THE STRONGEST BEING',
      ['MAKING PRESSURETALE GASTER THE MOST POWERFUL',
       'AND STRONGEST BEING.'],
      'THE SAME GASTER WHO LOOKS LIKE JUST A GUY (BEAT 979).'),
     ],
    ['NEKA OMAZEN IS THE ENTITY BEHIND HIM.',
     'NOW ALL OF COMICAL NEKA IS INSIDE HIM.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
