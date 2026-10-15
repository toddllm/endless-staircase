#!/usr/bin/env python3
"""scenes1161.py - clone capture scene b1160 into b1161 and b1162."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1160": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1161, 25262.0, 'Oct 15, 4:50 PM'), (1162, 25284.0, 'Oct 15, 4:50-4:52 PM')]:
    t = base.replace('"b1160"', '"b%d"' % n).replace('25240.0', '%.1f' % st).replace('25260.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1160', 'loopVs.phase=%d' % n).replace('BEAT 1160 (Toby, Oct 15, 4:32 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25240.0' not in t and '25260.8' not in t and '1160' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1161, b1162 added')
