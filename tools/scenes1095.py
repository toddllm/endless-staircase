#!/usr/bin/env python3
"""scenes1095.py - clone capture scene b1094 into b1095-b1103."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1094": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['1:09 PM', '1:09-1:11 PM', '1:12 PM', '1:16 PM', '1:27 PM', '1:27 PM', '1:27 PM', '1:29 PM', '1:34 PM']
for k, when in enumerate(WHEN):
    n = 1095 + k
    st = 23810.0 + 22.0 * k
    t = base.replace('"b1094"', '"b%d"' % n).replace('23788.0', '%.1f' % st).replace('23808.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1094', 'loopVs.phase=%d' % n).replace('BEAT 1094 (Toby, Oct 12, 11:44 AM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '23788.0' not in t and '23808.8' not in t and '1094' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1095-b1103 added')
