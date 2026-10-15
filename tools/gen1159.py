#!/usr/bin/env python3
"""
gen1159.py - draw the branches for BEATS 1159-1160 from Toby's October 15, 2026, 4:32 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a14144aa80f66cf Email 1805). No attachments.
Same template as 1008-1158 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's answers (the Sprunki mod
list, Mr. Tree's powers, the villain rankings, "Two Nekas, two different meanings", and the closing restatement about
Gray.ps's pursuit) are commentary.
"""
import io

BASE = 1159
TAG = "1159"
START = 25218.0
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

# ---------------- October 15, 4:32 PM (Email 1805) ----------------
add(meta(15, '4:32 PM'), 'NEKA IS NEKA', '255,216,79',
    ['“NEKA LAI IS THE BEST ONE, HE IS CLASSICS OC, AND THE GAME', 'CLASSICS WAS RENAMED TO “NEKA” PRETTY LONG AGO NOW.”', '“NEKA IS NEKA, AND “NEKA” IS “NEKA”.” HIM, AND HIS GAME.'],
    [('THE BEST VILLAIN', ['HE ASKS WHO IS THE CRAZIEST AND BEST VILLAIN. THE', 'CHATBOT PICKS WENDA. HE PICKS NEKA LAI, CLASSICS OC.'],
      'THE BEST ONE. HIS RULING, NOT THE CHATBOT’S.'),
     ('NAMED FOR CLASSICS OMAZEN', ['OCT 11: CLASSICS WAS NAMED AFTER NEKA’S DAUGHTER,', 'CLASSICS OMAZEN. THEN NEKA RENAMED IT AFTER HIMSELF.'],
      'PRETTY LONG AGO NOW, HE SAYS. NOT A NEW RENAME.'),
     ('I RENAMED IT', ['OCT 12, 1:50 PM: “I MADE THE GAME, AND I RENAMED IT,', 'CAUSE I WANTED TO.” NEKA, TO GASTER AND LUIGI INUS.'],
      'THE QUOTE MARKS ARE PART OF THE NAME: “NEKA”.')],
    ['NEKA IS NEKA. “NEKA” IS “NEKA”.', 'THE ONE WHO MADE IT, AND THE GAME NAMED FOR HIM.'])

add(meta(15, '4:32 PM'), 'SECRETLY ALSO TAKEN', '120,220,120',
    ['“NEKA IS ACTUALLY DOING FAR BETTER THAN THE SPRUNKIS AT', 'THE VILLIAN THING. NEKA ACTUALLY SECRETLY ALSO TAKEN LUIGI', 'INUS, WHEN ONLY KEEPING WENDA.PS VISABLE.” HIS SPELLING.'],
    [('WENDA.PS EVEN FARTHER', ['OCT 14, 5:32 PM: NEKA TAKES WENDA.PS EVEN FARTHER FROM', 'GRAY.PS. GRAY.PS KEEPS FOLLOWING.'],
      'GRAY.PS FOLLOWED THE ONE HE COULD SEE.'),
     ('TO THE LABATORY', ['TODAY, 4:03 PM: NEKA WALKS AWAY WITH WENDA.PS, THEN', 'CAME TO THE LABATORY.'],
      'ONLY WENDA.PS WAS VISABLE. LUIGI INUS WAS TAKEN TOO.'),
     ('ONE MORE FOX', ['OCT 14, 6:24 AM: “THIS IS THE GAME, THE ATTACK IS', 'COMPLETE!” LUIGI INUS SAYS “🦊” ONCE AGAIN.'],
      'HE THOUGHT THAT WAS A LIE. NOW NEKA HAS HIM, SECRETLY.')],
    ['WENDA.PS, VISABLE. LUIGI INUS, SECRETLY.', 'EVERYONE WATCHED ONE. NEKA TOOK BOTH.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
