#!/usr/bin/env python3
"""scenes1072.py - clone capture scene b1071 into b1072-b1073."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1071": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1072, 23304.0, "6:57 AM"), (1073, 23326.0, "7:01 AM")]:
    t = base.replace('"b1071"', '"b%d"' % n).replace('23282.0', '%.1f' % st).replace('23302.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1071', 'loopVs.phase=%d' % n).replace('BEAT 1071 (Toby, Oct 11, 6:31 AM)', 'BEAT %d (Toby, Oct 11, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1072-b1073 added')
