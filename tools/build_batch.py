#!/usr/bin/env python3
"""build_batch.py TAG - splice a gen<TAG>.py batch (rows/segs/branches already emitted) into the game.

Anchors are derived from the gen module: the previous beat (BASE-1) row is found by its key in LV_BEATS, the previous
seg line by its start cycle (START-STEP), and the branch block goes before `} else if(ph===814){` like every batch
since 1008. LV_CYC advances by STEP * len(B). Additive only; asserts every anchor is unique before writing.
"""
import io, sys, re, importlib.util
TAG = sys.argv[1]
T = '/Users/tdeshane/endless-staircase/tools/'
GAME = '/Users/tdeshane/endless-staircase/index.html'
spec = importlib.util.spec_from_file_location('g', T + 'gen%s.py' % TAG)
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)
src = io.open(GAME, encoding='utf-8').read()
orig = src
OLD_CYC = '%.1f' % g.START
NEW_CYC = '%.1f' % (g.START + g.STEP * len(g.B))
assert src.count('const LV_CYC = %s;' % OLD_CYC) == 1, 'LV_CYC is not %s' % OLD_CYC
src = src.replace('const LV_CYC = %s;' % OLD_CYC, 'const LV_CYC = %s;' % NEW_CYC, 1)
rd = lambda n: io.open(T + n, encoding='utf-8').read().rstrip('\n')
ROWS = rd('rows%s.txt' % TAG)
# previous row: the key of beat BASE-1 is the last row in LV_BEATS; find it via the seg comment of the previous beat
prev_seg_re = re.compile(r'  if\(c >= %.1f && c < %.1f\) return \[%d, c-%.1f\];  // (.*)' % (g.START - g.STEP, g.START, g.BASE - 1, g.START - g.STEP))
m = prev_seg_re.search(src)
assert m, 'previous seg line not found'
anchor_seg = m.group(0)
prev_key = m.group(1).strip()
assert src.count(anchor_seg) == 1
rows_anchor = [l for l in src.split('\n') if l.startswith('  { key:"%s"' % prev_key.replace('"', '”'))]
assert len(rows_anchor) == 1, ('previous row not unique', prev_key, len(rows_anchor))
i = src.index(rows_anchor[0])
j = src.index('" },', i) + len('" },')
src = src[:j] + '\n' + ROWS + src[j:]
SEG = rd('segs%s.txt' % TAG)
src = src.replace(anchor_seg, SEG + '\n' + anchor_seg, 1)
BRANCH = io.open(T + 'branches%s.js' % TAG, encoding='utf-8').read()
anchor_br = '  } else if(ph===814){'
assert src.count(anchor_br) == 1
src = src.replace(anchor_br, BRANCH + anchor_br, 1)
assert src != orig
io.open(GAME, 'w', encoding='utf-8').write(src)
print('OK %s: LV_CYC %s -> %s, %d rows, %d seg lines, %d branches (after %s)' % (TAG, OLD_CYC, NEW_CYC, len(g.B), len(g.B), len(g.B), prev_key))
