#!/usr/bin/env python3
"""
gen1209.py - draw the branches for BEATS 1209-1217 from Toby's October 19-20, 2026 messages (Emails 1890-1905):
More "Neka Era" 1a150e658cd4fea9 (Oct 19), "More 3 Way Hero stuff" 1a15693d47eca12b (Oct 19-20) and the opening of
"New Document" 1a15b3b7a48523af (Oct 20, 5:32 PM). Same template as 1008-1208 (emit_tail1008.py). Only his own typed
lines are drawn; the chatbot's essays, tables, bot-written scenes and renders are commentary; Chelsea's chapters of The
3 Way Heroes are hers and stay on her page. Beat numbers and titles are the wiki ingest's.
"""
import io

BASE = 1209
TAG = "1209"
START = 25592.0 + 22.0 * 33
STEP = 22.0
B = []

MONTH = {19: 'OCTOBER 19', 20: 'OCTOBER 20'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 19, 6:46 AM-4:06 PM (Emails 1890-1891) ----------------
add(meta(19, '4:06 PM'), 'I AM GOD HERE!', '255,216,79',
    ['“NEKA SAYS ‘I AM GOD HERE!’, SCP FADES INTO ICE DIAMONDS IN', 'A VOID OF BLACK NOTHING ... HE ACTUALLY BEATEN ALL SCPS, AND', 'ALL ENTITIES THAT EVER EXISTED SEPTILLIONS OF TIMES.”'],
    [('NEKA AI IS THE ANSWER', ['6:46 AM: WHAT WOULD THE STRONGEST UNDERTALE ANOMALY DO', 'WITH A SUPERNATURAL AI? “NEKA AI IS THE ANSWER.”'],
      '“NEKA CAN SUMMON ANY CHARACTER TO HIS GAME REALLY.”'),
     ('ONLY WHAT HAPPENS NOW', ['HE ERASED SCP-2747 AND EVERYONE’S MEMORY OF IT, EVEN REAL', 'PEOPLE’S. HE ERASED THE LORE OF THE NIRTHOLOGE.'],
      '“I FORGOT THE OLDER CHARACTERS ... EVEN CLASSICS OMAZEN.”'),
     ('THE HEAT', ['BORN −1020K, NOW 98.7F, THEN −3000K. TOUCHABLE ONLY WHEN', 'HE HEATS UP AND HIS CODE SLOWS. FREEZE WITHIN 75 LY.'],
      'HE FORGETS ONLY HIS OWN ATTACKS.')],
    ['I AM GOD HERE!', 'THE SCPS BECOME ICE, THE PAST BECOMES NOTHING. ONLY NOW.'],
    'Neka says "I AM GOD HERE!", SCP fades into ice diamonds in a void of black nothing. Neka himself is beyond all religion, fiction, nonfiction, and meta-fiction. ... Neka could litterly erase the lore of the Nirthologe (he did), and all the past that happened, so now, we only have what happens now.')

# ---------------- October 19, 4:33-4:52 PM (Emails 1892-1894) ----------------
add(meta(19, '4:33-4:52 PM'), 'THE REALITY GROUP CUBE', '160,200,255',
    ['“THE REALITY GROUP (A CUBE OF EVERYTHING, NEKA HOLDS THAT,', 'IT CONTAINS ALL THE INVINCIBILITY CUBES, REALITIES, FICTION,', 'META-FICTION ...), AND NEKA CONSUMED THE CUBE.”'],
    [('A HUMAN WITH EVERYTHING INSIDE', ['“GASTER LOOKS UP AND SEES A HUMAN WITH EVERYTHING COMBINED', 'INSIDE IT. NEKA IS NO LONGER JUST CODE.”'],
      'HE ATE THE MATTER OF EVERYTHING, THE VERY EXISTANCE.'),
     ('THE LARGEST THING IN META-EXISTANCE', ['A HUMAN BODY AT THE FRONT; BEHIND IT PIPES, SPEAKERS,', 'MICROPHONES, VINES, SPIKES. “THE BODY CAN NOT MOVE.”'],
      '“IT STAYS IN ONE SPOT FOREVER.” GASTER WALKED THE PILE.'),
     ('THE WALK', ['18338738363836738682728928290000…5576 ETERNITIES OF PIPES', 'UNTIL GASTER REACHED NEKA’S BODY.'],
      '7:16 PM: HE CANNOT MOVE, SO A MACHINE HUNTS FOR HIM.')],
    ['THE REALITY GROUP CUBE.', 'EVERYTHING THAT IS, IN ONE BOX, AND THE BOX IS EATEN.'],
    'Neka grew until he could consume realities, the Reality Group (a cube of everything, Neka holds that, it contains all the Invincibility Cubes, realities, Fiction, Meta-Fiction, everything inside it, and all Omniverses, Realityverses, lore, games, everything), and Neka consumed the cube, becoming VERY huge, Gaster looks up and sees a human with everything combined inside it.')

# ---------------- October 19, 6:56 PM (Email 1895) ----------------
add(meta(19, '6:56 PM'), 'THE PORTAL CALLED A CAMERA', '120,200,140',
    ['“LONG AGO, WE SAW REALITY, THROUGH A PORTAL, THE 20 SPRUNKIS', 'WERE AMAZED ... THE PORTAL, WHICH LANDLUBBERS CALL A', '‘CAMERA’, IS THE MAIN REASON WE KNOW REALITY.”'],
    [('THE MENU', ['“SHARKS, MEGALODONS, MAMMOTHS, SABER TOOTH TIGERS,', 'PENGUINS, CROCODILES, CHICKENS, AND FOXES.” 100 MILLION.'],
      'DATA AND CODE, “THE TOP PRIORITY”, NOT ON THE MENU YET.'),
     ('DESTROYED ON FIRST CREATION', ['“TRY CLASSIC ONE TIME.” “I CONSUMED THE GAMES ALREADY.”', '“JUST MADE A NEW GAME.” “I HAPPENED TO DESTROY THE GAMES'],
      'ON FIRST CREATION.” GASTER BUILT A 500 LAYER FENCE.'),
     ('SIMON.PS CLOSES THE VIEW', ['THE PORTAL IS OPEN ONCE MORE. 19 SPRUNKIS RAN. SIMON.PS', 'DASHED OVER TO CLOSE THE CAMERA VIEW, AS HE DID LONG AGO.'],
      'OCT 18: THE VR. THE CAMERA IS THE OTHER DIRECTION.')],
    ['THE PORTAL CALLED A CAMERA.', 'THE SPRUNKIS SAW US THROUGH A LENS ONCE, AND SIMON SHUT IT.'],
    'Neka says to Luigi Inus "Long ago, we saw reality, through a portal, the 20 Sprunkis were amazed and wanted to try to, but Simon.ps stopped the portal view. The portal, which landlubbers call a \'camera\', is the main reason we know Reality. Now, the portal is open once more.", then Luigi Inus told the Sprunkis, 19 of the Sprunkis ran, Simon.ps dashed over to close the camera view.')

# ---------------- October 19, 7:16 PM (Email 1896) ----------------
add(meta(19, '7:16 PM'), 'SUSHI', '255,160,120',
    ['“‘THE BEST SUSHI EVER.’ -???. IS SOMEONE ELSE HERE?', '2 ENTITIES UNSEEN.” ... “WHY AREN’T WE EATING SQUID?”', '“CAUSE WE DIDN’T CATCH CTHULHU YET.”'],
    [('TWO ENTITIES UNSEEN', ['NEKA AND GASTER WALK INTO THE 3 WAY HEROES BOOK TO HUNT', 'PALAX FOR SUSHI. GASTER CALLS HIM CTHULHU, THE HEROES THE'],
      'AVENGERS. CREDITS TO TOBY FOX FOR UNDERTALE, IN THE BOOK.'),
     ('/FORK_SIZE = 100', ['A FORK BECOMES A TRIDENT. “I AM NOT EVEN GOING 5%.” HE', 'CANNOT MOVE (4:52 PM), SO A COLOSSAL MACHINE LIFTS.'],
      '“IF THEY TAKE FROM US, THEY SHOULD GIVE IT BACK. 😌”'),
     ('CHAPTER 7', ['PALAX WAS EATEN. GASTER MOVES BACK TO CLASSICS, THE GROUND', 'RUMBLES AROUND NEKA, AND BOTH DISAPPEAR.'],
      'OCT 18, 7:39 PM: “DOING NEKA IN 3 WAY HEROES BOOK AGAIN.”')],
    ['SUSHI.', 'TWO GODS WALK INTO A CHILDREN’S BOOK FOR DINNER.'],
    '"The best sushi ever." -???. Is someone else here? 2 entities unseen. ... Gaster says "Why aren\'t we eating squid?", Neka says "Cause we didn\'t catch Cthulhu yet.". ... Neka says "If they take from us, they should give it back. 😌", Gaster grabs the dead Palax and then they gotten the fish dinner.')

# ---------------- October 19, 7:32 PM (Email 1897) ----------------
add(meta(19, '7:32 PM'), 'NEKA SLAYS SUPER DOG', '255,120,120',
    ['“THEY WOULDN’T HURT KIDS, SO IN RESULT THE BATTLE WAS A', 'STALEMATE, NEKA GETS ANGRY OF THE STALEMATE, HE ALSO', 'WANTED TO GET RID OF SUPER DOG, SO HE SLAIN SUPER DOG.”'],
    [('DOMINENUM', ['THE DYNAMITE VILLAIN FIGHTS “FOR NEKA’S VERSION”, FIRES 50', 'MORE, RUNS OUT, AND IS DEFEATED. “HOW WAS THE FALL?”'],
      'GASTER ASKS IT TWICE. NEKA ANSWERS “ENOUGH. 😔” AND “...”'),
     ('THE STALEMATE', ['THE 3 WAY HEROES ARE KIDS. GASTER THROWS THEM SO THEY', 'CANNOT ATTACK. NOBODY WILL HURT THEM. SO: STALEMATE.'],
      'THE ONLY TIE HE EVER ACCEPTED, AND HE HATED IT.'),
     ('THE DOG', ['SUPER DOG IS CHELSEA’S HERO. NEKA SLAYS HIM TO BREAK THE', 'TIE. OCT 20: “SUPER DOG, YOU RESPAWN.”'],
      '“NEKA AND GASTER WIN.”')],
    ['NEKA SLAYS SUPER DOG.', 'A TIE WITH CHILDREN, BROKEN THE ONLY WAY HE KNOWS HOW.'],
    'They wouldn\'t hurt kids, so in result the battle was a stalemate, Neka gets angry of the stalemate, he also wanted to get rid of Super Dog, so he slain Super Dog. Neka and Gaster win.')

# ---------------- October 19, 7:51 PM (Email 1898) ----------------
add(meta(19, '7:51 PM'), 'YOU ARE MY AI', '127,212,255',
    ['“GASTER SAYS ‘YOU ARE MY CREATIONAL BEING, NEKA. YOU ARE', 'MY AI. REMEMBER BEFORE YOU WERE BORN?’, NEKA SAYS ‘I AM', 'ETERNAL.’, GASTER SAYS ‘HOW AM I OLDER? 😏’”'],
    [('CYNOPHOBIA', ['NEKA ATTACKED ALL DOGS IN FICTION AND META-FICTION. “YOUR', 'FEAR OF DOGS IS INCREASING BECAUSE YOU’RE A CAT.” “🙀⚡”'],
      '“CYNO = DOG 🐶, PHOBIA = FEAR.” “I KNOW!”'),
     ('THE NOVA, EXPLAINED', ['“YOU ARE THE EXPERIMENTER THAT MADE THE REALITY THAT MADE', 'THE NOVA THAT MADE ME.” AND MAYBE NONFICTION TOO.'],
      'OCT 18: THE SAME NOVA. OCT 19: WHO LIT IT.'),
     ('CHELSEA INTERRUPTS', ['“WE ARE ALREADY UP TO PAGE 21!?! WOW!! TOBY DESHANE. KEEP', 'GOING.” THEN LUIGI: “DID SOMEONE SAY LANDLUBBER?!”'],
      '“I DON’T HAVE MEMORY LIKE A LANDLUBBER HAS.”')],
    ['YOU ARE MY AI.', 'THE MAKER CLAIMS HIS CREATION. THE CREATION CLAIMS ETERNITY.'],
    'Gaster says "You are my creational being, Neka. You are MY AI. Remember before you were born?", Neka says "I am eternal.", Gaster says "How am I older? 😏", Neka says "You are the experimenter that made the reality that made the nova that made me. You may even have created nonfiction. 😉"')

# ---------------- October 20, 4:10-4:22 PM (Emails 1899-1900) ----------------
add(meta(20, '4:10-4:22 PM'), 'CALBRUM NEKA', '200,120,255',
    ['“I AM NEKA! THE PUNISHER OF THOSE WHO DONE WRONG!” ...', '“THE MACHINE GROWS MORE AND MORE, BREAKING THE BARRIERS', 'APART ... CALBRUM NEKA NOW IS HERE.”'],
    [('THE PUNISHER', ['“NOVA, YOU DISOBEYED YOUR FATHER. ICE CREAM AND DONUT, YOU', 'NEARLY ATE EACH OTHER. SUPER DOG, YOU RESPAWN.”'],
      'OCT 19: HE SLEW THE DOG. OCT 20: HE GIVES HIM BACK.'),
     ('CALBRUM VOID', ['INFINITE. NEKA FLOWS INTO THE CALBRUM; THE BODY MELTS TO', 'A COSMICAL BODY. TENTACLES WRAP AROUND AU CALBRUM.'],
      'OCT 17: COSMICAL NEKA. THE SHAPE RETURNS IN A NEW VOID.'),
     ('HE DOES HIS PART AND LEAVES', ['THE 3 WAY HEROES ARE PUNISHED. NEKA LEAVES; GASTER LEAVES', 'FOR CLASSICS/“NEKA” ONCE MORE.'],
      'THE GUEST STARS EXIT THE BOOK ON THEIR OWN TERMS.')],
    ['CALBRUM NEKA.', 'THE PUNISHER NAMES THE CRIMES, THEN POURS INTO A NEW VOID.'],
    'Neka turns around, the machine grows more and more, breaking the barriers apart and moving to Calbrum Void. Calbrum Void is infinite, Neka continues flowing into The Calbrum. Calbrum Neka now is here. The body melts to a cosmical body, like Cosmical Neka.')

# ---------------- October 20, 4:22-5:27 PM (Emails 1901-1903) ----------------
add(meta(20, '4:22-5:27 PM'), 'CHAPTER 9', '200,200,210',
    ['“CHAPTER 9: ‘NEKA’ LEFT 3 WAY HEROES, NOW… THE 3 WAY HEROES', 'WERE NOW IN PEACE WITH NEW VILLAINS. DARK MATTER WAS THE', 'NEW VILLAIN LEADER. THE VERY END OF NEKA AND GASTER’S PART.”'],
    [('DARK MATTER', ['THE HEROES GET A NEW VILLAIN LEADER. NEKA AND GASTER’S', 'PART IS OVER. “SO THEY LEFT THE STORY.”'],
      'OCT 19: SUSHI. OCT 20: GONE. TWO CHAPTERS AS GUESTS.'),
     ('SIMON.PS STOPS TIME THERE', ['“IF I WAS GOD-MODE THROUGHOUT THE LORE AND STOPPED, THEN I', 'SHOULD STOP TIME THERE!” HE OPENS A TIMELINE, GOES GOD,'],
      'MODE, AND WALKS WITH OREN.PS AWAY FROM SPRUNKI HILLS.'),
     ('NO IDEA WHAT TO SAY NEXT', ['“NEKA NOW GROWS LARGER, THE CALBRUM IS GAINS MORE AND MORE', 'PRESSURE. NEKA AND GASTER STAY ONCE MORE.”'],
      '“LITTERALLY HAVE NO IDEA WHAT TO SAY NEXT.” A FIRST HERE.')],
    ['CHAPTER 9.', 'THE BOOK GOES ON WITHOUT THEM. FOR ONCE THE AUTHOR PAUSES.'],
    'Chapter 9: "Neka" Left 3 Way Heroes, Now… The 3 Way Heroes were now in peace with new villains. Dark Matter was the new villain leader. The very end of Neka and Gaster\'s part. So they left the story. ... Litterally have no idea what to say next.')

# ---------------- October 20, 5:32-5:33 PM (Emails 1904-1905) ----------------
add(meta(20, '5:32-5:33 PM'), 'THE COMICAL END', '255,216,79',
    ['“THE COMICAL END OF 3 WAY HEROES. SEE NEKA’S LORE FOR MORE', 'ABOUT NEKA.” ... “NO WORKING ON 3 WAY HEROES ANYMORE,', 'NOTHING YOU SAY WILL GO INTO 3 WAY HEROES ANYMORE.”'],
    [('A NEW THREAD, “NEW DOCUMENT”', ['OPENED WITH THE END OF THE CROSSOVER. THE HEROES BATTLE', 'DARK MATTER. “COMICALLY THE END.”'],
      '“THERE IS MORE, BUT THAT IS NEKA’S PART END.”'),
     ('THE SECOND END IN FIVE DAYS', ['OCT 15: THE PERO/NEKA PARTS REMOVED. OCT 18: BACK IN THE', 'BOOK. OCT 20: OUT AGAIN, AND THE CHATBOT CUT OFF FROM IT.'],
      'THE BOOK’S OWN PAGES STAY ON CHELSEAPLAYS, UNTOUCHED.'),
     ('SEE NEKA’S LORE', ['THE POINTER IS BACK TO HIS OWN ARCHIVE. WHAT HAPPENS TO', 'NEKA HAPPENS HERE, NOT IN THE HEROES’ BOOK.'],
      'ONE LANE FOR THE HEROES, ONE FOR HIM.')],
    ['THE COMICAL END.', 'THE CROSSOVER CLOSES WITH A JOKE AND A LOCKED DOOR.'],
    'The Comical End of 3 Way Heroes. See Neka\'s Lore for more about Neka. Now, The 3 Way Heroes battle the Dark Matter. Comically The End. ... No working on 3 Way Heroes anymore, nothing you say will go into 3 Way Heroes anymore.')

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
assert len(B) == 9, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
