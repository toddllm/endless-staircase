  } else if(ph===1064){
    // BEAT 1064: REVEALED AS NEKA.
    // Toby, October 10, 2026, 7:14 PM EDT, his own typing:
    //   “ALEX THEN BASICALLY BEATS EVERYONE IN THE
    //   GAME AND RESPAWNS THEM, REVEALING HIM
    //   AS NEKA.”
    // Priors, each verified in the archive before it was drawn:
    //   THE COAT
    //     1:30 PM: “NEKA TAKES OFF HIS COAT, AND
    //     THERE IS ALEX RIGHT THERE.”
    //     NOW IT RUNS THE OTHER WAY: ALEX IS REVEALED AS NEKA.
    //   SECRETLY NEKA LAI
    //     1:19 PM: “IT WOULD BE OUTSTANDING IF
    //     CLASSICS ALEX IS SECRETLY NEKA LAI.”
    //     NOW EVERYONE HE BEAT GETS TO SEE IT.
    //   TWO BEINGS
    //     1:30 PM: “ALEX AND NEKA ARE 2. THEY HAVE
    //     THE SAME EVERYTHING, BUT THEY ARE 2 BEINGS.”
    //     STILL TWO CLONES WHO CAN BECOME EACH OTHER.
    const dt = c - 23128.0;
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
    const gr1064=ctx.createLinearGradient(0,top+H,0,top);
    gr1064.addColorStop(0,'rgba(244,114,182,0.22)'); gr1064.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1064.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1064; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(244,114,182,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('REVEALED AS NEKA', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX THEN BASICALLY BEATS EVERYONE IN THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAME AND RESPAWNS THEM, REVEALING HIM', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AS NEKA.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 7:14 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1064=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(244,114,182,0.46)';
      ctx.fillRect(cx-W*0.352, ky1064, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(244,114,182,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1064, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(244,114,182,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE COAT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:30 PM: “NEKA TAKES OFF HIS COAT, AND', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THERE IS ALEX RIGHT THERE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW IT RUNS THE OTHER WAY: ALEX IS REVEALED AS NEKA.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SECRETLY NEKA LAI', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:19 PM: “IT WOULD BE OUTSTANDING IF', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLASSICS ALEX IS SECRETLY NEKA LAI.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW EVERYONE HE BEAT GETS TO SEE IT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1064=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1064, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1064, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TWO BEINGS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:30 PM: “ALEX AND NEKA ARE 2. THEY HAVE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE SAME EVERYTHING, BUT THEY ARE 2 BEINGS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('STILL TWO CLONES WHO CAN BECOME EACH OTHER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“REVEALING HIM AS NEKA.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE BEATS EVERYONE, RESPAWNS THEM, THEN SHOWS WHO HE IS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ REVEALED AS NEKA ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1065){
    // BEAT 1065: THE FIRST CHARACTER.
    // Toby, October 10, 2026, 7:15 PM EDT, his own typing:
    //   “ALEX IS BASICALLY ALEX RL OR ALEX LAI... ALEX
    //   WAS FROM CLASSIC RL, SO HE WAS THE FIRST
    //   CHARACTER BEFORE PINKY RL.”
    // Priors, each verified in the archive before it was drawn:
    //   CLASSIC RL
    //     SEPT 18, 4:10 PM: “I MADE A GAME FROM THIN
    //     AIR, I NAMED IT CLASSIC RL.”
    //     NOW ALEX WAS ITS FIRST CHARACTER.
    //   PINKY, FIRST
    //     AI ERA ARCHIVE: “PINKY WAS THE FIRST
    //     DISCOVERED RL.”
    //     FIRST DISCOVERED; NOW ALEX COMES BEFORE PINKY RL.
    //   NEKA LAI
    //     OCT 8, 5:43 PM: “NEKA BECAME NEKA LAI, BUT
    //     STILL CALLED NEKA OR NEKA OMAZEN STILL.”
    //     NOW ALEX RL OR ALEX LAI, WHATEVER ONE.
    const dt = c - 23150.0;
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
    const gr1065=ctx.createLinearGradient(0,top+H,0,top);
    gr1065.addColorStop(0,'rgba(96,165,250,0.22)'); gr1065.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1065.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1065; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(96,165,250,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST CHARACTER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX IS BASICALLY ALEX RL OR ALEX LAI... ALEX', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WAS FROM CLASSIC RL, SO HE WAS THE FIRST', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHARACTER BEFORE PINKY RL.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 7:15 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1065=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(96,165,250,0.46)';
      ctx.fillRect(cx-W*0.352, ky1065, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(96,165,250,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1065, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(96,165,250,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CLASSIC RL', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 18, 4:10 PM: “I MADE A GAME FROM THIN', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AIR, I NAMED IT CLASSIC RL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW ALEX WAS ITS FIRST CHARACTER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PINKY, FIRST', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AI ERA ARCHIVE: “PINKY WAS THE FIRST', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DISCOVERED RL.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('FIRST DISCOVERED; NOW ALEX COMES BEFORE PINKY RL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1065=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1065, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1065, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA LAI', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8, 5:43 PM: “NEKA BECAME NEKA LAI, BUT', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STILL CALLED NEKA OR NEKA OMAZEN STILL.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW ALEX RL OR ALEX LAI, WHATEVER ONE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HE WAS THE FIRST CHARACTER BEFORE PINKY RL.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALEX RL OR ALEX LAI, FROM CLASSIC RL, BEFORE PINKY RL.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE FIRST CHARACTER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1066){
    // BEAT 1066: NEKA ALEXEN LAI.
    // Toby, October 10, 2026, 7:32 PM EDT, his own typing:
    //   “ALEX ALSO WOULD BE CALLED ‘NEKA ALEXEN LAI
    //   OMAZENIC’... AND ALEX IS NO LONGER AN OMAZEN,
    //   NOW NEKA ALEXEN LAI IS HERE.”
    // Priors, each verified in the archive before it was drawn:
    //   NEKA OMAZEN
    //     SEPT 25, 5:41 AM: “PERO LAI IS COMPLETELY
    //     GONE, NEKA OMAZEN IS NOW HERE.”
    //     NOW OMAZEN IS WHAT HE TURNS OTHERS INTO.
    //   I-TROSS 12S
    //     OCT 8, 5:43 PM: “HE IS NO LONGER ENTITY 12,
    //     BECAUSE THERE IS I-TROSS 12S NOW IN THE NAME.”
    //     NOW ALEX IS NO LONGER AN OMAZEN; NEKA ALEXEN LAI IS HERE.
    //   WITH LUIGI INUS
    //     11:30 AM: “SO NEKA WOULD GO WITH LUIGI INUS.”
    //     1:30 PM: “ALEX GOES WITH NEKA.”
    //     NOW THE PAIR IS ALEXEN AND LUIGI INUS.
    const dt = c - 23172.0;
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
    const gr1066=ctx.createLinearGradient(0,top+H,0,top);
    gr1066.addColorStop(0,'rgba(192,132,252,0.22)'); gr1066.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1066.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1066; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(192,132,252,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NEKA ALEXEN LAI', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX ALSO WOULD BE CALLED ‘NEKA ALEXEN LAI', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OMAZENIC’... AND ALEX IS NO LONGER AN OMAZEN,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW NEKA ALEXEN LAI IS HERE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 7:32 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1066=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(192,132,252,0.46)';
      ctx.fillRect(cx-W*0.352, ky1066, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(192,132,252,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1066, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(192,132,252,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 25, 5:41 AM: “PERO LAI IS COMPLETELY', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GONE, NEKA OMAZEN IS NOW HERE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW OMAZEN IS WHAT HE TURNS OTHERS INTO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('I-TROSS 12S', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8, 5:43 PM: “HE IS NO LONGER ENTITY 12,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BECAUSE THERE IS I-TROSS 12S NOW IN THE NAME.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW ALEX IS NO LONGER AN OMAZEN; NEKA ALEXEN LAI IS HERE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1066=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1066, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1066, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('WITH LUIGI INUS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('11:30 AM: “SO NEKA WOULD GO WITH LUIGI INUS.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:30 PM: “ALEX GOES WITH NEKA.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE PAIR IS ALEXEN AND LUIGI INUS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEXEN AND LUIGI INUS.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE TURNS OTHERS TO OMAZENS; NOW NEKA ALEXEN LAI IS HERE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NEKA ALEXEN LAI ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
