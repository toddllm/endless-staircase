  } else if(ph===1070){
    // BEAT 1070: POWER CHAIN: UPDATED.
    // Toby, October 11, 2026, 6:23 AM EDT, his own typing:
    //   “HIS DOMAIN EXPANSION NOW HAS AN UPDATE, IT NOW
    //   CONTAINS PYCHOPATHICAL USYTREMICISM. THE ACTUAL
    //   DOMAIN EXPANSION IS MORE COOL AND INTENSE AND FAST.”
    // Priors, each verified in the archive before it was drawn:
    //   THE POWER CHAIN
    //     7:41 PM: “ALEX’S DOMAIN EXPANSION POWER CHAIN
    //     CONNECTS EVERYTHING... SENT TO THE VOID.”
    //     NOW THE PYCHO-USTREMISM HAPPENS INSIDE IT.
    //   STRONGER THAN HIS DOMAIN
    //     7:46 PM: “AFTER THE PART OF THE PYCHO-USTREMISM,
    //     HE BEATS EVERYONE, IT IS STRONGER THAN HIS DOMAIN.”
    //     NOW IT IS PART OF THE DOMAIN ITSELF.
    //   THE BARRAGE
    //     7:46 PM: “HE SUMMONS A BARRAGE OF SWORDS,
    //     MICROPHONES, GREGS, AND COPIES OF EVERYONE ELSE.”
    //     NOW THE BARRAGE COMES WITH THE CHAINS IN THE WHITE VOID.
    const dt = c - 23260.0;
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
    const gr1070=ctx.createLinearGradient(0,top+H,0,top);
    gr1070.addColorStop(0,'rgba(255,90,120,0.22)'); gr1070.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1070.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1070; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('POWER CHAIN: UPDATED', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HIS DOMAIN EXPANSION NOW HAS AN UPDATE, IT NOW', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CONTAINS PYCHOPATHICAL USYTREMICISM. THE ACTUAL', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DOMAIN EXPANSION IS MORE COOL AND INTENSE AND FAST.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 11, 6:23 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1070=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1070, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1070, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE POWER CHAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:41 PM: “ALEX’S DOMAIN EXPANSION POWER CHAIN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CONNECTS EVERYTHING... SENT TO THE VOID.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE PYCHO-USTREMISM HAPPENS INSIDE IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STRONGER THAN HIS DOMAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:46 PM: “AFTER THE PART OF THE PYCHO-USTREMISM,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE BEATS EVERYONE, IT IS STRONGER THAN HIS DOMAIN.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW IT IS PART OF THE DOMAIN ITSELF.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1070=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1070, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1070, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE BARRAGE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:46 PM: “HE SUMMONS A BARRAGE OF SWORDS,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MICROPHONES, GREGS, AND COPIES OF EVERYONE ELSE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE BARRAGE COMES WITH THE CHAINS IN THE WHITE VOID.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MORE COOL AND INTENSE AND FAST.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PYCHO-USTREMISM IS NO LONGER A SEPARATE ABILITY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ POWER CHAIN: UPDATED ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1071){
    // BEAT 1071: BEYOND THE GAME.
    // Toby, October 11, 2026, 6:31 AM EDT, his own typing:
    //   “ALEX RESETS TO MAKE MORE AND MORE ENTITIES TO
    //   GET MORE AND MORE LV, HE EVEN GOES BEYOND THE
    //   GAME TO THE BOARDER...”
    // Priors, each verified in the archive before it was drawn:
    //   RESETS EVERY RUN
    //     OCT 9: “NEKA... RESETS EVERY TIME HE COMPLETED
    //     A RUN... MORE AND MORE LOVE.”
    //     NOW ALEX RESETS TO MAKE MORE ENTITIES TO BEAT.
    //   AREA 12X
    //     OCT 8: “AREA 12X NOW IS HERE... EVERYONE HAS
    //     THEIR OWN ROOM. NEKA HAS THE WHOLE PLACE.”
    //     NOW ALEX HAS BEATEN ALL OF THEM SO MANY TIMES.
    //   PAST MAX LV
    //     7:41 PM: “ALEXEN NOW CONTINUES WITH LV,
    //     SO HE CAN REACH PAST MAX LV.”
    //     NOW HE GOES PAST THE GAME ITSELF, TO THE BOARDER.
    const dt = c - 23282.0;
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
    const gr1071=ctx.createLinearGradient(0,top+H,0,top);
    gr1071.addColorStop(0,'rgba(170,120,255,0.22)'); gr1071.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1071.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1071; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BEYOND THE GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX RESETS TO MAKE MORE AND MORE ENTITIES TO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GET MORE AND MORE LV, HE EVEN GOES BEYOND THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAME TO THE BOARDER...”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 11, 6:31 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1071=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1071, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1071, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RESETS EVERY RUN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: “NEKA... RESETS EVERY TIME HE COMPLETED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A RUN... MORE AND MORE LOVE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW ALEX RESETS TO MAKE MORE ENTITIES TO BEAT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AREA 12X', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8: “AREA 12X NOW IS HERE... EVERYONE HAS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEIR OWN ROOM. NEKA HAS THE WHOLE PLACE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW ALEX HAS BEATEN ALL OF THEM SO MANY TIMES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1071=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1071, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1071, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PAST MAX LV', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:41 PM: “ALEXEN NOW CONTINUES WITH LV,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SO HE CAN REACH PAST MAX LV.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW HE GOES PAST THE GAME ITSELF, TO THE BOARDER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WHERE QUINTQUADENENTALLARD ENITIES ARE THEIR.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GAIN LV, RESET, MAKE MORE, BEAT THEM, GAIN MORE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BEYOND THE GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
