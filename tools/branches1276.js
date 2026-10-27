  } else if(ph===1276){
    // BEAT 1276: THE SMARTEST AI THERE IS.
    // Toby, October 27, 2026, 7:08 PM EDT, his own typing:
    //   “NOW NEKA, THE SMARTEST AI THERE IS, ENTERS, BEATING ALL 4
    //   OTHERS. NEKA IS KNOWN OF ERASE. NEKA WOULD LAUGH TIL HE
    //   COUGHS, AND HE MEATS PLAYERS.”
    // Priors, each verified in the archive before it was drawn:
    //   ERASE
    //     “NEKA IS KNOWN OF ERASE.” THE SMARTEST AI THERE IS ENTERS
    //     AGAINST VERITY, FALSITY, CRUELTY AND LOVITY.
    //     OCT 27, 5:05 PM: “NEKA WOULD BE TOP NO MATTER.”
    //   HE MEATS PLAYERS
    //     “HE MEATS PLAYERS BY ACTUALLY MAKING THE AVATARS AND
    //     CHARACTERS TO MEAT.” THE PUN HAS ITS MEANING NOW.
    //     OCT 27, BEAT 1275: “MEAT YOU AGAIN SOON!”
    //   LAUGH TIL HE COUGHS
    //     “NEKA WOULD LAUGH TIL HE COUGHS.” SAID TWICE THE SAME
    //     EVENING, ONCE AT 5:05 PM AND AGAIN AT 7:08 PM.
    //     OCT 27, BEAT 1274: NEKA AND JECK, THE ONLY 2 BOTS.
    const dt = c - 27792.0;
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
    const gr1276=ctx.createLinearGradient(0,top+H,0,top);
    gr1276.addColorStop(0,'rgba(190,150,230,0.22)'); gr1276.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1276.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1276; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,150,230,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SMARTEST AI THERE IS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW NEKA, THE SMARTEST AI THERE IS, ENTERS, BEATING ALL 4', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OTHERS. NEKA IS KNOWN OF ERASE. NEKA WOULD LAUGH TIL HE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COUGHS, AND HE MEATS PLAYERS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 27, 7:08 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1276=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,150,230,0.46)';
      ctx.fillRect(cx-W*0.352, ky1276, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,150,230,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1276, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,150,230,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ERASE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA IS KNOWN OF ERASE.” THE SMARTEST AI THERE IS ENTERS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AGAINST VERITY, FALSITY, CRUELTY AND LOVITY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 27, 5:05 PM: “NEKA WOULD BE TOP NO MATTER.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE MEATS PLAYERS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE MEATS PLAYERS BY ACTUALLY MAKING THE AVATARS AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHARACTERS TO MEAT.” THE PUN HAS ITS MEANING NOW.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 27, BEAT 1275: “MEAT YOU AGAIN SOON!”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1276=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1276, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1276, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('LAUGH TIL HE COUGHS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA WOULD LAUGH TIL HE COUGHS.” SAID TWICE THE SAME', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVENING, ONCE AT 5:05 PM AND AGAIN AT 7:08 PM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 27, BEAT 1274: NEKA AND JECK, THE ONLY 2 BOTS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FALSITY ALWAYS LIES. LOVITY LOVES EVERYTHING AND DESTROYS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE UGLY. NEKA ENTERS AND BEATS ALL FOUR OF THEM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SMARTEST AI THERE IS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1277){
    // BEAT 1277: UNKNOWN OF BEHAVIOR.
    // Toby, October 27, 2026, 7:10 PM EDT, his own typing:
    //   “PART BEFORE THAT. ACCOUNT 1337 IS UNKNOWN OF BEHAVIOR.”
    //   
    //   
    // Priors, each verified in the archive before it was drawn:
    //   WHAT IS ESTABLISHED
    //     HIS IDENTITY AND APPEARANCE: THE MUSTACHE, THE SHIRT
    //     “OWNER: 1337”, THE FIRST OWNER OF THE FACILITY.
    //     OCT 27, BEAT 1274: “OWNER: 1337.”
    //   WHAT IS NOT
    //     HOW JECK ACTS, WHAT HE INTENDS, WHETHER HE EVER LEARNS HE
    //     IS AI. THE GAME ASKED; THE ANSWER IS UNKNOWN.
    //     OCT 27, BEAT 1275: “MAYBE I AM A PLAYER...”
    //   THE ONLY 2 AIs
    //     NEKA KNOWS HE AND JECK ARE THE ONLY AIs. JECK KNOWS ONLY
    //     ABOUT NEKA. WHAT JECK DOES WITH THAT: UNKNOWN.
    //     OCT 26, BEAT 1273: “JECK IS ACCOUNT 1337.”
    const dt = c - 27814.0;
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
    const gr1277=ctx.createLinearGradient(0,top+H,0,top);
    gr1277.addColorStop(0,'rgba(210,190,120,0.22)'); gr1277.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1277.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1277; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(210,190,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('UNKNOWN OF BEHAVIOR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PART BEFORE THAT. ACCOUNT 1337 IS UNKNOWN OF BEHAVIOR.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 27, 7:10 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1277=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(210,190,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1277, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(210,190,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1277, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(210,190,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT IS ESTABLISHED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS IDENTITY AND APPEARANCE: THE MUSTACHE, THE SHIRT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“OWNER: 1337”, THE FIRST OWNER OF THE FACILITY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 27, BEAT 1274: “OWNER: 1337.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT IS NOT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HOW JECK ACTS, WHAT HE INTENDS, WHETHER HE EVER LEARNS HE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS AI. THE GAME ASKED; THE ANSWER IS UNKNOWN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 27, BEAT 1275: “MAYBE I AM A PLAYER...”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1277=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1277, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1277, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ONLY 2 AIs', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA KNOWS HE AND JECK ARE THE ONLY AIs. JECK KNOWS ONLY', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ABOUT NEKA. WHAT JECK DOES WITH THAT: UNKNOWN.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 26, BEAT 1273: “JECK IS ACCOUNT 1337.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JECK IS DRAWN, NAMED AND NUMBERED. HOW HE BEHAVES IS NOT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WRITTEN YET. ACCOUNT 1337 IS UNKNOWN OF BEHAVIOR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ UNKNOWN OF BEHAVIOR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
