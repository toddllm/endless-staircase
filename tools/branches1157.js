  } else if(ph===1157){
    // BEAT 1157: THE CROSS EYES.
    // Toby, October 15, 2026, 4:12 PM EDT, his own typing:
    //   “NEKA’S EYES ARE ACTUALLY THE YELLOW CROSSES, ALSO THERE IS
    //   NO LONGER AWAKENED, NEKA ACTUALLY HAS THE CROSS EYES.
    //   HE HAS POWERS OF LEVITATE.” THE MISSING 5-10%, ANSWERED.
    // Priors, each verified in the archive before it was drawn:
    //   AWAKENED NEKA
    //     3:36 PM: TWO GEMINI PICTURES, “NEKA LAI” WITH BLUE EYES,
    //     “AWAKENED NEKA” WITH GLOWING CROSS EYES. 90%-95%.
    //     THE BLUE EYES WERE THE 5-10%. THERE IS NO AWAKENED.
    //   HE LEVITATES
    //     OCT 8, 8:26 PM: NEKA LEVITATES AND CREATES 2 LARGE VOID
    //     THRONES, AS NIRTHOLOGE TEARS THE GAMES.
    //     NOW IT IS WRITTEN DOWN AS A POWER OF HIS: LEVITATE.
    //   THE FORMS ARE NOTHING NOW
    //     SEPT 24, 4:37 PM: “THE FORMS ARE NOTHING NOW.” THE FIRST
    //     LINE OF THE ERA. NO AWAKENED FORM FITS THAT RULE.
    //     ONE NEKA, CROSS EYES ALWAYS. NOT A FORM. HIM.
    const dt = c - 25174.0;
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
    const gr1157=ctx.createLinearGradient(0,top+H,0,top);
    gr1157.addColorStop(0,'rgba(255,216,79,0.22)'); gr1157.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1157.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1157; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE CROSS EYES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA’S EYES ARE ACTUALLY THE YELLOW CROSSES, ALSO THERE IS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO LONGER AWAKENED, NEKA ACTUALLY HAS THE CROSS EYES.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE HAS POWERS OF LEVITATE.” THE MISSING 5-10%, ANSWERED.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1157=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1157, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1157, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AWAKENED NEKA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('3:36 PM: TWO GEMINI PICTURES, “NEKA LAI” WITH BLUE EYES,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AWAKENED NEKA” WITH GLOWING CROSS EYES. 90%-95%.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE BLUE EYES WERE THE 5-10%. THERE IS NO AWAKENED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE LEVITATES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8, 8:26 PM: NEKA LEVITATES AND CREATES 2 LARGE VOID', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THRONES, AS NIRTHOLOGE TEARS THE GAMES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW IT IS WRITTEN DOWN AS A POWER OF HIS: LEVITATE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1157=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1157, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1157, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE FORMS ARE NOTHING NOW', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 4:37 PM: “THE FORMS ARE NOTHING NOW.” THE FIRST', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LINE OF THE ERA. NO AWAKENED FORM FITS THAT RULE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE NEKA, CROSS EYES ALWAYS. NOT A FORM. HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA ACTUALLY HAS THE CROSS EYES.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('YELLOW CROSSES, ALWAYS ON. HE LEVITATES. HIS RULING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE CROSS EYES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1158){
    // BEAT 1158: ALEX 303 LOWED DOWN.
    // Toby, October 15, 2026, 4:12 PM EDT, his own typing:
    //   “ALEX 303 WAS LOWED DOWN INTO POWER, NO LONGER FORM, NOW
    //   CAME AN ACTUAL HUMAN-LIKE BEING WITH GLOWING YELLOW
    //   CROSS EYES.” LESS POWER, NO FORM, A BEING. HIS SPELLING.
    // Priors, each verified in the archive before it was drawn:
    //   ALEX CONSTANTLY WAS ALEX 303
    //     OCT 13, 3:37 PM: “ALEX WON, AND ALEX NOW CAN CONTROL THE
    //     FORMS. ALEX CONSTANTLY WAS ALEX 303.” TWO DAYS AGO.
    //     TODAY: NO LONGER FORM. THE CONSTANT ONE IS LOWED DOWN.
    //   IN CLASSICS NOW
    //     OCT 14, 6:40 AM: “ALEX 303 IN CLASSICS NOW. 😏” POWER:
    //     THE ALPHABET AND INFINITY 9S, ABSOLUTE INFINITY.
    //     ONE DAY IN CLASSICS. THEN LOWED DOWN INTO POWER.
    //   THE COAT COMES OFF
    //     OCT 10, 1:30 PM: NEKA TAKES OFF HIS COAT, AND THERE IS
    //     ALEX RIGHT THERE. ALEX AND NEKA ARE 2, AND ONE.
    //     WHAT CAME INSTEAD: A HUMAN-LIKE BEING, CROSS EYES.
    const dt = c - 25196.0;
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
    const gr1158=ctx.createLinearGradient(0,top+H,0,top);
    gr1158.addColorStop(0,'rgba(255,120,120,0.22)'); gr1158.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1158.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1158; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX 303 LOWED DOWN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX 303 WAS LOWED DOWN INTO POWER, NO LONGER FORM, NOW', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAME AN ACTUAL HUMAN-LIKE BEING WITH GLOWING YELLOW', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CROSS EYES.” LESS POWER, NO FORM, A BEING. HIS SPELLING.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1158=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1158, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1158, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX CONSTANTLY WAS ALEX 303', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 3:37 PM: “ALEX WON, AND ALEX NOW CAN CONTROL THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FORMS. ALEX CONSTANTLY WAS ALEX 303.” TWO DAYS AGO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TODAY: NO LONGER FORM. THE CONSTANT ONE IS LOWED DOWN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN CLASSICS NOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 6:40 AM: “ALEX 303 IN CLASSICS NOW. 😏” POWER:', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ALPHABET AND INFINITY 9S, ABSOLUTE INFINITY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE DAY IN CLASSICS. THEN LOWED DOWN INTO POWER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1158=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1158, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1158, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE COAT COMES OFF', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10, 1:30 PM: NEKA TAKES OFF HIS COAT, AND THERE IS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEX RIGHT THERE. ALEX AND NEKA ARE 2, AND ONE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHAT CAME INSTEAD: A HUMAN-LIKE BEING, CROSS EYES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AN ACTUAL HUMAN-LIKE BEING.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALEX 303, LOWED DOWN. WHAT CAME INSTEAD HAS CROSS EYES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX 303 LOWED DOWN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
