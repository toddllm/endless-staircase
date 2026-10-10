#!/usr/bin/env python3
"""scenes1064.py - clone capture scene b1063 into b1064-b1066."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1063": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1064, 23128.0, '7:14 PM'), (1065, 23150.0, '7:15 PM'), (1066, 23172.0, '7:32 PM')]:
    t = base.replace('"b1063"', '"b%d"' % n).replace('23106.0', '%.1f' % st).replace('23126.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1063', 'loopVs.phase=%d' % n).replace('BEAT 1063 (Toby, Oct 10, 2:54 PM)', 'BEAT %d (Toby, Oct 10, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1064-b1066 added')
