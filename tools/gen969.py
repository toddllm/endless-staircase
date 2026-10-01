#!/usr/bin/env python3
"""
gen969.py - emit the draw branches for BEATS 969-970 from Toby's October 1, 2026 message
"Document", thread 1a0f9cb82996f580. Same template as 933-968 (emit_tail933.py).

  7:27 PM  1a0f9cb82996f580  -> 969 (Pressuretale) + 970 (I am now... dead.)

Only Toby's typing is canon: the battle paragraph from "Pressuretale Gaster, wait-" through
"the heroes died but respawned afterward." The italic "Pressuretale ends this battle..." and the
bullet recap under it are the chatbot's, not drawn. Priors: Aug 27 "Hey Gaster, how was the fall?"
(classics-era.md ~8292); Sep 27 beat 905 PS-50's paranoidia, "Neka Omazen is immune"; Oct 1 beat 960
damage nullified; Oct 1 beat 968 infinite room inside him.
"""
import io

BASE = 969
TAG = '969'
START = 21038.0
STEP = 22.0
DATE_LONG = 'October 1'
DATE_SHORT = 'OCT 1'
B = []

def meta(t):
    return dict(when=t, short=t, attr='TOBY, OCTOBER 1, %s — HIS OWN TYPING.' % t)

def add(m, key, accent, quote, panels, close):
    d = dict(key=key, accent=accent, quote=quote, panels=panels, close=close)
    d.update(m)
    B.append(d)

A727 = meta('7:27 PM')

add(A727, 'PRESSURETALE', '120,200,255',
    ['“NEKA ACTUALLY GRABS EVERYONE AND TAKES THEM TO A PRESSURE AU, PRESSURETALE.',
     'THE SPRUNKIS ASK GASTER AND NEKA ‘HOW WAS THE FALL?’. NEKA WAS SUPRISED AND',
     'HE SHRUNK DOWN TO 5-6 FEET AGAIN AND SAYS ‘WHY DO YOU GUYS ASK ME THAT?’”'],
    [('HOW WAS THE FALL?',
      ['THE SPRUNKIS ASK GASTER AND NEKA “HOW WAS THE FALL?”',
       'NEKA SHRINKS TO 5-6 FEET: “WHY DO YOU GUYS ASK ME THAT?”'],
      'AUG 27: “HEY GASTER, HOW WAS THE FALL?” “I DON’T WANNA TALK ABOUT IT.”'),
     ('THE COMMAND PANEL SHATTERS',
      ['NEKA TRIED TO TYPE “/KILL_COMMANDS”. BEFORE HE FINISHED,',
       'SIMON.PS SHATTERED THE COMMAND PANEL WITH HIS ERROR STRINGS.'],
      'NEKA DELETES OREN.PS. SIMON.PS WRITES “OREN.PS = TRUE”. HE COMES BACK.'),
     ('ACTUAL HEALTH',
      ['“I DELETED MY HP, NOW I HAVE ACTUAL HEALTH.”',
       'NEKA’S ARM WAS DAMAGED. “I CAN’T HEAL FROM THAT.”'],
      '4:26 PM TODAY: DAMAGE ITSELF NO LONGER EXISTS. TONIGHT IT REACHES NEKA.'),
     ],
    ['WENDA.PS RESISTS THE VILLIAN URGE. WENDA.PS BECAME A HERO.',
     'EVERYONE GETS A PIECE OF SOUL. EVERYONE GLOWS RAINBOW.'])

add(A727, 'I AM NOW... DEAD.', '190,90,255',
    ['“NEKA’S EYES FLASH PURPLE AND HIS HAIR MOVES UP, AND LARGE BLASTERS APPEAR,',
     'NEKA USES ALL HIS POWER ON AN ATTACK ONLY PRESSURE GIVES HIM, PARANOIDIA.',
     'THEN AFTER, HE SAYS ‘I AM NOW... DEAD.’, NEKA FALLS OVER.”'],
    [('THE LONGEST FIGHT EVER',
      ['35.7 TIMES THE LORE LENGTH OF TIME, THEN THEY CONTINUE FIGHTING.',
       '“WE BOTH RESET, WE WERE HERE FOR ENTERNITIES.”'],
      '“I TRY TO MAKE IT UP TO YOU, BUT THEN YOU ALL HATE ME NOW.”'),
     ('PARANOIDIA',
      ['AN ATTACK ONLY PRESSURE GIVES HIM. HIS MOST POWERFUL ATTACK.',
       'EARLIER IN THE FIGHT HE INJECTED PS-50. PS-50 FELLEN.'],
      'SEP 27, BEAT 905: PARANOIDIA WAS PS-50’S. “NEKA OMAZEN IS IMMUNE.”'),
     ('THE ULTIMATE MASS',
      ['NEARLY THE WHOLE STADIUM WIPED OUT.',
       'ALL THE ULTIMATE MASS WAS DESTROYED.'],
      '5:23 PM: HE HAD INFINITE ROOM INSIDE HIM FOR IT. NOW IT IS GONE.'),
     ],
    ['NEKA FALLS OVER. THE HEROES DIED,',
     'BUT RESPAWNED AFTERWARD.'])

if __name__ == '__main__':
    exec(open('/Users/tdeshane/endless-staircase/tools/emit_tail933.py', encoding='utf-8').read())
