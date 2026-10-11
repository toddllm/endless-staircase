#!/usr/bin/env python3
"""scenes1070.py - clone capture scene b1069 into b1070-b1071."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1069": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1070, 23260.0, "6:23 AM"), (1071, 23282.0, "6:31 AM")]:
    t = base.replace('"b1069"', '"b%d"' % n).replace('23238.0', '%.1f' % st).replace('23258.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1069', 'loopVs.phase=%d' % n).replace('BEAT 1069 (Toby, Oct 10, 7:46 PM)', 'BEAT %d (Toby, Oct 11, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1070-b1071 added')
