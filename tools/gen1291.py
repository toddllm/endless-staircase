#!/usr/bin/env python3
"""
gen1291.py - draw the branch for BEAT 1291 from Toby's October 31, 2026, 8:09 AM message
(message 1a191dd7e2e968e0 on "Continuing of Classic RL" 1a1779f533a68ea7).
His own typing: Dr. Neka stands next to the box with the real Mr. Black and everyone else trapped inside;
Neka says "I'll be your best actor." and pulls a lever, just like the lever Simon.ps pulled since Endless
Staircase 1 (which existed before Classics became a character); the characters shrink, are no longer cramped,
and are now in Classic RL Elimination, while Neka is outside the game, in "the game's reality".
The italic restatements are the chatbot's. By the screenshot rule (beat + 63) the PNG is 1354.
"""
import io

BASE = 1291
TAG = "1291"
START = 28122.0
STEP = 22.0
B = []
MONTH = {31: 'OCTOBER 31'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 31, 8:09 AM ----------------
add(meta(31, '8:09 AM'), 'I’LL BE YOUR BEST ACTOR', '150,90,235',
    ['“I’LL BE YOUR BEST ACTOR.”', 'DR. NEKA STANDS NEXT TO THE BOX.', 'THEN HE PULLS A LEVER.'],
    [('THE BOX', ['THE REAL MR. BLACK AND EVERYONE ELSE', 'ARE TRAPPED IN THE BOX.'],
      'JECK, GASTER AND THE OTHERS, CRAMPED.'),
     ('THE LEVER', ['JUST LIKE THE LEVER SIMON.PS PULLED', 'SINCE ENDLESS STAIRCASE 1.'],
      'IT EXISTED BEFORE CLASSICS WAS A CHARACTER.'),
     ('SHRUNK', ['THE CHARACTERS SHRINK. NO LONGER CRAMPED,', 'THEY ARE NOW IN CLASSIC RL ELIMINATION.'],
      'THE WHOLE GAME FITS INSIDE THE BOX.')],
    ['NEKA IS OUTSIDE THE GAME,', 'IN “THE GAME’S REALITY.”'],
    'Create an image of Dr. Neka standing next to the box, and the real Mr. Black and everyone else trapped in the box. ... Neka then says "I\'ll be your best actor.", then he pulls a lever, just like the lever Simon.ps pulled since Endless Staircase 1. Before Classics became a character, the Endless Staircase 1 existed. The characters then shrunk and now are no longer cramped, but are now in Classic RL Eliminations, while Neka is outside the game to "The game\'s reality"')

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
