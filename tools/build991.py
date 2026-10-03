#!/usr/bin/env python3
"""build986.py - splice BEATS 991 (Toby, Oct 3, 5:59 PM) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = "21522.0", "21544.0"
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

ROWS = io.open(T + 'rows991.txt', encoding='utf-8').read().rstrip('\n')
anchor_row = [l for l in src.split('\n') if l.startswith("  { key:\"TWO BEINGS\"")]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = io.open(T + 'segs991.txt', encoding='utf-8').read().rstrip('\n')
anchor_seg = "  if(c >= 21500.0 && c < 21522.0) return [990, c-21500.0];  // TWO BEINGS"
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches991.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 1 row, 1 seg line, 1 branch' % (OLD_CYC, NEW_CYC))
