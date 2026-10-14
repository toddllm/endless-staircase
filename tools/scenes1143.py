#!/usr/bin/env python3
"""scenes1143.py - clone capture scene b1142 into b1143."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1142": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
n = 1143; st = 24866.0; when = '5:48 AM'
t = base.replace('"b1142"', '"b%d"' % n).replace('24844.0', '%.1f' % st).replace('24864.8', '%.1f' % (st + 20.8))
t = t.replace('loopVs.phase=1142', 'loopVs.phase=%d' % n).replace('BEAT 1142 (Toby, Oct 13, 8:14 PM)', 'BEAT %d (Toby, Oct 14, %s)' % (n, when))
assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '24844.0' not in t and '24864.8' not in t and '1142' not in t, t
assert s.count(base) == 1
s = s.replace(base, base + t, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scene b1143 added')
