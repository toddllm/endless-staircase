#!/usr/bin/env python3
"""scenes1154.py - clone capture scene b1153 into b1154."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1153": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1154, 25108.0, 'Oct 15, 3:36 PM')]:
    t = base.replace('"b1153"', '"b%d"' % n).replace('25086.0', '%.1f' % st).replace('25106.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1153', 'loopVs.phase=%d' % n).replace('BEAT 1153 (Toby, Oct 14, 8:19 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25086.0' not in t and '25106.8' not in t and '1153' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scene b1154 added')
