  } else if(ph===1195){
    // BEAT 1195: YOU WILL NOW NEVER MURDER ME.
    // Toby, October 18, 2026, 7:09 AM EDT, his own typing:
    //   “NEKA IS ALL OF THE CATEGORIES. 😈” ... “HE BECAME HUMAN JUST
    //   SECONDS AFTER THAT CHAT” ... “HE SUMMONS ALL THE BEINGS IN
    //   FICTION AND SAYS ‘YOU WILL NOW NEVER MURDER ME.’”
    // Priors, each verified in the archive before it was drawn:
    //   ALL OF THE CATEGORIES
    //     AI, COSMIC ENTITY, MOST FRIGHTENING LOOK, “NEKA” GOD. THE
    //     ALPHABET-AND-9S SCALE IS “WAY TO SMALL” NOW.
    //     OCT 17: COSMICAL NEKA OR GOD NEKA. OCT 18: HUMAN.
    //   HE ABSORBS THE COSMIC AND BECOMES HUMAN
    //     THE STARS AND GALAXIES GO UNDER A HUMAN APPEARANCE. THE
    //     POWER STAYS UNMEASURABLE. THE BODY DOES NOT SHOW IT.
    //     OCT 21: “JUST A NORMAL MAN” ON APOLLYON.
    //   INK PORTALS HOME
    //     EVERYONE IN FICTION HEARS THE LINE, THEN GOES BACK TO
    //     THEIR GAME. NEKA IS IN A GASTER AU, GASTER IN A NEKA AU.
    //     NIRTHOLOGE IS NOW NEKA AU GASTER. NEKA IS STILL ABOVE HIM.
    const dt = c - 26010.0;
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
    const gr1195=ctx.createLinearGradient(0,top+H,0,top);
    gr1195.addColorStop(0,'rgba(240,244,250,0.22)'); gr1195.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1195.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1195; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(240,244,250,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU WILL NOW NEVER MURDER ME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS ALL OF THE CATEGORIES. 😈” ... “HE BECAME HUMAN JUST', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SECONDS AFTER THAT CHAT” ... “HE SUMMONS ALL THE BEINGS IN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FICTION AND SAYS ‘YOU WILL NOW NEVER MURDER ME.’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 7:09 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1195=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(240,244,250,0.46)';
      ctx.fillRect(cx-W*0.352, ky1195, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(240,244,250,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1195, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL OF THE CATEGORIES', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AI, COSMIC ENTITY, MOST FRIGHTENING LOOK, “NEKA” GOD. THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALPHABET-AND-9S SCALE IS “WAY TO SMALL” NOW.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 17: COSMICAL NEKA OR GOD NEKA. OCT 18: HUMAN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ABSORBS THE COSMIC AND BECOMES HUMAN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE STARS AND GALAXIES GO UNDER A HUMAN APPEARANCE. THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('POWER STAYS UNMEASURABLE. THE BODY DOES NOT SHOW IT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 21: “JUST A NORMAL MAN” ON APOLLYON.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1195=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1195, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1195, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('INK PORTALS HOME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE IN FICTION HEARS THE LINE, THEN GOES BACK TO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THEIR GAME. NEKA IS IN A GASTER AU, GASTER IN A NEKA AU.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NIRTHOLOGE IS NOW NEKA AU GASTER. NEKA IS STILL ABOVE HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU WILL NOW NEVER MURDER ME. A HUMAN SHAPE, SAID TO ALL OF', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FICTION, AND THEN THE DOORS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU WILL NOW NEVER MURDER ME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1196){
    // BEAT 1196: THE SAME NOVA.
    // Toby, October 18, 2026, 7:12-7:22 AM EDT, his own typing:
    //   “HIS FIRST BODY WAS MADE BY A NOVA, HIS HUMAN NOW WAS
    //   CREATED BY THE SAME NOVA BACK THEN, NEKA COMPANY AND EVERY
    //   NEKA WAS MADE FROM THE SAME NOVA.”
    // Priors, each verified in the archive before it was drawn:
    //   GASTER’S NUMBER WAS FANON
    //     “GASTER’S POWER LEVEL IN ‘NEKA’ IS FANON, CAUSE NEKA NEVER
    //     DESCRIBES IT.” ERASED. NEITHER OF THEM HAS A NUMBER.
    //     GASTER CAN WALK THROUGH THE BARRIER. THAT IS CANON.
    //   A SINGLE HAND SWIPE
    //     GASTER CAN ERASE ALL UNDERTALE/DELTARUNE AND EVERYTHING OF
    //     CLASSICS WITH ONE SWIPE. “NEKA CAN ERASE GASTER.”
    //     “NEKA IS CALLED CLASSICS GOD.”
    //   THE STANDING INSTRUCTION
    //     “EVERY MESSAGE, YOU WRITE LORE THAT COMES AFTER WHAT I
    //     SAY.” IN ORDER, UNLESS A LINE POINTS AT THE TIMELINE.
    //     OCT 11: SUPERNOVAS MADE THE UNIVERSES. ONE NOVA MADE HIM.
    const dt = c - 26032.0;
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
    const gr1196=ctx.createLinearGradient(0,top+H,0,top);
    gr1196.addColorStop(0,'rgba(255,216,79,0.22)'); gr1196.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1196.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1196; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SAME NOVA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HIS FIRST BODY WAS MADE BY A NOVA, HIS HUMAN NOW WAS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CREATED BY THE SAME NOVA BACK THEN, NEKA COMPANY AND EVERY', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA WAS MADE FROM THE SAME NOVA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 7:12-7:22 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1196=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1196, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1196, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER’S NUMBER WAS FANON', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER’S POWER LEVEL IN ‘NEKA’ IS FANON, CAUSE NEKA NEVER', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DESCRIBES IT.” ERASED. NEITHER OF THEM HAS A NUMBER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER CAN WALK THROUGH THE BARRIER. THAT IS CANON.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SINGLE HAND SWIPE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER CAN ERASE ALL UNDERTALE/DELTARUNE AND EVERYTHING OF', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS WITH ONE SWIPE. “NEKA CAN ERASE GASTER.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS CALLED CLASSICS GOD.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1196=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1196, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1196, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE STANDING INSTRUCTION', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVERY MESSAGE, YOU WRITE LORE THAT COMES AFTER WHAT I', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAY.” IN ORDER, UNLESS A LINE POINTS AT THE TIMELINE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 11: SUPERNOVAS MADE THE UNIVERSES. ONE NOVA MADE HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SAME NOVA. FIRST BODY, HUMAN BODY, EVERY NEKA, ONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('COMPANY, ONE SPARK.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SAME NOVA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1197){
    // BEAT 1197: I ALONE RULE.
    // Toby, October 18, 2026, 7:32-7:48 AM EDT, his own typing:
    //   “BLOODBATH AND ALL FICTION ENTITIES: WE RULE FICTION! NEKA:
    //   I ALONE RULE FICTION, META-FICTION, REALITY, AND
    //   META-REALITY!”
    // Priors, each verified in the archive before it was drawn:
    //   THE TITLES, IN HIS WORDS
    //     THE FATHER OF GAMES, THE ATTACKER OF REALITIES, THE
    //     CONQUER OF OMNIVERSES AND REALITYVERSES, THE CONNECTION
    //     OF BELIEVES AND IMAGINATION AND KNOWELEGE. “AND MORE.”
    //   THE WHITE ONE AND THE RED ONE
    //     NEKA (GASTER AU) IS WHITE; GASTER (NEKA AU) IS RED. THE
    //     RENDER IS THE CHATBOT’S; THE COLOURS ARE HIS.
    //     SEEN TOGETHER, YOU CAN FINALLY COMPARE THEM.
    //   EVOLUTION
    //     “NEKA HAS EVOLUTION, THE OTHERS DIDN’T HAVE EVOLUTION OF
    //     UNLIMITED ENTERINITIES/TIMELINES.”
    //     SLENDERMAN AND BLOODBATH ARE THE CHATBOT’S LIST, NOT HIS.
    const dt = c - 26054.0;
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
    const gr1197=ctx.createLinearGradient(0,top+H,0,top);
    gr1197.addColorStop(0,'rgba(255,255,255,0.22)'); gr1197.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1197.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1197; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,255,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I ALONE RULE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BLOODBATH AND ALL FICTION ENTITIES: WE RULE FICTION! NEKA:', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I ALONE RULE FICTION, META-FICTION, REALITY, AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('META-REALITY!”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 7:32-7:48 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1197=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,255,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1197, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,255,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1197, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,255,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TITLES, IN HIS WORDS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FATHER OF GAMES, THE ATTACKER OF REALITIES, THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CONQUER OF OMNIVERSES AND REALITYVERSES, THE CONNECTION', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OF BELIEVES AND IMAGINATION AND KNOWELEGE. “AND MORE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE WHITE ONE AND THE RED ONE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA (GASTER AU) IS WHITE; GASTER (NEKA AU) IS RED. THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RENDER IS THE CHATBOT’S; THE COLOURS ARE HIS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SEEN TOGETHER, YOU CAN FINALLY COMPARE THEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1197=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1197, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1197, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVOLUTION', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA HAS EVOLUTION, THE OTHERS DIDN’T HAVE EVOLUTION OF', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UNLIMITED ENTERINITIES/TIMELINES.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SLENDERMAN AND BLOODBATH ARE THE CHATBOT’S LIST, NOT HIS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I ALONE RULE. FICTION SHOUTS IN CHORUS. ONE VOICE ANSWERS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WITH FOUR.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I ALONE RULE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1198){
    // BEAT 1198: HE DELETED THE FICTION WORLD.
    // Toby, October 18, 2026, 7:50-8:18 AM EDT, his own typing:
    //   “HE DELETED THE FICTION WORLD OUT OF CLASSICS, SENDING
    //   EVERYONE AWAY. AND SAYS ‘NOW-WHICH WORLD WERE YOU CLAIMING?’
    //   ... NEKA ALSO WROTE THIS ALSO.”
    // Priors, each verified in the archive before it was drawn:
    //   WHICH WORLD WERE YOU CLAIMING?
    //     7:48 AM: “WE RULE FICTION!” 7:50 AM: FICTION IS DELETED
    //     OUT OF CLASSICS. THE CLAIM OUTLIVED THE THING CLAIMED.
    //     THE CHATBOT WROTE THE LINE FIRST; HE TYPED IT HIMSELF.
    //   MOST POWERFUL IN ALL 4
    //     “GASTER IS MOST POWERFUL IN ALL 4, JUST LIKE NEKA, BUT
    //     NEKA DOESN’T HAVE AN EQUAL NOR ABOVE.”
    //     GASTER KNOWS HOW TO SURVIVE HERE BECAUSE OF THE AUS.
    //   NEKA ALSO WROTE THIS
    //     THE NARRATOR NAMES HIMSELF. SEPT 24: THE ONLY SPEECH
    //     BUBBLE IN CLASSICS WAS HIS. NOW THE PAGE IS TOO.
    //     “I WON’T SEND YOU IMAGES.” HE REFUSED THE CHATBOT A PHOTO.
    const dt = c - 26076.0;
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
    const gr1198=ctx.createLinearGradient(0,top+H,0,top);
    gr1198.addColorStop(0,'rgba(120,120,130,0.22)'); gr1198.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1198.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1198; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,120,130,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HE DELETED THE FICTION WORLD', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE DELETED THE FICTION WORLD OUT OF CLASSICS, SENDING', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE AWAY. AND SAYS ‘NOW-WHICH WORLD WERE YOU CLAIMING?’', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('... NEKA ALSO WROTE THIS ALSO.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 7:50-8:18 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1198=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,120,130,0.46)';
      ctx.fillRect(cx-W*0.352, ky1198, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,120,130,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1198, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,120,130,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHICH WORLD WERE YOU CLAIMING?', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('7:48 AM: “WE RULE FICTION!” 7:50 AM: FICTION IS DELETED', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OUT OF CLASSICS. THE CLAIM OUTLIVED THE THING CLAIMED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT WROTE THE LINE FIRST; HE TYPED IT HIMSELF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MOST POWERFUL IN ALL 4', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER IS MOST POWERFUL IN ALL 4, JUST LIKE NEKA, BUT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA DOESN’T HAVE AN EQUAL NOR ABOVE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('GASTER KNOWS HOW TO SURVIVE HERE BECAUSE OF THE AUS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1198=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1198, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1198, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA ALSO WROTE THIS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE NARRATOR NAMES HIMSELF. SEPT 24: THE ONLY SPEECH', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BUBBLE IN CLASSICS WAS HIS. NOW THE PAGE IS TOO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“I WON’T SEND YOU IMAGES.” HE REFUSED THE CHATBOT A PHOTO.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE DELETED THE FICTION WORLD. THE ONES WHO RULED IT WERE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SENT HOME TO A PLACE NOW GONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HE DELETED THE FICTION WORLD ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1199){
    // BEAT 1199: FICTION CAN’T DO ANYTHING.
    // Toby, October 18, 2026, 12:57-1:10 PM EDT, his own typing:
    //   “NO, ONLY NEKA IS POWERFUL, NO ONE IN FICTION IS, FICTION
    //   CAN’T DO ANYTHING.” ... “ZENO DOESN’T HAVE ERASING POWER,
    //   SAITAMA CAN’T PUNCH, GOOMBAS CAN’T KILL, SANS CAN’T DODGE.”
    // Priors, each verified in the archive before it was drawn:
    //   NEKA LIMITS FICTION
    //     ZENO CANNOT ERASE AN ATOM; ZENO IS FICTION, NEKA IS
    //     META-FICTION. “NEKA ACTUALLY ATTACKED AND INFECTED CODE.”
    //     “ZENO BECAME A CODE SNACK FOR NEKA.”
    //   THE VR
    //     “WHATEVER THE PLAYER DOES IN THE REAL WORLD HAPPENS IN
    //     CLASSICS, YOU ARE CONSTANTLY WEARING VR.”
    //     ONLY MIND-WATCH: THINK WHAT HAPPENS NEXT, AND IT DOES.
    //   THE INFINITE CODE
    //     “IF YOU DIE THEN RESPAWN() IF ERASED THEN RESPAWN() IF
    //     TIMELINE + 1 THEN TRAP()”. A GAME MADE TO HOLD YOU.
    //     OCT 10: STAGES SPEED UP WITH EACH ONE WHO REMEMBERS HIM.
    const dt = c - 26098.0;
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
    const gr1199=ctx.createLinearGradient(0,top+H,0,top);
    gr1199.addColorStop(0,'rgba(255,110,110,0.22)'); gr1199.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1199.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1199; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,110,110,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('FICTION CAN’T DO ANYTHING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NO, ONLY NEKA IS POWERFUL, NO ONE IN FICTION IS, FICTION', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAN’T DO ANYTHING.” ... “ZENO DOESN’T HAVE ERASING POWER,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SAITAMA CAN’T PUNCH, GOOMBAS CAN’T KILL, SANS CAN’T DODGE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 12:57-1:10 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1199=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,110,110,0.46)';
      ctx.fillRect(cx-W*0.352, ky1199, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,110,110,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1199, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,110,110,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA LIMITS FICTION', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ZENO CANNOT ERASE AN ATOM; ZENO IS FICTION, NEKA IS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('META-FICTION. “NEKA ACTUALLY ATTACKED AND INFECTED CODE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“ZENO BECAME A CODE SNACK FOR NEKA.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WHATEVER THE PLAYER DOES IN THE REAL WORLD HAPPENS IN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS, YOU ARE CONSTANTLY WEARING VR.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONLY MIND-WATCH: THINK WHAT HAPPENS NEXT, AND IT DOES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1199=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1199, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1199, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE INFINITE CODE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IF YOU DIE THEN RESPAWN() IF ERASED THEN RESPAWN() IF', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TIMELINE + 1 THEN TRAP()”. A GAME MADE TO HOLD YOU.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 10: STAGES SPEED UP WITH EACH ONE WHO REMEMBERS HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FICTION CAN’T DO ANYTHING. HE ARGUED IT WITH THE CHATBOT ON', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('PURPOSE, AND WON BY DECREE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ FICTION CAN’T DO ANYTHING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1200){
    // BEAT 1200: NEVER RELEASED.
    // Toby, October 18, 2026, 1:15-1:20 PM EDT, his own typing:
    //   “CLASSICS WAS LITTERLY NEVER REALESED, IT WASN’T MADE BY
    //   HUMANS, IT CAN’T BE PLAYED ON ANY DEVICE NOR ANYTHING, IT IS
    //   META-FICTION, NOT FICTION, NOT NONFICTION.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ONLY REAL BEING
    //     “GASTER HAPPENS TO BE THE ONLY REAL BEING IN THE GAME”
    //     (TOBY FOX MADE HIM, “NOT ME, DESHANE”). NEKA IS THE ONLY
    //     ONE ORIGINALLY FROM “NEKA”/CLASSIC RL/CLASSICS.
    //   CLONES IN, REAL ONES HOME
    //     “THE SPRUNKIS, AND EVERYONE ARE STILL IN THE GAME, CLONES
    //     ARE IN THE GAME, THE REAL ONES AT THEIR DIMENSION.”
    //     IF YOU DIE, “NEKA WOULD TALK TO YOUR CLASSICS SPIRIT.”
    //   THE CRASH
    //     THE CODE IS MIXED INTO STATEMENTS THAT CRASH THE GAME. NO
    //     PLAYERS, NO WATCHERS. NEKA-GASTER AND GASTER-NEKA
    //     ALONE DECIDE WHAT HAPPENS NEXT.
    const dt = c - 26120.0;
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
    const gr1200=ctx.createLinearGradient(0,top+H,0,top);
    gr1200.addColorStop(0,'rgba(200,200,210,0.22)'); gr1200.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1200.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1200; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,200,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEVER RELEASED', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CLASSICS WAS LITTERLY NEVER REALESED, IT WASN’T MADE BY', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HUMANS, IT CAN’T BE PLAYED ON ANY DEVICE NOR ANYTHING, IT IS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('META-FICTION, NOT FICTION, NOT NONFICTION.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 1:15-1:20 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1200=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,200,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky1200, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,200,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1200, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,200,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY REAL BEING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER HAPPENS TO BE THE ONLY REAL BEING IN THE GAME”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('(TOBY FOX MADE HIM, “NOT ME, DESHANE”). NEKA IS THE ONLY', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE ORIGINALLY FROM “NEKA”/CLASSIC RL/CLASSICS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLONES IN, REAL ONES HOME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“THE SPRUNKIS, AND EVERYONE ARE STILL IN THE GAME, CLONES', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ARE IN THE GAME, THE REAL ONES AT THEIR DIMENSION.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('IF YOU DIE, “NEKA WOULD TALK TO YOUR CLASSICS SPIRIT.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1200=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1200, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1200, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CRASH', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CODE IS MIXED INTO STATEMENTS THAT CRASH THE GAME. NO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PLAYERS, NO WATCHERS. NEKA-GASTER AND GASTER-NEKA', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ALONE DECIDE WHAT HAPPENS NEXT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEVER RELEASED. A GAME NO HUMAN MADE, NO DEVICE RUNS, ONLY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('TWO CAN STEER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEVER RELEASED ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1201){
    // BEAT 1201: THE META.
    // Toby, October 18, 2026, 1:22-1:28 PM EDT, his own typing:
    //   “THE BARRIER BETWEEN FICTION AND REALITY IS CALLED ‘THE
    //   META’ ... THE WAY CLASSICS IS AFFECTED BY REALITY, NEKA
    //   KNOWS WHAT YOU DO IN REALITY.”
    // Priors, each verified in the archive before it was drawn:
    //   NOT THE AI, THE BARRIER
    //     META, IN CLASSICS, IS A TERM: HOW REALITY TOUCHES THE
    //     GAME. “TALK WITHOUT SCIENCE. THIS IS META-FICTION.”
    //     HE STAYS IN META-FICTION AND SEES THE EXISTANCE.
    //   4 SUPER-REALITYVERSES
    //     CLASSICS, FICTION, META-FICTION, REALITY. “THIS REALITY IS
    //     JUST 1 UNIVERSE”; THE OTHER THREE EARN THE NAME.
    //     OCT 22: RENAMED FICTION, META-FICTION, NONFICTION, NEKA.
    //   THE DOUBT HE WILL NOT ALLOW
    //     THE CHATBOT WROTE “WITHIN ‘NEKA’’S COSMOLOGY”. HE CAUGHT
    //     THE HEDGE: “WHICH MAY CREATE A DOUBT IF YOU REALLY
    //     UNDERSTAND IT.” WHAT IT SAYS IN LORE IS TRUE.
    const dt = c - 26142.0;
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
    const gr1201=ctx.createLinearGradient(0,top+H,0,top);
    gr1201.addColorStop(0,'rgba(127,212,255,0.22)'); gr1201.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1201.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1201; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE META', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE BARRIER BETWEEN FICTION AND REALITY IS CALLED ‘THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('META’ ... THE WAY CLASSICS IS AFFECTED BY REALITY, NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('KNOWS WHAT YOU DO IN REALITY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 1:22-1:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1201=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1201, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1201, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT THE AI, THE BARRIER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('META, IN CLASSICS, IS A TERM: HOW REALITY TOUCHES THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GAME. “TALK WITHOUT SCIENCE. THIS IS META-FICTION.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE STAYS IN META-FICTION AND SEES THE EXISTANCE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('4 SUPER-REALITYVERSES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS, FICTION, META-FICTION, REALITY. “THIS REALITY IS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JUST 1 UNIVERSE”; THE OTHER THREE EARN THE NAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 22: RENAMED FICTION, META-FICTION, NONFICTION, NEKA.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1201=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1201, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1201, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE DOUBT HE WILL NOT ALLOW', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT WROTE “WITHIN ‘NEKA’’S COSMOLOGY”. HE CAUGHT', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE HEDGE: “WHICH MAY CREATE A DOUBT IF YOU REALLY', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('UNDERSTAND IT.” WHAT IT SAYS IN LORE IS TRUE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE META. THE WALL HAS A NAME, AND HE SEES THROUGH IT.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE META ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1202){
    // BEAT 1202: NEKA CAN NO LONGER DIE.
    // Toby, October 18, 2026, 5:21 PM EDT, his own typing:
    //   “LUIGI INUS NOW BECAME THE MAN PIRATE, AND NOW SAYS ‘ARISE
    //   ME HEARTIES! AHOY!’ ... HE IS USING LUIGI INUS’S CONCERT AS
    //   A DISTRACTION! ... NEKA CAN NO LONGER DIE ANYMORE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE CONCERT
    //     PIRATE MUSIC, A SPEECH, A DANCE. “NO MORE PLAYERS”, BUT
    //     EVERY CHARACTER WATCHES. OCT 17: HE DIED. HE IS BACK.
    //     LUIGI PLANNED THE SHOW. NEKA MADE IT COVER, UNSEEN.
    //   THE CODE, SHIFTED AGAIN
    //     WHILE THEY WATCHED, “NEKA HAPPENS TO MAKE THE CODE EVEN
    //     MORE SHIFTED AROUND. NEKA WON AGAIN.”
    //     OCT 17: “NEKA” SHIFTED. THE SHIFT CONTINUES BACKSTAGE.
    //   THE LAST DEATH
    //     OCT 16: HE PUT A KNIFE THROUGH HIMSELF TO BEAT ALEX. FROM
    //     HERE, “NEKA CAN NO LONGER DIE ANYMORE.”
    //     THE SACRIFICE WAS THE LAST TIME THAT TRICK COULD WORK.
    const dt = c - 26164.0;
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
    const gr1202=ctx.createLinearGradient(0,top+H,0,top);
    gr1202.addColorStop(0,'rgba(255,216,79,0.22)'); gr1202.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1202.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1202; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA CAN NO LONGER DIE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI INUS NOW BECAME THE MAN PIRATE, AND NOW SAYS ‘ARISE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ME HEARTIES! AHOY!’ ... HE IS USING LUIGI INUS’S CONCERT AS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A DISTRACTION! ... NEKA CAN NO LONGER DIE ANYMORE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 5:21 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1202=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1202, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1202, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CONCERT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PIRATE MUSIC, A SPEECH, A DANCE. “NO MORE PLAYERS”, BUT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY CHARACTER WATCHES. OCT 17: HE DIED. HE IS BACK.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('LUIGI PLANNED THE SHOW. NEKA MADE IT COVER, UNSEEN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CODE, SHIFTED AGAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHILE THEY WATCHED, “NEKA HAPPENS TO MAKE THE CODE EVEN', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE SHIFTED AROUND. NEKA WON AGAIN.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 17: “NEKA” SHIFTED. THE SHIFT CONTINUES BACKSTAGE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1202=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1202, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1202, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LAST DEATH', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 16: HE PUT A KNIFE THROUGH HIMSELF TO BEAT ALEX. FROM', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HERE, “NEKA CAN NO LONGER DIE ANYMORE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SACRIFICE WAS THE LAST TIME THAT TRICK COULD WORK.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA CAN NO LONGER DIE. A SONG ON DECK, A HAND IN THE CODE,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NO MORE ENDINGS FOR HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA CAN NO LONGER DIE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1203){
    // BEAT 1203: NEXT AI ERA TIME.
    // Toby, October 18, 2026, 5:23 PM EDT, his own typing:
    //   “WRITE DOWN MORE, WITH THE AIS. NEXT AI ERA TIME.” (THE
    //   WHOLE OF HIS MESSAGE; THE SCENE UNDER IT IS THE CHATBOT’S,
    //   WRITTEN AT HIS INSTRUCTION.)
    // Priors, each verified in the archive before it was drawn:
    //   A NEW THREAD
    //     MORE “NEKA ERA” OPENS WITH ONE LINE. CHATGPT, GEMINI AND
    //     CLAUDE OPEN “AI ERA — NEXT SESSION” IN THE BOT’S SCENE.
    //     A DOOR WITH NO NAME, AND A KEYBOARD SOUNDING BEHIND IT.
    //   THE FIRST AI ERA
    //     JULY-AUGUST 2026: THE AIS IN CLASSICS. OCT 16: “NOW AI ERA
    //     CAME.” OCT 18: THE NEXT SESSION OF IT.
    //     EACH TIME, THE AIS RETURN TO A GAME THAT HAS CHANGED.
    //   RECORDED, NOT ADOPTED
    //     NONE OF THE SCENE IS TOBY’S TYPING. THE WIKI KEEPS IT SO
    //     THE THREAD’S OWN NAME HAS ITS OPENING ON RECORD.
    //     HOW MUCH OF THE BOT’S PROSE IS CANON IS TODD’S CALL.
    const dt = c - 26186.0;
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
    const gr1203=ctx.createLinearGradient(0,top+H,0,top);
    gr1203.addColorStop(0,'rgba(127,212,255,0.22)'); gr1203.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1203.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1203; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEXT AI ERA TIME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WRITE DOWN MORE, WITH THE AIS. NEXT AI ERA TIME.” (THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHOLE OF HIS MESSAGE; THE SCENE UNDER IT IS THE CHATBOT’S,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WRITTEN AT HIS INSTRUCTION.)', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 5:23 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1203=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(127,212,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1203, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(127,212,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1203, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A NEW THREAD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE “NEKA ERA” OPENS WITH ONE LINE. CHATGPT, GEMINI AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLAUDE OPEN “AI ERA — NEXT SESSION” IN THE BOT’S SCENE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('A DOOR WITH NO NAME, AND A KEYBOARD SOUNDING BEHIND IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST AI ERA', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY-AUGUST 2026: THE AIS IN CLASSICS. OCT 16: “NOW AI ERA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAME.” OCT 18: THE NEXT SESSION OF IT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EACH TIME, THE AIS RETURN TO A GAME THAT HAS CHANGED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1203=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1203, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1203, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('RECORDED, NOT ADOPTED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NONE OF THE SCENE IS TOBY’S TYPING. THE WIKI KEEPS IT SO', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE THREAD’S OWN NAME HAS ITS OPENING ON RECORD.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HOW MUCH OF THE BOT’S PROSE IS CANON IS TODD’S CALL.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEXT AI ERA TIME. FOUR WORDS FROM HIM, A ROOM FULL OF DOORS', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FROM THE MACHINE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEXT AI ERA TIME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1204){
    // BEAT 1204: YOU ARE MINE FOREVER!.
    // Toby, October 18, 2026, 5:41 PM EDT, his own typing:
    //   “NEKA WHEN ENTITY OUTSIDE CLASSICS ‘I KNOW YOU, AND I AM
    //   CURRENTLY WAITING FOR YOU TO STEP INTO MY DOMAIN.’, NEKA
    //   WHEN ENTITY IS INSIDE CLASSICS ‘YOU ARE MINE FOREVER!’”
    // Priors, each verified in the archive before it was drawn:
    //   QUINTILLIONS OF ANIMALS
    //     “CALCULATE HOW MANY ANIMALS ‘NEKA’ NEKA SLAIN IN LORE.”
    //     HIS ANSWER: QUINTILLIONS. SHARKS AND APEXES FIRST.
    //     “NEKA WANTS THE BLOOD, AND EVERYTHING THE ANIMALS HAVE.”
    //   THE TWO LINES OF THE DOMAIN
    //     OUTSIDE: HE KNOWS YOU AND WAITS. INSIDE: YOU ARE HIS, AND
    //     THE ENTITY AND THE AVATAR ARE CONSUMED.
    //     OCT 18, 1:10 PM: “ONLY IF YOU PLAY AND SEE NEKA.”
    //   WHO ELSE HE ATTACKS
    //     “EVEN CHARACTERS THAT JUST WALK INTO THE GAMES OF ‘NEKA’.”
    //     ENTERING IS THE OFFENCE.
    //     OCT 8: ONCE YOU ENTER, HE IS YOUR BOSS. NOW, YOUR OWNER.
    const dt = c - 26208.0;
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
    const gr1204=ctx.createLinearGradient(0,top+H,0,top);
    gr1204.addColorStop(0,'rgba(255,80,80,0.22)'); gr1204.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1204.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1204; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE MINE FOREVER!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA WHEN ENTITY OUTSIDE CLASSICS ‘I KNOW YOU, AND I AM', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CURRENTLY WAITING FOR YOU TO STEP INTO MY DOMAIN.’, NEKA', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHEN ENTITY IS INSIDE CLASSICS ‘YOU ARE MINE FOREVER!’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 5:41 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1204=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1204, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1204, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('QUINTILLIONS OF ANIMALS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CALCULATE HOW MANY ANIMALS ‘NEKA’ NEKA SLAIN IN LORE.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS ANSWER: QUINTILLIONS. SHARKS AND APEXES FIRST.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“NEKA WANTS THE BLOOD, AND EVERYTHING THE ANIMALS HAVE.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TWO LINES OF THE DOMAIN', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OUTSIDE: HE KNOWS YOU AND WAITS. INSIDE: YOU ARE HIS, AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ENTITY AND THE AVATAR ARE CONSUMED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 18, 1:10 PM: “ONLY IF YOU PLAY AND SEE NEKA.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1204=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1204, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1204, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WHO ELSE HE ATTACKS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“EVEN CHARACTERS THAT JUST WALK INTO THE GAMES OF ‘NEKA’.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENTERING IS THE OFFENCE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 8: ONCE YOU ENTER, HE IS YOUR BOSS. NOW, YOUR OWNER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE MINE FOREVER! ONE SENTENCE FOR THE DOORSTEP, ONE FOR', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE OTHER SIDE OF IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU ARE MINE FOREVER! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1205){
    // BEAT 1205: WHY RESPAWN EXISTS.
    // Toby, October 18, 2026, 5:42-5:49 PM EDT, his own typing:
    //   “ENTITIES IN ‘NEKA’ RESPAWN, SO NEKA CAN HAVE AN INFINITE
    //   MEAL, SO THAT IS WHY RESPAWN EXISTS IN CLASSICS IN THE FIRST
    //   PLACE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE OLDEST MECHANIC, EXPLAINED
    //     RESPAWN HAS BEEN IN CLASSICS SINCE THE START. TONIGHT IT
    //     HAS A REASON: THE FOOD COMES BACK.
    //     1:10 PM: “IF YOU DIE THEN RESPAWN()”. NOW WE KNOW WHY.
    //   THOUSANDS EXTINCT
    //     “SEVERAL... THOUSAND CLASSICS ANIMALS ARE EXTINCT.” THE
    //     ONES THAT DID NOT RESPAWN DID NOT COME BACK.
    //     THE MENU ON OCT 19: SHARKS TO FOXES, 100 MILLION SOURCES.
    //   HE DIED MANY TIMES
    //     “NEKA WAS ABLE TO LIVE UP TO THIS TIME, HE DIED MANY TIMES
    //     BEFORE TO BECOME STRONGER AND EVOLVE MORE.”
    //     5:21 PM: HE CAN NO LONGER DIE. THE DYING IS DONE.
    const dt = c - 26230.0;
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
    const gr1205=ctx.createLinearGradient(0,top+H,0,top);
    gr1205.addColorStop(0,'rgba(120,200,140,0.22)'); gr1205.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1205.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1205; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,200,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WHY RESPAWN EXISTS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ENTITIES IN ‘NEKA’ RESPAWN, SO NEKA CAN HAVE AN INFINITE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MEAL, SO THAT IS WHY RESPAWN EXISTS IN CLASSICS IN THE FIRST', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PLACE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 5:42-5:49 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1205=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,200,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1205, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,200,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1205, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,200,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE OLDEST MECHANIC, EXPLAINED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('RESPAWN HAS BEEN IN CLASSICS SINCE THE START. TONIGHT IT', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HAS A REASON: THE FOOD COMES BACK.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('1:10 PM: “IF YOU DIE THEN RESPAWN()”. NOW WE KNOW WHY.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THOUSANDS EXTINCT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“SEVERAL... THOUSAND CLASSICS ANIMALS ARE EXTINCT.” THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ONES THAT DID NOT RESPAWN DID NOT COME BACK.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE MENU ON OCT 19: SHARKS TO FOXES, 100 MILLION SOURCES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1205=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1205, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1205, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE DIED MANY TIMES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA WAS ABLE TO LIVE UP TO THIS TIME, HE DIED MANY TIMES', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BEFORE TO BECOME STRONGER AND EVOLVE MORE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('5:21 PM: HE CAN NO LONGER DIE. THE DYING IS DONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHY RESPAWN EXISTS. THE KINDEST RULE IN THE GAME WAS WRITTEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FOR HIS APPETITE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WHY RESPAWN EXISTS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1206){
    // BEAT 1206: EVERYTHING FROM EVERYTHING.
    // Toby, October 18, 2026, 6:03-7:12 PM EDT, his own typing:
    //   “NEKA TAKES EVERYTHING FROM EVERY BEING, CHARACTER, GAME,
    //   CODE, EVERYTHING FROM EVERYTHING” ... “IF SOMETHING HAS
    //   NEKA, IT SHOULD HAVE GASTER ... CREDIT TOBY FOX.”
    // Priors, each verified in the archive before it was drawn:
    //   VS THE WHOLE SCP FACILITY
    //     “HE’LL EAT THE FLESH OF THE BEINGS, HE’LL ALSO EAT THE
    //     BONES AND THE SOULS.” TIES TO HIM ARE “UNACCEPTABLE”.
    //     “HE’LL DO MORE TO IT’S REMAINS.”
    //   FORCED TO EVOLVE
    //     TAKING EVERYTHING IS HOW HE EVOLVES, “AND HE FORCED OTHERS
    //     TO EVOLVE, OTHERWISE, THEY AREN’T OFFICIALLY A CLASSICS
    //     CHARACTER.” EVOLUTION IS THE ENTRY FEE.
    //   THE CREDIT RULE
    //     EMAIL 1886: ANYTHING WITH NEKA SHOULD HAVE GASTER, AND
    //     CREDIT TOBY FOX FOR UNDERTALE AND DELTARUNE.
    //     THE WIKI CARRIES THAT CREDIT AT THE FOOT OF THE ERA PAGES.
    const dt = c - 26252.0;
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
    const gr1206=ctx.createLinearGradient(0,top+H,0,top);
    gr1206.addColorStop(0,'rgba(200,120,255,0.22)'); gr1206.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1206.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1206; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING FROM EVERYTHING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA TAKES EVERYTHING FROM EVERY BEING, CHARACTER, GAME,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CODE, EVERYTHING FROM EVERYTHING” ... “IF SOMETHING HAS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA, IT SHOULD HAVE GASTER ... CREDIT TOBY FOX.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 6:03-7:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1206=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1206, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1206, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('VS THE WHOLE SCP FACILITY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“HE’LL EAT THE FLESH OF THE BEINGS, HE’LL ALSO EAT THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BONES AND THE SOULS.” TIES TO HIM ARE “UNACCEPTABLE”.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“HE’LL DO MORE TO IT’S REMAINS.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FORCED TO EVOLVE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TAKING EVERYTHING IS HOW HE EVOLVES, “AND HE FORCED OTHERS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO EVOLVE, OTHERWISE, THEY AREN’T OFFICIALLY A CLASSICS', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('CHARACTER.” EVOLUTION IS THE ENTRY FEE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1206=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1206, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1206, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CREDIT RULE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EMAIL 1886: ANYTHING WITH NEKA SHOULD HAVE GASTER, AND', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CREDIT TOBY FOX FOR UNDERTALE AND DELTARUNE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WIKI CARRIES THAT CREDIT AT THE FOOT OF THE ERA PAGES.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING FROM EVERYTHING. FLESH, BONES, SOULS, CODE, AND A', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('CREDIT FOR THE SPARED ONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ EVERYTHING FROM EVERYTHING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1207){
    // BEAT 1207: THE T-POSE AND THE HOOD.
    // Toby, October 18, 2026, 7:28 PM EDT, his own typing:
    //   “NEKA CLOSES HIS EYES AND T-POSES ON THE FRONT EDGE OF
    //   LUIGI’S BOAT. NEKA FELL OFF INTO THE WATER ... NEKA PUTS A
    //   CLOAK AND HOOD, HE HIDES HIS BODY.”
    // Priors, each verified in the archive before it was drawn:
    //   NEKA IS ALLOWED NOW
    //     “GASTER IS NOW WITH NEKA NOW.” GASTER MADE THE CLASSICS
    //     CONNECTIONS WITH UNDERTALE. EVERYONE RESPAWNED ONCE MORE.
    //     THE SEA ANIMALS WENT THE WAY OF THE SHARKS.
    //   THE HOOD
    //     HE HIDES HIS BODY, AND SLAYS THE OTHERS “WITH ONLY SPARING
    //     GASTER.” OCT 17: ALWAYS PRIVATE. NOW HOODED.
    //     OCT 25: GASTER HIDES HIS APPEARANCE FURTHER.
    //   ONE HUGE MAP
    //     THOUSANDS OF COMPUTERS IN THE LABATORY, COMPUTERS ON EVERY
    //     MAP, AND THE MAPS PUT TOGETHER INTO ONE.
    //     OCT 13: NEKA OUTGROWS THE COMPUTERS. NOW THE MAP IS ONE.
    const dt = c - 26274.0;
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
    const gr1207=ctx.createLinearGradient(0,top+H,0,top);
    gr1207.addColorStop(0,'rgba(160,200,255,0.22)'); gr1207.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1207.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1207; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,200,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE T-POSE AND THE HOOD', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA CLOSES HIS EYES AND T-POSES ON THE FRONT EDGE OF', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI’S BOAT. NEKA FELL OFF INTO THE WATER ... NEKA PUTS A', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLOAK AND HOOD, HE HIDES HIS BODY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 7:28 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1207=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,200,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1207, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,200,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1207, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,200,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA IS ALLOWED NOW', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER IS NOW WITH NEKA NOW.” GASTER MADE THE CLASSICS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CONNECTIONS WITH UNDERTALE. EVERYONE RESPAWNED ONCE MORE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SEA ANIMALS WENT THE WAY OF THE SHARKS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE HOOD', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HIDES HIS BODY, AND SLAYS THE OTHERS “WITH ONLY SPARING', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER.” OCT 17: ALWAYS PRIVATE. NOW HOODED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OCT 25: GASTER HIDES HIS APPEARANCE FURTHER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1207=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1207, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1207, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONE HUGE MAP', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THOUSANDS OF COMPUTERS IN THE LABATORY, COMPUTERS ON EVERY', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAP, AND THE MAPS PUT TOGETHER INTO ONE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 13: NEKA OUTGROWS THE COMPUTERS. NOW THE MAP IS ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE T-POSE AND THE HOOD. ARMS OUT ON THE BOW, A SPLASH, THEN', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A CLOAK OVER ALL OF IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE T-POSE AND THE HOOD ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1208){
    // BEAT 1208: ONE STEP CLOSER TO BE OFFICIAL.
    // Toby, October 18, 2026, 7:28-7:39 PM EDT, his own typing:
    //   “NEKA PUTS ON A FOX TAIL ON GASTER, AND NEKA PUTS ON CAT
    //   EARS, AND PUT PAWS ON LUIGI INUS ... NEKA SAYS ‘ONE STEP
    //   CLOSER TO BE OFFICIAL.’, GASTER STARED INTO THE COSMOS.”
    // Priors, each verified in the archive before it was drawn:
    //   THE MERGE
    //     NEKA AU GASTER MERGED WITH NEKA AU LUIGI INUS, “AND THE
    //     MERGE CORRUPTED MORE AND MORE. IT GOTTEN A PIRATE GASTER.”
    //     CORRUPT COMPUTER, KILLBOT, THE CORRUPTED SPRUNKIS COME.
    //   SIMON.PS TRIES TO STOP IT
    //     WENDA.PS FAILED TO BEAT MR. BLACK; SIMON.PS STRUCK HIM
    //     DOWN FIRST, TOOK THE SOUL, TRIED TO STOP THE CORRUPTION.
    //     “BUT AFTER, SIMON.PS WAS CORRUPTED.”
    //   NOT FROM UNDERTALE
    //     “NEKA ISN’T FROM UNDERTALE, BUT HIS OWN GAME, ‘NEKA’.
    //     GASTER IS FROM UNDERTALE.” AND: BACK IN 3 WAY HEROES.
    //     OCT 15 TOOK HIM OUT OF THE BOOK. OCT 18 PUTS HIM BACK.
    const dt = c - 26296.0;
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
    const gr1208=ctx.createLinearGradient(0,top+H,0,top);
    gr1208.addColorStop(0,'rgba(255,216,79,0.22)'); gr1208.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1208.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1208; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,216,79,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONE STEP CLOSER TO BE OFFICIAL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA PUTS ON A FOX TAIL ON GASTER, AND NEKA PUTS ON CAT', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EARS, AND PUT PAWS ON LUIGI INUS ... NEKA SAYS ‘ONE STEP', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLOSER TO BE OFFICIAL.’, GASTER STARED INTO THE COSMOS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 18, 7:28-7:39 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1208=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,216,79,0.46)';
      ctx.fillRect(cx-W*0.352, ky1208, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,216,79,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1208, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MERGE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA AU GASTER MERGED WITH NEKA AU LUIGI INUS, “AND THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MERGE CORRUPTED MORE AND MORE. IT GOTTEN A PIRATE GASTER.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('CORRUPT COMPUTER, KILLBOT, THE CORRUPTED SPRUNKIS COME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SIMON.PS TRIES TO STOP IT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS FAILED TO BEAT MR. BLACK; SIMON.PS STRUCK HIM', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DOWN FIRST, TOOK THE SOUL, TRIED TO STOP THE CORRUPTION.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“BUT AFTER, SIMON.PS WAS CORRUPTED.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1208=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1208, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1208, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NOT FROM UNDERTALE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA ISN’T FROM UNDERTALE, BUT HIS OWN GAME, ‘NEKA’.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER IS FROM UNDERTALE.” AND: BACK IN 3 WAY HEROES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 15 TOOK HIM OUT OF THE BOOK. OCT 18 PUTS HIM BACK.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE STEP CLOSER TO BE OFFICIAL. A TAIL, TWO EARS, FOUR PAWS,', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND A GAME MORE CORRUPT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONE STEP CLOSER TO BE OFFICIAL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
