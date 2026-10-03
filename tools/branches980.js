  } else if(ph===980){
    // BEAT 980: COMICAL NEKA.
    // Toby, October 3, 2026, 3:07 PM EDT, his own typing:
    //   “THE ENTITY BEHIND GASTER IS NEKA OMAZEN.
    //   THE GAMES COLLIDE... AND IT MAKES COMICAL NEKA.
    //   THEN GASTER ABSORBED COMICAL NEKA.”
    // Priors, each verified in the archive before it was drawn:
    //   THE BIGGEST GAME COLLISION
    //     THE GAMES COLLIDE. THIS ONE IS THE BIGGEST AND
    //     STRONGEST OF ALL THE GAME COLLISIONS.
    //     WHAT COMES OUT OF IT IS COMICAL NEKA.
    //   ALL HIS FORMS
    //     GASTER ABSORBED COMICAL NEKA, ALONG WITH ALL HIS
    //     FORMS AND POWER AND STUFF, ALL ADDED TO GASTER.
    //     BEAT 976 PUT NEKA INSIDE GASTER. THIS IS ALL OF COMICAL NEKA.
    //   THE STRONGEST BEING
    //     MAKING PRESSURETALE GASTER THE MOST POWERFUL
    //     AND STRONGEST BEING.
    //     THE SAME GASTER WHO LOOKS LIKE JUST A GUY (BEAT 979).
    const dt = c - 21280.0;
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
    const gr980=ctx.createLinearGradient(0,top+H,0,top);
    gr980.addColorStop(0,'rgba(120,230,200,0.22)'); gr980.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr980.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr980; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,230,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('COMICAL NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE ENTITY BEHIND GASTER IS NEKA OMAZEN.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAMES COLLIDE... AND IT MAKES COMICAL NEKA.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEN GASTER ABSORBED COMICAL NEKA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 3:07 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky980=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,230,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky980, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,230,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky980, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,230,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BIGGEST GAME COLLISION', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GAMES COLLIDE. THIS ONE IS THE BIGGEST AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STRONGEST OF ALL THE GAME COLLISIONS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHAT COMES OUT OF IT IS COMICAL NEKA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL HIS FORMS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER ABSORBED COMICAL NEKA, ALONG WITH ALL HIS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FORMS AND POWER AND STUFF, ALL ADDED TO GASTER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('BEAT 976 PUT NEKA INSIDE GASTER. THIS IS ALL OF COMICAL NEKA.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy980=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy980, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy980, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST BEING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAKING PRESSURETALE GASTER THE MOST POWERFUL', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND STRONGEST BEING.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SAME GASTER WHO LOOKS LIKE JUST A GUY (BEAT 979).', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN IS THE ENTITY BEHIND HIM.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOW ALL OF COMICAL NEKA IS INSIDE HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ COMICAL NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
