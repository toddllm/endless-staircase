#!/usr/bin/env python3
"""scenes1173.py - clone capture scene b1172 into b1173, b1174, b1175."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1172": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1173, 25526.0, 'Oct 15, 7:08 PM'), (1174, 25548.0, 'Oct 15, 7:12 PM'), (1175, 25570.0, 'Oct 15, 7:12-7:15 PM')]:
    t = base.replace('"b1172"', '"b%d"' % n).replace('25504.0', '%.1f' % st).replace('25524.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1172', 'loopVs.phase=%d' % n).replace('BEAT 1172 (Toby, Oct 15, 7:04 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25504.0' not in t and '25524.8' not in t and '1172' not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1173-b1175 added')
