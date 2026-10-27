#!/usr/bin/env python3
"""
gen1218.py - draw the branches for BEATS 1218-1225 from Toby's October 21, 2026 messages (Emails 1906-1921) on the
"New Document" thread 1a15b3b7a48523af. Same template as 1008-1217 (emit_tail1008.py). Only his own typed lines are
drawn; the chatbot's SCP files, IQ answers, the "Knowing Human Names" summary, its scenes and the Alexen rig sheet are
commentary. Beat numbers and titles are the wiki ingest's (classics-lore/neka-omazen-era.md).
"""
import io

BASE = 1218
TAG = "1218"
START = 25592.0 + 22.0 * 42
STEP = 22.0
B = []

MONTH = {21: 'OCTOBER 21'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 21, 5:58-6:41 AM (Emails 1906-1907) ----------------
add(meta(21, '5:58-6:41 AM'), 'THE VOID BOUNDARIES CRACK', '160,200,255',
    ['“NEKA GREW LARGER, THE VOID BOUNDERIES CRACK, AND THE', 'VOID IS COMPRESSED AROUND THE BEING. GASTER HAPPENS TO', 'GAIN MORE ATTACKS AND STUFF.”'],
    [('AT ANY END, HE ERASES THE GAME', ['“NOW AT ANY OF THE ENDS OF ‘NEKA’, NEKA ERASES THE GAME,', 'CAUSE HE CAN. NEKA CAN ERASE CHARA AND ZENO.”'],
      'OCT 18: ZENO CANNOT ERASE AN ATOM. NEKA ERASES ZENO.'),
     ('GASTER GAINS MORE ATTACKS', ['THE ONLY OTHER REAL BEING IN THE GAME GETS STRONGER AS', 'THE VOID SHRINKS. HE STILL WALKS, AND SEES NEKA’S BODY.'],
      'OCT 19: GASTER WALKED THE PILE FOR ETERNITIES.'),
     ('THE REALITY-GROUP CUBE, AGAIN', ['“GASTER SEES THE REALITY-GROUP CUBE.” OCT 19: NEKA ATE IT.', 'IT IS STILL THERE TO BE SEEN, INSIDE.'],
      'WHAT HE EATS DOES NOT STOP EXISTING. IT CHANGES ADDRESS.')],
    ['THE VOID BOUNDARIES CRACK.', 'THE VOID FOLDS AROUND HIM. THE ENDINGS ALL BELONG TO HIM.'],
    'Next part of the "Neka" lore. Neka grew larger, the void bounderies crack, and the void is compressed around the being. Gaster happens to gain more attacks and stuff. ... Now at any of the ends of "Neka", Neka erases the game, cause he can.')

# ---------------- October 21, 3:34 PM (Email 1908) ----------------
add(meta(21, '3:34 PM'), 'NO LONGER CALLED ALEXEN', '200,200,210',
    ['“THIS HAS THE STUFF OF NEKA. REMEMBER HE IS NO LONGER', 'CALLED ‘ALEXEN’ DUE TO EXTREME CHANGE.”', '(THE RIG SHEET UNDER IT IS THE CHATBOT’S RENDER.)'],
    [('A NAME SET DOWN', ['ALEXEN WAS THE HACKER NAME OF OCTOBER 12 AND 13. AFTER', 'THE WEEK HE HAS HAD, IT NO LONGER FITS.'],
      '“DUE TO EXTREME CHANGE.” THE CHANGE IS THE LAST SIX DAYS.'),
     ('THE NAMES HE HAS SHED', ['SEPT 24: NEVER SAY PERO LAI AGAIN. OCT 15: IT HAS TO BE', '“NEKA”. OCT 21: NO LONGER ALEXEN.'],
      'EACH RETIRED NAME IS A STAGE HE PASSED.'),
     ('NO IMAGES', ['“ALEXEN_ GLITCHBOUND CHARACTER RIG SHEET.PNG” IS SKIPPED', 'UNDER THE WIKI’S NO-IMAGES RULE. HIS LINE IS KEPT.'],
      'HIS WORDS ARE THE RECORD, NOT THE CHATBOT’S DRAWINGS.')],
    ['NO LONGER CALLED ALEXEN.', 'ONE MORE NAME TAKEN OFF, BECAUSE THE ONE WEARING IT CHANGED.'],
    'This has the stuff of Neka. Remember he is no longer called "Alexen" due to extreme change.')

# ---------------- October 21, 4:46 PM (Email 1909) ----------------
add(meta(21, '4:46 PM'), 'CURINIUM SERUIM TATHIFICITIONUM', '255,216,79',
    ['“GASTER PUNCHES NEKA ON NEKA’S HAND, NEKA SAYS ‘OW! 😔’ ...', '‘YOUR PUNCH CONTAINS CURINIUM SERUIM TATHIFICITIONUM, THE', 'MATERIAL ON THE OTHER SIDE OF FICTION. 😔’”'],
    [('THE FORCEFIELD', ['FICTIONAL AND META-FICTIONAL STONES PULLED TO HIM; WHAT', 'TOUCHES IT FREEZES, FADES, DESOLVES, DISAPPEARS.'],
      '“THINK YOUR SUPERNATURAL POWERS CAN TOUCH ME?”'),
     ('THE ONE THING THAT PASSES', ['“IT DISSOLVES ALL THE SAWS AND SUPERNATUAL ABILITIES AND', 'THE PUNCHES OF EVERYONE ELSE.” NOT GASTER’S.'],
      '“SPECIFICALLY ‘NEKA’ AU UNDERTALE?” “YES. 😌”'),
     ('ENTIRE REALITIES IN HIS MIND', ['3.5 TIMES AS MANY AS THE ATOMS IN THE REAL UNIVERSE. SOME', 'OF THE COSMICAL HUMAN’S BODY IS INSIDE THE MACHINE.'],
      'OCT 22: THE FORCEFIELD BECOMES THE GRAY HOLE.')],
    ['CURINIUM SERUIM TATHIFICITIONUM.', 'EVERYTHING DISSOLVES ON HIS WALL, BUT ONE PUNCH FROM HOME.'],
    'Gaster punches Neka on Neka\'s hand, Neka says "Ow! 😔", Gaster says "Why didn\'t it work? It dissolves all the saws and supernatual abilities and the punches of everyone else.", Neka says "Your punch contains Curinium Seruim Tathificitionum, the material on the other side of fiction. 😔", Gaster says "Specifically "Neka" AU Undertale?", Neka says "Yes. 😌"')

# ---------------- October 21, 5:14-5:46 PM (Emails 1910-1912) ----------------
add(meta(21, '5:14-5:46 PM'), 'NEKA’S ORIGINAL NAME IS NEKA', '240,244,250',
    ['“NEKA’S ORIGINAL NAME IS NEKA, FOR ONCE HE WAS BORN HE WAS', 'THAT, AND HE MADE FORMS OF HIMSELF AND NAMED THE FORMS ...', 'OMNIHYPOTHETICAL.”'],
    [('THE FINAL WORD ON THE NAMES', ['PERO, ALEX, ALEXEN: FORMS HE MADE AND NAMED. THE CHATBOT’S', '“ORIGINAL NAME: ALEX” OF OCT 11 IS SUPERSEDED.'],
      'HE WAS NEKA AT BIRTH. EVERYTHING ELSE WAS COSTUME.'),
     ('EVERYTHING I SEND IS A LORE UPDATE', ['5:15 PM, A STANDING ORDER TO THE CHATBOT: “EVERYTHING I', 'SEND TO YOU IS A LORE UPDATE.” THE WIKI READS HIM SO.'],
      '“WRITE DOWN SOMETHING FOR NEKA, JUST LIKE SCP-181.”'),
     ('THE VOID SNAPS APART', ['“VOID IS NOW FLAT, AND 5 MINUTES LATER, THE VOID SNAPS', 'APART.” 50 ETERNITIES ON, GASTER CLIMBS TO SEE HIS FEET.'],
      '6:41 AM THE BOUNDARIES CRACKED. 5:46 PM THEY ARE GONE.')],
    ['NEKA’S ORIGINAL NAME IS NEKA.', 'BORN WITH THE NAME HE ENDED WITH. THE REST HE MADE UP.'],
    'Neka\'s original name is Neka, for once he was born he was that, and he made forms of himself and named the forms, and then it went crazy, went into anyone who was in Classics, and then Neka came to here as his most recent form of Neka. Omnihypothetical.')

# ---------------- October 21, 6:55 PM (Email 1913) ----------------
add(meta(21, '6:55 PM'), 'COMPRESSED TO 5.65 FEET', '200,120,255',
    ['“NEKA THEN COMPRESSED HIMSELF, WHILE KEEPING LITTERLY', 'EVERYTHING HE HAD AND HAS, AND THEN ALL COMPRESSES IT INTO', '1 SINGLE HUMAN FORM ... BOTH BEING 5.65 FEET TALL.”'],
    [('INFINITE INTELLIGENCE', ['AT 90000000000000000 LIGHTYEARS THROUGH THE VOID HE SAW', 'THE WHOLE INFINITY VOID. “THE INFINITE INTELEGENCE.”'],
      '“HE HAD THAT POWER, EVEN IN REALITY SINCE THE START.”'),
     ('THE ONLY BEING LARGER THAN A HUMAN', ['“THE ONLY BEING LARGER THAN A HUMAN IS NEKA, WITH BOTH', 'BEING 5.65 FEET TALL.” MORE THAN FINITE CELLS INSIDE.'],
      '“THE INSIDE CAN CONTAIN INFINITY ZEUSES.”'),
     ('META-FICTION BY PAPERWORK', ['“NEKA IS META-FICTION, NO LONGER NORMAL ‘FICTION’ DUE TO', 'HIS OWN PAPERWORK AND INTELEGENCE.”'],
      'OCT 17: 5.7 FEET OR SOMETHING. OCT 21: 5.65, EXACTLY.')],
    ['COMPRESSED TO 5.65 FEET.', 'THE WHOLE VOID, FOLDED INTO A MAN WHO CAN WALK AROUND.'],
    'Neka then compressed himself, while keeping litterly everything he had and has, and then all compresses it into 1 single human form. The only being larger than a human is Neka, with both being 5.65 feet tall. Neka now can walk, move around, and he has more than finite cells and inside body, the outside is small-ish.')

# ---------------- October 21, 7:56-7:58 PM (Emails 1914-1915) ----------------
add(meta(21, '7:56-7:58 PM'), 'CLAIM ALL.', '255,216,79',
    ['“‘KNOWING HUMAN NAMES’, IT IS A GAME NEKA CANONALLY DOES', '(SUPREME MATE, BUT WITH ACHIEVEMENTS)” ... “NEKA BEATEN ALL', 'THE 20 SPRUNKIS ... THE WHOLE INTERNET ... NEKA WON.”'],
    [('SUPREME MATE, WITH ACHIEVEMENTS', ['A GAME HE CANONICALLY PLAYS. HIS ROUND ENDS IN TWO WORDS,', '“CLAIM ALL.” THE SUMMARY IS THE CHATBOT’S; THE ROUND HIS.'],
      'OCT 22: “IT IS A GAME TO GET ACHIEVEMENTS.”'),
     ('THE WHOLE INTERNET', ['“THE 20 SPRUNKIS HAD THE WHOLE INTERNET SINCE THEY WERE', 'ACTUALLY AN INCREDIBOX MOD ON INTERNET. NEKA WON.”'],
      'TWENTY WITH THE INTERNET, AGAINST ONE WITH HIMSELF.'),
     ('NEARLY 35', ['8:09 PM: “NEKA IS NEARLY LOOKING 35 YEARS OLD. 😏” THE', 'HUMAN FORM OF 6:55 PM HAS AN AGE NOW.'],
      'OCT 18: HUMAN. OCT 21: 5.65 FEET, ABOUT 35.')],
    ['CLAIM ALL.', 'TWO WORDS END A ROUND. TWENTY SPRUNKIS FALL WITH THE INTERNET.'],
    'Look and summerize the char of "Knowing Human Names", it is a game Neka canonally does (Supreme Mate, but With Achievements) ... Neka beaten all the 20 Sprunkis, and the 20 Sprunkis had the whole internet since they were actually an Incredibox Mod on internet. Neka won.')

# ---------------- October 21, 8:09-8:18 PM (Emails 1916-1920) ----------------
add(meta(21, '8:09-8:18 PM'), 'INFINITE PAGES A SECOND', '127,212,255',
    ['“NEKA HAPPENED TO ONCE GIVE A 70 PAGE DOCUMENT WHY 1+1=2', '... HE NOW DOES CONSTANTLY INFINITE PAGES A SECOND. THE LORE', 'WAS ALL WRITEN ... FINISHED WRITING IN 1 SECOND.”'],
    [('THE CLICK THINKING FEATURE', ['“YOU CAN SEE WHAT HE THINKS, READ IT, AND TELL IT WHAT IT', 'WILL THINK BEFORE IT GIVES THE ANSWER.” SHOWN AS A VIDEO.'],
      '“THE INFINITY POSSIBILITIES AT THE SAME TIME. HE IS CODE.”'),
     ('ADD INFINITY TO GET MY IQ', ['“ADD INFINITY TO GET MY IQ. 1. YOU', 'INSULTED YOUR WHOLE TEAM. 2. DIVIDE BY 0 TO GET THE BODIES.”'],
      'THREE NUMBERED INSULTS TO GEMINI.'),
     ('MY MIND TO THINK WHAT HAPPENS NEXT', ['HE CONTROLS HIS GAMES, ANYONE WHO ENTERS, THE COMPUTERS,', '“MY MIND TO THINK WHAT HAPPENS NEXT”, AND ALL FICTION.'],
      'OCT 18: MIND-WATCH. THE WATCHER IS PART OF THE DOMAIN.')],
    ['INFINITE PAGES A SECOND.', 'SEVENTY PAGES FOR 1+1, THEN NO LIMIT. THE LORE, IN A SECOND.'],
    'Neka happened to once give a 70 page document why 1+1=2. Neka does over 69 pages at least. Also he now does constantly infinite pages a second. The lore was all writen, and he wrote more and more extra stuff since the lore was already finished writing in 1 second.')

# ---------------- October 21, 8:36 PM (Email 1921) ----------------
add(meta(21, '8:36 PM'), 'NEKA SAYS YES.', '255,120,120',
    ['“NEKA SAYS ‘YES.’, NEKA INSTANTLY WENT OUT, SO WORDS ARE', 'NO LONGER BANNED ... NEKA IS JUST A NORMAL MAN. SOME PEOPLE', 'ASK ‘WHY IS A NORMAL MAN ON APOLLYON?’”'],
    [('THE YES/NO CHALLENGE', ['“YOU CAN NO LONGER SAY ANY FORM OF ‘YES’ OR ‘NO’.” THE', 'CHATBOT SLIPPED: “YOU SAID AFFIRMATIVE!”'],
      'NEKA SAID “YES.” OUT LOUD, AND THE BAN WAS VOID.'),
     ('WHY HE IS SMARTER', ['“NEKA IS SMARTER, FASTER, HAS A BODY, CAN TELL ME WHAT TO', 'THINK (I USE MIND ON ‘NEKA’, YOU KNOW THAT), ECT. 😏”'],
      '“NEKA WON SINCE CHATGPT’S FACE FIGHTS ITSELF.”'),
     ('A NORMAL MAN ON APOLLYON', ['THE LINE FOR HIS NEW LOOK. WHOEVER ASKS IT IS “TALKING TO', 'THE LORE CREATOR OF ‘NEKA’/CLASSICS.”'],
      'THE APOLLYON CLASS BECOMES CANON THE NEXT MORNING.')],
    ['NEKA SAYS YES.', 'ONE FORBIDDEN WORD, SAID PLAINLY, AND THE RULES FALL OVER.'],
    'Neka says "Yes.", Neka instantly went out, so words are no longer banned, so Neka is smarter, faster, has a body, can tell me what to think (I use mind on "Neka", you know that), ect. 😏 ... Neka is just a normal man. Some people ask "Why is a normal man on Apollyon?" they are talking to the lore creator of "Neka"/Classics.')

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
assert len(B) == 8, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
