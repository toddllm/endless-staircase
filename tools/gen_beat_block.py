# -*- coding: utf-8 -*-
"""Beat-block generator for index.html, on the beat-692 geometry.

Usage: copy tools/beats_693_696_example.py to a scratch beats.py, replace the
content dicts, point SCRATCH at its directory, update OLD_CYC/NEW_CYC and the
three anchors below, then run it. It performs all FOUR edits a new beat needs:

  1. const LV_CYC          - bumped by 22.0 per beat
  2. LV_BEATS entries      - appended; the array length must equal HIGHEST BEAT + 1
  3. lvSeg() range lines   - newest first; ph comes from lvSeg(cyc), NOT loopVs.phase,
                             so a missing line renders a blank frame with no warning
  4. the ph=== blocks      - newest first, inserted above the previous top beat

Every anchor is asserted unique before anything is written, and a fit check
(len * px * 0.6 <= usable width) runs first so overlong lines fail loudly
instead of running off the 540px canvas.

After running: extract the big <script> and `node --check` it, assert
ctx.save/ctx.restore 1/1 and brace-delta 0 per block, then run the lvSeg probe
(samples, maxPhase, distinct, holes, undef) before capturing screenshots."""
import re, sys, io, os
SCRATCH = os.environ.get('BEATS_DIR', os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, SCRATCH)
from beats import BEATS

IDX = '/Users/tdeshane/endless-staircase/index.html'
OLD_CYC, NEW_CYC = '15142.0', '15164.0'

def esc(s):
    """JS string body with \\uXXXX for every non-ASCII char, surrogate pairs included."""
    out = []
    for ch in s:
        o = ord(ch)
        if ch == '\\': out.append('\\\\')
        elif ch == "'": out.append("\\'")
        elif o < 0x20: out.append('\\u%04X' % o)
        elif o < 0x7f: out.append(ch)
        elif o <= 0xFFFF: out.append('\\u%04X' % o)
        else:
            v = o - 0x10000
            out.append('\\u%04X\\u%04X' % (0xD800 + (v >> 10), 0xDC00 + (v & 0x3FF)))
    return ''.join(out)

# monospace char width ~= 0.6 * font size; canvas is 540 wide
W = 540.0
def fits(text, px, cxoff=0.0):
    avail = 2.0 * min(W/2 + cxoff, W - (W/2 + cxoff))
    return len(text) * px * 0.6 <= avail

