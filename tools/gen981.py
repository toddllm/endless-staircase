#!/usr/bin/env python3
"""
gen981.py - emit the draw branch for BEAT 981 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-980 (emit_tail933.py).

  3:17 PM  1a103331d9556397  -> 981 (Pycho Fury)

Only Toby's first paragraph is canon; the italic recap and the link summary under it are the
chatbot's. His 3:34 PM message (1a10342e57e59ad9) is a chatbot image prompt for Gaster using
Pychotethicalicia, so it gets no beat.
"""
import io

BASE = 981
TAG = '981'
START = 21302.0
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

add(meta('3:17 PM'), 'PYCHO FURY', '255,96,96',
    ['“GASTER TAKES THE POWER, HE BECOMES',
     'THE MOST POWERFUL GASTER... PYCHO FURY IS',
     'EVEN MORE POWERFUL THAN GASTER’S POWER.”'],
    [('NO ONE ELSE GETS IT',
      ['WILL GASTER GIVE POWER TO ANYONE ELSE? NO.',
       'GASTER TAKES THE POWER AND KEEPS IT.'],
      'ALL OF COMICAL NEKA STAYS INSIDE HIM (BEAT 980).'),
     ('THE THING IN THIS THING',
      ['PYCHO FURY IS THE THING IN THAT FIGHT',
       'TIMES PRESSURETALE GASTER’S POWER.'],
      'HIS LINK: A GLITCHTALE FIGHT SCENE (3/3).'),
     ('MORE THAN GASTER',
      ['PYCHO FURY IS EVEN MORE POWERFUL',
       'THAN GASTER’S OWN POWER.'],
      'THE STRONGEST BEING HAS AN ATTACK STRONGER THAN HIM.'),
     ],
    ['THE POWER COMES IN. NONE OF IT GOES OUT.',
     'ONLY AS PYCHO FURY.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
