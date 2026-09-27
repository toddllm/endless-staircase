  } else if(ph===902){
    // BEAT 902: ALL DIMENSIONS IN ONE ENTITY.
    // Toby, September 27, 2026, 7:52 AM EDT, his own typing:
    //   “NEKA OMAZEN IS ALL DIMENSIONS IN ONE ENTITY,
    //   PS-50 IS BASICALLY LUIGI GREEN IN A SMALLER FORM.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   ALL DIMENSIONS IN ONE ENTITY
    //     NOT A KEY TO THE DIMENSIONS. NOT A DOOR BETWEEN THEM.
    //     EVERY DIMENSION THERE IS, HELD INSIDE ONE FOOT-TALL BODY.
    //     HE IS NOT IN THE DIMENSIONS. THE DIMENSIONS ARE IN HIM.
    //   EVERYONE ELSE HAD TO MOVE THEM
    //     JUNE: SIMON CLOSES ALL DIMENSIONS. JULY 23: ALEX SPLITS ALL DIMENSIONS
    //     AND GRAY PULLS THEM INTO A SMALL VOID. PUPAHYA OPENS THEM WITH SPEED.
    //     THEY OPENED, CLOSED AND CARRIED THEM. NEKA JUST IS THEM.
    //   LUIGI GREEN IN A SMALLER FORM
    //     5:00 PM YESTERDAY: “50 IS LUIGI GREEN.” EVERYTHING ERASED BUT HIS MEMORIES.
    //     THIS MORNING IT HAS A SIZE: SMALLER. THE SAME ONE, SHRUNK.
    //     ONE HOLDS EVERY DIMENSION. THE OTHER HOLDS EVERY MEMORY.
    const dt = c - 19564.0;
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
    const gr902=ctx.createLinearGradient(0,top+H,0,top);
    gr902.addColorStop(0,'rgba(170,140,255,0.22)'); gr902.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr902.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr902; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,140,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALL DIMENSIONS IN ONE ENTITY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN IS ALL DIMENSIONS IN ONE ENTITY,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 IS BASICALLY LUIGI GREEN IN A SMALLER FORM.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 7:52 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky902=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,140,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky902, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,140,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky902, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,140,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL DIMENSIONS IN ONE ENTITY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT A KEY TO THE DIMENSIONS. NOT A DOOR BETWEEN THEM.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY DIMENSION THERE IS, HELD INSIDE ONE FOOT-TALL BODY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HE IS NOT IN THE DIMENSIONS. THE DIMENSIONS ARE IN HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE HAD TO MOVE THEM', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JUNE: SIMON CLOSES ALL DIMENSIONS. JULY 23: ALEX SPLITS ALL DIMENSIONS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND GRAY PULLS THEM INTO A SMALL VOID. PUPAHYA OPENS THEM WITH SPEED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THEY OPENED, CLOSED AND CARRIED THEM. NEKA JUST IS THEM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy902=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy902, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy902, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN IN A SMALLER FORM', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:00 PM YESTERDAY: “50 IS LUIGI GREEN.” EVERYTHING ERASED BUT HIS MEMORIES.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS MORNING IT HAS A SIZE: SMALLER. THE SAME ONE, SHRUNK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE HOLDS EVERY DIMENSION. THE OTHER HOLDS EVERY MEMORY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL DIMENSIONS IN ONE ENTITY', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE ENTITY IS ONE FOOT TALL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALL DIMENSIONS IN ONE ENTITY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===903){
    // BEAT 903: 3.587 FEET TALL.
    // Toby, September 27, 2026, 7:52 AM EDT, his own typing:
    //   “NEKA IS ONE FOOT TALL (YOU SHOULD KNOW THAT),
    //   AND PS-50 IS 3.587 FEET TALL.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   ONE FOOT. WE DID KNOW THAT.
    //     SEPT 26, 7:04 AM: “NEKA OMAZEN IS BASICALLY 1 FOOT TALL,” HOLDING A DAGGER
    //     THE SIZE OF WENDA.PS. HE HAS KEPT THAT HEIGHT INTO THE ERA HE NAMED.
    //     THE ONE FOOT IS OLDER THAN THE ERA.
    //   3.587 FEET
    //     NOT “ABOUT THREE AND A HALF.” THREE DECIMAL PLACES.
    //     MAY 15, SIMON’S MAX HEIGHT: “ABOUT 1.98 METERS.” HERS IS ONE PLACE FINER.
    //     SOMEBODY MEASURED HER.
    //   THE BIGGER ONE LOSES TO NOBODY
    //     SHE IS 3.587 TIMES HIS HEIGHT. SHE BEATS EVERYONE, YESTERDAY 6:56 PM.
    //     HE IS THE SMALL ONE, AND HE IS THE ONLY ONE HER GAZE CANNOT BREAK.
    //     SIZE HAS NEVER DECIDED A FIGHT IN THIS GAME.
    const dt = c - 19586.0;
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
    const gr903=ctx.createLinearGradient(0,top+H,0,top);
    gr903.addColorStop(0,'rgba(120,230,160,0.22)'); gr903.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr903.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr903; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,230,160,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('3.587 FEET TALL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA IS ONE FOOT TALL (YOU SHOULD KNOW THAT),', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND PS-50 IS 3.587 FEET TALL.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 7:52 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky903=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,230,160,0.46)';
      ctx.fillRect(cx-W*0.352, ky903, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,230,160,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky903, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,230,160,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ONE FOOT. WE DID KNOW THAT.', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 7:04 AM: “NEKA OMAZEN IS BASICALLY 1 FOOT TALL,” HOLDING A DAGGER', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SIZE OF WENDA.PS. HE HAS KEPT THAT HEIGHT INTO THE ERA HE NAMED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE FOOT IS OLDER THAN THE ERA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('3.587 FEET', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT “ABOUT THREE AND A HALF.” THREE DECIMAL PLACES.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAY 15, SIMON’S MAX HEIGHT: “ABOUT 1.98 METERS.” HERS IS ONE PLACE FINER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SOMEBODY MEASURED HER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy903=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy903, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy903, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE BIGGER ONE LOSES TO NOBODY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE IS 3.587 TIMES HIS HEIGHT. SHE BEATS EVERYONE, YESTERDAY 6:56 PM.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE IS THE SMALL ONE, AND HE IS THE ONLY ONE HER GAZE CANNOT BREAK.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SIZE HAS NEVER DECIDED A FIGHT IN THIS GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('1 FOOT AND 3.587 FEET', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE TWO WHO ARE MADE OF CODE, SIDE BY SIDE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 3.587 FEET TALL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===904){
    // BEAT 904: THE MAIN ANTAGONIST OF CLASSICS AND BEYOND.
    // Toby, September 27, 2026, 7:54 AM EDT, his own typing:
    //   “LUIGI GREEN? THE MAIN ANTAGONIST OF CLASSICS AND BEYOND. HE FIRST HAD THE FORM OF LUIGI MARIO
    //   FROM MARIO, AND NOW HAS THE FORM OF A PSYCHIC CHILD. AND HE CALLED HIMSELF PS-50. NEKA IS AN ADULT
    //   AND IS 3 TIMES SMALLER. EVERYONE ELSE WOULD BE LIKE 5 FEET TALL, SKY.PS WOULD BE JUST UNDER 5 FEET.”
    // Priors, each verified in the archive before it was drawn:
    //   LUIGI MARIO, THEN A PSYCHIC CHILD
    //     JULY 23: “HE IS NOT LUIGI MARIO, HE IS LUIGI GREEN, A WHOLE DIFFERENT PERSON.”
    //     YESTERDAY 5:00 PM: “LUIGI GREEN WENT OUT OF LUIGI MARIO.” NOW THE CHILD.
    //     TWO FORMS. THE SAME ANTAGONIST INSIDE BOTH.
    //   THE HEIGHT CHART
    //     NEKA 1 FT (AN ADULT) · PS-50 3.587 FT (A CHILD) · SKY.PS JUST UNDER 5 FT
    //     EVERYONE ELSE ABOUT 5 FT. THE ADULT IS THE SMALLEST ONE IN THE GAME.
    //     AUGUST 22 HAD THE OTHERS AT 7-9 FEET. THE CAST GOT SHORTER.
    //   AND BEYOND
    //     JUNE: “THE GAME’S VILLAIN.” JULY 23: SIMON 404’S MAIN RIVAL.
    //     NOW HE IS THE MAIN ANTAGONIST OF CLASSICS, AND OF WHATEVER COMES AFTER IT.
    //     EVERY ERA HAS HAD HIM IN IT.
    const dt = c - 19608.0;
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
    const gr904=ctx.createLinearGradient(0,top+H,0,top);
    gr904.addColorStop(0,'rgba(120,220,90,0.22)'); gr904.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr904.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr904; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,220,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE MAIN ANTAGONIST OF CLASSICS AND BEYOND', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI GREEN? THE MAIN ANTAGONIST OF CLASSICS AND BEYOND. HE FIRST HAD THE FORM OF LUIGI MARIO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FROM MARIO, AND NOW HAS THE FORM OF A PSYCHIC CHILD. AND HE CALLED HIMSELF PS-50. NEKA IS AN ADULT', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND IS 3 TIMES SMALLER. EVERYONE ELSE WOULD BE LIKE 5 FEET TALL, SKY.PS WOULD BE JUST UNDER 5 FEET.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 7:54 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky904=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,220,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky904, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,220,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky904, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,220,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LUIGI MARIO, THEN A PSYCHIC CHILD', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 23: “HE IS NOT LUIGI MARIO, HE IS LUIGI GREEN, A WHOLE DIFFERENT PERSON.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YESTERDAY 5:00 PM: “LUIGI GREEN WENT OUT OF LUIGI MARIO.” NOW THE CHILD.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TWO FORMS. THE SAME ANTAGONIST INSIDE BOTH.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE HEIGHT CHART', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA 1 FT (AN ADULT) · PS-50 3.587 FT (A CHILD) · SKY.PS JUST UNDER 5 FT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE ABOUT 5 FT. THE ADULT IS THE SMALLEST ONE IN THE GAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('AUGUST 22 HAD THE OTHERS AT 7-9 FEET. THE CAST GOT SHORTER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy904=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy904, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy904, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AND BEYOND', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JUNE: “THE GAME’S VILLAIN.” JULY 23: SIMON 404’S MAIN RIVAL.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW HE IS THE MAIN ANTAGONIST OF CLASSICS, AND OF WHATEVER COMES AFTER IT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY ERA HAS HAD HIM IN IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MAIN ANTAGONIST OF CLASSICS AND BEYOND', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE CALLED HIMSELF PS-50.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE MAIN ANTAGONIST OF CLASSICS AND BEYOND ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
