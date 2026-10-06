#!/usr/bin/env python3
"""
gen997.py - emit the draw branches for BEATS 997-999 from Toby's October 4, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-996 (emit_tail933.py).

  8:43 AM  1a106f1558407e92  -> 997 (Black/White)
  8:46 AM  1a106f3e45f710f4  -> 998 (Into the Stomach)
  8:47 AM  1a106f4d9efde089  -> 998 (energy and fuel)
  8:56 AM  1a106fce750ee104  -> 999 (Sans and Papyrus)
  9:00 AM  1a10701102ddb390  -> NO BEAT (image request)

Only Toby's own first sentences are drawn; the italic retellings after them read like
pasted chatbot rewrites and the quoted text below is the earlier thread.
"""
import io

BASE = 997
TAG = "997"
START = 21654.0
STEP = 22.0
DATE_LONG = 'October 4'
DATE_SHORT = 'OCT 4'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 4, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

add(meta('8:43 AM'), 'BLACK/WHITE', '225,225,235',
    ['“INSTEAD OF BREAKING STUFF,',
     'IT STORES EVERYTHING INSIDE IT.”'],
    [('BLACK/WHITE',
      ['ONE ABILITY.',
       'IT STORES, IT DOES NOT BREAK.'],
      'ONLY GASTER HAS IT.'),
     ('ALL COLORS',
      ['BLACK/WHITE PLUS BLUE,',
       'RED, PURPLE AND THE REST.'],
      'COMBINED INTO ONE TECHNIQUE.'),
     ('THE VOID',
      ['THE SPACE OF',
       'REALITY AND TIME.'],
      'HIS OWN TECHNIQUE.'),
     ],
    ['BEYOND PULLING AND REPELLING.',
     'WHAT IT CATCHES, IT KEEPS.'])

add(meta('8:46 AM'), 'INTO THE STOMACH', '150,95,215',
    ['“REALITY ITSELF LITERALLY GETS STORED IN,',
     'IT HAS INFINITE SPACE.”'],
    [('THE ENTRANCE',
      ['THE VOID LEADS INTO',
       'PRESSURETALE GASTER’S STOMACH.'],
      'STORED, NOT DESTROYED.'),
     ('INFINITE SPACE',
      ['CLASSICS, PRESSURE, BEINGS,',
       'SPACE AND TIME ALL FIT.'],
      'IT NEVER GETS FULL.'),
     ('FUEL',
      ['WHAT HE ABSORBS',
       'BECOMES ENERGY AND FUEL.'],
      'MORE INSIDE, MORE POWER.'),
     ],
    ['THE VOID IS A DOOR',
     'INTO GASTER HIMSELF.'])

add(meta('8:56 AM'), 'SANS AND PAPYRUS', '255,130,120',
    ['“I NEED THE SOULS',
     'TO MAKE ME CONTINUE ON.”'],
    [('THE PULL',
      ['BLACK/WHITE PULLS LIKE A BLACK HOLE.',
       'SANS: “WE DON’T HAVE TO FIGHT ABOUT THAT!”'],
      'SANS HITS. “WE DO ABOUT THAT!”'),
     ('HANDS VS BLASTERS',
      ['GASTER SUMMONS HANDS.',
       'SANS SUMMONS BLASTERS, AND PAPYRUS.'],
      'GASTER GASPS.'),
     ('TWO VS ONE',
      ['THE TWO OF THEM',
       'MAKE GASTER SO TIRED.'],
      'SANS STRIKES HIM DOWN.'),
     ],
    ['THE TEAM RULE HOLDS.',
     'SANS AND PAPYRUS WIN TOGETHER.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
