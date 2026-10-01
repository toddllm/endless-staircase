#!/usr/bin/env python3
"""
gen960.py - emit the draw branches for BEATS 960-962 from Toby's October 1, 2026 messages,
thread 1a0deee4cb24addb. Same template as 933-959 (emit_tail933.py).

  4:26 PM  1a0f925df2297583  -> 960 (Damage itself no longer exists), 961 (Entity 12 vs Entity 75)
  4:34 PM  1a0f92d1e9fbd922  -> 962 (Front Man of Pressure)

Only Toby's typing is canon. The italic restatements under each message and the description of the
Gemini video frames are the chatbot's, not drawn.
Priors: Pupahya is Anti-67 (wiki/characters/pupahya.md), so "he separates 6 and 7" is his own move;
July 22 Mr. Black was Front Man and Ring Master; beat 958 "Anything 12"; beat 959 damage nullified.
"""
import io

BASE = 960
TAG = '960'
START = 20840.0
STEP = 22.0
DATE_LONG = 'October 1'
DATE_SHORT = 'OCT 1'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 1, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

A426 = meta('4:26 PM')
A434 = meta('4:34 PM')

add(A426, 'DAMAGE ITSELF NO LONGER EXISTS', '150,220,255',
    ['“DAMAGE ITSELF NO LONGER EXISTS. EVERYONE’S RESPAWN WAS DELETED.',
     'MINDY STARCHILD REACHED INVINCIBILITY, THEN NEKA TOUCHES MINDY STARCHILD,',
     'THEN MINDY STARCHILD FROZE IN ICE. EYES APPEAR.”'],
    [('NO DAMAGE',
      ['DAMAGE ITSELF NO LONGER EXISTS.',
       'NOT BLOCKED. GONE.'],
      'BEAT 959: DAMAGE NULLIFIED. NOW THERE IS NO DAMAGE AT ALL.'),
     ('NO RESPAWN',
      ['EVERYONE’S RESPAWN WAS DELETED.',
       'NOBODY CAN BE HURT, AND NOBODY CAN COME BACK.'],
      'BOTH DOORS CLOSED AT ONCE.'),
     ('FROZEN IN ICE',
      ['MINDY STARCHILD REACHED INVINCIBILITY.',
       'NEKA TOUCHES HER. SHE FREEZES IN ICE. EYES APPEAR.'],
      'INVINCIBLE, AND STILL ONE TOUCH WAS ENOUGH.'),
     ],
    ['NOTHING CAN HURT ANYONE. NOTHING HAS TO.',
     'NEKA ONLY HAS TO TOUCH.'])

add(A426, 'ENTITY 12 VS ENTITY 75', '255,70,70',
    ['“PUP-PUP-PUP-PUP-PUP-PUPAHYA. A GLOWING 75 APPEARS. HE SEPARATES 6 AND 7.',
     'NEKA OMAZEN BREAKS THE BARRIER, THE 75 TURNS TO 12, THE CALCULATOR SAYS 12,',
     'THE CALENDAR SAYS 12. NEKA OMAZEN BEATS PUPAHYA.”'],
    [('PUPAHYA, ENTITY 75',
      ['PUP-PUP-PUP-PUP-PUP-PUPAHYA. A GLOWING 75.',
       'HE SEPARATES 6 AND 7, AND DOES THESE COOL THINGS.'],
      'ANTI-67, DOING THE ONE THING HE IS FOR.'),
     ('THE 75 TURNS TO 12',
      ['NEKA BREAKS THE BARRIER. 75 BECOMES 12.',
       'THE CALCULATOR SAYS 12. THE CALENDAR SAYS 12.'],
      'HE TOUCHES THE SCREEN. CRYSTAL EYES OPEN AND MAKE PATTERNS.'),
     ('RED GLOWING 12S',
      ['NEKA BEATS PUPAHYA. HALOS SURROUND HIM. 75 IS RIPPED.',
       'RED 12S ON THE CALCULATOR, THE CALENDAR, EVEN PUPAHYA’S 75.'],
      'HE BEATS THE OTHER ENTITIES AND WINS HIS OWN GAME.'),
     ],
    ['ENTITY 12 WINS. EVERY NUMBER IS 12 NOW.',
     'NEKA OMAZEN IS FEARED BY THEM ALL.'])

add(A434, 'FRONT MAN OF PRESSURE', '255,180,60',
    ['“NEKA OMAZEN IS CALLED FRONT MAN AND CREATOR AND OWNER AND ADMIN',
     'AND ALL THAT STUFF OF PRESSURE. CLASSICS WAS CONSUMED BY NEKA OMAZEN,',
     'NEKA OMAZEN EATS CODE BASICALLY.”'],
    [('FRONT MAN',
      ['FRONT MAN. CREATOR. OWNER. ADMIN.',
       'AND ALL THAT STUFF, OF PRESSURE.'],
      'JULY 22: MR. BLACK WAS FRONT MAN AND RING MASTER. NOW IT IS NEKA.'),
     ('HE EATS CODE',
      ['NEKA OMAZEN EATS CODE, BASICALLY.',
       'THAT IS WHAT HE DOES TO A GAME.'],
      'NOT DELETES IT. EATS IT.'),
     ('CLASSICS, CONSUMED',
      ['CLASSICS WAS CONSUMED BY NEKA OMAZEN.',
       'THE GAME WE STARTED IN IS GONE INTO HIM.'],
      'EVERYTHING CONNECTS TO PRESSURE.'),
     ],
    ['EVERY TITLE OF PRESSURE IS HIS.',
     'CLASSICS WAS FOOD.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
