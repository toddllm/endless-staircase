def esc(s):
    return s.replace('\\', '\\\\').replace("'", '’')

out = []
for i, b in enumerate(B):
    ph = 898 + i
    st = START + STEP * i
    a = b['accent']
    q = b['quote']
    L = []
    L.append('  } else if(ph===%d){' % ph)
    L.append('    // BEAT %d: %s.' % (ph, b['key']))
    L.append('    // Toby, September 26, 2026, %s EDT, his own typing:' % b['when'])
    for ql in q:
        L.append('    //   %s' % ql)
    L.append('    // Priors, each verified in the archive before it was drawn:')
    for head, lines, acc in b['panels']:
        L.append('    //   %s' % head)
        for ln in lines:
            L.append('    //     %s' % ln)
        L.append('    //     %s' % acc)
    L.append('    const dt = c - %.1f;' % st)
    L.append('    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));')
    for nm, t0, sp in [('opA',0.3,1.2),('q0A',2.0,1.3),('knA',4.4,2.4),('neA',8.2,1.8),('zoA',11.6,1.8),('svA',15.0,1.6),('footA',18.0,1.2)]:
        L.append('    const %s=Math.max(0,Math.min(1,(dt-%s)/%s));' % (nm, t0, sp))
    L.append('')
    L.append("    ctx.fillStyle='rgba(6,7,12,0.99)'; ctx.fillRect(0,top,W,H);")
    L.append('    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();')
    L.append('    const gr%d=ctx.createLinearGradient(0,top+H,0,top);' % ph)
    L.append("    gr%d.addColorStop(0,'rgba(%s,0.22)'); gr%d.addColorStop(0.55,'rgba(6,7,12,0.98)');" % (ph, a, ph))
    L.append("    gr%d.addColorStop(1,'rgba(6,7,12,0.99)');" % ph)
    L.append('    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr%d; ctx.fillRect(0,top,W,H);' % ph)
    L.append("    ctx.textAlign='center';")
    L.append('')
    L.append('    ctx.globalAlpha=g*opA;')
    L.append("    ctx.fillStyle='rgba(%s,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';" % a)
    L.append("    ctx.fillText('%s', cx, top+H*0.0960);" % esc(b['key']))
    ys = [0.1360, 0.1560, 0.1760]
    for j, ql in enumerate(q[:3]):
        L.append('    ctx.globalAlpha=g*q0A*0.96;')
        L.append("    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';")
        L.append("    ctx.fillText('%s', cx, top+H*%.4f);" % (esc(ql), ys[j]))
    L.append('    ctx.globalAlpha=g*q0A*0.78;')
    L.append("    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.2000);" % esc(b['attr']))
    L.append('')
    # panel 1 (boxed, accent)
    h1, l1, a1 = b['panels'][0]
    L.append('    if(knA>0.01){')
    L.append('      var ky%d=top+H*0.2780;' % ph)
    L.append("      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(%s,0.46)';" % a)
    L.append('      ctx.fillRect(cx-W*0.352, ky%d, W*0.704, H*0.1040);' % ph)
    L.append("      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(%s,0.70)'; ctx.lineWidth=0.38;" % a)
    L.append('      ctx.strokeRect(cx-W*0.352, ky%d, W*0.704, H*0.1040);' % ph)
    L.append('    ctx.globalAlpha=g*knA*0.98;')
    L.append("    ctx.fillStyle='rgba(%s,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';" % a)
    L.append("    ctx.fillText('%s', cx, top+H*0.3000);" % esc(h1))
    yy = [0.3200, 0.3390]
    for j, ln in enumerate(l1[:2]):
        L.append('    ctx.globalAlpha=g*knA*0.96;')
        L.append("    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';")
        L.append("    ctx.fillText('%s', cx, top+H*%.4f);" % (esc(ln), yy[j]))
    L.append('    ctx.globalAlpha=g*knA*0.88;')
    L.append("    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.3580);" % esc(a1))
    L.append('    }')
    L.append('')
    # panel 2 (no box)
    h2, l2, a2 = b['panels'][1]
    L.append('    if(neA>0.01){')
    L.append('    ctx.globalAlpha=g*neA*0.96;')
    L.append("    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.5960);" % esc(h2))
    yy = [0.6160, 0.6350]
    for j, ln in enumerate(l2[:2]):
        L.append('    ctx.globalAlpha=g*neA*0.94;')
        L.append("    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';")
        L.append("    ctx.fillText('%s', cx, top+H*%.4f);" % (esc(ln), yy[j]))
    L.append('    ctx.globalAlpha=g*neA*0.88;')
    L.append("    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.6540);" % esc(a2))
    L.append('    }')
    L.append('')
    # panel 3 (boxed grey)
    h3, l3, a3 = b['panels'][2]
    L.append('    if(zoA>0.01){')
    L.append('      var zy%d=top+H*0.6960;' % ph)
    L.append("      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';")
    L.append('      ctx.fillRect(cx-W*0.352, zy%d, W*0.704, H*0.1030);' % ph)
    L.append("      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;")
    L.append('      ctx.strokeRect(cx-W*0.352, zy%d, W*0.704, H*0.1030);' % ph)
    L.append('    ctx.globalAlpha=g*zoA*0.98;')
    L.append("    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.7180);" % esc(h3))
    yy = [0.7370, 0.7560]
    for j, ln in enumerate(l3[:2]):
        L.append('    ctx.globalAlpha=g*zoA*0.96;')
        L.append("    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';")
        L.append("    ctx.fillText('%s', cx, top+H*%.4f);" % (esc(ln), yy[j]))
    L.append('    ctx.globalAlpha=g*zoA*0.88;')
    L.append("    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.7750);" % esc(a3))
    L.append('    }')
    L.append('')
    L.append('    if(svA>0.01){')
    L.append('    ctx.globalAlpha=g*svA*0.96;')
    L.append("    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.8620);" % esc(b['close'][0]))
    L.append('    ctx.globalAlpha=g*svA*0.88;')
    L.append("    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';")
    L.append("    ctx.fillText('%s', cx, top+H*0.8820);" % esc(b['close'][1]))
    L.append('    }')
    L.append('')
    L.append('    ctx.globalAlpha=g*footA;')
    L.append("    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';")
    L.append("    ctx.fillText('★ %s ★', cx, top+H*0.9380);" % esc(b['key']))
    L.append('    ctx.globalAlpha=1;')
    L.append('    ctx.restore();')
    out.append('\n'.join(L))

io.open('/Users/tdeshane/endless-staircase/tools/branches898_899.js', 'w', encoding='utf-8').write('\n'.join(out) + '\n')

rows = []
segs = []
for i, b in enumerate(B):
    ph = 898 + i
    st = START + STEP * i
    sub = ' · '.join([' '.join(x for x in b['quote'] if x)] + [h for h, _, _ in b['panels']] + [b['close'][0]])
    rows.append('  { key:"%s", col:\'rgb(%s)\',\n    sub:"%s — TOBY, SEPT 26, %s, HIS OWN TYPING" },'
                % (b['key'].replace('"', '”'), b['accent'], sub.replace('"', '”'), b['short']))
    segs.append('  if(c >= %.1f && c < %.1f) return [%d, c-%.1f];  // %s' % (st, st + STEP, ph, st, b['key']))
io.open('/Users/tdeshane/endless-staircase/tools/rows898_899.txt', 'w', encoding='utf-8').write('\n'.join(rows) + '\n')
io.open('/Users/tdeshane/endless-staircase/tools/segs898_899.txt', 'w', encoding='utf-8').write('\n'.join(reversed(segs)) + '\n')
print('beats:', len(B), 'new LV_CYC:', START + STEP * len(B))
