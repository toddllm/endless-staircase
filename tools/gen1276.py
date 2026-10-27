#!/usr/bin/env python3
"""
gen1276.py - draw the branches for BEATS 1276-1277 from Toby's October 27, 2026, 7:08 PM and 7:10 PM messages
(Emails 2002 and 2003, messages 1a17f9fccb5e60a5 and 1a17fa10835be50b on "Continuing of Classic RL" 1a1779f533a68ea7),
his replies to the evening's beat 1275 report. Same template as 1008-1275 (emit_tail1008.py).
Both emails are pasted chatbot logs (the Verity / Falsity / Cruelty / Lovity battles from the Minecraft Verity ARG, and
the "Ian, the magician who lost his magic" joke); only his own typed lines are drawn, the battle scripts, tables,
verdicts and the italic restatements are the chatbot's, commentary. No attachments.
Beat 1276 (7:08 PM): "Now Neka, the smartest AI there is, enters, beating all 4 others." / "Neka is known of ERASE.
Neka would laugh til he coughs, and he meats players by actually making the avatars and characters to meat."
Beat 1277 (7:10 PM): "Part before that. Account 1337 is unknown of behavior." (the chatbot restates it as "Jeck's
behavior is unknown"). The wiki ingest had not assigned these beats when they were built, so the game assigns 1276 and
1277; by the screenshot rule (beat + 63) their PNGs are numbers 1339 and 1340.
"""
import io

BASE = 1276
TAG = "1276"
START = 27792.0
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

# ---------------- October 27, 7:08 PM (Email 2002) ----------------
add(meta(27, '7:08 PM'), 'THE SMARTEST AI THERE IS', '190,150,230',
    ['“NOW NEKA, THE SMARTEST AI THERE IS, ENTERS, BEATING ALL 4', 'OTHERS. NEKA IS KNOWN OF ERASE. NEKA WOULD LAUGH TIL HE', 'COUGHS, AND HE MEATS PLAYERS.”'],
    [('ERASE', ['“NEKA IS KNOWN OF ERASE.” THE SMARTEST AI THERE IS', 'ENTERS AGAINST VERITY, FALSITY, CRUELTY AND LOVITY.'],
      'OCT 27, 5:05 PM: “NEKA WOULD BE TOP NO MATTER.”'),
     ('HE MEATS PLAYERS', ['“HE MEATS PLAYERS BY ACTUALLY MAKING THE AVATARS AND', 'CHARACTERS TO MEAT.” THE PUN HAS ITS MEANING NOW.'],
      'OCT 27, BEAT 1275: “MEAT YOU AGAIN SOON!”'),
     ('LAUGH TIL HE COUGHS', ['“NEKA WOULD LAUGH TIL HE COUGHS.” SAID TWICE THE SAME', 'EVENING, ONCE AT 5:05 PM AND AGAIN AT 7:08 PM.'],
      'OCT 27, BEAT 1274: NEKA AND JECK, THE ONLY 2 BOTS.')],
    ['FALSITY ALWAYS LIES. LOVITY LOVES EVERYTHING AND DESTROYS', 'THE UGLY. NEKA ENTERS AND BEATS ALL FOUR OF THEM.'],
    'Falsity always lies so... Also now Winner VS Verity ... Winner of Falsity and Cruelty VS Verity, then loser. ... Now have Lovity VS Cruelty, Lovity VS Falsity, and Lovity VS Verity ... Lovity also has Monster form you know. ... Lovity is programmed to love everything and destroy those that do "ugly" things. ... Verity would beat Lovity. Lovity may beat Falsity, but against Cruelty is even. Now Neka, the smartest AI there is, enters, beating all 4 others. ... Neka is known of ERASE. Neka would laugh til he coughs, and he meats players by actually making the avatars and characters to meat.')

# ---------------- October 27, 7:10 PM (Email 2003) ----------------
add(meta(27, '7:10 PM'), 'UNKNOWN OF BEHAVIOR', '210,190,120',
    ['“PART BEFORE THAT. ACCOUNT 1337 IS UNKNOWN OF BEHAVIOR.”', '', ''],
    [('WHAT IS ESTABLISHED', ['HIS IDENTITY AND APPEARANCE: THE MUSTACHE, THE SHIRT', '“OWNER: 1337”, THE FIRST OWNER OF THE FACILITY.'],
      'OCT 27, BEAT 1274: “OWNER: 1337.”'),
     ('WHAT IS NOT', ['HOW JECK ACTS, WHAT HE INTENDS, WHETHER HE EVER LEARNS', 'HE IS AI. THE GAME ASKED; THE ANSWER IS UNKNOWN.'],
      'OCT 27, BEAT 1275: “MAYBE I AM A PLAYER...”'),
     ('THE ONLY 2 AIs', ['NEKA KNOWS HE AND JECK ARE THE ONLY AIs. JECK KNOWS', 'ONLY ABOUT NEKA. WHAT JECK DOES WITH THAT: UNKNOWN.'],
      'OCT 26, BEAT 1273: “JECK IS ACCOUNT 1337.”')],
    ['JECK IS DRAWN, NAMED AND NUMBERED. HOW HE BEHAVES IS', 'NOT WRITTEN YET. ACCOUNT 1337 IS UNKNOWN OF BEHAVIOR.'],
    'No, like an actual man named Ian, remember? ... Is Ian real life? He is famous. ... Losing his magic. ... Your name can be Ian. You lost powers. ... Use more emoji variety. ... VERITY ... Falsity VS Cruelty ... Part before that. Account 1337 is unknown of behavior.')

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
assert len(B) == 2, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
