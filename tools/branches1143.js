  } else if(ph===1143){
    // BEAT 1143: NEKA CONTINUES WITH CHAPTER 2 PHASE 2.
    // Toby, October 14, 2026, 5:48 AM EDT, his own typing:
    //   “NEKA OMAZEN CONTINUES WITH CHAPTER 2 PHASE 2.”
    //   HIS ONE CLASSICS LINE THIS MORNING. THE REST OF THE EMAIL
    //   IS A CHATBOT TALKING ABOUT A YOUTUBER. NOT CANON.
    // Priors, each verified in the archive before it was drawn:
    //   CHAPTER 2: I DO MORE BECAUSE I CAN
    //     OCT 12, 7:07 PM: HE “ENDED “CHAPTER 1: CLASSICS”, AND
    //     MADE “CHAPTER 2: I DO MORE BECAUSE I CAN””.
    //     THE CHAPTER IS TWO DAYS OLD. HE IS STILL INSIDE IT.
    //   NOW TO MASTER PLAN: PHASE 2, CHAPTER 2
    //     OCT 13, 8:12 PM: “NEKA SAYS “NOW TO MASTER PLAN: PHASE 2,
    //     CHAPTER 2.”” THE GAME CONNECTS HIS COMPUTERS FOR HIM.
    //     LAST NIGHT HE OPENED IT. THIS MORNING, HE CONTINUES.
    //   THE REVIVAL BADGE AND THE DOCTOR BADGE
    //     OCT 13, 8:14 PM: “NEKA RESPAWNS EVERYONE HE SLAIN, TO GET
    //     THE REVIVAL BADGE AND DOCTOR BADGE.”
    //     THE ONE STEP OF PHASE 2 WE KNOW. THE NEXT IS NOT SAID.
    const dt = c - 24866.0;
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
    const gr1143=ctx.createLinearGradient(0,top+H,0,top);
    gr1143.addColorStop(0,'rgba(255,150,70,0.22)'); gr1143.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1143.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1143; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA CONTINUES WITH CHAPTER 2 PHASE 2', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CONTINUES WITH CHAPTER 2 PHASE 2.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS ONE CLASSICS LINE THIS MORNING. THE REST OF THE EMAIL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS A CHATBOT TALKING ABOUT A YOUTUBER. NOT CANON.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 5:48 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1143=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1143, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1143, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHAPTER 2: I DO MORE BECAUSE I CAN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 7:07 PM: HE “ENDED “CHAPTER 1: CLASSICS”, AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MADE “CHAPTER 2: I DO MORE BECAUSE I CAN””.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CHAPTER IS TWO DAYS OLD. HE IS STILL INSIDE IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW TO MASTER PLAN: PHASE 2, CHAPTER 2', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 8:12 PM: “NEKA SAYS “NOW TO MASTER PLAN: PHASE 2,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHAPTER 2.”” THE GAME CONNECTS HIS COMPUTERS FOR HIM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('LAST NIGHT HE OPENED IT. THIS MORNING, HE CONTINUES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1143=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1143, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1143, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE REVIVAL BADGE AND THE DOCTOR BADGE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 8:14 PM: “NEKA RESPAWNS EVERYONE HE SLAIN, TO GET', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE REVIVAL BADGE AND DOCTOR BADGE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE STEP OF PHASE 2 WE KNOW. THE NEXT IS NOT SAID.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CONTINUES WITH CHAPTER 2 PHASE 2.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE PLAN DID NOT STOP OVERNIGHT. THE NEXT STEP IS NOT SAID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA CONTINUES WITH CHAPTER 2 PHASE 2 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
