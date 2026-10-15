#!/usr/bin/env python3
"""
gen1170.py - draw the branch for BEAT 1170 from Toby's October 15, 2026, 6:48 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a141c12f5b97935 Email 1814), which arrived while beats
1168-1169 were being built. No attachments. Same template as 1008-1169 (emit_tail1008.py). Only his own typed line is
drawn: Oren.ps cut off mid-word, "You asked for a cookie, not the whole computer.", Oren.ps brings Simon.ps, Simon.ps VS
Neka in cleverness for so many hours. The restatement under it ("Neka twists ... No winner has been established yet.")
is the chatbot's, commentary.
"""
import io

BASE = 1170
TAG = "1170"
START = 25460.0
STEP = 22.0
B = []

MONTH = {15: 'OCTOBER 15'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 15, 6:48 PM (Email 1814) ----------------
add(meta(15, '6:48 PM'), 'SIMON.PS VS NEKA IN CLEVERNESS', '255,216,79',
    ['“OREN.PS SAYS “I SAID NOT THE COMPUTER-”, NEKA SAYS', '“YOU ASKED FOR A COOKIE, NOT THE WHOLE COMPUTER.” ...', 'SIMON.PS VS NEKA IN CLEVERNESS ... FOR SO MANY HOURS.”'],
    [('HE CUT HIM OFF MID-WORD', ['“I SAID NOT THE COMPUTER-”. THE DASH IS HIS. NEKA DID', 'THE SAME TO NOVA ON SEPT 24, “JUST BY TALKING”.'],
      'A COOKIE, NOT THE WHOLE COMPUTER. HE HEARD. HE PLAYED.'),
     ('PLAYFUL AND SMART LIKE NEKA', ['OCT 14: SIMON.PS IS “THE ONE BEHIND OREN.PS”. OCT 13:', 'HE FELL OVER AT EACH DESSERT WHILE OREN.PS WALKED CLOSER.'],
      'OREN.PS BRINGS THE ONE WHO IS BEHIND HIM.'),
     ('SO MANY HOURS', ['5:48 PM: THE PLAYER STRUCK DOWN ALL 20 SPRUNKIS, SIMON.PS', 'INCLUDED. NOW SIMON.PS IS BACK, AND THE CONTEST IS WORDS.'],
      'CLEVERNESS, NOT POWER. IT CONTINUED FOR SO MANY HOURS.')],
    ['SIMON.PS VS NEKA IN CLEVERNESS.', 'A COOKIE, NOT THE WHOLE COMPUTER. THEN HOURS OF IT.'])

bad = []
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        if len(ln) > 60: bad.append((b['key'], len(ln), ln))
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            if len(ln) > 58: bad.append((b['key'], len(ln), ln))
assert not bad, bad

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
