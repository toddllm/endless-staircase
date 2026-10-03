#!/usr/bin/env python3
"""
gen986.py - emit the draw branches for BEATS 986-987 from Toby's October 3, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-985 (emit_tail933.py).

  4:50 PM  1a103882cade8094  -> scene ask (Gaster with PS-50 holding Bort), folded into 986
  4:58 PM  1a1038ff83dc7db2  -> 986 (Staring Contest)
  5:00 PM  1a10391e9438d07a  -> 986 verdict + 987 (Bort's Leap)

Only Toby's own lines are drawn (quoted text below them is the earlier thread).
"""
import io

BASE = 986
TAG = "986"
START = 21412.0
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

add(meta('4:58 PM'), 'STARING CONTEST', '200,170,255',
    ['“WHO WOULD WIN IN A STARING CONTEST?',
     'GASTER OR LUIGI?”'],
    [('LUIGI INUS / PS-50',
      ['HER GAZE CAUSES PARANOIA.',
       'SHE HOLDS BORT AND STARES IN SILENCE.'],
      'SHE MAKES A FEELING IN GASTER.'),
     ('PRESSURETALE GASTER',
      ['HE FEELS IT,',
       'and keeps staring anyway.'],
      'HE ALREADY DEFEATED HER AND SURPASSED NEKA.'),
     ('THE BLINK RULE',
      ['PS-50 CAN BLINK.',
       'GASTER CAN BLINK TOO.'],
      'SO COMPOSURE DECIDES IT.'),
     ],
    ['GASTER WINS BY HOLDING HIS STARE',
     'DESPITE THE FEELING LUIGI INUS CAUSES.'])

add(meta('5:00 PM'), "BORT'S LEAP", '255,200,90',
    ['“BORT JUMPS ON GASTER, GASTER EASILY THROWS BORT DOWN,',
     'BORT TURNS TO NORMAL.”'],
    [('THE LEAP',
      ['BORT JUMPS',
       'STRAIGHT ONTO GASTER.'],
      'GASTER THROWS HIM DOWN WITHOUT EFFORT.'),
     ('BACK TO NORMAL',
      ['THE THROW',
       'returns Bort to his normal self.'],
      'NO HARM DONE.'),
     ('THE TUNE',
      ['PS-50 PICKS BORT BACK UP.',
       'BORT DANCES.'],
      'THE IMPOSSIBLE-TO-FORGET TUNE PLAYS AGAIN.'),
     ],
    ['PS-50 GRABS BORT,',
     'BORT DANCES AND MAKES THE TUNE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
