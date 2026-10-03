#!/usr/bin/env python3
"""build981.py - splice BEAT 981 (Toby, Oct 3, 3:17 PM) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '21302.0', '21324.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open(T + 'rows981.txt', encoding='utf-8').read().rstrip('\n')
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"COMICAL NEKA"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open(T + 'segs981.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 21280.0 && c < 21302.0) return [980, c-21280.0];  // COMICAL NEKA'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches981.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 1 row, 1 seg line, 1 branch' % (OLD_CYC, NEW_CYC))
