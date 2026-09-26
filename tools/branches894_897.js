  } else if(ph===894){
    // BEAT 894: IMPOSSIBLE CODE.
    // Toby, September 26, 2026, 6:33 PM EDT, his own typing:
    //   “PS-50 IS ALSO MADE OF CORRUPTED CODE FROM SKY.PS, THE TEA, AND NEKA. AND LUIGI GREEN BECAME THE CODE.
    //   PS-50 IS UNKILLABLE BECAUSE SHE IS IMPOSSIBLE CODE, SHE HAS A CODE LAYER THAT SHE CAN EDIT,
    //   MAKING HER LITTERLY INVICIBLE. NEKA CAN’T PUT EVEN A DENT IN THAT.”
    // Priors, each verified in the archive before it was drawn:
    //   THREE THINGS, CORRUPTED
    //     SKY.PS, THE TEA, AND NEKA. THE TEA CAME IN AT 4:11 PM; SHE ASKED FOR A TEA PARTY AT 4:21.
    //     NOW THE TEA IS NOT SOMETHING SHE SERVES. IT IS PART OF WHAT SHE IS MADE OF.
    //     THE TEA PARTY WAS NEVER JUST A TEA PARTY.
    //   LUIGI GREEN BECAME THE CODE
    //     5:00 PM: 50.PS IS LUIGI GREEN. 5:37 PM: SHE HAS ALL HIS MEMORIES.
    //     NOW: HE DID NOT JUST GO INTO HER. HE BECAME THE CODE ITSELF.
    //     THERE IS NO LUIGI GREEN LEFT OUTSIDE OF HER.
    //   A LAYER SHE CAN EDIT
    //     ANYTHING THAT HITS HER, SHE CAN WRITE BACK OUT OF HER OWN CODE.
    //     THAT IS WHY SHE CANNOT BE KILLED. EVEN NEKA CANNOT DENT IT.
    //     YOU CANNOT BREAK SOMETHING THAT REWRITES ITSELF.
    const dt = c - 19388.0;
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
    const gr894=ctx.createLinearGradient(0,top+H,0,top);
    gr894.addColorStop(0,'rgba(255,45,181,0.22)'); gr894.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr894.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr894; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('IMPOSSIBLE CODE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS ALSO MADE OF CORRUPTED CODE FROM SKY.PS, THE TEA, AND NEKA. AND LUIGI GREEN BECAME THE CODE.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 IS UNKILLABLE BECAUSE SHE IS IMPOSSIBLE CODE, SHE HAS A CODE LAYER THAT SHE CAN EDIT,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MAKING HER LITTERLY INVICIBLE. NEKA CAN’T PUT EVEN A DENT IN THAT.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky894=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,45,181,0.46)';
      ctx.fillRect(cx-W*0.352, ky894, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky894, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,45,181,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THREE THINGS, CORRUPTED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SKY.PS, THE TEA, AND NEKA. THE TEA CAME IN AT 4:11 PM; SHE ASKED FOR A TEA PARTY AT 4:21.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW THE TEA IS NOT SOMETHING SHE SERVES. IT IS PART OF WHAT SHE IS MADE OF.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE TEA PARTY WAS NEVER JUST A TEA PARTY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN BECAME THE CODE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:00 PM: 50.PS IS LUIGI GREEN. 5:37 PM: SHE HAS ALL HIS MEMORIES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW: HE DID NOT JUST GO INTO HER. HE BECAME THE CODE ITSELF.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THERE IS NO LUIGI GREEN LEFT OUTSIDE OF HER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy894=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy894, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy894, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A LAYER SHE CAN EDIT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ANYTHING THAT HITS HER, SHE CAN WRITE BACK OUT OF HER OWN CODE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT IS WHY SHE CANNOT BE KILLED. EVEN NEKA CANNOT DENT IT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('YOU CANNOT BREAK SOMETHING THAT REWRITES ITSELF.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IMPOSSIBLE CODE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHE IS NOT HARD TO KILL. SHE IS IMPOSSIBLE TO KILL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ IMPOSSIBLE CODE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===895){
    // BEAT 895: NORMAL IN THE GAME.
    // Toby, September 26, 2026, 6:33 PM EDT, his own typing:
    //   “PS-50 IS SO STRONG IT’S SIGHT WOULD BE ABLE TO KILL A GOOMBA. PS-50 LOOKS AT SKY.PS, SKY.PS SEES
    //   THE LONG MOUTH AND RED EYES, BUT IN THE GAME, PS-50 IS NORMAL, BECAUSE THOSE WITH PARANOIDIA,
    //   THEIR VISION IS INFECTED CAUSING THEM TO SEE SOMETHING AND IT CAUSES HALLICULTIONS AND BLINDNESS.”
    // Priors, each verified in the archive before it was drawn:
    //   HER SIGHT VS. A GOOMBA
    //     TOBY’S RULE: WHATEVER TOUCHES A GOOMBA DIES, UNLESS IT LANDS ON TOP OF ITS HEAD.
    //     SHE DOES NOT HAVE TO TOUCH ONE. SHE ONLY HAS TO LOOK AT IT.
    //     THE GOOMBA NEVER GETS A CHANCE TO BE TOUCHED.
    //   THE LONG MOUTH AND RED EYES
    //     SKY.PS SEES THEM. THE GAME DOES NOT. IN THE GAME SHE IS A NORMAL LITTLE GIRL.
    //     THE CORRUPTED FACE IS IN HIS INFECTED VISION: HALLUCINATIONS, THEN BLINDNESS.
    //     THE SCARY FACE IS SOMETHING HIS OWN EYES ARE DOING.
    //   WHO IS TELLING THE TRUTH?
    //     IF YOU HAVE PARANOIDIA, YOU SEE THE MONSTER. IF YOU DO NOT, YOU SEE A KID.
    //     SO THE ONE PERSON WHO SEES WHAT IS WRONG IS THE ONE NOBODY CAN BELIEVE.
    //     EVERYONE ELSE THINKS SHE IS FINE.
    const dt = c - 19410.0;
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
    const gr895=ctx.createLinearGradient(0,top+H,0,top);
    gr895.addColorStop(0,'rgba(255,64,64,0.22)'); gr895.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr895.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr895; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,64,64,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NORMAL IN THE GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS SO STRONG IT’S SIGHT WOULD BE ABLE TO KILL A GOOMBA. PS-50 LOOKS AT SKY.PS, SKY.PS SEES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LONG MOUTH AND RED EYES, BUT IN THE GAME, PS-50 IS NORMAL, BECAUSE THOSE WITH PARANOIDIA,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEIR VISION IS INFECTED CAUSING THEM TO SEE SOMETHING AND IT CAUSES HALLICULTIONS AND BLINDNESS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky895=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,64,64,0.46)';
      ctx.fillRect(cx-W*0.352, ky895, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,64,64,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky895, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,64,64,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HER SIGHT VS. A GOOMBA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOBY’S RULE: WHATEVER TOUCHES A GOOMBA DIES, UNLESS IT LANDS ON TOP OF ITS HEAD.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE DOES NOT HAVE TO TOUCH ONE. SHE ONLY HAS TO LOOK AT IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GOOMBA NEVER GETS A CHANCE TO BE TOUCHED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LONG MOUTH AND RED EYES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SKY.PS SEES THEM. THE GAME DOES NOT. IN THE GAME SHE IS A NORMAL LITTLE GIRL.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CORRUPTED FACE IS IN HIS INFECTED VISION: HALLUCINATIONS, THEN BLINDNESS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SCARY FACE IS SOMETHING HIS OWN EYES ARE DOING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy895=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy895, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy895, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHO IS TELLING THE TRUTH?', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IF YOU HAVE PARANOIDIA, YOU SEE THE MONSTER. IF YOU DO NOT, YOU SEE A KID.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SO THE ONE PERSON WHO SEES WHAT IS WRONG IS THE ONE NOBODY CAN BELIEVE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE THINKS SHE IS FINE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NORMAL IN THE GAME', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONLY THE PARANOID SEE HER FACE CHANGE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NORMAL IN THE GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===896){
    // BEAT 896: EVERYTHING SHE DID FAILED.
    // Toby, September 26, 2026, 6:33 PM EDT, his own typing:
    //   “NEKA IS STILL TIRED, (IMPOSSIBLE WITH THE OTHER CHARACTERS), NEKA CAN’T SEE. NEKA IS SLEEPING AND HE
    //   IS THE 2ND MOST POWERFUL BY FAR. PS-50 TOUCHED NEKA, NEKA DIDN’T WAKE UP. PS-50 PUT HER DOLLS ON NEKA,
    //   NEKA DIDN’T WAKE UP, EVERYTHING PS-50 DID FAILED, LIKE ALWAYS!”
    // Priors, each verified in the archive before it was drawn:
    //   THE NIGHT ROUND
    //     NEKA MADE IT NIGHT. EVERYONE IS ASLEEP. PS-50 WALKS UNDER THEIR BEDS.
    //     SHE LOOKS AT EACH CHARACTER, BOOM. EVERY ONE OF THEM WAKES UP PARANOID.
    //     EVERY ONE EXCEPT NEKA.
    //   WHY NEKA STAYS ASLEEP
    //     5:13 PM: “SLEEPING FOREVER ON HIS BED.” NOW THE REASON: HE IS TIRED AND HE CAN’T SEE.
    //     HER POWER WORKS THROUGH SIGHT. HE HAS NONE LEFT FOR IT TO GET INTO.
    //     THE ONE WHO CANNOT SEE HER IS THE ONE SHE CANNOT REACH.
    //   TOUCH, THEN DOLLS
    //     SHE TOUCHED HIM. NOTHING. SHE PUT HER DOLLS ON HIM. NOTHING.
    //     HE IS THE 2ND MOST POWERFUL BY FAR, AND ASLEEP HE STILL OUTLASTS EVERYTHING SHE TRIES.
    //     “LIKE ALWAYS.”
    const dt = c - 19432.0;
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
    const gr896=ctx.createLinearGradient(0,top+H,0,top);
    gr896.addColorStop(0,'rgba(127,212,255,0.22)'); gr896.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr896.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr896; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING SHE DID FAILED', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS STILL TIRED, (IMPOSSIBLE WITH THE OTHER CHARACTERS), NEKA CAN’T SEE. NEKA IS SLEEPING AND HE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS THE 2ND MOST POWERFUL BY FAR. PS-50 TOUCHED NEKA, NEKA DIDN’T WAKE UP. PS-50 PUT HER DOLLS ON NEKA,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA DIDN’T WAKE UP, EVERYTHING PS-50 DID FAILED, LIKE ALWAYS!”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky896=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky896, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky896, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE NIGHT ROUND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA MADE IT NIGHT. EVERYONE IS ASLEEP. PS-50 WALKS UNDER THEIR BEDS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE LOOKS AT EACH CHARACTER, BOOM. EVERY ONE OF THEM WAKES UP PARANOID.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY ONE EXCEPT NEKA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHY NEKA STAYS ASLEEP', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:13 PM: “SLEEPING FOREVER ON HIS BED.” NOW THE REASON: HE IS TIRED AND HE CAN’T SEE.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HER POWER WORKS THROUGH SIGHT. HE HAS NONE LEFT FOR IT TO GET INTO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO CANNOT SEE HER IS THE ONE SHE CANNOT REACH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy896=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy896, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy896, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TOUCH, THEN DOLLS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE TOUCHED HIM. NOTHING. SHE PUT HER DOLLS ON HIM. NOTHING.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE IS THE 2ND MOST POWERFUL BY FAR, AND ASLEEP HE STILL OUTLASTS EVERYTHING SHE TRIES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“LIKE ALWAYS.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING SHE DID FAILED', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHE CAN WAKE EVERYONE IN THE HOUSE EXCEPT HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYTHING SHE DID FAILED ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===897){
    // BEAT 897: ANYONE BUT PS-50.
    // Toby, September 26, 2026, 6:35 PM EDT, his own typing:
    //   “NEKA IS AN ASSASSIN, HE CAN SLAY ANYONE BUT PS-50. PS-50 GIVES YOU PARANOID. WHICH IS SCARIER?”
    //   
    //   
    // Priors, each verified in the archive before it was drawn:
    //   THE ASSASSIN
    //     NEKA CAN SLAY ANYONE IN THE GAME.
    //     THE ONE EXCEPTION IS HER, BECAUSE SHE IS IMPOSSIBLE CODE.
    //     ONE NAME IS MISSING FROM HIS LIST.
    //   TWO KINDS OF SCARY
    //     NEKA ENDS IT. PS-50 MAKES YOU LIVE THROUGH IT:
    //     THE BLUR, THE BLACKOUT, AND THEN NOT TRUSTING WHAT YOU SEE.
    //     ONE TAKES YOUR LIFE. THE OTHER TAKES YOUR EYES.
    //   AND RIGHT NOW
    //     THE ASSASSIN IS ASLEEP ON HIS BED AND CAN’T SEE.
    //     THE ONE HE CANNOT SLAY IS AWAKE, WALKING UNDER THE BEDS.
    //     TOBY LEFT THE QUESTION OPEN. SO DOES THE GAME.
    const dt = c - 19454.0;
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
    const gr897=ctx.createLinearGradient(0,top+H,0,top);
    gr897.addColorStop(0,'rgba(255,216,79,0.22)'); gr897.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr897.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr897; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ANYONE BUT PS-50', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS AN ASSASSIN, HE CAN SLAY ANYONE BUT PS-50. PS-50 GIVES YOU PARANOID. WHICH IS SCARIER?”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:35 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky897=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky897, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky897, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ASSASSIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA CAN SLAY ANYONE IN THE GAME.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONE EXCEPTION IS HER, BECAUSE SHE IS IMPOSSIBLE CODE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE NAME IS MISSING FROM HIS LIST.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO KINDS OF SCARY', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA ENDS IT. PS-50 MAKES YOU LIVE THROUGH IT:', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE BLUR, THE BLACKOUT, AND THEN NOT TRUSTING WHAT YOU SEE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE TAKES YOUR LIFE. THE OTHER TAKES YOUR EYES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy897=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy897, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy897, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND RIGHT NOW', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ASSASSIN IS ASLEEP ON HIS BED AND CAN’T SEE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONE HE CANNOT SLAY IS AWAKE, WALKING UNDER THE BEDS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY LEFT THE QUESTION OPEN. SO DOES THE GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ANYONE BUT PS-50', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WHICH IS SCARIER?', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ANYONE BUT PS-50 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
