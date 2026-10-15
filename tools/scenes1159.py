#!/usr/bin/env python3
"""scenes1159.py - clone capture scene b1158 into b1159 and b1160."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1158": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1159, 25218.0, 'Oct 15, 4:32 PM'), (1160, 25240.0, 'Oct 15, 4:32 PM')]:
    t = base.replace('"b1158"', '"b%d"' % n).replace('25196.0', '%.1f' % st).replace('25216.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1158', 'loopVs.phase=%d' % n).replace('BEAT 1158 (Toby, Oct 15, 4:12 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25196.0' not in t and '25216.8' not in t and '1158' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1159, b1160 added')
