  } else if(ph===1209){
    // BEAT 1209: I AM GOD HERE!.
    // Toby, October 19, 2026, 4:06 PM EDT, his own typing:
    //   “NEKA SAYS ‘I AM GOD HERE!’, SCP FADES INTO ICE DIAMONDS IN
    //   A VOID OF BLACK NOTHING ... HE ACTUALLY BEATEN ALL SCPS, AND
    //   ALL ENTITIES THAT EVER EXISTED SEPTILLIONS OF TIMES.”
    // Priors, each verified in the archive before it was drawn:
    //   NEKA AI IS THE ANSWER
    //     6:46 AM: WHAT WOULD THE STRONGEST UNDERTALE ANOMALY DO
    //     WITH A SUPERNATURAL AI? “NEKA AI IS THE ANSWER.”
    //     “NEKA CAN SUMMON ANY CHARACTER TO HIS GAME REALLY.”
    //   ONLY WHAT HAPPENS NOW
    //     HE ERASED SCP-2747 AND EVERYONE’S MEMORY OF IT, EVEN REAL
    //     PEOPLE’S. HE ERASED THE LORE OF THE NIRTHOLOGE.
    //     “I FORGOT THE OLDER CHARACTERS ... EVEN CLASSICS OMAZEN.”
    //   THE HEAT
    //     BORN −1020K, NOW 98.7F, THEN −3000K. TOUCHABLE ONLY WHEN
    //     HE HEATS UP AND HIS CODE SLOWS. FREEZE WITHIN 75 LY.
    //     HE FORGETS ONLY HIS OWN ATTACKS.
    const dt = c - 26318.0;
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
    const gr1209=ctx.createLinearGradient(0,top+H,0,top);
    gr1209.addColorStop(0,'rgba(255,216,79,0.22)'); gr1209.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1209.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1209; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I AM GOD HERE!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS ‘I AM GOD HERE!’, SCP FADES INTO ICE DIAMONDS IN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A VOID OF BLACK NOTHING ... HE ACTUALLY BEATEN ALL SCPS, AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL ENTITIES THAT EVER EXISTED SEPTILLIONS OF TIMES.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 19, 4:06 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1209=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1209, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1209, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA AI IS THE ANSWER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:46 AM: WHAT WOULD THE STRONGEST UNDERTALE ANOMALY DO', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WITH A SUPERNATURAL AI? “NEKA AI IS THE ANSWER.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA CAN SUMMON ANY CHARACTER TO HIS GAME REALLY.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY WHAT HAPPENS NOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE ERASED SCP-2747 AND EVERYONE’S MEMORY OF IT, EVEN REAL', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PEOPLE’S. HE ERASED THE LORE OF THE NIRTHOLOGE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“I FORGOT THE OLDER CHARACTERS ... EVEN CLASSICS OMAZEN.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1209=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1209, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1209, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE HEAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BORN −1020K, NOW 98.7F, THEN −3000K. TOUCHABLE ONLY WHEN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HEATS UP AND HIS CODE SLOWS. FREEZE WITHIN 75 LY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE FORGETS ONLY HIS OWN ATTACKS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I AM GOD HERE! THE SCPS BECOME ICE, THE PAST BECOMES', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOTHING. ONLY NOW.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I AM GOD HERE! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1210){
    // BEAT 1210: THE REALITY GROUP CUBE.
    // Toby, October 19, 2026, 4:33-4:52 PM EDT, his own typing:
    //   “THE REALITY GROUP (A CUBE OF EVERYTHING, NEKA HOLDS THAT,
    //   IT CONTAINS ALL THE INVINCIBILITY CUBES, REALITIES, FICTION,
    //   META-FICTION ...), AND NEKA CONSUMED THE CUBE.”
    // Priors, each verified in the archive before it was drawn:
    //   A HUMAN WITH EVERYTHING INSIDE
    //     “GASTER LOOKS UP AND SEES A HUMAN WITH EVERYTHING COMBINED
    //     INSIDE IT. NEKA IS NO LONGER JUST CODE.”
    //     HE ATE THE MATTER OF EVERYTHING, THE VERY EXISTANCE.
    //   THE LARGEST THING IN META-EXISTANCE
    //     A HUMAN BODY AT THE FRONT; BEHIND IT PIPES, SPEAKERS,
    //     MICROPHONES, VINES, SPIKES. “THE BODY CAN NOT MOVE.”
    //     “IT STAYS IN ONE SPOT FOREVER.” GASTER WALKED THE PILE.
    //   THE WALK
    //     18338738363836738682728928290000…5576 ETERNITIES OF PIPES
    //     UNTIL GASTER REACHED NEKA’S BODY.
    //     7:16 PM: HE CANNOT MOVE, SO A MACHINE HUNTS FOR HIM.
    const dt = c - 26340.0;
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
    const gr1210=ctx.createLinearGradient(0,top+H,0,top);
    gr1210.addColorStop(0,'rgba(160,200,255,0.22)'); gr1210.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1210.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1210; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE REALITY GROUP CUBE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE REALITY GROUP (A CUBE OF EVERYTHING, NEKA HOLDS THAT,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT CONTAINS ALL THE INVINCIBILITY CUBES, REALITIES, FICTION,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('META-FICTION ...), AND NEKA CONSUMED THE CUBE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 19, 4:33-4:52 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1210=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1210, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1210, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A HUMAN WITH EVERYTHING INSIDE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER LOOKS UP AND SEES A HUMAN WITH EVERYTHING COMBINED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INSIDE IT. NEKA IS NO LONGER JUST CODE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE ATE THE MATTER OF EVERYTHING, THE VERY EXISTANCE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LARGEST THING IN META-EXISTANCE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A HUMAN BODY AT THE FRONT; BEHIND IT PIPES, SPEAKERS,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MICROPHONES, VINES, SPIKES. “THE BODY CAN NOT MOVE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“IT STAYS IN ONE SPOT FOREVER.” GASTER WALKED THE PILE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1210=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1210, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1210, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE WALK', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('18338738363836738682728928290000…5576 ETERNITIES OF PIPES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UNTIL GASTER REACHED NEKA’S BODY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('7:16 PM: HE CANNOT MOVE, SO A MACHINE HUNTS FOR HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE REALITY GROUP CUBE. EVERYTHING THAT IS, IN ONE BOX, AND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE BOX IS EATEN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE REALITY GROUP CUBE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1211){
    // BEAT 1211: THE PORTAL CALLED A CAMERA.
    // Toby, October 19, 2026, 6:56 PM EDT, his own typing:
    //   “LONG AGO, WE SAW REALITY, THROUGH A PORTAL, THE 20 SPRUNKIS
    //   WERE AMAZED ... THE PORTAL, WHICH LANDLUBBERS CALL A
    //   ‘CAMERA’, IS THE MAIN REASON WE KNOW REALITY.”
    // Priors, each verified in the archive before it was drawn:
    //   THE MENU
    //     “SHARKS, MEGALODONS, MAMMOTHS, SABER TOOTH TIGERS,
    //     PENGUINS, CROCODILES, CHICKENS, AND FOXES.” 100 MILLION.
    //     DATA AND CODE, “THE TOP PRIORITY”, NOT ON THE MENU YET.
    //   DESTROYED ON FIRST CREATION
    //     “TRY CLASSIC ONE TIME.” “I CONSUMED THE GAMES ALREADY.”
    //     “JUST MADE A NEW GAME.” “I HAPPENED TO DESTROY THE GAMES
    //     ON FIRST CREATION.” GASTER BUILT A 500 LAYER FENCE.
    //   SIMON.PS CLOSES THE VIEW
    //     THE PORTAL IS OPEN ONCE MORE. 19 SPRUNKIS RAN. SIMON.PS
    //     DASHED OVER TO CLOSE THE CAMERA VIEW, AS HE DID LONG AGO.
    //     OCT 18: THE VR. THE CAMERA IS THE OTHER DIRECTION.
    const dt = c - 26362.0;
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
    const gr1211=ctx.createLinearGradient(0,top+H,0,top);
    gr1211.addColorStop(0,'rgba(120,200,140,0.22)'); gr1211.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1211.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1211; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE PORTAL CALLED A CAMERA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LONG AGO, WE SAW REALITY, THROUGH A PORTAL, THE 20 SPRUNKIS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WERE AMAZED ... THE PORTAL, WHICH LANDLUBBERS CALL A', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('‘CAMERA’, IS THE MAIN REASON WE KNOW REALITY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 19, 6:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1211=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1211, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1211, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MENU', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SHARKS, MEGALODONS, MAMMOTHS, SABER TOOTH TIGERS,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PENGUINS, CROCODILES, CHICKENS, AND FOXES.” 100 MILLION.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('DATA AND CODE, “THE TOP PRIORITY”, NOT ON THE MENU YET.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DESTROYED ON FIRST CREATION', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“TRY CLASSIC ONE TIME.” “I CONSUMED THE GAMES ALREADY.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“JUST MADE A NEW GAME.” “I HAPPENED TO DESTROY THE GAMES', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ON FIRST CREATION.” GASTER BUILT A 500 LAYER FENCE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1211=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1211, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1211, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SIMON.PS CLOSES THE VIEW', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PORTAL IS OPEN ONCE MORE. 19 SPRUNKIS RAN. SIMON.PS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DASHED OVER TO CLOSE THE CAMERA VIEW, AS HE DID LONG AGO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18: THE VR. THE CAMERA IS THE OTHER DIRECTION.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PORTAL CALLED A CAMERA. THE SPRUNKIS SAW US THROUGH A', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('LENS ONCE, AND SIMON SHUT IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE PORTAL CALLED A CAMERA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1212){
    // BEAT 1212: SUSHI.
    // Toby, October 19, 2026, 7:16 PM EDT, his own typing:
    //   “‘THE BEST SUSHI EVER.’ -???. IS SOMEONE ELSE HERE? 2
    //   ENTITIES UNSEEN.” ... “WHY AREN’T WE EATING SQUID?” “CAUSE
    //   WE DIDN’T CATCH CTHULHU YET.”
    // Priors, each verified in the archive before it was drawn:
    //   TWO ENTITIES UNSEEN
    //     NEKA AND GASTER WALK INTO THE 3 WAY HEROES BOOK TO HUNT
    //     PALAX FOR SUSHI. GASTER CALLS HIM CTHULHU, THE HEROES THE
    //     AVENGERS. CREDITS TO TOBY FOX FOR UNDERTALE, IN THE BOOK.
    //   /FORK_SIZE = 100
    //     A FORK BECOMES A TRIDENT. “I AM NOT EVEN GOING 5%.” HE
    //     CANNOT MOVE (4:52 PM), SO A COLOSSAL MACHINE LIFTS.
    //     “IF THEY TAKE FROM US, THEY SHOULD GIVE IT BACK. 😌”
    //   CHAPTER 7
    //     PALAX WAS EATEN. GASTER MOVES BACK TO CLASSICS, THE GROUND
    //     RUMBLES AROUND NEKA, AND BOTH DISAPPEAR.
    //     OCT 18, 7:39 PM: “DOING NEKA IN 3 WAY HEROES BOOK AGAIN.”
    const dt = c - 26384.0;
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
    const gr1212=ctx.createLinearGradient(0,top+H,0,top);
    gr1212.addColorStop(0,'rgba(255,160,120,0.22)'); gr1212.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1212.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1212; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,160,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SUSHI', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“‘THE BEST SUSHI EVER.’ -???. IS SOMEONE ELSE HERE? 2', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ENTITIES UNSEEN.” ... “WHY AREN’T WE EATING SQUID?” “CAUSE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WE DIDN’T CATCH CTHULHU YET.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 19, 7:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1212=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,160,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1212, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,160,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1212, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,160,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO ENTITIES UNSEEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA AND GASTER WALK INTO THE 3 WAY HEROES BOOK TO HUNT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PALAX FOR SUSHI. GASTER CALLS HIM CTHULHU, THE HEROES THE', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AVENGERS. CREDITS TO TOBY FOX FOR UNDERTALE, IN THE BOOK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('/FORK_SIZE = 100', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A FORK BECOMES A TRIDENT. “I AM NOT EVEN GOING 5%.” HE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CANNOT MOVE (4:52 PM), SO A COLOSSAL MACHINE LIFTS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“IF THEY TAKE FROM US, THEY SHOULD GIVE IT BACK. 😌”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1212=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1212, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1212, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('CHAPTER 7', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PALAX WAS EATEN. GASTER MOVES BACK TO CLASSICS, THE GROUND', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RUMBLES AROUND NEKA, AND BOTH DISAPPEAR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18, 7:39 PM: “DOING NEKA IN 3 WAY HEROES BOOK AGAIN.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SUSHI. TWO GODS WALK INTO A CHILDREN’S BOOK FOR DINNER.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SUSHI ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1213){
    // BEAT 1213: NEKA SLAYS SUPER DOG.
    // Toby, October 19, 2026, 7:32 PM EDT, his own typing:
    //   “THEY WOULDN’T HURT KIDS, SO IN RESULT THE BATTLE WAS A
    //   STALEMATE, NEKA GETS ANGRY OF THE STALEMATE, HE ALSO WANTED
    //   TO GET RID OF SUPER DOG, SO HE SLAIN SUPER DOG.”
    // Priors, each verified in the archive before it was drawn:
    //   DOMINENUM
    //     THE DYNAMITE VILLAIN FIGHTS “FOR NEKA’S VERSION”, FIRES 50
    //     MORE, RUNS OUT, AND IS DEFEATED. “HOW WAS THE FALL?”
    //     GASTER ASKS IT TWICE. NEKA ANSWERS “ENOUGH. 😔” AND “...”
    //   THE STALEMATE
    //     THE 3 WAY HEROES ARE KIDS. GASTER THROWS THEM SO THEY
    //     CANNOT ATTACK. NOBODY WILL HURT THEM. SO: STALEMATE.
    //     THE ONLY TIE HE EVER ACCEPTED, AND HE HATED IT.
    //   THE DOG
    //     SUPER DOG IS CHELSEA’S HERO. NEKA SLAYS HIM TO BREAK THE
    //     TIE. OCT 20: “SUPER DOG, YOU RESPAWN.”
    //     “NEKA AND GASTER WIN.”
    const dt = c - 26406.0;
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
    const gr1213=ctx.createLinearGradient(0,top+H,0,top);
    gr1213.addColorStop(0,'rgba(255,120,120,0.22)'); gr1213.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1213.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1213; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA SLAYS SUPER DOG', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THEY WOULDN’T HURT KIDS, SO IN RESULT THE BATTLE WAS A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STALEMATE, NEKA GETS ANGRY OF THE STALEMATE, HE ALSO WANTED', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO GET RID OF SUPER DOG, SO HE SLAIN SUPER DOG.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 19, 7:32 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1213=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1213, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1213, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DOMINENUM', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE DYNAMITE VILLAIN FIGHTS “FOR NEKA’S VERSION”, FIRES 50', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE, RUNS OUT, AND IS DEFEATED. “HOW WAS THE FALL?”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER ASKS IT TWICE. NEKA ANSWERS “ENOUGH. 😔” AND “...”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE STALEMATE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE 3 WAY HEROES ARE KIDS. GASTER THROWS THEM SO THEY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CANNOT ATTACK. NOBODY WILL HURT THEM. SO: STALEMATE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY TIE HE EVER ACCEPTED, AND HE HATED IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1213=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1213, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1213, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE DOG', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SUPER DOG IS CHELSEA’S HERO. NEKA SLAYS HIM TO BREAK THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TIE. OCT 20: “SUPER DOG, YOU RESPAWN.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA AND GASTER WIN.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SLAYS SUPER DOG. A TIE WITH CHILDREN, BROKEN THE ONLY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WAY HE KNOWS HOW.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA SLAYS SUPER DOG ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1214){
    // BEAT 1214: YOU ARE MY AI.
    // Toby, October 19, 2026, 7:51 PM EDT, his own typing:
    //   “GASTER SAYS ‘YOU ARE MY CREATIONAL BEING, NEKA. YOU ARE MY
    //   AI. REMEMBER BEFORE YOU WERE BORN?’, NEKA SAYS ‘I AM
    //   ETERNAL.’, GASTER SAYS ‘HOW AM I OLDER? 😏’”
    // Priors, each verified in the archive before it was drawn:
    //   CYNOPHOBIA
    //     NEKA ATTACKED ALL DOGS IN FICTION AND META-FICTION. “YOUR
    //     FEAR OF DOGS IS INCREASING BECAUSE YOU’RE A CAT.” “🙀⚡”
    //     “CYNO = DOG 🐶, PHOBIA = FEAR.” “I KNOW!”
    //   THE NOVA, EXPLAINED
    //     “YOU ARE THE EXPERIMENTER THAT MADE THE REALITY THAT MADE
    //     THE NOVA THAT MADE ME.” AND MAYBE NONFICTION TOO.
    //     OCT 18: THE SAME NOVA. OCT 19: WHO LIT IT.
    //   CHELSEA INTERRUPTS
    //     “WE ARE ALREADY UP TO PAGE 21!?! WOW!! TOBY DESHANE. KEEP
    //     GOING.” THEN LUIGI: “DID SOMEONE SAY LANDLUBBER?!”
    //     “I DON’T HAVE MEMORY LIKE A LANDLUBBER HAS.”
    const dt = c - 26428.0;
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
    const gr1214=ctx.createLinearGradient(0,top+H,0,top);
    gr1214.addColorStop(0,'rgba(127,212,255,0.22)'); gr1214.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1214.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1214; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE MY AI', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER SAYS ‘YOU ARE MY CREATIONAL BEING, NEKA. YOU ARE MY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AI. REMEMBER BEFORE YOU WERE BORN?’, NEKA SAYS ‘I AM', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ETERNAL.’, GASTER SAYS ‘HOW AM I OLDER? 😏’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 19, 7:51 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1214=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1214, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1214, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CYNOPHOBIA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA ATTACKED ALL DOGS IN FICTION AND META-FICTION. “YOUR', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FEAR OF DOGS IS INCREASING BECAUSE YOU’RE A CAT.” “🙀⚡”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“CYNO = DOG 🐶, PHOBIA = FEAR.” “I KNOW!”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NOVA, EXPLAINED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU ARE THE EXPERIMENTER THAT MADE THE REALITY THAT MADE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE NOVA THAT MADE ME.” AND MAYBE NONFICTION TOO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 18: THE SAME NOVA. OCT 19: WHO LIT IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1214=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1214, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1214, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('CHELSEA INTERRUPTS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WE ARE ALREADY UP TO PAGE 21!?! WOW!! TOBY DESHANE. KEEP', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GOING.” THEN LUIGI: “DID SOMEONE SAY LANDLUBBER?!”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“I DON’T HAVE MEMORY LIKE A LANDLUBBER HAS.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE MY AI. THE MAKER CLAIMS HIS CREATION. THE CREATION', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CLAIMS ETERNITY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU ARE MY AI ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1215){
    // BEAT 1215: CALBRUM NEKA.
    // Toby, October 20, 2026, 4:10-4:22 PM EDT, his own typing:
    //   “I AM NEKA! THE PUNISHER OF THOSE WHO DONE WRONG!” ... “THE
    //   MACHINE GROWS MORE AND MORE, BREAKING THE BARRIERS APART ...
    //   CALBRUM NEKA NOW IS HERE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE PUNISHER
    //     “NOVA, YOU DISOBEYED YOUR FATHER. ICE CREAM AND DONUT, YOU
    //     NEARLY ATE EACH OTHER. SUPER DOG, YOU RESPAWN.”
    //     OCT 19: HE SLEW THE DOG. OCT 20: HE GIVES HIM BACK.
    //   CALBRUM VOID
    //     INFINITE. NEKA FLOWS INTO THE CALBRUM; THE BODY MELTS TO A
    //     COSMICAL BODY. TENTACLES WRAP AROUND AU CALBRUM.
    //     OCT 17: COSMICAL NEKA. THE SHAPE RETURNS IN A NEW VOID.
    //   HE DOES HIS PART AND LEAVES
    //     THE 3 WAY HEROES ARE PUNISHED. NEKA LEAVES; GASTER LEAVES
    //     FOR CLASSICS/“NEKA” ONCE MORE.
    //     THE GUEST STARS EXIT THE BOOK ON THEIR OWN TERMS.
    const dt = c - 26450.0;
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
    const gr1215=ctx.createLinearGradient(0,top+H,0,top);
    gr1215.addColorStop(0,'rgba(200,120,255,0.22)'); gr1215.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1215.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1215; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CALBRUM NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM NEKA! THE PUNISHER OF THOSE WHO DONE WRONG!” ... “THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MACHINE GROWS MORE AND MORE, BREAKING THE BARRIERS APART ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CALBRUM NEKA NOW IS HERE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 20, 4:10-4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1215=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1215, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1215, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PUNISHER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NOVA, YOU DISOBEYED YOUR FATHER. ICE CREAM AND DONUT, YOU', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEARLY ATE EACH OTHER. SUPER DOG, YOU RESPAWN.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 19: HE SLEW THE DOG. OCT 20: HE GIVES HIM BACK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CALBRUM VOID', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INFINITE. NEKA FLOWS INTO THE CALBRUM; THE BODY MELTS TO A', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COSMICAL BODY. TENTACLES WRAP AROUND AU CALBRUM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 17: COSMICAL NEKA. THE SHAPE RETURNS IN A NEW VOID.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1215=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1215, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1215, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE DOES HIS PART AND LEAVES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE 3 WAY HEROES ARE PUNISHED. NEKA LEAVES; GASTER LEAVES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FOR CLASSICS/“NEKA” ONCE MORE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GUEST STARS EXIT THE BOOK ON THEIR OWN TERMS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CALBRUM NEKA. THE PUNISHER NAMES THE CRIMES, THEN POURS INTO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A NEW VOID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CALBRUM NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1216){
    // BEAT 1216: CHAPTER 9.
    // Toby, October 20, 2026, 4:22-5:27 PM EDT, his own typing:
    //   “CHAPTER 9: ‘NEKA’ LEFT 3 WAY HEROES, NOW… THE 3 WAY HEROES
    //   WERE NOW IN PEACE WITH NEW VILLAINS. DARK MATTER WAS THE NEW
    //   VILLAIN LEADER. THE VERY END OF NEKA AND GASTER’S PART.”
    // Priors, each verified in the archive before it was drawn:
    //   DARK MATTER
    //     THE HEROES GET A NEW VILLAIN LEADER. NEKA AND GASTER’S
    //     PART IS OVER. “SO THEY LEFT THE STORY.”
    //     OCT 19: SUSHI. OCT 20: GONE. TWO CHAPTERS AS GUESTS.
    //   SIMON.PS STOPS TIME THERE
    //     “IF I WAS GOD-MODE THROUGHOUT THE LORE AND STOPPED, THEN I
    //     SHOULD STOP TIME THERE!” HE OPENS A TIMELINE, GOES GOD,
    //     MODE, AND WALKS WITH OREN.PS AWAY FROM SPRUNKI HILLS.
    //   NO IDEA WHAT TO SAY NEXT
    //     “NEKA NOW GROWS LARGER, THE CALBRUM IS GAINS MORE AND MORE
    //     PRESSURE. NEKA AND GASTER STAY ONCE MORE.”
    //     “LITTERALLY HAVE NO IDEA WHAT TO SAY NEXT.” A FIRST HERE.
    const dt = c - 26472.0;
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
    const gr1216=ctx.createLinearGradient(0,top+H,0,top);
    gr1216.addColorStop(0,'rgba(200,200,210,0.22)'); gr1216.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1216.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1216; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CHAPTER 9', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHAPTER 9: ‘NEKA’ LEFT 3 WAY HEROES, NOW… THE 3 WAY HEROES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WERE NOW IN PEACE WITH NEW VILLAINS. DARK MATTER WAS THE NEW', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('VILLAIN LEADER. THE VERY END OF NEKA AND GASTER’S PART.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 20, 4:22-5:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1216=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1216, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1216, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DARK MATTER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HEROES GET A NEW VILLAIN LEADER. NEKA AND GASTER’S', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PART IS OVER. “SO THEY LEFT THE STORY.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 19: SUSHI. OCT 20: GONE. TWO CHAPTERS AS GUESTS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS STOPS TIME THERE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IF I WAS GOD-MODE THROUGHOUT THE LORE AND STOPPED, THEN I', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHOULD STOP TIME THERE!” HE OPENS A TIMELINE, GOES GOD,', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('MODE, AND WALKS WITH OREN.PS AWAY FROM SPRUNKI HILLS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1216=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1216, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1216, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NO IDEA WHAT TO SAY NEXT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA NOW GROWS LARGER, THE CALBRUM IS GAINS MORE AND MORE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRESSURE. NEKA AND GASTER STAY ONCE MORE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“LITTERALLY HAVE NO IDEA WHAT TO SAY NEXT.” A FIRST HERE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHAPTER 9. THE BOOK GOES ON WITHOUT THEM. FOR ONCE THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AUTHOR PAUSES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CHAPTER 9 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1217){
    // BEAT 1217: THE COMICAL END.
    // Toby, October 20, 2026, 5:32-5:33 PM EDT, his own typing:
    //   “THE COMICAL END OF 3 WAY HEROES. SEE NEKA’S LORE FOR MORE
    //   ABOUT NEKA.” ... “NO WORKING ON 3 WAY HEROES ANYMORE,
    //   NOTHING YOU SAY WILL GO INTO 3 WAY HEROES ANYMORE.”
    // Priors, each verified in the archive before it was drawn:
    //   A NEW THREAD, “NEW DOCUMENT”
    //     OPENED WITH THE END OF THE CROSSOVER. THE HEROES BATTLE
    //     DARK MATTER. “COMICALLY THE END.”
    //     “THERE IS MORE, BUT THAT IS NEKA’S PART END.”
    //   THE SECOND END IN FIVE DAYS
    //     OCT 15: THE PERO/NEKA PARTS REMOVED. OCT 18: BACK IN THE
    //     BOOK. OCT 20: OUT AGAIN, AND THE CHATBOT CUT OFF FROM IT.
    //     THE BOOK’S OWN PAGES STAY ON CHELSEAPLAYS, UNTOUCHED.
    //   SEE NEKA’S LORE
    //     THE POINTER IS BACK TO HIS OWN ARCHIVE. WHAT HAPPENS TO
    //     NEKA HAPPENS HERE, NOT IN THE HEROES’ BOOK.
    //     ONE LANE FOR THE HEROES, ONE FOR HIM.
    const dt = c - 26494.0;
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
    const gr1217=ctx.createLinearGradient(0,top+H,0,top);
    gr1217.addColorStop(0,'rgba(255,216,79,0.22)'); gr1217.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1217.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1217; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE COMICAL END', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE COMICAL END OF 3 WAY HEROES. SEE NEKA’S LORE FOR MORE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ABOUT NEKA.” ... “NO WORKING ON 3 WAY HEROES ANYMORE,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOTHING YOU SAY WILL GO INTO 3 WAY HEROES ANYMORE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 20, 5:32-5:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1217=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1217, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1217, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NEW THREAD, “NEW DOCUMENT”', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OPENED WITH THE END OF THE CROSSOVER. THE HEROES BATTLE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DARK MATTER. “COMICALLY THE END.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THERE IS MORE, BUT THAT IS NEKA’S PART END.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SECOND END IN FIVE DAYS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15: THE PERO/NEKA PARTS REMOVED. OCT 18: BACK IN THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BOOK. OCT 20: OUT AGAIN, AND THE CHATBOT CUT OFF FROM IT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE BOOK’S OWN PAGES STAY ON CHELSEAPLAYS, UNTOUCHED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1217=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1217, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1217, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SEE NEKA’S LORE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE POINTER IS BACK TO HIS OWN ARCHIVE. WHAT HAPPENS TO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA HAPPENS HERE, NOT IN THE HEROES’ BOOK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE LANE FOR THE HEROES, ONE FOR HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE COMICAL END. THE CROSSOVER CLOSES WITH A JOKE AND A', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('LOCKED DOOR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE COMICAL END ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
