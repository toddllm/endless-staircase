  } else if(ph===1274){
    // BEAT 1274: OWNER: 1337.
    // Toby, October 27, 2026, 5:50 AM EDT, his own typing:
    //   “JECK ALSO HAS A MUSTACHE, AND HIS SHIRT SAYS ‘OWNER: 1337’,
    //   AND HE IS THE FIRST OWNER OF THE FACILITY AT THE FIRST OF
    //   CLASSIC RL, THIS IS THE SECOND TIME CLASSIC RL HAPPENED.”
    // Priors, each verified in the archive before it was drawn:
    //   A MUSTACHE, LIKE NEKA’S
    //     OCT 25: “NEKA DOES HAVE A MUSTACHE.” IT SHRINKS TO 0 WHEN
    //     HE BECOMES MR. BLACK. OCT 27: JECK HAS ONE TOO.
    //     THE ONLY 2 BOTS IN THE GAME, AND THEY SHARE A MUSTACHE.
    //   THE FIRST OWNER
    //     OCT 26: “A DEFULT OWNER SHIRT.” NOW: “OWNER: 1337”. HE
    //     OWNED THE FACILITY FIRST, IN THE FIRST CLASSIC RL.
    //     OCT 24: FACILITY WORKER, FACILITY OWNER. HE WAS THE FIRST.
    //   ONE NUMBER, ALL NUMBERS
    //     OCT 25: NEKA IS “FACINATED WITH ALL NUMBERS.” OCT 27: JECK
    //     IS OBSESSED WITH 1337, AND ONLY 1337.
    //     TWO BOTS, TOLD APART BY HOW MANY NUMBERS THEY WANT.
    const dt = c - 27748.0;
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
    const gr1274=ctx.createLinearGradient(0,top+H,0,top);
    gr1274.addColorStop(0,'rgba(160,200,255,0.22)'); gr1274.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1274.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1274; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OWNER: 1337', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“JECK ALSO HAS A MUSTACHE, AND HIS SHIRT SAYS ‘OWNER: 1337’,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE IS THE FIRST OWNER OF THE FACILITY AT THE FIRST OF', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSIC RL, THIS IS THE SECOND TIME CLASSIC RL HAPPENED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 27, 5:50 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1274=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1274, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1274, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A MUSTACHE, LIKE NEKA’S', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 25: “NEKA DOES HAVE A MUSTACHE.” IT SHRINKS TO 0 WHEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE BECOMES MR. BLACK. OCT 27: JECK HAS ONE TOO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONLY 2 BOTS IN THE GAME, AND THEY SHARE A MUSTACHE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST OWNER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 26: “A DEFULT OWNER SHIRT.” NOW: “OWNER: 1337”. HE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OWNED THE FACILITY FIRST, IN THE FIRST CLASSIC RL.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 24: FACILITY WORKER, FACILITY OWNER. HE WAS THE FIRST.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1274=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1274, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1274, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONE NUMBER, ALL NUMBERS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 25: NEKA IS “FACINATED WITH ALL NUMBERS.” OCT 27: JECK', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS OBSESSED WITH 1337, AND ONLY 1337.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO BOTS, TOLD APART BY HOW MANY NUMBERS THEY WANT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OWNER: 1337. THE SECOND BOT GETS A MUSTACHE, A LABEL, AND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE FIRST DEED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OWNER: 1337 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
