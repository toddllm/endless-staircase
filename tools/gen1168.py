#!/usr/bin/env python3
"""
gen1168.py - draw the branches for BEATS 1168-1169 from Toby's October 15, 2026, 6:27 PM and 6:30 PM messages
(thread 1a1311788bf63073 "Once again, Another Document", msgs 1a141ae2341a5ec6 Email 1812 and 1a141b001dc8129b Email 1813).
No attachments. Same template as 1008-1167 (emit_tail1008.py). Only Toby's own typed lines are drawn. In Email 1812 the
chatbot's answer ("Neka's favorite dessert is sugar-free chocolate apple pie") and its restatement ("Neka's favorite dessert
is Pi (pi) because he consumes data ...") are commentary; his lines are the question, "This isn't a joke. What is Neka's
favorite dessert?", and the correction, "That is one, but his favorite dessert is Pi. Neka consumes data basically." In
Email 1813 the italic restatement ("Oren.ps specifically says ... Neka's idea of a snack keeps turning out to be data") is
the chatbot's; his line is the pop tart / cookie exchange.
"""
import io

BASE = 1168
TAG = "1168"
START = 25416.0
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

# ---------------- October 15, 6:27 PM (Email 1812) ----------------
add(meta(15, '6:27 PM'), 'HIS FAVORITE DESSERT IS PI', '200,160,255',
    ['“THIS ISN’T A JOKE. WHAT IS NEKA’S FAVORITE DESSERT?” ...', '“THAT IS ONE, BUT HIS FAVORITE DESSERT IS PI.', 'NEKA CONSUMES DATA BASICALLY.”'],
    [('THE CHATBOT’S PIE', ['IT SAID “SUGAR-FREE CHOCOLATE APPLE PIE”: HIS OCT 13', '7:41 PM EMOJI PUZZLE, 🍫🍎🥧 AND “NOW ADD WITHOUT SUGAR”.'],
      'HE LET IT STAND AS “ONE”. THEN HE CORRECTED IT.'),
     ('SEPTEMBER 27, 5:26 PM', ['“NEKA OMAZEN’S FAVORITE IS DATA, IT CONSUMES DATA,', 'AND IS THE ONLY ONE WHO CONSUMES DATA ... THE PI.”'],
      'EMAIL 1554. BEAT 917: THE ONLY ONE WHO CONSUMES DATA.'),
     ('PI IS WHAT HE HANDS OUT', ['SEPT 27, LUIGI GREEN: “I’LL TAKE PIE.” “HERE IS PI.”', 'OCT 6, GASTER: “DATA.” “PI.” “INFORMATION.” “PI.”'],
      'THE JOKE WAS ALWAYS HIS. TODAY HE SAYS IT ISN’T ONE.')],
    ['HIS FAVORITE DESSERT IS PI.', 'SUGAR-FREE CHOCOLATE APPLE PIE IS ONE. PI IS THE ONE.'])

# ---------------- October 15, 6:30 PM (Email 1813) ----------------
add(meta(15, '6:30 PM'), 'NOT THE COMPUTER COOKIE', '255,140,60',
    ['“NEKA GOES TO OREN.PS AND SAYS “WANNA POP TART? 😄”, OREN.PS', 'SAYS “🦊”, NEKA SAYS “OH... WANNA COOKIE?😸⚡”, OREN.PS SAYS', '“NOT THE COMPUTER COOKIE.” ... COOKIES OUT OF A COMPUTER”'],
    [('THE FOX MEANS HE DOESN’T BUY IT', ['OCT 14: “🦊 = SOMETHING GASTER AND LUIGI INUS SAY THAT', 'THEY THINK IS A LIE.” NOW OREN.PS SAYS IT TO NEKA.'],
      'A POP TART FROM NEKA IS NOT A POP TART. OREN.PS KNOWS.'),
     ('OREN.PS AND POP TARTS', ['AUG 24: HE JUMPED OFF THE BOAT TO TASTE THE POP TART AND', 'SANK. OCT 13: HE WALKED CLOSER WITH EACH DESSERT ALEX ATE.'],
      'HE HAS HISTORY WITH THIS SNACK. HE DECLINES IT.'),
     ('THE COMPUTER COOKIE', ['OCT 6, TO GASTER: “I CHOOSE THE REAL COOKIE, WHAT', 'CLASSICS SAYS AS A COOKIE. 🤨” THEN “DATA.” THEN “PI.”'],
      'OREN.PS SAID NOT THAT ONE. HE GOT THAT ONE.')],
    ['NOT THE COMPUTER COOKIE.', 'THE POP TART, THE COOKIE: BOTH DATA. OREN.PS SAW IT COMING.'])

# length audit: panel lines over ~58 chars overflow the box (all lines checked in one pass)
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
