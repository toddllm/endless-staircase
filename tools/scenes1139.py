#!/usr/bin/env python3
"""scenes1139.py - clone capture scene b1138 into b1139-b1142."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1138": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['8:12 PM', '8:12 PM', '8:12 PM', '8:14 PM']
for k, when in enumerate(WHEN):
    n = 1139 + k
    st = 24778.0 + 22.0 * k
    t = base.replace('"b1138"', '"b%d"' % n).replace('24756.0', '%.1f' % st).replace('24776.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1138', 'loopVs.phase=%d' % n).replace('BEAT 1138 (Toby, Oct 13, 7:22 PM)', 'BEAT %d (Toby, Oct 13, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24756.0' not in t and '24776.8' not in t and '1138' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1139-b1142 added')
