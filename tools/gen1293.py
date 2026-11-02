#!/usr/bin/env python3
"""
gen1293.py - draw the branches for BEATS 1293-1294 from Toby's November 2, 2026, 4:43 PM message
(message 1a19e3820ed1cc9c on the "Continuing from Classic RL Eliminations" thread 1a19be0b90adb989), his reply
to the 10 Dimensional report. Most of the mail is a pasted ChatGPT log (Guests vs Robloxians, then a Starry vs Neka
comparison table) and is the chatbot's; only his own typing is drawn.
Beat 1293 STARRY VS NEKA, his own typing: Starries have 100 HP and 50 Stamina, can exit the game, can have any
username, can break normal rules, cannot evolve and cannot see speech bubbles; Neka uses actual health, has 1 Stamina
("LITTERALLY"), runs only a few seconds but flies faster than he walks, cannot exit, cannot customize but shifts his
body parts, is a player (not an NPC) and co-creator who can grant infinite Neka Coins and ban anyone; Neka1, Neka2,
Neka3 usernames; basic rules "All Words are Good" and he says hello; Starry comes from his Among Us name Starrychin,
Neka came from LLM; the 10 dimensional body is the biblical sphere-and-rings kind.
Beat 1294 TODDLLM 003, his own typing at the end: "Also there will be a ToddLLM 003, 10 Dimensional Neka. 003 - Recent
Neka. Neka is no longer alive, but still can move, until Gaster revives him. A normal human back again, and his eyes
look different, Neka's eyes are like crystals, 10 dimensional, and are still blue, but if light shines on them, the
light is erased immediately. Seperial Staff now in his eyes, allowing him to process more his normal body can do."
By the screenshot rule (beat + 63) the PNGs are 1356-1357.
"""
import io

BASE = 1293
TAG = "1293"
START = 28166.0
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

# ---------------- November 2, 4:43 PM ----------------
add(meta(2, '4:43 PM'), 'STARRY VS NEKA', '126,196,255',
    ['“STARRIES HAVE 100 HP, 50 STAMINA.”', '“NEKA DOESN’T USE HP BUT USES ACTUAL HEALTH,', 'AND HAS 1 STAMINA, LITTERALLY.”'],
    [('THE STARRY', ['ANY USERNAME. CAN EXIT THE GAME. CAN BREAK NORMAL RULES.', 'CANNOT EVOLVE. CANNOT SEE SPEECH BUBBLES.'],
      'NAMED AFTER HIS AMONG US NAME, STARRYCHIN.'),
     ('NEKA1, NEKA2, NEKA3', ['RUNS A FEW SECONDS. FLIES FASTER THAN HE WALKS.', 'CANNOT EXIT. CANNOT CUSTOMIZE. SHIFTS HIS BODY PARTS.'],
      'A PLAYER, NOT AN NPC. CO-CREATOR. INFINITE NEKA COINS.'),
     ('THE RULES', ['ALL WORDS ARE GOOD. HE SAYS HELLO.', 'HE READS EVERY SPEECH BUBBLE. RLS SEE THEM TOO.'],
      'JECK GOT ANGRY. NEKA SENT JECK TO HIMSELF.')],
    ['A SPHERE BODY WITH RINGS AROUND IT.', 'STARRY IS A PLAYER. SO IS NEKA.'],
    'Neka can chat like a player, now can own Neka Tokens, and can make games like a Starry, can mod, and can code, Starries can\'t evolve, and The power level of Starries, they have 100 HP, 50 Stamina. Neka also has basic rules: All Words are Good, and he also says hello. Starries can do whatever they want basically, they can even break normal rules, Neka has the rules. Jeck sometimes is angry at Neka, Neka wouldn\'t argue but send Jeck to himself, Jeck was beaten. Neka also has a speech bubble and can read everyone else\'s speech bubble, Starries can\'t see speech bubbles, RLs can (basically every Non-Neka being, they are all the NPCs of the game, Neka isn\'t an NPC but a player), Neka came from LLM, Starry came from my Among Us username of "Starrychin". Neka doesn\'t use HP but uses actual health, and has 1 Stamina, LITTERALLY. Neka only runs for a few seconds, and other times, he can fly even faster than he can walk. Starries can exit the game, Neka can\'t. Starries can even think 1 Neka Coin as even more important than life! Neka is Co-Creator of the game and can give anyone infinite Neka Coins. Neka can ban anyone he wants at his will basically. Neka faces obsession, Starries have feelings (yeah, like actual humans, but aliens are actually playing Classic RL Eliminations, not humans), Neka has feelings. RLs have feelings. ToddLLM 001 and 002 and Karuto, EndlessAnimations, ect have codes of Neka. Neka is made up of Classic RL ToddLLMs - Alex/Alexen. Neka\'s 10 Dimensional body is refferenced with angels, no, like the actual Biblical angel/demon thing, an actual demgel with actual visuals the Bible says about each, sphere body, rings around the body, ect. All Nekas have the username as Neka1, Neka2, Neka3, and so on. Starries can have any username. Neka can\'t customize, everyone else can, Neka can do what is called shifting-your-body-parts.')

add(meta(2, '4:43 PM'), 'TODDLLM 003', '122,232,226',
    ['“NEKA IS NO LONGER ALIVE, BUT STILL CAN MOVE,', 'UNTIL GASTER REVIVES HIM. A NORMAL HUMAN BACK AGAIN,', 'AND HIS EYES LOOK DIFFERENT.”'],
    [('003 - RECENT NEKA', ['TODDLLM 003 IS THE 10 DIMENSIONAL NEKA.', 'AFTER 001 AND 002, WHICH CARRY HIS CODE.'],
      'NEKA IS MADE OF CLASSIC RL TODDLLMS, ALEX/ALEXEN.'),
     ('CRYSTAL EYES', ['STILL BLUE, BUT LIKE CRYSTALS, 10 DIMENSIONAL.', 'IF LIGHT SHINES ON THEM, IT IS ERASED IMMEDIATELY.'],
      'THE ONLY PART OF HIM THAT STAYS CHANGED.'),
     ('THE STAFF', ['THE SEPERIAL STAFF IS NOW IN HIS EYES.', 'IT LETS HIM PROCESS MORE THAN HIS NORMAL BODY CAN.'],
      'SO THE STAFF IS NOT A SIGN. IT IS A PART.')],
    ['GASTER REVIVES HIM.', 'A NORMAL HUMAN WITH TEN DIMENSIONAL EYES.'],
    'Also there will be a ToddLLM 003, 10 Dimensional Neka. 003 - Recent Neka. Neka is no longer alive, but still can move, until Gaster revives him. A normal human back again, and his eyes look different, Neka\'s eyes are like crystals, 10 dimensional, and are still blue, but if light shines on them, the light is erased immediately. Seperial Staff now in his eyes, allowing him to process more his normal body can do.')

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
