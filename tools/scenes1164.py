#!/usr/bin/env python3
"""scenes1164.py - clone capture scene b1163 into b1164-b1167, and add a 'spikes' play scene."""
import io, re
P = '/Users/tdeshane/endless-staircase/tools/capture_screenshot.py'
s = io.open(P, encoding='utf-8').read()
m = re.search(r'"b1163": """.*?""",\n', s, re.S)
assert m
base = m.group(0)
add = ''
for n, st, when in [(1164, 25328.0, 'Oct 15, 5:48 PM'), (1165, 25350.0, 'Oct 15, 5:48 PM'),
                    (1166, 25372.0, 'Oct 15, 5:48 PM'), (1167, 25394.0, 'Oct 15, 5:48 PM')]:
    t = base.replace('"b1163"', '"b%d"' % n).replace('25306.0', '%.1f' % st).replace('25326.8', '%.1f' % (st + 20.8))
    t = t.replace('loopVs.phase=1163', 'loopVs.phase=%d' % n).replace('BEAT 1163 (Toby, Oct 15, 5:09 PM)', 'BEAT %d (Toby, %s)' % (n, when))
    assert t.count('"b%d"' % n) == 1 and t.count('loopVs.phase=%d' % n) == 2 and '25306.0' not in t and '25326.8' not in t and '1163' not in t, t
    add += t
add += '''"spikes": """
      try {
        handleConfirm();
        // Simon.ps's spike lever (Toby, Oct 15 2026, 5:48 PM): climb a little, then force the lever
        for (var i=0;i<70;i++){ keys['ArrowRight']=(i%30<15);
          if(i%18===0){ press['Space']=true; } update(1/60); for(var k in press) delete press[k]; }
        keys['ArrowRight']=false;
        lever = { state:'act', type:'spikes', name:'SPIKES ON THE STAIRCASE', t:0.0, warnDur:1.3, actDur:3.6 };
        var vis = visiblePlats();
        for (var v=0; v<vis.length; v++){ var p=vis[v]; if(p===platforms[0]) continue;
          var onIt = (player.x+player.w*0.35>p.x && player.x-player.w*0.35<p.x+p.w && Math.abs((player.y+player.h/2)-p.y)<22);
          if(onIt) continue; p.spikes = 1; }
        warnText = lever.name; warnT = 1.5; leverFlash = 0.5;
        for (var m=0;m<30;m++){ update(1/60); }
        shake = 0;
        window.update = function(){};
      } catch(e){ document.title='SCENE_ERR '+e; }
    """,

'''
assert s.count(base) == 1
s = s.replace(base, base + add, 1)
io.open(P, 'w', encoding='utf-8').write(s)
print('OK: scenes b1164-b1167 + spikes added')
