  } else if(ph===900){
    // BEAT 900: ERROR: NULL.
    // Toby, September 26, 2026, 6:56 PM EDT, his own typing:
    //   “IN THE ENDLESS STAIRCASE GAME, ONCE PS-50 SEES YOU, IT IS GAME OVER AND IT SAYS “GAME OVER: ERROR:
    //   NULL: DEATH.FELL.ACCIDENT.GLITCH.PARANOID”, THAT IS WHAT HAPPENS IN CLASSICS. ALSO THE ENDLESS STAIRCASE
    //   GAME SHOULD ACTUALLY HAVE ALL THE CLASSICS STUFF IN IT, SO THE PLAYER DOESN’T JUST FALL FOREVER.”
    // Priors, each verified in the archive before it was drawn:
    //   GAME OVER: ERROR: NULL
    //     DEATH.FELL.ACCIDENT.GLITCH.PARANOID
    //     FIVE CAUSES OF DEATH IN ONE LINE, AND THE GAME CANNOT PICK WHICH ONE IT WAS.
    //     ONCE SHE SEES YOU, THAT IS THE SCREEN.
    //   READ IT LEFT TO RIGHT
    //     YOU FELL. IT LOOKS LIKE AN ACCIDENT. IT GETS LOGGED AS A GLITCH.
    //     THE LAST WORD IS THE REAL ONE: PARANOID. HER GAZE, 6:35 PM.
    //     THE ERROR MESSAGE IS THE WHOLE STORY OF HER.
    //   NOT JUST FALLING FOREVER
    //     THE STAIRCASE SHOULD HAVE ALL THE CLASSICS STUFF IN IT, ACTUALLY HAPPENING.
    //     SO THE FALL GOES THROUGH THE EVENTS INSTEAD OF REPEATING.
    //     TOBY’S OWN DESIGN NOTE FOR THIS GAME.
    const dt = c - 19520.0;
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
    const gr900=ctx.createLinearGradient(0,top+H,0,top);
    gr900.addColorStop(0,'rgba(255,70,90,0.22)'); gr900.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr900.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr900; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,70,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ERROR: NULL', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“IN THE ENDLESS STAIRCASE GAME, ONCE PS-50 SEES YOU, IT IS GAME OVER AND IT SAYS “GAME OVER: ERROR:', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NULL: DEATH.FELL.ACCIDENT.GLITCH.PARANOID”, THAT IS WHAT HAPPENS IN CLASSICS. ALSO THE ENDLESS STAIRCASE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAME SHOULD ACTUALLY HAVE ALL THE CLASSICS STUFF IN IT, SO THE PLAYER DOESN’T JUST FALL FOREVER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky900=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,70,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky900, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,70,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky900, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,70,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAME OVER: ERROR: NULL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DEATH.FELL.ACCIDENT.GLITCH.PARANOID', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIVE CAUSES OF DEATH IN ONE LINE, AND THE GAME CANNOT PICK WHICH ONE IT WAS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONCE SHE SEES YOU, THAT IS THE SCREEN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('READ IT LEFT TO RIGHT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('YOU FELL. IT LOOKS LIKE AN ACCIDENT. IT GETS LOGGED AS A GLITCH.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE LAST WORD IS THE REAL ONE: PARANOID. HER GAZE, 6:35 PM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ERROR MESSAGE IS THE WHOLE STORY OF HER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy900=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy900, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy900, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NOT JUST FALLING FOREVER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE STAIRCASE SHOULD HAVE ALL THE CLASSICS STUFF IN IT, ACTUALLY HAPPENING.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SO THE FALL GOES THROUGH THE EVENTS INSTEAD OF REPEATING.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY’S OWN DESIGN NOTE FOR THIS GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ERROR: NULL', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SIMON 404 HAD AN INSTANT GAME OVER TOO. HIS COULD NOT BE DESCRIBED. HERS PRINTS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ERROR: NULL ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===901){
    // BEAT 901: A CHILD CAN BEAT EVERYONE.
    // Toby, September 26, 2026, 6:56 PM EDT, his own typing:
    //   “A CHILD CAN BEAT EVERYONE. NEKA OMAZEN IS TOO STRONG FOR THE PARANOID.
    //   BUT PS-50 CAN MAKE NEKA SLEEPY.”
    //   
    // Priors, each verified in the archive before it was drawn:
    //   A CHILD CAN BEAT EVERYONE
    //     SHE LOOKS LIKE A KID ASKING FOR A TEA PARTY.
    //     AND SHE BEATS EVERYONE, EXACTLY LIKE 6:41 PM SAID: “PS-50 IS BEATING EVERYONE.”
    //     THE SMALLEST ONE IN THE GAME IS THE ONE NOBODY WINS AGAINST.
    //   TOO STRONG FOR THE PARANOID
    //     HER GAZE BLURS YOU, BLACKS YOU OUT, THEN THE PARANOIA TAKES HOLD.
    //     NEKA OMAZEN IS TOO STRONG FOR IT TO TAKE HOLD. THE ONE THING THAT BEATS EVERYONE ELSE.
    //     HE IS THE ONLY ONE HER EYES CANNOT BREAK.
    //   BUT SHE CAN MAKE HIM SLEEPY
    //     6:33 PM: “NEKA IS STILL TIRED.” 6:41 PM: HE PACKS THE BLADES AND SLEEPS AGAIN.
    //     NOW WE KNOW WHY HE KEEPS GOING BACK TO BED. SHE IS THE ONE MAKING HIM SLEEPY.
    //     SHE CANNOT MAKE HIM PARANOID, SO SHE KEEPS HIM ASLEEP.
    const dt = c - 19542.0;
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
    const gr901=ctx.createLinearGradient(0,top+H,0,top);
    gr901.addColorStop(0,'rgba(255,200,120,0.22)'); gr901.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr901.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr901; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,120,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('A CHILD CAN BEAT EVERYONE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A CHILD CAN BEAT EVERYONE. NEKA OMAZEN IS TOO STRONG FOR THE PARANOID.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BUT PS-50 CAN MAKE NEKA SLEEPY.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 6:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky901=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,120,0.46)';
      ctx.fillRect(cx-W*0.352, ky901, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,120,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky901, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,120,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A CHILD CAN BEAT EVERYONE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE LOOKS LIKE A KID ASKING FOR A TEA PARTY.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND SHE BEATS EVERYONE, EXACTLY LIKE 6:41 PM SAID: “PS-50 IS BEATING EVERYONE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SMALLEST ONE IN THE GAME IS THE ONE NOBODY WINS AGAINST.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TOO STRONG FOR THE PARANOID', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HER GAZE BLURS YOU, BLACKS YOU OUT, THEN THE PARANOIA TAKES HOLD.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN IS TOO STRONG FOR IT TO TAKE HOLD. THE ONE THING THAT BEATS EVERYONE ELSE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE IS THE ONLY ONE HER EYES CANNOT BREAK.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy901=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy901, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy901, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BUT SHE CAN MAKE HIM SLEEPY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('6:33 PM: “NEKA IS STILL TIRED.” 6:41 PM: HE PACKS THE BLADES AND SLEEPS AGAIN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW WE KNOW WHY HE KEEPS GOING BACK TO BED. SHE IS THE ONE MAKING HIM SLEEPY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE CANNOT MAKE HIM PARANOID, SO SHE KEEPS HIM ASLEEP.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A CHILD CAN BEAT EVERYONE', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('EVERYONE EXCEPT NEKA. AND NEKA IS ASLEEP.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ A CHILD CAN BEAT EVERYONE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
