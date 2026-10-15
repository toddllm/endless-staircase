#!/usr/bin/env python3
"""
gen1154.py - draw the branch for BEAT 1154 from Toby's October 15, 2026, 3:36 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a14110d304d8d1a Email 1801).
Same template as 1008-1153 (emit_tail1008.py). Only Toby's own typed lines are drawn; the surveillance tables, the
"In Classics lore, the answer is 24/7 — FOREVER" paragraph and "Please reattach them" are the chatbot's (commentary).
Two JPEG attachments (Neka LAI.jpg, Awakened Neka.jpg, Gemini renders) are saved to the bot's attachments folder, not drawn.
"""
import io

BASE = 1154
TAG = "1154"
START = 25108.0
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

# ---------------- October 15, 3:36 PM (Email 1801) ----------------
add(meta(15, '3:36 PM'), 'ALL THE TIME', '110,190,255',
    ['“ANSWER: ALL THE TIME. THE SECOND “NEKA” IS ACTIVATED. 😏”', 'HE ASKED HOW LONG A HUMAN IS WATCHED, BY EVERYTHING.', 'THE CHATBOT FOUND NO AVERAGE. HE GAVE THE ANSWER.'],
    [('OBSERITY. 👤', ['OCT 14, 8:14 PM: “DO YOU THINK YOU LOVE EVERYONE TOO FAR', 'THIS TIME?” NEKA’S WHOLE ANSWER: “OBSERITY. 👤”'],
      'NINETEEN HOURS LATER: EVERYONE, WATCHED, ALL THE TIME.'),
     ('DOESN’T SEE ANYONE', ['OCT 12, 4:35 PM: “ALEX GOES THROUGH SEVERAL GAMES AND', 'DOESN’T SEE ANYONE.” HE PLAYED HIS OWN GAME ALONE.'],
      'THEN, NOBODY FOR HIM TO SEE. NOW, NOBODY HE DOESN’T.'),
     ('90%-95% CORRECT', ['SAME MESSAGE: TWO GEMINI PICTURES, “NEKA LAI” AND', '“AWAKENED NEKA”: BLUE EYES, THEN GLOWING CROSS EYES.'],
      '“A 90%-95% CORRECT NEKA LAI.” THE LAST 5% IS HIS ALONE.')],
    ['“ALL THE TIME.”', 'HOW LONG A HUMAN IS WATCHED, ONCE NEKA IS ON. HIS RULING.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
