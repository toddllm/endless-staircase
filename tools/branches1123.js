  } else if(ph===1123){
    // BEAT 1123: ARE YOU ALEXEN?.
    // Toby, October 13, 2026, 3:37 PM EDT, his own typing:
    //   “ALEX SEES WENDA.PS AND GRAY.PS. WENDA.PS SAYS “HELLO.”,
    //   GRAY.PS SAYS “ARE YOU ALEXEN?”, WENDA.PS WAS SCARED.”
    // Priors, each verified in the archive before it was drawn:
    //   SHE ONLY SAYS HELLO
    //     SEPT 28: “HELLO, PERO LAI, WHERE IS YOUR TAIL?” AND SHE
    //     WAS BEATEN. TONIGHT: “HELLO.” THE BANNED NAME IS GONE.
    //     THE LAST GREETING COST HER A FIGHT. THIS ONE IS A WORD.
    //   GRAY SAYS THE NAME
    //     OCT 11: EVERYONE SAYS “ALEXEN.” HE SAYS “CORRECT.”
    //     OCT 12, 7:07 PM: YOU ONLY HAVE TO BE NAMED. GRAY NAMES.
    //     GRAY ASKS THE QUESTION. WENDA IS THE ONE WHO IS SCARED.
    //   WENDA.PS WAS SCARED
    //     SEPT 23: SCARED GRAY.PS WAS CREATED. TONIGHT THE FEAR
    //     IS HERS. OCT 12, 4:19 PM: HE ATTACKS ANYONE WHO ENTERS.
    //     SHE KNEW WHAT THE NAME MEANT BEFORE HE ANSWERED.
    const dt = c - 24426.0;
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
    const gr1123=ctx.createLinearGradient(0,top+H,0,top);
    gr1123.addColorStop(0,'rgba(120,170,255,0.22)'); gr1123.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1123.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1123; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,170,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ARE YOU ALEXEN?', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX SEES WENDA.PS AND GRAY.PS. WENDA.PS SAYS “HELLO.”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRAY.PS SAYS “ARE YOU ALEXEN?”, WENDA.PS WAS SCARED.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 3:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1123=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,170,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1123, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,170,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1123, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,170,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE ONLY SAYS HELLO', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: “HELLO, PERO LAI, WHERE IS YOUR TAIL?” AND SHE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WAS BEATEN. TONIGHT: “HELLO.” THE BANNED NAME IS GONE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LAST GREETING COST HER A FIGHT. THIS ONE IS A WORD.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRAY SAYS THE NAME', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: EVERYONE SAYS “ALEXEN.” HE SAYS “CORRECT.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 7:07 PM: YOU ONLY HAVE TO BE NAMED. GRAY NAMES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('GRAY ASKS THE QUESTION. WENDA IS THE ONE WHO IS SCARED.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1123=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1123, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1123, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WENDA.PS WAS SCARED', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 23: SCARED GRAY.PS WAS CREATED. TONIGHT THE FEAR', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IS HERS. OCT 12, 4:19 PM: HE ATTACKS ANYONE WHO ENTERS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE KNEW WHAT THE NAME MEANT BEFORE HE ANSWERED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ARE YOU ALEXEN?”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE NEVER ANSWERS. WENDA.PS BEING SCARED IS THE ANSWER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ARE YOU ALEXEN? ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1124){
    // BEAT 1124: NOT A SINGLE CLUE.
    // Toby, October 13, 2026, 3:37 PM EDT, his own typing:
    //   “AND AT THE CLASSICS NIGHT, WENDA.PS WAS MISSING. GRAY.PS
    //   LOOKED FOR 50 YEARS, DID NOT SEE A SINGLE CLUE.
    //   WHAT DO YOU THINK HAPPENED?”
    // Priors, each verified in the archive before it was drawn:
    //   THE CLASSICS NIGHT
    //     OCT 12, 9:54 AM: SERVERS UP ON THE OCTOBER DAY, THE
    //     ATTACK ON THE OCTOBER NIGHT. THAT NIGHT, SHE WAS MISSING.
    //     THE NIGHT HE ATTACKS IS THE NIGHT SHE IS GONE.
    //   FIFTY YEARS
    //     MAR 30: WENDA WAITED 40 YEARS TO HOLD SIMON’S HAND.
    //     NOW GRAY.PS SEARCHES FOR HER TEN YEARS LONGER THAN THAT.
    //     THE LONGEST WAIT IN THE ARCHIVE WAS HERS. THE SEARCH, HIS.
    //   NOT A SINGLE CLUE
    //     SEPT 7: “WHERE IS EVERYONE?” ALONE ON THE ISLAND. OCT 12:
    //     SENT THE WRONG WAY IN AREA 304. NOW: NO CLUE IN 50 YEARS.
    //     THE ONE SHE SPARED IS THE ONE WHO KEEPS LOOKING.
    const dt = c - 24448.0;
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
    const gr1124=ctx.createLinearGradient(0,top+H,0,top);
    gr1124.addColorStop(0,'rgba(170,180,200,0.22)'); gr1124.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1124.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1124; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,180,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOT A SINGLE CLUE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“AND AT THE CLASSICS NIGHT, WENDA.PS WAS MISSING. GRAY.PS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LOOKED FOR 50 YEARS, DID NOT SEE A SINGLE CLUE.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHAT DO YOU THINK HAPPENED?”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 3:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1124=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,180,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1124, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,180,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1124, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,180,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CLASSICS NIGHT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 9:54 AM: SERVERS UP ON THE OCTOBER DAY, THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ATTACK ON THE OCTOBER NIGHT. THAT NIGHT, SHE WAS MISSING.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE NIGHT HE ATTACKS IS THE NIGHT SHE IS GONE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIFTY YEARS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MAR 30: WENDA WAITED 40 YEARS TO HOLD SIMON’S HAND.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW GRAY.PS SEARCHES FOR HER TEN YEARS LONGER THAN THAT.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE LONGEST WAIT IN THE ARCHIVE WAS HERS. THE SEARCH, HIS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1124=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1124, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1124, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NOT A SINGLE CLUE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 7: “WHERE IS EVERYONE?” ALONE ON THE ISLAND. OCT 12:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SENT THE WRONG WAY IN AREA 304. NOW: NO CLUE IN 50 YEARS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE SHE SPARED IS THE ONE WHO KEEPS LOOKING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DID NOT SEE A SINGLE CLUE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('FIFTY YEARS OF LOOKING. NOT ONE THING TO FIND.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOT A SINGLE CLUE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1125){
    // BEAT 1125: WENDA.PS IS BEING MOVED.
    // Toby, October 13, 2026, 3:37 PM EDT, his own typing:
    //   “ALEX TOOK WENDA.PS AWAY FOR THE 50 YEARS, GRAY WAS WALKING
    //   THE SAME DIRECTION, BUT NEVER REACHED WENDA.PS’S LOCATION,
    //   CAUSE WENDA.PS IS BEING MOVED BY ALEX.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SAME FIFTY YEARS
    //     4:19 PM: HE ATTACKS ANYONE WHO ENTERS FOR 50 YEARS.
    //     THE WHOLE TIME, HE WAS ALSO CARRYING WENDA.PS AWAY.
    //     THE ATTACK AND THE TAKING RAN ON THE SAME CLOCK.
    //   THE RIGHT DIRECTION
    //     OCT 12, 1:27 PM: FAKE VOICES SENT GRAY.PS THE WRONG WAY.
    //     THIS TIME HE WALKED THE RIGHT WAY. HE NEVER ARRIVED.
    //     YOU CANNOT REACH A PLACE THAT MOVES WHEN YOU DO.
    //   THE TUBE THAT WOULD NOT CLOSE
    //     SEPT 20: PERO LAI CONTAINED EVERYONE BUT WENDA.PS.
    //     ALEX DID NOT CONTAIN HER. HE KEPT HER MOVING INSTEAD.
    //     NOBODY COULD HOLD HER STILL. HE HELD HER BY MOVING.
    const dt = c - 24470.0;
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
    const gr1125=ctx.createLinearGradient(0,top+H,0,top);
    gr1125.addColorStop(0,'rgba(255,140,200,0.22)'); gr1125.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1125.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1125; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WENDA.PS IS BEING MOVED', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX TOOK WENDA.PS AWAY FOR THE 50 YEARS, GRAY WAS WALKING', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SAME DIRECTION, BUT NEVER REACHED WENDA.PS’S LOCATION,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAUSE WENDA.PS IS BEING MOVED BY ALEX.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 3:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1125=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1125, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1125, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SAME FIFTY YEARS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:19 PM: HE ATTACKS ANYONE WHO ENTERS FOR 50 YEARS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE WHOLE TIME, HE WAS ALSO CARRYING WENDA.PS AWAY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ATTACK AND THE TAKING RAN ON THE SAME CLOCK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RIGHT DIRECTION', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 1:27 PM: FAKE VOICES SENT GRAY.PS THE WRONG WAY.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THIS TIME HE WALKED THE RIGHT WAY. HE NEVER ARRIVED.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('YOU CANNOT REACH A PLACE THAT MOVES WHEN YOU DO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1125=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1125, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1125, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE TUBE THAT WOULD NOT CLOSE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 20: PERO LAI CONTAINED EVERYONE BUT WENDA.PS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEX DID NOT CONTAIN HER. HE KEPT HER MOVING INSTEAD.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOBODY COULD HOLD HER STILL. HE HELD HER BY MOVING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS IS BEING MOVED BY ALEX.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GRAY WALKED THE RIGHT DIRECTION. THE DESTINATION WALKED TOO.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WENDA.PS IS BEING MOVED ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1126){
    // BEAT 1126: ALEX CAN CONTROL THE FORMS.
    // Toby, October 13, 2026, 3:37 PM EDT, his own typing:
    //   “ALEX NOW THINKS THAT THE WAY TO NO LONGER BECOME THE NORMAL
    //   FORM UNCONTROLABLY IS TO BASICALLY BEAT WENDA.PS. ALEX WON,
    //   AND ALEX NOW CAN CONTROL THE FORMS.”
    // Priors, each verified in the archive before it was drawn:
    //   UNCONTROLABLY
    //     OCT 12, 9:54 AM: HE HACKS CLASSICS EVERY HALLOWEEN
    //     UNCONTROLABLY. 4:19 PM: AFTER 50 YEARS HE IS NORMAL AGAIN.
    //     WHAT HE COULD NOT CONTROL WAS TURNING BACK INTO HIMSELF.
    //   BEAT WENDA.PS
    //     9:54 AM: HE BEAT SIMON.PS TO REACH HIS LV. NOW HE BEATS
    //     WENDA.PS, THE ONE PERO LAI COULD NOT HOLD, FOR CONTROL.
    //     THE CURE FOR HIS OWN FORM WAS A FIGHT WITH SOMEONE ELSE.
    //   CONSTANTLY ALEX 303
    //     JUNE 6: BASIC ALEX DROPPED EVERY FORM AND KEPT THE POWER.
    //     OCT 12, 2:31 PM: ALEX 303 CAME ALIVE AGAIN. NOW HE STAYS.
    //     IN JUNE THE BASIC FORM WAS HIS CHOICE. NOW 303 IS.
    const dt = c - 24492.0;
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
    const gr1126=ctx.createLinearGradient(0,top+H,0,top);
    gr1126.addColorStop(0,'rgba(255,60,60,0.22)'); gr1126.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1126.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1126; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX CAN CONTROL THE FORMS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX NOW THINKS THAT THE WAY TO NO LONGER BECOME THE NORMAL', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FORM UNCONTROLABLY IS TO BASICALLY BEAT WENDA.PS. ALEX WON,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND ALEX NOW CAN CONTROL THE FORMS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 3:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1126=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1126, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1126, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('UNCONTROLABLY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 9:54 AM: HE HACKS CLASSICS EVERY HALLOWEEN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UNCONTROLABLY. 4:19 PM: AFTER 50 YEARS HE IS NORMAL AGAIN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHAT HE COULD NOT CONTROL WAS TURNING BACK INTO HIMSELF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEAT WENDA.PS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('9:54 AM: HE BEAT SIMON.PS TO REACH HIS LV. NOW HE BEATS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS, THE ONE PERO LAI COULD NOT HOLD, FOR CONTROL.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE CURE FOR HIS OWN FORM WAS A FIGHT WITH SOMEONE ELSE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1126=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1126, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1126, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('CONSTANTLY ALEX 303', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JUNE 6: BASIC ALEX DROPPED EVERY FORM AND KEPT THE POWER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 2:31 PM: ALEX 303 CAME ALIVE AGAIN. NOW HE STAYS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IN JUNE THE BASIC FORM WAS HIS CHOICE. NOW 303 IS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX CONSTANTLY WAS ALEX 303.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE NORMAL FRIEND ALEX OF 6:59 PM IS NOW THE FORM HE LEFT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX CAN CONTROL THE FORMS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
