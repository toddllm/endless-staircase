  } else if(ph===968){
    // BEAT 968: INFINITE ROOM INSIDE HIM.
    // Toby, October 1, 2026, 5:23 PM EDT, his own typing:
    //   “NEKA IS PHYSICALLY 5-6 FEET TALL OR WHATEVER, AND HE IS LARGER THAN THE
    //   ULTIMATE MASS. HE IS LARGER BECAUSE HE IS THE CREATOR OF IT PLUS MORE. NEKA
    //   CAN CONSUME THE WHOLE MASS AND STILL HAS INFINITE ROOM INSIDE HIM.”
    // Priors, each verified in the archive before it was drawn:
    //   5-6 FEET TALL
    //     NEKA IS PHYSICALLY 5-6 FEET TALL OR WHATEVER.
    //     AND HE IS LARGER THAN THE ULTIMATE MASS.
    //     TOBY ASKED HOW BOTH CAN BE TRUE. THEN HE ANSWERED IT.
    //   THE CREATOR PLUS MORE
    //     NEKA MADE THE ULTIMATE MASS. IT IS HIS CREATION.
    //     HE IS LARGER BECAUSE HE IS THE CREATOR OF IT, PLUS MORE.
    //     5:02 PM: “NEKA OMAZEN CAN CONSUME IT ALL.”
    //   INFINITE ROOM
    //     NEKA CAN CONSUME THE WHOLE MASS
    //     AND STILL HAS INFINITE ROOM INSIDE HIM.
    //     4:34 PM: HE ATE THE CODE. CLASSICS WAS CONSUMED. STILL ROOM.
    const dt = c - 21016.0;
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
    const gr968=ctx.createLinearGradient(0,top+H,0,top);
    gr968.addColorStop(0,'rgba(150,110,255,0.22)'); gr968.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr968.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr968; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,110,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('INFINITE ROOM INSIDE HIM', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS PHYSICALLY 5-6 FEET TALL OR WHATEVER, AND HE IS LARGER THAN THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ULTIMATE MASS. HE IS LARGER BECAUSE HE IS THE CREATOR OF IT PLUS MORE. NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAN CONSUME THE WHOLE MASS AND STILL HAS INFINITE ROOM INSIDE HIM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 5:23 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky968=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,110,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky968, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,110,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky968, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,110,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('5-6 FEET TALL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA IS PHYSICALLY 5-6 FEET TALL OR WHATEVER.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HE IS LARGER THAN THE ULTIMATE MASS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY ASKED HOW BOTH CAN BE TRUE. THEN HE ANSWERED IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CREATOR PLUS MORE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA MADE THE ULTIMATE MASS. IT IS HIS CREATION.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE IS LARGER BECAUSE HE IS THE CREATOR OF IT, PLUS MORE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('5:02 PM: “NEKA OMAZEN CAN CONSUME IT ALL.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy968=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy968, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy968, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('INFINITE ROOM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA CAN CONSUME THE WHOLE MASS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND STILL HAS INFINITE ROOM INSIDE HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('4:34 PM: HE ATE THE CODE. CLASSICS WAS CONSUMED. STILL ROOM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS AN ANOMALLY. EVERYONE DISLIKES NEKA.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA PUNISHES THEM CONSTANTLY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ INFINITE ROOM INSIDE HIM ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
