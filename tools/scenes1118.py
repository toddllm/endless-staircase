#!/usr/bin/env python3
"""scenes1118.py - clone capture scene b1117 into b1118-b1122."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1117": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['7:07 PM'] * 5
for k, when in enumerate(WHEN):
    n = 1118 + k
    st = 24316.0 + 22.0 * k
    t = base.replace('"b1117"', '"b%d"' % n).replace('24294.0', '%.1f' % st).replace('24314.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1117', 'loopVs.phase=%d' % n).replace('BEAT 1117 (Toby, Oct 12, 4:35 PM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24294.0' not in t and '24314.8' not in t and '1117' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1118-b1122 added')
