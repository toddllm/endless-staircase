#!/usr/bin/env python3
"""build912_917.py - splice BEATS 912-917 (Toby, Sept 27, 5:24 and 5:26 PM) into the game."""
import io
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = '19784.0', '19916.0'
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open('/Users/tdeshane/endless-staircase/tools/rows912_917.txt', encoding='utf-8').read().rstrip('\n')
# anchor: the last LV_BEATS row, beat 911
anchor_row = [l for l in src.split('\n') if l.startswith('  { key:"THE TEDDY BEAR STARTED TO WALK"')]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open('/Users/tdeshane/endless-staircase/tools/segs912_917.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = '  if(c >= 19762.0 && c < 19784.0) return [911, c-19762.0];'
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open('/Users/tdeshane/endless-staircase/tools/branches912_917.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 6 rows, 6 seg lines, 6 branches' % (OLD_CYC, NEW_CYC))
