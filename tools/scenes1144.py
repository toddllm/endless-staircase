#!/usr/bin/env python3
"""scenes1144.py - clone capture scene b1143 into b1144 and b1145."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1143": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1144, 24888.0, '6:24 AM'), (1145, 24910.0, '6:24 AM')]:
    t = base.replace('"b1143"', '"b%d"' % n).replace('24866.0', '%.1f' % st).replace('24886.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1143', 'loopVs.phase=%d' % n).replace('BEAT 1143 (Toby, Oct 14, 5:48 AM)', 'BEAT %d (Toby, Oct 14, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24866.0' not in t and '24886.8' not in t and '1143' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1144, b1145 added')
