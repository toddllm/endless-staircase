  } else if(ph===969){
    // BEAT 969: PRESSURETALE.
    // Toby, October 1, 2026, 7:27 PM EDT, his own typing:
    //   “NEKA ACTUALLY GRABS EVERYONE AND TAKES THEM TO A PRESSURE AU, PRESSURETALE.
    //   THE SPRUNKIS ASK GASTER AND NEKA ‘HOW WAS THE FALL?’. NEKA WAS SUPRISED AND
    //   HE SHRUNK DOWN TO 5-6 FEET AGAIN AND SAYS ‘WHY DO YOU GUYS ASK ME THAT?’”
    // Priors, each verified in the archive before it was drawn:
    //   HOW WAS THE FALL?
    //     THE SPRUNKIS ASK GASTER AND NEKA “HOW WAS THE FALL?”
    //     NEKA SHRINKS TO 5-6 FEET: “WHY DO YOU GUYS ASK ME THAT?”
    //     AUG 27: “HEY GASTER, HOW WAS THE FALL?” “I DON’T WANNA TALK ABOUT IT.”
    //   THE COMMAND PANEL SHATTERS
    //     NEKA TRIED TO TYPE “/KILL_COMMANDS”. BEFORE HE FINISHED,
    //     SIMON.PS SHATTERED THE COMMAND PANEL WITH HIS ERROR STRINGS.
    //     NEKA DELETES OREN.PS. SIMON.PS WRITES “OREN.PS = TRUE”. HE COMES BACK.
    //   ACTUAL HEALTH
    //     “I DELETED MY HP, NOW I HAVE ACTUAL HEALTH.”
    //     NEKA’S ARM WAS DAMAGED. “I CAN’T HEAL FROM THAT.”
    //     4:26 PM TODAY: DAMAGE ITSELF NO LONGER EXISTS. TONIGHT IT REACHES NEKA.
    const dt = c - 21038.0;
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
    const gr969=ctx.createLinearGradient(0,top+H,0,top);
    gr969.addColorStop(0,'rgba(120,200,255,0.22)'); gr969.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr969.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr969; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PRESSURETALE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA ACTUALLY GRABS EVERYONE AND TAKES THEM TO A PRESSURE AU, PRESSURETALE.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SPRUNKIS ASK GASTER AND NEKA ‘HOW WAS THE FALL?’. NEKA WAS SUPRISED AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE SHRUNK DOWN TO 5-6 FEET AGAIN AND SAYS ‘WHY DO YOU GUYS ASK ME THAT?’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 7:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky969=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky969, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky969, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HOW WAS THE FALL?', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SPRUNKIS ASK GASTER AND NEKA “HOW WAS THE FALL?”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SHRINKS TO 5-6 FEET: “WHY DO YOU GUYS ASK ME THAT?”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AUG 27: “HEY GASTER, HOW WAS THE FALL?” “I DON’T WANNA TALK ABOUT IT.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE COMMAND PANEL SHATTERS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA TRIED TO TYPE “/KILL_COMMANDS”. BEFORE HE FINISHED,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON.PS SHATTERED THE COMMAND PANEL WITH HIS ERROR STRINGS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NEKA DELETES OREN.PS. SIMON.PS WRITES “OREN.PS = TRUE”. HE COMES BACK.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy969=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy969, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy969, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ACTUAL HEALTH', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I DELETED MY HP, NOW I HAVE ACTUAL HEALTH.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S ARM WAS DAMAGED. “I CAN’T HEAL FROM THAT.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('4:26 PM TODAY: DAMAGE ITSELF NO LONGER EXISTS. TONIGHT IT REACHES NEKA.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS RESISTS THE VILLIAN URGE. WENDA.PS BECAME A HERO.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYONE GETS A PIECE OF SOUL. EVERYONE GLOWS RAINBOW.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PRESSURETALE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===970){
    // BEAT 970: I AM NOW... DEAD..
    // Toby, October 1, 2026, 7:27 PM EDT, his own typing:
    //   “NEKA’S EYES FLASH PURPLE AND HIS HAIR MOVES UP, AND LARGE BLASTERS APPEAR,
    //   NEKA USES ALL HIS POWER ON AN ATTACK ONLY PRESSURE GIVES HIM, PARANOIDIA.
    //   THEN AFTER, HE SAYS ‘I AM NOW... DEAD.’, NEKA FALLS OVER.”
    // Priors, each verified in the archive before it was drawn:
    //   THE LONGEST FIGHT EVER
    //     35.7 TIMES THE LORE LENGTH OF TIME, THEN THEY CONTINUE FIGHTING.
    //     “WE BOTH RESET, WE WERE HERE FOR ENTERNITIES.”
    //     “I TRY TO MAKE IT UP TO YOU, BUT THEN YOU ALL HATE ME NOW.”
    //   PARANOIDIA
    //     AN ATTACK ONLY PRESSURE GIVES HIM. HIS MOST POWERFUL ATTACK.
    //     EARLIER IN THE FIGHT HE INJECTED PS-50. PS-50 FELLEN.
    //     SEP 27, BEAT 905: PARANOIDIA WAS PS-50’S. “NEKA OMAZEN IS IMMUNE.”
    //   THE ULTIMATE MASS
    //     NEARLY THE WHOLE STADIUM WIPED OUT.
    //     ALL THE ULTIMATE MASS WAS DESTROYED.
    //     5:23 PM: HE HAD INFINITE ROOM INSIDE HIM FOR IT. NOW IT IS GONE.
    const dt = c - 21060.0;
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
    const gr970=ctx.createLinearGradient(0,top+H,0,top);
    gr970.addColorStop(0,'rgba(190,90,255,0.22)'); gr970.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr970.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr970; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,90,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I AM NOW... DEAD.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA’S EYES FLASH PURPLE AND HIS HAIR MOVES UP, AND LARGE BLASTERS APPEAR,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA USES ALL HIS POWER ON AN ATTACK ONLY PRESSURE GIVES HIM, PARANOIDIA.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEN AFTER, HE SAYS ‘I AM NOW... DEAD.’, NEKA FALLS OVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 7:27 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky970=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,90,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky970, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,90,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky970, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,90,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LONGEST FIGHT EVER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('35.7 TIMES THE LORE LENGTH OF TIME, THEN THEY CONTINUE FIGHTING.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WE BOTH RESET, WE WERE HERE FOR ENTERNITIES.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“I TRY TO MAKE IT UP TO YOU, BUT THEN YOU ALL HATE ME NOW.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PARANOIDIA', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AN ATTACK ONLY PRESSURE GIVES HIM. HIS MOST POWERFUL ATTACK.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EARLIER IN THE FIGHT HE INJECTED PS-50. PS-50 FELLEN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SEP 27, BEAT 905: PARANOIDIA WAS PS-50’S. “NEKA OMAZEN IS IMMUNE.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy970=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy970, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy970, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ULTIMATE MASS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEARLY THE WHOLE STADIUM WIPED OUT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL THE ULTIMATE MASS WAS DESTROYED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('5:23 PM: HE HAD INFINITE ROOM INSIDE HIM FOR IT. NOW IT IS GONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA FALLS OVER. THE HEROES DIED,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BUT RESPAWNED AFTERWARD.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I AM NOW... DEAD. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
