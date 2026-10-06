#!/usr/bin/env python3
"""
gen1003.py - draw branches for BEATS 1003-1007 from Toby's October 5, 2026 messages
"Re: Document", thread 1a0f9cb82996f580. Same template as 933-1002 (emit_tail933.py).

  4:27 PM  1a10dbfd1783e609  -> 1003 (It Is Me)
  4:28 PM  1a10dc10c2a857ca  -> 1003 (teal strings, storm of saws)
  5:14 PM  1a10deacdec1b936  -> 1004 (Vacuum of Code)
  5:25 PM  1a10df5b4cbc0793  -> NO BEAT (image request)
  5:33 PM  1a10dfc9a89f8b4e  -> 1005 (I Planned It)
  7:30 PM  1a10e6809b2be449  -> 1006 (Rhabdophobia; the phobia list is pasted reference)
  7:34 PM  1a10e6b59e2e6a6b  -> 1007 (Hello Me)
  7:40 PM  1a10e714b7fef1cf  -> NO BEAT (image request)

Only Toby's own sentences are drawn; italic retellings read like pasted chatbot rewrites.
"""
import io

BASE = 1003
TAG = "1003"
START = 21786.0
STEP = 22.0
DATE_LONG = 'October 5'
DATE_SHORT = 'OCT 5'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 4, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

add(meta('4:27 PM'), 'IT IS ME', '90,220,210',
    ['“HELLO, GASTER. IT IS ME.',
     'YOURSELF.”'],
    [('THE CARTOON GASTER',
      ['/enemy_health = 0',
       'enemy:Destroy()'],
      'BLUE SAWS. EVEN THE SPRUNKIS FALL.'),
     ('THE MOUTH',
      ['A TOOTHED CODE TUBE FROM HIS CHEST.',
       '“THE DATA AND CODE ARE DELICIOUS.”'],
      'THE WHOLE ARMY: CONSUMED.'),
     ('#### ######',
      ['NEKA OMAZEN,',
       'AS A CARTOON GASTER.'],
      'TEAL STRINGS. A STORM OF SAWS.'),
     ],
    ['“I AM YOU, I AM GASTER.”',
     '“NO! I AM GASTER!”'])

add(meta('5:14 PM'), 'VACUUM OF CODE', '120,230,140',
    ['“IS THAT ALL? THEN IT’S MY TURN.',
     'YOU WON’T ESCAPE THIS TIME!”'],
    [('SHIELD:DESTROY()',
      ['NEKA WRITES IT. GASTER IS DESTROYED,',
       'THEN RESETS HIMSELF.'],
      'POLYCYCROPLASM, PARANOIDIA, PARA-FURY.'),
     ('THE LONGEST BATTLE',
      ['THOUSANDS OF YEARS. FORMS, CLONES,',
       'SPRUNKIS, BEDS, BOOKS, A WRENCH.'],
      'THEY SLEEP 666 YEARS, THEN CONTINUE.'),
     ('THE ULTIMATE VACUUM OF CODE',
      ['THE MALLOW + WENDA.PS’S SUIT,',
       'THEN 20 YEARS MAKING IT STRONGER.'],
      'THE HAND WHO SPEAKS IN MAN(S).'),
     ],
    ['TO BE CONTINUED.',
     'NEKA AT 1 HP. GASTER FACING THE VACUUM.'])

add(meta('5:33 PM'), 'I PLANNED IT', '255,170,70',
    ['“I PLANNED YOU TO BEAT ME.”',
     ''],
    [('THE CLASH',
      ['HANDS VS MEN. CODE FALLS',
       'AND TURNS INTO MINI GASTERS.'],
      'THE VACUUM CONSUMES IT, LIKE ALWAYS.'),
     ('INFINITY PARA-FURIES',
      ['GASTER BECOMES A VOID OF EYES,',
       'AND MAKES HIMSELF SO MANY TIMES.'],
      'THE VACUUM SHATTERS.'),
     ('20,000 DROPKICK',
      ['A THOUSAND KJS. LARGE ARMS.',
       'THE SUIT IS TORN APART.'],
      'NEKA SHOWS. NO MORE MECHA SUIT.'),
     ],
    ['“I NOW HAVE THE SCRAPS AND THE ATTACKS.”',
     'GASTER SCREAMS.'])

add(meta('7:30 PM'), 'RHABDOPHOBIA', '210,90,60',
    ['“RHABDOPHOBIA.”',
     'THE FEAR OF BEING SEVERELY BEATEN.'],
    [('EVERYONE HAS IT',
      ['CLASSICS, PRESSURE, ALL THE GAMES.',
       'IN THE GAMES, BEATEN MEANS DEATH.'],
      'NEKA SAYS THE WORD.'),
     ('THE MECH',
      ['BUILT FROM HIS OWN SOURCES.',
       'BOTH ARMS ARE VACUUMS.'],
      'EVEN LARGER THAN THE SUIT.'),
     ('TELEKINESIS',
      ['NEKA CONTROLS IT WITH',
       'THE STRONGEST TELEKINESIS.'],
      'IN ALL OF FICTION.'),
     ],
    ['THE SCRAPS BECAME A BIGGER MACHINE.',
     'EVERYONE FEARS BEING BEATEN.'])

add(meta('7:34 PM'), 'HELLO ME', '245,245,250',
    ['“YOU ARE ME.”',
     '“I AM YOU. HELLO ME.”'],
    [('THE 50 YEAR BATTLE',
      ['GASTER VS THE MECH. SAWS EVERYWHERE.',
       'GASTER WINS AGAIN.'],
      'THE MECH AND THE LAB: DESTROYED.'),
     ('THE URINITE',
      ['“YOUR URINITE RAN OFF.”',
       '“IT WON’T RUN OFF!” “IT DID.”'],
      'NEKA: “HUH, WHAT HAPPENED HERE?”'),
     ('THE MERGE',
      ['NEKA AND GASTER MERGE INTO',
       'THE ACTUAL PRESSURETALE GASTER.'],
      'A VERY SIMPLE CARTOON DESIGN.'),
     ],
    ['NOT TWO ANYMORE.',
     'ONE GASTER.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
