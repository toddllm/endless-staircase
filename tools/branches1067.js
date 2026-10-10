  } else if(ph===1067){
    // BEAT 1067: LUIGI INUS: GOLDEN PIRATE.
    // Toby, October 10, 2026, 7:41 PM EDT, his own typing:
    //   “AFTER 56 YEARS, HE FINALLY GOTTEN ALL THE GOLD
    //   IN THE GAME, LUIGI INUS MADE A GOLD TOOTH,
    //   A PEG LEG, GOLD BONES... GOLDEN PIRATE.”
    // Priors, each verified in the archive before it was drawn:
    //   MORE GOLD
    //     12:32 PM: “LUIGI INUS CONTINUES COLLECTING
    //     MORE GOLD.”
    //     NOW, AFTER 56 YEARS, HE HAS ALL OF IT.
    //   THE 7 SEAS
    //     OCT 9: “LUIGI SAILED ACROSS THE 7 SEAS,
    //     LOOKING FOR POWERFUL ARTIFACTS.”
    //     NOW HE CAN INFINITELY REPAIR HIMSELF.
    //   ALEXEN IS NEKA
    //     7:32 PM: “ALEX IS NO LONGER AN OMAZEN, NOW
    //     NEKA ALEXEN LAI IS HERE.”
    //     NOW “ALEXEN IS NOW NEKA NOW”, AND GOES PAST MAX LV.
    const dt = c - 23194.0;
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
    const gr1067=ctx.createLinearGradient(0,top+H,0,top);
    gr1067.addColorStop(0,'rgba(255,200,60,0.22)'); gr1067.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1067.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1067; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS: GOLDEN PIRATE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AFTER 56 YEARS, HE FINALLY GOTTEN ALL THE GOLD', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN THE GAME, LUIGI INUS MADE A GOLD TOOTH,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A PEG LEG, GOLD BONES... GOLDEN PIRATE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 7:41 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1067=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1067, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1067, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MORE GOLD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('12:32 PM: “LUIGI INUS CONTINUES COLLECTING', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE GOLD.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW, AFTER 56 YEARS, HE HAS ALL OF IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 7 SEAS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: “LUIGI SAILED ACROSS THE 7 SEAS,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LOOKING FOR POWERFUL ARTIFACTS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW HE CAN INFINITELY REPAIR HIMSELF.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1067=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1067, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1067, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ALEXEN IS NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:32 PM: “ALEX IS NO LONGER AN OMAZEN, NOW', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA ALEXEN LAI IS HERE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW “ALEXEN IS NOW NEKA NOW”, AND GOES PAST MAX LV.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN IS NOW NEKA NOW.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE CONTINUES WITH LV, SO HE CAN REACH PAST MAX LV.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ LUIGI INUS: GOLDEN PIRATE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1068){
    // BEAT 1068: THE POWER CHAIN.
    // Toby, October 10, 2026, 7:41 PM EDT, his own typing:
    //   “ALEX’S DOMAIN EXPANSION POWER CHAIN CONNECTS
    //   EVERYTHING, WRAPS AROUND ALL TARGETS... ALEX
    //   AND THE VICTUM(S) ARE SENT TO THE VOID.”
    // Priors, each verified in the archive before it was drawn:
    //   JAPANESE LETTERS
    //     OCT 9: “ALEX CREATES POWER CHAIN, DOMAIN
    //     EXPANSION, JAPANESE LETTERS... APPEAR.”
    //     NOW IT WRAPS AROUND ALL TARGETS AND SENDS THEM TO THE VOID.
    //   HEXAGON PLATES
    //     OCT 9: “NEKA STRIKES THE CHAINS AND IT SUCKS
    //     THE POWER... PLASMA HEXAGON PLATES.”
    //     NOW ALEX JUMPS ON THE HEXAGON PARTS OF NEKA’S BODY.
    //   THE 67 PIRATE
    //     OCT 9: “THEN THE 67 PIRATE COMES... ALEX USES
    //     DIAMOND SWORD, 67 PIRATE DOESN’T DIE.”
    //     NOW ALEX FLIES FOR 67 SECONDS ACROSS THE WHITE VOID.
    const dt = c - 23216.0;
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
    const gr1068=ctx.createLinearGradient(0,top+H,0,top);
    gr1068.addColorStop(0,'rgba(255,140,80,0.22)'); gr1068.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1068.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1068; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE POWER CHAIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX’S DOMAIN EXPANSION POWER CHAIN CONNECTS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING, WRAPS AROUND ALL TARGETS... ALEX', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THE VICTUM(S) ARE SENT TO THE VOID.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 7:41 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1068=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1068, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1068, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JAPANESE LETTERS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: “ALEX CREATES POWER CHAIN, DOMAIN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EXPANSION, JAPANESE LETTERS... APPEAR.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW IT WRAPS AROUND ALL TARGETS AND SENDS THEM TO THE VOID.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HEXAGON PLATES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: “NEKA STRIKES THE CHAINS AND IT SUCKS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE POWER... PLASMA HEXAGON PLATES.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW ALEX JUMPS ON THE HEXAGON PARTS OF NEKA’S BODY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1068=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1068, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1068, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE 67 PIRATE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: “THEN THE 67 PIRATE COMES... ALEX USES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DIAMOND SWORD, 67 PIRATE DOESN’T DIE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW ALEX FLIES FOR 67 SECONDS ACROSS THE WHITE VOID.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX VS LUIGI GREEN IS THE TOUGHEST FIGHT.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALEX WOULD WIN AS NEKA; BEFORE, LUIGI GREEN WOULD WIN INSTANTLY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE POWER CHAIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1069){
    // BEAT 1069: PYCHOPATHICAL USYTREMICISM.
    // Toby, October 10, 2026, 7:46 PM EDT, his own typing:
    //   “ALEX GAINED PYCHOPATHICAL USYTREMICISM.
    //   ALEXEN’S EYES BECOME RED, HE SUMMONS A BARRAGE
    //   OF SWORDS, MICROPHONES, GREGS...”
    // Priors, each verified in the archive before it was drawn:
    //   SUPREME MATE
    //     1:19 PM: “ALEX BASICALLY STARTS BEATING MORE
    //     AND MORE IN SUPREME MATE.”
    //     NOW HE ONLY LOSES TO OREN.PS OR/AND SIMON.PS.
    //   RED EYES
    //     OCT 9: “NEKA IS CLARIFIED AS AN ALL PURPLE
    //     ENTITY WITH RED EYES.”
    //     NOW ALEXEN’S EYES BECOME RED TOO.
    //   FROM THIN AIR
    //     SEPT 18, 4:10 PM: “I MADE A GAME FROM THIN
    //     AIR, I NAMED IT CLASSIC RL.”
    //     NOW ALEX HAS THE POWER TO CREATE ANYTHING FROM THIN AIR.
    const dt = c - 23238.0;
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
    const gr1069=ctx.createLinearGradient(0,top+H,0,top);
    gr1069.addColorStop(0,'rgba(255,70,70,0.22)'); gr1069.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1069.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1069; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,70,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PYCHOPATHICAL USYTREMICISM', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX GAINED PYCHOPATHICAL USYTREMICISM.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEXEN’S EYES BECOME RED, HE SUMMONS A BARRAGE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OF SWORDS, MICROPHONES, GREGS...”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 7:46 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1069=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,70,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1069, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,70,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1069, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,70,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SUPREME MATE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:19 PM: “ALEX BASICALLY STARTS BEATING MORE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND MORE IN SUPREME MATE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW HE ONLY LOSES TO OREN.PS OR/AND SIMON.PS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RED EYES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: “NEKA IS CLARIFIED AS AN ALL PURPLE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENTITY WITH RED EYES.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW ALEXEN’S EYES BECOME RED TOO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1069=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1069, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1069, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FROM THIN AIR', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 18, 4:10 PM: “I MADE A GAME FROM THIN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AIR, I NAMED IT CLASSIC RL.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW ALEX HAS THE POWER TO CREATE ANYTHING FROM THIN AIR.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM STRONGER THAN YOU!”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AFTER THE PYCHO-USTREMISM, HE BEATS EVERYONE; STRONGER THAN HIS DOMAIN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PYCHOPATHICAL USYTREMICISM ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
