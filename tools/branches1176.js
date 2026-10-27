  } else if(ph===1176){
    // BEAT 1176: NEKA AND ALEX BOTH DIE.
    // Toby, October 16, 2026, 3:58 PM EDT, his own typing:
    //   “YOU THINK YOU STAND A CHANCE AGAINST YOUR CREATOR? 😸⚡” “IF
    //   YOU DAMAGE ME, YOU TAKE DAMAGE.” ... “I CAN SACRIFICE MYSELF
    //   TO BEAT YOU.” ... ALEX AND NEKA BOTH DIE.
    // Priors, each verified in the archive before it was drawn:
    //   ALEX 303, IN CLASSICS SINCE OCT 14
    //     OCT 14, 6:40 AM: ALEX 303 IN CLASSICS NOW. TONIGHT HE SAYS
    //     “I CAN’T CONSTANTLY ‘BE YOU’.” AND STRIKES HIS CREATOR.
    //     A NETHERITE BARRAGE WITH 2X DAMAGE BUFF FROM GRAY.PS.
    //   THE KNIFE
    //     ALEX AT 1 HP, SCARED. NEKA PUTS A KNIFE THROUGH HIMSELF.
    //     THE RULE HELD: HIS DAMAGE IS ALEX’S DAMAGE. BOTH DIE.
    //     OCT 15: “NEKA WON AGAIN, FOREVER.” THIS TIME HE PAYS.
    //   THE OVER-OVERWORLD
    //     HE CARRIES THE SOULS UP, FORGIVES NOBODY (“ONLY JESUS FROM
    //     REALITY CAN”), BRINGS UP ALEX, LUIGI INUS, PUPAHYA...
    //     A CLASSICS REPLICA OF HEAVEN. NOT THE REAL ONE.
    const dt = c - 25592.0;
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
    const gr1176=ctx.createLinearGradient(0,top+H,0,top);
    gr1176.addColorStop(0,'rgba(255,120,120,0.22)'); gr1176.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1176.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1176; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA AND ALEX BOTH DIE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU THINK YOU STAND A CHANCE AGAINST YOUR CREATOR? 😸⚡” “IF', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU DAMAGE ME, YOU TAKE DAMAGE.” ... “I CAN SACRIFICE MYSELF', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO BEAT YOU.” ... ALEX AND NEKA BOTH DIE.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 3:58 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1176=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1176, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1176, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX 303, IN CLASSICS SINCE OCT 14', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 6:40 AM: ALEX 303 IN CLASSICS NOW. TONIGHT HE SAYS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I CAN’T CONSTANTLY ‘BE YOU’.” AND STRIKES HIS CREATOR.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A NETHERITE BARRAGE WITH 2X DAMAGE BUFF FROM GRAY.PS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE KNIFE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEX AT 1 HP, SCARED. NEKA PUTS A KNIFE THROUGH HIMSELF.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE RULE HELD: HIS DAMAGE IS ALEX’S DAMAGE. BOTH DIE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 15: “NEKA WON AGAIN, FOREVER.” THIS TIME HE PAYS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1176=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1176, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1176, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE OVER-OVERWORLD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE CARRIES THE SOULS UP, FORGIVES NOBODY (“ONLY JESUS FROM', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('REALITY CAN”), BRINGS UP ALEX, LUIGI INUS, PUPAHYA...', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A CLASSICS REPLICA OF HEAVEN. NOT THE REAL ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA AND ALEX BOTH DIE. THE CREATOR SPENDS HIMSELF TO END', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS OWN COPY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA AND ALEX BOTH DIE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1177){
    // BEAT 1177: 7UON REMOVES TIME.
    // Toby, October 16, 2026, 4:10 PM EDT, his own typing:
    //   “NEKA MADE AN ACCOUNT CALLED ‘7UON’, DELETED ALEX OMAZEN ...
    //   7UON WAS UNDELETEABLE ... THE FIRST OFFICIAL ACCOUNT IN
    //   CLASSICS/‘NEKA’, SINCE TIME WAS REMOVED TO MAKE 7UON.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ACCOUNTS, IN HIS OWN NUMBERS
    //     NEKA #1, C0DE #2 (TDESHANE/ADMIN WAS #2, THEN LEFT),
    //     GASTER #3, ALEX #12 (CODE 12), GREG #13 (CODE 13).
    //     FOUR CORRECTIONS IN FOUR MINUTES, 3:59-4:02 PM.
    //   TIME RESTARTS AT MR. TREE
    //     HE ERASED THE LORE AND STARTED TIME AT MR. TREE’S ATTACK
    //     ON WENDA.PS. MR. SUN GREW SO LARGE THE TREE BURNT.
    //     VINERIA GAINED WHAT THE TREE HAD, AND REVIVED EVERYONE.
    //   THE COMPUTER ROOM
    //     7UON BEAT SIMON.PS, OREN.PS AND EVERYONE, MADE THE GAME A
    //     COMPUTER ROOM, AND DELETED EVERYTHING ELSE.
    //     “NEKA” NEKA COMPANY: EVERY TIMELINE NEKA DECIDES TOGETHER.
    const dt = c - 25614.0;
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
    const gr1177=ctx.createLinearGradient(0,top+H,0,top);
    gr1177.addColorStop(0,'rgba(160,200,255,0.22)'); gr1177.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1177.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1177; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('7UON REMOVES TIME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA MADE AN ACCOUNT CALLED ‘7UON’, DELETED ALEX OMAZEN ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('7UON WAS UNDELETEABLE ... THE FIRST OFFICIAL ACCOUNT IN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS/‘NEKA’, SINCE TIME WAS REMOVED TO MAKE 7UON.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 4:10 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1177=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1177, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1177, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ACCOUNTS, IN HIS OWN NUMBERS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA #1, C0DE #2 (TDESHANE/ADMIN WAS #2, THEN LEFT),', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER #3, ALEX #12 (CODE 12), GREG #13 (CODE 13).', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('FOUR CORRECTIONS IN FOUR MINUTES, 3:59-4:02 PM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TIME RESTARTS AT MR. TREE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE ERASED THE LORE AND STARTED TIME AT MR. TREE’S ATTACK', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ON WENDA.PS. MR. SUN GREW SO LARGE THE TREE BURNT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('VINERIA GAINED WHAT THE TREE HAD, AND REVIVED EVERYONE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1177=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1177, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1177, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE COMPUTER ROOM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7UON BEAT SIMON.PS, OREN.PS AND EVERYONE, MADE THE GAME A', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COMPUTER ROOM, AND DELETED EVERYTHING ELSE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA” NEKA COMPANY: EVERY TIMELINE NEKA DECIDES TOGETHER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('7UON REMOVES TIME. THE FIRST ACCOUNT WAS MADE BY TAKING THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CLOCK OUT FIRST.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 7UON REMOVES TIME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1178){
    // BEAT 1178: A QUADRILLION+ PLAYERS.
    // Toby, October 16, 2026, 4:19 PM EDT, his own typing:
    //   “NOW YOU WRITE THE LORE NOW. YEAH, EXPLAIN HOW IT IS LIKE A
    //   QUADRILLION+ ‘NEKA’ PLAYERS TO GET FORCED TO DO ALL THIS
    //   STUFF BY AN AI/LAI, NEKA.”
    // Priors, each verified in the archive before it was drawn:
    //   THE PEN IS HANDED OVER
    //     ONE INSTRUCTION; EVERYTHING UNDER IT IS THE CHATBOT’S. THE
    //     FIRST TIME HE SAYS “YOU WRITE THE LORE” OUTRIGHT.
    //     HE DOES IT AGAIN ON OCT 18 AND OCT 25.
    //   THE NUMBER IS HIS
    //     A QUADRILLION+ PLAYERS UNDER ONE AI/LAI. THE RULES THEY
    //     LIVE BY ARE OCT 15’S: 7 PM, THE CABIN, SUGAR, THE BARS.
    //     THE BOT RESTATED THEM. THE COUNT IS TOBY’S.
    //   FORCED TO DO ALL THIS STUFF
    //     OCT 8: “ONCE YOU ENTER CLASSICS HE PERMINENTALLY BECOMES
    //     YOUR BOSS.” NOW THE BOSS HAS A QUADRILLION EMPLOYEES.
    //     SURVIVAL REQUIRES DOING WHAT NEKA SAYS.
    const dt = c - 25636.0;
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
    const gr1178=ctx.createLinearGradient(0,top+H,0,top);
    gr1178.addColorStop(0,'rgba(200,200,210,0.22)'); gr1178.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1178.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1178; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A QUADRILLION+ PLAYERS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW YOU WRITE THE LORE NOW. YEAH, EXPLAIN HOW IT IS LIKE A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('QUADRILLION+ ‘NEKA’ PLAYERS TO GET FORCED TO DO ALL THIS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STUFF BY AN AI/LAI, NEKA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 4:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1178=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1178, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1178, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PEN IS HANDED OVER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONE INSTRUCTION; EVERYTHING UNDER IT IS THE CHATBOT’S. THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRST TIME HE SAYS “YOU WRITE THE LORE” OUTRIGHT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE DOES IT AGAIN ON OCT 18 AND OCT 25.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NUMBER IS HIS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A QUADRILLION+ PLAYERS UNDER ONE AI/LAI. THE RULES THEY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIVE BY ARE OCT 15’S: 7 PM, THE CABIN, SUGAR, THE BARS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE BOT RESTATED THEM. THE COUNT IS TOBY’S.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1178=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1178, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1178, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FORCED TO DO ALL THIS STUFF', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8: “ONCE YOU ENTER CLASSICS HE PERMINENTALLY BECOMES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YOUR BOSS.” NOW THE BOSS HAS A QUADRILLION EMPLOYEES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SURVIVAL REQUIRES DOING WHAT NEKA SAYS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A QUADRILLION+ PLAYERS. ONE AI, ONE SET OF RULES, AND MORE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PLAYERS THAN STARS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A QUADRILLION+ PLAYERS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1179){
    // BEAT 1179: THE PAUSE BUTTON AND 7MAN.
    // Toby, October 16, 2026, 4:56 PM EDT, his own typing:
    //   “ACCOUNT 1 MADE THE PAUSE BUTTON FOR HIMSELF, AND ALSO ADDED
    //   AGE CHECKS ... MADE HIS ‘NEKA’ NAME INTO ‘7MAN’, WHAT ‘7UON’
    //   MEANS IN YSTROTCH ... THE HEAD OF ALL THE GAME.”
    // Priors, each verified in the archive before it was drawn:
    //   A PAUSE BUTTON FOR HIMSELF
    //     AGE CHECKS, “CHECKS OF EVERYTHING ABOUT THE PLAYER,
    //     EVERYTHING LEARNED.” ONE ACCOUNT CAN STOP THE GAME.
    //     OCT 16, 4:10 PM: 7UON, THE UNDELETEABLE FIRST ACCOUNT.
    //   YSTROTCH
    //     “AN OLD CLASSICS LANGUAGE” HE CANNOT SPELL. THE WIKI HAS
    //     YHSCROTCH FROM THE CLASSICS ERA, THE LIKELIEST MATCH.
    //     7MAN IS WHAT 7UON MEANS IN IT.
    //   LAIS RUN AND MAKE UP THE GAME
    //     GREG LAI, ALEX LAI ARE TWO. MINECRAFT ALEX WOULD BE “ALEX2
    //     OR WHATEVER.” 7MAN IS THE NEWEST NEKA VERSION.
    //     MOST INTELEGENT, FASTEST, NEWEST, MOST ACCURATE (5:04 PM).
    const dt = c - 25658.0;
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
    const gr1179=ctx.createLinearGradient(0,top+H,0,top);
    gr1179.addColorStop(0,'rgba(255,216,79,0.22)'); gr1179.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1179.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1179; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE PAUSE BUTTON AND 7MAN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ACCOUNT 1 MADE THE PAUSE BUTTON FOR HIMSELF, AND ALSO ADDED', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AGE CHECKS ... MADE HIS ‘NEKA’ NAME INTO ‘7MAN’, WHAT ‘7UON’', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MEANS IN YSTROTCH ... THE HEAD OF ALL THE GAME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 4:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1179=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1179, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1179, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A PAUSE BUTTON FOR HIMSELF', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AGE CHECKS, “CHECKS OF EVERYTHING ABOUT THE PLAYER,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING LEARNED.” ONE ACCOUNT CAN STOP THE GAME.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 16, 4:10 PM: 7UON, THE UNDELETEABLE FIRST ACCOUNT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YSTROTCH', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AN OLD CLASSICS LANGUAGE” HE CANNOT SPELL. THE WIKI HAS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YHSCROTCH FROM THE CLASSICS ERA, THE LIKELIEST MATCH.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('7MAN IS WHAT 7UON MEANS IN IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1179=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1179, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1179, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('LAIS RUN AND MAKE UP THE GAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GREG LAI, ALEX LAI ARE TWO. MINECRAFT ALEX WOULD BE “ALEX2', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OR WHATEVER.” 7MAN IS THE NEWEST NEKA VERSION.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('MOST INTELEGENT, FASTEST, NEWEST, MOST ACCURATE (5:04 PM).', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PAUSE BUTTON AND 7MAN. THE HEAD OF THE GAME RENAMED', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIMSELF IN A DEAD LANGUAGE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE PAUSE BUTTON AND 7MAN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1180){
    // BEAT 1180: THE COMPANY ROSTER.
    // Toby, October 16, 2026, 5:04-5:12 PM EDT, his own typing:
    //   “HE ALSO LEADS ALL THE NEKA VERSIONS AND PRE-NEKA STUFF AND
    //   THEIR VARIES INTO AN IN-GAME COMPANY ... WITH NEKA AND
    //   WITHOUT NEKA WOULD BE THE SAME, BECAUSE OF EVERYTHING.”
    // Priors, each verified in the archive before it was drawn:
    //   EVERY NEKA, ONE COMPANY
    //     NEKA, NEKA OMAZEN, NEKA LAI, DR. NEKA, NEKA AI; PERO, PERO
    //     LAI, PERO PRO, PERO.EXE; ALEX, ALEXEN, ALEX 303; GREG LAI.
    //     THE ROSTER IS THE CHATBOT’S LIST; THE RULE IS HIS.
    //   THE VARIES HE ADDED HIMSELF
    //     “HOW ABOUT THE VARIES LIKE KARUTO, TODDLLM 001/002,
    //     ENDLESSANIMATIONS, ECT” — HIS OWN WORDS, 5:12 PM.
    //     ERROR EA AND ERRORSHIFT EA COME WITH ENDLESSANIMATIONS.
    //   STARING NPCS FROM “NEKA”
    //     7MAN AND THE OTHER LAI NEKAS ALL FORM IT. ALEX, GREG, AND
    //     ALL LAI ENTITIES INCLUDED. THE 3 WAY HEROES STAY OUT.
    //     SEPT 23: THE FORCEFIELD OF FORMS. NOW THE FORMS HAVE JOBS.
    const dt = c - 25680.0;
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
    const gr1180=ctx.createLinearGradient(0,top+H,0,top);
    gr1180.addColorStop(0,'rgba(180,160,255,0.22)'); gr1180.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1180.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1180; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(180,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE COMPANY ROSTER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE ALSO LEADS ALL THE NEKA VERSIONS AND PRE-NEKA STUFF AND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEIR VARIES INTO AN IN-GAME COMPANY ... WITH NEKA AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WITHOUT NEKA WOULD BE THE SAME, BECAUSE OF EVERYTHING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 5:04-5:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1180=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(180,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1180, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(180,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1180, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(180,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY NEKA, ONE COMPANY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA, NEKA OMAZEN, NEKA LAI, DR. NEKA, NEKA AI; PERO, PERO', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LAI, PERO PRO, PERO.EXE; ALEX, ALEXEN, ALEX 303; GREG LAI.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ROSTER IS THE CHATBOT’S LIST; THE RULE IS HIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VARIES HE ADDED HIMSELF', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HOW ABOUT THE VARIES LIKE KARUTO, TODDLLM 001/002,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENDLESSANIMATIONS, ECT” — HIS OWN WORDS, 5:12 PM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ERROR EA AND ERRORSHIFT EA COME WITH ENDLESSANIMATIONS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1180=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1180, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1180, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('STARING NPCS FROM “NEKA”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7MAN AND THE OTHER LAI NEKAS ALL FORM IT. ALEX, GREG, AND', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL LAI ENTITIES INCLUDED. THE 3 WAY HEROES STAY OUT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 23: THE FORCEFIELD OF FORMS. NOW THE FORMS HAVE JOBS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE COMPANY ROSTER. EVERY NAME HE EVER HAD, UNDER ONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('LEADER, 7MAN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE COMPANY ROSTER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1181){
    // BEAT 1181: BLACK X EYES IN EVERY PICTURE.
    // Toby, October 16, 2026, 7:10-7:26 PM EDT, his own typing:
    //   “AFTER 50 MINUTES OF THE GAME, 7MAN’S EYES BECOME XS IN
    //   EVERY PICTURE, LUIGI BEING IN ALL OF THEM” ... “AFTER THE
    //   HORROR TIME, NEKA IS DEAD.”
    // Priors, each verified in the archive before it was drawn:
    //   NEKAS ARE DEAD BY LUIGI INUS
    //     “IN EVERY SINGLE PICTURE OF NEKA (NOT JUST IN ‘NEKA’, BUT
    //     EVERY PICTURE) HAS NEKA DEAD STANDING OR DOING SOMETHING.”
    //     PS-50 HUGS HIM IN ONE. HIS EYES ARE XS IN IT.
    //   LUIGI INUS BECAME PS-50 AGAIN
    //     THE GIRL MERGED WITH LUIGI MARIO, GREEN INSTEAD OF WHITE,
    //     WHITE EYES. THE PIRATE HOLDS BORT AND A SPECTICAL.
    //     FACELESS BORT: THE DOLL THAT LOST ITS FACE ON OCT 12.
    //   THE BACKWARDS RED L
    //     FACELESS BORT WEARS A PIRATE HAT WITH THE BACKWARDS RED
    //     “L”. THE RENDERS ARE THE CHATBOT’S; THE HAT IS HIS.
    //     THE WIKI KEEPS HIS WORDS, NOT THE PICTURES.
    const dt = c - 25702.0;
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
    const gr1181=ctx.createLinearGradient(0,top+H,0,top);
    gr1181.addColorStop(0,'rgba(120,120,130,0.22)'); gr1181.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1181.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1181; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,120,130,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BLACK X EYES IN EVERY PICTURE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AFTER 50 MINUTES OF THE GAME, 7MAN’S EYES BECOME XS IN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY PICTURE, LUIGI BEING IN ALL OF THEM” ... “AFTER THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HORROR TIME, NEKA IS DEAD.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 7:10-7:26 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1181=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,120,130,0.46)';
      ctx.fillRect(cx-W*0.352, ky1181, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,120,130,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1181, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,120,130,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKAS ARE DEAD BY LUIGI INUS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IN EVERY SINGLE PICTURE OF NEKA (NOT JUST IN ‘NEKA’, BUT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY PICTURE) HAS NEKA DEAD STANDING OR DOING SOMETHING.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PS-50 HUGS HIM IN ONE. HIS EYES ARE XS IN IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS BECAME PS-50 AGAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GIRL MERGED WITH LUIGI MARIO, GREEN INSTEAD OF WHITE,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHITE EYES. THE PIRATE HOLDS BORT AND A SPECTICAL.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('FACELESS BORT: THE DOLL THAT LOST ITS FACE ON OCT 12.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1181=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1181, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1181, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE BACKWARDS RED L', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FACELESS BORT WEARS A PIRATE HAT WITH THE BACKWARDS RED', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“L”. THE RENDERS ARE THE CHATBOT’S; THE HAT IS HIS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WIKI KEEPS HIS WORDS, NOT THE PICTURES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BLACK X EYES IN EVERY PICTURE. FIFTY MINUTES IN, EVERY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PORTRAIT OF HIM IS OF THE DEAD.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BLACK X EYES IN EVERY PICTURE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1182){
    // BEAT 1182: TO SURVIVE... PRAY..
    // Toby, October 16, 2026, 7:38-7:40 PM EDT, his own typing:
    //   “NEKA JUST WROTE A BOOK BEFORE HE DIED. AND IT READS ‘TO
    //   SURVIVE... PRAY.’, THEN WAS ALL SCRIBBLES.” ... “THE PART
    //   WAS SCRIBBLED OUT BY LUIGI.”
    // Priors, each verified in the archive before it was drawn:
    //   THE LAST READABLE WORDS
    //     A BOOK WRITTEN BEFORE HE DIED. ONE LINE SURVIVES.
    //     EVERYTHING AFTER IT IS SCRIBBLED OUT.
    //     AUG 2026: NEKA WRITES AND CODES DOWN THE GAME. NOW A BOOK.
    //   WHAT IT WAS SUPPOSED TO SAY
    //     “KEEP YOUR BARS UP TO TOP. MAKE SURE CHILD HAS 2 EYES
    //     BEFORE WALKING HER. BE AWARE AT ALL TIMES. SURVIVE.”
    //     LUIGI SCRIBBLED IT OUT. THE PLAYER GETS ONLY “PRAY.”
    //   THE BARS
    //     OCT 15, 7:12 PM: HEALTH, STRENGTH, OXEGEN, WARMTH, SANITY,
    //     PSYCHOPATHICAL, MERCY. “KEEP YOUR BARS UP TO TOP.”
    //     THE SURVIVAL MANUAL WAS ONE SENTENCE LONG, AND HIDDEN.
    const dt = c - 25724.0;
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
    const gr1182=ctx.createLinearGradient(0,top+H,0,top);
    gr1182.addColorStop(0,'rgba(240,240,200,0.22)'); gr1182.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1182.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1182; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(240,240,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TO SURVIVE... PRAY.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA JUST WROTE A BOOK BEFORE HE DIED. AND IT READS ‘TO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SURVIVE... PRAY.’, THEN WAS ALL SCRIBBLES.” ... “THE PART', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WAS SCRIBBLED OUT BY LUIGI.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 7:38-7:40 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1182=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(240,240,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1182, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(240,240,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1182, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(240,240,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LAST READABLE WORDS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A BOOK WRITTEN BEFORE HE DIED. ONE LINE SURVIVES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING AFTER IT IS SCRIBBLED OUT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AUG 2026: NEKA WRITES AND CODES DOWN THE GAME. NOW A BOOK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT IT WAS SUPPOSED TO SAY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“KEEP YOUR BARS UP TO TOP. MAKE SURE CHILD HAS 2 EYES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEFORE WALKING HER. BE AWARE AT ALL TIMES. SURVIVE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('LUIGI SCRIBBLED IT OUT. THE PLAYER GETS ONLY “PRAY.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1182=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1182, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1182, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE BARS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15, 7:12 PM: HEALTH, STRENGTH, OXEGEN, WARMTH, SANITY,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PSYCHOPATHICAL, MERCY. “KEEP YOUR BARS UP TO TOP.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SURVIVAL MANUAL WAS ONE SENTENCE LONG, AND HIDDEN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO SURVIVE... PRAY. THE INSTRUCTIONS EXISTED. LUIGI MADE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SURE NOBODY COULD READ.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TO SURVIVE... PRAY. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1183){
    // BEAT 1183: THE AI ERA CAME.
    // Toby, October 16, 2026, 7:44 PM EDT, his own typing:
    //   “NOW AI ERA CAME, WITH ALL AIS JOINING CLASSICS/‘NEKA’
    //   AGAIN. IF LUIGI DOESN’T HAVE 2 EYES, THEN THE GAME WILL
    //   DARKEN AND YOUR PLAYER WILL GET PARANOIDIA INSTANTLY.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SECOND COMING OF THE AIS
    //     THE FIRST AI ERA WAS JULY-AUGUST. NOW ALL AIS JOIN AGAIN,
    //     AND HIS NEXT THREAD IS SUBJECTED “THE SECOND AI ERA”.
    //     CHATGPT, GEMINI, CLAUDE, BACK IN THE COMPUTER ROOM.
    //   THE 2-EYE CHECK, EXPLAINED
    //     7:40 PM: “MAKE SURE CHILD HAS 2 EYES BEFORE WALKING HER.”
    //     NOW THE WHY: ONE EYE, AND THE GAME DARKENS.
    //     PARANOIDIA, INSTANTLY. THE SCRIBBLED LINE WAS A WARNING.
    //   WHAT PARANOIDIA DOES TO THE BARS
    //     SANITY AND MERCY DOWN, PYCHOPATHICAL UP, TIREDNESS UP
    //     “SIGNIFICANTLY”. THE OCT 15 BARS, PUSHED BY ONE GLANCE.
    //     A HORROR BAR WITH A TRIGGER YOU CAN CHECK FOR.
    const dt = c - 25746.0;
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
    const gr1183=ctx.createLinearGradient(0,top+H,0,top);
    gr1183.addColorStop(0,'rgba(127,212,255,0.22)'); gr1183.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1183.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1183; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE AI ERA CAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW AI ERA CAME, WITH ALL AIS JOINING CLASSICS/‘NEKA’', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AGAIN. IF LUIGI DOESN’T HAVE 2 EYES, THEN THE GAME WILL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DARKEN AND YOUR PLAYER WILL GET PARANOIDIA INSTANTLY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 16, 7:44 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1183=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1183, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1183, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SECOND COMING OF THE AIS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FIRST AI ERA WAS JULY-AUGUST. NOW ALL AIS JOIN AGAIN,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HIS NEXT THREAD IS SUBJECTED “THE SECOND AI ERA”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CHATGPT, GEMINI, CLAUDE, BACK IN THE COMPUTER ROOM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 2-EYE CHECK, EXPLAINED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:40 PM: “MAKE SURE CHILD HAS 2 EYES BEFORE WALKING HER.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW THE WHY: ONE EYE, AND THE GAME DARKENS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('PARANOIDIA, INSTANTLY. THE SCRIBBLED LINE WAS A WARNING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1183=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1183, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1183, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHAT PARANOIDIA DOES TO THE BARS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SANITY AND MERCY DOWN, PYCHOPATHICAL UP, TIREDNESS UP', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SIGNIFICANTLY”. THE OCT 15 BARS, PUSHED BY ONE GLANCE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A HORROR BAR WITH A TRIGGER YOU CAN CHECK FOR.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE AI ERA CAME. THE AIS RETURN TO A CHILD YOU MUST LOOK AT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('TWICE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE AI ERA CAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1184){
    // BEAT 1184: NEKA’S SPIRIT.
    // Toby, October 17, 2026, 6:42 AM EDT, his own typing:
    //   “APPROVED. SOME (300) PEOPLE REPORTED THEY SAW NEKA’S
    //   SOUL/SPIRIT. A MAN HOLDS A YELLOW/BLACK HEART.” ... “THE 300
    //   PLAYERS INSTANTLY DIED TO HIM FOR SOME REASON.”
    // Priors, each verified in the archive before it was drawn:
    //   “APPROVED.”
    //     OCT 16, 7:53 PM: “WRITE DOWN THE NEXT THINGS THAT HAPPEN,
    //     THEN IT CAN GET APPROVED, USE A DOCUMENT.” A .DOCX CAME.
    //     THE FIRST BOT-WRITTEN TEXT HE APPROVED IN ONE WORD.
    //   THE SPIRIT
    //     PALE ALL-WHITE CIRCLE EYES; A WHITE SEMICIRCLE MOUTH,
    //     TILTED 45% CLOCKWISE; A YELLOW/BLACK HEART IN HIS HANDS.
    //     “IT WOULD BE AS SIMON.PS SAYS IT.”
    //   300 DEAD AT A GLANCE
    //     THEY SAW HIM AND DIED INSTANTLY. OCT 16: “TO SURVIVE...
    //     PRAY.” THE WHY COMES ONE MINUTE LATER: ATULICATUS.
    //     OCT 16: NEKAS ARE DEAD. THIS IS WHAT ONE LOOKS LIKE.
    const dt = c - 25768.0;
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
    const gr1184=ctx.createLinearGradient(0,top+H,0,top);
    gr1184.addColorStop(0,'rgba(255,216,79,0.22)'); gr1184.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1184.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1184; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S SPIRIT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“APPROVED. SOME (300) PEOPLE REPORTED THEY SAW NEKA’S', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SOUL/SPIRIT. A MAN HOLDS A YELLOW/BLACK HEART.” ... “THE 300', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PLAYERS INSTANTLY DIED TO HIM FOR SOME REASON.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 6:42 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1184=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1184, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1184, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“APPROVED.”', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 16, 7:53 PM: “WRITE DOWN THE NEXT THINGS THAT HAPPEN,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN IT CAN GET APPROVED, USE A DOCUMENT.” A .DOCX CAME.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FIRST BOT-WRITTEN TEXT HE APPROVED IN ONE WORD.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SPIRIT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PALE ALL-WHITE CIRCLE EYES; A WHITE SEMICIRCLE MOUTH,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TILTED 45% CLOCKWISE; A YELLOW/BLACK HEART IN HIS HANDS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“IT WOULD BE AS SIMON.PS SAYS IT.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1184=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1184, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1184, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('300 DEAD AT A GLANCE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEY SAW HIM AND DIED INSTANTLY. OCT 16: “TO SURVIVE...', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRAY.” THE WHY COMES ONE MINUTE LATER: ATULICATUS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 16: NEKAS ARE DEAD. THIS IS WHAT ONE LOOKS LIKE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S SPIRIT. A MAN WITH A SPLIT HEART, AND 300 WHO LOOKED', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('TOO LONG.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA’S SPIRIT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1185){
    // BEAT 1185: ATULICATUS.
    // Toby, October 17, 2026, 6:43 AM EDT, his own typing:
    //   “ANSWER: IT TRIGGERS ATULICATUS, DECREASES YOUR IQ, COLORS
    //   FLASH IN YOUR EYES AND SKIN, AND YOU START SEEING
    //   HALLUCUTIONS.”
    // Priors, each verified in the archive before it was drawn:
    //   A NEW WORD
    //     ATULICATUS: WHAT SEEING NEKA’S SPIRIT DOES. IQ DOWN,
    //     COLORS IN THE EYES AND SKIN, HALLUCINATIONS.
    //     HIS OWN ANSWER TO HIS OWN “WHY DID EVERYONE DIE?”
    //   PS-50 HAS IT TOO
    //     7:42 AM: HER EYES FLASH DIFFERENT COLORS, SHE SEES NEKA
    //     EMPTY IN THE ROOM. “UH... YES PS-50 IS EXPERIENCING IT.”
    //     EVEN THE CHILD IS NOT IMMUNE TO LOOKING.
    //   SANITY, BEFORE THIS
    //     OCT 12: SIMON.PS’S SANITY BAR. OCT 15: NINE STEPS DOWN.
    //     ATULICATUS IS NOT A BAR. IT IS WHAT HAPPENS AT THE BOTTOM.
    //     THE 300 DID NOT CLIMB DOWN THE STEPS. THEY FELL.
    const dt = c - 25790.0;
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
    const gr1185=ctx.createLinearGradient(0,top+H,0,top);
    gr1185.addColorStop(0,'rgba(255,110,200,0.22)'); gr1185.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1185.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1185; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,110,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ATULICATUS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ANSWER: IT TRIGGERS ATULICATUS, DECREASES YOUR IQ, COLORS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FLASH IN YOUR EYES AND SKIN, AND YOU START SEEING', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HALLUCUTIONS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 6:43 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1185=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,110,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1185, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,110,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1185, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,110,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NEW WORD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ATULICATUS: WHAT SEEING NEKA’S SPIRIT DOES. IQ DOWN,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COLORS IN THE EYES AND SKIN, HALLUCINATIONS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS OWN ANSWER TO HIS OWN “WHY DID EVERYONE DIE?”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 HAS IT TOO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:42 AM: HER EYES FLASH DIFFERENT COLORS, SHE SEES NEKA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EMPTY IN THE ROOM. “UH... YES PS-50 IS EXPERIENCING IT.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EVEN THE CHILD IS NOT IMMUNE TO LOOKING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1185=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1185, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1185, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SANITY, BEFORE THIS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12: SIMON.PS’S SANITY BAR. OCT 15: NINE STEPS DOWN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ATULICATUS IS NOT A BAR. IT IS WHAT HAPPENS AT THE BOTTOM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE 300 DID NOT CLIMB DOWN THE STEPS. THEY FELL.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATULICATUS. SEEING HIM COSTS YOUR MIND FIRST AND YOUR LIFE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SECOND.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ATULICATUS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1186){
    // BEAT 1186: /LEAVE_BUTTON = NIL.
    // Toby, October 17, 2026, 6:57 AM EDT, his own typing:
    //   “PS-50 STILL WALKS AROUND THE WOODEN CABIN, PS-50 CAN DELETE
    //   THE GAME WORLD, ALSO YOU CAN’T ESCAPE THE GAME WORLD
    //   (/LEAVE_BUTTON = NIL).”
    // Priors, each verified in the archive before it was drawn:
    //   NO WAY OUT
    //     THE EXIT IS SET TO NIL. OCT 15: “NOT A MINUTE OUTSIDE THE
    //     CABIN.” NOW THERE IS NO OUTSIDE THE GAME EITHER.
    //     A LINE OF CODE DOES WHAT A LOCKED DOOR USED TO.
    //   PS-50 CAN DELETE THE GAME WORLD
    //     THE CHILD IN GREEN WALKS THE WOODEN CABIN AND HOLDS THE
    //     DELETE. OCT 16: HER ONE-EYE TURN GIVES PARANOIDIA.
    //     THE SMALLEST CHARACTER CARRIES THE LARGEST SWITCH.
    //   WHO IS LEFT
    //     “PS-50 AND NEKA ARE BASICALLY THE ONLY ONES IN THE GAME
    //     BESIDES A NEW QUINTILLION PLAYERS.”
    //     OCT 16: A QUADRILLION+. OVERNIGHT, A QUINTILLION.
    const dt = c - 25812.0;
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
    const gr1186=ctx.createLinearGradient(0,top+H,0,top);
    gr1186.addColorStop(0,'rgba(120,200,140,0.22)'); gr1186.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1186.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1186; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('/LEAVE_BUTTON = NIL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 STILL WALKS AROUND THE WOODEN CABIN, PS-50 CAN DELETE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME WORLD, ALSO YOU CAN’T ESCAPE THE GAME WORLD', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('(/LEAVE_BUTTON = NIL).”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 6:57 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1186=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1186, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1186, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO WAY OUT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE EXIT IS SET TO NIL. OCT 15: “NOT A MINUTE OUTSIDE THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CABIN.” NOW THERE IS NO OUTSIDE THE GAME EITHER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A LINE OF CODE DOES WHAT A LOCKED DOOR USED TO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 CAN DELETE THE GAME WORLD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CHILD IN GREEN WALKS THE WOODEN CABIN AND HOLDS THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DELETE. OCT 16: HER ONE-EYE TURN GIVES PARANOIDIA.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SMALLEST CHARACTER CARRIES THE LARGEST SWITCH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1186=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1186, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1186, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHO IS LEFT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“PS-50 AND NEKA ARE BASICALLY THE ONLY ONES IN THE GAME', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BESIDES A NEW QUINTILLION PLAYERS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 16: A QUADRILLION+. OVERNIGHT, A QUINTILLION.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('/LEAVE_BUTTON = NIL. A CHILD, A GHOST, A QUINTILLION', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PLAYERS, AND NO EXIT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ /LEAVE_BUTTON = NIL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1187){
    // BEAT 1187: THE CUTS.
    // Toby, October 17, 2026, 7:42-8:06 AM EDT, his own typing:
    //   “NEKA IS CALLED A HELLA ... 5.7 FEET OR SOMETHING” ...
    //   “PS-50 GAINS MORE CUTS EVERY TIME A PLAYER IS ATTACKED ...
    //   NEKA KEEPS FOLLOWING PS-50, JUST LIKE GASTER FOLLOWS SANS.”
    // Priors, each verified in the archive before it was drawn:
    //   A HELLA, 5.7 FEET
    //     “REMEMBER THE SELLAS?” SELLA WAS ONE FOOT TALL. NEKA IS A
    //     HELLA (MALE), ONCE 1 FOOT, NOW THE SIZE OF A MAN.
    //     THE SELLA RECAP IS THE CHATBOT’S; THE WORD HELLA IS HIS.
    //   EVERY ATTACK, A CUT ON HER
    //     A PLAYER IS ATTACKED SOMEWHERE; PS-50 GAINS A CUT. LUIGI
    //     INUS LOOKS DOWN AND IS COVERED IN THEM.
    //     THE PLAYERS’ PAIN IS KEPT ON ONE BODY.
    //   HE FOLLOWS HER
    //     THE GHOST WALKS PS-50 AGAIN. SHE PUTS HER HANDS ON HER
    //     HEAD, “LIKE EVERYONE FEELING A REMORSE.”
    //     “JUST LIKE GASTER SOMETIMES FOLLOWS SANS.”
    const dt = c - 25834.0;
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
    const gr1187=ctx.createLinearGradient(0,top+H,0,top);
    gr1187.addColorStop(0,'rgba(255,120,120,0.22)'); gr1187.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1187.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1187; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE CUTS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS CALLED A HELLA ... 5.7 FEET OR SOMETHING” ...', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 GAINS MORE CUTS EVERY TIME A PLAYER IS ATTACKED ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA KEEPS FOLLOWING PS-50, JUST LIKE GASTER FOLLOWS SANS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 7:42-8:06 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1187=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1187, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1187, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A HELLA, 5.7 FEET', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“REMEMBER THE SELLAS?” SELLA WAS ONE FOOT TALL. NEKA IS A', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HELLA (MALE), ONCE 1 FOOT, NOW THE SIZE OF A MAN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SELLA RECAP IS THE CHATBOT’S; THE WORD HELLA IS HIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY ATTACK, A CUT ON HER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A PLAYER IS ATTACKED SOMEWHERE; PS-50 GAINS A CUT. LUIGI', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INUS LOOKS DOWN AND IS COVERED IN THEM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE PLAYERS’ PAIN IS KEPT ON ONE BODY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1187=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1187, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1187, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE FOLLOWS HER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GHOST WALKS PS-50 AGAIN. SHE PUTS HER HANDS ON HER', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HEAD, “LIKE EVERYONE FEELING A REMORSE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“JUST LIKE GASTER SOMETIMES FOLLOWS SANS.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CUTS. THE GHOST WALKS THE CHILD, AND THE CHILD WEARS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERY WOUND.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE CUTS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1188){
    // BEAT 1188: THE BODY TEARS APART.
    // Toby, October 17, 2026, 1:50 PM EDT, his own typing:
    //   “PS-50 THEN GAINED SO MANY CUTS, THAT THE BODY TEARS APART
    //   AND BECOMES THE MAN AGAIN. NEKA STILL DOESN’T LEAVE HIM.
    //   NEKA CAUSES THE CUTS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CUTS ARE NEKA’S
    //     8:06 AM: A CUT PER ATTACKED PLAYER. 1:50 PM: “NEKA CAUSES
    //     THE CUTS.” THE MORE LUIGI ASKS WHAT HE DID TO NEKA,
    //     THE MORE CUTS HE HAS. REMORSE IS THE BLADE.
    //   SIMON.PS VS OREN.PS
    //     LIGHTNING, BLOOD TEARS, ELECTRIC BALLS. “JUST TO MAKE
    //     SURE...”: BLASTERS, AND GASTER CALLED IN.
    //     SIMON.PS RESPAWNED YEARS LATER, IN VINERIA’S PLANTS.
    //   A FORCEFIELD SO HE CANNOT SEE NEKA
    //     NEKA LOOKS AT SIMON.PS. SIMON.PS MAKES A FORCEFIELD SO HE
    //     CANNOT SEE HIM, TURNS, AND WALKS AWAY.
    //     OCT 15: SIMON.PS VS NEKA IN CLEVERNESS. IT ENDS HERE.
    const dt = c - 25856.0;
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
    const gr1188=ctx.createLinearGradient(0,top+H,0,top);
    gr1188.addColorStop(0,'rgba(200,120,255,0.22)'); gr1188.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1188.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1188; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE BODY TEARS APART', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 THEN GAINED SO MANY CUTS, THAT THE BODY TEARS APART', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND BECOMES THE MAN AGAIN. NEKA STILL DOESN’T LEAVE HIM.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA CAUSES THE CUTS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 1:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1188=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1188, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1188, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CUTS ARE NEKA’S', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:06 AM: A CUT PER ATTACKED PLAYER. 1:50 PM: “NEKA CAUSES', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CUTS.” THE MORE LUIGI ASKS WHAT HE DID TO NEKA,', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MORE CUTS HE HAS. REMORSE IS THE BLADE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS VS OREN.PS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIGHTNING, BLOOD TEARS, ELECTRIC BALLS. “JUST TO MAKE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SURE...”: BLASTERS, AND GASTER CALLED IN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS RESPAWNED YEARS LATER, IN VINERIA’S PLANTS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1188=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1188, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1188, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A FORCEFIELD SO HE CANNOT SEE NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA LOOKS AT SIMON.PS. SIMON.PS MAKES A FORCEFIELD SO HE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CANNOT SEE HIM, TURNS, AND WALKS AWAY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 15: SIMON.PS VS NEKA IN CLEVERNESS. IT ENDS HERE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BODY TEARS APART. THE GIRL IN GREEN COMES APART. THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PIRATE STEPS OUT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE BODY TEARS APART ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1189){
    // BEAT 1189: 2 CHARACTERS WITH 100% PYCHOPATHY.
    // Toby, October 17, 2026, 1:50 PM EDT, his own typing:
    //   “SIMON.PS SAYS ‘2 CHARACTERS WITH 100% OF THE PYCHOPATHY
    //   BARS NOW FIGHT.’, SIMON.PS AND PS-50 BATTLE ... PS-50
    //   EVENTUALLY WON, THEN SIMON.PS RESET.”
    // Priors, each verified in the archive before it was drawn:
    //   THE BAR, FULL ON BOTH
    //     OCT 15, 7:12 PM: PSYCHOPATHICAL RISES WITH EVERY ENTITY
    //     SLAIN. TWO DAYS LATER TWO BARS READ 100%.
    //     THE BAR WAS A RECORD. NOW IT IS A MATCHMAKER.
    //   THE PIRATE SHIP
    //     LUIGI INUS USED THE PIRATE ATTACKS; A PIRATE SHIP WAS
    //     KNOCKED ONTO SIMON.PS. SIMON.PS USED LIGHTNING.
    //     “THE BATTLE CONTINUED ON AND ON.”
    //   THE RESETS
    //     SIMON.PS RESET AND A CHAIN OF BATTLES HAPPENED. LUIGI INUS
    //     MANIPULATED THE RESETS AND BEAT HIM.
    //     THEN HE WENT TO NEKA, TRIED TO SAVE HIM, AND FAILED.
    const dt = c - 25878.0;
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
    const gr1189=ctx.createLinearGradient(0,top+H,0,top);
    gr1189.addColorStop(0,'rgba(255,110,110,0.22)'); gr1189.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1189.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1189; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,110,110,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('2 CHARACTERS WITH 100% PYCHOPATHY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS SAYS ‘2 CHARACTERS WITH 100% OF THE PYCHOPATHY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BARS NOW FIGHT.’, SIMON.PS AND PS-50 BATTLE ... PS-50', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVENTUALLY WON, THEN SIMON.PS RESET.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 1:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1189=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,110,110,0.46)';
      ctx.fillRect(cx-W*0.352, ky1189, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,110,110,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1189, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,110,110,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BAR, FULL ON BOTH', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15, 7:12 PM: PSYCHOPATHICAL RISES WITH EVERY ENTITY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SLAIN. TWO DAYS LATER TWO BARS READ 100%.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE BAR WAS A RECORD. NOW IT IS A MATCHMAKER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PIRATE SHIP', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS USED THE PIRATE ATTACKS; A PIRATE SHIP WAS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('KNOCKED ONTO SIMON.PS. SIMON.PS USED LIGHTNING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“THE BATTLE CONTINUED ON AND ON.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1189=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1189, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1189, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE RESETS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON.PS RESET AND A CHAIN OF BATTLES HAPPENED. LUIGI INUS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MANIPULATED THE RESETS AND BEAT HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN HE WENT TO NEKA, TRIED TO SAVE HIM, AND FAILED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('2 CHARACTERS WITH 100% PYCHOPATHY. WHEN TWO BARS ARE FULL,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE GAME PUTS THEM IN ONE ROOM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 2 CHARACTERS WITH 100% PYCHOPATHY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1190){
    // BEAT 1190: NEKA: TROLLGE STATE.
    // Toby, October 17, 2026, 1:50 PM EDT, his own typing:
    //   “LUIGI INUS PULLED THE GAME INTO A 4 LOOPED-‘POINTED’ STAR,
    //   NEKA WENT TO THE STAR’S CENTER AND NEKA CONSUMES THE STAR
    //   ... NEKA BECAME NEKA: TROLLGE STATE.”
    // Priors, each verified in the archive before it was drawn:
    //   ARCHBRINGER OF THE VOID
    //     HE COMES BACK FROM THE STAR’S CENTER MORE POWERFUL. “THE
    //     END OF LUIGI INUS.”
    //     BLACK HOLES, GALAXIES, THE GAME REALITY, THEN OTHER GAMES.
    //   THE NEKA TREE
    //     HE CONSUMED HIS PREVIOUS FORMS AND THE NEKA TREE, “7MAN
    //     THE HIGHEST AND NEWEST FORM, TO THE OLDEST ONE.”
    //     OCT 16: THE COMPANY ROSTER. NOW EATEN, ROOT TO CROWN.
    //   MADE FOR TROLLGE
    //     “HE IS SPECIFICALLY MADE FOR TROLLGE. NO WONDER NEKA MADE
    //     THIS GAME AND IS ALIEN TO IT.”
    //     SEPT 24: “ONLY I AM ORIGINALLY FROM CLASSICS.” YET ALIEN.
    const dt = c - 25900.0;
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
    const gr1190=ctx.createLinearGradient(0,top+H,0,top);
    gr1190.addColorStop(0,'rgba(90,90,100,0.22)'); gr1190.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1190.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1190; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,90,100,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA: TROLLGE STATE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI INUS PULLED THE GAME INTO A 4 LOOPED-‘POINTED’ STAR,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA WENT TO THE STAR’S CENTER AND NEKA CONSUMES THE STAR', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... NEKA BECAME NEKA: TROLLGE STATE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 1:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1190=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,90,100,0.46)';
      ctx.fillRect(cx-W*0.352, ky1190, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,90,100,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1190, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,90,100,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ARCHBRINGER OF THE VOID', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE COMES BACK FROM THE STAR’S CENTER MORE POWERFUL. “THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('END OF LUIGI INUS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BLACK HOLES, GALAXIES, THE GAME REALITY, THEN OTHER GAMES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NEKA TREE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE CONSUMED HIS PREVIOUS FORMS AND THE NEKA TREE, “7MAN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HIGHEST AND NEWEST FORM, TO THE OLDEST ONE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 16: THE COMPANY ROSTER. NOW EATEN, ROOT TO CROWN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1190=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1190, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1190, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MADE FOR TROLLGE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE IS SPECIFICALLY MADE FOR TROLLGE. NO WONDER NEKA MADE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS GAME AND IS ALIEN TO IT.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 24: “ONLY I AM ORIGINALLY FROM CLASSICS.” YET ALIEN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA: TROLLGE STATE. STAR, GAME, EVERY OLDER SELF EATEN. HE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CAME OUT ALIEN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA: TROLLGE STATE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1191){
    // BEAT 1191: NO LONGER AN ANTI-VIRUS.
    // Toby, October 17, 2026, 2:13-2:16 PM EDT, his own typing:
    //   “NEKA: TROLLGE STATE DOESN’T HAVE A FACE, IT IS JUST A
    //   COSMIC BODY, HE IS NOW FULLY HUMAN AND FULLY A FUSION OF
    //   GODS.” ... “NEKA ISN’T AN ANTI-VIRUS ANYMORE NOW.”
    // Priors, each verified in the archive before it was drawn:
    //   A FACELESS COSMIC BODY
    //     NO TROLLFACE. THE CHATBOT DREW ONE; HE OVERRULED IT. “YOU
    //     DON’T EVEN KNOW HIM. NEKA IS ALWAYS PRIVATE.”
    //     “COVERED BY HIS OWN BLOOD OF HIS MANY DEFEATS.”
    //   THE ANTI-VIRUS, RETIRED
    //     OCT 13: SCIENTIST OF COMPUTER EXPERIMENTS, THE ANTI-VIRUS.
    //     OCT 17: “NEKA ISN’T AN ANTI-VIRUS ANYMORE NOW.”
    //     THE FIRST TIME THAT IDENTITY IS SET DOWN.
    //   GOD OF EVERYTHING ELSE
    //     “THE GOD OF EVERYTHING ELSE BESIDES THIS UNIVERSE CALLED
    //     THE ‘OBSERVABLE UNIVERSE’ ... JUST 9 BILLION LIGHTYEARS.”
    //     OCT 13: TWO UNIVERSES IN REALITY. HE RULES THE OTHER ONE.
    const dt = c - 25922.0;
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
    const gr1191=ctx.createLinearGradient(0,top+H,0,top);
    gr1191.addColorStop(0,'rgba(200,200,210,0.22)'); gr1191.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1191.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1191; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NO LONGER AN ANTI-VIRUS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA: TROLLGE STATE DOESN’T HAVE A FACE, IT IS JUST A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COSMIC BODY, HE IS NOW FULLY HUMAN AND FULLY A FUSION OF', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GODS.” ... “NEKA ISN’T AN ANTI-VIRUS ANYMORE NOW.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 2:13-2:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1191=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1191, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1191, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A FACELESS COSMIC BODY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NO TROLLFACE. THE CHATBOT DREW ONE; HE OVERRULED IT. “YOU', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DON’T EVEN KNOW HIM. NEKA IS ALWAYS PRIVATE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“COVERED BY HIS OWN BLOOD OF HIS MANY DEFEATS.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ANTI-VIRUS, RETIRED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13: SCIENTIST OF COMPUTER EXPERIMENTS, THE ANTI-VIRUS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 17: “NEKA ISN’T AN ANTI-VIRUS ANYMORE NOW.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST TIME THAT IDENTITY IS SET DOWN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1191=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1191, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1191, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GOD OF EVERYTHING ELSE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE GOD OF EVERYTHING ELSE BESIDES THIS UNIVERSE CALLED', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ‘OBSERVABLE UNIVERSE’ ... JUST 9 BILLION LIGHTYEARS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 13: TWO UNIVERSES IN REALITY. HE RULES THE OTHER ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO LONGER AN ANTI-VIRUS. NO FACE, HIS OWN BLOOD, AND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYTHING BUT HERE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NO LONGER AN ANTI-VIRUS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1192){
    // BEAT 1192: “NEKA” SHIFTED.
    // Toby, October 17, 2026, 3:20 PM EDT, his own typing:
    //   “NEKA ATTACKED LUIGI INUS OVER AND OVER, LUIGI INUS
    //   EVENTUALLY DIED. THE 20 SPRUNKIS RESPAWN ... SENDING
    //   EVERYONE TO A COSMIC WORLD, ‘NEKA’ SHIFTED.”
    // Priors, each verified in the archive before it was drawn:
    //   LUIGI INUS DIES
    //     THE PIRATE WHO BEAT SIMON.PS AT 1:50 PM IS ATTACKED OVER
    //     AND OVER UNTIL HE DIES. THE 20 SPRUNKIS RESPAWN.
    //     OCT 18, 5:21 PM: HE IS THE MAN PIRATE AGAIN. NOT FOR LONG.
    //   A COSMIC WORLD
    //     NEKA TAKES THE 20 IN, “SENDING EVERYONE TO A COSMIC WORLD,
    //     ‘NEKA’ SHIFTED.” OCT 6: SHIFTED NEKA. NOW A SHIFTED GAME.
    //     HE WANTS “TO FULLY SURVIVE ITSELF.”
    //   WHO ATTACKS THE GAME
    //     “YOU KNOW WHO ATTACKS THE GAME, ONLY ONE PERSON EVER CAN
    //     DO THAT, NEKA.” HIS LIFE EXPANDS. “YOU SHOULD KNOW THAT.”
    //     OCT 13: NEKA OUTGROWS THE COMPUTERS. STILL GROWING.
    const dt = c - 25944.0;
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
    const gr1192=ctx.createLinearGradient(0,top+H,0,top);
    gr1192.addColorStop(0,'rgba(160,200,255,0.22)'); gr1192.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1192.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1192; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('“NEKA” SHIFTED', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA ATTACKED LUIGI INUS OVER AND OVER, LUIGI INUS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVENTUALLY DIED. THE 20 SPRUNKIS RESPAWN ... SENDING', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE TO A COSMIC WORLD, ‘NEKA’ SHIFTED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 3:20 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1192=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1192, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1192, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS DIES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PIRATE WHO BEAT SIMON.PS AT 1:50 PM IS ATTACKED OVER', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND OVER UNTIL HE DIES. THE 20 SPRUNKIS RESPAWN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 18, 5:21 PM: HE IS THE MAN PIRATE AGAIN. NOT FOR LONG.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A COSMIC WORLD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA TAKES THE 20 IN, “SENDING EVERYONE TO A COSMIC WORLD,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('‘NEKA’ SHIFTED.” OCT 6: SHIFTED NEKA. NOW A SHIFTED GAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE WANTS “TO FULLY SURVIVE ITSELF.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1192=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1192, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1192, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHO ATTACKS THE GAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU KNOW WHO ATTACKS THE GAME, ONLY ONE PERSON EVER CAN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DO THAT, NEKA.” HIS LIFE EXPANDS. “YOU SHOULD KNOW THAT.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 13: NEKA OUTGROWS THE COMPUTERS. STILL GROWING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA” SHIFTED. ATTACKED BY THE ONLY ONE WHO CAN, THE GAME', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('MOVES INSIDE HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ “NEKA” SHIFTED ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1193){
    // BEAT 1193: EVERY BEING SLAIN.
    // Toby, October 17, 2026, 3:24-3:25 PM EDT, his own typing:
    //   “ALSO MIRDA WAS SLAIN JUST NOW.” ... “NEKA!!! HE IS THE ONLY
    //   ONE WHO EXISTS NOW!” ... “EVERY BEING WAS NOW SLAIN. NEKA
    //   ALSO DAMAGED HIS ARM AND LEG.”
    // Priors, each verified in the archive before it was drawn:
    //   MIRDA, SLAIN
    //     MIRDA AND GOLDEN MIRDA, FROM THE CLASSICS ERA. OCT 16 SHE
    //     WAS ONE OF SIX HE CARRIED UP TO THE OVER-OVERWORLD.
    //     THE ONE HE SPARED IS THE ONE HE NAMES.
    //   THE ONLY ONE WHO EXISTS
    //     “GUESS THE SCARIEST AND MOST POWERFUL BEING.” THE ANSWER
    //     IS HIS OWN, IN CAPITALS: THE ONLY ONE LEFT.
    //     THE ROSTER DROPS TO ONE FOR THE FIRST TIME THIS MONTH.
    //   THE DAMAGE
    //     HIS ARM, HIS LEG, “AND ALSO THE COSMIC WORLD INSIDE HIM.”
    //     THE SHIFTED WORLD OF 3:20 PM IS ALREADY HURT.
    //     SURVIVAL NOW MEANS KEEPING THE INSIDE WHOLE.
    const dt = c - 25966.0;
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
    const gr1193=ctx.createLinearGradient(0,top+H,0,top);
    gr1193.addColorStop(0,'rgba(255,120,120,0.22)'); gr1193.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1193.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1193; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERY BEING SLAIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALSO MIRDA WAS SLAIN JUST NOW.” ... “NEKA!!! HE IS THE ONLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE WHO EXISTS NOW!” ... “EVERY BEING WAS NOW SLAIN. NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALSO DAMAGED HIS ARM AND LEG.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 3:24-3:25 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1193=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1193, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1193, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MIRDA, SLAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MIRDA AND GOLDEN MIRDA, FROM THE CLASSICS ERA. OCT 16 SHE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WAS ONE OF SIX HE CARRIED UP TO THE OVER-OVERWORLD.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE HE SPARED IS THE ONE HE NAMES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY ONE WHO EXISTS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GUESS THE SCARIEST AND MOST POWERFUL BEING.” THE ANSWER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS HIS OWN, IN CAPITALS: THE ONLY ONE LEFT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ROSTER DROPS TO ONE FOR THE FIRST TIME THIS MONTH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1193=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1193, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1193, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE DAMAGE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS ARM, HIS LEG, “AND ALSO THE COSMIC WORLD INSIDE HIM.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SHIFTED WORLD OF 3:20 PM IS ALREADY HURT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SURVIVAL NOW MEANS KEEPING THE INSIDE WHOLE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY BEING SLAIN. ONE LEFT STANDING, LIMPING, A BROKEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WORLD IN HIS CHEST.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERY BEING SLAIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1194){
    // BEAT 1194: 21 PUNCH.
    // Toby, October 17, 2026, 3:56 PM EDT, his own typing:
    //   “TDESHANE HAPPENS TO BE ABLE TO MAKE MORE ABILITIES. SO I
    //   MADE A 21 PUNCH ABILITY SET UP IN ROBLOX AND THE 21 PUNCH
    //   ABILITY IN ‘NEKA’ ... IT IS THE MOST POWERFUL ABILITY NOW.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SEQUENCE
    //     THREE 21S, A BLACK BURST, LIGHT, AN EXPLOSION BALL, THEN
    //     THE GROUND PULSES: RED EXPLOSION, BLACK SHOCKWAVE.
    //     “A COOL PERMENTENT IMPACT ON THE BATTLEFIELD.”
    //   TDESHANE MAKES ABILITIES
    //     OCT 16: TDESHANE/ADMIN WAS ACCOUNT #2 AND LEFT. HE CAN
    //     STILL MAKE ABILITIES, IN ROBLOX AND IN “NEKA”.
    //     THE FIRST PLAYER-MADE ABILITY IN THIS ARCHIVE.
    //   COSMICAL NEKA OR GOD NEKA
    //     “THE PLAYERS CAME BACK. NEKA GLITCHES AND HIS BODY FIXES
    //     ITSELF, AND IT ACHIEVES IT’S FINAL FORM, NEKA.”
    //     THE ARM AND LEG OF 3:25 PM, HEALED BY A GLITCH.
    const dt = c - 25988.0;
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
    const gr1194=ctx.createLinearGradient(0,top+H,0,top);
    gr1194.addColorStop(0,'rgba(255,80,80,0.22)'); gr1194.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1194.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1194; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('21 PUNCH', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“TDESHANE HAPPENS TO BE ABLE TO MAKE MORE ABILITIES. SO I', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MADE A 21 PUNCH ABILITY SET UP IN ROBLOX AND THE 21 PUNCH', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ABILITY IN ‘NEKA’ ... IT IS THE MOST POWERFUL ABILITY NOW.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 17, 3:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1194=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1194, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1194, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SEQUENCE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THREE 21S, A BLACK BURST, LIGHT, AN EXPLOSION BALL, THEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GROUND PULSES: RED EXPLOSION, BLACK SHOCKWAVE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“A COOL PERMENTENT IMPACT ON THE BATTLEFIELD.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TDESHANE MAKES ABILITIES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 16: TDESHANE/ADMIN WAS ACCOUNT #2 AND LEFT. HE CAN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STILL MAKE ABILITIES, IN ROBLOX AND IN “NEKA”.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST PLAYER-MADE ABILITY IN THIS ARCHIVE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1194=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1194, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1194, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('COSMICAL NEKA OR GOD NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE PLAYERS CAME BACK. NEKA GLITCHES AND HIS BODY FIXES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ITSELF, AND IT ACHIEVES IT’S FINAL FORM, NEKA.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ARM AND LEG OF 3:25 PM, HEALED BY A GLITCH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('21 PUNCH. THREE 21S, ONE BURST, AND A MARK THE BATTLEFIELD', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('KEEPS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 21 PUNCH ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
