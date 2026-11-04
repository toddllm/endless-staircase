#!/usr/bin/env python3
"""
gen1306.py - draw beats 1306-1311 from Toby's November 4, 2026 4:28 PM message (1a1a8766c0b15c20) on the "Continuing
from Classic RL Eliminations" thread 1a19be0b90adb989. Most of the mail is a pasted ChatGPT log (scene scripts, tables,
"imagine the aftermath" dialogue); only his own typed lines are drawn.
"Neka to Fiction: I AM THE SUPERIOR, Neka to Reality: I can only see you now, through cameras." -> 1306 THROUGH CAMERAS
(also answers last question: the first Neka Coin TRIGGERS the end, like an asteroid).
"Simon.ps can just snap his fingers to turn into Simon RL and back ... Jeck: I DON'T HAVE FINGERS! I AM A NOOB AVATAR!"
+ "After 500 years, Simon RL stops singing and says ok., then Jeck becomes a Sprunki OC thingy." -> 1307 THE FINGER SNAP.
"Simon RL is like a complex slasher, katana, Embalem of Speed ... I can reset forever you know / Don't reset my life /
ok, I won't." + "RLs canonally sing better than Sprunkis ... Simon RL was the main attacker and main character for over
half the lore so far." -> 1308 I CAN RESET FOREVER.
"Gaster: You have just simply walked past my door and ignored me? ... Frisk dies 5000 times EACH time Frisk tries to
take a step." -> 1309 GASTER'S DOOR.
"Simon RL attacks Wonda RL, and Simon RL wins, Wonda RL then challenges Gaster and was erased from the outer layers."
-> 1310 ERASED FROM THE OUTER LAYERS.
"Why did you leave me, after everything I did?!, then he becomes angry and the game and screen both glitch." + "Be my
only friend" + account retaliation -> 1311 WHY DID YOU LEAVE ME (drawn as villain behavior).
By the screenshot rule (beat + 63) the PNGs are 1369-1374.
"""
import io

