#!/usr/bin/env python3
"""
gen1283.py - draw the branch for BEAT 1283 from Toby's October 29, 2026, 5:59 AM message
(Email 2008, message 1a1871a15f377a36 on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the
beat 1282 report. Same template as 1008-1281 (emit_tail1008.py).
His own typing: "Neka's Last Timeline move is like this, but without the aftermath and has a black ink dragon,
Neka touches the character and doesn't punch. The character freezes into a sheet of invisable ice." plus his Gemini
prompt (English + Japanese "Last Timeline" text, black ink dragon, "Voikor", Neka touches the character, the dragon's
mouth snaps shut over both, both disappear, the dragon disappears, the character is nowhere, Neka comes back).
The Earth Splitting Strike walkthrough and the numbered "intended sequence" are the chatbot's.
The game assigns 1283; by the screenshot rule (beat + 63) its PNG is 1346.
"""
import io

BASE = 1283
TAG = "1283"
START = 27946.0
STEP = 22.0
B = []

MONTH = {29: 'OCTOBER 29'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 29, 5:59 AM (Email 2008) ----------------
add(meta(29, '5:59 AM'), 'ONLY NEKA COMES BACK', '120,100,190',
    ['“NEKA TOUCHES THE CHARACTER AND DOESN’T PUNCH. THE', 'CHARACTER FREEZES INTO A SHEET OF INVISABLE ICE.”', '“AND THEN NEKA COMES BACK.”'],
    [('A TOUCH, NOT A PUNCH', ['NEKA TOUCHES THE OPPONENT. THEY FREEZE INTO A', 'SHEET OF INVISIBLE ICE.'],
      'NO PUNCH, NO KNOCKBACK, NO AFTERMATH.'),
     ('THE INK DRAGON SNAPS', ['“LAST TIMELINE” IN ENGLISH AND JAPANESE. THE BLACK', 'INK DRAGON RISES. THE TEXT SAYS “VOIKOR.”'],
      'ITS JAWS SNAP SHUT OVER NEKA AND THE OPPONENT.'),
     ('THE OPPONENT IS NOWHERE', ['BOTH VANISH. THE DRAGON VANISHES. THE OPPONENT', 'IS GONE. THEN NEKA COMES BACK, ALONE.'],
      'THAT IS THE POINT OF LAST TIMELINE.')],
    ['LAST TIMELINE: THE DRAGON TAKES TWO, ONE RETURNS.', 'WHERE THE OPPONENT GOES IS STILL TOBY’S TO TELL.'],
    'Neka\'s Last Timeline move is like this, but without the aftermath and has a black ink dragon, Neka touches the character and doesn\'t punch. The character freezes into a sheet of invisable ice. ... the dragon disappears and the anime character is nowhere, and Neka comes back.')

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
