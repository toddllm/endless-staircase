#!/usr/bin/env python3
"""scenes1085.py - clone capture scene b1084 into b1085-b1086."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1084": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1085, 23590.0, '6:55 AM'), (1086, 23612.0, '6:57 AM')]:
    t = base.replace('"b1084"', '"b%d"' % n).replace('23568.0', '%.1f' % st).replace('23588.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1084', 'loopVs.phase=%d' % n).replace('BEAT 1084 (Toby, Oct 11, 8:20 PM)', 'BEAT %d (Toby, Oct 12, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '23568.0' not in t and '23588.8' not in t
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1085-b1086 added')
