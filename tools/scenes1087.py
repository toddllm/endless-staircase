#!/usr/bin/env python3
"""scenes1087.py - clone capture scene b1086 into b1087-b1089."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1086": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1087, 23634.0, '8:23 AM'), (1088, 23656.0, '8:23 AM'), (1089, 23678.0, '8:23 AM')]:
    t = base.replace('"b1086"', '"b%d"' % n).replace('23612.0', '%.1f' % st).replace('23632.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1086', 'loopVs.phase=%d' % n).replace('BEAT 1086 (Toby, Oct 12, 6:57 AM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '23612.0' not in t and '23632.8' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1087-b1089 added')
