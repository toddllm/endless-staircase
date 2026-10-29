#!/usr/bin/env python3
"""
gen1282.py - draw the branch for BEAT 1282 from Toby's October 28, 2026, 7:56 PM message
(Email 2007, message 1a184f1c1b336891 on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the
beat 1281 report. Same template as 1008-1281 (emit_tail1008.py).
His own typing: the prompt "Create an image of Neka *Neka - The Dragon's Brother*, wearing his shark hood and white
lab coat." and "This is the closest I got to the last timeline power, it shows the point, but isn't perfect."
The paragraphs describing the clip (Voikor at his hand, the black dragon, purple energy, black liquid dispersing) are
the chatbot's description of his clip; drawn only as what the clip showed, with the mechanics left open as he said.
The wiki ingest had not assigned this beat, so the game assigns 1282; by the screenshot rule (beat + 63) its PNG is 1345.
"""
import io

BASE = 1282
TAG = "1282"
START = 27924.0
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

# ---------------- October 28, 7:56 PM (Email 2007) ----------------
add(meta(28, '7:56 PM'), 'LAST TIMELINE', '170,90,230',
    ['“NEKA, THE DRAGON’S BROTHER, WEARING HIS SHARK HOOD', 'AND WHITE LAB COAT. THE CLOSEST I GOT TO THE LAST', 'TIMELINE POWER.”'],
    [('SHARK HOOD, LAB COAT', ['NEKA, THE DRAGON’S BROTHER, IN HIS SHARK HOOD AND', 'A WHITE LAB COAT.'],
      'OCT 28, BEAT 1281: ALL CLEAR FOR DRAGON’S DECENT.'),
     ('LAST TIMELINE', ['VOIKOR GATHERS AROUND NEKA’S HAND. THE ENORMOUS', 'BLACK DRAGON. PURPLE ENERGY FILLS THE FACILITY.'],
      'BLACK LIQUID DISPERSES; NEKA STANDS IN PURPLE LIGHT.'),
     ('IT SHOWS THE POINT', ['WHAT THE LAST TIMELINE DOES TO THE TIMELINE', 'IS STILL TOBY’S TO EXPLAIN.'],
      'THE CLOSEST HE GOT. IT SHOWS THE POINT, NOT PERFECT.')],
    ['THE LAST TIMELINE POWER, STILL BEING WORKED OUT.', 'MORE TO COME FROM TOBY.'],
    'Create an image of Neka *Neka \u2014 The Dragon\'s Brother*, wearing his shark hood and white lab coat. ... This is the closest I got to the last timeline power, it shows the point, but isn\'t perfect.')

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
