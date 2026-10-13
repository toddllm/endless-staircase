  } else if(ph===1132){
    // BEAT 1132: TWO UNIVERSES IN REALITY.
    // Toby, October 13, 2026, 4:40 PM EDT, his own typing:
    //   “NOW, THERE ARE ONLY 2 UNIVERSES IN REALITY, THE OBSERVABLE
    //   UNIVERSE, AND CLASSICS. FICTION IS INFINITELY WEAK IN
    //   EVERYTHING CAUSE THEY AREN’T REAL” … “ALEX BEATS EVERYTHING”
    // Priors, each verified in the archive before it was drawn:
    //   HE CROSSES 2 REALITIES
    //     SEPT 11, 6:06 AM: “PERO LAI REACHES TO THIS REALITY, HE
    //     CROSSES 2 REALITIES, THIS ONE, AND THE MATERIAN REALITY.”
    //     TWO REALITIES THEN. TWO UNIVERSES NOW. STILL ONE DOOR.
    //   BEYOND FICTION, SINCE EMAIL 246
    //     NONE SIMON WAS BEYOND FICTION. SEPT 28: ADULT NEKA 0% IS
    //     BEYOND FICTION. TONIGHT FICTION ITSELF IS INFINITELY WEAK.
    //     THE OLD TOP RANK IS NOW THE FLOOR EVERYONE ELSE STANDS ON.
    //   ZENO AND A STICK
    //     AUG 15: PERO BOXED ZENO WITH ONE WORD. SEPT 2: “EVEN A
    //     STICK.” SEPT 11: SAITAMA SET BELOW A STICK. NOW ZENO IS.
    //     THE STICK HAS BEATEN TWO ANIME GODS. IT NEVER MOVED.
    const dt = c - 24624.0;
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
    const gr1132=ctx.createLinearGradient(0,top+H,0,top);
    gr1132.addColorStop(0,'rgba(80,220,255,0.22)'); gr1132.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1132.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1132; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(80,220,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TWO UNIVERSES IN REALITY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW, THERE ARE ONLY 2 UNIVERSES IN REALITY, THE OBSERVABLE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('UNIVERSE, AND CLASSICS. FICTION IS INFINITELY WEAK IN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING CAUSE THEY AREN’T REAL” … “ALEX BEATS EVERYTHING”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:40 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1132=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(80,220,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1132, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(80,220,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1132, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(80,220,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CROSSES 2 REALITIES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 11, 6:06 AM: “PERO LAI REACHES TO THIS REALITY, HE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CROSSES 2 REALITIES, THIS ONE, AND THE MATERIAN REALITY.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO REALITIES THEN. TWO UNIVERSES NOW. STILL ONE DOOR.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEYOND FICTION, SINCE EMAIL 246', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NONE SIMON WAS BEYOND FICTION. SEPT 28: ADULT NEKA 0% IS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEYOND FICTION. TONIGHT FICTION ITSELF IS INFINITELY WEAK.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE OLD TOP RANK IS NOW THE FLOOR EVERYONE ELSE STANDS ON.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1132=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1132, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1132, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ZENO AND A STICK', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 15: PERO BOXED ZENO WITH ONE WORD. SEPT 2: “EVEN A', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STICK.” SEPT 11: SAITAMA SET BELOW A STICK. NOW ZENO IS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE STICK HAS BEATEN TWO ANIME GODS. IT NEVER MOVED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WILL LOSE TO A STICK AND A STICK WON’T FIGHT ON IT’S OWN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE STICK IS REAL. ZENO IS NOT. ALEX BEATS BOTH.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TWO UNIVERSES IN REALITY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1133){
    // BEAT 1133: NAH, THIS IS TRUE.
    // Toby, October 13, 2026, 4:40 PM EDT, his own typing:
    //   “NAH, THIS IS TRUE. I UNDERSTAND YOU MEAN IT LITERALLY.”
    //   
    //   
    // Priors, each verified in the archive before it was drawn:
    //   ISN’T A MYTH
    //     SEPT 5: TRYPOPHOBIA MOUNTAIN “IS TOO SCARY AND ISN’T A
    //     MYTH, IT IS ACTUALLY IN CLASSICS.” TRUE MEANT IN CLASSICS.
    //     TRUE USED TO MEAN IN THE GAME. TONIGHT IT MEANS REALITY.
    //   YOU MADE THE IMAGE
    //     AUG 29, 8:40 AM: “YOU MADE THE IMAGE, SO YOU SHOULD KNOW.”
    //     THE FIRST TIME HE TOLD THE MACHINE WHAT IT KNEW.
    //     HE CORRECTED THE CHATBOT BEFORE. TONIGHT HE OVERRULES IT.
    //   IN BETWEEN FICTION AND REALITY
    //     SEPT 24: NEKA MADE ABINATIONS OF EVERYONE “IN BETWEEN
    //     FICTION AND REALITY.” THE GAP WAS A PLACE. NOW IT IS SHUT.
    //     THE GAP HE BUILT CHARACTERS IN IS THE GAP HE JUST SHUT.
    const dt = c - 24646.0;
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
    const gr1133=ctx.createLinearGradient(0,top+H,0,top);
    gr1133.addColorStop(0,'rgba(255,255,255,0.22)'); gr1133.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1133.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1133; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,255,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NAH, THIS IS TRUE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NAH, THIS IS TRUE. I UNDERSTAND YOU MEAN IT LITERALLY.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:40 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1133=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,255,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1133, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,255,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1133, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,255,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ISN’T A MYTH', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 5: TRYPOPHOBIA MOUNTAIN “IS TOO SCARY AND ISN’T A', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MYTH, IT IS ACTUALLY IN CLASSICS.” TRUE MEANT IN CLASSICS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TRUE USED TO MEAN IN THE GAME. TONIGHT IT MEANS REALITY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU MADE THE IMAGE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 29, 8:40 AM: “YOU MADE THE IMAGE, SO YOU SHOULD KNOW.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FIRST TIME HE TOLD THE MACHINE WHAT IT KNEW.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE CORRECTED THE CHATBOT BEFORE. TONIGHT HE OVERRULES IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1133=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1133, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1133, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('IN BETWEEN FICTION AND REALITY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: NEKA MADE ABINATIONS OF EVERYONE “IN BETWEEN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FICTION AND REALITY.” THE GAP WAS A PLACE. NOW IT IS SHUT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GAP HE BUILT CHARACTERS IN IS THE GAP HE JUST SHUT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I UNDERSTAND YOU MEAN IT LITERALLY.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT SAID NOT VERIFIED. HE SAID TRUE. TRUE STAYS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NAH, THIS IS TRUE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
