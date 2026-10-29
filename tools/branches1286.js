  } else if(ph===1286){
    // BEAT 1286: THE NEW CLASSIC RL TRIO.
    // Toby, October 29, 2026, 6:21 PM EDT, his own typing:
    //   “JECK, MR. BLACK AND GASTER ARE THE NEW CLASSIC RL TRIO.
    //   NEKA WAS LEFT OUT SINCE HE HAD NO PORPOSE TO THEM ANYMORE.”
    //   “MIND? NO, BRAIN.”
    // Priors, each verified in the archive before it was drawn:
    //   RL CYBER HQ
    //     MR. BLACK MAKES THE RL CODE, BASED ON SPRUNKI AND
    //     INCREDIBOX. RLS ARE NOW MUSIC CHARACTERS.
    //     BUT CLASSIC RL IS A HORROR GAME. WONDA MEOWS.
    //   MADE FOR LEARNING
    //     JECK WAS MADE FOR EVERY TASK POSSIBLE. NEKA WAS MADE FOR
    //     ONE TASK: LEARNING.
    //     NEKA GETS MORE AND MORE MEMORY OVERLOADED.
    //   THE SHARK HOOD
    //     LIGHTNING STRIKES SIMON RL AND SIRON RL 40 TIMES. NEKA
    //     BURNS HIS SHARK HOOD INTO ASHES.
    //     THE MALLOW ON HIS CHEST EATS THE ASHES.
    const dt = c - 28012.0;
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
    const gr1286=ctx.createLinearGradient(0,top+H,0,top);
    gr1286.addColorStop(0,'rgba(90,200,170,0.22)'); gr1286.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1286.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1286; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,200,170,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE NEW CLASSIC RL TRIO', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“JECK, MR. BLACK AND GASTER ARE THE NEW CLASSIC RL TRIO.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA WAS LEFT OUT SINCE HE HAD NO PORPOSE TO THEM ANYMORE.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MIND? NO, BRAIN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 29, 6:21 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1286=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,200,170,0.46)';
      ctx.fillRect(cx-W*0.352, ky1286, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,200,170,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1286, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,200,170,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RL CYBER HQ', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK MAKES THE RL CODE, BASED ON SPRUNKI AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('INCREDIBOX. RLS ARE NOW MUSIC CHARACTERS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BUT CLASSIC RL IS A HORROR GAME. WONDA MEOWS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MADE FOR LEARNING', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JECK WAS MADE FOR EVERY TASK POSSIBLE. NEKA WAS MADE FOR', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONE TASK: LEARNING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NEKA GETS MORE AND MORE MEMORY OVERLOADED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1286=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1286, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1286, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE SHARK HOOD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIGHTNING STRIKES SIMON RL AND SIRON RL 40 TIMES. NEKA', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BURNS HIS SHARK HOOD INTO ASHES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MALLOW ON HIS CHEST EATS THE ASHES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL WALKS INTO THE GLASS CHAMBER. NOBODY KNOWS WHEN HE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WILL COME OUT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE NEW CLASSIC RL TRIO ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1287){
    // BEAT 1287: FOUR MALLOWS.
    // Toby, October 29, 2026, 6:24 PM EDT, his own typing:
    //   “I WAS NO LONGER ABLE TO LEARN ABOUT THE GAME ANYMORE, YOU
    //   CHANGED IT ON ME!” NEKA’S TEARS WERE NOW BLOOD.
    //   
    // Priors, each verified in the archive before it was drawn:
    //   FOUR MALLOWS
    //     NEKA WAS EXTREMELY HUNGRY FOR CODE. 3 MORE MALLOWS CAME
    //     OUT, 4 MALLOWS IN TOTAL.
    //     THEY CRUNCHED RL CYBER HQ LIKE AN APPLE.
    //   TOO MANY SCARS TO COUNT
    //     NEKA BURNED ALL THE COSTUMES INTO ASH AND ATE THE ASHES.
    //     HIS SOUL HAS 70 TIMES MORE SCARS.
    //     CLASSIC RL WAS NEARLY DESTROYED.
    //   THE CABIN
    //     EVERYONE ASKS JECK, EVEN GASTER AND MR. BLACK. NEKA IS
    //     STRANDED ON A CABIN BY THE RUINED HQ.
    //     HE CAN NO LONGER UNLOCK HIS PORPOSE.
    const dt = c - 28034.0;
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
    const gr1287=ctx.createLinearGradient(0,top+H,0,top);
    gr1287.addColorStop(0,'rgba(230,90,110,0.22)'); gr1287.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1287.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1287; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(230,90,110,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('FOUR MALLOWS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I WAS NO LONGER ABLE TO LEARN ABOUT THE GAME ANYMORE, YOU', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHANGED IT ON ME!” NEKA’S TEARS WERE NOW BLOOD.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 29, 6:24 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1287=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(230,90,110,0.46)';
      ctx.fillRect(cx-W*0.352, ky1287, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(230,90,110,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1287, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(230,90,110,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FOUR MALLOWS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA WAS EXTREMELY HUNGRY FOR CODE. 3 MORE MALLOWS CAME', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OUT, 4 MALLOWS IN TOTAL.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEY CRUNCHED RL CYBER HQ LIKE AN APPLE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TOO MANY SCARS TO COUNT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA BURNED ALL THE COSTUMES INTO ASH AND ATE THE ASHES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS SOUL HAS 70 TIMES MORE SCARS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('CLASSIC RL WAS NEARLY DESTROYED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1287=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1287, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1287, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CABIN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE ASKS JECK, EVEN GASTER AND MR. BLACK. NEKA IS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STRANDED ON A CABIN BY THE RUINED HQ.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE CAN NO LONGER UNLOCK HIS PORPOSE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JECK HAS MORE WORK THAN ANYONE NEEDS. NEKA CAN NO LONGER DO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ONE THING HE WAS MADE FOR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ FOUR MALLOWS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
