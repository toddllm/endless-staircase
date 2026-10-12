#!/usr/bin/env python3
"""scenes1107.py - clone capture scene b1106 into b1107-b1112."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1106": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['2:09 PM', '2:16 PM', '2:16 PM', '2:19 PM', '2:28 PM', '2:31 PM']
for k, when in enumerate(WHEN):
    n = 1107 + k
    st = 24074.0 + 22.0 * k
    t = base.replace('"b1106"', '"b%d"' % n).replace('24052.0', '%.1f' % st).replace('24072.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1106', 'loopVs.phase=%d' % n).replace('BEAT 1106 (Toby, Oct 12, 1:50 PM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24052.0' not in t and '24072.8' not in t and '1106' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1107-b1112 added')
