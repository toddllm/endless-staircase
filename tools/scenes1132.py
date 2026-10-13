#!/usr/bin/env python3
"""scenes1132.py - clone capture scene b1131 into b1132-b1133."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1131": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
WHEN = ['4:40 PM', '4:40 PM']
for k, when in enumerate(WHEN):
    n = 1132 + k
    st = 24624.0 + 22.0 * k
    t = base.replace('"b1131"', '"b%d"' % n).replace('24602.0', '%.1f' % st).replace('24622.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1131', 'loopVs.phase=%d' % n).replace('BEAT 1131 (Toby, Oct 13, 4:37 PM)', 'BEAT %d (Toby, Oct 13, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24602.0' not in t and '24622.8' not in t and '1131' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1132-b1133 added')
