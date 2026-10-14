#!/usr/bin/env python3
"""scenes1147.py - clone capture scene b1146 into b1147 and b1148."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1146": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1147, 24954.0, '5:32 PM'), (1148, 24976.0, '5:32 PM')]:
    t = base.replace('"b1146"', '"b%d"' % n).replace('24932.0', '%.1f' % st).replace('24952.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1146', 'loopVs.phase=%d' % n).replace('BEAT 1146 (Toby, Oct 14, 6:40 AM)', 'BEAT %d (Toby, Oct 14, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24932.0' not in t and '24952.8' not in t and '1146' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1147, b1148 added')
