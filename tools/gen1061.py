#!/usr/bin/env python3
"""
gen1061.py - draw the branches for BEATS 1061-1062 from Toby's October 10, 2026, 1:19 PM and 1:30 PM
messages (thread 1a1204179c8e973f "Another Document", msgs 1a126d3863a64380, 1a126d4d4d1e693c,
1a126ddcca560df5). Same template as 1008-1060 (emit_tail1008.py).

Only Toby's own lines are drawn. 1:19 PM: "Luigi Inus has the 'Dum dun dun da dum dun dun dun dun'
Pirate Music. Alex basically starts beating more and more in Supreme Mate, increasing Alex's power
level. It would be outstanding if Classics Alex is secretly Neka LAI." 1:20 PM: "Alex could PRETEND to
lose. Luigi Inus would attack Neka for him. Alex could have turned Gaster into Greg." 1:30 PM: "The
faceless doll erased Bort's face, then both dolls combine, Alex and Neka are clones, Greg and Gaster
are clones. Neka takes off his coat, and there is Alex right there. ... Neka says 'Divide. Here,
Pupahya. You weren't from this world, neither of you are... I AM.' ... Alex and Neka are 2. They have
the same everything, but they are 2 beings. Alex goes with Neka. Alex moves so fast that you need to
pause the game to see him."
"""
import io

BASE = 1061
TAG = "1061"
START = 23062.0
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

# ---------------- October 10, 1:19 PM ----------------
add(meta(10, '1:19 PM'), 'THE PIRATE MUSIC', '255,150,60',
    ['“LUIGI INUS HAS THE ‘DUM DUN DUN DA DUM DUN DUN', 'DUN DUN’ PIRATE MUSIC. ALEX BASICALLY STARTS', 'BEATING MORE AND MORE IN SUPREME MATE.”'],
    [('THE SEVEN SEAS', ['OCT 9, 7:39 PM: “SAILED ACROSS THE 7 SEAS,', 'LOOKING FOR POWERFUL ARTIFACTS.”'],
      'NOW THE PIRATE HAS HIS OWN PIRATE THEME.'),
     ('SUPREME MATE', ['THE OLD ARCHIVE: “ALEX WINS SUPREME MATE', 'BECAUSE HE MADE THAT GAME.”'],
      'NOW EVERY WIN RAISES ALEX’S POWER LEVEL.'),
     ('SECRETLY NEKA LAI?', ['1:19 PM: “IT WOULD BE OUTSTANDING IF CLASSICS', 'ALEX IS SECRETLY NEKA LAI.”'],
      '1:20 PM: “ALEX COULD PRETEND TO LOSE.” LEFT OPEN HERE.')],
    ['“INCREASING ALEX’S POWER LEVEL.”', 'ELEVEN MINUTES LATER, NEKA TAKES OFF HIS COAT.'])

# ---------------- October 10, 1:30 PM ----------------
add(meta(10, '1:30 PM'), 'ALEX AND NEKA ARE 2', '120,255,200',
    ['“NEKA TAKES OFF HIS COAT, AND THERE IS ALEX', 'RIGHT THERE... ALEX AND NEKA ARE 2. THEY HAVE', 'THE SAME EVERYTHING, BUT THEY ARE 2 BEINGS.”'],
    [('PRESSURETALE ALEX', ['OCT 7: “NEKA AND CODE MERGED AND BECAME', 'BASICALLY PRESSURETALE ALEX KNOWN AS NEKA.”'],
      'NOW: TWO BEINGS, SAME EVERYTHING, CLONES OF EACH OTHER.'),
     ('GREG AND GASTER', ['THE OLD ARCHIVE: “GREG IS THE MAN IN THE', 'GREEN SHIRT, ALEX WITH THE BLUE.”'],
      'NOW GREG AND GASTER ARE CLONES TOO.'),
     ('THE FACELESS DOLL', ['SEPT 29: “FACELESS DOLL IS A DOLL WHERE', 'LUIGI GREEN ERASED THE FACE.”'],
      'NOW SHE ERASES BORT’S FACE, AND THE TWO DOLLS COMBINE.')],
    ['“YOU WEREN’T FROM THIS WORLD... I AM.”', 'ALEX MOVES SO FAST YOU NEED TO PAUSE THE GAME TO SEE HIM.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail1008.py', encoding='utf-8').read())
