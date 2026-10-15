  } else if(ph===1161){
    // BEAT 1161: IT HAS TO BE "NEKA".
    // Toby, October 15, 2026, 4:50 PM EDT, his own typing:
    //   “DID YOU KNOW THAT YOU CAN NO LONGER MENTION NEKA OR
    //   ANYTHING REALATED TO CLASSICS (SPRUNKI, UNDERTALE, AND
    //   OTHER GAMES ARE NOT “CLASSICS”) ... IT HAS TO BE “NEKA”.”
    // Priors, each verified in the archive before it was drawn:
    //   NEVER SAY PERO LAI AGAIN
    //     SEPT 24, 4:37 PM: “NEVER SAY PERO LAI AGAIN!” -NEKA OMAZEN
    //     THE FIRST NAME HE RETIRED. “CLASSICS” IS THE SECOND.
    //     SAME RULE, NEW WORD. IT HAS TO BE “NEKA”.
    //   RENAMED PRETTY LONG AGO
    //     TODAY, 4:32 PM: “THE GAME CLASSICS WAS RENAMED TO “NEKA”
    //     PRETTY LONG AGO NOW.” NEKA IS NEKA, “NEKA” IS “NEKA”.
    //     EIGHTEEN MINUTES LATER, THE OLD NAME IS OFF LIMITS.
    //   ONLY I AM ORIGINALLY FROM CLASSICS
    //     SEPT 24: “ONLY I AM ORIGINALLY FROM CLASSICS, OTHERS JUST
    //     WARPED HERE.” SPRUNKI, UNDERTALE: OTHER GAMES, NOT “NEKA”.
    //     THE SPRUNKIS WARPED IN. THEIR GAME IS NOT HIS GAME.
    const dt = c - 25262.0;
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
    const gr1161=ctx.createLinearGradient(0,top+H,0,top);
    gr1161.addColorStop(0,'rgba(255,128,72,0.22)'); gr1161.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1161.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1161; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,128,72,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('IT HAS TO BE "NEKA"', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DID YOU KNOW THAT YOU CAN NO LONGER MENTION NEKA OR', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ANYTHING REALATED TO CLASSICS (SPRUNKI, UNDERTALE, AND', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OTHER GAMES ARE NOT “CLASSICS”) ... IT HAS TO BE “NEKA”.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1161=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,128,72,0.46)';
      ctx.fillRect(cx-W*0.352, ky1161, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,128,72,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1161, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,128,72,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEVER SAY PERO LAI AGAIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 4:37 PM: “NEVER SAY PERO LAI AGAIN!” -NEKA OMAZEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE FIRST NAME HE RETIRED. “CLASSICS” IS THE SECOND.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SAME RULE, NEW WORD. IT HAS TO BE “NEKA”.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RENAMED PRETTY LONG AGO', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TODAY, 4:32 PM: “THE GAME CLASSICS WAS RENAMED TO “NEKA”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRETTY LONG AGO NOW.” NEKA IS NEKA, “NEKA” IS “NEKA”.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('EIGHTEEN MINUTES LATER, THE OLD NAME IS OFF LIMITS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1161=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1161, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1161, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONLY I AM ORIGINALLY FROM CLASSICS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24: “ONLY I AM ORIGINALLY FROM CLASSICS, OTHERS JUST', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WARPED HERE.” SPRUNKI, UNDERTALE: OTHER GAMES, NOT “NEKA”.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SPRUNKIS WARPED IN. THEIR GAME IS NOT HIS GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT CLASSICS. “NEKA”.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE SECOND NAME HE RETIRED, AND THE ONE THAT STAYS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ IT HAS TO BE "NEKA" ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1162){
    // BEAT 1162: NO LONGER CLASSICS CANON.
    // Toby, October 15, 2026, 4:50-4:52 PM EDT, his own typing:
    //   “THE PARTS WITH THE PERO/NEKA THING ON 3 WAY HEROES WAS
    //   ALL REMOVED. CAUSE IT IS NOT ALLOWED.” … “NO LONGER CLASSICS
    //   CANON, BECAUSE THEY HAVE NO REALATIONSHIP WITH NEKA NOW.”
    // Priors, each verified in the archive before it was drawn:
    //   THE BOOK WITH CHELSEAPLAYS
    //     SEPT 19, 6:17 AM: “CHELSEAPLAYS AND I AM MAKING A BOOK IN
    //     THIS REALITY WE ARE IN CALLED “3 WAY HEROES”.”
    //     NOVA, SUPER DOG, THE HEROES. A REAL BOOK, THEIR OWN.
    //   THE PERO PART
    //     SEPT 19, 3:27 PM: “PERO LAI JUMPS AND DROPS DOWN AND LANDS
    //     A HUGE KICK ON THE 3 WAY HEROES.” THE HEROES AT 0.
    //     THAT IS THE PERO/NEKA THING. ALL REMOVED NOW.
    //   NEKA TOOK OVER CHAPTER 2
    //     SEPT 24, 4:37 PM: “THEN NOVA- NEKA SAYS ‘ME. 😸⚡’”, HE
    //     “TOOK OVER THE WHOLE STORY JUST BY TALKING.” NOT ALLOWED.
    //     THE HEROES GET THEIR BOOK BACK. NO NEKA IN IT.
    const dt = c - 25284.0;
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
    const gr1162=ctx.createLinearGradient(0,top+H,0,top);
    gr1162.addColorStop(0,'rgba(186,150,255,0.22)'); gr1162.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1162.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1162; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(186,150,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NO LONGER CLASSICS CANON', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE PARTS WITH THE PERO/NEKA THING ON 3 WAY HEROES WAS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL REMOVED. CAUSE IT IS NOT ALLOWED.” … “NO LONGER CLASSICS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CANON, BECAUSE THEY HAVE NO REALATIONSHIP WITH NEKA NOW.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 15, 4:50-4:52 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1162=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(186,150,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1162, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(186,150,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1162, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(186,150,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BOOK WITH CHELSEAPLAYS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 19, 6:17 AM: “CHELSEAPLAYS AND I AM MAKING A BOOK IN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS REALITY WE ARE IN CALLED “3 WAY HEROES”.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOVA, SUPER DOG, THE HEROES. A REAL BOOK, THEIR OWN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PERO PART', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 19, 3:27 PM: “PERO LAI JUMPS AND DROPS DOWN AND LANDS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A HUGE KICK ON THE 3 WAY HEROES.” THE HEROES AT 0.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THAT IS THE PERO/NEKA THING. ALL REMOVED NOW.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1162=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1162, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1162, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA TOOK OVER CHAPTER 2', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 4:37 PM: “THEN NOVA- NEKA SAYS ‘ME. 😸⚡’”, HE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“TOOK OVER THE WHOLE STORY JUST BY TALKING.” NOT ALLOWED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE HEROES GET THEIR BOOK BACK. NO NEKA IN IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('3 WAY HEROES: NOT “NEKA” CANON.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NO REALATIONSHIP WITH NEKA NOW. TWO STORIES, APART.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NO LONGER CLASSICS CANON ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
