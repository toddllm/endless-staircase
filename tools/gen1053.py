#!/usr/bin/env python3
"""
gen1053.py - draw branch for BEAT 1053 from Toby's October 10, 2026, 9:08 AM message
(thread 1a1204179c8e973f "Another Document", msg 1a125ee00cbcb55e).
Same template as 1008-1052 (emit_tail1008.py).

NO BEAT: the 8:34 AM "make them playable" build request and the 9:07 AM image request.
Only Toby's own two sentences are drawn; the italic retelling under them is pasted chatbot
commentary and is not drawn.
"""
import io

BASE = 1053
TAG = "1053"
START = 22886.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 10 ----------------
add(meta(10, '9:08 AM'), 'A SPRUNKI MOD', '255,170,60',
    ['“DID YOU KNOW SPRUNKIS ARE FROM', 'AN INCREDIBOX MOD CALLED “SPRUNKI”?', 'YEAH, AND CLASSICS WILL BE A SPRUNKI MOD.”'],
    [('CLASSICS IN SPRUNKI', ['APRIL 8: “THIS ACTUALLY IS CLASSICS,', 'CLASSICS IN SPRUNKI.”'],
      'SIX MONTHS AGO. THE SAME SENTENCE.'),
     ('ONLY AN INCREDIBOX', ['MAY 14: “CLASSIC SPRUNKI IS', 'ONLY AN INCREDIBOX.”'],
      'THE LORE MOVED INTO THE MISSING TUNMON.'),
     ('OREN.PS FOUND OUT', ['SEPT 29: HE WAS FROM A MOD, NOT EVEN', 'THE ORIGINAL GAME OF INCREDIBOX.'],
      'AND HUMANS MADE THE SPRUNKIS.')],
    ['A MOD OF A MOD OF INCREDIBOX.', 'AND THE STAIRCASE ENDS IN A CALM ONE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
