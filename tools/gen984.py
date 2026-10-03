#!/usr/bin/env python3
"""
gen984.py - emit the draw branch for BEAT 984 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-983 (emit_tail933.py).

  4:07 PM  1a10361537b08544  -> 984 (Infinity Lines)

Only Toby's own lines are drawn (thousands more lines; infinity lines, you gave the first 5,547);
the chatbot's binary and 5,547-line file are its replies.
"""
import io

BASE = 984
TAG = "984"
START = 21368.0
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

add(meta('4:07 PM'), 'INFINITY LINES', '170,140,255',
    ['“IN THE ACTUAL GAME, IT HAS INFINITY LINES,',
     'YOU JUST GAVE THE FIRST 5,547.',
     'YOU WOULDN’T BE ABLE TO WRITE THAT.”'],
    [('GASTER’S CANON CODE',
      ['0101010100101010101010101001010101010101101010',
       'if 404 then 404=true game:Destroy()'],
      'THE FRAGMENTS FROM BEATS 982 AND 983 ARE ONLY THE START.'),
     ('THOUSANDS MORE LINES',
      ['“THERE IS FAR MORE, LIKE THOUSANDS',
       'MORE LINES OF CODE.”'],
      'LINE 5,547 IS NOT THE LAST LINE.'),
     ('LINE ∞',
      ['line 5,548 ... line 5,549 ... line ∞',
       'the file ends. the code does not.'],
      'NO FINITE FILE CAN HOLD ALL OF IT.'),
     ],
    ['GASTER’S CODE HAS NO FINAL LINE.',
     'AFTER NIL:DESTROY(), IT KEEPS GOING.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
