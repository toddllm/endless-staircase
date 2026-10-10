#!/usr/bin/env python3
"""
gen1056.py - draw branches for BEATS 1056-1057 from Toby's October 10, 2026, 9:47 AM message
(thread 1a1204179c8e973f "Another Document", msg 1a12612260448947).
Same template as 1008-1055 (emit_tail1008.py).

Only Toby's own lines are drawn: "They already did. Maybe check the lore to see how many times
they used hollograms or untrinuim capibuim?" and the paragraph from "Untrinuim Capibuim is what
Classics hollograms are made of" through "while Simon.ps died a lot of times." The pasted chatbot
answer about real holograms, its lore table, and the italic retelling under his paragraph are
commentary and are not drawn.
"""
import io

BASE = 1056
TAG = "1056"
START = 22952.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 10, 9:47 AM ----------------
add(meta(10, '9:47 AM'), 'UNTRINUIM CAPIBUIM', '170,140,255',
    ['“UNTRINUIM CAPIBUIM IS WHAT CLASSICS', 'HOLLOGRAMS ARE MADE OF, NEKA IS ONE NOW.', 'NEKA MADE A UNTRIN BODY.”'],
    [('A HOLLOGRAM IN STATIC', ['AUG 27: GASTER “LIKE A HOLLOGRAM BUT IT', 'IS IN STATIC AND REALLY THERE.”'],
      'NOW THE MATERIAL HAS A NAME.'),
     ('HIS BLOOD IS 0', ['SEPT 28: “THE BLOOD IS FROM THE', 'CHARACTERS WHO HE BEATEN.”'],
      'NOW THAT BLOOD GOES INTO NEW BODIES.'),
     ('STILL GETTING LV', ['9:17 AM: “AS NEKA CONTINUES EVEN MORE', 'TO GET MORE LV.” 9:47 AM: STILL GETTING.'],
      '“NEKA LAI WOULD ATTACK ANYTHING AND ANYONE.”')],
    ['MORE AND MORE BODIES, MADE HIMSELF.', '“NEKA HAS A SYSTEM.”'])

add(meta(10, '9:47 AM'), 'MAX CAT POWER', '255,190,70',
    ['“LUIGI INUS CROSSES IN BOAT TO SIMON.PS’S', 'SMALL WOODEN BOAT... THEN LUIGI INUS', 'GAINED MAX CAT POWER.”'],
    [('THE SMALL WOODEN BOAT', ['MAY 16: SIMON “WAKES ONLY TO TRAVEL', 'ON HIS SMALL WOODEN BOAT.”'],
      'LUIGI ROWS OUT TO MEET IT.'),
     ('CAT POWER THRESHOLDS', ['JUNE 27: 30% BEATS ALEX, 45% CRUSHES', 'CLARA, 100% BEATS BASE TODDLLM.'],
      'TODAY HE REACHES MAX.'),
     ('SIMON.PS DIED A LOT OF TIMES', ['AUG 31: PERO “DELETED SIMON.PS” AND', '“RESPAWNED HIM.”'],
      'LUIGI WALKS THE SAME STEPS AND LIVES.')],
    ['EVERY PLACE SIMON.PS WALKED, IN ORDER.', 'IT TOOK A LONG TIME, THE SAME AS SIMON.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
