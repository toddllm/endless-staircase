#!/usr/bin/env python3
"""
gen1303.py - draw beats 1303-1305 from Toby's November 4, 2026 messages on the "Continuing from Classic RL
Eliminations" thread 1a19be0b90adb989. Each mail ends with a ChatGPT restatement (emoji bullets, the math notes);
that part is the chatbot's and is not drawn.
6:25 AM (1a1a64eb48ea4381), his own typing: "x-position times y-position = 3. That is what Neka calculates for every
game, if you go farther than 3,3,3, then stuff gets more and more terrifying, since the game glitches there, even at
3.1, 3.1, 3.1, Gaster made that since he was the creator of Classic RL Eliminated." -> 1303 THE GLITCH LINE.
"Gaster even pushes the game farther with a new dog swarm thing where dogs cover the screen, making the only thing you
see an Undertale shaped dog. Also sometimes the lamp moves, and Papyrus spots you. Classic RL Eliminated is now fanmade
Undertale but now with so many changes through Neka code." -> 1304 DOG SWARM.
6:28 AM (1a1a65137b4cef16): "x times y = 3, and 3 times 3 times 3 = 9, x times y = 9 is the game's breaking point,
where it has 9,9,9, and it is the farthest you can move, if you move past it, the game plays again but with major
errors." -> 1305 THE BREAKING POINT.
By the screenshot rule (beat + 63) the PNGs are 1366-1368.
"""
import io

BASE = 1303
TAG = "1303"
START = 28386.0
STEP = 22.0
B = []
MONTH = {4: 'NOVEMBER 4'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- November 4, 6:25 AM ----------------
add(meta(4, '6:25 AM'), 'THE GLITCH LINE', '120,255,170',
    ['“IF YOU GO FARTHER THAN 3,3,3, THEN STUFF', 'GETS MORE AND MORE TERRIFYING, SINCE THE', 'GAME GLITCHES THERE, EVEN AT 3.1, 3.1, 3.1.”'],
    [('X TIMES Y = 3', ['X-POSITION TIMES Y-POSITION = 3.', 'NEKA CALCULATES IT FOR EVERY GAME.'],
      'THE NUMBER UNDER EVERYTHING.'),
     ('PAST 3, 3, 3', ['ONE STEP OVER THE LINE, EVEN 3.1, 3.1, 3.1,', 'AND THE GAME STARTS TO GLITCH.'],
      'THE FARTHER YOU GO, THE WORSE IT GETS.'),
     ('GASTER MADE IT', ['GASTER CREATED CLASSIC RL ELIMINATED.', 'THE GLITCH LINE IS HIS.'],
      'THE CREATOR SET THE EDGES.')],
    ['THREE, THREE, THREE IS SAFE.', 'ANYTHING PAST IT IS NOT.'],
    'x-position times y-position = 3. That is what Neka calculates for every game, if you go farther than 3,3,3, then stuff gets more and more terrifying, since the game glitches there, even at 3.1, 3.1, 3.1, Gaster made that since he was the creator of Classic RL Eliminated.')

add(meta(4, '6:25 AM'), 'DOG SWARM', '235,235,235',
    ['“DOGS COVER THE SCREEN, MAKING THE ONLY', 'THING YOU SEE AN UNDERTALE SHAPED DOG.', 'ALSO SOMETIMES THE LAMP MOVES.”'],
    [('THE SWARM', ['GASTER PUSHES THE GAME FARTHER.', 'DOGS FILL THE SCREEN UNTIL ONE DOG SHAPE IS LEFT.'],
      'YOU CANNOT SEE ANYTHING ELSE.'),
     ('THE LAMP MOVES', ['YOU HIDE BEHIND THE LAMP.', 'SOMETIMES THE LAMP MOVES, AND PAPYRUS SPOTS YOU.'],
      'THE HIDING PLACE IS NOT SAFE.'),
     ('FANMADE UNDERTALE', ['CLASSIC RL ELIMINATED IS NOW FANMADE UNDERTALE,', 'CHANGED OVER AND OVER THROUGH NEKA CODE.'],
      'GASTER BUILT IT. NEKA CODE REWROTE IT.')],
    ['ONE UNDERTALE DOG FILLS THE WHOLE SCREEN.', 'THEN THE LAMP MOVES.'],
    'Gaster even pushes the game farther with a new dog swarm thing where dogs cover the screen, making the only thing you see an Undertale shaped dog. Also sometimes the lamp moves, and Papyrus spots you. Classic RL Eliminated is now fanmade Undertale but now with so many changes through Neka code.')

# ---------------- November 4, 6:28 AM ----------------
add(meta(4, '6:28 AM'), 'THE BREAKING POINT', '255,90,90',
    ['“X TIMES Y = 9 IS THE GAME’S BREAKING POINT,', 'WHERE IT HAS 9,9,9, AND IT IS THE FARTHEST', 'YOU CAN MOVE.”'],
    [('9, 9, 9', ['THE FARTHEST POINT IN THE WHOLE GAME.', 'YOU CANNOT MOVE ANY FARTHER.'],
      'THE WALL AT THE EDGE OF THE MAP.'),
     ('MOVE PAST IT', ['STEP OVER 9, 9, 9 AND THE GAME PLAYS AGAIN,', 'FROM THE START, BUT WITH MAJOR ERRORS.'],
      'IT DOES NOT END. IT RESTARTS BROKEN.'),
     ('TWO LINES', ['3, 3, 3 IS WHERE THE GLITCHES START.', '9, 9, 9 IS WHERE THE GAME BREAKS.'],
      'BETWEEN THEM, IT ONLY GETS WORSE.')],
    ['PAST THE BREAKING POINT,', 'CLASSIC RL ELIMINATED PLAYS AGAIN, WRONG.'],
    "x times y = 3, and 3 times 3 times 3 = 9, x times y = 9 is the game's breaking point, where it has 9,9,9, and it is the farthest you can move, if you move past it, the game plays again but with major errors.")

exec(open('/Users/tdeshane/endless-staircase/tools/rewrap1176.py', encoding='utf-8').read()); rewrap(B)
bad = []
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        if len(ln) > 60: bad.append((b['key'], len(ln), ln))
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            if len(ln) > 58: bad.append((b['key'], len(ln), ln))
    assert len(b['quote']) == 3 and len(b['panels']) == 3 and len(b['close']) == 2, b['key']
assert not bad, bad
assert len(B) == 3, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
