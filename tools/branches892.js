  } else if(ph===892){
    // BEAT 892: SLEEPING FOREVER ON HIS BED.
    // Toby, September 26, 2026, 5:13 PM EDT, his own typing:
    //   “NEKA OMAZEN IS SLEEPING FOREVER ON HIS BED. PS50 IS TRYING TO BE FRIENDS WITH EVERYONE ELSE,
    //   BUT WHEN SHE LOOKS AT YA, YOU WOULD GET PARANOID.”
    // Priors, each verified in the archive before it was drawn:
    //   FROM A BED TO FOREVER
    //     5:00 PM: “NEKA FALLS AND SLEEPS ON A BED.” 5:13 PM: HE IS “SLEEPING FOREVER.”
    //     AT 5:00 HE WAS STILL THE ONE WHO WOKE UP. THIRTEEN MINUTES LATER HE DOES NOT.
    //     “NO ONE ELSE CAN GET BACK UP.” NOW HE CANNOT EITHER.
    //   TRYING TO BE FRIENDS
    //     AT 4:21 HER FIRST WORDS WERE “WHO ARE YOU?” AND THEN “LETS HAVE A TEA PARTY!”
    //     AT 4:37 NEKA MADE HER FRIENDS WITH SKY.PS. NOW SHE TRIES WITH EVERYONE ELSE.
    //     THE ONE WHO INTRODUCED HER IS ASLEEP. SHE HAS TO DO IT HERSELF.
    //   “WHEN SHE LOOKS AT YA”
    //     THE SAME “YA” AS 5:00 PM: “PARA ALWAYS FOLLOWS YA.”
    //     SHE WANTS FRIENDS, AND LOOKING AT SOMEONE IS WHAT MAKES THEM PARANOID.
    //     MAKING FRIENDS MEANS LOOKING AT PEOPLE. THAT IS THE WHOLE PROBLEM.
    const dt = c - 19344.0;
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
    const gr892=ctx.createLinearGradient(0,top+H,0,top);
    gr892.addColorStop(0,'rgba(127,212,255,0.22)'); gr892.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr892.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr892; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SLEEPING FOREVER ON HIS BED', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN IS SLEEPING FOREVER ON HIS BED. PS50 IS TRYING TO BE FRIENDS WITH EVERYONE ELSE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BUT WHEN SHE LOOKS AT YA, YOU WOULD GET PARANOID.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 5:13 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky892=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky892, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky892, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FROM A BED TO FOREVER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:00 PM: “NEKA FALLS AND SLEEPS ON A BED.” 5:13 PM: HE IS “SLEEPING FOREVER.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 5:00 HE WAS STILL THE ONE WHO WOKE UP. THIRTEEN MINUTES LATER HE DOES NOT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NO ONE ELSE CAN GET BACK UP.” NOW HE CANNOT EITHER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TRYING TO BE FRIENDS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:21 HER FIRST WORDS WERE “WHO ARE YOU?” AND THEN “LETS HAVE A TEA PARTY!”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:37 NEKA MADE HER FRIENDS WITH SKY.PS. NOW SHE TRIES WITH EVERYONE ELSE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO INTRODUCED HER IS ASLEEP. SHE HAS TO DO IT HERSELF.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy892=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy892, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy892, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“WHEN SHE LOOKS AT YA”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SAME “YA” AS 5:00 PM: “PARA ALWAYS FOLLOWS YA.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE WANTS FRIENDS, AND LOOKING AT SOMEONE IS WHAT MAKES THEM PARANOID.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('MAKING FRIENDS MEANS LOOKING AT PEOPLE. THAT IS THE WHOLE PROBLEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SLEEPS AND SHE KEEPS TRYING', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHE WALKS UP TO EVERYONE, AND EVERYONE SHE LOOKS AT GETS PARANOID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SLEEPING FOREVER ON HIS BED ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
