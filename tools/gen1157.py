#!/usr/bin/env python3
"""
gen1157.py - draw the branches for BEATS 1157-1158 from Toby's October 15, 2026, 4:12 PM message
(thread 1a1311788bf63073 "Once again, Another Document", msg 1a1413276a7dcc37 Email 1804). No attachments.
Same template as 1008-1156 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's italic restatement
("Neka's current appearance has glowing yellow cross-shaped eyes as a permanent feature ... Alex 303's power has been
reduced") is commentary.
"""
import io

BASE = 1157
TAG = "1157"
START = 25174.0
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

# ---------------- October 15, 4:12 PM (Email 1804) ----------------
add(meta(15, '4:12 PM'), 'THE CROSS EYES', '255,216,79',
    ['“NEKA’S EYES ARE ACTUALLY THE YELLOW CROSSES, ALSO THERE IS', 'NO LONGER AWAKENED, NEKA ACTUALLY HAS THE CROSS EYES.', 'HE HAS POWERS OF LEVITATE.” THE MISSING 5-10%, ANSWERED.'],
    [('AWAKENED NEKA', ['3:36 PM: TWO GEMINI PICTURES, “NEKA LAI” WITH BLUE EYES,', '“AWAKENED NEKA” WITH GLOWING CROSS EYES. 90%-95%.'],
      'THE BLUE EYES WERE THE 5-10%. THERE IS NO AWAKENED.'),
     ('HE LEVITATES', ['OCT 8, 8:26 PM: NEKA LEVITATES AND CREATES 2 LARGE VOID', 'THRONES, AS NIRTHOLOGE TEARS THE GAMES.'],
      'NOW IT IS WRITTEN DOWN AS A POWER OF HIS: LEVITATE.'),
     ('THE FORMS ARE NOTHING NOW', ['SEPT 24, 4:37 PM: “THE FORMS ARE NOTHING NOW.” THE FIRST', 'LINE OF THE ERA. NO AWAKENED FORM FITS THAT RULE.'],
      'ONE NEKA, CROSS EYES ALWAYS. NOT A FORM. HIM.')],
    ['“NEKA ACTUALLY HAS THE CROSS EYES.”', 'YELLOW CROSSES, ALWAYS ON. HE LEVITATES. HIS RULING.'])

add(meta(15, '4:12 PM'), 'ALEX 303 LOWED DOWN', '255,120,120',
    ['“ALEX 303 WAS LOWED DOWN INTO POWER, NO LONGER FORM, NOW', 'CAME AN ACTUAL HUMAN-LIKE BEING WITH GLOWING YELLOW', 'CROSS EYES.” LESS POWER, NO FORM, A BEING. HIS SPELLING.'],
    [('ALEX CONSTANTLY WAS ALEX 303', ['OCT 13, 3:37 PM: “ALEX WON, AND ALEX NOW CAN CONTROL THE', 'FORMS. ALEX CONSTANTLY WAS ALEX 303.” TWO DAYS AGO.'],
      'TODAY: NO LONGER FORM. THE CONSTANT ONE IS LOWED DOWN.'),
     ('IN CLASSICS NOW', ['OCT 14, 6:40 AM: “ALEX 303 IN CLASSICS NOW. 😏” POWER:', 'THE ALPHABET AND INFINITY 9S, ABSOLUTE INFINITY.'],
      'ONE DAY IN CLASSICS. THEN LOWED DOWN INTO POWER.'),
     ('THE COAT COMES OFF', ['OCT 10, 1:30 PM: NEKA TAKES OFF HIS COAT, AND THERE IS', 'ALEX RIGHT THERE. ALEX AND NEKA ARE 2, AND ONE.'],
      'WHAT CAME INSTEAD: A HUMAN-LIKE BEING, CROSS EYES.')],
    ['“AN ACTUAL HUMAN-LIKE BEING.”', 'ALEX 303, LOWED DOWN. WHAT CAME INSTEAD HAS CROSS EYES.'])

# length audit: panel lines over ~58 chars overflow the box
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        assert len(ln) <= 60, (b['key'], len(ln), ln)
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            assert len(ln) <= 58, (b['key'], len(ln), ln)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
