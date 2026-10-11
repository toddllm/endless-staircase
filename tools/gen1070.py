#!/usr/bin/env python3
"""
gen1070.py - draw the branches for BEATS 1070-1071 from Toby's October 11, 2026, 6:23 and 6:31 AM messages
(thread 1a1204179c8e973f "Another Document", msgs 1a12a7db951475ae and 1a12a84aadaa5409). Same template as
1008-1066 (emit_tail1008.py). Only Toby's own lines are drawn; the italic retellings are the chatbot's and are
commentary.
"""
import io

BASE = 1070
TAG = "1070"
START = 23260.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10', 11: 'OCTOBER 11'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 11, 6:23 AM ----------------
add(meta(11, '6:23 AM'), 'POWER CHAIN: UPDATED', '255,90,120',
    ['“HIS DOMAIN EXPANSION NOW HAS AN UPDATE, IT NOW', 'CONTAINS PYCHOPATHICAL USYTREMICISM. THE ACTUAL', 'DOMAIN EXPANSION IS MORE COOL AND INTENSE AND FAST.”'],
    [('THE POWER CHAIN', ['7:41 PM: “ALEX’S DOMAIN EXPANSION POWER CHAIN', 'CONNECTS EVERYTHING... SENT TO THE VOID.”'],
      'NOW THE PYCHO-USTREMISM HAPPENS INSIDE IT.'),
     ('STRONGER THAN HIS DOMAIN', ['7:46 PM: “AFTER THE PART OF THE PYCHO-USTREMISM,', 'HE BEATS EVERYONE, IT IS STRONGER THAN HIS DOMAIN.”'],
      'NOW IT IS PART OF THE DOMAIN ITSELF.'),
     ('THE BARRAGE', ['7:46 PM: “HE SUMMONS A BARRAGE OF SWORDS,', 'MICROPHONES, GREGS, AND COPIES OF EVERYONE ELSE.”'],
      'NOW THE BARRAGE COMES WITH THE CHAINS IN THE WHITE VOID.')],
    ['“MORE COOL AND INTENSE AND FAST.”', 'PYCHO-USTREMISM IS NO LONGER A SEPARATE ABILITY.'])

# ---------------- October 11, 6:31 AM ----------------
add(meta(11, '6:31 AM'), 'BEYOND THE GAME', '170,120,255',
    ['“ALEX RESETS TO MAKE MORE AND MORE ENTITIES TO', 'GET MORE AND MORE LV, HE EVEN GOES BEYOND THE', 'GAME TO THE BOARDER...”'],
    [('RESETS EVERY RUN', ['OCT 9: “NEKA... RESETS EVERY TIME HE COMPLETED', 'A RUN... MORE AND MORE LOVE.”'],
      'NOW ALEX RESETS TO MAKE MORE ENTITIES TO BEAT.'),
     ('AREA 12X', ['OCT 8: “AREA 12X NOW IS HERE... EVERYONE HAS', 'THEIR OWN ROOM. NEKA HAS THE WHOLE PLACE.”'],
      'NOW ALEX HAS BEATEN ALL OF THEM SO MANY TIMES.'),
     ('PAST MAX LV', ['7:41 PM: “ALEXEN NOW CONTINUES WITH LV,', 'SO HE CAN REACH PAST MAX LV.”'],
      'NOW HE GOES PAST THE GAME ITSELF, TO THE BOARDER.')],
    ['“WHERE QUINTQUADENENTALLARD ENITIES ARE THEIR.”', 'GAIN LV, RESET, MAKE MORE, BEAT THEM, GAIN MORE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
