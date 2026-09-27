  } else if(ph===908){
    // BEAT 908: I NEED YOU… ALL.
    // Toby, September 27, 2026, 2:50 PM EDT, his own typing:
    //   “PS-50 IS OBSESSED WITH OTHER CHARACTERS AND SIMON.PS SAYS “LUIGI GREEN, WHY ARE YOU BEATING US?!”,
    //   PS-50 SAYS “I NEED YOU… ALL.” NEKA OMAZEN SAYS “PS-50 WANTS YOU ALL, SO PS-50 WILL JUST
    //   COME FOR YOU ALL THROUGH STATIC.”
    // Priors, each verified in the archive before it was drawn:
    //   WHY ARE YOU BEATING US?!
    //     YESTERDAY 6:41 PM: “PS-50 IS BEATING EVERYONE.” TODAY SIMON.PS ASKS WHY,
    //     AND HE ASKS IT TO LUIGI GREEN, THE NAME SHE WAS WEARING.
    //     SOMEBODY FINALLY SAID IT OUT LOUD.
    //   I NEED YOU… ALL
    //     NOT “I WANT TO BEAT YOU.” SHE NEEDS THEM. EVERY CHARACTER.
    //     THE SAME ONE WHO SET UP A WHOLE TEA PARTY IS NOW OBSESSED WITH THE GUESTS.
    //     THE TEA PARTY HAD A GUEST LIST.
    //   THROUGH STATIC
    //     YESTERDAY: “PS-50 IS NOW REVEALED TO BE ABLE TO TELEPORT THROUGH STATIC.”
    //     NEKA EXPLAINS WHAT THAT MEANS FOR THE OTHERS. THERE IS NO DOOR TO LOCK.
    //     NEKA IS THE ONE WHO WARNS THEM.
    const dt = c - 19696.0;
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
    const gr908=ctx.createLinearGradient(0,top+H,0,top);
    gr908.addColorStop(0,'rgba(190,120,255,0.22)'); gr908.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr908.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr908; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I NEED YOU… ALL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS OBSESSED WITH OTHER CHARACTERS AND SIMON.PS SAYS “LUIGI GREEN, WHY ARE YOU BEATING US?!”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 SAYS “I NEED YOU… ALL.” NEKA OMAZEN SAYS “PS-50 WANTS YOU ALL, SO PS-50 WILL JUST', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COME FOR YOU ALL THROUGH STATIC.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 2:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky908=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky908, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky908, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHY ARE YOU BEATING US?!', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YESTERDAY 6:41 PM: “PS-50 IS BEATING EVERYONE.” TODAY SIMON.PS ASKS WHY,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HE ASKS IT TO LUIGI GREEN, THE NAME SHE WAS WEARING.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SOMEBODY FINALLY SAID IT OUT LOUD.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I NEED YOU… ALL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT “I WANT TO BEAT YOU.” SHE NEEDS THEM. EVERY CHARACTER.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SAME ONE WHO SET UP A WHOLE TEA PARTY IS NOW OBSESSED WITH THE GUESTS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE TEA PARTY HAD A GUEST LIST.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy908=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy908, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy908, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THROUGH STATIC', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YESTERDAY: “PS-50 IS NOW REVEALED TO BE ABLE TO TELEPORT THROUGH STATIC.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA EXPLAINS WHAT THAT MEANS FOR THE OTHERS. THERE IS NO DOOR TO LOCK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA IS THE ONE WHO WARNS THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I NEED YOU… ALL', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SAID BY THE SMALLEST ONE IN THE ROOM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I NEED YOU… ALL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===909){
    // BEAT 909: TWO BEINGS ARE EQUAL.
    // Toby, September 27, 2026, 2:50 PM EDT, his own typing:
    //   “PS-50 WALKED THROUGH CODE, HER POWER CUT THROUGH REALITY ITSELF, 2 BEINGS ARE EQUAL.
    //   NEKA IS MORE POWERFUL BY EXTREME, PS-50 CAN MAKE NEKA SLEEP. NEKA CAN MAKE ANYONE SLEEP
    //   WITH A COMMAND, EVERYONE IS SCARED OF NEKA.”
    // Priors, each verified in the archive before it was drawn:
    //   HER POWER CUT THROUGH REALITY
    //     SHE DOES NOT JUST TELEPORT THROUGH STATIC NOW. SHE WALKS THROUGH THE CODE ITSELF.
    //     THE 2 ONLY ONES MADE OF CODE, AND BOTH OF THEM CAN MOVE THROUGH IT.
    //     EQUAL, BUT NOT THE SAME.
    //   THE SLEEP COMMAND, BOTH WAYS
    //     SEPT 23: “EVERYONE! SIMON.PS! OREN.PS! SLEEP!” NEKA SAYS IT AND EVERYONE SLEEPS.
    //     SEPT 26, 6:56 PM: “PS-50 CAN MAKE NEKA SLEEPY.” TODAY: PS-50 CAN MAKE NEKA SLEEP.
    //     THE ONE WHO PUTS EVERYONE TO SLEEP CAN BE PUT TO SLEEP.
    //   EVERYONE IS SCARED OF NEKA
    //     MORE POWERFUL BY EXTREME, AND STILL NOT THE WINNER HERE.
    //     THE OTHERS ARE AFRAID OF NEKA. NEKA IS THE ONE WITH SOMETHING TO BE AFRAID OF.
    //     A CHILD CAN BEAT EVERYONE.
    const dt = c - 19718.0;
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
    const gr909=ctx.createLinearGradient(0,top+H,0,top);
    gr909.addColorStop(0,'rgba(127,212,255,0.22)'); gr909.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr909.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr909; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TWO BEINGS ARE EQUAL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 WALKED THROUGH CODE, HER POWER CUT THROUGH REALITY ITSELF, 2 BEINGS ARE EQUAL.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS MORE POWERFUL BY EXTREME, PS-50 CAN MAKE NEKA SLEEP. NEKA CAN MAKE ANYONE SLEEP', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WITH A COMMAND, EVERYONE IS SCARED OF NEKA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 2:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky909=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky909, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky909, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HER POWER CUT THROUGH REALITY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE DOES NOT JUST TELEPORT THROUGH STATIC NOW. SHE WALKS THROUGH THE CODE ITSELF.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE 2 ONLY ONES MADE OF CODE, AND BOTH OF THEM CAN MOVE THROUGH IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EQUAL, BUT NOT THE SAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SLEEP COMMAND, BOTH WAYS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23: “EVERYONE! SIMON.PS! OREN.PS! SLEEP!” NEKA SAYS IT AND EVERYONE SLEEPS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 6:56 PM: “PS-50 CAN MAKE NEKA SLEEPY.” TODAY: PS-50 CAN MAKE NEKA SLEEP.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO PUTS EVERYONE TO SLEEP CAN BE PUT TO SLEEP.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy909=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy909, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy909, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVERYONE IS SCARED OF NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE POWERFUL BY EXTREME, AND STILL NOT THE WINNER HERE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE OTHERS ARE AFRAID OF NEKA. NEKA IS THE ONE WITH SOMETHING TO BE AFRAID OF.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A CHILD CAN BEAT EVERYONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO BEINGS ARE EQUAL', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE IS STRONGER. THE OTHER CAN MAKE HIM SLEEP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TWO BEINGS ARE EQUAL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===910){
    // BEAT 910: ONE GRAIN OF SUGAR.
    // Toby, September 27, 2026, 2:50 PM EDT, his own typing:
    //   “ALSO IN CLASSICS, EVEN TOUCHING ONE GRAIN OF SUGAR KILLS YOU.”
    // Priors, each verified in the archive before it was drawn:
    //   ONE GRAIN
    //     NOT EATING IT. TOUCHING IT. ONE GRAIN.
    //     IN CLASSICS THE SMALLEST MISTAKE THERE IS COSTS EVERYTHING.
    //     NO ROOM FOR A MISTAKE.
    //   GUESS YA LOVE SUGAR
    //     SEPT 20, 4:49 PM: PERO LAI EATS THE NO-SUGAR CHOCOLATE, GASTER SAYS “NOT THE SAME CHOCOLATE!”
    //     AND PERO LAI DECIDES “GUESS YA LOVE SUGAR.” HE WAS NOT JOKING.
    //     IN CLASSICS, LOVING SUGAR IS DEADLY.
    //   THE 0 SUGAR CHOCOLATE
    //     SEPT 14, THE CHOCOLATE KARMA: HE RECOVERS BY TAKING THE SUGAR OUT.
    //     SEPT 18, HIS WISH LIST: “THE PIE, THE POP TARTS, THE 0 SUGAR CHOCOLATE.”
    //     NOW IT MAKES SENSE WHY IT HAD TO BE ZERO.
    const dt = c - 19740.0;
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
    const gr910=ctx.createLinearGradient(0,top+H,0,top);
    gr910.addColorStop(0,'rgba(255,216,79,0.22)'); gr910.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr910.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr910; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONE GRAIN OF SUGAR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALSO IN CLASSICS, EVEN TOUCHING ONE GRAIN OF SUGAR KILLS YOU.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 2:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky910=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky910, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky910, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE GRAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT EATING IT. TOUCHING IT. ONE GRAIN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IN CLASSICS THE SMALLEST MISTAKE THERE IS COSTS EVERYTHING.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NO ROOM FOR A MISTAKE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GUESS YA LOVE SUGAR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 20, 4:49 PM: PERO LAI EATS THE NO-SUGAR CHOCOLATE, GASTER SAYS “NOT THE SAME CHOCOLATE!”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND PERO LAI DECIDES “GUESS YA LOVE SUGAR.” HE WAS NOT JOKING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('IN CLASSICS, LOVING SUGAR IS DEADLY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy910=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy910, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy910, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE 0 SUGAR CHOCOLATE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 14, THE CHOCOLATE KARMA: HE RECOVERS BY TAKING THE SUGAR OUT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 18, HIS WISH LIST: “THE PIE, THE POP TARTS, THE 0 SUGAR CHOCOLATE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW IT MAKES SENSE WHY IT HAD TO BE ZERO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE GRAIN OF SUGAR', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ON A STAIRCASE MADE OF CLASSICS, WATCH WHERE YOU STEP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONE GRAIN OF SUGAR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===911){
    // BEAT 911: THE TEDDY BEAR STARTED TO WALK.
    // Toby, September 27, 2026, 2:50 PM EDT, his own typing:
    //   “PS-50’S TEDDY BEAR STARTED TO WALK WHEN SHE LOOKED AT IT. NEKA THEN MADE ALL HER TOYS MOVE
    //   WHEN SHE LOOKED AT THEM. NEKA DISAPPEARED INTO THE CODE. PS-50 BRINGS THE GAME TO CHAOS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE TEDDY BEAR WALKS
    //     THIS MORNING SHE LOOKED AT THE BEDS AND THE BEDS MOVED AROUND.
    //     NOW SHE LOOKS AT HER OWN TEDDY BEAR, AND IT GETS UP AND WALKS.
    //     HER GAZE MOVES THINGS.
    //   ALL HER TOYS MOVE
    //     THEN NEKA MAKES IT ALL OF THEM. EVERY TOY SHE LOOKS AT, MOVING.
    //     AUG 11: GREEN APPLE, “A TINY GREEN TEDDYBEAR WITH NO POWERS.” A TEDDY BEAR THAT WALKS IS NEW.
    //     NEKA DID NOT STOP HER. NEKA MADE IT BIGGER.
    //   NEKA DISAPPEARED INTO THE CODE
    //     THEN NEKA IS GONE, INTO THE CODE THEY ARE BOTH MADE OF.
    //     AND PS-50 IS LEFT IN THE GAME, WITH ALL THE MOVING TOYS.
    //     PS-50 BRINGS THE GAME TO CHAOS.
    const dt = c - 19762.0;
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
    const gr911=ctx.createLinearGradient(0,top+H,0,top);
    gr911.addColorStop(0,'rgba(255,150,200,0.22)'); gr911.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr911.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr911; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE TEDDY BEAR STARTED TO WALK', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50’S TEDDY BEAR STARTED TO WALK WHEN SHE LOOKED AT IT. NEKA THEN MADE ALL HER TOYS MOVE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHEN SHE LOOKED AT THEM. NEKA DISAPPEARED INTO THE CODE. PS-50 BRINGS THE GAME TO CHAOS.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 2:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky911=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky911, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky911, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TEDDY BEAR WALKS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING SHE LOOKED AT THE BEDS AND THE BEDS MOVED AROUND.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW SHE LOOKS AT HER OWN TEDDY BEAR, AND IT GETS UP AND WALKS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HER GAZE MOVES THINGS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL HER TOYS MOVE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN NEKA MAKES IT ALL OF THEM. EVERY TOY SHE LOOKS AT, MOVING.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 11: GREEN APPLE, “A TINY GREEN TEDDYBEAR WITH NO POWERS.” A TEDDY BEAR THAT WALKS IS NEW.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NEKA DID NOT STOP HER. NEKA MADE IT BIGGER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy911=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy911, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy911, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA DISAPPEARED INTO THE CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEN NEKA IS GONE, INTO THE CODE THEY ARE BOTH MADE OF.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND PS-50 IS LEFT IN THE GAME, WITH ALL THE MOVING TOYS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PS-50 BRINGS THE GAME TO CHAOS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TEDDY BEAR STARTED TO WALK', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND NEKA WAS ALREADY GONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE TEDDY BEAR STARTED TO WALK ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
