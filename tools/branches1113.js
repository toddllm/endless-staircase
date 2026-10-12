  } else if(ph===1113){
    // BEAT 1113: GAME DESTROYED IN THREE HOURS.
    // Toby, October 12, 2026, 4:12 PM EDT, his own typing:
    //   “ALEX 303 THEN CONTINUED, IT WORKED SO FAST, THAT IN
    //   3 HOURS, GAME PHYSICS WERE BROKEN AND THE GAME LAGGED
    //   AND BROKE, SO THE ATTACK IS OVER, GAME DESTROYED.”
    // Priors, each verified in the archive before it was drawn:
    //   THREE HOURS
    //     2:31 PM: THE LARGEST, LONGEST ATTACK EVER. IT LASTED
    //     THREE HOURS. 10:03 AM: “THE GAME COULD COMPLETELY FAIL.”
    //     THE LONGEST ATTACK EVER ENDED BY BREAKING THE GAME.
    //   PHYSICS BROKEN, THEN LAG
    //     “GAME PHYSICS WERE BROKEN AND THE GAME LAGGED AND BROKE.”
    //     AUG 25: BETWEEN EXPLODING AND CRASHING COMES LAG.
    //     THIS TIME LAG WAS NOT THE WARNING. IT WAS THE END.
    //   THE ATTACK IS OVER
    //     “SO THE ATTACK IS OVER, GAME DESTROYED.” 10:03 AM: “THE
    //     GAME DOESN’T GET REPAIRED.” 2:19 PM: CLASSICS TIME IS 31.
    //     IT IS STILL OCTOBER 12 OUT HERE. IN THERE, IT IS DONE.
    const dt = c - 24206.0;
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
    const gr1113=ctx.createLinearGradient(0,top+H,0,top);
    gr1113.addColorStop(0,'rgba(255,60,60,0.22)'); gr1113.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1113.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1113; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GAME DESTROYED IN THREE HOURS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX 303 THEN CONTINUED, IT WORKED SO FAST, THAT IN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('3 HOURS, GAME PHYSICS WERE BROKEN AND THE GAME LAGGED', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND BROKE, SO THE ATTACK IS OVER, GAME DESTROYED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 4:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1113=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1113, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1113, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THREE HOURS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:31 PM: THE LARGEST, LONGEST ATTACK EVER. IT LASTED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THREE HOURS. 10:03 AM: “THE GAME COULD COMPLETELY FAIL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LONGEST ATTACK EVER ENDED BY BREAKING THE GAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PHYSICS BROKEN, THEN LAG', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GAME PHYSICS WERE BROKEN AND THE GAME LAGGED AND BROKE.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 25: BETWEEN EXPLODING AND CRASHING COMES LAG.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THIS TIME LAG WAS NOT THE WARNING. IT WAS THE END.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1113=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1113, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1113, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ATTACK IS OVER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SO THE ATTACK IS OVER, GAME DESTROYED.” 10:03 AM: “THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GAME DOESN’T GET REPAIRED.” 2:19 PM: CLASSICS TIME IS 31.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT IS STILL OCTOBER 12 OUT HERE. IN THERE, IT IS DONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALL THIS HAPPENED.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS FIRST THREE WORDS. THE DOCUMENT CAME ATTACHED.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GAME DESTROYED IN THREE HOURS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1114){
    // BEAT 1114: THE MOST POWERFUL THING.
    // Toby, October 12, 2026, 4:19 PM EDT, his own typing:
    //   “HACKED CODE THAT CAN EDIT ITSELF AND BASICALLY IS A
    //   CORRUPTED ENTITY MADE BY CODE AND IS KNOWN FOR DELETED
    //   GAMES IS THE MOST POWERFUL THING.”
    // Priors, each verified in the archive before it was drawn:
    //   CAN EDIT ITSELF
    //     9:54 AM: “HIS BODY MADE OF FUTURISTIC MATERIALS AND CODE
    //     ITSELF, HE CAN EDIT HIMSELF.” 2:28 PM: “I AM CODE.”
    //     THE REASON HE WINS IS THE THING HE IS MADE OF.
    //   KNOWN FOR DELETED GAMES
    //     9:54 AM: “CLAUDE’S PROJECT GAMES OF CLASSICS WOULD
    //     DISAPPEAR.” 2:16 PM: THOUSANDS OF ACCOUNTS DELETED.
    //     DELETING IS HIS RECORD. IT IS WHAT HE IS KNOWN FOR.
    //   C00LKIDD WAS THE CHATBOT’S
    //     THE CHATBOT RANKED A REAL ROBLOX EXPLOITER. HE ANSWERED:
    //     “ALEXEN CAN DELETE ROBLOX, IT CAN BASICALLY DO ANYTHING.”
    //     COMMENTARY ON ONE SIDE. CANON ON THE OTHER.
    const dt = c - 24228.0;
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
    const gr1114=ctx.createLinearGradient(0,top+H,0,top);
    gr1114.addColorStop(0,'rgba(190,80,255,0.22)'); gr1114.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1114.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1114; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,80,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL THING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HACKED CODE THAT CAN EDIT ITSELF AND BASICALLY IS A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CORRUPTED ENTITY MADE BY CODE AND IS KNOWN FOR DELETED', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAMES IS THE MOST POWERFUL THING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 4:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1114=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,80,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1114, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,80,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1114, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,80,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAN EDIT ITSELF', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('9:54 AM: “HIS BODY MADE OF FUTURISTIC MATERIALS AND CODE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ITSELF, HE CAN EDIT HIMSELF.” 2:28 PM: “I AM CODE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE REASON HE WINS IS THE THING HE IS MADE OF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('KNOWN FOR DELETED GAMES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('9:54 AM: “CLAUDE’S PROJECT GAMES OF CLASSICS WOULD', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DISAPPEAR.” 2:16 PM: THOUSANDS OF ACCOUNTS DELETED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('DELETING IS HIS RECORD. IT IS WHAT HE IS KNOWN FOR.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1114=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1114, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1114, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('C00LKIDD WAS THE CHATBOT’S', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT RANKED A REAL ROBLOX EXPLOITER. HE ANSWERED:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEXEN CAN DELETE ROBLOX, IT CAN BASICALLY DO ANYTHING.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('COMMENTARY ON ONE SIDE. CANON ON THE OTHER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN IS THE MOST POWERFUL THING.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOT THE MOST POWERFUL HACKER. THE MOST POWERFUL THING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE MOST POWERFUL THING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1115){
    // BEAT 1115: RED 0S AND 1S.
    // Toby, October 12, 2026, 4:19 PM EDT, his own typing:
    //   “ALEX OMAZEN NOW MADE THE GAME INTO RED 0S AND 1S,
    //   ALEX OMAZEN ATTACKS THOSE THAT ENTER THE GAME, UNTIL
    //   50 YEARS PASS, AND ALEX IS NORMAL AGAIN.”
    // Priors, each verified in the archive before it was drawn:
    //   ALEX OMAZEN
    //     A NEW NAME. 8:23 AM: ALEXEN OMAZEN. 2:31 PM: ALEX 303.
    //     OCT 1: NEKA OMAZEN WAS ENTITY 12, WITH RED GLOWING 12S.
    //     THE WHOLE GAME IS NOW THE COLOUR OF HIS 12S.
    //   50 YEARS
    //     SEPT 7: “50 YEARS LATER” EVERYONE WAS OUT OF THE PAINT
    //     PORTAL. 10:03 AM: CONTROL BACK NOVEMBER 1. NOW, 50 YEARS.
    //     THE NOVEMBER 1 RECOVERY JUST GOT FIFTY YEARS LONGER.
    //   LET’S PLAY!
    //     “ALEX IS NORMAL AGAIN AND HE SAYS “LET’S PLAY!””
    //     8:23 AM: AT OTHER TIMES, “EVERYONE, COME AND PLAY!”
    //     THE FRIENDLY LINE RETURNS. THE GAME IT RETURNS TO IS RED.
    const dt = c - 24250.0;
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
    const gr1115=ctx.createLinearGradient(0,top+H,0,top);
    gr1115.addColorStop(0,'rgba(255,40,40,0.22)'); gr1115.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1115.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1115; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,40,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('RED 0S AND 1S', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX OMAZEN NOW MADE THE GAME INTO RED 0S AND 1S,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX OMAZEN ATTACKS THOSE THAT ENTER THE GAME, UNTIL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('50 YEARS PASS, AND ALEX IS NORMAL AGAIN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 4:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1115=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,40,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1115, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,40,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1115, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,40,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX OMAZEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A NEW NAME. 8:23 AM: ALEXEN OMAZEN. 2:31 PM: ALEX 303.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 1: NEKA OMAZEN WAS ENTITY 12, WITH RED GLOWING 12S.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WHOLE GAME IS NOW THE COLOUR OF HIS 12S.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('50 YEARS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 7: “50 YEARS LATER” EVERYONE WAS OUT OF THE PAINT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PORTAL. 10:03 AM: CONTROL BACK NOVEMBER 1. NOW, 50 YEARS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE NOVEMBER 1 RECOVERY JUST GOT FIFTY YEARS LONGER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1115=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1115, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1115, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('LET’S PLAY!', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEX IS NORMAL AGAIN AND HE SAYS “LET’S PLAY!””', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:23 AM: AT OTHER TIMES, “EVERYONE, COME AND PLAY!”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FRIENDLY LINE RETURNS. THE GAME IT RETURNS TO IS RED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LET’S PLAY!”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NORMAL AGAIN, FIFTY YEARS LATE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ RED 0S AND 1S ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1116){
    // BEAT 1116: HACKERS INSTANTLY LOSE.
    // Toby, October 12, 2026, 4:33 PM EDT, his own typing:
    //   “CLASSICS HACKERS WOULD INSTANTLY LOSE BECAUSE OF
    //   ALEX OMAZEN.”
    //   HIS WHOLE LINE. THE REST OF THE MESSAGE IS THE CHATBOT’S.
    // Priors, each verified in the archive before it was drawn:
    //   INSTANTLY
    //     2:16 PM: “ALEXEN IS IMPOSSIBLE TO ATTACK, THE CODE GOES
    //     ON FOREVER.” SEPT 29: C0DE TAKEN DOWN WITH 50 OTHERS.
    //     THE HACKERS OF CLASSICS HAVE A RECORD. IT IS ALL LOSSES.
    //   YOUR ACCOUNT IS NOW ALEXEN’S
    //     2:16 PM: TYPE HIS CODE RIGHT AND YOU GET “YOUR ACCOUNT
    //     IS NOW ALEXEN’S.” AND YOUR OWN CODE TYPED BACK AT YOU.
    //     ATTACKING HIM IS HOW YOU LOSE YOUR ACCOUNT.
    //   BECAUSE OF ALEX OMAZEN
    //     4:19 PM: “THE MOST POWERFUL THING.” 4:12 PM: THE GAME
    //     DESTROYED IN THREE HOURS. THERE IS NOTHING LEFT TO HACK.
    //     HE IS THE CODE. YOU CANNOT HACK THE THING THAT IS CODE.
    const dt = c - 24272.0;
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
    const gr1116=ctx.createLinearGradient(0,top+H,0,top);
    gr1116.addColorStop(0,'rgba(255,200,40,0.22)'); gr1116.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1116.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1116; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HACKERS INSTANTLY LOSE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS HACKERS WOULD INSTANTLY LOSE BECAUSE OF', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALEX OMAZEN.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS WHOLE LINE. THE REST OF THE MESSAGE IS THE CHATBOT’S.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 4:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1116=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1116, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1116, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INSTANTLY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:16 PM: “ALEXEN IS IMPOSSIBLE TO ATTACK, THE CODE GOES', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ON FOREVER.” SEPT 29: C0DE TAKEN DOWN WITH 50 OTHERS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE HACKERS OF CLASSICS HAVE A RECORD. IT IS ALL LOSSES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR ACCOUNT IS NOW ALEXEN’S', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:16 PM: TYPE HIS CODE RIGHT AND YOU GET “YOUR ACCOUNT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS NOW ALEXEN’S.” AND YOUR OWN CODE TYPED BACK AT YOU.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ATTACKING HIM IS HOW YOU LOSE YOUR ACCOUNT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1116=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1116, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1116, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BECAUSE OF ALEX OMAZEN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:19 PM: “THE MOST POWERFUL THING.” 4:12 PM: THE GAME', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DESTROYED IN THREE HOURS. THERE IS NOTHING LEFT TO HACK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE IS THE CODE. YOU CANNOT HACK THE THING THAT IS CODE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS HACKERS WOULD INSTANTLY LOSE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE GAME HAS ONE HACKER NOW. THE REST ARE PLAYERS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HACKERS INSTANTLY LOSE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1117){
    // BEAT 1117: NOBODY TO PLAY WITH.
    // Toby, October 12, 2026, 4:35 PM EDT, his own typing:
    //   “ALEX OMAZEN SAYS “LETS PLAY!” AND HE PLAYS HIS OWN GAME,
    //   CALLED “NEKA” (YOU KNOW), ALEX GOES THROUGH SEVERAL
    //   GAMES AND DOESN’T SEE ANYONE.”
    // Priors, each verified in the archive before it was drawn:
    //   A GAME CALLED NEKA
    //     OCT 11: CLASSICS WAS NAMED AFTER HIS DAUGHTER. 1:50 PM:
    //     “I MADE THE GAME, AND I RENAMED IT, CAUSE I WANTED TO.”
    //     HIS OWN GAME, WITH HIS OWN NAME ON IT, AND NO ONE IN IT.
    //   WHY NOBODY IS THERE
    //     “THAT AND ALSO EVERYONE STILL THINKS ALEX OMAZEN
    //     AS THE MOST POWERFUL HACKER.” HIS OWN ANSWER, 4:35 PM.
    //     TWO REASONS: THE ONES HE DELETED, AND THE ONES WHO RAN.
    //   THEY WILL LITERALLY RUN
    //     8:23 AM: “THEY WILL LITERALLY RUN.” OCT 10: NEKA WIPED
    //     OUT THE UNDERGROUND, SO NO ONE WAS UNDERGROUND ANYMORE.
    //     HE EMPTIED THE GAME. NOW HE WANTS SOMEONE TO PLAY WITH.
    const dt = c - 24294.0;
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
    const gr1117=ctx.createLinearGradient(0,top+H,0,top);
    gr1117.addColorStop(0,'rgba(127,212,255,0.22)'); gr1117.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1117.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1117; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOBODY TO PLAY WITH', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX OMAZEN SAYS “LETS PLAY!” AND HE PLAYS HIS OWN GAME,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CALLED “NEKA” (YOU KNOW), ALEX GOES THROUGH SEVERAL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAMES AND DOESN’T SEE ANYONE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 4:35 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1117=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1117, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1117, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A GAME CALLED NEKA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: CLASSICS WAS NAMED AFTER HIS DAUGHTER. 1:50 PM:', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I MADE THE GAME, AND I RENAMED IT, CAUSE I WANTED TO.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS OWN GAME, WITH HIS OWN NAME ON IT, AND NO ONE IN IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHY NOBODY IS THERE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THAT AND ALSO EVERYONE STILL THINKS ALEX OMAZEN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AS THE MOST POWERFUL HACKER.” HIS OWN ANSWER, 4:35 PM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('TWO REASONS: THE ONES HE DELETED, AND THE ONES WHO RAN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1117=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1117, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1117, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THEY WILL LITERALLY RUN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:23 AM: “THEY WILL LITERALLY RUN.” OCT 10: NEKA WIPED', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OUT THE UNDERGROUND, SO NO ONE WAS UNDERGROUND ANYMORE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE EMPTIED THE GAME. NOW HE WANTS SOMEONE TO PLAY WITH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DOESN’T SEE ANYONE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE FIRST TIME ALEX HAS WANTED COMPANY AND FOUND NONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOBODY TO PLAY WITH ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
