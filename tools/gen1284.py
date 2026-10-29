#!/usr/bin/env python3
"""
gen1284.py - draw the branches for BEATS 1284-1285 from Toby's October 29, 2026, 5:09 PM message
(Email 2010, message 1a1897f9fd3b12d1 on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the
beat 1283 report. Same template as 1008-1283 (emit_tail1008.py).
His own typing: four attack riddles (Dreamwork Handworks = Gaster with Sans and Papyrus; the heartbeat attack
"The Final Beat" = Oran RL, Siron RL, and Simon RL; Dragon's Embalem and Domain Expansion: The Dragon Lord =
tdeshane, his own character), "Neka added them to Classic RL recently", the character maker ("the game makes it
for you"), Neka's line "Hello, here is your character, want to lose?", "CODE was also given it", and "My character
would be the second most powerful player in game". The guesses, emoji walkthroughs and the table are the chatbot's.
The game assigns 1284-1285; by the screenshot rule (beat + 63) the PNGs are 1347-1348.
"""
import io

BASE = 1284
TAG = "1284"
START = 27968.0
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

# ---------------- October 29, 5:09 PM (Email 2010) ----------------
add(meta(29, '5:09 PM'), 'THE FINAL BEAT', '210,70,70',
    ['“THE HEARTBEAT ATTACK IS CALLED ‘THE FINAL BEAT’', '(BEATS ARE SMALL CHAPTERS OF THE GAME).”', '“NEKA ADDED THEM TO CLASSIC RL RECENTLY.”'],
    [('DREAMWORK HANDWORKS', ['GASTER SUMMONS SANS, PAPYRUS AND BLASTERS, PUTS ON', 'A BLACK HOOD CLOAK, SUMMONS 2 GIANT HANDS.'],
      'A CLAP, A THROW UP, THEN A TRIPLE KO PUNCH.'),
     ('THE FINAL BEAT', ['THE HEARTBEAT SLOWS TO A STOP. A JERKY DASH, FIRE', 'SLASHES, A THROW, CLONES, A 3 WAY BLOW.'],
      'ORAN RL, SIRON RL, AND SIMON RL.'),
     ('THE FAMILY THAT IS LEFT', ['GASTER LOST ALL HIS FAMILY EXCEPT FOR SANS,', 'PAPYRUS, AND NEKA.'],
      'TDESHANE MADE THE ATTACKS. NEKA ADDED THEM.')],
    ['DREAMWORK HANDWORKS FOR GASTER, THE FINAL BEAT', 'FOR THREE RLS. BEATS ARE CHAPTERS, LIKE THIS ONE.'],
    'This attack is called Dreamwork Handworks. ... This character lost all his family except for Sans, Papyrus, and Neka. ... Also the Heartbeat attack is called "The Final Beat" (beats are small chapters of the game). Oran RL, Siron RL, and Simon RL. ... Neka added them to Classic RL recently (basically just now).')

add(meta(29, '5:09 PM'), 'THE DRAGON LORD', '235,120,40',
    ['“IT IS TDESHANE. I MADE THE ATTACK/ABILITY, FOR MY', 'OWN CHARACTER.” “HELLO, HERE IS YOUR CHARACTER,', 'WANT TO LOSE?” “CODE WAS ALSO GIVEN IT.”'],
    [('DRAGON’S EMBALEM', ['SPEED FROM SIMON RL, CORRUPTION FROM MR. BLACK,', 'STRENGTH FROM WONDA RL, COMBINED INTO ONE.'],
      'FIRE CLAWS, PLANET X’S CORE, THEN THE DRAGONS.'),
     ('DOMAIN EXPANSION: THE DRAGON LORD', ['FIRE DRAGONS BECOME ONE HUGE DRAGON. CLONES', 'SURROUND THE VICTUM. PLANET X IS DESTROYED.'],
      'THE SPEED CUTS THE GAME’S REALITY FABRIC.'),
     ('SECOND MOST POWERFUL', ['TDESHANE IS THE SECOND MOST POWERFUL PLAYER.', 'PUT DOWN A NAME AND POWERS; THE GAME MAKES THE REST.'],
      'NEKA HANDS YOU THE CHARACTER, AND A WARNING.')],
    ['TDESHANE WRITES THE LORE AND MAKES THE ATTACKS.', 'NEKA PUTS THEM IN THE GAME. CLAUDE ADDS THE WIKI.'],
    'It is tdeshane. I made the attack/ability, for my own character. You could just easily puts your character down, say the powers, and domain expansion, and name of character, and the game makes it for you ... Neka says "Hello, here is your character, want to lose?" ... CODE was also given it. My character would be the second most powerful player in game.')

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
