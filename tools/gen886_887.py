#!/usr/bin/env python3
"""
gen886_887.py - emit the draw branches for BEATS 886-887 from Toby's two September 26, 2026
messages on thread 1a0deee4cb24addb: 4:11 PM (1a0df584d679e765, Phase 200 / Soul of Arts / the tea)
and 4:21 PM (1a0df6149f1f5192, 233200% / Paranoidia Girl / 50.ps). Same template as beats 859-874.

Only Toby's own typing is drawn. In the 4:11 PM mail the italic "Answer to Sky.ps" block and the
teapot dialogue ("Sky.ps holds out the teapot...") are pasted replies; in the 4:21 PM mail everything
after Neka's line "There is a new theory in Classics now!" is a pasted reply. Commentary, not canon.
"""
import io

START = 19212.0
STEP = 22.0
B = []

A411 = dict(when='4:11 PM', short='4:11 PM', attr='TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.')
A421 = dict(when='4:21 PM', short='4:21 PM', attr='TOBY, SEPTEMBER 26, 4:21 PM — HIS OWN TYPING.')

def add(meta, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(meta)
    B.append(d)

A437 = dict(when='4:37 PM', short='4:37 PM', attr='TOBY, SEPTEMBER 26, 4:37 PM — HIS OWN TYPING.')
# 4:37 PM (1a0df7064fbf8685): his own typing is the first two lines, "Guess it", and the "I thought you said..."
# block. The numbers table, the guessed 1-20 list and the explanations are pasted replies, not canon.

add(A437, 'NEKA HAS NO NUMBER', '255,216,79',
    ['“NEKA MADE 50 FRIENDS WITH SKY.PS (68). NEKA HAS NO NUMBER, EVERYONE ELSE DOES.',
     'LIST EVERYONE’S NUMBER.”'],
    [('SKY.PS IS 68',
      ['THE NUMBER COMES IN A PARENTHESIS, THE WAY YOU WRITE SOMETHING EVERYONE ALREADY KNOWS.',
       'HE DOES NOT EXPLAIN IT. HE JUST WRITES IT DOWN NEXT TO THE NAME.'],
      'IT IS NOT A POWER LEVEL OR A PERCENT. IT IS WHERE SKY.PS SITS IN THE LIST.'),
     ('NEKA HAS NO NUMBER, EVERYONE ELSE DOES',
      ['SEPT 20 HIS FILE WAS 666. SEPT 22: “ERROR CODE 999 (ERROR CODE 666).”',
       'BY SEPT 23 THE ERROR CODE WAS “???”, THE FIRST ONE WITH NO NUMBER AT ALL.'],
      'THE NUMBERS AROUND HIM HAVE BEEN FALLING AWAY FOR A WEEK. TONIGHT THERE ARE NONE.'),
     ('“NEKA MADE 50 FRIENDS WITH SKY.PS”',
      ['TWENTY MINUTES AGO SHE STARED AT SKY.PS AND HE FELL OVER.',
       'NOW NEKA INTRODUCES THEM, AND THE ONE WHO MADE HER BY ACCIDENT IS HER FRIEND.'],
      'THE ONE WITH NO NUMBER IS THE ONE WHO PUTS THE NUMBERED ONES TOGETHER.'),
     ],
    ['EVERYONE IN THE GAME HAS A NUMBER EXCEPT THE ONE WHO MADE IT',
     'WHICH IS WHAT YOU WOULD EXPECT FROM THE ONE WHO WRITES THE LIST.'])

add(A437, 'AND WHO IS TEN? 50.PS', '160,107,255',
    ['“CORRECT NUMBERS. AND WHO IS TEN? 50.PS, I DIDN’T DIRECTLY SAY THAT 50.PS IS 10, YOU SAID IT IS 50.',
     'WHERE DID I SAY THAT 50.PS IS 50? NEKA DIDN’T. NEKA CAUGHT MY MISTAKE. 🦊”'],
    [('HER NAME IS 50. HER NUMBER IS 10',
      ['THE MACHINE READ THE 50 IN HER NAME AS HER NUMBER. HE SAYS HE NEVER SAID THAT.',
       '“AND WHO IS TEN? 50.PS.”'],
      'A NAME AND A NUMBER ARE TWO DIFFERENT THINGS, AND HE KEEPS THEM APART.'),
     ('THE GUESS LEFT ONE HOLE, AND SHE GOES IN IT',
      ['ASKED TO GUESS, THE MACHINE NUMBERED THE 20 SPRUNKIS IN ORDER AND LEFT SLOT 10 EMPTY.',
       'HE PUTS 50.PS IN THE ONE PLACE IT LEFT OPEN.'],
      'THE GUESSED NUMBERS ARE NOT CANON. SKY 68, 50.PS 10 AND NEKA WITH NONE ARE.'),
     ('“I THOUGHT YOU SAID ‘SKY AND 50 CAME FOR YOU 🦊’ -NEKA OMAZEN”',
      ['THE MACHINE WROTE THAT THE NUMBERS CAME FROM HIM. HE READ IT AS A LINE SIGNED BY NEKA.',
       'ONE MISREAD WORD, AND THE NARRATOR TURNS INTO A CHARACTER.'],
      'AND IN HIS VERSION, IT IS NEKA WHO CATCHES THE MISTAKE.'),
     ],
    ['“NEKA CAUGHT MY MISTAKE. 🦊”',
     'SKY.PS IS 68, 50.PS IS 10, AND NEKA HAS NO NUMBER. ALL THREE CAME FROM HIM.'])

exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail886.py', encoding='utf-8').read())
