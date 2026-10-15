  } else if(ph===1173){
    // BEAT 1173: NOT A MINUTE OUTSIDE THE CABIN.
    // Toby, October 15, 2026, 7:08 PM EDT, his own typing:
    //   “THE PLAYER ISN’T ABLE TO SURVIVE 19 DAYS WITHOUT FOOD,
    //   AND CAN’T SURVIVE 1 DAY WITHOUT WATER ... SLEEP AT 7 PM OR
    //   SOONER ... WOULDN’T SURVIVE A MINUTE OUTSIDE THE CABIN.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CABIN
    //     APRIL 18 (EMAIL 142): SIMON KEPT A LOG CABIN IN HIS LAB.
    //     TONIGHT THE CABIN IS THE ONLY PLACE THE PLAYER CAN LIVE.
    //     OUTSIDE: “MAKE A CAMPFIRE”, NOT SORTING 1 MILLION LOGS.
    //   SLEEP AT 7 PM OR SOONER
    //     7:02 PM: “NO GAMES AFTER 7 PM!” NOW IT IS A SURVIVAL BAR,
    //     WITH FOOD AND WATER. “9 AM IS ALL AROUND THE CLOCK PLUS.”
    //     THE ONE WHO PLAYED THROUGH 9 AM WENT A FULL CLOCK PAST IT.
    //   NEKA WOULD DESTROY THEM
    //     5:48 PM: THE PLAYER IS CODE, “A TALL MALE ENTITY, HUMAN”.
    //     A HUMAN OUTSIDE LASTS LESS THAN A MINUTE. INSIDE, 19 DAYS.
    //     A SURVIVAL GAME WHERE THE WEATHER IS NEKA.
    const dt = c - 25526.0;
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
    const gr1173=ctx.createLinearGradient(0,top+H,0,top);
    gr1173.addColorStop(0,'rgba(120,200,140,0.22)'); gr1173.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1173.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1173; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOT A MINUTE OUTSIDE THE CABIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE PLAYER ISN’T ABLE TO SURVIVE 19 DAYS WITHOUT FOOD,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND CAN’T SURVIVE 1 DAY WITHOUT WATER ... SLEEP AT 7 PM OR', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SOONER ... WOULDN’T SURVIVE A MINUTE OUTSIDE THE CABIN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 7:08 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1173=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1173, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1173, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CABIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('APRIL 18 (EMAIL 142): SIMON KEPT A LOG CABIN IN HIS LAB.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT THE CABIN IS THE ONLY PLACE THE PLAYER CAN LIVE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OUTSIDE: “MAKE A CAMPFIRE”, NOT SORTING 1 MILLION LOGS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SLEEP AT 7 PM OR SOONER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:02 PM: “NO GAMES AFTER 7 PM!” NOW IT IS A SURVIVAL BAR,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WITH FOOD AND WATER. “9 AM IS ALL AROUND THE CLOCK PLUS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO PLAYED THROUGH 9 AM WENT A FULL CLOCK PAST IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1173=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1173, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1173, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA WOULD DESTROY THEM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:48 PM: THE PLAYER IS CODE, “A TALL MALE ENTITY, HUMAN”.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A HUMAN OUTSIDE LASTS LESS THAN A MINUTE. INSIDE, 19 DAYS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A SURVIVAL GAME WHERE THE WEATHER IS NEKA.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT A MINUTE OUTSIDE THE CABIN.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('19 DAYS, 1 DAY, 7 PM, AND A DOOR YOU DO NOT OPEN FOR LONG.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOT A MINUTE OUTSIDE THE CABIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1174){
    // BEAT 1174: SANITY, PSYCHOPATHICAL, MERCY.
    // Toby, October 15, 2026, 7:12 PM EDT, his own typing:
    //   “HEALTH, STRENGTH, OXEGEN, WARMTH ... EVERYTHING A HUMAN
    //   NEEDS TO SURVIVE + SANITY (CALMNESS; UNSURE ... INSANE) AND
    //   PSYCHOPATHICAL (EVERY TIME THE PLAYER SLAYS) ... MERCY.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SANITY BAR, SINCE OCT 12
    //     OCT 12: “SIMON.PS ADDED A NEW SANITY BAR.” THEN: “SANITY
    //     SAYS “INSANE”, THEN THE AREA 303 FIRST FLOOR FALLS DOWN.”
    //     NOW THE BAR HAS ITS NINE STEPS, CALMNESS DOWN TO INSANE.
    //   PSYCHOPATHICAL
    //     IT RISES EVERY TIME THE PLAYER SLAYS AN ENTITY. AT 5:48 PM
    //     THE PLAYER STRUCK DOWN ALL 20 SPRUNKIS. THAT FILLS IT.
    //     A NEW WORD FOR THIS ARCHIVE, AND A BAR THAT ONLY GOES UP.
    //   MERCY
    //     AUG 26: “ACCEPT MY MERCY.” EMAIL 409: SIMON GIVES MERCY
    //     “IN CERTAIN CERCUMSTANCES, BUT NOT ALL THE TIME.”
    //     NOW MERCY IS COUNTED TOO. HE ADDED A SMIRK TO THAT ONE.
    const dt = c - 25548.0;
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
    const gr1174=ctx.createLinearGradient(0,top+H,0,top);
    gr1174.addColorStop(0,'rgba(255,110,110,0.22)'); gr1174.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1174.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1174; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,110,110,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SANITY, PSYCHOPATHICAL, MERCY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HEALTH, STRENGTH, OXEGEN, WARMTH ... EVERYTHING A HUMAN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEEDS TO SURVIVE + SANITY (CALMNESS; UNSURE ... INSANE) AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PSYCHOPATHICAL (EVERY TIME THE PLAYER SLAYS) ... MERCY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 7:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1174=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,110,110,0.46)';
      ctx.fillRect(cx-W*0.352, ky1174, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,110,110,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1174, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,110,110,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SANITY BAR, SINCE OCT 12', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12: “SIMON.PS ADDED A NEW SANITY BAR.” THEN: “SANITY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAYS “INSANE”, THEN THE AREA 303 FIRST FLOOR FALLS DOWN.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE BAR HAS ITS NINE STEPS, CALMNESS DOWN TO INSANE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PSYCHOPATHICAL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT RISES EVERY TIME THE PLAYER SLAYS AN ENTITY. AT 5:48 PM', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PLAYER STRUCK DOWN ALL 20 SPRUNKIS. THAT FILLS IT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A NEW WORD FOR THIS ARCHIVE, AND A BAR THAT ONLY GOES UP.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1174=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1174, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1174, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MERCY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 26: “ACCEPT MY MERCY.” EMAIL 409: SIMON GIVES MERCY', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IN CERTAIN CERCUMSTANCES, BUT NOT ALL THE TIME.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW MERCY IS COUNTED TOO. HE ADDED A SMIRK TO THAT ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SANITY, PSYCHOPATHICAL, MERCY.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IT TRACKS WHAT YOU FEAR, WHAT YOU SLAY, AND WHAT YOU SPARE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SANITY, PSYCHOPATHICAL, MERCY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1175){
    // BEAT 1175: EVERYTHING OF A HUMAN.
    // Toby, October 15, 2026, 7:12-7:15 PM EDT, his own typing:
    //   “THERE ARE MORE I DIDN’T LIST.” ... “UESS THE REST USING THE
    //   THINGS YOU KNOW ABOUT A HUMAN.” ... “IT DOES HAVE ALL THAT +
    //   EVERYTHING OF A HUMAN.” ... “+ THE HORROR BARS ARE INCLUDED”
    // Priors, each verified in the archive before it was drawn:
    //   ONLY SOME OF THE BARS
    //     “THERE ARE MORE I DIDN’T LIST.” THE CHATBOT GUESSED
    //     STAMINA, BLOOD, HYGIENE, PAIN, THEN HEART RATE AND STRESS.
    //     HE DID NOT NAME THEM. HE GAVE THE RULE THAT HOLDS THEM.
    //   IT DOES HAVE ALL THAT
    //     7:14 PM: “THERE IS STILL MORE, IT DOES HAVE ALL THAT +
    //     EVERYTHING OF A HUMAN.” THEN: “CORRECT, THAT IS INCLUDED.”
    //     THE GUESSES WERE THE CHATBOT’S. THE “ALL THAT” IS HIS.
    //   THE PLAYER IS HUMAN
    //     5:48 PM: THE PLAYER IS CODE, “A TALL MALE ENTITY, HUMAN”.
    //     A GAME THAT SIMULATES A WHOLE HUMAN SIMULATES ITS PLAYER.
    //     EVERYTHING OF A HUMAN + THE HORROR BARS. NOTHING LEFT OUT.
    const dt = c - 25570.0;
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
    const gr1175=ctx.createLinearGradient(0,top+H,0,top);
    gr1175.addColorStop(0,'rgba(200,200,210,0.22)'); gr1175.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1175.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1175; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING OF A HUMAN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THERE ARE MORE I DIDN’T LIST.” ... “UESS THE REST USING THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THINGS YOU KNOW ABOUT A HUMAN.” ... “IT DOES HAVE ALL THAT +', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING OF A HUMAN.” ... “+ THE HORROR BARS ARE INCLUDED”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 7:12-7:15 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1175=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1175, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1175, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY SOME OF THE BARS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THERE ARE MORE I DIDN’T LIST.” THE CHATBOT GUESSED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STAMINA, BLOOD, HYGIENE, PAIN, THEN HEART RATE AND STRESS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE DID NOT NAME THEM. HE GAVE THE RULE THAT HOLDS THEM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT DOES HAVE ALL THAT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:14 PM: “THERE IS STILL MORE, IT DOES HAVE ALL THAT +', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING OF A HUMAN.” THEN: “CORRECT, THAT IS INCLUDED.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE GUESSES WERE THE CHATBOT’S. THE “ALL THAT” IS HIS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1175=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1175, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1175, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE PLAYER IS HUMAN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:48 PM: THE PLAYER IS CODE, “A TALL MALE ENTITY, HUMAN”.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A GAME THAT SIMULATES A WHOLE HUMAN SIMULATES ITS PLAYER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERYTHING OF A HUMAN + THE HORROR BARS. NOTHING LEFT OUT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING OF A HUMAN.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SOME NAMED, THE REST BY RULE: ALL OF A HUMAN, PLUS FEAR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYTHING OF A HUMAN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
