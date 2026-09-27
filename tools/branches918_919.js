  } else if(ph===918){
    // BEAT 918: IMMUNE TO EACH OTHER.
    // Toby, September 27, 2026, 7:12 PM EDT, his own typing:
    //   “NEKA OMAZEN VS PS-50 WOULD BE EXTREMELY CHAOTIC AND SCARY, ONE HAS MORE POWERS AND CREATED THE GAME,
    //   THE OTHER IS IMMUNE TO NEKA OMAZEN AND HAS IT’S OWN POWER.
    //   NEKA AND 50 ARE IMMUNE TO EACH OTHER,”
    // Priors, each verified in the archive before it was drawn:
    //   NEKA OMAZEN IS IMMUNE
    //     SEPT 27, 8:12 AM: PS-50’S PARANOID HORROR MAKES EVERYONE FALL. “NEKA OMAZEN IS IMMUNE.”
    //     TONIGHT IT GOES BOTH WAYS. SHE IS IMMUNE TO HIM TOO.
    //     IMMUNE TO EACH OTHER.
    //   NOT EVEN A DENT
    //     SEPT 26, 6:33 PM: PS-50 IS IMPOSSIBLE CODE, WITH A CODE LAYER SHE CAN EDIT.
    //     “NEKA CAN’T PUT EVEN A DENT IN THAT.”
    //     THAT WAS THE FIRST SIGN.
    //   ONE CREATED THE GAME
    //     NEKA HAS MORE POWERS AND CREATED THE GAME. PS-50 HAS HER OWN POWER.
    //     AT 5:24 PM THEY STOOD AS THE MOST POWERFUL BEINGS. NOW THEY FACE EACH OTHER.
    //     EXTREMELY CHAOTIC AND SCARY.
    const dt = c - 19916.0;
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
    const gr918=ctx.createLinearGradient(0,top+H,0,top);
    gr918.addColorStop(0,'rgba(255,90,90,0.22)'); gr918.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr918.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr918; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('IMMUNE TO EACH OTHER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN VS PS-50 WOULD BE EXTREMELY CHAOTIC AND SCARY, ONE HAS MORE POWERS AND CREATED THE GAME,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE OTHER IS IMMUNE TO NEKA OMAZEN AND HAS IT’S OWN POWER.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA AND 50 ARE IMMUNE TO EACH OTHER,”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 7:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky918=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky918, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky918, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN IS IMMUNE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27, 8:12 AM: PS-50’S PARANOID HORROR MAKES EVERYONE FALL. “NEKA OMAZEN IS IMMUNE.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT IT GOES BOTH WAYS. SHE IS IMMUNE TO HIM TOO.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IMMUNE TO EACH OTHER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT EVEN A DENT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 6:33 PM: PS-50 IS IMPOSSIBLE CODE, WITH A CODE LAYER SHE CAN EDIT.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA CAN’T PUT EVEN A DENT IN THAT.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THAT WAS THE FIRST SIGN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy918=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy918, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy918, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ONE CREATED THE GAME', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA HAS MORE POWERS AND CREATED THE GAME. PS-50 HAS HER OWN POWER.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AT 5:24 PM THEY STOOD AS THE MOST POWERFUL BEINGS. NOW THEY FACE EACH OTHER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EXTREMELY CHAOTIC AND SCARY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN VS PS-50', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE TWO AT THE TOP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ IMMUNE TO EACH OTHER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===919){
    // BEAT 919: 0% FOX.
    // Toby, September 27, 2026, 7:12 PM EDT, his own typing:
    //   “BUT NEKA WOULD PROBUBLY WIN,
    //   WHEN HE REACHES HIS HUMAN FORM
    //   AND BECOMES 0% FOX.”
    // Priors, each verified in the archive before it was drawn:
    //   THE ACTUAL FOX BEING
    //     SEPT 24, 4:37 PM: “NEKA OMAZEN IS THE ACTUAL FOX BEING IN THE GAME.”
    //     CAT EARS AND A FOX TAIL. AT 0%, NONE OF THE FOX IS LEFT.
    //     THE FOX IS WHAT HE LETS GO OF.
    //   HIGH POWER PERCENT
    //     SEPT 26, 6:41 PM, VS WENDA.PS: “NEKA WOULD EASILY WIN AT HIGH POWER PERCENT.”
    //     AGAINST PS-50 THE NUMBER THAT MATTERS GOES THE OTHER WAY. DOWN TO 0.
    //     ONE PERCENT UP, ONE PERCENT DOWN.
    //   PROBUBLY
    //     NOT “WOULD WIN.” PROBUBLY. AND ONLY WHEN HE REACHES THE HUMAN FORM.
    //     UNTIL THEN, NEKA AND 50 ARE STILL IMMUNE TO EACH OTHER.
    //     THE FIGHT IS NOT OVER YET.
    const dt = c - 19938.0;
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
    const gr919=ctx.createLinearGradient(0,top+H,0,top);
    gr919.addColorStop(0,'rgba(255,120,60,0.22)'); gr919.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr919.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr919; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('0% FOX', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BUT NEKA WOULD PROBUBLY WIN,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHEN HE REACHES HIS HUMAN FORM', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND BECOMES 0% FOX.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 27, 7:12 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky919=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky919, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky919, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ACTUAL FOX BEING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 24, 4:37 PM: “NEKA OMAZEN IS THE ACTUAL FOX BEING IN THE GAME.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAT EARS AND A FOX TAIL. AT 0%, NONE OF THE FOX IS LEFT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FOX IS WHAT HE LETS GO OF.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HIGH POWER PERCENT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 6:41 PM, VS WENDA.PS: “NEKA WOULD EASILY WIN AT HIGH POWER PERCENT.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AGAINST PS-50 THE NUMBER THAT MATTERS GOES THE OTHER WAY. DOWN TO 0.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('ONE PERCENT UP, ONE PERCENT DOWN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy919=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy919, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy919, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('PROBUBLY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOT “WOULD WIN.” PROBUBLY. AND ONLY WHEN HE REACHES THE HUMAN FORM.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('UNTIL THEN, NEKA AND 50 ARE STILL IMMUNE TO EACH OTHER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FIGHT IS NOT OVER YET.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('0% FOX', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS HUMAN FORM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ 0% FOX ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
