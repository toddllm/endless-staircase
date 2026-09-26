  } else if(ph===893){
    // BEAT 893: THE REAL ONE HAS A BRAIN.
    // Toby, September 26, 2026, 5:37 PM EDT, his own typing:
    //   “THE REAL ONE HAS A BRAIN, GOT IT? PS-50 HAS INTELEGENCE OF A MAN, AND THE FORM OF A CHILD.
    //   SHE HAS ALL LUIGI GREEN’S MEMORIES STORED, IT DOESN’T INSTANTLY GIVE YOU PARANOID, IT TAKES TIME,
    //   BLUR INCREASES, THEN BLACKOUT, THEN WOULD BE THE PARANOID.”
    // Priors, each verified in the archive before it was drawn:
    //   NOT JUST A KID WITH DOLLS
    //     4:21 PM: “BASICALLY A 5 YEAR OLD CHILD FEMALE WHO JUST HAS DOLLS.”
    //     5:37 PM: THE FORM OF A CHILD, THE INTELLIGENCE OF A MAN.
    //     SHE LOOKS FIVE. SHE THINKS LIKE LUIGI GREEN.
    //   ALL HIS MEMORIES
    //     5:00 PM: “EVERYTHING WAS ERASED OF HIM EXCEPT HIS MEMORIES.”
    //     NOW: ALL OF LUIGI GREEN’S MEMORIES, STORED IN HER.
    //     SHE REMEMBERS BEING HIM. SHE KNOWS WHAT SHE IS DOING.
    //   NO MORE “BOOM”
    //     4:21 PM IT WAS INSTANT: “WHOEVER LOOKS AT HER, BOOM.”
    //     NOW IT TAKES TIME: BLUR, MORE BLUR, BLACKOUT, AND ONLY THEN PARANOIA.
    //     YOU CAN TALK TO HER FOR A WHILE BEFORE YOU NOTICE.
    const dt = c - 19366.0;
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
    const gr893=ctx.createLinearGradient(0,top+H,0,top);
    gr893.addColorStop(0,'rgba(255,45,181,0.22)'); gr893.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr893.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr893; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE REAL ONE HAS A BRAIN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE REAL ONE HAS A BRAIN, GOT IT? PS-50 HAS INTELEGENCE OF A MAN, AND THE FORM OF A CHILD.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SHE HAS ALL LUIGI GREEN’S MEMORIES STORED, IT DOESN’T INSTANTLY GIVE YOU PARANOID, IT TAKES TIME,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BLUR INCREASES, THEN BLACKOUT, THEN WOULD BE THE PARANOID.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 5:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky893=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,45,181,0.46)';
      ctx.fillRect(cx-W*0.352, ky893, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky893, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,45,181,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT JUST A KID WITH DOLLS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:21 PM: “BASICALLY A 5 YEAR OLD CHILD FEMALE WHO JUST HAS DOLLS.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:37 PM: THE FORM OF A CHILD, THE INTELLIGENCE OF A MAN.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE LOOKS FIVE. SHE THINKS LIKE LUIGI GREEN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ALL HIS MEMORIES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5:00 PM: “EVERYTHING WAS ERASED OF HIM EXCEPT HIS MEMORIES.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW: ALL OF LUIGI GREEN’S MEMORIES, STORED IN HER.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('SHE REMEMBERS BEING HIM. SHE KNOWS WHAT SHE IS DOING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy893=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy893, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy893, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NO MORE “BOOM”', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:21 PM IT WAS INSTANT: “WHOEVER LOOKS AT HER, BOOM.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW IT TAKES TIME: BLUR, MORE BLUR, BLACKOUT, AND ONLY THEN PARANOIA.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('YOU CAN TALK TO HER FOR A WHILE BEFORE YOU NOTICE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE BLUR COMES FIRST', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BY THE TIME IT GOES BLACK, IT IS ALREADY TOO LATE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE REAL ONE HAS A BRAIN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
