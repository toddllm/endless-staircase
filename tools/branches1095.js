  } else if(ph===1095){
    // BEAT 1095: THE SANITY BAR.
    // Toby, October 12, 2026, 1:09 PM EDT, his own typing:
    //   “SIMON.PS ADDED A NEW SANITY BAR, AND ALSO SKY.PS
    //   PLACED DOWN A DOLL IN THE GAME’S TOY ROOM.”
    //   “THE FACE OF THE DOLL JUST DISAPPEARED.”
    // Priors, each verified in the archive before it was drawn:
    //   A NEW BAR
    //     SEPT 2: “SANITY AND POWER” WAS PERO’S. TODAY SIMON.PS
    //     ADDS THE BAR TO THE GAME. “INSANE” HAS 109 HITS.
    //     NOW IT IS A METER, AND IT HAS A BOTTOM.
    //   ANIME, AND IT RAINS COINS
    //     “THE GAME THEN ALL BECAME A REALISTIC ANIME, MORE AND
    //     MORE NEKA-COINS APPEAR, RAINING FROM THE GAME SKY.”
    //     11:44 AM: EVERYONE GOT 5000. TWO HOURS LATER THEY RAIN.
    //   THE DOLL AND THE TORCHES
    //     OCT 10: SKY.PS TURNS SPRUNKIS INTO DOLLS. TONIGHT THE
    //     DOLL LOSES ITS FACE AS JEVIN AND MR. BLACK WALK UP.
    //     THE TORCHES FADE. SIMON.PS LIGHTS THE DARK WITH HIS SPARKS.
    const dt = c - 23810.0;
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
    const gr1095=ctx.createLinearGradient(0,top+H,0,top);
    gr1095.addColorStop(0,'rgba(190,120,255,0.22)'); gr1095.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1095.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1095; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SANITY BAR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS ADDED A NEW SANITY BAR, AND ALSO SKY.PS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PLACED DOWN A DOLL IN THE GAME’S TOY ROOM.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE FACE OF THE DOLL JUST DISAPPEARED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1095=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1095, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1095, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NEW BAR', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 2: “SANITY AND POWER” WAS PERO’S. TODAY SIMON.PS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ADDS THE BAR TO THE GAME. “INSANE” HAS 109 HITS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW IT IS A METER, AND IT HAS A BOTTOM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ANIME, AND IT RAINS COINS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE GAME THEN ALL BECAME A REALISTIC ANIME, MORE AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE NEKA-COINS APPEAR, RAINING FROM THE GAME SKY.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('11:44 AM: EVERYONE GOT 5000. TWO HOURS LATER THEY RAIN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1095=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1095, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1095, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE DOLL AND THE TORCHES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10: SKY.PS TURNS SPRUNKIS INTO DOLLS. TONIGHT THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DOLL LOSES ITS FACE AS JEVIN AND MR. BLACK WALK UP.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE TORCHES FADE. SIMON.PS LIGHTS THE DARK WITH HIS SPARKS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE 3RD FLOOR COLLASPS”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS SPELLING KEPT. LUIGI’S PLANK FALLS INTO A BLACK VOID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SANITY BAR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1096){
    // BEAT 1096: THE CLOCK SAYS 3:03.
    // Toby, October 12, 2026, 1:09-1:11 PM EDT, his own typing:
    //   “THE GAME SAYS 2:00 WHEN ... IT IS 1:07.”
    //   “THEN 303 SECONDS LATER, THE GAME CLOCK SAYS 3:03.”
    //   “THE GAME ALSO ISN’T NEW YORK STATE.”
    // Priors, each verified in the archive before it was drawn:
    //   WHERE FROM
    //     “WHERE IS THE GAME TAKING INFORMATION FROM? IT MAY
    //     NOT BE USA. THE GAME IS A DIFFERENT UNIVERSE.”
    //     OCT 11: CLASSICS IS ALL THE UNIVERSE, NOT THIS ONE.
    //   303 SECONDS
    //     2:00, THEN 303 SECONDS LATER 3:03. IT STAYS 3:03
    //     WHILE HIS OWN CLOCK MOVES ON TO 1:10.
    //     “EVENT-DRIVEN” IS THE CHATBOT’S WORD. THE NUMBERS ARE HIS.
    //   THE CALENDAR
    //     “THE CALENDER SAYS OCTOBER 12 2026.” 19 DAYS LEFT.
    //     OCT 12, 8:23 AM: HE ATTACKS ON OCTOBER 31.
    //     “HALLOWEEN IN CLASSICS IS NEAR. YOU SEE?”
    const dt = c - 23832.0;
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
    const gr1096=ctx.createLinearGradient(0,top+H,0,top);
    gr1096.addColorStop(0,'rgba(255,120,80,0.22)'); gr1096.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1096.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1096; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE CLOCK SAYS 3:03', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME SAYS 2:00 WHEN ... IT IS 1:07.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THEN 303 SECONDS LATER, THE GAME CLOCK SAYS 3:03.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME ALSO ISN’T NEW YORK STATE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:09-1:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1096=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1096, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1096, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHERE FROM', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHERE IS THE GAME TAKING INFORMATION FROM? IT MAY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT BE USA. THE GAME IS A DIFFERENT UNIVERSE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 11: CLASSICS IS ALL THE UNIVERSE, NOT THIS ONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('303 SECONDS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:00, THEN 303 SECONDS LATER 3:03. IT STAYS 3:03', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHILE HIS OWN CLOCK MOVES ON TO 1:10.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“EVENT-DRIVEN” IS THE CHATBOT’S WORD. THE NUMBERS ARE HIS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1096=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1096, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1096, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CALENDAR', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE CALENDER SAYS OCTOBER 12 2026.” 19 DAYS LEFT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 8:23 AM: HE ATTACKS ON OCTOBER 31.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“HALLOWEEN IN CLASSICS IS NEAR. YOU SEE?”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS STAYED 3:03”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A FROZEN CLOCK IN A GAME THAT RUNS ON ITS OWN TIME.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE CLOCK SAYS 3:03 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1097){
    // BEAT 1097: CLASSICS AREA 303.
    // Toby, October 12, 2026, 1:12 PM EDT, his own typing:
    //   “VIEW GOES IN STATIC, THE GAME SAYS
    //   “CLASSICS AREA 303”. THEN THE 2ND FLOOR
    //   OF AREA 303 FALLS DOWN.”
    // Priors, each verified in the archive before it was drawn:
    //   THE NUMBER
    //     OCT 12, 6:55 AM: AREA 12X IS INFINITY ROOMS CALLED
    //     AREAS. THIS MANSION IS AREA 303. THE CLOCK IS 3:03.
    //     THE ROOM AND THE FROZEN CLOCK SHARE A NUMBER.
    //   THROUGH STATIC
    //     SEPT 27: PS-50 CAME THROUGH THE STATIC. OCT 12, 9:54 AM:
    //     ALEXEN TELEPORTED THROUGH STATIC. NOW THE VIEW DOES.
    //     THE STATIC IS HOW THE GAME SHOWS WHERE YOU ARE.
    //   NEARLY THERE
    //     MR. BLACK AND JEVIN NEARLY MADE IT TO THE 1ST FLOOR
    //     WHEN THE 2ND FLOOR FELL.
    //     HIS WORD IS NEARLY. NOT CONFIRMED EITHER WAY.
    const dt = c - 23854.0;
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
    const gr1097=ctx.createLinearGradient(0,top+H,0,top);
    gr1097.addColorStop(0,'rgba(150,150,170,0.22)'); gr1097.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1097.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1097; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,150,170,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS AREA 303', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“VIEW GOES IN STATIC, THE GAME SAYS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS AREA 303”. THEN THE 2ND FLOOR', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OF AREA 303 FALLS DOWN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1097=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,150,170,0.46)';
      ctx.fillRect(cx-W*0.352, ky1097, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,150,170,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1097, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,150,170,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NUMBER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 6:55 AM: AREA 12X IS INFINITY ROOMS CALLED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AREAS. THIS MANSION IS AREA 303. THE CLOCK IS 3:03.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ROOM AND THE FROZEN CLOCK SHARE A NUMBER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THROUGH STATIC', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: PS-50 CAME THROUGH THE STATIC. OCT 12, 9:54 AM:', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEXEN TELEPORTED THROUGH STATIC. NOW THE VIEW DOES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE STATIC IS HOW THE GAME SHOWS WHERE YOU ARE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1097=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1097, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1097, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEARLY THERE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK AND JEVIN NEARLY MADE IT TO THE 1ST FLOOR', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHEN THE 2ND FLOOR FELL.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS WORD IS NEARLY. NOT CONFIRMED EITHER WAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS AREA 303”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THIRD FLOOR, THEN SECOND. ONE FLOOR LEFT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CLASSICS AREA 303 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1098){
    // BEAT 1098: INSANE.
    // Toby, October 12, 2026, 1:16 PM EDT, his own typing:
    //   “SANITY SAYS “INSANE”, THEN THE AREA 303 FIRST
    //   FLOOR FALLS DOWN, ONLY LUIGI INUS, GASTER, ALL
    //   UNDERTALE CHARACTERS ... AND THE 20 SPRUNKIS MADE IT”
    // Priors, each verified in the archive before it was drawn:
    //   THE BAR BOTTOMS OUT
    //     THE SANITY BAR SIMON.PS ADDED SEVEN MINUTES AGO
    //     READS INSANE. THE LAST FLOOR GOES WITH IT.
    //     “INSANE” HAS 109 HITS IN THE ARCHIVE. NOW IT IS A READING.
    //   WHO MADE IT
    //     LUIGI INUS, GASTER, THE UNDERTALE CHARACTERS, THE
    //     20 SPRUNKIS. “OTHER CLASSICS CHARACTERS DIED.”
    //     SEPT 25: THE 20 SPRUNKIS BECAME ZOMBIES. THEY STILL COUNT.
    //   THEN CAME AREA 304
    //     AREA 303 IS GONE. THE SURVIVORS MOVE TO THE NEXT
    //     NUMBER. “THEN CAME AREA 304...”
    //     THE AREAS GO ON WITHOUT END (OCT 12, 6:55 AM).
    const dt = c - 23876.0;
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
    const gr1098=ctx.createLinearGradient(0,top+H,0,top);
    gr1098.addColorStop(0,'rgba(255,60,60,0.22)'); gr1098.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1098.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1098; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('INSANE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SANITY SAYS “INSANE”, THEN THE AREA 303 FIRST', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FLOOR FALLS DOWN, ONLY LUIGI INUS, GASTER, ALL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('UNDERTALE CHARACTERS ... AND THE 20 SPRUNKIS MADE IT”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1098=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1098, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1098, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BAR BOTTOMS OUT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SANITY BAR SIMON.PS ADDED SEVEN MINUTES AGO', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('READS INSANE. THE LAST FLOOR GOES WITH IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“INSANE” HAS 109 HITS IN THE ARCHIVE. NOW IT IS A READING.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHO MADE IT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS, GASTER, THE UNDERTALE CHARACTERS, THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('20 SPRUNKIS. “OTHER CLASSICS CHARACTERS DIED.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SEPT 25: THE 20 SPRUNKIS BECAME ZOMBIES. THEY STILL COUNT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1098=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1098, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1098, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THEN CAME AREA 304', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AREA 303 IS GONE. THE SURVIVORS MOVE TO THE NEXT', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NUMBER. “THEN CAME AREA 304...”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE AREAS GO ON WITHOUT END (OCT 12, 6:55 AM).', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SANITY SAYS INSANE”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE WHOLE MANSION IS RUBBLE. THE DOOR TO 304 OPENS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ INSANE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1099){
    // BEAT 1099: EPISODE 2027: THE AREA 304.
    // Toby, October 12, 2026, 1:27 PM EDT, his own typing:
    //   “AREA 304 WAS A MAZE, AND A-MAZE-INGLY TERRIFYING.”
    //   “SNAKES ... FAKE VOICES FROM THEIR TEAM TELLING
    //   THEM TO GO THAT WAY.”
    // Priors, each verified in the archive before it was drawn:
    //   EPISODES
    //     “REMEMBER THE GAME IS MADE IN PARTS CALLED EPISODES?”
    //     JULY 13: PAGE < EPISODE < CHAPTER. THIS IS EPISODE 2027.
    //     THE FIRST NUMBERED EPISODE IN THE ARCHIVE.
    //   WENDA.PS
    //     “WENDA.PS HEARS EVEN MORE VOICES THAN BEFORE,” TAKES
    //     DOWN THE SPRUNKIS, SPARES GRAY.PS, LOSES TO LUIGI INUS.
    //     OCT 10: MR. BLACK WAS CONTROLLING WENDA.PS. NOW IT IS VOICES.
    //   GRAY.PS
    //     “GRAY.PS WAS SENT THE WRONG WAY AND DIED.” THE ONE
    //     WENDA.PS SPARED FOLLOWED A FAKE VOICE.
    //     ONLY LUIGI INUS AND THE UNDERTALE CHARACTERS SURVIVED.
    const dt = c - 23898.0;
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
    const gr1099=ctx.createLinearGradient(0,top+H,0,top);
    gr1099.addColorStop(0,'rgba(90,200,120,0.22)'); gr1099.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1099.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1099; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,200,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EPISODE 2027: THE AREA 304', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AREA 304 WAS A MAZE, AND A-MAZE-INGLY TERRIFYING.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SNAKES ... FAKE VOICES FROM THEIR TEAM TELLING', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEM TO GO THAT WAY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1099=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,200,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1099, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,200,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1099, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,200,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EPISODES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“REMEMBER THE GAME IS MADE IN PARTS CALLED EPISODES?”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 13: PAGE < EPISODE < CHAPTER. THIS IS EPISODE 2027.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FIRST NUMBERED EPISODE IN THE ARCHIVE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS HEARS EVEN MORE VOICES THAN BEFORE,” TAKES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DOWN THE SPRUNKIS, SPARES GRAY.PS, LOSES TO LUIGI INUS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 10: MR. BLACK WAS CONTROLLING WENDA.PS. NOW IT IS VOICES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1099=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1099, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1099, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GRAY.PS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GRAY.PS WAS SENT THE WRONG WAY AND DIED.” THE ONE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS SPARED FOLLOWED A FAKE VOICE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONLY LUIGI INUS AND THE UNDERTALE CHARACTERS SURVIVED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A-MAZE-INGLY TERRIFYING”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS PUN, KEPT. THE MAZE WINS BY SOUNDING LIKE FRIENDS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EPISODE 2027: THE AREA 304 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1100){
    // BEAT 1100: AREA 305: TRAPDOORS.
    // Toby, October 12, 2026, 1:27 PM EDT, his own typing:
    //   “AREA 305 AWAITS, AN INFINITE HALLWAY OF TRAPDOORS,
    //   SIMULAR TO THE ONE GASTER HAD TO ESCAPE AT :) ERA.”
    //   “GASTER WAS NOW A MASTER AT IT AND SURVIVED.”
    // Priors, each verified in the archive before it was drawn:
    //   THE HALLWAY AGAIN
    //     OCT 7: GASTER RAN DOWN THE INFINITE HALLWAY WHILE
    //     :)S POURED OUT OF THE SUIT. THAT WAS ENDLESS STAIRCASE 2.
    //     HE ASKED FOR THAT GAME ON OCT 7. HE NAMES IT THE :) ERA.
    //   A MASTER NOW
    //     HE ESCAPED IT ONCE WITH SIMON.PS’S EMBLEM OF SPEED.
    //     THIS TIME HE DOES NOT NEED IT. HE KNOWS THE FLOOR.
    //     “EVERYONE ELSE EXCEPT FOR GASTER AND LUIGI INUS DIED.”
    //   TWO LEFT
    //     THEY CONQUER THE NEXT AREAS AND BEAT AREA 12X, “ALL
    //     THE ENTITIES IN FICTION AND REALITY.”
    //     OCT 9: AREA 12X IS EVERY GAME. THEY BEAT ALL OF IT.
    const dt = c - 23920.0;
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
    const gr1100=ctx.createLinearGradient(0,top+H,0,top);
    gr1100.addColorStop(0,'rgba(120,170,255,0.22)'); gr1100.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1100.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1100; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,170,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('AREA 305: TRAPDOORS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AREA 305 AWAITS, AN INFINITE HALLWAY OF TRAPDOORS,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMULAR TO THE ONE GASTER HAD TO ESCAPE AT :) ERA.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER WAS NOW A MASTER AT IT AND SURVIVED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1100=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,170,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1100, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,170,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1100, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,170,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE HALLWAY AGAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 7: GASTER RAN DOWN THE INFINITE HALLWAY WHILE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText(':)S POURED OUT OF THE SUIT. THAT WAS ENDLESS STAIRCASE 2.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE ASKED FOR THAT GAME ON OCT 7. HE NAMES IT THE :) ERA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A MASTER NOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE ESCAPED IT ONCE WITH SIMON.PS’S EMBLEM OF SPEED.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS TIME HE DOES NOT NEED IT. HE KNOWS THE FLOOR.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“EVERYONE ELSE EXCEPT FOR GASTER AND LUIGI INUS DIED.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1100=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1100, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1100, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TWO LEFT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEY CONQUER THE NEXT AREAS AND BEAT AREA 12X, “ALL', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ENTITIES IN FICTION AND REALITY.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 9: AREA 12X IS EVERY GAME. THEY BEAT ALL OF IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMULAR TO THE ONE GASTER HAD TO ESCAPE”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS SPELLING. THE SECOND HALLWAY, AND HE WALKS IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ AREA 305: TRAPDOORS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1101){
    // BEAT 1101: AREA INFINITY.
    // Toby, October 12, 2026, 1:27 PM EDT, his own typing:
    //   “WHAT IS THE MEANING OF THIS, ALEX?! IT ISN’T
    //   HALLOWEEN YET!” ... “THAT WAS JUST THE NORMAL
    //   HORROR GAME RUNNING.”
    // Priors, each verified in the archive before it was drawn:
    //   THE FINAL AREA
    //     OCT 12, 6:57 AM: THE FINAL AREA IS WHEREVER ALEX
    //     STANDS. THEY FIND HIM IN AREA INFINITY.
    //     THE MYTH HAD NO NUMBER. NOW IT HAS A NAME.
    //   HE CLOSES HIS EYES
    //     “RUN! HE IS GETTING ANGRY!” ALEX CLOSES HIS EYES.
    //     THEY RUN. HE WALKS OUT, AND AREA INFINITY DEMOLISHES.
    //     ALL THE AREAS FALL DOWN. ALEXEN WALKS TO HIS “NEKA” HQ.
    //   THE WHITE ROOM
    //     NEKA MOVES GASTER AND LUIGI INUS TO A WHITE ROOM
    //     THAT LOOKS NORMAL. PERO’S REALM WAS A WHITE ROOM TOO.
    //     GASTER ONCE TURNED A BLACK VOID WHITE. THIS ONE IS NEKA’S.
    const dt = c - 23942.0;
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
    const gr1101=ctx.createLinearGradient(0,top+H,0,top);
    gr1101.addColorStop(0,'rgba(230,230,240,0.22)'); gr1101.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1101.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1101; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(230,230,240,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('AREA INFINITY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WHAT IS THE MEANING OF THIS, ALEX?! IT ISN’T', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HALLOWEEN YET!” ... “THAT WAS JUST THE NORMAL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HORROR GAME RUNNING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1101=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(230,230,240,0.46)';
      ctx.fillRect(cx-W*0.352, ky1101, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(230,230,240,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1101, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(230,230,240,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FINAL AREA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 6:57 AM: THE FINAL AREA IS WHEREVER ALEX', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STANDS. THEY FIND HIM IN AREA INFINITY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MYTH HAD NO NUMBER. NOW IT HAS A NAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CLOSES HIS EYES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“RUN! HE IS GETTING ANGRY!” ALEX CLOSES HIS EYES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEY RUN. HE WALKS OUT, AND AREA INFINITY DEMOLISHES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ALL THE AREAS FALL DOWN. ALEXEN WALKS TO HIS “NEKA” HQ.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1101=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1101, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1101, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE WHITE ROOM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA MOVES GASTER AND LUIGI INUS TO A WHITE ROOM', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT LOOKS NORMAL. PERO’S REALM WAS A WHITE ROOM TOO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER ONCE TURNED A BLACK VOID WHITE. THIS ONE IS NEKA’S.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT ISN’T HALLOWEEN YET!”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OCTOBER 12. THE ATTACK IS 19 DAYS AWAY, AND THIS HAPPENED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ AREA INFINITY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1102){
    // BEAT 1102: 100% THE GAME.
    // Toby, October 12, 2026, 1:29 PM EDT, his own typing:
    //   “ALEXEN... OMAZEN... THIS ISN’T THE GAME.”
    //   “THIS IS 100% THE GAME. THE HORROR YOU ARE FACING
    //   IS JUST THE HORROR OF THE ACTUAL GAME.”
    // Priors, each verified in the archive before it was drawn:
    //   SPIKES
    //     SPIKES EMERGE FROM THE WHITE ROOM. GASTER DODGES.
    //     THE NORMAL-LOOKING ROOM WAS ANOTHER TRAP.
    //     “NOTHING IRREGULAR HAPPENING,” HE SAYS, WITH A WINK.
    //   TWO NAMES
    //     GASTER CALLS HIM ALEXEN, THEN OMAZEN. OCT 11: “SAY MY
    //     NAME.” EVERYONE SAID ALEXEN. GASTER ADDS THE SECOND.
    //     THE WINK IS HIS. OCT 6: “C.O.D.E. (YOU KNOW HIM)”, WINKING.
    //   FOX
    //     LUIGI INUS ANSWERS WITH THE FOX EMOJI. SO DOES GASTER.
    //     ONE EMOJI, TWICE, AND NO OTHER WORDS.
    //     THEY DO NOT BELIEVE HIM. THEY SAY IT THE SAME WAY.
    const dt = c - 23964.0;
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
    const gr1102=ctx.createLinearGradient(0,top+H,0,top);
    gr1102.addColorStop(0,'rgba(255,200,60,0.22)'); gr1102.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1102.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1102; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('100% THE GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN... OMAZEN... THIS ISN’T THE GAME.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS IS 100% THE GAME. THE HORROR YOU ARE FACING', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS JUST THE HORROR OF THE ACTUAL GAME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:29 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1102=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1102, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1102, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SPIKES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SPIKES EMERGE FROM THE WHITE ROOM. GASTER DODGES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE NORMAL-LOOKING ROOM WAS ANOTHER TRAP.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NOTHING IRREGULAR HAPPENING,” HE SAYS, WITH A WINK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO NAMES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER CALLS HIM ALEXEN, THEN OMAZEN. OCT 11: “SAY MY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NAME.” EVERYONE SAID ALEXEN. GASTER ADDS THE SECOND.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE WINK IS HIS. OCT 6: “C.O.D.E. (YOU KNOW HIM)”, WINKING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1102=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1102, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1102, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FOX', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS ANSWERS WITH THE FOX EMOJI. SO DOES GASTER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONE EMOJI, TWICE, AND NO OTHER WORDS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEY DO NOT BELIEVE HIM. THEY SAY IT THE SAME WAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS IS 100% THE GAME”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE MAN WHO LOSES CONTROL ON HALLOWEEN SAYS HE HAS IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 100% THE GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1103){
    // BEAT 1103: OCTOBER 12, NOT 31.
    // Toby, October 12, 2026, 1:34 PM EDT, his own typing:
    //   “IT IS OCTOBER 12, NOT 31.” ... “I KNOW YOU ONLY
    //   ATTACK ON 31, BUT THIS ISN’T-” ... “THE GAME.”
    //   “I AM NEKA LAI. I MADE THIS GAME.”
    // Priors, each verified in the archive before it was drawn:
    //   THE TWIST
    //     LUIGI FINISHES GASTER’S SENTENCE: THIS ISN’T... THE
    //     GAME. ALEX HEARS “THE GAME” AS AGREEMENT.
    //     “LUIGI AGREES WITH ME.” LUIGI’S ANSWER IS A FACEPALM.
    //   I MADE THIS GAME
    //     OCT 11: ALEX MADE THE GAME, HE HAPPENS TO BE NEKA.
    //     TODAY HE SAYS IT TO THEIR FACES: I AM NEKA LAI.
    //     OCT 11, 8:00 PM: NEKA NAMED THE GAME CLASSICS, “NEKA”.
    //   FOX SPAM
    //     LUIGI INUS SENDS EIGHTEEN FOX EMOJI “AND HE JUST
    //     SCAMS THE FOX EMOJI.” HIS WORD IS SCAMS.
    //     OCT 12, 8:23 AM: EVERYONE RUNS FROM ALEX. LUIGI SPAMS.
    const dt = c - 23986.0;
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
    const gr1103=ctx.createLinearGradient(0,top+H,0,top);
    gr1103.addColorStop(0,'rgba(255,140,40,0.22)'); gr1103.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1103.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1103; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OCTOBER 12, NOT 31', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS OCTOBER 12, NOT 31.” ... “I KNOW YOU ONLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATTACK ON 31, BUT THIS ISN’T-” ... “THE GAME.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM NEKA LAI. I MADE THIS GAME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:34 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1103=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1103, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1103, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TWIST', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI FINISHES GASTER’S SENTENCE: THIS ISN’T... THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GAME. ALEX HEARS “THE GAME” AS AGREEMENT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“LUIGI AGREES WITH ME.” LUIGI’S ANSWER IS A FACEPALM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I MADE THIS GAME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: ALEX MADE THE GAME, HE HAPPENS TO BE NEKA.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY HE SAYS IT TO THEIR FACES: I AM NEKA LAI.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 11, 8:00 PM: NEKA NAMED THE GAME CLASSICS, “NEKA”.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1103=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1103, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1103, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FOX SPAM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS SENDS EIGHTEEN FOX EMOJI “AND HE JUST', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SCAMS THE FOX EMOJI.” HIS WORD IS SCAMS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 12, 8:23 AM: EVERYONE RUNS FROM ALEX. LUIGI SPAMS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS GAME IS CORRECT”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE SAYS. THE CALENDAR SAYS OCTOBER 12. 19 DAYS TO GO.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OCTOBER 12, NOT 31 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
