  } else if(ph===1295){
    // BEAT 1295: A LITTERAL ROBOT.
    // Toby, November 2, 2026, 8:19 PM EDT, his own typing:
    //   “NEKA IS A LITTERAL ROBOT, HAVE NEKA’S SONG.” “NEKA WOULDN’T
    //   WANT ANYONE WHO HE IS OBSESSED WITH TO ESCAPE AND WILL EVEN
    //   BAN THEIR FRIENDS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE VOICE
    //     VERITY SOUNDS NEAR LIKE A ROBOT IN HIS SONG. NEKA TALKS
    //     LIKE A PLAYER. BUT NEKA IS A LITTERAL ROBOT.
    //     A PLAYER WHO HAPPENS TO BE A ROBOT.
    //   IT’S ME, IT’S NEKA
    //     VERITY HAS “IT’S ME, IT’S VERITY.” NOW NEKA HAS HIS OWN.
    //     ROBOT VOICE, BEEPS, AND THE FIVE MINUTE TIMER AT THE END.
    //     THE WORDS ARE THE CHATBOT’S. THE ASK WAS TOBY’S.
    //   BAN THEIR FRIENDS
    //     HE WON’T LET ANYONE HE IS OBSESSED WITH ESCAPE. HE BANS
    //     THEIR FRIENDS SO THE ONLY AVATAR THEY LOVE IS NEKA.
    //     HE CAN BAN ANYONE HE WANTS. NOW WE KNOW WHO.
    const dt = c - 28210.0;
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
    const gr1295=ctx.createLinearGradient(0,top+H,0,top);
    gr1295.addColorStop(0,'rgba(196,150,255,0.22)'); gr1295.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1295.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1295; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(196,150,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A LITTERAL ROBOT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS A LITTERAL ROBOT, HAVE NEKA’S SONG.” “NEKA WOULDN’T', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WANT ANYONE WHO HE IS OBSESSED WITH TO ESCAPE AND WILL EVEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BAN THEIR FRIENDS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 2, 8:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1295=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(196,150,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1295, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(196,150,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1295, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(196,150,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VOICE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VERITY SOUNDS NEAR LIKE A ROBOT IN HIS SONG. NEKA TALKS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIKE A PLAYER. BUT NEKA IS A LITTERAL ROBOT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A PLAYER WHO HAPPENS TO BE A ROBOT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT’S ME, IT’S NEKA', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('VERITY HAS “IT’S ME, IT’S VERITY.” NOW NEKA HAS HIS OWN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ROBOT VOICE, BEEPS, AND THE FIVE MINUTE TIMER AT THE END.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE WORDS ARE THE CHATBOT’S. THE ASK WAS TOBY’S.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1295=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1295, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1295, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BAN THEIR FRIENDS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE WON’T LET ANYONE HE IS OBSESSED WITH ESCAPE. HE BANS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEIR FRIENDS SO THE ONLY AVATAR THEY LOVE IS NEKA.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE CAN BAN ANYONE HE WANTS. NOW WE KNOW WHO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A LITTERAL ROBOT WITH A SONG OF HIS OWN. HELLO. ALL WORDS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ARE GOOD.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A LITTERAL ROBOT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
