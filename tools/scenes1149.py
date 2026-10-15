#!/usr/bin/env python3
"""scenes1149.py - clone capture scene b1148 into b1149..b1153."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1148": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1149, 24998.0, '8:14 PM'), (1150, 25020.0, '8:14 PM'), (1151, 25042.0, '8:16 PM'), (1152, 25064.0, '8:17 PM'), (1153, 25086.0, '8:19 PM')]:
    t = base.replace('"b1148"', '"b%d"' % n).replace('24976.0', '%.1f' % st).replace('24996.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1148', 'loopVs.phase=%d' % n).replace('BEAT 1148 (Toby, Oct 14, 5:32 PM)', 'BEAT %d (Toby, Oct 14, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24976.0' not in t and '24996.8' not in t and '1148' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1149..b1153 added')
