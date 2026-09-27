#!/usr/bin/env python3
"""
gen902_904.py - emit the draw branches for BEATS 902-904 from Toby's September 27, 2026 messages
(7:52 AM 1a0e2b5ab6632dec and 7:54 AM 1a0e2b7f22bc0aff, thread 1a0deee4cb24addb). Same template as 900-901.

Only Toby's own typing is drawn. 7:52: "Neka Omazen is all dimensions in one entity, PS-50 is basically
Luigi Green in a smaller form. Neka is one foot tall (you should know that), and PS-50 is 3.587 feet tall."
The dimensions table above it answers his "List and explain all dimensions" and is the machine's reply;
"Create an image of both standing next to each other" is an image ask, no beat.
7:54: "You know who Luigi Green is? ..." through "Sky.ps would be just under 5 feet." The rest is pasted.
"""
import io

START = 19564.0
STEP = 22.0
B = []

A752 = dict(when='7:52 AM', short='7:52 AM', attr='TOBY, SEPTEMBER 27, 7:52 AM — HIS OWN TYPING.')
A754 = dict(when='7:54 AM', short='7:54 AM', attr='TOBY, SEPTEMBER 27, 7:54 AM — HIS OWN TYPING.')

def add(meta, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(meta)
    B.append(d)

add(A752, 'ALL DIMENSIONS IN ONE ENTITY', '170,140,255',
    ['“NEKA OMAZEN IS ALL DIMENSIONS IN ONE ENTITY,',
     'PS-50 IS BASICALLY LUIGI GREEN IN A SMALLER FORM.”',
     ''],
    [('ALL DIMENSIONS IN ONE ENTITY',
      ['NOT A KEY TO THE DIMENSIONS. NOT A DOOR BETWEEN THEM.',
       'EVERY DIMENSION THERE IS, HELD INSIDE ONE FOOT-TALL BODY.'],
      'HE IS NOT IN THE DIMENSIONS. THE DIMENSIONS ARE IN HIM.'),
     ('EVERYONE ELSE HAD TO MOVE THEM',
      ['JUNE: SIMON CLOSES ALL DIMENSIONS. JULY 23: ALEX SPLITS ALL DIMENSIONS',
       'AND GRAY PULLS THEM INTO A SMALL VOID. PUPAHYA OPENS THEM WITH SPEED.'],
      'THEY OPENED, CLOSED AND CARRIED THEM. NEKA JUST IS THEM.'),
     ('LUIGI GREEN IN A SMALLER FORM',
      ['5:00 PM YESTERDAY: “50 IS LUIGI GREEN.” EVERYTHING ERASED BUT HIS MEMORIES.',
       'THIS MORNING IT HAS A SIZE: SMALLER. THE SAME ONE, SHRUNK.'],
      'ONE HOLDS EVERY DIMENSION. THE OTHER HOLDS EVERY MEMORY.'),
     ],
    ['ALL DIMENSIONS IN ONE ENTITY',
     'AND THE ENTITY IS ONE FOOT TALL.'])

add(A752, '3.587 FEET TALL', '120,230,160',
    ['“NEKA IS ONE FOOT TALL (YOU SHOULD KNOW THAT),',
     'AND PS-50 IS 3.587 FEET TALL.”',
     ''],
    [('ONE FOOT. WE DID KNOW THAT.',
      ['SEPT 26, 7:04 AM: “NEKA OMAZEN IS BASICALLY 1 FOOT TALL,” HOLDING A DAGGER',
       'THE SIZE OF WENDA.PS. HE HAS KEPT THAT HEIGHT INTO THE ERA HE NAMED.'],
      'THE ONE FOOT IS OLDER THAN THE ERA.'),
     ('3.587 FEET',
      ['NOT “ABOUT THREE AND A HALF.” THREE DECIMAL PLACES.',
       'MAY 15, SIMON’S MAX HEIGHT: “ABOUT 1.98 METERS.” HERS IS ONE PLACE FINER.'],
      'SOMEBODY MEASURED HER.'),
     ('THE BIGGER ONE LOSES TO NOBODY',
      ['SHE IS 3.587 TIMES HIS HEIGHT. SHE BEATS EVERYONE, YESTERDAY 6:56 PM.',
       'HE IS THE SMALL ONE, AND HE IS THE ONLY ONE HER GAZE CANNOT BREAK.'],
      'SIZE HAS NEVER DECIDED A FIGHT IN THIS GAME.'),
     ],
    ['1 FOOT AND 3.587 FEET',
     'THE TWO WHO ARE MADE OF CODE, SIDE BY SIDE.'])

add(A754, 'THE MAIN ANTAGONIST OF CLASSICS AND BEYOND', '120,220,90',
    ['“LUIGI GREEN? THE MAIN ANTAGONIST OF CLASSICS AND BEYOND. HE FIRST HAD THE FORM OF LUIGI MARIO',
     'FROM MARIO, AND NOW HAS THE FORM OF A PSYCHIC CHILD. AND HE CALLED HIMSELF PS-50. NEKA IS AN ADULT',
     'AND IS 3 TIMES SMALLER. EVERYONE ELSE WOULD BE LIKE 5 FEET TALL, SKY.PS WOULD BE JUST UNDER 5 FEET.”'],
    [('LUIGI MARIO, THEN A PSYCHIC CHILD',
      ['JULY 23: “HE IS NOT LUIGI MARIO, HE IS LUIGI GREEN, A WHOLE DIFFERENT PERSON.”',
       'YESTERDAY 5:00 PM: “LUIGI GREEN WENT OUT OF LUIGI MARIO.” NOW THE CHILD.'],
      'TWO FORMS. THE SAME ANTAGONIST INSIDE BOTH.'),
     ('THE HEIGHT CHART',
      ['NEKA 1 FT (AN ADULT) · PS-50 3.587 FT (A CHILD) · SKY.PS JUST UNDER 5 FT',
       'EVERYONE ELSE ABOUT 5 FT. THE ADULT IS THE SMALLEST ONE IN THE GAME.'],
      'AUGUST 22 HAD THE OTHERS AT 7-9 FEET. THE CAST GOT SHORTER.'),
     ('AND BEYOND',
      ['JUNE: “THE GAME’S VILLAIN.” JULY 23: SIMON 404’S MAIN RIVAL.',
       'NOW HE IS THE MAIN ANTAGONIST OF CLASSICS, AND OF WHATEVER COMES AFTER IT.'],
      'EVERY ERA HAS HAD HIM IN IT.'),
     ],
    ['THE MAIN ANTAGONIST OF CLASSICS AND BEYOND',
     'HE CALLED HIMSELF PS-50.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail902.py', encoding='utf-8').read())
