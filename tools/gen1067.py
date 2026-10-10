#!/usr/bin/env python3
"""
gen1067.py - draw the branches for BEATS 1067-1069 from Toby's October 10, 2026, 7:41 and 7:46 PM messages
(thread 1a1204179c8e973f "Another Document", msgs 1a12831468964450 and 1a12835c107c06d6). Same template as
1008-1066 (emit_tail1008.py). Only Toby's own lines are drawn; the italic retellings are the chatbot's and are
commentary. The 7:41 PM message carried a Gemini-generated mp4 ("only 30 shown in video"); it is his video, not a beat.
"""
import io

BASE = 1067
TAG = "1067"
START = 23194.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 10, 7:41 PM (first half) ----------------
add(meta(10, '7:41 PM'), 'LUIGI INUS: GOLDEN PIRATE', '255,200,60',
    ['“AFTER 56 YEARS, HE FINALLY GOTTEN ALL THE GOLD', 'IN THE GAME, LUIGI INUS MADE A GOLD TOOTH,', 'A PEG LEG, GOLD BONES... GOLDEN PIRATE.”'],
    [('MORE GOLD', ['12:32 PM: “LUIGI INUS CONTINUES COLLECTING', 'MORE GOLD.”'],
      'NOW, AFTER 56 YEARS, HE HAS ALL OF IT.'),
     ('THE 7 SEAS', ['OCT 9: “LUIGI SAILED ACROSS THE 7 SEAS,', 'LOOKING FOR POWERFUL ARTIFACTS.”'],
      'NOW HE CAN INFINITELY REPAIR HIMSELF.'),
     ('ALEXEN IS NEKA', ['7:32 PM: “ALEX IS NO LONGER AN OMAZEN, NOW', 'NEKA ALEXEN LAI IS HERE.”'],
      'NOW “ALEXEN IS NOW NEKA NOW”, AND GOES PAST MAX LV.')],
    ['“ALEXEN IS NOW NEKA NOW.”', 'HE CONTINUES WITH LV, SO HE CAN REACH PAST MAX LV.'])

# ---------------- October 10, 7:41 PM (second half) ----------------
add(meta(10, '7:41 PM'), 'THE POWER CHAIN', '255,140,80',
    ['“ALEX’S DOMAIN EXPANSION POWER CHAIN CONNECTS', 'EVERYTHING, WRAPS AROUND ALL TARGETS... ALEX', 'AND THE VICTUM(S) ARE SENT TO THE VOID.”'],
    [('JAPANESE LETTERS', ['OCT 9: “ALEX CREATES POWER CHAIN, DOMAIN', 'EXPANSION, JAPANESE LETTERS... APPEAR.”'],
      'NOW IT WRAPS AROUND ALL TARGETS AND SENDS THEM TO THE VOID.'),
     ('HEXAGON PLATES', ['OCT 9: “NEKA STRIKES THE CHAINS AND IT SUCKS', 'THE POWER... PLASMA HEXAGON PLATES.”'],
      'NOW ALEX JUMPS ON THE HEXAGON PARTS OF NEKA’S BODY.'),
     ('THE 67 PIRATE', ['OCT 9: “THEN THE 67 PIRATE COMES... ALEX USES', 'DIAMOND SWORD, 67 PIRATE DOESN’T DIE.”'],
      'NOW ALEX FLIES FOR 67 SECONDS ACROSS THE WHITE VOID.')],
    ['“ALEX VS LUIGI GREEN IS THE TOUGHEST FIGHT.”', 'ALEX WOULD WIN AS NEKA; BEFORE, LUIGI GREEN WOULD WIN INSTANTLY.'])

# ---------------- October 10, 7:46 PM ----------------
add(meta(10, '7:46 PM'), 'PYCHOPATHICAL USYTREMICISM', '255,70,70',
    ['“ALEX GAINED PYCHOPATHICAL USYTREMICISM.', 'ALEXEN’S EYES BECOME RED, HE SUMMONS A BARRAGE', 'OF SWORDS, MICROPHONES, GREGS...”'],
    [('SUPREME MATE', ['1:19 PM: “ALEX BASICALLY STARTS BEATING MORE', 'AND MORE IN SUPREME MATE.”'],
      'NOW HE ONLY LOSES TO OREN.PS OR/AND SIMON.PS.'),
     ('RED EYES', ['OCT 9: “NEKA IS CLARIFIED AS AN ALL PURPLE', 'ENTITY WITH RED EYES.”'],
      'NOW ALEXEN’S EYES BECOME RED TOO.'),
     ('FROM THIN AIR', ['SEPT 18, 4:10 PM: “I MADE A GAME FROM THIN', 'AIR, I NAMED IT CLASSIC RL.”'],
      'NOW ALEX HAS THE POWER TO CREATE ANYTHING FROM THIN AIR.')],
    ['“I AM STRONGER THAN YOU!”', 'AFTER THE PYCHO-USTREMISM, HE BEATS EVERYONE; STRONGER THAN HIS DOMAIN.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
