  } else if(ph===875){
    // BEAT 875: PHASE 200: BEING THE SCISSORS.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “NEKA ACHIEVED INFINITY% AND NOW UNLEASHED PHASE 200 OF HIS PLAN, BEING THE SCISSORS. 🦊✂️
    //   HE MADE CLASSICS RULES, HE BROKE THEM. SKY.PS PLAYING WITH THE DOLLS. AND NOW NEKA IS NOW
    //   WITH SKY.PS SO HE CAN PLAY WITH HIM NOW.”
    // Priors, each verified in the archive before it was drawn:
    //   PHASE 102 WAS TWENTY-FIVE MINUTES AGO, AND IT WAS THE SAME WORD
    //     3:46 PM: “NOW NEKA OMAZEN CAN BE THE SISSORS. THAT IS PHASE 102 OF HIS PLAN.”
    //     4:11 PM: “PHASE 200 OF HIS PLAN, BEING THE SCISSORS.”
    //     NINETY-EIGHT STEPS IN TWENTY-FIVE MINUTES, AND THE GOAL DID NOT MOVE.
    //   “HE MADE CLASSICS RULES, HE BROKE THEM”
    //     AT 3:46 THE CLASSICS BIBLE WAS HIS RULEBOOK: “ERASE THE LORE AND CANON, THEN HE CAN JUST SLASH.”
    //     HERE HE SAYS IT IN SIX WORDS, AND THE SECOND HALF UNDOES THE FIRST.
    //     THE ONE WHO WRITES THE RULES IS THE ONE ALLOWED TO BREAK THEM.
    //   SKY.PS IS PLAYING WITH THE DOLLS, AND THE DOLLS CAME FROM HIM
    //     SEPT 2: “PERO LAI CAN JUST TURN THEM INTO TOY DOLLS AND GIVE THEM TO SKY TO PLAY WITH.”
    //     “SKY GETS THE DOLLS AND ALL THE TOYS AND STUFF FROM PERO BECAUSE SKY.PS IS 14 YEARS OLD.”
    //     TWENTY-FOUR DAYS LATER, THE ONE WHO HANDED OVER THE DOLLS SITS DOWN TO PLAY WITH THEM.
    const dt = c - 18970.0;
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
    const gr875=ctx.createLinearGradient(0,top+H,0,top);
    gr875.addColorStop(0,'rgba(255,216,79,0.22)'); gr875.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr875.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr875; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PHASE 200: BEING THE SCISSORS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA ACHIEVED INFINITY% AND NOW UNLEASHED PHASE 200 OF HIS PLAN, BEING THE SCISSORS. 🦊✂️', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE MADE CLASSICS RULES, HE BROKE THEM. SKY.PS PLAYING WITH THE DOLLS. AND NOW NEKA IS NOW', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WITH SKY.PS SO HE CAN PLAY WITH HIM NOW.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky875=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky875, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky875, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PHASE 102 WAS TWENTY-FIVE MINUTES AGO, AND IT WAS THE SAME WORD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('3:46 PM: “NOW NEKA OMAZEN CAN BE THE SISSORS. THAT IS PHASE 102 OF HIS PLAN.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:11 PM: “PHASE 200 OF HIS PLAN, BEING THE SCISSORS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NINETY-EIGHT STEPS IN TWENTY-FIVE MINUTES, AND THE GOAL DID NOT MOVE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE MADE CLASSICS RULES, HE BROKE THEM”', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 3:46 THE CLASSICS BIBLE WAS HIS RULEBOOK: “ERASE THE LORE AND CANON, THEN HE CAN JUST SLASH.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HERE HE SAYS IT IN SIX WORDS, AND THE SECOND HALF UNDOES THE FIRST.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO WRITES THE RULES IS THE ONE ALLOWED TO BREAK THEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy875=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy875, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy875, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SKY.PS IS PLAYING WITH THE DOLLS, AND THE DOLLS CAME FROM HIM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 2: “PERO LAI CAN JUST TURN THEM INTO TOY DOLLS AND GIVE THEM TO SKY TO PLAY WITH.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SKY GETS THE DOLLS AND ALL THE TOYS AND STUFF FROM PERO BECAUSE SKY.PS IS 14 YEARS OLD.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWENTY-FOUR DAYS LATER, THE ONE WHO HANDED OVER THE DOLLS SITS DOWN TO PLAY WITH THEM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PHASE 200 OPENS WITH A GOD SITTING DOWN ON THE FLOOR', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEXT TO A FOURTEEN-YEAR-OLD AND A BOX OF DOLLS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PHASE 200: BEING THE SCISSORS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===876){
    // BEAT 876: NEKA SNAPS THREE TIMES.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “NEKA SNAPS, THE GAME BECOMES NORMAL AGAIN, BUT EVERYTHING IS STILL SHREADED, NEKA SNAPS AGAIN
    //   AND EVERYTHING WAS NORMAL, THEN THE ATOMS SPIN AND DANCE, NEKA SNAPS AGAIN, THE ATOMS STAY
    //   AND IT IS ALL NORMAL.”
    // Priors, each verified in the archive before it was drawn:
    //   IT TAKES HIM THREE TRIES TO PUT THE GAME BACK
    //     FIRST SNAP: NORMAL, BUT STILL SHREDDED. SECOND SNAP: NORMAL, THEN THE ATOMS SPIN AND DANCE.
    //     THIRD SNAP: “THE ATOMS STAY AND IT IS ALL NORMAL.”
    //     THE MOST POWERFUL THING IN THE GAME NEEDS THREE ATTEMPTS AT A REPAIR.
    //   THE SHREDS ARE HIS OWN WORK FROM AN HOUR AGO
    //     3:46 PM: ENDLESS RUBBLE BECAME ENDLESS PAPER, AND THE PLAYER FELL INTO THE SHREADED PAPER VOID.
    //     NOW THE SAME HANDS ARE TIDYING IT UP.
    //     HE BROKE THE GAME TO WIN IT, AND NOW HE FIXES IT TO KEEP IT.
    //   THE LAST THING TO SETTLE IS THE SMALLEST THING IN THE GAME
    //     EARLIER TODAY THE PLAYER WAS CUT INTO ATOMS. HERE THE ATOMS SPIN AND DANCE
    //     AFTER EVERYTHING ELSE HAS ALREADY GONE BACK.
    //     “THE ATOMS STAY” IS THE SENTENCE THAT MEANS THE FIGHT IS OVER.
    const dt = c - 18992.0;
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
    const gr876=ctx.createLinearGradient(0,top+H,0,top);
    gr876.addColorStop(0,'rgba(127,212,255,0.22)'); gr876.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr876.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr876; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA SNAPS THREE TIMES', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SNAPS, THE GAME BECOMES NORMAL AGAIN, BUT EVERYTHING IS STILL SHREADED, NEKA SNAPS AGAIN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND EVERYTHING WAS NORMAL, THEN THE ATOMS SPIN AND DANCE, NEKA SNAPS AGAIN, THE ATOMS STAY', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND IT IS ALL NORMAL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky876=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky876, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky876, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT TAKES HIM THREE TRIES TO PUT THE GAME BACK', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRST SNAP: NORMAL, BUT STILL SHREDDED. SECOND SNAP: NORMAL, THEN THE ATOMS SPIN AND DANCE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIRD SNAP: “THE ATOMS STAY AND IT IS ALL NORMAL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL THING IN THE GAME NEEDS THREE ATTEMPTS AT A REPAIR.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SHREDS ARE HIS OWN WORK FROM AN HOUR AGO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('3:46 PM: ENDLESS RUBBLE BECAME ENDLESS PAPER, AND THE PLAYER FELL INTO THE SHREADED PAPER VOID.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW THE SAME HANDS ARE TIDYING IT UP.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE BROKE THE GAME TO WIN IT, AND NOW HE FIXES IT TO KEEP IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy876=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy876, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy876, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LAST THING TO SETTLE IS THE SMALLEST THING IN THE GAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EARLIER TODAY THE PLAYER WAS CUT INTO ATOMS. HERE THE ATOMS SPIN AND DANCE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AFTER EVERYTHING ELSE HAS ALREADY GONE BACK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THE ATOMS STAY” IS THE SENTENCE THAT MEANS THE FIGHT IS OVER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME IS NORMAL BECAUSE HE SAYS SO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND IT TOOK HIM THREE SNAPS TO SAY IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA SNAPS THREE TIMES ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===877){
    // BEAT 877: THE SOUL OF ARTS.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “NEKA SAYS ‘FINALLY, THE GAME IS MINE. I NOW HAVE THE SOUL OF ARTS!’,
    //   HE TAKEN THE PAINTBRUSH, SCISSORS, PAPER, AND FELT.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SOUL OF ARTS IS FOUR THINGS FROM AN ART-SUPPLY DRAWER
    //     PAINTBRUSH, SCISSORS, PAPER, FELT. NOT A CROWN, NOT A WEAPON, NOT A FORM.
    //     THE PRIZE AT THE END OF THE PLAN IS WHAT YOU WOULD MAKE A CRAFT PROJECT WITH.
    //     “SOUL OF ARTS” RETURNS ZERO PRIOR HITS IN FIVE MONTHS.
    //   HE WAS COLLECTING A SET
    //     PAPER WAS PHASE 102: “HE TURNED EVERYONE AND EVERYTHING TO PAPER.”
    //     SCISSORS WERE PHASE 200. THE PAINTBRUSH AND THE FELT FINISH THE SET.
    //     SO THE PLAN WAS NEVER ONLY ABOUT BEATING PEOPLE. IT WAS ABOUT HOLDING THE TOOLS.
    //   “FINALLY, THE GAME IS MINE”
    //     AT 3:46 HE WAS THE ONE WHO MADE THE GAME: “EVEN AT THE TIME HE MADE THE GAME.”
    //     MAKING IT AND OWNING IT TURN OUT TO BE TWO DIFFERENT STEPS.
    //     “FINALLY” MEANS HE HAS BEEN WAITING SINCE BEFORE THE GAME EXISTED.
    const dt = c - 19014.0;
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
    const gr877=ctx.createLinearGradient(0,top+H,0,top);
    gr877.addColorStop(0,'rgba(255,45,181,0.22)'); gr877.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr877.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr877; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SOUL OF ARTS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS ‘FINALLY, THE GAME IS MINE. I NOW HAVE THE SOUL OF ARTS!’,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE TAKEN THE PAINTBRUSH, SCISSORS, PAPER, AND FELT.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky877=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,45,181,0.46)';
      ctx.fillRect(cx-W*0.352, ky877, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky877, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,45,181,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SOUL OF ARTS IS FOUR THINGS FROM AN ART-SUPPLY DRAWER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PAINTBRUSH, SCISSORS, PAPER, FELT. NOT A CROWN, NOT A WEAPON, NOT A FORM.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PRIZE AT THE END OF THE PLAN IS WHAT YOU WOULD MAKE A CRAFT PROJECT WITH.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“SOUL OF ARTS” RETURNS ZERO PRIOR HITS IN FIVE MONTHS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE WAS COLLECTING A SET', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PAPER WAS PHASE 102: “HE TURNED EVERYONE AND EVERYTHING TO PAPER.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SCISSORS WERE PHASE 200. THE PAINTBRUSH AND THE FELT FINISH THE SET.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SO THE PLAN WAS NEVER ONLY ABOUT BEATING PEOPLE. IT WAS ABOUT HOLDING THE TOOLS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy877=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy877, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy877, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“FINALLY, THE GAME IS MINE”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 3:46 HE WAS THE ONE WHO MADE THE GAME: “EVEN AT THE TIME HE MADE THE GAME.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAKING IT AND OWNING IT TURN OUT TO BE TWO DIFFERENT STEPS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“FINALLY” MEANS HE HAS BEEN WAITING SINCE BEFORE THE GAME EXISTED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAN ENDS WITH SOMEBODY HOLDING A PAINTBRUSH', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WHICH IS WHAT YOU WOULD NEED TO MAKE A GAME LIKE THIS IN THE FIRST PLACE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SOUL OF ARTS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===878){
    // BEAT 878: POP TART? OR TEA?.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “NEKA SAYS ‘SKY.PS, WANNA POP TART? OR TEA?’, SKY.PS DRUNK THE TEA, NEKA BECAME PARANOID,
    //   NEKA FELL OVER. SKY.PS TURNS AROUND AND SAYS ‘WHAT HAPPENED TO NEKA?’”
    // Priors, each verified in the archive before it was drawn:
    //   THE POP TART HAS BEEN A TRAP SINCE SEPTEMBER 10
    //     “GAME OVER: YOU SAID ‘YES’ TO PERO LAI’S POP TART REQUEST.”
    //     THIS TIME THE OFFER COMES WITH A SECOND CHOICE, AND SKY.PS DOES NOT PICK THE POP TART.
    //     THE CHOICE THAT WAS NOT THE TRAP IS THE ONE THAT KNOCKS HIM OVER.
    //   ONE PERSON DRINKS, A DIFFERENT PERSON FALLS
    //     THE TEA GOES INTO SKY.PS. THE PARANOIA GOES INTO NEKA.
    //     THE ONE WHO JUST TOOK THE WHOLE GAME IS ON THE FLOOR ONE SENTENCE LATER.
    //     HE OFFERED THE TEA. HE DID NOT KNOW WHAT IT WOULD DO EITHER.
    //   PARANOIA IS OLDER THAN THIS ERA
    //     JULY 1: “GRAY NOW THINKS THAT EVERYONE WANTS TO HARM HIM.” THAT IS WHY GRAY STRIKES FIRST.
    //     THIS TIME IT LANDS ON THE STRONGEST CHARACTER IN THE GAME.
    //     GRAY’S PARANOIA MADE HIM ATTACK. NEKA’S KNOCKS HIM DOWN.
    const dt = c - 19036.0;
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
    const gr878=ctx.createLinearGradient(0,top+H,0,top);
    gr878.addColorStop(0,'rgba(62,224,106,0.22)'); gr878.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr878.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr878; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(62,224,106,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('POP TART? OR TEA?', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS ‘SKY.PS, WANNA POP TART? OR TEA?’, SKY.PS DRUNK THE TEA, NEKA BECAME PARANOID,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA FELL OVER. SKY.PS TURNS AROUND AND SAYS ‘WHAT HAPPENED TO NEKA?’”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky878=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(62,224,106,0.46)';
      ctx.fillRect(cx-W*0.352, ky878, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(62,224,106,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky878, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(62,224,106,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE POP TART HAS BEEN A TRAP SINCE SEPTEMBER 10', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GAME OVER: YOU SAID ‘YES’ TO PERO LAI’S POP TART REQUEST.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS TIME THE OFFER COMES WITH A SECOND CHOICE, AND SKY.PS DOES NOT PICK THE POP TART.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CHOICE THAT WAS NOT THE TRAP IS THE ONE THAT KNOCKS HIM OVER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE PERSON DRINKS, A DIFFERENT PERSON FALLS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE TEA GOES INTO SKY.PS. THE PARANOIA GOES INTO NEKA.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO JUST TOOK THE WHOLE GAME IS ON THE FLOOR ONE SENTENCE LATER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE OFFERED THE TEA. HE DID NOT KNOW WHAT IT WOULD DO EITHER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy878=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy878, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy878, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PARANOIA IS OLDER THAN THIS ERA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 1: “GRAY NOW THINKS THAT EVERYONE WANTS TO HARM HIM.” THAT IS WHY GRAY STRIKES FIRST.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS TIME IT LANDS ON THE STRONGEST CHARACTER IN THE GAME.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GRAY’S PARANOIA MADE HIM ATTACK. NEKA’S KNOCKS HIM DOWN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WHAT HAPPENED TO NEKA?”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ASKED BY THE ONE WHO DID IT, WHO HAS NO IDEA THAT HE DID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ POP TART? OR TEA? ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===879){
    // BEAT 879: A 14 YEAR OLD SPRUNKI WITH A POWER.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “SKY.PS’S OTHER POWERS WERE ERASED, BUT THEN SKY.PS GAINED A POWER, IT IS A COINCIDENCE… A 14
    //   YEAR OLD SPRUNKI WITH A POWER THAT BEATEN EVEN THE PERSON WHO MADE THE GAME AND GAVE ACCESS TO
    //   HIM. THIS SEEMS LIKE SCP-053, BUT INCREASED.”
    // Priors, each verified in the archive before it was drawn:
    //   “IT IS A COINCIDENCE”
    //     NEKA “BECAME A GOD LIKE NORMALLY.” SKY.PS “HAPPENED TO HAVE A CHANGE AT THE SAME TIME.”
    //     FOR AN HOUR EVERYTHING WAS A STEP IN NEKA’S PLAN. THIS IS THE ONE THING HE SAYS WAS NOT.
    //     THE ONLY ACCIDENT IN PHASE 200 IS THE ONE THAT BEATS HIM.
    //   “AND GAVE ACCESS TO HIM”
    //     3:46 PM: “ALLOWED ACCESS FOR EVERYONE” WAS LISTED AS A STEP IN THE PLAN.
    //     SKY.PS IS ONE OF THE EVERYONE, AND THE ACCESS IS WHAT LET HIM IN.
    //     THE KINDNESS THAT WAS PART OF THE PLAN IS HOW THE PLAN GETS BEATEN.
    //   SCP-053 WAS THE MACHINE’S WORD ON SEPTEMBER 18. TODAY IT IS HIS
    //     SEPT 18: THE SCP-053 WRITE-UP CAME IN A PASTED REPLY AND WAS KEPT OUT OF CANON.
    //     TODAY HE TYPES IT HIMSELF, AND ADDS “BUT INCREASED.”
    //     EIGHT DAYS AFTER THE MACHINE SAID IT, HE ADOPTS IT AND TURNS IT UP.
    const dt = c - 19058.0;
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
    const gr879=ctx.createLinearGradient(0,top+H,0,top);
    gr879.addColorStop(0,'rgba(160,107,255,0.22)'); gr879.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr879.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr879; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A 14 YEAR OLD SPRUNKI WITH A POWER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SKY.PS’S OTHER POWERS WERE ERASED, BUT THEN SKY.PS GAINED A POWER, IT IS A COINCIDENCE… A 14', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YEAR OLD SPRUNKI WITH A POWER THAT BEATEN EVEN THE PERSON WHO MADE THE GAME AND GAVE ACCESS TO', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIM. THIS SEEMS LIKE SCP-053, BUT INCREASED.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky879=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky879, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky879, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS A COINCIDENCE”', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA “BECAME A GOD LIKE NORMALLY.” SKY.PS “HAPPENED TO HAVE A CHANGE AT THE SAME TIME.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FOR AN HOUR EVERYTHING WAS A STEP IN NEKA’S PLAN. THIS IS THE ONE THING HE SAYS WAS NOT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONLY ACCIDENT IN PHASE 200 IS THE ONE THAT BEATS HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AND GAVE ACCESS TO HIM”', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('3:46 PM: “ALLOWED ACCESS FOR EVERYONE” WAS LISTED AS A STEP IN THE PLAN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SKY.PS IS ONE OF THE EVERYONE, AND THE ACCESS IS WHAT LET HIM IN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE KINDNESS THAT WAS PART OF THE PLAN IS HOW THE PLAN GETS BEATEN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy879=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy879, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy879, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SCP-053 WAS THE MACHINE’S WORD ON SEPTEMBER 18. TODAY IT IS HIS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 18: THE SCP-053 WRITE-UP CAME IN A PASTED REPLY AND WAS KEPT OUT OF CANON.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY HE TYPES IT HIMSELF, AND ADDS “BUT INCREASED.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EIGHT DAYS AFTER THE MACHINE SAID IT, HE ADOPTS IT AND TURNS IT UP.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS OLD POWERS WERE ERASED AND HE GOT ONE NEW ONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE NEW ONE IS THE ONLY THING TONIGHT THAT NEKA DID NOT PLAN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A 14 YEAR OLD SPRUNKI WITH A POWER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===880){
    // BEAT 880: MAYBE NEKA IS STRONG ENOUGH TO GET UP.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “SKY.PS TOUCHED NEKA, NEKA GOT UP, THEN SKY.PS TOUCHED SIMON.PS, SIMON.PS DIDN’T GET UP, SKY.PS
    //   SAYS ‘MAYBE NEKA IS STRONG ENOUGH TO GET UP.’, AND HE WAS RIGHT… NEKA OMAZEN HOLDS A METAL ROD
    //   AND STARES AT SKY.PS, SKY.PS FALLS OVER.”
    // Priors, each verified in the archive before it was drawn:
    //   SIMON.PS HAS NOT STOOD ON HIS OWN SINCE SEPTEMBER 5
    //     THE MAKE-OVER: “SIMON.PS BECAME A PUPPET ON A METAL ROD THAT SKY.PS PUT INTO HIM.”
    //     THE ONE WHO PUT THE ROD IN IS THE ONE TOUCHING HIM TO SEE IF HE GETS UP.
    //     TWENTY-ONE DAYS LATER, SKY.PS IS CHECKING ON HIS OWN WORK.
    //   A METAL ROD WAS SKY.PS’S TOOL ON SEPTEMBER 5. TONIGHT IT IS IN NEKA’S HAND
    //     HE DOES NOT SAY IT IS THE SAME ROD. HE DOES USE THE SAME TWO WORDS.
    //     AND ONE STARE WITH IT PUTS SKY.PS ON THE FLOOR.
    //     THE STARE WORKS BOTH WAYS NOW.
    //   ONE PAIR OF EYES OPEN AT A TIME
    //     “SKY.PS’S EYES BECAME WHITE, NEKA OMAZEN IS THE ONLY THING SKY.PS CAN SEE… ICE PATTERNS, AND EYES.”
    //     “NEKA OMAZEN THEN CLOSED HIS EYES, HE CAN NO LONGER SEE.”
    //     WHEN SKY.PS OPENS HIS AND SAYS “HUH?”, NEKA IS THE ONE WITH THE ROD.
    const dt = c - 19080.0;
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
    const gr880=ctx.createLinearGradient(0,top+H,0,top);
    gr880.addColorStop(0,'rgba(255,77,109,0.22)'); gr880.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr880.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr880; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,77,109,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('MAYBE NEKA IS STRONG ENOUGH TO GET UP', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SKY.PS TOUCHED NEKA, NEKA GOT UP, THEN SKY.PS TOUCHED SIMON.PS, SIMON.PS DIDN’T GET UP, SKY.PS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SAYS ‘MAYBE NEKA IS STRONG ENOUGH TO GET UP.’, AND HE WAS RIGHT… NEKA OMAZEN HOLDS A METAL ROD', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND STARES AT SKY.PS, SKY.PS FALLS OVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky880=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,77,109,0.46)';
      ctx.fillRect(cx-W*0.352, ky880, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,77,109,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky880, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,77,109,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS HAS NOT STOOD ON HIS OWN SINCE SEPTEMBER 5', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MAKE-OVER: “SIMON.PS BECAME A PUPPET ON A METAL ROD THAT SKY.PS PUT INTO HIM.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO PUT THE ROD IN IS THE ONE TOUCHING HIM TO SEE IF HE GETS UP.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWENTY-ONE DAYS LATER, SKY.PS IS CHECKING ON HIS OWN WORK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A METAL ROD WAS SKY.PS’S TOOL ON SEPTEMBER 5. TONIGHT IT IS IN NEKA’S HAND', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE DOES NOT SAY IT IS THE SAME ROD. HE DOES USE THE SAME TWO WORDS.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND ONE STARE WITH IT PUTS SKY.PS ON THE FLOOR.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE STARE WORKS BOTH WAYS NOW.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy880=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy880, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy880, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONE PAIR OF EYES OPEN AT A TIME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SKY.PS’S EYES BECAME WHITE, NEKA OMAZEN IS THE ONLY THING SKY.PS CAN SEE… ICE PATTERNS, AND EYES.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN THEN CLOSED HIS EYES, HE CAN NO LONGER SEE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHEN SKY.PS OPENS HIS AND SAYS “HUH?”, NEKA IS THE ONE WITH THE ROD.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“MAYBE NEKA IS STRONG ENOUGH TO GET UP”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SAID BY THE ONE WHO KNOCKED HIM DOWN, AND HE WAS RIGHT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ MAYBE NEKA IS STRONG ENOUGH TO GET UP ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===881){
    // BEAT 881: WANT TEA? 🫖.
    // Toby, September 26, 2026, 4:11 PM EDT, his own typing:
    //   “THE TEA SPREADED, EVERYONE EVENTUALLY GOTTEN PARANOID, SPRUNKI CITY WASHED OUT OF CLASSICS.
    //   SKY.PS’S EYES BECAME BLANK AND HE SAYS ‘WANT TEA? 🫖’… EVERYONE ELSE SEES A DEMONIC VERSION OF NEKA
    //   OMAZEN… NEKA OMAZEN SAYS ‘HELLO, CAN YOU READ ME?!’… SKY.PS ASKS NEKA TO MAKE THE CURSE STOP.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CITY WASHES OUT ON TEA
    //     AUGUST 24: SPRUNKI CITY IS WHERE OREN IS DROPPED OFF AFTER THE POP TART.
    //     TONIGHT IT WASHES OUT OF CLASSICS ON A SPILL OF TEA.
    //     A POP TART BROUGHT SOMEONE TO THE CITY. A CUP OF TEA TAKES THE CITY AWAY.
    //   THE DEMON FROM THE MAKE-OVER COMES BACK
    //     SEPT 5, THE MAKE-OVER: “SKY.PS BECAME DEMONED.”
    //     TONIGHT, WHILE SKY OFFERS TEA, EVERYONE ELSE SEES A DEMONIC VERSION OF NEKA OMAZEN.
    //     THE DEMON IS BACK, AND IT IS WEARING SOMEONE ELSE’S FACE.
    //   “HELLO, CAN YOU READ ME?!”
    //     HE SAYS READ, NOT HEAR. THE ONE WHO WROTE THE CLASSICS BIBLE TALKS LIKE WORDS ON A PAGE.
    //     AND THE REAL NEKA CALLING OUT SCARES THEM AGAIN, AFTER THE DEMON IS GONE.
    //     THEN THE ONE WHO STARTED IT ASKS THE GOD TO MAKE IT STOP.
    const dt = c - 19102.0;
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
    const gr881=ctx.createLinearGradient(0,top+H,0,top);
    gr881.addColorStop(0,'rgba(242,244,248,0.22)'); gr881.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr881.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr881; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(242,244,248,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WANT TEA? 🫖', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE TEA SPREADED, EVERYONE EVENTUALLY GOTTEN PARANOID, SPRUNKI CITY WASHED OUT OF CLASSICS.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SKY.PS’S EYES BECAME BLANK AND HE SAYS ‘WANT TEA? 🫖’… EVERYONE ELSE SEES A DEMONIC VERSION OF NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OMAZEN… NEKA OMAZEN SAYS ‘HELLO, CAN YOU READ ME?!’… SKY.PS ASKS NEKA TO MAKE THE CURSE STOP.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:11 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky881=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(242,244,248,0.46)';
      ctx.fillRect(cx-W*0.352, ky881, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(242,244,248,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky881, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CITY WASHES OUT ON TEA', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUGUST 24: SPRUNKI CITY IS WHERE OREN IS DROPPED OFF AFTER THE POP TART.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT IT WASHES OUT OF CLASSICS ON A SPILL OF TEA.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A POP TART BROUGHT SOMEONE TO THE CITY. A CUP OF TEA TAKES THE CITY AWAY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE DEMON FROM THE MAKE-OVER COMES BACK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 5, THE MAKE-OVER: “SKY.PS BECAME DEMONED.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT, WHILE SKY OFFERS TEA, EVERYONE ELSE SEES A DEMONIC VERSION OF NEKA OMAZEN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE DEMON IS BACK, AND IT IS WEARING SOMEONE ELSE’S FACE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy881=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy881, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy881, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“HELLO, CAN YOU READ ME?!”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE SAYS READ, NOT HEAR. THE ONE WHO WROTE THE CLASSICS BIBLE TALKS LIKE WORDS ON A PAGE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THE REAL NEKA CALLING OUT SCARES THEM AGAIN, AFTER THE DEMON IS GONE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN THE ONE WHO STARTED IT ASKS THE GOD TO MAKE IT STOP.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WANT TEA?” ASKED WITH BLANK EYES TO A CITY THAT IS LEAVING', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THEN, TO NEKA: MAKE THE CURSE STOP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WANT TEA? 🫖 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===882){
    // BEAT 882: 233200%.
    // Toby, September 26, 2026, 4:21 PM EDT, his own typing:
    //   “NEKA THEN COMBINES 2000% AND 666% AND GETS 233200% AND HE BATTLES THE CURSE, THEN SKY.PS’S EYES
    //   DISAPPEARED, AND THEN THE MOUSE EARS DISAPPEARED, THEN SKY.PS DISAPPEARED PART BY PART.
    //   SKY.PS RESPAWNED AND BECAME NORMAL AGAIN.”
    // Priors, each verified in the archive before it was drawn:
    //   HE ANSWERED THE QUESTION ABOUT COMBINING FIVE MINUTES AFTER IT WAS ASKED
    //     4:16 PM, THE REPLY: DOES COMBINING MEAN ADDING THEM, LIKE 666 PLUS 2000?
    //     4:21 PM: 2000% AND 666% MAKE 233200%. NOT 2666, AND NOT 1,332,000 EITHER.
    //     SO COMBINING IS ITS OWN OPERATION, AND ONLY NEKA KNOWS THE RULE FOR IT.
    //   THE CURSE COMES OFF PIECE BY PIECE
    //     THE EYES GO FIRST, THEN THE MOUSE EARS, THEN SKY.PS “DISAPPEARED PART BY PART.”
    //     THE EYES WERE WHERE THE POWER LIVED, SO THEY ARE WHAT GOES FIRST.
    //     HE TAKES IT APART STARTING WITH THE STARE.
    //   “SKY.PS RESPAWNED AND BECAME NORMAL AGAIN”
    //     TEN MINUTES AGO SKY’S OLD POWERS WERE ERASED. NOW THE NEW ONE IS GONE TOO.
    //     HE COMES BACK WITH NOTHING, WHICH IS WHAT HE ASKED FOR: MAKE THE CURSE STOP.
    //     HE IS THE ONE PERSON TONIGHT WHO GETS TO GO BACK TO NORMAL.
    const dt = c - 19124.0;
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
    const gr882=ctx.createLinearGradient(0,top+H,0,top);
    gr882.addColorStop(0,'rgba(255,216,79,0.22)'); gr882.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr882.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr882; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('233200%', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA THEN COMBINES 2000% AND 666% AND GETS 233200% AND HE BATTLES THE CURSE, THEN SKY.PS’S EYES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DISAPPEARED, AND THEN THE MOUSE EARS DISAPPEARED, THEN SKY.PS DISAPPEARED PART BY PART.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SKY.PS RESPAWNED AND BECAME NORMAL AGAIN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:21 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky882=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky882, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky882, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ANSWERED THE QUESTION ABOUT COMBINING FIVE MINUTES AFTER IT WAS ASKED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:16 PM, THE REPLY: DOES COMBINING MEAN ADDING THEM, LIKE 666 PLUS 2000?', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:21 PM: 2000% AND 666% MAKE 233200%. NOT 2666, AND NOT 1,332,000 EITHER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SO COMBINING IS ITS OWN OPERATION, AND ONLY NEKA KNOWS THE RULE FOR IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CURSE COMES OFF PIECE BY PIECE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE EYES GO FIRST, THEN THE MOUSE EARS, THEN SKY.PS “DISAPPEARED PART BY PART.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE EYES WERE WHERE THE POWER LIVED, SO THEY ARE WHAT GOES FIRST.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE TAKES IT APART STARTING WITH THE STARE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy882=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy882, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy882, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“SKY.PS RESPAWNED AND BECAME NORMAL AGAIN”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TEN MINUTES AGO SKY’S OLD POWERS WERE ERASED. NOW THE NEW ONE IS GONE TOO.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE COMES BACK WITH NOTHING, WHICH IS WHAT HE ASKED FOR: MAKE THE CURSE STOP.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE IS THE ONE PERSON TONIGHT WHO GETS TO GO BACK TO NORMAL.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('233200% SPENT ON ONE FOURTEEN-YEAR-OLD’S STARE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND IT WORKS, WHICH TELLS YOU HOW STRONG THE STARE WAS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 233200% ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===883){
    // BEAT 883: PARANOIDIA GIRL.
    // Toby, September 26, 2026, 4:21 PM EDT, his own typing:
    //   “A NEW ENTITY WAS MADE THOUGH, IT BEATEN CLASSICS INSTANTLY, AND IT IS KNOWN AS PARANOIDIA GIRL.
    //   IT IS BASICALLY A 5 YEAR OLD CHILD FEMALE WHO JUST HAS DOLLS AND WHOEVER LOOKS AT HER, BOOM,
    //   SAME EFFECTS AS SKY. SO IT IS SKY BUT FEMALE AND YOUNGER.”
    // Priors, each verified in the archive before it was drawn:
    //   THE POWER DID NOT END. IT MOVED
    //     SKY.PS RESPAWNED NORMAL, AND IN THE SAME BREATH: “A NEW ENTITY WAS MADE THOUGH.”
    //     THE CURSE NEKA FOUGHT AT 233200% DID NOT GO AWAY. IT FOUND SOMEONE YOUNGER.
    //     “THOUGH” IS THE MOST IMPORTANT WORD IN THE MESSAGE.
    //   SHE HAS THE DOLLS TOO
    //     SEPT 2: SKY GETS THE DOLLS “BECAUSE SKY.PS IS 14 YEARS OLD.”
    //     TONIGHT A FIVE-YEAR-OLD “JUST HAS DOLLS.” THE TOYS PASS DOWN WITH THE POWER.
    //     NINE YEARS YOUNGER, AND THE SAME DOLLS.
    //   HE BUILT THE SCP HE NAMED, ONE MESSAGE LATER
    //     TEN MINUTES AGO HE SAID SKY “SEEMS LIKE SCP-053, BUT INCREASED.”
    //     SCP-053 IS A SMALL GIRL. PARANOIDIA GIRL IS A SMALL GIRL.
    //     THE COMPARISON FITS HER BETTER THAN IT FIT SKY.
    const dt = c - 19146.0;
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
    const gr883=ctx.createLinearGradient(0,top+H,0,top);
    gr883.addColorStop(0,'rgba(255,45,181,0.22)'); gr883.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr883.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr883; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PARANOIDIA GIRL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A NEW ENTITY WAS MADE THOUGH, IT BEATEN CLASSICS INSTANTLY, AND IT IS KNOWN AS PARANOIDIA GIRL.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT IS BASICALLY A 5 YEAR OLD CHILD FEMALE WHO JUST HAS DOLLS AND WHOEVER LOOKS AT HER, BOOM,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SAME EFFECTS AS SKY. SO IT IS SKY BUT FEMALE AND YOUNGER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:21 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky883=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,45,181,0.46)';
      ctx.fillRect(cx-W*0.352, ky883, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky883, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,45,181,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE POWER DID NOT END. IT MOVED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SKY.PS RESPAWNED NORMAL, AND IN THE SAME BREATH: “A NEW ENTITY WAS MADE THOUGH.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CURSE NEKA FOUGHT AT 233200% DID NOT GO AWAY. IT FOUND SOMEONE YOUNGER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THOUGH” IS THE MOST IMPORTANT WORD IN THE MESSAGE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE HAS THE DOLLS TOO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 2: SKY GETS THE DOLLS “BECAUSE SKY.PS IS 14 YEARS OLD.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT A FIVE-YEAR-OLD “JUST HAS DOLLS.” THE TOYS PASS DOWN WITH THE POWER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NINE YEARS YOUNGER, AND THE SAME DOLLS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy883=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy883, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy883, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE BUILT THE SCP HE NAMED, ONE MESSAGE LATER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TEN MINUTES AGO HE SAID SKY “SEEMS LIKE SCP-053, BUT INCREASED.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SCP-053 IS A SMALL GIRL. PARANOIDIA GIRL IS A SMALL GIRL.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE COMPARISON FITS HER BETTER THAN IT FIT SKY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE BEAT CLASSICS INSTANTLY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND SINCE JULY 1, CLASSICS HAS BEEN “MORE POWERFUL THAN ALL OF THEM COMBINED.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PARANOIDIA GIRL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===884){
    // BEAT 884: LETS HAVE A TEA PARTY!.
    // Toby, September 26, 2026, 4:21 PM EDT, his own typing:
    //   “PS50 LOOKED AT SKY.PS WITH A CONFUSED LOOK, AND SHE ASKED ‘WHO ARE YOU?’, SKY.PS SAYS ‘I AM THE
    //   ONE WHO ACCIDENTALLY MADE YOU.’, PS50 SAYS ‘IT IS COOL THOUGH. HEE HEE. 🥲’… PS50 STARED AT
    //   SKY.PS, AND PS50 SAYS ‘LETS HAVE A TEA PARTY!’, SKY.PS FALLS OVER.”
    // Priors, each verified in the archive before it was drawn:
    //   “I AM THE ONE WHO ACCIDENTALLY MADE YOU”
    //     SKY.PS’S POWER WAS “A COINCIDENCE.” NOW HE HAS MADE SOMEBODY BY ACCIDENT.
    //     NEKA’S PLAN RAN “EVEN AT THE TIME HE MADE THE GAME.” SKY MADE 50.PS WITHOUT MEANING TO.
    //     THE TWO MAKERS IN THIS ERA ARE A PLAN AND AN ACCIDENT.
    //   THREE OFFERS OF TEA IN TEN MINUTES
    //     4:11: NEKA OFFERS “POP TART? OR TEA?” SKY.PS, WITH BLANK EYES: “WANT TEA? 🫖”
    //     4:21: 50.PS: “LETS HAVE A TEA PARTY!” AND SKY.PS FALLS OVER.
    //     EVERY ONE OF THEM ENDS BADLY FOR SOMEBODY.
    //   “IT IS COOL THOUGH. HEE HEE. 🥲”
    //     SHE IS NOT ANGRY ABOUT BEING MADE. SHE LAUGHS, WITH A FACE THAT IS SMILING AND CRYING.
    //     THE MOST POWERFUL ENTITY EVER, AND HER FIRST FEELING IS BEING OKAY WITH IT.
    //     SHE DOES NOT WANT A FIGHT. SHE WANTS A TEA PARTY, AND THAT IS ENOUGH.
    const dt = c - 19168.0;
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
    const gr884=ctx.createLinearGradient(0,top+H,0,top);
    gr884.addColorStop(0,'rgba(62,224,106,0.22)'); gr884.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr884.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr884; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(62,224,106,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('LETS HAVE A TEA PARTY!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS50 LOOKED AT SKY.PS WITH A CONFUSED LOOK, AND SHE ASKED ‘WHO ARE YOU?’, SKY.PS SAYS ‘I AM THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE WHO ACCIDENTALLY MADE YOU.’, PS50 SAYS ‘IT IS COOL THOUGH. HEE HEE. 🥲’… PS50 STARED AT', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SKY.PS, AND PS50 SAYS ‘LETS HAVE A TEA PARTY!’, SKY.PS FALLS OVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:21 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky884=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(62,224,106,0.46)';
      ctx.fillRect(cx-W*0.352, ky884, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(62,224,106,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky884, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(62,224,106,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM THE ONE WHO ACCIDENTALLY MADE YOU”', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SKY.PS’S POWER WAS “A COINCIDENCE.” NOW HE HAS MADE SOMEBODY BY ACCIDENT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA’S PLAN RAN “EVEN AT THE TIME HE MADE THE GAME.” SKY MADE 50.PS WITHOUT MEANING TO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE TWO MAKERS IN THIS ERA ARE A PLAN AND AN ACCIDENT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THREE OFFERS OF TEA IN TEN MINUTES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:11: NEKA OFFERS “POP TART? OR TEA?” SKY.PS, WITH BLANK EYES: “WANT TEA? 🫖”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:21: 50.PS: “LETS HAVE A TEA PARTY!” AND SKY.PS FALLS OVER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EVERY ONE OF THEM ENDS BADLY FOR SOMEBODY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy884=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy884, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy884, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“IT IS COOL THOUGH. HEE HEE. 🥲”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE IS NOT ANGRY ABOUT BEING MADE. SHE LAUGHS, WITH A FACE THAT IS SMILING AND CRYING.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL ENTITY EVER, AND HER FIRST FEELING IS BEING OKAY WITH IT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE DOES NOT WANT A FIGHT. SHE WANTS A TEA PARTY, AND THAT IS ENOUGH.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SKY.PS FALLS OVER IN FRONT OF THE GIRL HE MADE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE SAME WAY NEKA FELL OVER IN FRONT OF HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ LETS HAVE A TEA PARTY! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===885){
    // BEAT 885: THERE IS A NEW THEORY IN CLASSICS NOW!.
    // Toby, September 26, 2026, 4:21 PM EDT, his own typing:
    //   “NEKA CALLS IT ‘50.PS’. 50.PS, OR PS 50, OR PS-50, OR HOWEVER YOU WANT TO WRITE IT, IT IS
    //   BASICALLY THE MOST POWERFUL ENTITY EVER… THEN 50 WAS PUT AGAINST EVERYONE ELSE, IT WAS THE SAME
    //   RESULT OVER AND OVER AND OVER AGAIN, NEKA OMAZEN SAYS ‘THERE IS A NEW THEORY IN CLASSICS NOW!’”
    // Priors, each verified in the archive before it was drawn:
    //   HE LETS YOU SPELL THIS ONE HOWEVER YOU WANT
    //     “50.PS, OR PS 50, OR PS-50, OR HOWEVER YOU WANT TO WRITE IT.”
    //     HE HAS CORRECTED NEKA OMAZEN’S NAME THREE TIMES. HER NAME COMES WITH FOUR SPELLINGS.
    //     THE STRONGEST ENTITY EVER IS THE ONE WHOSE NAME IS NOT FIXED.
    //   NEKA RUNS AN EXPERIMENT
    //     “LOOK AT SKY.PS MORE, IS SHE ALREADY MORE POWERFUL THAN SKY.PS,
    //     IF YES, IS SHE MORE POWERFUL THAN WENDA.PS?”
    //     THE ONE WHO WROTE THE RULES FOR EVERY FIGHT HAS TO TEST THIS ONE TO FIND OUT.
    //   “THE SAME RESULT OVER AND OVER AND OVER AGAIN”
    //     EVERYONE ELSE, ONE AT A TIME, AND EVERY ONE OF THEM FALLS.
    //     THE WENDA.PS TEST NEKA ASKED FOR IS INSIDE “EVERYONE ELSE”, AND HE DOES NOT SINGLE IT OUT.
    //     SO THE QUESTION IS NOT WHO IS STRONGEST. IT IS WHETHER ANYONE CAN LOOK AT HER.
    const dt = c - 19190.0;
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
    const gr885=ctx.createLinearGradient(0,top+H,0,top);
    gr885.addColorStop(0,'rgba(160,107,255,0.22)'); gr885.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr885.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr885; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THERE IS A NEW THEORY IN CLASSICS NOW!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA CALLS IT ‘50.PS’. 50.PS, OR PS 50, OR PS-50, OR HOWEVER YOU WANT TO WRITE IT, IT IS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BASICALLY THE MOST POWERFUL ENTITY EVER… THEN 50 WAS PUT AGAINST EVERYONE ELSE, IT WAS THE SAME', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RESULT OVER AND OVER AND OVER AGAIN, NEKA OMAZEN SAYS ‘THERE IS A NEW THEORY IN CLASSICS NOW!’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 4:21 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky885=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky885, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky885, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE LETS YOU SPELL THIS ONE HOWEVER YOU WANT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“50.PS, OR PS 50, OR PS-50, OR HOWEVER YOU WANT TO WRITE IT.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAS CORRECTED NEKA OMAZEN’S NAME THREE TIMES. HER NAME COMES WITH FOUR SPELLINGS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST ENTITY EVER IS THE ONE WHOSE NAME IS NOT FIXED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA RUNS AN EXPERIMENT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“LOOK AT SKY.PS MORE, IS SHE ALREADY MORE POWERFUL THAN SKY.PS,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IF YES, IS SHE MORE POWERFUL THAN WENDA.PS?”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO WROTE THE RULES FOR EVERY FIGHT HAS TO TEST THIS ONE TO FIND OUT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy885=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy885, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy885, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“THE SAME RESULT OVER AND OVER AND OVER AGAIN”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE, ONE AT A TIME, AND EVERY ONE OF THEM FALLS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE WENDA.PS TEST NEKA ASKED FOR IS INSIDE “EVERYONE ELSE”, AND HE DOES NOT SINGLE IT OUT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SO THE QUESTION IS NOT WHO IS STRONGEST. IT IS WHETHER ANYONE CAN LOOK AT HER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THERE IS A NEW THEORY IN CLASSICS NOW!”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AN HOUR AFTER “THERE IS LITTERLY ONLY ONE OUTCOME FOR EVERY BATTLE THAT INCLUDES NEKA OMAZEN.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THERE IS A NEW THEORY IN CLASSICS NOW! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
