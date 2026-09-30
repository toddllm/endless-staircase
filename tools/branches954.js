  } else if(ph===954){
    // BEAT 954: THE TERMINATORS OF THE NULLIFIED VOID.
    // Toby, September 30, 2026, 5:03 PM EDT, his own typing:
    //   “THE GAME REALLY ISN’T GOOD VS EVIL, IT IS BASICALLY NPC VS NPC, P V P, OR P VS NPC, WHATEVER.
    //   PRESSURE IS THE CONTINUIZATION. ... PRESSURE IS BASICALLY NOW SPRUNKI: THE TERMINATORS OF THE
    //   NULLIFIED VOID. OREN.EXE WOULD BE THE VILLIAN. NEKA IS MORE POWERFUL AND HIDES HERE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE NAME, ONE PIECE AT A TIME
    //     HIS QUESTIONS: “TERMINATORS OF THE VOID”, THEN “THE NULLIFIED VOID”,
    //     THEN “THE TERMINATORS OF THE NULLIFIED VOID.” THE LAST ONE IS THE NAME.
    //     EVERY PIECE OF THE TITLE IS HIS.
    //   OREN.EXE IS THE VILLIAN
    //     SEPT 29, 5:16 PM: OREN.PS BECAME OREN.EXE, AND NEKA WALKED BEHIND HIM.
    //     NOW OREN.EXE IS THE VILLIAN, AND NEKA, MORE POWERFUL, HIDES IN THE GAME.
    //     OREN.EXE IS THE ONE YOU SEE. NEKA IS THE ONE YOU DON’T.
    //   NOT GOOD VS EVIL
    //     NPC VS NPC · P V P · P VS NPC
    //     SEPT 29, 8:05 PM: PRESSURE, MADE BY NEKA OMAZEN, CONTINUES THE STORY OF CLASSICS.
    //     ANYONE CAN FIGHT ANYONE. “WHATEVER.”
    const dt = c - 20708.0;
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
    const gr954=ctx.createLinearGradient(0,top+H,0,top);
    gr954.addColorStop(0,'rgba(170,120,255,0.22)'); gr954.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr954.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr954; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE TERMINATORS OF THE NULLIFIED VOID', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME REALLY ISN’T GOOD VS EVIL, IT IS BASICALLY NPC VS NPC, P V P, OR P VS NPC, WHATEVER.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PRESSURE IS THE CONTINUIZATION. ... PRESSURE IS BASICALLY NOW SPRUNKI: THE TERMINATORS OF THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NULLIFIED VOID. OREN.EXE WOULD BE THE VILLIAN. NEKA IS MORE POWERFUL AND HIDES HERE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 30, 5:03 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky954=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky954, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky954, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NAME, ONE PIECE AT A TIME', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS QUESTIONS: “TERMINATORS OF THE VOID”, THEN “THE NULLIFIED VOID”,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN “THE TERMINATORS OF THE NULLIFIED VOID.” THE LAST ONE IS THE NAME.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY PIECE OF THE TITLE IS HIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OREN.EXE IS THE VILLIAN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29, 5:16 PM: OREN.PS BECAME OREN.EXE, AND NEKA WALKED BEHIND HIM.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW OREN.EXE IS THE VILLIAN, AND NEKA, MORE POWERFUL, HIDES IN THE GAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OREN.EXE IS THE ONE YOU SEE. NEKA IS THE ONE YOU DON’T.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy954=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy954, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy954, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NOT GOOD VS EVIL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NPC VS NPC · P V P · P VS NPC', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29, 8:05 PM: PRESSURE, MADE BY NEKA OMAZEN, CONTINUES THE STORY OF CLASSICS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ANYONE CAN FIGHT ANYONE. “WHATEVER.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PRESSURE IS NOW SPRUNKI: THE TERMINATORS OF THE NULLIFIED VOID.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OREN.EXE IS SEEN. NEKA HIDES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE TERMINATORS OF THE NULLIFIED VOID ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
