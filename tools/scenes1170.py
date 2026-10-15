#!/usr/bin/env python3
"""scenes1170.py - clone capture scene b1169 into b1170."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1169": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1170, 25460.0, 'Oct 15, 6:48 PM')]:
    t = base.replace('"b1169"', '"b%d"' % n).replace('25438.0', '%.1f' % st).replace('25458.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1169', 'loopVs.phase=%d' % n).replace('BEAT 1169 (Toby, Oct 15, 6:30 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25438.0' not in t and '25458.8' not in t and '1169' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scene b1170 added')
