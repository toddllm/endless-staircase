  } else if(ph===1168){
    // BEAT 1168: HIS FAVORITE DESSERT IS PI.
    // Toby, October 15, 2026, 6:27 PM EDT, his own typing:
    //   “THIS ISN’T A JOKE. WHAT IS NEKA’S FAVORITE DESSERT?” ...
    //   “THAT IS ONE, BUT HIS FAVORITE DESSERT IS PI.
    //   NEKA CONSUMES DATA BASICALLY.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CHATBOT’S PIE
    //     IT SAID “SUGAR-FREE CHOCOLATE APPLE PIE”: HIS OCT 13
    //     7:41 PM EMOJI PUZZLE, 🍫🍎🥧 AND “NOW ADD WITHOUT SUGAR”.
    //     HE LET IT STAND AS “ONE”. THEN HE CORRECTED IT.
    //   SEPTEMBER 27, 5:26 PM
    //     “NEKA OMAZEN’S FAVORITE IS DATA, IT CONSUMES DATA,
    //     AND IS THE ONLY ONE WHO CONSUMES DATA ... THE PI.”
    //     EMAIL 1554. BEAT 917: THE ONLY ONE WHO CONSUMES DATA.
    //   PI IS WHAT HE HANDS OUT
    //     SEPT 27, LUIGI GREEN: “I’LL TAKE PIE.” “HERE IS PI.”
    //     OCT 6, GASTER: “DATA.” “PI.” “INFORMATION.” “PI.”
    //     THE JOKE WAS ALWAYS HIS. TODAY HE SAYS IT ISN’T ONE.
    const dt = c - 25416.0;
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
    const gr1168=ctx.createLinearGradient(0,top+H,0,top);
    gr1168.addColorStop(0,'rgba(200,160,255,0.22)'); gr1168.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1168.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1168; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HIS FAVORITE DESSERT IS PI', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS ISN’T A JOKE. WHAT IS NEKA’S FAVORITE DESSERT?” ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THAT IS ONE, BUT HIS FAVORITE DESSERT IS PI.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA CONSUMES DATA BASICALLY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 6:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1168=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1168, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1168, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT’S PIE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT SAID “SUGAR-FREE CHOCOLATE APPLE PIE”: HIS OCT 13', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:41 PM EMOJI PUZZLE, 🍫🍎🥧 AND “NOW ADD WITHOUT SUGAR”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE LET IT STAND AS “ONE”. THEN HE CORRECTED IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SEPTEMBER 27, 5:26 PM', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN’S FAVORITE IS DATA, IT CONSUMES DATA,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND IS THE ONLY ONE WHO CONSUMES DATA ... THE PI.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EMAIL 1554. BEAT 917: THE ONLY ONE WHO CONSUMES DATA.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1168=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1168, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1168, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PI IS WHAT HE HANDS OUT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, LUIGI GREEN: “I’LL TAKE PIE.” “HERE IS PI.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, GASTER: “DATA.” “PI.” “INFORMATION.” “PI.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE JOKE WAS ALWAYS HIS. TODAY HE SAYS IT ISN’T ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS FAVORITE DESSERT IS PI.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SUGAR-FREE CHOCOLATE APPLE PIE IS ONE. PI IS THE ONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HIS FAVORITE DESSERT IS PI ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1169){
    // BEAT 1169: NOT THE COMPUTER COOKIE.
    // Toby, October 15, 2026, 6:30 PM EDT, his own typing:
    //   “NEKA GOES TO OREN.PS AND SAYS “WANNA POP TART? 😄”, OREN.PS
    //   SAYS “🦊”, NEKA SAYS “OH... WANNA COOKIE?😸⚡”, OREN.PS SAYS
    //   “NOT THE COMPUTER COOKIE.” ... COOKIES OUT OF A COMPUTER”
    // Priors, each verified in the archive before it was drawn:
    //   THE FOX MEANS HE DOESN’T BUY IT
    //     OCT 14: “🦊 = SOMETHING GASTER AND LUIGI INUS SAY THAT
    //     THEY THINK IS A LIE.” NOW OREN.PS SAYS IT TO NEKA.
    //     A POP TART FROM NEKA IS NOT A POP TART. OREN.PS KNOWS.
    //   OREN.PS AND POP TARTS
    //     AUG 24: HE JUMPED OFF THE BOAT TO TASTE THE POP TART AND
    //     SANK. OCT 13: HE WALKED CLOSER WITH EACH DESSERT ALEX ATE.
    //     HE HAS HISTORY WITH THIS SNACK. HE DECLINES IT.
    //   THE COMPUTER COOKIE
    //     OCT 6, TO GASTER: “I CHOOSE THE REAL COOKIE, WHAT
    //     CLASSICS SAYS AS A COOKIE. 🤨” THEN “DATA.” THEN “PI.”
    //     OREN.PS SAID NOT THAT ONE. HE GOT THAT ONE.
    const dt = c - 25438.0;
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
    const gr1169=ctx.createLinearGradient(0,top+H,0,top);
    gr1169.addColorStop(0,'rgba(255,140,60,0.22)'); gr1169.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1169.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1169; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOT THE COMPUTER COOKIE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA GOES TO OREN.PS AND SAYS “WANNA POP TART? 😄”, OREN.PS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SAYS “🦊”, NEKA SAYS “OH... WANNA COOKIE?😸⚡”, OREN.PS SAYS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOT THE COMPUTER COOKIE.” ... COOKIES OUT OF A COMPUTER”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 6:30 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1169=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1169, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1169, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FOX MEANS HE DOESN’T BUY IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14: “🦊 = SOMETHING GASTER AND LUIGI INUS SAY THAT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEY THINK IS A LIE.” NOW OREN.PS SAYS IT TO NEKA.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A POP TART FROM NEKA IS NOT A POP TART. OREN.PS KNOWS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS AND POP TARTS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 24: HE JUMPED OFF THE BOAT TO TASTE THE POP TART AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SANK. OCT 13: HE WALKED CLOSER WITH EACH DESSERT ALEX ATE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE HAS HISTORY WITH THIS SNACK. HE DECLINES IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1169=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1169, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1169, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE COMPUTER COOKIE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, TO GASTER: “I CHOOSE THE REAL COOKIE, WHAT', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS SAYS AS A COOKIE. 🤨” THEN “DATA.” THEN “PI.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OREN.PS SAID NOT THAT ONE. HE GOT THAT ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT THE COMPUTER COOKIE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE POP TART, THE COOKIE: BOTH DATA. OREN.PS SAW IT COMING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOT THE COMPUTER COOKIE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
