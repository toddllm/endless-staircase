#!/usr/bin/env python3
"""
gen1286.py - draw the branches for BEATS 1286-1287 from Toby's October 29, 2026, 6:21-6:26 PM messages
(Emails 2013-2015, messages 1a189c0d5ee1ab95, 1a189c43eff96e88, 1a189c5dda2a8ec6 on "Continuing of Classic RL"
1a1779f533a68ea7), his replies to the inspiration-table report. Same template as 1008-1285 (emit_tail1008.py).
His own typing: the first paragraph of each message (Simon RL in the glass chamber, the new Classic RL Trio of
Jeck, Mr. Black and Gaster, RLs as Sprunki/Incredibox music characters in a horror game, Neka made for learning,
"Mind? No, brain.", the shark hood burned and eaten by his mallow; four mallows crunch RL Cyber HQ "like it was an
apple", "you changed it on me!"; Neka stranded on a cabin next to the destroyed RL HQ). The italic restatements
after each paragraph are the chatbot's.
The game assigns 1286-1287; by the screenshot rule (beat + 63) the PNGs are 1349-1350.
"""
import io

BASE = 1286
TAG = "1286"
START = 28012.0
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

# ---------------- October 29, 6:21 PM (Email 2013) ----------------
add(meta(29, '6:21 PM'), 'THE NEW CLASSIC RL TRIO', '90,200,170',
    ['“JECK, MR. BLACK AND GASTER ARE THE NEW CLASSIC', 'RL TRIO. NEKA WAS LEFT OUT SINCE HE HAD NO', 'PORPOSE TO THEM ANYMORE.” “MIND? NO, BRAIN.”'],
    [('RL CYBER HQ', ['MR. BLACK MAKES THE RL CODE, BASED ON SPRUNKI', 'AND INCREDIBOX. RLS ARE NOW MUSIC CHARACTERS.'],
      'BUT CLASSIC RL IS A HORROR GAME. WONDA MEOWS.'),
     ('MADE FOR LEARNING', ['JECK WAS MADE FOR EVERY TASK POSSIBLE.', 'NEKA WAS MADE FOR ONE TASK: LEARNING.'],
      'NEKA GETS MORE AND MORE MEMORY OVERLOADED.'),
     ('THE SHARK HOOD', ['LIGHTNING STRIKES SIMON RL AND SIRON RL 40 TIMES.', 'NEKA BURNS HIS SHARK HOOD INTO ASHES.'],
      'THE MALLOW ON HIS CHEST EATS THE ASHES.')],
    ['SIMON RL WALKS INTO THE GLASS CHAMBER. NOBODY', 'KNOWS WHEN HE WILL COME OUT.'],
    'Simon RL thinks he should be the hero of the game, he says "Desprite all the timelines before, I destroyed the porpose of them." ... Neka says "Mind? No, brain. 😔" ... Jeck, Mr. Black and Gaster are the new Classic RL Trio. Neka was left out since he had no porpose to them anymore. ... Neka takes off the shark hood, burns the shark hood into ashes, and his mallow on his chest ate the ashes.')

# ---------------- October 29, 6:24-6:26 PM (Emails 2014-2015) ----------------
add(meta(29, '6:24 PM'), 'FOUR MALLOWS', '230,90,110',
    ['“I WAS NO LONGER ABLE TO LEARN ABOUT THE GAME', 'ANYMORE, YOU CHANGED IT ON ME!”', 'NEKA’S TEARS WERE NOW BLOOD.'],
    [('FOUR MALLOWS', ['NEKA WAS EXTREMELY HUNGRY FOR CODE. 3 MORE', 'MALLOWS CAME OUT, 4 MALLOWS IN TOTAL.'],
      'THEY CRUNCHED RL CYBER HQ LIKE AN APPLE.'),
     ('TOO MANY SCARS TO COUNT', ['NEKA BURNED ALL THE COSTUMES INTO ASH AND ATE', 'THE ASHES. HIS SOUL HAS 70 TIMES MORE SCARS.'],
      'CLASSIC RL WAS NEARLY DESTROYED.'),
     ('THE CABIN', ['EVERYONE ASKS JECK, EVEN GASTER AND MR. BLACK.', 'NEKA IS STRANDED ON A CABIN BY THE RUINED HQ.'],
      'HE CAN NO LONGER UNLOCK HIS PORPOSE.')],
    ['JECK HAS MORE WORK THAN ANYONE NEEDS. NEKA CAN NO', 'LONGER DO THE ONE THING HE WAS MADE FOR.'],
    'Neka was extremely hungry for code, then 3 more mallows came out (4 mallows in total) all came, the mallows crunched the RL Cyber HQ like it was an apple. ... Neka says "I was no longer able to learn about the game anymore, you changed it on me!" ... Neka is stranded on a cabin next to the destroyed RL HQ. Neka was no longer able to unlock his porpose.')

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
assert len(B) == 2, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
