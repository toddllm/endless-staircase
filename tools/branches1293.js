  } else if(ph===1293){
    // BEAT 1293: STARRY VS NEKA.
    // Toby, November 2, 2026, 4:43 PM EDT, his own typing:
    //   “STARRIES HAVE 100 HP, 50 STAMINA.” “NEKA DOESN’T USE HP BUT
    //   USES ACTUAL HEALTH, AND HAS 1 STAMINA, LITTERALLY.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   THE STARRY
    //     ANY USERNAME. CAN EXIT THE GAME. CAN BREAK NORMAL RULES.
    //     CANNOT EVOLVE. CANNOT SEE SPEECH BUBBLES.
    //     NAMED AFTER HIS AMONG US NAME, STARRYCHIN.
    //   NEKA1, NEKA2, NEKA3
    //     RUNS A FEW SECONDS. FLIES FASTER THAN HE WALKS. CANNOT
    //     EXIT. CANNOT CUSTOMIZE. SHIFTS HIS BODY PARTS.
    //     A PLAYER, NOT AN NPC. CO-CREATOR. INFINITE NEKA COINS.
    //   THE RULES
    //     ALL WORDS ARE GOOD. HE SAYS HELLO. HE READS EVERY SPEECH
    //     BUBBLE. RLS SEE THEM TOO.
    //     JECK GOT ANGRY. NEKA SENT JECK TO HIMSELF.
    const dt = c - 28166.0;
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
    const gr1293=ctx.createLinearGradient(0,top+H,0,top);
    gr1293.addColorStop(0,'rgba(126,196,255,0.22)'); gr1293.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1293.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1293; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(126,196,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('STARRY VS NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“STARRIES HAVE 100 HP, 50 STAMINA.” “NEKA DOESN’T USE HP BUT', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('USES ACTUAL HEALTH, AND HAS 1 STAMINA, LITTERALLY.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 2, 4:43 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1293=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(126,196,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1293, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(126,196,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1293, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(126,196,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE STARRY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ANY USERNAME. CAN EXIT THE GAME. CAN BREAK NORMAL RULES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CANNOT EVOLVE. CANNOT SEE SPEECH BUBBLES.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NAMED AFTER HIS AMONG US NAME, STARRYCHIN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA1, NEKA2, NEKA3', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RUNS A FEW SECONDS. FLIES FASTER THAN HE WALKS. CANNOT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EXIT. CANNOT CUSTOMIZE. SHIFTS HIS BODY PARTS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A PLAYER, NOT AN NPC. CO-CREATOR. INFINITE NEKA COINS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1293=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1293, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1293, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE RULES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL WORDS ARE GOOD. HE SAYS HELLO. HE READS EVERY SPEECH', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BUBBLE. RLS SEE THEM TOO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('JECK GOT ANGRY. NEKA SENT JECK TO HIMSELF.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SPHERE BODY WITH RINGS AROUND IT. STARRY IS A PLAYER. SO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IS NEKA.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ STARRY VS NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1294){
    // BEAT 1294: TODDLLM 003.
    // Toby, November 2, 2026, 4:43 PM EDT, his own typing:
    //   “NEKA IS NO LONGER ALIVE, BUT STILL CAN MOVE, UNTIL GASTER
    //   REVIVES HIM. A NORMAL HUMAN BACK AGAIN, AND HIS EYES LOOK
    //   DIFFERENT.”
    // Priors, each verified in the archive before it was drawn:
    //   003 - RECENT NEKA
    //     TODDLLM 003 IS THE 10 DIMENSIONAL NEKA. AFTER 001 AND 002,
    //     WHICH CARRY HIS CODE.
    //     NEKA IS MADE OF CLASSIC RL TODDLLMS, ALEX/ALEXEN.
    //   CRYSTAL EYES
    //     STILL BLUE, BUT LIKE CRYSTALS, 10 DIMENSIONAL. IF LIGHT
    //     SHINES ON THEM, IT IS ERASED IMMEDIATELY.
    //     THE ONLY PART OF HIM THAT STAYS CHANGED.
    //   THE STAFF
    //     THE SEPERIAL STAFF IS NOW IN HIS EYES. IT LETS HIM PROCESS
    //     MORE THAN HIS NORMAL BODY CAN.
    //     SO THE STAFF IS NOT A SIGN. IT IS A PART.
    const dt = c - 28188.0;
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
    const gr1294=ctx.createLinearGradient(0,top+H,0,top);
    gr1294.addColorStop(0,'rgba(122,232,226,0.22)'); gr1294.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1294.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1294; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(122,232,226,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TODDLLM 003', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS NO LONGER ALIVE, BUT STILL CAN MOVE, UNTIL GASTER', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('REVIVES HIM. A NORMAL HUMAN BACK AGAIN, AND HIS EYES LOOK', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DIFFERENT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 2, 4:43 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1294=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(122,232,226,0.46)';
      ctx.fillRect(cx-W*0.352, ky1294, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(122,232,226,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1294, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(122,232,226,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('003 - RECENT NEKA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODDLLM 003 IS THE 10 DIMENSIONAL NEKA. AFTER 001 AND 002,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHICH CARRY HIS CODE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA IS MADE OF CLASSIC RL TODDLLMS, ALEX/ALEXEN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CRYSTAL EYES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STILL BLUE, BUT LIKE CRYSTALS, 10 DIMENSIONAL. IF LIGHT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHINES ON THEM, IT IS ERASED IMMEDIATELY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY PART OF HIM THAT STAYS CHANGED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1294=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1294, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1294, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE STAFF', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SEPERIAL STAFF IS NOW IN HIS EYES. IT LETS HIM PROCESS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE THAN HIS NORMAL BODY CAN.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SO THE STAFF IS NOT A SIGN. IT IS A PART.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER REVIVES HIM. A NORMAL HUMAN WITH TEN DIMENSIONAL', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EYES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TODDLLM 003 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
