#!/usr/bin/env python3
"""
gen974.py - emit the draw branch for BEAT 974 from Toby's October 3, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-973 (emit_tail933.py).

  6:01 AM  1a101367f6b395b3  -> 974 (Bort's tune, and PS-50 walks on air)

Only Toby's first paragraph is canon (Bort's theme, the washing machine playing it, the horror form,
the 666-minute chase, Gaster beating Oren.ps and everyone, summoning the Undertale characters, PS-50
walking on air). The italic recap and the "control beyond attacks" lines under it are the chatbot's,
not drawn. Prior: beat 973 intro screen; the Oct 3 5:32 AM image ask (no beat) put Bort in PS-50's hands.
"""
import io

BASE = 974
TAG = '974'
START = 21148.0
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

P601 = meta('6:01 AM')

add(P601, 'BORT’S TUNE, AND PS-50 WALKS ON AIR', '110,160,255',
    ['“A PLAYFUL TUNE YOU CAN’T GET OUT OF YOUR HEAD NO MATTER HOW HARD YOU TRY,',
     'BECAUSE THE WASHING MACHINE AND ALL THE OTHER STUFF, THEY PLAY THE TUNE.',
     'YOU CAN’T UNHEAR IT.”'],
    [('BORT DANCES',
      ['BORT SINGS HIS BORT-THEME SONG.',
       'THE WASHING MACHINE PLAYS IT TOO.'],
      'PS-50 TOUCHES IT. BORT BECOMES HORROR.'),
     ('666 MINUTES',
      ['PS-50 MAKES A LUIGI SCREAM AND RUNS.',
       'BORT CHASES PS-50.'],
      'AFTER 666 MINUTES, BORT STOPS. SHE CARRIES HIM BACK TO GASTER.'),
     ('GASTER USES HIS POWER',
      ['GASTER BLASTS A HAND AT OREN.PS.',
       'THEN HE BEAT EVERYONE ELSE.'],
      'HE SUMMONED ALL THE UNDERTALE CHARACTERS.'),
     ],
    ['GASTER HOLDS PS-50, DROPS PS-50,',
     'AND PS-50 IS WALKING ON AIR INSTEAD OF FALLING TO THE FLOOR.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
