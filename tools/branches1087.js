  } else if(ph===1087){
    // BEAT 1087: A PIRATE GUY AGAIN.
    // Toby, October 12, 2026, 8:23 AM EDT, his own typing:
    //   “PS-50 IS NO LONGER HERE, LUIGI INUS IS NOW
    //   A PIRATE GUY AGAIN, YOU SHOULD KNOW THAT.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   PS-50 IS NO LONGER HERE
    //     SEPT 27, 2:50 PM: PS-50 CAME IN THROUGH THE STATIC.
    //     FIFTEEN DAYS LATER SHE IS OUT OF THE LORE.
    //   GOLDEN PIRATE
    //     OCT 10, 7:41 PM: “LUIGI INUS: GOLDEN PIRATE”
    //     AFTER 56 YEARS HE HAD ALL THE GOLD.
    //     THE GOLD IS COUNTED. THE PIRATE IS BACK.
    //   YOU SHOULD KNOW THAT
    //     8:23 AM: “...YOU SHOULD KNOW THAT.”
    //     HE TELLS THE CHATBOT THE CANON. IT DOES NOT DECIDE IT.
    const dt = c - 23634.0;
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
    const gr1087=ctx.createLinearGradient(0,top+H,0,top);
    gr1087.addColorStop(0,'rgba(255,200,80,0.22)'); gr1087.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1087.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1087; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A PIRATE GUY AGAIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS NO LONGER HERE, LUIGI INUS IS NOW', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A PIRATE GUY AGAIN, YOU SHOULD KNOW THAT.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 8:23 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1087=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1087, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1087, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 IS NO LONGER HERE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 2:50 PM: PS-50 CAME IN THROUGH THE STATIC.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('FIFTEEN DAYS LATER SHE IS OUT OF THE LORE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GOLDEN PIRATE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10, 7:41 PM: “LUIGI INUS: GOLDEN PIRATE”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AFTER 56 YEARS HE HAD ALL THE GOLD.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE GOLD IS COUNTED. THE PIRATE IS BACK.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1087=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1087, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1087, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('YOU SHOULD KNOW THAT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:23 AM: “...YOU SHOULD KNOW THAT.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE TELLS THE CHATBOT THE CANON. IT DOES NOT DECIDE IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI INUS IS NOW A PIRATE GUY AGAIN”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE OUT. ONE BACK ON THE WATER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A PIRATE GUY AGAIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1088){
    // BEAT 1088: THEY WILL LITERALLY RUN.
    // Toby, October 12, 2026, 8:23 AM EDT, his own typing:
    //   “CODE IS NOW STRONGER THAN GASTER... EVERYONE IS
    //   HORRIFIED OF HIM... THEY WILL LITTERLY RUN”
    //   “ALEX GOES FASTER THAN YOUR EYES CAN COMPREHEND.”
    // Priors, each verified in the archive before it was drawn:
    //   CODE OVER GASTER
    //     AUG 22, 5:26 PM: “GRAY BECAME STRONGER
    //     THAN GASTER NOW.”
    //     GASTER NEVER KEEPS THE TOP SPOT FOR LONG. NOW CODE PASSES HIM.
    //   THE KEY DETAILS
    //     OCT 11, 8:18 PM: CODE SCREAMS AND RUNS
    //     OUT THE DOOR AS FAST AS HE CAN.
    //     HE MADE THE GAME. HE IS NEKA. BOTH CLONES MERGED.
    //   THE SPEED LADDER
    //     SIMON.PS: LIGHT, OR TIME, WITH THE “EMBALEM OF SPEED”
    //     PUPAHYA: FASTER THAN TIME. ALEX: FASTER THAN YOUR EYES.
    //     JUL 28: SIMON 404 RAN FASTER THAN TIME. ALEX IS PAST THAT.
    const dt = c - 23656.0;
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
    const gr1088=ctx.createLinearGradient(0,top+H,0,top);
    gr1088.addColorStop(0,'rgba(120,200,255,0.22)'); gr1088.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1088.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1088; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THEY WILL LITERALLY RUN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CODE IS NOW STRONGER THAN GASTER... EVERYONE IS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HORRIFIED OF HIM... THEY WILL LITTERLY RUN”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX GOES FASTER THAN YOUR EYES CAN COMPREHEND.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 8:23 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1088=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1088, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1088, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CODE OVER GASTER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 22, 5:26 PM: “GRAY BECAME STRONGER', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAN GASTER NOW.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER NEVER KEEPS THE TOP SPOT FOR LONG. NOW CODE PASSES HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE KEY DETAILS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11, 8:18 PM: CODE SCREAMS AND RUNS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OUT THE DOOR AS FAST AS HE CAN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE MADE THE GAME. HE IS NEKA. BOTH CLONES MERGED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1088=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1088, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1088, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE SPEED LADDER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SIMON.PS: LIGHT, OR TIME, WITH THE “EMBALEM OF SPEED”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PUPAHYA: FASTER THAN TIME. ALEX: FASTER THAN YOUR EYES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('JUL 28: SIMON 404 RAN FASTER THAN TIME. ALEX IS PAST THAT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ONCE THEY SEE THE KEY DETAILS ON ALEX”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THEY DO NOT FIGHT. THEY RUN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THEY WILL LITERALLY RUN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1089){
    // BEAT 1089: MADE ON HALLOWEEN.
    // Toby, October 12, 2026, 8:23 AM EDT, his own typing:
    //   “ALEXEN OMAZEN IS ACTUALLY KNOWN FOR
    //   ATTACKING THE GAME ON OCTOBER 31.”
    //   “NEKA CLONED HIMSELF ON HALLOWEEN.”
    // Priors, each verified in the archive before it was drawn:
    //   OCTOBER 31
    //     APR 28 (EMAIL 182): THE HALLOWEEN-CODED TURN,
    //     “ALEX IS RAISING IN POWER”.
    //     HE ATTACKS ON HIS OWN BIRTHDAY. HE WAS MADE THAT NIGHT.
    //   COME AND PLAY
    //     8:23 AM: “AT OTHER TIMES HE WILL BE LIKE
    //     “EVERYONE, COME AND PLAY!””
    //     OCT 11, 5:22 PM: “ALEX CAN ALSO BE FRIENDLY.” 364 DAYS A YEAR.
    //   RED 0S AND 1S
    //     8:23 AM: “A BLACK ARM WITH RED 0S AND 1S, HARDLY
    //     ANY CHARACTER CAN BE RED COLORED 0S AND 1S.”
    //     SEPT 23: THE CODE BODIES WERE GREEN 0S AND 1S. AUG 3: RED = NEGATIVE POWER.
    const dt = c - 23678.0;
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
    const gr1089=ctx.createLinearGradient(0,top+H,0,top);
    gr1089.addColorStop(0,'rgba(255,70,70,0.22)'); gr1089.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1089.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1089; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,70,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MADE ON HALLOWEEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN OMAZEN IS ACTUALLY KNOWN FOR', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ATTACKING THE GAME ON OCTOBER 31.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA CLONED HIMSELF ON HALLOWEEN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 8:23 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1089=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,70,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1089, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,70,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1089, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,70,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OCTOBER 31', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('APR 28 (EMAIL 182): THE HALLOWEEN-CODED TURN,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEX IS RAISING IN POWER”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE ATTACKS ON HIS OWN BIRTHDAY. HE WAS MADE THAT NIGHT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COME AND PLAY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:23 AM: “AT OTHER TIMES HE WILL BE LIKE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVERYONE, COME AND PLAY!””', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 11, 5:22 PM: “ALEX CAN ALSO BE FRIENDLY.” 364 DAYS A YEAR.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1089=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1089, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1089, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('RED 0S AND 1S', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:23 AM: “A BLACK ARM WITH RED 0S AND 1S, HARDLY', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ANY CHARACTER CAN BE RED COLORED 0S AND 1S.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 23: THE CODE BODIES WERE GREEN 0S AND 1S. AUG 3: RED = NEGATIVE POWER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX’S ARM CHANGES”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE WARNING IS ON HIS ARM. NOT IN HIS WORDS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MADE ON HALLOWEEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
