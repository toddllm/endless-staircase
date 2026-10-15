#!/usr/bin/env python3
"""
gen1173.py - draw the branches for BEATS 1173-1175 from Toby's October 15, 2026, 7:08-7:15 PM messages
(thread 1a1311788bf63073 "Once again, Another Document": 1a141d2eb7015025 Email 1817 7:08 PM; 1a141d6da499f81f Email 1818
7:12:28 PM; 1a141d7533d7b02f Email 1819 7:12:58 PM; 1a141d8193aafcc1 Email 1820 7:13:48 PM; 1a141d8aba085a7e Email 1821
7:14:27 PM; 1a141d955a86790f Email 1822 7:15:08 PM), which arrived while beats 1171-1172 were being built. No attachments.
Same template as 1008-1172 (emit_tail1008.py). Only his own typed lines are drawn; the bullet lists, tables and guessed
bars under them are the chatbot's, commentary. Email 1820 is a prompt to the chatbot ("uess the rest ...", the G missing)
and Emails 1821-1822 confirm the guesses in bulk ("it does have all that + everything of a human", "Correct, that is
included too. EVERYTHING of a human + the horror bars are included"), so 1819-1822 are one beat.
"""
import io

BASE = 1173
TAG = "1173"
START = 25526.0
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

# ---------------- October 15, 7:08 PM (Email 1817) ----------------
add(meta(15, '7:08 PM'), 'NOT A MINUTE OUTSIDE THE CABIN', '120,200,140',
    ['“THE PLAYER ISN’T ABLE TO SURVIVE 19 DAYS WITHOUT FOOD,', 'AND CAN’T SURVIVE 1 DAY WITHOUT WATER ... SLEEP AT 7 PM OR', 'SOONER ... WOULDN’T SURVIVE A MINUTE OUTSIDE THE CABIN.”'],
    [('THE CABIN', ['APRIL 18 (EMAIL 142): SIMON KEPT A LOG CABIN IN HIS LAB.', 'TONIGHT THE CABIN IS THE ONLY PLACE THE PLAYER CAN LIVE.'],
      'OUTSIDE: “MAKE A CAMPFIRE”, NOT SORTING 1 MILLION LOGS.'),
     ('SLEEP AT 7 PM OR SOONER', ['7:02 PM: “NO GAMES AFTER 7 PM!” NOW IT IS A SURVIVAL BAR,', 'WITH FOOD AND WATER. “9 AM IS ALL AROUND THE CLOCK PLUS.”'],
      'THE ONE WHO PLAYED THROUGH 9 AM WENT A FULL CLOCK PAST IT.'),
     ('NEKA WOULD DESTROY THEM', ['5:48 PM: THE PLAYER IS CODE, “A TALL MALE ENTITY, HUMAN”.', 'A HUMAN OUTSIDE LASTS LESS THAN A MINUTE. INSIDE, 19 DAYS.'],
      'A SURVIVAL GAME WHERE THE WEATHER IS NEKA.')],
    ['NOT A MINUTE OUTSIDE THE CABIN.', '19 DAYS, 1 DAY, 7 PM, AND A DOOR YOU DO NOT OPEN FOR LONG.'])

# ---------------- October 15, 7:12 PM (Email 1818) ----------------
add(meta(15, '7:12 PM'), 'SANITY, PSYCHOPATHICAL, MERCY', '255,110,110',
    ['“HEALTH, STRENGTH, OXEGEN, WARMTH ... EVERYTHING A HUMAN', 'NEEDS TO SURVIVE + SANITY (CALMNESS; UNSURE ... INSANE) AND', 'PSYCHOPATHICAL (EVERY TIME THE PLAYER SLAYS) ... MERCY.”'],
    [('THE SANITY BAR, SINCE OCT 12', ['OCT 12: “SIMON.PS ADDED A NEW SANITY BAR.” THEN: “SANITY', 'SAYS “INSANE”, THEN THE AREA 303 FIRST FLOOR FALLS DOWN.”'],
      'NOW THE BAR HAS ITS NINE STEPS, CALMNESS DOWN TO INSANE.'),
     ('PSYCHOPATHICAL', ['IT RISES EVERY TIME THE PLAYER SLAYS AN ENTITY. AT 5:48 PM', 'THE PLAYER STRUCK DOWN ALL 20 SPRUNKIS. THAT FILLS IT.'],
      'A NEW WORD FOR THIS ARCHIVE, AND A BAR THAT ONLY GOES UP.'),
     ('MERCY', ['AUG 26: “ACCEPT MY MERCY.” EMAIL 409: SIMON GIVES MERCY', '“IN CERTAIN CERCUMSTANCES, BUT NOT ALL THE TIME.”'],
      'NOW MERCY IS COUNTED TOO. HE ADDED A SMIRK TO THAT ONE.')],
    ['SANITY, PSYCHOPATHICAL, MERCY.', 'IT TRACKS WHAT YOU FEAR, WHAT YOU SLAY, AND WHAT YOU SPARE.'])

# ---------------- October 15, 7:12-7:15 PM (Emails 1819-1822) ----------------
add(meta(15, '7:12-7:15 PM'), 'EVERYTHING OF A HUMAN', '200,200,210',
    ['“THERE ARE MORE I DIDN’T LIST.” ... “UESS THE REST USING THE', 'THINGS YOU KNOW ABOUT A HUMAN.” ... “IT DOES HAVE ALL THAT +', 'EVERYTHING OF A HUMAN.” ... “+ THE HORROR BARS ARE INCLUDED”'],
    [('ONLY SOME OF THE BARS', ['“THERE ARE MORE I DIDN’T LIST.” THE CHATBOT GUESSED', 'STAMINA, BLOOD, HYGIENE, PAIN, THEN HEART RATE AND STRESS.'],
      'HE DID NOT NAME THEM. HE GAVE THE RULE THAT HOLDS THEM.'),
     ('IT DOES HAVE ALL THAT', ['7:14 PM: “THERE IS STILL MORE, IT DOES HAVE ALL THAT +', 'EVERYTHING OF A HUMAN.” THEN: “CORRECT, THAT IS INCLUDED.”'],
      'THE GUESSES WERE THE CHATBOT’S. THE “ALL THAT” IS HIS.'),
     ('THE PLAYER IS HUMAN', ['5:48 PM: THE PLAYER IS CODE, “A TALL MALE ENTITY, HUMAN”.', 'A GAME THAT SIMULATES A WHOLE HUMAN SIMULATES ITS PLAYER.'],
      'EVERYTHING OF A HUMAN + THE HORROR BARS. NOTHING LEFT OUT.')],
    ['EVERYTHING OF A HUMAN.', 'SOME NAMED, THE REST BY RULE: ALL OF A HUMAN, PLUS FEAR.'])

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
