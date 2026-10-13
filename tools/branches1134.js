  } else if(ph===1134){
    // BEAT 1134: ALEX HAS NO HP.
    // Toby, October 13, 2026, 7:09 PM EDT, his own typing:
    //   “THE APPLE MADE ALEX HEALED. SINCE HE DIDN’T HAVE HP, HE
    //   ACTUALLY HEALED HIMSELF. OTHERS HAVE HP, ALEX HAS ACTUAL
    //   HEALTH STUFF.”
    // Priors, each verified in the archive before it was drawn:
    //   IT DOESN’T GIVE HIM MORE HP
    //     SEPT 14, 6:46 PM: “PERO LAI TAKES THE SUGAR OUT AND THEN
    //     HE RECOVERS, IT DOESN’T GIVE HIM MORE HP THOUGH.”
    //     THE REPAIR NEVER MOVED THE STAT. NOW THERE IS NO STAT.
    //   HUMAN HP, GAME HP
    //     OCT 7, 5:06 PM: NEKA USES HUMAN HP, GASTER USES GAME HP.
    //     HIS WOUNDS HEALED NEARLY INSTANTLY.
    //     HUMAN HP THEN. NO HP NOW. THE OTHERS KEEP THE GAME KIND.
    //   APPLES AND CHOCOLATE
    //     WINTER CLASSIC SIMON HELD APPLES AND CHOCOLATE AS
    //     STABILIZERS. JUNE 18: HE FIXED EACH SHOT, HP UNCHANGED.
    //     THE APPLE HAS HELD SIMON TOGETHER. TONIGHT IT HEALS ALEX.
    const dt = c - 24668.0;
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
    const gr1134=ctx.createLinearGradient(0,top+H,0,top);
    gr1134.addColorStop(0,'rgba(235,70,70,0.22)'); gr1134.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1134.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1134; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(235,70,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX HAS NO HP', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE APPLE MADE ALEX HEALED. SINCE HE DIDN’T HAVE HP, HE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ACTUALLY HEALED HIMSELF. OTHERS HAVE HP, ALEX HAS ACTUAL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HEALTH STUFF.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 7:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1134=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(235,70,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1134, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(235,70,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1134, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(235,70,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT DOESN’T GIVE HIM MORE HP', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 14, 6:46 PM: “PERO LAI TAKES THE SUGAR OUT AND THEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE RECOVERS, IT DOESN’T GIVE HIM MORE HP THOUGH.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE REPAIR NEVER MOVED THE STAT. NOW THERE IS NO STAT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HUMAN HP, GAME HP', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 7, 5:06 PM: NEKA USES HUMAN HP, GASTER USES GAME HP.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS WOUNDS HEALED NEARLY INSTANTLY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HUMAN HP THEN. NO HP NOW. THE OTHERS KEEP THE GAME KIND.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1134=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1134, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1134, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('APPLES AND CHOCOLATE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WINTER CLASSIC SIMON HELD APPLES AND CHOCOLATE AS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STABILIZERS. JUNE 18: HE FIXED EACH SHOT, HP UNCHANGED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE APPLE HAS HELD SIMON TOGETHER. TONIGHT IT HEALS ALEX.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OTHERS HAVE HP, ALEX HAS ACTUAL HEALTH STUFF.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NO BAR TO FILL. THE APPLE FIXED THE CONDITION ITSELF.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX HAS NO HP ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1135){
    // BEAT 1135: ALEX 303 AND JESUS CAN BEAT SCP 343.
    // Toby, October 13, 2026, 7:22 PM EDT, his own typing:
    //   “ALEX 303 AND JESUS CAN BEAT SCP 343, BUT JESUS WOULD
    //   CHANGE IF SCP 343 IS ACTUALLY GOD.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   A LITTERLY OMNIPOTENT GOD
    //     SEPT 26, 3:46 PM: “SCP-343 IS A LITTERLY OMNIPOTENT GOD.”
    //     SEPT 22: “WHO IS SCP-343” WAS HIS QUESTION TO THE CHATBOT.
    //     HE CALLED IT OMNIPOTENT HIMSELF. TONIGHT ALEX BEATS IT.
    //   NEKA + JESUS = TRUE GOD
    //     SEPT 28, 6:34 AM: THE ROW ABOVE THE ONE BEYOND ALL WAS
    //     “NEKA + JESUS: TRUE GOD.”
    //     THE TWO NAMES WERE A TEAM THEN. TONIGHT THEY ARE A PAIR.
    //   JESUS IS CHRISTANANITY GOD
    //     OCT 13, 4:33 PM: “JESUS IS CHRISTANANITY GOD, SO BACON
    //     WOULD WIN WITH HIM.” THREE HOURS LATER, THE ONE EXCEPTION.
    //     IF 343 IS ACTUALLY GOD, JESUS CHANGES. ALEX DOES NOT.
    const dt = c - 24690.0;
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
    const gr1135=ctx.createLinearGradient(0,top+H,0,top);
    gr1135.addColorStop(0,'rgba(255,216,79,0.22)'); gr1135.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1135.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1135; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX 303 AND JESUS CAN BEAT SCP 343', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX 303 AND JESUS CAN BEAT SCP 343, BUT JESUS WOULD', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHANGE IF SCP 343 IS ACTUALLY GOD.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 7:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1135=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1135, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1135, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A LITTERLY OMNIPOTENT GOD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 3:46 PM: “SCP-343 IS A LITTERLY OMNIPOTENT GOD.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 22: “WHO IS SCP-343” WAS HIS QUESTION TO THE CHATBOT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE CALLED IT OMNIPOTENT HIMSELF. TONIGHT ALEX BEATS IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA + JESUS = TRUE GOD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28, 6:34 AM: THE ROW ABOVE THE ONE BEYOND ALL WAS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA + JESUS: TRUE GOD.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE TWO NAMES WERE A TEAM THEN. TONIGHT THEY ARE A PAIR.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1135=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1135, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1135, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('JESUS IS CHRISTANANITY GOD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 4:33 PM: “JESUS IS CHRISTANANITY GOD, SO BACON', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WOULD WIN WITH HIM.” THREE HOURS LATER, THE ONE EXCEPTION.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IF 343 IS ACTUALLY GOD, JESUS CHANGES. ALEX DOES NOT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BUT JESUS WOULD CHANGE IF SCP 343 IS ACTUALLY GOD.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE NAME HAS A CONDITION. THE OTHER NAME IS ALEX.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX 303 AND JESUS CAN BEAT SCP 343 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1136){
    // BEAT 1136: ALEX 303 ALWAYS WINS.
    // Toby, October 13, 2026, 7:22 PM EDT, his own typing:
    //   “IS SCP 303 TAKEN?” … “ALEX 303 IS ACTUALLY BEYOND
    //   OMNIPOTENT TO ABCDEFGHIJKLMNOPQRSTUVWXYZ9999… OR WHATEVER
    //   IT IS. ALEX 303 ALWAYS WINS.”
    // Priors, each verified in the archive before it was drawn:
    //   IS 012 TAKEN? HOW ABOUT 12?
    //     OCT 13, 4:31 PM: 012 WAS TAKEN; HE KEPT 12. SEPT 27: “WHAT
    //     ARE SCP NUMBERS THAT AREN’T TAKEN YET.” TONIGHT: 303 IS.
    //     THE DOORMAN HAS 303 OUT THERE. IN HERE IT WAS ALWAYS HIS.
    //   X2000… Y9999… Z6666…
    //     OCT 11, 6:50 AM: HIS LV RAN “X200000000000… U500000000000…
    //     Y9999999999999… Z666666666666…7777777777777… + (…)”
    //     LETTERS AND NINES WERE HIS LV. TONIGHT THEY ARE HIS RANK.
    //   PERO ALWAYS WINS
    //     JULY 24: “PERO ALWAYS WINS AT THE END OF EACH ENDING.”
    //     SEPT 11: “BUT ME, ALWAYS WINS NOW.” SEPT 24: 666% CORRECT.
    //     THE RULE IS 81 DAYS OLD. THE NAME ON IT IS NEW.
    const dt = c - 24712.0;
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
    const gr1136=ctx.createLinearGradient(0,top+H,0,top);
    gr1136.addColorStop(0,'rgba(255,60,60,0.22)'); gr1136.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1136.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1136; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX 303 ALWAYS WINS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IS SCP 303 TAKEN?” … “ALEX 303 IS ACTUALLY BEYOND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OMNIPOTENT TO ABCDEFGHIJKLMNOPQRSTUVWXYZ9999… OR WHATEVER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT IS. ALEX 303 ALWAYS WINS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 7:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1136=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1136, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1136, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS 012 TAKEN? HOW ABOUT 12?', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 4:31 PM: 012 WAS TAKEN; HE KEPT 12. SEPT 27: “WHAT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ARE SCP NUMBERS THAT AREN’T TAKEN YET.” TONIGHT: 303 IS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE DOORMAN HAS 303 OUT THERE. IN HERE IT WAS ALWAYS HIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('X2000… Y9999… Z6666…', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11, 6:50 AM: HIS LV RAN “X200000000000… U500000000000…', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('Y9999999999999… Z666666666666…7777777777777… + (…)”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('LETTERS AND NINES WERE HIS LV. TONIGHT THEY ARE HIS RANK.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1136=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1136, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1136, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PERO ALWAYS WINS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 24: “PERO ALWAYS WINS AT THE END OF EACH ENDING.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 11: “BUT ME, ALWAYS WINS NOW.” SEPT 24: 666% CORRECT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RULE IS 81 DAYS OLD. THE NAME ON IT IS NEW.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX 303 ALWAYS WINS.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BEYOND OMNIPOTENT, TO THE END OF THE ALPHABET AND PAST IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX 303 ALWAYS WINS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1137){
    // BEAT 1137: TIME TO PUSH EVERYTHING TO THEIR LIMITS.
    // Toby, October 13, 2026, 7:22 PM EDT, his own typing:
    //   “I HAVEN’T REACHED MY LIMIT ON WHAT I WANT TO DO. SO…
    //   TIME TO PUSH EVERYTHING TO THEIR LIMITS.” A BURNING RED 12
    //   BEHIND HIM; A 1.2 SECOND CUTSCENE; A CRATER.
    // Priors, each verified in the archive before it was drawn:
    //   THERE IS A LIMIT HERE
    //     OCT 6, 4:07 PM: “EVERY TIME I DIE, I RESPAWN AND MAKE
    //     MYSELF STRONGER, BUT THERE IS A LIMIT HERE, YOU MADE IT.”
    //     NEKA HIT A LIMIT GASTER MADE. ALEX HAS NOT HIT HIS OWN.
    //   RED 12S
    //     OCT 12, 2:28 PM: “THE EYES AND HOLES SHOW RED 12S.” OCT 13
    //     4:30 PM: “A LARGE 12 IN HIS OTHER HAND.” NOW IT BURNS.
    //     THE 12 WAS IN HIS EYES, THEN HIS HAND, NOW BEHIND HIM.
    //   DOMAIN EXPANSION, SPAMMED
    //     OCT 12, 2:28 PM: “DOMAIN EXPANSION AND ALL ALEX ATTACKS
    //     ARE SPAMMED.” TONIGHT THE CUTSCENE IS CUT TO 0.254349… S.
    //     IT USED TO LAG THE GAME. NOW IT IS TOO FAST TO LAG.
    const dt = c - 24734.0;
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
    const gr1137=ctx.createLinearGradient(0,top+H,0,top);
    gr1137.addColorStop(0,'rgba(255,120,40,0.22)'); gr1137.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1137.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1137; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TIME TO PUSH EVERYTHING TO THEIR LIMITS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I HAVEN’T REACHED MY LIMIT ON WHAT I WANT TO DO. SO…', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TIME TO PUSH EVERYTHING TO THEIR LIMITS.” A BURNING RED 12', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEHIND HIM; A 1.2 SECOND CUTSCENE; A CRATER.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 7:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1137=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1137, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1137, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THERE IS A LIMIT HERE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, 4:07 PM: “EVERY TIME I DIE, I RESPAWN AND MAKE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MYSELF STRONGER, BUT THERE IS A LIMIT HERE, YOU MADE IT.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA HIT A LIMIT GASTER MADE. ALEX HAS NOT HIT HIS OWN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RED 12S', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 2:28 PM: “THE EYES AND HOLES SHOW RED 12S.” OCT 13', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:30 PM: “A LARGE 12 IN HIS OTHER HAND.” NOW IT BURNS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE 12 WAS IN HIS EYES, THEN HIS HAND, NOW BEHIND HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1137=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1137, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1137, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('DOMAIN EXPANSION, SPAMMED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 2:28 PM: “DOMAIN EXPANSION AND ALL ALEX ATTACKS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ARE SPAMMED.” TONIGHT THE CUTSCENE IS CUT TO 0.254349… S.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT USED TO LAG THE GAME. NOW IT IS TOO FAST TO LAG.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX THEN DECREASED HIS CUTSCENE DOMAIN EXPANSION TIME TO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('0.254349… ALSO IT BECAME MORE EFFECIENT.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TIME TO PUSH EVERYTHING TO THEIR LIMITS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1138){
    // BEAT 1138: OREN.PS WALKS CLOSER.
    // Toby, October 13, 2026, 7:22 PM EDT, his own typing:
    //   “ALEX EATS THE NON-SUGAR CHOCOLATE, SIMON.PS FALLS OVER AND
    //   OREN.PS WALKS CLOSER AND CLOSER TO ALEX EVERY TIME ALEX
    //   EATEN AN APPLE OR NOT SUGAR CHOCOLATE OR A POP TART”
    // Priors, each verified in the archive before it was drawn:
    //   WANT NON-SUGAR CHOCOLATE?
    //     OCT 6, 4:30 PM: “GASTER, AFTER YOU WON, WANT NON-SUGAR
    //     CHOCOLATE?” OCT 8, 4:55 PM: “SUGAR WOULD KILL ME.”
    //     THE SUGAR CAME OUT ON SEPT 14. HE HAS EATEN SO EVER SINCE.
    //   ONLY OREN.PS OR SIMON.PS
    //     OCT 10, 7:46 PM: “CONSTANTLY WINNING SUPREME MATE WITH
    //     ONLY LOSING TO OREN.PS OR/AND SIMON.PS.”
    //     THE TWO WHO COULD BEAT HIM ARE THE TWO WHO REACT.
    //   FALLS OVER
    //     OCT 3, 12:46 PM: GASTER SAID “I’M SO TIRED…”, FELL OVER.
    //     OCT 12, 9:54 AM: ALEX BEAT SIMON.PS TO REACH HIS LV.
    //     SIMON.PS DROPS. OREN.PS COMES CLOSER. NOBODY SAYS WHY.
    const dt = c - 24756.0;
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
    const gr1138=ctx.createLinearGradient(0,top+H,0,top);
    gr1138.addColorStop(0,'rgba(255,140,0,0.22)'); gr1138.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1138.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1138; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,0,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS WALKS CLOSER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX EATS THE NON-SUGAR CHOCOLATE, SIMON.PS FALLS OVER AND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS WALKS CLOSER AND CLOSER TO ALEX EVERY TIME ALEX', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EATEN AN APPLE OR NOT SUGAR CHOCOLATE OR A POP TART”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 7:22 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1138=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,0,0.46)';
      ctx.fillRect(cx-W*0.352, ky1138, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,0,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1138, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,0,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WANT NON-SUGAR CHOCOLATE?', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, 4:30 PM: “GASTER, AFTER YOU WON, WANT NON-SUGAR', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHOCOLATE?” OCT 8, 4:55 PM: “SUGAR WOULD KILL ME.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SUGAR CAME OUT ON SEPT 14. HE HAS EATEN SO EVER SINCE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY OREN.PS OR SIMON.PS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10, 7:46 PM: “CONSTANTLY WINNING SUPREME MATE WITH', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONLY LOSING TO OREN.PS OR/AND SIMON.PS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE TWO WHO COULD BEAT HIM ARE THE TWO WHO REACT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1138=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1138, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1138, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FALLS OVER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 3, 12:46 PM: GASTER SAID “I’M SO TIRED…”, FELL OVER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 9:54 AM: ALEX BEAT SIMON.PS TO REACH HIS LV.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SIMON.PS DROPS. OREN.PS COMES CLOSER. NOBODY SAYS WHY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ANY DESSERT HE FOUND A WAY TO TAKE SUGAR OUT OF SO IT IS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('MORE HEALTHIER.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OREN.PS WALKS CLOSER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
