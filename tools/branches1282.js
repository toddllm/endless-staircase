  } else if(ph===1282){
    // BEAT 1282: LAST TIMELINE.
    // Toby, October 28, 2026, 7:56 PM EDT, his own typing:
    //   “NEKA, THE DRAGON’S BROTHER, WEARING HIS SHARK HOOD AND
    //   WHITE LAB COAT. THE CLOSEST I GOT TO THE LAST TIMELINE
    //   POWER.”
    // Priors, each verified in the archive before it was drawn:
    //   SHARK HOOD, LAB COAT
    //     NEKA, THE DRAGON’S BROTHER, IN HIS SHARK HOOD AND A WHITE
    //     LAB COAT.
    //     OCT 28, BEAT 1281: ALL CLEAR FOR DRAGON’S DECENT.
    //   LAST TIMELINE
    //     VOIKOR GATHERS AROUND NEKA’S HAND. THE ENORMOUS BLACK
    //     DRAGON. PURPLE ENERGY FILLS THE FACILITY.
    //     BLACK LIQUID DISPERSES; NEKA STANDS IN PURPLE LIGHT.
    //   IT SHOWS THE POINT
    //     WHAT THE LAST TIMELINE DOES TO THE TIMELINE IS STILL
    //     TOBY’S TO EXPLAIN.
    //     THE CLOSEST HE GOT. IT SHOWS THE POINT, NOT PERFECT.
    const dt = c - 27924.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const knA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const neA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const zoA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(6,7,12,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr1282=ctx.createLinearGradient(0,top+H,0,top);
    gr1282.addColorStop(0,'rgba(170,90,230,0.22)'); gr1282.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1282.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1282; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,90,230,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('LAST TIMELINE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA, THE DRAGON’S BROTHER, WEARING HIS SHARK HOOD AND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHITE LAB COAT. THE CLOSEST I GOT TO THE LAST TIMELINE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('POWER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 28, 7:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1282=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,90,230,0.46)';
      ctx.fillRect(cx-W*0.352, ky1282, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,90,230,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1282, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,90,230,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHARK HOOD, LAB COAT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA, THE DRAGON’S BROTHER, IN HIS SHARK HOOD AND A WHITE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LAB COAT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 28, BEAT 1281: ALL CLEAR FOR DRAGON’S DECENT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LAST TIMELINE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VOIKOR GATHERS AROUND NEKA’S HAND. THE ENORMOUS BLACK', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DRAGON. PURPLE ENERGY FILLS THE FACILITY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('BLACK LIQUID DISPERSES; NEKA STANDS IN PURPLE LIGHT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1282=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1282, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1282, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('IT SHOWS THE POINT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHAT THE LAST TIMELINE DOES TO THE TIMELINE IS STILL', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOBY’S TO EXPLAIN.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CLOSEST HE GOT. IT SHOWS THE POINT, NOT PERFECT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LAST TIMELINE POWER, STILL BEING WORKED OUT. MORE TO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('COME FROM TOBY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ LAST TIMELINE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
