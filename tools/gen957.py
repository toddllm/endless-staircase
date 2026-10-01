#!/usr/bin/env python3
"""
gen957.py - emit the draw branch for BEAT 957 from Toby's October 1, 2026 messages,
thread 1a0deee4cb24addb (and the new thread 1a0f6fd2e5fa0fbe). Same template as 933-956 (emit_tail933.py).

  6:22 AM  1a0f6fc78b08458b + 1a0f6fc9229b24ac + 1a0f6fd2e5fa0fbe  -> 957  (the Pressure Power Index)

Only Toby's typing is canon: "Did you know Fun Bot's mouth was turned upside down into a frown, and
Pinki's whole face was ripped off?", "Gray is just like Fun Bot, Gray is like scared of the chaos. So
hardly anyone survived Mr. Black.", "Now Pressure power levels, yeah it is all the Classics lore put
together ...", and "Neka is his normal style. The game uses the PPI or whatever it is." The numbers are
from the chart he sent with it (Oren.exe 1000 PPI, Neka infinity / Creator Tier), which he adopted as the
in-game scale; the chatbot's reasoning around it is not drawn.
"""
import io

BASE = 957
TAG = '957'
START = 20774.0
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

A622 = meta('6:22 AM')

add(A622, 'THE PRESSURE POWER INDEX', '120,255,190',
    ['“NEKA IS HIS NORMAL STYLE. THE GAME USES THE PPI OR WHATEVER IT IS.',
     'NOW PRESSURE POWER LEVELS, YEAH IT IS ALL THE CLASSICS LORE PUT TOGETHER.',
     '... SO HARDLY ANYONE SURVIVED MR. BLACK.”'],
    [('THE PRESSURE POWER INDEX',
      ['EVERY CLASSICS FORM STACKS: EXE, PS, WINTER, RL, TREATMENT, NEKA CODE.',
       'OREN.EXE 1000 PPI. SIMON 965. GRAY 950. WENDA 920. BLACK 875.'],
      'NEKA: ∞ PPI. CREATOR TIER.'),
     ('NEKA KEEPS HIS NORMAL STYLE',
      ['HUMAN, LAB COAT. THE 20 SPRUNKIS GO SIMPLE-NEON.',
       'SEPT 29: NEKA TREATMENT NEKA, HUMAN WITH LABCOAT, G.O.D.'],
      'THE ONE THING IN PRESSURE THAT IS NOT NEON.'),
     ('HORROR MODE',
      ['FUN BOT’S MOUTH TURNED UPSIDE DOWN. PINKI’S WHOLE FACE RIPPED OFF.',
       'GRAY IS JUST LIKE FUN BOT, SCARED OF THE CHAOS.'],
      'HARDLY ANYONE SURVIVED MR. BLACK.'),
     ],
    ['JEVIN 840. BRUD 775. MR. SUN 710. PINKI 675. MR. TREE IS LAST AT 365.',
     'ALL THE CLASSICS LORE, PUT TOGETHER INTO ONE NUMBER.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
