#!/usr/bin/env python3
"""
gen1144.py - draw the branches for BEATS 1144-1145 from Toby's October 14, 2026, 6:24 AM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a139f104aa50810 Email 1794).
Same template as 1008-1143 (emit_tail1008.py). Only Toby's own typed lines are drawn; the rest of the email is a pasted
chatbot session (the "13 foxes" count, the "older fox forms" guess, the Recognition/Teasing/Warning/Transformation list,
the italic restatements) and is commentary.
"""
import io

BASE = 1144
TAG = "1144"
START = 24888.0
STEP = 22.0
B = []

MONTH = {14: 'OCTOBER 14'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 14, 6:24 AM (Email 1794) ----------------
add(meta(14, '6:24 AM'), '🦊 = WHAT THEY THINK IS A LIE', '255,140,60',
    ['“NEKA SAYS IT AS “🦊 = SOMETHING GASTER AND LUIGI INUS', 'SAY THAT THEY THINK IS A LIE.””', 'THE CHATBOT GUESSED “OLDER FOX FORMS”. HE OVERRULED IT.'],
    [('100% THE GAME', ['OCT 12, 1:29 PM: ALEX: “THIS IS 100% THE GAME. ... NOTHING', 'IRREGULAR HAPPENING. 😉” LUIGI INUS: “🦊”. GASTER: “🦊”.'],
      'THE FIRST TWO FOXES. NOW WE KNOW WHAT THEY MEANT.'),
     ('EIGHTEEN FOXES', ['OCT 12, 1:34 PM: “THIS GAME IS CORRECT.” LUIGI INUS SENDS', '🦊 EIGHTEEN TIMES “AND HE JUST SCAMS THE FOX EMOJI”.'],
      'EIGHTEEN TIMES “I THINK THAT IS A LIE.”'),
     ('THINKING IT IS A LIE DOES NOT MAKE IT ONE', ['NEKA’S FOX FORMS ARE REAL: “MWEH HEH HEH. 🦊” (SEPT 26),', '0% FOX (SEPT 27). BUT 🦊 HERE IS NOT ABOUT THEM.'],
      'THE SYMBOL IS THEIR DOUBT. IT PROVES NOTHING EITHER WAY.')],
    ['“🦊 = SOMETHING ... THEY THINK IS A LIE.”', 'EVERY FOX SINCE OCT 12 WAS A DOUBT. NEKA DEFINES THE WORD.'])

add(meta(14, '6:24 AM'), 'THE ATTACK IS COMPLETE', '230,60,60',
    ['“ALEX SAYS AGAIN “THIS IS THE GAME, THE ATTACK IS COMPLETE!”', 'LUIGI INUS SAYS “🦊” ONCE AGAIN.”', 'ONE MORE FOX. ONE MORE DOUBT.'],
    [('OCTOBER 12, NOT 31', ['OCT 12, 1:34 PM: “IT IS OCTOBER 12, NOT 31.” GASTER:', '“I KNOW YOU ONLY ATTACK ON 31, BUT THIS ISN’T-”'],
      'TWO DAYS AGO: NOT AN ATTACK. NOW: THE ATTACK IS COMPLETE.'),
     ('NOT A GLITCH', ['OCT 12, 1:50 PM: “JUST THE NORMAL GAME, NOT A GLITCH.”', '“THIS IS THE GAME, JUST HORROR, NO EXTRA NONSENSE. 😌”'],
      'THE SAME CLAIM, SAID AGAIN. LUIGI DOUBTED IT THEN TOO.'),
     ('CHAPTER 2 PHASE 2', ['OCT 14, 5:48 AM: “NEKA OMAZEN CONTINUES WITH CHAPTER 2', 'PHASE 2.” THIRTY-SIX MINUTES BEFORE THIS LINE.'],
      'IF THE ATTACK IS COMPLETE, WHAT IS LEFT IS THE GAME.')],
    ['“THIS IS THE GAME, THE ATTACK IS COMPLETE!” — “🦊”', 'LUIGI THINKS IT IS A LIE. THAT DOES NOT MAKE IT ONE.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
