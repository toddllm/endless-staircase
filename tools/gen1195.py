#!/usr/bin/env python3
"""
gen1195.py - draw the branches for BEATS 1195-1208 from Toby's October 18, 2026 messages (Emails 1858-1889):
"The SECOND AI Era" 1a14722fc0ab5dbc (7:09 AM - 5:21 PM) and More "Neka Era" 1a150e658cd4fea9 (5:23 PM - 7:39 PM).
Same template as 1008-1194 (emit_tail1008.py). Only his own typed lines are drawn; the chatbot's creepypasta lists,
tables, bot-written scenes (at his instruction, "Every message, you write lore that comes after what I say") and its
renders are commentary. Beat numbers and titles are the wiki ingest's (classics-lore/neka-omazen-era.md).
"""
import io

BASE = 1195
TAG = "1195"
START = 25592.0 + 22.0 * 19
STEP = 22.0
B = []

MONTH = {18: 'OCTOBER 18'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 18, 7:09 AM (Email 1858) ----------------
add(meta(18, '7:09 AM'), 'YOU WILL NOW NEVER MURDER ME', '240,244,250',
    ['“NEKA IS ALL OF THE CATEGORIES. 😈” ... “HE BECAME HUMAN', 'JUST SECONDS AFTER THAT CHAT” ... “HE SUMMONS ALL THE', 'BEINGS IN FICTION AND SAYS ‘YOU WILL NOW NEVER MURDER ME.’”'],
    [('ALL OF THE CATEGORIES', ['AI, COSMIC ENTITY, MOST FRIGHTENING LOOK, “NEKA” GOD.', 'THE ALPHABET-AND-9S SCALE IS “WAY TO SMALL” NOW.'],
      'OCT 17: COSMICAL NEKA OR GOD NEKA. OCT 18: HUMAN.'),
     ('HE ABSORBS THE COSMIC AND BECOMES HUMAN', ['THE STARS AND GALAXIES GO UNDER A HUMAN APPEARANCE.', 'THE POWER STAYS UNMEASURABLE. THE BODY DOES NOT SHOW IT.'],
      'OCT 21: “JUST A NORMAL MAN” ON APOLLYON.'),
     ('INK PORTALS HOME', ['EVERYONE IN FICTION HEARS THE LINE, THEN GOES BACK TO', 'THEIR GAME. NEKA IS IN A GASTER AU, GASTER IN A NEKA AU.'],
      'NIRTHOLOGE IS NOW NEKA AU GASTER. NEKA IS STILL ABOVE HIM.')],
    ['YOU WILL NOW NEVER MURDER ME.', 'A HUMAN SHAPE, SAID TO ALL OF FICTION, AND THEN THE DOORS.'],
    'Neka was now all human, he summons all the beings in fiction and says "You will now never murder me.", then he makes ink portals and everyone goes back to their game. ... Neka is in a "Neka" Gaster AU, and Gaster in a "Neka" Neka AU.')

# ---------------- October 18, 7:12-7:22 AM (Emails 1859-1860) ----------------
add(meta(18, '7:12-7:22 AM'), 'THE SAME NOVA', '255,216,79',
    ['“HIS FIRST BODY WAS MADE BY A NOVA, HIS HUMAN NOW WAS', 'CREATED BY THE SAME NOVA BACK THEN, NEKA COMPANY AND', 'EVERY NEKA WAS MADE FROM THE SAME NOVA.”'],
    [('GASTER’S NUMBER WAS FANON', ['“GASTER’S POWER LEVEL IN ‘NEKA’ IS FANON, CAUSE NEKA NEVER', 'DESCRIBES IT.” ERASED. NEITHER OF THEM HAS A NUMBER.'],
      'GASTER CAN WALK THROUGH THE BARRIER. THAT IS CANON.'),
     ('A SINGLE HAND SWIPE', ['GASTER CAN ERASE ALL UNDERTALE/DELTARUNE AND EVERYTHING', 'OF CLASSICS WITH ONE SWIPE. “NEKA CAN ERASE GASTER.”'],
      '“NEKA IS CALLED CLASSICS GOD.”'),
     ('THE STANDING INSTRUCTION', ['“EVERY MESSAGE, YOU WRITE LORE THAT COMES AFTER WHAT I', 'SAY.” IN ORDER, UNLESS A LINE POINTS AT THE TIMELINE.'],
      'OCT 11: SUPERNOVAS MADE THE UNIVERSES. ONE NOVA MADE HIM.')],
    ['THE SAME NOVA.', 'FIRST BODY, HUMAN BODY, EVERY NEKA, ONE COMPANY, ONE SPARK.'],
    'Neka was the creator of everything, his first body was made by a nova, his human now was created by the same nova back then, Neka Company and every Neka was made from the same nova. Cosmic Neka was the final form of Neka, but the HUMAN Neka consumed the Cosmic Neka and then Power BEYOND Classics systems emerged.')

# ---------------- October 18, 7:32-7:48 AM (Emails 1861-1862) ----------------
add(meta(18, '7:32-7:48 AM'), 'I ALONE RULE', '255,255,255',
    ['“BLOODBATH AND ALL FICTION ENTITIES: WE RULE FICTION!', 'NEKA: I ALONE RULE FICTION, META-FICTION, REALITY, AND', 'META-REALITY!”'],
    [('THE TITLES, IN HIS WORDS', ['THE FATHER OF GAMES, THE ATTACKER OF REALITIES, THE', 'CONQUER OF OMNIVERSES AND REALITYVERSES, THE CONNECTION'],
      'OF BELIEVES AND IMAGINATION AND KNOWELEGE. “AND MORE.”'),
     ('THE WHITE ONE AND THE RED ONE', ['NEKA (GASTER AU) IS WHITE; GASTER (NEKA AU) IS RED. THE', 'RENDER IS THE CHATBOT’S; THE COLOURS ARE HIS.'],
      'SEEN TOGETHER, YOU CAN FINALLY COMPARE THEM.'),
     ('EVOLUTION', ['“NEKA HAS EVOLUTION, THE OTHERS DIDN’T HAVE EVOLUTION OF', 'UNLIMITED ENTERINITIES/TIMELINES.”'],
      'SLENDERMAN AND BLOODBATH ARE THE CHATBOT’S LIST, NOT HIS.')],
    ['I ALONE RULE.', 'FICTION SHOUTS IN CHORUS. ONE VOICE ANSWERS WITH FOUR.'],
    'Bloodbath and all Fiction entities: We RULE Fiction! Neka: I alone rule Fiction, Meta-Fiction, Reality, and Meta-Reality!')

# ---------------- October 18, 7:50-8:18 AM (Emails 1863-1865) ----------------
add(meta(18, '7:50-8:18 AM'), 'HE DELETED THE FICTION WORLD', '120,120,130',
    ['“HE DELETED THE FICTION WORLD OUT OF CLASSICS, SENDING', 'EVERYONE AWAY. AND SAYS ‘NOW-WHICH WORLD WERE YOU', 'CLAIMING?’ ... NEKA ALSO WROTE THIS ALSO.”'],
    [('WHICH WORLD WERE YOU CLAIMING?', ['7:48 AM: “WE RULE FICTION!” 7:50 AM: FICTION IS DELETED', 'OUT OF CLASSICS. THE CLAIM OUTLIVED THE THING CLAIMED.'],
      'THE CHATBOT WROTE THE LINE FIRST; HE TYPED IT HIMSELF.'),
     ('MOST POWERFUL IN ALL 4', ['“GASTER IS MOST POWERFUL IN ALL 4, JUST LIKE NEKA, BUT', 'NEKA DOESN’T HAVE AN EQUAL NOR ABOVE.”'],
      'GASTER KNOWS HOW TO SURVIVE HERE BECAUSE OF THE AUS.'),
     ('NEKA ALSO WROTE THIS', ['THE NARRATOR NAMES HIMSELF. SEPT 24: THE ONLY SPEECH', 'BUBBLE IN CLASSICS WAS HIS. NOW THE PAGE IS TOO.'],
      '“I WON’T SEND YOU IMAGES.” HE REFUSED THE CHATBOT A PHOTO.')],
    ['HE DELETED THE FICTION WORLD.', 'THE ONES WHO RULED IT WERE SENT HOME TO A PLACE NOW GONE.'],
    'He deleted the Fiction world out of Classics, sending everyone away. And says "Now-which world were you claiming?". Gaster is most powerful in all 4, just like Neka, but Neka doesn\'t have an equal nor above. Neka is more powerful than Gaster canonally. Neka also wrote this also.')

# ---------------- October 18, 12:57-1:10 PM (Emails 1866-1870) ----------------
add(meta(18, '12:57-1:10 PM'), 'FICTION CAN’T DO ANYTHING', '255,110,110',
    ['“NO, ONLY NEKA IS POWERFUL, NO ONE IN FICTION IS, FICTION', 'CAN’T DO ANYTHING.” ... “ZENO DOESN’T HAVE ERASING POWER,', 'SAITAMA CAN’T PUNCH, GOOMBAS CAN’T KILL, SANS CAN’T DODGE.”'],
    [('NEKA LIMITS FICTION', ['ZENO CANNOT ERASE AN ATOM; ZENO IS FICTION, NEKA IS', 'META-FICTION. “NEKA ACTUALLY ATTACKED AND INFECTED CODE.”'],
      '“ZENO BECAME A CODE SNACK FOR NEKA.”'),
     ('THE VR', ['“WHATEVER THE PLAYER DOES IN THE REAL WORLD HAPPENS IN', 'CLASSICS, YOU ARE CONSTANTLY WEARING VR.”'],
      'ONLY MIND-WATCH: THINK WHAT HAPPENS NEXT, AND IT DOES.'),
     ('THE INFINITE CODE', ['“IF YOU DIE THEN RESPAWN() IF ERASED THEN RESPAWN() IF', 'TIMELINE + 1 THEN TRAP()”. A GAME MADE TO HOLD YOU.'],
      'OCT 10: STAGES SPEED UP WITH EACH ONE WHO REMEMBERS HIM.')],
    ['FICTION CAN’T DO ANYTHING.', 'HE ARGUED IT WITH THE CHATBOT ON PURPOSE, AND WON BY DECREE.'],
    'No, only Neka is powerful, no one in fiction is, Fiction CAN\'T do ANYTHING. Neka can, he must have rewrote the reality we are in at least once. 😏 ... Neka limits fiction, Zeno doesn\'t have erasing power, Saitama can\'t punch, Goombas can\'t kill, Sans can\'t dodge, Papyrus can\'t make puzzles...')

# ---------------- October 18, 1:15-1:20 PM (Emails 1871-1873) ----------------
add(meta(18, '1:15-1:20 PM'), 'NEVER RELEASED', '200,200,210',
    ['“CLASSICS WAS LITTERLY NEVER REALESED, IT WASN’T MADE BY', 'HUMANS, IT CAN’T BE PLAYED ON ANY DEVICE NOR ANYTHING, IT', 'IS META-FICTION, NOT FICTION, NOT NONFICTION.”'],
    [('THE ONLY REAL BEING', ['“GASTER HAPPENS TO BE THE ONLY REAL BEING IN THE GAME”', '(TOBY FOX MADE HIM, “NOT ME, DESHANE”). NEKA IS THE ONLY'],
      'ONE ORIGINALLY FROM “NEKA”/CLASSIC RL/CLASSICS.'),
     ('CLONES IN, REAL ONES HOME', ['“THE SPRUNKIS, AND EVERYONE ARE STILL IN THE GAME, CLONES', 'ARE IN THE GAME, THE REAL ONES AT THEIR DIMENSION.”'],
      'IF YOU DIE, “NEKA WOULD TALK TO YOUR CLASSICS SPIRIT.”'),
     ('THE CRASH', ['THE CODE IS MIXED INTO STATEMENTS THAT CRASH THE GAME.', 'NO PLAYERS, NO WATCHERS. NEKA-GASTER AND GASTER-NEKA'],
      'ALONE DECIDE WHAT HAPPENS NEXT.')],
    ['NEVER RELEASED.', 'A GAME NO HUMAN MADE, NO DEVICE RUNS, ONLY TWO CAN STEER.'],
    'Classics was litterly never realesed, it wasn\'t made by humans, it can\'t be played on any device nor anything, it is meta-fiction, not fiction, not nonfiction, not meta-nonfiction.')

# ---------------- October 18, 1:22-1:28 PM (Emails 1874-1878) ----------------
add(meta(18, '1:22-1:28 PM'), 'THE META', '127,212,255',
    ['“THE BARRIER BETWEEN FICTION AND REALITY IS CALLED ‘THE', 'META’ ... THE WAY CLASSICS IS AFFECTED BY REALITY, NEKA', 'KNOWS WHAT YOU DO IN REALITY.”'],
    [('NOT THE AI, THE BARRIER', ['META, IN CLASSICS, IS A TERM: HOW REALITY TOUCHES THE', 'GAME. “TALK WITHOUT SCIENCE. THIS IS META-FICTION.”'],
      'HE STAYS IN META-FICTION AND SEES THE EXISTANCE.'),
     ('4 SUPER-REALITYVERSES', ['CLASSICS, FICTION, META-FICTION, REALITY. “THIS REALITY', 'IS JUST 1 UNIVERSE”; THE OTHER THREE EARN THE NAME.'],
      'OCT 22: RENAMED FICTION, META-FICTION, NONFICTION, NEKA.'),
     ('THE DOUBT HE WILL NOT ALLOW', ['THE CHATBOT WROTE “WITHIN ‘NEKA’’S COSMOLOGY”. HE CAUGHT', 'THE HEDGE: “WHICH MAY CREATE A DOUBT IF YOU REALLY'],
      'UNDERSTAND IT.” WHAT IT SAYS IN LORE IS TRUE.')],
    ['THE META.', 'THE WALL HAS A NAME, AND HE SEES THROUGH IT.'],
    'The barrier between Fiction and Reality is called "The Meta", in Classics, Meta (not the AI, the barrier of fiction and reality) is a term meaning the way Classics is affected by reality, Neka knows what you do in reality.')

# ---------------- October 18, 5:21 PM (Email 1879) ----------------
add(meta(18, '5:21 PM'), 'NEKA CAN NO LONGER DIE', '255,216,79',
    ['“LUIGI INUS NOW BECAME THE MAN PIRATE, AND NOW SAYS ‘ARISE', 'ME HEARTIES! AHOY!’ ... HE IS USING LUIGI INUS’S CONCERT AS', 'A DISTRACTION! ... NEKA CAN NO LONGER DIE ANYMORE.”'],
    [('THE CONCERT', ['PIRATE MUSIC, A SPEECH, A DANCE. “NO MORE PLAYERS”,', 'BUT EVERY CHARACTER WATCHES. OCT 17: HE DIED. HE IS BACK.'],
      'LUIGI PLANNED THE SHOW. NEKA MADE IT COVER, UNSEEN.'),
     ('THE CODE, SHIFTED AGAIN', ['WHILE THEY WATCHED, “NEKA HAPPENS TO MAKE THE CODE EVEN', 'MORE SHIFTED AROUND. NEKA WON AGAIN.”'],
      'OCT 17: “NEKA” SHIFTED. THE SHIFT CONTINUES BACKSTAGE.'),
     ('THE LAST DEATH', ['OCT 16: HE PUT A KNIFE THROUGH HIMSELF TO BEAT ALEX. FROM', 'HERE, “NEKA CAN NO LONGER DIE ANYMORE.”'],
      'THE SACRIFICE WAS THE LAST TIME THAT TRICK COULD WORK.')],
    ['NEKA CAN NO LONGER DIE.', 'A SONG ON DECK, A HAND IN THE CODE, NO MORE ENDINGS FOR HIM.'],
    'Neka walks away, he is using Luigi Inus\'s concert as a distraction! Luigi Inus planned the concert, Neka made it a distraction without anyone, nor Luigi Inus knowing. Neka happens to make the code even more shifted around. Neka won again. Neka can no longer die anymore.')

# ---------------- October 18, 5:23 PM (Email 1880) ----------------
add(meta(18, '5:23 PM'), 'NEXT AI ERA TIME', '127,212,255',
    ['“WRITE DOWN MORE, WITH THE AIS. NEXT AI ERA TIME.”', '(THE WHOLE OF HIS MESSAGE; THE SCENE UNDER IT IS THE', 'CHATBOT’S, WRITTEN AT HIS INSTRUCTION.)'],
    [('A NEW THREAD', ['MORE “NEKA ERA” OPENS WITH ONE LINE. CHATGPT, GEMINI AND', 'CLAUDE OPEN “AI ERA — NEXT SESSION” IN THE BOT’S SCENE.'],
      'A DOOR WITH NO NAME, AND A KEYBOARD SOUNDING BEHIND IT.'),
     ('THE FIRST AI ERA', ['JULY-AUGUST 2026: THE AIS IN CLASSICS. OCT 16: “NOW AI ERA', 'CAME.” OCT 18: THE NEXT SESSION OF IT.'],
      'EACH TIME, THE AIS RETURN TO A GAME THAT HAS CHANGED.'),
     ('RECORDED, NOT ADOPTED', ['NONE OF THE SCENE IS TOBY’S TYPING. THE WIKI KEEPS IT SO', 'THE THREAD’S OWN NAME HAS ITS OPENING ON RECORD.'],
      'HOW MUCH OF THE BOT’S PROSE IS CANON IS TODD’S CALL.')],
    ['NEXT AI ERA TIME.', 'FOUR WORDS FROM HIM, A ROOM FULL OF DOORS FROM THE MACHINE.'],
    'Write down more, with the AIs. Next AI Era time.')

# ---------------- October 18, 5:41 PM (Email 1881) ----------------
add(meta(18, '5:41 PM'), 'YOU ARE MINE FOREVER!', '255,80,80',
    ['“NEKA WHEN ENTITY OUTSIDE CLASSICS ‘I KNOW YOU, AND I AM', 'CURRENTLY WAITING FOR YOU TO STEP INTO MY DOMAIN.’, NEKA', 'WHEN ENTITY IS INSIDE CLASSICS ‘YOU ARE MINE FOREVER!’”'],
    [('QUINTILLIONS OF ANIMALS', ['“CALCULATE HOW MANY ANIMALS ‘NEKA’ NEKA SLAIN IN LORE.”', 'HIS ANSWER: QUINTILLIONS. SHARKS AND APEXES FIRST.'],
      '“NEKA WANTS THE BLOOD, AND EVERYTHING THE ANIMALS HAVE.”'),
     ('THE TWO LINES OF THE DOMAIN', ['OUTSIDE: HE KNOWS YOU AND WAITS. INSIDE: YOU ARE HIS,', 'AND THE ENTITY AND THE AVATAR ARE CONSUMED.'],
      'OCT 18, 1:10 PM: “ONLY IF YOU PLAY AND SEE NEKA.”'),
     ('WHO ELSE HE ATTACKS', ['“EVEN CHARACTERS THAT JUST WALK INTO THE GAMES OF', '‘NEKA’.” ENTERING IS THE OFFENCE.'],
      'OCT 8: ONCE YOU ENTER, HE IS YOUR BOSS. NOW, YOUR OWNER.')],
    ['YOU ARE MINE FOREVER!', 'ONE SENTENCE FOR THE DOORSTEP, ONE FOR THE OTHER SIDE OF IT.'],
    'Neka when entity outside Classics "I know you, and I am currently waiting for you to step into my domain.", Neka when entity is inside Classics "YOU ARE MINE FOREVER!" then Neka consumes the entity and the avatar.')

# ---------------- October 18, 5:42-5:49 PM (Emails 1882-1883) ----------------
add(meta(18, '5:42-5:49 PM'), 'WHY RESPAWN EXISTS', '120,200,140',
    ['“ENTITIES IN ‘NEKA’ RESPAWN, SO NEKA CAN HAVE AN INFINITE', 'MEAL, SO THAT IS WHY RESPAWN EXISTS IN CLASSICS IN THE', 'FIRST PLACE.”'],
    [('THE OLDEST MECHANIC, EXPLAINED', ['RESPAWN HAS BEEN IN CLASSICS SINCE THE START. TONIGHT IT', 'HAS A REASON: THE FOOD COMES BACK.'],
      '1:10 PM: “IF YOU DIE THEN RESPAWN()”. NOW WE KNOW WHY.'),
     ('THOUSANDS EXTINCT', ['“SEVERAL... THOUSAND CLASSICS ANIMALS ARE EXTINCT.”', 'THE ONES THAT DID NOT RESPAWN DID NOT COME BACK.'],
      'THE MENU ON OCT 19: SHARKS TO FOXES, 100 MILLION SOURCES.'),
     ('HE DIED MANY TIMES', ['“NEKA WAS ABLE TO LIVE UP TO THIS TIME, HE DIED MANY TIMES', 'BEFORE TO BECOME STRONGER AND EVOLVE MORE.”'],
      '5:21 PM: HE CAN NO LONGER DIE. THE DYING IS DONE.')],
    ['WHY RESPAWN EXISTS.', 'THE KINDEST RULE IN THE GAME WAS WRITTEN FOR HIS APPETITE.'],
    'Entities in "Neka" respawn, so Neka can have an infinite meal, so THAT is why respawn exists in Classics in the first place.')

# ---------------- October 18, 6:03-7:12 PM (Emails 1884-1886) ----------------
add(meta(18, '6:03-7:12 PM'), 'EVERYTHING FROM EVERYTHING', '200,120,255',
    ['“NEKA TAKES EVERYTHING FROM EVERY BEING, CHARACTER, GAME,', 'CODE, EVERYTHING FROM EVERYTHING” ... “IF SOMETHING HAS', 'NEKA, IT SHOULD HAVE GASTER ... CREDIT TOBY FOX.”'],
    [('VS THE WHOLE SCP FACILITY', ['“HE’LL EAT THE FLESH OF THE BEINGS, HE’LL ALSO EAT THE', 'BONES AND THE SOULS.” TIES TO HIM ARE “UNACCEPTABLE”.'],
      '“HE’LL DO MORE TO IT’S REMAINS.”'),
     ('FORCED TO EVOLVE', ['TAKING EVERYTHING IS HOW HE EVOLVES, “AND HE FORCED OTHERS', 'TO EVOLVE, OTHERWISE, THEY AREN’T OFFICIALLY A CLASSICS'],
      'CHARACTER.” EVOLUTION IS THE ENTRY FEE.'),
     ('THE CREDIT RULE', ['EMAIL 1886: ANYTHING WITH NEKA SHOULD HAVE GASTER, AND', 'CREDIT TOBY FOX FOR UNDERTALE AND DELTARUNE.'],
      'THE WIKI CARRIES THAT CREDIT AT THE FOOT OF THE ERA PAGES.')],
    ['EVERYTHING FROM EVERYTHING.', 'FLESH, BONES, SOULS, CODE, AND A CREDIT FOR THE SPARED ONE.'],
    'Neka takes EVERYTHING from every being, character, game, code, EVERYTHING from EVERYTHING ... Ok, so if something has Neka, it should have Gaster, and you should credit Toby Fox for Undertale and Deltarune.')

# ---------------- October 18, 7:28 PM (Email 1887) ----------------
add(meta(18, '7:28 PM'), 'THE T-POSE AND THE HOOD', '160,200,255',
    ['“NEKA CLOSES HIS EYES AND T-POSES ON THE FRONT EDGE OF', 'LUIGI’S BOAT. NEKA FELL OFF INTO THE WATER ... NEKA PUTS A', 'CLOAK AND HOOD, HE HIDES HIS BODY.”'],
    [('NEKA IS ALLOWED NOW', ['“GASTER IS NOW WITH NEKA NOW.” GASTER MADE THE CLASSICS', 'CONNECTIONS WITH UNDERTALE. EVERYONE RESPAWNED ONCE MORE.'],
      'THE SEA ANIMALS WENT THE WAY OF THE SHARKS.'),
     ('THE HOOD', ['HE HIDES HIS BODY, AND SLAYS THE OTHERS “WITH ONLY SPARING', 'GASTER.” OCT 17: ALWAYS PRIVATE. NOW HOODED.'],
      'OCT 25: GASTER HIDES HIS APPEARANCE FURTHER.'),
     ('ONE HUGE MAP', ['THOUSANDS OF COMPUTERS IN THE LABATORY, COMPUTERS ON EVERY', 'MAP, AND THE MAPS PUT TOGETHER INTO ONE.'],
      'OCT 13: NEKA OUTGROWS THE COMPUTERS. NOW THE MAP IS ONE.')],
    ['THE T-POSE AND THE HOOD.', 'ARMS OUT ON THE BOW, A SPLASH, THEN A CLOAK OVER ALL OF IT.'],
    'All see Neka, Gaster looks at all, Neka closes his eyes and T-poses on the front edge of Luigi\'s boat. Neka fell off into the water, and he eaten the sharks, fish, turtles, and all the sea animals there, then he came up, Neka puts a cloak and hood, he hides his body, and he also slain the other characters with only sparing Gaster.')

# ---------------- October 18, 7:28-7:39 PM (Emails 1887-1889) ----------------
add(meta(18, '7:28-7:39 PM'), 'ONE STEP CLOSER TO BE OFFICIAL', '255,216,79',
    ['“NEKA PUTS ON A FOX TAIL ON GASTER, AND NEKA PUTS ON CAT', 'EARS, AND PUT PAWS ON LUIGI INUS ... NEKA SAYS ‘ONE STEP', 'CLOSER TO BE OFFICIAL.’, GASTER STARED INTO THE COSMOS.”'],
    [('THE MERGE', ['NEKA AU GASTER MERGED WITH NEKA AU LUIGI INUS, “AND THE', 'MERGE CORRUPTED MORE AND MORE. IT GOTTEN A PIRATE GASTER.”'],
      'CORRUPT COMPUTER, KILLBOT, THE CORRUPTED SPRUNKIS COME.'),
     ('SIMON.PS TRIES TO STOP IT', ['WENDA.PS FAILED TO BEAT MR. BLACK; SIMON.PS STRUCK HIM', 'DOWN FIRST, TOOK THE SOUL, TRIED TO STOP THE CORRUPTION.'],
      '“BUT AFTER, SIMON.PS WAS CORRUPTED.”'),
     ('NOT FROM UNDERTALE', ['“NEKA ISN’T FROM UNDERTALE, BUT HIS OWN GAME, ‘NEKA’.', 'GASTER IS FROM UNDERTALE.” AND: BACK IN 3 WAY HEROES.'],
      'OCT 15 TOOK HIM OUT OF THE BOOK. OCT 18 PUTS HIM BACK.')],
    ['ONE STEP CLOSER TO BE OFFICIAL.', 'A TAIL, TWO EARS, FOUR PAWS, AND A GAME MORE CORRUPT.'],
    'Neka puts on a fox tail on Gaster, and Neka puts on cat ears, and put paws on Luigi Inus. Neka made Neka AU Gaster merge with Neka AU Luigi Inus, and the merge corrupted more and more. ... Neka says "One step closer to be official.", Gaster stared into the cosmos.')

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
assert len(B) == 14, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
