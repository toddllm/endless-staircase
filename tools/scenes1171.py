#!/usr/bin/env python3
"""scenes1171.py - clone capture scene b1170 into b1171 and b1172."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1170": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1171, 25482.0, 'Oct 15, 7:02 PM'), (1172, 25504.0, 'Oct 15, 7:04 PM')]:
    t = base.replace('"b1170"', '"b%d"' % n).replace('25460.0', '%.1f' % st).replace('25480.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1170', 'loopVs.phase=%d' % n).replace('BEAT 1170 (Toby, Oct 15, 6:48 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25460.0' not in t and '25480.8' not in t and '1170' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1171, b1172 added')
