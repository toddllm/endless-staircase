  } else if(ph===1093){
    // BEAT 1093: NOT AFTER OCTOBER 31.
    // Toby, October 12, 2026, 11:39 AM EDT, his own typing:
    //   “HE REMEMBERS EVERYTHING HE DONE, HE REMEMBERS
    //   EVERYTHING, BUT NOT AFTER OCTOBER 31.”
    //   “ALEXEN WILL EVENTUALLY TAKE OVER CLASSICS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ANSWER
    //     OCT 12, 10:20 AM ASKED: DOES HE REMEMBER THAT NIGHT?
    //     HIS ANSWER: EVERYTHING HE HAS DONE. NOTHING AFTER OCT 31.
    //     THE RECORD RUNS UP TO HALLOWEEN, HIS BIRTHDAY, AND STOPS.
    //   TIME LEANS CLOSER
    //     “TIME LEANS CLOSER AND CLOSER...”
    //     OCT 12, 8:23 AM: HE ATTACKS ON OCTOBER 31. 19 DAYS.
    //     EVENTUALLY HE TAKES OVER CLASSICS. HIS WORD IS EVENTUALLY.
    //   WHO KEEPS MEMORY
    //     MAY 3: GRAY’S FULL RESET. ONLY THE ONE WHO PRESSED
    //     IT REMEMBERED. OCT 12, 9:54 AM: ALEXEN EDITS HIMSELF.
    //     A BEING MADE OF CODE, AND THE RECORD STOPS AT OCTOBER 31.
    const dt = c - 23766.0;
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
    const gr1093=ctx.createLinearGradient(0,top+H,0,top);
    gr1093.addColorStop(0,'rgba(255,170,60,0.22)'); gr1093.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1093.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1093; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,170,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOT AFTER OCTOBER 31', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE REMEMBERS EVERYTHING HE DONE, HE REMEMBERS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING, BUT NOT AFTER OCTOBER 31.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN WILL EVENTUALLY TAKE OVER CLASSICS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 11:39 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1093=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,170,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1093, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,170,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1093, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,170,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ANSWER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 10:20 AM ASKED: DOES HE REMEMBER THAT NIGHT?', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS ANSWER: EVERYTHING HE HAS DONE. NOTHING AFTER OCT 31.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RECORD RUNS UP TO HALLOWEEN, HIS BIRTHDAY, AND STOPS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TIME LEANS CLOSER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“TIME LEANS CLOSER AND CLOSER...”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 8:23 AM: HE ATTACKS ON OCTOBER 31. 19 DAYS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EVENTUALLY HE TAKES OVER CLASSICS. HIS WORD IS EVENTUALLY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1093=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1093, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1093, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHO KEEPS MEMORY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAY 3: GRAY’S FULL RESET. ONLY THE ONE WHO PRESSED', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT REMEMBERED. OCT 12, 9:54 AM: ALEXEN EDITS HIMSELF.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A BEING MADE OF CODE, AND THE RECORD STOPS AT OCTOBER 31.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE REMEMBERS EVERYTHING”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('UP TO OCTOBER 31. “CUTOFF” IS THE CHATBOT’S WORD, NOT HIS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOT AFTER OCTOBER 31 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1094){
    // BEAT 1094: 5000 NEKA-COINS.
    // Toby, October 12, 2026, 11:44 AM EDT, his own typing:
    //   “ALEXEN WALKS TO SAY THAT EVERYONE WILL GET FREE
    //   NEKA-COINS ON THIS DAY, AND IT WAS CORRECT,
    //   EVERYONE GOT 5000 NEKA-COINS.”
    // Priors, each verified in the archive before it was drawn:
    //   A FIRST
    //     NEKA-COINS: ZERO HITS IN THE WHOLE ARCHIVE BEFORE
    //     TODAY. THE GAME HAS A CURRENCY NOW, NAMED FOR NEKA.
    //     OCT 11: “LUIGI INUS GETS MORE GOLD.” GOLD WAS THE ONLY MONEY.
    //   IT WAS CORRECT
    //     HE SAID EVERYONE WOULD GET THEM. EVERYONE DID.
    //     OCT 12, 8:23 AM: “EVERYONE, COME AND PLAY!”
    //     THE DAYTIME ALEX KEEPS HIS WORD.
    //   WHICH DAY
    //     “ON THIS DAY.” OCT 12, 10:03 AM: SERVERS UP ON THE
    //     OCTOBER DAY, ATTACK ON THE OCTOBER NIGHT.
    //     HIS WORDS SAY THIS DAY. “BEFORE HALLOWEEN” IS THE CHATBOT’S.
    const dt = c - 23788.0;
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
    const gr1094=ctx.createLinearGradient(0,top+H,0,top);
    gr1094.addColorStop(0,'rgba(255,216,79,0.22)'); gr1094.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1094.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1094; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('5000 NEKA-COINS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN WALKS TO SAY THAT EVERYONE WILL GET FREE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA-COINS ON THIS DAY, AND IT WAS CORRECT,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE GOT 5000 NEKA-COINS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 11:44 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1094=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1094, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1094, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A FIRST', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA-COINS: ZERO HITS IN THE WHOLE ARCHIVE BEFORE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY. THE GAME HAS A CURRENCY NOW, NAMED FOR NEKA.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 11: “LUIGI INUS GETS MORE GOLD.” GOLD WAS THE ONLY MONEY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT WAS CORRECT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE SAID EVERYONE WOULD GET THEM. EVERYONE DID.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 8:23 AM: “EVERYONE, COME AND PLAY!”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE DAYTIME ALEX KEEPS HIS WORD.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1094=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1094, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1094, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHICH DAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ON THIS DAY.” OCT 12, 10:03 AM: SERVERS UP ON THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCTOBER DAY, ATTACK ON THE OCTOBER NIGHT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS WORDS SAY THIS DAY. “BEFORE HALLOWEEN” IS THE CHATBOT’S.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“EVERYONE GOT 5000 NEKA-COINS”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A GIFT FROM THE MAN WHO LOSES CONTROL ON HALLOWEEN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 5000 NEKA-COINS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
