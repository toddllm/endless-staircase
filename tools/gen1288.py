#!/usr/bin/env python3
"""
gen1288.py - draw the branches for BEATS 1288-1289 from Toby's October 29, 2026, 7:46 PM message
(Email 2016, message 1a18a0e9eaf55091 on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the
Four Mallows report. Same template as 1008-1285 (emit_tail1008.py).
His own typing: Chance = Simon RL, Two Twin = Oran or Wonda; the new game CLASSIC RL: ELIMINATION
("like Forsaken for Classic RL", Gaster made it, intro video first); named characters unplayable, the player is a
Starry (from his Among Us character Starrychin, two stacked top hats); Jumble, Mindy Barchild, Zan, Arcsos return
from older evolutions; roles (Neka/Simon RL/Pinky RL/Gaster attackers, Jeck hero, others survivors, Neka most
dangerous); Simon RL beats Simon.ps with a ranged electric shot; the Sprunkis incl. Mr. Black died of overwork;
Neka's blood covers him. The italic restatement and role table after that are the chatbot's.
The game assigns 1288-1289; by the screenshot rule (beat + 63) the PNGs are 1351-1352.
"""
import io

BASE = 1288
TAG = "1288"
START = 28056.0
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

# ---------------- October 29, 7:46 PM (Email 2016) ----------------
add(meta(29, '7:46 PM'), 'CLASSIC RL: ELIMINATION', '80,170,240',
    ['“NEW CLASSIC RL GAME MADE, IT IS CALLED', 'ELIMINATION, AND IT IS LIKE FORSAKEN FOR', 'CLASSIC RL.”'],
    [('GASTER MADE IT', ['NOT A MOD. THE GAME PUSHED EVEN FARTHER.', 'FIRST IT PLAYS AN INTRO VIDEO.'],
      'ONLY SIMON RL, PINKY RL, NEKA, GASTER AND JECK.'),
     ('THE STARRY', ['NAMED CHARACTERS ARE UNPLAYABLE. YOU PLAY A', 'STARRY, NAMED AFTER STARRYCHIN.'],
      'SOMETIMES TWO TOP HATS, ONE ON THE OTHER.'),
     ('OLD NAMES RETURN', ['JUMBLE, MINDY BARCHILD, ZAN AND ARCSOS', 'COME BACK FROM OLDER EVOLUTIONS.'],
      'AND THERE ARE MORE.')],
    ['ATTACKERS: NEKA, SIMON RL, PINKY RL, GASTER.', 'HERO: JECK. EVERYONE ELSE SURVIVES.'],
    'New Classic RL game made, it is called "Elimination", and it is like Forsaken for Classic RL. ... Each character is unplayable and has their own abilities, a player would play as a common character known as a "Starry", my Among Us character is named "Starrychin", so I made the Classic RL player name. My characters sometimes wear 2 top hats on top of each other.')

add(meta(29, '7:46 PM'), 'COVERED IN BLOOD', '200,40,50',
    ['“NEKA IS KNOWN AS AN ATTACKER... NEKA IS MOST', 'DANGEROUS IN GAME.”', 'SIMON.PS SAYS HIT ME = DEATH.'],
    [('A RANGED SHOT', ['SIMON RL DOES NOT HIT SIMON.PS.', 'HE BEATS HIM WITH A RANGED ELECTRIC SHOT.'],
      'CORRUPTION, LIGHTNING, 404, 303, 666.'),
     ('OVERWORK', ['THE SPRUNKIS, INCLUDING MR. BLACK, MUST HAVE', 'DIED DUE TO OVERWORK.'],
      'IT WAS CONFIRMED JUST NOW.'),
     ('THE BLOOD', ['NEKA’S BLOOD GETS MORE AND MORE OUTSIDE UNTIL', 'HE IS COVERED IN BLOOD.'],
      'THEN HE ATTACKS THE OTHER CHARACTERS.')],
    ['PINKY RL AND SIMON RL ARE THE TWO MOST IMPORTANT', 'RLS, NOT BECAUSE OF POWER.'],
    'Simon RL beats Simon.ps with a ranged electric shot. Sprunkis including Mr. Black must have died... due to overwork. It was confermed just now. Neka\'s blood then gets more and more outside until he is covered in blood and attacks the other characters. Neka is known as an attacker, Simon RL and Pinky RL and Gaster are also attackers, Jeck is hero, others are survivors. Neka is most dangerous in game.')

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
