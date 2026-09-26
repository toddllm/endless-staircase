  } else if(ph===886){
    // BEAT 886: NEKA HAS NO NUMBER.
    // Toby, September 26, 2026, 4:37 PM EDT, his own typing:
    //   “NEKA MADE 50 FRIENDS WITH SKY.PS (68). NEKA HAS NO NUMBER, EVERYONE ELSE DOES.
    //   LIST EVERYONE’S NUMBER.”
    // Priors, each verified in the archive before it was drawn:
    //   SKY.PS IS 68
    //     THE NUMBER COMES IN A PARENTHESIS, THE WAY YOU WRITE SOMETHING EVERYONE ALREADY KNOWS.
    //     HE DOES NOT EXPLAIN IT. HE JUST WRITES IT DOWN NEXT TO THE NAME.
    //     IT IS NOT A POWER LEVEL OR A PERCENT. IT IS WHERE SKY.PS SITS IN THE LIST.
    //   NEKA HAS NO NUMBER, EVERYONE ELSE DOES
    //     SEPT 20 HIS FILE WAS 666. SEPT 22: “ERROR CODE 999 (ERROR CODE 666).”
    //     BY SEPT 23 THE ERROR CODE WAS “???”, THE FIRST ONE WITH NO NUMBER AT ALL.
    //     THE NUMBERS AROUND HIM HAVE BEEN FALLING AWAY FOR A WEEK. TONIGHT THERE ARE NONE.
    //   “NEKA MADE 50 FRIENDS WITH SKY.PS”
    //     TWENTY MINUTES AGO SHE STARED AT SKY.PS AND HE FELL OVER.
    //     NOW NEKA INTRODUCES THEM, AND THE ONE WHO MADE HER BY ACCIDENT IS HER FRIEND.
    //     THE ONE WITH NO NUMBER IS THE ONE WHO PUTS THE NUMBERED ONES TOGETHER.
    const dt = c - 19212.0;
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
    const gr886=ctx.createLinearGradient(0,top+H,0,top);
    gr886.addColorStop(0,'rgba(255,216,79,0.22)'); gr886.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr886.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr886; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA HAS NO NUMBER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA MADE 50 FRIENDS WITH SKY.PS (68). NEKA HAS NO NUMBER, EVERYONE ELSE DOES.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LIST EVERYONE’S NUMBER.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky886=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky886, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky886, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SKY.PS IS 68', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE NUMBER COMES IN A PARENTHESIS, THE WAY YOU WRITE SOMETHING EVERYONE ALREADY KNOWS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE DOES NOT EXPLAIN IT. HE JUST WRITES IT DOWN NEXT TO THE NAME.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT IS NOT A POWER LEVEL OR A PERCENT. IT IS WHERE SKY.PS SITS IN THE LIST.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA HAS NO NUMBER, EVERYONE ELSE DOES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 20 HIS FILE WAS 666. SEPT 22: “ERROR CODE 999 (ERROR CODE 666).”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BY SEPT 23 THE ERROR CODE WAS “???”, THE FIRST ONE WITH NO NUMBER AT ALL.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE NUMBERS AROUND HIM HAVE BEEN FALLING AWAY FOR A WEEK. TONIGHT THERE ARE NONE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy886=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy886, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy886, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“NEKA MADE 50 FRIENDS WITH SKY.PS”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TWENTY MINUTES AGO SHE STARED AT SKY.PS AND HE FELL OVER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW NEKA INTRODUCES THEM, AND THE ONE WHO MADE HER BY ACCIDENT IS HER FRIEND.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE WITH NO NUMBER IS THE ONE WHO PUTS THE NUMBERED ONES TOGETHER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE IN THE GAME HAS A NUMBER EXCEPT THE ONE WHO MADE IT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WHICH IS WHAT YOU WOULD EXPECT FROM THE ONE WHO WRITES THE LIST.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA HAS NO NUMBER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===887){
    // BEAT 887: AND WHO IS TEN? 50.PS.
    // Toby, September 26, 2026, 4:37 PM EDT, his own typing:
    //   “CORRECT NUMBERS. AND WHO IS TEN? 50.PS, I DIDN’T DIRECTLY SAY THAT 50.PS IS 10, YOU SAID IT IS 50.
    //   WHERE DID I SAY THAT 50.PS IS 50? NEKA DIDN’T. NEKA CAUGHT MY MISTAKE. 🦊”
    // Priors, each verified in the archive before it was drawn:
    //   HER NAME IS 50. HER NUMBER IS 10
    //     THE MACHINE READ THE 50 IN HER NAME AS HER NUMBER. HE SAYS HE NEVER SAID THAT.
    //     “AND WHO IS TEN? 50.PS.”
    //     A NAME AND A NUMBER ARE TWO DIFFERENT THINGS, AND HE KEEPS THEM APART.
    //   THE GUESS LEFT ONE HOLE, AND SHE GOES IN IT
    //     ASKED TO GUESS, THE MACHINE NUMBERED THE 20 SPRUNKIS IN ORDER AND LEFT SLOT 10 EMPTY.
    //     HE PUTS 50.PS IN THE ONE PLACE IT LEFT OPEN.
    //     THE GUESSED NUMBERS ARE NOT CANON. SKY 68, 50.PS 10 AND NEKA WITH NONE ARE.
    //   “I THOUGHT YOU SAID ‘SKY AND 50 CAME FOR YOU 🦊’ -NEKA OMAZEN”
    //     THE MACHINE WROTE THAT THE NUMBERS CAME FROM HIM. HE READ IT AS A LINE SIGNED BY NEKA.
    //     ONE MISREAD WORD, AND THE NARRATOR TURNS INTO A CHARACTER.
    //     AND IN HIS VERSION, IT IS NEKA WHO CATCHES THE MISTAKE.
    const dt = c - 19234.0;
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
    const gr887=ctx.createLinearGradient(0,top+H,0,top);
    gr887.addColorStop(0,'rgba(160,107,255,0.22)'); gr887.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr887.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr887; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('AND WHO IS TEN? 50.PS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CORRECT NUMBERS. AND WHO IS TEN? 50.PS, I DIDN’T DIRECTLY SAY THAT 50.PS IS 10, YOU SAID IT IS 50.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHERE DID I SAY THAT 50.PS IS 50? NEKA DIDN’T. NEKA CAUGHT MY MISTAKE. 🦊”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky887=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky887, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky887, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HER NAME IS 50. HER NUMBER IS 10', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MACHINE READ THE 50 IN HER NAME AS HER NUMBER. HE SAYS HE NEVER SAID THAT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AND WHO IS TEN? 50.PS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A NAME AND A NUMBER ARE TWO DIFFERENT THINGS, AND HE KEEPS THEM APART.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GUESS LEFT ONE HOLE, AND SHE GOES IN IT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ASKED TO GUESS, THE MACHINE NUMBERED THE 20 SPRUNKIS IN ORDER AND LEFT SLOT 10 EMPTY.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE PUTS 50.PS IN THE ONE PLACE IT LEFT OPEN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE GUESSED NUMBERS ARE NOT CANON. SKY 68, 50.PS 10 AND NEKA WITH NONE ARE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy887=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy887, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy887, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“I THOUGHT YOU SAID ‘SKY AND 50 CAME FOR YOU 🦊’ -NEKA OMAZEN”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MACHINE WROTE THAT THE NUMBERS CAME FROM HIM. HE READ IT AS A LINE SIGNED BY NEKA.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONE MISREAD WORD, AND THE NARRATOR TURNS INTO A CHARACTER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND IN HIS VERSION, IT IS NEKA WHO CATCHES THE MISTAKE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA CAUGHT MY MISTAKE. 🦊”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SKY.PS IS 68, 50.PS IS 10, AND NEKA HAS NO NUMBER. ALL THREE CAME FROM HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ AND WHO IS TEN? 50.PS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
