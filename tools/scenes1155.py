#!/usr/bin/env python3
"""scenes1155.py - clone capture scene b1154 into b1155 and b1156."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1154": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1155, 25130.0, 'Oct 15, 4:03 PM'), (1156, 25152.0, 'Oct 15, 4:03 PM')]:
    t = base.replace('"b1154"', '"b%d"' % n).replace('25108.0', '%.1f' % st).replace('25128.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1154', 'loopVs.phase=%d' % n).replace('BEAT 1154 (Toby, Oct 15, 3:36 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25108.0' not in t and '25128.8' not in t and '1154' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1155, b1156 added')
