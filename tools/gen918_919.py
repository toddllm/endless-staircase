#!/usr/bin/env python3
"""
gen918_919.py - emit the draw branches for BEATS 918-919 from Toby's September 27, 2026 7:12 PM message
(1a0e524bf7fcc7f9), thread 1a0deee4cb24addb. Same template as 912-917.

Only Toby's own typing about Classics is drawn: "Neka Omazen VS PS-50 would be extremely chaotic and scary"
through "when he reaches his human form and becomes 0% fox." The prose under it ("That would be a frightening
matchup...", "Your human form, 0% fox idea gives Neka a possible turning point...") is pasted chatbot text and is
NOT canon. The "Jesus 777 VS 67 Kid Demon" YouTube matchup at the top is outside Classics and is not drawn.
"""
import io

START = 19916.0
STEP = 22.0
B = []

A712 = dict(when='7:12 PM', short='7:12 PM', attr='TOBY, SEPTEMBER 27, 7:12 PM — HIS OWN TYPING.')

def add(meta, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(meta)
    B.append(d)

add(A712, 'IMMUNE TO EACH OTHER', '255,90,90',
    ['“NEKA OMAZEN VS PS-50 WOULD BE EXTREMELY CHAOTIC AND SCARY, ONE HAS MORE POWERS AND CREATED THE GAME,',
     'THE OTHER IS IMMUNE TO NEKA OMAZEN AND HAS IT’S OWN POWER.',
     'NEKA AND 50 ARE IMMUNE TO EACH OTHER,”'],
    [('NEKA OMAZEN IS IMMUNE',
      ['SEPT 27, 8:12 AM: PS-50’S PARANOID HORROR MAKES EVERYONE FALL. “NEKA OMAZEN IS IMMUNE.”',
       'TONIGHT IT GOES BOTH WAYS. SHE IS IMMUNE TO HIM TOO.'],
      'IMMUNE TO EACH OTHER.'),
     ('NOT EVEN A DENT',
      ['SEPT 26, 6:33 PM: PS-50 IS IMPOSSIBLE CODE, WITH A CODE LAYER SHE CAN EDIT.',
       '“NEKA CAN’T PUT EVEN A DENT IN THAT.”'],
      'THAT WAS THE FIRST SIGN.'),
     ('ONE CREATED THE GAME',
      ['NEKA HAS MORE POWERS AND CREATED THE GAME. PS-50 HAS HER OWN POWER.',
       'AT 5:24 PM THEY STOOD AS THE MOST POWERFUL BEINGS. NOW THEY FACE EACH OTHER.'],
      'EXTREMELY CHAOTIC AND SCARY.'),
     ],
    ['NEKA OMAZEN VS PS-50',
     'THE TWO AT THE TOP.'])

add(A712, '0% FOX', '255,120,60',
    ['“BUT NEKA WOULD PROBUBLY WIN,',
     'WHEN HE REACHES HIS HUMAN FORM',
     'AND BECOMES 0% FOX.”'],
    [('THE ACTUAL FOX BEING',
      ['SEPT 24, 4:37 PM: “NEKA OMAZEN IS THE ACTUAL FOX BEING IN THE GAME.”',
       'CAT EARS AND A FOX TAIL. AT 0%, NONE OF THE FOX IS LEFT.'],
      'THE FOX IS WHAT HE LETS GO OF.'),
     ('HIGH POWER PERCENT',
      ['SEPT 26, 6:41 PM, VS WENDA.PS: “NEKA WOULD EASILY WIN AT HIGH POWER PERCENT.”',
       'AGAINST PS-50 THE NUMBER THAT MATTERS GOES THE OTHER WAY. DOWN TO 0.'],
      'ONE PERCENT UP, ONE PERCENT DOWN.'),
     ('PROBUBLY',
      ['NOT “WOULD WIN.” PROBUBLY. AND ONLY WHEN HE REACHES THE HUMAN FORM.',
       'UNTIL THEN, NEKA AND 50 ARE STILL IMMUNE TO EACH OTHER.'],
      'THE FIGHT IS NOT OVER YET.'),
     ],
    ['0% FOX',
     'HIS HUMAN FORM.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail918.py', encoding='utf-8').read())
