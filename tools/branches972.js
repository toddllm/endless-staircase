  } else if(ph===972){
    // BEAT 972: EVERYONE TO PRESSURETALE.
    // Toby, October 2, 2026, 4:51 PM EDT, his own typing:
    //   “GASTER BATTLED PS-50 AND WON EASILY. AFTER, GASTER BECAME EXTREME,
    //   HE DELETED CLASSICS AND PRESSURE AND ALL THE OTHER GAMES,
    //   AND HE SENT EVERYONE TO PRESSURETALE.”
    // Priors, each verified in the archive before it was drawn:
    //   PARANOIDIA BARRAGE
    //     NEKA WALKED TO THE HEROES.
    //     THE HEROES DIDN’T SURVIVE.
    //     ONLY PS-50 AND GASTER SURVIVED.
    //   GASTER VS PS-50
    //     GASTER BATTLED PS-50
    //     AND WON EASILY.
    //     THEN THE STUFF IN THE DOCUMENT HAPPENED.
    //   GASTER BECAME EXTREME
    //     CLASSICS. PRESSURE. ALL THE OTHER GAMES.
    //     DELETED.
    //     OCT 1, BEAT 969: PRESSURETALE, THE PRESSURE AU. NOW IT IS THE ONLY ONE LEFT.
    const dt = c - 21104.0;
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
    const gr972=ctx.createLinearGradient(0,top+H,0,top);
    gr972.addColorStop(0,'rgba(110,160,255,0.22)'); gr972.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr972.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr972; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(110,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE TO PRESSURETALE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER BATTLED PS-50 AND WON EASILY. AFTER, GASTER BECAME EXTREME,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE DELETED CLASSICS AND PRESSURE AND ALL THE OTHER GAMES,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE SENT EVERYONE TO PRESSURETALE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 2, 4:51 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky972=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(110,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky972, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(110,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky972, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(110,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PARANOIDIA BARRAGE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA WALKED TO THE HEROES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HEROES DIDN’T SURVIVE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONLY PS-50 AND GASTER SURVIVED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER VS PS-50', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER BATTLED PS-50', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND WON EASILY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THEN THE STUFF IN THE DOCUMENT HAPPENED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy972=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy972, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy972, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GASTER BECAME EXTREME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS. PRESSURE. ALL THE OTHER GAMES.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DELETED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 1, BEAT 969: PRESSURETALE, THE PRESSURE AU. NOW IT IS THE ONLY ONE LEFT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER CHANGED THE GAME HIMSELF.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OCT 2, BEAT 971: GASTER WALKED INTO THE ROOM. THIS IS WHAT CAME NEXT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYONE TO PRESSURETALE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
