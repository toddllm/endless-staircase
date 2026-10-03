#!/usr/bin/env python3
"""
gen978.py - emit the draw branch for BEAT 978 from Toby's October 3, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-977 (emit_tail933.py).

  12:46 PM  1a102a8f3db9b504  -> no beat of its own: a Gemini video prompt (chatbot prose)
                                 retelling beat 976. Referenced in panel 1 only.
  12:56 PM  1a102b23e22ca024  -> 978 (I'm so tired...)

Only Toby's own first paragraph of the 12:56 PM message is canon; the italic recap under it is the
chatbot's. The Japanese line in panel 2 follows beat 977 (Pressuretale is all Japanese) and is
labelled with Toby's English.
"""
import io

BASE = 978
TAG = '978'
START = 21236.0
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

add(meta('12:56 PM'), 'I’M SO TIRED...', '230,232,245',
    ['“HERE IS THE RESULT. GASTER USES PYCHOTETHICALICIA, THEN HE SAYS ‘I’M SO TIRED...’,',
     'THEN HE FALLS OVER AND SLEEPS. GASTER HIMSELF STANDS IN A BLACK VOID,',
     'HE ABSORBED THE COLOR, MAKING IT WHITE.”'],
    [('THE RESULT',
      ['TEN MINUTES EARLIER HE ASKED FOR A VIDEO OF THE GASTER ATTACK.',
       'THE ATTACK IS BEAT 976. THIS IS WHAT HAPPENS AFTER IT.'],
      'IT KOS ANYTHING, AND IT USES UP GASTER TOO.'),
     ('もう疲れた……',
      ['PRESSURETALE IS ALL JAPANESE (BEAT 977),',
       'SO THIS IS HOW HE SAYS IT THERE.'],
      'I’M SO TIRED... THEN HE FALLS OVER AND SLEEPS.'),
     ('THE VOID TURNS WHITE',
      ['GASTER STANDS ALONE IN THE BLACK VOID.',
       'HE ABSORBS THE COLOR, AND THE VOID TURNS WHITE.'],
      'NEKA WAS TIRED AND ASLEEP BEFORE. NOW NEKA IS INSIDE GASTER, AND GASTER SLEEPS.'),
     ],
    ['THE STRONGEST ATTACK IN THE GAME ENDS IN A NAP.',
     'GASTER WON. NOW HE SLEEPS IN A WHITE VOID.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
