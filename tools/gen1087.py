#!/usr/bin/env python3
"""
gen1087.py - draw the branches for BEATS 1087-1089 from Toby's October 12, 2026, 8:23 AM message
(thread 1a1204179c8e973f "Another Document", msg 1a13011b86fa5f5d, Email 1749). Same template as
1008-1086 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's rankings, the Roblox
John/Jane Doe history and the italic restatement at the end are commentary.
"""
import io

BASE = 1087
TAG = "1087"
START = 23634.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10', 11: 'OCTOBER 11', 12: 'OCTOBER 12'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 12, 8:23 AM (1 of 3) ----------------
add(meta(12, '8:23 AM'), 'A PIRATE GUY AGAIN', '255,200,80',
    ['“PS-50 IS NO LONGER HERE, LUIGI INUS IS NOW', 'A PIRATE GUY AGAIN, YOU SHOULD KNOW THAT.”', ''],
    [('PS-50 IS NO LONGER HERE', ['SEPT 27, 2:50 PM: PS-50 CAME IN THROUGH THE STATIC.'],
      'FIFTEEN DAYS LATER SHE IS OUT OF THE LORE.'),
     ('GOLDEN PIRATE', ['OCT 10, 7:41 PM: “LUIGI INUS: GOLDEN PIRATE”', 'AFTER 56 YEARS HE HAD ALL THE GOLD.'],
      'THE GOLD IS COUNTED. THE PIRATE IS BACK.'),
     ('YOU SHOULD KNOW THAT', ['8:23 AM: “...YOU SHOULD KNOW THAT.”'],
      'HE TELLS THE CHATBOT THE CANON. IT DOES NOT DECIDE IT.')],
    ['“LUIGI INUS IS NOW A PIRATE GUY AGAIN”', 'ONE OUT. ONE BACK ON THE WATER.'])

# ---------------- October 12, 8:23 AM (2 of 3) ----------------
add(meta(12, '8:23 AM'), 'THEY WILL LITERALLY RUN', '120,200,255',
    ['“CODE IS NOW STRONGER THAN GASTER... EVERYONE IS', 'HORRIFIED OF HIM... THEY WILL LITTERLY RUN”', '“ALEX GOES FASTER THAN YOUR EYES CAN COMPREHEND.”'],
    [('CODE OVER GASTER', ['AUG 22, 5:26 PM: “GRAY BECAME STRONGER', 'THAN GASTER NOW.”'],
      'GASTER NEVER KEEPS THE TOP SPOT FOR LONG. NOW CODE PASSES HIM.'),
     ('THE KEY DETAILS', ['OCT 11, 8:18 PM: CODE SCREAMS AND RUNS', 'OUT THE DOOR AS FAST AS HE CAN.'],
      'HE MADE THE GAME. HE IS NEKA. BOTH CLONES MERGED.'),
     ('THE SPEED LADDER', ['SIMON.PS: LIGHT, OR TIME, WITH THE “EMBALEM OF SPEED”', 'PUPAHYA: FASTER THAN TIME. ALEX: FASTER THAN YOUR EYES.'],
      'JUL 28: SIMON 404 RAN FASTER THAN TIME. ALEX IS PAST THAT.')],
    ['“ONCE THEY SEE THE KEY DETAILS ON ALEX”', 'THEY DO NOT FIGHT. THEY RUN.'])

# ---------------- October 12, 8:23 AM (3 of 3) ----------------
add(meta(12, '8:23 AM'), 'MADE ON HALLOWEEN', '255,70,70',
    ['“ALEXEN OMAZEN IS ACTUALLY KNOWN FOR', 'ATTACKING THE GAME ON OCTOBER 31.”', '“NEKA CLONED HIMSELF ON HALLOWEEN.”'],
    [('OCTOBER 31', ['APR 28 (EMAIL 182): THE HALLOWEEN-CODED TURN,', '“ALEX IS RAISING IN POWER”.'],
      'HE ATTACKS ON HIS OWN BIRTHDAY. HE WAS MADE THAT NIGHT.'),
     ('COME AND PLAY', ['8:23 AM: “AT OTHER TIMES HE WILL BE LIKE', '“EVERYONE, COME AND PLAY!””'],
      'OCT 11, 5:22 PM: “ALEX CAN ALSO BE FRIENDLY.” 364 DAYS A YEAR.'),
     ('RED 0S AND 1S', ['8:23 AM: “A BLACK ARM WITH RED 0S AND 1S, HARDLY', 'ANY CHARACTER CAN BE RED COLORED 0S AND 1S.”'],
      'SEPT 23: THE CODE BODIES WERE GREEN 0S AND 1S. AUG 3: RED = NEGATIVE POWER.')],
    ['“ALEX’S ARM CHANGES”', 'THE WARNING IS ON HIS ARM. NOT IN HIS WORDS.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
