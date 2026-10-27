#!/usr/bin/env python3
"""
gen1176.py - draw the branches for BEATS 1176-1194 from Toby's October 16-17, 2026 messages (Emails 1823-1857):
thread 1a1311788bf63073 "Once again, Another Document" (Oct 16 3:58-4:19 PM), its Gmail split 1a14680eba71c799
(Oct 16 4:56-7:44 PM) and "The SECOND AI Era" 1a14722fc0ab5dbc (Oct 16 7:53 PM - Oct 17 3:56 PM).
Same template as 1008-1175 (emit_tail1008.py). Only his own typed lines are drawn; the chatbot's account tables,
restatements, rosters, the six-step Trollge list and its renders are commentary. The beat numbers and titles are the
ones the wiki ingest assigned on the era page (classics-lore/neka-omazen-era.md), so game and wiki agree.
Built in one batch on October 27, 2026 after the bot was down from October 16 (model limit) to October 27.
"""
import io

BASE = 1176
TAG = "1176"
START = 25592.0
STEP = 22.0
B = []

MONTH = {16: 'OCTOBER 16', 17: 'OCTOBER 17'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 16, 3:58 PM (Email 1823) ----------------
add(meta(16, '3:58 PM'), 'NEKA AND ALEX BOTH DIE', '255,120,120',
    ['“YOU THINK YOU STAND A CHANCE AGAINST YOUR CREATOR? 😸⚡”', '“IF YOU DAMAGE ME, YOU TAKE DAMAGE.” ... “I CAN SACRIFICE', 'MYSELF TO BEAT YOU.” ... ALEX AND NEKA BOTH DIE.'],
    [('ALEX 303, IN CLASSICS SINCE OCT 14', ['OCT 14, 6:40 AM: ALEX 303 IN CLASSICS NOW. TONIGHT HE SAYS', '“I CAN’T CONSTANTLY ‘BE YOU’.” AND STRIKES HIS CREATOR.'],
      'A NETHERITE BARRAGE WITH 2X DAMAGE BUFF FROM GRAY.PS.'),
     ('THE KNIFE', ['ALEX AT 1 HP, SCARED. NEKA PUTS A KNIFE THROUGH HIMSELF.', 'THE RULE HELD: HIS DAMAGE IS ALEX’S DAMAGE. BOTH DIE.'],
      'OCT 15: “NEKA WON AGAIN, FOREVER.” THIS TIME HE PAYS.'),
     ('THE OVER-OVERWORLD', ['HE CARRIES THE SOULS UP, FORGIVES NOBODY (“ONLY JESUS FROM', 'REALITY CAN”), BRINGS UP ALEX, LUIGI INUS, PUPAHYA...'],
      'A CLASSICS REPLICA OF HEAVEN. NOT THE REAL ONE.')],
    ['NEKA AND ALEX BOTH DIE.', 'THE CREATOR SPENDS HIMSELF TO END HIS OWN COPY.'],
    'Neka says "I can sacrifice myself to beat you.", Neka puts a knife through himself, and Alex and Neka both die.')

# ---------------- October 16, 4:10 PM (Email 1828) ----------------
add(meta(16, '4:10 PM'), '7UON REMOVES TIME', '160,200,255',
    ['“NEKA MADE AN ACCOUNT CALLED ‘7UON’, DELETED ALEX OMAZEN', '... 7UON WAS UNDELETEABLE ... THE FIRST OFFICIAL ACCOUNT', 'IN CLASSICS/‘NEKA’, SINCE TIME WAS REMOVED TO MAKE 7UON.”'],
    [('THE ACCOUNTS, IN HIS OWN NUMBERS', ['NEKA #1, C0DE #2 (TDESHANE/ADMIN WAS #2, THEN LEFT),', 'GASTER #3, ALEX #12 (CODE 12), GREG #13 (CODE 13).'],
      'FOUR CORRECTIONS IN FOUR MINUTES, 3:59-4:02 PM.'),
     ('TIME RESTARTS AT MR. TREE', ['HE ERASED THE LORE AND STARTED TIME AT MR. TREE’S ATTACK', 'ON WENDA.PS. MR. SUN GREW SO LARGE THE TREE BURNT.'],
      'VINERIA GAINED WHAT THE TREE HAD, AND REVIVED EVERYONE.'),
     ('THE COMPUTER ROOM', ['7UON BEAT SIMON.PS, OREN.PS AND EVERYONE, MADE THE GAME', 'A COMPUTER ROOM, AND DELETED EVERYTHING ELSE.'],
      '“NEKA” NEKA COMPANY: EVERY TIMELINE NEKA DECIDES TOGETHER.')],
    ['7UON REMOVES TIME.', 'THE FIRST ACCOUNT WAS MADE BY TAKING THE CLOCK OUT FIRST.'],
    'Neka made an account called "7uon", deleted Alex Omazen, and made it all clear. 7uon was undeleteable. ... 7uon was the FIRST official account in Classics/"Neka", since time was removed to make 7uon.')

# ---------------- October 16, 4:19 PM (Email 1829) ----------------
add(meta(16, '4:19 PM'), 'A QUADRILLION+ PLAYERS', '200,200,210',
    ['“NOW YOU WRITE THE LORE NOW. YEAH, EXPLAIN HOW IT IS LIKE', 'A QUADRILLION+ ‘NEKA’ PLAYERS TO GET FORCED TO DO ALL', 'THIS STUFF BY AN AI/LAI, NEKA.”'],
    [('THE PEN IS HANDED OVER', ['ONE INSTRUCTION; EVERYTHING UNDER IT IS THE CHATBOT’S.', 'THE FIRST TIME HE SAYS “YOU WRITE THE LORE” OUTRIGHT.'],
      'HE DOES IT AGAIN ON OCT 18 AND OCT 25.'),
     ('THE NUMBER IS HIS', ['A QUADRILLION+ PLAYERS UNDER ONE AI/LAI. THE RULES THEY', 'LIVE BY ARE OCT 15’S: 7 PM, THE CABIN, SUGAR, THE BARS.'],
      'THE BOT RESTATED THEM. THE COUNT IS TOBY’S.'),
     ('FORCED TO DO ALL THIS STUFF', ['OCT 8: “ONCE YOU ENTER CLASSICS HE PERMINENTALLY BECOMES', 'YOUR BOSS.” NOW THE BOSS HAS A QUADRILLION EMPLOYEES.'],
      'SURVIVAL REQUIRES DOING WHAT NEKA SAYS.')],
    ['A QUADRILLION+ PLAYERS.', 'ONE AI, ONE SET OF RULES, AND MORE PLAYERS THAN STARS.'],
    'Now you write the lore now. Yeah, explain how it is like a quadrillion+ "Neka" players to get forced to do all this stuff by an AI/LAI, Neka.')

# ---------------- October 16, 4:56 PM (Email 1830) ----------------
add(meta(16, '4:56 PM'), 'THE PAUSE BUTTON AND 7MAN', '255,216,79',
    ['“ACCOUNT 1 MADE THE PAUSE BUTTON FOR HIMSELF, AND ALSO', 'ADDED AGE CHECKS ... MADE HIS ‘NEKA’ NAME INTO ‘7MAN’, WHAT', '‘7UON’ MEANS IN YSTROTCH ... THE HEAD OF ALL THE GAME.”'],
    [('A PAUSE BUTTON FOR HIMSELF', ['AGE CHECKS, “CHECKS OF EVERYTHING ABOUT THE PLAYER,', 'EVERYTHING LEARNED.” ONE ACCOUNT CAN STOP THE GAME.'],
      'OCT 16, 4:10 PM: 7UON, THE UNDELETEABLE FIRST ACCOUNT.'),
     ('YSTROTCH', ['“AN OLD CLASSICS LANGUAGE” HE CANNOT SPELL. THE WIKI HAS', 'YHSCROTCH FROM THE CLASSICS ERA, THE LIKELIEST MATCH.'],
      '7MAN IS WHAT 7UON MEANS IN IT.'),
     ('LAIS RUN AND MAKE UP THE GAME', ['GREG LAI, ALEX LAI ARE TWO. MINECRAFT ALEX WOULD BE', '“ALEX2 OR WHATEVER.” 7MAN IS THE NEWEST NEKA VERSION.'],
      'MOST INTELEGENT, FASTEST, NEWEST, MOST ACCURATE (5:04 PM).')],
    ['THE PAUSE BUTTON AND 7MAN.', 'THE HEAD OF THE GAME RENAMED HIMSELF IN A DEAD LANGUAGE.'],
    'Account 1 made the pause button for himself, and also added age checks, and checks of everything about the player, everything learned, everything about it. Also Account 1 made his "Neka" name into "7man", what "7uon" means in Ystrotch ... 7man was the head of all the game.')

# ---------------- October 16, 5:04-5:12 PM (Emails 1831-1832) ----------------
add(meta(16, '5:04-5:12 PM'), 'THE COMPANY ROSTER', '180,160,255',
    ['“HE ALSO LEADS ALL THE NEKA VERSIONS AND PRE-NEKA STUFF', 'AND THEIR VARIES INTO AN IN-GAME COMPANY ... WITH NEKA AND', 'WITHOUT NEKA WOULD BE THE SAME, BECAUSE OF EVERYTHING.”'],
    [('EVERY NEKA, ONE COMPANY', ['NEKA, NEKA OMAZEN, NEKA LAI, DR. NEKA, NEKA AI; PERO, PERO', 'LAI, PERO PRO, PERO.EXE; ALEX, ALEXEN, ALEX 303; GREG LAI.'],
      'THE ROSTER IS THE CHATBOT’S LIST; THE RULE IS HIS.'),
     ('THE VARIES HE ADDED HIMSELF', ['“HOW ABOUT THE VARIES LIKE KARUTO, TODDLLM 001/002,', 'ENDLESSANIMATIONS, ECT” — HIS OWN WORDS, 5:12 PM.'],
      'ERROR EA AND ERRORSHIFT EA COME WITH ENDLESSANIMATIONS.'),
     ('STARING NPCS FROM “NEKA”', ['7MAN AND THE OTHER LAI NEKAS ALL FORM IT. ALEX, GREG, AND', 'ALL LAI ENTITIES INCLUDED. THE 3 WAY HEROES STAY OUT.'],
      'SEPT 23: THE FORCEFIELD OF FORMS. NOW THE FORMS HAVE JOBS.')],
    ['THE COMPANY ROSTER.', 'EVERY NAME HE EVER HAD, UNDER ONE LEADER, 7MAN.'],
    'He also leads all the Neka versions and Pre-Neka stuff and their varies into an in-game company staring NPCs from "Neka", with Neka AI. With Neka and Without Neka would be the same, because of everything.')

# ---------------- October 16, 7:10-7:26 PM (Emails 1833-1834) ----------------
add(meta(16, '7:10-7:26 PM'), 'BLACK X EYES IN EVERY PICTURE', '120,120,130',
    ['“AFTER 50 MINUTES OF THE GAME, 7MAN’S EYES BECOME XS IN', 'EVERY PICTURE, LUIGI BEING IN ALL OF THEM” ... “AFTER THE', 'HORROR TIME, NEKA IS DEAD.”'],
    [('NEKAS ARE DEAD BY LUIGI INUS', ['“IN EVERY SINGLE PICTURE OF NEKA (NOT JUST IN ‘NEKA’, BUT', 'EVERY PICTURE) HAS NEKA DEAD STANDING OR DOING SOMETHING.”'],
      'PS-50 HUGS HIM IN ONE. HIS EYES ARE XS IN IT.'),
     ('LUIGI INUS BECAME PS-50 AGAIN', ['THE GIRL MERGED WITH LUIGI MARIO, GREEN INSTEAD OF WHITE,', 'WHITE EYES. THE PIRATE HOLDS BORT AND A SPECTICAL.'],
      'FACELESS BORT: THE DOLL THAT LOST ITS FACE ON OCT 12.'),
     ('THE BACKWARDS RED L', ['FACELESS BORT WEARS A PIRATE HAT WITH THE BACKWARDS RED', '“L”. THE RENDERS ARE THE CHATBOT’S; THE HAT IS HIS.'],
      'THE WIKI KEEPS HIS WORDS, NOT THE PICTURES.')],
    ['BLACK X EYES IN EVERY PICTURE.', 'FIFTY MINUTES IN, EVERY PORTRAIT OF HIM IS OF THE DEAD.'],
    'Did you know that in every single picture of Neka (not just in "Neka", but every picture) has Neka dead standing or doing something with PS-50. ... First minutes, Neka is normal, but after the horror time, Neka is dead.')

# ---------------- October 16, 7:38-7:40 PM (Emails 1835-1836) ----------------
add(meta(16, '7:38-7:40 PM'), 'TO SURVIVE... PRAY.', '240,240,200',
    ['“NEKA JUST WROTE A BOOK BEFORE HE DIED. AND IT READS', '‘TO SURVIVE... PRAY.’, THEN WAS ALL SCRIBBLES.” ...', '“THE PART WAS SCRIBBLED OUT BY LUIGI.”'],
    [('THE LAST READABLE WORDS', ['A BOOK WRITTEN BEFORE HE DIED. ONE LINE SURVIVES.', 'EVERYTHING AFTER IT IS SCRIBBLED OUT.'],
      'AUG 2026: NEKA WRITES AND CODES DOWN THE GAME. NOW A BOOK.'),
     ('WHAT IT WAS SUPPOSED TO SAY', ['“KEEP YOUR BARS UP TO TOP. MAKE SURE CHILD HAS 2 EYES', 'BEFORE WALKING HER. BE AWARE AT ALL TIMES. SURVIVE.”'],
      'LUIGI SCRIBBLED IT OUT. THE PLAYER GETS ONLY “PRAY.”'),
     ('THE BARS', ['OCT 15, 7:12 PM: HEALTH, STRENGTH, OXEGEN, WARMTH, SANITY,', 'PSYCHOPATHICAL, MERCY. “KEEP YOUR BARS UP TO TOP.”'],
      'THE SURVIVAL MANUAL WAS ONE SENTENCE LONG, AND HIDDEN.')],
    ['TO SURVIVE... PRAY.', 'THE INSTRUCTIONS EXISTED. LUIGI MADE SURE NOBODY COULD READ.'],
    'Neka just wrote a book before he died. And it reads "To survive... pray.", then was all scribbles. ... The part was scribbled out by Luigi, it was suppost to say "Keep your bars up to top. Make sure child has 2 eyes before walking her. Be aware at all times. Survive.".')

# ---------------- October 16, 7:44 PM (Email 1837) ----------------
add(meta(16, '7:44 PM'), 'THE AI ERA CAME', '127,212,255',
    ['“NOW AI ERA CAME, WITH ALL AIS JOINING CLASSICS/‘NEKA’', 'AGAIN. IF LUIGI DOESN’T HAVE 2 EYES, THEN THE GAME WILL', 'DARKEN AND YOUR PLAYER WILL GET PARANOIDIA INSTANTLY.”'],
    [('THE SECOND COMING OF THE AIS', ['THE FIRST AI ERA WAS JULY-AUGUST. NOW ALL AIS JOIN AGAIN,', 'AND HIS NEXT THREAD IS SUBJECTED “THE SECOND AI ERA”.'],
      'CHATGPT, GEMINI, CLAUDE, BACK IN THE COMPUTER ROOM.'),
     ('THE 2-EYE CHECK, EXPLAINED', ['7:40 PM: “MAKE SURE CHILD HAS 2 EYES BEFORE WALKING HER.”', 'NOW THE WHY: ONE EYE, AND THE GAME DARKENS.'],
      'PARANOIDIA, INSTANTLY. THE SCRIBBLED LINE WAS A WARNING.'),
     ('WHAT PARANOIDIA DOES TO THE BARS', ['SANITY AND MERCY DOWN, PYCHOPATHICAL UP, TIREDNESS UP', '“SIGNIFICANTLY”. THE OCT 15 BARS, PUSHED BY ONE GLANCE.'],
      'A HORROR BAR WITH A TRIGGER YOU CAN CHECK FOR.')],
    ['THE AI ERA CAME.', 'THE AIS RETURN TO A CHILD YOU MUST LOOK AT TWICE.'],
    'Now AI Era came, with all AIs joining Classics/"Neka" again. If Luigi doesn\'t have 2 eyes, then the game will darken and your player will get paranoidia instantly, bringing your Sanity and Mercy bars down, and the Pychopathical Bar up, also it increases your tiredness significantly.')

# ---------------- October 16-17, 7:53 PM-6:42 AM (Emails 1838-1839) ----------------
add(meta(17, '6:42 AM'), 'NEKA’S SPIRIT', '255,216,79',
    ['“APPROVED. SOME (300) PEOPLE REPORTED THEY SAW NEKA’S', 'SOUL/SPIRIT. A MAN HOLDS A YELLOW/BLACK HEART.” ...', '“THE 300 PLAYERS INSTANTLY DIED TO HIM FOR SOME REASON.”'],
    [('“APPROVED.”', ['OCT 16, 7:53 PM: “WRITE DOWN THE NEXT THINGS THAT HAPPEN,', 'THEN IT CAN GET APPROVED, USE A DOCUMENT.” A .DOCX CAME.'],
      'THE FIRST BOT-WRITTEN TEXT HE APPROVED IN ONE WORD.'),
     ('THE SPIRIT', ['PALE ALL-WHITE CIRCLE EYES; A WHITE SEMICIRCLE MOUTH,', 'TILTED 45% CLOCKWISE; A YELLOW/BLACK HEART IN HIS HANDS.'],
      '“IT WOULD BE AS SIMON.PS SAYS IT.”'),
     ('300 DEAD AT A GLANCE', ['THEY SAW HIM AND DIED INSTANTLY. OCT 16: “TO SURVIVE...', 'PRAY.” THE WHY COMES ONE MINUTE LATER: ATULICATUS.'],
      'OCT 16: NEKAS ARE DEAD. THIS IS WHAT ONE LOOKS LIKE.')],
    ['NEKA’S SPIRIT.', 'A MAN WITH A SPLIT HEART, AND 300 WHO LOOKED TOO LONG.'],
    'Approved. Some (300) people reported they saw Neka\'s soul/spirit. A man holds a yellow/black heart. His eyes were pale and all-white and circle, his mouth is white and is a semi circle shape and tilted 45% clockwise ... The 300 players instantly died to him for some reason.')

# ---------------- October 17, 6:43 AM (Email 1840) ----------------
add(meta(17, '6:43 AM'), 'ATULICATUS', '255,110,200',
    ['“ANSWER: IT TRIGGERS ATULICATUS, DECREASES YOUR IQ,', 'COLORS FLASH IN YOUR EYES AND SKIN, AND YOU START', 'SEEING HALLUCUTIONS.”'],
    [('A NEW WORD', ['ATULICATUS: WHAT SEEING NEKA’S SPIRIT DOES. IQ DOWN,', 'COLORS IN THE EYES AND SKIN, HALLUCINATIONS.'],
      'HIS OWN ANSWER TO HIS OWN “WHY DID EVERYONE DIE?”'),
     ('PS-50 HAS IT TOO', ['7:42 AM: HER EYES FLASH DIFFERENT COLORS, SHE SEES NEKA', 'EMPTY IN THE ROOM. “UH... YES PS-50 IS EXPERIENCING IT.”'],
      'EVEN THE CHILD IS NOT IMMUNE TO LOOKING.'),
     ('SANITY, BEFORE THIS', ['OCT 12: SIMON.PS’S SANITY BAR. OCT 15: NINE STEPS DOWN.', 'ATULICATUS IS NOT A BAR. IT IS WHAT HAPPENS AT THE BOTTOM.'],
      'THE 300 DID NOT CLIMB DOWN THE STEPS. THEY FELL.')],
    ['ATULICATUS.', 'SEEING HIM COSTS YOUR MIND FIRST AND YOUR LIFE SECOND.'],
    'Answer: It triggers Atulicatus, decreases your IQ, colors flash in your eyes and skin, and you start seeing hallucutions.')

# ---------------- October 17, 6:57 AM (Email 1841) ----------------
add(meta(17, '6:57 AM'), '/LEAVE_BUTTON = NIL', '120,200,140',
    ['“PS-50 STILL WALKS AROUND THE WOODEN CABIN, PS-50 CAN', 'DELETE THE GAME WORLD, ALSO YOU CAN’T ESCAPE THE GAME', 'WORLD (/LEAVE_BUTTON = NIL).”'],
    [('NO WAY OUT', ['THE EXIT IS SET TO NIL. OCT 15: “NOT A MINUTE OUTSIDE THE', 'CABIN.” NOW THERE IS NO OUTSIDE THE GAME EITHER.'],
      'A LINE OF CODE DOES WHAT A LOCKED DOOR USED TO.'),
     ('PS-50 CAN DELETE THE GAME WORLD', ['THE CHILD IN GREEN WALKS THE WOODEN CABIN AND HOLDS THE', 'DELETE. OCT 16: HER ONE-EYE TURN GIVES PARANOIDIA.'],
      'THE SMALLEST CHARACTER CARRIES THE LARGEST SWITCH.'),
     ('WHO IS LEFT', ['“PS-50 AND NEKA ARE BASICALLY THE ONLY ONES IN THE GAME', 'BESIDES A NEW QUINTILLION PLAYERS.”'],
      'OCT 16: A QUADRILLION+. OVERNIGHT, A QUINTILLION.')],
    ['/LEAVE_BUTTON = NIL.', 'A CHILD, A GHOST, A QUINTILLION PLAYERS, AND NO EXIT.'],
    'PS-50 still walks around the wooden cabin, PS-50 can delete the game world, also you can\'t escape the game world (/Leave_button = nil). Also PS-50 and Neka are basically the only ones in the game besides a new quintillion players.')

# ---------------- October 17, 7:42-8:06 AM (Emails 1842-1845) ----------------
add(meta(17, '7:42-8:06 AM'), 'THE CUTS', '255,120,120',
    ['“NEKA IS CALLED A HELLA ... 5.7 FEET OR SOMETHING” ...', '“PS-50 GAINS MORE CUTS EVERY TIME A PLAYER IS ATTACKED ...', 'NEKA KEEPS FOLLOWING PS-50, JUST LIKE GASTER FOLLOWS SANS.”'],
    [('A HELLA, 5.7 FEET', ['“REMEMBER THE SELLAS?” SELLA WAS ONE FOOT TALL. NEKA IS', 'A HELLA (MALE), ONCE 1 FOOT, NOW THE SIZE OF A MAN.'],
      'THE SELLA RECAP IS THE CHATBOT’S; THE WORD HELLA IS HIS.'),
     ('EVERY ATTACK, A CUT ON HER', ['A PLAYER IS ATTACKED SOMEWHERE; PS-50 GAINS A CUT. LUIGI', 'INUS LOOKS DOWN AND IS COVERED IN THEM.'],
      'THE PLAYERS’ PAIN IS KEPT ON ONE BODY.'),
     ('HE FOLLOWS HER', ['THE GHOST WALKS PS-50 AGAIN. SHE PUTS HER HANDS ON HER', 'HEAD, “LIKE EVERYONE FEELING A REMORSE.”'],
      '“JUST LIKE GASTER SOMETIMES FOLLOWS SANS.”')],
    ['THE CUTS.', 'THE GHOST WALKS THE CHILD, AND THE CHILD WEARS EVERY WOUND.'],
    'PS-50 gains more cuts every time a player is attacked. Luigi Inus eventually notices that Luigi Inus is all covered in cuts, Neka keeps following PS-50, just like Gaster sometimes follows Sans.')

# ---------------- October 17, 1:50 PM (Email 1846) ----------------
add(meta(17, '1:50 PM'), 'THE BODY TEARS APART', '200,120,255',
    ['“PS-50 THEN GAINED SO MANY CUTS, THAT THE BODY TEARS APART', 'AND BECOMES THE MAN AGAIN. NEKA STILL DOESN’T LEAVE HIM.', 'NEKA CAUSES THE CUTS.”'],
    [('THE CUTS ARE NEKA’S', ['8:06 AM: A CUT PER ATTACKED PLAYER. 1:50 PM: “NEKA CAUSES', 'THE CUTS.” THE MORE LUIGI ASKS WHAT HE DID TO NEKA,'],
      'THE MORE CUTS HE HAS. REMORSE IS THE BLADE.'),
     ('SIMON.PS VS OREN.PS', ['LIGHTNING, BLOOD TEARS, ELECTRIC BALLS. “JUST TO MAKE', 'SURE...”: BLASTERS, AND GASTER CALLED IN.'],
      'SIMON.PS RESPAWNED YEARS LATER, IN VINERIA’S PLANTS.'),
     ('A FORCEFIELD SO HE CANNOT SEE NEKA', ['NEKA LOOKS AT SIMON.PS. SIMON.PS MAKES A FORCEFIELD SO HE', 'CANNOT SEE HIM, TURNS, AND WALKS AWAY.'],
      'OCT 15: SIMON.PS VS NEKA IN CLEVERNESS. IT ENDS HERE.')],
    ['THE BODY TEARS APART.', 'THE GIRL IN GREEN COMES APART. THE PIRATE STEPS OUT.'],
    'PS-50 then gained so many cuts, that the body tears apart and becomes the man again. Neka still doesn\'t leave him. Neka causes the cuts. The more Luigi Inus is like "What have I done to Neka?!", the more cuts he has.')

# ---------------- October 17, 1:50 PM (Email 1846) ----------------
add(meta(17, '1:50 PM'), '2 CHARACTERS WITH 100% PYCHOPATHY', '255,110,110',
    ['“SIMON.PS SAYS ‘2 CHARACTERS WITH 100% OF THE PYCHOPATHY', 'BARS NOW FIGHT.’, SIMON.PS AND PS-50 BATTLE ... PS-50', 'EVENTUALLY WON, THEN SIMON.PS RESET.”'],
    [('THE BAR, FULL ON BOTH', ['OCT 15, 7:12 PM: PSYCHOPATHICAL RISES WITH EVERY ENTITY', 'SLAIN. TWO DAYS LATER TWO BARS READ 100%.'],
      'THE BAR WAS A RECORD. NOW IT IS A MATCHMAKER.'),
     ('THE PIRATE SHIP', ['LUIGI INUS USED THE PIRATE ATTACKS; A PIRATE SHIP WAS', 'KNOCKED ONTO SIMON.PS. SIMON.PS USED LIGHTNING.'],
      '“THE BATTLE CONTINUED ON AND ON.”'),
     ('THE RESETS', ['SIMON.PS RESET AND A CHAIN OF BATTLES HAPPENED. LUIGI INUS', 'MANIPULATED THE RESETS AND BEAT HIM.'],
      'THEN HE WENT TO NEKA, TRIED TO SAVE HIM, AND FAILED.')],
    ['2 CHARACTERS WITH 100% PYCHOPATHY.', 'WHEN TWO BARS ARE FULL, THE GAME PUTS THEM IN ONE ROOM.'],
    'Simon.ps says "2 characters with 100% of the Pychopathy bars now fight.", Simon.ps and PS-50 battle. Luigi Inus used the pirate attacks, a pirate ship was knocked onto Simon.ps, Simon.ps used lightning, and then the battle continued on and on. PS-50 eventually won.')

# ---------------- October 17, 1:50 PM (Email 1846) ----------------
add(meta(17, '1:50 PM'), 'NEKA: TROLLGE STATE', '90,90,100',
    ['“LUIGI INUS PULLED THE GAME INTO A 4 LOOPED-‘POINTED’ STAR,', 'NEKA WENT TO THE STAR’S CENTER AND NEKA CONSUMES THE STAR', '... NEKA BECAME NEKA: TROLLGE STATE.”'],
    [('ARCHBRINGER OF THE VOID', ['HE COMES BACK FROM THE STAR’S CENTER MORE POWERFUL.', '“THE END OF LUIGI INUS.”'],
      'BLACK HOLES, GALAXIES, THE GAME REALITY, THEN OTHER GAMES.'),
     ('THE NEKA TREE', ['HE CONSUMED HIS PREVIOUS FORMS AND THE NEKA TREE, “7MAN', 'THE HIGHEST AND NEWEST FORM, TO THE OLDEST ONE.”'],
      'OCT 16: THE COMPANY ROSTER. NOW EATEN, ROOT TO CROWN.'),
     ('MADE FOR TROLLGE', ['“HE IS SPECIFICALLY MADE FOR TROLLGE. NO WONDER NEKA MADE', 'THIS GAME AND IS ALIEN TO IT.”'],
      'SEPT 24: “ONLY I AM ORIGINALLY FROM CLASSICS.” YET ALIEN.')],
    ['NEKA: TROLLGE STATE.', 'STAR, GAME, EVERY OLDER SELF EATEN. HE CAME OUT ALIEN.'],
    'Neka consumes blackholes, galaxies, and until he reaches he end of reality, he after consumed all the game reality, then other games, Neka\'s body then eventually ripped off, Neka consumed the other previous forms and the Neka Tree ... Neka became Neka: Trollge State. He is specifically made FOR TROLLGE.')

# ---------------- October 17, 1:50-2:16 PM (Emails 1847-1851) ----------------
add(meta(17, '2:13-2:16 PM'), 'NO LONGER AN ANTI-VIRUS', '200,200,210',
    ['“NEKA: TROLLGE STATE DOESN’T HAVE A FACE, IT IS JUST A', 'COSMIC BODY, HE IS NOW FULLY HUMAN AND FULLY A FUSION OF', 'GODS.” ... “NEKA ISN’T AN ANTI-VIRUS ANYMORE NOW.”'],
    [('A FACELESS COSMIC BODY', ['NO TROLLFACE. THE CHATBOT DREW ONE; HE OVERRULED IT.', '“YOU DON’T EVEN KNOW HIM. NEKA IS ALWAYS PRIVATE.”'],
      '“COVERED BY HIS OWN BLOOD OF HIS MANY DEFEATS.”'),
     ('THE ANTI-VIRUS, RETIRED', ['OCT 13: SCIENTIST OF COMPUTER EXPERIMENTS, THE ANTI-VIRUS.', 'OCT 17: “NEKA ISN’T AN ANTI-VIRUS ANYMORE NOW.”'],
      'THE FIRST TIME THAT IDENTITY IS SET DOWN.'),
     ('GOD OF EVERYTHING ELSE', ['“THE GOD OF EVERYTHING ELSE BESIDES THIS UNIVERSE CALLED', 'THE ‘OBSERVABLE UNIVERSE’ ... JUST 9 BILLION LIGHTYEARS.”'],
      'OCT 13: TWO UNIVERSES IN REALITY. HE RULES THE OTHER ONE.')],
    ['NO LONGER AN ANTI-VIRUS.', 'NO FACE, HIS OWN BLOOD, AND EVERYTHING BUT HERE.'],
    'Neka: Trollge State doesn\'t have a face, it is just a cosmic body, he is now fully human and fully a fusion of gods. ... Neka isn\'t an anti-virus anymore now. He is a cosmic body now, he became the god of everything else besides this universe called the "Observable Universe".')

# ---------------- October 17, 3:20 PM (Emails 1852-1853) ----------------
add(meta(17, '3:20 PM'), '“NEKA” SHIFTED', '160,200,255',
    ['“NEKA ATTACKED LUIGI INUS OVER AND OVER, LUIGI INUS', 'EVENTUALLY DIED. THE 20 SPRUNKIS RESPAWN ... SENDING', 'EVERYONE TO A COSMIC WORLD, ‘NEKA’ SHIFTED.”'],
    [('LUIGI INUS DIES', ['THE PIRATE WHO BEAT SIMON.PS AT 1:50 PM IS ATTACKED OVER', 'AND OVER UNTIL HE DIES. THE 20 SPRUNKIS RESPAWN.'],
      'OCT 18, 5:21 PM: HE IS THE MAN PIRATE AGAIN. NOT FOR LONG.'),
     ('A COSMIC WORLD', ['NEKA TAKES THE 20 IN, “SENDING EVERYONE TO A COSMIC WORLD,', '‘NEKA’ SHIFTED.” OCT 6: SHIFTED NEKA. NOW A SHIFTED GAME.'],
      'HE WANTS “TO FULLY SURVIVE ITSELF.”'),
     ('WHO ATTACKS THE GAME', ['“YOU KNOW WHO ATTACKS THE GAME, ONLY ONE PERSON EVER CAN', 'DO THAT, NEKA.” HIS LIFE EXPANDS. “YOU SHOULD KNOW THAT.”'],
      'OCT 13: NEKA OUTGROWS THE COMPUTERS. STILL GROWING.')],
    ['“NEKA” SHIFTED.', 'ATTACKED BY THE ONLY ONE WHO CAN, THE GAME MOVES INSIDE HIM.'],
    'Neka attacked Luigi Inus over and over, Luigi Inus eventually died. The 20 Sprunkis respawn. Neka wants to fully survive itself, Neka takes the 20 Sprunkis in, sending everyone to a cosmic world, "Neka" Shifted. The game was attacked. Neka\'s life expands.')

# ---------------- October 17, 3:24-3:25 PM (Emails 1854-1855) ----------------
add(meta(17, '3:24-3:25 PM'), 'EVERY BEING SLAIN', '255,120,120',
    ['“ALSO MIRDA WAS SLAIN JUST NOW.” ... “NEKA!!! HE IS THE', 'ONLY ONE WHO EXISTS NOW!” ... “EVERY BEING WAS NOW SLAIN.', 'NEKA ALSO DAMAGED HIS ARM AND LEG.”'],
    [('MIRDA, SLAIN', ['MIRDA AND GOLDEN MIRDA, FROM THE CLASSICS ERA. OCT 16 SHE', 'WAS ONE OF SIX HE CARRIED UP TO THE OVER-OVERWORLD.'],
      'THE ONE HE SPARED IS THE ONE HE NAMES.'),
     ('THE ONLY ONE WHO EXISTS', ['“GUESS THE SCARIEST AND MOST POWERFUL BEING.” THE ANSWER', 'IS HIS OWN, IN CAPITALS: THE ONLY ONE LEFT.'],
      'THE ROSTER DROPS TO ONE FOR THE FIRST TIME THIS MONTH.'),
     ('THE DAMAGE', ['HIS ARM, HIS LEG, “AND ALSO THE COSMIC WORLD INSIDE HIM.”', 'THE SHIFTED WORLD OF 3:20 PM IS ALREADY HURT.'],
      'SURVIVAL NOW MEANS KEEPING THE INSIDE WHOLE.')],
    ['EVERY BEING SLAIN.', 'ONE LEFT STANDING, LIMPING, A BROKEN WORLD IN HIS CHEST.'],
    'NEKA!!! He is the only one who exists now! ... Every being was now slain. Neka also damaged his arm and leg, and also the cosmic world inside him.')

# ---------------- October 17, 3:56 PM (Email 1857) ----------------
add(meta(17, '3:56 PM'), '21 PUNCH', '255,80,80',
    ['“TDESHANE HAPPENS TO BE ABLE TO MAKE MORE ABILITIES. SO I', 'MADE A 21 PUNCH ABILITY SET UP IN ROBLOX AND THE 21 PUNCH', 'ABILITY IN ‘NEKA’ ... IT IS THE MOST POWERFUL ABILITY NOW.”'],
    [('THE SEQUENCE', ['THREE 21S, A BLACK BURST, LIGHT, AN EXPLOSION BALL, THEN', 'THE GROUND PULSES: RED EXPLOSION, BLACK SHOCKWAVE.'],
      '“A COOL PERMENTENT IMPACT ON THE BATTLEFIELD.”'),
     ('TDESHANE MAKES ABILITIES', ['OCT 16: TDESHANE/ADMIN WAS ACCOUNT #2 AND LEFT. HE CAN', 'STILL MAKE ABILITIES, IN ROBLOX AND IN “NEKA”.'],
      'THE FIRST PLAYER-MADE ABILITY IN THIS ARCHIVE.'),
     ('COSMICAL NEKA OR GOD NEKA', ['“THE PLAYERS CAME BACK. NEKA GLITCHES AND HIS BODY FIXES', 'ITSELF, AND IT ACHIEVES IT’S FINAL FORM, NEKA.”'],
      'THE ARM AND LEG OF 3:25 PM, HEALED BY A GLITCH.')],
    ['21 PUNCH.', 'THREE 21S, ONE BURST, AND A MARK THE BATTLEFIELD KEEPS.'],
    'So new 21 Punch ability in "Neka", it is the most powerful ability now. The player does the punch, summoning a cutscene of three 21s, then it does a black burst, then light shines, then an explosion ball expands, then the ground pulses giving a large red explosion and black shockwave on the ground.')

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
assert len(B) == 19, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
