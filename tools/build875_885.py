#!/usr/bin/env python3
"""build875_885.py - splice BEATS 875-885 (Toby, Sept 26, 4:11 + 4:21 PM) into the game."""
import io
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '18970.0', '19212.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open('/Users/tdeshane/endless-staircase/tools/rows875_885.txt', encoding='utf-8').read().rstrip('\n')
# anchor: the last LV_BEATS row, beat 858
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"INFINITY%"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open('/Users/tdeshane/endless-staircase/tools/segs875_885.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 18948.0 && c < 18970.0) return [874, c-18948.0];'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open('/Users/tdeshane/endless-staircase/tools/branches875_885.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 11 rows, 11 seg lines, 11 branches' % (OLD_CYC, NEW_CYC))