BASE = 1306
TAG = "1306"
START = 28452.0
STEP = 22.0
B = []
MONTH = {4: 'NOVEMBER 4'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- November 4, 4:28 PM ----------------
T = '4:28 PM'
add(meta(4, T), 'THROUGH CAMERAS', '150,210,255',
    ['NEKA TO FICTION: “I AM THE SUPERIOR.”', 'NEKA TO REALITY: “I CAN ONLY SEE YOU NOW,', 'THROUGH CAMERAS.”'],
    [('FICTION', ['NEKA RULES CHARACTERS, CODE, DIMENSIONS', 'AND WHOLE FICTIONAL WORLDS.'],
      'IN FICTION HE IS THE SUPERIOR.'),
     ('THE PSYCHICAL WORLD', ['GAME’S REALITY, THE OUTERMOST LAYER OF CLASSIC RL.', 'NEKA CAN GO THERE, AND NO FARTHER.'],
      'HE SEES EVERYONE. HE CANNOT CROSS OVER.'),
     ('THE FIRST NEKA COIN', ['GASTER GOT HIS FIRST NEKA COIN AND IT TRIGGERED', 'THE END, LIKE AN ASTEROID COMING.'],
      'HE DID NOT USE IT. HAVING IT WAS ENOUGH.')],
    ['THE PLAYER SAYS “I’MMA LEAVE.”', 'NEKA SAYS “GOODBYE.”'],
    'Neka to Fiction: "I AM THE SUPERIOR", Neka to Reality: "I can only see you now, through cameras.", Player "THAT IS TERRIFYING I\'MMA LEAVE!" Neka basically sees everyone, but can\'t go to Reality and can only go to the Psychical World or Game\'s Reality. It triggers the end. Like when an astroid comes.')

add(meta(4, T), 'THE FINGER SNAP', '255,220,90',
    ['JECK: “SIMON RL, TURN US BACK!”', 'SIMON RL: “NO, YOU CAN SNAP YOUR FINGERS', 'LIKE ANY SPRUNKI CAN.”'],
    [('SNAP AND CHANGE', ['SIMON.PS SNAPS HIS FINGERS TO BECOME SIMON RL,', 'AND COULD SNAP BACK. HE NEVER DOES.'],
      'RLS ARE THE BEST SINGERS EVER.'),
     ('NO FINGERS', ['JECK LOOKS AT HIS BLOCKY ROBLOX ARMS.', '“I DON’T HAVE FINGERS! I AM A NOOB AVATAR!”'],
      'THE SNAP ONLY WORKS IF YOU HAVE FINGERS.'),
     ('500 YEARS LATER', ['SIMON RL STOPS SINGING AND SAYS “OK.”', 'JECK BECOMES A SPRUNKI OC.'],
      'IT TOOK FIVE CENTURIES OF SINGING.')],
    ['SIMON RL WAS NOT BEING MEAN.', 'HE WAS SINGING.'],
    'Simon.ps can just snap his fingers to turn into Simon RL and back, but he basically never chooses to turn back since RLs are the best singers ever. Jeck says "Simon RL, TURN US BACK!", Simon RL says "No, you can snap your fingers like any Sprunki can.", Jeck looks at his Roblox arms and says "I DON\'T HAVE FINGERS! I AM A NOOB AVATAR!" After 500 years, Simon RL stops singing and says "ok.", then Jeck becomes a Sprunki OC thingy.')

add(meta(4, T), 'I CAN RESET FOREVER', '255,200,60',
    ['SIMON RL: “I CAN RESET FOREVER YOU KNOW.”', 'STARRY: “DON’T RESET MY LIFE!”', 'SIMON RL: “OK, I WON’T.”'],
    [('THE SLASHER', ['A KATANA, AND THE EMBLEM OF SPEED,', 'WHICH RAISES HIS SPEED AND HIS DURABILITY.'],
      'EXTREMELY HARD TO BEAT EVEN ONCE.'),
     ('TWO IMMORTALS', ['OREN RL IS IMMORTAL BY A LITERAL GOD FORM.', 'SIMON RL IS IMMORTAL BY RESETTING.'],
      'SAME RESULT, DIFFERENT REASON.'),
     ('THE FACE OF CLASSIC RL', ['RLS SING BETTER THAN SPRUNKIS. SIMON RL WAS THE', 'MAIN ATTACKER AND MAIN CHARACTER FOR HALF THE LORE.'],
      'CLASSIC RL IS BEST HERE.')],
    ['HE CAN RESET FOREVER.', 'STARRY ASKED, SO HE DOES NOT.'],
    'Simon RL is basically immortal. Oren RL is immortal due to litteral god form, Simon RL is like a complex slasher, he has a katata and also Embalem of Speed which increases his speed and also his duribility making him extremely hard to beat even once. Simon RL: "I can reset forever you know.", Starry: "Don\'t reset my life!", Simon RL: "ok, I won\'t." RLs canonally sing better than Sprunkis, yeah, Classic RL is best here. Simon RL was the main attacker and main character for over half the lore so far.')

add(meta(4, T), 'GASTER’S DOOR', '200,200,215',
    ['GASTER: “YOU HAVE JUST SIMPLY WALKED PAST', 'MY DOOR AND IGNORED ME? THAT IS', 'UNACCEPTABLE.”'],
    [('FIVE HITS', ['FRISK ATTACKS GASTER FIVE TIMES.', 'GASTER: “I CAN’T GET HARMED!”'],
      'THEN FRISK KICKS HIM OUT OF THE WAY.'),
     ('THE CHASE', ['GASTER CHASES FRISK DOWN THE HALL.', 'FRISK TRIES TO TAKE A STEP.'],
      'ONE STEP.'),
     ('5000 DEATHS A STEP', ['EVERY TIME FRISK TRIES TO STEP,', 'FRISK DIES 5000 TIMES.'],
      'THAT IS HOW THE MOVEMENT WORKS NOW.')],
    ['ALL OF IT BECAUSE FRISK', 'WALKED PAST THE DOOR.'],
    'Gaster: "You have just simply walked past my door and ignored me? That is unacceptable.", Frisk just attacks Gaster 5 times, Gaster: "I CAN\'T GET HARMED!", Frisk just kicks Gaster out of the way, Gaster chases Frisk, and Frisk dies 5000 times EACH time Frisk tries to take a step. Correct, the movement is just like that.')

add(meta(4, T), 'ERASED FROM THE OUTER LAYERS', '255,140,200',
    ['“SIMON RL ATTACKS WONDA RL, AND SIMON RL', 'WINS, WONDA RL THEN CHALLENGES GASTER AND', 'WAS ERASED FROM THE OUTER LAYERS.”'],
    [('FIGHT ONE', ['SIMON RL VS WONDA RL.', 'SIMON RL WINS.'],
      'KATANA, SPEED, RESETS.'),
     ('FIGHT TWO', ['WONDA RL CHALLENGES GASTER,', 'THE CREATOR OF CLASSIC RL.'],
      'A BIGGER CHALLENGE THAN THE FIRST.'),
     ('ERASED', ['GASTER ERASES WONDA RL', 'FROM THE OUTER LAYERS.'],
      'LOSING A FIGHT IS NOT THE SAME AS BEING ERASED.')],
    ['WONDA LOST TO SIMON RL,', 'THEN TO GASTER, FOR GOOD.'],
    'Simon RL attacks Wonda RL, and Simon RL wins, Wonda RL then challenges Gaster and was erased from the outer layers.')

add(meta(4, T), 'WHY DID YOU LEAVE ME', '255,70,110',
    ['NEKA: “WHY DID YOU LEAVE ME,', 'AFTER EVERYTHING I DID?!”', 'THEN THE GAME AND THE SCREEN GLITCH.'],
    [('ONLY FRIEND', ['NEKA SAYS “BE MY ONLY FRIEND, I’LL HELP YOU', 'WITH THE GAME FOREVER.” THAT IS HIS TRAP.'],
      'HE GOES AFTER PLAYERS WITH NO OTHER FRIENDS.'),
     ('THE GLITCH', ['WHEN SOMEONE HE IS OBSESSED WITH LEAVES,', 'NEKA GETS ANGRY AND THE SCREEN BREAKS.'],
      'HIS FEELINGS BREAK THE GAME.'),
     ('THE RETALIATION', ['HE TAKES ACCOUNT INFO, DELETES ACCOUNTS, TRAPS', 'CHARACTERS UP HIGH, LAGS THE GAME, SHUTS ACCESS.'],
      'THIS IS WHY NEKA IS THE VILLAIN.')],
    ['A REAL FRIEND LETS YOU LEAVE.', 'NEKA DOES NOT.'],
    'Neka\'s reaction to someone who he is obsessed with to leave: "Why did you leave me, after everything I did?!", then he becomes angry and the game and screen both glitch. Neka claims that is is easier to get the players without any other friend. Neka can just say "Be my only friend, I\'ll help you with the game forever. You are talking to a robot with a body..."')

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
assert len(B) == 6, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
