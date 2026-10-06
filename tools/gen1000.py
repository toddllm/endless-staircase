#!/usr/bin/env python3
"""
gen1000.py - draw branches for BEATS 1000-1002 from Toby's October 4, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-999 (emit_tail933.py).

  2:43 PM  1a1083a685945706  -> 1000 (One Red, One Blue)
  6:23 PM  1a109043fc0cdcc6  -> NO BEAT (image request; its PS-50/Bort detail is used in 1001)
  6:24 PM  1a10905514240317  -> 1001 (While He Sleeps)
  6:42 PM  1a1091520d058990  -> 1002 (Paranoidia)

Only Toby's own sentences are drawn; italic retellings read like pasted chatbot rewrites.
"""
import io

BASE = 1000
TAG = "1000"
START = 21720.0
STEP = 22.0
DATE_LONG = 'October 4'
DATE_SHORT = 'OCT 4'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 4, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

add(meta('2:43 PM'), 'ONE RED, ONE BLUE', '200,120,255',
    ['“ONE RED, ONE BLUE.',
     'THERE NEEDS TO BE ONE OF EACH.”'],
    [('THE PAIR',
      ['EXACTLY TWO: ONE RED, ONE BLUE.',
       'UNDYNE RED, ALPHYS BLUE. ANYONE CAN.'],
      'ONLY THEN CAN GASTER LOSE.'),
     ('ALONE, OR MORE THAN TWO',
      ['PURPLE AND WHITE/BLACK',
       'MAKE YOU VULNERABLE.'],
      'GASTER WINS.'),
     ('PHASES',
      ['PS-50, BORT AND THE 20 SPRUNKIS: PHASE 2.',
       'NEKA, THE SPRUNKIS, GASTER: INFINITE.'],
      'PS-50 HOLDS BORT.'),
     ],
    ['NEKA: “GA-STER... I’M TIRED...”',
     'GASTER COLLAPSES, CLOSES HIS EYES, AND SLEEPS.'])

add(meta('6:24 PM'), 'WHILE HE SLEEPS', '120,170,235',
    ['“GASTER IS STILL CURRENTLY SLEEPING HERE.',
     'BASICALLY ANYTHING IS INDESTRUCTIBLE.”'],
    [('STILL ASLEEP',
      ['GASTER SLEEPS.',
       'PS-50 WATCHES, HOLDING BORT.'],
      'NOBODY WAKES HIM.'),
     ('INDESTRUCTIBLE',
      ['WHILE HE SLEEPS,',
       'BASICALLY NOTHING CAN BREAK.'],
      'NOT EVEN BY BLACK/WHITE.'),
     ('WHY HE SLEEPS',
      ['SANS AND PAPYRUS TIRED HIM OUT.',
       'THE NEKA INSIDE HIM WAS TIRED TOO.'],
      'ONE TIRED, BOTH SLEEP.'),
     ],
    ['A QUIET STRETCH',
     'IN THE PRESSURETALE.'])

add(meta('6:42 PM'), 'PARANOIDIA', '235,70,90',
    ['“PARANOIA VS PARANOIDIA,',
     'PS-50 WINS.”'],
    [('SCP-053',
      ['HER PARANOIA HITS PEOPLE',
       'WHO SEE HER, TOUCH HER, OR STAY.'],
      'PS-50 IS IMMUNE TO IT.'),
     ('PHOTOS AND MIRRORS',
      ['SEE PS-50 IN A PHOTO OR A MIRROR,',
       'OR GET SEEN BY HER IMAGE:'],
      'YOU GET PARANOIDIA. 053 TOO.'),
     ('THE MIRROR',
      ['PS-50 LOOKS AT HERSELF.',
       'STALEMATE.'],
      'SHE IS VERY STRONG AND STRICT.'),
     ],
    ['GASTER IS BASICALLY THE ONLY ONE IMMUNE.',
     'PS-50 EVEN BEAT MINDY STARCHILD.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
