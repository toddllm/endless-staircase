#!/usr/bin/env python3
"""
gen972.py - emit the draw branch for BEAT 972 from Toby's October 2, 2026 message
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-971 (emit_tail933.py).

  4:51 PM  1a0fe62e1477162d  -> 972 (Everyone to Pressuretale)

Only Toby's typing is canon: "Neka Omazen then walked to the heroes, and he makes Paranoidia Barrage.
The heroes didn't survive. PS-50 and Gaster survived. Gaster battled PS-50 and won easily. Then is the
stuff in the document happened. After, Gaster became extreme, he deleted Classics and Pressure and all
the other games, and he sent EVERYONE to Pressuretale." The italic line, the numbered sequence and the
uranium details under it are the chatbot's, not drawn. Answers the Oct 2 question "does Gaster change
the game himself?": yes. Priors: beat 971 Gaster walks in; beat 970 Paranoidia; beat 969 Pressuretale.
"""
import io

BASE = 972
TAG = '972'
START = 21104.0
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

P451 = meta('4:51 PM')

add(P451, 'EVERYONE TO PRESSURETALE', '110,160,255',
    ['“GASTER BATTLED PS-50 AND WON EASILY. AFTER, GASTER BECAME EXTREME,',
     'HE DELETED CLASSICS AND PRESSURE AND ALL THE OTHER GAMES,',
     'AND HE SENT EVERYONE TO PRESSURETALE.”'],
    [('PARANOIDIA BARRAGE',
      ['NEKA WALKED TO THE HEROES.',
       'THE HEROES DIDN’T SURVIVE.'],
      'ONLY PS-50 AND GASTER SURVIVED.'),
     ('GASTER VS PS-50',
      ['GASTER BATTLED PS-50',
       'AND WON EASILY.'],
      'THEN THE STUFF IN THE DOCUMENT HAPPENED.'),
     ('GASTER BECAME EXTREME',
      ['CLASSICS. PRESSURE. ALL THE OTHER GAMES.',
       'DELETED.'],
      'OCT 1, BEAT 969: PRESSURETALE, THE PRESSURE AU. NOW IT IS THE ONLY ONE LEFT.'),
     ],
    ['GASTER CHANGED THE GAME HIMSELF.',
     'OCT 2, BEAT 971: GASTER WALKED INTO THE ROOM. THIS IS WHAT CAME NEXT.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
