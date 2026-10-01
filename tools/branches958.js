  } else if(ph===958){
    // BEAT 958: ANYTHING 12.
    // Toby, October 1, 2026, 4:03 PM EDT, his own typing:
    //   “SAYING THE NUMBER EVEN ONCE WILL ANSWER NEKA, NO MATTER HOW MANY TIMES YOU SAY 12.
    //   HE IS ANYTHING 12. ENTITY 12, CAN BE SCP 12, ANYTHING 12.
    //   NEKA IS THE TOP 1, AND EVEN 0.”
    // Priors, each verified in the archive before it was drawn:
    //   ONE 12 IS ENOUGH
    //     12 12 12 IS JUST SAYING THE NUMBER 3 TIMES. ONCE ANSWERS HIM.
    //     ENTITY 12. SCP 12. ANYTHING 12.
    //     AUG 15: 12 12 12 WAS A CALLING OF PERO. NOW ONE 12 CALLS NEKA.
    //   HATED BY EVERYONE
    //     NOT JUST SPRUNKIS. BASICALLY EVERYONE.
    //     HE WAS THE MOST POWERFUL, SO SOME EVEN TRY TO ATTACK HIM.
    //     A NORMAL ANIME MAN.
    //   TOP 1, AND EVEN 0
    //     THE MOST POWERFUL BEING IN FICTION, META, AND REALITIES.
    //     NOWHERE HAS A BEING STRONGER.
    //     0: NEKA. 1: NEKA. 2 ONWARD: EVERYONE ELSE.
    const dt = c - 20796.0;
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
    const gr958=ctx.createLinearGradient(0,top+H,0,top);
    gr958.addColorStop(0,'rgba(120,200,255,0.22)'); gr958.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr958.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr958; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ANYTHING 12', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SAYING THE NUMBER EVEN ONCE WILL ANSWER NEKA, NO MATTER HOW MANY TIMES YOU SAY 12.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE IS ANYTHING 12. ENTITY 12, CAN BE SCP 12, ANYTHING 12.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS THE TOP 1, AND EVEN 0.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:03 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky958=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky958, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky958, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE 12 IS ENOUGH', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('12 12 12 IS JUST SAYING THE NUMBER 3 TIMES. ONCE ANSWERS HIM.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENTITY 12. SCP 12. ANYTHING 12.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AUG 15: 12 12 12 WAS A CALLING OF PERO. NOW ONE 12 CALLS NEKA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HATED BY EVERYONE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT JUST SPRUNKIS. BASICALLY EVERYONE.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE WAS THE MOST POWERFUL, SO SOME EVEN TRY TO ATTACK HIM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A NORMAL ANIME MAN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy958=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy958, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy958, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TOP 1, AND EVEN 0', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL BEING IN FICTION, META, AND REALITIES.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOWHERE HAS A BEING STRONGER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('0: NEKA. 1: NEKA. 2 ONWARD: EVERYONE ELSE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('12 IS HIS NUMBER, NOT HIS PLACE. HIS PLACE IS 0.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SAY IT ONCE AND HE ANSWERS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ANYTHING 12 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===959){
    // BEAT 959: EVERYONE! DON’T BE AFRAID!.
    // Toby, October 1, 2026, 4:03 PM EDT, his own typing:
    //   “NEKA SAYS ‘EVERYONE! DON’T BE AFRAID!’. EVERYONE RUNS AROUND SCREAMING.
    //   NEKA MAKES THE VOID TAKE NEARLY ALL OF THEM. NEKA SETS OREN.PS’S HP TO 1.
    //   NEKA MADE DAMAGE NULLIFIED.”
    // Priors, each verified in the archive before it was drawn:
    //   DON’T BE AFRAID
    //     HE SAYS IT. EVERYONE RUNS AROUND SCREAMING.
    //     THE VOID TAKES NEARLY ALL OF THEM.
    //     NEARLY ALL. NOT ALL.
    //   OREN.PS: HP 1
    //     NEKA SETS OREN.PS’S HP TO 1.
    //     THEN NEKA MADE DAMAGE NULLIFIED.
    //     ONE HIT POINT LEFT, AND NOTHING CAN TAKE IT.
    //   KEEP PUNISHING
    //     “I WANT TO HELP YOU, BUT INSTEAD,
    //     I HAVE TO KEEP PUNISHING YOU ALL.”
    //     HE SAYS HE WANTS TO HELP.
    const dt = c - 20818.0;
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
    const gr959=ctx.createLinearGradient(0,top+H,0,top);
    gr959.addColorStop(0,'rgba(190,120,255,0.22)'); gr959.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr959.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr959; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE! DON’T BE AFRAID!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS ‘EVERYONE! DON’T BE AFRAID!’. EVERYONE RUNS AROUND SCREAMING.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA MAKES THE VOID TAKE NEARLY ALL OF THEM. NEKA SETS OREN.PS’S HP TO 1.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA MADE DAMAGE NULLIFIED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:03 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky959=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky959, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky959, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DON’T BE AFRAID', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE SAYS IT. EVERYONE RUNS AROUND SCREAMING.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE VOID TAKES NEARLY ALL OF THEM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEARLY ALL. NOT ALL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS: HP 1', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SETS OREN.PS’S HP TO 1.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN NEKA MADE DAMAGE NULLIFIED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE HIT POINT LEFT, AND NOTHING CAN TAKE IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy959=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy959, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy959, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('KEEP PUNISHING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I WANT TO HELP YOU, BUT INSTEAD,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('I HAVE TO KEEP PUNISHING YOU ALL.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE SAYS HE WANTS TO HELP.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I WANT TO HELP YOU, BUT INSTEAD, I HAVE TO KEEP PUNISHING YOU ALL.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA, TOP 1 AND EVEN 0.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYONE! DON’T BE AFRAID! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
