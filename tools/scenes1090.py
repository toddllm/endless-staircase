#!/usr/bin/env python3
"""scenes1090.py - clone capture scene b1089 into b1090-b1092."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1089": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1090, 23700.0, '9:54 AM'), (1091, 23722.0, '9:54 AM'), (1092, 23744.0, '10:03 AM')]:
    t = base.replace('"b1089"', '"b%d"' % n).replace('23678.0', '%.1f' % st).replace('23698.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1089', 'loopVs.phase=%d' % n).replace('BEAT 1089 (Toby, Oct 12, 8:23 AM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '23678.0' not in t and '23698.8' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1090-b1092 added')
