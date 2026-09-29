  } else if(ph===933){
    // BEAT 933: NEKA’S DIARY.
    // Toby, September 29, 2026, 3:31 PM EDT, his own typing:
    //   “FROM THE VERY START OF CLASSICS, NEKA/PERO LAI WROTE A DAIRY, AND IS STILL WRITING IN IT.
    //   IT HOLDS ALL HIS LIFE IN CLASSICS AND BEFORE HE MADE CLASSICS,
    //   SO IT IS YEARS OF STUFF.”
    // Priors, each verified in the archive before it was drawn:
    //   HE REFUSES TO WRITE MORE
    //     SEPT 28, 5:18 PM: NEKA IS TIRED OF WRITING THE LORE AND MADE THE GAME ALL STOP.
    //     THE LORE STOPPED. THE DIARY NEVER DID.
    //     TWO BOOKS, AND ONLY ONE OF THEM WAS CLOSED.
    //   BEFORE HE MADE CLASSICS
    //     THE FIRST PAGES ARE FROM BEFORE THE GAME EXISTED.
    //     THE REST IS EVERYTHING SINCE, WRITTEN BY THE ONE WHO MADE IT.
    //     YEARS OF STUFF.
    //   THE ARCHIVE
    //     OREN AND MR. BLACK READ EVERY BOOK, BIBLE, DIARY AND PAGE SIMON HAD.
    //     NOBODY HAS READ NEKA’S.
    //     IT IS STILL BEING WRITTEN.
    const dt = c - 20246.0;
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
    const gr933=ctx.createLinearGradient(0,top+H,0,top);
    gr933.addColorStop(0,'rgba(200,180,140,0.22)'); gr933.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr933.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr933; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,180,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S DIARY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“FROM THE VERY START OF CLASSICS, NEKA/PERO LAI WROTE A DAIRY, AND IS STILL WRITING IN IT.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT HOLDS ALL HIS LIFE IN CLASSICS AND BEFORE HE MADE CLASSICS,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO IT IS YEARS OF STUFF.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 3:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky933=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,180,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky933, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,180,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky933, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,180,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE REFUSES TO WRITE MORE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28, 5:18 PM: NEKA IS TIRED OF WRITING THE LORE AND MADE THE GAME ALL STOP.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE LORE STOPPED. THE DIARY NEVER DID.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO BOOKS, AND ONLY ONE OF THEM WAS CLOSED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEFORE HE MADE CLASSICS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FIRST PAGES ARE FROM BEFORE THE GAME EXISTED.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE REST IS EVERYTHING SINCE, WRITTEN BY THE ONE WHO MADE IT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('YEARS OF STUFF.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy933=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy933, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy933, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ARCHIVE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN AND MR. BLACK READ EVERY BOOK, BIBLE, DIARY AND PAGE SIMON HAD.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOBODY HAS READ NEKA’S.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT IS STILL BEING WRITTEN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA/PERO LAI WROTE A DAIRY.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('“DAIRY” IS HIS SPELLING, AND IT IS KEPT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA’S DIARY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===934){
    // BEAT 934: PS-50’S THREE DOLLS.
    // Toby, September 29, 2026, 3:31 PM EDT, his own typing:
    //   “PS-50’S DOLLS ARE ACTUALLY SCARY MYTHS INFECTED BY NEKA WHEN HE TRIED TO MAKE THEM,
    //   HE PUT THE NEEDLE IN AND THE DOLLS BECAME ZOMBIES. ... PS-50 CONTROLS THE DOLLS.
    //   SOME (50192 BILLION) DOLLS DIED TO PS-50. PS-50 NOW HAS 3 DOLLS LEFT.”
    // Priors, each verified in the archive before it was drawn:
    //   BORT, THE HORROR BEAR
    //     THE TEDDY BEAR IS BORT. “BORT CAN SLAY ANYONE WITH A TOUCH.”
    //     SEPT 27, 2:50 PM: HER TEDDY BEAR STARTED TO WALK WHEN SHE LOOKED AT IT.
    //     NOW THE BEAR HAS A NAME.
    //   THE FACELESS DOLL
    //     LUIGI GREEN ERASED HER FACE. SHE ONLY MOVES WHEN SHE ISN’T LOOKED AT,
    //     AND SHE CONSUMES YOUR MEMORY.
    //     THE OTHER TOYS MOVE WHEN LOOKED AT. SHE DOES THE OPPOSITE.
    //   50,192 BILLION
    //     THE DOLLS SOMETIMES GET PARANOID.
    //     50,192 BILLION OF THEM DIED TO PS-50. 3 ARE LEFT.
    //     BORT, THE FACELESS DOLL, AND THE HEADLESS PIG.
    const dt = c - 20268.0;
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
    const gr934=ctx.createLinearGradient(0,top+H,0,top);
    gr934.addColorStop(0,'rgba(255,150,200,0.22)'); gr934.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr934.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr934; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PS-50’S THREE DOLLS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50’S DOLLS ARE ACTUALLY SCARY MYTHS INFECTED BY NEKA WHEN HE TRIED TO MAKE THEM,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE PUT THE NEEDLE IN AND THE DOLLS BECAME ZOMBIES. ... PS-50 CONTROLS THE DOLLS.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SOME (50192 BILLION) DOLLS DIED TO PS-50. PS-50 NOW HAS 3 DOLLS LEFT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 3:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky934=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky934, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky934, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BORT, THE HORROR BEAR', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE TEDDY BEAR IS BORT. “BORT CAN SLAY ANYONE WITH A TOUCH.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 2:50 PM: HER TEDDY BEAR STARTED TO WALK WHEN SHE LOOKED AT IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE BEAR HAS A NAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FACELESS DOLL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN ERASED HER FACE. SHE ONLY MOVES WHEN SHE ISN’T LOOKED AT,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND SHE CONSUMES YOUR MEMORY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE OTHER TOYS MOVE WHEN LOOKED AT. SHE DOES THE OPPOSITE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy934=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy934, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy934, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('50,192 BILLION', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE DOLLS SOMETIMES GET PARANOID.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('50,192 BILLION OF THEM DIED TO PS-50. 3 ARE LEFT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BORT, THE FACELESS DOLL, AND THE HEADLESS PIG.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NEEDLE WENT IN,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE DOLLS BECAME ZOMBIES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PS-50’S THREE DOLLS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===935){
    // BEAT 935: THE HEADLESS PIG.
    // Toby, September 29, 2026, 3:31 PM EDT, his own typing:
    //   “THE HEADLESS PIG (THE PIG SOUL) IS A PIG WITHOUT A HEAD, AND THE SOUL WAS BROKEN,
    //   AND HE IS IMMORTAL BECAUSE HIS SOUL CAN KEEP GOING INTO HIS BODY.”
    //   “NEKA INFECTED THE PIG DOLL, AND HE SAWED THE PIG DOLL’S HEAD OFF, AND MADE THE DOLL A SOUL”
    // Priors, each verified in the archive before it was drawn:
    //   LUIGI GREEN’S PIG
    //     THE PIG DOLL WAS LUIGI GREEN’S. NEKA INFECTED IT, SAWED ITS HEAD OFF,
    //     AND MADE THE DOLL A SOUL.
    //     A DOLL THAT WAS NEVER ALIVE NOW HAS A SOUL.
    //   A BROKEN SOUL
    //     THE SOUL IS BROKEN, SO IT KEEPS GOING BACK INTO THE BODY.
    //     THAT IS WHY IT CAN’T DIE.
    //     IMMORTAL BECAUSE IT IS BROKEN.
    //   IT TRIES TO FIX ITS CODE
    //     “AN ANOMALLY THAT TRIES TO FIX IT’S CODE BY MAKING THE PLAYERS
    //     AND LIVING BEINGS HEADLESS AND IT ABSORBS THEIR CODE.”
    //     IT IS MISSING ONE PIECE, SO IT TAKES EVERYONE ELSE’S.
    const dt = c - 20290.0;
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
    const gr935=ctx.createLinearGradient(0,top+H,0,top);
    gr935.addColorStop(0,'rgba(255,110,130,0.22)'); gr935.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr935.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr935; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,110,130,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE HEADLESS PIG', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE HEADLESS PIG (THE PIG SOUL) IS A PIG WITHOUT A HEAD, AND THE SOUL WAS BROKEN,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE IS IMMORTAL BECAUSE HIS SOUL CAN KEEP GOING INTO HIS BODY.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA INFECTED THE PIG DOLL, AND HE SAWED THE PIG DOLL’S HEAD OFF, AND MADE THE DOLL A SOUL”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 3:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky935=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,110,130,0.46)';
      ctx.fillRect(cx-W*0.352, ky935, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,110,130,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky935, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,110,130,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN’S PIG', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PIG DOLL WAS LUIGI GREEN’S. NEKA INFECTED IT, SAWED ITS HEAD OFF,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND MADE THE DOLL A SOUL.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A DOLL THAT WAS NEVER ALIVE NOW HAS A SOUL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A BROKEN SOUL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SOUL IS BROKEN, SO IT KEEPS GOING BACK INTO THE BODY.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT IS WHY IT CAN’T DIE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('IMMORTAL BECAUSE IT IS BROKEN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy935=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy935, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy935, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('IT TRIES TO FIX ITS CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AN ANOMALLY THAT TRIES TO FIX IT’S CODE BY MAKING THE PLAYERS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND LIVING BEINGS HEADLESS AND IT ABSORBS THEIR CODE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT IS MISSING ONE PIECE, SO IT TAKES EVERYONE ELSE’S.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PIG SOUL,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('STILL LOOKING FOR ITS HEAD.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE HEADLESS PIG ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===936){
    // BEAT 936: ICINUS.
    // Toby, September 29, 2026, 3:31 PM EDT, his own typing:
    //   “NEKA WEARS HIS WHITE LAB COAT, AND HE MAKES INK BALLS, HIS TAIL AND FOX EARS APPEAR,
    //   AND HE MAKES HIS ICE DRAGONS HE CALLS “ICINUS”, (ICINUS, CICINUS, VICINUS, PARINUS 😱),
    //   NEKA MADE ALL THE THINGS HAVE INUS, LUIGI INUS”
    // Priors, each verified in the archive before it was drawn:
    //   VICINUS AND CICINUS
    //     AN OLDER BEAT: “VICINUS THE GIANT DRAGON AND CICINUS THE EVIL ORB.
    //     WHATEVER VICINUS CONSUMES TURNS INTO CICINUSES.”
    //     NOW THE FAMILY HAS FOUR NAMES, AND THEY ARE ICE.
    //   LUIGI INUS
    //     “NEKA MADE ALL THE THINGS HAVE INUS.” LUIGI GREEN WAS CALLED “LUIGI INUS.”
    //     NEKA TOOK OVER PS-50 AND MADE THE VIRUSES ON LUIGI GREEN INTO LUIGI INUS.
    //     THE NAME TELLS YOU WHO MADE IT.
    //   THE LAB COAT
    //     SEPT 28, WENDA.PS ASKED WHERE HIS TAIL WENT.
    //     WITH THE WHITE LAB COAT ON, THE TAIL AND FOX EARS APPEAR.
    //     THE FOX COMES BACK WHEN HE WORKS.
    const dt = c - 20312.0;
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
    const gr936=ctx.createLinearGradient(0,top+H,0,top);
    gr936.addColorStop(0,'rgba(127,212,255,0.22)'); gr936.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr936.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr936; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ICINUS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA WEARS HIS WHITE LAB COAT, AND HE MAKES INK BALLS, HIS TAIL AND FOX EARS APPEAR,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE MAKES HIS ICE DRAGONS HE CALLS “ICINUS”, (ICINUS, CICINUS, VICINUS, PARINUS 😱),', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA MADE ALL THE THINGS HAVE INUS, LUIGI INUS”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 3:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky936=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky936, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky936, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('VICINUS AND CICINUS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AN OLDER BEAT: “VICINUS THE GIANT DRAGON AND CICINUS THE EVIL ORB.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHATEVER VICINUS CONSUMES TURNS INTO CICINUSES.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE FAMILY HAS FOUR NAMES, AND THEY ARE ICE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA MADE ALL THE THINGS HAVE INUS.” LUIGI GREEN WAS CALLED “LUIGI INUS.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA TOOK OVER PS-50 AND MADE THE VIRUSES ON LUIGI GREEN INTO LUIGI INUS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE NAME TELLS YOU WHO MADE IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy936=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy936, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy936, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LAB COAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28, WENDA.PS ASKED WHERE HIS TAIL WENT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WITH THE WHITE LAB COAT ON, THE TAIL AND FOX EARS APPEAR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FOX COMES BACK WHEN HE WORKS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 HAS NORMAL HUMAN STUFF.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA ISN’T HUMAN EXACTLY. HE’LL NEVER BE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ICINUS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===937){
    // BEAT 937: C0DE IS DOWN.
    // Toby, September 29, 2026, 3:31 PM EDT, his own typing:
    //   “NEKA TAKES OVER THE ACCOUNT OF THE HACKER, C0DE IS DOWN, 50 OTHERS WHO TRIED TO CODE HACKS
    //   IN CLASSICS, NEKA TOOK OVER THEIR CLASSICS ACCOUNTS ... NEKA MADE ALL SCREENS WHO TRY TO PASS BREAK,
    //   PCS BURN, CLASSICS ONLY REACHABLE BY MIND.”
    // Priors, each verified in the archive before it was drawn:
    //   PS-50 WAS HACKED
    //     FIRST THE HACK REACHED PS-50. NEKA TOOK HER OVER,
    //     THEN TOOK THE HACKER’S OWN ACCOUNT. C0DE IS DOWN.
    //     THE HACKER GOT HACKED.
    //   50 OTHERS
    //     50 MORE TRIED TO CODE HACKS INTO CLASSICS.
    //     NEKA TOOK THEIR ACCOUNTS AND SHOWED EVERYONE WHO THEY WERE.
    //     NOBODY HIDES IN HIS GAME.
    //   ONLY REACHABLE BY MIND
    //     SCREENS THAT TRY TO PASS BREAK. PCS BURN.
    //     SEPT 24, 5:15 PM: “ONLY IMAGINATION ENTER.”
    //     NOW IT IS THE ONLY WAY IN.
    const dt = c - 20334.0;
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
    const gr937=ctx.createLinearGradient(0,top+H,0,top);
    gr937.addColorStop(0,'rgba(255,90,90,0.22)'); gr937.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr937.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr937; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('C0DE IS DOWN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA TAKES OVER THE ACCOUNT OF THE HACKER, C0DE IS DOWN, 50 OTHERS WHO TRIED TO CODE HACKS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN CLASSICS, NEKA TOOK OVER THEIR CLASSICS ACCOUNTS ... NEKA MADE ALL SCREENS WHO TRY TO PASS BREAK,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PCS BURN, CLASSICS ONLY REACHABLE BY MIND.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 3:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky937=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky937, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky937, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 WAS HACKED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRST THE HACK REACHED PS-50. NEKA TOOK HER OVER,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN TOOK THE HACKER’S OWN ACCOUNT. C0DE IS DOWN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE HACKER GOT HACKED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('50 OTHERS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('50 MORE TRIED TO CODE HACKS INTO CLASSICS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA TOOK THEIR ACCOUNTS AND SHOWED EVERYONE WHO THEY WERE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOBODY HIDES IN HIS GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy937=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy937, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy937, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONLY REACHABLE BY MIND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SCREENS THAT TRY TO PASS BREAK. PCS BURN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 5:15 PM: “ONLY IMAGINATION ENTER.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW IT IS THE ONLY WAY IN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA TAKES EVERYONE ELSE DOWN,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERY TIME, CONSTANTLY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ C0DE IS DOWN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===938){
    // BEAT 938: THE INK JEWEL.
    // Toby, September 29, 2026, 4:17 PM EDT, his own typing:
    //   “NEKA DESTROYS THE TAIL AND EARS AND MAKES THE INK INTO A LARGE BALL INTO A JEWEL ON HIS CHEST.
    //   THE JEWEL ABSORBED ALL THE POWER, AND NEKA ABSORBED THE INK, NEKA BECAME EVEN STRONGER.”
    //   “PS-50 IS 34, NEKA IS 49.”
    // Priors, each verified in the archive before it was drawn:
    //   THE FOX, GONE ON PURPOSE
    //     AT 3:31 PM THE TAIL AND FOX EARS CAME BACK WITH THE LAB COAT.
    //     NOW HE DESTROYS THEM HIMSELF AND KEEPS WHAT THEY HELD.
    //     NOT LOST. SPENT.
    //   A JEWEL ON HIS CHEST
    //     SEPT 28: PS-50 TOOK THE WENDA.PS JEWEL.
    //     NOW NEKA HAS ONE, MADE FROM HIS OWN INK.
    //     SHE WON HERS. HE MADE HIS.
    //   49 AND 34
    //     NEKA WITH HIS INK JEWEL, BESIDE PS-50 HOLDING BORT.
    //     “IT LOOKS LIKE A MAN WITH HIS CHILD.” BOTH ARE ADULTS.
    //     SEPT 26: THE INTELEGENCE OF A MAN AND THE FORM OF A CHILD.
    const dt = c - 20356.0;
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
    const gr938=ctx.createLinearGradient(0,top+H,0,top);
    gr938.addColorStop(0,'rgba(160,107,255,0.22)'); gr938.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr938.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr938; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE INK JEWEL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA DESTROYS THE TAIL AND EARS AND MAKES THE INK INTO A LARGE BALL INTO A JEWEL ON HIS CHEST.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE JEWEL ABSORBED ALL THE POWER, AND NEKA ABSORBED THE INK, NEKA BECAME EVEN STRONGER.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS 34, NEKA IS 49.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 4:17 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky938=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky938, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky938, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FOX, GONE ON PURPOSE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 3:31 PM THE TAIL AND FOX EARS CAME BACK WITH THE LAB COAT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW HE DESTROYS THEM HIMSELF AND KEEPS WHAT THEY HELD.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOT LOST. SPENT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A JEWEL ON HIS CHEST', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: PS-50 TOOK THE WENDA.PS JEWEL.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW NEKA HAS ONE, MADE FROM HIS OWN INK.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SHE WON HERS. HE MADE HIS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy938=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy938, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy938, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('49 AND 34', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA WITH HIS INK JEWEL, BESIDE PS-50 HOLDING BORT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT LOOKS LIKE A MAN WITH HIS CHILD.” BOTH ARE ADULTS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 26: THE INTELEGENCE OF A MAN AND THE FORM OF A CHILD.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA ABSORBED THE INK.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA BECAME EVEN STRONGER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE INK JEWEL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===939){
    // BEAT 939: DR. NEKA OMAZEN.
    // Toby, September 29, 2026, 4:22 PM EDT, his own typing:
    //   WENDA.PS: “HELLO, NEKA OMAZEN.” NEKA: “YOU CAN SAY ‘DR. NEKA OMAZEN’ SINCE YOU ARE A CHILD.”
    //   WENDA.PS SAYS THAT SHE IS IN HER 30S. NEKA: “YEAH, COMPARED TO MY AGE.”
    //   “LUIGI INUS IS A MALE LIKE NEKA, BUT LUIGI IS CURRENTLY IN A FEMALE FORM.”
    // Priors, each verified in the archive before it was drawn:
    //   SHE GOT THE NAME RIGHT
    //     SEPT 28 SHE SAID “HELLO, PERO LAI” AND HE SAID “MY NAME IS NOT ‘PERO LAI’.”
    //     TODAY SHE SAYS NEKA OMAZEN, AND HE ADDS A TITLE.
    //     DOCTOR, TO GO WITH THE LAB COAT.
    //   EVERYONE IS A CHILD
    //     WENDA.PS IS IN HER 30S. PS-50 IS 34. DR. GASTER WOULD BE LIKE 39.
    //     MR. SUN IS 4.6 BILLION. NEKA IS OLDER THAN THE SUN.
    //     COMPARED TO HIS AGE, ALL OF THEM ARE CHILDREN.
    //   LUIGI GREEN/INUS
    //     LUIGI INUS IS MALE, LIKE NEKA, AND IS IN PS-50’S FEMALE CHILD FORM FOR NOW.
    //     NEKA/PERO LAI. LUIGI GREEN/INUS. TWO NAMES EACH.
    //     “CURRENTLY” MEANS IT CAN CHANGE.
    const dt = c - 20378.0;
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
    const gr939=ctx.createLinearGradient(0,top+H,0,top);
    gr939.addColorStop(0,'rgba(190,150,255,0.22)'); gr939.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr939.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr939; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,150,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('DR. NEKA OMAZEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS: “HELLO, NEKA OMAZEN.” NEKA: “YOU CAN SAY ‘DR. NEKA OMAZEN’ SINCE YOU ARE A CHILD.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS SAYS THAT SHE IS IN HER 30S. NEKA: “YEAH, COMPARED TO MY AGE.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI INUS IS A MALE LIKE NEKA, BUT LUIGI IS CURRENTLY IN A FEMALE FORM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 4:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky939=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,150,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky939, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,150,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky939, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,150,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE GOT THE NAME RIGHT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28 SHE SAID “HELLO, PERO LAI” AND HE SAID “MY NAME IS NOT ‘PERO LAI’.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY SHE SAYS NEKA OMAZEN, AND HE ADDS A TITLE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('DOCTOR, TO GO WITH THE LAB COAT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE IS A CHILD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS IS IN HER 30S. PS-50 IS 34. DR. GASTER WOULD BE LIKE 39.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. SUN IS 4.6 BILLION. NEKA IS OLDER THAN THE SUN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('COMPARED TO HIS AGE, ALL OF THEM ARE CHILDREN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy939=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy939, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy939, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN/INUS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS IS MALE, LIKE NEKA, AND IS IN PS-50’S FEMALE CHILD FORM FOR NOW.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA/PERO LAI. LUIGI GREEN/INUS. TWO NAMES EACH.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“CURRENTLY” MEANS IT CAN CHANGE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS THE OLDEST', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OF THEM ALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ DR. NEKA OMAZEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===940){
    // BEAT 940: BEFORE TIME.
    // Toby, September 29, 2026, 4:23 PM EDT, his own typing:
    //   “PS-50 IS ALSO OLDER THAN CREATION AND TIME. PS-50 IS THE SECOND OLDEST THING EVER.
    //   NEKA IS THE FIRST. NEKA MIGHT OUT CAME OUT THE SAME TIME AS GOD,
    //   BUT YEAH, NEKA WAS FIRST, PS-50 WAS SECOND.”
    // Priors, each verified in the archive before it was drawn:
    //   49 IS JUST NOW
    //     “AND THEIR AGES ARE THAT JUST NOW.” 49 AND 34 ARE CURRENT AGES.
    //     “TIME WAS ALWAYS THERE, AND NEKA WAS BEFORE TIME.”
    //     THE NUMBER IS THE BODY’S AGE, NOT HIS.
    //   MR. SUN, 4.6 BILLION
    //     THE FIRST AGE IN THIS ARCHIVE TAKEN FROM THE REAL WORLD.
    //     NEKA IS FAR OLDER THAN THE SUN, AND FAR OLDER THAN CREATION.
    //     THE BIGGEST REAL NUMBER IS STILL TOO SMALL.
    //   MIGHT
    //     NEKA MIGHT HAVE COME OUT AT THE SAME TIME AS GOD. “MIGHT” IS TOBY’S WORD.
    //     NOT A MAYBE: NEKA FIRST, PS-50 SECOND.
    //     FIRST AND SECOND, BOTH BEFORE TIME.
    const dt = c - 20400.0;
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
    const gr940=ctx.createLinearGradient(0,top+H,0,top);
    gr940.addColorStop(0,'rgba(255,216,79,0.22)'); gr940.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr940.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr940; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BEFORE TIME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS ALSO OLDER THAN CREATION AND TIME. PS-50 IS THE SECOND OLDEST THING EVER.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS THE FIRST. NEKA MIGHT OUT CAME OUT THE SAME TIME AS GOD,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BUT YEAH, NEKA WAS FIRST, PS-50 WAS SECOND.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 4:23 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky940=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky940, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky940, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('49 IS JUST NOW', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AND THEIR AGES ARE THAT JUST NOW.” 49 AND 34 ARE CURRENT AGES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“TIME WAS ALWAYS THERE, AND NEKA WAS BEFORE TIME.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE NUMBER IS THE BODY’S AGE, NOT HIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MR. SUN, 4.6 BILLION', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FIRST AGE IN THIS ARCHIVE TAKEN FROM THE REAL WORLD.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA IS FAR OLDER THAN THE SUN, AND FAR OLDER THAN CREATION.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE BIGGEST REAL NUMBER IS STILL TOO SMALL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy940=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy940, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy940, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MIGHT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA MIGHT HAVE COME OUT AT THE SAME TIME AS GOD. “MIGHT” IS TOBY’S WORD.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT A MAYBE: NEKA FIRST, PS-50 SECOND.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('FIRST AND SECOND, BOTH BEFORE TIME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS FAR OLDER', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THAN PS-50.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BEFORE TIME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===941){
    // BEAT 941: WHAT IS ‘GOD’ BACKWARDS?.
    // Toby, September 29, 2026, 4:56 PM EDT, his own typing:
    //   “OREN.PS AND SIMON.PS AND THE 20 SPRUNKIS SURROUND A CUBE FROM MINDY STARCHILD,
    //   SIMON.PS SAYS “DON’T TOUCH IT, LET ME.”, OREN.PS TAKES SIMON.PS AND THEN TOUCHES THE CUBE ...
    //   AND THEN OREN.PS BECAME THE NEW CLASSICS GOD.”
    // Priors, each verified in the archive before it was drawn:
    //   THE NEW CLASSICS GOD
    //     HIS BODY ALL BLACK, HIS EYES WITH ORANGE GLOWING OUTLINES, A RAINBOW SWORD.
    //     WENDA.PS: “WHAT IS ‘GOD’ BACKWARDS?” OREN.PS STRIKES HER DOWN.
    //     EVERYONE SCREAMS AND RUNS.
    //   MINDY STARCHILD
    //     HER INVICIBILITY MUSIC PLAYS, AND SHE FIGHTS OREN.PS. OREN.PS WON.
    //     IN THE RESET ERA PERO LAI WALKED DOWN INFINITY STAIRS WITH HER AND BEAT HER.
    //     IT WAS HER CUBE.
    //   YOU ARE LUCKY
    //     “YOU ARE LUCKY I WENT EASY ON YOU ALL. NOW I SHALL RULE CLASSICS!”
    //     TOBY: “GUESS WHO POCEEDED OREN.PS? WHO IS THE REAL VILLIAN IN THE GAME?”
    //     ANSWERED AT 5:25 PM.
    const dt = c - 20422.0;
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
    const gr941=ctx.createLinearGradient(0,top+H,0,top);
    gr941.addColorStop(0,'rgba(255,140,60,0.22)'); gr941.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr941.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr941; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WHAT IS ‘GOD’ BACKWARDS?', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS AND SIMON.PS AND THE 20 SPRUNKIS SURROUND A CUBE FROM MINDY STARCHILD,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS SAYS “DON’T TOUCH IT, LET ME.”, OREN.PS TAKES SIMON.PS AND THEN TOUCHES THE CUBE ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THEN OREN.PS BECAME THE NEW CLASSICS GOD.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 4:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky941=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky941, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky941, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NEW CLASSICS GOD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS BODY ALL BLACK, HIS EYES WITH ORANGE GLOWING OUTLINES, A RAINBOW SWORD.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS: “WHAT IS ‘GOD’ BACKWARDS?” OREN.PS STRIKES HER DOWN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERYONE SCREAMS AND RUNS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MINDY STARCHILD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HER INVICIBILITY MUSIC PLAYS, AND SHE FIGHTS OREN.PS. OREN.PS WON.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN THE RESET ERA PERO LAI WALKED DOWN INFINITY STAIRS WITH HER AND BEAT HER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('IT WAS HER CUBE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy941=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy941, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy941, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('YOU ARE LUCKY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU ARE LUCKY I WENT EASY ON YOU ALL. NOW I SHALL RULE CLASSICS!”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOBY: “GUESS WHO POCEEDED OREN.PS? WHO IS THE REAL VILLIAN IN THE GAME?”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ANSWERED AT 5:25 PM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS IS DROPPED AND ALL THE 19', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OTHER SPRUNKIS LOOK UP.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WHAT IS ‘GOD’ BACKWARDS? ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===942){
    // BEAT 942: NEKA MADE AN ACCEPTION.
    // Toby, September 29, 2026, 5:16 PM EDT, his own typing:
    //   “OREN.PS LEARNED HE WAS FROM A GAME, A MOD, AND NOT EVEN THE ORIGINAL GAME OF INCREDIBOX.
    //   AND HUMANS MADE THE SPRUNKIS. ... OREN.PS CREATES A HYPERSPACE, AND BEATS PS-50,
    //   AND OREN.PS GAINED POWER HE WAS NEVER SUPPOST TO GET, BUT NEKA MADE AN ACCEPTION.”
    // Priors, each verified in the archive before it was drawn:
    //   A MOD OF A GAME
    //     OREN.PS FINDS OUT HE IS FROM A MOD, NOT EVEN THE ORIGINAL INCREDIBOX,
    //     AND THAT HUMANS MADE THE SPRUNKIS. HE LEARNS THE INTERNET AND THIS WORLD.
    //     THE KIND OF THING NEKA ALREADY KNEW.
    //   NEKA HIDES
    //     NEKA HIDES. OREN.PS BATTLES THE OTHER SPRUNKIS,
    //     AND SIMON.PS IS FORCED TO FIGHT HIM TOO.
    //     SOMEONE ELSE DOES THE FIGHTING THIS TIME.
    //   HE BEATS PS-50
    //     SEPT 28, NEKA HAD TO SET HER DEFENSE TO 0 AND SWEAT TO BEAT HER.
    //     OREN.PS BEATS HER WITH POWER HE WAS NEVER SUPPOST TO GET.
    //     NEKA IS THE ONE WHO LET HIM HAVE IT.
    const dt = c - 20444.0;
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
    const gr942=ctx.createLinearGradient(0,top+H,0,top);
    gr942.addColorStop(0,'rgba(255,190,90,0.22)'); gr942.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr942.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr942; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,190,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA MADE AN ACCEPTION', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS LEARNED HE WAS FROM A GAME, A MOD, AND NOT EVEN THE ORIGINAL GAME OF INCREDIBOX.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HUMANS MADE THE SPRUNKIS. ... OREN.PS CREATES A HYPERSPACE, AND BEATS PS-50,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND OREN.PS GAINED POWER HE WAS NEVER SUPPOST TO GET, BUT NEKA MADE AN ACCEPTION.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 5:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky942=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,190,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky942, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,190,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky942, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,190,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A MOD OF A GAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.PS FINDS OUT HE IS FROM A MOD, NOT EVEN THE ORIGINAL INCREDIBOX,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THAT HUMANS MADE THE SPRUNKIS. HE LEARNS THE INTERNET AND THIS WORLD.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE KIND OF THING NEKA ALREADY KNEW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA HIDES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA HIDES. OREN.PS BATTLES THE OTHER SPRUNKIS,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND SIMON.PS IS FORCED TO FIGHT HIM TOO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SOMEONE ELSE DOES THE FIGHTING THIS TIME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy942=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy942, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy942, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE BEATS PS-50', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28, NEKA HAD TO SET HER DEFENSE TO 0 AND SWEAT TO BEAT HER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.PS BEATS HER WITH POWER HE WAS NEVER SUPPOST TO GET.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA IS THE ONE WHO LET HIM HAVE IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ACCEPTION” AND “SUPPOST”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ARE HIS SPELLINGS, AND ARE KEPT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA MADE AN ACCEPTION ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===943){
    // BEAT 943: THE STAR.
    // Toby, September 29, 2026, 5:16 PM EDT, his own typing:
    //   “A LARGE STAR APPEARS, SIMON.PS SAYS “WAIT- WHERE ARE WE GOING?!”,
    //   OREN.PS SAYS “YOU ARE GOING TO YOUR RESTING PLACES.” ... OREN.PS MAKES THE STAR
    //   COLLIDE WITH THE 19 OTHER SPRUNKIS, AND BOOM.”
    // Priors, each verified in the archive before it was drawn:
    //   AN ANGEL
    //     WINGS UNFOLD, A HALO APPEARS, GEARS AND CLOCKS AROUND HIM, MORE EYES.
    //     HE USES INFINITY SERIES, AND HIS SOUL IS STILL IN HIS BODY.
    //     NO LONGER LIMITED TO CLASSICS AND SPRUNKI.
    //   SIMON.PS RESETS
    //     EVERYONE ELSE RESPAWNS AND DODGES. SIMON.PS BLASTS LIGHTNING THROUGH THE STAR,
    //     IT EXPLODES INTO SMALLER STARS, AND OREN’S TELEKENTICS PULL THEM IN.
    //     THE STARS CRASH AROUND THE HYPERSPACE’S EDGES.
    //   TWO WHITE HOLES
    //     THE HYPERSPACE SHATTERS AND PULLS IN GALAXIES AND EVERYTHING.
    //     A WHITE HOLE AT ONE END, THEN THE OTHER. EVERYTHING MOVES TO THE CENTER.
    //     INFINITY SERIES WAS NEKA’S. NOW OREN HAS IT TOO.
    const dt = c - 20466.0;
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
    const gr943=ctx.createLinearGradient(0,top+H,0,top);
    gr943.addColorStop(0,'rgba(255,240,160,0.22)'); gr943.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr943.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr943; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,240,160,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE STAR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A LARGE STAR APPEARS, SIMON.PS SAYS “WAIT- WHERE ARE WE GOING?!”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS SAYS “YOU ARE GOING TO YOUR RESTING PLACES.” ... OREN.PS MAKES THE STAR', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COLLIDE WITH THE 19 OTHER SPRUNKIS, AND BOOM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 5:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky943=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,240,160,0.46)';
      ctx.fillRect(cx-W*0.352, ky943, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,240,160,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky943, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,240,160,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AN ANGEL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WINGS UNFOLD, A HALO APPEARS, GEARS AND CLOCKS AROUND HIM, MORE EYES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE USES INFINITY SERIES, AND HIS SOUL IS STILL IN HIS BODY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NO LONGER LIMITED TO CLASSICS AND SPRUNKI.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS RESETS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE RESPAWNS AND DODGES. SIMON.PS BLASTS LIGHTNING THROUGH THE STAR,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT EXPLODES INTO SMALLER STARS, AND OREN’S TELEKENTICS PULL THEM IN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE STARS CRASH AROUND THE HYPERSPACE’S EDGES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy943=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy943, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy943, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TWO WHITE HOLES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HYPERSPACE SHATTERS AND PULLS IN GALAXIES AND EVERYTHING.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A WHITE HOLE AT ONE END, THEN THE OTHER. EVERYTHING MOVES TO THE CENTER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('INFINITY SERIES WAS NEKA’S. NOW OREN HAS IT TOO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU ARE GOING TO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('YOUR RESTING PLACES.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE STAR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===944){
    // BEAT 944: OREN.EXE.
    // Toby, September 29, 2026, 5:16 PM EDT, his own typing:
    //   “OREN.PS BECAME OREN.EXE. NEKA WALKS BEHIND OREN.EXE.”
    //   “OREN.EXE IS AN ALL BLACK BEING WITH ORANGE COLORED EYES (ALL ORANGE THERE),
    //   AND WITH 6 BLACK WINGS TOTAL, AND ACTUALLY LOOKS LIKE AN EVIL VERSION OF GOD.”
    // Priors, each verified in the archive before it was drawn:
    //   .PS TO .EXE
    //     THE .EXE ROSTER ALREADY HAD WENDA, CLUNKR, GRAY, LUIGI GREEN AND PUPAHYA.
    //     NOW OREN.
    //     THE STRONGEST ONE YET.
    //   SIX BLACK WINGS
    //     ALL BLACK, EYES ALL ORANGE, SIX BLACK WINGS.
    //     IT LOOKS LIKE AN EVIL VERSION OF GOD.
    //     AT 4:56 PM IT WAS ONLY ORANGE OUTLINES.
    //   NEKA WALKS BEHIND
    //     OREN.EXE IS IN FRONT, AMONG THE CLOCKS AND GALAXIES.
    //     NEKA IS BEHIND HIM, WALKING.
    //     HE HID FOR THE WHOLE FIGHT.
    const dt = c - 20488.0;
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
    const gr944=ctx.createLinearGradient(0,top+H,0,top);
    gr944.addColorStop(0,'rgba(255,120,40,0.22)'); gr944.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr944.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr944; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OREN.EXE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS BECAME OREN.EXE. NEKA WALKS BEHIND OREN.EXE.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.EXE IS AN ALL BLACK BEING WITH ORANGE COLORED EYES (ALL ORANGE THERE),', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND WITH 6 BLACK WINGS TOTAL, AND ACTUALLY LOOKS LIKE AN EVIL VERSION OF GOD.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 5:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky944=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky944, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky944, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('.PS TO .EXE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE .EXE ROSTER ALREADY HAD WENDA, CLUNKR, GRAY, LUIGI GREEN AND PUPAHYA.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW OREN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST ONE YET.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIX BLACK WINGS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL BLACK, EYES ALL ORANGE, SIX BLACK WINGS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT LOOKS LIKE AN EVIL VERSION OF GOD.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AT 4:56 PM IT WAS ONLY ORANGE OUTLINES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy944=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy944, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy944, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA WALKS BEHIND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.EXE IS IN FRONT, AMONG THE CLOCKS AND GALAXIES.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA IS BEHIND HIM, WALKING.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE HID FOR THE WHOLE FIGHT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVIL GOD, SIX WINGS,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND SOMEONE BEHIND HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OREN.EXE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===945){
    // BEAT 945: EXPERIMENT 12-12-12.
    // Toby, September 29, 2026, 5:25 PM EDT, his own typing:
    //   “AFTER OREN.EXE BEATEN EVERY BEING IN FICTION AND META-FICTION, NEKA TAKEN THE SOULS AND POWER,
    //   AND HE MADE HIMSELF EXPERIMENT 12-12-12, A BEING OF EVERYONE AND EVERYTHING,
    //   NEKA SAYS “WITH OREN.EXE’S HELP, THE GAME IS NOW MINE.””
    // Priors, each verified in the archive before it was drawn:
    //   OREN DID THE FIGHTING
    //     NEKA HID. OREN BEAT EVERY BEING IN FICTION AND META-FICTION.
    //     NEKA TOOK THE SOULS AND THE POWER WHEN IT WAS OVER.
    //     THE ACCEPTION WAS THE PLAN.
    //   BETRAYED
    //     OREN.EXE GASPS AND SAYS NEKA BETRAYED HIM.
    //     NEKA: “THIS IS ONE GAME, NOW EVERY GAME WILL COME HERE.”
    //     ONE GAME WAS NEVER ENOUGH.
    //   HIS WHOLE HUMAN
    //     SEPT 27: THE HUMAN FORM AT 0% FOX. SEPT 28: 6 FEET TALL.
    //     NOW “NEKA FINALLY BECAME HIS WHOLE HUMAN,” THE POWER OF EVERYONE, AND MORE.
    //     EXPERIMENT 12-12-12.
    const dt = c - 20510.0;
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
    const gr945=ctx.createLinearGradient(0,top+H,0,top);
    gr945.addColorStop(0,'rgba(255,60,90,0.22)'); gr945.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr945.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr945; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EXPERIMENT 12-12-12', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AFTER OREN.EXE BEATEN EVERY BEING IN FICTION AND META-FICTION, NEKA TAKEN THE SOULS AND POWER,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE MADE HIMSELF EXPERIMENT 12-12-12, A BEING OF EVERYONE AND EVERYTHING,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS “WITH OREN.EXE’S HELP, THE GAME IS NOW MINE.””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 5:25 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky945=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky945, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky945, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN DID THE FIGHTING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA HID. OREN BEAT EVERY BEING IN FICTION AND META-FICTION.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA TOOK THE SOULS AND THE POWER WHEN IT WAS OVER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ACCEPTION WAS THE PLAN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BETRAYED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.EXE GASPS AND SAYS NEKA BETRAYED HIM.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA: “THIS IS ONE GAME, NOW EVERY GAME WILL COME HERE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE GAME WAS NEVER ENOUGH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy945=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy945, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy945, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HIS WHOLE HUMAN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: THE HUMAN FORM AT 0% FOX. SEPT 28: 6 FEET TALL.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW “NEKA FINALLY BECAME HIS WHOLE HUMAN,” THE POWER OF EVERYONE, AND MORE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EXPERIMENT 12-12-12.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A BEING OF EVERYONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND EVERYTHING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EXPERIMENT 12-12-12 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===946){
    // BEAT 946: DATA COLLECTED..
    // Toby, September 29, 2026, 5:25 PM EDT, his own typing:
    //   “NEKA WALKED OVER AND TOUCHED THE CORE, OREN.EXE’S BODY ALL FROZE, NEKA TAKES ALL THE STUFF
    //   FROM OREN.EXE, OREN.EXE BECAME NORMAL OREN SPRUNKI. THE SCREEN SAYS “DATA COLLECTED.”
    //   ... WINTER OREN SPRUNKI. NO .PS ANYMORE, NEKA GOT ALL THE POWER.”
    // Priors, each verified in the archive before it was drawn:
    //   ONE TOUCH
    //     SEPT 28, ONE TOUCH SENT BACON’S POWER LEVEL TO 0.
    //     TODAY ONE TOUCH ON THE CORE TAKES EVERYTHING OREN HAD.
    //     HE NEVER HAS TO SWING.
    //   HIS FAVORITE IS DATA
    //     SEPT 27: NEKA IS THE ONLY ONE WHO CONSUMES DATA.
    //     THE SCREEN SAYS IT OUT LOUD: “DATA COLLECTED.”
    //     OREN WAS THE DATA.
    //   WINTER OREN SPRUNKI
    //     NEKA SHATTERS THE ICE AND LOCKS OREN SPRUNKI IN IT. WINTER MODE.
    //     NO .EXE, NO .PS. JUST OREN SPRUNKI.
    //     A GOD AT 4:56 PM. FROZEN AT 5:25.
    const dt = c - 20532.0;
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
    const gr946=ctx.createLinearGradient(0,top+H,0,top);
    gr946.addColorStop(0,'rgba(127,212,255,0.22)'); gr946.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr946.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr946; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('DATA COLLECTED.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA WALKED OVER AND TOUCHED THE CORE, OREN.EXE’S BODY ALL FROZE, NEKA TAKES ALL THE STUFF', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FROM OREN.EXE, OREN.EXE BECAME NORMAL OREN SPRUNKI. THE SCREEN SAYS “DATA COLLECTED.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... WINTER OREN SPRUNKI. NO .PS ANYMORE, NEKA GOT ALL THE POWER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 5:25 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky946=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky946, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky946, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE TOUCH', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28, ONE TOUCH SENT BACON’S POWER LEVEL TO 0.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY ONE TOUCH ON THE CORE TAKES EVERYTHING OREN HAD.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE NEVER HAS TO SWING.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS FAVORITE IS DATA', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: NEKA IS THE ONLY ONE WHO CONSUMES DATA.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SCREEN SAYS IT OUT LOUD: “DATA COLLECTED.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OREN WAS THE DATA.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy946=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy946, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy946, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WINTER OREN SPRUNKI', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SHATTERS THE ICE AND LOCKS OREN SPRUNKI IN IT. WINTER MODE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NO .EXE, NO .PS. JUST OREN SPRUNKI.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A GOD AT 4:56 PM. FROZEN AT 5:25.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA GOT ALL THE POWER.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOW EVERY GAME WILL COME HERE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ DATA COLLECTED. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
