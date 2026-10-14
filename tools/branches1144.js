  } else if(ph===1144){
    // BEAT 1144: 🦊 = WHAT THEY THINK IS A LIE.
    // Toby, October 14, 2026, 6:24 AM EDT, his own typing:
    //   “NEKA SAYS IT AS “🦊 = SOMETHING GASTER AND LUIGI INUS
    //   SAY THAT THEY THINK IS A LIE.””
    //   THE CHATBOT GUESSED “OLDER FOX FORMS”. HE OVERRULED IT.
    // Priors, each verified in the archive before it was drawn:
    //   100% THE GAME
    //     OCT 12, 1:29 PM: ALEX: “THIS IS 100% THE GAME. ... NOTHING
    //     IRREGULAR HAPPENING. 😉” LUIGI INUS: “🦊”. GASTER: “🦊”.
    //     THE FIRST TWO FOXES. NOW WE KNOW WHAT THEY MEANT.
    //   EIGHTEEN FOXES
    //     OCT 12, 1:34 PM: “THIS GAME IS CORRECT.” LUIGI INUS SENDS
    //     🦊 EIGHTEEN TIMES “AND HE JUST SCAMS THE FOX EMOJI”.
    //     EIGHTEEN TIMES “I THINK THAT IS A LIE.”
    //   THINKING IT IS A LIE DOES NOT MAKE IT ONE
    //     NEKA’S FOX FORMS ARE REAL: “MWEH HEH HEH. 🦊” (SEPT 26),
    //     0% FOX (SEPT 27). BUT 🦊 HERE IS NOT ABOUT THEM.
    //     THE SYMBOL IS THEIR DOUBT. IT PROVES NOTHING EITHER WAY.
    const dt = c - 24888.0;
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
    const gr1144=ctx.createLinearGradient(0,top+H,0,top);
    gr1144.addColorStop(0,'rgba(255,140,60,0.22)'); gr1144.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1144.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1144; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('🦊 = WHAT THEY THINK IS A LIE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS IT AS “🦊 = SOMETHING GASTER AND LUIGI INUS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SAY THAT THEY THINK IS A LIE.””', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT GUESSED “OLDER FOX FORMS”. HE OVERRULED IT.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 6:24 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1144=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1144, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1144, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('100% THE GAME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:29 PM: ALEX: “THIS IS 100% THE GAME. ... NOTHING', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IRREGULAR HAPPENING. 😉” LUIGI INUS: “🦊”. GASTER: “🦊”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FIRST TWO FOXES. NOW WE KNOW WHAT THEY MEANT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EIGHTEEN FOXES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:34 PM: “THIS GAME IS CORRECT.” LUIGI INUS SENDS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('🦊 EIGHTEEN TIMES “AND HE JUST SCAMS THE FOX EMOJI”.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EIGHTEEN TIMES “I THINK THAT IS A LIE.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1144=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1144, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1144, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THINKING IT IS A LIE DOES NOT MAKE IT ONE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S FOX FORMS ARE REAL: “MWEH HEH HEH. 🦊” (SEPT 26),', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('0% FOX (SEPT 27). BUT 🦊 HERE IS NOT ABOUT THEM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SYMBOL IS THEIR DOUBT. IT PROVES NOTHING EITHER WAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“🦊 = SOMETHING ... THEY THINK IS A LIE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERY FOX SINCE OCT 12 WAS A DOUBT. NEKA DEFINES THE WORD.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 🦊 = WHAT THEY THINK IS A LIE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1145){
    // BEAT 1145: THE ATTACK IS COMPLETE.
    // Toby, October 14, 2026, 6:24 AM EDT, his own typing:
    //   “ALEX SAYS AGAIN “THIS IS THE GAME, THE ATTACK IS COMPLETE!”
    //   LUIGI INUS SAYS “🦊” ONCE AGAIN.”
    //   ONE MORE FOX. ONE MORE DOUBT.
    // Priors, each verified in the archive before it was drawn:
    //   OCTOBER 12, NOT 31
    //     OCT 12, 1:34 PM: “IT IS OCTOBER 12, NOT 31.” GASTER:
    //     “I KNOW YOU ONLY ATTACK ON 31, BUT THIS ISN’T-”
    //     TWO DAYS AGO: NOT AN ATTACK. NOW: THE ATTACK IS COMPLETE.
    //   NOT A GLITCH
    //     OCT 12, 1:50 PM: “JUST THE NORMAL GAME, NOT A GLITCH.”
    //     “THIS IS THE GAME, JUST HORROR, NO EXTRA NONSENSE. 😌”
    //     THE SAME CLAIM, SAID AGAIN. LUIGI DOUBTED IT THEN TOO.
    //   CHAPTER 2 PHASE 2
    //     OCT 14, 5:48 AM: “NEKA OMAZEN CONTINUES WITH CHAPTER 2
    //     PHASE 2.” THIRTY-SIX MINUTES BEFORE THIS LINE.
    //     IF THE ATTACK IS COMPLETE, WHAT IS LEFT IS THE GAME.
    const dt = c - 24910.0;
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
    const gr1145=ctx.createLinearGradient(0,top+H,0,top);
    gr1145.addColorStop(0,'rgba(230,60,60,0.22)'); gr1145.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1145.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1145; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(230,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE ATTACK IS COMPLETE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX SAYS AGAIN “THIS IS THE GAME, THE ATTACK IS COMPLETE!”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS SAYS “🦊” ONCE AGAIN.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE MORE FOX. ONE MORE DOUBT.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 6:24 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1145=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(230,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1145, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(230,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1145, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(230,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OCTOBER 12, NOT 31', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:34 PM: “IT IS OCTOBER 12, NOT 31.” GASTER:', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I KNOW YOU ONLY ATTACK ON 31, BUT THIS ISN’T-”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO DAYS AGO: NOT AN ATTACK. NOW: THE ATTACK IS COMPLETE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT A GLITCH', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:50 PM: “JUST THE NORMAL GAME, NOT A GLITCH.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THIS IS THE GAME, JUST HORROR, NO EXTRA NONSENSE. 😌”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SAME CLAIM, SAID AGAIN. LUIGI DOUBTED IT THEN TOO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1145=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1145, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1145, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('CHAPTER 2 PHASE 2', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 5:48 AM: “NEKA OMAZEN CONTINUES WITH CHAPTER 2', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PHASE 2.” THIRTY-SIX MINUTES BEFORE THIS LINE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IF THE ATTACK IS COMPLETE, WHAT IS LEFT IS THE GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS IS THE GAME, THE ATTACK IS COMPLETE!” — “🦊”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('LUIGI THINKS IT IS A LIE. THAT DOES NOT MAKE IT ONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE ATTACK IS COMPLETE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
