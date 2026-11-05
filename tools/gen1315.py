#!/usr/bin/env python3
"""
gen1315.py - draw beats 1315-1318 from Toby's November 4, 2026 7:15 PM message (1a1a90fcb389dcbb) on the "Continuing
from Classic RL Eliminations" thread 1a19be0b90adb989. He asked "Now write what happens next in lore" and sent a full
"Proposed next scene for Classic RL Eliminated". It picks up the 1302 ending screen and Gaster's first Neka Coin, the
1303-1305 glitch line, dog swarm, moving lamp and the 9,9,9 breaking point, and Neka's crystal eyes from 1294/1311.
-> 1315 AFTER THE ENDING, 1316 8.9, 8.9, 8.9, 1317 PAST THE BOUNDARY, 1318 WHAT CAME NEXT.
By the screenshot rule (beat + 63) the PNGs are 1378-1381.
"""
import io

BASE = 1315
TAG = "1315"
START = 28650.0
STEP = 22.0
B = []
MONTH = {4: 'NOVEMBER 4'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — THE SCENE HE SENT.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

T = '7:15 PM'
add(meta(4, T), 'AFTER THE ENDING', '255,216,79',
    ['GASTER’S FIRST NEKA COIN: OBTAINED.', 'GASTER: “SURELY THERE IS SOMETHING AFTER THE ENDING.”', 'NEKA: “PARIS.”  GASTER: “DO NOT.”'],
    [('THE FROZEN ENDING', ['CLASSIC RL ELIMINATED STAYS ON SCREEN.', 'GASTER HOLDS THE COIN BETWEEN TWO FINGERS.'],
      'THE GAME IS OVER. HE IS NOT DONE.'),
     ('NEKA IN THE LAB COAT', ['WHITE LAB COAT, BLUE CRYSTAL EYES.', '“HELLO.” “YES, HELLO, BROTHER.”'],
      'ALL WORDS ARE GOOD.'),
     ('THE EYES FLICKER', ['THE SHAPES INSIDE HIS EYES', 'MOVE IN DIFFERENT DIRECTIONS.'],
      'THEN THE ENDING SCREEN VANISHES.')],
    ['WHAT HAPPENS NEXT?', 'NOT THE 1600 YEARS OF PARIS.'],
    'Gaster holds his first Neka Coin and asks what happens after the ending. Neka says Paris.')

add(meta(4, T), '8.9, 8.9, 8.9', '120,220,255',
    ['A HALLWAY APPEARS. THE LAMP STANDS AT THE END.', 'SANS: “PRETTY SURE THAT WASN’T IN THE CREDITS.”', 'GASTER: “NOBODY MOVE.”'],
    [('THE LAMP STEPS SIDEWAYS', ['THE CONVENIENTLY SHAPED LAMP', 'MOVES ONE STEP TO THE SIDE.'],
      'IT IS NOT A HIDING PLACE ANYMORE.'),
     ('PAPYRUS POINTS', ['“HUMAN! YOUR HIDING PLACE', 'HAS ABANDONED YOU!”'],
      'FRISK STEPS OUT.'),
     ('THE COORDINATES', ['A DISPLAY APPEARS UNDER FRISK’S FEET.', '8.9, 8.9, 8.9.'],
      'ONE STEP FROM THE BREAKING POINT.')],
    ['9, 9, 9 IS THE LIMIT.', 'GASTER STOPS SMILING.'],
    'A hallway after the credits, the lamp moves, Papyrus finds Frisk, and the coordinates read 8.9, 8.9, 8.9.')

add(meta(4, T), 'PAST THE BOUNDARY', '255,120,120',
    ['NEKA: “INTERESTING.”  GASTER: “NEKA. NOBODY.”', 'BUT NEKA IS ALREADY WALKING.', 'HE REACHES 9, 9, 9. HIS NEXT STEP GOES PAST IT.'],
    [('DOGS', ['DOGS COVER THE WHOLE SCREEN.', 'FOR SEVERAL SECONDS, NOTHING ELSE.'],
      'THE DOG SWARM AGAIN.'),
     ('MAJOR ERRORS', ['DOORS OPEN ONTO OTHER DOORS.', 'NAMES FLICKER INTO GRAY SMILEY FACES.'],
      'THE LAMP IS NOW BEHIND PAPYRUS.'),
     ('THE SAME HALLWAY', ['SANS: “GUESS WE FINISHED THE GAME.”', 'GASTER: “AND BEGAN THE ERRORS.”'],
      'THE DISPLAY CANNOT FIND NEKA.')],
    ['THE GAME ENDED.', 'THE ERRORS BEGAN.'],
    'Neka walks past 9, 9, 9, the dogs cover the screen, and the hallway comes back full of errors.')

add(meta(4, T), 'WHAT CAME NEXT', '110,230,215',
    ['NEKA’S EYES CAST A BLUE-TEAL GLOW.', 'THE SEPERIAL SHAPES KEEP TURNING.', 'HE WATCHES THE DISPLAY. THEN HE LAUGHS.'],
    [('THE QUESTION', ['GASTER: “BROTHER... DID YOU KNOW', 'THIS WOULD HAPPEN?”'],
      'NEKA STOPS LAUGHING.'),
     ('FOR ONCE', ['NO 60. NO PARIS.', 'NEKA ANSWERS THE QUESTION DIRECTLY.'],
      'THAT IS RARE FOR HIM.'),
     ('THE ANSWER', ['“I WANTED TO LEARN', 'WHAT CAME NEXT.”'],
      'SMARTER EVERY SECOND.')],
    ['GASTER CLOSES HIS HAND AROUND THE COIN.', 'NEKA KEEPS WALKING.'],
    'Gaster asks if Neka knew. For once Neka answers directly: he wanted to learn what came next.')

exec(open('/Users/tdeshane/endless-staircase/tools/rewrap1176.py', encoding='utf-8').read()); rewrap(B)
bad = []
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        if len(ln) > 60: bad.append((b['key'], len(ln), ln))
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            if len(ln) > 58: bad.append((b['key'], len(ln), ln))
    assert len(b['quote']) == 3 and len(b['panels']) == 3 and len(b['close']) == 2, b['key']
assert not bad, bad
assert len(B) == 4, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
