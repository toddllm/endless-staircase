#!/usr/bin/env python3
"""
gen1058.py - draw branches for BEATS 1058-1059 from Toby's October 10, 2026, 11:25 AM and 11:30 AM
messages (thread 1a1204179c8e973f "Another Document", msgs 1a1266b803727c2f and 1a1266fee7003085).
Same template as 1008-1057 (emit_tail1008.py).

Only Toby's own lines are drawn. 11:25 AM: "Neka and Luigi Inus both walk. Neka beats more and more
characters on surface, Luigi Inus gets the gold on both surface and underground. Because no one is
underground anymore." 11:30 AM: "That is one reason why Neka wiped out the whole underground of lives,
he also did it for LV. Luigi Inus can get all the gold in both spots, Luigi Inus has all the Cat Power
now, Neka has all the LV now. So Neka would go with Luigi Inus. Neka finally finished erasing the
Overworld in lives." The italic retellings under each paragraph are the chatbot's and are not drawn.
"""
import io

BASE = 1058
TAG = "1058"
START = 22996.0
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

# ---------------- October 10, 11:25 AM ----------------
add(meta(10, '11:25 AM'), 'NO ONE IS UNDERGROUND ANYMORE', '110,220,140',
    ['“NEKA BEATS MORE AND MORE CHARACTERS ON', 'SURFACE, LUIGI INUS GETS THE GOLD ON BOTH', 'SURFACE AND UNDERGROUND.”'],
    [('WALK TOGETHER', ['OCT 9, 7:45 PM: “NEKA AND LUIGI', 'WALK TOGETHER.”'],
      'TODAY THEY BOTH WALK, EACH FOR HIS OWN PRIZE.'),
     ('8.6 BILLION ON THE SURFACE', ['OCT 9, 4:09 PM: “NEKA BEATEN ALL 8.6', 'BILLION BEINGS IN THE OVERWORLD.”'],
      'HE KEEPS BEATING MORE ON THE SURFACE.'),
     ('BOXES OF GOLD', ['SEPT 8: “LUIGI GREEN GIVES WD BOXES OF', 'GOLD.” OCT 9: “SAILED ACROSS THE 7 SEAS.”'],
      'NOW THE GOLD IN BOTH PLACES IS HIS.')],
    ['“BECAUSE NO ONE IS UNDERGROUND ANYMORE.”', 'NEKA AND LUIGI INUS BOTH WALK.'])

# ---------------- October 10, 11:30 AM ----------------
add(meta(10, '11:30 AM'), 'NEKA GOES WITH LUIGI INUS', '255,96,96',
    ['“LUIGI INUS HAS ALL THE CAT POWER NOW,', 'NEKA HAS ALL THE LV NOW. SO NEKA WOULD', 'GO WITH LUIGI INUS.”'],
    [('MORE AND MORE LOVE', ['OCT 9: RESETS EVERY RUN, “MORE AND MORE', 'LOVE.” 9:47 AM: “STILL GETTING LV.”'],
      'NOW: “NEKA HAS ALL THE LV NOW.”'),
     ('MAX CAT POWER', ['9:47 AM: “THEN LUIGI INUS GAINED MAX', 'CAT POWER.”'],
      'NOW: “LUIGI INUS HAS ALL THE CAT POWER NOW.”'),
     ('THE MOST POWERFUL BESIDES NEKA', ['OCT 9, 7:35 PM: “LUIGI/PIRATE IS THE MOST', 'POWERFUL BESIDES NEKA.”'],
      'NEUTRAL AND MAIN VILLIAN, GOING TOGETHER.')],
    ['THE OVERWORLD, ERASED IN LIVES TOO.', '“SO NEKA WOULD GO WITH LUIGI INUS.”'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
