#!/usr/bin/env python3
"""
gen995.py - emit the draw branches for BEATS 995-996 from Toby's October 4, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-994 (emit_tail933.py).

  8:11 AM  1a106d41d7a46f57  -> 995 (One On One)
  8:12 AM  1a106d4a9c1e7d43  -> 995 (Simon.ps and Oren.ps)
  8:13 AM  1a106d5660873f09  -> 995 (Neka Omazen)
  8:14 AM  1a106d674454ebc0  -> 995 (the gods' avatar)
  8:36 AM  1a106ea7566a206b  -> 996 (Blue, Red, Purple)

Only Toby's own first sentences are drawn; the italic retellings after them read like
pasted chatbot rewrites and the quoted text below is the earlier thread.
"""
import io

BASE = 995
TAG = "995"
START = 21610.0
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

add(meta('8:11 AM'), 'ONE ON ONE', '120,200,255',
    ['“HE CAN BEAT ANY ONE, BUT WHEN',
     '2 OR MORE ARE TOGETHER, HE CAN LOSE.”'],
    [('1 VS GASTER',
      ['NEKA OMAZEN: GASTER WINS.',
       'THE GODS\u2019 AVATAR: GASTER WINS.'],
      'NOBODY BEATS HIM ALONE.'),
     ('2 VS GASTER',
      ['SIMON.PS: LIGHTNING, ERRORS, RESETS.',
       'OREN.PS: SWORD AND TELEKINESIS.'],
      'TOGETHER THEY CAN WIN.'),
     ('THE CATCH',
      ['IF GASTER SPLITS THEM UP,',
       'IT IS ONE ON ONE AGAIN.'],
      'A TEAM WIN IS POSSIBLE, NOT GUARANTEED.'),
     ],
    ['A PRESSURETALE PRO.',
     'HIS ONLY WEAKNESS IS A TEAM.'])

add(meta('8:36 AM'), 'BLUE, RED, PURPLE', '190,110,255',
    ['“NOTHING CAN ESCAPE BLUE ATTACKS,',
     'NOTHING CAN TOUCH RED ATTACKS.”'],
    [('BLUE',
      ['NOTHING CAN ESCAPE IT.',
       'SANS AND PAPYRUS USE IT.'],
      'GASTER USES IT.'),
     ('RED',
      ['NOTHING CAN TOUCH IT.',
       'SANS AND PAPYRUS USE IT.'],
      'GASTER USES IT.'),
     ('PURPLE',
      ['BOTH EFFECTS AT ONCE.',
       'NO ESCAPE, NO TOUCHING IT.'],
      'ONLY GASTER USES IT.'),
     ],
    ['SANS AND PAPYRUS HAVE TWO COLORS.',
     'GASTER HAS THE THIRD.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
