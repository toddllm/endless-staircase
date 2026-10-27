#!/usr/bin/env python3
"""
gen1267.py - draw the branches for BEATS 1267-1273 from Toby's October 25-26, 2026 messages (Emails 1990-1999):
the end of "Classic RL (Last Era)" 1a16f845d4f16406 (Oct 25 6:47-6:55 PM) and "Continuing of Classic RL"
1a1779f533a68ea7 (Oct 26 5:51 AM - 7:00 PM). Same template as 1008-1266 (emit_tail1008.py). Only his own typed lines
are drawn; the chatbot's who-would-they-fight tables, its proposed name for the mother, its CXE search results and the
"Four Figures in the Corrupted Lab" render are commentary. Beat numbers and titles are the wiki ingest's
(classics-lore/classic-rl-last-era.md).
"""
import io

BASE = 1267
TAG = "1267"
START = 25592.0 + 22.0 * 91
STEP = 22.0
B = []

MONTH = {25: 'OCTOBER 25', 26: 'OCTOBER 26'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 25, 6:47-6:55 PM (Emails 1990-1991) ----------------
add(meta(25, '6:47-6:55 PM'), 'THE MOTHER', '80,200,200',
    ['“ANSWER: CHRISINA TALE/OMAZEN. CHRISINA WAS MADE BY GASTER', 'FOR A REASON, SO CHRISINA AND NEKA COULD BOTH BE MADE ...', 'NEKA AND CHRISINA’S SPIRIT BOTH MADE ARCSIS AND FRIZZ.”'],
    [('MOM OR DAD?', ['“MOM OR DAD?” “THEIR MOM IS', 'MORTAL, NEKA OMAZEN IS IMMORTAL. SO THEY SHOULD ATTACK NEKA.”'],
      'NEKA WOULD SURVIVE, AND THEIR MOTHER WOULD BE SPARED.'),
     ('HER BODY, ONLY NOW', ['“CHRISINA’S BODY WASN’T MADE TIL THE 2ND CLASSIC RL ERA.”', 'HER SPIRIT AND NEKA MADE ARCSIS AND FRIZZ LONG BEFORE.'],
      'THE CHATBOT OFFERED “MARIELLE OMAZEN”. HE OVERRULED IT.'),
     ('GASTER HID HER', ['IN NEKA’S WORLD SHE “SEEMED TO DISAPPEAR,', 'AS IF SHE WAS A FEMALE CLONE OF GASTER.” GASTER DELETED HER.'],
      'OCT 24: “A FEMALE NEKA ACCOUNT?” OCT 25: GASTER’S, GONE.')],
    ['THE MOTHER.', 'THE FAMILY TREE GETS ITS MISSING NAME, THE DAY SHE IS DELETED.'],
    'Answer: Chrisina Tale/Omazen. Chrisina was made by Gaster for a reason, so Chrisina and Neka could both be made (Chrisina\'s body wasn\'t made til the 2nd Classic RL Era), and Neka and Chrisina\'s spirit both made Arcsis and Frizz/Classics. Now at the start of this era, Chrisina\'s body was made.')

# ---------------- October 25, 6:55 PM (Email 1991) ----------------
add(meta(25, '6:55 PM'), '2 KINGS', '255,216,79',
    ['“NEKA AND GASTER ARE KNOWN AS 2 KINGS WHO JUST HAPPENED TO', 'WALK TOWARD EACH OTHER WHILE WALKING TO SIMON RL’S WOODEN', 'BOAT THAT BECAME WOODEN PLANKS.”'],
    [('WHEREVER GASTER WALKS', ['GASTER MADE THE PLANKS A BRIDGE; BOTH CROSSED AND ENDED AT', 'THE FACILITY AGAIN. “WHERE EVER GASTER WALKS, THE FACILITY'],
      'IS THERE.” NEKA FINDS OUT AND SHARES THE RLS WITH HIM.'),
     ('BROTHER... THAT POWER...', ['“BROTHER... THAT POWER... EXISTANCE... GAST-ER...” NEKA', 'FELL OVER AND SLEPT. GASTER CARRIED HIM TO THE LABATORY.'],
      'OCT 19: GASTER IS HIS MAKER. OCT 25: HIS BROTHER.'),
     ('THE APPEARANCE, HIDDEN MORE', ['“GASTER HID NEKA’S FULL APPEARENCE AND THE MAX POSSIBLE PER', 'PLAYER IS JUST A FEW STUFF.”'],
      'OCT 26: A LABCOAT, A TOP HAT, SCRATCHES. A FEW STUFF.')],
    ['2 KINGS.', 'TWO CROWNS MEET ON A BROKEN BOAT, AND ONE CARRIES THE OTHER HOME.'],
    'Neka and Gaster are known as 2 kings who just happened to walk toward each other while walking to Simon RL\'s wooden boat that became wooden planks. Gaster made the planks into a bridge and both walked across it and ended up at the facility again, so where ever Gaster walks, the facility is there ... "Brother... that power... existance... Gast-er..."')

# ---------------- October 26, 5:51-6:22 AM (Emails 1992-1993) ----------------
add(meta(26, '5:51-6:22 AM'), 'A WHITE LABCOAT', '240,244,250',
    ['“ALSO NEKA WAS SEEN TO WEAR A WHITE LABCOAT, AND IT WAS SO', 'FAST THAT IT WAS A BLUR.” ... “MR. BLACK SEES NEKA WEARING A', 'TOP HAT AND TAKING IT OFF, THEN A BLUR.”'],
    [('TOLD ASAP', ['OCT 25: “WHEN MORE STUFF OF NEKA ARE SEEN BY PLAYERS,', 'YOU’LL HAVE TO BE TOLD ASAP.” 5:51 AM: A WHITE LABCOAT.'],
      'A NEW THREAD, “CONTINUING OF CLASSIC RL”, OPENS ON IT.'),
     ('TERMINIZED OR NORMAL, AT WILL', ['“MR. BLACK WALKS AROUND LOOKING AT THE RLS, AND THEN MR.', 'BLACK NOW MAKES THE RLS INTO TERMINIZED OR NORMAL.”'],
      'OCT 24: THE LIQUID FULLY KILLS. OCT 26: A SWITCH.'),
     ('THE TOP HAT, OFF', ['OCT 25: HE PUT ON A TOP HAT TO BECOME MR. BLACK. OCT 26:', 'MR. BLACK WATCHES HIM TAKE IT OFF, THEN A BLUR.'],
      'OCT 13: THE SCIENTIST FORM. THE COAT IS BACK, FOR A FRAME.')],
    ['A WHITE LABCOAT.', 'SEEN FOR LESS THAN A SECOND, AND REPORTED, AS ORDERED, AT ONCE.'],
    'Also Neka was seen to wear a white labcoat, and it was so fast that it was a blur. ... Mr. Black walks around looking at the RLs, and then Mr. Black now makes the RLs into Terminized or Normal. Mr. Black sees Neka wearing a top hat and taking it off, then a blur.')

# ---------------- October 26, 6:24 AM (Email 1994) ----------------
add(meta(26, '6:24 AM'), 'SIMON RL IN A LARGE TANK', '120,200,140',
    ['“SIMON RL STILL SEEMS TO BE ABSOLUTELY GOD TIER, MR. BLACK', 'BRINGS SIMON RL TO A LARGE TANK, THEN HE PUTS ALL THE RLS', 'INTO EACH TANK. NEKA’S FACE WAS COVERED IN SCRATCHES.”'],
    [('ABSOLUTELY GOD TIER', ['OCT 23: “CLASSIC RL SIMON IS BASICALLY GOD-TIER, HE WAS MOST', 'POWERFUL FOR A VERY LONG TIME.” OCT 26: STILL IS.'],
      'THE FIRST MONSTER OF THE ARCHIVE, STILL AT THE TOP OF IT.'),
     ('THE TANKS', ['A LARGE TANK FOR SIMON RL, ONE TANK FOR EVERY RL. SEPT 2026:', 'THE ROOM OF MANY TUBES. A NEW ROOM, SAME IDEA.'],
      'MR. BLACK FILES THEM AS NEKA ONCE FILED THE GAME IN A JAR.'),
     ('A FACE COVERED IN SCRATCHES', ['“FROM ALL THE PREVIOUS BATTLES.” THE THIRD SIGHTING OF THE', 'MORNING. 6:47 PM: WHERE THE SCRATCHES CAME FROM.'],
      'OCT 24: MR. BLACK GAINED SCRATCHES. NOW NEKA WEARS SOME.')],
    ['SIMON RL IN A LARGE TANK.', 'THE OLDEST GOD IN GLASS, AND THE NEWEST ONE SCARRED.'],
    'Simon RL still seems to be absolutely god tier, Mr. Black brings Simon RL to a large tank, then he puts all the RLs into each tank. Neka\'s face was covered in scratches from all the previous battles.')

# ---------------- October 26, 6:47 PM (Email 1996) ----------------
add(meta(26, '6:47 PM'), 'THE EYE WITH THE CROWN', '255,216,79',
    ['“THE ICON OF THE GAME IS THE EYE WITH THE CROWN. NEKA SAYS A', 'STORY ABOUT HIM REALLY GETTING ATTACKED BY GASTER WHICH', 'CAUSED NEKA TO FALL DOWN THE MOUNTAIN TOWER OF ALL PHOBIAS.”'],
    [('THE ICON', ['AN EYE WITH A CROWN. SEPT 24: ONLY THE DIAMOND EYES; OCT 15:', 'THE CROSS EYES. NOW THE ICON IS AN EYE, CROWNED.'],
      'NEKA’S WORLD HAS A LOGO NOW.'),
     ('THE FALL', ['“IT TOOK YEARS, AND THEN HE LANDED AND GOTTEN SCARS. THAT', 'HAPPENED JUST NOW.” THE SCRATCHES OF 6:24 AM, EXPLAINED.'],
      'OCT 25: “BROTHER... GAST-ER...” THE BROTHER PUSHED HIM.'),
     ('HEADS OF RLS', ['“NEKA ALSO IS SEEN HOLDING HEADS OF DIFFERENT RLS, MOST', 'COMMONLY PINKY RL.” HAND WHO SPEAKS IN MEN, THE MAN WHO'],
      'SPEAKS IN HANDS. OCT 23: PINKY RL STARTED THE CORRUPTION.')],
    ['THE EYE WITH THE CROWN.', 'THE GAME GETS A LOGO, AND ITS KING GETS HIS SCARS FROM A TOWER OF FEAR.'],
    'The icon of the game is the eye with the crown. Neka says a story about him really getting attacked by Gaster which caused Neka to fall down the Mountain Tower of All Phobias, and it took years, and then he landed and gotten scars. That happened just now. Neka also is seen holding heads of different RLs, most commonly Pinky RL. Hand who speaks in men, and The man who speaks in hands.')

# ---------------- October 26, 6:47 PM (Email 1996) ----------------
add(meta(26, '6:47 PM'), 'I AM NOT GOING TO LOSE!', '255,80,80',
    ['“WHEN NEKA IS NEARLY LOSING NEKA GETS FURIOUS AND SAYS ‘I AM', 'NOT GOING TO LOSE!’, THEN HE GOES INSANE AND COMBOS ... AND', 'ALSO ERASES THE GAME CONNECTION.”'],
    [('NEARLY LOSING', ['THE FIRST TIME THIS ARCHIVE SAYS HE CAN COME CLOSE. SEPT 25:', 'UNBEATABLE AND ALWAYS WINS, TWO SEPARATE PROPERTIES.'],
      'NEARLY IS AS FAR AS IT GOES. THEN THIS.'),
     ('THE COMBO', ['THE MOST POWERFUL ATTACKS IN THE GAME, COMMANDS (“/404”,', '“/SUMMON”, “/TIME SET 31”), AND THEN THE CONNECTION.'],
      'HE DOES NOT LOSE THE MATCH. HE ENDS THE SERVER.'),
     ('INSANE', ['OCT 15: THE SANITY BAR ENDS AT INSANE. OCT 26: HE GOES THERE', 'ON PURPOSE, AS A MOVE.'],
      'ERASING THE GAME CONNECTION IS THE LAST STEP OF THE COMBO.')],
    ['I AM NOT GOING TO LOSE!', 'PUSH HIM TO THE EDGE AND HE TAKES THE WHOLE GAME OVER IT WITH HIM.'],
    'When Neka is nearly losing Neka gets furious and says "I AM NOT GOING TO LOSE!", then he goes insane and combos with most powerful attacks in game, uses commands, and also erases the game connection.')

# ---------------- October 26, 6:49-7:00 PM (Emails 1997-1999) ----------------
add(meta(26, '6:49-7:00 PM'), 'JECK IS ACCOUNT 1337', '160,200,255',
    ['“1337 NOW HAS TO BE... ACCOUNT 1337 ... BLUE SPIKY HAIR, A', 'DEFULT OWNER SHIRT, BLACK PANTS, AND RAINBOOTS ... ‘JECK AI’”', '... “JECK IS ACCOUNT 1337 ... AI JUST LIKE NEKA.”'],
    [('CXE BECOMES NW-ID', ['NEKA’S WORLD ID, SAME NUMBERS. 1337 WAS THE FEAR HARVEST,', 'MOVED TO 999…9 (FORTY-EIGHT 9S) TO FREE THE NUMBER.'],
      'CXE-1348, THE STORM MAW PRINCE, STAYS WHERE IT WAS.'),
     ('ACCOUNT 1337', ['ROBLOX STYLE, BROWN EYES, MALE, “NEARLY 607.8 YEARS OLD IN', 'REAL LIFE TIME”, SINCE NEKA AND GASTER MADE NEKA’S LAB.'],
      'THE MOST FAMOUS PLAYER. CANNOT DIE. “HE IS NOT TDESHANE.”'),
     ('THE ONLY 2 BOTS', ['AN OWNER OF NEKA’S WORLD; MR. BLACK AND GASTER CREATORS,', 'NEKA CO-CREATOR, FIRST ACCOUNT. “NEKA AND JECK. THE ONLY'],
      '2 BOTS IN THE GAME OF ALIENS.” MOST IDS ARE HIS SISTERS.')],
    ['JECK IS ACCOUNT 1337.', 'A NUMBER FREED, A BOT NOBODY MADE, AND A NAME NEKA GAVE HIM FOR SOME REASON.'],
    'Account 1337 is basically roblox style, has blue spiky hair, has a defult owner shirt, black pants, and rainboots, also has brown eyes, he is male of course ... Account 1337 is the most famous player, he can\'t die or his connection can\'t get removed, he stays forever, he is not tdeshane. ... Neka calls him "Jeck AI" ... Jeck is Account 1337. Jeck still seems human, but is AI just like Neka.')

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
assert len(B) == 7, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