def block(b):
    ph, c0 = b['ph'], b['c0']
    M, A1, A2, A3 = b['main'], b['a1'], b['a2'], b['a3']
    o = []; w = o.append
    w("  } else if(ph===%d){" % ph)
    for ln in b['comment']:
        w("    // " + ln)
    w("    const dt = c - %.1f;" % c0)
    w("    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.2));")
    w("    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));")
    for i, t in enumerate([2.6, 4.7, 6.8, 8.9, 11.0]):
        w("    const f%dA=Math.max(0,Math.min(1,(dt-%.1f)/1.2));" % (i, t))
    w("    const wrA=Math.max(0,Math.min(1,(dt-13.8)/1.8));")
    w("    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.1));")
    w("")
    w("    ctx.fillStyle='rgba(7,8,14,0.99)'; ctx.fillRect(0,top,W,H);")
    w("    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();")
    w("    const gr%d=ctx.createLinearGradient(0,top+H,0,top);" % ph)
    w("    gr%d.addColorStop(0,'rgba(5,6,10,0.88)'); gr%d.addColorStop(1,'rgba(%s,0.30)');" % (ph, ph, M))
    w("    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr%d; ctx.fillRect(0,top,W,H);" % ph)
    w("")
    w("    // right half, clear of the beat ladder")
    w("    if(wrA>0.01){")
    w("      const fx = cx + W*0.150, fy = top+H*0.556;")
    w("      ctx.globalAlpha=g*wrA*0.20; ctx.strokeStyle='rgba(%s,0.86)'; ctx.lineWidth=0.6;" % M)
    w("      ctx.strokeRect(fx-W*0.046, fy-H*0.0250, W*0.092, H*0.0250);")
    w("      ctx.globalAlpha=g*wrA*0.26; ctx.fillStyle='rgba(%s,0.90)';" % M)
    w("      for(var t%d=0; t%d<4; t%d++){" % (ph, ph, ph))
    w("        ctx.fillRect(fx-W*0.034+t%d*W*0.0180, fy-H*0.0190, W*0.0120, H*0.0068);" % ph)
    w("      }")
    w("      ctx.globalAlpha=g*wrA*0.24; ctx.strokeStyle='rgba(%s,0.82)'; ctx.lineWidth=0.5;" % A1)
    w("      ctx.beginPath(); ctx.arc(fx+W*0.030, fy-H*0.0142, W*0.0052, 0, Math.PI*2); ctx.stroke();")
    w("      ctx.globalAlpha=g*wrA*0.70; ctx.fillStyle='rgba(240,240,244,0.88)';")
    w("      ctx.font='700 2.8px ui-monospace,monospace'; ctx.textAlign='center';")
    w("      ctx.fillText('%s', fx, fy+H*0.020);" % esc(b['inset'][0]))
    w("      ctx.fillText('%s', fx, fy+H*0.032);" % esc(b['inset'][1]))
    w("    }")
    w("    ctx.textAlign='center';")
    w("")
    w("    ctx.globalAlpha=g*opA;")
    w("    ctx.fillStyle=`rgba(%s,${0.88+0.12*pul})`; ctx.font='900 8px ui-monospace,monospace';" % M)
    w("    ctx.fillText('%s', cx, top+H*0.100);" % esc(b['title']))
    w("    ctx.globalAlpha=g*opA*0.96;")
    w("    ctx.fillStyle=`rgba(248,246,242,${0.90+0.10*pul})`; ctx.font='900 4.2px ui-monospace,monospace';")
    w("    ctx.fillText('%s', cx, top+H*0.122);" % esc(b['q1']))
    w("    ctx.fillText('%s', cx, top+H*0.138);" % esc(b['q2']))
    w("    ctx.globalAlpha=g*opA*0.96;")
    w("    ctx.fillStyle=`rgba(%s,${0.90+0.10*pul})`; ctx.font='900 5.0px ui-monospace,monospace';" % M)
    w("    ctx.fillText('%s', cx, top+H*0.162);" % esc(b['thesis']))
    w("    ctx.globalAlpha=g*opA*0.72;")
    w("    ctx.fillStyle='rgba(228,228,234,0.86)'; ctx.font='700 3.8px ui-monospace,monospace';")
    w("    ctx.fillText('%s', cx, top+H*0.182);" % esc(b['attrib']))
    w("")
    # panels: A/B full width, C/D shifted right of the ladder, E full width low
    spec = [
        (0, M,  6.2, 4.1, 0.226, 0.246, 0.264, ''),
        (1, A1, 6.2, 4.1, 0.296, 0.316, 0.334, ''),
        (2, A2, 5.7, 3.7, 0.366, 0.386, 0.404, '+W*0.190'),
        (3, A3, 5.7, 3.7, 0.436, 0.456, 0.474, '+W*0.190'),
        (4, M,  6.2, 4.1, 0.646, 0.666, 0.684, ''),
    ]
    for i, col, hp, lp, y0, y1, y2, xo in spec:
        head, l1, l2 = b['panels'][i]
        X = 'cx' + xo
        w("    ctx.globalAlpha=g*f%dA;" % i)
        w("    ctx.fillStyle=`rgba(%s,${0.84+0.16*pul})`; ctx.font='900 %.1fpx ui-monospace,monospace';" % (col, hp))
        w("    ctx.fillText('%s', %s, top+H*%.3f);" % (esc(head), X, y0))
        w("    ctx.globalAlpha=g*f%dA*0.90;" % i)
        w("    ctx.fillStyle='rgba(248,246,242,0.94)'; ctx.font='900 %.1fpx ui-monospace,monospace';" % lp)
        w("    ctx.fillText('%s', %s, top+H*%.3f);" % (esc(l1), X, y1))
        w("    ctx.globalAlpha=g*f%dA*0.94;" % i)
        w("    ctx.fillStyle='rgba(%s,0.96)'; ctx.font='900 %.1fpx ui-monospace,monospace';" % (col, lp))
        w("    ctx.fillText('%s', %s, top+H*%.3f);" % (esc(l2), X, y2))
        w("")
    w("    ctx.globalAlpha=g*footA*0.92;")
    w("    ctx.fillStyle='rgba(242,240,244,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';")
    w("    ctx.fillText('%s', cx, top+H*0.800);" % esc(b['foot'][0]))
    w("    ctx.fillText('%s', cx, top+H*0.818);" % esc(b['foot'][1]))
    w("    ctx.globalAlpha=g*footA*0.96;")
    w("    ctx.fillStyle='rgba(%s,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';" % M)
    w("    ctx.fillText('%s', cx, top+H*0.836);" % esc(b['foot'][2]))
    w("")
    w("    ctx.globalAlpha=g*footA;")
    w("    ctx.fillStyle='rgba(%s,0.96)'; ctx.font='900 7px ui-monospace,monospace';" % M)
    w("    ctx.fillText('\\u2605 %s \\u2605', cx, top+H*0.928);" % esc(b['star']))
    w("    ctx.globalAlpha=1;")
    w("    ctx.restore();")
    return "\n".join(o)

