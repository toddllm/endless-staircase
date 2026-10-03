#!/usr/bin/env python3
"""
gen991.py - emit the draw branches for BEAT 991 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-990 (emit_tail933.py).

  5:59 PM  1a103c7d85e4f9e4  -> 991 (Only One Choice)

Only Toby's own first paragraph is drawn; the italic retelling after it reads like a
pasted chatbot rewrite and the quoted text below is the earlier thread.
"""
import io

BASE = 991
TAG = "991"
START = 21522.0
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

add(meta('5:59 PM'), 'ONLY ONE CHOICE', '170,120,255',
    ['“NO. YOU BOTH NEED TO STAY WHERE YOU ARE.',
     'THERE IS ONLY ONE CHOICE HERE.”'],
    [('FRISK',
      ['EQUIPS THE HEART LOCKET.',
       'SENDS ROCKS AT CHARA.'],
      'FIGHTING, EVEN THOUGH FRISK IS KIND.'),
     ('CHARA',
      ['EQUIPS THE REAL KNIFE.',
       'DODGES AND SLASHES THE ROCKS APART.'],
      'STILL MORE AND MORE.'),
     ('GASTER',
      ['SUMMONS A LARGE HAND, THEN SLAMS',
       'HIS FISTS DOWN. ROCKS FLOAT.'],
      'LARGE HANDS REACH IN. BOTH DODGE.'),
     ],
    ['BOTH CHARGE AGAIN AND AGAIN.',
     'GASTER CANNOT HOLD THEM IN PLACE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
