#!/usr/bin/env python3
"""
gen1274.py - draw the branch for BEAT 1274 from Toby's October 27, 2026, 5:50 AM message (Email 2000, message
1a17cc54df2240f6 on "Continuing of Classic RL" 1a1779f533a68ea7). Same template as 1008-1273 (emit_tail1008.py).
Only his own typed lines are drawn: "Create an image of Jeck" is his prompt to the chatbot, and the second paragraph
("Jeck has a mustache, and his shirt reads ... The image I made needs ...") is the chatbot's restatement, commentary.
The wiki ingest had not assigned this beat when it was built, so the game assigns 1274 and the title OWNER: 1337;
by the screenshot rule (beat + 63) its PNG is number 1337.
"""
import io

BASE = 1274
TAG = "1274"
START = 27748.0
STEP = 22.0
B = []

MONTH = {27: 'OCTOBER 27'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 27, 5:50 AM (Email 2000) ----------------
add(meta(27, '5:50 AM'), 'OWNER: 1337', '160,200,255',
    ['“JECK ALSO HAS A MUSTACHE, AND HIS SHIRT SAYS ‘OWNER: 1337’,', 'AND HE IS THE FIRST OWNER OF THE FACILITY AT THE FIRST OF', 'CLASSIC RL, THIS IS THE SECOND TIME CLASSIC RL HAPPENED.”'],
    [('A MUSTACHE, LIKE NEKA’S', ['OCT 25: “NEKA DOES HAVE A MUSTACHE.” IT SHRINKS TO 0 WHEN HE', 'BECOMES MR. BLACK. OCT 27: JECK HAS ONE TOO.'],
      'THE ONLY 2 BOTS IN THE GAME, AND THEY SHARE A MUSTACHE.'),
     ('THE FIRST OWNER', ['OCT 26: “A DEFULT OWNER SHIRT.” NOW: “OWNER: 1337”. HE OWNED', 'THE FACILITY FIRST, IN THE FIRST CLASSIC RL.'],
      'OCT 24: FACILITY WORKER, FACILITY OWNER. HE WAS THE FIRST.'),
     ('ONE NUMBER, ALL NUMBERS', ['OCT 25: NEKA IS “FACINATED WITH ALL NUMBERS.” OCT 27: JECK', 'IS OBSESSED WITH 1337, AND ONLY 1337.'],
      'TWO BOTS, TOLD APART BY HOW MANY NUMBERS THEY WANT.')],
    ['OWNER: 1337.', 'THE SECOND BOT GETS A MUSTACHE, A LABEL, AND THE FIRST DEED.'],
    'Also Jeck also has a mustache, and his shirt says "Owner: 1337", and he is the first owner of the facility at the first of Classic RL, this is the second time Classic RL happened. 1337 Jeck is obsessed with the number 1337, as Neka is obsessed with all numbers.')

exec(open('/Users/tdeshane/endless-staircase/tools/rewrap1176.py', encoding='utf-8').read()); rewrap(B)
bad = []
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        if len(ln) > 60: bad.append((b['key'], len(ln), ln))
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            if len(ln) > 58: bad.append((b['key'], len(ln), ln))
    assert len(b['quote']) == 3 and len(b['panels']) == 3 and len(b['close']) == 2, b['key']
assert not bad, bad
assert len(B) == 1, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
