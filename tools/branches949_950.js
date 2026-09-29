  } else if(ph===949){
    // BEAT 949: NEKA TREATMENT NEKA IS G.O.D..
    // Toby, September 29, 2026, 7:18 PM EDT, his own typing:
    //   “NOW NEKA TREATMENT NEKA (HUMAN WITH LABCOAT AND NOW IS G.O.D.),
    //   WITH POWER LEVEL OF INSANITY, AND HE WINS, BACON FADES. THE GAME GLITCHES AND THE POWER
    //   LEVEL OF BACON AND BACON BOTH FALL AND SHATTER AND GLITCHES.”
    // Priors, each verified in the archive before it was drawn:
    //   A HUMAN IN A LAB COAT
    //     3:31 PM TODAY: NEKA WEARS HIS WHITE LAB COAT.
    //     7:18 PM: NEKA TREATMENT NEKA IS A HUMAN WITH A LAB COAT.
    //     THE COOLEST FORM KEPT THE LAB COAT.
    //   BACON, AGAIN
    //     SEPT 28: BACON’S POWER LEVEL SHOOK, FELL, AND TELEPORTED TO 0.
    //     NOW BACON FADES, AND BACON AND HIS POWER LEVEL BOTH FALL AND SHATTER.
    //     LAST TIME ONLY THE NUMBER FELL. THIS TIME BACON GOES WITH IT.
    //   POWER LEVEL: INSANITY
    //     SEPT 28: NEKA INFINITY% WAS ABSOLUTE OVERCHARGE.
    //     THIS FORM’S POWER LEVEL IS NOT A NUMBER. IT IS INSANITY.
    //     THE MOST POWERFUL THING OF NEKA.
    const dt = c - 20598.0;
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
    const gr949=ctx.createLinearGradient(0,top+H,0,top);
    gr949.addColorStop(0,'rgba(190,255,170,0.22)'); gr949.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr949.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr949; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,255,170,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA TREATMENT NEKA IS G.O.D.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW NEKA TREATMENT NEKA (HUMAN WITH LABCOAT AND NOW IS G.O.D.),', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WITH POWER LEVEL OF INSANITY, AND HE WINS, BACON FADES. THE GAME GLITCHES AND THE POWER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LEVEL OF BACON AND BACON BOTH FALL AND SHATTER AND GLITCHES.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 7:18 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky949=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,255,170,0.46)';
      ctx.fillRect(cx-W*0.352, ky949, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,255,170,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky949, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,255,170,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A HUMAN IN A LAB COAT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('3:31 PM TODAY: NEKA WEARS HIS WHITE LAB COAT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:18 PM: NEKA TREATMENT NEKA IS A HUMAN WITH A LAB COAT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE COOLEST FORM KEPT THE LAB COAT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BACON, AGAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: BACON’S POWER LEVEL SHOOK, FELL, AND TELEPORTED TO 0.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW BACON FADES, AND BACON AND HIS POWER LEVEL BOTH FALL AND SHATTER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('LAST TIME ONLY THE NUMBER FELL. THIS TIME BACON GOES WITH IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy949=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy949, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy949, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('POWER LEVEL: INSANITY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: NEKA INFINITY% WAS ABSOLUTE OVERCHARGE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS FORM’S POWER LEVEL IS NOT A NUMBER. IT IS INSANITY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL THING OF NEKA.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE WINS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BACON FADES, AND THE GAME GLITCHES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA TREATMENT NEKA IS G.O.D. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===950){
    // BEAT 950: G.O.D., G.o.d, g.o.d..
    // Toby, September 29, 2026, 7:18 PM EDT, his own typing:
    //   “Neka Treatment Neka is the most powerful thing of Neka. He activates the cutscene,
    //   he consumes Classics, so Classics is now inside the anomally.
    //   Neka Treatment Oren is G.o.d, Neka Treatment Neka is G.O.D. The others are g.o.d.”
    // Priors, each verified in the archive before it was drawn:
    //   CLASSICS IS INSIDE THE ANOMALLY
    //     7:08 PM: NEKA APPEARS IN FRONT OF THE SCREEN AND CONSUMES THE GAME.
    //     7:18 PM: HE CONSUMES CLASSICS, SO CLASSICS IS NOW INSIDE THE ANOMALLY.
    //     “ANOMALLY” IS HIS SPELLING, AND IT IS KEPT.
    //   NEKA TREATMENT OREN
    //     7:08 PM: OREN.PS REBECOMES HIS GODLY FORM, STRONGER THAN BEFORE.
    //     7:18 PM: THAT FORM HAS A NAME. NEKA TREATMENT OREN.
    //     OREN GOT A TREATMENT TOO.
    //   THE CAPITAL LETTERS ARE THE RANKING
    //     G.O.D.  NEKA TREATMENT NEKA.     G.o.d  NEKA TREATMENT OREN.
    //     g.o.d.  THE OTHERS.
    //     SAME THREE LETTERS, THREE SIZES.
    const dt = c - 20620.0;
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
    const gr950=ctx.createLinearGradient(0,top+H,0,top);
    gr950.addColorStop(0,'rgba(255,216,79,0.22)'); gr950.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr950.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr950; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('G.O.D., G.o.d, g.o.d.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“Neka Treatment Neka is the most powerful thing of Neka. He activates the cutscene,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('he consumes Classics, so Classics is now inside the anomally.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('Neka Treatment Oren is G.o.d, Neka Treatment Neka is G.O.D. The others are g.o.d.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 7:18 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky950=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky950, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky950, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS IS INSIDE THE ANOMALLY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:08 PM: NEKA APPEARS IN FRONT OF THE SCREEN AND CONSUMES THE GAME.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:18 PM: HE CONSUMES CLASSICS, SO CLASSICS IS NOW INSIDE THE ANOMALLY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“ANOMALLY” IS HIS SPELLING, AND IT IS KEPT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA TREATMENT OREN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:08 PM: OREN.PS REBECOMES HIS GODLY FORM, STRONGER THAN BEFORE.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:18 PM: THAT FORM HAS A NAME. NEKA TREATMENT OREN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OREN GOT A TREATMENT TOO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy950=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy950, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy950, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CAPITAL LETTERS ARE THE RANKING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('G.O.D.  NEKA TREATMENT NEKA.     G.o.d  NEKA TREATMENT OREN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('g.o.d.  THE OTHERS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SAME THREE LETTERS, THREE SIZES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE G.O.D., ONE G.o.d,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND EVERYONE ELSE IS g.o.d.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ G.O.D., G.o.d, g.o.d. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
