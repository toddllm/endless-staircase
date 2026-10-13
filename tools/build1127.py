#!/usr/bin/env python3
"""build1127.py - splice BEATS 1127-1131 (Toby, Oct 13 4:30-4:37 PM, Emails 1779-1783) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = "24514.0", "24624.0"
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

rd = lambda n: io.open(T + n, encoding='utf-8').read().rstrip('\n')
ROWS = rd('rows1127.txt')
anchor_row = [l for l in src.split('\n') if l.startswith("  { key:\"ALEX CAN CONTROL THE FORMS\"")]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = rd('segs1127.txt')
anchor_seg = "  if(c >= 24492.0 && c < 24514.0) return [1126, c-24492.0];  // ALEX CAN CONTROL THE FORMS"
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches1127.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 5 rows, 5 seg lines, 5 branches' % (OLD_CYC, NEW_CYC))
