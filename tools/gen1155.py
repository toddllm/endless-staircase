#!/usr/bin/env python3
"""
gen1155.py - draw the branches for BEATS 1155-1156 from Toby's October 15, 2026, 4:03 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a14129d934f215f Email 1803).
Same template as 1008-1154 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's italic restatement
("Neka arrives at the laboratory with Wenda.ps ... Simon.ps has now completed the transfer") is commentary.
The 4:00 PM message (1a14126be643e601 Email 1802) is a pasted chatbot session describing the two Gemini pictures and has
no typing of his own; the same two JPEGs came attached again (same sizes as the 3:36 PM copies), not drawn.
"""
import io

BASE = 1155
TAG = "1155"
START = 25130.0
STEP = 22.0
B = []

MONTH = {15: 'OCTOBER 15'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 15, 4:03 PM (Email 1803) ----------------
add(meta(15, '4:03 PM'), 'TO THE LABATORY', '120,230,210',
    ['“NEKA WALKS AWAY WITH WENDA.PS, THEN CAME TO THE LABATORY.”', 'HIS SPELLING, KEPT. THE WALK AWAY HAS AN ADDRESS NOW.', 'NO FIGHT, NO NEEDLE, NO WALL THIS TIME. JUST ARRIVAL.'],
    [('LOCKED IN NEKA’S LAB', ['SEPT 26, 2:28 PM: “WENDA.PS AND GRAY.PS ARE BOTH LOCKED', 'IN NEKA’S LAB.” SHADOW-MEN, THE WALL, THE NEEDLE.'],
      'SHE WAS DRAGGED IN THEN. SHE WALKS IN WITH HIM NOW.'),
     ('THE LABATORY WAS DESTROYED', ['OCT 5, 7:34 PM: “THE MECH WAS DESTROYED, THE LABATORY', 'WAS DESTROYED.” GASTER WON THE 50-YEAR BATTLE.'],
      'SAME SPELLING, TEN DAYS LATER. THERE IS A LAB TO COME TO.'),
     ('WALKING AWAY', ['OCT 14, 8:16 PM: “NEKA OMAZEN STILL HAS WENDA.PS AND IS', 'WALKING AWAY.” OBSERITY, THEN OUT THE DOOR WITH HER.'],
      'THAT WALK ENDS HERE. GRAY.PS IS NOT BEHIND THEM.')],
    ['“THEN CAME TO THE LABATORY.”', 'NEKA AND WENDA.PS, BACK IN THE LAB. HIS LINE, HIS SPELLING.'])

add(meta(15, '4:03 PM'), 'ORANGE STAR/SUN', '255,160,60',
    ['“SIMON.PS BROUGHT GRAY.PS SUCESSFULLY TO ORANGE STAR/SUN.”', 'LAST NIGHT IT WAS OREN.PS. TODAY THE HAND IS SIMON.PS’S.', 'THE ORANGE SUN HAS A SECOND NAME NOW: ORANGE STAR.'],
    [('TO THE ORANGE SUN', ['OCT 14, 8:19 PM: “OREN.PS TAKEN GRAY.PS EVEN FARTHER', 'FROM WENDA.PS TO THE ORANGE SUN.” PINNED, LOST.'],
      'OREN.PS TOOK HIM. SIMON.PS BROUGHT HIM. ONE PLACE.'),
     ('WHY LEAVE NOW?', ['SAME NIGHT: “SIMON.PS TURNED GRAY.PS INTO A DEMON.”', '“SIMON.PS SAYS “WHY LEAVE NOW?”” THEN THE GRAB.'],
      '“SUCESSFULLY.” THE DELIVERY IS COUNTED AS A WIN.'),
     ('APART, BOTH PLACED', ['WENDA.PS: THE LABATORY, WITH NEKA (BEAT 1155).', 'GRAY.PS: ORANGE STAR/SUN, WITH SIMON.PS.'],
      'TWO NAMED PLACES. NOBODY IS FOLLOWING ANYBODY.')],
    ['“BROUGHT GRAY.PS SUCESSFULLY.”', 'SIMON.PS FINISHES WHAT OREN.PS STARTED. ORANGE STAR/SUN.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
