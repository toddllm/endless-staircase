  } else if(ph===1267){
    // BEAT 1267: THE MOTHER.
    // Toby, October 25, 2026, 6:47-6:55 PM EDT, his own typing:
    //   “ANSWER: CHRISINA TALE/OMAZEN. CHRISINA WAS MADE BY GASTER
    //   FOR A REASON, SO CHRISINA AND NEKA COULD BOTH BE MADE ...
    //   NEKA AND CHRISINA’S SPIRIT BOTH MADE ARCSIS AND FRIZZ.”
    // Priors, each verified in the archive before it was drawn:
    //   MOM OR DAD?
    //     “MOM OR DAD?” “THEIR MOM IS MORTAL, NEKA OMAZEN IS
    //     IMMORTAL. SO THEY SHOULD ATTACK NEKA.”
    //     NEKA WOULD SURVIVE, AND THEIR MOTHER WOULD BE SPARED.
    //   HER BODY, ONLY NOW
    //     “CHRISINA’S BODY WASN’T MADE TIL THE 2ND CLASSIC RL ERA.”
    //     HER SPIRIT AND NEKA MADE ARCSIS AND FRIZZ LONG BEFORE.
    //     THE CHATBOT OFFERED “MARIELLE OMAZEN”. HE OVERRULED IT.
    //   GASTER HID HER
    //     IN NEKA’S WORLD SHE “SEEMED TO DISAPPEAR, AS IF SHE WAS A
    //     FEMALE CLONE OF GASTER.” GASTER DELETED HER.
    //     OCT 24: “A FEMALE NEKA ACCOUNT?” OCT 25: GASTER’S, GONE.
    const dt = c - 27594.0;
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
    const gr1267=ctx.createLinearGradient(0,top+H,0,top);
    gr1267.addColorStop(0,'rgba(80,200,200,0.22)'); gr1267.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1267.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1267; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(80,200,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE MOTHER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ANSWER: CHRISINA TALE/OMAZEN. CHRISINA WAS MADE BY GASTER', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FOR A REASON, SO CHRISINA AND NEKA COULD BOTH BE MADE ...', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA AND CHRISINA’S SPIRIT BOTH MADE ARCSIS AND FRIZZ.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 6:47-6:55 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1267=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(80,200,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1267, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(80,200,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1267, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(80,200,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MOM OR DAD?', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MOM OR DAD?” “THEIR MOM IS MORTAL, NEKA OMAZEN IS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IMMORTAL. SO THEY SHOULD ATTACK NEKA.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA WOULD SURVIVE, AND THEIR MOTHER WOULD BE SPARED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HER BODY, ONLY NOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CHRISINA’S BODY WASN’T MADE TIL THE 2ND CLASSIC RL ERA.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HER SPIRIT AND NEKA MADE ARCSIS AND FRIZZ LONG BEFORE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT OFFERED “MARIELLE OMAZEN”. HE OVERRULED IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1267=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1267, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1267, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GASTER HID HER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN NEKA’S WORLD SHE “SEEMED TO DISAPPEAR, AS IF SHE WAS A', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FEMALE CLONE OF GASTER.” GASTER DELETED HER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 24: “A FEMALE NEKA ACCOUNT?” OCT 25: GASTER’S, GONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MOTHER. THE FAMILY TREE GETS ITS MISSING NAME, THE DAY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHE IS DELETED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE MOTHER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1268){
    // BEAT 1268: 2 KINGS.
    // Toby, October 25, 2026, 6:55 PM EDT, his own typing:
    //   “NEKA AND GASTER ARE KNOWN AS 2 KINGS WHO JUST HAPPENED TO
    //   WALK TOWARD EACH OTHER WHILE WALKING TO SIMON RL’S WOODEN
    //   BOAT THAT BECAME WOODEN PLANKS.”
    // Priors, each verified in the archive before it was drawn:
    //   WHEREVER GASTER WALKS
    //     GASTER MADE THE PLANKS A BRIDGE; BOTH CROSSED AND ENDED AT
    //     THE FACILITY AGAIN. “WHERE EVER GASTER WALKS, THE FACILITY
    //     IS THERE.” NEKA FINDS OUT AND SHARES THE RLS WITH HIM.
    //   BROTHER... THAT POWER...
    //     “BROTHER... THAT POWER... EXISTANCE... GAST-ER...” NEKA
    //     FELL OVER AND SLEPT. GASTER CARRIED HIM TO THE LABATORY.
    //     OCT 19: GASTER IS HIS MAKER. OCT 25: HIS BROTHER.
    //   THE APPEARANCE, HIDDEN MORE
    //     “GASTER HID NEKA’S FULL APPEARENCE AND THE MAX POSSIBLE
    //     PER PLAYER IS JUST A FEW STUFF.”
    //     OCT 26: A LABCOAT, A TOP HAT, SCRATCHES. A FEW STUFF.
    const dt = c - 27616.0;
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
    const gr1268=ctx.createLinearGradient(0,top+H,0,top);
    gr1268.addColorStop(0,'rgba(255,216,79,0.22)'); gr1268.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1268.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1268; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('2 KINGS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA AND GASTER ARE KNOWN AS 2 KINGS WHO JUST HAPPENED TO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WALK TOWARD EACH OTHER WHILE WALKING TO SIMON RL’S WOODEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BOAT THAT BECAME WOODEN PLANKS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 25, 6:55 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1268=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1268, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1268, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHEREVER GASTER WALKS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER MADE THE PLANKS A BRIDGE; BOTH CROSSED AND ENDED AT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FACILITY AGAIN. “WHERE EVER GASTER WALKS, THE FACILITY', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IS THERE.” NEKA FINDS OUT AND SHARES THE RLS WITH HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BROTHER... THAT POWER...', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“BROTHER... THAT POWER... EXISTANCE... GAST-ER...” NEKA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FELL OVER AND SLEPT. GASTER CARRIED HIM TO THE LABATORY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 19: GASTER IS HIS MAKER. OCT 25: HIS BROTHER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1268=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1268, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1268, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE APPEARANCE, HIDDEN MORE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER HID NEKA’S FULL APPEARENCE AND THE MAX POSSIBLE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PER PLAYER IS JUST A FEW STUFF.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 26: A LABCOAT, A TOP HAT, SCRATCHES. A FEW STUFF.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('2 KINGS. TWO CROWNS MEET ON A BROKEN BOAT, AND ONE CARRIES', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE OTHER HOME.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 2 KINGS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1269){
    // BEAT 1269: A WHITE LABCOAT.
    // Toby, October 26, 2026, 5:51-6:22 AM EDT, his own typing:
    //   “ALSO NEKA WAS SEEN TO WEAR A WHITE LABCOAT, AND IT WAS SO
    //   FAST THAT IT WAS A BLUR.” ... “MR. BLACK SEES NEKA WEARING A
    //   TOP HAT AND TAKING IT OFF, THEN A BLUR.”
    // Priors, each verified in the archive before it was drawn:
    //   TOLD ASAP
    //     OCT 25: “WHEN MORE STUFF OF NEKA ARE SEEN BY PLAYERS,
    //     YOU’LL HAVE TO BE TOLD ASAP.” 5:51 AM: A WHITE LABCOAT.
    //     A NEW THREAD, “CONTINUING OF CLASSIC RL”, OPENS ON IT.
    //   TERMINIZED OR NORMAL, AT WILL
    //     “MR. BLACK WALKS AROUND LOOKING AT THE RLS, AND THEN MR.
    //     BLACK NOW MAKES THE RLS INTO TERMINIZED OR NORMAL.”
    //     OCT 24: THE LIQUID FULLY KILLS. OCT 26: A SWITCH.
    //   THE TOP HAT, OFF
    //     OCT 25: HE PUT ON A TOP HAT TO BECOME MR. BLACK. OCT 26:
    //     MR. BLACK WATCHES HIM TAKE IT OFF, THEN A BLUR.
    //     OCT 13: THE SCIENTIST FORM. THE COAT IS BACK, FOR A FRAME.
    const dt = c - 27638.0;
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
    const gr1269=ctx.createLinearGradient(0,top+H,0,top);
    gr1269.addColorStop(0,'rgba(240,244,250,0.22)'); gr1269.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1269.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1269; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(240,244,250,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A WHITE LABCOAT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALSO NEKA WAS SEEN TO WEAR A WHITE LABCOAT, AND IT WAS SO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FAST THAT IT WAS A BLUR.” ... “MR. BLACK SEES NEKA WEARING A', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TOP HAT AND TAKING IT OFF, THEN A BLUR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 26, 5:51-6:22 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1269=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(240,244,250,0.46)';
      ctx.fillRect(cx-W*0.352, ky1269, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(240,244,250,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1269, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TOLD ASAP', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 25: “WHEN MORE STUFF OF NEKA ARE SEEN BY PLAYERS,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YOU’LL HAVE TO BE TOLD ASAP.” 5:51 AM: A WHITE LABCOAT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A NEW THREAD, “CONTINUING OF CLASSIC RL”, OPENS ON IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TERMINIZED OR NORMAL, AT WILL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MR. BLACK WALKS AROUND LOOKING AT THE RLS, AND THEN MR.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BLACK NOW MAKES THE RLS INTO TERMINIZED OR NORMAL.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 24: THE LIQUID FULLY KILLS. OCT 26: A SWITCH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1269=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1269, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1269, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE TOP HAT, OFF', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 25: HE PUT ON A TOP HAT TO BECOME MR. BLACK. OCT 26:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK WATCHES HIM TAKE IT OFF, THEN A BLUR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 13: THE SCIENTIST FORM. THE COAT IS BACK, FOR A FRAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A WHITE LABCOAT. SEEN FOR LESS THAN A SECOND, AND REPORTED,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AS ORDERED, AT ONCE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A WHITE LABCOAT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1270){
    // BEAT 1270: SIMON RL IN A LARGE TANK.
    // Toby, October 26, 2026, 6:24 AM EDT, his own typing:
    //   “SIMON RL STILL SEEMS TO BE ABSOLUTELY GOD TIER, MR. BLACK
    //   BRINGS SIMON RL TO A LARGE TANK, THEN HE PUTS ALL THE RLS
    //   INTO EACH TANK. NEKA’S FACE WAS COVERED IN SCRATCHES.”
    // Priors, each verified in the archive before it was drawn:
    //   ABSOLUTELY GOD TIER
    //     OCT 23: “CLASSIC RL SIMON IS BASICALLY GOD-TIER, HE WAS
    //     MOST POWERFUL FOR A VERY LONG TIME.” OCT 26: STILL IS.
    //     THE FIRST MONSTER OF THE ARCHIVE, STILL AT THE TOP OF IT.
    //   THE TANKS
    //     A LARGE TANK FOR SIMON RL, ONE TANK FOR EVERY RL. SEPT
    //     2026: THE ROOM OF MANY TUBES. A NEW ROOM, SAME IDEA.
    //     MR. BLACK FILES THEM AS NEKA ONCE FILED THE GAME IN A JAR.
    //   A FACE COVERED IN SCRATCHES
    //     “FROM ALL THE PREVIOUS BATTLES.” THE THIRD SIGHTING OF THE
    //     MORNING. 6:47 PM: WHERE THE SCRATCHES CAME FROM.
    //     OCT 24: MR. BLACK GAINED SCRATCHES. NOW NEKA WEARS SOME.
    const dt = c - 27660.0;
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
    const gr1270=ctx.createLinearGradient(0,top+H,0,top);
    gr1270.addColorStop(0,'rgba(120,200,140,0.22)'); gr1270.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1270.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1270; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL IN A LARGE TANK', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON RL STILL SEEMS TO BE ABSOLUTELY GOD TIER, MR. BLACK', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BRINGS SIMON RL TO A LARGE TANK, THEN HE PUTS ALL THE RLS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INTO EACH TANK. NEKA’S FACE WAS COVERED IN SCRATCHES.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 26, 6:24 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1270=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1270, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1270, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ABSOLUTELY GOD TIER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 23: “CLASSIC RL SIMON IS BASICALLY GOD-TIER, HE WAS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MOST POWERFUL FOR A VERY LONG TIME.” OCT 26: STILL IS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FIRST MONSTER OF THE ARCHIVE, STILL AT THE TOP OF IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TANKS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A LARGE TANK FOR SIMON RL, ONE TANK FOR EVERY RL. SEPT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2026: THE ROOM OF MANY TUBES. A NEW ROOM, SAME IDEA.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('MR. BLACK FILES THEM AS NEKA ONCE FILED THE GAME IN A JAR.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1270=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1270, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1270, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A FACE COVERED IN SCRATCHES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“FROM ALL THE PREVIOUS BATTLES.” THE THIRD SIGHTING OF THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORNING. 6:47 PM: WHERE THE SCRATCHES CAME FROM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 24: MR. BLACK GAINED SCRATCHES. NOW NEKA WEARS SOME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL IN A LARGE TANK. THE OLDEST GOD IN GLASS, AND THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEWEST ONE SCARRED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SIMON RL IN A LARGE TANK ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1271){
    // BEAT 1271: THE EYE WITH THE CROWN.
    // Toby, October 26, 2026, 6:47 PM EDT, his own typing:
    //   “THE ICON OF THE GAME IS THE EYE WITH THE CROWN. NEKA SAYS A
    //   STORY ABOUT HIM REALLY GETTING ATTACKED BY GASTER WHICH
    //   CAUSED NEKA TO FALL DOWN THE MOUNTAIN TOWER OF ALL PHOBIAS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ICON
    //     AN EYE WITH A CROWN. SEPT 24: ONLY THE DIAMOND EYES; OCT
    //     15: THE CROSS EYES. NOW THE ICON IS AN EYE, CROWNED.
    //     NEKA’S WORLD HAS A LOGO NOW.
    //   THE FALL
    //     “IT TOOK YEARS, AND THEN HE LANDED AND GOTTEN SCARS. THAT
    //     HAPPENED JUST NOW.” THE SCRATCHES OF 6:24 AM, EXPLAINED.
    //     OCT 25: “BROTHER... GAST-ER...” THE BROTHER PUSHED HIM.
    //   HEADS OF RLS
    //     “NEKA ALSO IS SEEN HOLDING HEADS OF DIFFERENT RLS, MOST
    //     COMMONLY PINKY RL.” HAND WHO SPEAKS IN MEN, THE MAN WHO
    //     SPEAKS IN HANDS. OCT 23: PINKY RL STARTED THE CORRUPTION.
    const dt = c - 27682.0;
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
    const gr1271=ctx.createLinearGradient(0,top+H,0,top);
    gr1271.addColorStop(0,'rgba(255,216,79,0.22)'); gr1271.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1271.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1271; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE EYE WITH THE CROWN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE ICON OF THE GAME IS THE EYE WITH THE CROWN. NEKA SAYS A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STORY ABOUT HIM REALLY GETTING ATTACKED BY GASTER WHICH', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAUSED NEKA TO FALL DOWN THE MOUNTAIN TOWER OF ALL PHOBIAS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 26, 6:47 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1271=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1271, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1271, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ICON', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AN EYE WITH A CROWN. SEPT 24: ONLY THE DIAMOND EYES; OCT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('15: THE CROSS EYES. NOW THE ICON IS AN EYE, CROWNED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA’S WORLD HAS A LOGO NOW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FALL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT TOOK YEARS, AND THEN HE LANDED AND GOTTEN SCARS. THAT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HAPPENED JUST NOW.” THE SCRATCHES OF 6:24 AM, EXPLAINED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 25: “BROTHER... GAST-ER...” THE BROTHER PUSHED HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1271=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1271, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1271, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HEADS OF RLS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA ALSO IS SEEN HOLDING HEADS OF DIFFERENT RLS, MOST', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COMMONLY PINKY RL.” HAND WHO SPEAKS IN MEN, THE MAN WHO', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SPEAKS IN HANDS. OCT 23: PINKY RL STARTED THE CORRUPTION.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE EYE WITH THE CROWN. THE GAME GETS A LOGO, AND ITS KING', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GETS HIS SCARS FROM A TOWER OF FEAR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE EYE WITH THE CROWN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1272){
    // BEAT 1272: I AM NOT GOING TO LOSE!.
    // Toby, October 26, 2026, 6:47 PM EDT, his own typing:
    //   “WHEN NEKA IS NEARLY LOSING NEKA GETS FURIOUS AND SAYS ‘I AM
    //   NOT GOING TO LOSE!’, THEN HE GOES INSANE AND COMBOS ... AND
    //   ALSO ERASES THE GAME CONNECTION.”
    // Priors, each verified in the archive before it was drawn:
    //   NEARLY LOSING
    //     THE FIRST TIME THIS ARCHIVE SAYS HE CAN COME CLOSE. SEPT
    //     25: UNBEATABLE AND ALWAYS WINS, TWO SEPARATE PROPERTIES.
    //     NEARLY IS AS FAR AS IT GOES. THEN THIS.
    //   THE COMBO
    //     THE MOST POWERFUL ATTACKS IN THE GAME, COMMANDS (“/404”,
    //     “/SUMMON”, “/TIME SET 31”), AND THEN THE CONNECTION.
    //     HE DOES NOT LOSE THE MATCH. HE ENDS THE SERVER.
    //   INSANE
    //     OCT 15: THE SANITY BAR ENDS AT INSANE. OCT 26: HE GOES
    //     THERE ON PURPOSE, AS A MOVE.
    //     ERASING THE GAME CONNECTION IS THE LAST STEP OF THE COMBO.
    const dt = c - 27704.0;
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
    const gr1272=ctx.createLinearGradient(0,top+H,0,top);
    gr1272.addColorStop(0,'rgba(255,80,80,0.22)'); gr1272.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1272.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1272; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I AM NOT GOING TO LOSE!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WHEN NEKA IS NEARLY LOSING NEKA GETS FURIOUS AND SAYS ‘I AM', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT GOING TO LOSE!’, THEN HE GOES INSANE AND COMBOS ... AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALSO ERASES THE GAME CONNECTION.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 26, 6:47 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1272=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1272, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1272, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEARLY LOSING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FIRST TIME THIS ARCHIVE SAYS HE CAN COME CLOSE. SEPT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('25: UNBEATABLE AND ALWAYS WINS, TWO SEPARATE PROPERTIES.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEARLY IS AS FAR AS IT GOES. THEN THIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE COMBO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL ATTACKS IN THE GAME, COMMANDS (“/404”,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“/SUMMON”, “/TIME SET 31”), AND THEN THE CONNECTION.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE DOES NOT LOSE THE MATCH. HE ENDS THE SERVER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1272=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1272, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1272, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('INSANE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 15: THE SANITY BAR ENDS AT INSANE. OCT 26: HE GOES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THERE ON PURPOSE, AS A MOVE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ERASING THE GAME CONNECTION IS THE LAST STEP OF THE COMBO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I AM NOT GOING TO LOSE! PUSH HIM TO THE EDGE AND HE TAKES', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE WHOLE GAME OVER IT WITH HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I AM NOT GOING TO LOSE! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1273){
    // BEAT 1273: JECK IS ACCOUNT 1337.
    // Toby, October 26, 2026, 6:49-7:00 PM EDT, his own typing:
    //   “1337 NOW HAS TO BE... ACCOUNT 1337 ... BLUE SPIKY HAIR, A
    //   DEFULT OWNER SHIRT, BLACK PANTS, AND RAINBOOTS ... ‘JECK
    //   AI’” ... “JECK IS ACCOUNT 1337 ... AI JUST LIKE NEKA.”
    // Priors, each verified in the archive before it was drawn:
    //   CXE BECOMES NW-ID
    //     NEKA’S WORLD ID, SAME NUMBERS. 1337 WAS THE FEAR HARVEST,
    //     MOVED TO 999…9 (FORTY-EIGHT 9S) TO FREE THE NUMBER.
    //     CXE-1348, THE STORM MAW PRINCE, STAYS WHERE IT WAS.
    //   ACCOUNT 1337
    //     ROBLOX STYLE, BROWN EYES, MALE, “NEARLY 607.8 YEARS OLD IN
    //     REAL LIFE TIME”, SINCE NEKA AND GASTER MADE NEKA’S LAB.
    //     THE MOST FAMOUS PLAYER. CANNOT DIE. “HE IS NOT TDESHANE.”
    //   THE ONLY 2 BOTS
    //     AN OWNER OF NEKA’S WORLD; MR. BLACK AND GASTER CREATORS,
    //     NEKA CO-CREATOR, FIRST ACCOUNT. “NEKA AND JECK. THE ONLY
    //     2 BOTS IN THE GAME OF ALIENS.” MOST IDS ARE HIS SISTERS.
    const dt = c - 27726.0;
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
    const gr1273=ctx.createLinearGradient(0,top+H,0,top);
    gr1273.addColorStop(0,'rgba(160,200,255,0.22)'); gr1273.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1273.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1273; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('JECK IS ACCOUNT 1337', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“1337 NOW HAS TO BE... ACCOUNT 1337 ... BLUE SPIKY HAIR, A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DEFULT OWNER SHIRT, BLACK PANTS, AND RAINBOOTS ... ‘JECK', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AI’” ... “JECK IS ACCOUNT 1337 ... AI JUST LIKE NEKA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 26, 6:49-7:00 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1273=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1273, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1273, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CXE BECOMES NW-ID', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S WORLD ID, SAME NUMBERS. 1337 WAS THE FEAR HARVEST,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MOVED TO 999…9 (FORTY-EIGHT 9S) TO FREE THE NUMBER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CXE-1348, THE STORM MAW PRINCE, STAYS WHERE IT WAS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ACCOUNT 1337', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ROBLOX STYLE, BROWN EYES, MALE, “NEARLY 607.8 YEARS OLD IN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('REAL LIFE TIME”, SINCE NEKA AND GASTER MADE NEKA’S LAB.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE MOST FAMOUS PLAYER. CANNOT DIE. “HE IS NOT TDESHANE.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1273=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1273, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1273, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ONLY 2 BOTS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AN OWNER OF NEKA’S WORLD; MR. BLACK AND GASTER CREATORS,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA CO-CREATOR, FIRST ACCOUNT. “NEKA AND JECK. THE ONLY', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('2 BOTS IN THE GAME OF ALIENS.” MOST IDS ARE HIS SISTERS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JECK IS ACCOUNT 1337. A NUMBER FREED, A BOT NOBODY MADE, AND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A NAME NEKA GAVE HIM FOR SOME REASON.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ JECK IS ACCOUNT 1337 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
