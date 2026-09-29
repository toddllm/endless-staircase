  } else if(ph===947){
    // BEAT 947: CLASSICS IS MADE OF DATA.
    // Toby, September 29, 2026, 7:08 PM EDT, his own typing:
    //   “HOW DO YOU THINK CLASSICS WILL END. HINT- CLASSICS IS MADE OF DATA”
    //   “CORRECT. NEKA APPEARS IN FRONT OF THE SCREEN AND HE CONSUMES THE GAME.
    //   THAT IS THE NEXT CUTSCENE TO THE NEKA TREATMENT.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ONLY ONE WHO CONSUMES DATA
    //     SEPT 27: NEKA IS THE ONLY ONE WHO CONSUMES DATA.
    //     5:25 PM TODAY THE SCREEN SAID “DATA COLLECTED.”
    //     AND THE WHOLE GAME IS DATA.
    //   IN FRONT OF THE SCREEN
    //     5:25 PM: “NOW EVERY GAME WILL COME HERE.”
    //     THEN HE STEPS OUT IN FRONT OF THE SCREEN AND EATS THE GAME ITSELF.
    //     NOT A CHARACTER THIS TIME. ALL OF IT.
    //   AFTER THE NEKA TREATMENT
    //     SEPT 26: AFTER NEKA OMAZEN’S CUTSCENE, THERE IS THE NEKA TREATMENT.
    //     THIS IS THE CUTSCENE THAT COMES NEXT.
    //     THE ENDING IS A CUTSCENE.
    const dt = c - 20554.0;
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
    const gr947=ctx.createLinearGradient(0,top+H,0,top);
    gr947.addColorStop(0,'rgba(140,230,255,0.22)'); gr947.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr947.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr947; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(140,230,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS IS MADE OF DATA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HOW DO YOU THINK CLASSICS WILL END. HINT- CLASSICS IS MADE OF DATA”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CORRECT. NEKA APPEARS IN FRONT OF THE SCREEN AND HE CONSUMES THE GAME.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THAT IS THE NEXT CUTSCENE TO THE NEKA TREATMENT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 7:08 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky947=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(140,230,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky947, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(140,230,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky947, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(140,230,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY ONE WHO CONSUMES DATA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: NEKA IS THE ONLY ONE WHO CONSUMES DATA.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:25 PM TODAY THE SCREEN SAID “DATA COLLECTED.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND THE WHOLE GAME IS DATA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN FRONT OF THE SCREEN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:25 PM: “NOW EVERY GAME WILL COME HERE.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN HE STEPS OUT IN FRONT OF THE SCREEN AND EATS THE GAME ITSELF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOT A CHARACTER THIS TIME. ALL OF IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy947=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy947, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy947, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AFTER THE NEKA TREATMENT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26: AFTER NEKA OMAZEN’S CUTSCENE, THERE IS THE NEKA TREATMENT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS IS THE CUTSCENE THAT COMES NEXT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ENDING IS A CUTSCENE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS IS MADE OF DATA,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND NEKA EATS DATA.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CLASSICS IS MADE OF DATA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===948){
    // BEAT 948: NEKA TREATMENT NEKA.
    // Toby, September 29, 2026, 7:08 PM EDT, his own typing:
    //   “OREN.PS REBECOMES HIS GODLY FORM BUT NOW EVEN STRONGER AND COOLER AND MORE POWERFUL,
    //   EVERYONE ELSE GAINED POWER TOO. NEKA DISAPPEARS AND APPEARS IN THE GAME,
    //   NEKA TREATMENT NEKA, HE LOOKS THE COOLEST AND STUFF.”
    // Priors, each verified in the archive before it was drawn:
    //   OREN GETS IT BACK
    //     4:56 PM: OREN.PS BECAME THE NEW CLASSICS GOD. 5:25 PM: WINTER OREN SPRUNKI, NO .PS.
    //     7:08 PM: HE REBECOMES HIS GODLY FORM, STRONGER THAN BEFORE.
    //     “REBECOMES” IS HIS WORD, AND IT IS KEPT.
    //   EVERYONE GAINED POWER TOO
    //     SEPT 26: IN THE NEKA TREATMENT, EVERYONE ABSORBS SOME CODE.
    //     THIS TIME EVERYONE ELSE GAINED POWER TOO.
    //     THE WHOLE CAST CHANGES AT ONCE.
    //   THE COOLEST
    //     HE DISAPPEARS FROM IN FRONT OF THE SCREEN
    //     AND APPEARS BACK INSIDE THE GAME HE JUST ATE.
    //     NEKA TREATMENT NEKA.
    const dt = c - 20576.0;
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
    const gr948=ctx.createLinearGradient(0,top+H,0,top);
    gr948.addColorStop(0,'rgba(190,255,170,0.22)'); gr948.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr948.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr948; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,255,170,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA TREATMENT NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS REBECOMES HIS GODLY FORM BUT NOW EVEN STRONGER AND COOLER AND MORE POWERFUL,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE GAINED POWER TOO. NEKA DISAPPEARS AND APPEARS IN THE GAME,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA TREATMENT NEKA, HE LOOKS THE COOLEST AND STUFF.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 7:08 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky948=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,255,170,0.46)';
      ctx.fillRect(cx-W*0.352, ky948, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,255,170,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky948, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,255,170,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN GETS IT BACK', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:56 PM: OREN.PS BECAME THE NEW CLASSICS GOD. 5:25 PM: WINTER OREN SPRUNKI, NO .PS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:08 PM: HE REBECOMES HIS GODLY FORM, STRONGER THAN BEFORE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“REBECOMES” IS HIS WORD, AND IT IS KEPT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE GAINED POWER TOO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26: IN THE NEKA TREATMENT, EVERYONE ABSORBS SOME CODE.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS TIME EVERYONE ELSE GAINED POWER TOO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE WHOLE CAST CHANGES AT ONCE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy948=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy948, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy948, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE COOLEST', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE DISAPPEARS FROM IN FRONT OF THE SCREEN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND APPEARS BACK INSIDE THE GAME HE JUST ATE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA TREATMENT NEKA.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT LOOKED LIKE THE END.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IT WAS ONE MORE CUTSCENE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA TREATMENT NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
