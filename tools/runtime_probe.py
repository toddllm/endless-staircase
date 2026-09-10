#!/usr/bin/env python3
"""Runtime probe: lvSeg coverage, LV_BEATS holes, every phase through drawLoopVs, new beat stepped."""
import subprocess, re, os, sys, tempfile
GAME = '/Users/tdeshane/endless-staircase/index.html'
OUT = os.path.join(tempfile.gettempdir(), 'es_probe_page.html')
NEW = int(sys.argv[1]) if len(sys.argv) > 1 else 698
JS = r"""
<script>
try {
  window.update = function(){};
  var r = {len: LV_BEATS.length, cyc: LV_CYC, holes: [], undefSeg: 0, maxPh: -1, badKey: [], missing: [], err: [], draws: 0};
  for (var i = 0; i < LV_BEATS.length; i++) { if (!(i in LV_BEATS) || !LV_BEATS[i] || !LV_BEATS[i].key) r.holes.push(i); }
  var lastC = {};
  for (var c = 0; c < LV_CYC; c += 0.5) {
    var s = lvSeg(c);
    if (!s) { r.undefSeg++; continue; }
    if (s[0] > r.maxPh) r.maxPh = s[0];
    if (!LV_BEATS[s[0]]) r.badKey.push(s[0]);
    lastC[s[0]] = c;
  }
  for (var p = 0; p < LV_BEATS.length; p++) { if (lastC[p] === undefined) r.missing.push(p); }
  var NEW = __NEW__, c0 = LV_CYC - 22.0;
  r.bLo = lvSeg(c0 - 0.001)[0]; r.bAt = lvSeg(c0)[0]; var e = lvSeg(LV_CYC - 0.0001); r.bHi = e ? [e[0], +e[1].toFixed(4)] : null;
  r.newKey = LV_BEATS[NEW] && LV_BEATS[NEW].key;
  loopVs.active = true; loopVs.glow = 1;
  for (var q in lastC) {
    try { loopVs.cyc = lastC[q]; loopVs.phase = +q; drawLoopVs(); r.draws++; }
    catch (ex) { if (r.err.length < 5) r.err.push(q + ': ' + ex); }
  }
  for (var d = 0; d < 22.0; d += 0.25) {
    try { loopVs.cyc = c0 + d; loopVs.phase = NEW; drawLoopVs(); r.draws++; }
    catch (ex) { if (r.err.length < 5) r.err.push('new@' + d + ': ' + ex); }
  }
  r.missing = r.missing.slice(0, 10); r.badKey = r.badKey.slice(0, 10);
  document.title = 'PROBE ' + JSON.stringify(r);
} catch (ex) { document.title = 'PROBE_ERR ' + ex; }
</script>
"""
src = open(GAME, encoding='utf-8').read()
k = src.rindex('</body>')
open(OUT, 'w', encoding='utf-8').write(src[:k] + JS.replace('__NEW__', str(NEW)) + src[k:])
chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
res = subprocess.run([chrome, '--headless=new', '--disable-gpu', '--no-first-run', '--virtual-time-budget=15000',
                      '--dump-dom', 'file://' + OUT], capture_output=True, text=True, timeout=180)
m = re.search(r'<title>(PROBE[^<]*)</title>', res.stdout)
print(m.group(1) if m else 'NO PROBE TITLE; stderr tail: ' + res.stderr[-600:])
