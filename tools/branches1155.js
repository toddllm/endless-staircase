  } else if(ph===1155){
    // BEAT 1155: TO THE LABATORY.
    // Toby, October 15, 2026, 4:03 PM EDT, his own typing:
    //   “NEKA WALKS AWAY WITH WENDA.PS, THEN CAME TO THE LABATORY.”
    //   HIS SPELLING, KEPT. THE WALK AWAY HAS AN ADDRESS NOW.
    //   NO FIGHT, NO NEEDLE, NO WALL THIS TIME. JUST ARRIVAL.
    // Priors, each verified in the archive before it was drawn:
    //   LOCKED IN NEKA’S LAB
    //     SEPT 26, 2:28 PM: “WENDA.PS AND GRAY.PS ARE BOTH LOCKED
    //     IN NEKA’S LAB.” SHADOW-MEN, THE WALL, THE NEEDLE.
    //     SHE WAS DRAGGED IN THEN. SHE WALKS IN WITH HIM NOW.
    //   THE LABATORY WAS DESTROYED
    //     OCT 5, 7:34 PM: “THE MECH WAS DESTROYED, THE LABATORY
    //     WAS DESTROYED.” GASTER WON THE 50-YEAR BATTLE.
    //     SAME SPELLING, TEN DAYS LATER. THERE IS A LAB TO COME TO.
    //   WALKING AWAY
    //     OCT 14, 8:16 PM: “NEKA OMAZEN STILL HAS WENDA.PS AND IS
    //     WALKING AWAY.” OBSERITY, THEN OUT THE DOOR WITH HER.
    //     THAT WALK ENDS HERE. GRAY.PS IS NOT BEHIND THEM.
    const dt = c - 25130.0;
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
    const gr1155=ctx.createLinearGradient(0,top+H,0,top);
    gr1155.addColorStop(0,'rgba(120,230,210,0.22)'); gr1155.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1155.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1155; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,230,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TO THE LABATORY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA WALKS AWAY WITH WENDA.PS, THEN CAME TO THE LABATORY.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS SPELLING, KEPT. THE WALK AWAY HAS AN ADDRESS NOW.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO FIGHT, NO NEEDLE, NO WALL THIS TIME. JUST ARRIVAL.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:03 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1155=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,230,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1155, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,230,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1155, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,230,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LOCKED IN NEKA’S LAB', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 2:28 PM: “WENDA.PS AND GRAY.PS ARE BOTH LOCKED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN NEKA’S LAB.” SHADOW-MEN, THE WALL, THE NEEDLE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE WAS DRAGGED IN THEN. SHE WALKS IN WITH HIM NOW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LABATORY WAS DESTROYED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 5, 7:34 PM: “THE MECH WAS DESTROYED, THE LABATORY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WAS DESTROYED.” GASTER WON THE 50-YEAR BATTLE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SAME SPELLING, TEN DAYS LATER. THERE IS A LAB TO COME TO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1155=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1155, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1155, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WALKING AWAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 8:16 PM: “NEKA OMAZEN STILL HAS WENDA.PS AND IS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WALKING AWAY.” OBSERITY, THEN OUT THE DOOR WITH HER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THAT WALK ENDS HERE. GRAY.PS IS NOT BEHIND THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THEN CAME TO THE LABATORY.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA AND WENDA.PS, BACK IN THE LAB. HIS LINE, HIS SPELLING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TO THE LABATORY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1156){
    // BEAT 1156: ORANGE STAR/SUN.
    // Toby, October 15, 2026, 4:03 PM EDT, his own typing:
    //   “SIMON.PS BROUGHT GRAY.PS SUCESSFULLY TO ORANGE STAR/SUN.”
    //   LAST NIGHT IT WAS OREN.PS. TODAY THE HAND IS SIMON.PS’S.
    //   THE ORANGE SUN HAS A SECOND NAME NOW: ORANGE STAR.
    // Priors, each verified in the archive before it was drawn:
    //   TO THE ORANGE SUN
    //     OCT 14, 8:19 PM: “OREN.PS TAKEN GRAY.PS EVEN FARTHER
    //     FROM WENDA.PS TO THE ORANGE SUN.” PINNED, LOST.
    //     OREN.PS TOOK HIM. SIMON.PS BROUGHT HIM. ONE PLACE.
    //   WHY LEAVE NOW?
    //     SAME NIGHT: “SIMON.PS TURNED GRAY.PS INTO A DEMON.”
    //     “SIMON.PS SAYS “WHY LEAVE NOW?”” THEN THE GRAB.
    //     “SUCESSFULLY.” THE DELIVERY IS COUNTED AS A WIN.
    //   APART, BOTH PLACED
    //     WENDA.PS: THE LABATORY, WITH NEKA (BEAT 1155).
    //     GRAY.PS: ORANGE STAR/SUN, WITH SIMON.PS.
    //     TWO NAMED PLACES. NOBODY IS FOLLOWING ANYBODY.
    const dt = c - 25152.0;
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
    const gr1156=ctx.createLinearGradient(0,top+H,0,top);
    gr1156.addColorStop(0,'rgba(255,160,60,0.22)'); gr1156.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1156.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1156; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,160,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ORANGE STAR/SUN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS BROUGHT GRAY.PS SUCESSFULLY TO ORANGE STAR/SUN.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LAST NIGHT IT WAS OREN.PS. TODAY THE HAND IS SIMON.PS’S.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ORANGE SUN HAS A SECOND NAME NOW: ORANGE STAR.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:03 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1156=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,160,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1156, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,160,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1156, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,160,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO THE ORANGE SUN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 8:19 PM: “OREN.PS TAKEN GRAY.PS EVEN FARTHER', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FROM WENDA.PS TO THE ORANGE SUN.” PINNED, LOST.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OREN.PS TOOK HIM. SIMON.PS BROUGHT HIM. ONE PLACE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHY LEAVE NOW?', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAME NIGHT: “SIMON.PS TURNED GRAY.PS INTO A DEMON.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS SAYS “WHY LEAVE NOW?”” THEN THE GRAB.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“SUCESSFULLY.” THE DELIVERY IS COUNTED AS A WIN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1156=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1156, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1156, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('APART, BOTH PLACED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS: THE LABATORY, WITH NEKA (BEAT 1155).', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GRAY.PS: ORANGE STAR/SUN, WITH SIMON.PS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO NAMED PLACES. NOBODY IS FOLLOWING ANYBODY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BROUGHT GRAY.PS SUCESSFULLY.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SIMON.PS FINISHES WHAT OREN.PS STARTED. ORANGE STAR/SUN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ORANGE STAR/SUN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
