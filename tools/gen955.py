#!/usr/bin/env python3
"""
gen955.py - emit the draw branch for BEAT 955 from Toby's September 30, 2026 message,
thread 1a0deee4cb24addb. Same template as 933-954 (emit_tail933.py).

  5:25 PM  1a0f4353f0e50d35  -> 955  (Oren.exe goes neon; the takeover; humans hold a universe)

Only Toby's typing is drawn: the opening paragraph, from "Oren.exe became more powerful than ever
before combined" to "only 2 know exist (me, and Neka)". The italic restatement after it is the
chatbot's, not canon. "Dairy" is his spelling (as on Sept 29) and is kept.
"""
import io

BASE = 955
TAG = '955'
START = 20730.0
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

A525 = meta('5:25 PM')

add(A525, 'THE NEON THING', '80,255,210',
    ['“OREN.EXE BECAME MORE POWERFUL THAN EVER BEFORE COMBINED. THE OTHER 19 SPRUNKIS FIGHT OREN.EXE.',
     'NEKA HIDES IN THE VOID. ... OREN.EXE COMPRESSES ITSELF INTO A SIMPLE DESIGN, LIKE IT WAS A NEON THING.',
     'HUMANS ARE THE LARGEST THINGS EVER, THEY HAVE AN ENTIRE UNIVERSE IN THEM.”'],
    [('THE TAKEOVER',
      ['SOME SPRUNKIS ARE TAKEN OVER WITH THE VOID. MR. BLACK WAS TAKEN BY OREN.EXE.',
       'THE ONES WHO SURVIVE GO TO WENDA.PS’S TEAM.'],
      'SEPT 5: THE 19 BEAT MR. BLACK TOGETHER. NOW HE IS ON OREN.EXE’S SIDE.'),
     ('SMALL ON THE OUTSIDE',
      ['ALL THAT POWER, COMPRESSED INTO A SIMPLE NEON DESIGN.',
       'SEPT 29, 5:16 PM: OREN.PS GAINED POWER HE WAS NEVER SUPPOST TO GET.'],
      'THE SIMPLER HE LOOKS, THE MORE HE HOLDS.'),
     ('THE LARGEST THINGS EVER',
      ['HUMANS HAVE AN ENTIRE UNIVERSE IN THEM. THEIR SOULS GO TO HEAVEN.',
       'SEPT 29, 5:16 PM: “HUMANS MADE THE SPRUNKIS.”'],
      'THE ONLY ONES WHO LIVE FOREVER.'),
     ],
    ['NEKA WROTE DOWN MORE STUFF IN HIS INDESTRUCTIBLE DAIRY.',
     'ONLY 2 KNOW IT EXISTS: TOBY, AND NEKA.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
