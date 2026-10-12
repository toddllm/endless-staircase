#!/usr/bin/env python3
"""scenes1074.py - clone capture scene b1073 into b1074-b1084."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1073": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1074, 23348.0, '3:54 PM'), (1075, 23370.0, '4:06 PM'), (1076, 23392.0, '4:11 PM'), (1077, 23414.0, '5:22 PM'), (1078, 23436.0, '5:22 PM'), (1079, 23458.0, '6:50 PM'), (1080, 23480.0, '6:50 PM'), (1081, 23502.0, '8:00 PM'), (1082, 23524.0, '8:01 PM'), (1083, 23546.0, '8:18 PM'), (1084, 23568.0, '8:20 PM')]:
    t = base.replace('"b1073"', '"b%d"' % n).replace('23326.0', '%.1f' % st).replace('23346.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1073', 'loopVs.phase=%d' % n).replace('BEAT 1073 (Toby, Oct 11, 7:01 AM)', 'BEAT %d (Toby, Oct 11, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1074-b1084 added')
