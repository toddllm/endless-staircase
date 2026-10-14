#!/usr/bin/env python3
"""scenes1146.py - clone capture scene b1145 into b1146."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1145": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
n = 1146; st = 24932.0; when = '6:40 AM'
t = base.replace('"b1145"', '"b%d"' % n).replace('24910.0', '%.1f' % st).replace('24930.8', '%.1f' % (st + 20.8))
t = t.replace('loopVs.phase=1145', 'loopVs.phase=%d' % n).replace('BEAT 1145 (Toby, Oct 14, 6:24 AM)', 'BEAT %d (Toby, Oct 14, %s)' % (n, when))
assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24910.0' not in t and '24930.8' not in t and '1145' not in t, t
assert s.count(base) == 1
s = s.replace(base, base + t, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scene b1146 added')
