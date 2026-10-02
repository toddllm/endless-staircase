  } else if(ph===973){
    // BEAT 973: THE PRESSURETALE INTRO SCREEN.
    // Toby, October 2, 2026, 5:23 AND 5:25 PM EDT, his own typing:
    //   “SHOW A INTRO SCREEN THING OF PRESSURETALE,
    //   AS LIKE THEY HAVE ON MOST ROBLOX GAMES.
    //   PRESSING PLAY WILL GLITCH THE GAME AND YOU GET A 404 ERROR.”
    // Priors, each verified in the archive before it was drawn:
    //   [ PLAY ]
    //     THE GAME GLITCHES.
    //     404 ERROR.
    //     PRESSING PLAY WILL GLITCH THE GAME.
    //   [ SETTINGS ]
    //     SAME AS THE PLAY.
    //     404 ERROR.
    //     OCT 2, BEAT 972: GASTER DELETED CLASSICS, PRESSURE AND ALL THE OTHER GAMES.
    //   [ CREDITS ]
    //     TOBY FOX FOR UNDERTALE AND DELTARUNE,
    //     TOBY DESHANE AND CLAUDE AND CHATGPT AND OTHERS FOR LORE,
    //     GAME BY PRESSURETALE GASTER
    const dt = c - 21126.0;
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
    const gr973=ctx.createLinearGradient(0,top+H,0,top);
    gr973.addColorStop(0,'rgba(110,160,255,0.22)'); gr973.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr973.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr973; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(110,160,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE PRESSURETALE INTRO SCREEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SHOW A INTRO SCREEN THING OF PRESSURETALE,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AS LIKE THEY HAVE ON MOST ROBLOX GAMES.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PRESSING PLAY WILL GLITCH THE GAME AND YOU GET A 404 ERROR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 2, 5:23 AND 5:25 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky973=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(110,160,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky973, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(110,160,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky973, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(110,160,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('[ PLAY ]', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GAME GLITCHES.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('404 ERROR.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PRESSING PLAY WILL GLITCH THE GAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('[ SETTINGS ]', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAME AS THE PLAY.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('404 ERROR.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 2, BEAT 972: GASTER DELETED CLASSICS, PRESSURE AND ALL THE OTHER GAMES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy973=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy973, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy973, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('[ CREDITS ]', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOBY FOX FOR UNDERTALE AND DELTARUNE,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOBY DESHANE AND CLAUDE AND CHATGPT AND OTHERS FOR LORE,', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GAME BY PRESSURETALE GASTER', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE INTRO SCREEN. GASTER IS ON IT.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYONE WAS SENT TO PRESSURETALE. THIS IS THE FIRST THING THEY SEE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE PRESSURETALE INTRO SCREEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
