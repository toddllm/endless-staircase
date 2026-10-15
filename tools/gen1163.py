#!/usr/bin/env python3
"""
gen1163.py - draw the branch for BEAT 1163 from Toby's October 15, 2026, 5:09 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a141664f288323a Email 1810). No attachments.
Same template as 1008-1162 (emit_tail1008.py). Only Toby's own typed line is drawn; the italic restatement under it
("He takes Gray.ps from Oren.ps and Simon.ps ... but as another captive") is the chatbot's, commentary.
Email 1809 (5:08 PM, 1a1416502170f488) is two questions to the chatbot about Simon's Law, no canon, no beat.
"""
import io

BASE = 1163
TAG = "1163"
START = 25306.0
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

# ---------------- October 15, 5:09 PM (Email 1810) ----------------
add(meta(15, '5:09 PM'), 'CALL ME: DR. NEKA', '120,200,255',
    ['“NEKA THEN APPEARS TO GRAY.PS AND SAYS “CALL ME: DR. NEKA.”,', 'THEN HE TOOK GRAY.PS FROM OREN.PS AND SIMON.PS ... TAKING', 'GRAY.PS TO THE SAME SPOT AS WENDA.PS AND LUIGI INUS ARE.”'],
    [('THE DOCTOR BADGE', ['OCT 13, 8:19 PM: “NEKA RESPAWNS EVERYONE HE SLAIN, TO GET', 'THE REVIVAL BADGE AND DOCTOR BADGE.” NOW HE USES IT.'],
      'DR. NEKA. THE SECOND DOCTOR, AFTER DR. GASTER 404.'),
     ('TAKEN FROM THE TWO “NEKA” SPRUNKI GODS', ['TODAY, 4:03 PM: “SIMON.PS BROUGHT GRAY.PS SUCESSFULLY TO', 'ORANGE STAR/SUN.” OREN.PS TOOK HIM THERE THE NIGHT BEFORE.'],
      'NEKA TAKES HIM BACK FROM BOTH OF THEM. NO FIGHT WRITTEN.'),
     ('THE SAME SPOT', ['WENDA.PS: TO THE LABATORY, 4:03 PM. LUIGI INUS: SECRETLY', 'ALSO TAKEN, 4:32 PM. NOW GRAY.PS JOINS THEM, 5:09 PM.'],
      'HE FINALLY REACHES WENDA.PS, THE WAY NEKA CHOSE.')],
    ['CALL ME: DR. NEKA.', 'WENDA.PS, LUIGI INUS, GRAY.PS. ONE SPOT. ALL HIS.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
