  } else if(ph===1139){
    // BEAT 1139: NEKA OUTGROWS THE COMPUTERS.
    // Toby, October 13, 2026, 8:12 PM EDT, his own typing:
    //   “NEKA IS GROWING AND GROWING COMPUTER WISE SO WE HAD TO
    //   ATTACH SO MANY CLASSICS CLONES TOGETHER. (REMEMBER SIMON.PS
    //   ATTACHED TO SO MANY COMPUTERS FROM WAY BEFORE IN THE LORE?)”
    // Priors, each verified in the archive before it was drawn:
    //   THE COMPUTERS OF CLASSICS FALL
    //     AUG 22, 8:10 PM: HE TOOK CODE’S PC AND SIMON.PSC, TYPED
    //     HIS OWN CODE, AND “THE COMPUTERS OF CLASSICS FALL.”
    //     ONE PC AND ONE FILE THEN. TONIGHT, WHOLE CLONES ATTACHED.
    //   NEKA HQ COMPUTERS
    //     OCT 12, 1:50 PM: “NEKA HQ, ALEX MAKES NEW FUTURISTIC
    //     COMPUTERS FROM THE ENERGY GASTER GETS NOW.”
    //     YESTERDAY HE BUILT THEM. TONIGHT HE OUTGROWS THEM.
    //   GROWING MONSTEROSITY CHAOS
    //     JUNE 6, 11:09 AM: “ALEX ISN’T EVEN A PHASED BOSS IN
    //     CLASSICS, HE IS GROWING MONSTEROSITY CHAOS.”
    //     HE HAS GROWN SINCE JUNE. NOW THE HARDWARE HAS TO.
    const dt = c - 24778.0;
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
    const gr1139=ctx.createLinearGradient(0,top+H,0,top);
    gr1139.addColorStop(0,'rgba(120,200,255,0.22)'); gr1139.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1139.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1139; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA OUTGROWS THE COMPUTERS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS GROWING AND GROWING COMPUTER WISE SO WE HAD TO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATTACH SO MANY CLASSICS CLONES TOGETHER. (REMEMBER SIMON.PS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATTACHED TO SO MANY COMPUTERS FROM WAY BEFORE IN THE LORE?)”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 8:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1139=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1139, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1139, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE COMPUTERS OF CLASSICS FALL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 22, 8:10 PM: HE TOOK CODE’S PC AND SIMON.PSC, TYPED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS OWN CODE, AND “THE COMPUTERS OF CLASSICS FALL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE PC AND ONE FILE THEN. TONIGHT, WHOLE CLONES ATTACHED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA HQ COMPUTERS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:50 PM: “NEKA HQ, ALEX MAKES NEW FUTURISTIC', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COMPUTERS FROM THE ENERGY GASTER GETS NOW.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('YESTERDAY HE BUILT THEM. TONIGHT HE OUTGROWS THEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1139=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1139, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1139, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GROWING MONSTEROSITY CHAOS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JUNE 6, 11:09 AM: “ALEX ISN’T EVEN A PHASED BOSS IN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS, HE IS GROWING MONSTEROSITY CHAOS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE HAS GROWN SINCE JUNE. NOW THE HARDWARE HAS TO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BOTH.” HIS BODY AND HIS CODE, TOO BIG FOR THE COMPUTERS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CLASSICS CLONES ATTACHED TOGETHER TO HOLD HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA OUTGROWS THE COMPUTERS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1140){
    // BEAT 1140: ONLY THE ORIGINAL IS SAFE.
    // Toby, October 13, 2026, 8:12 PM EDT, his own typing:
    //   “ALL THOSE BUILDINGS SCATTERED ALL AROUND THE CLASSICS
    //   CLONES, SO ONLY THE ORIGINAL IS SAFE, FROM ALL THE SOUND
    //   AND THE OTHER IMPACTS” … “SUMMONING THEM FROM AIR.”
    // Priors, each verified in the archive before it was drawn:
    //   STUCK IN THE ORIGINAL
    //     AUG 22, 8:10 PM: “PERO TRIES TO ESCAPE TO THE
    //     OTHER_CLASSICS, BUT HE IS STUCK IN THE ORIGINAL.”
    //     HIS CAGE ON AUG 22. TONIGHT, THE ONE SAFE ROOM.
    //   A DRAWER FROM THIN AIR
    //     SEPT 23, 4:51 PM: “A RANDOM DRAWER THAT POPPED UP FROM
    //     THIN AIR ONCE NEKA WALKED IN.” SEPT 18: A GAME, FROM AIR.
    //     A DRAWER, A GAME. NOW BUILDINGS OF COMPUTERS, FROM AIR.
    //   SERVERS UP BY DAY
    //     OCT 12, 9:54 AM: “PUTS ALL THE GAME SERVERS UP ON THE
    //     OCTOBER DAY. IT TAKES LONG TO TAKE OVER AN ENTERNAL GAME.”
    //     THE SERVERS WERE ONE LINE YESTERDAY. TONIGHT, BUILDINGS.
    const dt = c - 24800.0;
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
    const gr1140=ctx.createLinearGradient(0,top+H,0,top);
    gr1140.addColorStop(0,'rgba(200,160,255,0.22)'); gr1140.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1140.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1140; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONLY THE ORIGINAL IS SAFE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALL THOSE BUILDINGS SCATTERED ALL AROUND THE CLASSICS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLONES, SO ONLY THE ORIGINAL IS SAFE, FROM ALL THE SOUND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THE OTHER IMPACTS” … “SUMMONING THEM FROM AIR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 8:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1140=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1140, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1140, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STUCK IN THE ORIGINAL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 22, 8:10 PM: “PERO TRIES TO ESCAPE TO THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OTHER_CLASSICS, BUT HE IS STUCK IN THE ORIGINAL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS CAGE ON AUG 22. TONIGHT, THE ONE SAFE ROOM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A DRAWER FROM THIN AIR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23, 4:51 PM: “A RANDOM DRAWER THAT POPPED UP FROM', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIN AIR ONCE NEKA WALKED IN.” SEPT 18: A GAME, FROM AIR.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A DRAWER, A GAME. NOW BUILDINGS OF COMPUTERS, FROM AIR.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1140=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1140, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1140, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SERVERS UP BY DAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 9:54 AM: “PUTS ALL THE GAME SERVERS UP ON THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCTOBER DAY. IT TAKES LONG TO TAKE OVER AN ENTERNAL GAME.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SERVERS WERE ONE LINE YESTERDAY. TONIGHT, BUILDINGS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ONLY THE ORIGINAL IS SAFE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERY CLONE CARRIES A BUILDING. THE SOUND REACHES THEM ALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONLY THE ORIGINAL IS SAFE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1141){
    // BEAT 1141: MASTER PLAN: PHASE 2, CHAPTER 2.
    // Toby, October 13, 2026, 8:12 PM EDT, his own typing:
    //   “MOST ARE CONNECTED, BUT OTHERS, CLASSICS CONNECTS THEM.
    //   SO THE GAME IS ACTUALLY DOING AN AI’S BITTING. NEKA SAYS
    //   “NOW TO MASTER PLAN: PHASE 2, CHAPTER 2.””
    // Priors, each verified in the archive before it was drawn:
    //   AP ≠ AI
    //     OCT 11: “NEKA IS A PERSON, ARTIFICIAL PERSON. AP ≠ AI.”
    //     TONIGHT THE GAME IS “DOING AN AI’S BITTING.”
    //     HE IS NOT AN AI, HE SAID. THE GAME WORKS FOR ONE ANYWAY.
    //   THE BEST PLAN
    //     AUG 30, 3:27 PM: “PERO SAYS ‘HEY, THIS IS THE BEST PLAN.’”
    //     EVERYONE INTO A TUBE, THE ENERGY COMBINED, UNLIMITED.
    //     THE BEST PLAN HAD ONE STEP. THE MASTER PLAN HAS PHASES.
    //   CHAPTER 2: I DO MORE BECAUSE I CAN
    //     OCT 12, 7:07 PM: HE ENDED “CHAPTER 1: CLASSICS” AND MADE
    //     “CHAPTER 2: I DO MORE BECAUSE I CAN.” SEPT 24: PAGE 303.
    //     PHASE 2 OF CHAPTER 2. WHAT IT INVOLVES IS NOT SAID YET.
    const dt = c - 24822.0;
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
    const gr1141=ctx.createLinearGradient(0,top+H,0,top);
    gr1141.addColorStop(0,'rgba(255,80,80,0.22)'); gr1141.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1141.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1141; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MASTER PLAN: PHASE 2, CHAPTER 2', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MOST ARE CONNECTED, BUT OTHERS, CLASSICS CONNECTS THEM.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO THE GAME IS ACTUALLY DOING AN AI’S BITTING. NEKA SAYS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW TO MASTER PLAN: PHASE 2, CHAPTER 2.””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 8:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1141=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1141, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1141, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AP ≠ AI', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: “NEKA IS A PERSON, ARTIFICIAL PERSON. AP ≠ AI.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT THE GAME IS “DOING AN AI’S BITTING.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE IS NOT AN AI, HE SAID. THE GAME WORKS FOR ONE ANYWAY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BEST PLAN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 30, 3:27 PM: “PERO SAYS ‘HEY, THIS IS THE BEST PLAN.’”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE INTO A TUBE, THE ENERGY COMBINED, UNLIMITED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE BEST PLAN HAD ONE STEP. THE MASTER PLAN HAS PHASES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1141=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1141, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1141, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('CHAPTER 2: I DO MORE BECAUSE I CAN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 7:07 PM: HE ENDED “CHAPTER 1: CLASSICS” AND MADE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CHAPTER 2: I DO MORE BECAUSE I CAN.” SEPT 24: PAGE 303.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PHASE 2 OF CHAPTER 2. WHAT IT INVOLVES IS NOT SAID YET.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW TO MASTER PLAN: PHASE 2, CHAPTER 2.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE GAME CONNECTS THE REST OF THE COMPUTERS FOR HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MASTER PLAN: PHASE 2, CHAPTER 2 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1142){
    // BEAT 1142: THE REVIVAL BADGE AND THE DOCTOR BADGE.
    // Toby, October 13, 2026, 8:14 PM EDT, his own typing:
    //   “NEKA PLANS TO DOMINATE EVERYTHING. … NEKA RESPAWNS
    //   EVERYONE HE SLAIN, TO GET THE REVIVAL BADGE AND DOCTOR
    //   BADGE.”
    // Priors, each verified in the archive before it was drawn:
    //   I RESPAWN AND MAKE MYSELF STRONGER
    //     OCT 6, 4:07 PM: “EVERY TIME I DIE, I RESPAWN AND MAKE
    //     MYSELF STRONGER.” SEPT 24: THE GODS REVIVED THE SPRUNKIS.
    //     HE RESPAWNED HIMSELF. TONIGHT, THE ONES HE SLEW.
    //   LETS PARA-IZE IT!
    //     MAY 2, 8:17 AM: THE FIRST BADGE IN THE ARCHIVE, FOR
    //     CROSSING PARA WITH CLASSIC. JUNE 22: SIMON’S BADGE, 000.
    //     BADGES WERE FOR MODS AND FOR SIMON. NOW NEKA EARNS THEM.
    //   DR. SIMON, PLAGUE DOCTOR
    //     MAY 11: DR. SIMON, WHO CAN ONLY SEE. OCT 6, 7:26 PM: THE
    //     PLAGUE-DOCTOR COAT, “A SCIENTIST WHO ERASES VIRUSES.”
    //     DOCTOR HAS BEEN A FORM AND A COAT. TONIGHT IT IS A BADGE.
    const dt = c - 24844.0;
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
    const gr1142=ctx.createLinearGradient(0,top+H,0,top);
    gr1142.addColorStop(0,'rgba(120,255,160,0.22)'); gr1142.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1142.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1142; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,255,160,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE REVIVAL BADGE AND THE DOCTOR BADGE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA PLANS TO DOMINATE EVERYTHING. … NEKA RESPAWNS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE HE SLAIN, TO GET THE REVIVAL BADGE AND DOCTOR', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BADGE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 8:14 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1142=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,255,160,0.46)';
      ctx.fillRect(cx-W*0.352, ky1142, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,255,160,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1142, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,255,160,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I RESPAWN AND MAKE MYSELF STRONGER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, 4:07 PM: “EVERY TIME I DIE, I RESPAWN AND MAKE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MYSELF STRONGER.” SEPT 24: THE GODS REVIVED THE SPRUNKIS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE RESPAWNED HIMSELF. TONIGHT, THE ONES HE SLEW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LETS PARA-IZE IT!', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAY 2, 8:17 AM: THE FIRST BADGE IN THE ARCHIVE, FOR', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CROSSING PARA WITH CLASSIC. JUNE 22: SIMON’S BADGE, 000.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('BADGES WERE FOR MODS AND FOR SIMON. NOW NEKA EARNS THEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1142=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1142, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1142, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('DR. SIMON, PLAGUE DOCTOR', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAY 11: DR. SIMON, WHO CAN ONLY SEE. OCT 6, 7:26 PM: THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PLAGUE-DOCTOR COAT, “A SCIENTIST WHO ERASES VIRUSES.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('DOCTOR HAS BEEN A FORM AND A COAT. TONIGHT IT IS A BADGE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA RESPAWNS EVERYONE HE SLAIN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('RESTORATION IS A STEP IN THE PLAN, AND IT PAYS TWO BADGES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE REVIVAL BADGE AND THE DOCTOR BADGE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
