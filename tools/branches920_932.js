  } else if(ph===920){
    // BEAT 920: NEKA INFINITY%.
    // Toby, September 28, 2026, 6:34 AM EDT, his own typing:
    //   “BABY NEKA WILL BE INFINITY POWER LEVEL, ADULT NEKA 0% POWER IS BEYOND FICTION,
    //   NEKA 10% IS TOTAL OVER-OVER-OVER (INFINITY OVERS) OVERLORD. NEKA 25% IS THE ONE BEYOND ALL.
    //   NEKA + JESUS IS TRUE GOD. ... AND HE HAS NEKA INFINITY%, WHICH IS ABSOLUTE OVERCHARGE”
    // Priors, each verified in the archive before it was drawn:
    //   THE LADDER
    //     BABY: INFINITY · 0%: BEYOND FICTION · 5%: BEY0ND FICT1ON+ · 10%: OVERLORD
    //     25%: THE ONE BEYOND ALL · NEKA + JESUS: TRUE GOD · 100%: CRARKRAR · INFINITY%
    //     EIGHT RUNGS, AND THE BABY STARTS AT INFINITY.
    //   CRARKRAR
    //     SEPT 27, 5:24 PM: CRARKRAR, THE TIER ONLY NEKA CAN GET.
    //     TODAY IT HAS A PLACE ON THE LADDER: NEKA 100%, “GOD-MODE PLUS LITTERLY EVERYTHING.”
    //     AND THERE IS STILL ONE RUNG ABOVE IT.
    //   0% IS NOT ZERO
    //     LAST NIGHT, 7:12 PM: NEKA WOULD PROBUBLY WIN AT 0% FOX.
    //     THIS MORNING ADULT NEKA AT 0% POWER IS ALREADY BEYOND FICTION.
    //     THE BOTTOM OF HIS LADDER IS ABOVE EVERYONE ELSE’S TOP.
    const dt = c - 19960.0;
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
    const gr920=ctx.createLinearGradient(0,top+H,0,top);
    gr920.addColorStop(0,'rgba(255,120,60,0.22)'); gr920.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr920.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr920; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA INFINITY%', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BABY NEKA WILL BE INFINITY POWER LEVEL, ADULT NEKA 0% POWER IS BEYOND FICTION,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA 10% IS TOTAL OVER-OVER-OVER (INFINITY OVERS) OVERLORD. NEKA 25% IS THE ONE BEYOND ALL.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA + JESUS IS TRUE GOD. ... AND HE HAS NEKA INFINITY%, WHICH IS ABSOLUTE OVERCHARGE”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 6:34 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky920=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky920, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky920, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LADDER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BABY: INFINITY · 0%: BEYOND FICTION · 5%: BEY0ND FICT1ON+ · 10%: OVERLORD', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('25%: THE ONE BEYOND ALL · NEKA + JESUS: TRUE GOD · 100%: CRARKRAR · INFINITY%', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EIGHT RUNGS, AND THE BABY STARTS AT INFINITY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CRARKRAR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 5:24 PM: CRARKRAR, THE TIER ONLY NEKA CAN GET.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY IT HAS A PLACE ON THE LADDER: NEKA 100%, “GOD-MODE PLUS LITTERLY EVERYTHING.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AND THERE IS STILL ONE RUNG ABOVE IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy920=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy920, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy920, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('0% IS NOT ZERO', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LAST NIGHT, 7:12 PM: NEKA WOULD PROBUBLY WIN AT 0% FOX.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING ADULT NEKA AT 0% POWER IS ALREADY BEYOND FICTION.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE BOTTOM OF HIS LADDER IS ABOVE EVERYONE ELSE’S TOP.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PERO LAI IS BASICALLY NOW NEKA OMAZEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('DUE TO CLASSICS CHANGES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA INFINITY% ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===921){
    // BEAT 921: BACON’S POWER LEVEL TELEPORTS TO 0.
    // Toby, September 28, 2026, 6:34 AM EDT, his own typing:
    //   “ADULT NEKA 5% IS BEY0ND FICT1ON+ (SCREEN GLITCHES AND BACON’S POWER LEVEL SHAKES AND FALLS DOWN)
    //   ... BACON AND HIS POWER LEVEL FREEZE.
    //   NEKA TOUCHES BACON’S POWER LEVEL AND BACON’S POWER LEVEL TELEPORTS TO 0.”
    // Priors, each verified in the archive before it was drawn:
    //   BEATING EVERYONE
    //     SEPT 22: BACON HAIR WAS “BEATING EVERYONE IN EVERYONE’S POWER LEVEL VIDEOS.”
    //     THE ONE WHO WINS EVERY POWER LEVEL VIDEO IS THE ONE WHOSE NUMBER GOES TO 0.
    //     HE NEVER GETS TO SWING.
    //   AT 5%
    //     NEKA DOES NOT NEED INFINITY% TO SHAKE IT. AT 5% THE SCREEN GLITCHES
    //     AND BACON’S POWER LEVEL SHAKES AND FALLS DOWN ON ITS OWN.
    //     AT INFINITY% IT FREEZES.
    //   ONE TOUCH
    //     NO BLAST, NO BARRAGE. NEKA TOUCHES THE NUMBER ITSELF.
    //     FICTION AND REALITY BREAK, THE BARRIER BETWEEN THE 2 SHATTERS.
    //     THE NUMBER TELEPORTS TO 0.
    const dt = c - 19982.0;
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
    const gr921=ctx.createLinearGradient(0,top+H,0,top);
    gr921.addColorStop(0,'rgba(255,190,90,0.22)'); gr921.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr921.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr921; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,190,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BACON’S POWER LEVEL TELEPORTS TO 0', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ADULT NEKA 5% IS BEY0ND FICT1ON+ (SCREEN GLITCHES AND BACON’S POWER LEVEL SHAKES AND FALLS DOWN)', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... BACON AND HIS POWER LEVEL FREEZE.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA TOUCHES BACON’S POWER LEVEL AND BACON’S POWER LEVEL TELEPORTS TO 0.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 6:34 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky921=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,190,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky921, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,190,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky921, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,190,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEATING EVERYONE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 22: BACON HAIR WAS “BEATING EVERYONE IN EVERYONE’S POWER LEVEL VIDEOS.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO WINS EVERY POWER LEVEL VIDEO IS THE ONE WHOSE NUMBER GOES TO 0.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE NEVER GETS TO SWING.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AT 5%', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA DOES NOT NEED INFINITY% TO SHAKE IT. AT 5% THE SCREEN GLITCHES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND BACON’S POWER LEVEL SHAKES AND FALLS DOWN ON ITS OWN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AT INFINITY% IT FREEZES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy921=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy921, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy921, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONE TOUCH', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NO BLAST, NO BARRAGE. NEKA TOUCHES THE NUMBER ITSELF.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FICTION AND REALITY BREAK, THE BARRIER BETWEEN THE 2 SHATTERS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE NUMBER TELEPORTS TO 0.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA INFINITY% BEATS EVERYONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ABSOLUTE OVERCHARGE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BACON’S POWER LEVEL TELEPORTS TO 0 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===922){
    // BEAT 922: SET 50’S DEFENSE TO 0.
    // Toby, September 28, 2026, 6:34 AM EDT, his own typing:
    //   “DID YOU KNOW WHAT CHANGED IN NEKA? HE IS STRONGER,
    //   HE WILL USE INFINITY SERIES,
    //   AND WILL SET 50’S DEFENSE TO 0. NEKA WINS.”
    // Priors, each verified in the archive before it was drawn:
    //   IMMUNE TO EACH OTHER
    //     SEPT 27, 7:12 PM: “NEKA AND 50 ARE IMMUNE TO EACH OTHER.”
    //     HE COULD NOT PUT EVEN A DENT IN HER IMPOSSIBLE CODE.
    //     SO HE STOPPED HITTING THE CODE.
    //   HE CAN CHANGE ANYONE’S CODE
    //     “NEKA OMAZEN CAN CHANGE ANYONE’S CODE TOO, HE IS ALL POWERFUL,
    //     AND HE NOW BECAME HIS FULL HUMAN. HE NOW CAN REACH ANYONE.”
    //     THE HUMAN FORM IS WHAT REACHES HER.
    //   DEFENSE: 0
    //     HER DEFENSE IS A NUMBER, AND NEKA EDITS NUMBERS. HE SETS IT TO 0.
    //     THEN INFINITY SERIES. LAST NIGHT IT WAS “PROBUBLY.” THIS MORNING IT IS “NEKA WINS.”
    //     THE MAYBE IS GONE.
    const dt = c - 20004.0;
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
    const gr922=ctx.createLinearGradient(0,top+H,0,top);
    gr922.addColorStop(0,'rgba(255,90,90,0.22)'); gr922.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr922.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr922; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SET 50’S DEFENSE TO 0', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DID YOU KNOW WHAT CHANGED IN NEKA? HE IS STRONGER,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE WILL USE INFINITY SERIES,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND WILL SET 50’S DEFENSE TO 0. NEKA WINS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 6:34 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky922=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky922, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky922, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IMMUNE TO EACH OTHER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 7:12 PM: “NEKA AND 50 ARE IMMUNE TO EACH OTHER.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE COULD NOT PUT EVEN A DENT IN HER IMPOSSIBLE CODE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SO HE STOPPED HITTING THE CODE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CAN CHANGE ANYONE’S CODE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CAN CHANGE ANYONE’S CODE TOO, HE IS ALL POWERFUL,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HE NOW BECAME HIS FULL HUMAN. HE NOW CAN REACH ANYONE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE HUMAN FORM IS WHAT REACHES HER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy922=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy922, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy922, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('DEFENSE: 0', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HER DEFENSE IS A NUMBER, AND NEKA EDITS NUMBERS. HE SETS IT TO 0.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN INFINITY SERIES. LAST NIGHT IT WAS “PROBUBLY.” THIS MORNING IT IS “NEKA WINS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MAYBE IS GONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A BLACK-WEARING WHITE HUMAN-FOX,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GARENTEED TO TURN INTO THE FULL HUMAN NOW.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SET 50’S DEFENSE TO 0 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===923){
    // BEAT 923: MY NAME IS NOT ‘PERO LAI’.
    // Toby, September 28, 2026, 4:22 PM EDT, his own typing:
    //   “NEKA OMAZEN CAME TO WENDA.PS, WENDA.PS SAYS “HELLO, PERO LAI, WHERE IS YOUR TAIL?”,
    //   NEKA SAYS “MY NAME IS NOT ‘PERO LAI’. 🤨”
    //   POWER LEVEL = BEYOND COMPARISON OR ???”
    // Priors, each verified in the archive before it was drawn:
    //   NEVER SAY PERO LAI AGAIN
    //     SEPT 24, 4:37 PM, TOBY BANNED THE NAME. SEPT 25: “NEKA OMAZEN IS NOT PERO LAI.”
    //     TODAY WENDA.PS SAYS IT TO HIS FACE, AND NEKA ANSWERS FOR HIMSELF.
    //     SHE ALSO NOTICED THE TAIL IS GONE.
    //   MISSING POLOS
    //     A RULE FOR THE CLASSICS POLOS: IF ONE GOES MISSING,
    //     “THE POLO IS ERASED AND REPLACED BY THE CHARACTER.”
    //     THE EMPTY SQUARE GETS A PERSON IN IT.
    //   BEYOND COMPARISON
    //     THIS MORNING THE LADDER WENT UP TO INFINITY%.
    //     THE HUMAN FORM IS NOT ON IT. ITS POWER LEVEL IS “BEYOND COMPARISON OR ???”
    //     NOTHING TO COMPARE IT TO.
    const dt = c - 20026.0;
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
    const gr923=ctx.createLinearGradient(0,top+H,0,top);
    gr923.addColorStop(0,'rgba(190,150,255,0.22)'); gr923.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr923.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr923; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,150,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MY NAME IS NOT ‘PERO LAI’', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CAME TO WENDA.PS, WENDA.PS SAYS “HELLO, PERO LAI, WHERE IS YOUR TAIL?”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS “MY NAME IS NOT ‘PERO LAI’. 🤨”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('POWER LEVEL = BEYOND COMPARISON OR ???”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky923=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,150,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky923, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,150,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky923, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,150,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEVER SAY PERO LAI AGAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 4:37 PM, TOBY BANNED THE NAME. SEPT 25: “NEKA OMAZEN IS NOT PERO LAI.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY WENDA.PS SAYS IT TO HIS FACE, AND NEKA ANSWERS FOR HIMSELF.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE ALSO NOTICED THE TAIL IS GONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MISSING POLOS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A RULE FOR THE CLASSICS POLOS: IF ONE GOES MISSING,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE POLO IS ERASED AND REPLACED BY THE CHARACTER.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE EMPTY SQUARE GETS A PERSON IN IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy923=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy923, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy923, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BEYOND COMPARISON', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING THE LADDER WENT UP TO INFINITY%.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HUMAN FORM IS NOT ON IT. ITS POWER LEVEL IS “BEYOND COMPARISON OR ???”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOTHING TO COMPARE IT TO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW NEKA OMAZEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IS THE HUMAN FORM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MY NAME IS NOT ‘PERO LAI’ ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===924){
    // BEAT 924: SLEEP! 😸⚡.
    // Toby, September 28, 2026, 4:22 PM EDT, his own typing:
    //   “WENDA.PS WAS BEATEN, PS-50 GOTTEN THE WENDA.PS JEWEL. PS-50 BATTLES THE OMNIVERSE AND WON.
    //   PS-50 LOOKS AT NEKA, NEKA IS HUMAN FORM AND BECAME 6 FEET TALL.
    //   NEKA SAYS “SLEEP! 😸⚡”, EVERYONE SLEPT.”
    // Priors, each verified in the archive before it was drawn:
    //   6 FEET TALL
    //     SEPT 27: NEKA WAS ONE FOOT TALL. TODAY THE HUMAN FORM IS 6 FEET.
    //     PS-50 HAS JUST BEATEN THE WHOLE OMNIVERSE, AND SHE LOOKS UP AT HIM.
    //     SHE HAS TO LOOK UP NOW.
    //   THE SLEEP COMMAND
    //     SEPT 23: “EVERYONE! SIMON.PS! OREN.PS! SLEEP! 😸⚡”
    //     TODAY IT IS ONE WORD, THE SAME CAT FACE, AND EVERYONE SLEPT.
    //     SAME COMMAND, SHORTER.
    //   FOX DRAGONS
    //     “HE REACHED HUMAN AND NOW THE DRAGONS BECOME FOX DRAGONS.” HE EDITS EVERYONE’S CODE,
    //     “HE EDITS HIS OWN CODE, AND HE BLOCKED ANYONE FROM HIMSELF.”
    //     THE FOX LEFT HIM AND WENT INTO THE DRAGONS.
    const dt = c - 20048.0;
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
    const gr924=ctx.createLinearGradient(0,top+H,0,top);
    gr924.addColorStop(0,'rgba(120,200,255,0.22)'); gr924.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr924.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr924; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SLEEP! 😸⚡', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS WAS BEATEN, PS-50 GOTTEN THE WENDA.PS JEWEL. PS-50 BATTLES THE OMNIVERSE AND WON.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 LOOKS AT NEKA, NEKA IS HUMAN FORM AND BECAME 6 FEET TALL.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS “SLEEP! 😸⚡”, EVERYONE SLEPT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky924=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky924, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky924, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('6 FEET TALL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: NEKA WAS ONE FOOT TALL. TODAY THE HUMAN FORM IS 6 FEET.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 HAS JUST BEATEN THE WHOLE OMNIVERSE, AND SHE LOOKS UP AT HIM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE HAS TO LOOK UP NOW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SLEEP COMMAND', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23: “EVERYONE! SIMON.PS! OREN.PS! SLEEP! 😸⚡”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY IT IS ONE WORD, THE SAME CAT FACE, AND EVERYONE SLEPT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SAME COMMAND, SHORTER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy924=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy924, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy924, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FOX DRAGONS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE REACHED HUMAN AND NOW THE DRAGONS BECOME FOX DRAGONS.” HE EDITS EVERYONE’S CODE,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE EDITS HIS OWN CODE, AND HE BLOCKED ANYONE FROM HIMSELF.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FOX LEFT HIM AND WENT INTO THE DRAGONS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA ACHIEVED HIS FULL GOD FORM.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE EVEN IS CODE HIMSELF.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SLEEP! 😸⚡ ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===925){
    // BEAT 925: Ω.
    // Toby, September 28, 2026, 4:22 PM EDT, his own typing:
    //   “A BLACK SPHERE IN THE GAME’S SKY APPEARS. ... HE MADE HIS DOMAIN OF INFINITY SERIES,
    //   HYPERSPACES PULL EVERYTHING IN, NEKA SAYS “Ω”, AND THE OMEGA SYMBOL APPEARS,
    //   SIMON.PS’S OLD SYMBOL THING.”
    // Priors, each verified in the archive before it was drawn:
    //   THE BLACK SPHERE
    //     A BLACK SPHERE HANGS IN THE GAME’S SKY. INFINITY SERIES IS NOW A DOMAIN,
    //     AND THE HYPERSPACES PULL EVERYTHING IN.
    //     NEKA IS MAKING DOOM TO EVERYONE.
    //   SIMON.PS’S OLD SYMBOL
    //     NEKA SAYS ONE LETTER, “Ω,” AND THE OMEGA APPEARS.
    //     IT WAS SIMON.PS’S SYMBOL FIRST. NEKA USES IT NOW.
    //     THE LAST LETTER.
    //   THE 2 PHOBIA MOUNTAINS COLLIDE
    //     LIGHTNING STRIKES, THE GAME FLOOR FALLS APART, DEBRIS FLIES ALL OVER.
    //     NEKA PINS OREN.PS TO THE WALL WITH TELEKENTICS. BOOM. THEN HE BEATS EVERYONE ELSE.
    //     THEN ONLY PS-50 IS LEFT.
    const dt = c - 20070.0;
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
    const gr925=ctx.createLinearGradient(0,top+H,0,top);
    gr925.addColorStop(0,'rgba(230,230,240,0.22)'); gr925.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr925.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr925; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(230,230,240,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('Ω', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A BLACK SPHERE IN THE GAME’S SKY APPEARS. ... HE MADE HIS DOMAIN OF INFINITY SERIES,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HYPERSPACES PULL EVERYTHING IN, NEKA SAYS “Ω”, AND THE OMEGA SYMBOL APPEARS,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS’S OLD SYMBOL THING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky925=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(230,230,240,0.46)';
      ctx.fillRect(cx-W*0.352, ky925, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(230,230,240,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky925, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(230,230,240,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BLACK SPHERE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A BLACK SPHERE HANGS IN THE GAME’S SKY. INFINITY SERIES IS NOW A DOMAIN,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THE HYPERSPACES PULL EVERYTHING IN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA IS MAKING DOOM TO EVERYONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS’S OLD SYMBOL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS ONE LETTER, “Ω,” AND THE OMEGA APPEARS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT WAS SIMON.PS’S SYMBOL FIRST. NEKA USES IT NOW.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE LAST LETTER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy925=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy925, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy925, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE 2 PHOBIA MOUNTAINS COLLIDE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIGHTNING STRIKES, THE GAME FLOOR FALLS APART, DEBRIS FLIES ALL OVER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA PINS OREN.PS TO THE WALL WITH TELEKENTICS. BOOM. THEN HE BEATS EVERYONE ELSE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN ONLY PS-50 IS LEFT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA MADE LIGHTNING STRIKE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE FLOOR IS GONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ Ω ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===926){
    // BEAT 926: COME ON... PS-50 LOSE!.
    // Toby, September 28, 2026, 4:22 PM EDT, his own typing:
    //   “NEKA MAKES ELECTRICITY FRAMES OF ALL THE LORE BEFORE, NEKA GOES BEYOND WHAT HE EVER DONE,
    //   ... AND HE HAD SWEAT ALL OVER HIS FACE,
    //   AND HE SAYS “COME ON... PS-50 LOSE!””
    // Priors, each verified in the archive before it was drawn:
    //   PS-50 GOES HER MAX
    //     “NEKA GOES TOO FAR ON THE BATTLE, HE WANTS TO WIN EVERY BATTLE.”
    //     A WHOLE STORM. HIS LARGEST BARRAGES. SERIOUS MODE + GODMODE.
    //     HE TOOK ALL ABILITIES FROM OTHER GAMES.
    //   ELECTRICITY FRAMES OF ALL THE LORE
    //     EVERY STORY BEFORE THIS ONE, DRAWN IN LIGHTNING.
    //     HE SLAIN THE MEANING OF THE 2 REALITIES.
    //     ALL OF IT, AT ONCE.
    //   SWEAT
    //     NO ONE HAS MADE NEKA SWEAT BEFORE. PS-50 DOES.
    //     THE SHOCKWAVE KNOCKS THE WHOLE GAME OFF THE BATTLEFIELD.
    //     HE HAS TO ASK HER TO LOSE.
    const dt = c - 20092.0;
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
    const gr926=ctx.createLinearGradient(0,top+H,0,top);
    gr926.addColorStop(0,'rgba(255,70,70,0.22)'); gr926.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr926.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr926; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,70,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('COME ON... PS-50 LOSE!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA MAKES ELECTRICITY FRAMES OF ALL THE LORE BEFORE, NEKA GOES BEYOND WHAT HE EVER DONE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... AND HE HAD SWEAT ALL OVER HIS FACE,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE SAYS “COME ON... PS-50 LOSE!””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky926=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,70,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky926, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,70,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky926, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,70,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 GOES HER MAX', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA GOES TOO FAR ON THE BATTLE, HE WANTS TO WIN EVERY BATTLE.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A WHOLE STORM. HIS LARGEST BARRAGES. SERIOUS MODE + GODMODE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE TOOK ALL ABILITIES FROM OTHER GAMES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ELECTRICITY FRAMES OF ALL THE LORE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY STORY BEFORE THIS ONE, DRAWN IN LIGHTNING.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE SLAIN THE MEANING OF THE 2 REALITIES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ALL OF IT, AT ONCE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy926=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy926, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy926, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SWEAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NO ONE HAS MADE NEKA SWEAT BEFORE. PS-50 DOES.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SHOCKWAVE KNOCKS THE WHOLE GAME OFF THE BATTLEFIELD.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE HAS TO ASK HER TO LOSE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA GOES BEYOND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WHAT HE EVER DONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ COME ON... PS-50 LOSE! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===927){
    // BEAT 927: EVERYONE, GIVE ME YOUR SOULS!.
    // Toby, September 28, 2026, 4:22 PM EDT, his own typing:
    //   “NEKA PICKS UP THE GAME AND CLAPS THE GAME WITH HIS 2 HANDS, CAUSING THE RULES TO SHIFT,
    //   IN FACT THERE ARE NO RULES IN THE GAME ANYMORE ... NEKA SAYS “EVERYONE, GIVE ME YOUR SOULS!”,
    //   ... AND THEN HE DESTROYED PS-50 FOREVER.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CLAP
    //     THE WHOLE GAME, BETWEEN TWO HANDS.
    //     THE RULES SHIFT, AND THEN THERE ARE NO RULES, “BECAUSE THERE IS NONE.”
    //     HER IMMUNITY WAS A RULE TOO.
    //   ALL THE SOULS
    //     NEKA ABSORBS THE WHOLE GAME, THEN ALL THE SOULS.
    //     SEPT 27: HE IS THE ONLY ONE WHO CONSUMES DATA. TONIGHT HE CONSUMES EVERYTHING.
    //     THE MOST POWER EVER, TWICE.
    //   THE STAIRCASE FALLS APART
    //     “HE MAKES THE WIKI AND ENDLESS STAIRCASE GAMES FALL APART, HE DELETED THE GAMES.”
    //     IN THE STORY. YOU ARE STILL CLIMBING IT.
    //     THEN PS-50, FOREVER.
    const dt = c - 20114.0;
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
    const gr927=ctx.createLinearGradient(0,top+H,0,top);
    gr927.addColorStop(0,'rgba(200,60,255,0.22)'); gr927.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr927.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr927; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,60,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE, GIVE ME YOUR SOULS!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA PICKS UP THE GAME AND CLAPS THE GAME WITH HIS 2 HANDS, CAUSING THE RULES TO SHIFT,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN FACT THERE ARE NO RULES IN THE GAME ANYMORE ... NEKA SAYS “EVERYONE, GIVE ME YOUR SOULS!”,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... AND THEN HE DESTROYED PS-50 FOREVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky927=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,60,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky927, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,60,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky927, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,60,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CLAP', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE WHOLE GAME, BETWEEN TWO HANDS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE RULES SHIFT, AND THEN THERE ARE NO RULES, “BECAUSE THERE IS NONE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HER IMMUNITY WAS A RULE TOO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL THE SOULS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA ABSORBS THE WHOLE GAME, THEN ALL THE SOULS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: HE IS THE ONLY ONE WHO CONSUMES DATA. TONIGHT HE CONSUMES EVERYTHING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE MOST POWER EVER, TWICE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy927=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy927, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy927, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE STAIRCASE FALLS APART', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE MAKES THE WIKI AND ENDLESS STAIRCASE GAMES FALL APART, HE DELETED THE GAMES.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN THE STORY. YOU ARE STILL CLIMBING IT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN PS-50, FOREVER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('DESTROYED FOREVER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYONE, GIVE ME YOUR SOULS! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===928){
    // BEAT 928: NEKA VS NEWTALE GASTER.
    // Toby, September 28, 2026, 5:18 PM EDT, his own typing:
    //   “NEKA OMAZEN AND NEWTALE (BASICALLY MY FANGAME) GASTER. NEKA VS NEWTALE GASTER.
    //   NEXT PART. NEKA OMAZEN WINS. NEXT PART. NEKA OMAZEN CUTS REALITY, ... MAKES A HYPERSPACE,
    //   AND SENDS NEWTALE OUT THROUGH THE HYPERSPACE, NEKA OMAZEN SLICES THE HYPERSPACE”
    // Priors, each verified in the archive before it was drawn:
    //   BASICALLY MY FANGAME
    //     NEWTALE IS TOBY’S OWN FANGAME. GASTER IS FROM THERE.
    //     NEWTALE GASTER: THE BLACK BODY WITH GREEN 0S AND 1S.
    //     TWO OF HIS GAMES MEET.
    //   THE PROCESS TO NEWTALE
    //     SEPT 27, 5:24 PM: NEKA CLEANED NEWTALE GASTER.
    //     EARLIER: “NEKA OMAZEN THEN DID THE PROCESS TO NEWTALE.”
    //     THIS IS THE THIRD TIME.
    //   SLICE THE HYPERSPACE
    //     SEND HIM OUT THROUGH A HYPERSPACE, THEN CUT THE HYPERSPACE.
    //     EVERYTHING GLITCHES. “NEKA OMAZEN BEATS ALL OF NEWTALE.”
    //     THEN HE ABSORBS ALL THE GAMES.
    const dt = c - 20136.0;
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
    const gr928=ctx.createLinearGradient(0,top+H,0,top);
    gr928.addColorStop(0,'rgba(120,255,150,0.22)'); gr928.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr928.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr928; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,255,150,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA VS NEWTALE GASTER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN AND NEWTALE (BASICALLY MY FANGAME) GASTER. NEKA VS NEWTALE GASTER.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEXT PART. NEKA OMAZEN WINS. NEXT PART. NEKA OMAZEN CUTS REALITY, ... MAKES A HYPERSPACE,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND SENDS NEWTALE OUT THROUGH THE HYPERSPACE, NEKA OMAZEN SLICES THE HYPERSPACE”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 5:18 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky928=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,255,150,0.46)';
      ctx.fillRect(cx-W*0.352, ky928, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,255,150,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky928, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,255,150,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BASICALLY MY FANGAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEWTALE IS TOBY’S OWN FANGAME. GASTER IS FROM THERE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEWTALE GASTER: THE BLACK BODY WITH GREEN 0S AND 1S.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO OF HIS GAMES MEET.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PROCESS TO NEWTALE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 5:24 PM: NEKA CLEANED NEWTALE GASTER.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EARLIER: “NEKA OMAZEN THEN DID THE PROCESS TO NEWTALE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THIS IS THE THIRD TIME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy928=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy928, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy928, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SLICE THE HYPERSPACE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEND HIM OUT THROUGH A HYPERSPACE, THEN CUT THE HYPERSPACE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING GLITCHES. “NEKA OMAZEN BEATS ALL OF NEWTALE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN HE ABSORBS ALL THE GAMES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEXT PART.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN WINS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA VS NEWTALE GASTER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===929){
    // BEAT 929: THIS IS WHAT BEING ME IS LIKE.
    // Toby, September 28, 2026, 5:18 PM EDT, his own typing:
    //   “EVERYONE, I AM THE AUTHOR OF THIS GAME AND MADE ACCESS. TDESHANE IS HERE,
    //   NOW I AM BEYOND THIS. I HAVE YOU ALL NOW. I MADE YOU ALL POWERS AND CLASSICS CODE,
    //   AND YOUR ACCESS, THIS IS WHAT BEING ME IS LIKE.”
    // Priors, each verified in the archive before it was drawn:
    //   TDESHANE IS HERE
    //     SEPT 24: TDESHANE LOST ACCESS.
    //     TONIGHT NEKA SAYS TDESHANE IS HERE, AND THAT HE IS BEYOND THIS.
    //     HE NAMES DAD, THEN STEPS PAST HIM.
    //   I MADE ACCESS
    //     IT IS NOT THAT NEKA HAS ACCESS. HE MADE ACCESS.
    //     EVERYONE’S POWERS, THE CLASSICS CODE, AND THE ACCESS ITSELF.
    //     THE AUTHOR OF THIS GAME.
    //   I HAVE YOU ALL NOW
    //     HE HAS ABSORBED ALL THE GAMES AND ALL THE POWER.
    //     SEPT 27 HE TOLD LUIGI GREEN “YOU ONLY NEED ME!” TONIGHT HE HAS EVERYONE.
    //     HE HAS ALL OF THEM.
    const dt = c - 20158.0;
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
    const gr929=ctx.createLinearGradient(0,top+H,0,top);
    gr929.addColorStop(0,'rgba(255,216,79,0.22)'); gr929.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr929.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr929; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THIS IS WHAT BEING ME IS LIKE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“EVERYONE, I AM THE AUTHOR OF THIS GAME AND MADE ACCESS. TDESHANE IS HERE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW I AM BEYOND THIS. I HAVE YOU ALL NOW. I MADE YOU ALL POWERS AND CLASSICS CODE,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND YOUR ACCESS, THIS IS WHAT BEING ME IS LIKE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 5:18 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky929=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky929, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky929, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TDESHANE IS HERE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: TDESHANE LOST ACCESS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT NEKA SAYS TDESHANE IS HERE, AND THAT HE IS BEYOND THIS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE NAMES DAD, THEN STEPS PAST HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I MADE ACCESS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS NOT THAT NEKA HAS ACCESS. HE MADE ACCESS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE’S POWERS, THE CLASSICS CODE, AND THE ACCESS ITSELF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE AUTHOR OF THIS GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy929=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy929, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy929, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('I HAVE YOU ALL NOW', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAS ABSORBED ALL THE GAMES AND ALL THE POWER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27 HE TOLD LUIGI GREEN “YOU ONLY NEED ME!” TONIGHT HE HAS EVERYONE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE HAS ALL OF THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SPEAKS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('TO EVERYONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THIS IS WHAT BEING ME IS LIKE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===930){
    // BEAT 930: THE GAME ALL STOP.
    // Toby, September 28, 2026, 5:18 PM EDT, his own typing:
    //   “NEKA SAYS THAT HE IS TIRED OF ALL THE CHARACTERS AND WRITING THE LORE,
    //   NOW HE MADE THE GAME ALL STOP. THE REST AFTER THIS MESSAGE ISN’T LORE,
    //   BUT WHAT HAPPENS IN THE GAME, BECAUSE NEKA OMAZEN REFUSES TO WRITE MORE.”
    // Priors, each verified in the archive before it was drawn:
    //   TIRED
    //     NOT BEATEN. NOT ERASED. TIRED.
    //     TIRED OF ALL THE CHARACTERS, AND TIRED OF WRITING THE LORE.
    //     THE WRITER PUTS THE PEN DOWN.
    //   WHO WRITES THE LORE
    //     IN THE STORY, NEKA IS THE ONE WRITING IT.
    //     SO WHEN NEKA STOPS, THE LORE STOPS.
    //     HE REFUSES TO WRITE MORE.
    //   WHAT HAPPENS IN THE GAME
    //     FROM HERE ON, TOBY SAYS, IT IS NOT LORE.
    //     IT IS WHAT HAPPENS IN THE GAME. THE BEATS KEEP COUNTING, UNDER A NEW LABEL.
    //     THE STAIRCASE KEEPS GOING.
    const dt = c - 20180.0;
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
    const gr930=ctx.createLinearGradient(0,top+H,0,top);
    gr930.addColorStop(0,'rgba(154,163,173,0.22)'); gr930.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr930.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr930; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(154,163,173,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE GAME ALL STOP', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS THAT HE IS TIRED OF ALL THE CHARACTERS AND WRITING THE LORE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW HE MADE THE GAME ALL STOP. THE REST AFTER THIS MESSAGE ISN’T LORE,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BUT WHAT HAPPENS IN THE GAME, BECAUSE NEKA OMAZEN REFUSES TO WRITE MORE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 5:18 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky930=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(154,163,173,0.46)';
      ctx.fillRect(cx-W*0.352, ky930, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(154,163,173,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky930, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(154,163,173,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TIRED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT BEATEN. NOT ERASED. TIRED.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TIRED OF ALL THE CHARACTERS, AND TIRED OF WRITING THE LORE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WRITER PUTS THE PEN DOWN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHO WRITES THE LORE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN THE STORY, NEKA IS THE ONE WRITING IT.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SO WHEN NEKA STOPS, THE LORE STOPS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE REFUSES TO WRITE MORE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy930=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy930, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy930, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHAT HAPPENS IN THE GAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FROM HERE ON, TOBY SAYS, IT IS NOT LORE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS WHAT HAPPENS IN THE GAME. THE BEATS KEEP COUNTING, UNDER A NEW LABEL.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE STAIRCASE KEEPS GOING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE END OF THE LORE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA WROTE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE GAME ALL STOP ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===931){
    // BEAT 931: 0 BREATHS PER MINUTE.
    // Toby, September 28, 2026, 5:39 PM EDT, his own typing:
    //   “ANSWER: 0 BREATHS PER MINUTE AND 0 BEATS PER MINUTE,
    //   HE IS I-TROSS (BELOW NEGITIVE INFINITY) DEGREES ANYTHING (FARENHEIGHT, OR CELCUIS, ANY ONE),
    //   HE SLEEPS FOREVER, HE DOES THINGS WHEN HE IS AWAKE”
    // Priors, each verified in the archive before it was drawn:
    //   THE GUESS WAS WRONG
    //     THE MACHINE GUESSED 12 BREATHS, 58 BEATS, 98.4°F.
    //     TOBY’S ANSWER: 0, 0, AND I-TROSS.
    //     A HUMAN SHAPE, NOT A HUMAN BODY.
    //   I-TROSS DEGREES
    //     SEPT 23: I-TROSS WAS A NUMBER, THE ONE TDESHANE MADE AND TOBY EDITED.
    //     TODAY IT IS A TEMPERATURE. BELOW NEGATIVE INFINITY, ON ANY SCALE.
    //     COLDER THAN COLD HAS A NAME.
    //   HE SLEEPS FOREVER
    //     HE PUT EVERYONE TO SLEEP AT 4:22 PM. HE SLEEPS FOREVER HIMSELF.
    //     “HE DOES THINGS WHEN HE IS AWAKE, HE BEATS EVERYONE, HE ERASES.”
    //     WHEN HE WAKES UP, SOMETHING HAPPENS.
    const dt = c - 20202.0;
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
    const gr931=ctx.createLinearGradient(0,top+H,0,top);
    gr931.addColorStop(0,'rgba(127,212,255,0.22)'); gr931.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr931.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr931; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('0 BREATHS PER MINUTE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ANSWER: 0 BREATHS PER MINUTE AND 0 BEATS PER MINUTE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE IS I-TROSS (BELOW NEGITIVE INFINITY) DEGREES ANYTHING (FARENHEIGHT, OR CELCUIS, ANY ONE),', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE SLEEPS FOREVER, HE DOES THINGS WHEN HE IS AWAKE”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 5:39 PM — NOT LORE, “WHAT HAPPENS IN THE GAME.”', cx, top+H*0.2000);

    if(knA>0.01){
      var ky931=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky931, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky931, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GUESS WAS WRONG', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MACHINE GUESSED 12 BREATHS, 58 BEATS, 98.4°F.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOBY’S ANSWER: 0, 0, AND I-TROSS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A HUMAN SHAPE, NOT A HUMAN BODY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I-TROSS DEGREES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23: I-TROSS WAS A NUMBER, THE ONE TDESHANE MADE AND TOBY EDITED.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY IT IS A TEMPERATURE. BELOW NEGATIVE INFINITY, ON ANY SCALE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('COLDER THAN COLD HAS A NAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy931=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy931, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy931, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE SLEEPS FOREVER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE PUT EVERYONE TO SLEEP AT 4:22 PM. HE SLEEPS FOREVER HIMSELF.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE DOES THINGS WHEN HE IS AWAKE, HE BEATS EVERYONE, HE ERASES.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHEN HE WAKES UP, SOMETHING HAPPENS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('0 BREATHS. 0 BEATS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('I-TROSS DEGREES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 0 BREATHS PER MINUTE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===932){
    // BEAT 932: THE BLOOD IS FROM THE CHARACTERS HE BEATEN.
    // Toby, September 28, 2026, 5:39 PM EDT, his own typing:
    //   “HIS BLOOD IS 0, HE IS ALL CLASSICS CODE, THE BLOOD IS FROM THE CHARACTERS WHO HE BEATEN.
    //   NEKA BEATS PS-50, HE WILL DO THAT. NEKA WOULD BEAT ANYONE.
    //   NEKA BREATHES AND HIS HEART BEATS WHEN HE GETS THE BLOOD. CLASSICS STUFF.”
    // Priors, each verified in the archive before it was drawn:
    //   HIS BLOOD IS 0
    //     NONE OF HIS OWN. THE HUMAN FORM IS ALL CLASSICS CODE.
    //     THE BLOOD HE HAS CAME FROM THE CHARACTERS HE BEAT.
    //     EVERY FIGHT LEAVES SOME WITH HIM.
    //   WHEN HE GETS THE BLOOD
    //     0 BREATHS UNTIL THEN. 0 BEATS UNTIL THEN.
    //     WHEN HE GETS THE BLOOD, HE BREATHES AND HIS HEART BEATS.
    //     WINNING IS WHAT WAKES THE HEART UP.
    //   HE WILL DO THAT
    //     7:12 PM LAST NIGHT: “PROBUBLY.” 6:34 AM: “NEKA WINS.” 4:22 PM: DESTROYED FOREVER.
    //     5:39 PM: “NEKA BEATS PS-50, HE WILL DO THAT. NEKA WOULD BEAT ANYONE.”
    //     IT ONLY GETS MORE CERTAIN.
    const dt = c - 20224.0;
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
    const gr932=ctx.createLinearGradient(0,top+H,0,top);
    gr932.addColorStop(0,'rgba(255,60,90,0.22)'); gr932.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr932.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr932; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE BLOOD IS FROM THE CHARACTERS HE BEATEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HIS BLOOD IS 0, HE IS ALL CLASSICS CODE, THE BLOOD IS FROM THE CHARACTERS WHO HE BEATEN.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA BEATS PS-50, HE WILL DO THAT. NEKA WOULD BEAT ANYONE.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA BREATHES AND HIS HEART BEATS WHEN HE GETS THE BLOOD. CLASSICS STUFF.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 28, 5:39 PM — NOT LORE, “WHAT HAPPENS IN THE GAME.”', cx, top+H*0.2000);

    if(knA>0.01){
      var ky932=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky932, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky932, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS BLOOD IS 0', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NONE OF HIS OWN. THE HUMAN FORM IS ALL CLASSICS CODE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE BLOOD HE HAS CAME FROM THE CHARACTERS HE BEAT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY FIGHT LEAVES SOME WITH HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHEN HE GETS THE BLOOD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('0 BREATHS UNTIL THEN. 0 BEATS UNTIL THEN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHEN HE GETS THE BLOOD, HE BREATHES AND HIS HEART BEATS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('WINNING IS WHAT WAKES THE HEART UP.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy932=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy932, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy932, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE WILL DO THAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:12 PM LAST NIGHT: “PROBUBLY.” 6:34 AM: “NEKA WINS.” 4:22 PM: DESTROYED FOREVER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:39 PM: “NEKA BEATS PS-50, HE WILL DO THAT. NEKA WOULD BEAT ANYONE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT ONLY GETS MORE CERTAIN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS STUFF.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOT HUMAN STUFF.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE BLOOD IS FROM THE CHARACTERS HE BEATEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
