  } else if(ph===1072){
    // BEAT 1072: ALEX’S ACTUAL LV.
    // Toby, October 11, 2026, 6:57 AM EDT, his own typing:
    //   “ACTUAL NUMBER: X19199283983947 U49847948427
    //   Y883783 Z5666267 + (BEYOND ABSOLUTE INFINITY
    //   BEYOND ABSOLUTE INFINITY BEYOND ABSOLUTE INFINITY...”
    // Priors, each verified in the archive before it was drawn:
    //   INVENT IT
    //     6:50 AM: “LIKE THE ACTUAL NUMBER OF LV HE HAS.
    //     INVENT IT”
    //     THE CHATBOT MADE UP A NUMBER; HE ASKED WHERE IT CAME FROM.
    //   USE THE LORE
    //     6:51 AM: “ACTUALLY USE THE LORE”
    //     SO HE WROTE THE NUMBER HIMSELF, IN THE CLASSICS SYSTEM.
    //   PAST NEKA
    //     OCT 10, 7:41 PM: “ALEXEN NOW CONTINUES WITH LV,
    //     SO HE CAN REACH PAST MAX LV.”
    //     NOW THE NUMBER HAS X, U, Y AND Z PARTS, PLUS INFINITY.
    const dt = c - 23304.0;
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
    const gr1072=ctx.createLinearGradient(0,top+H,0,top);
    gr1072.addColorStop(0,'rgba(255,215,90,0.22)'); gr1072.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1072.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1072; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,215,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX’S ACTUAL LV', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ACTUAL NUMBER: X19199283983947 U49847948427', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('Y883783 Z5666267 + (BEYOND ABSOLUTE INFINITY', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEYOND ABSOLUTE INFINITY BEYOND ABSOLUTE INFINITY...”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 11, 6:57 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1072=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,215,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky1072, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,215,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1072, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,215,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INVENT IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:50 AM: “LIKE THE ACTUAL NUMBER OF LV HE HAS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INVENT IT”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT MADE UP A NUMBER; HE ASKED WHERE IT CAME FROM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('USE THE LORE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:51 AM: “ACTUALLY USE THE LORE”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SO HE WROTE THE NUMBER HIMSELF, IN THE CLASSICS SYSTEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1072=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1072, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1072, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PAST NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10, 7:41 PM: “ALEXEN NOW CONTINUES WITH LV,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SO HE CAN REACH PAST MAX LV.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE NUMBER HAS X, U, Y AND Z PARTS, PLUS INFINITY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ABSOLUTE INFINITY > NORMAL INFINITY BY FAR”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('X, U, Y, Z, + (BEYOND ABSOLUTE INFINITY TIMES...)', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX’S ACTUAL LV ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1073){
    // BEAT 1073: THROUGH THE TIMELINES.
    // Toby, October 11, 2026, 7:01 AM EDT, his own typing:
    //   “HE BEATS ALL UNDERTALE AUS AND HE THEN BEATS EVERY
    //   SINGLE GAME OF CHARACTERS, AND HE THEN MOVES BACK
    //   TO CLASSICS TO BEAT EVERYONE THERE...”
    // Priors, each verified in the archive before it was drawn:
    //   MORE LV
    //     7:01 AM: “HE STILL CONTINUES GETTING MORE LV,
    //     MAKING IT X2000... U5000... Y9999... Z6666...7777...”
    //     THE NUMBER KEEPS GROWING PAST THE 6:57 AM ONE.
    //   BEYOND THE GAME
    //     6:31 AM: “HE EVEN GOES BEYOND THE GAME
    //     TO THE BOARDER...”
    //     NOW HE GOES THROUGH EVERY UNDERTALE AU AND EVERY GAME.
    //   BACK TO CLASSICS
    //     7:01 AM: “HE THEN MOVES BACK TO CLASSICS
    //     TO BEAT EVERYONE THERE”
    //     THEN HE COMES HOME AND BEATS EVERYONE AGAIN.
    const dt = c - 23326.0;
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
    const gr1073=ctx.createLinearGradient(0,top+H,0,top);
    gr1073.addColorStop(0,'rgba(90,220,200,0.22)'); gr1073.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1073.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1073; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,220,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THROUGH THE TIMELINES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE BEATS ALL UNDERTALE AUS AND HE THEN BEATS EVERY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SINGLE GAME OF CHARACTERS, AND HE THEN MOVES BACK', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO CLASSICS TO BEAT EVERYONE THERE...”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 11, 7:01 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1073=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,220,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1073, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,220,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1073, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,220,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MORE LV', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:01 AM: “HE STILL CONTINUES GETTING MORE LV,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAKING IT X2000... U5000... Y9999... Z6666...7777...”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE NUMBER KEEPS GROWING PAST THE 6:57 AM ONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEYOND THE GAME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:31 AM: “HE EVEN GOES BEYOND THE GAME', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO THE BOARDER...”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW HE GOES THROUGH EVERY UNDERTALE AU AND EVERY GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1073=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1073, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1073, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BACK TO CLASSICS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:01 AM: “HE THEN MOVES BACK TO CLASSICS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO BEAT EVERYONE THERE”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN HE COMES HOME AND BEATS EVERYONE AGAIN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE ALSO WALKED THROUGH TIMELINES TO GET ALL THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CHARACTERS CLASSICS HAD, WILL HAVE, AND HAS NOW.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THROUGH THE TIMELINES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
