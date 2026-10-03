  } else if(ph===981){
    // BEAT 981: PYCHO FURY.
    // Toby, October 3, 2026, 3:17 PM EDT, his own typing:
    //   “GASTER TAKES THE POWER, HE BECOMES
    //   THE MOST POWERFUL GASTER... PYCHO FURY IS
    //   EVEN MORE POWERFUL THAN GASTER’S POWER.”
    // Priors, each verified in the archive before it was drawn:
    //   NO ONE ELSE GETS IT
    //     WILL GASTER GIVE POWER TO ANYONE ELSE? NO.
    //     GASTER TAKES THE POWER AND KEEPS IT.
    //     ALL OF COMICAL NEKA STAYS INSIDE HIM (BEAT 980).
    //   THE THING IN THIS THING
    //     PYCHO FURY IS THE THING IN THAT FIGHT
    //     TIMES PRESSURETALE GASTER’S POWER.
    //     HIS LINK: A GLITCHTALE FIGHT SCENE (3/3).
    //   MORE THAN GASTER
    //     PYCHO FURY IS EVEN MORE POWERFUL
    //     THAN GASTER’S OWN POWER.
    //     THE STRONGEST BEING HAS AN ATTACK STRONGER THAN HIM.
    const dt = c - 21302.0;
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
    const gr981=ctx.createLinearGradient(0,top+H,0,top);
    gr981.addColorStop(0,'rgba(255,96,96,0.22)'); gr981.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr981.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr981; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,96,96,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PYCHO FURY', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER TAKES THE POWER, HE BECOMES', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL GASTER... PYCHO FURY IS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVEN MORE POWERFUL THAN GASTER’S POWER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 3:17 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky981=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,96,96,0.46)';
      ctx.fillRect(cx-W*0.352, ky981, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,96,96,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky981, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,96,96,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO ONE ELSE GETS IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WILL GASTER GIVE POWER TO ANYONE ELSE? NO.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER TAKES THE POWER AND KEEPS IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ALL OF COMICAL NEKA STAYS INSIDE HIM (BEAT 980).', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE THING IN THIS THING', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PYCHO FURY IS THE THING IN THAT FIGHT', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TIMES PRESSURETALE GASTER’S POWER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HIS LINK: A GLITCHTALE FIGHT SCENE (3/3).', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy981=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy981, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy981, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MORE THAN GASTER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PYCHO FURY IS EVEN MORE POWERFUL', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THAN GASTER’S OWN POWER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST BEING HAS AN ATTACK STRONGER THAN HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE POWER COMES IN. NONE OF IT GOES OUT.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONLY AS PYCHO FURY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PYCHO FURY ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
