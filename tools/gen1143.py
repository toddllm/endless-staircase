#!/usr/bin/env python3
"""
gen1143.py - draw the branch for BEAT 1143 from Toby's October 14, 2026, 5:48 AM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a139d078793e88e Email 1793).
Same template as 1008-1142 (emit_tail1008.py). Only Toby's own typed line is drawn; the rest of the email is a pasted
chatbot session about a YouTuber (Meahoo) and the chatbot's italic restatement of the Classics line, all commentary.
"""
import io

BASE = 1143
TAG = "1143"
START = 24866.0
STEP = 22.0
B = []

MONTH = {13: 'OCTOBER 13', 14: 'OCTOBER 14'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 14, 5:48 AM (Email 1793) ----------------
add(meta(14, '5:48 AM'), 'NEKA CONTINUES WITH CHAPTER 2 PHASE 2', '255,150,70',
    ['“NEKA OMAZEN CONTINUES WITH CHAPTER 2 PHASE 2.”', 'HIS ONE CLASSICS LINE THIS MORNING. THE REST OF THE EMAIL', 'IS A CHATBOT TALKING ABOUT A YOUTUBER. NOT CANON.'],
    [('CHAPTER 2: I DO MORE BECAUSE I CAN', ['OCT 12, 7:07 PM: HE “ENDED “CHAPTER 1: CLASSICS”, AND', 'MADE “CHAPTER 2: I DO MORE BECAUSE I CAN””.'],
      'THE CHAPTER IS TWO DAYS OLD. HE IS STILL INSIDE IT.'),
     ('NOW TO MASTER PLAN: PHASE 2, CHAPTER 2', ['OCT 13, 8:12 PM: “NEKA SAYS “NOW TO MASTER PLAN: PHASE 2,', 'CHAPTER 2.”” THE GAME CONNECTS HIS COMPUTERS FOR HIM.'],
      'LAST NIGHT HE OPENED IT. THIS MORNING, HE CONTINUES.'),
     ('THE REVIVAL BADGE AND THE DOCTOR BADGE', ['OCT 13, 8:14 PM: “NEKA RESPAWNS EVERYONE HE SLAIN, TO GET', 'THE REVIVAL BADGE AND DOCTOR BADGE.”'],
      'THE ONE STEP OF PHASE 2 WE KNOW. THE NEXT IS NOT SAID.')],
    ['“NEKA OMAZEN CONTINUES WITH CHAPTER 2 PHASE 2.”', 'THE PLAN DID NOT STOP OVERNIGHT. THE NEXT STEP IS NOT SAID.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
