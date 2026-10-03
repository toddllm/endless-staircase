#!/usr/bin/env python3
"""
gen988.py - emit the draw branches for BEATS 988-989 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-987 (emit_tail933.py).

  5:12 PM  1a1039ce95c463b2  -> 988 (Come...) + 989 (Soul Combination)
  5:36 PM  1a103b2bc768cde3  -> image ask only, NO BEAT

Only Toby's own lines are drawn (quoted text below them is the earlier thread).
"""
import io

BASE = 988
TAG = "988"
START = 21456.0
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

add(meta('5:12 PM'), 'COME...', '120,255,150',
    ['“GASTER SAYS ‘COME...’, AND A PURPLE GLOW',
     'FILLS HIS EYES.”'],
    [('THE FORCEFIELD',
      ['FRISK AND CHARA KEEP FIGHTING.',
       'A GREEN FORCEFIELD APPEARS.'],
      'BOTH CRASH INTO OPPOSITE SIDES.'),
     ('THE PIXELS',
      ['GASTER MOVES HIS HAND.',
       'the forcefield turns to pixels.'],
      'AND DISAPPEARS.'),
     ('THE BLUE SAW',
      ['PUPAHYA RUNS AT LIGHT SPEED,',
       'CUTTING THE ATOMS OF SPACE.'],
      '“COME...” A BLUE SAW STOPS HIM COLD.'),
     ],
    ['TEAL STRINGS CATCH PUPAHYA,',
     'THROW HIM DOWN, AND A GIANT HAND CRUSHES HIM.'])

add(meta('5:12 PM'), 'SOUL COMBINATION', '110,220,230',
    ['“THE SOULS COMBINING TO MAKE 1 HUGE SOUL',
     'THAT SUMMONS A GIANT HAND.”'],
    [('OMNI-SOUL BARRAGE',
      ['A LARGE BARRAGE OF THE SOULS.',
       'IT GROWS INTO OMNI-SOUL STORM'],
      'AND SOUL STORM BARRAGE.'),
     ('SOUL COMBINATION TECHNIQUE',
      ['THE OMNIVERSE SOUL, THEN',
       'every soul fused into one.'],
      'THE HAND THAT BEAT PUPAHYA.'),
     ('PYCHOTETHICALICIA',
      ['GOES BEYOND THE SOULS.',
       'GASTER HIMSELF TURNS FURIOUS.'],
      'FURY + PYCHOPATHICAL.'),
     ],
    ['HIS STRONGEST ATTACK IS NOW',
     'THE PYCHOPATHICAL BARRAGE ATTACK.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
