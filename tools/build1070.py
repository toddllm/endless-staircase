#!/usr/bin/env python3
"""build1070.py - splice BEATS 1070-1071 (Toby, Oct 11 6:23 + 6:31 AM) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = "23260.0", "23304.0"
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

rd = lambda n: io.open(T + n, encoding='utf-8').read().rstrip('\n')
ROWS = rd('rows1070.txt')
anchor_row = [l for l in src.split('\n') if l.startswith("  { key:\"PYCHOPATHICAL USYTREMICISM\"")]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = rd('segs1070.txt')
anchor_seg = "  if(c >= 23238.0 && c < 23260.0) return [1069, c-23238.0];  // PYCHOPATHICAL USYTREMICISM"
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches1070.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 2 rows, 2 seg lines, 2 branches' % (OLD_CYC, NEW_CYC))
