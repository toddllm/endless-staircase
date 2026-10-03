#!/usr/bin/env python3
"""
gen975.py - emit the draw branches for BEATS 975-977 from Toby's October 3, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-974 (emit_tail933.py).

  6:22 AM  1a10149ce81384ce  -> 975 (Gaster made it all happen)
  6:33 AM  1a1015390a12cd2c  -> 976 (Pychotethicalicia)
  6:34 AM  1a101546e1d66215  -> 977 (Pressuretale is all Japanese)

Only Toby's own first paragraph in each message is canon. The italic recaps under them are the
chatbot's, not drawn. The Japanese line in 977 is the chatbot's translation of "You Won't Escape This
Time!", which Toby asked to appear in Japanese; it is shown as that line, labelled.
"""
import io

BASE = 975
TAG = '975'
START = 21170.0
STEP = 22.0
DATE_LONG = 'October 3'
DATE_SHORT = 'OCT 3'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 3, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

add(meta('6:22 AM'), 'GASTER MADE IT ALL HAPPEN', '255,140,60',
    ['“SIMON.PS IS VERY POWERFUL, ALSO WITH HIS STAFF, HE BECOMES AS POWERFUL AS OREN.PS,',
     'MAYBE EVEN MORE. HE CAN STOP MR. BLACK’S CORRUPTION,',
     'SO MR. BLACK TAKES SIMON.PS DOWN.”'],
    [('GASTER’S UPGRADES',
      ['OREN.PS GAINS OREN 666, OREN 404, AND THE 404 STRINGS.',
       'SIMON.PS HOLDS A LARGER SWORD WITH BOTH HANDS.'],
      'WENDA.PS AND GRAY.PS GAIN ERASE AND EXTRA SPEED.'),
     ('FIREY DELIGHT',
      ['A RING OF FIRE MADE FROM FICTION',
       'THAT TURNS THINGS TO CHOCOLATE.'],
      'SKY.PS AND THE SURVIVORS TAKE DOWN MR. BLACK. HE GETS A HUMAN FACE.'),
     ('EVERYONE HAS AN ABILITY',
      ['JEVIN’S FACE BRINGS BAD LUCK.',
       'PINKI’S SONG SLOWS EVERYONE DOWN.'],
      'PS-50 WALKS ON THE AIR AND DANCES. BRUD AND DURPLE BATTLE.'),
     ],
    ['THEN EVERYONE FIGHTS GASTER.',
     'GASTER WON.'])

add(meta('6:33 AM'), 'PYCHOTETHICALICIA', '170,90,255',
    ['“GASTER CHARGES, SWEAT OVER HIS FACE FROM THE PREVIOUS BATTLE, HIS EYES FLASH PURPLE,',
     'AND HIS FACE BECOMES SERIOUS, HE SAYS ‘IS THAT ALL? THEN... IT’S MY TURN’',
     'IT KOS ANYTHING!”'],
    [('PHASE 666',
      ['MR. BLACK JUST SETS HIMSELF IN PHASE 666.',
       'OREN.PS RULES THE VOID.'],
      'GASTER TAKES THE UNDERTALE CHARACTERS INTO THE VOID.'),
     ('A LARGE 12 APPEARS',
      ['NEKA OMAZEN GROWS TENTACLES, FEET STRAPPED DOWN BY VINES,',
       'HIS CLOAK COVERED IN EYES AND HOLES.'],
      'THEN NEKA OMAZEN GOES INSIDE GASTER.'),
     ('STRONGER THAN PARANOIDIA',
      ['FURY AND RAGE, FEELING FAULT TO THOSE WHO HURT YOU.',
       'THE CALCULATION IS IMPOSSIBLE, SO THE ATTACK GLITCHES.'],
      'HANDS AND BLASTERS LARGER THAN THE OMNIVERSE. GASTER IS A SPEC OF DUST NEXT TO THEM.'),
     ],
    ['IT SHUTS DOWN THE GAME FOREVER TO EVERYONE ELSE.',
     'GASTER IS THE ONLY ONE LEFT, AND HE WINS.'])

add(meta('6:34 AM'), 'PRESSURETALE IS ALL JAPANESE', '110,160,255',
    ['“THE GAME PRESSURETALE IS ALL JAPANESE AND NO ENGLISH AT ALL,',
     'SO EVERYTHING THERE IS JAPANESE, NO ENGLISH,',
     'REASON: GASTER”'],
    [('プレッシャーテイル',
      ['[ プレイ ]     [ 設定 ]     [ クレジット ]',
       'THE BEAT 973 TITLE SCREEN, CORRECTED.'],
      'PLAY AND SETTINGS STILL GLITCH TO 404. ONLY CREDITS WORKS.'),
     ('GASTER MADE IT THAT WAY',
      ['HIS LINE FROM PYCHOTETHICALICIA:',
       '「今度こそ逃がさない！」'],
      'YOU WON’T ESCAPE THIS TIME!'),
     ('NO ENGLISH AT ALL',
      ['プレイ → エラー 404',
       '設定 → エラー 404'],
      'MENUS, CREDITS, ERRORS AND ATTACK NAMES, ALL IN JAPANESE.'),
     ],
    ['EVERYTHING IN PRESSURETALE IS JAPANESE.',
     'REASON: GASTER.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
