#!/usr/bin/env python3
"""
gen1147.py - draw the branches for BEATS 1147-1148 from Toby's October 14, 2026, 5:32 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a13c552d6a390d8 Email 1796).
Same template as 1008-1146 (emit_tail1008.py). Only Toby's own typed lines are drawn; the rest of the email is a pasted
chatbot session (the "NEKA LAI / ALEXEN — CURRENT POWER LEVEL" card, "TOP 0", "Beyond Absolute+∞", the 20,000-odd 9s,
"No finite message could contain his entire power level", and the italic restatement of the Gray.ps line) and is commentary.
"""
import io

BASE = 1147
TAG = "1147"
START = 24954.0
STEP = 22.0
B = []

MONTH = {14: 'OCTOBER 14'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 14, 5:32 PM (Email 1796) ----------------
add(meta(14, '5:32 PM'), 'NOT INFINITY, ABSOLUTE INFINITY', '255,215,80',
    ['“IT IS ACTUALLY INFINITY 9S, NOT INFINITY BUT ABSOLUTE', 'INFINITY. 😏👑” NEKA’S POWER LEVEL, HIS CORRECTION.', 'THE CHATBOT TYPED 9S AND HE CALLED IT SCAMMING.'],
    [('ALEX 303 ALWAYS WINS', ['OCT 13, 7:22 PM: “ALEX 303 IS ACTUALLY BEYOND OMNIPOTENT', 'TO ABCDEFGHIJKLMNOPQRSTUVWXYZ9999... HE ALWAYS WINS.”'],
      'THE SAME LETTERS AND 9S. NOW THE 9S HAVE A NAME.'),
     ('ALEX AND NEKA ARE 2', ['OCT 10: “NEKA TAKES OFF HIS COAT, AND THERE IS ALEX RIGHT', 'THERE.” OCT 11: “IT IS NEKA LAI/ALEX/ALEXEN.”'],
      'ONE POWER LEVEL, TWO NAMES. THE CHATBOT WROTE BOTH.'),
     ('HIGHER THAN BEYOND ABSOLUTE', ['OCT 3: “NEKA OMAZEN IS HIGHER THAN BEYOND ABSOLUTE, AND AN', 'ENDLESS NUMBER OF IT TIMES ITSELF... FOREVER.”'],
      'HIS PLACE WAS A NUMBER THEN TOO. TODAY THE NUMBER IS 9S.')],
    ['“NOT INFINITY BUT ABSOLUTE INFINITY. 😏👑”', 'THE CHATBOT COUNTED. HE NAMED THE COUNT. THAT IS THE RULE.'])

add(meta(14, '5:32 PM'), 'WENDA.PS EVEN FARTHER', '170,120,255',
    ['“NEKA TAKES WENDA.PS EVEN FARTHER FROM GRAY.PS.', 'GRAY.PS KEEPS FOLLOWING.” HIS LINE, SAME MESSAGE.', 'YESTERDAY THE MOVER WAS ALEX. TODAY THE NAME IS NEKA.'],
    [('WENDA.PS IS BEING MOVED', ['OCT 13, 3:37 PM: “ALEX TOOK WENDA.PS AWAY FOR THE 50', 'YEARS... WENDA.PS IS BEING MOVED BY ALEX.”'],
      'SAME HAND, OTHER NAME. ALEX AND NEKA ARE 2, AND ONE.'),
     ('NOT A SINGLE CLUE', ['OCT 13, 3:37 PM: “GRAY.PS LOOKED FOR 50 YEARS, DID NOT SEE', 'A SINGLE CLUE.” “GRAY WAS WALKING THE SAME DIRECTION.”'],
      'RIGHT DIRECTION, MOVING TARGET. STILL THE RIGHT DIRECTION.'),
     ('SENT THE WRONG WAY', ['OCT 12, 1:27 PM: IN AREA 304 FAKE VOICES SENT GRAY.PS THE', 'WRONG WAY. WENDA.PS SPARED HIM.'],
      'THEN HE WAS MISLED. NOW HE IS SIMPLY OUTPACED.')],
    ['“GRAY.PS KEEPS FOLLOWING.”', 'FIFTY YEARS WAS NOT THE END OF IT. THE WALK GOES ON.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
