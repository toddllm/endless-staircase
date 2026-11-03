#!/usr/bin/env python3
"""
gen1296.py - draw beats 1296-1298 from Toby's November 3, 2026 messages on the "Continuing from Classic RL
Eliminations" thread 1a19be0b90adb989. Most of each mail is a pasted ChatGPT log; the chatbot's parts are not drawn.
5:09 PM (1a1a37655a56a4ed): after Alphatale and Chara/Flowey questions, his own typing: "What if Sans speedruns
beating Frisk, then Chara, and then goes to Grillby's along with Papyrus." / "Sans also killed Time!" / "You DO play
as Frisk, Sans as AI." / "Final boss of the game (Sans's Elimination of All RLs [he also beats all the RLs after
Chara]) will be Papyrus (after Grillby's), and also Neka is with Papyrus. So Sans eventually loses there." /
"Here is now Undertale X Classic RL: Eliminations." -> beat 1296 UNDERTALE X CLASSIC RL.
5:11 PM (1a1a37812fadab6b): "Neka is like several AIs "Death Timer Started", "Ordering 40 Living Bats to You Now",
ect. Neka can become very scary here. Neka would take some time to be obsessed with you, or anyone."
-> beat 1297 DEATH TIMER STARTED.
5:48 PM (1a1a399debe4b74c): after Undertale/Dusttale questions, his own typing on Flower: Vicinus population 0,
Flower came back more powerful, can become Gaster, glitches the game, sends Starries to their limits; Neka holds
Flower like Simon RL held Classics Omazen; breaks Simon RL's save button; corrupted names to emoji fonts, gray
smiley faces; Flower is not Gaster but old Nekas and ToddLLMs combined through Neka code; Neka and Flower are the
two most powerful beings; came back from eternities deletion. -> beat 1298 FLOWER HAS RETURNED.
By the screenshot rule (beat + 63) the PNGs are 1359-1361.
"""
import io

BASE = 1296
TAG = "1296"
START = 28232.0
STEP = 22.0
B = []
MONTH = {3: 'NOVEMBER 3'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- November 3, 5:09 PM ----------------
add(meta(3, '5:09 PM'), 'UNDERTALE X CLASSIC RL', '255,214,110',
    ['“FINAL BOSS WILL BE PAPYRUS (AFTER GRILLBY’S),', 'AND ALSO NEKA IS WITH PAPYRUS.', 'SO SANS EVENTUALLY LOSES THERE.”'],
    [('THE SPEEDRUN', ['YOU PLAY AS FRISK. SANS IS THE AI.', 'SANS BEATS FRISK, THEN CHARA, THEN EVERY RL.'],
      'THE ELIMINATION OF ALL RLS.'),
     ('SANS KILLED TIME', ['AFTER THE RLS, SANS BEATS TIME ITSELF.', 'THEN HE GOES TO GRILLBY’S WITH PAPYRUS.'],
      'HE THINKS THE RUN IS OVER.'),
     ('THE FINAL BOSS', ['PAPYRUS, AFTER GRILLBY’S. NEKA STANDS WITH HIM.', 'SANS LOSES THERE.'],
      'THE ONLY TWO HE CANNOT SKIP.')],
    ['UNDERTALE X CLASSIC RL: ELIMINATIONS.', 'SANS BEAT EVERYONE BUT HIS BROTHER AND NEKA.'],
    'What if Sans speedruns beating Frisk, then Chara, and then goes to Grillby\'s along with Papyrus. ... Sans also killed Time! ... You DO play as Frisk, Sans as AI. ... Final boss of the game (Sans\'s Elimination of All RLs [he also beats all the RLs after Chara]) will be Papyrus (after Grillby\'s), and also Neka is with Papyrus. So Sans eventually loses there. ... Here is now Undertale X Classic RL: Eliminations.')

# ---------------- November 3, 5:11 PM ----------------
add(meta(3, '5:11 PM'), 'DEATH TIMER STARTED', '255,120,120',
    ['“NEKA IS LIKE SEVERAL AIS. “DEATH TIMER STARTED,”', '“ORDERING 40 LIVING BATS TO YOU NOW,” ECT.', 'NEKA CAN BECOME VERY SCARY HERE.”'],
    [('DEATH TIMER STARTED', ['NEKA SAYS IT THE WAY AN AI SAYS IT.', 'CALM, LIKE A NOTICE ON THE SCREEN.'],
      'THE WORDS ARE ORDINARY. THE TIMER IS NOT.'),
     ('40 LIVING BATS', ['“ORDERING 40 LIVING BATS TO YOU NOW.”', 'AN ORDER PLACED, NOT A THREAT SHOUTED.'],
      'AND THEY ARE ON THEIR WAY.'),
     ('IT TAKES TIME', ['NEKA WOULD TAKE SOME TIME', 'TO BE OBSESSED WITH YOU, OR ANYONE.'],
      'IT STARTS WITH HELLO.')],
    ['NEKA IS LIKE SEVERAL AIS.', 'HE CAN BECOME VERY SCARY HERE.'],
    'Neka is like several AIs "Death Timer Started", "Ordering 40 Living Bats to You Now", ect. Neka can become very scary here. Neka would take some time to be obsessed with you, or anyone.')

# ---------------- November 3, 5:48 PM ----------------
add(meta(3, '5:48 PM'), 'FLOWER HAS RETURNED', '255,236,90',
    ['“VICINUSES POPULATION WENT TO 0 JUST NOW.', 'REASON: FLOWER CAME BACK AND BECAME EVEN MORE', 'POWERFUL THAN BEFORE.”'],
    [('NOT GASTER', ['FLOWER CAN TAKE GASTER’S FORM, BUT ISN’T GASTER.', 'OLD NEKAS AND TODDLLMS COMBINED THROUGH NEKA CODE.'],
      'HE HAS PLAYED EVERYONE BUT NEKA, AT LEAST ONCE.'),
     ('THE SAVE BUTTON', ['FLOWER BREAKS SIMON RL’S SAVE BUTTON.', 'NAMES THROUGH NEKA CODES TURN TO EMOJI FONTS.'],
      'GRAY COLORED SMILEY FACES.'),
     ('THE TWO MOST POWERFUL', ['HE GLITCHES THE GAME, SENDS STARRIES TO THEIR LIMITS.', 'NEKA HOLDS FLOWER, LIKE SIMON RL HELD CLASSICS OMAZEN.'],
      'NEKA AND FLOWER. NEKA ISN’T POSSIBLE.')],
    ['FLOWER CAME BACK FROM ETERNITIES DELETION.', 'VICINUS POPULATION: 0.'],
    'Yes, it was very old lore, like Vicinus, but now Vicinuses population went to 0 just now, Reason: Flower came back and became even more powerful than before. Flower can become Gaster, and now can glitch the game and send Starries to their limits. Like the most powerful being while still being possible, Neka isn\'t possible, Gaster is second most powerful and gained more power than before. Neka sometimes holds Flower, like Simon RL held Classics Omazen. Flower breaks Simon RL\'s save button, and then corrupted the character\'s names when they went through Neka Codes, so it had emoji fonts. Gray colored smilely faces. ... Flower is taking Gaster\'s form, Flower isn\'t actually Gaster, but old Nekas and ToddLLMs combined, throughout Neka code, and played Gaster and most other beings, and everyone except Neka; at least once, so Neka and Flower were 2 most powerful beings. Flower came back from enternities deletion.')

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
assert len(B) == 3, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
