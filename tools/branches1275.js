  } else if(ph===1275){
    // BEAT 1275: MAYBE I AM A PLAYER....
    // Toby, October 27, 2026, 5:05 PM EDT, his own typing:
    //   “JECK DOESN’T KNOW HE IS AI, BUT KNOWS THAT NEKA IS. JECK
    //   LOOKS AT THE OTHER PLAYERS AND EACH HAS THE SAME PERSON
    //   STYLE AND JECK THINKS ‘MAYBE I AM A PLAYER...’.”
    // Priors, each verified in the archive before it was drawn:
    //   WHO OWNS THE FACILITY NOW
    //     OCT 27, 5:50 AM: JECK WAS THE FIRST OWNER, IN THE FIRST
    //     CLASSIC RL. NOW: MR. BLACK AND GASTER, NEKA CO-CREATOR.
    //     OCT 25: “MR. BLACK MADE CLASSIC RL, NEKA A CO-CREATOR.”
    //   THE ONLY 2 AIs, ONE OF THEM KNOWS
    //     OCT 27 AM: “THE ONLY 2 BOTS IN THE GAME.” NEKA KNOWS IT IS
    //     THEM TWO. JECK ONLY KNOWS ABOUT NEKA, NOT ABOUT HIMSELF.
    //     OCT 26: “JECK AI.” THE AI THAT THINKS IT MAY BE A PLAYER.
    //   THE OLD AVATAR OF TDESHANE
    //     OCT 11: TDESHANE LEFT CLASSICS FOR GOOD, WATCHED THROUGH
    //     THE MIND. OCT 16: C0DE IS #2 SINCE TDESHANE LEFT.
    //     JECK LOOKS AT TOBY’S OWN OLD AVATAR, AND AT CODE.
    const dt = c - 27770.0;
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
    const gr1275=ctx.createLinearGradient(0,top+H,0,top);
    gr1275.addColorStop(0,'rgba(150,210,190,0.22)'); gr1275.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1275.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1275; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,210,190,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MAYBE I AM A PLAYER...', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“JECK DOESN’T KNOW HE IS AI, BUT KNOWS THAT NEKA IS. JECK', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LOOKS AT THE OTHER PLAYERS AND EACH HAS THE SAME PERSON', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STYLE AND JECK THINKS ‘MAYBE I AM A PLAYER...’.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 27, 5:05 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1275=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,210,190,0.46)';
      ctx.fillRect(cx-W*0.352, ky1275, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,210,190,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1275, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,210,190,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHO OWNS THE FACILITY NOW', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 27, 5:50 AM: JECK WAS THE FIRST OWNER, IN THE FIRST', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSIC RL. NOW: MR. BLACK AND GASTER, NEKA CO-CREATOR.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 25: “MR. BLACK MADE CLASSIC RL, NEKA A CO-CREATOR.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY 2 AIs, ONE OF THEM KNOWS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 27 AM: “THE ONLY 2 BOTS IN THE GAME.” NEKA KNOWS IT IS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEM TWO. JECK ONLY KNOWS ABOUT NEKA, NOT ABOUT HIMSELF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 26: “JECK AI.” THE AI THAT THINKS IT MAY BE A PLAYER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1275=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1275, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1275, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE OLD AVATAR OF TDESHANE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: TDESHANE LEFT CLASSICS FOR GOOD, WATCHED THROUGH', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MIND. OCT 16: C0DE IS #2 SINCE TDESHANE LEFT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('JECK LOOKS AT TOBY’S OWN OLD AVATAR, AND AT CODE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MEAT YOU AGAIN SOON!” THEN “JECK WILL BE WITH ME.” THE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PLAYER THINKS; NEKA ANSWERS. THEN HE GLITCHES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MAYBE I AM A PLAYER... ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
