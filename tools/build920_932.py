#!/usr/bin/env python3
"""build920_932.py - splice BEATS 920-932 (Toby, Sept 28) into the game."""
import io
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '19960.0', '20246.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open('/Users/tdeshane/endless-staircase/tools/rows920_932.txt', encoding='utf-8').read().rstrip('\n')
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"0% FOX"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open('/Users/tdeshane/endless-staircase/tools/segs920_932.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 19938.0 && c < 19960.0) return [919, c-19938.0];  // 0% FOX'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open('/Users/tdeshane/endless-staircase/tools/branches920_932.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 13 rows, 13 seg lines, 13 branches' % (OLD_CYC, NEW_CYC))
