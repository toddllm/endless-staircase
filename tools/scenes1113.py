#!/usr/bin/env python3
"""scenes1113.py - clone capture scene b1112 into b1113-b1117."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1112": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['4:12 PM', '4:19 PM', '4:19 PM', '4:33 PM', '4:35 PM']
for k, when in enumerate(WHEN):
    n = 1113 + k
    st = 24206.0 + 22.0 * k
    t = base.replace('"b1112"', '"b%d"' % n).replace('24184.0', '%.1f' % st).replace('24204.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1112', 'loopVs.phase=%d' % n).replace('BEAT 1112 (Toby, Oct 12, 2:31 PM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24184.0' not in t and '24204.8' not in t and '1112' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1113-b1117 added')
