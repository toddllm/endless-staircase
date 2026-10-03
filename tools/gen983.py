#!/usr/bin/env python3
"""
gen981.py - emit the draw branch for BEAT 983 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-982 (emit_tail933.py).

  3:43 PM  1a1034b0f4a25d2d  -> 983 (nil:Destroy())

Only Toby's first paragraph (through nil:Destroy()) is canon; the italic explanation of the
corrupted code under it is the chatbot's.
"""
import io

BASE = 983
TAG = '983'
START = 21346.0
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

add(meta('3:43 PM'), 'NIL:DESTROY()', '255,84,150',
    ['“IT CALCULATES 4=5, THEN IT DOES IT.',
     'AND IT HAS ALL THE BROKEN CODE AND ERRORS',
     'AND BUGS AND GLITCHES IN THE GAME NOW.”'],
    [('4=5',
      ['if 4=5 then 2=2 game:Destroy()',
       'ALL THAT STUFF WAS SEEN.'],
      'THE CODE IS WRONG, AND IT RUNS ANYWAY.'),
     ('ERROR=TRUE',
      ['Error=true then end end end end end end end',
       'end))))))))))))))))))(((((((((((((((('],
      'NOTHING CLOSES. THE BRACKETS NEVER MATCH.'),
     ('VOID:DESTROY()',
      ['Void:Destroy()',
       'if Void~nil then nil:Destroy()'],
      'FIRST THE VOID GOES. THEN NOTHING ITSELF.'),
     ],
    ['THE GAME, THEN THE VOID, THEN NIL.',
     'THE WHITE VOID FROM BEAT 978 IS GONE TOO.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
