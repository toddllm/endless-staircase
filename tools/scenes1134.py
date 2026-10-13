#!/usr/bin/env python3
"""scenes1134.py - clone capture scene b1133 into b1134-b1138."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1133": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['7:09 PM', '7:22 PM', '7:22 PM', '7:22 PM', '7:22 PM']
for k, when in enumerate(WHEN):
    n = 1134 + k
    st = 24668.0 + 22.0 * k
    t = base.replace('"b1133"', '"b%d"' % n).replace('24646.0', '%.1f' % st).replace('24666.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1133', 'loopVs.phase=%d' % n).replace('BEAT 1133 (Toby, Oct 13, 4:40 PM)', 'BEAT %d (Toby, Oct 13, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24646.0' not in t and '24666.8' not in t and '1133' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1134-b1138 added')
