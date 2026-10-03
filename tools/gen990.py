#!/usr/bin/env python3
"""
gen988.py - emit the draw branches for BEAT 990 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-989 (emit_tail933.py).

  5:38 PM  1a103b437c77148d  -> 990 (Two Beings)

Only Toby's own lines are drawn (quoted text below them is the earlier thread).
"""
import io

BASE = 990
TAG = "990"
START = 21500.0
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

add(meta('5:38 PM'), 'TWO BEINGS', '255,120,140',
    ['“FRISK AND CHARA ARE 2 DIFFERENT BEINGS,',
     'BUT CHARA SOMETIMES TAKES CONTROL OF FRISK.”'],
    [('FRISK',
      ['GOES NICE WITH EVERYONE.',
       'THE PACIFIST SIDE.'],
      'KINDNESS IS THE ROUTE.'),
     ('CHARA',
      ['BEATS EVERYONE.',
       'the Genocide side.'],
      'SOMETIMES SHE TAKES CONTROL OF FRISK.'),
     ('NEUTRAL',
      ['SOMETIMES THE CHOICES MIX',
       'KINDNESS WITH FIGHTING.'],
      'AND NEITHER ROUTE WINS.'),
     ],
    ['PACIFIST VS GENOCIDE:',
     'THE FIGHT IS OVER WHO CONTROLS THE ROUTE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