# ---- fit assertions before touching the file ----
bad = []
for b in BEATS:
    checks = [(b['title'],8,0),(b['q1'],4.2,0),(b['q2'],4.2,0),(b['thesis'],5.0,0),
              (b['attrib'],3.8,0),(b['inset'][0],2.8,W*0.150),(b['inset'][1],2.8,W*0.150),
              (b['foot'][0],4.1,0),(b['foot'][1],4.1,0),(b['foot'][2],4.1,0),
              ('★ %s ★' % b['star'],7,0)]
    spec = [(0,6.2,4.1,0.0),(1,6.2,4.1,0.0),(2,5.7,3.7,W*0.190),(3,5.7,3.7,W*0.190),(4,6.2,4.1,0.0)]
    for i,hp,lp,xo in spec:
        checks.append((b['panels'][i][0],hp,xo))
        checks.append((b['panels'][i][1],lp,xo))
        checks.append((b['panels'][i][2],lp,xo))
    for t,px,xo in checks:
        if not fits(t,px,xo):
            avail = 2.0*min(W/2+xo, W-(W/2+xo))
            bad.append((b['ph'], px, xo, len(t), int(avail/(px*0.6)), t[:70]))
if bad:
    for r in bad: print("OVERFLOW ph=%d %.1fpx xo=%.1f len=%d max=%d :: %s" % r)
    sys.exit(1)
print("fit check: OK for all %d beats" % len(BEATS))

src = io.open(IDX, encoding='utf-8').read()

# 1. LV_CYC
anchor = "const LV_CYC = %s;" % OLD_CYC
assert src.count(anchor) == 1, "LV_CYC anchor count %d" % src.count(anchor)
src = src.replace(anchor, "const LV_CYC = %s;" % NEW_CYC)

# 2. LV_BEATS entries, appended after the ONLY PLAYER ADMIN entry
lvb_anchor = "  { key:'CORRECT, IT\\u2019S A KATATA', col:'#ff5a5a',"
assert src.count(lvb_anchor) == 1, "LV_BEATS anchor count %d" % src.count(lvb_anchor)
i = src.index(lvb_anchor)
j = src.index("\n];", i)                    # end of the LV_BEATS array
COLHEX = {701:'#d9d2b6'}
rows = []
for b in BEATS:
    sub = ' · '.join([b['q1'].strip('“”')] + [p[0] for p in b['panels']])
    rows.append("  { key:'%s', col:'%s',\n    sub:\"%s\" }," % (esc(b['title']), COLHEX[b['ph']], esc(sub)))
src = src[:j] + "\n" + "\n".join(rows) + src[j:]

# 3. lvSeg range lines, newest first, above the 692 line
seg_anchor = "  if(c >= 15120.0 && c < 15142.0) return [700, c-15120.0];  // CORRECT, IT?S A KATATA"
assert src.count(seg_anchor) == 1, "lvSeg anchor count %d" % src.count(seg_anchor)
seg_lines = []
for b in reversed(BEATS):
    seg_lines.append("  if(c >= %.1f && c < %.1f) return [%d, c-%.1f];  // %s"
                     % (b['c0'], b['c0']+22.0, b['ph'], b['c0'], b['title'].encode('ascii','replace').decode()))
src = src.replace(seg_anchor, "\n".join(seg_lines) + "\n" + seg_anchor)

# 4. the ph blocks, newest first, above the 692 block
blk_anchor = "  } else if(ph===700){"
assert src.count(blk_anchor) == 1, "block anchor count %d" % src.count(blk_anchor)
blocks = "\n".join(block(b) for b in reversed(BEATS))
src = src.replace(blk_anchor, blocks + "\n" + blk_anchor)

io.open(IDX, 'w', encoding='utf-8').write(src)
print("wrote %s" % IDX)
