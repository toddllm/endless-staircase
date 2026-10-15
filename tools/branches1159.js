  } else if(ph===1159){
    // BEAT 1159: NEKA IS NEKA.
    // Toby, October 15, 2026, 4:32 PM EDT, his own typing:
    //   “NEKA LAI IS THE BEST ONE, HE IS CLASSICS OC, AND THE GAME
    //   CLASSICS WAS RENAMED TO “NEKA” PRETTY LONG AGO NOW.”
    //   “NEKA IS NEKA, AND “NEKA” IS “NEKA”.” HIM, AND HIS GAME.
    // Priors, each verified in the archive before it was drawn:
    //   THE BEST VILLAIN
    //     HE ASKS WHO IS THE CRAZIEST AND BEST VILLAIN. THE
    //     CHATBOT PICKS WENDA. HE PICKS NEKA LAI, CLASSICS OC.
    //     THE BEST ONE. HIS RULING, NOT THE CHATBOT’S.
    //   NAMED FOR CLASSICS OMAZEN
    //     OCT 11: CLASSICS WAS NAMED AFTER NEKA’S DAUGHTER,
    //     CLASSICS OMAZEN. THEN NEKA RENAMED IT AFTER HIMSELF.
    //     PRETTY LONG AGO NOW, HE SAYS. NOT A NEW RENAME.
    //   I RENAMED IT
    //     OCT 12, 1:50 PM: “I MADE THE GAME, AND I RENAMED IT,
    //     CAUSE I WANTED TO.” NEKA, TO GASTER AND LUIGI INUS.
    //     THE QUOTE MARKS ARE PART OF THE NAME: “NEKA”.
    const dt = c - 25218.0;
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
    const gr1159=ctx.createLinearGradient(0,top+H,0,top);
    gr1159.addColorStop(0,'rgba(255,216,79,0.22)'); gr1159.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1159.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1159; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA LAI IS THE BEST ONE, HE IS CLASSICS OC, AND THE GAME', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS WAS RENAMED TO “NEKA” PRETTY LONG AGO NOW.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS NEKA, AND “NEKA” IS “NEKA”.” HIM, AND HIS GAME.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:32 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1159=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1159, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1159, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BEST VILLAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE ASKS WHO IS THE CRAZIEST AND BEST VILLAIN. THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHATBOT PICKS WENDA. HE PICKS NEKA LAI, CLASSICS OC.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE BEST ONE. HIS RULING, NOT THE CHATBOT’S.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NAMED FOR CLASSICS OMAZEN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: CLASSICS WAS NAMED AFTER NEKA’S DAUGHTER,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS OMAZEN. THEN NEKA RENAMED IT AFTER HIMSELF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('PRETTY LONG AGO NOW, HE SAYS. NOT A NEW RENAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1159=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1159, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1159, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('I RENAMED IT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:50 PM: “I MADE THE GAME, AND I RENAMED IT,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAUSE I WANTED TO.” NEKA, TO GASTER AND LUIGI INUS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE QUOTE MARKS ARE PART OF THE NAME: “NEKA”.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS NEKA. “NEKA” IS “NEKA”.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO MADE IT, AND THE GAME NAMED FOR HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA IS NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1160){
    // BEAT 1160: SECRETLY ALSO TAKEN.
    // Toby, October 15, 2026, 4:32 PM EDT, his own typing:
    //   “NEKA IS ACTUALLY DOING FAR BETTER THAN THE SPRUNKIS AT
    //   THE VILLIAN THING. NEKA ACTUALLY SECRETLY ALSO TAKEN LUIGI
    //   INUS, WHEN ONLY KEEPING WENDA.PS VISABLE.” HIS SPELLING.
    // Priors, each verified in the archive before it was drawn:
    //   WENDA.PS EVEN FARTHER
    //     OCT 14, 5:32 PM: NEKA TAKES WENDA.PS EVEN FARTHER FROM
    //     GRAY.PS. GRAY.PS KEEPS FOLLOWING.
    //     GRAY.PS FOLLOWED THE ONE HE COULD SEE.
    //   TO THE LABATORY
    //     TODAY, 4:03 PM: NEKA WALKS AWAY WITH WENDA.PS, THEN
    //     CAME TO THE LABATORY.
    //     ONLY WENDA.PS WAS VISABLE. LUIGI INUS WAS TAKEN TOO.
    //   ONE MORE FOX
    //     OCT 14, 6:24 AM: “THIS IS THE GAME, THE ATTACK IS
    //     COMPLETE!” LUIGI INUS SAYS “🦊” ONCE AGAIN.
    //     HE THOUGHT THAT WAS A LIE. NOW NEKA HAS HIM, SECRETLY.
    const dt = c - 25240.0;
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
    const gr1160=ctx.createLinearGradient(0,top+H,0,top);
    gr1160.addColorStop(0,'rgba(120,220,120,0.22)'); gr1160.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1160.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1160; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,220,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SECRETLY ALSO TAKEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS ACTUALLY DOING FAR BETTER THAN THE SPRUNKIS AT', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VILLIAN THING. NEKA ACTUALLY SECRETLY ALSO TAKEN LUIGI', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INUS, WHEN ONLY KEEPING WENDA.PS VISABLE.” HIS SPELLING.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:32 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1160=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,220,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky1160, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,220,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1160, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,220,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS EVEN FARTHER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 5:32 PM: NEKA TAKES WENDA.PS EVEN FARTHER FROM', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GRAY.PS. GRAY.PS KEEPS FOLLOWING.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GRAY.PS FOLLOWED THE ONE HE COULD SEE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TO THE LABATORY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY, 4:03 PM: NEKA WALKS AWAY WITH WENDA.PS, THEN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAME TO THE LABATORY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONLY WENDA.PS WAS VISABLE. LUIGI INUS WAS TAKEN TOO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1160=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1160, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1160, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONE MORE FOX', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 6:24 AM: “THIS IS THE GAME, THE ATTACK IS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COMPLETE!” LUIGI INUS SAYS “🦊” ONCE AGAIN.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE THOUGHT THAT WAS A LIE. NOW NEKA HAS HIM, SECRETLY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS, VISABLE. LUIGI INUS, SECRETLY.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYONE WATCHED ONE. NEKA TOOK BOTH.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SECRETLY ALSO TAKEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
