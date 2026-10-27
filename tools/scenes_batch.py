#!/usr/bin/env python3
"""scenes_batch.py TAG - clone the capture scene of beat BASE-1 into one scene per beat of gen<TAG>.py (b<N>)."""
import io, re, sys, importlib.util
TAG = sys.argv[1]
T = '/Users/tdeshane/endless-staircase/tools/'
P = T + 'capture_screenshot.py'
spec = importlib.util.spec_from_file_location('g', T + 'gen%s.py' % TAG)
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)
s = io.open(P, encoding='utf-8').read()
prev = g.BASE - 1
m = re.search(r'"b%d": """.*?""",\n' % prev, s, re.S)
assert m, 'scene b%d not found' % prev
base = m.group(0)
pst = g.START - g.STEP
assert ('%.1f' % pst) in base and ('%.1f' % (pst + 20.8)) in base, 'previous scene cycles not found'
add = ''
for i, b in enumerate(g.B):
    n = g.BASE + i
    st = g.START + g.STEP * i
    t = base.replace('"b%d"' % prev, '"b%d"' % n).replace('%.1f' % pst, '%.1f' % st).replace('%.1f' % (pst + 20.8), '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=%d' % prev, 'loopVs.phase=%d' % n)
    t = re.sub(r'// BEAT %d \(Toby, [^)]*\)' % prev, '// BEAT %d (Toby, %s, %s)' % (n, g.MONTH[b['day']].title().replace('October', 'Oct'), b['when']), t)
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and ('%.1f' % pst) not in t and str(prev) not in t, t
    add += t
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b%d-b%d added' % (g.BASE, g.BASE + len(g.B) - 1))
