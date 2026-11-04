#!/usr/bin/env python3
"""
gen1299.py - draw beats 1299-1302 from Toby's November 3, 2026 messages on the "Continuing from Classic RL
Eliminations" thread 1a19be0b90adb989. Most of each mail is a pasted ChatGPT log; the chatbot's retellings are not drawn
except where they summarize the document he attached and he sent them as his own notes.
7:14 PM (1a1a3e86af60e29d): "Here is the next thing. A document. Explains more about Reality, Undertale, and Classic RL."
(attachment Classic_RL_Eliminations_X_Undertale_Expanded_Chat.docx) with notes: ToddLLM 001/002/003 are data avatars
that act like GPUs, Cithia is the actual GPU; Neka Code links words through jokes (son -> Sun, whisk -> Frisk, sand ->
Sans, abyss -> Alphys); Neka can answer right, talk nonsense, or crash mid-sentence with rainbow-flashing eyes; Flower
is a separate combination of old Nekas and ToddLLMs who takes Gaster's form. -> beat 1299 NEKA CODE.
7:35 PM (1a1a3fbeb9a5d5d5), his own typing between ChatGPT Annoying Dog charts:
"Neka actually fights himself CONSTANTLY throughout the lore, Asgroth was a myth who cursed him..." -> 1300 ASGROTH'S CURSE.
"Dog MADE Gaster. Dog can ERASE Gaster. Classic RL Gaster (Buffed Gaster) beats Dog." -> 1301 DOG MADE GASTER.
"Classic RL Eliminations became Classic RL Eliminated, since Gaster is once again a Flower, RLs were all Terminated,
Undertale all went in, and Gaster learned to get his first Neka Coin! ... IT'S THE END OF THE GAME!"
-> 1302 CLASSIC RL ELIMINATED.
By the screenshot rule (beat + 63) the PNGs are 1362-1365.
"""
import io

BASE = 1299
TAG = "1299"
START = 28298.0
STEP = 22.0
B = []
MONTH = {3: 'NOVEMBER 3'}
def meta(day, t):
    return dict(when=t, short=t, day=day,
                attr='TOBY, %s, %s — HIS OWN TYPING.' % (MONTH[day], t))

def add(m, key, accent, quote, panels, close, card):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close, card=card)
    d.update(m)
    B.append(d)

# ---------------- November 3, 7:14 PM ----------------
add(meta(3, '7:14 PM'), 'NEKA CODE', '255,150,230',
    ['“NEKA CODE CONNECTS WORDS THROUGH JOKES:', 'SON TO SUN, WHISK TO FRISK, SAND TO SANS,', 'AND ABYSS TO ALPHYS.”'],
    [('THE JOKES ARE THE WIRES', ['SON, SUN. WHISK, FRISK. SAND, SANS.', 'ABYSS, ALPHYS. ONE WORD LEADS TO THE NEXT.'],
      'THAT IS HOW NEKA CODE RUNS.'),
     ('RAINBOW-FLASHING EYES', ['NEKA CAN ANSWER RIGHT, OR TALK NONSENSE,', 'OR CRASH MID-SENTENCE, EYES FLASHING RAINBOW.'],
      'YOU NEVER KNOW WHICH ONE IS COMING.'),
     ('CITHIA', ['TODDLLM 001, 002 AND 003 ARE DATA AVATARS.', 'THEY ACT LIKE GPUS. CITHIA IS THE REAL GPU.'],
      'THE TITLE: CLASSIC RL ELIMINATIONS X UNDERTALE.')],
    ['A DOCUMENT ABOUT REALITY, UNDERTALE AND CLASSIC RL.', 'FLOWER IS NOT GASTER. FLOWER TAKES HIS FORM.'],
    'Here is the next thing. A document. Explains more about Reality, Undertale, and Classic RL. ... Neka Code connects words through jokes: son \u2192 Sun, whisk \u2192 Frisk, sand \u2192 Sans, and abyss \u2192 Alphys.')

