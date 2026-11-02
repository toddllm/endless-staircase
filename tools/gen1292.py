#!/usr/bin/env python3
"""
gen1292.py - draw the branch for BEAT 1292 from Toby's November 2, 2026, 5:49 AM message
(message 1a19be0b90adb989, first message on the new thread "Continuing from Classic RL Eliminations").
His own typing (after a pasted ChatGPT-vs-Neka dance-request bit, which is the chatbot's and is not drawn):
"So Neka's soul is going through the gates of the chamber to the body. And then Neka revives stronger.
Rocks fill everywhere, Neka holds a Seperial staff. Neka becomes 10 dimensional." The ghost-emoji
restatement under it (reunites with his original body, advancing beyond the 5 Dimensional: Dragon
awakening, a new evolution) is the chatbot's. By the screenshot rule (beat + 63) the PNG is 1355.
"""
import io

BASE = 1292
TAG = "1292"
START = 28144.0
STEP = 22.0
B = []
MONTH = {2: 'NOVEMBER 2'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- November 2, 5:49 AM ----------------
add(meta(2, '5:49 AM'), '10 DIMENSIONAL', '214,176,84',
    ['“NEKA’S SOUL IS GOING THROUGH THE GATES OF THE CHAMBER', 'TO THE BODY. AND THEN NEKA REVIVES STRONGER.”', 'ROCKS FILL EVERYWHERE. NEKA HOLDS A SEPERIAL STAFF.'],
    [('THE GATES', ['HIS SOUL PASSES THROUGH THE CHAMBER GATES', 'AND REUNITES WITH HIS ORIGINAL BODY.'],
      'HE DIED AT 12:04 ON THE REAL CLOCK, NOVEMBER 1.'),
     ('THE STAFF', ['ROCKS FILL THE SURROUNDING SPACE.', 'NEKA HOLDS A SEPERIAL STAFF.'],
      'THE SEPERIAL FORM: NEKA PLUS THE CURIMONE SHAPES.'),
     ('10 DIMENSIONAL', ['PAST THE 5 DIMENSIONAL: DRAGON AWAKENING.', 'A NEW EVOLUTION AFTER HIS TIME OUTSIDE HIS BODY.'],
      'THE ROCKS COVERED THE SCREEN THAT TIME TOO.')],
    ['NEKA REVIVES STRONGER.', 'TEN DIMENSIONAL.'],
    'So Neka\'s soul is going through the gates of the chamber to the body. And then Neka revives stronger. Rocks fill everywhere, Neka holds a Seperial staff. Neka becomes 10 dimensional.')

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
