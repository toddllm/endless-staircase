#!/usr/bin/env python3
"""scenes1067.py - clone capture scene b1066 into b1067-b1069."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1066": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
new = ''
for n, st, when in [(1067, 23194.0, "7:41 PM"), (1068, 23216.0, "7:41 PM"), (1069, 23238.0, "7:46 PM")]:
    t = base.replace('"b1066"', '"b%d"' % n).replace('23172.0', '%.1f' % st).replace('23192.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1066', 'loopVs.phase=%d' % n).replace('BEAT 1066 (Toby, Oct 10, 7:32 PM)', 'BEAT %d (Toby, Oct 10, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2
    new += t
assert s.count(base) == 1
s = s.replace(base, base + new, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1067-b1069 added')
