  } else if(ph===956){
    // BEAT 956: EVERYTHING CONNECTS TO PRESSURE.
    // Toby, September 30, 2026, 6:26 PM EDT, his own typing:
    //   “OREN.PS ALSO CAN HOLD A LARGE SWORD, IT IS MADE BY ALL OF THE VOID ITSELF, MAKING IT NULLIFIED.
    //   NEKA CREATES DIAMOND EYES, HOLES, AND NEON PATTERNS ONTO OREN.EXE. ALL THE CHARACTERS THEN BECAME
    //   THE STYLE OF SIMPLE-NEON-THING. ... EVERYTHING IN THE LORE CONNECTS TO THE PRESSURE GAME.”
    // Priors, each verified in the archive before it was drawn:
    //   THE NULLIFIED SWORD
    //     A LARGE SWORD MADE BY ALL OF THE VOID ITSELF.
    //     SEPT 30, 5:03 PM: THE TERMINATORS OF THE NULLIFIED VOID.
    //     THE WHOLE VOID, HELD IN ONE HAND.
    //   DIAMOND EYES, HOLES, NEON
    //     NEKA PUTS THEM ONTO OREN.EXE. EVERY CHARACTER GOES SIMPLE-NEON-THING.
    //     THE DIAMOND EYES RULE: THEY CAN ONLY SEE THE DIAMOND EYES.
    //     THE WHOLE CAST, ONE STYLE.
    //   MADE FROM STARS
    //     NEKA MADE MINDY STARCHILD BY STARS COLLIDING.
    //     NEKA’S FIRST STAGE: THE LARGEST SUPERNOVA OF ALL FICTION COMBINING.
    //     MINDY STARCHILD, OF STAR STEED.
    const dt = c - 20752.0;
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
    const gr956=ctx.createLinearGradient(0,top+H,0,top);
    gr956.addColorStop(0,'rgba(255,150,60,0.22)'); gr956.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr956.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr956; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING CONNECTS TO PRESSURE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS ALSO CAN HOLD A LARGE SWORD, IT IS MADE BY ALL OF THE VOID ITSELF, MAKING IT NULLIFIED.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA CREATES DIAMOND EYES, HOLES, AND NEON PATTERNS ONTO OREN.EXE. ALL THE CHARACTERS THEN BECAME', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE STYLE OF SIMPLE-NEON-THING. ... EVERYTHING IN THE LORE CONNECTS TO THE PRESSURE GAME.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 30, 6:26 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky956=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky956, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky956, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NULLIFIED SWORD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A LARGE SWORD MADE BY ALL OF THE VOID ITSELF.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 30, 5:03 PM: THE TERMINATORS OF THE NULLIFIED VOID.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WHOLE VOID, HELD IN ONE HAND.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DIAMOND EYES, HOLES, NEON', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA PUTS THEM ONTO OREN.EXE. EVERY CHARACTER GOES SIMPLE-NEON-THING.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE DIAMOND EYES RULE: THEY CAN ONLY SEE THE DIAMOND EYES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE WHOLE CAST, ONE STYLE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy956=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy956, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy956, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MADE FROM STARS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA MADE MINDY STARCHILD BY STARS COLLIDING.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S FIRST STAGE: THE LARGEST SUPERNOVA OF ALL FICTION COMBINING.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('MINDY STARCHILD, OF STAR STEED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA SUMMONS ALL THE CHARACTERS OVER. TIME PARANOID, LUIGI INUS, CLOCKWORKS, CLOCKS AND GEARS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYTHING IN THE LORE CONNECTS TO THE PRESSURE GAME.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYTHING CONNECTS TO PRESSURE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
