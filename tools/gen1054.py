#!/usr/bin/env python3
"""
gen1054.py - draw branches for BEATS 1054-1055 from Toby's October 10, 2026, 9:17 AM message
(thread 1a1204179c8e973f "Another Document", msg 1a125f64d138cd3f).
Same template as 1008-1053 (emit_tail1008.py).

Only Toby's own first paragraph is drawn (from "As Neka continues even more to get more LV"
through "when they have to battle, they battle."); the italic retelling under it is pasted
chatbot commentary and is not drawn.
"""
import io

BASE = 1054
TAG = "1054"
START = 22908.0
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

# ---------------- October 10, 9:17 AM ----------------
add(meta(10, '9:17 AM'), 'THROUGH THE STATIC', '120,230,120',
    ['“IF YOU LOOK THROUGH STATIC, YOU LOOK AT', 'THE SECOND PORTAL’S VIEW,', 'BREAKING OTHER GAMES’ LOGIC.”'],
    [('COME FOR YOU ALL THROUGH STATIC', ['SEPT 27: “PS-50 WILL JUST COME FOR', 'YOU ALL THROUGH STATIC.”'],
      'HER PORTAL CAME FIRST. LUIGI OPENS TWO.'),
     ('NEARLY EVERYONE IS FRIENDLY', ['OCT 10, 7:18 AM: “LUIGI INUS ALSO IS', 'FRIENDLY.” NOW MR. BLACK CAN BE TOO.'],
      'PUPAHYA ONLY GETS STRONG WHEN HE HAS TO.'),
     ('TELEPORT THROUGH STATIC', ['SEPT 27: PS-50 “CAN TELEPORT THROUGH', 'STATIC AND CAN ALSO EDIT HER CODE.”'],
      'NOW NEKA AND THE HIGH POWERS TELEPORT TOO.')],
    ['TWO PORTALS, ONE VIEW.', 'LOOK THROUGH ONE AND YOU SEE THE OTHER.'])

add(meta(10, '9:17 AM'), 'SPRUNKI: THE MYTHBRINGERS', '255,216,79',
    ['“IT IS A FUTURISTIC GAME, SO, IT ISN’T 2026', 'GAME, IT IS AN ABSOLUTE INFINITY AC GAME...', 'OR EVEN AFTER ABSOLUTE DEATH.”'],
    [('ABSOLUTE INFINITY AD', ['AUG 21: “CLASSICS IS NOT A GAME FROM', '2026, BUT FROM ABSOLUTE INFINITY AD.”'],
      'SEVEN WEEKS LATER THE DATE READS AC.'),
     ('THE CLASSICS VR MIRROR', ['AUG 13: PERO “MAKES MOVEMENTS NO ONE', 'COULD MAKE” THROUGH THE VR MIRROR.'],
      'TODAY NEKA LAI IS THE ONE IN VR.'),
     ('COUNTLESS CHARACTERS', ['SEPT 1: “THE 20 SPRUNKIS + PERO LAI,', 'SO NOW ONLY 21 CHARACTERS.”'],
      '20 + WHOLE CLASSICS SERIES = COUNTLESS.')],
    ['“SPRUNKI: THE MYTHBRINGERS, OR SOMETHING.”', 'A FUTURISTIC GAME, COUNTLESS CHARACTERS.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
