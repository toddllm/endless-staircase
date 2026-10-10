  } else if(ph===1058){
    // BEAT 1058: NO ONE IS UNDERGROUND ANYMORE.
    // Toby, October 10, 2026, 11:25 AM EDT, his own typing:
    //   “NEKA BEATS MORE AND MORE CHARACTERS ON
    //   SURFACE, LUIGI INUS GETS THE GOLD ON BOTH
    //   SURFACE AND UNDERGROUND.”
    // Priors, each verified in the archive before it was drawn:
    //   WALK TOGETHER
    //     OCT 9, 7:45 PM: “NEKA AND LUIGI
    //     WALK TOGETHER.”
    //     TODAY THEY BOTH WALK, EACH FOR HIS OWN PRIZE.
    //   8.6 BILLION ON THE SURFACE
    //     OCT 9, 4:09 PM: “NEKA BEATEN ALL 8.6
    //     BILLION BEINGS IN THE OVERWORLD.”
    //     HE KEEPS BEATING MORE ON THE SURFACE.
    //   BOXES OF GOLD
    //     SEPT 8: “LUIGI GREEN GIVES WD BOXES OF
    //     GOLD.” OCT 9: “SAILED ACROSS THE 7 SEAS.”
    //     NOW THE GOLD IN BOTH PLACES IS HIS.
    const dt = c - 22996.0;
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
    const gr1058=ctx.createLinearGradient(0,top+H,0,top);
    gr1058.addColorStop(0,'rgba(110,220,140,0.22)'); gr1058.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1058.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1058; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(110,220,140,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NO ONE IS UNDERGROUND ANYMORE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA BEATS MORE AND MORE CHARACTERS ON', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SURFACE, LUIGI INUS GETS THE GOLD ON BOTH', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SURFACE AND UNDERGROUND.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 11:25 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1058=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(110,220,140,0.46)';
      ctx.fillRect(cx-W*0.352, ky1058, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(110,220,140,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1058, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(110,220,140,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WALK TOGETHER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9, 7:45 PM: “NEKA AND LUIGI', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WALK TOGETHER.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TODAY THEY BOTH WALK, EACH FOR HIS OWN PRIZE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('8.6 BILLION ON THE SURFACE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9, 4:09 PM: “NEKA BEATEN ALL 8.6', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BILLION BEINGS IN THE OVERWORLD.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE KEEPS BEATING MORE ON THE SURFACE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1058=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1058, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1058, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BOXES OF GOLD', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 8: “LUIGI GREEN GIVES WD BOXES OF', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GOLD.” OCT 9: “SAILED ACROSS THE 7 SEAS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE GOLD IN BOTH PLACES IS HIS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BECAUSE NO ONE IS UNDERGROUND ANYMORE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA AND LUIGI INUS BOTH WALK.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NO ONE IS UNDERGROUND ANYMORE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1059){
    // BEAT 1059: NEKA GOES WITH LUIGI INUS.
    // Toby, October 10, 2026, 11:30 AM EDT, his own typing:
    //   “LUIGI INUS HAS ALL THE CAT POWER NOW,
    //   NEKA HAS ALL THE LV NOW. SO NEKA WOULD
    //   GO WITH LUIGI INUS.”
    // Priors, each verified in the archive before it was drawn:
    //   MORE AND MORE LOVE
    //     OCT 9: RESETS EVERY RUN, “MORE AND MORE
    //     LOVE.” 9:47 AM: “STILL GETTING LV.”
    //     NOW: “NEKA HAS ALL THE LV NOW.”
    //   MAX CAT POWER
    //     9:47 AM: “THEN LUIGI INUS GAINED MAX
    //     CAT POWER.”
    //     NOW: “LUIGI INUS HAS ALL THE CAT POWER NOW.”
    //   THE MOST POWERFUL BESIDES NEKA
    //     OCT 9, 7:35 PM: “LUIGI/PIRATE IS THE MOST
    //     POWERFUL BESIDES NEKA.”
    //     NEUTRAL AND MAIN VILLIAN, GOING TOGETHER.
    const dt = c - 23018.0;
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
    const gr1059=ctx.createLinearGradient(0,top+H,0,top);
    gr1059.addColorStop(0,'rgba(255,96,96,0.22)'); gr1059.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1059.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1059; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,96,96,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA GOES WITH LUIGI INUS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI INUS HAS ALL THE CAT POWER NOW,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA HAS ALL THE LV NOW. SO NEKA WOULD', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GO WITH LUIGI INUS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 11:30 AM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1059=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,96,96,0.46)';
      ctx.fillRect(cx-W*0.352, ky1059, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,96,96,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1059, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,96,96,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MORE AND MORE LOVE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9: RESETS EVERY RUN, “MORE AND MORE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LOVE.” 9:47 AM: “STILL GETTING LV.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW: “NEKA HAS ALL THE LV NOW.”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('MAX CAT POWER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('9:47 AM: “THEN LUIGI INUS GAINED MAX', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CAT POWER.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW: “LUIGI INUS HAS ALL THE CAT POWER NOW.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1059=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1059, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1059, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL BESIDES NEKA', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9, 7:35 PM: “LUIGI/PIRATE IS THE MOST', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('POWERFUL BESIDES NEKA.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEUTRAL AND MAIN VILLIAN, GOING TOGETHER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE OVERWORLD, ERASED IN LIVES TOO.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('“SO NEKA WOULD GO WITH LUIGI INUS.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA GOES WITH LUIGI INUS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
