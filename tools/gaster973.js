    // Gaster on the intro screen (Toby: "with Gaster"), drawn in the middle band.
    if(knA>0.01){
      var gy973=top+H*0.4520, gs973=H*0.0500;
      ctx.globalAlpha=g*knA*0.92; ctx.fillStyle='rgba(10,10,14,1)';
      ctx.beginPath(); ctx.moveTo(cx-gs973*0.55, gy973+gs973*0.70); ctx.lineTo(cx+gs973*0.55, gy973+gs973*0.70);
      ctx.lineTo(cx+gs973*1.35, gy973+gs973*2.05); ctx.lineTo(cx-gs973*1.35, gy973+gs973*2.05); ctx.closePath(); ctx.fill();
      ctx.globalAlpha=g*knA*0.60; ctx.strokeStyle='rgba(110,160,255,0.80)'; ctx.lineWidth=0.35; ctx.stroke();
      ctx.globalAlpha=g*knA; ctx.fillStyle='rgba(236,238,242,1)';
      ctx.beginPath(); ctx.ellipse(cx, gy973, gs973*0.72, gs973, 0, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(6,7,12,1)';
      ctx.beginPath(); ctx.ellipse(cx-gs973*0.30, gy973-gs973*0.10, gs973*0.16, gs973*0.22, 0, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(cx+gs973*0.30, gy973-gs973*0.10, gs973*0.16, gs973*0.22, 0, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(110,160,255,'+(0.55+0.45*pul)+')';
      ctx.beginPath(); ctx.arc(cx+gs973*0.30, gy973-gs973*0.10, gs973*0.06, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle='rgba(6,7,12,1)'; ctx.lineWidth=0.6;
      ctx.beginPath(); ctx.moveTo(cx+gs973*0.30, gy973-gs973*0.32); ctx.lineTo(cx+gs973*0.22, gy973-gs973*0.62); ctx.lineTo(cx+gs973*0.34, gy973-gs973*0.97); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx-gs973*0.30, gy973+gs973*0.12); ctx.lineTo(cx-gs973*0.22, gy973+gs973*0.45); ctx.lineTo(cx-gs973*0.32, gy973+gs973*0.78); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx-gs973*0.22, gy973+gs973*0.52); ctx.quadraticCurveTo(cx, gy973+gs973*0.66, cx+gs973*0.22, gy973+gs973*0.52); ctx.stroke();
      ctx.globalAlpha=g*knA*0.90; ctx.fillStyle='rgba(168,176,190,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
      ctx.fillText('GASTER', cx, gy973+gs973*2.0-1);
      var gl973=(Math.sin(c*7.3)>0.86)?1:0;
      if(gl973){ ctx.globalAlpha=g*knA*0.85; ctx.fillStyle='rgba(255,70,90,0.95)'; ctx.font='900 5.0px ui-monospace,monospace';
        ctx.fillText('404', cx+gs973*2.4, gy973+gs973*(0.3+0.5*Math.sin(c*3.1))); }
    }

