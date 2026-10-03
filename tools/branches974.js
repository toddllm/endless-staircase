  } else if(ph===974){
    // BEAT 974: BORT’S TUNE, AND PS-50 WALKS ON AIR.
    // Toby, October 3, 2026, 6:01 AM EDT, his own typing:
    //   “A PLAYFUL TUNE YOU CAN’T GET OUT OF YOUR HEAD NO MATTER HOW HARD YOU TRY,
    //   BECAUSE THE WASHING MACHINE AND ALL THE OTHER STUFF, THEY PLAY THE TUNE.
    //   YOU CAN’T UNHEAR IT.”
    // Priors, each verified in the archive before it was drawn:
    //   BORT DANCES
    //     BORT SINGS HIS BORT-THEME SONG.
    //     THE WASHING MACHINE PLAYS IT TOO.
    //     PS-50 TOUCHES IT. BORT BECOMES HORROR.
    //   666 MINUTES
    //     PS-50 MAKES A LUIGI SCREAM AND RUNS.
    //     BORT CHASES PS-50.
    //     AFTER 666 MINUTES, BORT STOPS. SHE CARRIES HIM BACK TO GASTER.
    //   GASTER USES HIS POWER
    //     GASTER BLASTS A HAND AT OREN.PS.
    //     THEN HE BEAT EVERYONE ELSE.
    //     HE SUMMONED ALL THE UNDERTALE CHARACTERS.
    const dt = c - 21148.0;
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
    const gr974=ctx.createLinearGradient(0,top+H,0,top);
    gr974.addColorStop(0,'rgba(110,160,255,0.22)'); gr974.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr974.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr974; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(110,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('BORT’S TUNE, AND PS-50 WALKS ON AIR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A PLAYFUL TUNE YOU CAN’T GET OUT OF YOUR HEAD NO MATTER HOW HARD YOU TRY,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BECAUSE THE WASHING MACHINE AND ALL THE OTHER STUFF, THEY PLAY THE TUNE.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU CAN’T UNHEAR IT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 6:01 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky974=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(110,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky974, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(110,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky974, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(110,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BORT DANCES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BORT SINGS HIS BORT-THEME SONG.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE WASHING MACHINE PLAYS IT TOO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PS-50 TOUCHES IT. BORT BECOMES HORROR.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('666 MINUTES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 MAKES A LUIGI SCREAM AND RUNS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BORT CHASES PS-50.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AFTER 666 MINUTES, BORT STOPS. SHE CARRIES HIM BACK TO GASTER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy974=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy974, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy974, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('GASTER USES HIS POWER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER BLASTS A HAND AT OREN.PS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN HE BEAT EVERYONE ELSE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE SUMMONED ALL THE UNDERTALE CHARACTERS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER HOLDS PS-50, DROPS PS-50,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND PS-50 IS WALKING ON AIR INSTEAD OF FALLING TO THE FLOOR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ BORT’S TUNE, AND PS-50 WALKS ON AIR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