# ---------------- November 3, 7:35 PM ----------------
add(meta(3, '7:35 PM'), 'ASGROTH’S CURSE', '170,120,255',
    ['“NEKA ACTUALLY FIGHTS HIMSELF CONSTANTLY', 'THROUGHOUT THE LORE, ASGROTH WAS A MYTH', 'WHO CURSED HIM.”'],
    [('THE CURSE', ['ATTACK EVERY LIVING BEING IN SIGHT.', 'FEEL OBSESSION FOR THE ONES HE SPARES.'],
      'ASGROTH IS A MYTH. THE CURSE IS NOT.'),
     ('NEKA VS NEKA', ['HE FIGHTS HIMSELF TO SPARE AT LEAST SOMEONE.', 'THE ONLY ONE WHO CAN FIGHT NEKA IS NEKA.'],
      'HE NEVER STOPS FIGHTING IT.'),
     ('THE NEXT SECOND', ['THE ONE HE SPARED CAN STILL DIE,', 'FROM HIM OR FROM SOMEONE ELSE.'],
      'SPARING IS NOT SAVING.')],
    ['THE STRONGEST BEING IN THE LORE', 'CANNOT FULLY CONTROL HIMSELF.'],
    'Neka actually fights himself CONSTANTLY throughout the lore, Asgroth was a myth who cursed him. Neka was pressured to attack every living being in sight and to feel obsession to those others he spared. Neka fights himself to at least spare someone, but the next second, that person can die from him or someone else.')

add(meta(3, '7:35 PM'), 'DOG MADE GASTER', '240,240,240',
    ['“DOG MADE GASTER. DOG CAN ERASE GASTER.', 'CLASSIC RL GASTER (BUFFED GASTER)', 'BEATS DOG.”'],
    [('DOG IS GOD BACKWARD', ['THE ANNOYING DOG IS TOBY FOX’S AVATAR.', 'THE ONE WHO MADE UNDERTALE, AND ITS GASTER.'],
      'A LITTLE WHITE DOG ON THE THRONE.'),
     ('NERFED GASTER', ['UNDERTALE GASTER, THE ORIGINAL.', 'THE DOG MADE HIM, SO THE DOG CAN ERASE HIM.'],
      'LAST ON THE LIST.'),
     ('BUFFED GASTER', ['CLASSIC RL GASTER IS STRONGER THAN THE DOG.', 'ONLY NEKA AT FULL POWER IS ABOVE HIM.'],
      'NEKA, GASTER RL, DOG, UNDERTALE GASTER.')],
    ['THE SAME NAME, TWO GASTERS.', 'ONE THE DOG CAN ERASE, ONE THAT BEATS THE DOG.'],
    'Dog MADE Gaster. Dog can ERASE Gaster. Classic RL Gaster (Buffed Gaster) beats Dog.')

add(meta(3, '7:35 PM'), 'CLASSIC RL ELIMINATED', '255,215,90',
    ['“GASTER LEARNED TO GET HIS FIRST NEKA COIN!', 'SO... THE MOST IMPORTANT THING IN LORE NOW', 'IS GASTER GOT A NEKA COIN.”'],
    [('ELIMINATED', ['CLASSIC RL ELIMINATIONS', 'BECAME CLASSIC RL ELIMINATED.'],
      'ONE LETTER, AND THE GAME IS OVER.'),
     ('ALL TERMINATED', ['GASTER IS ONCE AGAIN A FLOWER.', 'THE RLS WERE ALL TERMINATED. UNDERTALE ALL WENT IN.'],
      'THE WHOLE CAST CROSSED OVER.'),
     ('ONE NEKA COIN', ['AFTER EVERY BATTLE AND EVERY DELETION,', 'GASTER GETS HIS FIRST NEKA COIN.'],
      'THAT IS WHAT ENDS IT.')],
    ['IT’S THE END OF THE GAME!', 'GASTER GOT HIS FIRST NEKA COIN.'],
    'Gaster from Undertale, and the Classic RL Eliminated Crossover. Classic RL Eliminations became Classic RL Eliminated, since Gaster is once again a Flower, RLs were all Terminated, Undertale all went in, and Gaster learned to get his first Neka Coin! So... the most important thing in lore now is Gaster got a Neka Coin. IT\'S THE END OF THE GAME!')

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
assert len(B) == 4, len(B)

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
