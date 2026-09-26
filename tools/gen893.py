#!/usr/bin/env python3
"""
gen893.py - emit the draw branch for BEAT 893 from Toby's September 26, 2026 5:37 PM message
(1a0dfa77cb9106a3, thread 1a0deee4cb24addb): the real PS-50 has a brain, and the paranoia is gradual.
Same template as beats 888-892.

Only Toby's own typing is drawn: "I made a Roblox Luigi Green thing..." through "then would be the paranoid."
Everything from "Got it. I made PS-50's effect too immediate" on is a pasted reply. Commentary, not canon.
"""
import io

START = 19366.0
STEP = 22.0
B = []

A537 = dict(when='5:37 PM', short='5:37 PM', attr='TOBY, SEPTEMBER 26, 5:37 PM — HIS OWN TYPING.')

def add(meta, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(meta)
    B.append(d)

add(A537, 'THE REAL ONE HAS A BRAIN', '255,45,181',
    ['“THE REAL ONE HAS A BRAIN, GOT IT? PS-50 HAS INTELEGENCE OF A MAN, AND THE FORM OF A CHILD.',
     'SHE HAS ALL LUIGI GREEN’S MEMORIES STORED, IT DOESN’T INSTANTLY GIVE YOU PARANOID, IT TAKES TIME,',
     'BLUR INCREASES, THEN BLACKOUT, THEN WOULD BE THE PARANOID.”'],
    [('NOT JUST A KID WITH DOLLS',
      ['4:21 PM: “BASICALLY A 5 YEAR OLD CHILD FEMALE WHO JUST HAS DOLLS.”',
       '5:37 PM: THE FORM OF A CHILD, THE INTELLIGENCE OF A MAN.'],
      'SHE LOOKS FIVE. SHE THINKS LIKE LUIGI GREEN.'),
     ('ALL HIS MEMORIES',
      ['5:00 PM: “EVERYTHING WAS ERASED OF HIM EXCEPT HIS MEMORIES.”',
       'NOW: ALL OF LUIGI GREEN’S MEMORIES, STORED IN HER.'],
      'SHE REMEMBERS BEING HIM. SHE KNOWS WHAT SHE IS DOING.'),
     ('NO MORE “BOOM”',
      ['4:21 PM IT WAS INSTANT: “WHOEVER LOOKS AT HER, BOOM.”',
       'NOW IT TAKES TIME: BLUR, MORE BLUR, BLACKOUT, AND ONLY THEN PARANOIA.'],
      'YOU CAN TALK TO HER FOR A WHILE BEFORE YOU NOTICE.'),
     ],
    ['THE BLUR COMES FIRST',
     'BY THE TIME IT GOES BLACK, IT IS ALREADY TOO LATE.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail893.py', encoding='utf-8').read())
