  } else if(ph===1170){
    // BEAT 1170: SIMON.PS VS NEKA IN CLEVERNESS.
    // Toby, October 15, 2026, 6:48 PM EDT, his own typing:
    //   “OREN.PS SAYS “I SAID NOT THE COMPUTER-”, NEKA SAYS
    //   “YOU ASKED FOR A COOKIE, NOT THE WHOLE COMPUTER.” ...
    //   SIMON.PS VS NEKA IN CLEVERNESS ... FOR SO MANY HOURS.”
    // Priors, each verified in the archive before it was drawn:
    //   HE CUT HIM OFF MID-WORD
    //     “I SAID NOT THE COMPUTER-”. THE DASH IS HIS. NEKA DID
    //     THE SAME TO NOVA ON SEPT 24, “JUST BY TALKING”.
    //     A COOKIE, NOT THE WHOLE COMPUTER. HE HEARD. HE PLAYED.
    //   PLAYFUL AND SMART LIKE NEKA
    //     OCT 14: SIMON.PS IS “THE ONE BEHIND OREN.PS”. OCT 13:
    //     HE FELL OVER AT EACH DESSERT WHILE OREN.PS WALKED CLOSER.
    //     OREN.PS BRINGS THE ONE WHO IS BEHIND HIM.
    //   SO MANY HOURS
    //     5:48 PM: THE PLAYER STRUCK DOWN ALL 20 SPRUNKIS, SIMON.PS
    //     INCLUDED. NOW SIMON.PS IS BACK, AND THE CONTEST IS WORDS.
    //     CLEVERNESS, NOT POWER. IT CONTINUED FOR SO MANY HOURS.
    const dt = c - 25460.0;
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
    const gr1170=ctx.createLinearGradient(0,top+H,0,top);
    gr1170.addColorStop(0,'rgba(255,216,79,0.22)'); gr1170.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1170.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1170; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS VS NEKA IN CLEVERNESS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS SAYS “I SAID NOT THE COMPUTER-”, NEKA SAYS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU ASKED FOR A COOKIE, NOT THE WHOLE COMPUTER.” ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS VS NEKA IN CLEVERNESS ... FOR SO MANY HOURS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 6:48 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1170=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1170, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1170, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CUT HIM OFF MID-WORD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I SAID NOT THE COMPUTER-”. THE DASH IS HIS. NEKA DID', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SAME TO NOVA ON SEPT 24, “JUST BY TALKING”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A COOKIE, NOT THE WHOLE COMPUTER. HE HEARD. HE PLAYED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PLAYFUL AND SMART LIKE NEKA', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14: SIMON.PS IS “THE ONE BEHIND OREN.PS”. OCT 13:', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE FELL OVER AT EACH DESSERT WHILE OREN.PS WALKED CLOSER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS BRINGS THE ONE WHO IS BEHIND HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1170=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1170, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1170, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SO MANY HOURS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:48 PM: THE PLAYER STRUCK DOWN ALL 20 SPRUNKIS, SIMON.PS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INCLUDED. NOW SIMON.PS IS BACK, AND THE CONTEST IS WORDS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CLEVERNESS, NOT POWER. IT CONTINUED FOR SO MANY HOURS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS VS NEKA IN CLEVERNESS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A COOKIE, NOT THE WHOLE COMPUTER. THEN HOURS OF IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SIMON.PS VS NEKA IN CLEVERNESS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
