#!/usr/bin/env python3
"""build1123.py - splice BEATS 1123-1126 (Toby, Oct 13 3:37 PM, Email 1778) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = "24426.0", "24514.0"
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

rd = lambda n: io.open(T + n, encoding='utf-8').read().rstrip('\n')
ROWS = rd('rows1123.txt')
anchor_row = [l for l in src.split('\n') if l.startswith("  { key:\"CHAPTER 2: I DO MORE BECAUSE I CAN\"")]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = rd('segs1123.txt')
anchor_seg = "  if(c >= 24404.0 && c < 24426.0) return [1122, c-24404.0];  // CHAPTER 2: I DO MORE BECAUSE I CAN"
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches1123.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 4 rows, 4 seg lines, 4 branches' % (OLD_CYC, NEW_CYC))
