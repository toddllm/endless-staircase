  } else if(ph===975){
    // BEAT 975: GASTER MADE IT ALL HAPPEN.
    // Toby, October 3, 2026, 6:22 AM EDT, his own typing:
    //   “SIMON.PS IS VERY POWERFUL, ALSO WITH HIS STAFF, HE BECOMES AS POWERFUL AS OREN.PS,
    //   MAYBE EVEN MORE. HE CAN STOP MR. BLACK’S CORRUPTION,
    //   SO MR. BLACK TAKES SIMON.PS DOWN.”
    // Priors, each verified in the archive before it was drawn:
    //   GASTER’S UPGRADES
    //     OREN.PS GAINS OREN 666, OREN 404, AND THE 404 STRINGS.
    //     SIMON.PS HOLDS A LARGER SWORD WITH BOTH HANDS.
    //     WENDA.PS AND GRAY.PS GAIN ERASE AND EXTRA SPEED.
    //   FIREY DELIGHT
    //     A RING OF FIRE MADE FROM FICTION
    //     THAT TURNS THINGS TO CHOCOLATE.
    //     SKY.PS AND THE SURVIVORS TAKE DOWN MR. BLACK. HE GETS A HUMAN FACE.
    //   EVERYONE HAS AN ABILITY
    //     JEVIN’S FACE BRINGS BAD LUCK.
    //     PINKI’S SONG SLOWS EVERYONE DOWN.
    //     PS-50 WALKS ON THE AIR AND DANCES. BRUD AND DURPLE BATTLE.
    const dt = c - 21170.0;
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
    const gr975=ctx.createLinearGradient(0,top+H,0,top);
    gr975.addColorStop(0,'rgba(255,140,60,0.22)'); gr975.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr975.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr975; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GASTER MADE IT ALL HAPPEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS IS VERY POWERFUL, ALSO WITH HIS STAFF, HE BECOMES AS POWERFUL AS OREN.PS,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MAYBE EVEN MORE. HE CAN STOP MR. BLACK’S CORRUPTION,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO MR. BLACK TAKES SIMON.PS DOWN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 6:22 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky975=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky975, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky975, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER’S UPGRADES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.PS GAINS OREN 666, OREN 404, AND THE 404 STRINGS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON.PS HOLDS A LARGER SWORD WITH BOTH HANDS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WENDA.PS AND GRAY.PS GAIN ERASE AND EXTRA SPEED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIREY DELIGHT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A RING OF FIRE MADE FROM FICTION', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT TURNS THINGS TO CHOCOLATE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SKY.PS AND THE SURVIVORS TAKE DOWN MR. BLACK. HE GETS A HUMAN FACE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy975=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy975, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy975, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVERYONE HAS AN ABILITY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JEVIN’S FACE BRINGS BAD LUCK.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PINKI’S SONG SLOWS EVERYONE DOWN.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PS-50 WALKS ON THE AIR AND DANCES. BRUD AND DURPLE BATTLE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEN EVERYONE FIGHTS GASTER.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GASTER WON.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GASTER MADE IT ALL HAPPEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===976){
    // BEAT 976: PYCHOTETHICALICIA.
    // Toby, October 3, 2026, 6:33 AM EDT, his own typing:
    //   “GASTER CHARGES, SWEAT OVER HIS FACE FROM THE PREVIOUS BATTLE, HIS EYES FLASH PURPLE,
    //   AND HIS FACE BECOMES SERIOUS, HE SAYS ‘IS THAT ALL? THEN... IT’S MY TURN’
    //   IT KOS ANYTHING!”
    // Priors, each verified in the archive before it was drawn:
    //   PHASE 666
    //     MR. BLACK JUST SETS HIMSELF IN PHASE 666.
    //     OREN.PS RULES THE VOID.
    //     GASTER TAKES THE UNDERTALE CHARACTERS INTO THE VOID.
    //   A LARGE 12 APPEARS
    //     NEKA OMAZEN GROWS TENTACLES, FEET STRAPPED DOWN BY VINES,
    //     HIS CLOAK COVERED IN EYES AND HOLES.
    //     THEN NEKA OMAZEN GOES INSIDE GASTER.
    //   STRONGER THAN PARANOIDIA
    //     FURY AND RAGE, FEELING FAULT TO THOSE WHO HURT YOU.
    //     THE CALCULATION IS IMPOSSIBLE, SO THE ATTACK GLITCHES.
    //     HANDS AND BLASTERS LARGER THAN THE OMNIVERSE. GASTER IS A SPEC OF DUST NEXT TO THEM.
    const dt = c - 21192.0;
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
    const gr976=ctx.createLinearGradient(0,top+H,0,top);
    gr976.addColorStop(0,'rgba(170,90,255,0.22)'); gr976.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr976.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr976; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,90,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PYCHOTETHICALICIA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER CHARGES, SWEAT OVER HIS FACE FROM THE PREVIOUS BATTLE, HIS EYES FLASH PURPLE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HIS FACE BECOMES SERIOUS, HE SAYS ‘IS THAT ALL? THEN... IT’S MY TURN’', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT KOS ANYTHING!”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 6:33 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky976=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,90,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky976, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,90,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky976, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,90,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PHASE 666', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MR. BLACK JUST SETS HIMSELF IN PHASE 666.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN.PS RULES THE VOID.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER TAKES THE UNDERTALE CHARACTERS INTO THE VOID.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A LARGE 12 APPEARS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN GROWS TENTACLES, FEET STRAPPED DOWN BY VINES,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS CLOAK COVERED IN EYES AND HOLES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THEN NEKA OMAZEN GOES INSIDE GASTER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy976=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy976, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy976, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('STRONGER THAN PARANOIDIA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FURY AND RAGE, FEELING FAULT TO THOSE WHO HURT YOU.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CALCULATION IS IMPOSSIBLE, SO THE ATTACK GLITCHES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HANDS AND BLASTERS LARGER THAN THE OMNIVERSE. GASTER IS A SPEC OF DUST NEXT TO THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT SHUTS DOWN THE GAME FOREVER TO EVERYONE ELSE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GASTER IS THE ONLY ONE LEFT, AND HE WINS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PYCHOTETHICALICIA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===977){
    // BEAT 977: PRESSURETALE IS ALL JAPANESE.
    // Toby, October 3, 2026, 6:34 AM EDT, his own typing:
    //   “THE GAME PRESSURETALE IS ALL JAPANESE AND NO ENGLISH AT ALL,
    //   SO EVERYTHING THERE IS JAPANESE, NO ENGLISH,
    //   REASON: GASTER”
    // Priors, each verified in the archive before it was drawn:
    //   プレッシャーテイル
    //     [ プレイ ]     [ 設定 ]     [ クレジット ]
    //     THE BEAT 973 TITLE SCREEN, CORRECTED.
    //     PLAY AND SETTINGS STILL GLITCH TO 404. ONLY CREDITS WORKS.
    //   GASTER MADE IT THAT WAY
    //     HIS LINE FROM PYCHOTETHICALICIA:
    //     「今度こそ逃がさない！」
    //     YOU WON’T ESCAPE THIS TIME!
    //   NO ENGLISH AT ALL
    //     プレイ → エラー 404
    //     設定 → エラー 404
    //     MENUS, CREDITS, ERRORS AND ATTACK NAMES, ALL IN JAPANESE.
    const dt = c - 21214.0;
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
    const gr977=ctx.createLinearGradient(0,top+H,0,top);
    gr977.addColorStop(0,'rgba(110,160,255,0.22)'); gr977.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr977.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr977; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(110,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PRESSURETALE IS ALL JAPANESE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME PRESSURETALE IS ALL JAPANESE AND NO ENGLISH AT ALL,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO EVERYTHING THERE IS JAPANESE, NO ENGLISH,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('REASON: GASTER”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 6:34 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky977=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(110,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky977, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(110,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky977, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(110,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('プレッシャーテイル', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('[ プレイ ]     [ 設定 ]     [ クレジット ]', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE BEAT 973 TITLE SCREEN, CORRECTED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PLAY AND SETTINGS STILL GLITCH TO 404. ONLY CREDITS WORKS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER MADE IT THAT WAY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS LINE FROM PYCHOTETHICALICIA:', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('「今度こそ逃がさない！」', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('YOU WON’T ESCAPE THIS TIME!', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy977=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy977, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy977, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NO ENGLISH AT ALL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('プレイ → エラー 404', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('設定 → エラー 404', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('MENUS, CREDITS, ERRORS AND ATTACK NAMES, ALL IN JAPANESE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING IN PRESSURETALE IS JAPANESE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('REASON: GASTER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PRESSURETALE IS ALL JAPANESE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
