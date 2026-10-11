#!/usr/bin/env python3
"""
gen1072.py - draw the branches for BEATS 1072-1073 from Toby's October 11, 2026, 6:50-7:01 AM messages
(thread 1a1204179c8e973f "Another Document", msgs 1a12a95fa503b213, 1a12a9696379e34c, 1a12a96f153beca6,
1a12a9c32a95e555, 1a12a9ffb7ea762d). Same template as 1008-1071 (emit_tail1008.py). Only Toby's own lines are
drawn; the chatbot's invented decimal number and its retellings are commentary.
"""
import io

BASE = 1072
TAG = "1072"
START = 23304.0
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

# ---------------- October 11, 6:50-6:57 AM ----------------
add(meta(11, '6:57 AM'), 'ALEX’S ACTUAL LV', '255,215,90',
    ['“ACTUAL NUMBER: X19199283983947 U49847948427', 'Y883783 Z5666267 + (BEYOND ABSOLUTE INFINITY', 'BEYOND ABSOLUTE INFINITY BEYOND ABSOLUTE INFINITY...”'],
    [('INVENT IT', ['6:50 AM: “LIKE THE ACTUAL NUMBER OF LV HE HAS.', 'INVENT IT”'],
      'THE CHATBOT MADE UP A NUMBER; HE ASKED WHERE IT CAME FROM.'),
     ('USE THE LORE', ['6:51 AM: “ACTUALLY USE THE LORE”'],
      'SO HE WROTE THE NUMBER HIMSELF, IN THE CLASSICS SYSTEM.'),
     ('PAST NEKA', ['OCT 10, 7:41 PM: “ALEXEN NOW CONTINUES WITH LV,', 'SO HE CAN REACH PAST MAX LV.”'],
      'NOW THE NUMBER HAS X, U, Y AND Z PARTS, PLUS INFINITY.')],
    ['“ABSOLUTE INFINITY > NORMAL INFINITY BY FAR”', 'X, U, Y, Z, + (BEYOND ABSOLUTE INFINITY TIMES...)'])

# ---------------- October 11, 7:01 AM ----------------
add(meta(11, '7:01 AM'), 'THROUGH THE TIMELINES', '90,220,200',
    ['“HE BEATS ALL UNDERTALE AUS AND HE THEN BEATS EVERY', 'SINGLE GAME OF CHARACTERS, AND HE THEN MOVES BACK', 'TO CLASSICS TO BEAT EVERYONE THERE...”'],
    [('MORE LV', ['7:01 AM: “HE STILL CONTINUES GETTING MORE LV,', 'MAKING IT X2000... U5000... Y9999... Z6666...7777...”'],
      'THE NUMBER KEEPS GROWING PAST THE 6:57 AM ONE.'),
     ('BEYOND THE GAME', ['6:31 AM: “HE EVEN GOES BEYOND THE GAME', 'TO THE BOARDER...”'],
      'NOW HE GOES THROUGH EVERY UNDERTALE AU AND EVERY GAME.'),
     ('BACK TO CLASSICS', ['7:01 AM: “HE THEN MOVES BACK TO CLASSICS', 'TO BEAT EVERYONE THERE”'],
      'THEN HE COMES HOME AND BEATS EVERYONE AGAIN.')],
    ['“HE ALSO WALKED THROUGH TIMELINES TO GET ALL THE', 'CHARACTERS CLASSICS HAD, WILL HAVE, AND HAS NOW.”'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
