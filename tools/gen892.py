#!/usr/bin/env python3
"""
gen892.py - emit the draw branch for BEAT 892 from Toby's September 26, 2026 5:13 PM message
(1a0df917bc5b50d2, thread 1a0deee4cb24addb): Neka asleep forever. Same template as beats 888-891.

Only Toby's own typing is drawn: "I don't think you can create an image... I made her." and the block from
"That looks as if it was taken from the game." through "Neka falls and sleeps on a bed." The image
description before it ("at her tea party with her dolls, while the white eyes...") and everything from
"That changes Para 50.ps completely." on are pasted replies. Commentary, not canon.
"""
import io

START = 19344.0
STEP = 22.0
B = []

A513 = dict(when='5:13 PM', short='5:13 PM', attr='TOBY, SEPTEMBER 26, 5:13 PM — HIS OWN TYPING.')

def add(meta, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(meta)
    B.append(d)

# Only the first two lines are his own typing; from "Neka Omazen is now *asleep forever*" on is a pasted reply.
add(A513, 'SLEEPING FOREVER ON HIS BED', '127,212,255',
    ['“NEKA OMAZEN IS SLEEPING FOREVER ON HIS BED. PS50 IS TRYING TO BE FRIENDS WITH EVERYONE ELSE,',
     'BUT WHEN SHE LOOKS AT YA, YOU WOULD GET PARANOID.”'],
    [('FROM A BED TO FOREVER',
      ['5:00 PM: “NEKA FALLS AND SLEEPS ON A BED.” 5:13 PM: HE IS “SLEEPING FOREVER.”',
       'AT 5:00 HE WAS STILL THE ONE WHO WOKE UP. THIRTEEN MINUTES LATER HE DOES NOT.'],
      '“NO ONE ELSE CAN GET BACK UP.” NOW HE CANNOT EITHER.'),
     ('TRYING TO BE FRIENDS',
      ['AT 4:21 HER FIRST WORDS WERE “WHO ARE YOU?” AND THEN “LETS HAVE A TEA PARTY!”',
       'AT 4:37 NEKA MADE HER FRIENDS WITH SKY.PS. NOW SHE TRIES WITH EVERYONE ELSE.'],
      'THE ONE WHO INTRODUCED HER IS ASLEEP. SHE HAS TO DO IT HERSELF.'),
     ('“WHEN SHE LOOKS AT YA”',
      ['THE SAME “YA” AS 5:00 PM: “PARA ALWAYS FOLLOWS YA.”',
       'SHE WANTS FRIENDS, AND LOOKING AT SOMEONE IS WHAT MAKES THEM PARANOID.'],
      'MAKING FRIENDS MEANS LOOKING AT PEOPLE. THAT IS THE WHOLE PROBLEM.'),
     ],
    ['NEKA SLEEPS AND SHE KEEPS TRYING',
     'SHE WALKS UP TO EVERYONE, AND EVERYONE SHE LOOKS AT GETS PARANOID.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail892.py', encoding='utf-8').read())
