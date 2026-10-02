#!/usr/bin/env python3
"""
gen973.py - emit the draw branch for BEAT 973 from Toby's October 2, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-972 (emit_tail933.py),
plus a hand-drawn Gaster in the empty middle band (spliced by build973.py).

  5:23 PM  1a0fe805e890b09b  -> 973 (The Pressuretale intro screen)
  5:25 PM  1a0fe822b1b64aa4  -> 973 (what Play, Settings and Credits do)
  5:31 PM  1a0fe87e4409a7e5  -> quote only, no new text, no beat

Only Toby's typing is canon: "Show a intro screen thing of Pressuretale, as like they have on most
Roblox games." and "Pressing Play will glitch the game and you get a 404 error, Settings same as the
play, and Credits it will say "Toby Fox for Undertale and Deltarune, Toby Deshane and Claude and
ChatGPT and others for lore, Game by Pressuretale Gaster"". The bold lines, the button table and
"Credits the only working button" are the chatbot's, not drawn as Toby's. Prior: beat 972.
"""
import io

BASE = 973
TAG = '973'
START = 21126.0
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

P523 = meta('5:23 AND 5:25 PM')

add(P523, 'THE PRESSURETALE INTRO SCREEN', '110,160,255',
    ['“SHOW A INTRO SCREEN THING OF PRESSURETALE,',
     'AS LIKE THEY HAVE ON MOST ROBLOX GAMES.',
     'PRESSING PLAY WILL GLITCH THE GAME AND YOU GET A 404 ERROR.”'],
    [('[ PLAY ]',
      ['THE GAME GLITCHES.',
       '404 ERROR.'],
      'PRESSING PLAY WILL GLITCH THE GAME.'),
     ('[ SETTINGS ]',
      ['SAME AS THE PLAY.',
       '404 ERROR.'],
      'OCT 2, BEAT 972: GASTER DELETED CLASSICS, PRESSURE AND ALL THE OTHER GAMES.'),
     ('[ CREDITS ]',
      ['TOBY FOX FOR UNDERTALE AND DELTARUNE,',
       'TOBY DESHANE AND CLAUDE AND CHATGPT AND OTHERS FOR LORE,'],
      'GAME BY PRESSURETALE GASTER'),
     ],
    ['THE INTRO SCREEN. GASTER IS ON IT.',
     'EVERYONE WAS SENT TO PRESSURETALE. THIS IS THE FIRST THING THEY SEE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
