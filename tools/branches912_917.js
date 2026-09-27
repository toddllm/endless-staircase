  } else if(ph===912){
    // BEAT 912: WANT DATA?.
    // Toby, September 27, 2026, 5:24 PM EDT, his own typing:
    //   “WHAT CHARACTER EATS DATA? NEKA SAYS “WANT DATA?” LUIGI GREEN SAYS “I’LL TAKE PIE.”, NEKA SAYS “HERE IS PI”,
    //   “I READ YOUR SPEECH BUBBLE AND YOU SAID ‘PI’.” “WHAT YOU WANTED.” “I WANTED THE PIE.” “HERE IS A CHERRY PIE
    //   FOR YOU.” “IS CHERRY THE ONLY FLAVOR HERE?” “THIS IS A JAPANESE GAME, SO YES.” LUIGI GREEN LOOKS AT SAKURA.”
    // Priors, each verified in the archive before it was drawn:
    //   I READ YOUR SPEECH BUBBLE
    //     SEPT 24, 5:03 PM: NEKA IS THE ONLY CHARACTER IN CLASSICS WITH A SPEECH BUBBLE,
    //     AND HE TYPES THE INFINITE DIGITS OF PI ON IT. TODAY LUIGI GREEN READS IT.
    //     PIE OUT LOUD. PI IN THE BUBBLE.
    //   CHERRY IS THE ONLY FLAVOR
    //     AUG 31: “ALL OF CLASSICS COMES FROM THE CHERRY BLOSSOM SAKURA.”
    //     SEPT 24, 5:03 PM: NEKA COMBINED SAKURA AND CHAKRA INTO CHERRY CHOCOLATE.
    //     SO OF COURSE THE PIE IS CHERRY.
    //   LUIGI GREEN LOOKS AT SAKURA
    //     THIS MORNING SHE LOOKED AT THE BEDS. THIS AFTERNOON, THE TEDDY BEAR. BOTH MOVED.
    //     NOW SHE LOOKS AT THE SAKURA, WHERE ALL OF CLASSICS COMES FROM.
    //     NOBODY SAYS WHAT HAPPENS NEXT.
    const dt = c - 19784.0;
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
    const gr912=ctx.createLinearGradient(0,top+H,0,top);
    gr912.addColorStop(0,'rgba(127,212,255,0.22)'); gr912.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr912.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr912; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WANT DATA?', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WHAT CHARACTER EATS DATA? NEKA SAYS “WANT DATA?” LUIGI GREEN SAYS “I’LL TAKE PIE.”, NEKA SAYS “HERE IS PI”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I READ YOUR SPEECH BUBBLE AND YOU SAID ‘PI’.” “WHAT YOU WANTED.” “I WANTED THE PIE.” “HERE IS A CHERRY PIE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FOR YOU.” “IS CHERRY THE ONLY FLAVOR HERE?” “THIS IS A JAPANESE GAME, SO YES.” LUIGI GREEN LOOKS AT SAKURA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 5:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky912=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky912, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky912, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I READ YOUR SPEECH BUBBLE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 5:03 PM: NEKA IS THE ONLY CHARACTER IN CLASSICS WITH A SPEECH BUBBLE,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HE TYPES THE INFINITE DIGITS OF PI ON IT. TODAY LUIGI GREEN READS IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PIE OUT LOUD. PI IN THE BUBBLE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHERRY IS THE ONLY FLAVOR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 31: “ALL OF CLASSICS COMES FROM THE CHERRY BLOSSOM SAKURA.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 5:03 PM: NEKA COMBINED SAKURA AND CHAKRA INTO CHERRY CHOCOLATE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SO OF COURSE THE PIE IS CHERRY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy912=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy912, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy912, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN LOOKS AT SAKURA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING SHE LOOKED AT THE BEDS. THIS AFTERNOON, THE TEDDY BEAR. BOTH MOVED.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW SHE LOOKS AT THE SAKURA, WHERE ALL OF CLASSICS COMES FROM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOBODY SAYS WHAT HAPPENS NEXT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WANT DATA?', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHE ASKED FOR PIE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WANT DATA? ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===913){
    // BEAT 913: THANKS FOR THE ERROR.
    // Toby, September 27, 2026, 5:24 PM EDT, his own typing:
    //   “NEKA SAYS “HERE IS ERRORS FOR YOU.”, LUIGI GREEN SAYS “DID YOU KNOW NEWTALE GASTER IS AN ERROR?”,
    //   NEKA SAYS “THANKS FOR THE ERROR.”, NEKA CLEANS NEWTALE GASTER. “WHY DID YOU DO THAT?” “ARE YOU AN ERROR?”
    //   “NO, I AM CODE.” “ALRIGHT, SO I AM CODE, YOU ARE CODE, WHERE WAS NEWTALE GASTER FROM?” “NEWTALE AU.”
    // Priors, each verified in the archive before it was drawn:
    //   RUNNING FROM THE LOOSE TEXT
    //     SEPT 24, 5:03 PM: NEWTALE GASTER RAN FROM NEKA’S PI TEXT UNTIL THE TEXT GLITCHED.
    //     NEKA SAID “YOU CAN’T ESCAPE ME, I AM ALWAYS HERE FOR YOU.”
    //     THREE DAYS LATER, HE DID NOT ESCAPE.
    //   THANKS FOR THE ERROR
    //     LUIGI GREEN THINKS SHE IS TELLING HIM A FACT. NEKA HEARS A GIFT.
    //     HE SAYS THANKS, AND NEWTALE GASTER IS CLEANED OUT OF THE GAME.
    //     TO NEKA, AN ERROR IS SOMETHING TO CLEAN.
    //   NO, I AM CODE
    //     SEPT 26, 7:04 AM: NEKA HAD THE NEWTALE CHARACTERS, “FROM NEWTALE BETTY TO NEWTALE GASTER.”
    //     TODAY THERE IS ONE QUESTION: ERROR OR CODE. LUIGI GREEN SAYS CODE.
    //     THE RIGHT ANSWER KEEPS YOU IN THE GAME.
    const dt = c - 19806.0;
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
    const gr913=ctx.createLinearGradient(0,top+H,0,top);
    gr913.addColorStop(0,'rgba(255,90,90,0.22)'); gr913.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr913.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr913; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THANKS FOR THE ERROR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS “HERE IS ERRORS FOR YOU.”, LUIGI GREEN SAYS “DID YOU KNOW NEWTALE GASTER IS AN ERROR?”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS “THANKS FOR THE ERROR.”, NEKA CLEANS NEWTALE GASTER. “WHY DID YOU DO THAT?” “ARE YOU AN ERROR?”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NO, I AM CODE.” “ALRIGHT, SO I AM CODE, YOU ARE CODE, WHERE WAS NEWTALE GASTER FROM?” “NEWTALE AU.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 5:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky913=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky913, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky913, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RUNNING FROM THE LOOSE TEXT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 5:03 PM: NEWTALE GASTER RAN FROM NEKA’S PI TEXT UNTIL THE TEXT GLITCHED.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SAID “YOU CAN’T ESCAPE ME, I AM ALWAYS HERE FOR YOU.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THREE DAYS LATER, HE DID NOT ESCAPE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THANKS FOR THE ERROR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN THINKS SHE IS TELLING HIM A FACT. NEKA HEARS A GIFT.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE SAYS THANKS, AND NEWTALE GASTER IS CLEANED OUT OF THE GAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('TO NEKA, AN ERROR IS SOMETHING TO CLEAN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy913=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy913, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy913, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NO, I AM CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 7:04 AM: NEKA HAD THE NEWTALE CHARACTERS, “FROM NEWTALE BETTY TO NEWTALE GASTER.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY THERE IS ONE QUESTION: ERROR OR CODE. LUIGI GREEN SAYS CODE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RIGHT ANSWER KEEPS YOU IN THE GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THANKS FOR THE ERROR', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('I AM CODE, YOU ARE CODE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THANKS FOR THE ERROR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===914){
    // BEAT 914: YOU ONLY NEED ME!.
    // Toby, September 27, 2026, 5:24 PM EDT, his own typing:
    //   “NEKA LOCKED CLASSICS OMAZEN, MAKING NEWTALE ALIVE, NEWTALE OMAZEN IS HERE. LUIGI GREEN SEES NEWTALE OMAZEN,
    //   AND NEWTALE FALLS APART AND DISAPPEARS. NEKA SAYS “YOU BEATEN GASTER, YOU BEATEN EVERYONE,
    //   I AM YOUR FRIEND, YOUR ONLY FRIEND, YOU ONLY NEED ME!””
    // Priors, each verified in the archive before it was drawn:
    //   NEWTALE OMAZEN
    //     SEPT 26, 7:04 AM: NEKA WALKED ACROSS THE METAL FLOOR TO THE CLASSICS OMAZEN CORE.
    //     TODAY HE LOCKS IT, AND NEWTALE COMES ALIVE. ONE LOOK FROM LUIGI GREEN AND IT FALLS APART.
    //     HER GAZE AGAIN. THIS TIME IT BREAKS THINGS.
    //   YOUR ONLY FRIEND
    //     SEPT 2, 3:58 PM: PERO LAI, “YOU ONLY NEED ME, YOUR ONLY FRIEND.”
    //     THREE WEEKS LATER THE SAME WORDS COME FROM NEKA, SAID TO LUIGI GREEN.
    //     THE SAME WORDS, A NEW SPEAKER.
    //   YOU BEATEN EVERYONE
    //     AT 2:50 PM SHE SAID “I NEED YOU… ALL.” SHE WANTED EVERY CHARACTER.
    //     NEKA’S ANSWER: SHE HAS BEATEN THEM ALL. NOW SHE ONLY NEEDS HIM.
    //     ALL, OR ONLY ONE.
    const dt = c - 19828.0;
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
    const gr914=ctx.createLinearGradient(0,top+H,0,top);
    gr914.addColorStop(0,'rgba(190,120,255,0.22)'); gr914.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr914.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr914; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU ONLY NEED ME!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA LOCKED CLASSICS OMAZEN, MAKING NEWTALE ALIVE, NEWTALE OMAZEN IS HERE. LUIGI GREEN SEES NEWTALE OMAZEN,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND NEWTALE FALLS APART AND DISAPPEARS. NEKA SAYS “YOU BEATEN GASTER, YOU BEATEN EVERYONE,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I AM YOUR FRIEND, YOUR ONLY FRIEND, YOU ONLY NEED ME!””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 5:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky914=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky914, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky914, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEWTALE OMAZEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 7:04 AM: NEKA WALKED ACROSS THE METAL FLOOR TO THE CLASSICS OMAZEN CORE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY HE LOCKS IT, AND NEWTALE COMES ALIVE. ONE LOOK FROM LUIGI GREEN AND IT FALLS APART.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HER GAZE AGAIN. THIS TIME IT BREAKS THINGS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR ONLY FRIEND', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 2, 3:58 PM: PERO LAI, “YOU ONLY NEED ME, YOUR ONLY FRIEND.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THREE WEEKS LATER THE SAME WORDS COME FROM NEKA, SAID TO LUIGI GREEN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SAME WORDS, A NEW SPEAKER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy914=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy914, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy914, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('YOU BEATEN EVERYONE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 2:50 PM SHE SAID “I NEED YOU… ALL.” SHE WANTED EVERY CHARACTER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S ANSWER: SHE HAS BEATEN THEM ALL. NOW SHE ONLY NEEDS HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ALL, OR ONLY ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU ONLY NEED ME!', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SAID IN CAPITAL LETTERS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU ONLY NEED ME! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===915){
    // BEAT 915: NEKA SHOWS HIS POWER.
    // Toby, September 27, 2026, 5:24 PM EDT, his own typing:
    //   “NEKA BREAKS TIME AND SPACE, AND SEPERATES THE 2 FORCES OF THE GAME. HE CUTS THE GAME WITH THE CLAWS,
    //   THE TAIL SLICES THE TITAINUIM QUADRANUIM LIKE PAPER, NEKA SHOWS HIS POWER, NEKA BATTLES THE SPRUNKIS
    //   AND WON, AND HE EVEN BEATEN ALL THE AVATARS AND HE EVEN BLOCKED THE GAME.”
    // Priors, each verified in the archive before it was drawn:
    //   THE 2 FORCES OF THE GAME
    //     AT 2:50 PM: “2 BEINGS ARE EQUAL.” TWO AND A HALF HOURS LATER,
    //     THE GAME ITSELF HAS 2 FORCES, AND NEKA PULLS THEM APART.
    //     TWO, AGAIN.
    //   TITAINUIM LIKE PAPER
    //     SEPT 24, 4:37 PM: THE FIVE-HEADED BEAST’S CLAWS SCRATCHED THE TITAINUIM FLOOR.
    //     SCRATCHED. TODAY NEKA’S TAIL SLICES TITAINUIM QUADRANUIM LIKE PAPER.
    //     FROM A SCRATCH TO A CUT.
    //   THE SPRUNKIS AND THE AVATARS
    //     THIS MORNING THE 20 SPRUNKIS WOKE UP AS SHADOWS. NEKA BATTLES THEM AND WINS.
    //     SEPT 26, 2:28 PM HE MADE SHADOW CLONES OF THE AVATARS. NOW HE BEATS THE AVATARS THEMSELVES.
    //     THEN HE BLOCKS THE WHOLE GAME.
    const dt = c - 19850.0;
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
    const gr915=ctx.createLinearGradient(0,top+H,0,top);
    gr915.addColorStop(0,'rgba(255,120,60,0.22)'); gr915.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr915.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr915; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA SHOWS HIS POWER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA BREAKS TIME AND SPACE, AND SEPERATES THE 2 FORCES OF THE GAME. HE CUTS THE GAME WITH THE CLAWS,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TAIL SLICES THE TITAINUIM QUADRANUIM LIKE PAPER, NEKA SHOWS HIS POWER, NEKA BATTLES THE SPRUNKIS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND WON, AND HE EVEN BEATEN ALL THE AVATARS AND HE EVEN BLOCKED THE GAME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 5:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky915=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky915, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky915, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 2 FORCES OF THE GAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 2:50 PM: “2 BEINGS ARE EQUAL.” TWO AND A HALF HOURS LATER,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GAME ITSELF HAS 2 FORCES, AND NEKA PULLS THEM APART.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO, AGAIN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TITAINUIM LIKE PAPER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 4:37 PM: THE FIVE-HEADED BEAST’S CLAWS SCRATCHED THE TITAINUIM FLOOR.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SCRATCHED. TODAY NEKA’S TAIL SLICES TITAINUIM QUADRANUIM LIKE PAPER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('FROM A SCRATCH TO A CUT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy915=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy915, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy915, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE SPRUNKIS AND THE AVATARS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING THE 20 SPRUNKIS WOKE UP AS SHADOWS. NEKA BATTLES THEM AND WINS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 2:28 PM HE MADE SHADOW CLONES OF THE AVATARS. NOW HE BEATS THE AVATARS THEMSELVES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN HE BLOCKS THE WHOLE GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SHOWS HIS POWER', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CLAWS, TAIL, AND THEN THE GAME ITSELF.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA SHOWS HIS POWER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===916){
    // BEAT 916: CRARKRAR.
    // Toby, September 27, 2026, 5:24 PM EDT, his own typing:
    //   “CRARKRAR (SOUNDS LIKE CRACKER) WAS MADE, CRARKRAR IS THE NEW POWER TIER, NEKA MADE IT FOR HIMSELF,
    //   AND THE WAY TO GET IT IS TO BE NEKA, ONLY NEKA CAN GET IT. INFINITY SERIES DRAGON RIDE WAS MADE.
    //   NEKA AND PS-50 STAND AS THE MOST POWERFUL BEINGS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE WAY TO GET IT IS TO BE NEKA
    //     A NEW POWER TIER WITH ONE RULE. NOT A FORM TO REACH OR AN ORB TO COLLECT.
    //     HE MADE IT FOR HIMSELF, SO NOBODY ELSE CAN EVEN TRY.
    //     SOUNDS LIKE CRACKER.
    //   INFINITY SERIES DRAGON RIDE
    //     SEPT 19, 3:27 PM: PERO LAI’S “25 SERIES: DRAGON RIDE,” FROM 3 WAY HEROES.
    //     TODAY THE NUMBER IS GONE. INFINITY SERIES.
    //     NO NUMBER GOES HIGHER THAN THAT.
    //   THE MOST POWERFUL BEINGS
    //     AT 2:50 PM: NEKA IS MORE POWERFUL BY EXTREME, AND PS-50 CAN MAKE HIM SLEEP.
    //     AFTER ALL OF THIS, THE TWO OF THEM STILL STAND AT THE TOP TOGETHER.
    //     EVERYONE ELSE IS BELOW THEM.
    const dt = c - 19872.0;
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
    const gr916=ctx.createLinearGradient(0,top+H,0,top);
    gr916.addColorStop(0,'rgba(255,216,79,0.22)'); gr916.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr916.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr916; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CRARKRAR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CRARKRAR (SOUNDS LIKE CRACKER) WAS MADE, CRARKRAR IS THE NEW POWER TIER, NEKA MADE IT FOR HIMSELF,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THE WAY TO GET IT IS TO BE NEKA, ONLY NEKA CAN GET IT. INFINITY SERIES DRAGON RIDE WAS MADE.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA AND PS-50 STAND AS THE MOST POWERFUL BEINGS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 5:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky916=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky916, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky916, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE WAY TO GET IT IS TO BE NEKA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A NEW POWER TIER WITH ONE RULE. NOT A FORM TO REACH OR AN ORB TO COLLECT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE MADE IT FOR HIMSELF, SO NOBODY ELSE CAN EVEN TRY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SOUNDS LIKE CRACKER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INFINITY SERIES DRAGON RIDE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 19, 3:27 PM: PERO LAI’S “25 SERIES: DRAGON RIDE,” FROM 3 WAY HEROES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY THE NUMBER IS GONE. INFINITY SERIES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NO NUMBER GOES HIGHER THAN THAT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy916=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy916, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy916, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL BEINGS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 2:50 PM: NEKA IS MORE POWERFUL BY EXTREME, AND PS-50 CAN MAKE HIM SLEEP.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AFTER ALL OF THIS, THE TWO OF THEM STILL STAND AT THE TOP TOGETHER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE IS BELOW THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CRARKRAR', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONLY NEKA CAN GET IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CRARKRAR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===917){
    // BEAT 917: THE ONLY ONE WHO CONSUMES DATA.
    // Toby, September 27, 2026, 5:26 PM EDT, his own typing:
    //   “ANSWER: NEKA OMAZEN’S FAVORITE IS DATA, IT CONSUMES DATA, AND IS THE ONLY ONE WHO CONSUMES DATA,
    //   HE CONSUMES THE FORMS BEFORE, HE CONSUMES THE PI AND ALL THIS STUFF.”
    // Priors, each verified in the archive before it was drawn:
    //   HE ANSWERED HIS OWN QUESTION
    //     5:24 PM: “WHAT CHARACTER EATS DATA?” 5:26 PM: THE ANSWER.
    //     NEKA OMAZEN. THE ONLY ONE. AND DATA IS HIS FAVORITE.
    //     TWO MINUTES.
    //   HE CONSUMES THE PI
    //     SEPT 24 HE TYPED THE INFINITE DIGITS OF PI. TODAY HE OFFERS PI TO LUIGI GREEN.
    //     PI IS DATA, AND DATA IS WHAT HE EATS. SHE TOOK THE CHERRY PIE INSTEAD.
    //     HE WAS OFFERING HIS FAVORITE FOOD.
    //   THE ONLY ONE
    //     SEPT 26, 7:04 AM: MR. BLACK IS “THE ABSORBTION AND CONSUMPTION OF COLOR.”
    //     COLOR HAS ITS EATER. DATA HAS ONLY ONE, AND IT IS NEKA.
    //     AND EVERYONE IN THE GAME IS CODE.
    const dt = c - 19894.0;
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
    const gr917=ctx.createLinearGradient(0,top+H,0,top);
    gr917.addColorStop(0,'rgba(127,212,255,0.22)'); gr917.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr917.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr917; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY ONE WHO CONSUMES DATA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ANSWER: NEKA OMAZEN’S FAVORITE IS DATA, IT CONSUMES DATA, AND IS THE ONLY ONE WHO CONSUMES DATA,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CONSUMES THE FORMS BEFORE, HE CONSUMES THE PI AND ALL THIS STUFF.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 5:26 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky917=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky917, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky917, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ANSWERED HIS OWN QUESTION', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:24 PM: “WHAT CHARACTER EATS DATA?” 5:26 PM: THE ANSWER.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN. THE ONLY ONE. AND DATA IS HIS FAVORITE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO MINUTES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CONSUMES THE PI', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24 HE TYPED THE INFINITE DIGITS OF PI. TODAY HE OFFERS PI TO LUIGI GREEN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PI IS DATA, AND DATA IS WHAT HE EATS. SHE TOOK THE CHERRY PIE INSTEAD.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE WAS OFFERING HIS FAVORITE FOOD.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy917=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy917, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy917, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ONLY ONE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 7:04 AM: MR. BLACK IS “THE ABSORBTION AND CONSUMPTION OF COLOR.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COLOR HAS ITS EATER. DATA HAS ONLY ONE, AND IT IS NEKA.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND EVERYONE IN THE GAME IS CODE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DATA IS HIS FAVORITE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE CONSUMES THE FORMS, THE PI, AND ALL THIS STUFF.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE ONLY ONE WHO CONSUMES DATA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
