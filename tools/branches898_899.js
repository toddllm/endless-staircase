  } else if(ph===898){
    // BEAT 898: TEA PARTY AND DAGGERS.
    // Toby, September 26, 2026, 6:41 PM EDT, his own typing:
    //   “PS-50 SETS UP A WHOLE TEA PARTY. NEKA POLISHES KATATAS AND DAGGARS. ARE THEY LIKE OPPOSITES? NEKA VS
    //   WENDA.PS WOULD BE THE CORRECT WAY BECAUSE THEY ARE THE 2 ATTACKERS IN THE GAME, BUT NEKA WOULD EASILY
    //   WIN AT HIGH POWER PERCENT. PS-50 VS SKY.PS, PS-50 IS UNIQUE. PS-50 IS BEATING EVERYONE.”
    // Priors, each verified in the archive before it was drawn:
    //   CUPS VS. BLADES
    //     SHE SETS UP A WHOLE TEA PARTY. HE SITS AND POLISHES KATANAS AND DAGGERS.
    //     THE SAME NIGHT, THE SAME HOUSE, AND NOTHING ELSE ABOUT THEM MATCHES.
    //     TOBY ASKS IT HIMSELF: “ARE THEY LIKE OPPOSITES?”
    //   THE RIGHT MATCHUPS
    //     NEKA VS WENDA.PS, BECAUSE THEY ARE THE 2 ATTACKERS. AT HIGH POWER PERCENT NEKA WINS EASILY.
    //     PS-50 VS SKY.PS, THE ONE WHOSE CORRUPTED CODE SHE IS PARTLY MADE OF.
    //     EACH ONE GETS MATCHED WITH THE ONE MOST LIKE THEM.
    //   “PS-50 IS UNIQUE”
    //     THERE IS NO ONE ELSE LIKE HER TO MATCH HER WITH.
    //     AND SHE IS BEATING EVERYONE.
    //     EVEN SKY.PS IS ONLY THE CLOSEST, NOT A MATCH.
    const dt = c - 19476.0;
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
    const gr898=ctx.createLinearGradient(0,top+H,0,top);
    gr898.addColorStop(0,'rgba(190,120,255,0.22)'); gr898.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr898.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr898; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TEA PARTY AND DAGGERS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 SETS UP A WHOLE TEA PARTY. NEKA POLISHES KATATAS AND DAGGARS. ARE THEY LIKE OPPOSITES? NEKA VS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS WOULD BE THE CORRECT WAY BECAUSE THEY ARE THE 2 ATTACKERS IN THE GAME, BUT NEKA WOULD EASILY', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WIN AT HIGH POWER PERCENT. PS-50 VS SKY.PS, PS-50 IS UNIQUE. PS-50 IS BEATING EVERYONE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:41 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky898=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky898, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky898, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CUPS VS. BLADES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE SETS UP A WHOLE TEA PARTY. HE SITS AND POLISHES KATANAS AND DAGGERS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SAME NIGHT, THE SAME HOUSE, AND NOTHING ELSE ABOUT THEM MATCHES.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY ASKS IT HIMSELF: “ARE THEY LIKE OPPOSITES?”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RIGHT MATCHUPS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA VS WENDA.PS, BECAUSE THEY ARE THE 2 ATTACKERS. AT HIGH POWER PERCENT NEKA WINS EASILY.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 VS SKY.PS, THE ONE WHOSE CORRUPTED CODE SHE IS PARTLY MADE OF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EACH ONE GETS MATCHED WITH THE ONE MOST LIKE THEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy898=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy898, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy898, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS UNIQUE”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THERE IS NO ONE ELSE LIKE HER TO MATCH HER WITH.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND SHE IS BEATING EVERYONE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVEN SKY.PS IS ONLY THE CLOSEST, NOT A MATCH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TEA PARTY AND DAGGERS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE POURS THE TEA. THE OTHER SHARPENS THE BLADES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TEA PARTY AND DAGGERS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===899){
    // BEAT 899: THROUGH THE STATIC.
    // Toby, September 26, 2026, 6:41 PM EDT, his own typing:
    //   “NEKA PUTS THE KATATAS AND DAGGARS IN A BAG AND PUTS THE BAG NEXT TO HIS BED, AND HE SLEEPS ON HIS BED
    //   AGAIN. THE 2 ARE THE ONLY 2 ACTUALLY MADE OF CODE. PS-50 IS NOW REVEALED TO BE ABLE TO TELEPORT
    //   THROUGH STATIC AND CAN ALSO EDIT HER CODE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE BAG BY THE BED
    //     HE WAS UP LONG ENOUGH TO POLISH EVERY BLADE.
    //     THEN THEY GO IN A BAG, THE BAG GOES NEXT TO THE BED, AND HE SLEEPS AGAIN.
    //     ASLEEP, BUT WITH HIS WEAPONS WITHIN REACH.
    //   THE ONLY 2 MADE OF CODE
    //     EVERYONE ELSE IS A CHARACTER IN THE GAME. NEKA AND PS-50 ARE THE CODE.
    //     6:33 PM: SHE IS PARTLY MADE OF NEKA’S CORRUPTED CODE. NOW IT IS JUST THE TWO OF THEM.
    //     THE OPPOSITES ARE MADE OF THE SAME THING.
    //   THROUGH STATIC
    //     SHE CAN TELEPORT THROUGH STATIC NOW. ANY BLINK OF STATIC COULD BE HER.
    //     AND SHE CAN STILL EDIT HER OWN CODE, SO NOTHING CAN STOP HER ON THE WAY.
    //     SHE DOES NOT WALK UNDER THE BEDS ANYMORE. SHE ARRIVES.
    const dt = c - 19498.0;
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
    const gr899=ctx.createLinearGradient(0,top+H,0,top);
    gr899.addColorStop(0,'rgba(160,170,185,0.22)'); gr899.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr899.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr899; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,170,185,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THROUGH THE STATIC', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA PUTS THE KATATAS AND DAGGARS IN A BAG AND PUTS THE BAG NEXT TO HIS BED, AND HE SLEEPS ON HIS BED', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AGAIN. THE 2 ARE THE ONLY 2 ACTUALLY MADE OF CODE. PS-50 IS NOW REVEALED TO BE ABLE TO TELEPORT', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THROUGH STATIC AND CAN ALSO EDIT HER CODE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:41 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky899=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,170,185,0.46)';
      ctx.fillRect(cx-W*0.352, ky899, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,170,185,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky899, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,170,185,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BAG BY THE BED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE WAS UP LONG ENOUGH TO POLISH EVERY BLADE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN THEY GO IN A BAG, THE BAG GOES NEXT TO THE BED, AND HE SLEEPS AGAIN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ASLEEP, BUT WITH HIS WEAPONS WITHIN REACH.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY 2 MADE OF CODE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE IS A CHARACTER IN THE GAME. NEKA AND PS-50 ARE THE CODE.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:33 PM: SHE IS PARTLY MADE OF NEKA’S CORRUPTED CODE. NOW IT IS JUST THE TWO OF THEM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE OPPOSITES ARE MADE OF THE SAME THING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy899=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy899, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy899, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THROUGH STATIC', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE CAN TELEPORT THROUGH STATIC NOW. ANY BLINK OF STATIC COULD BE HER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND SHE CAN STILL EDIT HER OWN CODE, SO NOTHING CAN STOP HER ON THE WAY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE DOES NOT WALK UNDER THE BEDS ANYMORE. SHE ARRIVES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THROUGH THE STATIC', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IF THE SCREEN FLICKERS, SHE IS ALREADY THERE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THROUGH THE STATIC ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
