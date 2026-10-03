#!/usr/bin/env python3
"""
gen985.py - emit the draw branch for BEAT 985 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-984 (emit_tail933.py).

  4:08 PM  1a10362185e144b9  -> 985 (Everything Within)

Only Toby's own top paragraph is drawn (the quoted text below it is the earlier thread).
"""
import io

BASE = 985
TAG = "985"
START = 21390.0
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

add(meta('4:08 PM'), 'EVERYTHING WITHIN', '235,235,245',
    ['“GASTER CONTAINS CLASSICS, PRESSURE,',
     'ALL CLASSICS GAMES, AND EVERY BEING IN FICTION,',
     'AND FICTION ITSELF.”'],
    [('THE GAMES',
      ['CLASSICS. PRESSURE.',
       'EVERY CLASSICS GAME.'],
      'ALL OF THEM ARE INSIDE PRESSURETALE GASTER.'),
     ('EVERY BEING',
      ['EVERY FICTIONAL BEING,',
       'NEKA OMAZEN AND ALL HIS ABSORBED FORMS.'],
      'THEIR POWER IS INSIDE HIM TOO.'),
     ('FICTION ITSELF',
      ['the framework that holds their stories',
       'is held by him.'],
      'THE CONTAINER IS CONTAINED.'),
     ],
    ['HIS INFINITE CODE IS MORE THAN HIS ATTACKS.',
     'IT HOLDS EVERYTHING INSIDE HIM.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
