#!/usr/bin/env python3
"""build859_874.py - splice BEATS 859-874 (Toby, Sept 26, 3:46 PM, Email 1535) into the game."""
import io
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '18618.0', '18970.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open('/Users/tdeshane/endless-staircase/tools/rows859_874.txt', encoding='utf-8').read().rstrip('\n')
# anchor: the last LV_BEATS row, beat 858
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"SIMON.PS IS VERY EVIL"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open('/Users/tdeshane/endless-staircase/tools/segs859_874.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 18596.0 && c < 18618.0) return [858, c-18596.0];'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open('/Users/tdeshane/endless-staircase/tools/branches859_874.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 16 rows, 16 seg lines, 16 branches' % (OLD_CYC, NEW_CYC))
