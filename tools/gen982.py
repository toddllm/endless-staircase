#!/usr/bin/env python3
"""
gen981.py - emit the draw branch for BEAT 982 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-981 (emit_tail933.py).

  3:40 PM  1a103485055a1f0e  -> 982 (game:Destroy())

Only Toby's first paragraph (through the code line) is canon; the italic recap and the Lua
note under it are the chatbot's. Code shown is the first 80 of his 481 binary digits.
"""
import io

BASE = 982
TAG = '982'
START = 21324.0
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

add(meta('3:40 PM'), 'GAME:DESTROY()', '178,128,255',
    ['“IN PRESSURETALE, WE KNOW IT IS FAR LARGER,',
     'AND NEKA OMAZEN IS ABSORBED INTO GASTER.',
     'BLUES, REDS, PURPLES.”'],
    [('EVERYTHING COMBINED',
      ['ATTACKS FROM EVERY GAME, EVERY CHARACTER,',
       'EVERYTHING COMBINED.'],
      'BLUE, RED AND PURPLE ARE ALL IN IT.'),
     ('PRESSURE GASTER’S CODE',
      ['0101010100101010101010101001010101010101',
       '1010101011010101000101010101010010101010'],
      'THE FIRST 80 OF HIS 481 DIGITS.'),
     ('A 404 ERROR',
      ['A GASTER BLASTER CONSUMES THE GAME',
       'AND IT GIVES A 404 ERROR.'],
      'if 404 then 404=true game:Destroy()'),
     ],
    ['THE LAST LINE OF HIS CODE IS THE ATTACK.',
     'THE BLASTER EATS THE GAME IT IS IN.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
