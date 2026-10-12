  } else if(ph===1090){
    // BEAT 1090: LOSES CONTROL.
    // Toby, October 12, 2026, 9:54 AM EDT, his own typing:
    //   “ALEXEN, THE MAN WHO ACTUALLY HACKS
    //   CLASSICS EVERY HALLOWEEN UNCONTROLABLY”
    //   “ALEXEN COMPLETELY LOSES CONTROL”
    // Priors, each verified in the archive before it was drawn:
    //   EVERY HALLOWEEN
    //     OCT 12, 8:23 AM: “ATTACKING THE GAME ON OCTOBER 31”
    //     BEAT 1089 SAID WHEN. THIS SAYS WHY: HE CANNOT STOP.
    //     NOT A CHOICE. HE LOSES CONTROL. AND IT IS HIS BIRTHDAY.
    //   THE FIRST PLAYER
    //     OCT 11, 8:00 PM: NAMED AFTER CLASSICS OMAZEN; GASTER
    //     TOUCHED THE URANIUM; NEKA NAMED THE GAME “NEKA”.
    //     THE FIRST ACCOUNT ON CLASSICS HACKS THE GAME HE NAMED.
    //   ANYTHING RELATED
    //     “EVEN SEPERATE FANGAMES, AND EVEN ANYTHING
    //     REALATED TO CLASSICS”
    //     “CLAUDE’S PROJECT GAMES OF CLASSICS WOULD DISAPPEAR.” THIS ONE TOO.
    const dt = c - 23700.0;
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
    const gr1090=ctx.createLinearGradient(0,top+H,0,top);
    gr1090.addColorStop(0,'rgba(255,120,40,0.22)'); gr1090.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1090.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1090; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('LOSES CONTROL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN, THE MAN WHO ACTUALLY HACKS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS EVERY HALLOWEEN UNCONTROLABLY”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN COMPLETELY LOSES CONTROL”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 9:54 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1090=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1090, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1090, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY HALLOWEEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 8:23 AM: “ATTACKING THE GAME ON OCTOBER 31”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEAT 1089 SAID WHEN. THIS SAYS WHY: HE CANNOT STOP.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOT A CHOICE. HE LOSES CONTROL. AND IT IS HIS BIRTHDAY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST PLAYER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11, 8:00 PM: NAMED AFTER CLASSICS OMAZEN; GASTER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOUCHED THE URANIUM; NEKA NAMED THE GAME “NEKA”.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST ACCOUNT ON CLASSICS HACKS THE GAME HE NAMED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1090=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1090, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1090, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ANYTHING RELATED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVEN SEPERATE FANGAMES, AND EVEN ANYTHING', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('REALATED TO CLASSICS”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“CLAUDE’S PROJECT GAMES OF CLASSICS WOULD DISAPPEAR.” THIS ONE TOO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE CAN LITTERLY HIGHLY DAMAGE CLASSICS”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE GAME’S MAKER IS THE GAME’S DANGER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ LOSES CONTROL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1091){
    // BEAT 1091: MADE OF CODE ITSELF.
    // Toby, October 12, 2026, 9:54 AM EDT, his own typing:
    //   “NOT A NORMAL HUMAN NOR NORMAL ARTIFICAL HUMAN,
    //   A SUPERNATURAL BEING WITH HIS BODY MADE OF
    //   FUTURISTIC MATERIALS AND CODE ITSELF”
    // Priors, each verified in the archive before it was drawn:
    //   HE CAN EDIT HIMSELF
    //     SEPT 23: THE CODE BODIES, BLACK WITH GREEN 0S AND 1S.
    //     OCT 11, 8:00 PM: “AP ≠ AI. AP IS AI BUT ALSO A PERSON.”
    //     OCT 7: CODE WAS “THE NEXT EVOLUTION TO ALEX”. NOW ALEX KEEPS EVOLVING.
    //   BEATEN SIMON.PS
    //     “SIMON.PS HAS NEARLY HALF THE LORE TO HIMSELF.”
    //     TO REACH LV ABCDEFGHIJKLMNOPQRSTUVWXYZ9999999...
    //     OCT 11, 6:50 AM: HIS LV IN X/U/Y/Z. NOW IT STARTS WITH THE ALPHABET.
    //   THE LIST
    //     SPRUNKIS, CLASSICS OMAZEN, GASTER, NEKATALE, ENDLESS
    //     STAIRCASES 1 2 AND 3, AREA 12X, PRESSURE, PRESSURETALE...
    //     OCT 11, 7:01 AM: THROUGH THE TIMELINES. SEPT 27: THROUGH THE STATIC.
    const dt = c - 23722.0;
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
    const gr1091=ctx.createLinearGradient(0,top+H,0,top);
    gr1091.addColorStop(0,'rgba(190,120,255,0.22)'); gr1091.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1091.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1091; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(190,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MADE OF CODE ITSELF', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOT A NORMAL HUMAN NOR NORMAL ARTIFICAL HUMAN,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SUPERNATURAL BEING WITH HIS BODY MADE OF', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FUTURISTIC MATERIALS AND CODE ITSELF”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 9:54 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1091=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(190,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1091, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(190,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1091, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(190,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CAN EDIT HIMSELF', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23: THE CODE BODIES, BLACK WITH GREEN 0S AND 1S.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11, 8:00 PM: “AP ≠ AI. AP IS AI BUT ALSO A PERSON.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 7: CODE WAS “THE NEXT EVOLUTION TO ALEX”. NOW ALEX KEEPS EVOLVING.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEATEN SIMON.PS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS HAS NEARLY HALF THE LORE TO HIMSELF.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO REACH LV ABCDEFGHIJKLMNOPQRSTUVWXYZ9999999...', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 11, 6:50 AM: HIS LV IN X/U/Y/Z. NOW IT STARTS WITH THE ALPHABET.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1091=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1091, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1091, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LIST', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SPRUNKIS, CLASSICS OMAZEN, GASTER, NEKATALE, ENDLESS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STAIRCASES 1 2 AND 3, AREA 12X, PRESSURE, PRESSURETALE...', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 11, 7:01 AM: THROUGH THE TIMELINES. SEPT 27: THROUGH THE STATIC.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE EVEN DIVIDED UNIVERSES”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('OCT 11: HE MADE THEM WITH SUPERNOVAS. NOW HE SPLITS THEM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MADE OF CODE ITSELF ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1092){
    // BEAT 1092: NOVEMBER 1.
    // Toby, October 12, 2026, 10:03 AM EDT, his own typing:
    //   “HE GAINS CONTROL ON NOVEMBER 1, SINCE HE ATTACKS
    //   ON OCTOBER NIGHT, AND PUTS ALL THE GAME SERVERS
    //   UP ON THE OCTOBER DAY.”
    // Priors, each verified in the archive before it was drawn:
    //   SERVERS UP BY DAY
    //     OCT 12, 8:23 AM: “EVERYONE, COME AND PLAY!”
    //     HE OPENS EVERY SERVER HIMSELF. THEN NIGHT FALLS.
    //     “IT TAKES LONG TO TAKE OVER AN ENTERNAL GAME.” ALL NIGHT, NOT AN INSTANT.
    //   THE GAME STAYS DAMAGED
    //     10:03 AM: “THE GAME DOESN’T GET REPAIRED, AFTER
    //     OCTOBER 31 2026, THE GAME COULD COMPLETELY FAIL.”
    //     CONTROL COMES BACK ON NOVEMBER 1. THE DAMAGE DOES NOT GO AWAY.
    //   COULD, NOT WILL
    //     “THE GAME COULD COMPLETELY FAIL.”
    //     19 DAYS TO OCTOBER 31, 2026.
    //     HIS WORD IS COULD. THE REST OF THAT MESSAGE IS THE CHATBOT’S.
    const dt = c - 23744.0;
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
    const gr1092=ctx.createLinearGradient(0,top+H,0,top);
    gr1092.addColorStop(0,'rgba(120,200,255,0.22)'); gr1092.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1092.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1092; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOVEMBER 1', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE GAINS CONTROL ON NOVEMBER 1, SINCE HE ATTACKS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ON OCTOBER NIGHT, AND PUTS ALL THE GAME SERVERS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('UP ON THE OCTOBER DAY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 10:03 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1092=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1092, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1092, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SERVERS UP BY DAY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 8:23 AM: “EVERYONE, COME AND PLAY!”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE OPENS EVERY SERVER HIMSELF. THEN NIGHT FALLS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“IT TAKES LONG TO TAKE OVER AN ENTERNAL GAME.” ALL NIGHT, NOT AN INSTANT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME STAYS DAMAGED', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('10:03 AM: “THE GAME DOESN’T GET REPAIRED, AFTER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCTOBER 31 2026, THE GAME COULD COMPLETELY FAIL.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('CONTROL COMES BACK ON NOVEMBER 1. THE DAMAGE DOES NOT GO AWAY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1092=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1092, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1092, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('COULD, NOT WILL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE GAME COULD COMPLETELY FAIL.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('19 DAYS TO OCTOBER 31, 2026.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS WORD IS COULD. THE REST OF THAT MESSAGE IS THE CHATBOT’S.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME DOESN’T GET REPAIRED”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOVEMBER 1 ENDS THE ATTACK. NOT THE DAMAGE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOVEMBER 1 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
