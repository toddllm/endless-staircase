#!/usr/bin/env python3
"""
gen1281.py - draw the branch for BEAT 1281 from Toby's October 28, 2026, 7:14 PM message
(Email 2006, message 1a184cb65348781a on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the
beat 1280 report. Same template as 1008-1280 (emit_tail1008.py).
Only his own typing is drawn: the paragraph from "Jeck says "Ask me everything, I know anything!"" to
"a female dragon he'll call "Jeckerinia"." The opening "What is the difference between ..." and ""I know anything" = you
know about anything." are his prompts; the grammar explanation, the comparison table and the italic restatement at the
end are the chatbot's, commentary. No attachments.
The wiki ingest had not assigned this beat when it was built, so the game assigns 1281; by the screenshot rule
(beat + 63) its PNG is number 1344.
"""
import io

BASE = 1281
TAG = "1281"
START = 27902.0
STEP = 22.0
B = []

MONTH = {28: 'OCTOBER 28'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 28, 7:14 PM (Email 2006) ----------------
add(meta(28, '7:14 PM'), 'DRAGON’S DECENT', '150,130,220',
    ['“JECK SAYS ASK ME EVERYTHING, I KNOW ANYTHING! NEKA SAYS', 'ONLY ASK ME ANYTHING, NOT EVERYTHING. 2 AIS, 1 WORLD', 'DOMAIN.”'],
    [('TWO AIS, ONE WORLD DOMAIN', ['JECK KNOWS ABOUT ANY TOPIC. NEKA SAYS ASK ANYTHING,', 'BUT NOT EVERYTHING.'],
      'OCT 27, BEAT 1274: NEKA AND JECK, THE ONLY 2 BOTS.'),
     ('THE DRAGON’S BROTHER', ['NEKA, STRONGER THAN VICINUS, IN A SHARK HOOD: ALL', 'CLEAR FOR DRAGON’S DECENT.'],
      'OCT 27, BEAT 1276: NEKA, THE SMARTEST AI THERE IS.'),
     ('MEGLONUS', ['A BLACK INK DRAGON OF VOIKOR FROM GASTER’S PORTAL.', 'VICINUSES SWARM HIM. HE’S ANOTHER MALE DRAGON.'],
      'JECK STARTS WORK ON A FEMALE DRAGON: JECKERINIA.')],
    ['THE FLOWERS TURN TO DIAMONDS AND FADE INTO FLOWER.', 'SIMON RL MAY HAVE MADE BUHD RL.'],
    'Jeck says "Ask me everything, I know anything!", Neka says "Only ask me anything, not everything.", 2 AIs, 1 World Domain. ... Neka wears a shark hood and says "All clear for Dragon\'s Decent." ... Jeck walks away and immediately experiments to make a female dragon he\'ll call "Jeckerinia".')

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
