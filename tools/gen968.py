#!/usr/bin/env python3
"""
gen968.py - emit the draw branch for BEAT 968 from Toby's October 1, 2026 messages,
thread 1a0deee4cb24addb. Same template as 933-967 (emit_tail933.py).

  5:23 PM  1a0f95a5031a792d  -> 968 (Infinite room inside him)
  5:34 PM  1a0f9648ce9f60c1  -> NO BEAT ("Create an image of all the 20 Pressure Sprunkis...", image ask)

Only Toby's typing is canon: the question line and the "Answer:" paragraph. The middle paragraphs
("Neka's height measures his visible body...", "My interpretation is...") and the italic restatement
are the chatbot's, not drawn. Priors: beat 967 The Ultimate Mass (5:02 PM, "Neka Omazen is even larger
than the Ultimate Mass, Neka Omazen can consume it all"); beat 962 Front Man of Pressure (4:34 PM,
Neka eats code, Classics consumed).
"""
import io

BASE = 968
TAG = '968'
START = 21016.0
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

A523 = meta('5:23 PM')

add(A523, 'INFINITE ROOM INSIDE HIM', '150,110,255',
    ['“NEKA IS PHYSICALLY 5-6 FEET TALL OR WHATEVER, AND HE IS LARGER THAN THE',
     'ULTIMATE MASS. HE IS LARGER BECAUSE HE IS THE CREATOR OF IT PLUS MORE. NEKA',
     'CAN CONSUME THE WHOLE MASS AND STILL HAS INFINITE ROOM INSIDE HIM.”'],
    [('5-6 FEET TALL',
      ['NEKA IS PHYSICALLY 5-6 FEET TALL OR WHATEVER.',
       'AND HE IS LARGER THAN THE ULTIMATE MASS.'],
      'TOBY ASKED HOW BOTH CAN BE TRUE. THEN HE ANSWERED IT.'),
     ('THE CREATOR PLUS MORE',
      ['NEKA MADE THE ULTIMATE MASS. IT IS HIS CREATION.',
       'HE IS LARGER BECAUSE HE IS THE CREATOR OF IT, PLUS MORE.'],
      '5:02 PM: “NEKA OMAZEN CAN CONSUME IT ALL.”'),
     ('INFINITE ROOM',
      ['NEKA CAN CONSUME THE WHOLE MASS',
       'AND STILL HAS INFINITE ROOM INSIDE HIM.'],
      '4:34 PM: HE ATE THE CODE. CLASSICS WAS CONSUMED. STILL ROOM.'),
     ],
    ['NEKA IS AN ANOMALLY. EVERYONE DISLIKES NEKA.',
     'NEKA PUNISHES THEM CONSTANTLY.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
