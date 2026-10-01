  } else if(ph===960){
    // BEAT 960: DAMAGE ITSELF NO LONGER EXISTS.
    // Toby, October 1, 2026, 4:26 PM EDT, his own typing:
    //   “DAMAGE ITSELF NO LONGER EXISTS. EVERYONE’S RESPAWN WAS DELETED.
    //   MINDY STARCHILD REACHED INVINCIBILITY, THEN NEKA TOUCHES MINDY STARCHILD,
    //   THEN MINDY STARCHILD FROZE IN ICE. EYES APPEAR.”
    // Priors, each verified in the archive before it was drawn:
    //   NO DAMAGE
    //     DAMAGE ITSELF NO LONGER EXISTS.
    //     NOT BLOCKED. GONE.
    //     BEAT 959: DAMAGE NULLIFIED. NOW THERE IS NO DAMAGE AT ALL.
    //   NO RESPAWN
    //     EVERYONE’S RESPAWN WAS DELETED.
    //     NOBODY CAN BE HURT, AND NOBODY CAN COME BACK.
    //     BOTH DOORS CLOSED AT ONCE.
    //   FROZEN IN ICE
    //     MINDY STARCHILD REACHED INVINCIBILITY.
    //     NEKA TOUCHES HER. SHE FREEZES IN ICE. EYES APPEAR.
    //     INVINCIBLE, AND STILL ONE TOUCH WAS ENOUGH.
    const dt = c - 20840.0;
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
    const gr960=ctx.createLinearGradient(0,top+H,0,top);
    gr960.addColorStop(0,'rgba(150,220,255,0.22)'); gr960.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr960.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr960; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,220,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('DAMAGE ITSELF NO LONGER EXISTS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DAMAGE ITSELF NO LONGER EXISTS. EVERYONE’S RESPAWN WAS DELETED.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MINDY STARCHILD REACHED INVINCIBILITY, THEN NEKA TOUCHES MINDY STARCHILD,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEN MINDY STARCHILD FROZE IN ICE. EYES APPEAR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:26 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky960=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,220,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky960, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,220,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky960, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,220,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO DAMAGE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DAMAGE ITSELF NO LONGER EXISTS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT BLOCKED. GONE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BEAT 959: DAMAGE NULLIFIED. NOW THERE IS NO DAMAGE AT ALL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO RESPAWN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE’S RESPAWN WAS DELETED.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOBODY CAN BE HURT, AND NOBODY CAN COME BACK.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('BOTH DOORS CLOSED AT ONCE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy960=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy960, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy960, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('FROZEN IN ICE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MINDY STARCHILD REACHED INVINCIBILITY.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA TOUCHES HER. SHE FREEZES IN ICE. EYES APPEAR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('INVINCIBLE, AND STILL ONE TOUCH WAS ENOUGH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOTHING CAN HURT ANYONE. NOTHING HAS TO.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA ONLY HAS TO TOUCH.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ DAMAGE ITSELF NO LONGER EXISTS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===961){
    // BEAT 961: ENTITY 12 VS ENTITY 75.
    // Toby, October 1, 2026, 4:26 PM EDT, his own typing:
    //   “PUP-PUP-PUP-PUP-PUP-PUPAHYA. A GLOWING 75 APPEARS. HE SEPARATES 6 AND 7.
    //   NEKA OMAZEN BREAKS THE BARRIER, THE 75 TURNS TO 12, THE CALCULATOR SAYS 12,
    //   THE CALENDAR SAYS 12. NEKA OMAZEN BEATS PUPAHYA.”
    // Priors, each verified in the archive before it was drawn:
    //   PUPAHYA, ENTITY 75
    //     PUP-PUP-PUP-PUP-PUP-PUPAHYA. A GLOWING 75.
    //     HE SEPARATES 6 AND 7, AND DOES THESE COOL THINGS.
    //     ANTI-67, DOING THE ONE THING HE IS FOR.
    //   THE 75 TURNS TO 12
    //     NEKA BREAKS THE BARRIER. 75 BECOMES 12.
    //     THE CALCULATOR SAYS 12. THE CALENDAR SAYS 12.
    //     HE TOUCHES THE SCREEN. CRYSTAL EYES OPEN AND MAKE PATTERNS.
    //   RED GLOWING 12S
    //     NEKA BEATS PUPAHYA. HALOS SURROUND HIM. 75 IS RIPPED.
    //     RED 12S ON THE CALCULATOR, THE CALENDAR, EVEN PUPAHYA’S 75.
    //     HE BEATS THE OTHER ENTITIES AND WINS HIS OWN GAME.
    const dt = c - 20862.0;
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
    const gr961=ctx.createLinearGradient(0,top+H,0,top);
    gr961.addColorStop(0,'rgba(255,70,70,0.22)'); gr961.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr961.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr961; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,70,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ENTITY 12 VS ENTITY 75', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PUP-PUP-PUP-PUP-PUP-PUPAHYA. A GLOWING 75 APPEARS. HE SEPARATES 6 AND 7.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN BREAKS THE BARRIER, THE 75 TURNS TO 12, THE CALCULATOR SAYS 12,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CALENDAR SAYS 12. NEKA OMAZEN BEATS PUPAHYA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:26 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky961=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,70,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky961, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,70,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky961, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,70,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PUPAHYA, ENTITY 75', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PUP-PUP-PUP-PUP-PUP-PUPAHYA. A GLOWING 75.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE SEPARATES 6 AND 7, AND DOES THESE COOL THINGS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ANTI-67, DOING THE ONE THING HE IS FOR.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE 75 TURNS TO 12', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA BREAKS THE BARRIER. 75 BECOMES 12.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CALCULATOR SAYS 12. THE CALENDAR SAYS 12.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE TOUCHES THE SCREEN. CRYSTAL EYES OPEN AND MAKE PATTERNS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy961=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy961, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy961, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('RED GLOWING 12S', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA BEATS PUPAHYA. HALOS SURROUND HIM. 75 IS RIPPED.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RED 12S ON THE CALCULATOR, THE CALENDAR, EVEN PUPAHYA’S 75.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE BEATS THE OTHER ENTITIES AND WINS HIS OWN GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ENTITY 12 WINS. EVERY NUMBER IS 12 NOW.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN IS FEARED BY THEM ALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ENTITY 12 VS ENTITY 75 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===962){
    // BEAT 962: FRONT MAN OF PRESSURE.
    // Toby, October 1, 2026, 4:34 PM EDT, his own typing:
    //   “NEKA OMAZEN IS CALLED FRONT MAN AND CREATOR AND OWNER AND ADMIN
    //   AND ALL THAT STUFF OF PRESSURE. CLASSICS WAS CONSUMED BY NEKA OMAZEN,
    //   NEKA OMAZEN EATS CODE BASICALLY.”
    // Priors, each verified in the archive before it was drawn:
    //   FRONT MAN
    //     FRONT MAN. CREATOR. OWNER. ADMIN.
    //     AND ALL THAT STUFF, OF PRESSURE.
    //     JULY 22: MR. BLACK WAS FRONT MAN AND RING MASTER. NOW IT IS NEKA.
    //   HE EATS CODE
    //     NEKA OMAZEN EATS CODE, BASICALLY.
    //     THAT IS WHAT HE DOES TO A GAME.
    //     NOT DELETES IT. EATS IT.
    //   CLASSICS, CONSUMED
    //     CLASSICS WAS CONSUMED BY NEKA OMAZEN.
    //     THE GAME WE STARTED IN IS GONE INTO HIM.
    //     EVERYTHING CONNECTS TO PRESSURE.
    const dt = c - 20884.0;
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
    const gr962=ctx.createLinearGradient(0,top+H,0,top);
    gr962.addColorStop(0,'rgba(255,180,60,0.22)'); gr962.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr962.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr962; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,180,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('FRONT MAN OF PRESSURE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN IS CALLED FRONT MAN AND CREATOR AND OWNER AND ADMIN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND ALL THAT STUFF OF PRESSURE. CLASSICS WAS CONSUMED BY NEKA OMAZEN,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN EATS CODE BASICALLY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:34 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky962=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,180,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky962, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,180,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky962, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,180,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FRONT MAN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FRONT MAN. CREATOR. OWNER. ADMIN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND ALL THAT STUFF, OF PRESSURE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('JULY 22: MR. BLACK WAS FRONT MAN AND RING MASTER. NOW IT IS NEKA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE EATS CODE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN EATS CODE, BASICALLY.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT IS WHAT HE DOES TO A GAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOT DELETES IT. EATS IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy962=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy962, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy962, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('CLASSICS, CONSUMED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS WAS CONSUMED BY NEKA OMAZEN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GAME WE STARTED IN IS GONE INTO HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERYTHING CONNECTS TO PRESSURE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY TITLE OF PRESSURE IS HIS.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CLASSICS WAS FOOD.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ FRONT MAN OF PRESSURE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
