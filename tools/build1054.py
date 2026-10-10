#!/usr/bin/env python3
"""build1054.py - splice BEATS 1054-1055 (Toby, Oct 10 9:17 AM, THROUGH THE STATIC and
SPRUNKI: THE MYTHBRINGERS) into the game."""
import io
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
src = io.open(GAME, encoding='utf-8').read()
orig = src

OLD_CYC, NEW_CYC = "22908.0", "22952.0"
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)

rd = lambda n: io.open(T + n, encoding='utf-8').read().rstrip('\n')
ROWS = rd('rows1054.txt')
anchor_row = [l for l in src.split('\n') if l.startswith("  { key:\"A SPRUNKI MOD\"")]
assert len(anchor_row) == 1
i = src.index(anchor_row[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]

SEG = rd('segs1054.txt')
anchor_seg = "  if(c >= 22886.0 && c < 22908.0) return [1053, c-22886.0];  // A SPRUNKI MOD"
assert src.count(anchor_seg) == 1
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)

BRANCH = io.open(T + 'branches1054.js', encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)

assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK: LV_CYC %s -> %s, 2 rows, 2 seg lines, 2 branches' % (OLD_CYC, NEW_CYC))
