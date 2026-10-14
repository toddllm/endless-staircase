#!/usr/bin/env python3
"""
gen1146.py - draw the branch for BEAT 1146 from Toby's October 14, 2026, 6:40 AM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a13a004c2badbe7 Email 1795).
Same template as 1008-1145 (emit_tail1008.py). Only Toby's own typed lines are drawn; the rest of the email is a pasted
chatbot session about Builderman (the Roblox CEO) and how many avatars it takes to beat him; the chatbot's "1,000,000",
its Builderman tiers, and its "Alex 303 wins, just 1 avatar needed" ruling are commentary, not his.
"""
import io

BASE = 1146
TAG = "1146"
START = 24932.0
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

# ---------------- October 14, 6:40 AM (Email 1795) ----------------
add(meta(14, '6:40 AM'), 'ALEX 303 IN CLASSICS NOW', '120,200,255',
    ['“ALEX 303 IN CLASSICS NOW. 😏” HIS LINE, AFTER ASKING HOW', 'MANY ROBLOX AVATARS IT TAKES TO BEAT BUILDERMAN.', 'THE CHATBOT SAID ALEX WINS WITH ONE. HE DID NOT RULE.'],
    [('DAVID IS ROBLOX?', ['OCT 12, 9:54 AM: HE ASKED WHETHER ROBLOX HAS A FRIEND', 'NAMED BUILDERMAN, AND “DAVID IS ROBLOX?”'],
      'BUILDERMAN WAS A QUESTION TWO DAYS AGO. NOW A MATCHUP.'),
     ('ALEX 303 ALWAYS WINS', ['OCT 13, 7:22 PM: “ALEX 303 IS ACTUALLY BEYOND OMNIPOTENT', 'TO ABCDEFGHIJKLMNOPQRSTUVWXYZ9999... HE ALWAYS WINS.”'],
      'BY HIS OWN RULE, THE NUMBER OF AVATARS IS ONE.'),
     ('TWO UNIVERSES IN REALITY', ['OCT 13, 4:40 PM: “FICTION IS INFINITELY WEAK... ALEX BEATS', 'EVERYTHING, AND THAT IS A LOT OF POWER.”'],
      'ROBLOX IS NOT ONE OF THE TWO. WHERE IS THIS FIGHT HELD?')],
    ['“ALEX 303 IN CLASSICS NOW. 😏”', 'THE CHATBOT PICKED THE WINNER. THE RULING IS STILL HIS.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
