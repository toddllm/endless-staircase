  } else if(ph===957){
    // BEAT 957: THE PRESSURE POWER INDEX.
    // Toby, October 1, 2026, 6:22 AM EDT, his own typing:
    //   “NEKA IS HIS NORMAL STYLE. THE GAME USES THE PPI OR WHATEVER IT IS.
    //   NOW PRESSURE POWER LEVELS, YEAH IT IS ALL THE CLASSICS LORE PUT TOGETHER.
    //   ... SO HARDLY ANYONE SURVIVED MR. BLACK.”
    // Priors, each verified in the archive before it was drawn:
    //   THE PRESSURE POWER INDEX
    //     EVERY CLASSICS FORM STACKS: EXE, PS, WINTER, RL, TREATMENT, NEKA CODE.
    //     OREN.EXE 1000 PPI. SIMON 965. GRAY 950. WENDA 920. BLACK 875.
    //     NEKA: ∞ PPI. CREATOR TIER.
    //   NEKA KEEPS HIS NORMAL STYLE
    //     HUMAN, LAB COAT. THE 20 SPRUNKIS GO SIMPLE-NEON.
    //     SEPT 29: NEKA TREATMENT NEKA, HUMAN WITH LABCOAT, G.O.D.
    //     THE ONE THING IN PRESSURE THAT IS NOT NEON.
    //   HORROR MODE
    //     FUN BOT’S MOUTH TURNED UPSIDE DOWN. PINKI’S WHOLE FACE RIPPED OFF.
    //     GRAY IS JUST LIKE FUN BOT, SCARED OF THE CHAOS.
    //     HARDLY ANYONE SURVIVED MR. BLACK.
    const dt = c - 20774.0;
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
    const gr957=ctx.createLinearGradient(0,top+H,0,top);
    gr957.addColorStop(0,'rgba(120,255,190,0.22)'); gr957.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr957.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr957; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,255,190,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE PRESSURE POWER INDEX', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS HIS NORMAL STYLE. THE GAME USES THE PPI OR WHATEVER IT IS.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW PRESSURE POWER LEVELS, YEAH IT IS ALL THE CLASSICS LORE PUT TOGETHER.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... SO HARDLY ANYONE SURVIVED MR. BLACK.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 6:22 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky957=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,255,190,0.46)';
      ctx.fillRect(cx-W*0.352, ky957, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,255,190,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky957, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,255,190,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PRESSURE POWER INDEX', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY CLASSICS FORM STACKS: EXE, PS, WINTER, RL, TREATMENT, NEKA CODE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.EXE 1000 PPI. SIMON 965. GRAY 950. WENDA 920. BLACK 875.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA: ∞ PPI. CREATOR TIER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA KEEPS HIS NORMAL STYLE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HUMAN, LAB COAT. THE 20 SPRUNKIS GO SIMPLE-NEON.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29: NEKA TREATMENT NEKA, HUMAN WITH LABCOAT, G.O.D.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE THING IN PRESSURE THAT IS NOT NEON.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy957=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy957, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy957, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HORROR MODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FUN BOT’S MOUTH TURNED UPSIDE DOWN. PINKI’S WHOLE FACE RIPPED OFF.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GRAY IS JUST LIKE FUN BOT, SCARED OF THE CHAOS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HARDLY ANYONE SURVIVED MR. BLACK.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JEVIN 840. BRUD 775. MR. SUN 710. PINKI 675. MR. TREE IS LAST AT 365.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALL THE CLASSICS LORE, PUT TOGETHER INTO ONE NUMBER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE PRESSURE POWER INDEX ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
