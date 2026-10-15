  } else if(ph===1164){
    // BEAT 1164: THE SPIKE WALL FIRST.
    // Toby, October 15, 2026, 5:48 PM EDT, his own typing:
    //   “THIS DOESN’T GO IN ENDLESS STAIRCASE GAMES (THE PLAYER
    //   SHOULD ACTUALLY DIE TO A SPIKE WALL BEFORE THEY REACH THIS
    //   POINT ... EVERY LINE OF LORE CONNECTS.)”
    // Priors, each verified in the archive before it was drawn:
    //   THE SAME BEING
    //     “NEKA REVEALS ENDLESS STAIRCASES AS THE SAME BEING.”
    //     ONE STAIRCASE, EVERY GAME. THE REVEAL YOU NEVER REACH.
    //     YOU DIE AT THE SPIKE WALL FIRST. BY DESIGN.
    //   A NEW LEVER
    //     “SIMON.PS CREATES A NEW LEVER THAT SUMMONS SPIKES ON THE
    //     ENDLESS STAIRCASE, THE ENDLESS STAIRCASE BUILDS ITSELF UP”
    //     JUNE 13: FALL, REARRANGE, BRIDGE, SPIN, SLIDE. NOW SPIKES.
    //   MORE AND MORE LEVERS
    //     “THE ENDLESS STAIRCASE NOW CAN EVEN BECOME A BALL SHAPE,
    //     CAN RISE UP, AND ALSO CAN SHAKE AROUND.”
    //     THE SPIKE LEVER AND THE SHAKE LEVER ARE IN THE GAME NOW.
    const dt = c - 25328.0;
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
    const gr1164=ctx.createLinearGradient(0,top+H,0,top);
    gr1164.addColorStop(0,'rgba(255,90,120,0.22)'); gr1164.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1164.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1164; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SPIKE WALL FIRST', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS DOESN’T GO IN ENDLESS STAIRCASE GAMES (THE PLAYER', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHOULD ACTUALLY DIE TO A SPIKE WALL BEFORE THEY REACH THIS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('POINT ... EVERY LINE OF LORE CONNECTS.)”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 5:48 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1164=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1164, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1164, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SAME BEING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA REVEALS ENDLESS STAIRCASES AS THE SAME BEING.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONE STAIRCASE, EVERY GAME. THE REVEAL YOU NEVER REACH.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('YOU DIE AT THE SPIKE WALL FIRST. BY DESIGN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NEW LEVER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS CREATES A NEW LEVER THAT SUMMONS SPIKES ON THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENDLESS STAIRCASE, THE ENDLESS STAIRCASE BUILDS ITSELF UP”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('JUNE 13: FALL, REARRANGE, BRIDGE, SPIN, SLIDE. NOW SPIKES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1164=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1164, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1164, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MORE AND MORE LEVERS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE ENDLESS STAIRCASE NOW CAN EVEN BECOME A BALL SHAPE,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAN RISE UP, AND ALSO CAN SHAKE AROUND.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SPIKE LEVER AND THE SHAKE LEVER ARE IN THE GAME NOW.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY LINE OF LORE CONNECTS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ENDING STAYS OUTSIDE THE GAME. THE SPIKES DO NOT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SPIKE WALL FIRST ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1165){
    // BEAT 1165: YOU ARE "THE PLAYER".
    // Toby, October 15, 2026, 5:48 PM EDT, his own typing:
    //   “I KNOW YOU NOW. YOU, THE PLAYER, YOU ARE NOT A PLAYER,
    //   YOU ARE AN ENTITY NAMED ‘THE PLAYER’.” ... “THE PLAYER
    //   HAPPENS TO BE CODE (C0DE OR WHATEVER.)”
    // Priors, each verified in the archive before it was drawn:
    //   SIMON.PS TELEPORTS TO THE PLAYER
    //     “THE PEOPLE SCREAM.” THE ONE WHO PULLS THE LEVERS
    //     KNOWS WHO HAS BEEN CLIMBING THEM.
    //     NOT A PLAYER. AN ENTITY NAMED THE PLAYER.
    //   WHAT NEKA SHOWS
    //     “A TALL MALE ENTITY, HUMAN, BROWN EYES, BLACK HAIR,
    //     AND ALL GREEN COLORED CLOTHING.”
    //     THE FIRST FACE THE PLAYER HAS EVER HAD HERE.
    //   THE PLAYER IS CODE
    //     AUG 21: CODE, THE STRONGEST PLAYER IN THE GAME. OCT 12:
    //     TAKEN OVER 50 TIMES, C0DE. “LUIGI INUS GOES WITH” HIM.
    //     JULY 25: ONLY “THE PLAYER” CAN TAKE HIM THAT FAR.
    const dt = c - 25350.0;
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
    const gr1165=ctx.createLinearGradient(0,top+H,0,top);
    gr1165.addColorStop(0,'rgba(120,200,255,0.22)'); gr1165.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1165.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1165; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE "THE PLAYER"', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I KNOW YOU NOW. YOU, THE PLAYER, YOU ARE NOT A PLAYER,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE AN ENTITY NAMED ‘THE PLAYER’.” ... “THE PLAYER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HAPPENS TO BE CODE (C0DE OR WHATEVER.)”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 5:48 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1165=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1165, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1165, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS TELEPORTS TO THE PLAYER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE PEOPLE SCREAM.” THE ONE WHO PULLS THE LEVERS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('KNOWS WHO HAS BEEN CLIMBING THEM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOT A PLAYER. AN ENTITY NAMED THE PLAYER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT NEKA SHOWS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“A TALL MALE ENTITY, HUMAN, BROWN EYES, BLACK HAIR,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND ALL GREEN COLORED CLOTHING.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST FACE THE PLAYER HAS EVER HAD HERE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1165=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1165, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1165, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE PLAYER IS CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 21: CODE, THE STRONGEST PLAYER IN THE GAME. OCT 12:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TAKEN OVER 50 TIMES, C0DE. “LUIGI INUS GOES WITH” HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('JULY 25: ONLY “THE PLAYER” CAN TAKE HIM THAT FAR.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE NOT A PLAYER.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('YOU ARE AN ENTITY NAMED THE PLAYER. YOU ARE CODE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU ARE "THE PLAYER" ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1166){
    // BEAT 1166: 7 SOULS, NO MORE EMERALDS.
    // Toby, October 15, 2026, 5:48 PM EDT, his own typing:
    //   “SIMON.PS THEN BRINGS EVERYONE UP AGAIN TO CLIMB IT AGAIN,
    //   NO MORE EMERALDS ANYMORE. THE SOULS ARE THE REWARD, 7 SOULS
    //   CIRCLE THE PLAYER ... BUT THE PLAYER NOW CAN FLY”
    // Priors, each verified in the archive before it was drawn:
    //   THE STAIRCASE FALLS, THE PLAYER FLIES
    //     “THE STAIRCASE FALLS, MAKING THE PLAYER FALL, BUT THE
    //     PLAYER NOW CAN FLY, AND FLEW TO THE TOP.”
    //     THE FALL LEVER, FROM JUNE 13, FINALLY LOSES.
    //   OREN.PS AND THE PLASMA
    //     “OREN.PS ATTACKS AND SUMMONS ENERGY, THE PLASMA SPREADS
    //     ALL OVER THE STAIRCASE, THE PLAYER RUNS FASTER.”
    //     THEN THE 19 OTHER SPRUNKIS ALL ATTACK.
    //   ALL 20 STRUCK DOWN
    //     “THE PLAYER’S FACE WAS COVERED IN A SHADOW, THEN THE
    //     PLAYER STRIKES DOWN ALL 20 SPRUNKIS, INCLUDING SIMON.PS.”
    //     SIMON.PS IS ONE OF THE 20. HE GOES DOWN WITH THEM.
    const dt = c - 25372.0;
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
    const gr1166=ctx.createLinearGradient(0,top+H,0,top);
    gr1166.addColorStop(0,'rgba(120,255,160,0.22)'); gr1166.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1166.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1166; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,255,160,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('7 SOULS, NO MORE EMERALDS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS THEN BRINGS EVERYONE UP AGAIN TO CLIMB IT AGAIN,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO MORE EMERALDS ANYMORE. THE SOULS ARE THE REWARD, 7 SOULS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CIRCLE THE PLAYER ... BUT THE PLAYER NOW CAN FLY”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 5:48 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1166=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,255,160,0.46)';
      ctx.fillRect(cx-W*0.352, ky1166, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,255,160,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1166, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,255,160,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE STAIRCASE FALLS, THE PLAYER FLIES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE STAIRCASE FALLS, MAKING THE PLAYER FALL, BUT THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PLAYER NOW CAN FLY, AND FLEW TO THE TOP.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FALL LEVER, FROM JUNE 13, FINALLY LOSES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS AND THE PLASMA', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“OREN.PS ATTACKS AND SUMMONS ENERGY, THE PLASMA SPREADS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL OVER THE STAIRCASE, THE PLAYER RUNS FASTER.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THEN THE 19 OTHER SPRUNKIS ALL ATTACK.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1166=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1166, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1166, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ALL 20 STRUCK DOWN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE PLAYER’S FACE WAS COVERED IN A SHADOW, THEN THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PLAYER STRIKES DOWN ALL 20 SPRUNKIS, INCLUDING SIMON.PS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SIMON.PS IS ONE OF THE 20. HE GOES DOWN WITH THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO MORE EMERALDS ANYMORE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SEVEN SOULS. A SHADOWED FACE. TWENTY SPRUNKIS DOWN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 7 SOULS, NO MORE EMERALDS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1167){
    // BEAT 1167: NEKA WON AGAIN, FOREVER.
    // Toby, October 15, 2026, 5:48 PM EDT, his own typing:
    //   “NEKA GAVE CODE LUIGI INUS, THEN NEKA LEFT ... THEY BATTLE,
    //   PLAYER BEATS LUIGI INUS AND GETS THE GREEN SOUL ... NEKA
    //   DESTROYED PLAYER JUST AFTER. NEKA WON AGAIN, FOREVER.”
    // Priors, each verified in the archive before it was drawn:
    //   ANOTHER HUMAN-LIKE BEING
    //     “NEKA IS ANOTHER HUMAN-LIKE BEING.” 4:12 PM: THE CROSS
    //     EYES, A HUMAN-LIKE BEING. NOW HIS FACE IS A SHADOW TOO.
    //     “NEITHER NEKA NOR PLAYER’S FACE ARE VISABLE.” HIS WORDS.
    //   WHAT NEKA HAS BEATEN
    //     “ALL THE UNDERTALE CHARACTERS AND ALL UNDERTALE FANON
    //     CHARACTERS AND ALSO DELTARUNE AND DELTARUNE FANON.”
    //     THOSE GAMES ARE NOT “NEKA” (4:50 PM). HE BEAT THEM ANYWAY.
    //   THE GREEN SOUL
    //     “PLAYER BEATS LUIGI INUS AND GETS THE GREEN SOUL, PLAYER
    //     BLOCKS THE BATTLEFIELD’S ATTACKS, NEKA DESTROYED PLAYER”
    //     JULY 25: “ALWAYS DESTROYS THE PLAYER NO OTHER ENDING.”
    const dt = c - 25394.0;
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
    const gr1167=ctx.createLinearGradient(0,top+H,0,top);
    gr1167.addColorStop(0,'rgba(255,216,79,0.22)'); gr1167.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1167.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1167; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA WON AGAIN, FOREVER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA GAVE CODE LUIGI INUS, THEN NEKA LEFT ... THEY BATTLE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PLAYER BEATS LUIGI INUS AND GETS THE GREEN SOUL ... NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DESTROYED PLAYER JUST AFTER. NEKA WON AGAIN, FOREVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 5:48 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1167=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1167, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1167, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ANOTHER HUMAN-LIKE BEING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA IS ANOTHER HUMAN-LIKE BEING.” 4:12 PM: THE CROSS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EYES, A HUMAN-LIKE BEING. NOW HIS FACE IS A SHADOW TOO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEITHER NEKA NOR PLAYER’S FACE ARE VISABLE.” HIS WORDS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT NEKA HAS BEATEN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALL THE UNDERTALE CHARACTERS AND ALL UNDERTALE FANON', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHARACTERS AND ALSO DELTARUNE AND DELTARUNE FANON.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THOSE GAMES ARE NOT “NEKA” (4:50 PM). HE BEAT THEM ANYWAY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1167=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1167, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1167, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE GREEN SOUL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“PLAYER BEATS LUIGI INUS AND GETS THE GREEN SOUL, PLAYER', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BLOCKS THE BATTLEFIELD’S ATTACKS, NEKA DESTROYED PLAYER”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('JULY 25: “ALWAYS DESTROYS THE PLAYER NO OTHER ENDING.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA WON AGAIN, FOREVER.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE PLAYER GOT THE GREEN SOUL. NEKA GOT THE ENDING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA WON AGAIN, FOREVER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
