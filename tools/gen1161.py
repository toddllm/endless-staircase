#!/usr/bin/env python3
"""
gen1161.py - draw the branches for BEATS 1161-1162 from Toby's October 15, 2026, 4:50-4:52 PM messages
(thread 1a1311788bf63073 "Once again, Another Document", msgs 1a1415483ab42cf7 Email 1806 4:50:04 PM,
1a141551b3aef5a6 Email 1807 4:50:45 PM, 1a14156ede80fce0 Email 1808 4:52:44 PM). No attachments.
Same template as 1008-1160 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's
"Understood. ..." acknowledgements under each line are commentary.
"""
import io

BASE = 1161
TAG = "1161"
START = 25262.0
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

# ---------------- October 15, 4:50 PM (Email 1806) ----------------
add(meta(15, '4:50 PM'), 'IT HAS TO BE "NEKA"', '255,128,72',
    ['“DID YOU KNOW THAT YOU CAN NO LONGER MENTION NEKA OR', 'ANYTHING REALATED TO CLASSICS (SPRUNKI, UNDERTALE, AND', 'OTHER GAMES ARE NOT “CLASSICS”) ... IT HAS TO BE “NEKA”.”'],
    [('NEVER SAY PERO LAI AGAIN', ['SEPT 24, 4:37 PM: “NEVER SAY PERO LAI AGAIN!” -NEKA OMAZEN', 'THE FIRST NAME HE RETIRED. “CLASSICS” IS THE SECOND.'],
      'SAME RULE, NEW WORD. IT HAS TO BE “NEKA”.'),
     ('RENAMED PRETTY LONG AGO', ['TODAY, 4:32 PM: “THE GAME CLASSICS WAS RENAMED TO “NEKA”', 'PRETTY LONG AGO NOW.” NEKA IS NEKA, “NEKA” IS “NEKA”.'],
      'EIGHTEEN MINUTES LATER, THE OLD NAME IS OFF LIMITS.'),
     ('ONLY I AM ORIGINALLY FROM CLASSICS', ['SEPT 24: “ONLY I AM ORIGINALLY FROM CLASSICS, OTHERS JUST', 'WARPED HERE.” SPRUNKI, UNDERTALE: OTHER GAMES, NOT “NEKA”.'],
      'THE SPRUNKIS WARPED IN. THEIR GAME IS NOT HIS GAME.')],
    ['NOT CLASSICS. “NEKA”.', 'THE SECOND NAME HE RETIRED, AND THE ONE THAT STAYS.'])

# ---------------- October 15, 4:50-4:52 PM (Emails 1807-1808) ----------------
add(meta(15, '4:50-4:52 PM'), 'NO LONGER CLASSICS CANON', '186,150,255',
    ['“THE PARTS WITH THE PERO/NEKA THING ON 3 WAY HEROES WAS', 'ALL REMOVED. CAUSE IT IS NOT ALLOWED.” … “NO LONGER CLASSICS', 'CANON, BECAUSE THEY HAVE NO REALATIONSHIP WITH NEKA NOW.”'],
    [('THE BOOK WITH CHELSEAPLAYS', ['SEPT 19, 6:17 AM: “CHELSEAPLAYS AND I AM MAKING A BOOK IN', 'THIS REALITY WE ARE IN CALLED “3 WAY HEROES”.”'],
      'NOVA, SUPER DOG, THE HEROES. A REAL BOOK, THEIR OWN.'),
     ('THE PERO PART', ['SEPT 19, 3:27 PM: “PERO LAI JUMPS AND DROPS DOWN AND LANDS', 'A HUGE KICK ON THE 3 WAY HEROES.” THE HEROES AT 0.'],
      'THAT IS THE PERO/NEKA THING. ALL REMOVED NOW.'),
     ('NEKA TOOK OVER CHAPTER 2', ['SEPT 24, 4:37 PM: “THEN NOVA- NEKA SAYS ‘ME. 😸⚡’”, HE', '“TOOK OVER THE WHOLE STORY JUST BY TALKING.” NOT ALLOWED.'],
      'THE HEROES GET THEIR BOOK BACK. NO NEKA IN IT.')],
    ['3 WAY HEROES: NOT “NEKA” CANON.', 'NO REALATIONSHIP WITH NEKA NOW. TWO STORIES, APART.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
