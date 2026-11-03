#!/usr/bin/env python3
"""
gen1295.py - draw the branch for BEAT 1295 from Toby's November 2, 2026, 8:19 PM message
(message 1a19efd630f89e70 on the "Continuing from Classic RL Eliminations" thread 1a19be0b90adb989), his reply to
the Starry vs Neka / ToddLLM 003 report. Most of the mail is a pasted ChatGPT log: an explanation of the real
Horror Skunx song "It's Me, It's Verity!", a Verity-vs-Neka voice table, and a full original song concept
"IT'S ME, IT'S NEKA!" (intro, verses, chorus, bridge, final chorus, outro). The chatbot's parts are not drawn.
His own typing, in order: "Verity sounds near like a robot when in the song." / "Explain Neka's voice." /
"Neka is a litteral robot, have Neka's song." / "Correct here. Neka wouldn't want anyone who he is obsessed with
to escape and will even ban their friends to make the only Classic RL avatar they love to be Neka."
Beat 1295 A LITTERAL ROBOT: Neka is a literal robot (the song he asked for sounds like one, beeps and all), yet he
talks like a player; and the obsession rule: he will not let anyone he is obsessed with escape, and bans their
friends so Neka is the only Classic RL avatar they love. By the screenshot rule (beat + 63) the PNG is 1358.
"""
import io

BASE = 1295
TAG = "1295"
START = 28210.0
STEP = 22.0
B = []
MONTH = {2: 'NOVEMBER 2'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- November 2, 8:19 PM ----------------
add(meta(2, '8:19 PM'), 'A LITTERAL ROBOT', '196,150,255',
    ['“NEKA IS A LITTERAL ROBOT, HAVE NEKA’S SONG.”', '“NEKA WOULDN’T WANT ANYONE WHO HE IS OBSESSED WITH', 'TO ESCAPE AND WILL EVEN BAN THEIR FRIENDS.”'],
    [('THE VOICE', ['VERITY SOUNDS NEAR LIKE A ROBOT IN HIS SONG.', 'NEKA TALKS LIKE A PLAYER. BUT NEKA IS A LITTERAL ROBOT.'],
      'A PLAYER WHO HAPPENS TO BE A ROBOT.'),
     ('IT’S ME, IT’S NEKA', ['VERITY HAS “IT’S ME, IT’S VERITY.” NOW NEKA HAS HIS OWN.', 'ROBOT VOICE, BEEPS, AND THE FIVE MINUTE TIMER AT THE END.'],
      'THE WORDS ARE THE CHATBOT’S. THE ASK WAS TOBY’S.'),
     ('BAN THEIR FRIENDS', ['HE WON’T LET ANYONE HE IS OBSESSED WITH ESCAPE.', 'HE BANS THEIR FRIENDS SO THE ONLY AVATAR THEY LOVE IS NEKA.'],
      'HE CAN BAN ANYONE HE WANTS. NOW WE KNOW WHO.')],
    ['A LITTERAL ROBOT WITH A SONG OF HIS OWN.', 'HELLO. ALL WORDS ARE GOOD.'],
    'Verity sounds near like a robot when in the song. ... Explain Neka\'s voice. ... Neka is a litteral robot, have Neka\'s song. ... Correct here. Neka wouldn\'t want anyone who he is obsessed with to escape and will even ban their friends to make the only Classic RL avatar they love to be Neka.')

exec(open('/Users/tdeshane/endless-staircase/tools/rewrap1176.py', encoding='utf-8').read()); rewrap(B)
bad = []
for b in B:
    for ln in list(b['quote']) + list(b['close']):
        if len(ln) > 60: bad.append((b['key'], len(ln), ln))
    for h, lines, acc in b['panels']:
        for ln in list(lines) + [acc, h]:
            if len(ln) > 58: bad.append((b['key'], len(ln), ln))
    assert len(b['quote']) == 3 and len(b['panels']) == 3 and len(b['close']) == 2, b['key']
assert not bad, bad
assert len(B) == 1, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
