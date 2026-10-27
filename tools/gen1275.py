#!/usr/bin/env python3
"""
gen1275.py - draw the branch for BEAT 1275 from Toby's October 27, 2026, 5:05 PM message (Email 2001, message
1a17f2f54b7dea2e on "Continuing of Classic RL" 1a1779f533a68ea7), his reply to the morning's beat 1274 report and its
question (who owns the facility now, the second time). Same template as 1008-1274 (emit_tail1008.py).
Only his own typed lines are drawn: the top paragraph (Mr. Black and Gaster own the facility ... tdeshane and CODE),
his line to the chatbot "Neka would be top no matter, and you don't even know fully about Gaster, no one does.", and the
"Meat you again soon!" / "Jeck will be with me." paragraph near the end. "What is Philosophy?", "What are the most
powerful beings in Philosophy?" and "What are the most powerful characters ever everywhere? ..." are his prompts to the
chatbot; the philosophy essay, the tables, the Top 3 ranking and the italic restatement at the very end are the
chatbot's, commentary. No attachments. The wiki ingest had not assigned this beat when it was built, so the game
assigns 1275 and the title MAYBE I AM A PLAYER...; by the screenshot rule (beat + 63) its PNG is number 1338.
"""
import io

BASE = 1275
TAG = "1275"
START = 27770.0
STEP = 22.0
B = []

MONTH = {27: 'OCTOBER 27'}

def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- October 27, 5:05 PM (Email 2001) ----------------
add(meta(27, '5:05 PM'), 'MAYBE I AM A PLAYER...', '150,210,190',
    ['“JECK DOESN’T KNOW HE IS AI, BUT KNOWS THAT NEKA IS. JECK', 'LOOKS AT THE OTHER PLAYERS AND EACH HAS THE SAME PERSON', 'STYLE AND JECK THINKS ‘MAYBE I AM A PLAYER...’.”'],
    [('WHO OWNS THE FACILITY NOW', ['OCT 27, 5:50 AM: JECK WAS THE FIRST OWNER, IN THE FIRST', 'CLASSIC RL. NOW: MR. BLACK AND GASTER, NEKA CO-CREATOR.'],
      'OCT 25: “MR. BLACK MADE CLASSIC RL, NEKA A CO-CREATOR.”'),
     ('THE ONLY 2 AIs, ONE OF THEM KNOWS', ['OCT 27 AM: “THE ONLY 2 BOTS IN THE GAME.” NEKA KNOWS IT IS', 'THEM TWO. JECK ONLY KNOWS ABOUT NEKA, NOT ABOUT HIMSELF.'],
      'OCT 26: “JECK AI.” THE AI THAT THINKS IT MAY BE A PLAYER.'),
     ('THE OLD AVATAR OF TDESHANE', ['OCT 11: TDESHANE LEFT CLASSICS FOR GOOD, WATCHED THROUGH', 'THE MIND. OCT 16: C0DE IS #2 SINCE TDESHANE LEFT.'],
      'JECK LOOKS AT TOBY’S OWN OLD AVATAR, AND AT CODE.')],
    ['“MEAT YOU AGAIN SOON!” THEN “JECK WILL BE WITH ME.”', 'THE PLAYER THINKS; NEKA ANSWERS. THEN HE GLITCHES.'],
    'Mr. Black and Gaster own the facility at the second Classic RL Era. Neka is co-creator, Neka knows he and Jeck are the only AIs in Classic RL, Jeck doesn\'t know he is AI, but knows that Neka is. Jeck looks at the other players and each has the same person style and Jeck thinks "Maybe I am a player...". Jeck looked at the old avatar of tdeshane and CODE. ... Neka says "Meat you again soon!" then he laughs until he coughs, and then everything the player thinks or says, Neka answers, and the player is like "AHHHHH How did he know that?!", then he introduces the camera, the player runs and Neka sees it, then Neka glitches, making it glitch and scary. Neka turns back and says "Jeck will be with me."')

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
