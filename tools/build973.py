#!/usr/bin/env python3
"""build973.py - splice BEAT 973 (Toby, Oct 2) into the game, with the Gaster figure."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '21126.0', '21148.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open(T + 'rows973.txt', encoding='utf-8').read().rstrip('\n')
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"EVERYONE TO PRESSURETALE"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open(T + 'segs973.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 21104.0 && c < 21126.0) return [972, c-21104.0];  // EVERYONE TO PRESSURETALE'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches973.js', encoding='utf-8').read()
GASTER = io.open(T + 'gaster973.js', encoding='utf-8').read()
assert BRANCH.count('    if(neA>0.01){') == 1
BRANCH = BRANCH.replace('    if(neA>0.01){', GASTER + '    if(neA>0.01){', 1)
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 1 row, 1 seg line, 1 branch + Gaster' % (OLD_CYC, NEW_CYC))
