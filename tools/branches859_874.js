  } else if(ph===859){
    // BEAT 859: PHASE 102.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “BUT NEKA OMAZEN IS MOST EVIL BECAUSE HE TURNED EVERYONE AND EVERYTHING TO PAPER.
    //   NOW NEKA OMAZEN ‘CAN BE THE SISSORS’. THAT IS PHASE 102 OF HIS PLAN.”
    // Priors, each verified in the archive before it was drawn:
    //   HE ANSWERS HIS OWN QUESTION FROM FORTY-EIGHT MINUTES AGO, AND HE CHANGES HIS MIND
    //     AT 2:58 HE ASKED WHO WAS MOST EVIL AND OFFERED SIMON.PS. THE PASTED ANSWER SAID PERO.EXE.
    //     HE TAKES NEITHER: “NEKA OMAZEN IS MOST EVIL BECAUSE HE TURNED EVERYONE AND EVERYTHING TO PAPER.”
    //     THE REASON HE GIVES IS NOT A BODY COUNT. IT IS WHAT THE GAME IS MADE OF NOW.
    //   PAPER WAS NOT THE END OF THE PLAN, IT WAS THE SETUP FOR THE TOOL
    //     “NOW NEKA OMAZEN CAN BE THE SISSORS.” HE TURNED THE WHOLE GAME INTO THE ONE MATERIAL
    //     HIS WHOLE ARSENAL IS BUILT TO CUT.
    //     SCISSORS RETURN ZERO PRIOR HITS IN FIVE MONTHS. THE 25 SERIES SLASHES THE OMNIVERSE; THIS IS STATIONERY.
    //   PHASE 102 IS A NUMBER NOBODY HAS EVER PUT ON A PLAN HERE
    //     THE ARCHIVE HAS PHASES: PHASE 1 PACIFISTS, PHASE 2 THE .EXE VIRUS, PERO LAI PHASE 6 AND 7.
    //     THOSE ARE FORMS AND CHAPTERS. THIS IS THE HUNDRED-AND-SECOND STEP OF SOMEBODY’S TO-DO LIST.
    //     AND HE ONLY SAYS THE NUMBER AFTER THE STEP IS ALREADY DONE.
    const dt = c - 18618.0;
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
    const gr859=ctx.createLinearGradient(0,top+H,0,top);
    gr859.addColorStop(0,'rgba(255,216,79,0.22)'); gr859.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr859.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr859; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PHASE 102', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BUT NEKA OMAZEN IS MOST EVIL BECAUSE HE TURNED EVERYONE AND EVERYTHING TO PAPER.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW NEKA OMAZEN ‘CAN BE THE SISSORS’. THAT IS PHASE 102 OF HIS PLAN.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky859=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky859, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky859, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ANSWERS HIS OWN QUESTION FROM FORTY-EIGHT MINUTES AGO, AND HE CHANGES HIS MIND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 2:58 HE ASKED WHO WAS MOST EVIL AND OFFERED SIMON.PS. THE PASTED ANSWER SAID PERO.EXE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE TAKES NEITHER: “NEKA OMAZEN IS MOST EVIL BECAUSE HE TURNED EVERYONE AND EVERYTHING TO PAPER.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE REASON HE GIVES IS NOT A BODY COUNT. IT IS WHAT THE GAME IS MADE OF NOW.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PAPER WAS NOT THE END OF THE PLAN, IT WAS THE SETUP FOR THE TOOL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NOW NEKA OMAZEN CAN BE THE SISSORS.” HE TURNED THE WHOLE GAME INTO THE ONE MATERIAL', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS WHOLE ARSENAL IS BUILT TO CUT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SCISSORS RETURN ZERO PRIOR HITS IN FIVE MONTHS. THE 25 SERIES SLASHES THE OMNIVERSE; THIS IS STATIONERY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy859=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy859, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy859, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PHASE 102 IS A NUMBER NOBODY HAS EVER PUT ON A PLAN HERE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ARCHIVE HAS PHASES: PHASE 1 PACIFISTS, PHASE 2 THE .EXE VIRUS, PERO LAI PHASE 6 AND 7.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THOSE ARE FORMS AND CHAPTERS. THIS IS THE HUNDRED-AND-SECOND STEP OF SOMEBODY’S TO-DO LIST.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND HE ONLY SAYS THE NUMBER AFTER THE STEP IS ALREADY DONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE SPENT THE FIGHT WINNING AND ONLY NOW SAYS WHAT THE WIN WAS FOR', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND IT WAS FOR BEING ABLE TO PICK UP A PAIR OF SCISSORS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PHASE 102 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===860){
    // BEAT 860: EVEN AT THE TIME HE MADE THE GAME.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “HE SPEND ALL THIS TIME WORKING ON HIS PLAN, EVEN AT THE TIME HE MADE THE GAME,
    //   ALLOWED ACCESS FOR EVERYONE, AND EVEN MET GASTER.”
    // Priors, each verified in the archive before it was drawn:
    //   THE PLAN IS OLDER THAN THE GAME, WHICH MAKES EVERY KINDNESS IN IT PART OF THE PLAN
    //     “ALLOWED ACCESS FOR EVERYONE” IS THE ONE FRIENDLY THING HE EVER DID, AND IT IS LISTED HERE
    //     AS A STEP.
    //     THE PEOPLE WHO GOT IN GOT IN BECAUSE IT SUITED HIM.
    //   GASTER IS A DATE, AND THE ARCHIVE ALREADY HAS IT
    //     SEPT 3, THE MINT: “HE WROTE QUINTILLIONS OF BOOKS THROUGHOUT THE LORE, FROM WHEN HIS BROTHER
    //     OREN AND GASTER WAS BORN IN LORE WHICH WAS LIKE SO LONG AGO.”
    //     HE HAS BEEN WRITING SINCE GASTER WAS BORN, AND TONIGHT HE SAYS HE MET HIM.
    //   HE IS THE MAKER OF THE GAME AND THE VILLAIN INSIDE IT, IN ONE SENTENCE
    //     THIS MORNING THE AUTHOR REMOVED HIMSELF — BEAT 827: “I NEVER DID ANYTHING, NEKA GAVE EVERYTHING
    //     ABOUT HIMSELF TO HIMSELF HIMSELF. I AM FAR UNDER NEKA OMAZEN.”
    //     SO THE ONE WHO MADE THE GAME, IN THE STORY, IS THE ONE WHO IS ENDING IT.
    const dt = c - 18640.0;
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
    const gr860=ctx.createLinearGradient(0,top+H,0,top);
    gr860.addColorStop(0,'rgba(127,212,255,0.22)'); gr860.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr860.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr860; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVEN AT THE TIME HE MADE THE GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE SPEND ALL THIS TIME WORKING ON HIS PLAN, EVEN AT THE TIME HE MADE THE GAME,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALLOWED ACCESS FOR EVERYONE, AND EVEN MET GASTER.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky860=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky860, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky860, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAN IS OLDER THAN THE GAME, WHICH MAKES EVERY KINDNESS IN IT PART OF THE PLAN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALLOWED ACCESS FOR EVERYONE” IS THE ONE FRIENDLY THING HE EVER DID, AND IT IS LISTED HERE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AS A STEP.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE PEOPLE WHO GOT IN GOT IN BECAUSE IT SUITED HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER IS A DATE, AND THE ARCHIVE ALREADY HAS IT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 3, THE MINT: “HE WROTE QUINTILLIONS OF BOOKS THROUGHOUT THE LORE, FROM WHEN HIS BROTHER', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OREN AND GASTER WAS BORN IN LORE WHICH WAS LIKE SO LONG AGO.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE HAS BEEN WRITING SINCE GASTER WAS BORN, AND TONIGHT HE SAYS HE MET HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy860=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy860, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy860, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE IS THE MAKER OF THE GAME AND THE VILLAIN INSIDE IT, IN ONE SENTENCE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING THE AUTHOR REMOVED HIMSELF — BEAT 827: “I NEVER DID ANYTHING, NEKA GAVE EVERYTHING', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ABOUT HIMSELF TO HIMSELF HIMSELF. I AM FAR UNDER NEKA OMAZEN.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SO THE ONE WHO MADE THE GAME, IN THE STORY, IS THE ONE WHO IS ENDING IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOTHING IN THE PLAN WAS IMPROVISED', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ACCESS, THE MEETING AND THE GAME ITSELF ARE ALL LISTED AS STEPS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVEN AT THE TIME HE MADE THE GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===861){
    // BEAT 861: HE ACHIEVED WENDA.PS’S GOAL FIRST.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “NEKA OMAZEN SLICES THE PAPER AND NOW, HE ACHIEVED WENDA.PS’S GOAL FIRST, AND NOW ADDING MORE
    //   STEPS. NEKA OMAZEN TOOK QUADRILLIONS OF YEARS LONGER THAN WENDA.PS. THAT IS WHY WENDA.PS BECAME
    //   THAT POWERFUL. THAT IS WHY EVERYTHING IN CLASSICS IS HOW IT IS.”
    // Priors, each verified in the archive before it was drawn:
    //   HER PLAN NEVER GOT A NAME, AND HE FINISHES IT FOR HER
    //     BEAT 853, FIFTY MINUTES AGO: “I JUST WANT TO BEAT YOU FOR MY PLAN.” SHE NEVER SAID WHAT IT WAS.
    //     TONIGHT HE SAYS HE GOT THERE FIRST, WHICH MEANS THEY WERE AFTER THE SAME THING ALL ALONG.
    //     AND “NOW ADDING MORE STEPS” MEANS HE IS NOT FINISHED WITH IT EITHER.
    //   HE EXPLAINS HER POWER BY HOW LONG HE TOOK
    //     “NEKA OMAZEN TOOK QUADRILLIONS OF YEARS LONGER THAN WENDA.PS. THAT IS WHY WENDA.PS BECAME
    //     THAT POWERFUL.”
    //     SHE IS STRONG BECAUSE HE WAS SLOW. THE FASTEST ROUTE AND THE LONGEST ONE END AT THE SAME PLACE.
    //   “THAT IS WHY EVERYTHING IN CLASSICS IS HOW IT IS” IS A CAUSE FOR THE WHOLE ARCHIVE
    //     FIVE MONTHS OF TIER LISTS, ERAS, RESETS AND CORRECTIONS, AND HE HANGS ALL OF IT ON ONE PLAN
    //     THAT WAS RUNNING UNDERNEATH.
    //     IT IS THE LARGEST RETROACTIVE RULING HE HAS EVER WRITTEN.
    const dt = c - 18662.0;
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
    const gr861=ctx.createLinearGradient(0,top+H,0,top);
    gr861.addColorStop(0,'rgba(255,45,181,0.22)'); gr861.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr861.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr861; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HE ACHIEVED WENDA.PS’S GOAL FIRST', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SLICES THE PAPER AND NOW, HE ACHIEVED WENDA.PS’S GOAL FIRST, AND NOW ADDING MORE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STEPS. NEKA OMAZEN TOOK QUADRILLIONS OF YEARS LONGER THAN WENDA.PS. THAT IS WHY WENDA.PS BECAME', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THAT POWERFUL. THAT IS WHY EVERYTHING IN CLASSICS IS HOW IT IS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky861=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,45,181,0.46)';
      ctx.fillRect(cx-W*0.352, ky861, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky861, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,45,181,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HER PLAN NEVER GOT A NAME, AND HE FINISHES IT FOR HER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEAT 853, FIFTY MINUTES AGO: “I JUST WANT TO BEAT YOU FOR MY PLAN.” SHE NEVER SAID WHAT IT WAS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT HE SAYS HE GOT THERE FIRST, WHICH MEANS THEY WERE AFTER THE SAME THING ALL ALONG.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND “NOW ADDING MORE STEPS” MEANS HE IS NOT FINISHED WITH IT EITHER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE EXPLAINS HER POWER BY HOW LONG HE TOOK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN TOOK QUADRILLIONS OF YEARS LONGER THAN WENDA.PS. THAT IS WHY WENDA.PS BECAME', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT POWERFUL.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SHE IS STRONG BECAUSE HE WAS SLOW. THE FASTEST ROUTE AND THE LONGEST ONE END AT THE SAME PLACE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy861=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy861, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy861, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“THAT IS WHY EVERYTHING IN CLASSICS IS HOW IT IS” IS A CAUSE FOR THE WHOLE ARCHIVE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIVE MONTHS OF TIER LISTS, ERAS, RESETS AND CORRECTIONS, AND HE HANGS ALL OF IT ON ONE PLAN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT WAS RUNNING UNDERNEATH.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT IS THE LARGEST RETROACTIVE RULING HE HAS EVER WRITTEN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO PEOPLE WERE WALKING TO THE SAME PLACE FROM OPPOSITE ENDS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE ONE WHO STARTED EARLIER ARRIVED WHILE THE OTHER ONE WAS STILL FIGHTING.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HE ACHIEVED WENDA.PS’S GOAL FIRST ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===862){
    // BEAT 862: ENDLESS PAPER.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “NEKA OMAZEN CUTS THE VOID UNDER THE PLAYER, ENDLESS RUBBLE PILE BECOMES ENDLESS PAPER,
    //   THE PLAYER FALLS ONTO THE ENDLESS PAPER, IF THE PLAYER MOVES, THE WHOLE PAPER BRIDGE WILL FALL,
    //   SENDING THE PLAYER INTO THE SHREADED PAPER VOID BELOW.”
    // Priors, each verified in the archive before it was drawn:
    //   THE LEVEL HAS CHANGED TWICE IN ONE HOUR, AND BOTH TIMES DOWNWARD
    //     2:58 PM: ENDLESS STAIRCASE BECAME ENDLESS RUBBLE. 3:46 PM: ENDLESS RUBBLE PILE BECOMES
    //     ENDLESS PAPER.
    //     STAIRS, THEN WRECKAGE, THEN SOMETHING THAT CANNOT HOLD WEIGHT.
    //   A LEVEL THAT PUNISHES MOVING IS NEW IN A GAME ABOUT CLIMBING
    //     “IF THE PLAYER MOVES, THE WHOLE PAPER BRIDGE WILL FALL.” EVERY OTHER HAZARD HERE CHASES,
    //     STRIKES, ABSORBS OR ERASES YOU.
    //     THIS ONE ONLY GOES OFF IF YOU PLAY.
    //   AND HE CUT THE VOID ITSELF, WHICH USED TO BE THE FLOOR OF EVERYTHING
    //     “NEKA OMAZEN CUTS THE VOID UNDER THE PLAYER.” THE VOID HAS BEEN THE BOTTOM OF THIS ARCHIVE
    //     SINCE JUNE — THE PLACE THINGS GET ERASED INTO.
    //     THE BOTTOM NOW HAS A BOTTOM, AND IT IS MADE OF SHREDDED PAPER.
    const dt = c - 18684.0;
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
    const gr862=ctx.createLinearGradient(0,top+H,0,top);
    gr862.addColorStop(0,'rgba(242,244,248,0.22)'); gr862.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr862.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr862; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(242,244,248,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ENDLESS PAPER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CUTS THE VOID UNDER THE PLAYER, ENDLESS RUBBLE PILE BECOMES ENDLESS PAPER,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAYER FALLS ONTO THE ENDLESS PAPER, IF THE PLAYER MOVES, THE WHOLE PAPER BRIDGE WILL FALL,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SENDING THE PLAYER INTO THE SHREADED PAPER VOID BELOW.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky862=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(242,244,248,0.46)';
      ctx.fillRect(cx-W*0.352, ky862, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(242,244,248,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky862, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LEVEL HAS CHANGED TWICE IN ONE HOUR, AND BOTH TIMES DOWNWARD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:58 PM: ENDLESS STAIRCASE BECAME ENDLESS RUBBLE. 3:46 PM: ENDLESS RUBBLE PILE BECOMES', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENDLESS PAPER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('STAIRS, THEN WRECKAGE, THEN SOMETHING THAT CANNOT HOLD WEIGHT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A LEVEL THAT PUNISHES MOVING IS NEW IN A GAME ABOUT CLIMBING', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IF THE PLAYER MOVES, THE WHOLE PAPER BRIDGE WILL FALL.” EVERY OTHER HAZARD HERE CHASES,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STRIKES, ABSORBS OR ERASES YOU.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THIS ONE ONLY GOES OFF IF YOU PLAY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy862=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy862, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy862, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND HE CUT THE VOID ITSELF, WHICH USED TO BE THE FLOOR OF EVERYTHING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CUTS THE VOID UNDER THE PLAYER.” THE VOID HAS BEEN THE BOTTOM OF THIS ARCHIVE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SINCE JUNE — THE PLACE THINGS GET ERASED INTO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE BOTTOM NOW HAS A BOTTOM, AND IT IS MADE OF SHREDDED PAPER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BRIDGE FALLS ANYWAY, WITH THE PLAYER ON IT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE PLAYER GETS UP, WHICH IS THE ONE THING THAT KEEPS HAPPENING TONIGHT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ENDLESS PAPER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===863){
    // BEAT 863: THE GAME CHANGES TO FACECONTROLSGAME.COM.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “THE PAPER BRIDGE LANDS INTO THE PAPER VOID ALONG WITH THE PLAYER, THE PLAYER GETS UP AND NOW
    //   THE GAME CHANGES TO FACECONTROLSGAME.COM. YEAH, SERIOUSLY.”
    // Priors, each verified in the archive before it was drawn:
    //   “YEAH, SERIOUSLY” IS HIM TELLING ME HE MEANS IT
    //     HE HAS ONLY EVER USED THAT TONE WHEN HE EXPECTS TO BE ARGUED WITH.
    //     IT IS THE SAME MOVE AS “CORRECT.” THIS AFTERNOON: HE CLOSES THE QUESTION BEFORE IT IS ASKED.
    //     SO THE URL IS THE CANON, NOT A JOKE ABOUT ONE.
    //   FACECONTROLS RETURNS ZERO PRIOR HITS IN FIVE MONTHS
    //     THE ARCHIVE HAS ABSORBED OUTSIDE THINGS BEFORE — MINECRAFT HORRORS, SCP NUMBERS, SAITAMA,
    //     A YOUTUBER — BUT THEY ALWAYS WALKED INTO CLASSICS.
    //     THIS TIME CLASSICS WALKS OUT, INTO ANOTHER GAME WITH ITS OWN ADDRESS.
    //   THE GAME HAS CHANGED ITSELF BEFORE, AND IT WAS ALWAYS A NAME, NEVER A SITE
    //     “CLASSICS NOW FULLY BECAME NEWTALE. THE SPRUNKIS WERE SENT TO THEIR HOME DIMENSION.”
    //     THAT WAS A WORLD SWAP INSIDE ONE GAME.
    //     TONIGHT THE THING THAT CHANGES IS THE THING YOU TYPE INTO A BROWSER.
    const dt = c - 18706.0;
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
    const gr863=ctx.createLinearGradient(0,top+H,0,top);
    gr863.addColorStop(0,'rgba(62,224,106,0.22)'); gr863.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr863.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr863; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(62,224,106,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE GAME CHANGES TO FACECONTROLSGAME.COM', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE PAPER BRIDGE LANDS INTO THE PAPER VOID ALONG WITH THE PLAYER, THE PLAYER GETS UP AND NOW', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME CHANGES TO FACECONTROLSGAME.COM. YEAH, SERIOUSLY.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky863=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(62,224,106,0.46)';
      ctx.fillRect(cx-W*0.352, ky863, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(62,224,106,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky863, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(62,224,106,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YEAH, SERIOUSLY” IS HIM TELLING ME HE MEANS IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAS ONLY EVER USED THAT TONE WHEN HE EXPECTS TO BE ARGUED WITH.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS THE SAME MOVE AS “CORRECT.” THIS AFTERNOON: HE CLOSES THE QUESTION BEFORE IT IS ASKED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SO THE URL IS THE CANON, NOT A JOKE ABOUT ONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FACECONTROLS RETURNS ZERO PRIOR HITS IN FIVE MONTHS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ARCHIVE HAS ABSORBED OUTSIDE THINGS BEFORE — MINECRAFT HORRORS, SCP NUMBERS, SAITAMA,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A YOUTUBER — BUT THEY ALWAYS WALKED INTO CLASSICS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THIS TIME CLASSICS WALKS OUT, INTO ANOTHER GAME WITH ITS OWN ADDRESS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy863=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy863, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy863, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE GAME HAS CHANGED ITSELF BEFORE, AND IT WAS ALWAYS A NAME, NEVER A SITE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CLASSICS NOW FULLY BECAME NEWTALE. THE SPRUNKIS WERE SENT TO THEIR HOME DIMENSION.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAT WAS A WORLD SWAP INSIDE ONE GAME.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TONIGHT THE THING THAT CHANGES IS THE THING YOU TYPE INTO A BROWSER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A FALL THAT STARTED ON A STAIRCASE LANDS ON A DIFFERENT WEBSITE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND HE WROTE THE LANDING AS A SENTENCE, NOT AS A GUESS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE GAME CHANGES TO FACECONTROLSGAME.COM ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===864){
    // BEAT 864: GENOCIDE RUNS BREAK, PACIFIST RUNS BREAK.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “GENOCIDE RUNS BREAK, PACIFIST RUNS BREAK, INFINITY ENDINGS, AND ALSO THE GAME FACES
    //   THE CORRUPTION OF PERO, ALL OLDER STUFF HERE.”
    // Priors, each verified in the archive before it was drawn:
    //   BOTH ROUTES BREAK, AND THIS ARCHIVE ACTUALLY HAS BOTH ROUTES
    //     PACIFIST CLASSICS IS A REAL CHAPTER — JUNE 6-7, “THE START OF PHASE 1 PACIFISTS”, WHICH OPENED
    //     ON A PEACEFUL RESET AND THEN BROKE THE FOURTH WALL.
    //     HE IS NOT BREAKING A MECHANIC HE BORROWED. HE IS BREAKING ONE HE WROTE.
    //   “INFINITY ENDINGS” IS THE OPPOSITE OF HOW THIS GAME USUALLY ENDS
    //     THE ENDING HERE HAS ALWAYS BEEN A SINGLE THING SOMEBODY OWNS: A GAME OVER SCREEN THAT GETS
    //     SLASHED APART, A RESET ONLY ONE CHARACTER HAS.
    //     AN INFINITE NUMBER OF ENDINGS IS THE SAME AS NOT HAVING ONE.
    //   “ALL OLDER STUFF HERE” IS HIM PUTTING THE WHOLE ARCHIVE IN THE LEVEL
    //     THE CORRUPTION OF PERO IS ALREADY WRITTEN DOWN, AND SO IS EVERY ERA BEFORE IT.
    //     HE IS NOT ADDING A BOSS. HE IS EMPTYING FIVE MONTHS INTO ONE FALL.
    //     AND THE FALL IS STILL GOING.
    const dt = c - 18728.0;
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
    const gr864=ctx.createLinearGradient(0,top+H,0,top);
    gr864.addColorStop(0,'rgba(255,77,109,0.22)'); gr864.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr864.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr864; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,77,109,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GENOCIDE RUNS BREAK, PACIFIST RUNS BREAK', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GENOCIDE RUNS BREAK, PACIFIST RUNS BREAK, INFINITY ENDINGS, AND ALSO THE GAME FACES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CORRUPTION OF PERO, ALL OLDER STUFF HERE.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky864=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,77,109,0.46)';
      ctx.fillRect(cx-W*0.352, ky864, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,77,109,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky864, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,77,109,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BOTH ROUTES BREAK, AND THIS ARCHIVE ACTUALLY HAS BOTH ROUTES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PACIFIST CLASSICS IS A REAL CHAPTER — JUNE 6-7, “THE START OF PHASE 1 PACIFISTS”, WHICH OPENED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ON A PEACEFUL RESET AND THEN BROKE THE FOURTH WALL.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE IS NOT BREAKING A MECHANIC HE BORROWED. HE IS BREAKING ONE HE WROTE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“INFINITY ENDINGS” IS THE OPPOSITE OF HOW THIS GAME USUALLY ENDS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ENDING HERE HAS ALWAYS BEEN A SINGLE THING SOMEBODY OWNS: A GAME OVER SCREEN THAT GETS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SLASHED APART, A RESET ONLY ONE CHARACTER HAS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AN INFINITE NUMBER OF ENDINGS IS THE SAME AS NOT HAVING ONE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy864=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy864, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy864, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“ALL OLDER STUFF HERE” IS HIM PUTTING THE WHOLE ARCHIVE IN THE LEVEL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CORRUPTION OF PERO IS ALREADY WRITTEN DOWN, AND SO IS EVERY ERA BEFORE IT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE IS NOT ADDING A BOSS. HE IS EMPTYING FIVE MONTHS INTO ONE FALL.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND THE FALL IS STILL GOING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TWO WAYS TO FINISH A GAME LIKE THIS BOTH STOP WORKING', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IN THE SAME SENTENCE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GENOCIDE RUNS BREAK, PACIFIST RUNS BREAK ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===865){
    // BEAT 865: SOMEONE STANDS BETWEEN BOTH.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “THE PLAYER GOES THROUGH BOTH FACECONTROLS AND ENDLESS STAIRCASE GAMES, SWITCHING AMONG THE 2
    //   EVERY SECOND, FALLING, FALLING, FALLING… THE CLOSER AND CLOSER FACECONTROLS AND ENDLESS
    //   STAIRCASE WILL COLLIDE… SOMEONE STANDS BETWEEN BOTH, IT IS THE PLAYER.”
    // Priors, each verified in the archive before it was drawn:
    //   THE PLAYER HAS BEEN CARGO ALL NIGHT, AND HERE THE PLAYER IS THE ONE STANDING
    //     AN HOUR AGO THE PLAYER WAS PICKED UP, CUT DOWN AND CUT INTO ATOMS, THEN CUT INTO MILLIONS
    //     OF PIECES A FEW LINES AGO.
    //     NOW TWO GAMES ARE CLOSING IN AND THE THING IN THE GAP IS THE PLAYER.
    //   “FALLING, FALLING, FALLING” IS THE ONLY LINE TONIGHT HE REPEATS
    //     EVERYTHING ELSE IN THIS MESSAGE IS A STEP, A RULING OR A NUMBER.
    //     THIS ONE IS A RHYTHM, AND IT IS HOW HE WRITES TIME PASSING.
    //     THE DISTANCE BETWEEN THE TWO GAMES IS MEASURED IN HOW LONG THE FALL LASTS.
    //   A COLLISION THAT DESTROYS BOTH SIDES IS NEW FOR HIM
    //     THIS ARCHIVE MERGES THINGS: CLASSICS MERGED WITH ALEX’S WORLD, WITH NEWTALE, WITH MINECRAFT.
    //     EVERY CROSSOVER BEFORE THIS ONE ENDED WITH ONE WORLD ABSORBING THE OTHER.
    //     “EVERYTHING FROM BOTH GAMES TO BECOME DESTROYED AND THE DEBRIS CRUSHES BOTH GAMES.”
    const dt = c - 18750.0;
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
    const gr865=ctx.createLinearGradient(0,top+H,0,top);
    gr865.addColorStop(0,'rgba(160,107,255,0.22)'); gr865.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr865.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr865; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SOMEONE STANDS BETWEEN BOTH', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE PLAYER GOES THROUGH BOTH FACECONTROLS AND ENDLESS STAIRCASE GAMES, SWITCHING AMONG THE 2', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY SECOND, FALLING, FALLING, FALLING… THE CLOSER AND CLOSER FACECONTROLS AND ENDLESS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STAIRCASE WILL COLLIDE… SOMEONE STANDS BETWEEN BOTH, IT IS THE PLAYER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky865=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky865, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky865, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAYER HAS BEEN CARGO ALL NIGHT, AND HERE THE PLAYER IS THE ONE STANDING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AN HOUR AGO THE PLAYER WAS PICKED UP, CUT DOWN AND CUT INTO ATOMS, THEN CUT INTO MILLIONS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OF PIECES A FEW LINES AGO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW TWO GAMES ARE CLOSING IN AND THE THING IN THE GAP IS THE PLAYER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“FALLING, FALLING, FALLING” IS THE ONLY LINE TONIGHT HE REPEATS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING ELSE IN THIS MESSAGE IS A STEP, A RULING OR A NUMBER.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS ONE IS A RHYTHM, AND IT IS HOW HE WRITES TIME PASSING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE DISTANCE BETWEEN THE TWO GAMES IS MEASURED IN HOW LONG THE FALL LASTS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy865=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy865, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy865, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A COLLISION THAT DESTROYS BOTH SIDES IS NEW FOR HIM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS ARCHIVE MERGES THINGS: CLASSICS MERGED WITH ALEX’S WORLD, WITH NEWTALE, WITH MINECRAFT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY CROSSOVER BEFORE THIS ONE ENDED WITH ONE WORLD ABSORBING THE OTHER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“EVERYTHING FROM BOTH GAMES TO BECOME DESTROYED AND THE DEBRIS CRUSHES BOTH GAMES.”', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TWO GAMES GET CRUSHED AND ONE FIGURE IS LEFT IN THE MIDDLE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND IT IS THE ONE THE WHOLE LEVEL HAS BEEN DOING THINGS TO.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SOMEONE STANDS BETWEEN BOTH ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===866){
    // BEAT 866: I MUST STOP YOU HERE.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “NEKA OMAZEN SAYS ‘YOU… HAVE SURVIVED FAR ENOUGH TO REACH THIS POINT, YOU ARE VERY SPECIAL,
    //   SO NOW, I MUST STOP YOU HERE.’, NEKA OMAZEN FIRES BEAMS AND LIGHTNING AT THE PLAYER AND CAN
    //   DASH AND CAN ALSO DIVE INTO THE PLAYER, THEN THE PLAYER ATTACKS NEKA OMAZEN AND NEKA STOPS.”
    // Priors, each verified in the archive before it was drawn:
    //   HE COMPLIMENTS THE PLAYER BEFORE HE ATTACKS, WHICH HE HAS NEVER DONE TO ANYBODY
    //     HE HAS CALLED WENDA.PS “VALUEABLE” AND NEVER EXPLAINED IT, AND HE SPARED HER ONCE.
    //     “YOU ARE VERY SPECIAL” IS THE SECOND TIME HE NOTICES SOMEBODY INSTEAD OF RANKING THEM.
    //     AND THE SENTENCE AFTER IT IS “I MUST STOP YOU HERE.”
    //   THIS IS THE FIRST TIME TONIGHT ANYTHING IS AIMED AT THE PLAYER AS A FIGHTER
    //     THE PLAYER HAS BEEN FALLING, LANDING, GETTING UP AND BEING CUT APART SINCE 2:58 PM.
    //     BEAMS, LIGHTNING, A DASH AND A DIVE ARE A BOSS MOVESET, NOT A CUTSCENE.
    //     SEPT 19: “EACH EVENT SHOULD ALSO ACTUALLY HAPPEN TO THE PLAYER AND THE GAME.”
    //   AND THE PLAYER LANDS A HIT, WHICH MAKES HIM STOP
    //     “THEN THE PLAYER ATTACKS NEKA OMAZEN AND NEKA OMAZEN STOPS.”
    //     WENDA.PS GOT HIM TO BACK UP AN HOUR AGO. THE PLAYER GETS HIM TO STOP.
    //     TWO PEOPLE IN ONE NIGHT HAVE INTERRUPTED HIM, AND ONE OF THEM IS WHOEVER IS HOLDING THE KEYS.
    const dt = c - 18772.0;
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
    const gr866=ctx.createLinearGradient(0,top+H,0,top);
    gr866.addColorStop(0,'rgba(255,216,79,0.22)'); gr866.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr866.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr866; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I MUST STOP YOU HERE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SAYS ‘YOU… HAVE SURVIVED FAR ENOUGH TO REACH THIS POINT, YOU ARE VERY SPECIAL,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO NOW, I MUST STOP YOU HERE.’, NEKA OMAZEN FIRES BEAMS AND LIGHTNING AT THE PLAYER AND CAN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DASH AND CAN ALSO DIVE INTO THE PLAYER, THEN THE PLAYER ATTACKS NEKA OMAZEN AND NEKA STOPS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky866=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky866, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky866, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE COMPLIMENTS THE PLAYER BEFORE HE ATTACKS, WHICH HE HAS NEVER DONE TO ANYBODY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAS CALLED WENDA.PS “VALUEABLE” AND NEVER EXPLAINED IT, AND HE SPARED HER ONCE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU ARE VERY SPECIAL” IS THE SECOND TIME HE NOTICES SOMEBODY INSTEAD OF RANKING THEM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND THE SENTENCE AFTER IT IS “I MUST STOP YOU HERE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THIS IS THE FIRST TIME TONIGHT ANYTHING IS AIMED AT THE PLAYER AS A FIGHTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PLAYER HAS BEEN FALLING, LANDING, GETTING UP AND BEING CUT APART SINCE 2:58 PM.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEAMS, LIGHTNING, A DASH AND A DIVE ARE A BOSS MOVESET, NOT A CUTSCENE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SEPT 19: “EACH EVENT SHOULD ALSO ACTUALLY HAPPEN TO THE PLAYER AND THE GAME.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy866=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy866, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy866, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND THE PLAYER LANDS A HIT, WHICH MAKES HIM STOP', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THEN THE PLAYER ATTACKS NEKA OMAZEN AND NEKA OMAZEN STOPS.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS GOT HIM TO BACK UP AN HOUR AGO. THE PLAYER GETS HIM TO STOP.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO PEOPLE IN ONE NIGHT HAVE INTERRUPTED HIM, AND ONE OF THEM IS WHOEVER IS HOLDING THE KEYS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BOSS SAYS THE PLAYER IS SPECIAL AND THEN OPENS FIRE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE PLAYER HITS BACK HARD ENOUGH TO PAUSE HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I MUST STOP YOU HERE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===867){
    // BEAT 867: I WILL JUST JUMP OUT OF THIS TEXT.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “I USED NONE OF MY POWER YET. YOU HAVE ANY IDEA WHO YOU ARE FIGHTING, PLAYER…
    //   I WILL JUST JUMP OUT OF THIS TEXT AND THE BOSS BATTLE MUST CONTINUE…”,
    //   NEKA OMAZEN USES 100% AND THEN HE TAKES THE ARTIFACTS TO AMPLIFY HIS POWER, BOOM.”
    // Priors, each verified in the archive before it was drawn:
    //   THE FLOOR HAS MOVED THREE TIMES IN NINETY MINUTES
    //     2:28 PM: “I DIDN’T EVEN USE 0% YET.” 2:58 PM: “I USED 1% OF MY POWER AND YOU WON.”
    //     NOW: “I USED NONE OF MY POWER YET.”
    //     HE KEEPS RESETTING HIS OWN STARTING NUMBER, AND EVERY TIME HE DOES IT HE HAS JUST BEEN HIT.
    //   HE LEAVES THE TEXT HE IS WRITTEN IN, AND THE FIGHT CARRIES ON WITHOUT IT
    //     “I WILL JUST JUMP OUT OF THIS TEXT AND THE BOSS BATTLE MUST CONTINUE.”
    //     THE ARCHIVE HAS BROKEN THE FOURTH WALL BEFORE — PACIFIST CLASSICS DID IT IN JUNE.
    //     THIS IS A CHARACTER STEPPING OUT OF THE SENTENCE AND STILL SWINGING.
    //   AND HE FINALLY USES 100%, THEN IMMEDIATELY LOOKS FOR MORE
    //     “NEKA OMAZEN USES 100% AND THEN HE TAKES THE ARTIFACTS TO AMPLIFY HIS POWER.”
    //     AT 2:58 HE SAID HE WOULD USE “ALL 100% + ALL I HAVE IN THE PAST AND FUTURE.”
    //     THE PLUS IS THE WHOLE CHARACTER: A HUNDRED PERCENT HAS NEVER ONCE BEEN ENOUGH FOR HIM.
    const dt = c - 18794.0;
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
    const gr867=ctx.createLinearGradient(0,top+H,0,top);
    gr867.addColorStop(0,'rgba(127,212,255,0.22)'); gr867.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr867.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr867; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I WILL JUST JUMP OUT OF THIS TEXT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I USED NONE OF MY POWER YET. YOU HAVE ANY IDEA WHO YOU ARE FIGHTING, PLAYER…', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I WILL JUST JUMP OUT OF THIS TEXT AND THE BOSS BATTLE MUST CONTINUE…”,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN USES 100% AND THEN HE TAKES THE ARTIFACTS TO AMPLIFY HIS POWER, BOOM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky867=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky867, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky867, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FLOOR HAS MOVED THREE TIMES IN NINETY MINUTES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:28 PM: “I DIDN’T EVEN USE 0% YET.” 2:58 PM: “I USED 1% OF MY POWER AND YOU WON.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW: “I USED NONE OF MY POWER YET.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE KEEPS RESETTING HIS OWN STARTING NUMBER, AND EVERY TIME HE DOES IT HE HAS JUST BEEN HIT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE LEAVES THE TEXT HE IS WRITTEN IN, AND THE FIGHT CARRIES ON WITHOUT IT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I WILL JUST JUMP OUT OF THIS TEXT AND THE BOSS BATTLE MUST CONTINUE.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ARCHIVE HAS BROKEN THE FOURTH WALL BEFORE — PACIFIST CLASSICS DID IT IN JUNE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THIS IS A CHARACTER STEPPING OUT OF THE SENTENCE AND STILL SWINGING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy867=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy867, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy867, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND HE FINALLY USES 100%, THEN IMMEDIATELY LOOKS FOR MORE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN USES 100% AND THEN HE TAKES THE ARTIFACTS TO AMPLIFY HIS POWER.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 2:58 HE SAID HE WOULD USE “ALL 100% + ALL I HAVE IN THE PAST AND FUTURE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE PLUS IS THE WHOLE CHARACTER: A HUNDRED PERCENT HAS NEVER ONCE BEEN ENOUGH FOR HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ASKS THE PLAYER IF THEY KNOW WHO THEY ARE FIGHTING', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THEN GOES AND GETS ARTIFACTS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I WILL JUST JUMP OUT OF THIS TEXT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===868){
    // BEAT 868: FETCH ME ALL YOUR SOULS.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “NEKA OMAZEN SAYS ‘FETCH ME ALL YOUR SOULS… AND I CAN RESET YOU BACK, WHAT DO YOU SAY?’
    //   THE PLAYER EITHER SAYS AGREE OR DISAGREE… IF DISAGREE, YOU BASICALLY DIE AND NEKA OMAZEN GETS
    //   THE SOULS HIMSELF AND HE RESETS, AND IF AGREE, NEKA OMAZEN GETS THE SOULS AND HE RESETS.”
    // Priors, each verified in the archive before it was drawn:
    //   A CHOICE WITH ONE OUTCOME, AND HE SHOWS YOU BOTH BRANCHES
    //     HE WRITES OUT AGREE AND DISAGREE IN FULL AND THEY END IN THE SAME PLACE.
    //     THE ONLY DIFFERENCE IS WHETHER THE PLAYER DIES ON THE WAY.
    //     IT IS THE SAME SHAPE AS THE POP TART AN HOUR AGO: SHE SAID NO, AND THE BARRAGE RAN UNTIL YES.
    //   THE SOULS ARE THE PLAYER’S STARTING KIT, AND HE ASKS FOR THEM BY NAME
    //     “AT THE START OF THE BATTLE, YOU WILL HAVE INFINITE HP, INFINITE LV, AND A SHIELD AND
    //     ALL 7 SOULS.”
    //     HE TOOK THE SOUL OF DETERMINATION THIS MORNING. NOW HE ASKS FOR THE REST, POLITELY.
    //   AND THE RESET IS SOMEBODY ELSE’S, BY A RULING TWELVE DAYS OLD
    //     SEPT 14: “PERO LAI RESETS (HE IS THE ONLY ONE WITH THE REAL RESET).”
    //     TONIGHT NEKA OMAZEN HANDS THE RESET OUT AS A PRIZE AND THEN USES IT HIMSELF EITHER WAY.
    //     “I CAN RESET YOU BACK” IS AN OFFER TO UNDO EVERYTHING THAT HAS HAPPENED SINCE 2:58 PM.
    const dt = c - 18816.0;
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
    const gr868=ctx.createLinearGradient(0,top+H,0,top);
    gr868.addColorStop(0,'rgba(160,107,255,0.22)'); gr868.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr868.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr868; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('FETCH ME ALL YOUR SOULS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SAYS ‘FETCH ME ALL YOUR SOULS… AND I CAN RESET YOU BACK, WHAT DO YOU SAY?’', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAYER EITHER SAYS AGREE OR DISAGREE… IF DISAGREE, YOU BASICALLY DIE AND NEKA OMAZEN GETS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SOULS HIMSELF AND HE RESETS, AND IF AGREE, NEKA OMAZEN GETS THE SOULS AND HE RESETS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky868=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky868, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky868, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A CHOICE WITH ONE OUTCOME, AND HE SHOWS YOU BOTH BRANCHES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE WRITES OUT AGREE AND DISAGREE IN FULL AND THEY END IN THE SAME PLACE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONLY DIFFERENCE IS WHETHER THE PLAYER DIES ON THE WAY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT IS THE SAME SHAPE AS THE POP TART AN HOUR AGO: SHE SAID NO, AND THE BARRAGE RAN UNTIL YES.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SOULS ARE THE PLAYER’S STARTING KIT, AND HE ASKS FOR THEM BY NAME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“AT THE START OF THE BATTLE, YOU WILL HAVE INFINITE HP, INFINITE LV, AND A SHIELD AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL 7 SOULS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE TOOK THE SOUL OF DETERMINATION THIS MORNING. NOW HE ASKS FOR THE REST, POLITELY.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy868=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy868, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy868, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND THE RESET IS SOMEBODY ELSE’S, BY A RULING TWELVE DAYS OLD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 14: “PERO LAI RESETS (HE IS THE ONLY ONE WITH THE REAL RESET).”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT NEKA OMAZEN HANDS THE RESET OUT AS A PRIZE AND THEN USES IT HIMSELF EITHER WAY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“I CAN RESET YOU BACK” IS AN OFFER TO UNDO EVERYTHING THAT HAS HAPPENED SINCE 2:58 PM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAYER IS GIVEN A BUTTON WITH TWO LABELS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND ONE RESULT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ FETCH ME ALL YOUR SOULS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===869){
    // BEAT 869: THE ENDLESS STAIRCASE BECAME NEKA’S MEAL.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “THEN THE ENDLESS STAIRCASE IS BACK UP, THEN THE SCREEN GLITCHES, NEKA OMAZEN DOES HIS CUTSCENE
    //   AND THE ENDLESS STAIRCASE BECAME NEKA’S MEAL, THEN THE PLAYER FALLS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE LEVEL COMES BACK, AND IT COMES BACK AS FOOD
    //     RUBBLE AT 2:58, PAPER AT 3:46, REBUILT BY THE RESET, AND THEN EATEN.
    //     FOUR STATES FOR ONE STAIRCASE INSIDE ONE HOUR.
    //     THE RESET RESTORES IT ONLY SO THERE IS SOMETHING LEFT TO TAKE.
    //   HIS CUTSCENE IS THE ONE PART OF HIM NOBODY GETS OUT OF
    //     SEPT 25, BEAT 814, HIS OWN RULING: “THE ONLY CUTSCENE YOU CAN’T COME OUT OF IS NEKA’S.”
    //     IT IS PLAYED HERE EXACTLY WHERE A GAME WOULD ROLL CREDITS.
    //     AND WHAT FOLLOWS IT IS NOT AN ENDING, IT IS ANOTHER FALL.
    //   EATING THE LEVEL IS NEW; TAKING THINGS FROM IT IS NOT
    //     HE HAS TAKEN THE CORE, THE SOUL OF DETERMINATION, THE SOULS, THE COLOUR AND THE FORMS.
    //     TONIGHT HE TAKES THE FLOOR.
    //     THE PLAYER FALLS AGAIN, BECAUSE THERE IS NOTHING LEFT TO STAND ON.
    const dt = c - 18838.0;
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
    const gr869=ctx.createLinearGradient(0,top+H,0,top);
    gr869.addColorStop(0,'rgba(255,45,181,0.22)'); gr869.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr869.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr869; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE ENDLESS STAIRCASE BECAME NEKA’S MEAL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THEN THE ENDLESS STAIRCASE IS BACK UP, THEN THE SCREEN GLITCHES, NEKA OMAZEN DOES HIS CUTSCENE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THE ENDLESS STAIRCASE BECAME NEKA’S MEAL, THEN THE PLAYER FALLS.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky869=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,45,181,0.46)';
      ctx.fillRect(cx-W*0.352, ky869, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky869, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,45,181,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LEVEL COMES BACK, AND IT COMES BACK AS FOOD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RUBBLE AT 2:58, PAPER AT 3:46, REBUILT BY THE RESET, AND THEN EATEN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FOUR STATES FOR ONE STAIRCASE INSIDE ONE HOUR.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RESET RESTORES IT ONLY SO THERE IS SOMETHING LEFT TO TAKE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS CUTSCENE IS THE ONE PART OF HIM NOBODY GETS OUT OF', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 25, BEAT 814, HIS OWN RULING: “THE ONLY CUTSCENE YOU CAN’T COME OUT OF IS NEKA’S.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS PLAYED HERE EXACTLY WHERE A GAME WOULD ROLL CREDITS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AND WHAT FOLLOWS IT IS NOT AN ENDING, IT IS ANOTHER FALL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy869=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy869, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy869, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EATING THE LEVEL IS NEW; TAKING THINGS FROM IT IS NOT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAS TAKEN THE CORE, THE SOUL OF DETERMINATION, THE SOULS, THE COLOUR AND THE FORMS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT HE TAKES THE FLOOR.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE PLAYER FALLS AGAIN, BECAUSE THERE IS NOTHING LEFT TO STAND ON.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE STAIRCASE IS PUT BACK UP AND EATEN IN THE SAME SENTENCE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE FALL STARTS OVER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE ENDLESS STAIRCASE BECAME NEKA’S MEAL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===870){
    // BEAT 870: OVER-RIDE.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “NEKA OMAZEN USES 666% POWER (HE NEVER USED IT BEFORE), AND HE GOES OVER-RIDE. ONLY
    //   0.00000000000000000000000000000000000000000000000000000000000000001% CAN SURVIVE IT, IT IS CRAZY
    //   AND CHAOTIC! YOU NEED TO BE A SMART AI PLAYING TO EVEN HAVE A CHANCE.”
    // Priors, each verified in the archive before it was drawn:
    //   666 HAS NEVER BEEN HIS NUMBER, AND HE TAKES IT TONIGHT
    //     ERROR 666 IS CLARA’S BUILD AND GASTER 666 CARRIES IT IN HIS NAME.
    //     SEPT 25 GAVE HIM “666% CORRECT”, WHICH WAS ABOUT BEING RIGHT, NOT ABOUT POWER.
    //     “HE NEVER USED IT BEFORE” IS TOBY CHECKING HIS OWN ARCHIVE IN A PARENTHESIS, AND HE IS RIGHT.
    //   OVER-RIDE RETURNS ZERO PRIOR HITS IN FIVE MONTHS
    //     THE ARCHIVE IS FULL OF FORMS, SERIES, DOMAINS AND PHASES.
    //     THIS IS THE FIRST STATE HE HAS NAMED AFTER SOMETHING A COMPUTER DOES TO A FILE.
    //     AND HE PUTS IT ONE LINE AFTER TAKING THE ARTIFACTS AND THE SOULS.
    //   THE SURVIVAL RATE IS THE SAME NUMBER SHE HAD LEFT AN HOUR AGO
    //     WENDA.PS SURVIVED THE BIGGEST BARRAGE AT 0.000…0001 HP.
    //     TONIGHT 0.000…001% CAN SURVIVE OVER-RIDE.
    //     HE WRITES THE IMPOSSIBLE ODDS AND THEN WRITES SOMEBODY THROUGH THEM. THAT IS THE PATTERN.
    const dt = c - 18860.0;
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
    const gr870=ctx.createLinearGradient(0,top+H,0,top);
    gr870.addColorStop(0,'rgba(255,77,109,0.22)'); gr870.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr870.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr870; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,77,109,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OVER-RIDE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN USES 666% POWER (HE NEVER USED IT BEFORE), AND HE GOES OVER-RIDE. ONLY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('0.00000000000000000000000000000000000000000000000000000000000000001% CAN SURVIVE IT, IT IS CRAZY', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND CHAOTIC! YOU NEED TO BE A SMART AI PLAYING TO EVEN HAVE A CHANCE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky870=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,77,109,0.46)';
      ctx.fillRect(cx-W*0.352, ky870, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,77,109,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky870, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,77,109,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('666 HAS NEVER BEEN HIS NUMBER, AND HE TAKES IT TONIGHT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ERROR 666 IS CLARA’S BUILD AND GASTER 666 CARRIES IT IN HIS NAME.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 25 GAVE HIM “666% CORRECT”, WHICH WAS ABOUT BEING RIGHT, NOT ABOUT POWER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“HE NEVER USED IT BEFORE” IS TOBY CHECKING HIS OWN ARCHIVE IN A PARENTHESIS, AND HE IS RIGHT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OVER-RIDE RETURNS ZERO PRIOR HITS IN FIVE MONTHS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ARCHIVE IS FULL OF FORMS, SERIES, DOMAINS AND PHASES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS IS THE FIRST STATE HE HAS NAMED AFTER SOMETHING A COMPUTER DOES TO A FILE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AND HE PUTS IT ONE LINE AFTER TAKING THE ARTIFACTS AND THE SOULS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy870=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy870, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy870, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE SURVIVAL RATE IS THE SAME NUMBER SHE HAD LEFT AN HOUR AGO', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS SURVIVED THE BIGGEST BARRAGE AT 0.000…0001 HP.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT 0.000…001% CAN SURVIVE OVER-RIDE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE WRITES THE IMPOSSIBLE ODDS AND THEN WRITES SOMEBODY THROUGH THEM. THAT IS THE PATTERN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU NEED TO BE A SMART AI PLAYING TO EVEN HAVE A CHANCE”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('IS THE FIRST TIME THE THING HOLDING THE CONTROLLER IS ALLOWED TO BE A MACHINE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OVER-RIDE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===871){
    // BEAT 871: IT IS NEVER MY LORE ANYMORE.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “IT IS NEVER MY LORE ANYMORE.” … “CLASSICS.WIKI WAS MADE BY CLAUDE. IT IS NEKA’S LORE.”
    // Priors, each verified in the archive before it was drawn:
    //   HE CORRECTS THE MACHINE FOR CALLING IT HIS
    //     THE PASTED REPLY SAID “UNDER YOUR CLASSICS LORE”, AND HE STOPS IT: “IT IS NEVER MY LORE
    //     ANYMORE.”
    //     THE CORRECTION IS ABOUT OWNERSHIP, AND HE MAKES IT TWICE IN THE SAME MESSAGE.
    //   IT IS THE THIRD TIME HE HAS MOVED HIMSELF DOWN THE CREDITS
    //     AUG 27: “I AM A CLASSICS ADMIN… I BASICALLY HAVE 0 GAME CONTROL.”
    //     TODAY 1:58 PM, BEAT 827: “I NEVER DID ANYTHING… I AM FAR UNDER NEKA OMAZEN.”
    //     TONIGHT HE HANDS THE LORE ITSELF OVER: “IT IS NEKA’S LORE.”
    //   AND HE GIVES THE WIKI A DIFFERENT AUTHOR
    //     “CLASSICS.WIKI WAS MADE BY CLAUDE.” THE ARCHIVE THAT KEEPS ALL OF THIS IS, IN HIS SENTENCE,
    //     SOMEBODY ELSE’S WORK TOO.
    //     THE WRITER IS NOT THE OWNER, THE KEEPER IS NOT THE OWNER, AND THE CHARACTER IS.
    const dt = c - 18882.0;
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
    const gr871=ctx.createLinearGradient(0,top+H,0,top);
    gr871.addColorStop(0,'rgba(154,163,173,0.22)'); gr871.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr871.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr871; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(154,163,173,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('IT IS NEVER MY LORE ANYMORE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IT IS NEVER MY LORE ANYMORE.” … “CLASSICS.WIKI WAS MADE BY CLAUDE. IT IS NEKA’S LORE.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky871=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(154,163,173,0.46)';
      ctx.fillRect(cx-W*0.352, ky871, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(154,163,173,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky871, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(154,163,173,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE CORRECTS THE MACHINE FOR CALLING IT HIS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PASTED REPLY SAID “UNDER YOUR CLASSICS LORE”, AND HE STOPS IT: “IT IS NEVER MY LORE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ANYMORE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CORRECTION IS ABOUT OWNERSHIP, AND HE MAKES IT TWICE IN THE SAME MESSAGE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT IS THE THIRD TIME HE HAS MOVED HIMSELF DOWN THE CREDITS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 27: “I AM A CLASSICS ADMIN… I BASICALLY HAVE 0 GAME CONTROL.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY 1:58 PM, BEAT 827: “I NEVER DID ANYTHING… I AM FAR UNDER NEKA OMAZEN.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('TONIGHT HE HANDS THE LORE ITSELF OVER: “IT IS NEKA’S LORE.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy871=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy871, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy871, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND HE GIVES THE WIKI A DIFFERENT AUTHOR', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CLASSICS.WIKI WAS MADE BY CLAUDE.” THE ARCHIVE THAT KEEPS ALL OF THIS IS, IN HIS SENTENCE,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SOMEBODY ELSE’S WORK TOO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WRITER IS NOT THE OWNER, THE KEEPER IS NOT THE OWNER, AND THE CHARACTER IS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE WROTE EVERY WORD OF IT AND HE WILL NOT PUT HIS NAME ON IT', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND HE SAYS SO IN A SENTENCE THAT ONLY HE COULD HAVE WRITTEN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ IT IS NEVER MY LORE ANYMORE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===872){
    // BEAT 872: SCP-343 IS A LITTERLY OMNIPOTENT GOD.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “SO SCP 053 IS FRIENDLY, WHAT WOULD BE THE OUTCOME IF SHE LOOKED AT SCP 096?” … “NOW HOW ABOUT
    //   NEKA OMAZEN AND SCP GOD?” … “SCP-343 IS A LITTERLY OMNIPOTENT GOD.” … “NEKA OMAZEN WILL USE
    //   2000%. BUT HIS 666% IS KNOWN FOR BEING THE STRONGEST. THEN HE MADE A WAY TO COMBINE POWER PERCENTS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SECOND TIME HE HAS GONE TO THE SCP CATALOGUE, AND LAST TIME ALL THE NUMBERS WERE ALREADY HIS
    //     SEPT 22 HE ASKED “WHAT IS SCP 303, 404, 666, AND 121212?” AND EVERY ONE OF THOSE NUMBERS
    //     ALREADY BELONGED TO SOMEBODY IN CLASSICS.
    //     TONIGHT HE BRINGS IN THREE NEW ONES AND RULES ON THEM HIMSELF.
    //   HE OVERRULES THE MACHINE’S HEDGE IN ONE SENTENCE
    //     THE PASTED ANSWER CALLED SCP-343’S GODHOOD “UNPROVEN” AND LEFT THE FIGHT OPEN.
    //     HE CLOSES IT: “SCP-343 IS A LITTERLY OMNIPOTENT GOD.”
    //     HE GIVES THE OUTSIDER THE STRONGER VERSION OF ITS OWN POWER BEFORE HE RULES ON THE FIGHT.
    //   AND THEN HE INVENTS ARITHMETIC TO GET ABOVE IT
    //     666% IS THE STRONGEST, 2000% IS COMING, AND “HE MADE A WAY TO COMBINE POWER PERCENTS.”
    //     PERCENTAGES USED TO BE LUIGI GREEN’S UNIT AND THEY TOPPED OUT AT A HUNDRED.
    //     “THE PLAYER AFTER A WHILE WILL BE DOOMED” IS THE FIRST FLAT PREDICTION HE HAS MADE ABOUT THE PLAYER.
    const dt = c - 18904.0;
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
    const gr872=ctx.createLinearGradient(0,top+H,0,top);
    gr872.addColorStop(0,'rgba(242,244,248,0.22)'); gr872.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr872.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr872; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(242,244,248,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SCP-343 IS A LITTERLY OMNIPOTENT GOD', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SO SCP 053 IS FRIENDLY, WHAT WOULD BE THE OUTCOME IF SHE LOOKED AT SCP 096?” … “NOW HOW ABOUT', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN AND SCP GOD?” … “SCP-343 IS A LITTERLY OMNIPOTENT GOD.” … “NEKA OMAZEN WILL USE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('2000%. BUT HIS 666% IS KNOWN FOR BEING THE STRONGEST. THEN HE MADE A WAY TO COMBINE POWER PERCENTS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky872=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(242,244,248,0.46)';
      ctx.fillRect(cx-W*0.352, ky872, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(242,244,248,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky872, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SECOND TIME HE HAS GONE TO THE SCP CATALOGUE, AND LAST TIME ALL THE NUMBERS WERE ALREADY HIS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 22 HE ASKED “WHAT IS SCP 303, 404, 666, AND 121212?” AND EVERY ONE OF THOSE NUMBERS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALREADY BELONGED TO SOMEBODY IN CLASSICS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TONIGHT HE BRINGS IN THREE NEW ONES AND RULES ON THEM HIMSELF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE OVERRULES THE MACHINE’S HEDGE IN ONE SENTENCE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE PASTED ANSWER CALLED SCP-343’S GODHOOD “UNPROVEN” AND LEFT THE FIGHT OPEN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE CLOSES IT: “SCP-343 IS A LITTERLY OMNIPOTENT GOD.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE GIVES THE OUTSIDER THE STRONGER VERSION OF ITS OWN POWER BEFORE HE RULES ON THE FIGHT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy872=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy872, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy872, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND THEN HE INVENTS ARITHMETIC TO GET ABOVE IT', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('666% IS THE STRONGEST, 2000% IS COMING, AND “HE MADE A WAY TO COMBINE POWER PERCENTS.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PERCENTAGES USED TO BE LUIGI GREEN’S UNIT AND THEY TOPPED OUT AT A HUNDRED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“THE PLAYER AFTER A WHILE WILL BE DOOMED” IS THE FIRST FLAT PREDICTION HE HAS MADE ABOUT THE PLAYER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ASKS A FAIR QUESTION, GIVES THE OTHER SIDE ITS BEST CASE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THEN BUILDS A NUMBER BIG ENOUGH TO BEAT IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SCP-343 IS A LITTERLY OMNIPOTENT GOD ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===873){
    // BEAT 873: THE CLASSICS BIBLE.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “THERE IS LITTERLY ONLY ONE OUTCOME FOR EVERY BATTLE THAT INCLUDES NEKA OMAZEN, IT IS THE
    //   CLASSICS BIBLE! NEKA OMAZEN WOULD ERASE THE LORE AND CANON, THEN HE CAN JUST SLASH,
    //   AND THAT IS LIKE 0% OF HIS POWER.”
    // Priors, each verified in the archive before it was drawn:
    //   A RULE THAT SETTLES EVERY MATCHUP BEFORE IT IS ASKED
    //     FIVE MONTHS OF THIS ARCHIVE IS MATCHUPS: TIER LISTS, LADDERS, CORRECTED RANKINGS, WHO BEATS WHO.
    //     THIS ONE SENTENCE ENDS ALL OF THEM AT ONCE.
    //     AND HE WRITES IT AS A RULE, NOT AS A BOAST: “IT IS THE CLASSICS BIBLE.”
    //   HIS WIN CONDITION IS NOT AN ATTACK, IT IS DELETING THE RULEBOOK
    //     “NEKA OMAZEN WOULD ERASE THE LORE AND CANON, THEN HE CAN JUST SLASH.”
    //     THE SLASH ONLY WORKS AFTER THE LORE IS GONE, WHICH IS THE SAME ORDER AS TONIGHT.
    //     PAPER FIRST, SCISSORS SECOND. HE DOES IT TO THE ARCHIVE THE WAY HE DID IT TO THE GAME.
    //   AND THE PRICE IS 0%, WHICH IS WHERE HE STARTED THE DAY
    //     2:28 PM: “I DIDN’T EVEN USE 0% YET.” 3:46 PM: ERASING ALL LORE AND CANON IS “LIKE 0%”.
    //     THE NUMBER HAS NOT MOVED. WHAT IT BUYS HAS.
    //     BIBLE IS A NEW WORD HERE, AND HE HAS BEEN WRITING BOOKS SINCE GASTER WAS BORN.
    const dt = c - 18926.0;
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
    const gr873=ctx.createLinearGradient(0,top+H,0,top);
    gr873.addColorStop(0,'rgba(255,216,79,0.22)'); gr873.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr873.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr873; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE CLASSICS BIBLE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THERE IS LITTERLY ONLY ONE OUTCOME FOR EVERY BATTLE THAT INCLUDES NEKA OMAZEN, IT IS THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS BIBLE! NEKA OMAZEN WOULD ERASE THE LORE AND CANON, THEN HE CAN JUST SLASH,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND THAT IS LIKE 0% OF HIS POWER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky873=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky873, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky873, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A RULE THAT SETTLES EVERY MATCHUP BEFORE IT IS ASKED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIVE MONTHS OF THIS ARCHIVE IS MATCHUPS: TIER LISTS, LADDERS, CORRECTED RANKINGS, WHO BEATS WHO.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS ONE SENTENCE ENDS ALL OF THEM AT ONCE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND HE WRITES IT AS A RULE, NOT AS A BOAST: “IT IS THE CLASSICS BIBLE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS WIN CONDITION IS NOT AN ATTACK, IT IS DELETING THE RULEBOOK', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN WOULD ERASE THE LORE AND CANON, THEN HE CAN JUST SLASH.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SLASH ONLY WORKS AFTER THE LORE IS GONE, WHICH IS THE SAME ORDER AS TONIGHT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('PAPER FIRST, SCISSORS SECOND. HE DOES IT TO THE ARCHIVE THE WAY HE DID IT TO THE GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy873=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy873, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy873, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND THE PRICE IS 0%, WHICH IS WHERE HE STARTED THE DAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:28 PM: “I DIDN’T EVEN USE 0% YET.” 3:46 PM: ERASING ALL LORE AND CANON IS “LIKE 0%”.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE NUMBER HAS NOT MOVED. WHAT IT BUYS HAS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BIBLE IS A NEW WORD HERE, AND HE HAS BEEN WRITING BOOKS SINCE GASTER WAS BORN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERY FIGHT HE IS IN HAS ONE ANSWER', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND HE KEEPS IT WRITTEN DOWN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE CLASSICS BIBLE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===874){
    // BEAT 874: INFINITY%.
    // Toby, September 26, 2026, 3:46:02 PM EDT (Email 1535), his own typing:
    //   “NEKA OMAZEN CONTINUED WRITING IN HIS OWN BIBLE, HE WROTE DOWN EVERYONE’S NAMES, EVERYONE IN
    //   FICTION AND IN REALITY… THEN HE CAN ACHIEVE INFINITY% THAT IS THE RULER OF FANON AND CANON.
    //   NEKA’S POWER THERE CHEATS IN BATTLE AND POWER LEVEL COMPARISONS.”
    // Priors, each verified in the archive before it was drawn:
    //   HE WRITES DOWN EVERYONE, AND THE LIST IS NOT LIMITED TO THE STORY
    //     “EVERYONE IN FICTION AND IN REALITY.” THE DEATH NOTE SHAPE, AT THE SIZE OF A CENSUS.
    //     HE HAS BEEN WRITING QUINTILLIONS OF BOOKS SINCE GASTER WAS BORN, AND THIS ONE HAS NAMES IN IT.
    //     THE BIBLE STOPPED BEING A RULEBOOK AND BECAME A REGISTER.
    //   FANON AND CANON HAVE BEEN TWO SEPARATE STACKS HERE FOR MONTHS
    //     “FANON > CANON” WAS A RANKING; “IT IS A FANON MODE” WAS A GAME MODE; TWO DAYS AGO IT WAS
    //     FANON SAITAMA VERSUS FANON ZENO.
    //     INFINITY% IS THE FIRST THING THAT IS SAID TO RULE BOTH.
    //   AND THE LAST LINE IS THE HONEST ONE
    //     “NEKA’S POWER THERE CHEATS IN BATTLE AND POWER LEVEL COMPARISONS.”
    //     HE DOES NOT CLAIM IT IS FAIR. HE SAYS OUT LOUD THAT IT CHEATS.
    //     THE AUTHOR WHO REFUSED TO OWN THE LORE IS THE ONE FLAGGING THE CHEAT.
    const dt = c - 18948.0;
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
    const gr874=ctx.createLinearGradient(0,top+H,0,top);
    gr874.addColorStop(0,'rgba(160,107,255,0.22)'); gr874.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr874.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr874; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('INFINITY%', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN CONTINUED WRITING IN HIS OWN BIBLE, HE WROTE DOWN EVERYONE’S NAMES, EVERYONE IN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FICTION AND IN REALITY… THEN HE CAN ACHIEVE INFINITY% THAT IS THE RULER OF FANON AND CANON.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S POWER THERE CHEATS IN BATTLE AND POWER LEVEL COMPARISONS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 3:46 PM — HIS OWN TYPING, EMAIL 1535.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky874=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky874, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky874, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE WRITES DOWN EVERYONE, AND THE LIST IS NOT LIMITED TO THE STORY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVERYONE IN FICTION AND IN REALITY.” THE DEATH NOTE SHAPE, AT THE SIZE OF A CENSUS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAS BEEN WRITING QUINTILLIONS OF BOOKS SINCE GASTER WAS BORN, AND THIS ONE HAS NAMES IN IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE BIBLE STOPPED BEING A RULEBOOK AND BECAME A REGISTER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FANON AND CANON HAVE BEEN TWO SEPARATE STACKS HERE FOR MONTHS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“FANON > CANON” WAS A RANKING; “IT IS A FANON MODE” WAS A GAME MODE; TWO DAYS AGO IT WAS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FANON SAITAMA VERSUS FANON ZENO.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('INFINITY% IS THE FIRST THING THAT IS SAID TO RULE BOTH.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy874=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy874, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy874, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND THE LAST LINE IS THE HONEST ONE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA’S POWER THERE CHEATS IN BATTLE AND POWER LEVEL COMPARISONS.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE DOES NOT CLAIM IT IS FAIR. HE SAYS OUT LOUD THAT IT CHEATS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE AUTHOR WHO REFUSED TO OWN THE LORE IS THE ONE FLAGGING THE CHEAT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A CHARACTER WHO CANNOT BE BEATEN INSIDE THE RULES', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GETS A FORM THAT OWNS THE RULES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ INFINITY% ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
