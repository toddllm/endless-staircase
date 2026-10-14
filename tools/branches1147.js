  } else if(ph===1147){
    // BEAT 1147: NOT INFINITY, ABSOLUTE INFINITY.
    // Toby, October 14, 2026, 5:32 PM EDT, his own typing:
    //   “IT IS ACTUALLY INFINITY 9S, NOT INFINITY BUT ABSOLUTE
    //   INFINITY. 😏👑” NEKA’S POWER LEVEL, HIS CORRECTION.
    //   THE CHATBOT TYPED 9S AND HE CALLED IT SCAMMING.
    // Priors, each verified in the archive before it was drawn:
    //   ALEX 303 ALWAYS WINS
    //     OCT 13, 7:22 PM: “ALEX 303 IS ACTUALLY BEYOND OMNIPOTENT
    //     TO ABCDEFGHIJKLMNOPQRSTUVWXYZ9999... HE ALWAYS WINS.”
    //     THE SAME LETTERS AND 9S. NOW THE 9S HAVE A NAME.
    //   ALEX AND NEKA ARE 2
    //     OCT 10: “NEKA TAKES OFF HIS COAT, AND THERE IS ALEX RIGHT
    //     THERE.” OCT 11: “IT IS NEKA LAI/ALEX/ALEXEN.”
    //     ONE POWER LEVEL, TWO NAMES. THE CHATBOT WROTE BOTH.
    //   HIGHER THAN BEYOND ABSOLUTE
    //     OCT 3: “NEKA OMAZEN IS HIGHER THAN BEYOND ABSOLUTE, AND AN
    //     ENDLESS NUMBER OF IT TIMES ITSELF... FOREVER.”
    //     HIS PLACE WAS A NUMBER THEN TOO. TODAY THE NUMBER IS 9S.
    const dt = c - 24954.0;
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
    const gr1147=ctx.createLinearGradient(0,top+H,0,top);
    gr1147.addColorStop(0,'rgba(255,215,80,0.22)'); gr1147.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1147.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1147; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,215,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOT INFINITY, ABSOLUTE INFINITY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS ACTUALLY INFINITY 9S, NOT INFINITY BUT ABSOLUTE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INFINITY. 😏👑” NEKA’S POWER LEVEL, HIS CORRECTION.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT TYPED 9S AND HE CALLED IT SCAMMING.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 5:32 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1147=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,215,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1147, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,215,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1147, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,215,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX 303 ALWAYS WINS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 7:22 PM: “ALEX 303 IS ACTUALLY BEYOND OMNIPOTENT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO ABCDEFGHIJKLMNOPQRSTUVWXYZ9999... HE ALWAYS WINS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SAME LETTERS AND 9S. NOW THE 9S HAVE A NAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX AND NEKA ARE 2', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10: “NEKA TAKES OFF HIS COAT, AND THERE IS ALEX RIGHT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THERE.” OCT 11: “IT IS NEKA LAI/ALEX/ALEXEN.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE POWER LEVEL, TWO NAMES. THE CHATBOT WROTE BOTH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1147=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1147, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1147, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HIGHER THAN BEYOND ABSOLUTE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 3: “NEKA OMAZEN IS HIGHER THAN BEYOND ABSOLUTE, AND AN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENDLESS NUMBER OF IT TIMES ITSELF... FOREVER.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS PLACE WAS A NUMBER THEN TOO. TODAY THE NUMBER IS 9S.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOT INFINITY BUT ABSOLUTE INFINITY. 😏👑”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT COUNTED. HE NAMED THE COUNT. THAT IS THE RULE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOT INFINITY, ABSOLUTE INFINITY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1148){
    // BEAT 1148: WENDA.PS EVEN FARTHER.
    // Toby, October 14, 2026, 5:32 PM EDT, his own typing:
    //   “NEKA TAKES WENDA.PS EVEN FARTHER FROM GRAY.PS.
    //   GRAY.PS KEEPS FOLLOWING.” HIS LINE, SAME MESSAGE.
    //   YESTERDAY THE MOVER WAS ALEX. TODAY THE NAME IS NEKA.
    // Priors, each verified in the archive before it was drawn:
    //   WENDA.PS IS BEING MOVED
    //     OCT 13, 3:37 PM: “ALEX TOOK WENDA.PS AWAY FOR THE 50
    //     YEARS... WENDA.PS IS BEING MOVED BY ALEX.”
    //     SAME HAND, OTHER NAME. ALEX AND NEKA ARE 2, AND ONE.
    //   NOT A SINGLE CLUE
    //     OCT 13, 3:37 PM: “GRAY.PS LOOKED FOR 50 YEARS, DID NOT SEE
    //     A SINGLE CLUE.” “GRAY WAS WALKING THE SAME DIRECTION.”
    //     RIGHT DIRECTION, MOVING TARGET. STILL THE RIGHT DIRECTION.
    //   SENT THE WRONG WAY
    //     OCT 12, 1:27 PM: IN AREA 304 FAKE VOICES SENT GRAY.PS THE
    //     WRONG WAY. WENDA.PS SPARED HIM.
    //     THEN HE WAS MISLED. NOW HE IS SIMPLY OUTPACED.
    const dt = c - 24976.0;
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
    const gr1148=ctx.createLinearGradient(0,top+H,0,top);
    gr1148.addColorStop(0,'rgba(170,120,255,0.22)'); gr1148.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1148.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1148; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS EVEN FARTHER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA TAKES WENDA.PS EVEN FARTHER FROM GRAY.PS.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRAY.PS KEEPS FOLLOWING.” HIS LINE, SAME MESSAGE.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YESTERDAY THE MOVER WAS ALEX. TODAY THE NAME IS NEKA.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 5:32 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1148=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1148, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1148, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS IS BEING MOVED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 3:37 PM: “ALEX TOOK WENDA.PS AWAY FOR THE 50', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YEARS... WENDA.PS IS BEING MOVED BY ALEX.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SAME HAND, OTHER NAME. ALEX AND NEKA ARE 2, AND ONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT A SINGLE CLUE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 3:37 PM: “GRAY.PS LOOKED FOR 50 YEARS, DID NOT SEE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A SINGLE CLUE.” “GRAY WAS WALKING THE SAME DIRECTION.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('RIGHT DIRECTION, MOVING TARGET. STILL THE RIGHT DIRECTION.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1148=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1148, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1148, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SENT THE WRONG WAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:27 PM: IN AREA 304 FAKE VOICES SENT GRAY.PS THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WRONG WAY. WENDA.PS SPARED HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN HE WAS MISLED. NOW HE IS SIMPLY OUTPACED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GRAY.PS KEEPS FOLLOWING.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FIFTY YEARS WAS NOT THE END OF IT. THE WALK GOES ON.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WENDA.PS EVEN FARTHER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
