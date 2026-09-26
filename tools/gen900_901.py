#!/usr/bin/env python3
"""
gen900_901.py - emit the draw branches for BEATS 900-901 from Toby's September 26, 2026 6:56 PM message
(1a0dfef28353812b, thread 1a0deee4cb24addb). Same template as beats 888-899.

Only Toby's own typing is drawn: "In the Endless Staircase game, once PS-50 sees you" through
"But PS-50 can make Neka sleepy." Everything after (the restatement starting "In Endless Staircase,
PS-50 spotting the player triggers") is a pasted reply. Commentary, not canon.
The 6:50 PM message (1a0dfea542a34d3c) is an image request plus pasted text: no beat.
"""
import io

START = 19520.0
STEP = 22.0
B = []

A656 = dict(when='6:56 PM', short='6:56 PM', attr='TOBY, SEPTEMBER 26, 6:56 PM — HIS OWN TYPING.')

def add(meta, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(meta)
    B.append(d)

add(A656, 'ERROR: NULL', '255,70,90',
    ['“IN THE ENDLESS STAIRCASE GAME, ONCE PS-50 SEES YOU, IT IS GAME OVER AND IT SAYS “GAME OVER: ERROR:',
     'NULL: DEATH.FELL.ACCIDENT.GLITCH.PARANOID”, THAT IS WHAT HAPPENS IN CLASSICS. ALSO THE ENDLESS STAIRCASE',
     'GAME SHOULD ACTUALLY HAVE ALL THE CLASSICS STUFF IN IT, SO THE PLAYER DOESN’T JUST FALL FOREVER.”'],
    [('GAME OVER: ERROR: NULL',
      ['DEATH.FELL.ACCIDENT.GLITCH.PARANOID',
       'FIVE CAUSES OF DEATH IN ONE LINE, AND THE GAME CANNOT PICK WHICH ONE IT WAS.'],
      'ONCE SHE SEES YOU, THAT IS THE SCREEN.'),
     ('READ IT LEFT TO RIGHT',
      ['YOU FELL. IT LOOKS LIKE AN ACCIDENT. IT GETS LOGGED AS A GLITCH.',
       'THE LAST WORD IS THE REAL ONE: PARANOID. HER GAZE, 6:35 PM.'],
      'THE ERROR MESSAGE IS THE WHOLE STORY OF HER.'),
     ('NOT JUST FALLING FOREVER',
      ['THE STAIRCASE SHOULD HAVE ALL THE CLASSICS STUFF IN IT, ACTUALLY HAPPENING.',
       'SO THE FALL GOES THROUGH THE EVENTS INSTEAD OF REPEATING.'],
      'TOBY’S OWN DESIGN NOTE FOR THIS GAME.'),
     ],
    ['ERROR: NULL',
     'SIMON 404 HAD AN INSTANT GAME OVER TOO. HIS COULD NOT BE DESCRIBED. HERS PRINTS.'])

add(A656, 'A CHILD CAN BEAT EVERYONE', '255,200,120',
    ['“A CHILD CAN BEAT EVERYONE. NEKA OMAZEN IS TOO STRONG FOR THE PARANOID.',
     'BUT PS-50 CAN MAKE NEKA SLEEPY.”',
     ''],
    [('A CHILD CAN BEAT EVERYONE',
      ['SHE LOOKS LIKE A KID ASKING FOR A TEA PARTY.',
       'AND SHE BEATS EVERYONE, EXACTLY LIKE 6:41 PM SAID: “PS-50 IS BEATING EVERYONE.”'],
      'THE SMALLEST ONE IN THE GAME IS THE ONE NOBODY WINS AGAINST.'),
     ('TOO STRONG FOR THE PARANOID',
      ['HER GAZE BLURS YOU, BLACKS YOU OUT, THEN THE PARANOIA TAKES HOLD.',
       'NEKA OMAZEN IS TOO STRONG FOR IT TO TAKE HOLD. THE ONE THING THAT BEATS EVERYONE ELSE.'],
      'HE IS THE ONLY ONE HER EYES CANNOT BREAK.'),
     ('BUT SHE CAN MAKE HIM SLEEPY',
      ['6:33 PM: “NEKA IS STILL TIRED.” 6:41 PM: HE PACKS THE BLADES AND SLEEPS AGAIN.',
       'NOW WE KNOW WHY HE KEEPS GOING BACK TO BED. SHE IS THE ONE MAKING HIM SLEEPY.'],
      'SHE CANNOT MAKE HIM PARANOID, SO SHE KEEPS HIM ASLEEP.'),
     ],
    ['A CHILD CAN BEAT EVERYONE',
     'EVERYONE EXCEPT NEKA. AND NEKA IS ASLEEP.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail900.py', encoding='utf-8').read())
