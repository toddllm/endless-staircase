#!/usr/bin/env python3
"""
gen958.py - emit the draw branches for BEATS 958-959 from Toby's October 1, 2026 message,
thread 1a0deee4cb24addb. Same template as 933-957 (emit_tail933.py).

  4:03 PM  1a0f9106be70b925  -> 958 (Anything 12), 959 (Everyone! Don't be afraid!)

Only Toby's typing is canon: "Try Neka; 12. saying 12 12 12 doesn't matter ... He is Anything 12 ...
Neka is the top 1, and even 0." and the "Everyone! Don't be afraid!" scene. The SCP-053 vs SCP-2094
verdict, the restatements, and the description of the Gemini video frames are the chatbot's, not drawn.
Priors: Aug 15 9:48 AM "12 12 12 is a calling of Pero"; Aug 21 "Entity 12 12 12 is Pero";
Sept 25 "Neka Omazen is not Pero LAI" (beat 806).
"""
import io

BASE = 958
TAG = '958'
START = 20796.0
STEP = 22.0
DATE_LONG = 'October 1'
DATE_SHORT = 'OCT 1'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 1, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

A403 = meta('4:03 PM')

add(A403, 'ANYTHING 12', '120,200,255',
    ['“SAYING THE NUMBER EVEN ONCE WILL ANSWER NEKA, NO MATTER HOW MANY TIMES YOU SAY 12.',
     'HE IS ANYTHING 12. ENTITY 12, CAN BE SCP 12, ANYTHING 12.',
     'NEKA IS THE TOP 1, AND EVEN 0.”'],
    [('ONE 12 IS ENOUGH',
      ['12 12 12 IS JUST SAYING THE NUMBER 3 TIMES. ONCE ANSWERS HIM.',
       'ENTITY 12. SCP 12. ANYTHING 12.'],
      'AUG 15: 12 12 12 WAS A CALLING OF PERO. NOW ONE 12 CALLS NEKA.'),
     ('HATED BY EVERYONE',
      ['NOT JUST SPRUNKIS. BASICALLY EVERYONE.',
       'HE WAS THE MOST POWERFUL, SO SOME EVEN TRY TO ATTACK HIM.'],
      'A NORMAL ANIME MAN.'),
     ('TOP 1, AND EVEN 0',
      ['THE MOST POWERFUL BEING IN FICTION, META, AND REALITIES.',
       'NOWHERE HAS A BEING STRONGER.'],
      '0: NEKA. 1: NEKA. 2 ONWARD: EVERYONE ELSE.'),
     ],
    ['12 IS HIS NUMBER, NOT HIS PLACE. HIS PLACE IS 0.',
     'SAY IT ONCE AND HE ANSWERS.'])

add(A403, 'EVERYONE! DON’T BE AFRAID!', '190,120,255',
    ['“NEKA SAYS ‘EVERYONE! DON’T BE AFRAID!’. EVERYONE RUNS AROUND SCREAMING.',
     'NEKA MAKES THE VOID TAKE NEARLY ALL OF THEM. NEKA SETS OREN.PS’S HP TO 1.',
     'NEKA MADE DAMAGE NULLIFIED.”'],
    [('DON’T BE AFRAID',
      ['HE SAYS IT. EVERYONE RUNS AROUND SCREAMING.',
       'THE VOID TAKES NEARLY ALL OF THEM.'],
      'NEARLY ALL. NOT ALL.'),
     ('OREN.PS: HP 1',
      ['NEKA SETS OREN.PS’S HP TO 1.',
       'THEN NEKA MADE DAMAGE NULLIFIED.'],
      'ONE HIT POINT LEFT, AND NOTHING CAN TAKE IT.'),
     ('KEEP PUNISHING',
      ['“I WANT TO HELP YOU, BUT INSTEAD,',
       'I HAVE TO KEEP PUNISHING YOU ALL.”'],
      'HE SAYS HE WANTS TO HELP.'),
     ],
    ['“I WANT TO HELP YOU, BUT INSTEAD, I HAVE TO KEEP PUNISHING YOU ALL.”',
     'NEKA, TOP 1 AND EVEN 0.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
