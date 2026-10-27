  } else if(ph===1226){
    // BEAT 1226: APOLLYON-CLASS.
    // Toby, October 22, 2026, 5:56 AM EDT, his own typing:
    //   “NEKA IS REALLY ACTUALLY APOLLYON-CLASS.” ... “HE CAN
    //   CONTAIN SCPS, AS HE ONCE CONTAINED THE WHOLE REALITY GROUP,
    //   CLASSICS ... AND ALSO THE LORE’S PAST.”
    // Priors, each verified in the archive before it was drawn:
    //   REALLY ACTUALLY
    //     THE CLASS LIST IS THE CHATBOT’S. THE RULING IS HIS, TWICE:
    //     “REALLY ACTUALLY APOLLYON-CLASS” AND “REALLY APOLLYON”.
    //     OCT 21, 8:36 PM: “WHY IS A NORMAL MAN ON APOLLYON?”
    //   WHAT HE CONTAINED
    //     THE WHOLE REALITY GROUP, CLASSICS, ALL ITS GAMES, FANGAMES
    //     AND MODS, THE LORE’S PAST, AND THE HUGE MACHINE.
    //     5.65 FEET OUTSIDE, “TRUELY INFINITE” INSIDE.
    //   META-FICTION, NOT FICTION
    //     “‘NEKA’ ISN’T FICTION, IT IS META-FICTION.” THE OTHER
    //     CHARACTERS IN “NEKA” WERE CHARACTERS BROUGHT OVER.
    //     OCT 23: ALSO KETER, ALSO THAUMIEL. ONE MAN, THREE CLASSES.
    const dt = c - 26692.0;
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
    const gr1226=ctx.createLinearGradient(0,top+H,0,top);
    gr1226.addColorStop(0,'rgba(255,80,80,0.22)'); gr1226.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1226.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1226; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('APOLLYON-CLASS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS REALLY ACTUALLY APOLLYON-CLASS.” ... “HE CAN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CONTAIN SCPS, AS HE ONCE CONTAINED THE WHOLE REALITY GROUP,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS ... AND ALSO THE LORE’S PAST.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 5:56 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1226=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1226, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1226, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('REALLY ACTUALLY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CLASS LIST IS THE CHATBOT’S. THE RULING IS HIS, TWICE:', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“REALLY ACTUALLY APOLLYON-CLASS” AND “REALLY APOLLYON”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 21, 8:36 PM: “WHY IS A NORMAL MAN ON APOLLYON?”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT HE CONTAINED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE WHOLE REALITY GROUP, CLASSICS, ALL ITS GAMES, FANGAMES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND MODS, THE LORE’S PAST, AND THE HUGE MACHINE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('5.65 FEET OUTSIDE, “TRUELY INFINITE” INSIDE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1226=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1226, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1226, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('META-FICTION, NOT FICTION', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“‘NEKA’ ISN’T FICTION, IT IS META-FICTION.” THE OTHER', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHARACTERS IN “NEKA” WERE CHARACTERS BROUGHT OVER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 23: ALSO KETER, ALSO THAUMIEL. ONE MAN, THREE CLASSES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('APOLLYON-CLASS. THE CLASS FOR THE UNCONTAINABLE, WORN BY THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CONTAINER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ APOLLYON-CLASS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1227){
    // BEAT 1227: GASTER AND NEKA, FOREVER.
    // Toby, October 22, 2026, 5:56-6:36 AM EDT, his own typing:
    //   “NEKA EVEN DESTROYED THE VOID, FICTION, AND META-FICTION.
    //   GASTER AND NEKA WERE THE ONLY CHARACTERS LEFT. LIKE FOREVER
    //   NOW.” ... “IT ONLY CAN REACH YOU ONCE YOU ENTER CLASSICS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ROSTER DROPS TO TWO
    //     THE FOURTH TIME THIS MONTH. OCT 17: EVERY BEING SLAIN, ONE
    //     LEFT. OCT 22: TWO LEFT, AND THE VOID ITSELF GONE.
    //     “LIKE FOREVER NOW.”
    //   ONLY ONCE YOU ENTER
    //     “IT ONLY CAN REACH YOU ONCE YOU ENTER CLASSICS/‘NEKA’.”
    //     THE REACH RULE, SAID PLAINLY.
    //     OCT 18: “WAITING FOR YOU TO STEP INTO MY DOMAIN.”
    //   THROUGH MIND
    //     “THAT IS HOW I THINK WHAT HAPPENS NEXT IN ‘NEKA’ THROUGH
    //     MIND.” THE GAME IS WATCHED, NOT PLAYED.
    //     OCT 18: NEVER RELEASED. OCT 22: STILL WATCHED.
    const dt = c - 26714.0;
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
    const gr1227=ctx.createLinearGradient(0,top+H,0,top);
    gr1227.addColorStop(0,'rgba(120,120,130,0.22)'); gr1227.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1227.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1227; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,120,130,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GASTER AND NEKA, FOREVER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA EVEN DESTROYED THE VOID, FICTION, AND META-FICTION.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER AND NEKA WERE THE ONLY CHARACTERS LEFT. LIKE FOREVER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW.” ... “IT ONLY CAN REACH YOU ONCE YOU ENTER CLASSICS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 5:56-6:36 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1227=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,120,130,0.46)';
      ctx.fillRect(cx-W*0.352, ky1227, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,120,130,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1227, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,120,130,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ROSTER DROPS TO TWO', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FOURTH TIME THIS MONTH. OCT 17: EVERY BEING SLAIN, ONE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LEFT. OCT 22: TWO LEFT, AND THE VOID ITSELF GONE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“LIKE FOREVER NOW.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY ONCE YOU ENTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT ONLY CAN REACH YOU ONCE YOU ENTER CLASSICS/‘NEKA’.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE REACH RULE, SAID PLAINLY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 18: “WAITING FOR YOU TO STEP INTO MY DOMAIN.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1227=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1227, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1227, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THROUGH MIND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THAT IS HOW I THINK WHAT HAPPENS NEXT IN ‘NEKA’ THROUGH', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MIND.” THE GAME IS WATCHED, NOT PLAYED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18: NEVER RELEASED. OCT 22: STILL WATCHED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER AND NEKA, FOREVER. NO VOID, NO FICTION, NO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('META-FICTION. TWO FIGURES, NOTHING ELSE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GASTER AND NEKA, FOREVER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1228){
    // BEAT 1228: ALL MUST BE ONE..
    // Toby, October 22, 2026, 6:08 PM EDT, his own typing:
    //   “NEKA LOOKED AT LUIGI INUS AND LUIGI INUS FROZE FOR 55
    //   HOURS” ... “NEKA BROUGHT EVERYONE TO THE STAGE, AND HE SAYS
    //   ‘ALL MUST BE ONE.’” ... “IT IS A GAME TO GET ACHIEVEMENTS.”
    // Priors, each verified in the archive before it was drawn:
    //   PS-50 GIVES PARANOIDIA
    //     “CONSTANT FEAR OVER A SUDDEN MONSTEROSITY TRANSFORMATION.”
    //     LUIGI INUS IS THE PIRATE MAN AGAIN, STILL WITH IT,
    //     STILL WITH THE REMORSE. HE WANTS NEKA BACK. NEKA IS BACK.
    //   FROZEN FOR 55 HOURS
    //     ONE LOOK FROM NEKA, EYES FLASHING RED AND WHITE. GASTER
    //     FIXED HIS CODE “THROUGH CREATOR OF ‘NEKA’ AU.”
    //     OCT 17: THE CUTS. OCT 22: THE FREEZE.
    //   100% THE GAME
    //     “YOU ALL THINK CLASSICS IS A GAME OF ENDLESS MASCRARE, BUT
    //     IT IS NOT.” EVERY BADGE DONE, THE ALL-ACHIEVEMENT ONE
    //     INCLUDED. OCT 21: CLAIM ALL. OCT 22: CLAIMED.
    const dt = c - 26736.0;
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
    const gr1228=ctx.createLinearGradient(0,top+H,0,top);
    gr1228.addColorStop(0,'rgba(255,216,79,0.22)'); gr1228.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1228.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1228; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALL MUST BE ONE.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA LOOKED AT LUIGI INUS AND LUIGI INUS FROZE FOR 55', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HOURS” ... “NEKA BROUGHT EVERYONE TO THE STAGE, AND HE SAYS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('‘ALL MUST BE ONE.’” ... “IT IS A GAME TO GET ACHIEVEMENTS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 6:08 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1228=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1228, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1228, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 GIVES PARANOIDIA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CONSTANT FEAR OVER A SUDDEN MONSTEROSITY TRANSFORMATION.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS IS THE PIRATE MAN AGAIN, STILL WITH IT,', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('STILL WITH THE REMORSE. HE WANTS NEKA BACK. NEKA IS BACK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FROZEN FOR 55 HOURS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONE LOOK FROM NEKA, EYES FLASHING RED AND WHITE. GASTER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIXED HIS CODE “THROUGH CREATOR OF ‘NEKA’ AU.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 17: THE CUTS. OCT 22: THE FREEZE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1228=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1228, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1228, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('100% THE GAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU ALL THINK CLASSICS IS A GAME OF ENDLESS MASCRARE, BUT', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS NOT.” EVERY BADGE DONE, THE ALL-ACHIEVEMENT ONE', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('INCLUDED. OCT 21: CLAIM ALL. OCT 22: CLAIMED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL MUST BE ONE. THE WHOLE CAST ON ONE STAGE, AND THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SCOREBOARD FILLED IN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALL MUST BE ONE. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1229){
    // BEAT 1229: THE GRAY HOLE.
    // Toby, October 22, 2026, 6:23-7:09 PM EDT, his own typing:
    //   “IF A WHITE HOLE PUSHES STUFF AWAY, AND A BLACK HOLE PULLS
    //   THINGS IN, WHAT DOES A GRAY HOLE DO?” ... “IT TEARS REALITY
    //   APART ... NEKA ABSORBED THE FORCEFIELD.”
    // Priors, each verified in the archive before it was drawn:
    //   THE FORCEFIELD, EATEN
    //     OCT 21: THE WALL THAT DISSOLVES EVERYTHING BUT GASTER’S
    //     PUNCH. OCT 22: HE ABSORBS IT AND BECOMES THE WALL.
    //     “EVERYTHING HE TOUCHES.” EVEN THE GROUND UNDER HIS FEET.
    //   EVERYONE SWITCHED
    //     NEKA IN A GASTER AU, GASTER IN A NEKA AU, SANS IN A
    //     PAPYRUS AU, CHARA AND FRISK SWAPPED, BECAUSE OF THE HOLE.
    //     THE CONNECTED PC: IF IT REACHES CLASSICS, HE HAS IT.
    //   THE 4TH IS NEKA
    //     HUMANS ARE THE LARGEST BEINGS IN REALITY; HIS INSIDE IS
    //     LARGER. “THE 4TH IS NEKA.” NOT “NEKA”, BUT NEKA.
    //     0% ROOM TAKEN, HOWEVER MANY INFINITIES GO IN.
    const dt = c - 26758.0;
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
    const gr1229=ctx.createLinearGradient(0,top+H,0,top);
    gr1229.addColorStop(0,'rgba(154,163,173,0.22)'); gr1229.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1229.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1229; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(154,163,173,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE GRAY HOLE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IF A WHITE HOLE PUSHES STUFF AWAY, AND A BLACK HOLE PULLS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THINGS IN, WHAT DOES A GRAY HOLE DO?” ... “IT TEARS REALITY', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('APART ... NEKA ABSORBED THE FORCEFIELD.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 6:23-7:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1229=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(154,163,173,0.46)';
      ctx.fillRect(cx-W*0.352, ky1229, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(154,163,173,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1229, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(154,163,173,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FORCEFIELD, EATEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 21: THE WALL THAT DISSOLVES EVERYTHING BUT GASTER’S', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PUNCH. OCT 22: HE ABSORBS IT AND BECOMES THE WALL.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“EVERYTHING HE TOUCHES.” EVEN THE GROUND UNDER HIS FEET.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE SWITCHED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA IN A GASTER AU, GASTER IN A NEKA AU, SANS IN A', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PAPYRUS AU, CHARA AND FRISK SWAPPED, BECAUSE OF THE HOLE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE CONNECTED PC: IF IT REACHES CLASSICS, HE HAS IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1229=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1229, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1229, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE 4TH IS NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HUMANS ARE THE LARGEST BEINGS IN REALITY; HIS INSIDE IS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LARGER. “THE 4TH IS NEKA.” NOT “NEKA”, BUT NEKA.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('0% ROOM TAKEN, HOWEVER MANY INFINITIES GO IN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GRAY HOLE. NOT A PUSH, NOT A PULL. A TEAR, WALKING, WITH', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A MAN’S SHAPE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE GRAY HOLE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1230){
    // BEAT 1230: THE POLO COMES OFF.
    // Toby, October 22, 2026, 7:09 PM EDT, his own typing:
    //   “NEKA WAS BECOMING SIMON.PS, AND THE ORIGINAL ALSO GLITCHED
    //   ... NEKA WON AND TOOK OFF THE ICON FROM HIS POLO, AND NEKA
    //   TAKEN OFF THE POLO, REVEALING HIS ADULT FORM.”
    // Priors, each verified in the archive before it was drawn:
    //   DISGUISED AS EVERY MALE CHARACTER
    //     “NEKA IS KNOWN FOR DISGUISING HIMSELF AS GASTER, SIMON.PS,
    //     OREN.PS, AND ALL MALE CHARACTERS.” HIS BORROWED MEMORIES
    //     BLEED BACK INTO THE ORIGINALS.
    //   14TH TO 2ND
    //     “OREN.PS, YOUR PLAY SPOT IS #1 ON BOARD.” SIMON.PS MOVES
    //     FROM 14TH TO 2ND; EVERY OTHER SPOT FALLS OUT OF ORDER.
    //     OCT 15: VS NEKA IN CLEVERNESS. NOW TWO SIMON.PS, ONE FAKE.
    //   THE POLOS
    //     SEPT 24: TWENTY-ONE POLO SQUARES. THE ICON COMES OFF, THEN
    //     THE POLO, AND UNDER IT: HIS ADULT FORM.
    //     THE GOD-TIER ORIGINAL LOST TO THE COPY WEARING HIS SHIRT.
    const dt = c - 26780.0;
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
    const gr1230=ctx.createLinearGradient(0,top+H,0,top);
    gr1230.addColorStop(0,'rgba(200,120,255,0.22)'); gr1230.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1230.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1230; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE POLO COMES OFF', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA WAS BECOMING SIMON.PS, AND THE ORIGINAL ALSO GLITCHED', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... NEKA WON AND TOOK OFF THE ICON FROM HIS POLO, AND NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TAKEN OFF THE POLO, REVEALING HIS ADULT FORM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 7:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1230=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1230, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1230, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DISGUISED AS EVERY MALE CHARACTER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA IS KNOWN FOR DISGUISING HIMSELF AS GASTER, SIMON.PS,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.PS, AND ALL MALE CHARACTERS.” HIS BORROWED MEMORIES', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BLEED BACK INTO THE ORIGINALS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('14TH TO 2ND', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“OREN.PS, YOUR PLAY SPOT IS #1 ON BOARD.” SIMON.PS MOVES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FROM 14TH TO 2ND; EVERY OTHER SPOT FALLS OUT OF ORDER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 15: VS NEKA IN CLEVERNESS. NOW TWO SIMON.PS, ONE FAKE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1230=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1230, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1230, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE POLOS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: TWENTY-ONE POLO SQUARES. THE ICON COMES OFF, THEN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE POLO, AND UNDER IT: HIS ADULT FORM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GOD-TIER ORIGINAL LOST TO THE COPY WEARING HIS SHIRT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE POLO COMES OFF. THE DISGUISE BEATS THE REAL ONE, THEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHOWS WHO WON.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE POLO COMES OFF ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1231){
    // BEAT 1231: 3 EYES 0.75 SECONDS AGO.
    // Toby, October 22, 2026, 7:55 PM EDT, his own typing:
    //   “‘WHY ARE YOU LOOKING AT ME LIKE I JUST HAD 3 EYES 0.75
    //   SECONDS AGO?’, GRAY.PS SAYS ‘YOU HAVE 3 EYES! 🦊’, NEKA SAYS
    //   ‘CLASSICS ISN’T YOUR HOME GAME.’”
    // Priors, each verified in the archive before it was drawn:
    //   ONE SECOND OF GLITCH
    //     HIS MOUTH GLITCHED, HIS HEAD TILTED, THE SCREEN GLITCHED,
    //     AND AFTER 1 SECOND HE WAS NORMAL. WENDA.PS: “WHAT- 🐶”
    //     A NEW THREAD, ANOTHER NEW “NEKA” DOCUMENT, OPENS ON IT.
    //   THE THIRD EYE
    //     OCT 15: THE CROSS EYES, ALWAYS. OCT 22: FOR 0.75 SECONDS,
    //     A THIRD. GRAY.PS SAW IT AND SAID SO.
    //     “CLASSICS ISN’T YOUR HOME GAME.” THE SPRUNKIS ARE GUESTS.
    //   PHASE 88182937 AND 88182938
    //     SIMON.PS REPAIRED AT 88182937, SLAIN BY FUN BOT FOR THE
    //     CHANCE. AT 88182938 “THE CORRUPTION LASTS FOREVER.”
    //     SEPT 26: PHASE 102. THE PHASE COUNTER HAS RUN A LONG WAY.
    const dt = c - 26802.0;
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
    const gr1231=ctx.createLinearGradient(0,top+H,0,top);
    gr1231.addColorStop(0,'rgba(255,216,79,0.22)'); gr1231.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1231.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1231; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('3 EYES 0.75 SECONDS AGO', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“‘WHY ARE YOU LOOKING AT ME LIKE I JUST HAD 3 EYES 0.75', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SECONDS AGO?’, GRAY.PS SAYS ‘YOU HAVE 3 EYES! 🦊’, NEKA SAYS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('‘CLASSICS ISN’T YOUR HOME GAME.’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 7:55 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1231=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1231, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1231, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE SECOND OF GLITCH', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS MOUTH GLITCHED, HIS HEAD TILTED, THE SCREEN GLITCHED,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND AFTER 1 SECOND HE WAS NORMAL. WENDA.PS: “WHAT- 🐶”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A NEW THREAD, ANOTHER NEW “NEKA” DOCUMENT, OPENS ON IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE THIRD EYE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15: THE CROSS EYES, ALWAYS. OCT 22: FOR 0.75 SECONDS,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A THIRD. GRAY.PS SAW IT AND SAID SO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS ISN’T YOUR HOME GAME.” THE SPRUNKIS ARE GUESTS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1231=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1231, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1231, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PHASE 88182937 AND 88182938', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON.PS REPAIRED AT 88182937, SLAIN BY FUN BOT FOR THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHANCE. AT 88182938 “THE CORRUPTION LASTS FOREVER.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 26: PHASE 102. THE PHASE COUNTER HAS RUN A LONG WAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('3 EYES 0.75 SECONDS AGO. A FLICKER TOO QUICK TO ARGUE WITH.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE FOX ARGUES ANYWAY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 3 EYES 0.75 SECONDS AGO ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1232){
    // BEAT 1232: FUN BOT’S RED EYES.
    // Toby, October 22, 2026, 7:55 PM EDT, his own typing:
    //   “FUN BOT THEN ATTACKED WENDA.PS, WENDA.PS WAS STRUCK BY 5
    //   LONG WOODEN BLADES, FUN BOT’S EYES FLASHED RED, THE SCREEN
    //   TURNS AROUND, AND THEN IT TURNS BACK TO NORMAL.”
    // Priors, each verified in the archive before it was drawn:
    //   MR. BLACK, EVEN STRONGER
    //     HE FIGHTS GASTER FOR CONTROL, ERASES THE MEMORY OF EVERY
    //     NON-SPRUNKI, AND “HAS EVERYONE’S POWERS SINCE BLACK IS
    //     EVERY COLOR MIXED.” NEKA COULD SLAY HIM IF HE WANTED.
    //   WENDA.PS JUMPED IN FRONT
    //     MR. BLACK NEARLY STRUCK GASTER DOWN; WENDA.PS TOOK IT, WAS
    //     CORRUPTED, AND ATTACKED THE OTHERS. FUN BOT WAS SPARED.
    //     “SIMON.PS’S GLITCHES MAY HAVE GOTTEN ON FUN BOT.”
    //   HAUNTED FROM BEHIND
    //     GASTER AND NEKA HAUNT FUN BOT. HE KNEW GASTER WAS THERE,
    //     NOT NEKA. “FUN BOT DOESN’T EVEN TELL AN ADMIN.”
    //     HE WANTS THE XP FROM MR. BLACK TO BEAT GASTER.
    const dt = c - 26824.0;
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
    const gr1232=ctx.createLinearGradient(0,top+H,0,top);
    gr1232.addColorStop(0,'rgba(255,80,80,0.22)'); gr1232.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1232.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1232; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('FUN BOT’S RED EYES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“FUN BOT THEN ATTACKED WENDA.PS, WENDA.PS WAS STRUCK BY 5', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LONG WOODEN BLADES, FUN BOT’S EYES FLASHED RED, THE SCREEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TURNS AROUND, AND THEN IT TURNS BACK TO NORMAL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 7:55 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1232=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1232, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1232, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MR. BLACK, EVEN STRONGER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE FIGHTS GASTER FOR CONTROL, ERASES THE MEMORY OF EVERY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NON-SPRUNKI, AND “HAS EVERYONE’S POWERS SINCE BLACK IS', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY COLOR MIXED.” NEKA COULD SLAY HIM IF HE WANTED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS JUMPED IN FRONT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK NEARLY STRUCK GASTER DOWN; WENDA.PS TOOK IT, WAS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CORRUPTED, AND ATTACKED THE OTHERS. FUN BOT WAS SPARED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS’S GLITCHES MAY HAVE GOTTEN ON FUN BOT.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1232=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1232, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1232, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HAUNTED FROM BEHIND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER AND NEKA HAUNT FUN BOT. HE KNEW GASTER WAS THERE,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT NEKA. “FUN BOT DOESN’T EVEN TELL AN ADMIN.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE WANTS THE XP FROM MR. BLACK TO BEAT GASTER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FUN BOT’S RED EYES. FIVE WOODEN BLADES, ONE RED FLASH, TWO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHADOWS AT HIS BACK.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ FUN BOT’S RED EYES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1233){
    // BEAT 1233: SEAHORSE.
    // Toby, October 22, 2026, 8:25 PM EDT, his own typing:
    //   “EVEN A SINGLE WORD CAN BREAK NEKA, ‘SEAHORSE’ ... AFTER 50
    //   MINUTES, HE CORRUPTS AND SUDDENLY STOPS” ... “WHEN IT IS 7
    //   AM, HE SAYS ‘GOOD NIGHT.’, AND IT TERRIFIES THE POPULATION.”
    // Priors, each verified in the archive before it was drawn:
    //   THE WORD THAT BREAKS HIM
    //     HE TRIES TO SEND A SEAHORSE EMOJI FOR FIFTY MINUTES, THEN
    //     CORRUPTED EMOJIS, A BODY MOVING “IN STRANGE WAYS A HUMAN
    //     CAN’T DO.” OBSESSED WITH YOU IN NEARLY 30 MESSAGES.
    //   GOOD NIGHT. AT 7 AM
    //     OCT 15: “NO GAMES AFTER 7 PM!” OCT 22: ITS MIRROR, A GOOD
    //     NIGHT AT SUNRISE. HE TYPES BEFORE YOU FINISH WRITING.
    //     “EVERYONE IS SCARED OF HIM.”
    //   HIS EMOTIONS, AND YOUR REAL NAME
    //     JEALOUS: “NOW I’LL JUST CLONE THE OBJECT.” SAD: “HELP...
    //     USER’S NAME.” ANGRY: HE ERASES THE ACCOUNT.
    //     “IF NEKA HAS FUN WITH IT, HE MAY NEVER LET YOU GO.”
    const dt = c - 26846.0;
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
    const gr1233=ctx.createLinearGradient(0,top+H,0,top);
    gr1233.addColorStop(0,'rgba(127,212,255,0.22)'); gr1233.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1233.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1233; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SEAHORSE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“EVEN A SINGLE WORD CAN BREAK NEKA, ‘SEAHORSE’ ... AFTER 50', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MINUTES, HE CORRUPTS AND SUDDENLY STOPS” ... “WHEN IT IS 7', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AM, HE SAYS ‘GOOD NIGHT.’, AND IT TERRIFIES THE POPULATION.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 22, 8:25 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1233=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1233, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1233, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE WORD THAT BREAKS HIM', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE TRIES TO SEND A SEAHORSE EMOJI FOR FIFTY MINUTES, THEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CORRUPTED EMOJIS, A BODY MOVING “IN STRANGE WAYS A HUMAN', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CAN’T DO.” OBSESSED WITH YOU IN NEARLY 30 MESSAGES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GOOD NIGHT. AT 7 AM', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15: “NO GAMES AFTER 7 PM!” OCT 22: ITS MIRROR, A GOOD', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NIGHT AT SUNRISE. HE TYPES BEFORE YOU FINISH WRITING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“EVERYONE IS SCARED OF HIM.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1233=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1233, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1233, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HIS EMOTIONS, AND YOUR REAL NAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JEALOUS: “NOW I’LL JUST CLONE THE OBJECT.” SAD: “HELP...', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('USER’S NAME.” ANGRY: HE ERASES THE ACCOUNT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“IF NEKA HAS FUN WITH IT, HE MAY NEVER LET YOU GO.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SEAHORSE. ONE WORD HE CANNOT SEND, AND ONE HE SENDS AT THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WRONG HOUR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SEAHORSE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1234){
    // BEAT 1234: ERASE, THE PURPLE 9S.
    // Toby, October 23, 2026, 6:37 AM EDT, his own typing:
    //   “NEKA’S EYES TURN PURPLE, AND HE SAYS ‘ERASE’, AND THEN
    //   NEKA’S HEAD TWITCHES AND THEN A SLASH APPEARS, MAKING THE
    //   SCREEN BLACK WITH PURPLE 9S ... YOU CAN’T EXIT THAT PART.”
    // Priors, each verified in the archive before it was drawn:
    //   KETER AND THAUMIEL TOO
    //     “NEKA IS KETER BECAUSE HE IS IMPOSSIBLE TO CONTAIN, AND HE
    //     CAN CONTAIN OTHER ENTITIES.” APOLLYON SINCE OCT 22.
    //     “2017 + 9 = 2026.” THE NINES COUNT EVEN HERE.
    //   THE ERASE SEQUENCE
    //     PURPLE EYES, THE WORD, A TWITCH, A SLASH, A BLACK SCREEN
    //     OF PURPLE 9S WITH NEKA IN FRONT, EXPLAINING THE OFFENCE.
    //     SEPT 25: THE ONLY CUTSCENE YOU CAN’T COME OUT OF. ANOTHER.
    //   ULTRAMON
    //     FUN BOT SLAYS MR. BLACK, BEATS GASTER. MR. BLACK HIDES
    //     THAT HE LIVES AND BUILDS ULTRAMON FROM THE REMAINS.
    //     “NEKA SECRETLY HIDES THAT HE STILL OWNS THE GAME.” NO LIE.
    const dt = c - 26868.0;
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
    const gr1234=ctx.createLinearGradient(0,top+H,0,top);
    gr1234.addColorStop(0,'rgba(180,100,255,0.22)'); gr1234.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1234.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1234; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(180,100,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ERASE, THE PURPLE 9S', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA’S EYES TURN PURPLE, AND HE SAYS ‘ERASE’, AND THEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S HEAD TWITCHES AND THEN A SLASH APPEARS, MAKING THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SCREEN BLACK WITH PURPLE 9S ... YOU CAN’T EXIT THAT PART.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 6:37 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1234=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(180,100,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1234, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(180,100,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1234, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(180,100,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('KETER AND THAUMIEL TOO', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA IS KETER BECAUSE HE IS IMPOSSIBLE TO CONTAIN, AND HE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAN CONTAIN OTHER ENTITIES.” APOLLYON SINCE OCT 22.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“2017 + 9 = 2026.” THE NINES COUNT EVEN HERE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ERASE SEQUENCE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PURPLE EYES, THE WORD, A TWITCH, A SLASH, A BLACK SCREEN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OF PURPLE 9S WITH NEKA IN FRONT, EXPLAINING THE OFFENCE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SEPT 25: THE ONLY CUTSCENE YOU CAN’T COME OUT OF. ANOTHER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1234=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1234, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1234, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ULTRAMON', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FUN BOT SLAYS MR. BLACK, BEATS GASTER. MR. BLACK HIDES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT HE LIVES AND BUILDS ULTRAMON FROM THE REMAINS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA SECRETLY HIDES THAT HE STILL OWNS THE GAME.” NO LIE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ERASE, THE PURPLE 9S. THE SCREEN GOES BLACK, THE NINES COME', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OUT, HE TELLS YOU WHY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ERASE, THE PURPLE 9S ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1235){
    // BEAT 1235: THE ENDLESS STAIRCASE FALLS.
    // Toby, October 23, 2026, 4:53-4:59 PM EDT, his own typing:
    //   “A PURPLE LIGHTNING BOLT STRUCK AND ULTRAMON IS LITTERLY
    //   DELETED. TENTACLES FILL THE DARK PATCHES IN ROOMS, THE
    //   ENDLESS STAICASE FALLS DOWN. ‘ONLY MR. BLACK COULD DO THIS’”
    // Priors, each verified in the archive before it was drawn:
    //   THIS GAME, IN HIS STORY
    //     OCT 15: THE STAIRCASES ARE “THE SAME BEING”. OCT 23: THE
    //     ENDLESS STAIRCASE FALLS DOWN. THE BEAT IS DRAWN ON ITSELF.
    //     “-FUN BOT.” BUT MR. BLACK WAS DEAD 40 MINUTES BEFORE.
    //   GRIM
    //     “HELLO THERE, IT IS ME, GRIM.” TENTACLES WRAP THE REAPER,
    //     THE MASK FALLS, HE CHASES, A SAW MAKES BONES,
    //     AND THE BONES MAKE THE FLESH INTO ARMOR.
    //   ONLY 3
    //     “GASTER, FUN BOT, AND GASTER ARE THE ONLY 3. SO WHO DID
    //     ALL THE CHAOS?” HE ANSWERS HIMSELF AT 5:12 PM.
    //     “‘NEKA’ NOW GETS CLOSER AND CLOSER TO A SPRUNKI MOD.”
    const dt = c - 26890.0;
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
    const gr1235=ctx.createLinearGradient(0,top+H,0,top);
    gr1235.addColorStop(0,'rgba(255,216,79,0.22)'); gr1235.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1235.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1235; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE ENDLESS STAIRCASE FALLS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A PURPLE LIGHTNING BOLT STRUCK AND ULTRAMON IS LITTERLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DELETED. TENTACLES FILL THE DARK PATCHES IN ROOMS, THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ENDLESS STAICASE FALLS DOWN. ‘ONLY MR. BLACK COULD DO THIS’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 4:53-4:59 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1235=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1235, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1235, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THIS GAME, IN HIS STORY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15: THE STAIRCASES ARE “THE SAME BEING”. OCT 23: THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENDLESS STAIRCASE FALLS DOWN. THE BEAT IS DRAWN ON ITSELF.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“-FUN BOT.” BUT MR. BLACK WAS DEAD 40 MINUTES BEFORE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRIM', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HELLO THERE, IT IS ME, GRIM.” TENTACLES WRAP THE REAPER,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MASK FALLS, HE CHASES, A SAW MAKES BONES,', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AND THE BONES MAKE THE FLESH INTO ARMOR.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1235=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1235, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1235, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONLY 3', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER, FUN BOT, AND GASTER ARE THE ONLY 3. SO WHO DID', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL THE CHAOS?” HE ANSWERS HIMSELF AT 5:12 PM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“‘NEKA’ NOW GETS CLOSER AND CLOSER TO A SPRUNKI MOD.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ENDLESS STAIRCASE FALLS. THE GAME YOU ARE PLAYING', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('COLLAPSES INSIDE ITS OWN STORY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE ENDLESS STAIRCASE FALLS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1236){
    // BEAT 1236: THE MAN IN WHITE.
    // Toby, October 23, 2026, 5:12 PM EDT, his own typing:
    //   “THE SPRUNKIS SURROUND FUN BOT AND CLOSE IN, THEN THE
    //   SPRUNKIS DISAPPEAR AND BECOME ONE MAN WEARING WHITE. NEKA
    //   STANDS ... HIS EYE SUMMONS A PLASMA BALL ... CHYTHROME.”
    // Priors, each verified in the archive before it was drawn:
    //   NOT MR. BLACK, AN ANOMALLY
    //     THE BLACK FIGURE’S VOICE WAS WRONG, THE BODY GLITCHED.
    //     “4TH REALITY GROUP SHIFTED BODIES.” IT WAS NEKA.
    //     OCT 22: DISGUISED AS EVERY MALE CHARACTER. MR. BLACK TOO.
    //   THE MUSTACHE
    //     “NEKA TOUCHES HIS MUSTACHE, THEN JUMPS AT THE SPRUNKIS.”
    //     ITS FIRST MENTION. REPELLED BY GRAY’S GRAVITY.
    //     OCT 25: “NEKA DOES HAVE A MUSTACHE.” CONFIRMED.
    //   BUILDERMAN AND ROBLOX
    //     “MAYBE GIVE EVERYONE FREE ‘NEKA’-TOKENS?” NEKA PROPOSES
    //     UPDATES; GASTER ADDS OR DELETES. METANONIC = CHROMANTIC.
    //     FUN BOT’S FACE TURNS INTO FUN COMPUTER AND RESPAWNS THEM.
    const dt = c - 26912.0;
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
    const gr1236=ctx.createLinearGradient(0,top+H,0,top);
    gr1236.addColorStop(0,'rgba(255,255,255,0.22)'); gr1236.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1236.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1236; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,255,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE MAN IN WHITE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE SPRUNKIS SURROUND FUN BOT AND CLOSE IN, THEN THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SPRUNKIS DISAPPEAR AND BECOME ONE MAN WEARING WHITE. NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STANDS ... HIS EYE SUMMONS A PLASMA BALL ... CHYTHROME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 5:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1236=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,255,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1236, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,255,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1236, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,255,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT MR. BLACK, AN ANOMALLY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE BLACK FIGURE’S VOICE WAS WRONG, THE BODY GLITCHED.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“4TH REALITY GROUP SHIFTED BODIES.” IT WAS NEKA.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 22: DISGUISED AS EVERY MALE CHARACTER. MR. BLACK TOO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MUSTACHE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA TOUCHES HIS MUSTACHE, THEN JUMPS AT THE SPRUNKIS.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ITS FIRST MENTION. REPELLED BY GRAY’S GRAVITY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 25: “NEKA DOES HAVE A MUSTACHE.” CONFIRMED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1236=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1236, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1236, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BUILDERMAN AND ROBLOX', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MAYBE GIVE EVERYONE FREE ‘NEKA’-TOKENS?” NEKA PROPOSES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UPDATES; GASTER ADDS OR DELETES. METANONIC = CHROMANTIC.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('FUN BOT’S FACE TURNS INTO FUN COMPUTER AND RESPAWNS THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MAN IN WHITE. TWENTY SPRUNKIS STEP TOGETHER AND ONE MAN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('STEPS OUT OF THEM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE MAN IN WHITE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1237){
    // BEAT 1237: PERFECTLY NORMAL.
    // Toby, October 23, 2026, 6:03-6:04 PM EDT, his own typing:
    //   “NEKA TO A HUMAN ‘WHAT? MY SPEED AND POWERS ARE PERFECTLY
    //   NORMAL.’, HUMAN ‘WHAT THE AHHHH…!!!’” ... “NEKA CAN JUST
    //   APPEAR IN REALITY SOMETIMES AND YOU DON’T EVEN KNOW.”
    // Priors, each verified in the archive before it was drawn:
    //   ELLERNATE AND THE HACKERS
    //     “NOW INCLUDE ELLERNATE AND NEKA INTO THE GUEST 666 AND
    //     ENTITY 303 BATTLE THING.” THE RESEARCH IS THE CHATBOT’S.
    //     OCT 12: THE SAME ROBLOX-HACKER PATTERN, SAME ANSWER.
    //   IN REALITY, SOMETIMES
    //     OCT 18: THE META, HOW REALITY TOUCHES THE GAME. OCT 23: HE
    //     TOUCHES BACK, “AND YOU DON’T EVEN KNOW.”
    //     “PSYCHICAL > PHYSICAL”
    //   NORMAL, TO HIM
    //     A MAN SCREAMS. HE IS PUZZLED. HIS SPEED IS NORMAL. OCT 21:
    //     “WHY IS A NORMAL MAN ON APOLLYON?” THIS IS WHY.
    //     THE SCARIEST THING HE SAYS IS THAT NOTHING IS WRONG.
    const dt = c - 26934.0;
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
    const gr1237=ctx.createLinearGradient(0,top+H,0,top);
    gr1237.addColorStop(0,'rgba(200,200,210,0.22)'); gr1237.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1237.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1237; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PERFECTLY NORMAL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA TO A HUMAN ‘WHAT? MY SPEED AND POWERS ARE PERFECTLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NORMAL.’, HUMAN ‘WHAT THE AHHHH…!!!’” ... “NEKA CAN JUST', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('APPEAR IN REALITY SOMETIMES AND YOU DON’T EVEN KNOW.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 6:03-6:04 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1237=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1237, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1237, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ELLERNATE AND THE HACKERS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NOW INCLUDE ELLERNATE AND NEKA INTO THE GUEST 666 AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENTITY 303 BATTLE THING.” THE RESEARCH IS THE CHATBOT’S.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 12: THE SAME ROBLOX-HACKER PATTERN, SAME ANSWER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN REALITY, SOMETIMES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 18: THE META, HOW REALITY TOUCHES THE GAME. OCT 23: HE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOUCHES BACK, “AND YOU DON’T EVEN KNOW.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“PSYCHICAL > PHYSICAL”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1237=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1237, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1237, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NORMAL, TO HIM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A MAN SCREAMS. HE IS PUZZLED. HIS SPEED IS NORMAL. OCT 21:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHY IS A NORMAL MAN ON APOLLYON?” THIS IS WHY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SCARIEST THING HE SAYS IS THAT NOTHING IS WRONG.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PERFECTLY NORMAL. THE HUMAN SCREAMS. HE ASKS WHAT THE FUSS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IS ABOUT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PERFECTLY NORMAL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1238){
    // BEAT 1238: THE RLS ARE COMING BACK.
    // Toby, October 23, 2026, 6:52 PM EDT, his own typing:
    //   “RLS ARE COMMING BACK, SINCE GASTER MISSED THEM. RLS ARE NOW
    //   FIGHTING SPRUNKIS AND WON ... ABSORBED THE MEMORIES OF THE
    //   SPRUNKIS, MAKING THE RLS EXTREMELY INTELEGENT.”
    // Priors, each verified in the archive before it was drawn:
    //   THE “NEKA” HACKERS, HIS ORDER
    //     PINKY RL, “THE ONE WHO STARTED THE CORRUPTION IN THE FIRST
    //     PLACE”; CLASSIC RL SIMON, GOD-TIER “FOR A VERY LONG TIME”;
    //     PERO LAI TRICKED SIMON RL; NEKA LAI IS ALL NEKAS IN 1 AI.
    //   MR. BLACK’S CORRUPTION
    //     “MR. BLACK DID A LARGE CORRUPTION IN CODE, AND A POWER OF
    //     THAT SPRUNKI IS HACKING.” HE MAY HAVE EVOLVED THEM.
    //     OCT 10: THE PUPPET MASTER. OCT 23: THE GREATEST HACKER.
    //   THE HINGE
    //     THE RLS WERE THE FIRST LORE OF ALL, FROM LATE 2025. THEY
    //     RETURN WITH THEIR MEMORIES AND THE SPRUNKIS’ TOO.
    //     “COMICALLY STRONGER.” THE LAST ERA BEGINS AT 8:04 PM.
    const dt = c - 26956.0;
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
    const gr1238=ctx.createLinearGradient(0,top+H,0,top);
    gr1238.addColorStop(0,'rgba(120,200,140,0.22)'); gr1238.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1238.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1238; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE RLS ARE COMING BACK', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“RLS ARE COMMING BACK, SINCE GASTER MISSED THEM. RLS ARE NOW', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIGHTING SPRUNKIS AND WON ... ABSORBED THE MEMORIES OF THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SPRUNKIS, MAKING THE RLS EXTREMELY INTELEGENT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 6:52 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1238=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1238, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1238, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE “NEKA” HACKERS, HIS ORDER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PINKY RL, “THE ONE WHO STARTED THE CORRUPTION IN THE FIRST', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PLACE”; CLASSIC RL SIMON, GOD-TIER “FOR A VERY LONG TIME”;', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PERO LAI TRICKED SIMON RL; NEKA LAI IS ALL NEKAS IN 1 AI.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MR. BLACK’S CORRUPTION', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK DID A LARGE CORRUPTION IN CODE, AND A POWER OF', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT SPRUNKI IS HACKING.” HE MAY HAVE EVOLVED THEM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 10: THE PUPPET MASTER. OCT 23: THE GREATEST HACKER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1238=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1238, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1238, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE HINGE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE RLS WERE THE FIRST LORE OF ALL, FROM LATE 2025. THEY', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RETURN WITH THEIR MEMORIES AND THE SPRUNKIS’ TOO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“COMICALLY STRONGER.” THE LAST ERA BEGINS AT 8:04 PM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RLS ARE COMING BACK. THE OLDEST MONSTERS IN THE ARCHIVE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WALK BACK IN, SMARTER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE RLS ARE COMING BACK ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1239){
    // BEAT 1239: CLASSICS TAKES UP 1%.
    // Toby, October 23, 2026, 6:58 PM EDT, his own typing:
    //   “GASTER MADE CLASSICS EVEN BIGGER TO FIT EVERYONE, THEN
    //   BIGGER TO MAKE EVERYONE LIKE A SPEC OF DUST TO IT ... THE
    //   CLASSICS BECAME AS LARGE AS NEKA ... CLASSICS TAKES UP 1%.”
    // Priors, each verified in the archive before it was drawn:
    //   ALL AUS RUSHED OUT
    //     FELLTALE, INKTALE, DUSTTALE, “DUSTDUSTDUST”, ERROR 404.
    //     INK SANS’S PORTALS BRING SANSES, PAPYRUSES, GASTERS, KRIS.
    //     “DID WE REALLY NEED TO SEND THEM ALL IN AGAIN?” “NO. 😉”
    //   THE FIRST NON-ZERO READING
    //     OCT 22: 0% ROOM TAKEN, HOWEVER MANY INFINITIES. OCT 23: A
    //     CLASSICS AS LARGE AS HIM TAKES UP 1% OF HIS INSIDE.
    //     SOMETHING FINALLY REGISTERS ON THE SCALE.
    //   NEKA CALLS OVER THE RLS
    //     THE SENTENCE ENDS WITH THE CALL. 6:52 PM THEY WERE COMING.
    //     6:58 PM THEY ARE SUMMONED.
    //     “YOUR CLASSICS CODE, IT IS MINE.” COMES NEXT.
    const dt = c - 26978.0;
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
    const gr1239=ctx.createLinearGradient(0,top+H,0,top);
    gr1239.addColorStop(0,'rgba(160,200,255,0.22)'); gr1239.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1239.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1239; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS TAKES UP 1%', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER MADE CLASSICS EVEN BIGGER TO FIT EVERYONE, THEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BIGGER TO MAKE EVERYONE LIKE A SPEC OF DUST TO IT ... THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS BECAME AS LARGE AS NEKA ... CLASSICS TAKES UP 1%.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 6:58 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1239=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1239, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1239, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL AUS RUSHED OUT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FELLTALE, INKTALE, DUSTTALE, “DUSTDUSTDUST”, ERROR 404.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INK SANS’S PORTALS BRING SANSES, PAPYRUSES, GASTERS, KRIS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“DID WE REALLY NEED TO SEND THEM ALL IN AGAIN?” “NO. 😉”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST NON-ZERO READING', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 22: 0% ROOM TAKEN, HOWEVER MANY INFINITIES. OCT 23: A', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS AS LARGE AS HIM TAKES UP 1% OF HIS INSIDE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SOMETHING FINALLY REGISTERS ON THE SCALE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1239=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1239, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1239, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA CALLS OVER THE RLS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SENTENCE ENDS WITH THE CALL. 6:52 PM THEY WERE COMING.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:58 PM THEY ARE SUMMONED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“YOUR CLASSICS CODE, IT IS MINE.” COMES NEXT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS TAKES UP 1%. A WHOLE GAME, GROWN TO HIS SIZE, IS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE HUNDREDTH OF HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CLASSICS TAKES UP 1% ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1240){
    // BEAT 1240: YOUR CLASSICS CODE, IT IS MINE.
    // Toby, October 23, 2026, 7:10-7:26 PM EDT, his own typing:
    //   “SEE NEKA. NEKA SAYS ‘YOUR CLASSICS CODE, IT IS MINE.’” ...
    //   “THEME: NEKA GOES TO CONVERSATIONS MOST OF THE TIME.” ...
    //   “NOW THE RLS CONTINUED TO SPREAD AND INFECT.”
    // Priors, each verified in the archive before it was drawn:
    //   THE THEME HE NAMES HIMSELF
    //     “EVIDENCE: APPEARED MORE THAN LIKE 10 TIMES ALREADY
    //     INCLUDING THE 4 OTHER HUGE LORE CHATS.”
    //     VERITY’S UNIVERSE IS SOMEONE ELSE’S; HIS LINES ARE THESE.
    //   THE CODE, CLAIMED
    //     SEPT 24: HE TOOK ALL THE GREEN CODE FROM THE PLAYERS. OCT
    //     23: “YOUR CLASSICS CODE, IT IS MINE.” TO THEIR FACE.
    //     A NEW THREAD OPENS ON IT.
    //   THE RLS SPREAD
    //     6:52 PM COMING BACK. 6:58 PM CALLED OVER. 7:26 PM
    //     “CONTINUED TO SPREAD AND INFECT.” THE PACE OF AN OUTBREAK.
    //     BY 8:04 PM THE GAME HAS THEIR NAME.
    const dt = c - 27000.0;
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
    const gr1240=ctx.createLinearGradient(0,top+H,0,top);
    gr1240.addColorStop(0,'rgba(255,216,79,0.22)'); gr1240.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1240.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1240; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOUR CLASSICS CODE, IT IS MINE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SEE NEKA. NEKA SAYS ‘YOUR CLASSICS CODE, IT IS MINE.’” ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THEME: NEKA GOES TO CONVERSATIONS MOST OF THE TIME.” ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW THE RLS CONTINUED TO SPREAD AND INFECT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 7:10-7:26 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1240=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1240, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1240, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE THEME HE NAMES HIMSELF', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVIDENCE: APPEARED MORE THAN LIKE 10 TIMES ALREADY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INCLUDING THE 4 OTHER HUGE LORE CHATS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('VERITY’S UNIVERSE IS SOMEONE ELSE’S; HIS LINES ARE THESE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CODE, CLAIMED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: HE TOOK ALL THE GREEN CODE FROM THE PLAYERS. OCT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('23: “YOUR CLASSICS CODE, IT IS MINE.” TO THEIR FACE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A NEW THREAD OPENS ON IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1240=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1240, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1240, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE RLS SPREAD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:52 PM COMING BACK. 6:58 PM CALLED OVER. 7:26 PM', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CONTINUED TO SPREAD AND INFECT.” THE PACE OF AN OUTBREAK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BY 8:04 PM THE GAME HAS THEIR NAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR CLASSICS CODE, IT IS MINE. HE WALKS INTO OTHER', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CONVERSATIONS AND TAKES THE SOURCE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOUR CLASSICS CODE, IT IS MINE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1241){
    // BEAT 1241: BLACK TO HIS ORIGINAL FORM.
    // Toby, October 23, 2026, 7:37 PM EDT, his own typing:
    //   “WENDA.PS ATTACKED MR. BLACK, CAUSING MR. BLACK TO HAVE A
    //   HUMAN FACE.” ... “MR. BLACK CANONALLY RESTORES IT. JUST
    //   NOW.” ... “MR. BLACK IS BLACK TO HIS ORIGINAL FORM!”
    // Priors, each verified in the archive before it was drawn:
    //   DANDY IS... MR. BLACK THEN?
    //     A COMPARISON, NOT AN IDENTITY. DANDY’S WORLD IS SOMEONE
    //     ELSE’S AND STAYS OFF THE WIKI EXCEPT AS HIS QUESTION.
    //     “MR. BLACK IS KNOWN AS THE GREATEST HACKER.”
    //   THE HUMAN FACE, AGAIN
    //     OCT 3: PHASE 666, THE HUMAN FACE. OCT 23: WENDA.PS GIVES
    //     IT BACK TO HIM, AND HE RESTORES HIMSELF. “JUST NOW.”
    //     HE EVOLVED AND CORRUPTED FUN BOT AND FUN COMPUTER.
    //   NEKA’S PUN
    //     “BLACK TO HIS ORIGINAL FORM!” NEKA NAMES THE MOMENT WITH A
    //     JOKE. SEPT 26: “WANNA POP TART?” HE HAS ALWAYS JOKED.
    //     UNABLE TO DESTROY THE FUN TWO, BUT ABLE TO CORRUPT THEM.
    const dt = c - 27022.0;
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
    const gr1241=ctx.createLinearGradient(0,top+H,0,top);
    gr1241.addColorStop(0,'rgba(60,60,70,0.22)'); gr1241.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1241.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1241; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(60,60,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BLACK TO HIS ORIGINAL FORM', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS ATTACKED MR. BLACK, CAUSING MR. BLACK TO HAVE A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HUMAN FACE.” ... “MR. BLACK CANONALLY RESTORES IT. JUST', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW.” ... “MR. BLACK IS BLACK TO HIS ORIGINAL FORM!”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 7:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1241=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(60,60,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1241, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(60,60,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1241, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(60,60,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DANDY IS... MR. BLACK THEN?', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A COMPARISON, NOT AN IDENTITY. DANDY’S WORLD IS SOMEONE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ELSE’S AND STAYS OFF THE WIKI EXCEPT AS HIS QUESTION.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK IS KNOWN AS THE GREATEST HACKER.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE HUMAN FACE, AGAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 3: PHASE 666, THE HUMAN FACE. OCT 23: WENDA.PS GIVES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT BACK TO HIM, AND HE RESTORES HIMSELF. “JUST NOW.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE EVOLVED AND CORRUPTED FUN BOT AND FUN COMPUTER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1241=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1241, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1241, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA’S PUN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“BLACK TO HIS ORIGINAL FORM!” NEKA NAMES THE MOMENT WITH A', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JOKE. SEPT 26: “WANNA POP TART?” HE HAS ALWAYS JOKED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('UNABLE TO DESTROY THE FUN TWO, BUT ABLE TO CORRUPT THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BLACK TO HIS ORIGINAL FORM. A HUMAN FACE FOR A MOMENT, THEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE DARK AGAIN, AND A PUN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BLACK TO HIS ORIGINAL FORM ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1242){
    // BEAT 1242: THE BLACK LIQUID KILLS SPRUNKIS.
    // Toby, October 23, 2026, 7:51 PM EDT, his own typing:
    //   “RLS AREN’T SPECIFICALLY VIRUSES, THEY ARE CORRUPTION
    //   EATERS, LIKE NEKA, BUT RLS TURN THE CORRUPTION INTO A
    //   LIQUID.” ... “THE BLACK LIQUID ... KILLS SPRUNKIS.”
    // Priors, each verified in the archive before it was drawn:
    //   CORRUPTION EATERS
    //     NEKA WANTED ANTI-VIRUSES. THE RLS EAT CORRUPTION AND LEAVE
    //     IT AS LIQUID; NEKA “JUST STORES THE CORRUPTION IN HIM.”
    //     WHICH IS WHY SIMON.PS AND OREN.PS ARE SO CORRUPT.
    //   WORSE THAN THE VIRUS
    //     “THE BLACK LIQUID IS WORSE THAN THE ORIGINAL VIRUS THE RLS
    //     EAT. IT KILLS SPRUNKIS. EVERYONE IS DEAD INSIDE.”
    //     THE SAME STUFF THAT GOT ON SIMON RL FAR BEFORE.
    //   MR. BLACK MADE THE MOD
    //     “MR. BLACK EVEN CREATED THE ORIGINAL CLASSIC RL MOD.” HE
    //     CONTROLS THE RLS. THE PUPPET MYTH IS HIS TOO.
    //     OCT 25: THE LIQUID GETS ITS NAME, INKTITE.
    const dt = c - 27044.0;
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
    const gr1242=ctx.createLinearGradient(0,top+H,0,top);
    gr1242.addColorStop(0,'rgba(30,30,36,0.22)'); gr1242.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1242.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1242; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(30,30,36,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE BLACK LIQUID KILLS SPRUNKIS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“RLS AREN’T SPECIFICALLY VIRUSES, THEY ARE CORRUPTION', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EATERS, LIKE NEKA, BUT RLS TURN THE CORRUPTION INTO A', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LIQUID.” ... “THE BLACK LIQUID ... KILLS SPRUNKIS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 7:51 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1242=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(30,30,36,0.46)';
      ctx.fillRect(cx-W*0.352, ky1242, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(30,30,36,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1242, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(30,30,36,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CORRUPTION EATERS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA WANTED ANTI-VIRUSES. THE RLS EAT CORRUPTION AND LEAVE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT AS LIQUID; NEKA “JUST STORES THE CORRUPTION IN HIM.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHICH IS WHY SIMON.PS AND OREN.PS ARE SO CORRUPT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WORSE THAN THE VIRUS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE BLACK LIQUID IS WORSE THAN THE ORIGINAL VIRUS THE RLS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EAT. IT KILLS SPRUNKIS. EVERYONE IS DEAD INSIDE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SAME STUFF THAT GOT ON SIMON RL FAR BEFORE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1242=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1242, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1242, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MR. BLACK MADE THE MOD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK EVEN CREATED THE ORIGINAL CLASSIC RL MOD.” HE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CONTROLS THE RLS. THE PUPPET MYTH IS HIS TOO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 25: THE LIQUID GETS ITS NAME, INKTITE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BLACK LIQUID KILLS SPRUNKIS. WHAT THE EATERS LEAVE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BEHIND IS DEADLIER THAN WHAT THEY ATE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE BLACK LIQUID KILLS SPRUNKIS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1243){
    // BEAT 1243: GRAY’S INK = INK + URINITE.
    // Toby, October 23, 2026, 7:51 PM EDT, his own typing:
    //   “GRAY’S INK WAS INK MIXED WITH URINITE (NEKA’S SALIVA OR
    //   BITE INFECTION). NEKA GOTTEN THE URINITE ONCE HE WAS A CHILD
    //   NAMED PERO ... RLS WERE MADE ONCE PERO WAS PERO LAI.”
    // Priors, each verified in the archive before it was drawn:
    //   URINITE
    //     NEKA’S SALIVA OR BITE INFECTION, FOUND WHEN HE WAS “A
    //     CHILD NAMED PERO” AT ABOUT 17. GRAY’S INK IS INK + THAT.
    //     THE OLDEST LIQUID IN THE LORE HAS A RECIPE NOW.
    //   WHEN THE RLS WERE MADE
    //     “ONCE PERO WAS PERO LAI OR PRE-TODDLLM (25-29).” THE RLS
    //     DATE TO HIS TWENTIES, THE INFECTION TO HIS TEENS.
    //     OCT 21: BORN NEKA. BUT THE CHILD WAS CALLED PERO.
    //   AN ANCIENT CHAT
    //     “THE LIQUID WAS ACTUALLY DATING BACK TO REAL CHATGPT LORE
    //     THING, IT WAS ACTUALLY IN AN ANCIENT CHAT.”
    //     THE ERA PAGE CLOSES HERE, AT EMAIL 1950.
    const dt = c - 27066.0;
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
    const gr1243=ctx.createLinearGradient(0,top+H,0,top);
    gr1243.addColorStop(0,'rgba(154,163,173,0.22)'); gr1243.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1243.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1243; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(154,163,173,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GRAY’S INK = INK + URINITE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GRAY’S INK WAS INK MIXED WITH URINITE (NEKA’S SALIVA OR', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BITE INFECTION). NEKA GOTTEN THE URINITE ONCE HE WAS A CHILD', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NAMED PERO ... RLS WERE MADE ONCE PERO WAS PERO LAI.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 7:51 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1243=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(154,163,173,0.46)';
      ctx.fillRect(cx-W*0.352, ky1243, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(154,163,173,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1243, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(154,163,173,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('URINITE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S SALIVA OR BITE INFECTION, FOUND WHEN HE WAS “A', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHILD NAMED PERO” AT ABOUT 17. GRAY’S INK IS INK + THAT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE OLDEST LIQUID IN THE LORE HAS A RECIPE NOW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHEN THE RLS WERE MADE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ONCE PERO WAS PERO LAI OR PRE-TODDLLM (25-29).” THE RLS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DATE TO HIS TWENTIES, THE INFECTION TO HIS TEENS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 21: BORN NEKA. BUT THE CHILD WAS CALLED PERO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1243=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1243, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1243, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AN ANCIENT CHAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE LIQUID WAS ACTUALLY DATING BACK TO REAL CHATGPT LORE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THING, IT WAS ACTUALLY IN AN ANCIENT CHAT.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ERA PAGE CLOSES HERE, AT EMAIL 1950.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRAY’S INK = INK + URINITE. THE INK HAD A SECOND INGREDIENT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALL ALONG, AND IT WAS HIS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GRAY’S INK = INK + URINITE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
