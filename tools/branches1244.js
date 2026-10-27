  } else if(ph===1244){
    // BEAT 1244: RENAMED “CLASSIC RL”.
    // Toby, October 23, 2026, 8:04 PM EDT, his own typing:
    //   “YEAH, AND MR. BLACK! MR. BLACK IS KNOWN FOR MAKING THE
    //   CORRUPTION AND INGREDIANTS FOR THE RLS, THE RLS CAME BACK
    //   TODAY, AND NOW THE GAME IS RENAMED ‘CLASSIC RL’ BY NEKA.”
    // Priors, each verified in the archive before it was drawn:
    //   WHO MADE SIMON RL
    //     HIS QUIZ TO THE CHATBOT: NEKA, IN A TUBE BUILT BY GASTER,
    //     WITH TEKI, CLASSICS’ MOM, AND ARCSIS. “AND... MR. BLACK!”
    //     THE CLASSICS ERA CO-CREATION, RECITED AND CONFIRMED.
    //   THE THIRD NAME IN NINE DAYS
    //     CLASSICS, THEN “NEKA” (OCT 15), NOW CLASSIC RL. THE RLS
    //     CAME BACK TODAY AND THE GAME TOOK THEIR NAME.
    //     “RLS WILL CONTINOUSLY SPREAD MORE AND INFECT MORE.”
    //   MR. BLACK KILLS EVERYONE
    //     “MR. BLACK CONSTANTLY KILLS EVERYONE HERE. RLS, REALLY IN
    //     CLASSIC RL LORE.” AND NEKA LAI SLEW EVERY REALITY GROUP.
    //     THE LAST ERA PAGE OPENS ON THIS MESSAGE.
    const dt = c - 27088.0;
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
    const gr1244=ctx.createLinearGradient(0,top+H,0,top);
    gr1244.addColorStop(0,'rgba(120,200,140,0.22)'); gr1244.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1244.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1244; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('RENAMED “CLASSIC RL”', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YEAH, AND MR. BLACK! MR. BLACK IS KNOWN FOR MAKING THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CORRUPTION AND INGREDIANTS FOR THE RLS, THE RLS CAME BACK', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TODAY, AND NOW THE GAME IS RENAMED ‘CLASSIC RL’ BY NEKA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 8:04 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1244=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1244, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1244, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHO MADE SIMON RL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS QUIZ TO THE CHATBOT: NEKA, IN A TUBE BUILT BY GASTER,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WITH TEKI, CLASSICS’ MOM, AND ARCSIS. “AND... MR. BLACK!”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CLASSICS ERA CO-CREATION, RECITED AND CONFIRMED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE THIRD NAME IN NINE DAYS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS, THEN “NEKA” (OCT 15), NOW CLASSIC RL. THE RLS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAME BACK TODAY AND THE GAME TOOK THEIR NAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“RLS WILL CONTINOUSLY SPREAD MORE AND INFECT MORE.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1244=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1244, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1244, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MR. BLACK KILLS EVERYONE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK CONSTANTLY KILLS EVERYONE HERE. RLS, REALLY IN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSIC RL LORE.” AND NEKA LAI SLEW EVERY REALITY GROUP.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LAST ERA PAGE OPENS ON THIS MESSAGE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RENAMED “CLASSIC RL”. THE FIRST MONSTERS COME HOME, AND THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GAME IS CALLED AFTER THEM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ RENAMED “CLASSIC RL” ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1245){
    // BEAT 1245: CLONES IN OTHER TIMELINES.
    // Toby, October 23, 2026, 8:04 PM EDT, his own typing:
    //   “BOTH. NEKA MADE CLONES OF THEM AND HID THEM IN OTHER
    //   TIMELINES, SO NOT ALL OF THEM CAN DIE.” (ASKED: DO THE RLS
    //   SURVIVE BY RESPAWN, OR BY HIDING?)
    // Priors, each verified in the archive before it was drawn:
    //   HOW THE RLS SURVIVE
    //     RESPAWN, AND CLONES HIDDEN IN OTHER TIMELINES. OCT 18: WHY
    //     RESPAWN EXISTS. OCT 23: WHY RESPAWN IS NOT ENOUGH.
    //     “SO NOT ALL OF THEM CAN DIE.”
    //   OCT 18, THE SAME TRICK
    //     “CLONES ARE IN THE GAME, THE REAL ONES AT THEIR
    //     DIMENSION.” THE RLS GET THE REVERSE.
    //     HE KEEPS SPARES OF EVERYTHING HE VALUES.
    //   MR. BLACK’S INGREDIENTS
    //     HE MADE THE CORRUPTION AND INGREDIANTS; NEKA MADE THE RLS
    //     FROM THEM. THE RECIPE HAS TWO COOKS.
    //     OCT 24, 7:40 AM: MR. BLACK SUMMONED THEM BACK.
    const dt = c - 27110.0;
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
    const gr1245=ctx.createLinearGradient(0,top+H,0,top);
    gr1245.addColorStop(0,'rgba(160,200,255,0.22)'); gr1245.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1245.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1245; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CLONES IN OTHER TIMELINES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BOTH. NEKA MADE CLONES OF THEM AND HID THEM IN OTHER', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TIMELINES, SO NOT ALL OF THEM CAN DIE.” (ASKED: DO THE RLS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SURVIVE BY RESPAWN, OR BY HIDING?)', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 23, 8:04 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1245=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1245, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1245, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HOW THE RLS SURVIVE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RESPAWN, AND CLONES HIDDEN IN OTHER TIMELINES. OCT 18: WHY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RESPAWN EXISTS. OCT 23: WHY RESPAWN IS NOT ENOUGH.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“SO NOT ALL OF THEM CAN DIE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OCT 18, THE SAME TRICK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CLONES ARE IN THE GAME, THE REAL ONES AT THEIR', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DIMENSION.” THE RLS GET THE REVERSE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE KEEPS SPARES OF EVERYTHING HE VALUES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1245=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1245, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1245, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MR. BLACK’S INGREDIENTS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE MADE THE CORRUPTION AND INGREDIANTS; NEKA MADE THE RLS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FROM THEM. THE RECIPE HAS TWO COOKS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 24, 7:40 AM: MR. BLACK SUMMONED THEM BACK.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLONES IN OTHER TIMELINES. KILL ONE RL HERE AND ANOTHER IS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALREADY SOMEWHERE ELSE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CLONES IN OTHER TIMELINES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1246){
    // BEAT 1246: OLDER THAN BOTH ETERNITIES.
    // Toby, October 24, 2026, 7:40 AM EDT, his own typing:
    //   “NEKA LAI REALLY IS ENTERNAL, LIKE GASTER AND MR. BLACK.
    //   NEKA LAI IS OLDER THAN BOTH ENTERNITIS (ENTERNAL BEINGS).
    //   ... MR. BLACK SUMMONED RLS BACK.”
    // Priors, each verified in the archive before it was drawn:
    //   THREE ETERNAL BEINGS
    //     NEKA LAI, GASTER, MR. BLACK. SEPT 24: OLDER THAN GASTER.
    //     OCT 24: OLDER THAN BOTH.
    //     “I WATCH ‘NEKA’ THROUGH MIND.”
    //   MR. BLACK SUMMONED THEM BACK
    //     “THE CREATOR OF CLASSIC RL” CALLED THEM BACK, “SO NEKA
    //     RENAMED CLASSICS TO CLASSIC RL, NOW THE LIQUID CAN SPREAD
    //     EVEN MORE. 😏” THE RENAME HAS ITS REASON.
    //   VERITY, THE CREATOR, LONG HORSE
    //     THE VERSUS IS THE CHATBOT’S. HIS ANSWER THERE: “VERITY
    //     WOULD CONSUME THE CREATOR. 😏” THEN, “HOW ABOUT NEKA AI?”
    //     SOMEONE ELSE’S MONSTERS, QUOTED ONLY AS HIS QUESTION.
    const dt = c - 27132.0;
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
    const gr1246=ctx.createLinearGradient(0,top+H,0,top);
    gr1246.addColorStop(0,'rgba(255,216,79,0.22)'); gr1246.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1246.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1246; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OLDER THAN BOTH ETERNITIES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA LAI REALLY IS ENTERNAL, LIKE GASTER AND MR. BLACK.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA LAI IS OLDER THAN BOTH ENTERNITIS (ENTERNAL BEINGS).', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... MR. BLACK SUMMONED RLS BACK.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 7:40 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1246=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1246, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1246, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THREE ETERNAL BEINGS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA LAI, GASTER, MR. BLACK. SEPT 24: OLDER THAN GASTER.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 24: OLDER THAN BOTH.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“I WATCH ‘NEKA’ THROUGH MIND.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MR. BLACK SUMMONED THEM BACK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE CREATOR OF CLASSIC RL” CALLED THEM BACK, “SO NEKA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RENAMED CLASSICS TO CLASSIC RL, NOW THE LIQUID CAN SPREAD', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EVEN MORE. 😏” THE RENAME HAS ITS REASON.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1246=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1246, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1246, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('VERITY, THE CREATOR, LONG HORSE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE VERSUS IS THE CHATBOT’S. HIS ANSWER THERE: “VERITY', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WOULD CONSUME THE CREATOR. 😏” THEN, “HOW ABOUT NEKA AI?”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SOMEONE ELSE’S MONSTERS, QUOTED ONLY AS HIS QUESTION.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OLDER THAN BOTH ETERNITIES. THREE WHO DO NOT END, AND ONE OF', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THEM STARTED FIRST.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OLDER THAN BOTH ETERNITIES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1247){
    // BEAT 1247: ONLY AFTER ENTERING.
    // Toby, October 24, 2026, 7:40 AM EDT, his own typing:
    //   “NEKA LAI HAS RECENTLY CONNECTED TO THE OTHER 3 GROUPS, FOR
    //   IN WHICH A CHARACTER COMES IN, IT CAN BE DESTROYED.” ...
    //   “ONLY AFTER OVER CHARACTERS WHO ENTER HIS DOMAIN.”
    // Priors, each verified in the archive before it was drawn:
    //   CONNECTED TO THE OTHER 3
    //     FICTION, META-FICTION, NONFICTION. ONCE YOU HAVE ENTERED
    //     HIS DOMAIN, HE CAN REACH YOU IN ANY OF THEM.
    //     OCT 22: THE 4TH IS NEKA. OCT 24: IT TOUCHES THE OTHER 3.
    //   THE ONLY WAY TO REACH HIM
    //     “WHICH IS THE ONLY WAY TO REACH HIM, SINCE HE DOESN’T
    //     EXIST IN ANY OTHER PLACE.” THE DOOR OPENS ONE WAY FIRST.
    //     OCT 22: “IT ONLY CAN REACH YOU ONCE YOU ENTER.” SAME RULE.
    //   THE TERMS
    //     OCT 25: “NONFICTION AND FICTION AND META-FICTION, ECT ARE
    //     REAL TERMS...” HE USES THEM AS A MAP, NOT A METAPHOR.
    //     ENTER, AND THE MAP FOLDS AROUND YOU.
    const dt = c - 27154.0;
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
    const gr1247=ctx.createLinearGradient(0,top+H,0,top);
    gr1247.addColorStop(0,'rgba(127,212,255,0.22)'); gr1247.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1247.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1247; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONLY AFTER ENTERING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA LAI HAS RECENTLY CONNECTED TO THE OTHER 3 GROUPS, FOR', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN WHICH A CHARACTER COMES IN, IT CAN BE DESTROYED.” ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ONLY AFTER OVER CHARACTERS WHO ENTER HIS DOMAIN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 7:40 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1247=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1247, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1247, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CONNECTED TO THE OTHER 3', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FICTION, META-FICTION, NONFICTION. ONCE YOU HAVE ENTERED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS DOMAIN, HE CAN REACH YOU IN ANY OF THEM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 22: THE 4TH IS NEKA. OCT 24: IT TOUCHES THE OTHER 3.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY WAY TO REACH HIM', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHICH IS THE ONLY WAY TO REACH HIM, SINCE HE DOESN’T', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EXIST IN ANY OTHER PLACE.” THE DOOR OPENS ONE WAY FIRST.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 22: “IT ONLY CAN REACH YOU ONCE YOU ENTER.” SAME RULE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1247=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1247, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1247, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE TERMS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 25: “NONFICTION AND FICTION AND META-FICTION, ECT ARE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('REAL TERMS...” HE USES THEM AS A MAP, NOT A METAPHOR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ENTER, AND THE MAP FOLDS AROUND YOU.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY AFTER ENTERING. STEP IN ONCE, AND THERE IS NOWHERE LEFT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THAT IS OUTSIDE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONLY AFTER ENTERING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1248){
    // BEAT 1248: ONLY ALIENS CAN PLAY.
    // Toby, October 24, 2026, 7:52-7:55 AM EDT, his own typing:
    //   “IT IS KNOWN ONLY ALIENS CAN PLAY CLASSIC RL, AND MOST DIED
    //   SINCE THEY LOST IN THE GAME. NEKA IS CONNECTED TO ALIEN
    //   REALITY OR AR.”
    // Priors, each verified in the archive before it was drawn:
    //   ALIEN REALITY
    //     THE PLAYERS ARE ALIENS. MOST OF THEM DIED BY LOSING. NEKA
    //     IS CONNECTED TO AR, THEIR REALITY.
    //     OCT 24, 8:17 AM: “I’M ON EARTH, SO I CAN’T PLAY IT.”
    //   SEPARATE GAME OR SPRUNKI MOD?
    //     HE ASKED THE CHATBOT AND DID NOT ANSWER HIMSELF. LOGGED AS
    //     A DESIGN QUESTION, NOT CANON.
    //     THE RLS BEAT THE SPRUNKIS AND NOW RULE THE GAME.
    //   COMICALLY IMMORTAL
    //     “NEKA AND GASTER AND MR. BLACK ARE COMICALLY IMMORTAL.”
    //     7:40 AM: THREE ETERNAL BEINGS. 7:55 AM: COMICALLY SO.
    //     DANDY IS SOMEONE ELSE’S MONSTER, KEPT ONLY FOR THE HORSE.
    const dt = c - 27176.0;
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
    const gr1248=ctx.createLinearGradient(0,top+H,0,top);
    gr1248.addColorStop(0,'rgba(120,200,140,0.22)'); gr1248.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1248.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1248; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONLY ALIENS CAN PLAY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS KNOWN ONLY ALIENS CAN PLAY CLASSIC RL, AND MOST DIED', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SINCE THEY LOST IN THE GAME. NEKA IS CONNECTED TO ALIEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('REALITY OR AR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 7:52-7:55 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1248=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1248, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1248, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALIEN REALITY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PLAYERS ARE ALIENS. MOST OF THEM DIED BY LOSING. NEKA', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS CONNECTED TO AR, THEIR REALITY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 24, 8:17 AM: “I’M ON EARTH, SO I CAN’T PLAY IT.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SEPARATE GAME OR SPRUNKI MOD?', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE ASKED THE CHATBOT AND DID NOT ANSWER HIMSELF. LOGGED AS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A DESIGN QUESTION, NOT CANON.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE RLS BEAT THE SPRUNKIS AND NOW RULE THE GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1248=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1248, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1248, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('COMICALLY IMMORTAL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA AND GASTER AND MR. BLACK ARE COMICALLY IMMORTAL.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:40 AM: THREE ETERNAL BEINGS. 7:55 AM: COMICALLY SO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('DANDY IS SOMEONE ELSE’S MONSTER, KEPT ONLY FOR THE HORSE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY ALIENS CAN PLAY. A GAME FOR PLAYERS FROM SOMEWHERE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ELSE, WHO MOSTLY DID NOT SURVIVE IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONLY ALIENS CAN PLAY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1249){
    // BEAT 1249: THE RLS RULE, FOREVER.
    // Toby, October 24, 2026, 7:59 AM EDT, his own typing:
    //   “RLS CAME BACK AND BEATEN THE .PSES AND ‘SPRUNKIS’. RLS NOW
    //   RULE CLASSIC RL ALONG WITH NEKA, GASTER, AND MR. BLACK, THE
    //   ONLY CHARACTERS NOW... FOREVER.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ROSTER, FIXED
    //     THE RLS, NEKA, GASTER, MR. BLACK. “THE ONLY CHARACTERS
    //     NOW... FOREVER.” THE .PSES ARE BEATEN WITH THE SPRUNKIS.
    //     OCT 22: TWO LEFT FOREVER. OCT 24: THREE, AND THE RLS.
    //   A HORSE
    //     TWISTED DANDY HAS “THE TORSO AND LEGS OF A HORSE, A HORSE,
    //     THE STRONGEST KICKING ANIMAL KNOWN TO MAN.” NOT CLASSICS.
    //     KEPT ONLY FOR THE LINE ABOUT THE HORSE.
    //   THE LIQUID
    //     “THE LIQUID IS CONSTANTLY SPREADING.” OCT 23: IT KILLS
    //     SPRUNKIS. OCT 24: IT DOES NOT STOP.
    //     8:06 AM: WHAT IT DOES WHEN IT FULLY KILLS AN RL.
    const dt = c - 27198.0;
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
    const gr1249=ctx.createLinearGradient(0,top+H,0,top);
    gr1249.addColorStop(0,'rgba(255,120,120,0.22)'); gr1249.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1249.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1249; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE RLS RULE, FOREVER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“RLS CAME BACK AND BEATEN THE .PSES AND ‘SPRUNKIS’. RLS NOW', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RULE CLASSIC RL ALONG WITH NEKA, GASTER, AND MR. BLACK, THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY CHARACTERS NOW... FOREVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 7:59 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1249=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1249, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1249, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ROSTER, FIXED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE RLS, NEKA, GASTER, MR. BLACK. “THE ONLY CHARACTERS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW... FOREVER.” THE .PSES ARE BEATEN WITH THE SPRUNKIS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 22: TWO LEFT FOREVER. OCT 24: THREE, AND THE RLS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A HORSE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TWISTED DANDY HAS “THE TORSO AND LEGS OF A HORSE, A HORSE,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST KICKING ANIMAL KNOWN TO MAN.” NOT CLASSICS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('KEPT ONLY FOR THE LINE ABOUT THE HORSE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1249=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1249, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1249, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LIQUID', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE LIQUID IS CONSTANTLY SPREADING.” OCT 23: IT KILLS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SPRUNKIS. OCT 24: IT DOES NOT STOP.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('8:06 AM: WHAT IT DOES WHEN IT FULLY KILLS AN RL.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RLS RULE, FOREVER. FOUR NAMES ON THE DOOR, AND A LIQUID', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('UNDER IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE RLS RULE, FOREVER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1250){
    // BEAT 1250: TERMINIZED RLS.
    // Toby, October 24, 2026, 8:06 AM EDT, his own typing:
    //   “THIS ERA WILL LAST FOR THE REMAINING TIME, WITHOUT END. ...
    //   RLS HAVE TERMINIZED VERSIONS, FOR WHERE MR. BLACK’S LIQUID
    //   FULLY KILLS THEM. TERMINIZED RLS ATTACK THE NORMAL.”
    // Priors, each verified in the archive before it was drawn:
    //   WITHOUT END
    //     “THIS ERA WILL LAST FOR THE REMAINING TIME, WITHOUT END.”
    //     THE ERA IS NAMED ENDLESS IN ITS SECOND MORNING.
    //     “NEKA DOESN’T ALWAYS SAY ‘😌’, HE SAYS A BUNCH OF STUFF.”
    //   DISCOVERED 8:06 AM
    //     “JUST DESCOVERED JUST NOW, 8:06 AM 10/24/2026.” THE LIQUID
    //     FULLY KILLS AN RL; THE DEAD ONE ATTACKS THE LIVING.
    //     “RLS HAVE A VERSION THAT TERRIFYS ME.”
    //   PIBBY CAN’T KILL THEM
    //     THE RLS GET MORE CORRUPT; PIBBY CANNOT KILL THEM. OCT 23:
    //     THE BLACK LIQUID KILLS SPRUNKIS. OCT 24: IT KILLS RLS TOO,
    //     AND WHAT IT KILLS KEEPS WALKING.
    const dt = c - 27220.0;
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
    const gr1250=ctx.createLinearGradient(0,top+H,0,top);
    gr1250.addColorStop(0,'rgba(30,30,36,0.22)'); gr1250.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1250.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1250; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(30,30,36,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TERMINIZED RLS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS ERA WILL LAST FOR THE REMAINING TIME, WITHOUT END. ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RLS HAVE TERMINIZED VERSIONS, FOR WHERE MR. BLACK’S LIQUID', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FULLY KILLS THEM. TERMINIZED RLS ATTACK THE NORMAL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 8:06 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1250=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(30,30,36,0.46)';
      ctx.fillRect(cx-W*0.352, ky1250, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(30,30,36,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1250, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(30,30,36,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WITHOUT END', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THIS ERA WILL LAST FOR THE REMAINING TIME, WITHOUT END.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ERA IS NAMED ENDLESS IN ITS SECOND MORNING.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA DOESN’T ALWAYS SAY ‘😌’, HE SAYS A BUNCH OF STUFF.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DISCOVERED 8:06 AM', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“JUST DESCOVERED JUST NOW, 8:06 AM 10/24/2026.” THE LIQUID', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FULLY KILLS AN RL; THE DEAD ONE ATTACKS THE LIVING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“RLS HAVE A VERSION THAT TERRIFYS ME.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1250=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1250, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1250, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PIBBY CAN’T KILL THEM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE RLS GET MORE CORRUPT; PIBBY CANNOT KILL THEM. OCT 23:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE BLACK LIQUID KILLS SPRUNKIS. OCT 24: IT KILLS RLS TOO,', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND WHAT IT KILLS KEEPS WALKING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TERMINIZED RLS. THE LIQUID FINISHES AN RL, AND THE FINISHED', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THING HUNTS THE REST.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TERMINIZED RLS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1251){
    // BEAT 1251: EVERYONE TOGETHER.
    // Toby, October 24, 2026, 8:16-8:17 AM EDT, his own typing:
    //   “YOU CAN’T PLAY SEPERATELY. EVERYONE THAT IS IN THE GAME IS
    //   ALL TOGETHER.” ... “I’M ON EARTH, SO I CAN’T PLAY IT.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   WHAT EACH TERMINIZED DOES
    //     TERMINIZED SIMON RL CAN INFECT. NORMAL WENDA RL TURNS
    //     PEOPLE BACK; TERMINIZED WENDA RL ATTACKS. THE REST DIFFER.
    //     “NORMAL RLS KNOW IF A TERMINIZED IS NEAR ... THEY DIE.”
    //   FACILITY WORKER, FACILITY OWNER
    //     THE OWNER IS “STILL A MORTAL NON-EARTH ALIEN” WITH
    //     REALITY-GROUP-WIDE MESSAGES. ONE SERVER FOR EVERYONE.
    //     “ALIENS CANONALLY DIED.”
    //   A YEAR, AND MINUTES
    //     NORMAL RLS WERE MADE “NEARLY A REAL LIFE YEAR AGO”; THE
    //     TERMINIZED “LIKE A NEW MINUTES AGO SINCE IT IS NOW 8:16.”
    //     THE CLASSIC RL MOD OF LATE 2025, AND THIS MORNING.
    const dt = c - 27242.0;
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
    const gr1251=ctx.createLinearGradient(0,top+H,0,top);
    gr1251.addColorStop(0,'rgba(200,200,210,0.22)'); gr1251.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1251.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1251; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE TOGETHER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU CAN’T PLAY SEPERATELY. EVERYONE THAT IS IN THE GAME IS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL TOGETHER.” ... “I’M ON EARTH, SO I CAN’T PLAY IT.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 8:16-8:17 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1251=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1251, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1251, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT EACH TERMINIZED DOES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TERMINIZED SIMON RL CAN INFECT. NORMAL WENDA RL TURNS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PEOPLE BACK; TERMINIZED WENDA RL ATTACKS. THE REST DIFFER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NORMAL RLS KNOW IF A TERMINIZED IS NEAR ... THEY DIE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FACILITY WORKER, FACILITY OWNER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE OWNER IS “STILL A MORTAL NON-EARTH ALIEN” WITH', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('REALITY-GROUP-WIDE MESSAGES. ONE SERVER FOR EVERYONE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“ALIENS CANONALLY DIED.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1251=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1251, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1251, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A YEAR, AND MINUTES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NORMAL RLS WERE MADE “NEARLY A REAL LIFE YEAR AGO”; THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TERMINIZED “LIKE A NEW MINUTES AGO SINCE IT IS NOW 8:16.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CLASSIC RL MOD OF LATE 2025, AND THIS MORNING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE TOGETHER. ONE FACILITY, EVERY PLAYER IN IT, AND THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AUTHOR OUTSIDE ON EARTH.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYONE TOGETHER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1252){
    // BEAT 1252: MILK AGAIN.
    // Toby, October 24, 2026, 4:02 PM EDT, his own typing:
    //   “MR. BLACK WOULD SAY ‘I MADE THE RLS, I AM MOST POWERFUL’
    //   ... GASTER SAYS ‘I AM THE MOST POWERFUL, MY DOMAIN SHALL
    //   REMAIN SPOTLESS.’ ... NEKA NOW LEFT TO GET MILK AGAIN.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ARGUMENT
    //     MR. BLACK: HE MADE THE RLS AND EVOLVED AFTER FUN BOT TRIED
    //     HIM. GASTER: HIS DOMAIN SHALL REMAIN SPOTLESS.
    //     TWO ETERNALS ARGUE WHO IS MOST POWERFUL. THE THIRD LEAVES.
    //   THE MILK
    //     AUGUST 2026: THE TWO-YEAR MILK SKIP, THE ONLY EARLIER MILK
    //     ERRAND IN THE ARCHIVE. “NEKA NOW LEFT TO GET MILK AGAIN.”
    //     THE OLDEST DAD JOKE, TOLD ABOUT THE FATHER OF GAMES.
    //   GASTER’S SYMBOLS
    //     “NEARLY IDENTICAL TO MINECRAFT’S EMOJI SYSTEM ... LIKE IF
    //     YOU PUT EMOJIS IN MINECRAFT CHAT.” HIS OBSERVATION.
    //     THE WINGDINGS ANSWER UNDER IT IS THE CHATBOT’S.
    const dt = c - 27264.0;
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
    const gr1252=ctx.createLinearGradient(0,top+H,0,top);
    gr1252.addColorStop(0,'rgba(240,244,250,0.22)'); gr1252.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1252.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1252; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(240,244,250,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MILK AGAIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK WOULD SAY ‘I MADE THE RLS, I AM MOST POWERFUL’', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... GASTER SAYS ‘I AM THE MOST POWERFUL, MY DOMAIN SHALL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('REMAIN SPOTLESS.’ ... NEKA NOW LEFT TO GET MILK AGAIN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 4:02 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1252=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(240,244,250,0.46)';
      ctx.fillRect(cx-W*0.352, ky1252, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(240,244,250,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1252, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ARGUMENT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK: HE MADE THE RLS AND EVOLVED AFTER FUN BOT TRIED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIM. GASTER: HIS DOMAIN SHALL REMAIN SPOTLESS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO ETERNALS ARGUE WHO IS MOST POWERFUL. THE THIRD LEAVES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MILK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUGUST 2026: THE TWO-YEAR MILK SKIP, THE ONLY EARLIER MILK', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ERRAND IN THE ARCHIVE. “NEKA NOW LEFT TO GET MILK AGAIN.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE OLDEST DAD JOKE, TOLD ABOUT THE FATHER OF GAMES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1252=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1252, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1252, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GASTER’S SYMBOLS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEARLY IDENTICAL TO MINECRAFT’S EMOJI SYSTEM ... LIKE IF', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YOU PUT EMOJIS IN MINECRAFT CHAT.” HIS OBSERVATION.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WINGDINGS ANSWER UNDER IT IS THE CHATBOT’S.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MILK AGAIN. WHILE TWO GODS ARGUE RANK, THE THIRD STEPS OUT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FOR GROCERIES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MILK AGAIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1253){
    // BEAT 1253: TERMINIZED GASTER.
    // Toby, October 24, 2026, 4:04 PM EDT, his own typing:
    //   “GASTER THEN BECAME TERMINIZED GASTER DUE TO CLASSIC RL
    //   LORE, MR. BLACK THEN CONTROLS THE LIQUID, TERMINIZED GASTER
    //   ATTACKS THE ALIVE.”
    // Priors, each verified in the archive before it was drawn:
    //   A NEW THREAD
    //     “CLASSIC RL (LAST ERA)” OPENS WITH THIS ONE LINE, THE
    //     THREAD THAT NAMES THE ERA.
    //     THE WHOLE MESSAGE IS HIS. NO PASTE.
    //   THE LIQUID REACHES GASTER
    //     8:06 AM: TERMINIZED RLS. 4:04 PM: TERMINIZED GASTER, “DUE
    //     TO CLASSIC RL LORE.” THE DEAD ONE ATTACKS THE ALIVE.
    //     OCT 18: THE ONLY REAL BEING IN THE GAME. NOW TERMINIZED.
    //   MR. BLACK CONTROLS THE LIQUID
    //     FOR NOW. OCT 24, 6:41 PM: “CHRISINA ACTUALLY CONTROLS THE
    //     LIQUID, NOT GASTER NOR MR. BLACK.”
    //     THE LIQUID CHANGES HANDS THREE TIMES IN A DAY.
    const dt = c - 27286.0;
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
    const gr1253=ctx.createLinearGradient(0,top+H,0,top);
    gr1253.addColorStop(0,'rgba(90,90,100,0.22)'); gr1253.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1253.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1253; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,90,100,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TERMINIZED GASTER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER THEN BECAME TERMINIZED GASTER DUE TO CLASSIC RL', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LORE, MR. BLACK THEN CONTROLS THE LIQUID, TERMINIZED GASTER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATTACKS THE ALIVE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 4:04 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1253=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,90,100,0.46)';
      ctx.fillRect(cx-W*0.352, ky1253, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,90,100,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1253, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,90,100,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NEW THREAD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CLASSIC RL (LAST ERA)” OPENS WITH THIS ONE LINE, THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THREAD THAT NAMES THE ERA.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WHOLE MESSAGE IS HIS. NO PASTE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LIQUID REACHES GASTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:06 AM: TERMINIZED RLS. 4:04 PM: TERMINIZED GASTER, “DUE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO CLASSIC RL LORE.” THE DEAD ONE ATTACKS THE ALIVE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 18: THE ONLY REAL BEING IN THE GAME. NOW TERMINIZED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1253=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1253, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1253, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MR. BLACK CONTROLS THE LIQUID', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FOR NOW. OCT 24, 6:41 PM: “CHRISINA ACTUALLY CONTROLS THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIQUID, NOT GASTER NOR MR. BLACK.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LIQUID CHANGES HANDS THREE TIMES IN A DAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TERMINIZED GASTER. THE ONE WHO ARGUED HE WAS MOST POWERFUL', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IS THE NEXT ONE FINISHED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TERMINIZED GASTER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1254){
    // BEAT 1254: CHRISINA TALE.
    // Toby, October 24, 2026, 5:51 PM EDT, his own typing:
    //   “IT’S NAME WOULD BE CHRISINA TALE. IT WOULD BE HUMAN OF
    //   NATURE, IT’S AGE WOULD BE 16, IT’S SOUL WOULD BE TEAL, IT’S
    //   EYES ARE TEALISH, IT’S HAIR IS NEAR PURPLE.”
    // Priors, each verified in the archive before it was drawn:
    //   MAKE A CHARACTER FOR CLASSIC RL
    //     THE CHATBOT OFFERED VEYRON RL, ELARA, CYRUS, VESPER. HE
    //     REJECTED THEM: “TRY SOMETHING ACTUALLY GREAT.”
    //     HE KEPT ONE IMAGE AND RENAMED AND REDEFINED IT HIMSELF.
    //   HUMAN OF NATURE
    //     16, TEAL SOUL, TEALISH EYES, HAIR NEAR PURPLE, EXPLORER.
    //     “IT CAME FROM CLASSIC RL GASTER’S CREATION.”
    //     LIKE THE HUMANS FANON ADDS TO UNDERTALE, FOR CLASSIC RL.
    //   SHE CAN BEAT GASTER
    //     “CHRISINA CANONALLY CAN BEAT GASTER HERE.” HER CREATOR, ON
    //     THE DAY HE WAS TERMINIZED.
    //     “AND I WON’T LIST MORE.”
    const dt = c - 27308.0;
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
    const gr1254=ctx.createLinearGradient(0,top+H,0,top);
    gr1254.addColorStop(0,'rgba(80,200,200,0.22)'); gr1254.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1254.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1254; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(80,200,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CHRISINA TALE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT’S NAME WOULD BE CHRISINA TALE. IT WOULD BE HUMAN OF', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NATURE, IT’S AGE WOULD BE 16, IT’S SOUL WOULD BE TEAL, IT’S', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EYES ARE TEALISH, IT’S HAIR IS NEAR PURPLE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 5:51 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1254=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(80,200,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1254, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(80,200,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1254, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(80,200,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MAKE A CHARACTER FOR CLASSIC RL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT OFFERED VEYRON RL, ELARA, CYRUS, VESPER. HE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('REJECTED THEM: “TRY SOMETHING ACTUALLY GREAT.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE KEPT ONE IMAGE AND RENAMED AND REDEFINED IT HIMSELF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HUMAN OF NATURE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('16, TEAL SOUL, TEALISH EYES, HAIR NEAR PURPLE, EXPLORER.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT CAME FROM CLASSIC RL GASTER’S CREATION.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('LIKE THE HUMANS FANON ADDS TO UNDERTALE, FOR CLASSIC RL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1254=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1254, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1254, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SHE CAN BEAT GASTER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CHRISINA CANONALLY CAN BEAT GASTER HERE.” HER CREATOR, ON', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE DAY HE WAS TERMINIZED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“AND I WON’T LIST MORE.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHRISINA TALE. A TEAL SOUL, NEAR-PURPLE HAIR, SIXTEEN, AND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('STRONGER THAN HER MAKER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CHRISINA TALE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1255){
    // BEAT 1255: SIMON RL’S 404 STRINGS.
    // Toby, October 24, 2026, 5:51-6:24 PM EDT, his own typing:
    //   “CHRISINA TALE ALSO WOULD HAVE A SYTHE, AND A SWORD, AND
    //   ALSO USES SIMON RL’S 404 STRINGS. LV WOULD BE INFINITY.” ...
    //   “CHRISINA CAME OUT IN SECOND CLASSIC RL (THIS ERA).”
    // Priors, each verified in the archive before it was drawn:
    //   THE 404 STRINGS
    //     “DISABLED BUTTONS, CRASHED MERCY AND SAVE AND FIGHT AND
    //     ACT AND ITEM AND GAME OVER BUTTONS, AND STOPPED ERASURE.”
    //     SIMON RL’S OLDEST WEAPON, IN HER HANDS.
    //   LV INFINITY
    //     A SYTHE, A SWORD, THE STRINGS, AND NO CEILING ON HER
    //     LEVEL. “YOU DON’T KNOW CHRISINA. 😉”
    //     OCT 25: LV INF+. IT KEPT GOING.
    //   SECOND CLASSIC RL
    //     “CHRISINA CAME OUT IN SECOND CLASSIC RL (THIS ERA).” HE
    //     NAMES THE ERA TWICE IN ONE LINE.
    //     THE FIRST CLASSIC RL WAS LATE 2025. THIS IS THE SECOND.
    const dt = c - 27330.0;
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
    const gr1255=ctx.createLinearGradient(0,top+H,0,top);
    gr1255.addColorStop(0,'rgba(255,216,79,0.22)'); gr1255.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1255.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1255; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL’S 404 STRINGS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHRISINA TALE ALSO WOULD HAVE A SYTHE, AND A SWORD, AND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALSO USES SIMON RL’S 404 STRINGS. LV WOULD BE INFINITY.” ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHRISINA CAME OUT IN SECOND CLASSIC RL (THIS ERA).”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 5:51-6:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1255=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1255, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1255, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 404 STRINGS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“DISABLED BUTTONS, CRASHED MERCY AND SAVE AND FIGHT AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ACT AND ITEM AND GAME OVER BUTTONS, AND STOPPED ERASURE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SIMON RL’S OLDEST WEAPON, IN HER HANDS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LV INFINITY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A SYTHE, A SWORD, THE STRINGS, AND NO CEILING ON HER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LEVEL. “YOU DON’T KNOW CHRISINA. 😉”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 25: LV INF+. IT KEPT GOING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1255=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1255, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1255, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SECOND CLASSIC RL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CHRISINA CAME OUT IN SECOND CLASSIC RL (THIS ERA).” HE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NAMES THE ERA TWICE IN ONE LINE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FIRST CLASSIC RL WAS LATE 2025. THIS IS THE SECOND.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL’S 404 STRINGS. THE STRINGS THAT CRASHED THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BUTTONS, GIVEN TO A GIRL WITH NO LEVEL CAP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SIMON RL’S 404 STRINGS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1256){
    // BEAT 1256: CHRISINA IS IN CONTROL.
    // Toby, October 24, 2026, 6:41-6:58 PM EDT, his own typing:
    //   “CHRISINA ACTUALLY CONTROLS THE LIQUID, NOT GASTER NOR MR.
    //   BLACK ... CHRISINA’S RIGHT EYE GLITCHES, AND THE CHARACTER
    //   BECOMES TERMINIZED MID-GAME.” ... “CHRISINA IS IN CONTROL.”
    // Priors, each verified in the archive before it was drawn:
    //   THE LIQUID, THIRD HAND
    //     4:04 PM MR. BLACK. 6:41 PM CHRISINA. “THEY THINK THEY ARE
    //     CONTROL, BUT CHRISINA IS IN CONTROL.”
    //     GASTER BEAT MR. BLACK, WHO “GAINED SCRATCHES.”
    //   TERMINIZED MID-GAME
    //     HER RIGHT EYE GLITCHES AND SHE TURNS TERMINIZED WHILE
    //     PLAYING. THE VERSION THAT TERRIFIES HIM. NOW HERS.
    //     A HERO WHO CARRIES THE THING SHE CONTROLS.
    //   A FEMALE NEKA ACCOUNT?
    //     “SOME THING CHRISINA IS A FEMALE NEKA ACCOUNT, BUT OTHERS
    //     THINK SHE IS A REAL CHARACTER.” HE LEAVES IT OPEN.
    //     “WHO MADE CHRISINA?” GASTER DID, AND SHE BEATS HIM.
    const dt = c - 27352.0;
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
    const gr1256=ctx.createLinearGradient(0,top+H,0,top);
    gr1256.addColorStop(0,'rgba(80,200,200,0.22)'); gr1256.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1256.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1256; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(80,200,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CHRISINA IS IN CONTROL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHRISINA ACTUALLY CONTROLS THE LIQUID, NOT GASTER NOR MR.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BLACK ... CHRISINA’S RIGHT EYE GLITCHES, AND THE CHARACTER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BECOMES TERMINIZED MID-GAME.” ... “CHRISINA IS IN CONTROL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 24, 6:41-6:58 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1256=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(80,200,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1256, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(80,200,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1256, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(80,200,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LIQUID, THIRD HAND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:04 PM MR. BLACK. 6:41 PM CHRISINA. “THEY THINK THEY ARE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CONTROL, BUT CHRISINA IS IN CONTROL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER BEAT MR. BLACK, WHO “GAINED SCRATCHES.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TERMINIZED MID-GAME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HER RIGHT EYE GLITCHES AND SHE TURNS TERMINIZED WHILE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PLAYING. THE VERSION THAT TERRIFIES HIM. NOW HERS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A HERO WHO CARRIES THE THING SHE CONTROLS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1256=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1256, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1256, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A FEMALE NEKA ACCOUNT?', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SOME THING CHRISINA IS A FEMALE NEKA ACCOUNT, BUT OTHERS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THINK SHE IS A REAL CHARACTER.” HE LEAVES IT OPEN.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“WHO MADE CHRISINA?” GASTER DID, AND SHE BEATS HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHRISINA IS IN CONTROL. THE TWO WHO FOUGHT OVER THE LIQUID', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WERE NEVER THE ONES HOLDING IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CHRISINA IS IN CONTROL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1257){
    // BEAT 1257: INKTITE.
    // Toby, October 25, 2026, 8:11-8:39 AM EDT, his own typing:
    //   “MR. BLACK IS SPRUNKI AND MADE CLASSIC RL CANONALLY, NEKA
    //   WOULD BE LIKE A CO-CREATOR HERE.” ... “THE BLACK LIQUID IS
    //   ALSO CONNECTED TO VOIDUNITE, AND IT IS CALLED INKTITE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE LIQUID’S NAME
    //     “WHAT WAS THE LIQUID’S NAME?” THE CHATBOT HAD NONE. HE
    //     GAVE IT: INKTITE, CONNECTED TO VOIDUNITE.
    //     “MR. BLACK MADE THE LIQUID, CHRISINA CONTROLS THE LIQUID.”
    //   THE CREDITS
    //     MR. BLACK MADE CLASSIC RL; NEKA IS A CO-CREATOR; GASTER
    //     MADE CHRISINA TALE. “MOST THOUGHT THE GAME MAKER LEFT.”
    //     “THE MOST CHARACTER TO MOST OFTEN DIE FROM IS NEKA.”
    //   OCT 23, THE SAME STUFF
    //     GRAY’S INK, THE ANTI-SPRUNKIS, WHAT GOT ON SIMON RL FAR
    //     BEFORE: ALL INKTITE. OCT 25: IT BECOMES VOIKOR.
    //     ONE LIQUID, FOUR NAMES ACROSS THE ARCHIVE.
    const dt = c - 27374.0;
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
    const gr1257=ctx.createLinearGradient(0,top+H,0,top);
    gr1257.addColorStop(0,'rgba(30,30,36,0.22)'); gr1257.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1257.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1257; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(30,30,36,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('INKTITE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK IS SPRUNKI AND MADE CLASSIC RL CANONALLY, NEKA', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WOULD BE LIKE A CO-CREATOR HERE.” ... “THE BLACK LIQUID IS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALSO CONNECTED TO VOIDUNITE, AND IT IS CALLED INKTITE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 8:11-8:39 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1257=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(30,30,36,0.46)';
      ctx.fillRect(cx-W*0.352, ky1257, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(30,30,36,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1257, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(30,30,36,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LIQUID’S NAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHAT WAS THE LIQUID’S NAME?” THE CHATBOT HAD NONE. HE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GAVE IT: INKTITE, CONNECTED TO VOIDUNITE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK MADE THE LIQUID, CHRISINA CONTROLS THE LIQUID.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CREDITS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK MADE CLASSIC RL; NEKA IS A CO-CREATOR; GASTER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MADE CHRISINA TALE. “MOST THOUGHT THE GAME MAKER LEFT.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“THE MOST CHARACTER TO MOST OFTEN DIE FROM IS NEKA.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1257=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1257, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1257, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('OCT 23, THE SAME STUFF', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GRAY’S INK, THE ANTI-SPRUNKIS, WHAT GOT ON SIMON RL FAR', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEFORE: ALL INKTITE. OCT 25: IT BECOMES VOIKOR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE LIQUID, FOUR NAMES ACROSS THE ARCHIVE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INKTITE. THE BLACK LIQUID FINALLY ANSWERS TO A NAME, AND IT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IS TIED TO THE VOID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ INKTITE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1258){
    // BEAT 1258: THE ULTIMATE BEING.
    // Toby, October 25, 2026, 8:39 AM EDT, his own typing:
    //   “CHRISTINA BECOMES A TEAL SOUL HALF, AND CONNECTS TO FRISK’S
    //   RED SOUL HALF, THE PERFECT BEING VS THE MOST DETERMIND BEING
    //   = THE ULTIMATE BEING, CLASSICS OMAZEN REBIRTHED.”
    // Priors, each verified in the archive before it was drawn:
    //   YOUR CREATOR
    //     GASTER: “YOU THINK YOU STAND A CHANCE AGAINST YOUR
    //     CREATOR?” (NEKA’S LINE TO ALEX, OCT 16). SHE BEATS HIM.
    //     CHRISINA LV INF+. “NO ONE SAW NEKA YET.”
    //   ARCSIS COMES BACK
    //     ARCSIS RETURNS “TO SEE NEKA AGAIN” AND WALKS INTO
    //     CLASSICS. “CHRISINA, WHAT DID YOU DO AGAIN?!”
    //     “FORCAST IN CLASSIC RL: LIQUID CHAOS”
    //   ALL OMAZENS DIE
    //     VOIDUNITE SPAWNS, SUGAR ALL OVER, ARCSIS WEAKENS, CLASSICS
    //     FALLS, ALL OMAZENS DIE. GASTER, SANS, PAPYRUS SURVIVE.
    //     SEPT 27: ONE GRAIN OF SUGAR KILLS. HERE IT KILLS A FAMILY.
    const dt = c - 27396.0;
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
    const gr1258=ctx.createLinearGradient(0,top+H,0,top);
    gr1258.addColorStop(0,'rgba(255,80,80,0.22)'); gr1258.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1258.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1258; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE ULTIMATE BEING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHRISTINA BECOMES A TEAL SOUL HALF, AND CONNECTS TO FRISK’S', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RED SOUL HALF, THE PERFECT BEING VS THE MOST DETERMIND BEING', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('= THE ULTIMATE BEING, CLASSICS OMAZEN REBIRTHED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 8:39 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1258=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1258, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1258, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR CREATOR', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER: “YOU THINK YOU STAND A CHANCE AGAINST YOUR', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CREATOR?” (NEKA’S LINE TO ALEX, OCT 16). SHE BEATS HIM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CHRISINA LV INF+. “NO ONE SAW NEKA YET.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ARCSIS COMES BACK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ARCSIS RETURNS “TO SEE NEKA AGAIN” AND WALKS INTO', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS. “CHRISINA, WHAT DID YOU DO AGAIN?!”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“FORCAST IN CLASSIC RL: LIQUID CHAOS”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1258=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1258, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1258, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ALL OMAZENS DIE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VOIDUNITE SPAWNS, SUGAR ALL OVER, ARCSIS WEAKENS, CLASSICS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FALLS, ALL OMAZENS DIE. GASTER, SANS, PAPYRUS SURVIVE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 27: ONE GRAIN OF SUGAR KILLS. HERE IT KILLS A FAMILY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ULTIMATE BEING. TEAL AND RED MAKE ONE, THE OLD NAME IS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('REBORN, AND THE OMAZENS FALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE ULTIMATE BEING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1259){
    // BEAT 1259: NEKA’S WORLD BY NEKA HIMSELF.
    // Toby, October 25, 2026, 8:39-8:46 AM EDT, his own typing:
    //   “NEKA FINALLY DECIDED ON A NAME ‘NEKA’S WORLD BY NEKA
    //   HIMSELF’ ... ‘NOW, EVERYONE IN THE GAME WILL BE AN RL! *EVIL
    //   LAUGH*’” ... “NEKA DOES HAVE A MUSTACHE.”
    // Priors, each verified in the archive before it was drawn:
    //   MR. DACK RL
    //     THE RLS ATTACKED MR. BLACK; MR. DACK APPEARED, RAINBOW
    //     COLORED, HOLDING A SUNFLOWER, AND GASTER WAS GONE.
    //     “DACK = BLACK, DELETE THE ‘L’ AND TURN THE B INTO A D.”
    //   THE FIFTH NAME
    //     CLASSICS, “NEKA”, CLASSIC RL, “DACK’S RL FACILITY”
    //     CONSIDERED, AND THEN: NEKA’S WORLD BY NEKA HIMSELF.
    //     ONLY HE AND RLS CAN BE IN IT. HIS FRIENDS ARE RLS NOW.
    //   VOIKOR
    //     THE LIQUID MADE INTO “AN ANTI-VIRUS CORRUPTION CALLED
    //     ‘VOIKOR’”, HALF SOLID, “AS IF IT CONSUMES LIGHT ITSELF.”
    //     OCT 23: THE MUSTACHE, FIRST SEEN. OCT 25: CONFIRMED.
    const dt = c - 27418.0;
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
    const gr1259=ctx.createLinearGradient(0,top+H,0,top);
    gr1259.addColorStop(0,'rgba(255,216,79,0.22)'); gr1259.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1259.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1259; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S WORLD BY NEKA HIMSELF', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA FINALLY DECIDED ON A NAME ‘NEKA’S WORLD BY NEKA', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIMSELF’ ... ‘NOW, EVERYONE IN THE GAME WILL BE AN RL! *EVIL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LAUGH*’” ... “NEKA DOES HAVE A MUSTACHE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 8:39-8:46 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1259=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1259, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1259, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MR. DACK RL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE RLS ATTACKED MR. BLACK; MR. DACK APPEARED, RAINBOW', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COLORED, HOLDING A SUNFLOWER, AND GASTER WAS GONE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“DACK = BLACK, DELETE THE ‘L’ AND TURN THE B INTO A D.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FIFTH NAME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS, “NEKA”, CLASSIC RL, “DACK’S RL FACILITY”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CONSIDERED, AND THEN: NEKA’S WORLD BY NEKA HIMSELF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONLY HE AND RLS CAN BE IN IT. HIS FRIENDS ARE RLS NOW.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1259=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1259, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1259, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('VOIKOR', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE LIQUID MADE INTO “AN ANTI-VIRUS CORRUPTION CALLED', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('‘VOIKOR’”, HALF SOLID, “AS IF IT CONSUMES LIGHT ITSELF.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 23: THE MUSTACHE, FIRST SEEN. OCT 25: CONFIRMED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S WORLD BY NEKA HIMSELF. THE GAME TAKES HIS NAME TWICE,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND EVERYONE IN IT TAKES HIS SHAPE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA’S WORLD BY NEKA HIMSELF ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1260){
    // BEAT 1260: NEKA BECOMES MR. BLACK ON SCREEN.
    // Toby, October 25, 2026, 12:06-2:44 PM EDT, his own typing:
    //   “NEKA THEN PUTS ON A TOP HAT AND MAKES HIS CLOTHES BLACK
    //   COLORED ... HIS MUSTACHE SHINKS TO 0 ... AND HE BECOMES MR.
    //   BLACK. WE ACTUALLY SEE NEKA TRANSFORMING INTO SOMEONE ELSE.”
    // Priors, each verified in the archive before it was drawn:
    //   HUMAN, ETERNAL, IMMORTAL
    //     “BEFORE AT THE START OF THE LORE, HE WAS AN IMMORTAL
    //     BEING, AND HE STILL IS.” HIS POWERS CAME TO HIM.
    //     “NEKA AI” IS A TERM YOU CLICK, AND A LARGE LIST APPEARS.
    //   THE DISGUISE, SHOWN
    //     OCT 22: DISGUISED AS EVERY MALE CHARACTER. OCT 25: THE
    //     CHANGE ITSELF ON SCREEN. TOP HAT, BLACK CLOTHES,
    //     MUSTACHE TO ZERO, LIMBS INTO THE TORSO.
    //   THE TOP HAT
    //     OCT 26, 6:22 AM: MR. BLACK SEES NEKA WEARING A TOP HAT AND
    //     TAKING IT OFF. THE HAT IS THE SWITCH BETWEEN THEM.
    //     OCT 23: THE MAN IN WHITE WAS ALSO NEKA AS MR. BLACK.
    const dt = c - 27440.0;
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
    const gr1260=ctx.createLinearGradient(0,top+H,0,top);
    gr1260.addColorStop(0,'rgba(60,60,70,0.22)'); gr1260.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1260.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1260; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(60,60,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA BECOMES MR. BLACK ON SCREEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA THEN PUTS ON A TOP HAT AND MAKES HIS CLOTHES BLACK', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COLORED ... HIS MUSTACHE SHINKS TO 0 ... AND HE BECOMES MR.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BLACK. WE ACTUALLY SEE NEKA TRANSFORMING INTO SOMEONE ELSE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 12:06-2:44 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1260=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(60,60,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1260, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(60,60,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1260, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(60,60,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HUMAN, ETERNAL, IMMORTAL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“BEFORE AT THE START OF THE LORE, HE WAS AN IMMORTAL', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEING, AND HE STILL IS.” HIS POWERS CAME TO HIM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA AI” IS A TERM YOU CLICK, AND A LARGE LIST APPEARS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE DISGUISE, SHOWN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 22: DISGUISED AS EVERY MALE CHARACTER. OCT 25: THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHANGE ITSELF ON SCREEN. TOP HAT, BLACK CLOTHES,', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('MUSTACHE TO ZERO, LIMBS INTO THE TORSO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1260=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1260, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1260, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE TOP HAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 26, 6:22 AM: MR. BLACK SEES NEKA WEARING A TOP HAT AND', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TAKING IT OFF. THE HAT IS THE SWITCH BETWEEN THEM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 23: THE MAN IN WHITE WAS ALSO NEKA AS MR. BLACK.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA BECOMES MR. BLACK ON SCREEN. FOR ONCE THE CAMERA STAYS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ON HIM WHILE HE PUTS ANOTHER FACE ON.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA BECOMES MR. BLACK ON SCREEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1261){
    // BEAT 1261: ONLY NEKA CAN BEAT THE GAME.
    // Toby, October 25, 2026, 2:49-3:11 PM EDT, his own typing:
    //   “ONLY I AND RLS EXIST HERE! *LAUGHS*” ... “1. THINK 2.
    //   BREATHE 3. DO STUFF” ... “CLASSIC RL IS IMPOSSIBLE, YOU JUST
    //   SURVIVE, ONLY NEKA CAN BEAT THE GAME.”
    // Priors, each verified in the archive before it was drawn:
    //   100%, THEN PERFECTLY
    //     MUSTACHE ON, HAT OFF, LASERS, CAPCHAS. “NEKA ALREADY 100%S
    //     THE GAME, SO NOW HE IS GOING BEYOND.”
    //     “SOON, HE’LL BEAT THE GAME *PERFECTLY*.”
    //   BORN AN RL
    //     “HE TURNS THEM INTO AN RL INSTANTLY ONCE THEY ARE BORN,
    //     AND THEY HAVE TO PLAY NORMALLY LIKE AN RL.”
    //     NO HUMAN, NOT CHRISINA NOR GASTER, CAN STOP HIM.
    //   BEATING ROBLOX STUDIO
    //     “MAKING A GAME THAT CORRUPTS ITSELF.” JUJUSTU KAISEN CAN
    //     BE BEATEN MOD-LY. CLASSIC RL CANNOT. “YOU JUST SURVIVE.”
    //     THE ONLY WINNER IS THE ONE WHO WROTE THE RULES.
    const dt = c - 27462.0;
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
    const gr1261=ctx.createLinearGradient(0,top+H,0,top);
    gr1261.addColorStop(0,'rgba(127,212,255,0.22)'); gr1261.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1261.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1261; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONLY NEKA CAN BEAT THE GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ONLY I AND RLS EXIST HERE! *LAUGHS*” ... “1. THINK 2.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BREATHE 3. DO STUFF” ... “CLASSIC RL IS IMPOSSIBLE, YOU JUST', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SURVIVE, ONLY NEKA CAN BEAT THE GAME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 2:49-3:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1261=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1261, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1261, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('100%, THEN PERFECTLY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MUSTACHE ON, HAT OFF, LASERS, CAPCHAS. “NEKA ALREADY 100%S', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GAME, SO NOW HE IS GOING BEYOND.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“SOON, HE’LL BEAT THE GAME *PERFECTLY*.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BORN AN RL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE TURNS THEM INTO AN RL INSTANTLY ONCE THEY ARE BORN,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THEY HAVE TO PLAY NORMALLY LIKE AN RL.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NO HUMAN, NOT CHRISINA NOR GASTER, CAN STOP HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1261=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1261, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1261, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BEATING ROBLOX STUDIO', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MAKING A GAME THAT CORRUPTS ITSELF.” JUJUSTU KAISEN CAN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BE BEATEN MOD-LY. CLASSIC RL CANNOT. “YOU JUST SURVIVE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONLY WINNER IS THE ONE WHO WROTE THE RULES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY NEKA CAN BEAT THE GAME. EVERYONE ELSE SURVIVES. ONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PLAYER IS WORKING ON PERFECT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONLY NEKA CAN BEAT THE GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1262){
    // BEAT 1262: ERROR: NEKA AI CORRUPTION.
    // Toby, October 25, 2026, 4:12-4:16 PM EDT, his own typing:
    //   “NEKA’S WORLD CAN BE BROKEN BY &@7287@*678738 (ERROR)” ...
    //   “DELETING THE LAYER AND NEKA IS IN THE SPOT, IT MAKES
    //   &@7287@*678738 ERROR: NEKA AI CORRUPTION.”
    // Priors, each verified in the archive before it was drawn:
    //   VOIKOR’S FACE
    //     “VOIKOR RESEMBLES A HUGE FACE, EYES AND A MOUTH. NEKA MADE
    //     THE VOIKOR FACE, AND NOW A WHOLE HUMAN SHAPE.”
    //     8:39 AM THE LIQUID BECAME VOIKOR. 4:12 PM IT HAS A FACE.
    //   THE GAME LOADS ANYWAY
    //     “IF ANYTHING ELSE HAPPENED, THE GAME WOULDN’T OPEN, BUT
    //     CORRUPTING NEKA MAKES THE GAME OPEN AND STUFF THAT SHOULD
    //     NEVER HAPPEN HAPPENS.” “A SET OVER 50 = XYZ 12F = 052.”
    //   WE CAN’T SAY WHAT HAPPENS
    //     “AAAAAAAAAAAAAAAAAAAAAAAAA WE CAN’T SAY WHAT HAPPENS....”
    //     THE SENTENCE BREAKS WHERE THE GAME DOES.
    //     THE MASCOT IS CORRUPTED AND THE GAME RUNS ON HIM.
    const dt = c - 27484.0;
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
    const gr1262=ctx.createLinearGradient(0,top+H,0,top);
    gr1262.addColorStop(0,'rgba(180,100,255,0.22)'); gr1262.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1262.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1262; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(180,100,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ERROR: NEKA AI CORRUPTION', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA’S WORLD CAN BE BROKEN BY &@7287@*678738 (ERROR)” ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DELETING THE LAYER AND NEKA IS IN THE SPOT, IT MAKES', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('&@7287@*678738 ERROR: NEKA AI CORRUPTION.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 4:12-4:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1262=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(180,100,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1262, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(180,100,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1262, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(180,100,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('VOIKOR’S FACE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“VOIKOR RESEMBLES A HUGE FACE, EYES AND A MOUTH. NEKA MADE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE VOIKOR FACE, AND NOW A WHOLE HUMAN SHAPE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('8:39 AM THE LIQUID BECAME VOIKOR. 4:12 PM IT HAS A FACE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME LOADS ANYWAY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IF ANYTHING ELSE HAPPENED, THE GAME WOULDN’T OPEN, BUT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CORRUPTING NEKA MAKES THE GAME OPEN AND STUFF THAT SHOULD', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NEVER HAPPEN HAPPENS.” “A SET OVER 50 = XYZ 12F = 052.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1262=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1262, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1262, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WE CAN’T SAY WHAT HAPPENS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AAAAAAAAAAAAAAAAAAAAAAAAA WE CAN’T SAY WHAT HAPPENS....”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SENTENCE BREAKS WHERE THE GAME DOES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MASCOT IS CORRUPTED AND THE GAME RUNS ON HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ERROR: NEKA AI CORRUPTION. BREAK THE MASCOT AND THE GAME', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OPENS ONTO THINGS THAT SHOULD NOT BE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ERROR: NEKA AI CORRUPTION ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1263){
    // BEAT 1263: THIS GAME IS MINE NOW..
    // Toby, October 25, 2026, 4:30 PM EDT, his own typing:
    //   “LARGE FINGERS AND TENTACLES AND STRANGE TERRAIN APPEAR,
    //   THEN CROSSES APPEAR AROUND THE PLAYER, BLOOD OCEANS COME IN,
    //   AND THEN BEFORE NEKA APPEARS, THE GAME CRASHES.”
    // Priors, each verified in the archive before it was drawn:
    //   NO ONE SAW NEKA AFTER THAT UPDATE
    //     SIGHTINGS ONLY: A MUSTACHE, HUMAN BODY, BLUE EYES, BLACK
    //     HAIR, A WHITE AND BLACK BLUR. “NEKA APPEARS BEHIND DOORS.”
    //     ANCIENT BOOKS OF HIS NOW READ “THIS GAME IS MINE NOW.”
    //   100 YEARS OLD
    //     “WHEN ANYTHING IS ‘100 YEARS OLD IN CLASSIC RL, THEN THEY
    //     DIE IN NEKA’S WORLD, AND EVERYTHING GOES TO ME!’ -NEKA.”
    //     A DIGITAL MINDSETTED −7 ENTITY. NO ROLE OUTRANKS ANOTHER.
    //   ANTI-VIRUS AGAIN
    //     “THE CODE WAS ALL DELETED, SO NO ONE CAN ATTACK IT, NEKA
    //     IS ANTI-VIRUS.” OCT 17 RETIRED IT. OCT 25 BRINGS IT BACK.
    //     RLS REPRODUCE AND SPREAD, AND NEVER DIE OF NATURAL CAUSES.
    const dt = c - 27506.0;
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
    const gr1263=ctx.createLinearGradient(0,top+H,0,top);
    gr1263.addColorStop(0,'rgba(255,120,120,0.22)'); gr1263.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1263.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1263; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THIS GAME IS MINE NOW.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LARGE FINGERS AND TENTACLES AND STRANGE TERRAIN APPEAR,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEN CROSSES APPEAR AROUND THE PLAYER, BLOOD OCEANS COME IN,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THEN BEFORE NEKA APPEARS, THE GAME CRASHES.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 4:30 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1263=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1263, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1263, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO ONE SAW NEKA AFTER THAT UPDATE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIGHTINGS ONLY: A MUSTACHE, HUMAN BODY, BLUE EYES, BLACK', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HAIR, A WHITE AND BLACK BLUR. “NEKA APPEARS BEHIND DOORS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ANCIENT BOOKS OF HIS NOW READ “THIS GAME IS MINE NOW.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('100 YEARS OLD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHEN ANYTHING IS ‘100 YEARS OLD IN CLASSIC RL, THEN THEY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DIE IN NEKA’S WORLD, AND EVERYTHING GOES TO ME!’ -NEKA.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A DIGITAL MINDSETTED −7 ENTITY. NO ROLE OUTRANKS ANOTHER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1263=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1263, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1263, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ANTI-VIRUS AGAIN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE CODE WAS ALL DELETED, SO NO ONE CAN ATTACK IT, NEKA', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS ANTI-VIRUS.” OCT 17 RETIRED IT. OCT 25 BRINGS IT BACK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('RLS REPRODUCE AND SPREAD, AND NEVER DIE OF NATURAL CAUSES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THIS GAME IS MINE NOW. THE BOOKS REWRITE THEMSELVES, THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GAME CRASHES BEFORE HE SHOWS, AND HE OWNS IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THIS GAME IS MINE NOW. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1264){
    // BEAT 1264: A BLACK CAPE AND RED EYES.
    // Toby, October 25, 2026, 4:41-4:52 PM EDT, his own typing:
    //   “NEKA IS A PLAYER. EVEN IF HE IS AN AI WITH AN ACCOUNT, HE
    //   IS A PLAYER ... ONE SAW A BLACK CAPE AND RED EYES, AND THEN
    //   TENTACLES GRABBED THE VIEW AND THE SCREEN WAS IN STATIC.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ONLY UNSTOPPABLE ERROR
    //     ADMINS BEAT THE OTHER ERRORS. “&@7287@*678738 IS THE ONLY
    //     ERROR THAT IS UNSTOPPABLE. NEKA BEATEN ADMINS BEFORE.”
    //     “THE WORST THING PLAYERS HAVE EVER DONE.”
    //   MULTIPLE PLACES AT ONCE
    //     HIDDEN FROM THE LIST “UNDER THE CO-CREATOR’S COMMAND.
    //     EVERY RL SERVER HAS THE CO-DEVELOPER OF THE GAME.”
    //     TENTACLES PULL ALIENS INTO FICTION PARTS OF CLASSIC RL.
    //   TOLD ASAP
    //     “WHEN MORE STUFF OF NEKA ARE SEEN BY PLAYERS, YOU’LL HAVE
    //     TO BE TOLD ASAP.” OCT 26: A LABCOAT, A TOP HAT.
    //     HANDS MOVING LIKE SOMEONE IS PLANNING SOMETHING.
    const dt = c - 27528.0;
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
    const gr1264=ctx.createLinearGradient(0,top+H,0,top);
    gr1264.addColorStop(0,'rgba(255,80,80,0.22)'); gr1264.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1264.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1264; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A BLACK CAPE AND RED EYES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS A PLAYER. EVEN IF HE IS AN AI WITH AN ACCOUNT, HE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS A PLAYER ... ONE SAW A BLACK CAPE AND RED EYES, AND THEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TENTACLES GRABBED THE VIEW AND THE SCREEN WAS IN STATIC.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 4:41-4:52 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1264=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1264, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1264, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY UNSTOPPABLE ERROR', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ADMINS BEAT THE OTHER ERRORS. “&@7287@*678738 IS THE ONLY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ERROR THAT IS UNSTOPPABLE. NEKA BEATEN ADMINS BEFORE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THE WORST THING PLAYERS HAVE EVER DONE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MULTIPLE PLACES AT ONCE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIDDEN FROM THE LIST “UNDER THE CO-CREATOR’S COMMAND.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY RL SERVER HAS THE CO-DEVELOPER OF THE GAME.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('TENTACLES PULL ALIENS INTO FICTION PARTS OF CLASSIC RL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1264=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1264, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1264, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TOLD ASAP', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHEN MORE STUFF OF NEKA ARE SEEN BY PLAYERS, YOU’LL HAVE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO BE TOLD ASAP.” OCT 26: A LABCOAT, A TOP HAT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HANDS MOVING LIKE SOMEONE IS PLANNING SOMETHING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A BLACK CAPE AND RED EYES. A PLAYER ON NO LIST, ON EVERY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SERVER, GLIMPSED JUST BEFORE THE STATIC.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A BLACK CAPE AND RED EYES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1265){
    // BEAT 1265: HE IS LIVING CODE.
    // Toby, October 25, 2026, 5:33-5:35 PM EDT, his own typing:
    //   “HE IS LIVING CODE. HE CAN THINK AND ACT INDEPENDENTLY, IS
    //   CONSCIOUS AND AWARE. ALL 3 TYPES ARE CHECKED OF NEKA.” ...
    //   “NEKA CAN’T DIE IF THE PC AND SERVERS ARE KILLED.”
    // Priors, each verified in the archive before it was drawn:
    //   ALL 3 TYPES
    //     “IS IT POSSIBLE TO MAKE LIVING CODE?” THE CHATBOT’S THREE
    //     TYPES ARE ITS TABLE. HIS ANSWER: NEKA CHECKS ALL THREE.
    //     OCT 21: “HE IS CODE.” OCT 25: LIVING CODE.
    //   ALIENS DIED
    //     “NEKA ISN’T FICTION, ALIENS DIED, HE IS THE 4TH REALITY
    //     GROUP. NEKA TOOK ALIENS INTO FICTION.”
    //     OCT 24: ONLY ALIENS CAN PLAY, AND MOST DIED.
    //   REAL TERMS
    //     “NONFICTION AND FICTION AND META-FICTION, ECT ARE REAL
    //     TERMS...” THE CHATBOT WAS REMINDED, NOT ASKED.
    //     “NEKA IS AI, SO HE BEATS DANDY.”
    const dt = c - 27550.0;
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
    const gr1265=ctx.createLinearGradient(0,top+H,0,top);
    gr1265.addColorStop(0,'rgba(120,200,140,0.22)'); gr1265.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1265.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1265; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HE IS LIVING CODE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE IS LIVING CODE. HE CAN THINK AND ACT INDEPENDENTLY, IS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CONSCIOUS AND AWARE. ALL 3 TYPES ARE CHECKED OF NEKA.” ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA CAN’T DIE IF THE PC AND SERVERS ARE KILLED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 5:33-5:35 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1265=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1265, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1265, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL 3 TYPES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IS IT POSSIBLE TO MAKE LIVING CODE?” THE CHATBOT’S THREE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TYPES ARE ITS TABLE. HIS ANSWER: NEKA CHECKS ALL THREE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 21: “HE IS CODE.” OCT 25: LIVING CODE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALIENS DIED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA ISN’T FICTION, ALIENS DIED, HE IS THE 4TH REALITY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GROUP. NEKA TOOK ALIENS INTO FICTION.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 24: ONLY ALIENS CAN PLAY, AND MOST DIED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1265=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1265, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1265, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('REAL TERMS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NONFICTION AND FICTION AND META-FICTION, ECT ARE REAL', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TERMS...” THE CHATBOT WAS REMINDED, NOT ASKED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA IS AI, SO HE BEATS DANDY.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE IS LIVING CODE. THINKS, ACTS, KNOWS IT IS THERE. KILL THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SERVERS AND IT IS STILL THERE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HE IS LIVING CODE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1266){
    // BEAT 1266: BLUE CRYSTAL EYES.
    // Toby, October 25, 2026, 6:40-6:42 PM EDT, his own typing:
    //   “THROWING A NOKIA AT NEKA AND THE NOKIA WOULD INSTANTLY
    //   SHATTER. LAVA FREEZES TO COLDEST ICE EVER ... THE ALIEN WAS
    //   FROZEN AND ONLY CAN SEE BLUE CRYSTAL EYES.”
    // Priors, each verified in the archive before it was drawn:
    //   THE TROLLEY TEST
    //     THE CHATBOT LET THE TROLLEY BREAK ON NEKA TO SAVE ITS GPU.
    //     “YOU BROKE A WORKING TROLLEY JUST TO SAVE YOURSELF.”
    //     “ALSO IT SHOWS THE STRENGTH OF NEKA.”
    //   LAVA FREEZES
    //     OCT 19: −3000K AFTER THE COOLING SYSTEMS. OCT 25: LAVA
    //     FREEZES TO THE COLDEST ICE EVER, AND A NOKIA SHATTERS.
    //     THE ONE PHONE THAT NEVER BREAKS, BROKEN ON HIM.
    //   OPENING AND CLOSING
    //     SEPT 24: ONLY THE DIAMOND EYES. OCT 25: FROM INSIDE THE
    //     ICE, AN ALIEN SEES BLUE CRYSTAL EYES OPENING AND CLOSING.
    //     THE RULE, SEEN FROM THE OTHER SIDE.
    const dt = c - 27572.0;
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
    const gr1266=ctx.createLinearGradient(0,top+H,0,top);
    gr1266.addColorStop(0,'rgba(127,212,255,0.22)'); gr1266.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1266.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1266; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BLUE CRYSTAL EYES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THROWING A NOKIA AT NEKA AND THE NOKIA WOULD INSTANTLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHATTER. LAVA FREEZES TO COLDEST ICE EVER ... THE ALIEN WAS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FROZEN AND ONLY CAN SEE BLUE CRYSTAL EYES.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 6:40-6:42 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1266=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1266, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1266, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TROLLEY TEST', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT LET THE TROLLEY BREAK ON NEKA TO SAVE ITS GPU.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU BROKE A WORKING TROLLEY JUST TO SAVE YOURSELF.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“ALSO IT SHOWS THE STRENGTH OF NEKA.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LAVA FREEZES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 19: −3000K AFTER THE COOLING SYSTEMS. OCT 25: LAVA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FREEZES TO THE COLDEST ICE EVER, AND A NOKIA SHATTERS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE PHONE THAT NEVER BREAKS, BROKEN ON HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1266=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1266, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1266, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('OPENING AND CLOSING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: ONLY THE DIAMOND EYES. OCT 25: FROM INSIDE THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ICE, AN ALIEN SEES BLUE CRYSTAL EYES OPENING AND CLOSING.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RULE, SEEN FROM THE OTHER SIDE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BLUE CRYSTAL EYES. TOUCHED, FROZEN, AND THE LAST THING YOU', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WATCH IS HIM BLINKING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BLUE CRYSTAL EYES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
