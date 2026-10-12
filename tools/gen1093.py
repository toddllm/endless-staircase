#!/usr/bin/env python3
"""
gen1093.py - draw the branches for BEATS 1093-1094 from Toby's October 12, 2026, 11:39 AM and 11:44 AM messages
(thread 1a1204179c8e973f "Another Document", msgs 1a130c5751239c65 + 1a130c9acdd1c4e2, Emails 1754-1755). Same
template as 1008-1092 (emit_tail1008.py). Only Toby's own typed lines are drawn; the chatbot's italic restatements
("memory cutoff", "friendly side before Halloween approaches") are commentary. The 11:38 AM message (Email 1753,
ChelseaPlays' Stuffy World) is not Classics lore and gets no beat.
"""
import io

BASE = 1093
TAG = "1093"
START = 23766.0
STEP = 22.0
B = []

MONTH = {6: 'OCTOBER 6', 7: 'OCTOBER 7', 8: 'OCTOBER 8', 9: 'OCTOBER 9', 10: 'OCTOBER 10', 11: 'OCTOBER 11', 12: 'OCTOBER 12'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

# ---------------- October 12, 11:39 AM ----------------
add(meta(12, '11:39 AM'), 'NOT AFTER OCTOBER 31', '255,170,60',
    ['“HE REMEMBERS EVERYTHING HE DONE, HE REMEMBERS', 'EVERYTHING, BUT NOT AFTER OCTOBER 31.”', '“ALEXEN WILL EVENTUALLY TAKE OVER CLASSICS.”'],
    [('THE ANSWER', ['OCT 12, 10:20 AM ASKED: DOES HE REMEMBER THAT NIGHT?', 'HIS ANSWER: EVERYTHING HE HAS DONE. NOTHING AFTER OCT 31.'],
      'THE RECORD RUNS UP TO HALLOWEEN, HIS BIRTHDAY, AND STOPS.'),
     ('TIME LEANS CLOSER', ['“TIME LEANS CLOSER AND CLOSER...”', 'OCT 12, 8:23 AM: HE ATTACKS ON OCTOBER 31. 19 DAYS.'],
      'EVENTUALLY HE TAKES OVER CLASSICS. HIS WORD IS EVENTUALLY.'),
     ('WHO KEEPS MEMORY', ['MAY 3: GRAY’S FULL RESET. ONLY THE ONE WHO PRESSED', 'IT REMEMBERED. OCT 12, 9:54 AM: ALEXEN EDITS HIMSELF.'],
      'A BEING MADE OF CODE, AND THE RECORD STOPS AT OCTOBER 31.')],
    ['“HE REMEMBERS EVERYTHING”', 'UP TO OCTOBER 31. “CUTOFF” IS THE CHATBOT’S WORD, NOT HIS.'])

# ---------------- October 12, 11:44 AM ----------------
add(meta(12, '11:44 AM'), '5000 NEKA-COINS', '255,216,79',
    ['“ALEXEN WALKS TO SAY THAT EVERYONE WILL GET FREE', 'NEKA-COINS ON THIS DAY, AND IT WAS CORRECT,', 'EVERYONE GOT 5000 NEKA-COINS.”'],
    [('A FIRST', ['NEKA-COINS: ZERO HITS IN THE WHOLE ARCHIVE BEFORE', 'TODAY. THE GAME HAS A CURRENCY NOW, NAMED FOR NEKA.'],
      'OCT 11: “LUIGI INUS GETS MORE GOLD.” GOLD WAS THE ONLY MONEY.'),
     ('IT WAS CORRECT', ['HE SAID EVERYONE WOULD GET THEM. EVERYONE DID.', 'OCT 12, 8:23 AM: “EVERYONE, COME AND PLAY!”'],
      'THE DAYTIME ALEX KEEPS HIS WORD.'),
     ('WHICH DAY', ['“ON THIS DAY.” OCT 12, 10:03 AM: SERVERS UP ON THE', 'OCTOBER DAY, ATTACK ON THE OCTOBER NIGHT.'],
      'HIS WORDS SAY THIS DAY. “BEFORE HALLOWEEN” IS THE CHATBOT’S.')],
    ['“EVERYONE GOT 5000 NEKA-COINS”', 'A GIFT FROM THE MAN WHO LOSES CONTROL ON HALLOWEEN.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
