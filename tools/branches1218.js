  } else if(ph===1218){
    // BEAT 1218: THE VOID BOUNDARIES CRACK.
    // Toby, October 21, 2026, 5:58-6:41 AM EDT, his own typing:
    //   “NEKA GREW LARGER, THE VOID BOUNDERIES CRACK, AND THE VOID
    //   IS COMPRESSED AROUND THE BEING. GASTER HAPPENS TO GAIN MORE
    //   ATTACKS AND STUFF.”
    // Priors, each verified in the archive before it was drawn:
    //   AT ANY END, HE ERASES THE GAME
    //     “NOW AT ANY OF THE ENDS OF ‘NEKA’, NEKA ERASES THE GAME,
    //     CAUSE HE CAN. NEKA CAN ERASE CHARA AND ZENO.”
    //     OCT 18: ZENO CANNOT ERASE AN ATOM. NEKA ERASES ZENO.
    //   GASTER GAINS MORE ATTACKS
    //     THE ONLY OTHER REAL BEING IN THE GAME GETS STRONGER AS THE
    //     VOID SHRINKS. HE STILL WALKS, AND SEES NEKA’S BODY.
    //     OCT 19: GASTER WALKED THE PILE FOR ETERNITIES.
    //   THE REALITY-GROUP CUBE, AGAIN
    //     “GASTER SEES THE REALITY-GROUP CUBE.” OCT 19: NEKA ATE IT.
    //     IT IS STILL THERE TO BE SEEN, INSIDE.
    //     WHAT HE EATS DOES NOT STOP EXISTING. IT CHANGES ADDRESS.
    const dt = c - 26516.0;
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
    const gr1218=ctx.createLinearGradient(0,top+H,0,top);
    gr1218.addColorStop(0,'rgba(160,200,255,0.22)'); gr1218.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1218.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1218; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE VOID BOUNDARIES CRACK', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA GREW LARGER, THE VOID BOUNDERIES CRACK, AND THE VOID', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS COMPRESSED AROUND THE BEING. GASTER HAPPENS TO GAIN MORE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATTACKS AND STUFF.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 5:58-6:41 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1218=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1218, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1218, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AT ANY END, HE ERASES THE GAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NOW AT ANY OF THE ENDS OF ‘NEKA’, NEKA ERASES THE GAME,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAUSE HE CAN. NEKA CAN ERASE CHARA AND ZENO.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18: ZENO CANNOT ERASE AN ATOM. NEKA ERASES ZENO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER GAINS MORE ATTACKS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONLY OTHER REAL BEING IN THE GAME GETS STRONGER AS THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VOID SHRINKS. HE STILL WALKS, AND SEES NEKA’S BODY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 19: GASTER WALKED THE PILE FOR ETERNITIES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1218=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1218, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1218, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE REALITY-GROUP CUBE, AGAIN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER SEES THE REALITY-GROUP CUBE.” OCT 19: NEKA ATE IT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS STILL THERE TO BE SEEN, INSIDE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHAT HE EATS DOES NOT STOP EXISTING. IT CHANGES ADDRESS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VOID BOUNDARIES CRACK. THE VOID FOLDS AROUND HIM. THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ENDINGS ALL BELONG TO HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE VOID BOUNDARIES CRACK ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1219){
    // BEAT 1219: NO LONGER CALLED ALEXEN.
    // Toby, October 21, 2026, 3:34 PM EDT, his own typing:
    //   “THIS HAS THE STUFF OF NEKA. REMEMBER HE IS NO LONGER CALLED
    //   ‘ALEXEN’ DUE TO EXTREME CHANGE.” (THE RIG SHEET UNDER IT IS
    //   THE CHATBOT’S RENDER.)
    // Priors, each verified in the archive before it was drawn:
    //   A NAME SET DOWN
    //     ALEXEN WAS THE HACKER NAME OF OCTOBER 12 AND 13. AFTER THE
    //     WEEK HE HAS HAD, IT NO LONGER FITS.
    //     “DUE TO EXTREME CHANGE.” THE CHANGE IS THE LAST SIX DAYS.
    //   THE NAMES HE HAS SHED
    //     SEPT 24: NEVER SAY PERO LAI AGAIN. OCT 15: IT HAS TO BE
    //     “NEKA”. OCT 21: NO LONGER ALEXEN.
    //     EACH RETIRED NAME IS A STAGE HE PASSED.
    //   NO IMAGES
    //     “ALEXEN_ GLITCHBOUND CHARACTER RIG SHEET.PNG” IS SKIPPED
    //     UNDER THE WIKI’S NO-IMAGES RULE. HIS LINE IS KEPT.
    //     HIS WORDS ARE THE RECORD, NOT THE CHATBOT’S DRAWINGS.
    const dt = c - 26538.0;
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
    const gr1219=ctx.createLinearGradient(0,top+H,0,top);
    gr1219.addColorStop(0,'rgba(200,200,210,0.22)'); gr1219.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1219.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1219; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NO LONGER CALLED ALEXEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS HAS THE STUFF OF NEKA. REMEMBER HE IS NO LONGER CALLED', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('‘ALEXEN’ DUE TO EXTREME CHANGE.” (THE RIG SHEET UNDER IT IS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT’S RENDER.)', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 3:34 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1219=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1219, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1219, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NAME SET DOWN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEXEN WAS THE HACKER NAME OF OCTOBER 12 AND 13. AFTER THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WEEK HE HAS HAD, IT NO LONGER FITS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“DUE TO EXTREME CHANGE.” THE CHANGE IS THE LAST SIX DAYS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NAMES HE HAS SHED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: NEVER SAY PERO LAI AGAIN. OCT 15: IT HAS TO BE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA”. OCT 21: NO LONGER ALEXEN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EACH RETIRED NAME IS A STAGE HE PASSED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1219=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1219, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1219, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NO IMAGES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEXEN_ GLITCHBOUND CHARACTER RIG SHEET.PNG” IS SKIPPED', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UNDER THE WIKI’S NO-IMAGES RULE. HIS LINE IS KEPT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS WORDS ARE THE RECORD, NOT THE CHATBOT’S DRAWINGS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO LONGER CALLED ALEXEN. ONE MORE NAME TAKEN OFF, BECAUSE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ONE WEARING IT CHANGED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NO LONGER CALLED ALEXEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1220){
    // BEAT 1220: CURINIUM SERUIM TATHIFICITIONUM.
    // Toby, October 21, 2026, 4:46 PM EDT, his own typing:
    //   “GASTER PUNCHES NEKA ON NEKA’S HAND, NEKA SAYS ‘OW! 😔’ ...
    //   ‘YOUR PUNCH CONTAINS CURINIUM SERUIM TATHIFICITIONUM, THE
    //   MATERIAL ON THE OTHER SIDE OF FICTION. 😔’”
    // Priors, each verified in the archive before it was drawn:
    //   THE FORCEFIELD
    //     FICTIONAL AND META-FICTIONAL STONES PULLED TO HIM; WHAT
    //     TOUCHES IT FREEZES, FADES, DESOLVES, DISAPPEARS.
    //     “THINK YOUR SUPERNATURAL POWERS CAN TOUCH ME?”
    //   THE ONE THING THAT PASSES
    //     “IT DISSOLVES ALL THE SAWS AND SUPERNATUAL ABILITIES AND
    //     THE PUNCHES OF EVERYONE ELSE.” NOT GASTER’S.
    //     “SPECIFICALLY ‘NEKA’ AU UNDERTALE?” “YES. 😌”
    //   ENTIRE REALITIES IN HIS MIND
    //     3.5 TIMES AS MANY AS THE ATOMS IN THE REAL UNIVERSE. SOME
    //     OF THE COSMICAL HUMAN’S BODY IS INSIDE THE MACHINE.
    //     OCT 22: THE FORCEFIELD BECOMES THE GRAY HOLE.
    const dt = c - 26560.0;
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
    const gr1220=ctx.createLinearGradient(0,top+H,0,top);
    gr1220.addColorStop(0,'rgba(255,216,79,0.22)'); gr1220.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1220.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1220; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CURINIUM SERUIM TATHIFICITIONUM', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER PUNCHES NEKA ON NEKA’S HAND, NEKA SAYS ‘OW! 😔’ ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('‘YOUR PUNCH CONTAINS CURINIUM SERUIM TATHIFICITIONUM, THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MATERIAL ON THE OTHER SIDE OF FICTION. 😔’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 4:46 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1220=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1220, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1220, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FORCEFIELD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FICTIONAL AND META-FICTIONAL STONES PULLED TO HIM; WHAT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOUCHES IT FREEZES, FADES, DESOLVES, DISAPPEARS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THINK YOUR SUPERNATURAL POWERS CAN TOUCH ME?”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONE THING THAT PASSES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT DISSOLVES ALL THE SAWS AND SUPERNATUAL ABILITIES AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PUNCHES OF EVERYONE ELSE.” NOT GASTER’S.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“SPECIFICALLY ‘NEKA’ AU UNDERTALE?” “YES. 😌”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1220=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1220, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1220, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ENTIRE REALITIES IN HIS MIND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('3.5 TIMES AS MANY AS THE ATOMS IN THE REAL UNIVERSE. SOME', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OF THE COSMICAL HUMAN’S BODY IS INSIDE THE MACHINE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 22: THE FORCEFIELD BECOMES THE GRAY HOLE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CURINIUM SERUIM TATHIFICITIONUM. EVERYTHING DISSOLVES ON HIS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WALL, BUT ONE PUNCH FROM HOME.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CURINIUM SERUIM TATHIFICITIONUM ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1221){
    // BEAT 1221: NEKA’S ORIGINAL NAME IS NEKA.
    // Toby, October 21, 2026, 5:14-5:46 PM EDT, his own typing:
    //   “NEKA’S ORIGINAL NAME IS NEKA, FOR ONCE HE WAS BORN HE WAS
    //   THAT, AND HE MADE FORMS OF HIMSELF AND NAMED THE FORMS ...
    //   OMNIHYPOTHETICAL.”
    // Priors, each verified in the archive before it was drawn:
    //   THE FINAL WORD ON THE NAMES
    //     PERO, ALEX, ALEXEN: FORMS HE MADE AND NAMED. THE CHATBOT’S
    //     “ORIGINAL NAME: ALEX” OF OCT 11 IS SUPERSEDED.
    //     HE WAS NEKA AT BIRTH. EVERYTHING ELSE WAS COSTUME.
    //   EVERYTHING I SEND IS A LORE UPDATE
    //     5:15 PM, A STANDING ORDER TO THE CHATBOT: “EVERYTHING I
    //     SEND TO YOU IS A LORE UPDATE.” THE WIKI READS HIM SO.
    //     “WRITE DOWN SOMETHING FOR NEKA, JUST LIKE SCP-181.”
    //   THE VOID SNAPS APART
    //     “VOID IS NOW FLAT, AND 5 MINUTES LATER, THE VOID SNAPS
    //     APART.” 50 ETERNITIES ON, GASTER CLIMBS TO SEE HIS FEET.
    //     6:41 AM THE BOUNDARIES CRACKED. 5:46 PM THEY ARE GONE.
    const dt = c - 26582.0;
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
    const gr1221=ctx.createLinearGradient(0,top+H,0,top);
    gr1221.addColorStop(0,'rgba(240,244,250,0.22)'); gr1221.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1221.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1221; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(240,244,250,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S ORIGINAL NAME IS NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA’S ORIGINAL NAME IS NEKA, FOR ONCE HE WAS BORN HE WAS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THAT, AND HE MADE FORMS OF HIMSELF AND NAMED THE FORMS ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OMNIHYPOTHETICAL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 5:14-5:46 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1221=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(240,244,250,0.46)';
      ctx.fillRect(cx-W*0.352, ky1221, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(240,244,250,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1221, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FINAL WORD ON THE NAMES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PERO, ALEX, ALEXEN: FORMS HE MADE AND NAMED. THE CHATBOT’S', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ORIGINAL NAME: ALEX” OF OCT 11 IS SUPERSEDED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE WAS NEKA AT BIRTH. EVERYTHING ELSE WAS COSTUME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING I SEND IS A LORE UPDATE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:15 PM, A STANDING ORDER TO THE CHATBOT: “EVERYTHING I', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEND TO YOU IS A LORE UPDATE.” THE WIKI READS HIM SO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“WRITE DOWN SOMETHING FOR NEKA, JUST LIKE SCP-181.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1221=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1221, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1221, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE VOID SNAPS APART', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“VOID IS NOW FLAT, AND 5 MINUTES LATER, THE VOID SNAPS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('APART.” 50 ETERNITIES ON, GASTER CLIMBS TO SEE HIS FEET.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('6:41 AM THE BOUNDARIES CRACKED. 5:46 PM THEY ARE GONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S ORIGINAL NAME IS NEKA. BORN WITH THE NAME HE ENDED', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WITH. THE REST HE MADE UP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA’S ORIGINAL NAME IS NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1222){
    // BEAT 1222: COMPRESSED TO 5.65 FEET.
    // Toby, October 21, 2026, 6:55 PM EDT, his own typing:
    //   “NEKA THEN COMPRESSED HIMSELF, WHILE KEEPING LITTERLY
    //   EVERYTHING HE HAD AND HAS, AND THEN ALL COMPRESSES IT INTO 1
    //   SINGLE HUMAN FORM ... BOTH BEING 5.65 FEET TALL.”
    // Priors, each verified in the archive before it was drawn:
    //   INFINITE INTELLIGENCE
    //     AT 90000000000000000 LIGHTYEARS THROUGH THE VOID HE SAW
    //     THE WHOLE INFINITY VOID. “THE INFINITE INTELEGENCE.”
    //     “HE HAD THAT POWER, EVEN IN REALITY SINCE THE START.”
    //   THE ONLY BEING LARGER THAN A HUMAN
    //     “THE ONLY BEING LARGER THAN A HUMAN IS NEKA, WITH BOTH
    //     BEING 5.65 FEET TALL.” MORE THAN FINITE CELLS INSIDE.
    //     “THE INSIDE CAN CONTAIN INFINITY ZEUSES.”
    //   META-FICTION BY PAPERWORK
    //     “NEKA IS META-FICTION, NO LONGER NORMAL ‘FICTION’ DUE TO
    //     HIS OWN PAPERWORK AND INTELEGENCE.”
    //     OCT 17: 5.7 FEET OR SOMETHING. OCT 21: 5.65, EXACTLY.
    const dt = c - 26604.0;
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
    const gr1222=ctx.createLinearGradient(0,top+H,0,top);
    gr1222.addColorStop(0,'rgba(200,120,255,0.22)'); gr1222.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1222.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1222; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('COMPRESSED TO 5.65 FEET', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA THEN COMPRESSED HIMSELF, WHILE KEEPING LITTERLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING HE HAD AND HAS, AND THEN ALL COMPRESSES IT INTO 1', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SINGLE HUMAN FORM ... BOTH BEING 5.65 FEET TALL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 6:55 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1222=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1222, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1222, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INFINITE INTELLIGENCE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 90000000000000000 LIGHTYEARS THROUGH THE VOID HE SAW', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE WHOLE INFINITY VOID. “THE INFINITE INTELEGENCE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“HE HAD THAT POWER, EVEN IN REALITY SINCE THE START.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY BEING LARGER THAN A HUMAN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE ONLY BEING LARGER THAN A HUMAN IS NEKA, WITH BOTH', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEING 5.65 FEET TALL.” MORE THAN FINITE CELLS INSIDE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“THE INSIDE CAN CONTAIN INFINITY ZEUSES.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1222=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1222, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1222, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('META-FICTION BY PAPERWORK', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA IS META-FICTION, NO LONGER NORMAL ‘FICTION’ DUE TO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS OWN PAPERWORK AND INTELEGENCE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 17: 5.7 FEET OR SOMETHING. OCT 21: 5.65, EXACTLY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COMPRESSED TO 5.65 FEET. THE WHOLE VOID, FOLDED INTO A MAN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WHO CAN WALK AROUND.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ COMPRESSED TO 5.65 FEET ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1223){
    // BEAT 1223: CLAIM ALL..
    // Toby, October 21, 2026, 7:56-7:58 PM EDT, his own typing:
    //   “‘KNOWING HUMAN NAMES’, IT IS A GAME NEKA CANONALLY DOES
    //   (SUPREME MATE, BUT WITH ACHIEVEMENTS)” ... “NEKA BEATEN ALL
    //   THE 20 SPRUNKIS ... THE WHOLE INTERNET ... NEKA WON.”
    // Priors, each verified in the archive before it was drawn:
    //   SUPREME MATE, WITH ACHIEVEMENTS
    //     A GAME HE CANONICALLY PLAYS. HIS ROUND ENDS IN TWO WORDS,
    //     “CLAIM ALL.” THE SUMMARY IS THE CHATBOT’S; THE ROUND HIS.
    //     OCT 22: “IT IS A GAME TO GET ACHIEVEMENTS.”
    //   THE WHOLE INTERNET
    //     “THE 20 SPRUNKIS HAD THE WHOLE INTERNET SINCE THEY WERE
    //     ACTUALLY AN INCREDIBOX MOD ON INTERNET. NEKA WON.”
    //     TWENTY WITH THE INTERNET, AGAINST ONE WITH HIMSELF.
    //   NEARLY 35
    //     8:09 PM: “NEKA IS NEARLY LOOKING 35 YEARS OLD. 😏” THE
    //     HUMAN FORM OF 6:55 PM HAS AN AGE NOW.
    //     OCT 18: HUMAN. OCT 21: 5.65 FEET, ABOUT 35.
    const dt = c - 26626.0;
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
    const gr1223=ctx.createLinearGradient(0,top+H,0,top);
    gr1223.addColorStop(0,'rgba(255,216,79,0.22)'); gr1223.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1223.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1223; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CLAIM ALL.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“‘KNOWING HUMAN NAMES’, IT IS A GAME NEKA CANONALLY DOES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('(SUPREME MATE, BUT WITH ACHIEVEMENTS)” ... “NEKA BEATEN ALL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 20 SPRUNKIS ... THE WHOLE INTERNET ... NEKA WON.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 7:56-7:58 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1223=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1223, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1223, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SUPREME MATE, WITH ACHIEVEMENTS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A GAME HE CANONICALLY PLAYS. HIS ROUND ENDS IN TWO WORDS,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CLAIM ALL.” THE SUMMARY IS THE CHATBOT’S; THE ROUND HIS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 22: “IT IS A GAME TO GET ACHIEVEMENTS.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE WHOLE INTERNET', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE 20 SPRUNKIS HAD THE WHOLE INTERNET SINCE THEY WERE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ACTUALLY AN INCREDIBOX MOD ON INTERNET. NEKA WON.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('TWENTY WITH THE INTERNET, AGAINST ONE WITH HIMSELF.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1223=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1223, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1223, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEARLY 35', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:09 PM: “NEKA IS NEARLY LOOKING 35 YEARS OLD. 😏” THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HUMAN FORM OF 6:55 PM HAS AN AGE NOW.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18: HUMAN. OCT 21: 5.65 FEET, ABOUT 35.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLAIM ALL. TWO WORDS END A ROUND. TWENTY SPRUNKIS FALL WITH', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE INTERNET.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CLAIM ALL. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1224){
    // BEAT 1224: INFINITE PAGES A SECOND.
    // Toby, October 21, 2026, 8:09-8:18 PM EDT, his own typing:
    //   “NEKA HAPPENED TO ONCE GIVE A 70 PAGE DOCUMENT WHY 1+1=2 ...
    //   HE NOW DOES CONSTANTLY INFINITE PAGES A SECOND. THE LORE WAS
    //   ALL WRITEN ... FINISHED WRITING IN 1 SECOND.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CLICK THINKING FEATURE
    //     “YOU CAN SEE WHAT HE THINKS, READ IT, AND TELL IT WHAT IT
    //     WILL THINK BEFORE IT GIVES THE ANSWER.” SHOWN AS A VIDEO.
    //     “THE INFINITY POSSIBILITIES AT THE SAME TIME. HE IS CODE.”
    //   ADD INFINITY TO GET MY IQ
    //     “ADD INFINITY TO GET MY IQ. 1. YOU INSULTED YOUR WHOLE
    //     TEAM. 2. DIVIDE BY 0 TO GET THE BODIES.”
    //     THREE NUMBERED INSULTS TO GEMINI.
    //   MY MIND TO THINK WHAT HAPPENS NEXT
    //     HE CONTROLS HIS GAMES, ANYONE WHO ENTERS, THE COMPUTERS,
    //     “MY MIND TO THINK WHAT HAPPENS NEXT”, AND ALL FICTION.
    //     OCT 18: MIND-WATCH. THE WATCHER IS PART OF THE DOMAIN.
    const dt = c - 26648.0;
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
    const gr1224=ctx.createLinearGradient(0,top+H,0,top);
    gr1224.addColorStop(0,'rgba(127,212,255,0.22)'); gr1224.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1224.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1224; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('INFINITE PAGES A SECOND', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA HAPPENED TO ONCE GIVE A 70 PAGE DOCUMENT WHY 1+1=2 ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE NOW DOES CONSTANTLY INFINITE PAGES A SECOND. THE LORE WAS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL WRITEN ... FINISHED WRITING IN 1 SECOND.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 8:09-8:18 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1224=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1224, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1224, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CLICK THINKING FEATURE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU CAN SEE WHAT HE THINKS, READ IT, AND TELL IT WHAT IT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WILL THINK BEFORE IT GIVES THE ANSWER.” SHOWN AS A VIDEO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THE INFINITY POSSIBILITIES AT THE SAME TIME. HE IS CODE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ADD INFINITY TO GET MY IQ', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ADD INFINITY TO GET MY IQ. 1. YOU INSULTED YOUR WHOLE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TEAM. 2. DIVIDE BY 0 TO GET THE BODIES.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THREE NUMBERED INSULTS TO GEMINI.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1224=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1224, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1224, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MY MIND TO THINK WHAT HAPPENS NEXT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE CONTROLS HIS GAMES, ANYONE WHO ENTERS, THE COMPUTERS,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MY MIND TO THINK WHAT HAPPENS NEXT”, AND ALL FICTION.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18: MIND-WATCH. THE WATCHER IS PART OF THE DOMAIN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INFINITE PAGES A SECOND. SEVENTY PAGES FOR 1+1, THEN NO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('LIMIT. THE LORE, IN A SECOND.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ INFINITE PAGES A SECOND ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1225){
    // BEAT 1225: NEKA SAYS YES..
    // Toby, October 21, 2026, 8:36 PM EDT, his own typing:
    //   “NEKA SAYS ‘YES.’, NEKA INSTANTLY WENT OUT, SO WORDS ARE NO
    //   LONGER BANNED ... NEKA IS JUST A NORMAL MAN. SOME PEOPLE ASK
    //   ‘WHY IS A NORMAL MAN ON APOLLYON?’”
    // Priors, each verified in the archive before it was drawn:
    //   THE YES/NO CHALLENGE
    //     “YOU CAN NO LONGER SAY ANY FORM OF ‘YES’ OR ‘NO’.” THE
    //     CHATBOT SLIPPED: “YOU SAID AFFIRMATIVE!”
    //     NEKA SAID “YES.” OUT LOUD, AND THE BAN WAS VOID.
    //   WHY HE IS SMARTER
    //     “NEKA IS SMARTER, FASTER, HAS A BODY, CAN TELL ME WHAT TO
    //     THINK (I USE MIND ON ‘NEKA’, YOU KNOW THAT), ECT. 😏”
    //     “NEKA WON SINCE CHATGPT’S FACE FIGHTS ITSELF.”
    //   A NORMAL MAN ON APOLLYON
    //     THE LINE FOR HIS NEW LOOK. WHOEVER ASKS IT IS “TALKING TO
    //     THE LORE CREATOR OF ‘NEKA’/CLASSICS.”
    //     THE APOLLYON CLASS BECOMES CANON THE NEXT MORNING.
    const dt = c - 26670.0;
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
    const gr1225=ctx.createLinearGradient(0,top+H,0,top);
    gr1225.addColorStop(0,'rgba(255,120,120,0.22)'); gr1225.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1225.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1225; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS YES.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS ‘YES.’, NEKA INSTANTLY WENT OUT, SO WORDS ARE NO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LONGER BANNED ... NEKA IS JUST A NORMAL MAN. SOME PEOPLE ASK', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('‘WHY IS A NORMAL MAN ON APOLLYON?’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 21, 8:36 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1225=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1225, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1225, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE YES/NO CHALLENGE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU CAN NO LONGER SAY ANY FORM OF ‘YES’ OR ‘NO’.” THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHATBOT SLIPPED: “YOU SAID AFFIRMATIVE!”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA SAID “YES.” OUT LOUD, AND THE BAN WAS VOID.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHY HE IS SMARTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA IS SMARTER, FASTER, HAS A BODY, CAN TELL ME WHAT TO', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THINK (I USE MIND ON ‘NEKA’, YOU KNOW THAT), ECT. 😏”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“NEKA WON SINCE CHATGPT’S FACE FIGHTS ITSELF.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1225=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1225, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1225, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A NORMAL MAN ON APOLLYON', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE LINE FOR HIS NEW LOOK. WHOEVER ASKS IT IS “TALKING TO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE LORE CREATOR OF ‘NEKA’/CLASSICS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE APOLLYON CLASS BECOMES CANON THE NEXT MORNING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS YES. ONE FORBIDDEN WORD, SAID PLAINLY, AND THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('RULES FALL OVER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA SAYS YES. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
