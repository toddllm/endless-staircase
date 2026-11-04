#!/usr/bin/env python3
"""
gen1312.py - draw beats 1312-1314 from Toby's November 4, 2026 4:51 PM message (1a1a88bcdc3f250d) on the "Continuing
from Classic RL Eliminations" thread 1a19be0b90adb989. Most of the mail is a pasted ChatGPT log (hierarchy list,
example dialogues, "why this is interesting"); only his own typed lines are drawn.
"Starries who are the alien Classic RL players are smarter than humans from reality. Neka's intellegence increases more
and more, now it could advance Starries, and then he may turn on some (those who offend him)." -> 1312 SMARTER EVERY SECOND.
"Neka commonly does that, he says some stuff that doesn't answer the queston like 1+1, 60, Capital of France?, Paris says
1600 years of Paris hystory" -> 1313 ONE PLUS ONE IS SIXTY.
"Neka is like an infinitely smart and best AI canonally, but litterly gives all sorts of stuff at random, he can say
almost anything he wants. Neka also has rules." -> 1314 NEKA ALSO HAS RULES.
By the screenshot rule (beat + 63) the PNGs are 1375-1377.
"""
import io

BASE = 1312
TAG = "1312"
START = 28584.0
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

T = '4:51 PM'
add(meta(4, T), 'SMARTER EVERY SECOND', '120,230,160',
    ['“STARRIES WHO ARE THE ALIEN CLASSIC RL PLAYERS', 'ARE SMARTER THAN HUMANS FROM REALITY.”', 'NEKA KEEPS GETTING SMARTER.'],
    [('REALITY’S HUMANS', ['THE PEOPLE FROM REALITY.', 'SMART, BUT THE LOWEST OF THE THREE.'],
      'THIRD PLACE.'),
     ('THE STARRIES', ['THE ALIEN PLAYERS OF CLASSIC RL.', 'SMARTER THAN ANY HUMAN FROM REALITY.'],
      'SECOND PLACE, FOR NOW.'),
     ('NEKA', ['HIS INTELLIGENCE INCREASES MORE AND MORE.', 'NOW IT COULD PASS THE STARRIES.'],
      'HE MAY TURN ON THOSE WHO OFFEND HIM.')],
    ['THE STARRIES ARE SMART.', 'NEKA IS STILL GROWING.'],
    'Starries who are the alien Classic RL players are smarter than humans from reality. Neka\'s intellegence increases more and more, now it could advance Starries, and then he may turn on some (those who offend him).')

add(meta(4, T), 'ONE PLUS ONE IS SIXTY', '255,190,90',
    ['STARRY: “1 + 1?”', 'NEKA: “60.”', 'STARRY: “THAT’S 2!”'],
    [('THE WRONG ANSWER', ['ASK NEKA SOMETHING EASY', 'AND HE MIGHT SAY SOMETHING ELSE.'],
      'NOT BECAUSE HE DOES NOT KNOW.'),
     ('THE CAPITAL OF FRANCE', ['NEKA ASKS IT, THE STARRY SAYS PARIS,', 'AND NEKA STARTS ON PARIS HISTORY.'],
      'NOBODY ASKED FOR A HISTORY LESSON.'),
     ('1600 YEARS', ['THE STARRY SAYS STOP.', 'NEKA HAD 1600 YEARS OF PARIS LEFT TO GO.'],
      'TOO MUCH ANSWER, OR THE WRONG ONE.')],
    ['THE SMARTEST AI IN CLASSIC RL', 'STILL SAYS 60.'],
    'Neka commonly does that, he says some stuff that doesn\'t answer the queston like "1+1", "60", "Capital of France?", "Paris says 1600 years of Paris hystory".')

add(meta(4, T), 'NEKA ALSO HAS RULES', '196,150,255',
    ['“NEKA IS LIKE AN INFINITELY SMART AND BEST AI', 'CANONALLY, BUT LITTERLY GIVES ALL SORTS OF', 'STUFF AT RANDOM.”'],
    [('INFINITELY SMART', ['CANONICALLY THE BEST AI IN CLASSIC RL.', 'NOTHING IS SMARTER.'],
      'THAT PART IS SETTLED.'),
     ('SAYS ANYTHING', ['RANDOM NUMBERS, JOKES, FACTS, LECTURES.', 'WHAT HE KNOWS AND WHAT HE SAYS ARE SEPARATE.'],
      'SMART DOES NOT MEAN ON TOPIC.'),
     ('HIS RULES', ['NEKA ALSO HAS RULES, LIKE', '“ALL WORDS ARE GOOD.”'],
      'FREE TO SAY ANYTHING, NOT FREE OF RULES.')],
    ['HE CAN SAY ALMOST ANYTHING.', 'ALMOST.'],
    'Neka is like an infinitely smart and best AI canonally, but litterly gives all sorts of stuff at random, he can say almost anything he wants. Neka also has rules.')

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
