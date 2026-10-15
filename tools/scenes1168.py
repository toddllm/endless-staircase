#!/usr/bin/env python3
"""scenes1168.py - clone capture scene b1167 into b1168-b1169."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1167": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1168, 25416.0, 'Oct 15, 6:27 PM'), (1169, 25438.0, 'Oct 15, 6:30 PM')]:
    t = base.replace('"b1167"', '"b%d"' % n).replace('25394.0', '%.1f' % st).replace('25414.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1167', 'loopVs.phase=%d' % n).replace('BEAT 1167 (Toby, Oct 15, 5:48 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25394.0' not in t and '25414.8' not in t and '1167' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1168-b1169 added')
