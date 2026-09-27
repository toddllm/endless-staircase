  } else if(ph===905){
    // BEAT 905: THEY FALL SO THEY DON’T DIE.
    // Toby, September 27, 2026, 8:12 AM EDT, his own typing:
    //   “PS-50’S HORROR PARANOIDIA MAKES THE OTHER CHARACTERS THINK THEY WOULD DIE SO THEY JUST FALL
    //   SO THEY DON’T DIE FROM THE PARANOID HORROR. PS-50 COULD SLAY ANYONE TOO WITH THE HEART ATTACK
    //   AND TOO-MUCH-PARANOID. NEKA OMAZEN IS IMMUNE.”
    // Priors, each verified in the archive before it was drawn:
    //   THEY FALL ON PURPOSE
    //     THE FALL IS NOT SOMETHING SHE DOES TO THEM. THEY DO IT THEMSELVES,
    //     TO GET AWAY FROM A DEATH THAT ONLY THE PARANOIA SAYS IS COMING.
    //     THE ESCAPE IS THE FALL.
    //   DEATH.FELL.ACCIDENT.GLITCH.PARANOID
    //     YESTERDAY 6:56 PM, HER GAME OVER SCREEN. NOW THE FIRST TWO WORDS MAKE SENSE:
    //     THEY FELL, SO IT LOOKS LIKE AN ACCIDENT. THE CAUSE WAS STILL THE LAST WORD.
    //     THE ERROR MESSAGE WAS DESCRIBING THIS ALL ALONG.
    //   NEKA OMAZEN IS IMMUNE
    //     TOO MUCH PARANOIA IS A HEART ATTACK. SHE COULD SLAY ANYONE THAT WAY.
    //     YESTERDAY: “NEKA OMAZEN IS TOO STRONG FOR THE PARANOID.” TODAY: IMMUNE.
    //     STILL THE ONE EXCEPTION.
    const dt = c - 19630.0;
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
    const gr905=ctx.createLinearGradient(0,top+H,0,top);
    gr905.addColorStop(0,'rgba(255,90,120,0.22)'); gr905.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr905.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr905; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THEY FALL SO THEY DON’T DIE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50’S HORROR PARANOIDIA MAKES THE OTHER CHARACTERS THINK THEY WOULD DIE SO THEY JUST FALL', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO THEY DON’T DIE FROM THE PARANOID HORROR. PS-50 COULD SLAY ANYONE TOO WITH THE HEART ATTACK', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND TOO-MUCH-PARANOID. NEKA OMAZEN IS IMMUNE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 8:12 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky905=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky905, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky905, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEY FALL ON PURPOSE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FALL IS NOT SOMETHING SHE DOES TO THEM. THEY DO IT THEMSELVES,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO GET AWAY FROM A DEATH THAT ONLY THE PARANOIA SAYS IS COMING.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ESCAPE IS THE FALL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DEATH.FELL.ACCIDENT.GLITCH.PARANOID', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YESTERDAY 6:56 PM, HER GAME OVER SCREEN. NOW THE FIRST TWO WORDS MAKE SENSE:', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEY FELL, SO IT LOOKS LIKE AN ACCIDENT. THE CAUSE WAS STILL THE LAST WORD.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ERROR MESSAGE WAS DESCRIBING THIS ALL ALONG.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy905=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy905, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy905, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN IS IMMUNE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TOO MUCH PARANOIA IS A HEART ATTACK. SHE COULD SLAY ANYONE THAT WAY.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YESTERDAY: “NEKA OMAZEN IS TOO STRONG FOR THE PARANOID.” TODAY: IMMUNE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('STILL THE ONE EXCEPTION.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEY FALL SO THEY DON’T DIE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE STAIRCASE IS A PLACE WHERE YOU FALL FOREVER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THEY FALL SO THEY DON’T DIE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===906){
    // BEAT 906: I AM LUIGI GREEN! MWEH HE HE HE.
    // Toby, September 27, 2026, 8:12 AM EDT, his own typing:
    //   “PS-50 SAYS “I AM LUIGI GREEN! MWEH HE HE HE HE HE HE” HE IS NOT LUIGI FROM MARIO,
    //   HE IS PS-50 WHO WENT INTO LUIGI’S BODY. PS-50 IS WHAT LUIGI GREEN ACTUALLY IS,
    //   NOT IN A LUIGI MARIO FORM.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ORIGIN, THE RIGHT WAY ROUND
    //     PS-50 CAME FIRST. PS-50 WENT INTO LUIGI’S BODY, AND THAT WAS LUIGI GREEN.
    //     THE CHILD IS NOT A NEW FORM. THE CHILD IS WHAT WAS INSIDE THE WHOLE TIME.
    //     LUIGI MARIO WAS THE COSTUME.
    //   “MWEH HE HE HE HE HE HE”
    //     SEPT 23, 5:41 PM, NEKA: “I AM THE ONLY CHARACTER THAT IS IMPORTANT. MWEH HEH HEH HEH HEH.”
    //     THE ARCHIVE HAD NEVER SEEN “MWEH” BEFORE THAT. NOW THE OTHER ONE LAUGHS IT.
    //     THE TWO MADE OF CODE HAVE THE SAME LAUGH.
    //   HE WAS NEVER LUIGI FROM MARIO
    //     JULY 23: “HE IS NOT LUIGI MARIO, HE IS LUIGI GREEN, A WHOLE DIFFERENT PERSON.”
    //     TWO MONTHS LATER THE SENTENCE IS STILL TRUE, AND NOW WE KNOW WHY.
    //     HE SAID IT FIRST IN JULY.
    const dt = c - 19652.0;
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
    const gr906=ctx.createLinearGradient(0,top+H,0,top);
    gr906.addColorStop(0,'rgba(120,220,90,0.22)'); gr906.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr906.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr906; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,220,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I AM LUIGI GREEN! MWEH HE HE HE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 SAYS “I AM LUIGI GREEN! MWEH HE HE HE HE HE HE” HE IS NOT LUIGI FROM MARIO,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE IS PS-50 WHO WENT INTO LUIGI’S BODY. PS-50 IS WHAT LUIGI GREEN ACTUALLY IS,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT IN A LUIGI MARIO FORM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 8:12 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky906=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,220,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky906, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,220,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky906, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,220,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ORIGIN, THE RIGHT WAY ROUND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 CAME FIRST. PS-50 WENT INTO LUIGI’S BODY, AND THAT WAS LUIGI GREEN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CHILD IS NOT A NEW FORM. THE CHILD IS WHAT WAS INSIDE THE WHOLE TIME.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('LUIGI MARIO WAS THE COSTUME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MWEH HE HE HE HE HE HE”', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23, 5:41 PM, NEKA: “I AM THE ONLY CHARACTER THAT IS IMPORTANT. MWEH HEH HEH HEH HEH.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ARCHIVE HAD NEVER SEEN “MWEH” BEFORE THAT. NOW THE OTHER ONE LAUGHS IT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE TWO MADE OF CODE HAVE THE SAME LAUGH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy906=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy906, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy906, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE WAS NEVER LUIGI FROM MARIO', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 23: “HE IS NOT LUIGI MARIO, HE IS LUIGI GREEN, A WHOLE DIFFERENT PERSON.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TWO MONTHS LATER THE SENTENCE IS STILL TRUE, AND NOW WE KNOW WHY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE SAID IT FIRST IN JULY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I AM LUIGI GREEN!', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SAID BY SOMEONE 3.587 FEET TALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I AM LUIGI GREEN! MWEH HE HE HE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===907){
    // BEAT 907: 20 SHADOWS OF THE SPRUNKIS.
    // Toby, September 27, 2026, 8:12 AM EDT, his own typing:
    //   “PS-50 THEN CONTINUES FINDING ANYONE. THEY ARE STILL SLEEPING CAUSE IT IS NIGHT THERE. PS-50 LOOKS AT THE BEDS,
    //   THE BEDS MOVE AROUND, THE SPRUNKIS WAKE UP. THEN THE GAME WASN’T EVEN ON THE SPRUNKIS, BUT 20 SHADOWS OF THE
    //   SPRUNKIS, THE GAME EVOLVED MORE, NOW THEY WERE LIKE CLASSICS VERSIONS. PS-50 LOOKS AT THE SPRUNKIS, BOOM.”
    // Priors, each verified in the archive before it was drawn:
    //   THE BEDS MOVE AROUND
    //     IT IS NIGHT, AND EVERYONE IS ASLEEP. SEPT 23: NEKA SAID “EVERYONE! SLEEP!”
    //     AND EVERYONE SLEPT. SHE ONLY HAS TO LOOK AT THE BEDS FOR THEM TO MOVE.
    //     SHE DOES NOT KNOCK. SHE LOOKS.
    //   NOT THE SPRUNKIS. 20 SHADOWS OF THEM.
    //     SEPT 13, CLOVER: “THE 20 SPRUNKIS ARE STILL IN THE GAME! THIS IS MENT TO BE A NEW ERA!”
    //     THE GAME EVOLVED PAST THEM. WHAT WAKES UP ARE CLASSICS VERSIONS, 20 SHADOWS.
    //     THE NEW ERA CLOVER PROMISED, AND THIS IS WHAT IT LOOKS LIKE.
    //   BOOM, AFTER SEVERAL SECONDS
    //     SHE LOOKS AT THEM. NOTHING. THEN, SECONDS LATER, THE PARANOIA.
    //     SEPT 26, 5:37 PM: THE GAZE IS GRADUAL. BLUR, THEN BLACKOUT, THEN PARANOID.
    //     THE DELAY IS THE SCARY PART.
    const dt = c - 19674.0;
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
    const gr907=ctx.createLinearGradient(0,top+H,0,top);
    gr907.addColorStop(0,'rgba(150,160,200,0.22)'); gr907.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr907.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr907; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,160,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('20 SHADOWS OF THE SPRUNKIS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 THEN CONTINUES FINDING ANYONE. THEY ARE STILL SLEEPING CAUSE IT IS NIGHT THERE. PS-50 LOOKS AT THE BEDS,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BEDS MOVE AROUND, THE SPRUNKIS WAKE UP. THEN THE GAME WASN’T EVEN ON THE SPRUNKIS, BUT 20 SHADOWS OF THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SPRUNKIS, THE GAME EVOLVED MORE, NOW THEY WERE LIKE CLASSICS VERSIONS. PS-50 LOOKS AT THE SPRUNKIS, BOOM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 8:12 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky907=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,160,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky907, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,160,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky907, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,160,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BEDS MOVE AROUND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS NIGHT, AND EVERYONE IS ASLEEP. SEPT 23: NEKA SAID “EVERYONE! SLEEP!”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND EVERYONE SLEPT. SHE ONLY HAS TO LOOK AT THE BEDS FOR THEM TO MOVE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE DOES NOT KNOCK. SHE LOOKS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT THE SPRUNKIS. 20 SHADOWS OF THEM.', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 13, CLOVER: “THE 20 SPRUNKIS ARE STILL IN THE GAME! THIS IS MENT TO BE A NEW ERA!”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE GAME EVOLVED PAST THEM. WHAT WAKES UP ARE CLASSICS VERSIONS, 20 SHADOWS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE NEW ERA CLOVER PROMISED, AND THIS IS WHAT IT LOOKS LIKE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy907=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy907, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy907, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BOOM, AFTER SEVERAL SECONDS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE LOOKS AT THEM. NOTHING. THEN, SECONDS LATER, THE PARANOIA.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 5:37 PM: THE GAZE IS GRADUAL. BLUR, THEN BLACKOUT, THEN PARANOID.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE DELAY IS THE SCARY PART.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('20 SHADOWS OF THE SPRUNKIS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THEY WOKE UP, AND SHE WAS ALREADY LOOKING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 20 SHADOWS OF THE SPRUNKIS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
