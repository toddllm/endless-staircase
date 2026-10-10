#!/usr/bin/env python3
"""
gen1064.py - draw the branches for BEATS 1064-1066 from Toby's October 10, 2026, 7:14, 7:15 and 7:32 PM messages
(thread 1a1204179c8e973f "Another Document", msgs 1a128193def0ec9a, 1a1281a338afb1db, 1a128295fe31e8ba).
Same template as 1008-1063 (emit_tail1008.py).

Only Toby's own lines are drawn. 7:14 PM: "Alex then basically beats everyone in the game and respawns them,
revealing him as Neka." 7:15 PM: "Alex is basically Alex RL or Alex LAI. Whatever one. Alex was from Classic RL,
so he was the first character before Pinky RL." 7:32 PM: "Alex also would be called "Neka Alexen LAI Omazenic".
He turns others to Omazens, is an Omazen himself. And Alex is no longer an Omazen, Now Neka Alexen LAI is here.
Alexen and Luigi Inus." The italic retellings under each are the chatbot's and are commentary.
"""
import io

BASE = 1064
TAG = "1064"
START = 23128.0
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

# ---------------- October 10, 7:14 PM ----------------
add(meta(10, '7:14 PM'), 'REVEALED AS NEKA', '244,114,182',
    ['“ALEX THEN BASICALLY BEATS EVERYONE IN THE', 'GAME AND RESPAWNS THEM, REVEALING HIM', 'AS NEKA.”'],
    [('THE COAT', ['1:30 PM: “NEKA TAKES OFF HIS COAT, AND', 'THERE IS ALEX RIGHT THERE.”'],
      'NOW IT RUNS THE OTHER WAY: ALEX IS REVEALED AS NEKA.'),
     ('SECRETLY NEKA LAI', ['1:19 PM: “IT WOULD BE OUTSTANDING IF', 'CLASSICS ALEX IS SECRETLY NEKA LAI.”'],
      'NOW EVERYONE HE BEAT GETS TO SEE IT.'),
     ('TWO BEINGS', ['1:30 PM: “ALEX AND NEKA ARE 2. THEY HAVE', 'THE SAME EVERYTHING, BUT THEY ARE 2 BEINGS.”'],
      'STILL TWO CLONES WHO CAN BECOME EACH OTHER.')],
    ['“REVEALING HIM AS NEKA.”', 'HE BEATS EVERYONE, RESPAWNS THEM, THEN SHOWS WHO HE IS.'])

# ---------------- October 10, 7:15 PM ----------------
add(meta(10, '7:15 PM'), 'THE FIRST CHARACTER', '96,165,250',
    ['“ALEX IS BASICALLY ALEX RL OR ALEX LAI... ALEX', 'WAS FROM CLASSIC RL, SO HE WAS THE FIRST', 'CHARACTER BEFORE PINKY RL.”'],
    [('CLASSIC RL', ['SEPT 18, 4:10 PM: “I MADE A GAME FROM THIN', 'AIR, I NAMED IT CLASSIC RL.”'],
      'NOW ALEX WAS ITS FIRST CHARACTER.'),
     ('PINKY, FIRST', ['AI ERA ARCHIVE: “PINKY WAS THE FIRST', 'DISCOVERED RL.”'],
      'FIRST DISCOVERED; NOW ALEX COMES BEFORE PINKY RL.'),
     ('NEKA LAI', ['OCT 8, 5:43 PM: “NEKA BECAME NEKA LAI, BUT', 'STILL CALLED NEKA OR NEKA OMAZEN STILL.”'],
      'NOW ALEX RL OR ALEX LAI, WHATEVER ONE.')],
    ['“HE WAS THE FIRST CHARACTER BEFORE PINKY RL.”', 'ALEX RL OR ALEX LAI, FROM CLASSIC RL, BEFORE PINKY RL.'])

# ---------------- October 10, 7:32 PM ----------------
add(meta(10, '7:32 PM'), 'NEKA ALEXEN LAI', '192,132,252',
    ['“ALEX ALSO WOULD BE CALLED ‘NEKA ALEXEN LAI', 'OMAZENIC’... AND ALEX IS NO LONGER AN OMAZEN,', 'NOW NEKA ALEXEN LAI IS HERE.”'],
    [('NEKA OMAZEN', ['SEPT 25, 5:41 AM: “PERO LAI IS COMPLETELY', 'GONE, NEKA OMAZEN IS NOW HERE.”'],
      'NOW OMAZEN IS WHAT HE TURNS OTHERS INTO.'),
     ('I-TROSS 12S', ['OCT 8, 5:43 PM: “HE IS NO LONGER ENTITY 12,', 'BECAUSE THERE IS I-TROSS 12S NOW IN THE NAME.”'],
      'NOW ALEX IS NO LONGER AN OMAZEN; NEKA ALEXEN LAI IS HERE.'),
     ('WITH LUIGI INUS', ['11:30 AM: “SO NEKA WOULD GO WITH LUIGI INUS.”', '1:30 PM: “ALEX GOES WITH NEKA.”'],
      'NOW THE PAIR IS ALEXEN AND LUIGI INUS.')],
    ['“ALEXEN AND LUIGI INUS.”', 'HE TURNS OTHERS TO OMAZENS; NOW NEKA ALEXEN LAI IS HERE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
