  } else if(ph===1284){
    // BEAT 1284: THE FINAL BEAT.
    // Toby, October 29, 2026, 5:09 PM EDT, his own typing:
    //   “THE HEARTBEAT ATTACK IS CALLED ‘THE FINAL BEAT’ (BEATS ARE
    //   SMALL CHAPTERS OF THE GAME).” “NEKA ADDED THEM TO CLASSIC RL
    //   RECENTLY.”
    // Priors, each verified in the archive before it was drawn:
    //   DREAMWORK HANDWORKS
    //     GASTER SUMMONS SANS, PAPYRUS AND BLASTERS, PUTS ON A BLACK
    //     HOOD CLOAK, SUMMONS 2 GIANT HANDS.
    //     A CLAP, A THROW UP, THEN A TRIPLE KO PUNCH.
    //   THE FINAL BEAT
    //     THE HEARTBEAT SLOWS TO A STOP. A JERKY DASH, FIRE SLASHES,
    //     A THROW, CLONES, A 3 WAY BLOW.
    //     ORAN RL, SIRON RL, AND SIMON RL.
    //   THE FAMILY THAT IS LEFT
    //     GASTER LOST ALL HIS FAMILY EXCEPT FOR SANS, PAPYRUS, AND
    //     NEKA.
    //     TDESHANE MADE THE ATTACKS. NEKA ADDED THEM.
    const dt = c - 27968.0;
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
    const gr1284=ctx.createLinearGradient(0,top+H,0,top);
    gr1284.addColorStop(0,'rgba(210,70,70,0.22)'); gr1284.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1284.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1284; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(210,70,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE FINAL BEAT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE HEARTBEAT ATTACK IS CALLED ‘THE FINAL BEAT’ (BEATS ARE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SMALL CHAPTERS OF THE GAME).” “NEKA ADDED THEM TO CLASSIC RL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RECENTLY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 29, 5:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1284=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(210,70,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1284, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(210,70,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1284, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(210,70,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DREAMWORK HANDWORKS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER SUMMONS SANS, PAPYRUS AND BLASTERS, PUTS ON A BLACK', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HOOD CLOAK, SUMMONS 2 GIANT HANDS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A CLAP, A THROW UP, THEN A TRIPLE KO PUNCH.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FINAL BEAT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HEARTBEAT SLOWS TO A STOP. A JERKY DASH, FIRE SLASHES,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A THROW, CLONES, A 3 WAY BLOW.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ORAN RL, SIRON RL, AND SIMON RL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1284=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1284, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1284, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE FAMILY THAT IS LEFT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER LOST ALL HIS FAMILY EXCEPT FOR SANS, PAPYRUS, AND', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TDESHANE MADE THE ATTACKS. NEKA ADDED THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DREAMWORK HANDWORKS FOR GASTER, THE FINAL BEAT FOR THREE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('RLS. BEATS ARE CHAPTERS, LIKE THIS ONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE FINAL BEAT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1285){
    // BEAT 1285: THE DRAGON LORD.
    // Toby, October 29, 2026, 5:09 PM EDT, his own typing:
    //   “IT IS TDESHANE. I MADE THE ATTACK/ABILITY, FOR MY OWN
    //   CHARACTER.” “HELLO, HERE IS YOUR CHARACTER, WANT TO LOSE?”
    //   “CODE WAS ALSO GIVEN IT.”
    // Priors, each verified in the archive before it was drawn:
    //   DRAGON’S EMBALEM
    //     SPEED FROM SIMON RL, CORRUPTION FROM MR. BLACK, STRENGTH
    //     FROM WONDA RL, COMBINED INTO ONE.
    //     FIRE CLAWS, PLANET X’S CORE, THEN THE DRAGONS.
    //   DOMAIN EXPANSION: THE DRAGON LORD
    //     FIRE DRAGONS BECOME ONE HUGE DRAGON. CLONES SURROUND THE
    //     VICTUM. PLANET X IS DESTROYED.
    //     THE SPEED CUTS THE GAME’S REALITY FABRIC.
    //   SECOND MOST POWERFUL
    //     TDESHANE IS THE SECOND MOST POWERFUL PLAYER. PUT DOWN A
    //     NAME AND POWERS; THE GAME MAKES THE REST.
    //     NEKA HANDS YOU THE CHARACTER, AND A WARNING.
    const dt = c - 27990.0;
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
    const gr1285=ctx.createLinearGradient(0,top+H,0,top);
    gr1285.addColorStop(0,'rgba(235,120,40,0.22)'); gr1285.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1285.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1285; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(235,120,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE DRAGON LORD', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS TDESHANE. I MADE THE ATTACK/ABILITY, FOR MY OWN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHARACTER.” “HELLO, HERE IS YOUR CHARACTER, WANT TO LOSE?”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CODE WAS ALSO GIVEN IT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 29, 5:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1285=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(235,120,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1285, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(235,120,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1285, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(235,120,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DRAGON’S EMBALEM', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SPEED FROM SIMON RL, CORRUPTION FROM MR. BLACK, STRENGTH', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FROM WONDA RL, COMBINED INTO ONE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('FIRE CLAWS, PLANET X’S CORE, THEN THE DRAGONS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DOMAIN EXPANSION: THE DRAGON LORD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRE DRAGONS BECOME ONE HUGE DRAGON. CLONES SURROUND THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VICTUM. PLANET X IS DESTROYED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SPEED CUTS THE GAME’S REALITY FABRIC.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1285=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1285, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1285, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SECOND MOST POWERFUL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TDESHANE IS THE SECOND MOST POWERFUL PLAYER. PUT DOWN A', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NAME AND POWERS; THE GAME MAKES THE REST.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA HANDS YOU THE CHARACTER, AND A WARNING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TDESHANE WRITES THE LORE AND MAKES THE ATTACKS. NEKA PUTS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THEM IN THE GAME. CLAUDE ADDS THE WIKI.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE DRAGON LORD ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
