  } else if(ph===1063){
    // BEAT 1063: FASTER THAN HUMAN EYES.
    // Toby, October 10, 2026, 2:54 PM EDT, his own typing:
    //   “ALEX CAN GO SO FAST, THAT HUMAN EYES CAN’T
    //   COMPREHEND IT, EVEN IF THEY TRY TO SLOW THE
    //   MOTION DOWN... EVEN ATOMS AND AIR.”
    // Priors, each verified in the archive before it was drawn:
    //   PAUSE THE GAME
    //     1:30 PM: “ALEX MOVES SO FAST THAT YOU NEED
    //     TO PAUSE THE GAME TO SEE HIM.”
    //     NOW EVEN SLOWED-DOWN MOTION CAN’T SHOW HIM.
    //   THE ATOMS OF SPACE
    //     OCT 3, 5:12 PM: “PUPAHYA RUNS THE SPEED OF
    //     LIGHT, CUTS THE ATOMS OF SPACE.”
    //     NOW ALEX BREAKS ATOMS AND AIR WITH SPEED ALONE.
    //   JUST AN ISLAND
    //     MAY 30: “ALEX’S WORLD IS ONE MINECRAFT-STYLE/
    //     ANIME GAME WHILE CLASSICS IS A WHOLE PLATFORM.”
    //     NOW ALEX MAKES THE GAME A MINECRAFT STYLE WORLD.
    const dt = c - 23106.0;
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
    const gr1063=ctx.createLinearGradient(0,top+H,0,top);
    gr1063.addColorStop(0,'rgba(140,220,90,0.22)'); gr1063.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1063.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1063; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(140,220,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('FASTER THAN HUMAN EYES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX CAN GO SO FAST, THAT HUMAN EYES CAN’T', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COMPREHEND IT, EVEN IF THEY TRY TO SLOW THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MOTION DOWN... EVEN ATOMS AND AIR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 2:54 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1063=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(140,220,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky1063, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(140,220,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1063, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(140,220,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PAUSE THE GAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:30 PM: “ALEX MOVES SO FAST THAT YOU NEED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO PAUSE THE GAME TO SEE HIM.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW EVEN SLOWED-DOWN MOTION CAN’T SHOW HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ATOMS OF SPACE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 3, 5:12 PM: “PUPAHYA RUNS THE SPEED OF', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIGHT, CUTS THE ATOMS OF SPACE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW ALEX BREAKS ATOMS AND AIR WITH SPEED ALONE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1063=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1063, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1063, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('JUST AN ISLAND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAY 30: “ALEX’S WORLD IS ONE MINECRAFT-STYLE/', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ANIME GAME WHILE CLASSICS IS A WHOLE PLATFORM.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW ALEX MAKES THE GAME A MINECRAFT STYLE WORLD.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX WOULD SLAY FLASH AND SONIC.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALEX MAKES THE GAME A MINECRAFT STYLE WORLD... LIKE HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ FASTER THAN HUMAN EYES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
