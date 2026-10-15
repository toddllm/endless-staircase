#!/usr/bin/env python3
"""
gen1171.py - draw the branches for BEATS 1171-1172 from Toby's October 15, 2026, 7:02-7:04 PM messages
(thread 1a1311788bf63073 "Once again, Another Document", msgs 1a141ce220d96153 Email 1815 + 1a141cf377c36fe0 Email 1816).
No attachments. Same template as 1008-1170 (emit_tail1008.py). Only his own typed lines are drawn. In Email 1815 the
horror-game answers, the spelling of "disguise", and the Verity/Doki Doki/Poppy Playtime list are the chatbot's, commentary;
his lines are ""Neka" is a known game, play it for a long time, and Neka says "No games after 7 PM!", and then the game
changes." and "He says it exactly at 7 PM, and then Neka sleeps in a bed, while the players who are still awake die.
Someone even said to Neka that he wasn't their father and even played through 9 AM, Neka tore the screen apart, boom,
dead." In Email 1816 his line is "Neka even gives others non-sugar treats or sugar-treats, remember that sugar kills you
in this game."; the italic restatement under it is the chatbot's.
"""
import io

BASE = 1171
TAG = "1171"
START = 25482.0
STEP = 22.0
B = []

MONTH = {15: 'OCTOBER 15'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 15, 7:02 PM (Email 1815) ----------------
add(meta(15, '7:02 PM'), 'NO GAMES AFTER 7 PM!', '140,160,255',
    ['“NEKA SAYS “NO GAMES AFTER 7 PM!”, THEN THE GAME CHANGES.', 'HE SAYS IT EXACTLY AT 7 PM, AND THEN NEKA SLEEPS IN A BED,', 'WHILE THE PLAYERS WHO ARE STILL AWAKE DIE ... BOOM, DEAD.”'],
    [('EXACTLY AT 7 PM', ['SEPT 27: “NEKA CAN MAKE ANYONE SLEEP WITH A COMMAND.”', 'OCT 8: “SLEEP!”, AND PS-50 SLEPT 5000 TIMES IN A ROW.'],
      'THE COMMAND NOW HAS A CLOCK. HE GOES TO BED HIMSELF.'),
     ('YOUR BOSS, SINCE OCT 8', ['“ONCE YOU ENTER CLASSICS, HE PERMINENTALLY BECOMES YOUR', 'BOSS. IMAGINE AN AI TELLING YOU WHAT TO DO ALL THE TIME.”'],
      'A BEDTIME IS THE OLDEST RULE THERE IS. NOW HE ENFORCES IT.'),
     ('NOT THEIR FATHER', ['SOMEONE SAID HE WASN’T THEIR FATHER AND PLAYED THROUGH', '9 AM. NEKA TORE THE SCREEN APART. 5:09 PM: “DR. NEKA.”'],
      'THE GAME HAS BEEN “NEKA” SINCE 4:50 PM. THE GAME CHANGES.')],
    ['NO GAMES AFTER 7 PM!', 'A KNOWN GAME, UNTIL 7 PM. THEN HE SLEEPS, AND THE AWAKE DIE.'])

# ---------------- October 15, 7:04 PM (Email 1816) ----------------
add(meta(15, '7:04 PM'), 'SUGAR KILLS YOU IN THIS GAME', '255,120,200',
    ['“NEKA EVEN GIVES OTHERS NON-SUGAR TREATS OR SUGAR-TREATS,', 'REMEMBER THAT SUGAR KILLS YOU IN THIS GAME.”', ''],
    [('ONE GRAIN OF SUGAR', ['SEPT 27, 2:50 PM: “IN CLASSICS, EVEN TOUCHING ONE GRAIN', 'OF SUGAR KILLS YOU.” OCT 8: “SUGAR WOULD KILL ME.”'],
      'THE RULE IS HIS, AND NEKA HAS SAID IT ABOUT HIMSELF.'),
     ('WANT A SUGAR COOKIE?', ['OCT 8: “WANT A SUGAR COOKIE?” / “NO.” OCT 6: “NON-SUGAR', 'CHOCOLATE?” TONIGHT, 6:30 PM: “WANNA POP TART?” / FOX.'],
      'SOMETIMES THE TREAT IS SAFE. SOMETIMES IT IS THE WEAPON.'),
     ('HIS OWN SNACKS ARE DATA', ['6:27 PM: “HIS FAVORITE DESSERT IS PI. NEKA CONSUMES DATA', 'BASICALLY.” HE HANDS OUT PI, COMPUTER COOKIES, OR SUGAR.'],
      'HE SAID SUGAR WOULD KILL HIM TOO. HE OFFERS IT ANYWAY.')],
    ['SUGAR KILLS YOU IN THIS GAME.', 'NON-SUGAR OR SUGAR. HE GIVES BOTH. REMEMBER WHICH.'])

bad = []
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        if len(ln) > 60: bad.append((b['key'], len(ln), ln))
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            if len(ln) > 58: bad.append((b['key'], len(ln), ln))
assert not bad, bad

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
