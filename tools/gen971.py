#!/usr/bin/env python3
"""
gen971.py - emit the draw branch for BEAT 971 from Toby's October 2, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-970 (emit_tail933.py).

  6:40 AM  1a0fc33719c1061e  -> 971 (The game happens to change)

Only Toby's typing is canon: "Neka Omazen after 7 days comes back up, and he uses small barrages,
then he walks away. Gaster walks into the room. Then the game happens to change. The most terrifying
one." The italic retelling under it is the chatbot's, not drawn. Answers the Oct 1 question
"does Neka respawn?". Priors: Oct 1 beat 970 "I am now... dead."; Oct 1 beat 969 "how was the fall?".
"""
import io

BASE = 971
TAG = '971'
START = 21082.0
STEP = 22.0
DATE_LONG = 'October 2'
DATE_SHORT = 'OCT 2'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 2, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

A640 = meta('6:40 AM')

add(A640, 'THE GAME HAPPENS TO CHANGE', '255,70,90',
    ['“NEKA OMAZEN AFTER 7 DAYS COMES BACK UP, AND HE USES SMALL BARRAGES,',
     'THEN HE WALKS AWAY. GASTER WALKS INTO THE ROOM.',
     'THEN THE GAME HAPPENS TO CHANGE. THE MOST TERRIFYING ONE.”'],
    [('AFTER 7 DAYS',
      ['NEKA OMAZEN COMES BACK UP.',
       'THE DEATH WAS NOT THE END.'],
      'OCT 1, BEAT 970: “I AM NOW... DEAD.” NEKA FALLS OVER.'),
     ('SMALL BARRAGES',
      ['HE USES SMALL BARRAGES,',
       'THEN HE WALKS AWAY.'],
      'NOT PARANOIDIA THIS TIME. JUST SMALL ONES. THEN HE LEAVES.'),
     ('GASTER WALKS INTO THE ROOM',
      ['NEKA LEAVES. GASTER ENTERS.',
       'THEN THE GAME HAPPENS TO CHANGE.'],
      'OCT 1, BEAT 969: THE SPRUNKIS ASKED GASTER “HOW WAS THE FALL?”'),
     ],
    ['THE MOST TERRIFYING ONE.',
     'WHAT THE GAME CHANGES INTO IS NOT REVEALED YET.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
