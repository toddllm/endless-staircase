#!/usr/bin/env python3
"""scenes1163.py - clone capture scene b1162 into b1163."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1162": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1163, 25306.0, 'Oct 15, 5:09 PM')]:
    t = base.replace('"b1162"', '"b%d"' % n).replace('25284.0', '%.1f' % st).replace('25304.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1162', 'loopVs.phase=%d' % n).replace('BEAT 1162 (Toby, Oct 15, 4:50-4:52 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25284.0' not in t and '25304.8' not in t and '1162' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scene b1163 added')
