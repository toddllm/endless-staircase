#!/usr/bin/env python3
"""
gen1278.py - draw the branches for BEATS 1278-1279 from Toby's October 27, 2026, 8:31 PM message
(Email 2004, message 1a17febc28084c02 on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the evening's
beat 1276-1277 report. Same template as 1008-1277 (emit_tail1008.py).
Only his own typing is drawn: the long opening paragraph, from "Jeck and Simon RL may be the heroes of the game" to
"Jeck IS a hero." The block under it ("*Jeck is now confirmed as a hero*, and *Jeck RL is officially an RL* ...",
"The latest events establish:", the bullets, "*Game ownership and facility ownership are separate.*", the BobServer666
restatement) is the chatbot's, commentary. No attachments.
Beat 1278 (8:31 PM, first half): the fake beard and "Go Mr. Black!", the race, the fight with Neka (waves, lightning,
water gun, cowboy hat, water blaster), Jeck malfunctions and dies, Au Blue "Just to be sure...", the respawn and
"You're Jeck.", the task before 7 AM, 7:01 AM, November 25, the Sprunki puppet and the Terminized form, pet RL AI.
Beat 1279 (8:31 PM, second half): Visor = Mr. Fun Computer, Erase = Erase, coal for the engines, Neka's offers,
Elliot and Guest 1337 from Forsaken, Account 666 = BobServer666 (female, Jeck's sister, admin abuse, random bans),
game owner vs facility owner (zero or one, never two), Jeck bans BobServers and the anti-viruses, "Jeck IS a hero."
The wiki ingest had not assigned these beats when they were built, so the game assigns 1278 and 1279; by the
screenshot rule (beat + 63) their PNGs are numbers 1341 and 1342.
"""
import io

BASE = 1278
TAG = "1278"
START = 27836.0
STEP = 22.0
B = []

MONTH = {27: 'OCTOBER 27'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 27, 8:31 PM (Email 2004), first half ----------------
add(meta(27, '8:31 PM'), 'YOU’RE JECK.', '110,180,240',
    ['“JECK AND SIMON RL MAY BE THE HEROES OF THE GAME, THEY BOTH', 'TOGETHER CAN BEAT MR. BLACK. ... NEKA SAYS “YOU’RE JECK.”,', 'JECK WAS SCARED AND HE RAN.”'],
    [('GO MR. BLACK!', ['JECK PUTS ON A BLACK BEARD AND SHOUTS IT. MR. BLACK RUNS,', 'AND SIMON.PS BEATS MR. BLACK IN A RACE.'],
      'OCT 25: MR. BLACK IS SPRUNKI AND MADE CLASSIC RL.'),
     ('A WATER BLASTER', ['JECK SURFS THE WAVES, NEKA STRIKES LIGHTNING, THEN A', 'COWBOY HAT AND A WATER BLASTER. JECK MALFUNCTIONS, DIES.'],
      'OCT 26, BEAT 1273: HE CAN’T DIE, HIS CONNECTION STAYS.'),
     ('OFFICIALLY AN RL', ['HE FOLDS HIS BODY INTO A SPRUNKI PUPPET, CORRUPTS HIS', 'TEXTURE AND MAKES HIS TERMINIZED FORM. THE RLs’ PET RL AI.'],
      'OCT 26, BEAT 1269: RLs MADE TERMINIZED OR NORMAL.')],
    ['AU BLUE, “JUST TO BE SURE...”, A RESPAWN, 7:01 AM, NOVEMBER', '25, AND A PUPPET BODY. JECK IS AN RL NOW. YOU’RE JECK.'],
    'Jeck and Simon RL may be the heroes of the game, they both together can beat Mr. Black. Jeck puts on a black beard and shouts "Go Mr. Black!", Mr. Black runs, Simon.ps beats Mr. Black in a race, Jeck turns around and is scared, Neka stands there. ... Neka says "If you wanted to battle... try it later.", Jeck fights Neka, Jeck surfs the waves, Neka strikes lightning, making the waters vaporize, Jeck throws a water gun at Neka, Neka puts the water gun away and puts on a cow boy/man hat and holds a water blaster, then Jeck was squirted with water and Jeck malfunctions and died. Neka then uses Au Blue and says "Just to be sure...", Jeck was broken, then Jeck respawned and said "Hello, what is your name, I\'m-", Neka says "You\'re Jeck.", Jeck was scared and he ran. Jeck looks for all the RLs to complete the task before 7 AM. He just finished in time. 7:01 AM was there on Jeck. Jeck saw November 25. ... Jeck folded his body into a Sprunki puppet and corrupts his texture, making an RL, and he makes his Terminized form, now he is officially an RL. Neka says "Well, someone else for the facility to control...", ... RLs were now given a pet RL AI, Jeck.')

# ---------------- October 27, 8:31 PM (Email 2004), second half ----------------
add(meta(27, '8:31 PM'), 'JECK IS A HERO', '230,96,96',
    ['“THE 666TH ACCOUNT IS ACCOUNT 666, NOT THE DEVIL, WORSE.', 'BOBSERVER666. ... JECK IS TRYING TO BAN BOBSERVERS AND ALSO', 'ANTI-VIRUSES CODE ACCIDENTALLY MADE. JECK IS A HERO.”'],
    [('BOBSERVER666', ['AN ORDINARY ALIEN PLAYER WITH SUPERNATURAL ABILITIES AND', 'ADMIN ABUSE: RANDOM BANS, CHAT SPAM. JECK’S SISTER.'],
      'OCT 26, BEAT 1273: JECK IS ACCOUNT 1337.'),
     ('ZERO OR ONE OWNER', ['JECK OWNS THE GAME. THE FACILITY GOES TO ONE SMART, LUCKY,', 'RESPONSIBLE PLAYER WHO WANTS IT, OR NOBODY. NEVER 2.'],
      'OCT 27, BEAT 1275: MR. BLACK AND GASTER OWN THE FACILITY.'),
     ('VISOR = MR. FUN COMPUTER', ['VISOR RL HAS A CONNECTION TO CLASSIC RL BUT NO CONTROL.', 'ERASE = ERASE: NEKA ERASES LIKE MR. BLACK AT HIGH POWER.'],
      'OCT 27, BEAT 1276: NEKA IS KNOWN OF ERASE.')],
    ['NEKA OFFERS PIZZA, A POKEMON, SWEETS WITH THE SUGAR TAKEN', 'OUT. BOBSERVER666 BANS AT RANDOM. JECK IS A HERO.'],
    'Visor = Mr. Fun Computer. Visor RL seems to have a connection to Classic RL, but no control. Erase = Erase, so Neka can erase, just like Mr. Black at high power. Most people in the game wish for coal so they can fuel the engines, making the facility run. Neka says "Hello, want a Pokemon?", or "Hello there, would you like a pizza?", or "Hey, want a pop tart or a cookie or any sugary sweets I taken the sugar out of so you wouldn\'t die?". Neka is like Elliot from Forsaken. Jeck is based off of Guest 1337 from Forsaken. ... The 666th account is Account 666, not the devil, worse. BobServer666. BobServer666 is an ordanary alien player, BUT he has supernatural abilities and admin abuse. Jeck seems to be BobServer666\'s brother, and since Jeck has no brothers, BobServer666 is female for some reason. ... Jeck is the owner of the game, not the facility which goes to a random player who is smart and lucky and is responcible and pro enough and wants to be facility owner, so there is only 1 or 0, never 2 ... BobServer666 is the most impactive and dangerous of the BobServers. Jeck is trying to ban BobServers and also Anti-Viruses CODE accidentally made. Jeck IS a hero.')

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
