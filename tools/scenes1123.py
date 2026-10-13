#!/usr/bin/env python3
"""scenes1123.py - clone capture scene b1122 into b1123-b1126."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1122": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['3:37 PM'] * 4
for k, when in enumerate(WHEN):
    n = 1123 + k
    st = 24426.0 + 22.0 * k
    t = base.replace('"b1122"', '"b%d"' % n).replace('24404.0', '%.1f' % st).replace('24424.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1122', 'loopVs.phase=%d' % n).replace('BEAT 1122 (Toby, Oct 12, 7:07 PM)', 'BEAT %d (Toby, Oct 13, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24404.0' not in t and '24424.8' not in t and '1122' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1123-b1126 added')
