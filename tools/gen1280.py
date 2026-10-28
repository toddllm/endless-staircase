#!/usr/bin/env python3
"""
gen1280.py - draw the branch for BEAT 1280 from Toby's October 28, 2026, 5:28 PM message
(Email 2005, message 1a1846a18ee0d126 on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the
beat 1278-1279 report. Same template as 1008-1279 (emit_tail1008.py).
Only his own typing is drawn: the prompt "What does the Moon do in Mario Maker 2? Does it erase all enemies?" and
the closing line "Jeck is beating the attackers. Neka still isn't seen." The Moon explanation, the Nintendo Life
citation and the italic restatement are the chatbot's, commentary. No attachments.
The wiki ingest had not assigned this beat when it was built, so the game assigns 1280; by the screenshot rule
(beat + 63) its PNG is number 1343.
"""
import io

BASE = 1280
TAG = "1280"
START = 27880.0
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

# ---------------- October 28, 5:28 PM (Email 2005) ----------------
add(meta(28, '5:28 PM'), 'NEKA STILL ISN’T SEEN', '200,210,255',
    ['“WHAT DOES THE MOON DO IN MARIO MAKER 2? DOES IT ERASE ALL', 'ENEMIES? ... JECK IS BEATING THE ATTACKERS. NEKA STILL', 'ISN’T SEEN.”'],
    [('THE MOON', ['IN MARIO MAKER 2 THE MOON CLEARS THE ENEMIES ON THE', 'SCREEN. TOBY ASKS IF IT ERASES THEM ALL.'],
      'OCT 27, BEAT 1276: NEKA IS KNOWN OF ERASE.'),
     ('BEATING THE ATTACKERS', ['JECK KEEPS FIGHTING. THE HERO OF NEKA’S WORLD IS', 'STILL ON THE JOB.'],
      'OCT 27, BEAT 1279: JECK BANS BOBSERVERS. JECK IS A HERO.'),
     ('NOT SEEN', ['NEKA STAYS OUT OF SIGHT. NO ONE LOOKS AT HIM', 'THIS TIME.'],
      'OCT 27, BEAT 1278: NEKA STANDS THERE AND FIGHTS JECK.')],
    ['A MOON THAT CLEARS THE SCREEN, A HERO THAT KEEPS FIGHTING,', 'AND NEKA SOMEWHERE OUT OF SIGHT.'],
    'What does the Moon do in Mario Maker 2? Does it erase all enemies? ... Jeck is beating the attackers. Neka still isn\'t seen.')

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
