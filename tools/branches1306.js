  } else if(ph===1306){
    // BEAT 1306: THROUGH CAMERAS.
    // Toby, November 4, 2026, 4:28 PM EDT, his own typing:
    //   NEKA TO FICTION: “I AM THE SUPERIOR.” NEKA TO REALITY: “I
    //   CAN ONLY SEE YOU NOW, THROUGH CAMERAS.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   FICTION
    //     NEKA RULES CHARACTERS, CODE, DIMENSIONS AND WHOLE
    //     FICTIONAL WORLDS.
    //     IN FICTION HE IS THE SUPERIOR.
    //   THE PSYCHICAL WORLD
    //     GAME’S REALITY, THE OUTERMOST LAYER OF CLASSIC RL. NEKA
    //     CAN GO THERE, AND NO FARTHER.
    //     HE SEES EVERYONE. HE CANNOT CROSS OVER.
    //   THE FIRST NEKA COIN
    //     GASTER GOT HIS FIRST NEKA COIN AND IT TRIGGERED THE END,
    //     LIKE AN ASTEROID COMING.
    //     HE DID NOT USE IT. HAVING IT WAS ENOUGH.
    const dt = c - 28452.0;
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
    const gr1306=ctx.createLinearGradient(0,top+H,0,top);
    gr1306.addColorStop(0,'rgba(150,210,255,0.22)'); gr1306.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1306.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1306; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,210,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THROUGH CAMERAS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA TO FICTION: “I AM THE SUPERIOR.” NEKA TO REALITY: “I', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAN ONLY SEE YOU NOW, THROUGH CAMERAS.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 4, 4:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1306=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,210,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1306, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,210,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1306, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,210,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FICTION', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA RULES CHARACTERS, CODE, DIMENSIONS AND WHOLE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FICTIONAL WORLDS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IN FICTION HE IS THE SUPERIOR.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PSYCHICAL WORLD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GAME’S REALITY, THE OUTERMOST LAYER OF CLASSIC RL. NEKA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAN GO THERE, AND NO FARTHER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE SEES EVERYONE. HE CANNOT CROSS OVER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1306=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1306, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1306, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE FIRST NEKA COIN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER GOT HIS FIRST NEKA COIN AND IT TRIGGERED THE END,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LIKE AN ASTEROID COMING.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE DID NOT USE IT. HAVING IT WAS ENOUGH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAYER SAYS “I’MMA LEAVE.” NEKA SAYS “GOODBYE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THROUGH CAMERAS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1307){
    // BEAT 1307: THE FINGER SNAP.
    // Toby, November 4, 2026, 4:28 PM EDT, his own typing:
    //   JECK: “SIMON RL, TURN US BACK!” SIMON RL: “NO, YOU CAN SNAP
    //   YOUR FINGERS LIKE ANY SPRUNKI CAN.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   SNAP AND CHANGE
    //     SIMON.PS SNAPS HIS FINGERS TO BECOME SIMON RL, AND COULD
    //     SNAP BACK. HE NEVER DOES.
    //     RLS ARE THE BEST SINGERS EVER.
    //   NO FINGERS
    //     JECK LOOKS AT HIS BLOCKY ROBLOX ARMS. “I DON’T HAVE
    //     FINGERS! I AM A NOOB AVATAR!”
    //     THE SNAP ONLY WORKS IF YOU HAVE FINGERS.
    //   500 YEARS LATER
    //     SIMON RL STOPS SINGING AND SAYS “OK.” JECK BECOMES A
    //     SPRUNKI OC.
    //     IT TOOK FIVE CENTURIES OF SINGING.
    const dt = c - 28474.0;
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
    const gr1307=ctx.createLinearGradient(0,top+H,0,top);
    gr1307.addColorStop(0,'rgba(255,220,90,0.22)'); gr1307.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1307.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1307; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,220,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE FINGER SNAP', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('JECK: “SIMON RL, TURN US BACK!” SIMON RL: “NO, YOU CAN SNAP', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOUR FINGERS LIKE ANY SPRUNKI CAN.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 4, 4:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1307=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,220,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky1307, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,220,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1307, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,220,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SNAP AND CHANGE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON.PS SNAPS HIS FINGERS TO BECOME SIMON RL, AND COULD', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SNAP BACK. HE NEVER DOES.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('RLS ARE THE BEST SINGERS EVER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO FINGERS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JECK LOOKS AT HIS BLOCKY ROBLOX ARMS. “I DON’T HAVE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FINGERS! I AM A NOOB AVATAR!”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SNAP ONLY WORKS IF YOU HAVE FINGERS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1307=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1307, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1307, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('500 YEARS LATER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON RL STOPS SINGING AND SAYS “OK.” JECK BECOMES A', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SPRUNKI OC.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT TOOK FIVE CENTURIES OF SINGING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL WAS NOT BEING MEAN. HE WAS SINGING.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE FINGER SNAP ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1308){
    // BEAT 1308: I CAN RESET FOREVER.
    // Toby, November 4, 2026, 4:28 PM EDT, his own typing:
    //   SIMON RL: “I CAN RESET FOREVER YOU KNOW.” STARRY: “DON’T
    //   RESET MY LIFE!” SIMON RL: “OK, I WON’T.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   THE SLASHER
    //     A KATANA, AND THE EMBLEM OF SPEED, WHICH RAISES HIS SPEED
    //     AND HIS DURABILITY.
    //     EXTREMELY HARD TO BEAT EVEN ONCE.
    //   TWO IMMORTALS
    //     OREN RL IS IMMORTAL BY A LITERAL GOD FORM. SIMON RL IS
    //     IMMORTAL BY RESETTING.
    //     SAME RESULT, DIFFERENT REASON.
    //   THE FACE OF CLASSIC RL
    //     RLS SING BETTER THAN SPRUNKIS. SIMON RL WAS THE MAIN
    //     ATTACKER AND MAIN CHARACTER FOR HALF THE LORE.
    //     CLASSIC RL IS BEST HERE.
    const dt = c - 28496.0;
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
    const gr1308=ctx.createLinearGradient(0,top+H,0,top);
    gr1308.addColorStop(0,'rgba(255,200,60,0.22)'); gr1308.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1308.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1308; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I CAN RESET FOREVER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON RL: “I CAN RESET FOREVER YOU KNOW.” STARRY: “DON’T', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RESET MY LIFE!” SIMON RL: “OK, I WON’T.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 4, 4:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1308=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1308, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1308, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SLASHER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A KATANA, AND THE EMBLEM OF SPEED, WHICH RAISES HIS SPEED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HIS DURABILITY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EXTREMELY HARD TO BEAT EVEN ONCE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO IMMORTALS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN RL IS IMMORTAL BY A LITERAL GOD FORM. SIMON RL IS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IMMORTAL BY RESETTING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SAME RESULT, DIFFERENT REASON.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1308=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1308, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1308, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE FACE OF CLASSIC RL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RLS SING BETTER THAN SPRUNKIS. SIMON RL WAS THE MAIN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ATTACKER AND MAIN CHARACTER FOR HALF THE LORE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CLASSIC RL IS BEST HERE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CAN RESET FOREVER. STARRY ASKED, SO HE DOES NOT.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I CAN RESET FOREVER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1309){
    // BEAT 1309: GASTER’S DOOR.
    // Toby, November 4, 2026, 4:28 PM EDT, his own typing:
    //   GASTER: “YOU HAVE JUST SIMPLY WALKED PAST MY DOOR AND
    //   IGNORED ME? THAT IS UNACCEPTABLE.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   FIVE HITS
    //     FRISK ATTACKS GASTER FIVE TIMES. GASTER: “I CAN’T GET
    //     HARMED!”
    //     THEN FRISK KICKS HIM OUT OF THE WAY.
    //   THE CHASE
    //     GASTER CHASES FRISK DOWN THE HALL. FRISK TRIES TO TAKE A
    //     STEP.
    //     ONE STEP.
    //   5000 DEATHS A STEP
    //     EVERY TIME FRISK TRIES TO STEP, FRISK DIES 5000 TIMES.
    //     
    //     THAT IS HOW THE MOVEMENT WORKS NOW.
    const dt = c - 28518.0;
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
    const gr1309=ctx.createLinearGradient(0,top+H,0,top);
    gr1309.addColorStop(0,'rgba(200,200,215,0.22)'); gr1309.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1309.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1309; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,215,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GASTER’S DOOR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER: “YOU HAVE JUST SIMPLY WALKED PAST MY DOOR AND', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IGNORED ME? THAT IS UNACCEPTABLE.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 4, 4:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1309=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,215,0.46)';
      ctx.fillRect(cx-W*0.352, ky1309, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,215,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1309, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,215,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIVE HITS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FRISK ATTACKS GASTER FIVE TIMES. GASTER: “I CAN’T GET', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HARMED!”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN FRISK KICKS HIM OUT OF THE WAY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CHASE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER CHASES FRISK DOWN THE HALL. FRISK TRIES TO TAKE A', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STEP.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE STEP.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1309=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1309, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1309, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('5000 DEATHS A STEP', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY TIME FRISK TRIES TO STEP, FRISK DIES 5000 TIMES.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THAT IS HOW THE MOVEMENT WORKS NOW.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL OF IT BECAUSE FRISK WALKED PAST THE DOOR.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GASTER’S DOOR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1310){
    // BEAT 1310: ERASED FROM THE OUTER LAYERS.
    // Toby, November 4, 2026, 4:28 PM EDT, his own typing:
    //   “SIMON RL ATTACKS WONDA RL, AND SIMON RL WINS, WONDA RL THEN
    //   CHALLENGES GASTER AND WAS ERASED FROM THE OUTER LAYERS.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   FIGHT ONE
    //     SIMON RL VS WONDA RL. SIMON RL WINS.
    //     
    //     KATANA, SPEED, RESETS.
    //   FIGHT TWO
    //     WONDA RL CHALLENGES GASTER, THE CREATOR OF CLASSIC RL.
    //     
    //     A BIGGER CHALLENGE THAN THE FIRST.
    //   ERASED
    //     GASTER ERASES WONDA RL FROM THE OUTER LAYERS.
    //     
    //     LOSING A FIGHT IS NOT THE SAME AS BEING ERASED.
    const dt = c - 28540.0;
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
    const gr1310=ctx.createLinearGradient(0,top+H,0,top);
    gr1310.addColorStop(0,'rgba(255,140,200,0.22)'); gr1310.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1310.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1310; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ERASED FROM THE OUTER LAYERS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON RL ATTACKS WONDA RL, AND SIMON RL WINS, WONDA RL THEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHALLENGES GASTER AND WAS ERASED FROM THE OUTER LAYERS.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 4, 4:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1310=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1310, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1310, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIGHT ONE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON RL VS WONDA RL. SIMON RL WINS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('KATANA, SPEED, RESETS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIGHT TWO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WONDA RL CHALLENGES GASTER, THE CREATOR OF CLASSIC RL.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('A BIGGER CHALLENGE THAN THE FIRST.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1310=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1310, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1310, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ERASED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER ERASES WONDA RL FROM THE OUTER LAYERS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('LOSING A FIGHT IS NOT THE SAME AS BEING ERASED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WONDA LOST TO SIMON RL, THEN TO GASTER, FOR GOOD.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ERASED FROM THE OUTER LAYERS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1311){
    // BEAT 1311: WHY DID YOU LEAVE ME.
    // Toby, November 4, 2026, 4:28 PM EDT, his own typing:
    //   NEKA: “WHY DID YOU LEAVE ME, AFTER EVERYTHING I DID?!” THEN
    //   THE GAME AND THE SCREEN GLITCH.
    //   
    // Priors, each verified in the archive before it was drawn:
    //   ONLY FRIEND
    //     NEKA SAYS “BE MY ONLY FRIEND, I’LL HELP YOU WITH THE GAME
    //     FOREVER.” THAT IS HIS TRAP.
    //     HE GOES AFTER PLAYERS WITH NO OTHER FRIENDS.
    //   THE GLITCH
    //     WHEN SOMEONE HE IS OBSESSED WITH LEAVES, NEKA GETS ANGRY
    //     AND THE SCREEN BREAKS.
    //     HIS FEELINGS BREAK THE GAME.
    //   THE RETALIATION
    //     HE TAKES ACCOUNT INFO, DELETES ACCOUNTS, TRAPS CHARACTERS
    //     UP HIGH, LAGS THE GAME, SHUTS ACCESS.
    //     THIS IS WHY NEKA IS THE VILLAIN.
    const dt = c - 28562.0;
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
    const gr1311=ctx.createLinearGradient(0,top+H,0,top);
    gr1311.addColorStop(0,'rgba(255,70,110,0.22)'); gr1311.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1311.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1311; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,70,110,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WHY DID YOU LEAVE ME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA: “WHY DID YOU LEAVE ME, AFTER EVERYTHING I DID?!” THEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME AND THE SCREEN GLITCH.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, NOVEMBER 4, 4:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1311=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,70,110,0.46)';
      ctx.fillRect(cx-W*0.352, ky1311, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,70,110,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1311, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,70,110,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONLY FRIEND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SAYS “BE MY ONLY FRIEND, I’LL HELP YOU WITH THE GAME', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FOREVER.” THAT IS HIS TRAP.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE GOES AFTER PLAYERS WITH NO OTHER FRIENDS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GLITCH', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHEN SOMEONE HE IS OBSESSED WITH LEAVES, NEKA GETS ANGRY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THE SCREEN BREAKS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HIS FEELINGS BREAK THE GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1311=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1311, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1311, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE RETALIATION', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE TAKES ACCOUNT INFO, DELETES ACCOUNTS, TRAPS CHARACTERS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UP HIGH, LAGS THE GAME, SHUTS ACCESS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THIS IS WHY NEKA IS THE VILLAIN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A REAL FRIEND LETS YOU LEAVE. NEKA DOES NOT.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WHY DID YOU LEAVE ME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
