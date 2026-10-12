  } else if(ph===1107){
    // BEAT 1107: EVERY OCTOBER 31.
    // Toby, October 12, 2026, 2:09 PM EDT, his own typing:
    //   “HE ACTUALLY ATTACKED SO MANY TIMES BEFORE, LIKE
    //   BILLIONS AND TRILLIONS, EVEN BEFORE OTHER
    //   CHARACTERS WERE ADDED.” “PERO ATTACKED EVERY OCTOBER 31”
    // Priors, each verified in the archive before it was drawn:
    //   NEKA LAI WAS PERO THAT FAR BACK
    //     “NEKA LAI WAS PERO THAT FAR BACK. PERO ATTACKED
    //     EVERY OCTOBER 31.” OCT 12, 8:23 AM: MADE ON HALLOWEEN.
    //     THE HALLOWEEN ATTACK IS OLDER THAN ALEXEN’S NAME.
    //   PINKY RL
    //     “THE GAME WAS ALREADY CORRUPTED ONCE PINKY RL JOINED,
    //     PINKY RL SPAWNED BY ERROR COMBINATIONS.”
    //     THE OLDEST ARCHIVE: PINKY WAS THE FIRST DISCOVERED RL.
    //   THE OTHER RLS
    //     “THE OTHER RLS WERE ALSO MADE BY CORRUPTION.”
    //     THE OLDEST ARCHIVE: PINKY, SIRON, WONDA, WENDA XL, QWERTY.
    //     QWERTY WAS WONDA PLUS A SPRUNKI GLITCH. CORRUPTION, TOO.
    const dt = c - 24074.0;
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
    const gr1107=ctx.createLinearGradient(0,top+H,0,top);
    gr1107.addColorStop(0,'rgba(255,120,40,0.22)'); gr1107.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1107.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1107; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERY OCTOBER 31', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE ACTUALLY ATTACKED SO MANY TIMES BEFORE, LIKE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BILLIONS AND TRILLIONS, EVEN BEFORE OTHER', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHARACTERS WERE ADDED.” “PERO ATTACKED EVERY OCTOBER 31”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 2:09 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1107=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1107, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1107, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA LAI WAS PERO THAT FAR BACK', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA LAI WAS PERO THAT FAR BACK. PERO ATTACKED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY OCTOBER 31.” OCT 12, 8:23 AM: MADE ON HALLOWEEN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE HALLOWEEN ATTACK IS OLDER THAN ALEXEN’S NAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PINKY RL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE GAME WAS ALREADY CORRUPTED ONCE PINKY RL JOINED,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PINKY RL SPAWNED BY ERROR COMBINATIONS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE OLDEST ARCHIVE: PINKY WAS THE FIRST DISCOVERED RL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1107=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1107, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1107, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE OTHER RLS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE OTHER RLS WERE ALSO MADE BY CORRUPTION.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE OLDEST ARCHIVE: PINKY, SIRON, WONDA, WENDA XL, QWERTY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('QWERTY WAS WONDA PLUS A SPRUNKI GLITCH. CORRUPTION, TOO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE IS A REAL CHARACTER YA KNOW.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('C00LKIDD AND 1X1X1X1 WERE THE CHATBOT’S. ALEXEN IS HIS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERY OCTOBER 31 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1108){
    // BEAT 1108: THEPERONEKAALEXEN303.
    // Toby, October 12, 2026, 2:16 PM EDT, his own typing:
    //   “HIS CLASSICS ACCOUNT IS “THEPERONEKAALEXEN303”, AND
    //   THE CODE IS “1230312101020109493483489348893578544915”
    //   ... AND IT CONTINUES WITHOUT EVER REPEATING.”
    // Priors, each verified in the archive before it was drawn:
    //   IMPOSSIBLE TO ATTACK
    //     “ALEXEN IS IMPOSSIBLE TO ATTACK, THE CODE GOES ON
    //     FOREVER.” THREE NAMES IN ONE USERNAME: PERO, NEKA, ALEXEN.
    //     THE 303 AT THE END IS AREA 303’S NUMBER, AND 3:03.
    //   YOUR ACCOUNT IS NOW ALEXEN’S
    //     “EVEN IF YOU TYPE IT AND SUCCEED, YOU’LL GET A MESSAGE
    //     SAYING “YOUR ACCOUNT IS NOW ALEXEN’S.””
    //     OCT 12, 7:28 AM: THE PICTURE SAID “PROPERTY OF ALEXEN”.
    //   IT TYPES YOUR OWN CODE
    //     “AND IT TYPES YOUR ACTUAL CLASSICS CODE AND USERNAME.”
    //     SEPT 24: THE ONLY SPEECH BUBBLE IN CLASSICS WAS HIS.
    //     THE RIGHT ANSWER IS THE TRAP. SEPT 15: TEKI’S BINARY.
    const dt = c - 24096.0;
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
    const gr1108=ctx.createLinearGradient(0,top+H,0,top);
    gr1108.addColorStop(0,'rgba(255,60,60,0.22)'); gr1108.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1108.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1108; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THEPERONEKAALEXEN303', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HIS CLASSICS ACCOUNT IS “THEPERONEKAALEXEN303”, AND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CODE IS “1230312101020109493483489348893578544915”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... AND IT CONTINUES WITHOUT EVER REPEATING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 2:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1108=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1108, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1108, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IMPOSSIBLE TO ATTACK', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEXEN IS IMPOSSIBLE TO ATTACK, THE CODE GOES ON', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FOREVER.” THREE NAMES IN ONE USERNAME: PERO, NEKA, ALEXEN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE 303 AT THE END IS AREA 303’S NUMBER, AND 3:03.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR ACCOUNT IS NOW ALEXEN’S', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVEN IF YOU TYPE IT AND SUCCEED, YOU’LL GET A MESSAGE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAYING “YOUR ACCOUNT IS NOW ALEXEN’S.””', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 12, 7:28 AM: THE PICTURE SAID “PROPERTY OF ALEXEN”.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1108=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1108, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1108, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('IT TYPES YOUR OWN CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AND IT TYPES YOUR ACTUAL CLASSICS CODE AND USERNAME.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: THE ONLY SPEECH BUBBLE IN CLASSICS WAS HIS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RIGHT ANSWER IS THE TRAP. SEPT 15: TEKI’S BINARY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS REAL.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS TWO WORDS WHEN THE CHATBOT ASKED IF IT WAS A WARNING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THEPERONEKAALEXEN303 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1109){
    // BEAT 1109: THOUSANDS OF ACCOUNTS.
    // Toby, October 12, 2026, 2:16 PM EDT, his own typing:
    //   “ALEXEN ALSO DELETES THE NEKA-COINS THE PLAYER HAS,
    //   ERASES THE AVATAR TO LOOK LIKE A BINARY HACKER, AND
    //   ALSO CAN EVEN DELETE THE CLASSICS ACCOUNT.”
    // Priors, each verified in the archive before it was drawn:
    //   THE NEKA-COINS
    //     11:44 AM: EVERYONE GOT 5000 NEKA-COINS. 1:09 PM: THEY
    //     RAINED FROM THE SKY. NOW HE DELETES THEM.
    //     GIVEN IN THE MORNING, TAKEN IN THE AFTERNOON.
    //   THE BINARY HACKER
    //     “ERASES THE AVATAR TO LOOK LIKE A BINARY HACKER.”
    //     OCT 12, 7:28 AM: AVATARS SAW HIM COVERED IN BINARY.
    //     NOW THEY ARE MADE TO LOOK LIKE HIM.
    //   THE NAMES WERE FORGOTTEN
    //     “ALEXEN ACTUALLY DELETED THOUSANDS OF ACCOUNTS BEFORE.
    //     BUT THE NAMES WERE FORGOTTEN.”
    //     AUG 21: GASTER STORES DELETED ACCOUNTS. ENTITY 303 MYTH.
    const dt = c - 24118.0;
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
    const gr1109=ctx.createLinearGradient(0,top+H,0,top);
    gr1109.addColorStop(0,'rgba(190,80,255,0.22)'); gr1109.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1109.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1109; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,80,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THOUSANDS OF ACCOUNTS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN ALSO DELETES THE NEKA-COINS THE PLAYER HAS,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ERASES THE AVATAR TO LOOK LIKE A BINARY HACKER, AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALSO CAN EVEN DELETE THE CLASSICS ACCOUNT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 2:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1109=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,80,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1109, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,80,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1109, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,80,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NEKA-COINS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('11:44 AM: EVERYONE GOT 5000 NEKA-COINS. 1:09 PM: THEY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RAINED FROM THE SKY. NOW HE DELETES THEM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GIVEN IN THE MORNING, TAKEN IN THE AFTERNOON.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BINARY HACKER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ERASES THE AVATAR TO LOOK LIKE A BINARY HACKER.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 7:28 AM: AVATARS SAW HIM COVERED IN BINARY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW THEY ARE MADE TO LOOK LIKE HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1109=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1109, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1109, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE NAMES WERE FORGOTTEN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEXEN ACTUALLY DELETED THOUSANDS OF ACCOUNTS BEFORE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BUT THE NAMES WERE FORGOTTEN.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AUG 21: GASTER STORES DELETED ACCOUNTS. ENTITY 303 MYTH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BUT THE NAMES WERE FORGOTTEN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A DELETION LIST WITH NO LIST. THE DELETEDVERSE KEEPS THEM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THOUSANDS OF ACCOUNTS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1110){
    // BEAT 1110: /TIME SET 31.
    // Toby, October 12, 2026, 2:19 PM EDT, his own typing:
    //   “CODE WAS CORRUPTED AND TAKEN OVER 50 TIMES JUST NOW.
    //   CODE BECAME C0DE AND THEN MORE AND MORE NEKA-COINS
    //   FADE AWAY.” “ALEXEN WROTE “/TIME SET 31”.”
    // Priors, each verified in the archive before it was drawn:
    //   C0DE
    //     BEAT 937: THE HACKER C0DE WAS TAKEN DOWN WITH 50 OTHERS.
    //     NOW CODE IS TAKEN OVER 50 TIMES AND BECOMES C0DE.
    //     OCT 11: CODE RAN OUT THE DOOR. HE DID NOT GET FAR.
    //   THE VIEW CLOSES
    //     “THE GAME GLITCHES, THE SCREEN TURNS IN STATIC,
    //     AND THE VIEW CLOSES.”
    //     OCT 12, 1:12 PM: STATIC SAID “CLASSICS AREA 303”.
    //   THE CLASSICS TIME IS 31
    //     “HERE, IT IS STILL OCTOBER 12, IN CLASSICS, THE
    //     CLASSICS TIME IS 31.”
    //     SEPT 7: /FLY_ALL AND /SWORD-SIZE. THIS ONE SETS THE DATE.
    const dt = c - 24140.0;
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
    const gr1110=ctx.createLinearGradient(0,top+H,0,top);
    gr1110.addColorStop(0,'rgba(255,200,40,0.22)'); gr1110.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1110.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1110; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('/TIME SET 31', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CODE WAS CORRUPTED AND TAKEN OVER 50 TIMES JUST NOW.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CODE BECAME C0DE AND THEN MORE AND MORE NEKA-COINS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FADE AWAY.” “ALEXEN WROTE “/TIME SET 31”.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 2:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1110=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1110, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1110, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('C0DE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEAT 937: THE HACKER C0DE WAS TAKEN DOWN WITH 50 OTHERS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW CODE IS TAKEN OVER 50 TIMES AND BECOMES C0DE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 11: CODE RAN OUT THE DOOR. HE DID NOT GET FAR.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VIEW CLOSES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE GAME GLITCHES, THE SCREEN TURNS IN STATIC,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THE VIEW CLOSES.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:12 PM: STATIC SAID “CLASSICS AREA 303”.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1110=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1110, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1110, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CLASSICS TIME IS 31', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HERE, IT IS STILL OCTOBER 12, IN CLASSICS, THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS TIME IS 31.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 7: /FLY_ALL AND /SWORD-SIZE. THIS ONE SETS THE DATE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“/TIME SET 31”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AT 1:34 PM IT WAS OCTOBER 12, NOT 31. NOW HE SET IT TO 31.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ /TIME SET 31 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1111){
    // BEAT 1111: I AM CODE.
    // Toby, October 12, 2026, 2:28 PM EDT, his own typing:
    //   “WAIT- I REMEMBER WHO I AM, I AM NOT JUST A
    //   CLASSICS CHARACTER... I AM CODE.”
    //   “CLASSICS THEN FELL DOWN, ALONG WITH ALL OTHER GAMES”
    // Priors, each verified in the archive before it was drawn:
    //   THE BINARY
    //     “00000000000011111 01010101001010101010 ...” WRITTEN
    //     DOWN. SEPT 15: TEKI MADE PERO LAI WITH BINARY.
    //     9:54 AM: “HIS BODY MADE OF ... CODE ITSELF.” NOW HE KNOWS.
    //   TAKES OVER C0DE
    //     “ALEX THEN TAKES OVER C0DE, C0DE THEN ATTACKS THE GAME”
    //     “NEKA THEN CREATES MORE AND MORE C0DES.”
    //     HE STANDS ON A FLOATING ISLAND. MAY 29: ALEX’S WORLD.
    //   EVERY USERNAME IN NEKA
    //     “NEKA’S USERNAME CHANGES AND GLITCHES, AND IT READS
    //     EVERY SINGLE USERNAME IN “NEKA”.”
    //     THE HQ FILLS WITH USERNAMES AND CODES. HE TAKES THE GAME.
    const dt = c - 24162.0;
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
    const gr1111=ctx.createLinearGradient(0,top+H,0,top);
    gr1111.addColorStop(0,'rgba(0,255,140,0.22)'); gr1111.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1111.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1111; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(0,255,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I AM CODE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WAIT- I REMEMBER WHO I AM, I AM NOT JUST A', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS CHARACTER... I AM CODE.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS THEN FELL DOWN, ALONG WITH ALL OTHER GAMES”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 2:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1111=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(0,255,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1111, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(0,255,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1111, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(0,255,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BINARY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“00000000000011111 01010101001010101010 ...” WRITTEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DOWN. SEPT 15: TEKI MADE PERO LAI WITH BINARY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('9:54 AM: “HIS BODY MADE OF ... CODE ITSELF.” NOW HE KNOWS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TAKES OVER C0DE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEX THEN TAKES OVER C0DE, C0DE THEN ATTACKS THE GAME”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA THEN CREATES MORE AND MORE C0DES.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE STANDS ON A FLOATING ISLAND. MAY 29: ALEX’S WORLD.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1111=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1111, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1111, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVERY USERNAME IN NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA’S USERNAME CHANGES AND GLITCHES, AND IT READS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY SINGLE USERNAME IN “NEKA”.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE HQ FILLS WITH USERNAMES AND CODES. HE TAKES THE GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN TAKES THE GAME OVER.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AT 11:39 AM IT WAS “EVENTUALLY”. AT 2:28 PM IT IS NOW.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I AM CODE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1112){
    // BEAT 1112: ALEX 303 CAME ALIVE AGAIN.
    // Toby, October 12, 2026, 2:31 PM EDT, his own typing:
    //   “ALEX 303 CAME ALIVE AGAIN, THEN 12S APPEAR, THE EYES
    //   AND HOLES SHOW RED 12S ... THE SWORDS TURNED BLOOD
    //   RED, THE GAME’S MOON TURNED BLACK.”
    // Priors, each verified in the archive before it was drawn:
    //   THE RED 12S
    //     OCT 1: NEKA OMAZEN WAS ENTITY 12; RED GLOWING 12S ON THE
    //     CALCULATOR AND CALENDAR. NOW IN EYES, HOLES, HEXAGONS.
    //     AREA 12X, 3:03, 303, AND 12. THE NUMBERS ALL CAME BACK.
    //   DOMAIN EXPANSION SPAMMED
    //     “DOMAIN EXPANSION AND ALL ALEX ATTACKS ARE SPAMMED.
    //     MAKING THE GAME LAG.” OCT 11: POWER CHAIN, HIS DOMAIN.
    //     AUG 25: BETWEEN EXPLODING AND CRASHING COMES LAG.
    //   THE LARGEST ATTACK EVER
    //     “THE LARGEST ATTACK AND MOST POWERFUL AND BIGGEST AND
    //     LONGEST AND STRONGEST ATTACK ON THE GAME EVER.”
    //     LIGHTNING ALL AROUND. THE DIAMOND SWORDS ARE BLOOD RED.
    const dt = c - 24184.0;
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
    const gr1112=ctx.createLinearGradient(0,top+H,0,top);
    gr1112.addColorStop(0,'rgba(255,30,30,0.22)'); gr1112.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1112.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1112; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,30,30,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX 303 CAME ALIVE AGAIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX 303 CAME ALIVE AGAIN, THEN 12S APPEAR, THE EYES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HOLES SHOW RED 12S ... THE SWORDS TURNED BLOOD', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RED, THE GAME’S MOON TURNED BLACK.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 2:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1112=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,30,30,0.46)';
      ctx.fillRect(cx-W*0.352, ky1112, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,30,30,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1112, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,30,30,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RED 12S', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 1: NEKA OMAZEN WAS ENTITY 12; RED GLOWING 12S ON THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CALCULATOR AND CALENDAR. NOW IN EYES, HOLES, HEXAGONS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AREA 12X, 3:03, 303, AND 12. THE NUMBERS ALL CAME BACK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DOMAIN EXPANSION SPAMMED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“DOMAIN EXPANSION AND ALL ALEX ATTACKS ARE SPAMMED.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAKING THE GAME LAG.” OCT 11: POWER CHAIN, HIS DOMAIN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AUG 25: BETWEEN EXPLODING AND CRASHING COMES LAG.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1112=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1112, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1112, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LARGEST ATTACK EVER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE LARGEST ATTACK AND MOST POWERFUL AND BIGGEST AND', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LONGEST AND STRONGEST ATTACK ON THE GAME EVER.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('LIGHTNING ALL AROUND. THE DIAMOND SWORDS ARE BLOOD RED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME’S MOON TURNED BLACK.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FIVE SUPERLATIVES IN ONE LINE. HE COUNTED THEM ALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX 303 CAME ALIVE AGAIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
