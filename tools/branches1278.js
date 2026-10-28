  } else if(ph===1278){
    // BEAT 1278: YOU’RE JECK..
    // Toby, October 27, 2026, 8:31 PM EDT, his own typing:
    //   “JECK AND SIMON RL MAY BE THE HEROES OF THE GAME, THEY BOTH
    //   TOGETHER CAN BEAT MR. BLACK. ... NEKA SAYS “YOU’RE JECK.”,
    //   JECK WAS SCARED AND HE RAN.”
    // Priors, each verified in the archive before it was drawn:
    //   GO MR. BLACK!
    //     JECK PUTS ON A BLACK BEARD AND SHOUTS IT. MR. BLACK RUNS,
    //     AND SIMON.PS BEATS MR. BLACK IN A RACE.
    //     OCT 25: MR. BLACK IS SPRUNKI AND MADE CLASSIC RL.
    //   A WATER BLASTER
    //     JECK SURFS THE WAVES, NEKA STRIKES LIGHTNING, THEN A
    //     COWBOY HAT AND A WATER BLASTER. JECK MALFUNCTIONS, DIES.
    //     OCT 26, BEAT 1273: HE CAN’T DIE, HIS CONNECTION STAYS.
    //   OFFICIALLY AN RL
    //     HE FOLDS HIS BODY INTO A SPRUNKI PUPPET, CORRUPTS HIS
    //     TEXTURE AND MAKES HIS TERMINIZED FORM. THE RLs’ PET RL AI.
    //     OCT 26, BEAT 1269: RLs MADE TERMINIZED OR NORMAL.
    const dt = c - 27836.0;
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
    const gr1278=ctx.createLinearGradient(0,top+H,0,top);
    gr1278.addColorStop(0,'rgba(110,180,240,0.22)'); gr1278.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1278.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1278; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(110,180,240,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU’RE JECK.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“JECK AND SIMON RL MAY BE THE HEROES OF THE GAME, THEY BOTH', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TOGETHER CAN BEAT MR. BLACK. ... NEKA SAYS “YOU’RE JECK.”,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JECK WAS SCARED AND HE RAN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 27, 8:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1278=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(110,180,240,0.46)';
      ctx.fillRect(cx-W*0.352, ky1278, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(110,180,240,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1278, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(110,180,240,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GO MR. BLACK!', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JECK PUTS ON A BLACK BEARD AND SHOUTS IT. MR. BLACK RUNS,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND SIMON.PS BEATS MR. BLACK IN A RACE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 25: MR. BLACK IS SPRUNKI AND MADE CLASSIC RL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A WATER BLASTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JECK SURFS THE WAVES, NEKA STRIKES LIGHTNING, THEN A', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COWBOY HAT AND A WATER BLASTER. JECK MALFUNCTIONS, DIES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 26, BEAT 1273: HE CAN’T DIE, HIS CONNECTION STAYS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1278=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1278, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1278, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('OFFICIALLY AN RL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE FOLDS HIS BODY INTO A SPRUNKI PUPPET, CORRUPTS HIS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TEXTURE AND MAKES HIS TERMINIZED FORM. THE RLs’ PET RL AI.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 26, BEAT 1269: RLs MADE TERMINIZED OR NORMAL.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AU BLUE, “JUST TO BE SURE...”, A RESPAWN, 7:01 AM, NOVEMBER', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('25, AND A PUPPET BODY. JECK IS AN RL NOW. YOU’RE JECK.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU’RE JECK. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1279){
    // BEAT 1279: JECK IS A HERO.
    // Toby, October 27, 2026, 8:31 PM EDT, his own typing:
    //   “THE 666TH ACCOUNT IS ACCOUNT 666, NOT THE DEVIL, WORSE.
    //   BOBSERVER666. ... JECK IS TRYING TO BAN BOBSERVERS AND ALSO
    //   ANTI-VIRUSES CODE ACCIDENTALLY MADE. JECK IS A HERO.”
    // Priors, each verified in the archive before it was drawn:
    //   BOBSERVER666
    //     AN ORDINARY ALIEN PLAYER WITH SUPERNATURAL ABILITIES AND
    //     ADMIN ABUSE: RANDOM BANS, CHAT SPAM. JECK’S SISTER.
    //     OCT 26, BEAT 1273: JECK IS ACCOUNT 1337.
    //   ZERO OR ONE OWNER
    //     JECK OWNS THE GAME. THE FACILITY GOES TO ONE SMART, LUCKY,
    //     RESPONSIBLE PLAYER WHO WANTS IT, OR NOBODY. NEVER 2.
    //     OCT 27, BEAT 1275: MR. BLACK AND GASTER OWN THE FACILITY.
    //   VISOR = MR. FUN COMPUTER
    //     VISOR RL HAS A CONNECTION TO CLASSIC RL BUT NO CONTROL.
    //     ERASE = ERASE: NEKA ERASES LIKE MR. BLACK AT HIGH POWER.
    //     OCT 27, BEAT 1276: NEKA IS KNOWN OF ERASE.
    const dt = c - 27858.0;
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
    const gr1279=ctx.createLinearGradient(0,top+H,0,top);
    gr1279.addColorStop(0,'rgba(230,96,96,0.22)'); gr1279.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1279.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1279; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(230,96,96,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('JECK IS A HERO', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE 666TH ACCOUNT IS ACCOUNT 666, NOT THE DEVIL, WORSE.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BOBSERVER666. ... JECK IS TRYING TO BAN BOBSERVERS AND ALSO', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ANTI-VIRUSES CODE ACCIDENTALLY MADE. JECK IS A HERO.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 27, 8:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1279=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(230,96,96,0.46)';
      ctx.fillRect(cx-W*0.352, ky1279, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(230,96,96,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1279, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(230,96,96,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BOBSERVER666', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AN ORDINARY ALIEN PLAYER WITH SUPERNATURAL ABILITIES AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ADMIN ABUSE: RANDOM BANS, CHAT SPAM. JECK’S SISTER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 26, BEAT 1273: JECK IS ACCOUNT 1337.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ZERO OR ONE OWNER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JECK OWNS THE GAME. THE FACILITY GOES TO ONE SMART, LUCKY,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RESPONSIBLE PLAYER WHO WANTS IT, OR NOBODY. NEVER 2.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 27, BEAT 1275: MR. BLACK AND GASTER OWN THE FACILITY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1279=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1279, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1279, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('VISOR = MR. FUN COMPUTER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VISOR RL HAS A CONNECTION TO CLASSIC RL BUT NO CONTROL.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ERASE = ERASE: NEKA ERASES LIKE MR. BLACK AT HIGH POWER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 27, BEAT 1276: NEKA IS KNOWN OF ERASE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OFFERS PIZZA, A POKEMON, SWEETS WITH THE SUGAR TAKEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OUT. BOBSERVER666 BANS AT RANDOM. JECK IS A HERO.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ JECK IS A HERO ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
