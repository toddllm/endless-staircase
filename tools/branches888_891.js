  } else if(ph===888){
    // BEAT 888: HELLO..
    // Toby, September 26, 2026, 5:00 PM EDT, his own typing:
    //   “PARA SAYS ‘HELLO.’, THE VICTUM SEES NOTHING ON THE FACE AND THEN THE SHADOWS AND GHOSTS HAUNT HIM,
    //   THE VICTUM RUNS AWAY. PARA ALWAYS FOLLOWS YA.”
    //   “THE SCARIEST PART IS THAT THE ENTITY CAN’T DIE OR LOSE ANYTHING.”
    // Priors, each verified in the archive before it was drawn:
    //   “THE VICTUM SEES NOTHING ON THE FACE”
    //     AT 4:11 SKY.PS’S EYES BECAME BLANK, AND ALL HE SAID WAS “WANT TEA?”
    //     NOW THE WHOLE FACE IS BLANK, AND ALL SHE SAYS IS “HELLO.”
    //     THE CURSE STARTED WITH EMPTY EYES. NOW IT IS AN EMPTY FACE.
    //   “PARA ALWAYS FOLLOWS YA”
    //     THE SHADOWS AND GHOSTS DO THE HAUNTING. SHE JUST KEEPS WALKING BEHIND.
    //     HE WRITES “YA”, LIKE HE IS TALKING TO THE PLAYER, NOT ABOUT THE VICTUM.
    //     THE SENTENCE TURNS AROUND AND POINTS AT YOU.
    //   SHE CAN’T DIE OR LOSE ANYTHING
    //     “PARA ALWAYS STAYS THE SAME LOOK AND IS ALWAYS THE SAME.”
    //     SKY.PS DISAPPEARED PART BY PART AND RESPAWNED. NOTHING ABOUT HER CHANGES.
    //     HE CALLS THAT THE SCARIEST PART, NOT THE GHOSTS.
    const dt = c - 19256.0;
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
    const gr888=ctx.createLinearGradient(0,top+H,0,top);
    gr888.addColorStop(0,'rgba(170,220,255,0.22)'); gr888.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr888.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr888; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,220,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HELLO.', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PARA SAYS ‘HELLO.’, THE VICTUM SEES NOTHING ON THE FACE AND THEN THE SHADOWS AND GHOSTS HAUNT HIM,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VICTUM RUNS AWAY. PARA ALWAYS FOLLOWS YA.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE SCARIEST PART IS THAT THE ENTITY CAN’T DIE OR LOSE ANYTHING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 5:00 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky888=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,220,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky888, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,220,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky888, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,220,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE VICTUM SEES NOTHING ON THE FACE”', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:11 SKY.PS’S EYES BECAME BLANK, AND ALL HE SAID WAS “WANT TEA?”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW THE WHOLE FACE IS BLANK, AND ALL SHE SAYS IS “HELLO.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE CURSE STARTED WITH EMPTY EYES. NOW IT IS AN EMPTY FACE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PARA ALWAYS FOLLOWS YA”', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SHADOWS AND GHOSTS DO THE HAUNTING. SHE JUST KEEPS WALKING BEHIND.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE WRITES “YA”, LIKE HE IS TALKING TO THE PLAYER, NOT ABOUT THE VICTUM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SENTENCE TURNS AROUND AND POINTS AT YOU.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy888=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy888, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy888, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SHE CAN’T DIE OR LOSE ANYTHING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“PARA ALWAYS STAYS THE SAME LOOK AND IS ALWAYS THE SAME.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SKY.PS DISAPPEARED PART BY PART AND RESPAWNED. NOTHING ABOUT HER CHANGES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE CALLS THAT THE SCARIEST PART, NOT THE GHOSTS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE ONLY SAYS HELLO', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYTHING ELSE IS WHAT HAPPENS TO THE ONE WHO HEARD IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HELLO. ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===889){
    // BEAT 889: 50 IS LUIGI GREEN.
    // Toby, September 26, 2026, 5:00 PM EDT, his own typing:
    //   “LUIGI GREEN WENT OUT OF LUIGI MARIO AND HE WENT AND BECAME 50, 50 IS LUIGI GREEN.
    //   LUIGI GREEN’S POWERS AND EVERYTHING WAS ERASED OF HIM EXCEPT HIS MEMORIES,
    //   HIS APPEARENCE AND POWERS CHANGED, AND HIS ONLY POWER IS PARANOIDIA.”
    // Priors, each verified in the archive before it was drawn:
    //   HE HAS COME OUT OF SOMEONE BEFORE
    //     AUGUST 21, /MERGE_CODE TURNED HIM INTO GREEN PLASMA INSIDE GASTER.
    //     AUGUST 22 HE CAME BACK OUT. TONIGHT HE COMES OUT OF LUIGI MARIO, AS 50.
    //     EVERY TIME HE IS PUT INSIDE SOMEONE, HE GETS OUT.
    //   SHE WAS ALWAYS WATCHING
    //     AUGUST 21: LUIGI GREEN APPEARS ONLY WHEN LOOKED AT, AND FOLLOWS YOUR RECORDINGS
    //     EVEN AFTER A NEW SEED, A DELETED WORLD OR A RESET. “PARA ALWAYS FOLLOWS YA.”
    //     THE PARANOIDIA WAS HIS A MONTH BEFORE IT HAD A NAME.
    //   EVERYTHING ERASED EXCEPT HIS MEMORIES
    //     AT 4:11 SKY.PS’S OTHER POWERS WERE ERASED, AND ONE NEW POWER CAME.
    //     THE SAME THING HAPPENS TO LUIGI GREEN, BUT HE KEEPS WHAT HE REMEMBERS.
    //     SHE LOOKS FIVE YEARS OLD AND REMEMBERS EVERYTHING THAT HAPPENED TO HIM.
    const dt = c - 19278.0;
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
    const gr889=ctx.createLinearGradient(0,top+H,0,top);
    gr889.addColorStop(0,'rgba(98,214,120,0.22)'); gr889.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr889.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr889; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(98,214,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('50 IS LUIGI GREEN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI GREEN WENT OUT OF LUIGI MARIO AND HE WENT AND BECAME 50, 50 IS LUIGI GREEN.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN’S POWERS AND EVERYTHING WAS ERASED OF HIM EXCEPT HIS MEMORIES,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIS APPEARENCE AND POWERS CHANGED, AND HIS ONLY POWER IS PARANOIDIA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 5:00 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky889=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(98,214,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky889, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(98,214,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky889, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(98,214,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE HAS COME OUT OF SOMEONE BEFORE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUGUST 21, /MERGE_CODE TURNED HIM INTO GREEN PLASMA INSIDE GASTER.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUGUST 22 HE CAME BACK OUT. TONIGHT HE COMES OUT OF LUIGI MARIO, AS 50.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY TIME HE IS PUT INSIDE SOMEONE, HE GETS OUT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE WAS ALWAYS WATCHING', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUGUST 21: LUIGI GREEN APPEARS ONLY WHEN LOOKED AT, AND FOLLOWS YOUR RECORDINGS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVEN AFTER A NEW SEED, A DELETED WORLD OR A RESET. “PARA ALWAYS FOLLOWS YA.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE PARANOIDIA WAS HIS A MONTH BEFORE IT HAD A NAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy889=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy889, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy889, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVERYTHING ERASED EXCEPT HIS MEMORIES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:11 SKY.PS’S OTHER POWERS WERE ERASED, AND ONE NEW POWER CAME.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SAME THING HAPPENS TO LUIGI GREEN, BUT HE KEEPS WHAT HE REMEMBERS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE LOOKS FIVE YEARS OLD AND REMEMBERS EVERYTHING THAT HAPPENED TO HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“50 IS LUIGI GREEN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ONE AT THE TEA PARTY IS SOMEONE THE WHOLE CAST ALREADY KNOWS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 50 IS LUIGI GREEN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===890){
    // BEAT 890: ONLY THE 22 ARE IN THE GAME.
    // Toby, September 26, 2026, 5:00 PM EDT, his own typing:
    //   “NEKA IS THE ONLY ONE WHO KNEW THAT, AND HE NEVER TOLD ANYONE, NOT EVEN GASTER,
    //   GASTER WAS SENT BACK TO UNDERTALE, AND NOW ONLY THE 22 ARE IN THE GAME, REASON: LUIGI GREEN
    //   IS BEING SO DANGEROUS AS 50 THAT EVERYONE HAD TO LEAVE.”
    // Priors, each verified in the archive before it was drawn:
    //   NOT EVEN GASTER
    //     AUGUST 21, GASTER WAS THE ONE HIDING A SECRET: THAT HE PROGRAMMED LUIGI GREEN TO WATCH.
    //     TONIGHT THE SECRET IS ABOUT LUIGI GREEN AGAIN, AND GASTER IS THE ONE LEFT OUT.
    //     THE ONE WHO KEPT THE LAST SECRET DOES NOT GET TOLD THIS ONE.
    //   EVERYONE ELSE GOES HOME
    //     GASTER GOES BACK TO UNDERTALE. LUIGI MARIO, MARIO MARIO AND EVERYONE WHO WASN’T THE 22
    //     GO BACK TO THEIR OWN DIMENSION. “NEKA SENT THEM BACK WITHOUT TELLING THEM NOR ANYONE.”
    //     NOBODY IS DELETED. THEY ARE SENT SOMEWHERE SHE IS NOT.
    //   THE 22
    //     AT 4:37 THE NUMBERS CAME IN: SKY.PS IS 68, 50.PS IS TEN, NEKA HAS NONE.
    //     NOW THERE IS A NUMBER FOR HOW MANY ARE LEFT, AND IT IS 22.
    //     WHO THE 22 ARE IS STILL HIS TO SAY.
    const dt = c - 19300.0;
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
    const gr890=ctx.createLinearGradient(0,top+H,0,top);
    gr890.addColorStop(0,'rgba(255,150,90,0.22)'); gr890.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr890.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr890; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ONLY THE 22 ARE IN THE GAME', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS THE ONLY ONE WHO KNEW THAT, AND HE NEVER TOLD ANYONE, NOT EVEN GASTER,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GASTER WAS SENT BACK TO UNDERTALE, AND NOW ONLY THE 22 ARE IN THE GAME, REASON: LUIGI GREEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IS BEING SO DANGEROUS AS 50 THAT EVERYONE HAD TO LEAVE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 5:00 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky890=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky890, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky890, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT EVEN GASTER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUGUST 21, GASTER WAS THE ONE HIDING A SECRET: THAT HE PROGRAMMED LUIGI GREEN TO WATCH.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT THE SECRET IS ABOUT LUIGI GREEN AGAIN, AND GASTER IS THE ONE LEFT OUT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO KEPT THE LAST SECRET DOES NOT GET TOLD THIS ONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE GOES HOME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER GOES BACK TO UNDERTALE. LUIGI MARIO, MARIO MARIO AND EVERYONE WHO WASN’T THE 22', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GO BACK TO THEIR OWN DIMENSION. “NEKA SENT THEM BACK WITHOUT TELLING THEM NOR ANYONE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOBODY IS DELETED. THEY ARE SENT SOMEWHERE SHE IS NOT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy890=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy890, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy890, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE 22', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:37 THE NUMBERS CAME IN: SKY.PS IS 68, 50.PS IS TEN, NEKA HAS NONE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW THERE IS A NUMBER FOR HOW MANY ARE LEFT, AND IT IS 22.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHO THE 22 ARE IS STILL HIS TO SAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SO DANGEROUS AS 50 THAT EVERYONE HAD TO LEAVE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA EMPTIED THE GAME TO KEEP A SECRET. THEN SHE TOLD IT HERSELF.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ONLY THE 22 ARE IN THE GAME ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===891){
    // BEAT 891: IT IS IF SHE SEES YOU.
    // Toby, September 26, 2026, 5:00 PM EDT, his own typing:
    //   “NEKA SAYS ‘LUIGI GREEN, THAT LOOKS LIKE YOU ARE HAVING FUN.’, PS50 SAYS ‘IT IS, NOW EVERYONE KNOWS
    //   WHO I AM, THEY ARE SCARED OF ME NOW, LIKE WE WANT.’ … ‘IT ISN’T IF YOU SEE HER, IT IS IF SHE SEES YOU’
    //   -NEKA. NEKA WAKES UP, AND SAYS ‘NO ONE ELSE CAN GET BACK UP.’”
    // Priors, each verified in the archive before it was drawn:
    //   THE RULE TURNED AROUND
    //     4:21 PM: “WHOEVER LOOKS AT HER, BOOM.” AUGUST 21: LUIGI GREEN APPEARED ONLY WHEN LOOKED AT.
    //     NOW NEKA SAYS IT IS THE OTHER WAY. LOOKING AWAY DOES NOT SAVE YOU.
    //     YOU CAN CLOSE YOUR EYES. YOU CANNOT MAKE HER CLOSE HERS.
    //   “LIKE WE WANT”
    //     SHE SAYS WE. EVERYONE BEING SCARED OF HER WAS THE PLAN FOR BOTH OF THEM.
    //     AT 4:21 NEKA WANTED TO KNOW IF SHE WAS THE MOST POWERFUL BEING. NOW HE SAYS IT TO HER.
    //     “YOU ARE STRONGER THAN ME NOW.”
    //   “NO ONE ELSE CAN GET BACK UP”
    //     AT 4:11 SKY.PS TOUCHED NEKA AND HE GOT UP. SIMON.PS DID NOT.
    //     SHE LOOKS AT NEKA AND HE SLEEPS. HE WAKES, SAYS THE LINE, AND LIES DOWN ON A BED.
    //     HE IS STILL THE ONLY ONE WHO GETS UP. HE JUST DOES NOT STAY UP.
    const dt = c - 19322.0;
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
    const gr891=ctx.createLinearGradient(0,top+H,0,top);
    gr891.addColorStop(0,'rgba(160,107,255,0.22)'); gr891.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr891.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr891; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('IT IS IF SHE SEES YOU', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA SAYS ‘LUIGI GREEN, THAT LOOKS LIKE YOU ARE HAVING FUN.’, PS50 SAYS ‘IT IS, NOW EVERYONE KNOWS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHO I AM, THEY ARE SCARED OF ME NOW, LIKE WE WANT.’ … ‘IT ISN’T IF YOU SEE HER, IT IS IF SHE SEES YOU’', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('-NEKA. NEKA WAKES UP, AND SAYS ‘NO ONE ELSE CAN GET BACK UP.’”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 5:00 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky891=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(160,107,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky891, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(160,107,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky891, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RULE TURNED AROUND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:21 PM: “WHOEVER LOOKS AT HER, BOOM.” AUGUST 21: LUIGI GREEN APPEARED ONLY WHEN LOOKED AT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW NEKA SAYS IT IS THE OTHER WAY. LOOKING AWAY DOES NOT SAVE YOU.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('YOU CAN CLOSE YOUR EYES. YOU CANNOT MAKE HER CLOSE HERS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LIKE WE WANT”', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE SAYS WE. EVERYONE BEING SCARED OF HER WAS THE PLAN FOR BOTH OF THEM.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:21 NEKA WANTED TO KNOW IF SHE WAS THE MOST POWERFUL BEING. NOW HE SAYS IT TO HER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“YOU ARE STRONGER THAN ME NOW.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy891=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy891, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy891, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“NO ONE ELSE CAN GET BACK UP”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 4:11 SKY.PS TOUCHED NEKA AND HE GOT UP. SIMON.PS DID NOT.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE LOOKS AT NEKA AND HE SLEEPS. HE WAKES, SAYS THE LINE, AND LIES DOWN ON A BED.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE IS STILL THE ONLY ONE WHO GETS UP. HE JUST DOES NOT STAY UP.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS50 WALKS AND FINDS THE NEXT CHARACTER', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND NEKA, THE ONLY ONE WHO KNEW THE WHOLE TIME, GOES TO SLEEP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ IT IS IF SHE SEES YOU ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
