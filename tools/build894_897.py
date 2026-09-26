#!/usr/bin/env python3
"""build893.py - splice BEATS 894-897 (Toby, Sept 26, 6:33 + 6:35 PM) into the game."""
import io
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '19388.0', '19476.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open('/Users/tdeshane/endless-staircase/tools/rows894_897.txt', encoding='utf-8').read().rstrip('\n')
# anchor: the last LV_BEATS row, beat 891
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"THE REAL ONE HAS A BRAIN"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open('/Users/tdeshane/endless-staircase/tools/segs894_897.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 19366.0 && c < 19388.0) return [893, c-19366.0];'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open('/Users/tdeshane/endless-staircase/tools/branches894_897.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 4 rows, 4 seg lines, 4 branches' % (OLD_CYC, NEW_CYC))
