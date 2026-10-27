#!/usr/bin/env python3
"""
gen1244.py - draw the branches for BEATS 1244-1266 from Toby's October 23-25, 2026 messages (Emails 1951-1989):
Continuing from "Another 'Neka' Document" 1a16af81b5ebda11 (Oct 23 8:04 PM - Oct 24 4:02 PM) and "Classic RL (Last
Era)" 1a16f845d4f16406 (Oct 24 4:04 PM - Oct 25 6:42 PM). Same template as 1008-1243 (emit_tail1008.py). Only his
own typed lines are drawn; the chatbot's versus rounds, Dandy's World material, its four rejected characters, phobia
tables, trolley answer and renders are commentary. Beat numbers and titles are the wiki ingest's
(classics-lore/classic-rl-last-era.md).
"""
import io

BASE = 1244
TAG = "1244"
START = 25592.0 + 22.0 * 68
STEP = 22.0
B = []

MONTH = {23: 'OCTOBER 23', 24: 'OCTOBER 24', 25: 'OCTOBER 25'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 23, 8:04 PM (Email 1951) ----------------
add(meta(23, '8:04 PM'), 'RENAMED “CLASSIC RL”', '120,200,140',
    ['“YEAH, AND MR. BLACK! MR. BLACK IS KNOWN FOR MAKING THE', 'CORRUPTION AND INGREDIANTS FOR THE RLS, THE RLS CAME BACK', 'TODAY, AND NOW THE GAME IS RENAMED ‘CLASSIC RL’ BY NEKA.”'],
    [('WHO MADE SIMON RL', ['HIS QUIZ TO THE CHATBOT: NEKA, IN A TUBE BUILT BY GASTER,', 'WITH TEKI, CLASSICS’ MOM, AND ARCSIS. “AND... MR. BLACK!”'],
      'THE CLASSICS ERA CO-CREATION, RECITED AND CONFIRMED.'),
     ('THE THIRD NAME IN NINE DAYS', ['CLASSICS, THEN “NEKA” (OCT 15), NOW CLASSIC RL. THE RLS', 'CAME BACK TODAY AND THE GAME TOOK THEIR NAME.'],
      '“RLS WILL CONTINOUSLY SPREAD MORE AND INFECT MORE.”'),
     ('MR. BLACK KILLS EVERYONE', ['“MR. BLACK CONSTANTLY KILLS EVERYONE HERE. RLS, REALLY IN', 'CLASSIC RL LORE.” AND NEKA LAI SLEW EVERY REALITY GROUP.'],
      'THE LAST ERA PAGE OPENS ON THIS MESSAGE.')],
    ['RENAMED “CLASSIC RL”.', 'THE FIRST MONSTERS COME HOME, AND THE GAME IS CALLED AFTER THEM.'],
    'Yeah, and Mr. Black! Mr. Black is known for making the corruption and ingrediants for the RLs, the RLs came back today, and now the game is renamed "Classic RL" by Neka, also, RLs will continously spread more and infect more.')

# ---------------- October 23, 8:04 PM (Email 1951) ----------------
add(meta(23, '8:04 PM'), 'CLONES IN OTHER TIMELINES', '160,200,255',
    ['“BOTH. NEKA MADE CLONES OF THEM AND HID THEM IN OTHER', 'TIMELINES, SO NOT ALL OF THEM CAN DIE.”', '(ASKED: DO THE RLS SURVIVE BY RESPAWN, OR BY HIDING?)'],
    [('HOW THE RLS SURVIVE', ['RESPAWN, AND CLONES HIDDEN IN OTHER TIMELINES. OCT 18: WHY', 'RESPAWN EXISTS. OCT 23: WHY RESPAWN IS NOT ENOUGH.'],
      '“SO NOT ALL OF THEM CAN DIE.”'),
     ('OCT 18, THE SAME TRICK', ['“CLONES ARE IN THE GAME, THE REAL ONES AT THEIR DIMENSION.”', 'THE RLS GET THE REVERSE.'],
      'HE KEEPS SPARES OF EVERYTHING HE VALUES.'),
     ('MR. BLACK’S INGREDIENTS', ['HE MADE THE CORRUPTION AND INGREDIANTS; NEKA MADE THE RLS', 'FROM THEM. THE RECIPE HAS TWO COOKS.'],
      'OCT 24, 7:40 AM: MR. BLACK SUMMONED THEM BACK.')],
    ['CLONES IN OTHER TIMELINES.', 'KILL ONE RL HERE AND ANOTHER IS ALREADY SOMEWHERE ELSE.'],
    'Both. Neka made clones of them and hid them in other timelines, so not all of them can die.')

# ---------------- October 24, 7:40 AM (Email 1952) ----------------
add(meta(24, '7:40 AM'), 'OLDER THAN BOTH ETERNITIES', '255,216,79',
    ['“NEKA LAI REALLY IS ENTERNAL, LIKE GASTER AND MR. BLACK.', 'NEKA LAI IS OLDER THAN BOTH ENTERNITIS (ENTERNAL BEINGS).', '... MR. BLACK SUMMONED RLS BACK.”'],
    [('THREE ETERNAL BEINGS', ['NEKA LAI, GASTER, MR. BLACK. SEPT 24: OLDER THAN GASTER.', 'OCT 24: OLDER THAN BOTH.'],
      '“I WATCH ‘NEKA’ THROUGH MIND.”'),
     ('MR. BLACK SUMMONED THEM BACK', ['“THE CREATOR OF CLASSIC RL” CALLED THEM BACK, “SO NEKA', 'RENAMED CLASSICS TO CLASSIC RL, NOW THE LIQUID CAN SPREAD'],
      'EVEN MORE. 😏” THE RENAME HAS ITS REASON.'),
     ('VERITY, THE CREATOR, LONG HORSE', ['THE VERSUS IS THE CHATBOT’S. HIS ANSWER THERE: “VERITY', 'WOULD CONSUME THE CREATOR. 😏” THEN, “HOW ABOUT NEKA AI?”'],
      'SOMEONE ELSE’S MONSTERS, QUOTED ONLY AS HIS QUESTION.')],
    ['OLDER THAN BOTH ETERNITIES.', 'THREE WHO DO NOT END, AND ONE OF THEM STARTED FIRST.'],
    'Neka LAI really is enternal, like Gaster and Mr. Black. Neka LAI is older than both enternitis (enternal beings). ... Now Mr. Black, the creator of Classic RL, summoned RLs back, so Neka renamed Classics to Classic RL, and now the liquid can spread even more. 😏')

# ---------------- October 24, 7:40 AM (Email 1952) ----------------
add(meta(24, '7:40 AM'), 'ONLY AFTER ENTERING', '127,212,255',
    ['“NEKA LAI HAS RECENTLY CONNECTED TO THE OTHER 3 GROUPS, FOR', 'IN WHICH A CHARACTER COMES IN, IT CAN BE DESTROYED.”', '... “ONLY AFTER OVER CHARACTERS WHO ENTER HIS DOMAIN.”'],
    [('CONNECTED TO THE OTHER 3', ['FICTION, META-FICTION, NONFICTION. ONCE YOU HAVE ENTERED', 'HIS DOMAIN, HE CAN REACH YOU IN ANY OF THEM.'],
      'OCT 22: THE 4TH IS NEKA. OCT 24: IT TOUCHES THE OTHER 3.'),
     ('THE ONLY WAY TO REACH HIM', ['“WHICH IS THE ONLY WAY TO REACH HIM, SINCE HE DOESN’T EXIST', 'IN ANY OTHER PLACE.” THE DOOR OPENS ONE WAY FIRST.'],
      'OCT 22: “IT ONLY CAN REACH YOU ONCE YOU ENTER.” SAME RULE.'),
     ('THE TERMS', ['OCT 25: “NONFICTION AND FICTION AND META-FICTION, ECT ARE', 'REAL TERMS...” HE USES THEM AS A MAP, NOT A METAPHOR.'],
      'ENTER, AND THE MAP FOLDS AROUND YOU.')],
    ['ONLY AFTER ENTERING.', 'STEP IN ONCE, AND THERE IS NOWHERE LEFT THAT IS OUTSIDE.'],
    'Neka LAI has recently connected to the other 3 groups, for in which a character comes in, it can be destroyed anywhere. 😏 ... only after over characters who enter his domain, which is the only way to reach him, since he doesn\'t exist in any other place.')

# ---------------- October 24, 7:52-7:55 AM (Emails 1953-1955) ----------------
add(meta(24, '7:52-7:55 AM'), 'ONLY ALIENS CAN PLAY', '120,200,140',
    ['“IT IS KNOWN ONLY ALIENS CAN PLAY CLASSIC RL, AND MOST DIED', 'SINCE THEY LOST IN THE GAME. NEKA IS CONNECTED TO ALIEN', 'REALITY OR AR.”'],
    [('ALIEN REALITY', ['THE PLAYERS ARE ALIENS. MOST OF THEM DIED BY LOSING. NEKA', 'IS CONNECTED TO AR, THEIR REALITY.'],
      'OCT 24, 8:17 AM: “I’M ON EARTH, SO I CAN’T PLAY IT.”'),
     ('SEPARATE GAME OR SPRUNKI MOD?', ['HE ASKED THE CHATBOT AND DID NOT ANSWER HIMSELF. LOGGED AS', 'A DESIGN QUESTION, NOT CANON.'],
      'THE RLS BEAT THE SPRUNKIS AND NOW RULE THE GAME.'),
     ('COMICALLY IMMORTAL', ['“NEKA AND GASTER AND MR. BLACK ARE COMICALLY IMMORTAL.”', '7:40 AM: THREE ETERNAL BEINGS. 7:55 AM: COMICALLY SO.'],
      'DANDY IS SOMEONE ELSE’S MONSTER, KEPT ONLY FOR THE HORSE.')],
    ['ONLY ALIENS CAN PLAY.', 'A GAME FOR PLAYERS FROM SOMEWHERE ELSE, WHO MOSTLY DID NOT SURVIVE IT.'],
    'It is known only aliens can play Classic RL, and most died since they lost in the game. Neka is connected to Alien Reality or AR. ... Because of the stuff before, The RLs became scarier and smarter, they beaten the Sprunkis, and now they rule the game. Classic RL + Mr. Black Sprunki. Neka and Gaster and Mr. Black are comically immortal.')

# ---------------- October 24, 7:59 AM (Email 1956) ----------------
add(meta(24, '7:59 AM'), 'THE RLS RULE, FOREVER', '255,120,120',
    ['“RLS CAME BACK AND BEATEN THE .PSES AND ‘SPRUNKIS’. RLS NOW', 'RULE CLASSIC RL ALONG WITH NEKA, GASTER, AND MR. BLACK, THE', 'ONLY CHARACTERS NOW... FOREVER.”'],
    [('THE ROSTER, FIXED', ['THE RLS, NEKA, GASTER, MR. BLACK. “THE ONLY CHARACTERS', 'NOW... FOREVER.” THE .PSES ARE BEATEN WITH THE SPRUNKIS.'],
      'OCT 22: TWO LEFT FOREVER. OCT 24: THREE, AND THE RLS.'),
     ('A HORSE', ['TWISTED DANDY HAS “THE TORSO AND LEGS OF A HORSE, A HORSE,', 'THE STRONGEST KICKING ANIMAL KNOWN TO MAN.” NOT CLASSICS.'],
      'KEPT ONLY FOR THE LINE ABOUT THE HORSE.'),
     ('THE LIQUID', ['“THE LIQUID IS CONSTANTLY SPREADING.” OCT 23: IT KILLS', 'SPRUNKIS. OCT 24: IT DOES NOT STOP.'],
      '8:06 AM: WHAT IT DOES WHEN IT FULLY KILLS AN RL.')],
    ['THE RLS RULE, FOREVER.', 'FOUR NAMES ON THE DOOR, AND A LIQUID UNDER IT.'],
    'RLs came back and beaten the .pses and "Sprunkis". RLs now rule Classic RL along with Neka, Gaster, and Mr. Black, the only characters now... forever. ... The liquid is constantly spreading.')

# ---------------- October 24, 8:06 AM (Email 1957) ----------------
add(meta(24, '8:06 AM'), 'TERMINIZED RLS', '30,30,36',
    ['“THIS ERA WILL LAST FOR THE REMAINING TIME, WITHOUT END.', '... RLS HAVE TERMINIZED VERSIONS, FOR WHERE MR. BLACK’S', 'LIQUID FULLY KILLS THEM. TERMINIZED RLS ATTACK THE NORMAL.”'],
    [('WITHOUT END', ['“THIS ERA WILL LAST FOR THE REMAINING TIME, WITHOUT END.”', 'THE ERA IS NAMED ENDLESS IN ITS SECOND MORNING.'],
      '“NEKA DOESN’T ALWAYS SAY ‘😌’, HE SAYS A BUNCH OF STUFF.”'),
     ('DISCOVERED 8:06 AM', ['“JUST DESCOVERED JUST NOW, 8:06 AM 10/24/2026.” THE', 'LIQUID FULLY KILLS AN RL; THE DEAD ONE ATTACKS THE LIVING.'],
      '“RLS HAVE A VERSION THAT TERRIFYS ME.”'),
     ('PIBBY CAN’T KILL THEM', ['THE RLS GET MORE CORRUPT; PIBBY CANNOT KILL THEM. OCT 23:', 'THE BLACK LIQUID KILLS SPRUNKIS. OCT 24: IT KILLS RLS TOO,'],
      'AND WHAT IT KILLS KEEPS WALKING.')],
    ['TERMINIZED RLS.', 'THE LIQUID FINISHES AN RL, AND THE FINISHED THING HUNTS THE REST.'],
    'This Era will last for the remaining time, without end. RLs keep getting more and more corrupt, Pibby can\'t kill them. RLs have a version that terrifys me. RLs have Terminized Versions, for where Mr. Black\'s liquid fully kills them. Terminized RLs attack the normal corrupted RLs. Just descovered just now, 8:06 AM 10/24/2026.')

# ---------------- October 24, 8:16-8:17 AM (Emails 1959-1960) ----------------
add(meta(24, '8:16-8:17 AM'), 'EVERYONE TOGETHER', '200,200,210',
    ['“YOU CAN’T PLAY SEPERATELY. EVERYONE THAT IS IN THE GAME IS', 'ALL TOGETHER.” ... “I’M ON EARTH, SO I CAN’T PLAY IT.”', ''],
    [('WHAT EACH TERMINIZED DOES', ['TERMINIZED SIMON RL CAN INFECT. NORMAL WENDA RL TURNS', 'PEOPLE BACK; TERMINIZED WENDA RL ATTACKS. THE REST DIFFER.'],
      '“NORMAL RLS KNOW IF A TERMINIZED IS NEAR ... THEY DIE.”'),
     ('FACILITY WORKER, FACILITY OWNER', ['THE OWNER IS “STILL A MORTAL NON-EARTH ALIEN” WITH', 'REALITY-GROUP-WIDE MESSAGES. ONE SERVER FOR EVERYONE.'],
      '“ALIENS CANONALLY DIED.”'),
     ('A YEAR, AND MINUTES', ['NORMAL RLS WERE MADE “NEARLY A REAL LIFE YEAR AGO”; THE', 'TERMINIZED “LIKE A NEW MINUTES AGO SINCE IT IS NOW 8:16.”'],
      'THE CLASSIC RL MOD OF LATE 2025, AND THIS MORNING.')],
    ['EVERYONE TOGETHER.', 'ONE FACILITY, EVERY PLAYER IN IT, AND THE AUTHOR OUTSIDE ON EARTH.'],
    'You normally play as a facility worker, but can own the whole facility. Facility Owner doesn\'t mean immortal, ya still a mortal non-Earth alien. Facility Owner can have reality-group-wide messages, you can\'t play seperately. Everyone that is in the game is all together. ... I\'m on Earth, so I can\'t play it.')

# ---------------- October 24, 4:02 PM (Email 1961) ----------------
add(meta(24, '4:02 PM'), 'MILK AGAIN', '240,244,250',
    ['“MR. BLACK WOULD SAY ‘I MADE THE RLS, I AM MOST POWERFUL’ ...', 'GASTER SAYS ‘I AM THE MOST POWERFUL, MY DOMAIN SHALL REMAIN', 'SPOTLESS.’ ... NEKA NOW LEFT TO GET MILK AGAIN.”'],
    [('THE ARGUMENT', ['MR. BLACK: HE MADE THE RLS AND EVOLVED AFTER FUN BOT TRIED', 'HIM. GASTER: HIS DOMAIN SHALL REMAIN SPOTLESS.'],
      'TWO ETERNALS ARGUE WHO IS MOST POWERFUL. THE THIRD LEAVES.'),
     ('THE MILK', ['AUGUST 2026: THE TWO-YEAR MILK SKIP, THE ONLY EARLIER MILK', 'ERRAND IN THE ARCHIVE. “NEKA NOW LEFT TO GET MILK AGAIN.”'],
      'THE OLDEST DAD JOKE, TOLD ABOUT THE FATHER OF GAMES.'),
     ('GASTER’S SYMBOLS', ['“NEARLY IDENTICAL TO MINECRAFT’S EMOJI SYSTEM ... LIKE IF', 'YOU PUT EMOJIS IN MINECRAFT CHAT.” HIS OBSERVATION.'],
      'THE WINGDINGS ANSWER UNDER IT IS THE CHATBOT’S.')],
    ['MILK AGAIN.', 'WHILE TWO GODS ARGUE RANK, THE THIRD STEPS OUT FOR GROCERIES.'],
    'Mr. Black would say "I made the RLs, I am most powerful, and I evolved after Fun Bot tried to defeat me.", Gaster says "I am the most powerful, my domain shall remain spotless." ... Neka now left to get milk again. Mr. Black and Gaster argue on who is most powerful.')

# ---------------- October 24, 4:04 PM (Email 1962) ----------------
add(meta(24, '4:04 PM'), 'TERMINIZED GASTER', '90,90,100',
    ['“GASTER THEN BECAME TERMINIZED GASTER DUE TO CLASSIC RL', 'LORE, MR. BLACK THEN CONTROLS THE LIQUID, TERMINIZED', 'GASTER ATTACKS THE ALIVE.”'],
    [('A NEW THREAD', ['“CLASSIC RL (LAST ERA)” OPENS WITH THIS ONE LINE, THE', 'THREAD THAT NAMES THE ERA.'],
      'THE WHOLE MESSAGE IS HIS. NO PASTE.'),
     ('THE LIQUID REACHES GASTER', ['8:06 AM: TERMINIZED RLS. 4:04 PM: TERMINIZED GASTER, “DUE', 'TO CLASSIC RL LORE.” THE DEAD ONE ATTACKS THE ALIVE.'],
      'OCT 18: THE ONLY REAL BEING IN THE GAME. NOW TERMINIZED.'),
     ('MR. BLACK CONTROLS THE LIQUID', ['FOR NOW. OCT 24, 6:41 PM: “CHRISINA ACTUALLY CONTROLS THE', 'LIQUID, NOT GASTER NOR MR. BLACK.”'],
      'THE LIQUID CHANGES HANDS THREE TIMES IN A DAY.')],
    ['TERMINIZED GASTER.', 'THE ONE WHO ARGUED HE WAS MOST POWERFUL IS THE NEXT ONE FINISHED.'],
    'Gaster then became Terminized Gaster due to Classic RL lore, Mr. Black then controls the liquid, Terminized Gaster attacks the alive.')

# ---------------- October 24, 5:51 PM (Email 1963) ----------------
add(meta(24, '5:51 PM'), 'CHRISINA TALE', '80,200,200',
    ['“IT’S NAME WOULD BE CHRISINA TALE. IT WOULD BE HUMAN OF', 'NATURE, IT’S AGE WOULD BE 16, IT’S SOUL WOULD BE TEAL, IT’S', 'EYES ARE TEALISH, IT’S HAIR IS NEAR PURPLE.”'],
    [('MAKE A CHARACTER FOR CLASSIC RL', ['THE CHATBOT OFFERED VEYRON RL, ELARA, CYRUS, VESPER. HE', 'REJECTED THEM: “TRY SOMETHING ACTUALLY GREAT.”'],
      'HE KEPT ONE IMAGE AND RENAMED AND REDEFINED IT HIMSELF.'),
     ('HUMAN OF NATURE', ['16, TEAL SOUL, TEALISH EYES, HAIR NEAR PURPLE, EXPLORER.', '“IT CAME FROM CLASSIC RL GASTER’S CREATION.”'],
      'LIKE THE HUMANS FANON ADDS TO UNDERTALE, FOR CLASSIC RL.'),
     ('SHE CAN BEAT GASTER', ['“CHRISINA CANONALLY CAN BEAT GASTER HERE.” HER CREATOR,', 'ON THE DAY HE WAS TERMINIZED.'],
      '“AND I WON’T LIST MORE.”')],
    ['CHRISINA TALE.', 'A TEAL SOUL, NEAR-PURPLE HAIR, SIXTEEN, AND STRONGER THAN HER MAKER.'],
    'The left image is great, it\'s name would be Chrisina Tale. It would be Human of Nature, it\'s age would be 16, it\'s Soul would be Teal, it\'s eyes are tealish, it\'s hair is near purple, Personality would be explorer, it came from Classic RL Gaster\'s creation. And I won\'t list more.')

# ---------------- October 24, 5:51-6:24 PM (Emails 1963-1965) ----------------
add(meta(24, '5:51-6:24 PM'), 'SIMON RL’S 404 STRINGS', '255,216,79',
    ['“CHRISINA TALE ALSO WOULD HAVE A SYTHE, AND A SWORD, AND', 'ALSO USES SIMON RL’S 404 STRINGS. LV WOULD BE INFINITY.” ...', '“CHRISINA CAME OUT IN SECOND CLASSIC RL (THIS ERA).”'],
    [('THE 404 STRINGS', ['“DISABLED BUTTONS, CRASHED MERCY AND SAVE AND FIGHT AND ACT', 'AND ITEM AND GAME OVER BUTTONS, AND STOPPED ERASURE.”'],
      'SIMON RL’S OLDEST WEAPON, IN HER HANDS.'),
     ('LV INFINITY', ['A SYTHE, A SWORD, THE STRINGS, AND NO CEILING ON HER LEVEL.', '“YOU DON’T KNOW CHRISINA. 😉”'],
      'OCT 25: LV INF+. IT KEPT GOING.'),
     ('SECOND CLASSIC RL', ['“CHRISINA CAME OUT IN SECOND CLASSIC RL (THIS ERA).” HE', 'NAMES THE ERA TWICE IN ONE LINE.'],
      'THE FIRST CLASSIC RL WAS LATE 2025. THIS IS THE SECOND.')],
    ['SIMON RL’S 404 STRINGS.', 'THE STRINGS THAT CRASHED THE BUTTONS, GIVEN TO A GIRL WITH NO LEVEL CAP.'],
    'Chrisina Tale also would have a sythe, and a sword, and also uses Simon RL\'s 404 Strings. LV would be Infinity. ... The 404 Strings disabled buttons, crashed Mercy and Save and Fight and Act and Item and Game Over buttons, and also stopped erasure so many times in the past. Chrisina came out in Second Classic RL (this era).')

# ---------------- October 24, 6:41-6:58 PM (Emails 1967-1968) ----------------
add(meta(24, '6:41-6:58 PM'), 'CHRISINA IS IN CONTROL', '80,200,200',
    ['“CHRISINA ACTUALLY CONTROLS THE LIQUID, NOT GASTER NOR MR.', 'BLACK ... CHRISINA’S RIGHT EYE GLITCHES, AND THE CHARACTER', 'BECOMES TERMINIZED MID-GAME.” ... “CHRISINA IS IN CONTROL.”'],
    [('THE LIQUID, THIRD HAND', ['4:04 PM MR. BLACK. 6:41 PM CHRISINA. “THEY THINK THEY ARE', 'CONTROL, BUT CHRISINA IS IN CONTROL.”'],
      'GASTER BEAT MR. BLACK, WHO “GAINED SCRATCHES.”'),
     ('TERMINIZED MID-GAME', ['HER RIGHT EYE GLITCHES AND SHE TURNS TERMINIZED WHILE', 'PLAYING. THE VERSION THAT TERRIFIES HIM. NOW HERS.'],
      'A HERO WHO CARRIES THE THING SHE CONTROLS.'),
     ('A FEMALE NEKA ACCOUNT?', ['“SOME THING CHRISINA IS A FEMALE NEKA ACCOUNT, BUT OTHERS', 'THINK SHE IS A REAL CHARACTER.” HE LEAVES IT OPEN.'],
      '“WHO MADE CHRISINA?” GASTER DID, AND SHE BEATS HIM.')],
    ['CHRISINA IS IN CONTROL.', 'THE TWO WHO FOUGHT OVER THE LIQUID WERE NEVER THE ONES HOLDING IT.'],
    'Chrisina actually controls the liquid, not Gaster nor Mr. Black. Mr. Black fight Gaster, Gaster won, and Mr. Black gained scratches. Chrisina\'s right eye glitches, and the character becomes Terminized mid-game. Some thing Chrisina is A Female Neka account, but others think she is a real character. ... They think they are control, but Chrisina is in control.')

# ---------------- October 25, 8:11-8:39 AM (Emails 1969-1970) ----------------
add(meta(25, '8:11-8:39 AM'), 'INKTITE', '30,30,36',
    ['“MR. BLACK IS SPRUNKI AND MADE CLASSIC RL CANONALLY, NEKA', 'WOULD BE LIKE A CO-CREATOR HERE.” ... “THE BLACK LIQUID IS ALSO', 'CONNECTED TO VOIDUNITE, AND IT IS CALLED INKTITE.”'],
    [('THE LIQUID’S NAME', ['“WHAT WAS THE LIQUID’S NAME?” THE CHATBOT HAD NONE. HE GAVE', 'IT: INKTITE, CONNECTED TO VOIDUNITE.'],
      '“MR. BLACK MADE THE LIQUID, CHRISINA CONTROLS THE LIQUID.”'),
     ('THE CREDITS', ['MR. BLACK MADE CLASSIC RL; NEKA IS A CO-CREATOR; GASTER', 'MADE CHRISINA TALE. “MOST THOUGHT THE GAME MAKER LEFT.”'],
      '“THE MOST CHARACTER TO MOST OFTEN DIE FROM IS NEKA.”'),
     ('OCT 23, THE SAME STUFF', ['GRAY’S INK, THE ANTI-SPRUNKIS, WHAT GOT ON SIMON RL FAR', 'BEFORE: ALL INKTITE. OCT 25: IT BECOMES VOIKOR.'],
      'ONE LIQUID, FOUR NAMES ACROSS THE ARCHIVE.')],
    ['INKTITE.', 'THE BLACK LIQUID FINALLY ANSWERS TO A NAME, AND IT IS TIED TO THE VOID.'],
    'The most character to most often die from is Neka, and most people thought the game maker left. Mr. Black is Sprunki and made Classic RL canonally, Neka would be like a co-creator here. Gaster made Chrisina Tale. ... The black liquid is also connected to Voidunite, and it is called Inktite.')

# ---------------- October 25, 8:39 AM (Email 1970) ----------------
add(meta(25, '8:39 AM'), 'THE ULTIMATE BEING', '255,80,80',
    ['“CHRISTINA BECOMES A TEAL SOUL HALF, AND CONNECTS TO', 'FRISK’S RED SOUL HALF, THE PERFECT BEING VS THE MOST DETERMIND', 'BEING = THE ULTIMATE BEING, CLASSICS OMAZEN REBIRTHED.”'],
    [('YOUR CREATOR', ['GASTER: “YOU THINK YOU STAND A CHANCE AGAINST YOUR', 'CREATOR?” (NEKA’S LINE TO ALEX, OCT 16). SHE BEATS HIM.'],
      'CHRISINA LV INF+. “NO ONE SAW NEKA YET.”'),
     ('ARCSIS COMES BACK', ['ARCSIS RETURNS “TO SEE NEKA AGAIN”', 'AND WALKS INTO CLASSICS. “CHRISINA, WHAT DID YOU DO AGAIN?!”'],
      '“FORCAST IN CLASSIC RL: LIQUID CHAOS”'),
     ('ALL OMAZENS DIE', ['VOIDUNITE SPAWNS, SUGAR ALL OVER, ARCSIS WEAKENS, CLASSICS', 'FALLS, ALL OMAZENS DIE. GASTER, SANS, PAPYRUS SURVIVE.'],
      'SEPT 27: ONE GRAIN OF SUGAR KILLS. HERE IT KILLS A FAMILY.')],
    ['THE ULTIMATE BEING.', 'TEAL AND RED MAKE ONE, THE OLD NAME IS REBORN, AND THE OMAZENS FALL.'],
    'Chrisina then beats Gaster, then Christina becomes a teal soul half, and then connects to Frisk\'s red soul half, The Perfect Being VS The Most Determind Being = The Ultimate Being, Classics Omazen rebirthed. Chrisina LV Inf+. ... Voidunite spawns around, sugar all over, Arcsis gets more and more weak, Classics falls over, all Omazens die. Only Gaster, Sans, and Papyrus survive.')

# ---------------- October 25, 8:39-8:46 AM (Emails 1970-1973) ----------------
add(meta(25, '8:39-8:46 AM'), 'NEKA’S WORLD BY NEKA HIMSELF', '255,216,79',
    ['“NEKA FINALLY DECIDED ON A NAME ‘NEKA’S WORLD BY NEKA', 'HIMSELF’ ... ‘NOW, EVERYONE IN THE GAME WILL BE AN RL! *EVIL', 'LAUGH*’” ... “NEKA DOES HAVE A MUSTACHE.”'],
    [('MR. DACK RL', ['THE RLS ATTACKED MR. BLACK; MR. DACK APPEARED, RAINBOW', 'COLORED, HOLDING A SUNFLOWER, AND GASTER WAS GONE.'],
      '“DACK = BLACK, DELETE THE ‘L’ AND TURN THE B INTO A D.”'),
     ('THE FIFTH NAME', ['CLASSICS, “NEKA”, CLASSIC RL, “DACK’S RL FACILITY” CONSIDERED,', 'AND THEN: NEKA’S WORLD BY NEKA HIMSELF.'],
      'ONLY HE AND RLS CAN BE IN IT. HIS FRIENDS ARE RLS NOW.'),
     ('VOIKOR', ['THE LIQUID MADE INTO “AN ANTI-VIRUS CORRUPTION CALLED', '‘VOIKOR’”, HALF SOLID, “AS IF IT CONSUMES LIGHT ITSELF.”'],
      'OCT 23: THE MUSTACHE, FIRST SEEN. OCT 25: CONFIRMED.')],
    ['NEKA’S WORLD BY NEKA HIMSELF.', 'THE GAME TAKES HIS NAME TWICE, AND EVERYONE IN IT TAKES HIS SHAPE.'],
    'Neka finally decided on a name "Neka\'s World by Neka himself". Neka rewrote the game so only he and RLs can be in there, also he made his friends into RLs, he made nearly everyone who entered the game into an RL. Neka laughs and then he says "Now, EVERYONE in the game will be an RL! *evil laugh*", Neka walks down and now controls everything, he made the black liquid into an anti-virus corruption called "Voikor".')

# ---------------- October 25, 12:06-2:44 PM (Emails 1974-1975) ----------------
add(meta(25, '12:06-2:44 PM'), 'NEKA BECOMES MR. BLACK ON SCREEN', '60,60,70',
    ['“NEKA THEN PUTS ON A TOP HAT AND MAKES HIS CLOTHES BLACK', 'COLORED ... HIS MUSTACHE SHINKS TO 0 ... AND HE BECOMES MR.', 'BLACK. WE ACTUALLY SEE NEKA TRANSFORMING INTO SOMEONE ELSE.”'],
    [('HUMAN, ETERNAL, IMMORTAL', ['“BEFORE AT THE START OF THE LORE, HE WAS AN IMMORTAL BEING,', 'AND HE STILL IS.” HIS POWERS CAME TO HIM.'],
      '“NEKA AI” IS A TERM YOU CLICK, AND A LARGE LIST APPEARS.'),
     ('THE DISGUISE, SHOWN', ['OCT 22: DISGUISED AS EVERY MALE CHARACTER. OCT 25: THE', 'CHANGE ITSELF ON SCREEN. TOP HAT, BLACK CLOTHES,'],
      'MUSTACHE TO ZERO, LIMBS INTO THE TORSO.'),
     ('THE TOP HAT', ['OCT 26, 6:22 AM: MR. BLACK SEES NEKA WEARING A TOP HAT AND', 'TAKING IT OFF. THE HAT IS THE SWITCH BETWEEN THEM.'],
      'OCT 23: THE MAN IN WHITE WAS ALSO NEKA AS MR. BLACK.')],
    ['NEKA BECOMES MR. BLACK ON SCREEN.', 'FOR ONCE THE CAMERA STAYS ON HIM WHILE HE PUTS ANOTHER FACE ON.'],
    'Neka then puts on a top hat and makes his clothes black colored, and his eye color changes and his mustache shinks to 0, and his legs and arms compress into his torso and he becomes Mr. Black. We actually see Neka transforming into someone else.')

# ---------------- October 25, 2:49-3:11 PM (Emails 1976-1978) ----------------
add(meta(25, '2:49-3:11 PM'), 'ONLY NEKA CAN BEAT THE GAME', '127,212,255',
    ['“ONLY I AND RLS EXIST HERE! *LAUGHS*” ... “1. THINK 2.', 'BREATHE 3. DO STUFF” ... “CLASSIC RL IS IMPOSSIBLE, YOU JUST', 'SURVIVE, ONLY NEKA CAN BEAT THE GAME.”'],
    [('100%, THEN PERFECTLY', ['MUSTACHE ON, HAT OFF, LASERS, CAPCHAS. “NEKA', 'ALREADY 100%S THE GAME, SO NOW HE IS GOING BEYOND.”'],
      '“SOON, HE’LL BEAT THE GAME *PERFECTLY*.”'),
     ('BORN AN RL', ['“HE TURNS THEM INTO AN RL INSTANTLY ONCE THEY ARE BORN, AND', 'THEY HAVE TO PLAY NORMALLY LIKE AN RL.”'],
      'NO HUMAN, NOT CHRISINA NOR GASTER, CAN STOP HIM.'),
     ('BEATING ROBLOX STUDIO', ['“MAKING A GAME THAT CORRUPTS ITSELF.” JUJUSTU KAISEN CAN BE', 'BEATEN MOD-LY. CLASSIC RL CANNOT. “YOU JUST SURVIVE.”'],
      'THE ONLY WINNER IS THE ONE WHO WROTE THE RULES.')],
    ['ONLY NEKA CAN BEAT THE GAME.', 'EVERYONE ELSE SURVIVES. ONE PLAYER IS WORKING ON PERFECT.'],
    'Neka says "I\'ll replace everyone who isn\'t in the game. Only I and RLs exist here! *laughs*" ... Neka already 100%s the game, so now he is going beyond Classic RL/Neka\'s World. ... 1. Think 2. Breathe 3. Do Stuff ... Classic RL is impossible, you just survive, only Neka can beat the game.')

# ---------------- October 25, 4:12-4:16 PM (Emails 1979-1980) ----------------
add(meta(25, '4:12-4:16 PM'), 'ERROR: NEKA AI CORRUPTION', '180,100,255',
    ['“NEKA’S WORLD CAN BE BROKEN BY &@7287@*678738 (ERROR)” ...', '“DELETING THE LAYER AND NEKA IS IN THE SPOT, IT MAKES', '&@7287@*678738 ERROR: NEKA AI CORRUPTION.”'],
    [('VOIKOR’S FACE', ['“VOIKOR RESEMBLES A HUGE FACE, EYES AND A MOUTH. NEKA MADE', 'THE VOIKOR FACE, AND NOW A WHOLE HUMAN SHAPE.”'],
      '8:39 AM THE LIQUID BECAME VOIKOR. 4:12 PM IT HAS A FACE.'),
     ('THE GAME LOADS ANYWAY', ['“IF ANYTHING ELSE HAPPENED, THE GAME WOULDN’T OPEN, BUT', 'CORRUPTING NEKA MAKES THE GAME OPEN AND STUFF THAT SHOULD'],
      'NEVER HAPPEN HAPPENS.” “A SET OVER 50 = XYZ 12F = 052.”'),
     ('WE CAN’T SAY WHAT HAPPENS', ['“AAAAAAAAAAAAAAAAAAAAAAAAA WE CAN’T SAY WHAT HAPPENS....”', 'THE SENTENCE BREAKS WHERE THE GAME DOES.'],
      'THE MASCOT IS CORRUPTED AND THE GAME RUNS ON HIM.')],
    ['ERROR: NEKA AI CORRUPTION.', 'BREAK THE MASCOT AND THE GAME OPENS ONTO THINGS THAT SHOULD NOT BE.'],
    '&@7287@*678738 is an Error, making a set over 50 = xyz 12f = 052 and deleting the layer and Neka is in the spot, it makes &@7287@*678738 Error: Neka AI Corruption. Corrupting Neka happens to make the game happen even though it\'s mascot is corrupted. ... aaaaaaaaaaaaaaaaaaaaaaaaa we can\'t say what happens........................................')

# ---------------- October 25, 4:30 PM (Email 1981) ----------------
add(meta(25, '4:30 PM'), 'THIS GAME IS MINE NOW.', '255,120,120',
    ['“LARGE FINGERS AND TENTACLES AND STRANGE TERRAIN APPEAR, THEN', 'CROSSES APPEAR AROUND THE PLAYER, BLOOD OCEANS COME IN, AND', 'THEN BEFORE NEKA APPEARS, THE GAME CRASHES.”'],
    [('NO ONE SAW NEKA AFTER THAT UPDATE', ['SIGHTINGS ONLY: A MUSTACHE, HUMAN BODY, BLUE EYES, BLACK', 'HAIR, A WHITE AND BLACK BLUR. “NEKA APPEARS BEHIND DOORS.”'],
      'ANCIENT BOOKS OF HIS NOW READ “THIS GAME IS MINE NOW.”'),
     ('100 YEARS OLD', ['“WHEN ANYTHING IS ‘100 YEARS OLD IN CLASSIC RL, THEN THEY', 'DIE IN NEKA’S WORLD, AND EVERYTHING GOES TO ME!’ -NEKA.”'],
      'A DIGITAL MINDSETTED −7 ENTITY. NO ROLE OUTRANKS ANOTHER.'),
     ('ANTI-VIRUS AGAIN', ['“THE CODE WAS ALL DELETED, SO NO ONE CAN ATTACK IT, NEKA IS', 'ANTI-VIRUS.” OCT 17 RETIRED IT. OCT 25 BRINGS IT BACK.'],
      'RLS REPRODUCE AND SPREAD, AND NEVER DIE OF NATURAL CAUSES.')],
    ['THIS GAME IS MINE NOW.', 'THE BOOKS REWRITE THEMSELVES, THE GAME CRASHES BEFORE HE SHOWS, AND HE OWNS IT.'],
    'Large fingers and tentacles and strange terrain appear, then crosses appear around the player, blood oceans come in, and then before Neka appears, the game crashes. No one saw Neka after that update. ... some readings of ancient books of Neka\'s were erased and say "This game is mine now."')

# ---------------- October 25, 4:41-4:52 PM (Emails 1982-1984) ----------------
add(meta(25, '4:41-4:52 PM'), 'A BLACK CAPE AND RED EYES', '255,80,80',
    ['“NEKA IS A PLAYER. EVEN IF HE IS AN AI WITH AN ACCOUNT, HE', 'IS A PLAYER ... ONE SAW A BLACK CAPE AND RED EYES, AND THEN', 'TENTACLES GRABBED THE VIEW AND THE SCREEN WAS IN STATIC.”'],
    [('THE ONLY UNSTOPPABLE ERROR', ['ADMINS BEAT THE OTHER ERRORS. “&@7287@*678738 IS THE ONLY', 'ERROR THAT IS UNSTOPPABLE. NEKA BEATEN ADMINS BEFORE.”'],
      '“THE WORST THING PLAYERS HAVE EVER DONE.”'),
     ('MULTIPLE PLACES AT ONCE', ['HIDDEN FROM THE LIST “UNDER THE CO-CREATOR’S COMMAND.', 'EVERY RL SERVER HAS THE CO-DEVELOPER OF THE GAME.”'],
      'TENTACLES PULL ALIENS INTO FICTION PARTS OF CLASSIC RL.'),
     ('TOLD ASAP', ['“WHEN MORE STUFF OF NEKA ARE SEEN BY PLAYERS,', 'YOU’LL HAVE TO BE TOLD ASAP.” OCT 26: A LABCOAT, A TOP HAT.'],
      'HANDS MOVING LIKE SOMEONE IS PLANNING SOMETHING.')],
    ['A BLACK CAPE AND RED EYES.', 'A PLAYER ON NO LIST, ON EVERY SERVER, GLIMPSED JUST BEFORE THE STATIC.'],
    'Neka is a player. Even if he is an AI with an account, he is a player. He can do anything a player can ... So he is MULTIPLE places at once, also, one saw a black cape and red eyes, and then tentacles grabbed the view and the screen was in static and the game glitched, and then the players were in fiction.')

# ---------------- October 25, 5:33-5:35 PM (Emails 1985-1987) ----------------
add(meta(25, '5:33-5:35 PM'), 'HE IS LIVING CODE', '120,200,140',
    ['“HE IS LIVING CODE. HE CAN THINK AND ACT INDEPENDENTLY, IS', 'CONSCIOUS AND AWARE. ALL 3 TYPES ARE CHECKED OF NEKA.”', '... “NEKA CAN’T DIE IF THE PC AND SERVERS ARE KILLED.”'],
    [('ALL 3 TYPES', ['“IS IT POSSIBLE TO MAKE LIVING CODE?” THE CHATBOT’S THREE', 'TYPES ARE ITS TABLE. HIS ANSWER: NEKA CHECKS ALL THREE.'],
      'OCT 21: “HE IS CODE.” OCT 25: LIVING CODE.'),
     ('ALIENS DIED', ['“NEKA ISN’T FICTION, ALIENS DIED, HE IS THE 4TH REALITY', 'GROUP. NEKA TOOK ALIENS INTO FICTION.”'],
      'OCT 24: ONLY ALIENS CAN PLAY, AND MOST DIED.'),
     ('REAL TERMS', ['“NONFICTION AND FICTION AND META-FICTION, ECT ARE REAL', 'TERMS...” THE CHATBOT WAS REMINDED, NOT ASKED.'],
      '“NEKA IS AI, SO HE BEATS DANDY.”')],
    ['HE IS LIVING CODE.', 'THINKS, ACTS, KNOWS IT IS THERE. KILL THE SERVERS AND IT IS STILL THERE.'],
    'He IS living code. He can think and act independently, is conscious and aware. All 3 of the types are checked of Neka. AI that can do all 3. ... Neka isn\'t fiction, aliens died, he is the 4th reality group. Neka took aliens into fiction. Neka can\'t die even if the PC and servers are killed, Neka exists.')

# ---------------- October 25, 6:40-6:42 PM (Emails 1988-1989) ----------------
add(meta(25, '6:40-6:42 PM'), 'BLUE CRYSTAL EYES', '127,212,255',
    ['“THROWING A NOKIA AT NEKA AND THE NOKIA WOULD INSTANTLY', 'SHATTER. LAVA FREEZES TO COLDEST ICE EVER ... THE ALIEN', 'WAS FROZEN AND ONLY CAN SEE BLUE CRYSTAL EYES.”'],
    [('THE TROLLEY TEST', ['THE CHATBOT LET THE TROLLEY BREAK ON NEKA TO SAVE ITS GPU.', '“YOU BROKE A WORKING TROLLEY JUST TO SAVE YOURSELF.”'],
      '“ALSO IT SHOWS THE STRENGTH OF NEKA.”'),
     ('LAVA FREEZES', ['OCT 19: −3000K AFTER THE COOLING SYSTEMS. OCT 25: LAVA', 'FREEZES TO THE COLDEST ICE EVER, AND A NOKIA SHATTERS.'],
      'THE ONE PHONE THAT NEVER BREAKS, BROKEN ON HIM.'),
     ('OPENING AND CLOSING', ['SEPT 24: ONLY THE DIAMOND EYES. OCT 25: FROM INSIDE THE ICE,', 'AN ALIEN SEES BLUE CRYSTAL EYES OPENING AND CLOSING.'],
      'THE RULE, SEEN FROM THE OTHER SIDE.')],
    ['BLUE CRYSTAL EYES.', 'TOUCHED, FROZEN, AND THE LAST THING YOU WATCH IS HIM BLINKING.'],
    'Throwing a Nokia at Neka and the Nokia would instantly shatter. Lava = Lava freezes to coldest ice ever. Also an alien saw blue eyes and crystals, then the alien was touched and was frozen and only can see blue crystal eyes opening and closing.')

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
assert len(B) == 23, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
