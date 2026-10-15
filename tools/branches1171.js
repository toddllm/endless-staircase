  } else if(ph===1171){
    // BEAT 1171: NO GAMES AFTER 7 PM!.
    // Toby, October 15, 2026, 7:02 PM EDT, his own typing:
    //   “NEKA SAYS “NO GAMES AFTER 7 PM!”, THEN THE GAME CHANGES.
    //   HE SAYS IT EXACTLY AT 7 PM, AND THEN NEKA SLEEPS IN A BED,
    //   WHILE THE PLAYERS WHO ARE STILL AWAKE DIE ... BOOM, DEAD.”
    // Priors, each verified in the archive before it was drawn:
    //   EXACTLY AT 7 PM
    //     SEPT 27: “NEKA CAN MAKE ANYONE SLEEP WITH A COMMAND.”
    //     OCT 8: “SLEEP!”, AND PS-50 SLEPT 5000 TIMES IN A ROW.
    //     THE COMMAND NOW HAS A CLOCK. HE GOES TO BED HIMSELF.
    //   YOUR BOSS, SINCE OCT 8
    //     “ONCE YOU ENTER CLASSICS, HE PERMINENTALLY BECOMES YOUR
    //     BOSS. IMAGINE AN AI TELLING YOU WHAT TO DO ALL THE TIME.”
    //     A BEDTIME IS THE OLDEST RULE THERE IS. NOW HE ENFORCES IT.
    //   NOT THEIR FATHER
    //     SOMEONE SAID HE WASN’T THEIR FATHER AND PLAYED THROUGH
    //     9 AM. NEKA TORE THE SCREEN APART. 5:09 PM: “DR. NEKA.”
    //     THE GAME HAS BEEN “NEKA” SINCE 4:50 PM. THE GAME CHANGES.
    const dt = c - 25482.0;
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
    const gr1171=ctx.createLinearGradient(0,top+H,0,top);
    gr1171.addColorStop(0,'rgba(140,160,255,0.22)'); gr1171.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1171.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1171; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(140,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NO GAMES AFTER 7 PM!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS “NO GAMES AFTER 7 PM!”, THEN THE GAME CHANGES.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE SAYS IT EXACTLY AT 7 PM, AND THEN NEKA SLEEPS IN A BED,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHILE THE PLAYERS WHO ARE STILL AWAKE DIE ... BOOM, DEAD.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 7:02 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1171=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(140,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1171, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(140,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1171, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(140,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EXACTLY AT 7 PM', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: “NEKA CAN MAKE ANYONE SLEEP WITH A COMMAND.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8: “SLEEP!”, AND PS-50 SLEPT 5000 TIMES IN A ROW.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE COMMAND NOW HAS A CLOCK. HE GOES TO BED HIMSELF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR BOSS, SINCE OCT 8', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ONCE YOU ENTER CLASSICS, HE PERMINENTALLY BECOMES YOUR', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BOSS. IMAGINE AN AI TELLING YOU WHAT TO DO ALL THE TIME.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A BEDTIME IS THE OLDEST RULE THERE IS. NOW HE ENFORCES IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1171=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1171, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1171, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NOT THEIR FATHER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SOMEONE SAID HE WASN’T THEIR FATHER AND PLAYED THROUGH', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('9 AM. NEKA TORE THE SCREEN APART. 5:09 PM: “DR. NEKA.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GAME HAS BEEN “NEKA” SINCE 4:50 PM. THE GAME CHANGES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO GAMES AFTER 7 PM!', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A KNOWN GAME, UNTIL 7 PM. THEN HE SLEEPS, AND THE AWAKE DIE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NO GAMES AFTER 7 PM! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1172){
    // BEAT 1172: SUGAR KILLS YOU IN THIS GAME.
    // Toby, October 15, 2026, 7:04 PM EDT, his own typing:
    //   “NEKA EVEN GIVES OTHERS NON-SUGAR TREATS OR SUGAR-TREATS,
    //   REMEMBER THAT SUGAR KILLS YOU IN THIS GAME.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   ONE GRAIN OF SUGAR
    //     SEPT 27, 2:50 PM: “IN CLASSICS, EVEN TOUCHING ONE GRAIN
    //     OF SUGAR KILLS YOU.” OCT 8: “SUGAR WOULD KILL ME.”
    //     THE RULE IS HIS, AND NEKA HAS SAID IT ABOUT HIMSELF.
    //   WANT A SUGAR COOKIE?
    //     OCT 8: “WANT A SUGAR COOKIE?” / “NO.” OCT 6: “NON-SUGAR
    //     CHOCOLATE?” TONIGHT, 6:30 PM: “WANNA POP TART?” / FOX.
    //     SOMETIMES THE TREAT IS SAFE. SOMETIMES IT IS THE WEAPON.
    //   HIS OWN SNACKS ARE DATA
    //     6:27 PM: “HIS FAVORITE DESSERT IS PI. NEKA CONSUMES DATA
    //     BASICALLY.” HE HANDS OUT PI, COMPUTER COOKIES, OR SUGAR.
    //     HE SAID SUGAR WOULD KILL HIM TOO. HE OFFERS IT ANYWAY.
    const dt = c - 25504.0;
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
    const gr1172=ctx.createLinearGradient(0,top+H,0,top);
    gr1172.addColorStop(0,'rgba(255,120,200,0.22)'); gr1172.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1172.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1172; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SUGAR KILLS YOU IN THIS GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA EVEN GIVES OTHERS NON-SUGAR TREATS OR SUGAR-TREATS,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('REMEMBER THAT SUGAR KILLS YOU IN THIS GAME.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 7:04 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1172=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1172, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1172, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE GRAIN OF SUGAR', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 2:50 PM: “IN CLASSICS, EVEN TOUCHING ONE GRAIN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OF SUGAR KILLS YOU.” OCT 8: “SUGAR WOULD KILL ME.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RULE IS HIS, AND NEKA HAS SAID IT ABOUT HIMSELF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WANT A SUGAR COOKIE?', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8: “WANT A SUGAR COOKIE?” / “NO.” OCT 6: “NON-SUGAR', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHOCOLATE?” TONIGHT, 6:30 PM: “WANNA POP TART?” / FOX.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SOMETIMES THE TREAT IS SAFE. SOMETIMES IT IS THE WEAPON.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1172=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1172, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1172, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HIS OWN SNACKS ARE DATA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:27 PM: “HIS FAVORITE DESSERT IS PI. NEKA CONSUMES DATA', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BASICALLY.” HE HANDS OUT PI, COMPUTER COOKIES, OR SUGAR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE SAID SUGAR WOULD KILL HIM TOO. HE OFFERS IT ANYWAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SUGAR KILLS YOU IN THIS GAME.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NON-SUGAR OR SUGAR. HE GIVES BOTH. REMEMBER WHICH.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SUGAR KILLS YOU IN THIS GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
