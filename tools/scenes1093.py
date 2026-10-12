#!/usr/bin/env python3
"""scenes1093.py - clone capture scene b1092 into b1093-b1094."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1092": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1093, 23766.0, '11:39 AM'), (1094, 23788.0, '11:44 AM')]:
    t = base.replace('"b1092"', '"b%d"' % n).replace('23744.0', '%.1f' % st).replace('23764.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1092', 'loopVs.phase=%d' % n).replace('BEAT 1092 (Toby, Oct 12, 10:03 AM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '23744.0' not in t and '23764.8' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1093-b1094 added')
