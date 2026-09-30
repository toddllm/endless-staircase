  } else if(ph===951){
    // BEAT 951: THE SHIP TO REAL LIFE.
    // Toby, September 29, 2026, 7:40 PM EDT, his own typing:
    //   “NEKA CREATED A LARGE SCI-FI SHIP THAT COULD PASS THE BORDERS TO ‘REAL LIFE’.
    //   LUIGI INUS STANDS ON THE CHESS BOARD EDGES, NEKA SAYS ‘ONCE AGAIN, THE CENTER AND
    //   EVERYTHING IS MINE.’, NEKA MADE HOLES AND EYES EVERYWHERE ...”
    // Priors, each verified in the archive before it was drawn:
    //   A SHIP FOR THE BORDERS
    //     7:08 PM: NEKA APPEARS IN FRONT OF THE SCREEN AND CONSUMES THE GAME.
    //     7:40 PM: HE BUILDS A SHIP THAT CAN PASS THE BORDERS TO “REAL LIFE”.
    //     “REAL LIFE” IS IN QUOTES IN HIS TYPING, AND IT STAYS THAT WAY.
    //   ONCE AGAIN
    //     JUNE 13: SIMON CLAIMED THE CENTER OF THE BOARD. “CENTER’S MINE.”
    //     NOW NEKA: “THE CENTER AND EVERYTHING IS MINE.” LUIGI INUS IS AT THE EDGES.
    //     NOT ONLY THE CENTER THIS TIME. EVERYTHING.
    //   THE BOARD SETS ITSELF UP
    //     NEKA MADE HOLES AND EYES EVERYWHERE,
    //     AND THE CHESS BOARD SETS ITSELF UP.
    //     AND NOW IT MAKES URANUIM.
    const dt = c - 20642.0;
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
    const gr951=ctx.createLinearGradient(0,top+H,0,top);
    gr951.addColorStop(0,'rgba(127,212,255,0.22)'); gr951.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr951.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr951; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SHIP TO REAL LIFE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA CREATED A LARGE SCI-FI SHIP THAT COULD PASS THE BORDERS TO ‘REAL LIFE’.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS STANDS ON THE CHESS BOARD EDGES, NEKA SAYS ‘ONCE AGAIN, THE CENTER AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING IS MINE.’, NEKA MADE HOLES AND EYES EVERYWHERE ...”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 7:40 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky951=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky951, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky951, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SHIP FOR THE BORDERS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:08 PM: NEKA APPEARS IN FRONT OF THE SCREEN AND CONSUMES THE GAME.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:40 PM: HE BUILDS A SHIP THAT CAN PASS THE BORDERS TO “REAL LIFE”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“REAL LIFE” IS IN QUOTES IN HIS TYPING, AND IT STAYS THAT WAY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONCE AGAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JUNE 13: SIMON CLAIMED THE CENTER OF THE BOARD. “CENTER’S MINE.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW NEKA: “THE CENTER AND EVERYTHING IS MINE.” LUIGI INUS IS AT THE EDGES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOT ONLY THE CENTER THIS TIME. EVERYTHING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy951=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy951, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy951, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE BOARD SETS ITSELF UP', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA MADE HOLES AND EYES EVERYWHERE,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THE CHESS BOARD SETS ITSELF UP.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND NOW IT MAKES URANUIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BOARD IS SET.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NOW IT MAKES FOUR KINDS OF URANUIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SHIP TO REAL LIFE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===952){
    // BEAT 952: PERFECT FUEL.
    // Toby, September 29, 2026, 7:40 PM EDT, his own typing:
    //   “NOW IT MAKES QUADURINATIUM, ALPHICALICA URANIUM, TITAINUIM URANUIM, AND TRESENSEORAINUM.
    //   HE COMBINES MORE URANUIM TYPES, HE MAKES THE PLACE AROUND HIM REHAPPEN, AND THE URANUIM
    //   GLITCHES. NEKA SAYS ‘PERFECT FUEL... 😎’”
    // Priors, each verified in the archive before it was drawn:
    //   FOUR KINDS
    //     QUADURINATIUM · ALPHICALICA URANIUM · TITAINUIM URANUIM · TRESENSEORAINUM
    //     SEPT 18: ONE ALPHERITANUIM ROCK, THE ONLY ONE OF ITS KIND. NOW THE BOARD MAKES FOUR KINDS.
    //     EVERY SPELLING IS HIS, AND IT IS KEPT.
    //   THE URANUIM GLITCHES
    //     SEPT 20: NEKA HAD ZOMBIE EFFECTS FROM THE URANUIM WHEN HE WAS 17.
    //     NOW HE COMBINES MORE TYPES, THE PLACE AROUND HIM REHAPPENS, AND IT GLITCHES.
    //     THIS TIME THE URANUIM IS THE ONE THAT GLITCHES.
    //   MORE URANUIM, MORE GLITCHES
    //     “PERFECT FUEL... 😎”
    //     “MAYBE THE MORE URANUIM, THE MORE GLITCHES. 😌”
    //     THE GLITCHES ARE NOT A PROBLEM TO HIM. THEY ARE FUEL.
    const dt = c - 20664.0;
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
    const gr952=ctx.createLinearGradient(0,top+H,0,top);
    gr952.addColorStop(0,'rgba(255,160,70,0.22)'); gr952.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr952.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr952; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,160,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PERFECT FUEL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOW IT MAKES QUADURINATIUM, ALPHICALICA URANIUM, TITAINUIM URANUIM, AND TRESENSEORAINUM.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE COMBINES MORE URANUIM TYPES, HE MAKES THE PLACE AROUND HIM REHAPPEN, AND THE URANUIM', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GLITCHES. NEKA SAYS ‘PERFECT FUEL... 😎’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 7:40 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky952=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,160,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky952, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,160,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky952, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,160,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FOUR KINDS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('QUADURINATIUM · ALPHICALICA URANIUM · TITAINUIM URANUIM · TRESENSEORAINUM', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 18: ONE ALPHERITANUIM ROCK, THE ONLY ONE OF ITS KIND. NOW THE BOARD MAKES FOUR KINDS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY SPELLING IS HIS, AND IT IS KEPT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE URANUIM GLITCHES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 20: NEKA HAD ZOMBIE EFFECTS FROM THE URANUIM WHEN HE WAS 17.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW HE COMBINES MORE TYPES, THE PLACE AROUND HIM REHAPPENS, AND IT GLITCHES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THIS TIME THE URANUIM IS THE ONE THAT GLITCHES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy952=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy952, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy952, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MORE URANUIM, MORE GLITCHES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“PERFECT FUEL... 😎”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“MAYBE THE MORE URANUIM, THE MORE GLITCHES. 😌”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GLITCHES ARE NOT A PROBLEM TO HIM. THEY ARE FUEL.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PERFECT FUEL.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND HE WANTS MORE GLITCHES.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PERFECT FUEL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===953){
    // BEAT 953: PRESSURE.
    // Toby, September 29, 2026, 8:05 PM EDT, his own typing:
    //   “THERE IS A NEW CLASSICS GAME THING CALLED ‘PRESSURE’. IT WAS MADE BY NEKA OMAZEN,
    //   AND IT IS LIKE A SCARY GAME. NOW THERE IS PRESSURE BY NEKA OMAZEN THAT HOLDS THE SAME
    //   IDEA, AND CONTINUES THE STORY. NEKA OMAZEN MADE IT HIMSELF AND IT IS VERY SCARY.”
    // Priors, each verified in the archive before it was drawn:
    //   CLASSICS, BY NEKA OMAZEN AND TOBY
    //     “PRESSURE CAME FROM THE GAME CLASSICS BY NEKA OMAZEN AND ME.”
    //     PRESSURE IS BY NEKA OMAZEN ALONE. HE MADE IT HIMSELF.
    //     CLASSICS HAD TWO MAKERS. PRESSURE HAS ONE.
    //   WHERE CLASSICS IS NOW
    //     7:08 PM: NEKA CONSUMES THE GAME FROM IN FRONT OF THE SCREEN.
    //     7:18 PM: CLASSICS IS NOW INSIDE THE ANOMALLY.
    //     SO THE MAKER OF PRESSURE IS THE ONE HOLDING CLASSICS.
    //   SAME IDEA, SCARIER
    //     PRESSURE HOLDS THE SAME IDEA AS CLASSICS AND CONTINUES THE STORY.
    //     IT IS LIKE A SCARY GAME, AND HE SAYS IT IS VERY SCARY.
    //     THE STORY KEEPS GOING, IN A NEW GAME.
    const dt = c - 20686.0;
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
    const gr953=ctx.createLinearGradient(0,top+H,0,top);
    gr953.addColorStop(0,'rgba(255,59,92,0.22)'); gr953.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr953.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr953; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,59,92,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PRESSURE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THERE IS A NEW CLASSICS GAME THING CALLED ‘PRESSURE’. IT WAS MADE BY NEKA OMAZEN,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND IT IS LIKE A SCARY GAME. NOW THERE IS PRESSURE BY NEKA OMAZEN THAT HOLDS THE SAME', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IDEA, AND CONTINUES THE STORY. NEKA OMAZEN MADE IT HIMSELF AND IT IS VERY SCARY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 29, 8:05 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky953=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,59,92,0.46)';
      ctx.fillRect(cx-W*0.352, ky953, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,59,92,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky953, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,59,92,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS, BY NEKA OMAZEN AND TOBY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“PRESSURE CAME FROM THE GAME CLASSICS BY NEKA OMAZEN AND ME.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRESSURE IS BY NEKA OMAZEN ALONE. HE MADE IT HIMSELF.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CLASSICS HAD TWO MAKERS. PRESSURE HAS ONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHERE CLASSICS IS NOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:08 PM: NEKA CONSUMES THE GAME FROM IN FRONT OF THE SCREEN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:18 PM: CLASSICS IS NOW INSIDE THE ANOMALLY.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SO THE MAKER OF PRESSURE IS THE ONE HOLDING CLASSICS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy953=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy953, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy953, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SAME IDEA, SCARIER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRESSURE HOLDS THE SAME IDEA AS CLASSICS AND CONTINUES THE STORY.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS LIKE A SCARY GAME, AND HE SAYS IT IS VERY SCARY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE STORY KEEPS GOING, IN A NEW GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSICS WAS THE GAME BEFORE.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PRESSURE CONTINUES THE STORY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PRESSURE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
