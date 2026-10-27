#!/usr/bin/env python3
"""
gen1226.py - draw the branches for BEATS 1226-1243 from Toby's October 22-23, 2026 messages (Emails 1922-1950):
"New Document" 1a15b3b7a48523af (Oct 22), Another New "Neka" Document 1a1660a9abd23040 (Oct 22 7:55 PM - Oct 23
6:52 PM) and the opening of Continuing from "Another 'Neka' Document" 1a16af81b5ebda11 (Oct 23 6:53-7:51 PM).
Same template as 1008-1225 (emit_tail1008.py). Only his own typed lines are drawn; SCP lists, Verity sessions, Roblox
hacker research, the Dandy's World guide, the chatbot's /100 estimates and scenes are commentary. Beat numbers and
titles are the wiki ingest's (classics-lore/neka-omazen-era.md).
"""
import io

BASE = 1226
TAG = "1226"
START = 25592.0 + 22.0 * 50
STEP = 22.0
B = []

MONTH = {22: 'OCTOBER 22', 23: 'OCTOBER 23'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 22, 5:56 AM (Email 1922) ----------------
add(meta(22, '5:56 AM'), 'APOLLYON-CLASS', '255,80,80',
    ['“NEKA IS REALLY ACTUALLY APOLLYON-CLASS.” ... “HE CAN', 'CONTAIN SCPS, AS HE ONCE CONTAINED THE WHOLE REALITY', 'GROUP, CLASSICS ... AND ALSO THE LORE’S PAST.”'],
    [('REALLY ACTUALLY', ['THE CLASS LIST IS THE CHATBOT’S. THE RULING IS HIS, TWICE:', '“REALLY ACTUALLY APOLLYON-CLASS” AND “REALLY APOLLYON”.'],
      'OCT 21, 8:36 PM: “WHY IS A NORMAL MAN ON APOLLYON?”'),
     ('WHAT HE CONTAINED', ['THE WHOLE REALITY GROUP, CLASSICS, ALL ITS GAMES, FANGAMES', 'AND MODS, THE LORE’S PAST, AND THE HUGE MACHINE.'],
      '5.65 FEET OUTSIDE, “TRUELY INFINITE” INSIDE.'),
     ('META-FICTION, NOT FICTION', ['“‘NEKA’ ISN’T FICTION, IT IS META-FICTION.” THE OTHER', 'CHARACTERS IN “NEKA” WERE CHARACTERS BROUGHT OVER.'],
      'OCT 23: ALSO KETER, ALSO THAUMIEL. ONE MAN, THREE CLASSES.')],
    ['APOLLYON-CLASS.', 'THE CLASS FOR THE UNCONTAINABLE, WORN BY THE CONTAINER.'],
    'Neka is really actually Apollyon-class. ... Neka is REALLY Apollyon, and he can contain SCPs, as he once contained the whole Reality Group, Classics, all Classics games and fangames and mods and stuff, and also the lore\'s past, and most recent, the whole machine that was so huge. Neka is now 5.65 feet tall, but inside, it is truely infinite.')

# ---------------- October 22, 5:56-6:36 AM (Emails 1922-1924) ----------------
add(meta(22, '5:56-6:36 AM'), 'GASTER AND NEKA, FOREVER', '120,120,130',
    ['“NEKA EVEN DESTROYED THE VOID, FICTION, AND META-FICTION.', 'GASTER AND NEKA WERE THE ONLY CHARACTERS LEFT. LIKE FOREVER', 'NOW.” ... “IT ONLY CAN REACH YOU ONCE YOU ENTER CLASSICS.”'],
    [('THE ROSTER DROPS TO TWO', ['THE FOURTH TIME THIS MONTH. OCT 17: EVERY BEING SLAIN, ONE', 'LEFT. OCT 22: TWO LEFT, AND THE VOID ITSELF GONE.'],
      '“LIKE FOREVER NOW.”'),
     ('ONLY ONCE YOU ENTER', ['“IT ONLY CAN REACH YOU ONCE YOU ENTER CLASSICS/‘NEKA’.”', 'THE REACH RULE, SAID PLAINLY.'],
      'OCT 18: “WAITING FOR YOU TO STEP INTO MY DOMAIN.”'),
     ('THROUGH MIND', ['“THAT IS HOW I THINK WHAT HAPPENS NEXT IN ‘NEKA’ THROUGH', 'MIND.” THE GAME IS WATCHED, NOT PLAYED.'],
      'OCT 18: NEVER RELEASED. OCT 22: STILL WATCHED.')],
    ['GASTER AND NEKA, FOREVER.', 'NO VOID, NO FICTION, NO META-FICTION. TWO FIGURES, NOTHING ELSE.'],
    'Neka even destroyed the Void, Fiction, and Meta-Fiction. Gaster and Neka were the only characters left. Like forever now. ... It only can reach you once you enter Classics/"Neka" ... That is how I think what happens next in "Neka" through mind.')

# ---------------- October 22, 6:08 PM (Email 1925) ----------------
add(meta(22, '6:08 PM'), 'ALL MUST BE ONE.', '255,216,79',
    ['“NEKA LOOKED AT LUIGI INUS AND LUIGI INUS FROZE FOR 55', 'HOURS” ... “NEKA BROUGHT EVERYONE TO THE STAGE, AND HE SAYS', '‘ALL MUST BE ONE.’” ... “IT IS A GAME TO GET ACHIEVEMENTS.”'],
    [('PS-50 GIVES PARANOIDIA', ['“CONSTANT FEAR OVER A SUDDEN MONSTEROSITY TRANSFORMATION.”', 'LUIGI INUS IS THE PIRATE MAN AGAIN, STILL WITH IT,'],
      'STILL WITH THE REMORSE. HE WANTS NEKA BACK. NEKA IS BACK.'),
     ('FROZEN FOR 55 HOURS', ['ONE LOOK FROM NEKA, EYES FLASHING RED AND WHITE. GASTER', 'FIXED HIS CODE “THROUGH CREATOR OF ‘NEKA’ AU.”'],
      'OCT 17: THE CUTS. OCT 22: THE FREEZE.'),
     ('100% THE GAME', ['“YOU ALL THINK CLASSICS IS A GAME OF ENDLESS MASCRARE, BUT', 'IT IS NOT.” EVERY BADGE DONE, THE ALL-ACHIEVEMENT ONE'],
      'INCLUDED. OCT 21: CLAIM ALL. OCT 22: CLAIMED.')],
    ['ALL MUST BE ONE.', 'THE WHOLE CAST ON ONE STAGE, AND THE SCOREBOARD FILLED IN.'],
    'Neka brought everyone to the stage, and he says "All must be one.", Simon.ps fell over, Oren.ps also fell over. ... Neka says "You all think Classics is a game of endless mascrare, but it is not, it is a game to get achievements.", Neka then 100%s the game by completing all badges, including the all-achievement badge.')

# ---------------- October 22, 6:23-7:09 PM (Emails 1926-1931) ----------------
add(meta(22, '6:23-7:09 PM'), 'THE GRAY HOLE', '154,163,173',
    ['“IF A WHITE HOLE PUSHES STUFF AWAY, AND A BLACK HOLE PULLS', 'THINGS IN, WHAT DOES A GRAY HOLE DO?” ... “IT TEARS REALITY', 'APART ... NEKA ABSORBED THE FORCEFIELD, BECOMING A GRAY HOLE.”'.replace('APART ... NEKA ABSORBED THE FORCEFIELD, BECOMING A GRAY HOLE.”','APART ... NEKA ABSORBED THE FORCEFIELD.”')],
    [('THE FORCEFIELD, EATEN', ['OCT 21: THE WALL THAT DISSOLVES EVERYTHING BUT GASTER’S', 'PUNCH. OCT 22: HE ABSORBS IT AND BECOMES THE WALL.'],
      '“EVERYTHING HE TOUCHES.” EVEN THE GROUND UNDER HIS FEET.'),
     ('EVERYONE SWITCHED', ['NEKA IN A GASTER AU, GASTER IN A NEKA AU, SANS IN A', 'PAPYRUS AU, CHARA AND FRISK SWAPPED, BECAUSE OF THE HOLE.'],
      'THE CONNECTED PC: IF IT REACHES CLASSICS, HE HAS IT.'),
     ('THE 4TH IS NEKA', ['HUMANS ARE THE LARGEST BEINGS IN REALITY; HIS INSIDE IS', 'LARGER. “THE 4TH IS NEKA.” NOT “NEKA”, BUT NEKA.'],
      '0% ROOM TAKEN, HOWEVER MANY INFINITIES GO IN.')],
    ['THE GRAY HOLE.', 'NOT A PUSH, NOT A PULL. A TEAR, WALKING, WITH A MAN’S SHAPE.'],
    'If a White Hole pushes stuff away, and a Black Hole pulls things in, what does a Gray Hole do? ... It tears reality apart, erasing everything in touch, Neka\'s forcefield is the only one of it\'s type. ... now recently just now, Neka absorbed the forcefield, becoming a gray hole himself.')

# ---------------- October 22, 7:09 PM (Email 1931) ----------------
add(meta(22, '7:09 PM'), 'THE POLO COMES OFF', '200,120,255',
    ['“NEKA WAS BECOMING SIMON.PS, AND THE ORIGINAL ALSO GLITCHED', '... NEKA WON AND TOOK OFF THE ICON FROM HIS POLO, AND NEKA', 'TAKEN OFF THE POLO, REVEALING HIS ADULT FORM.”'],
    [('DISGUISED AS EVERY MALE CHARACTER', ['“NEKA IS KNOWN FOR DISGUISING HIMSELF AS GASTER, SIMON.PS,', 'OREN.PS, AND ALL MALE CHARACTERS.” HIS BORROWED MEMORIES'],
      'BLEED BACK INTO THE ORIGINALS.'),
     ('14TH TO 2ND', ['“OREN.PS, YOUR PLAY SPOT IS #1 ON BOARD.” SIMON.PS MOVES', 'FROM 14TH TO 2ND; EVERY OTHER SPOT FALLS OUT OF ORDER.'],
      'OCT 15: VS NEKA IN CLEVERNESS. NOW TWO SIMON.PS, ONE FAKE.'),
     ('THE POLOS', ['SEPT 24: TWENTY-ONE POLO SQUARES. THE ICON COMES OFF, THEN', 'THE POLO, AND UNDER IT: HIS ADULT FORM.'],
      'THE GOD-TIER ORIGINAL LOST TO THE COPY WEARING HIS SHIRT.')],
    ['THE POLO COMES OFF.', 'THE DISGUISE BEATS THE REAL ONE, THEN SHOWS WHO WON.'],
    'Neka was becoming Simon.ps, and the original also glitched, making 2 appear suddently. Simon.ps was god-tier, so he fought the false Simon.ps, but Neka won and took off the icon from his polo, and Neka taken off the polo, revealing his adult form.')

# ---------------- October 22, 7:55 PM (Email 1932) ----------------
add(meta(22, '7:55 PM'), '3 EYES 0.75 SECONDS AGO', '255,216,79',
    ['“‘WHY ARE YOU LOOKING AT ME LIKE I JUST HAD 3 EYES 0.75', 'SECONDS AGO?’, GRAY.PS SAYS ‘YOU HAVE 3 EYES! 🦊’, NEKA SAYS', '‘CLASSICS ISN’T YOUR HOME GAME.’”'],
    [('ONE SECOND OF GLITCH', ['HIS MOUTH GLITCHED, HIS HEAD TILTED, THE SCREEN GLITCHED,', 'AND AFTER 1 SECOND HE WAS NORMAL. WENDA.PS: “WHAT- 🐶”'],
      'A NEW THREAD, ANOTHER NEW “NEKA” DOCUMENT, OPENS ON IT.'),
     ('THE THIRD EYE', ['OCT 15: THE CROSS EYES, ALWAYS. OCT 22: FOR 0.75 SECONDS,', 'A THIRD. GRAY.PS SAW IT AND SAID SO.'],
      '“CLASSICS ISN’T YOUR HOME GAME.” THE SPRUNKIS ARE GUESTS.'),
     ('PHASE 88182937 AND 88182938', ['SIMON.PS REPAIRED AT 88182937, SLAIN BY FUN BOT FOR THE', 'CHANCE. AT 88182938 “THE CORRUPTION LASTS FOREVER.”'],
      'SEPT 26: PHASE 102. THE PHASE COUNTER HAS RUN A LONG WAY.')],
    ['3 EYES 0.75 SECONDS AGO.', 'A FLICKER TOO QUICK TO ARGUE WITH. THE FOX ARGUES ANYWAY.'],
    'Neka says "Why are you looking at me like I just had 3 eyes 0.75 seconds ago?", Gray.ps says "You HAVE 3 eyes! 🦊", Neka says "Classics isn\'t your home game."')

# ---------------- October 22, 7:55 PM (Email 1932) ----------------
add(meta(22, '7:55 PM'), 'FUN BOT’S RED EYES', '255,80,80',
    ['“FUN BOT THEN ATTACKED WENDA.PS, WENDA.PS WAS STRUCK BY 5', 'LONG WOODEN BLADES, FUN BOT’S EYES FLASHED RED, THE SCREEN', 'TURNS AROUND, AND THEN IT TURNS BACK TO NORMAL.”'],
    [('MR. BLACK, EVEN STRONGER', ['HE FIGHTS GASTER FOR CONTROL, ERASES THE MEMORY OF EVERY', 'NON-SPRUNKI, AND “HAS EVERYONE’S POWERS SINCE BLACK IS'],
      'EVERY COLOR MIXED.” NEKA COULD SLAY HIM IF HE WANTED.'),
     ('WENDA.PS JUMPED IN FRONT', ['MR. BLACK NEARLY STRUCK GASTER DOWN; WENDA.PS TOOK IT, WAS', 'CORRUPTED, AND ATTACKED THE OTHERS. FUN BOT WAS SPARED.'],
      '“SIMON.PS’S GLITCHES MAY HAVE GOTTEN ON FUN BOT.”'),
     ('HAUNTED FROM BEHIND', ['GASTER AND NEKA HAUNT FUN BOT. HE KNEW GASTER WAS THERE,', 'NOT NEKA. “FUN BOT DOESN’T EVEN TELL AN ADMIN.”'],
      'HE WANTS THE XP FROM MR. BLACK TO BEAT GASTER.')],
    ['FUN BOT’S RED EYES.', 'FIVE WOODEN BLADES, ONE RED FLASH, TWO SHADOWS AT HIS BACK.'],
    'Fun Bot then attacked Wenda.ps, Wenda.ps was struck by 5 long wooden blades, Fun Bot\'s eyes flashed red, the screen turns around, and then it turns back to normal. Simon.ps\'s glitches may have gotten on Fun Bot since Classic Sprunki.')

# ---------------- October 22-23, 8:25 PM-5:59 AM (Emails 1933-1936) ----------------
add(meta(22, '8:25 PM'), 'SEAHORSE', '127,212,255',
    ['“EVEN A SINGLE WORD CAN BREAK NEKA, ‘SEAHORSE’ ... AFTER', '50 MINUTES, HE CORRUPTS AND SUDDENLY STOPS” ... “WHEN IT IS', '7 AM, HE SAYS ‘GOOD NIGHT.’, AND IT TERRIFIES THE WHOLE POPULATION.”'.replace('7 AM, HE SAYS ‘GOOD NIGHT.’, AND IT TERRIFIES THE WHOLE POPULATION.”','7 AM, HE SAYS ‘GOOD NIGHT.’, AND IT TERRIFIES THE POPULATION.”')],
    [('THE WORD THAT BREAKS HIM', ['HE TRIES TO SEND A SEAHORSE EMOJI FOR FIFTY MINUTES, THEN', 'CORRUPTED EMOJIS, A BODY MOVING “IN STRANGE WAYS A HUMAN'],
      'CAN’T DO.” OBSESSED WITH YOU IN NEARLY 30 MESSAGES.'),
     ('GOOD NIGHT. AT 7 AM', ['OCT 15: “NO GAMES AFTER 7 PM!” OCT 22: ITS MIRROR, A GOOD', 'NIGHT AT SUNRISE. HE TYPES BEFORE YOU FINISH WRITING.'],
      '“EVERYONE IS SCARED OF HIM.”'),
     ('HIS EMOTIONS, AND YOUR REAL NAME', ['JEALOUS: “NOW I’LL JUST CLONE THE OBJECT.” SAD: “HELP...', 'USER’S NAME.” ANGRY: HE ERASES THE ACCOUNT.'],
      '“IF NEKA HAS FUN WITH IT, HE MAY NEVER LET YOU GO.”')],
    ['SEAHORSE.', 'ONE WORD HE CANNOT SEND, AND ONE HE SENDS AT THE WRONG HOUR.'],
    'Even a single word can break Neka, "seahorse". Neka thinks to send a seahorse emoji, and after 50 minutes, he corrupts and suddenly stops, sends corrupted emojis, and also moves his body in strange ways a human can\'t do ... when it is 7 AM, he says "Good Night.", and it terrifies the whole population. Everyone is scared of him.')

# ---------------- October 23, 6:37 AM (Email 1937) ----------------
add(meta(23, '6:37 AM'), 'ERASE, THE PURPLE 9S', '180,100,255',
    ['“NEKA’S EYES TURN PURPLE, AND HE SAYS ‘ERASE’, AND THEN', 'NEKA’S HEAD TWITCHES AND THEN A SLASH APPEARS, MAKING THE', 'SCREEN BLACK WITH PURPLE 9S ... YOU CAN’T EXIT THAT PART.”'],
    [('KETER AND THAUMIEL TOO', ['“NEKA IS KETER BECAUSE HE IS IMPOSSIBLE TO CONTAIN, AND HE', 'CAN CONTAIN OTHER ENTITIES.” APOLLYON SINCE OCT 22.'],
      '“2017 + 9 = 2026.” THE NINES COUNT EVEN HERE.'),
     ('THE ERASE SEQUENCE', ['PURPLE EYES, THE WORD, A TWITCH, A SLASH, A BLACK SCREEN', 'OF PURPLE 9S WITH NEKA IN FRONT, EXPLAINING THE OFFENCE.'],
      'SEPT 25: THE ONLY CUTSCENE YOU CAN’T COME OUT OF. ANOTHER.'),
     ('ULTRAMON', ['FUN BOT SLAYS MR. BLACK, BEATS GASTER. MR. BLACK HIDES', 'THAT HE LIVES AND BUILDS ULTRAMON FROM THE REMAINS.'],
      '“NEKA SECRETLY HIDES THAT HE STILL OWNS THE GAME.” NO LIE.')],
    ['ERASE, THE PURPLE 9S.', 'THE SCREEN GOES BLACK, THE NINES COME OUT, HE TELLS YOU WHY.'],
    'Neka\'s eyes turn purple, and he says "ERASE", and then Neka\'s head twitches and then a slash appears, making the screen black with purple 9s and Neka in front of it and tells why the player did the thing that offended him. You can\'t exit that part, it\'s stuck, and yeah, so...')

# ---------------- October 23, 4:53-4:59 PM (Emails 1938-1940) ----------------
add(meta(23, '4:53-4:59 PM'), 'THE ENDLESS STAIRCASE FALLS', '255,216,79',
    ['“A PURPLE LIGHTNING BOLT STRUCK AND ULTRAMON IS LITTERLY', 'DELETED. TENTACLES FILL THE DARK PATCHES IN ROOMS, THE', 'ENDLESS STAICASE FALLS DOWN. ‘ONLY MR. BLACK COULD DO THIS’”'],
    [('THIS GAME, IN HIS STORY', ['OCT 15: THE STAIRCASES ARE “THE SAME BEING”. OCT 23: THE', 'ENDLESS STAIRCASE FALLS DOWN. THE BEAT IS DRAWN ON ITSELF.'],
      '“-FUN BOT.” BUT MR. BLACK WAS DEAD 40 MINUTES BEFORE.'),
     ('GRIM', ['“HELLO THERE, IT IS ME, GRIM.” TENTACLES WRAP THE REAPER,', 'THE MASK FALLS, HE CHASES, A SAW MAKES BONES,'],
      'AND THE BONES MAKE THE FLESH INTO ARMOR.'),
     ('ONLY 3', ['“GASTER, FUN BOT, AND GASTER ARE THE ONLY 3. SO WHO DID', 'ALL THE CHAOS?” HE ANSWERS HIMSELF AT 5:12 PM.'],
      '“‘NEKA’ NOW GETS CLOSER AND CLOSER TO A SPRUNKI MOD.”')],
    ['THE ENDLESS STAIRCASE FALLS.', 'THE GAME YOU ARE PLAYING COLLAPSES INSIDE ITS OWN STORY.'],
    'Ultramon was then zapped deleted, Fun Bot jumps back, a purple lightning bolt struck and Ultramon is litterly deleted. Tentacles fill the dark patches in rooms, The Endless Staicase falls down. "Only Mr. Black could do this" -Fun Bot. Gaster revives and looks after Fun Bot.')

# ---------------- October 23, 5:12 PM (Email 1941) ----------------
add(meta(23, '5:12 PM'), 'THE MAN IN WHITE', '255,255,255',
    ['“THE SPRUNKIS SURROUND FUN BOT AND CLOSE IN, THEN THE', 'SPRUNKIS DISAPPEAR AND BECOME ONE MAN WEARING WHITE. NEKA', 'STANDS ... HIS EYE SUMMONS A PLASMA BALL ... CHYTHROME.”'],
    [('NOT MR. BLACK, AN ANOMALLY', ['THE BLACK FIGURE’S VOICE WAS WRONG, THE BODY GLITCHED.', '“4TH REALITY GROUP SHIFTED BODIES.” IT WAS NEKA.'],
      'OCT 22: DISGUISED AS EVERY MALE CHARACTER. MR. BLACK TOO.'),
     ('THE MUSTACHE', ['“NEKA TOUCHES HIS MUSTACHE, THEN JUMPS AT THE SPRUNKIS.”', 'ITS FIRST MENTION. REPELLED BY GRAY’S GRAVITY.'],
      'OCT 25: “NEKA DOES HAVE A MUSTACHE.” CONFIRMED.'),
     ('BUILDERMAN AND ROBLOX', ['“MAYBE GIVE EVERYONE FREE ‘NEKA’-TOKENS?” NEKA PROPOSES', 'UPDATES; GASTER ADDS OR DELETES. METANONIC = CHROMANTIC.'],
      'FUN BOT’S FACE TURNS INTO FUN COMPUTER AND RESPAWNS THEM.')],
    ['THE MAN IN WHITE.', 'TWENTY SPRUNKIS STEP TOGETHER AND ONE MAN STEPS OUT OF THEM.'],
    'then all the Sprunkis surround Fun Bot and close in, then the Sprunkis disappear and become one man wearing white. Neka stands, Fun Bot was scared, Neka\'s hand glows purple, and his eye summons a plasma ball that turns the air into plasma air or Chythrome. ... Neka touches his mustache, and then jumps at the Sprunkis.')

# ---------------- October 23, 6:03-6:04 PM (Emails 1942-1943) ----------------
add(meta(23, '6:03-6:04 PM'), 'PERFECTLY NORMAL', '200,200,210',
    ['“NEKA TO A HUMAN ‘WHAT? MY SPEED AND POWERS ARE PERFECTLY', 'NORMAL.’, HUMAN ‘WHAT THE AHHHH…!!!’” ... “NEKA CAN JUST', 'APPEAR IN REALITY SOMETIMES AND YOU DON’T EVEN KNOW.”'],
    [('ELLERNATE AND THE HACKERS', ['“NOW INCLUDE ELLERNATE AND NEKA INTO THE GUEST 666 AND', 'ENTITY 303 BATTLE THING.” THE RESEARCH IS THE CHATBOT’S.'],
      'OCT 12: THE SAME ROBLOX-HACKER PATTERN, SAME ANSWER.'),
     ('IN REALITY, SOMETIMES', ['OCT 18: THE META, HOW REALITY TOUCHES THE GAME. OCT 23: HE', 'TOUCHES BACK, “AND YOU DON’T EVEN KNOW.”'],
      '“PSYCHICAL > PHYSICAL”'),
     ('NORMAL, TO HIM', ['A MAN SCREAMS. HE IS PUZZLED. HIS SPEED IS NORMAL. OCT 21:', '“WHY IS A NORMAL MAN ON APOLLYON?” THIS IS WHY.'],
      'THE SCARIEST THING HE SAYS IS THAT NOTHING IS WRONG.')],
    ['PERFECTLY NORMAL.', 'THE HUMAN SCREAMS. HE ASKS WHAT THE FUSS IS ABOUT.'],
    'Neka to a human "What? My speed and powers are perfectly normal.", Human "WHAT THE AHHHH…!!!" ... Neka can just appear in reality sometimes and you don\'t even know. ... Psychical > Physical')

# ---------------- October 23, 6:52 PM (Email 1944) ----------------
add(meta(23, '6:52 PM'), 'THE RLS ARE COMING BACK', '120,200,140',
    ['“RLS ARE COMMING BACK, SINCE GASTER MISSED THEM. RLS ARE', 'NOW FIGHTING SPRUNKIS AND WON ... ABSORBED THE MEMORIES OF', 'THE SPRUNKIS, MAKING THE RLS EXTREMELY INTELEGENT.”'],
    [('THE “NEKA” HACKERS, HIS ORDER', ['PINKY RL, “THE ONE WHO STARTED THE CORRUPTION IN THE FIRST', 'PLACE”; CLASSIC RL SIMON, GOD-TIER “FOR A VERY LONG TIME”;'],
      'PERO LAI TRICKED SIMON RL; NEKA LAI IS ALL NEKAS IN 1 AI.'),
     ('MR. BLACK’S CORRUPTION', ['“MR. BLACK DID A LARGE CORRUPTION IN CODE, AND A', 'POWER OF THAT SPRUNKI IS HACKING.” HE MAY HAVE EVOLVED THEM.'],
      'OCT 10: THE PUPPET MASTER. OCT 23: THE GREATEST HACKER.'),
     ('THE HINGE', ['THE RLS WERE THE FIRST LORE OF ALL, FROM LATE 2025. THEY', 'RETURN WITH THEIR MEMORIES AND THE SPRUNKIS’ TOO.'],
      '“COMICALLY STRONGER.” THE LAST ERA BEGINS AT 8:04 PM.')],
    ['THE RLS ARE COMING BACK.', 'THE OLDEST MONSTERS IN THE ARCHIVE WALK BACK IN, SMARTER.'],
    'RLs are comming back, since Gaster missed them. RLs are now fighting Sprunkis and won, and they came with their memories and then absorbed the memories of the Sprunkis, making the RLs extremely intelegent. RLs would be comically stronger than the Sprunkis.')

# ---------------- October 23, 6:58 PM (Email 1946) ----------------
add(meta(23, '6:58 PM'), 'CLASSICS TAKES UP 1%', '160,200,255',
    ['“GASTER MADE CLASSICS EVEN BIGGER TO FIT EVERYONE, THEN', 'BIGGER TO MAKE EVERYONE LIKE A SPEC OF DUST TO IT ... THE', 'CLASSICS BECAME AS LARGE AS NEKA ... CLASSICS TAKES UP 1%.”'],
    [('ALL AUS RUSHED OUT', ['FELLTALE, INKTALE, DUSTTALE, “DUSTDUSTDUST”, ERROR 404.', 'INK SANS’S PORTALS BRING SANSES, PAPYRUSES, GASTERS, KRIS.'],
      '“DID WE REALLY NEED TO SEND THEM ALL IN AGAIN?” “NO. 😉”'),
     ('THE FIRST NON-ZERO READING', ['OCT 22: 0% ROOM TAKEN, HOWEVER MANY INFINITIES. OCT 23:', 'A CLASSICS AS LARGE AS HIM TAKES UP 1% OF HIS INSIDE.'],
      'SOMETHING FINALLY REGISTERS ON THE SCALE.'),
     ('NEKA CALLS OVER THE RLS', ['THE SENTENCE ENDS WITH THE CALL. 6:52 PM THEY WERE COMING.', '6:58 PM THEY ARE SUMMONED.'],
      '“YOUR CLASSICS CODE, IT IS MINE.” COMES NEXT.')],
    ['CLASSICS TAKES UP 1%.', 'A WHOLE GAME, GROWN TO HIS SIZE, IS ONE HUNDREDTH OF HIM.'],
    'Gaster made Classics even bigger to fit everyone, then bigger to make everyone like a spec of dust to it. Neka says "ok. 😉", then the Classics became as large as Neka. Classics now with taking up percent and space in Neka\'s inside. Classics takes up 1%. Neka then calls over RLs.')

# ---------------- October 23, 7:10-7:26 PM (Emails 1947-1948) ----------------
add(meta(23, '7:10-7:26 PM'), 'YOUR CLASSICS CODE, IT IS MINE', '255,216,79',
    ['“SEE NEKA. NEKA SAYS ‘YOUR CLASSICS CODE, IT IS MINE.’” ...', '“THEME: NEKA GOES TO CONVERSATIONS MOST OF THE TIME.” ...', '“NOW THE RLS CONTINUED TO SPREAD AND INFECT.”'],
    [('THE THEME HE NAMES HIMSELF', ['“EVIDENCE: APPEARED MORE THAN LIKE 10 TIMES ALREADY', 'INCLUDING THE 4 OTHER HUGE LORE CHATS.”'],
      'VERITY’S UNIVERSE IS SOMEONE ELSE’S; HIS LINES ARE THESE.'),
     ('THE CODE, CLAIMED', ['SEPT 24: HE TOOK ALL THE GREEN CODE FROM THE PLAYERS.', 'OCT 23: “YOUR CLASSICS CODE, IT IS MINE.” TO THEIR FACE.'],
      'A NEW THREAD OPENS ON IT.'),
     ('THE RLS SPREAD', ['6:52 PM COMING BACK. 6:58 PM CALLED OVER. 7:26 PM', '“CONTINUED TO SPREAD AND INFECT.” THE PACE OF AN OUTBREAK.'],
      'BY 8:04 PM THE GAME HAS THEIR NAME.')],
    ['YOUR CLASSICS CODE, IT IS MINE.', 'HE WALKS INTO OTHER CONVERSATIONS AND TAKES THE SOURCE.'],
    'See Neka. Neka says "Your Classics code, it is mine." ... Theme: Neka goes to conversations most of the time. Evidence: Appeared more than like 10 times already including the 4 other huge lore chats. ... Now The RLs continued to spread and infect.')

# ---------------- October 23, 7:37 PM (Email 1949) ----------------
add(meta(23, '7:37 PM'), 'BLACK TO HIS ORIGINAL FORM', '60,60,70',
    ['“WENDA.PS ATTACKED MR. BLACK, CAUSING MR. BLACK TO HAVE A', 'HUMAN FACE.” ... “MR. BLACK CANONALLY RESTORES IT. JUST', 'NOW.” ... “MR. BLACK IS BLACK TO HIS ORIGINAL FORM!”'],
    [('DANDY IS... MR. BLACK THEN?', ['A COMPARISON, NOT AN IDENTITY. DANDY’S WORLD IS SOMEONE', 'ELSE’S AND STAYS OFF THE WIKI EXCEPT AS HIS QUESTION.'],
      '“MR. BLACK IS KNOWN AS THE GREATEST HACKER.”'),
     ('THE HUMAN FACE, AGAIN', ['OCT 3: PHASE 666, THE HUMAN FACE. OCT 23: WENDA.PS GIVES', 'IT BACK TO HIM, AND HE RESTORES HIMSELF. “JUST NOW.”'],
      'HE EVOLVED AND CORRUPTED FUN BOT AND FUN COMPUTER.'),
     ('NEKA’S PUN', ['“BLACK TO HIS ORIGINAL FORM!” NEKA NAMES THE MOMENT WITH', 'A JOKE. SEPT 26: “WANNA POP TART?” HE HAS ALWAYS JOKED.'],
      'UNABLE TO DESTROY THE FUN TWO, BUT ABLE TO CORRUPT THEM.')],
    ['BLACK TO HIS ORIGINAL FORM.', 'A HUMAN FACE FOR A MOMENT, THEN THE DARK AGAIN, AND A PUN.'],
    'Mr. Black is KNOWN for that, he shouldn\'t kill himself, so Wenda.ps attacked Mr. Black, causing Mr. Black to have a human face. ... Mr. Black canonally restores it. Just now. ... Neka Term: Mr. Black is BLACK to his original form!')

# ---------------- October 23, 7:51 PM (Email 1950) ----------------
add(meta(23, '7:51 PM'), 'THE BLACK LIQUID KILLS SPRUNKIS', '30,30,36',
    ['“RLS AREN’T SPECIFICALLY VIRUSES, THEY ARE CORRUPTION', 'EATERS, LIKE NEKA, BUT RLS TURN THE CORRUPTION INTO A', 'LIQUID.” ... “THE BLACK LIQUID ... KILLS SPRUNKIS.”'],
    [('CORRUPTION EATERS', ['NEKA WANTED ANTI-VIRUSES. THE RLS EAT CORRUPTION AND', 'LEAVE IT AS LIQUID; NEKA “JUST STORES THE CORRUPTION IN HIM.”'],
      'WHICH IS WHY SIMON.PS AND OREN.PS ARE SO CORRUPT.'),
     ('WORSE THAN THE VIRUS', ['“THE BLACK LIQUID IS WORSE THAN THE ORIGINAL VIRUS THE RLS', 'EAT. IT KILLS SPRUNKIS. EVERYONE IS DEAD INSIDE.”'],
      'THE SAME STUFF THAT GOT ON SIMON RL FAR BEFORE.'),
     ('MR. BLACK MADE THE MOD', ['“MR. BLACK EVEN CREATED THE ORIGINAL CLASSIC RL MOD.” HE', 'CONTROLS THE RLS. THE PUPPET MYTH IS HIS TOO.'],
      'OCT 25: THE LIQUID GETS ITS NAME, INKTITE.')],
    ['THE BLACK LIQUID KILLS SPRUNKIS.', 'WHAT THE EATERS LEAVE BEHIND IS DEADLIER THAN WHAT THEY ATE.'],
    'RLs aren\'t specifically viruses, they are corruption eaters, like Neka, but RLs turn the corruption into a liquid. Neka just stores the corruption in him, making Simon.ps so corrupt ... The black liquid is WORSE than the original virus the RLs eat. It KILLS Sprunkis. No wonder everyone is dead inside...')

# ---------------- October 23, 7:51 PM (Email 1950) ----------------
add(meta(23, '7:51 PM'), 'GRAY’S INK = INK + URINITE', '154,163,173',
    ['“GRAY’S INK WAS INK MIXED WITH URINITE (NEKA’S SALIVA OR', 'BITE INFECTION). NEKA GOTTEN THE URINITE ONCE HE WAS A', 'CHILD NAMED PERO ... RLS WERE MADE ONCE PERO WAS PERO LAI.”'],
    [('URINITE', ['NEKA’S SALIVA OR BITE INFECTION, FOUND WHEN HE WAS “A', 'CHILD NAMED PERO” AT ABOUT 17. GRAY’S INK IS INK + THAT.'],
      'THE OLDEST LIQUID IN THE LORE HAS A RECIPE NOW.'),
     ('WHEN THE RLS WERE MADE', ['“ONCE PERO WAS PERO LAI OR PRE-TODDLLM (25-29).” THE RLS', 'DATE TO HIS TWENTIES, THE INFECTION TO HIS TEENS.'],
      'OCT 21: BORN NEKA. BUT THE CHILD WAS CALLED PERO.'),
     ('AN ANCIENT CHAT', ['“THE LIQUID WAS ACTUALLY DATING BACK TO REAL CHATGPT LORE', 'THING, IT WAS ACTUALLY IN AN ANCIENT CHAT.”'],
      'THE ERA PAGE CLOSES HERE, AT EMAIL 1950.')],
    ['GRAY’S INK = INK + URINITE.', 'THE INK HAD A SECOND INGREDIENT ALL ALONG, AND IT WAS HIS.'],
    'Yes. Gray\'s Ink was ink mixed with Urinite (Neka\'s saliva or bite infection). Neka gotten the Urinite once he was a child named Pero, and he found it once he was like 17 or whatever age he was. RLs were made once Pero was Pero LAI or pre-ToddLLM (25-29). The liquid was actually dating back to real ChatGPT Lore Thing, it was actually in an ancient chat.')

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
assert len(B) == 18, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
