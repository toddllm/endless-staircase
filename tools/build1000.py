#!/usr/bin/env python3
"""build1000.py - splice BEATS 1000-1007 (Toby, Oct 4 2:43 PM - Oct 5 7:34 PM) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = "21720.0", "21896.0"
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

rd = lambda n: io.open(T + n, encoding='utf-8').read().rstrip('\n')
ROWS = rd('rows1000.txt') + '\n' + rd('rows1003.txt')
anchor_row = [l for l in src.split('\n') if l.startswith("  { key:\"SANS AND PAPYRUS\"")]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = rd('segs1003.txt') + '\n' + rd('segs1000.txt')
anchor_seg = "  if(c >= 21698.0 && c < 21720.0) return [999, c-21698.0];  // SANS AND PAPYRUS"
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches1000.js', encoding='utf-8').read() + io.open(T + 'branches1003.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 8 rows, 8 seg lines, 8 branches' % (OLD_CYC, NEW_CYC))
