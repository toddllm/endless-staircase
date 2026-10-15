#!/usr/bin/env python3
"""scenes1157.py - clone capture scene b1156 into b1157 and b1158."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1156": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1157, 25174.0, 'Oct 15, 4:12 PM'), (1158, 25196.0, 'Oct 15, 4:12 PM')]:
    t = base.replace('"b1156"', '"b%d"' % n).replace('25152.0', '%.1f' % st).replace('25172.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1156', 'loopVs.phase=%d' % n).replace('BEAT 1156 (Toby, Oct 15, 4:03 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25152.0' not in t and '25172.8' not in t and '1156' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1157, b1158 added')
