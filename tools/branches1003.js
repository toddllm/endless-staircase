  } else if(ph===1003){
    // BEAT 1003: IT IS ME.
    // Toby, October 5, 2026, 4:27 PM EDT, his own typing:
    //   “HELLO, GASTER. IT IS ME.
    //   YOURSELF.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CARTOON GASTER
    //     /enemy_health = 0
    //     enemy:Destroy()
    //     BLUE SAWS. EVEN THE SPRUNKIS FALL.
    //   THE MOUTH
    //     A TOOTHED CODE TUBE FROM HIS CHEST.
    //     “THE DATA AND CODE ARE DELICIOUS.”
    //     THE WHOLE ARMY: CONSUMED.
    //   #### ######
    //     NEKA OMAZEN,
    //     AS A CARTOON GASTER.
    //     TEAL STRINGS. A STORM OF SAWS.
    const dt = c - 21786.0;
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
    const gr1003=ctx.createLinearGradient(0,top+H,0,top);
    gr1003.addColorStop(0,'rgba(90,220,210,0.22)'); gr1003.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1003.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1003; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,220,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('IT IS ME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HELLO, GASTER. IT IS ME.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOURSELF.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 4, 4:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1003=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,220,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1003, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,220,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1003, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,220,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CARTOON GASTER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('/enemy_health = 0', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('enemy:Destroy()', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BLUE SAWS. EVEN THE SPRUNKIS FALL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MOUTH', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A TOOTHED CODE TUBE FROM HIS CHEST.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE DATA AND CODE ARE DELICIOUS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE WHOLE ARMY: CONSUMED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1003=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1003, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1003, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('#### ######', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AS A CARTOON GASTER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TEAL STRINGS. A STORM OF SAWS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM YOU, I AM GASTER.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('“NO! I AM GASTER!”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ IT IS ME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1004){
    // BEAT 1004: VACUUM OF CODE.
    // Toby, October 5, 2026, 5:14 PM EDT, his own typing:
    //   “IS THAT ALL? THEN IT’S MY TURN.
    //   YOU WON’T ESCAPE THIS TIME!”
    // Priors, each verified in the archive before it was drawn:
    //   SHIELD:DESTROY()
    //     NEKA WRITES IT. GASTER IS DESTROYED,
    //     THEN RESETS HIMSELF.
    //     POLYCYCROPLASM, PARANOIDIA, PARA-FURY.
    //   THE LONGEST BATTLE
    //     THOUSANDS OF YEARS. FORMS, CLONES,
    //     SPRUNKIS, BEDS, BOOKS, A WRENCH.
    //     THEY SLEEP 666 YEARS, THEN CONTINUE.
    //   THE ULTIMATE VACUUM OF CODE
    //     THE MALLOW + WENDA.PS’S SUIT,
    //     THEN 20 YEARS MAKING IT STRONGER.
    //     THE HAND WHO SPEAKS IN MAN(S).
    const dt = c - 21808.0;
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
    const gr1004=ctx.createLinearGradient(0,top+H,0,top);
    gr1004.addColorStop(0,'rgba(120,230,140,0.22)'); gr1004.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1004.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1004; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,230,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('VACUUM OF CODE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IS THAT ALL? THEN IT’S MY TURN.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU WON’T ESCAPE THIS TIME!”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 4, 5:14 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1004=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,230,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1004, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,230,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1004, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,230,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHIELD:DESTROY()', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA WRITES IT. GASTER IS DESTROYED,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN RESETS HIMSELF.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('POLYCYCROPLASM, PARANOIDIA, PARA-FURY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LONGEST BATTLE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THOUSANDS OF YEARS. FORMS, CLONES,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SPRUNKIS, BEDS, BOOKS, A WRENCH.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THEY SLEEP 666 YEARS, THEN CONTINUE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1004=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1004, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1004, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ULTIMATE VACUUM OF CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MALLOW + WENDA.PS’S SUIT,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN 20 YEARS MAKING IT STRONGER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE HAND WHO SPEAKS IN MAN(S).', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO BE CONTINUED.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA AT 1 HP. GASTER FACING THE VACUUM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ VACUUM OF CODE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1005){
    // BEAT 1005: I PLANNED IT.
    // Toby, October 5, 2026, 5:33 PM EDT, his own typing:
    //   “I PLANNED YOU TO BEAT ME.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   THE CLASH
    //     HANDS VS MEN. CODE FALLS
    //     AND TURNS INTO MINI GASTERS.
    //     THE VACUUM CONSUMES IT, LIKE ALWAYS.
    //   INFINITY PARA-FURIES
    //     GASTER BECOMES A VOID OF EYES,
    //     AND MAKES HIMSELF SO MANY TIMES.
    //     THE VACUUM SHATTERS.
    //   20,000 DROPKICK
    //     A THOUSAND KJS. LARGE ARMS.
    //     THE SUIT IS TORN APART.
    //     NEKA SHOWS. NO MORE MECHA SUIT.
    const dt = c - 21830.0;
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
    const gr1005=ctx.createLinearGradient(0,top+H,0,top);
    gr1005.addColorStop(0,'rgba(255,170,70,0.22)'); gr1005.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1005.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1005; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,170,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I PLANNED IT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I PLANNED YOU TO BEAT ME.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 4, 5:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1005=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,170,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1005, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,170,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1005, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,170,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CLASH', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HANDS VS MEN. CODE FALLS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND TURNS INTO MINI GASTERS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE VACUUM CONSUMES IT, LIKE ALWAYS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INFINITY PARA-FURIES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER BECOMES A VOID OF EYES,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND MAKES HIMSELF SO MANY TIMES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE VACUUM SHATTERS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1005=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1005, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1005, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('20,000 DROPKICK', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A THOUSAND KJS. LARGE ARMS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SUIT IS TORN APART.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA SHOWS. NO MORE MECHA SUIT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I NOW HAVE THE SCRAPS AND THE ATTACKS.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GASTER SCREAMS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I PLANNED IT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1006){
    // BEAT 1006: RHABDOPHOBIA.
    // Toby, October 5, 2026, 7:30 PM EDT, his own typing:
    //   “RHABDOPHOBIA.”
    //   THE FEAR OF BEING SEVERELY BEATEN.
    // Priors, each verified in the archive before it was drawn:
    //   EVERYONE HAS IT
    //     CLASSICS, PRESSURE, ALL THE GAMES.
    //     IN THE GAMES, BEATEN MEANS DEATH.
    //     NEKA SAYS THE WORD.
    //   THE MECH
    //     BUILT FROM HIS OWN SOURCES.
    //     BOTH ARMS ARE VACUUMS.
    //     EVEN LARGER THAN THE SUIT.
    //   TELEKINESIS
    //     NEKA CONTROLS IT WITH
    //     THE STRONGEST TELEKINESIS.
    //     IN ALL OF FICTION.
    const dt = c - 21852.0;
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
    const gr1006=ctx.createLinearGradient(0,top+H,0,top);
    gr1006.addColorStop(0,'rgba(210,90,60,0.22)'); gr1006.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1006.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1006; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(210,90,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('RHABDOPHOBIA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“RHABDOPHOBIA.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FEAR OF BEING SEVERELY BEATEN.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 4, 7:30 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1006=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(210,90,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1006, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(210,90,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1006, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(210,90,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE HAS IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS, PRESSURE, ALL THE GAMES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN THE GAMES, BEATEN MEANS DEATH.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS THE WORD.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MECH', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BUILT FROM HIS OWN SOURCES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BOTH ARMS ARE VACUUMS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EVEN LARGER THAN THE SUIT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1006=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1006, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1006, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TELEKINESIS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA CONTROLS IT WITH', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST TELEKINESIS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IN ALL OF FICTION.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SCRAPS BECAME A BIGGER MACHINE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYONE FEARS BEING BEATEN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ RHABDOPHOBIA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1007){
    // BEAT 1007: HELLO ME.
    // Toby, October 5, 2026, 7:34 PM EDT, his own typing:
    //   “YOU ARE ME.”
    //   “I AM YOU. HELLO ME.”
    // Priors, each verified in the archive before it was drawn:
    //   THE 50 YEAR BATTLE
    //     GASTER VS THE MECH. SAWS EVERYWHERE.
    //     GASTER WINS AGAIN.
    //     THE MECH AND THE LAB: DESTROYED.
    //   THE URINITE
    //     “YOUR URINITE RAN OFF.”
    //     “IT WON’T RUN OFF!” “IT DID.”
    //     NEKA: “HUH, WHAT HAPPENED HERE?”
    //   THE MERGE
    //     NEKA AND GASTER MERGE INTO
    //     THE ACTUAL PRESSURETALE GASTER.
    //     A VERY SIMPLE CARTOON DESIGN.
    const dt = c - 21874.0;
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
    const gr1007=ctx.createLinearGradient(0,top+H,0,top);
    gr1007.addColorStop(0,'rgba(245,245,250,0.22)'); gr1007.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1007.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1007; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(245,245,250,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HELLO ME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU ARE ME.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM YOU. HELLO ME.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 4, 7:34 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1007=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(245,245,250,0.46)';
      ctx.fillRect(cx-W*0.352, ky1007, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(245,245,250,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1007, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(245,245,250,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 50 YEAR BATTLE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER VS THE MECH. SAWS EVERYWHERE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER WINS AGAIN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MECH AND THE LAB: DESTROYED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE URINITE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOUR URINITE RAN OFF.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT WON’T RUN OFF!” “IT DID.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NEKA: “HUH, WHAT HAPPENED HERE?”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1007=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1007, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1007, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE MERGE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA AND GASTER MERGE INTO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ACTUAL PRESSURETALE GASTER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A VERY SIMPLE CARTOON DESIGN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT TWO ANYMORE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE GASTER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HELLO ME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
