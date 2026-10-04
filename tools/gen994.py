#!/usr/bin/env python3
"""
gen994.py - emit the draw branches for BEAT 994 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-993 (emit_tail933.py).

  8:04 PM  1a1043a0cc924156  -> 994 (Game Over Button)

Only Toby's own first sentence is drawn; the italic retelling after it reads like a
pasted chatbot rewrite and the quoted text below is the earlier thread.
"""
import io

BASE = 994
TAG = "994"
START = 21588.0
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

add(meta('8:04 PM'), 'GAME OVER BUTTON', '255,90,90',
    ['“GASTER PICKS UP A RESET BUTTON,',
     'THEN EVERYTHING RESETS.”'],
    [('RESET',
      ['GASTER PICKS UP THE RESET BUTTON.',
       'HE PRESSES IT. EVERYTHING RESETS.'],
      'THE RUN STARTS OVER.'),
     ('REWRITE',
      ['GASTER CHANGES THE BUTTON.',
       'RESET BECOMES 「ゲームオーバー」.'],
      'NOW IT SAYS GAME OVER.'),
     ('GAME OVER',
      ['HE PRESSES IT AGAIN.',
       'THE RUN ENDS.'],
      'AND GASTER WINS.'),
     ],
    ['EVEN THE BUTTON THAT COULD RESTART',
     'THE BATTLE NOW LETS GASTER FINISH IT.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
