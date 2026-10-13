#!/usr/bin/env python3
"""scenes1127.py - clone capture scene b1126 into b1127-b1131."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1126": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['4:30 PM', '4:30 PM', '4:31 PM', '4:33 PM', '4:37 PM']
for k, when in enumerate(WHEN):
    n = 1127 + k
    st = 24514.0 + 22.0 * k
    t = base.replace('"b1126"', '"b%d"' % n).replace('24492.0', '%.1f' % st).replace('24512.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1126', 'loopVs.phase=%d' % n).replace('BEAT 1126 (Toby, Oct 13, 3:37 PM)', 'BEAT %d (Toby, Oct 13, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24492.0' not in t and '24512.8' not in t and '1126' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1127-b1131 added')
