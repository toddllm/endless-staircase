#!/usr/bin/env python3
"""
gen991.py - emit the draw branches for BEATS 992-993 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-991 (emit_tail933.py).

  6:27 PM  1a103e1655060a28  -> 992 (Enough Fighting)
  6:30 PM  1a103e466a3b02ca  -> 993 (Speedruns)

Only Toby's own first paragraphs are drawn; the italic retellings after them read like
pasted chatbot rewrites and the quoted text below is the earlier thread.
"""
import io

BASE = 992
TAG = "992"
START = 21544.0
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

add(meta('6:27 PM'), 'ENOUGH FIGHTING', '90,220,140',
    ['“ENOUGH FIGHTING... NOW,',
     'LETS JUST GET TO THE POINT.”'],
    [('THE KNIVES',
      ['GASTER SUMMONS FLYING KNIVES',
       'EVERYWHERE.'],
      'CHARA GRABS THEM AND THROWS THEM AT FRISK.'),
     ('THE SHIELD',
      ['GASTER RUNS TO FRISK AND BLOCKS',
       'THE KNIVES WITH A GREEN SHIELD.'],
      'HE PROTECTS FRISK FROM CHARA.'),
     ('THE BLASTERS',
      ['GASTER FIRES 2 HUGE BLASTERS.',
       'FRISK AND CHARA ARE BOTH BEATEN.'],
      'THEIR FIGHT IS OVER.'),
     ],
    ['GASTER ENDS THE FIGHT.',
     'BOTH FRISK AND CHARA ARE DEFEATED.'])

add(meta('6:30 PM'), 'SPEEDRUNS', '255,200,80',
    ['“HERE AM I, MYSELF.”',
     '“I THINK I AM DOING GREAT AT THE SPEEDRUNS.”'],
    [('NEKA',
      ['GASTER WALKS TO NEKA.',
       'NEKA GLOWS.'],
      'GASTER IS THE MOST POWERFUL THING IN THE GAME.'),
     ('EVERY RUN',
      ['SEVERAL RUNS ARE PLAYED.',
       'GASTER BEATS EVERYONE ONCE AGAIN.'],
      'PRESSURETALE GASTER WINS EVERY TIME.'),
     ('LV',
      ['HE NEVER STOPS GAINING POWER',
       'AND LV AND STUFF.'],
      'EACH RUN LEAVES HIM STRONGER.'),
     ],
    ['EVERY RUN ENDS THE SAME WAY.',
     'GASTER JUST GETS FASTER.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
