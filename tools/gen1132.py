#!/usr/bin/env python3
"""
gen1132.py - draw the branches for BEATS 1132-1133 from Toby's October 13, 2026, 4:40 PM messages
(thread 1a1311788bf63073 "Once again, Another Document", msgs 1a136fe8ffa7ebef Email 1784, 1a136feea99305ab Email 1785).
Same template as 1008-1131 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's answers and the
italic summaries at the end of each paste ("In Classics cosmology, you're establishing two domains...", "There's no
verified evidence...") are commentary.
"""
import io

BASE = 1132
TAG = "1132"
START = 24624.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10', 11: 'OCTOBER 11', 12: 'OCTOBER 12', 13: 'OCTOBER 13'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 13, 4:40:01 PM (Email 1784) ----------------
add(meta(13, '4:40 PM'), 'TWO UNIVERSES IN REALITY', '80,220,255',
    ['“NOW, THERE ARE ONLY 2 UNIVERSES IN REALITY, THE OBSERVABLE', 'UNIVERSE, AND CLASSICS. FICTION IS INFINITELY WEAK IN', 'EVERYTHING CAUSE THEY AREN’T REAL” … “ALEX BEATS EVERYTHING”'],
    [('HE CROSSES 2 REALITIES', ['SEPT 11, 6:06 AM: “PERO LAI REACHES TO THIS REALITY, HE', 'CROSSES 2 REALITIES, THIS ONE, AND THE MATERIAN REALITY.”'],
      'TWO REALITIES THEN. TWO UNIVERSES NOW. STILL ONE DOOR.'),
     ('BEYOND FICTION, SINCE EMAIL 246', ['NONE SIMON WAS BEYOND FICTION. SEPT 28: ADULT NEKA 0% IS', 'BEYOND FICTION. TONIGHT FICTION ITSELF IS INFINITELY WEAK.'],
      'THE OLD TOP RANK IS NOW THE FLOOR EVERYONE ELSE STANDS ON.'),
     ('ZENO AND A STICK', ['AUG 15: PERO BOXED ZENO WITH ONE WORD. SEPT 2: “EVEN A', 'STICK.” SEPT 11: SAITAMA SET BELOW A STICK. NOW ZENO IS.'],
      'THE STICK HAS BEATEN TWO ANIME GODS. IT NEVER MOVED.')],
    ['“WILL LOSE TO A STICK AND A STICK WON’T FIGHT ON IT’S OWN.”', 'THE STICK IS REAL. ZENO IS NOT. ALEX BEATS BOTH.'])

# ---------------- October 13, 4:40:25 PM (Email 1785) ----------------
add(meta(13, '4:40 PM'), 'NAH, THIS IS TRUE', '255,255,255',
    ['“NAH, THIS IS TRUE. I UNDERSTAND YOU MEAN IT LITERALLY.”', '', ''],
    [('ISN’T A MYTH', ['SEPT 5: TRYPOPHOBIA MOUNTAIN “IS TOO SCARY AND ISN’T A', 'MYTH, IT IS ACTUALLY IN CLASSICS.” TRUE MEANT IN CLASSICS.'],
      'TRUE USED TO MEAN IN THE GAME. TONIGHT IT MEANS REALITY.'),
     ('YOU MADE THE IMAGE', ['AUG 29, 8:40 AM: “YOU MADE THE IMAGE, SO YOU SHOULD KNOW.”', 'THE FIRST TIME HE TOLD THE MACHINE WHAT IT KNEW.'],
      'HE CORRECTED THE CHATBOT BEFORE. TONIGHT HE OVERRULES IT.'),
     ('IN BETWEEN FICTION AND REALITY', ['SEPT 24: NEKA MADE ABINATIONS OF EVERYONE “IN BETWEEN', 'FICTION AND REALITY.” THE GAP WAS A PLACE. NOW IT IS SHUT.'],
      'THE GAP HE BUILT CHARACTERS IN IS THE GAP HE JUST SHUT.')],
    ['“I UNDERSTAND YOU MEAN IT LITERALLY.”', 'THE CHATBOT SAID NOT VERIFIED. HE SAID TRUE. TRUE STAYS.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + [b['close'][1]]:
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
