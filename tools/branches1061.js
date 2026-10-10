  } else if(ph===1061){
    // BEAT 1061: THE PIRATE MUSIC.
    // Toby, October 10, 2026, 1:19 PM EDT, his own typing:
    //   “LUIGI INUS HAS THE ‘DUM DUN DUN DA DUM DUN DUN
    //   DUN DUN’ PIRATE MUSIC. ALEX BASICALLY STARTS
    //   BEATING MORE AND MORE IN SUPREME MATE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE SEVEN SEAS
    //     OCT 9, 7:39 PM: “SAILED ACROSS THE 7 SEAS,
    //     LOOKING FOR POWERFUL ARTIFACTS.”
    //     NOW THE PIRATE HAS HIS OWN PIRATE THEME.
    //   SUPREME MATE
    //     THE OLD ARCHIVE: “ALEX WINS SUPREME MATE
    //     BECAUSE HE MADE THAT GAME.”
    //     NOW EVERY WIN RAISES ALEX’S POWER LEVEL.
    //   SECRETLY NEKA LAI?
    //     1:19 PM: “IT WOULD BE OUTSTANDING IF CLASSICS
    //     ALEX IS SECRETLY NEKA LAI.”
    //     1:20 PM: “ALEX COULD PRETEND TO LOSE.” LEFT OPEN HERE.
    const dt = c - 23062.0;
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
    const gr1061=ctx.createLinearGradient(0,top+H,0,top);
    gr1061.addColorStop(0,'rgba(255,150,60,0.22)'); gr1061.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1061.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1061; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE PIRATE MUSIC', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“LUIGI INUS HAS THE ‘DUM DUN DUN DA DUM DUN DUN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('DUN DUN’ PIRATE MUSIC. ALEX BASICALLY STARTS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEATING MORE AND MORE IN SUPREME MATE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 1:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1061=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1061, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1061, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SEVEN SEAS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 9, 7:39 PM: “SAILED ACROSS THE 7 SEAS,', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LOOKING FOR POWERFUL ARTIFACTS.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW THE PIRATE HAS HIS OWN PIRATE THEME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SUPREME MATE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE OLD ARCHIVE: “ALEX WINS SUPREME MATE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BECAUSE HE MADE THAT GAME.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW EVERY WIN RAISES ALEX’S POWER LEVEL.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1061=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1061, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1061, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('SECRETLY NEKA LAI?', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('1:19 PM: “IT WOULD BE OUTSTANDING IF CLASSICS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEX IS SECRETLY NEKA LAI.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('1:20 PM: “ALEX COULD PRETEND TO LOSE.” LEFT OPEN HERE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“INCREASING ALEX’S POWER LEVEL.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ELEVEN MINUTES LATER, NEKA TAKES OFF HIS COAT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE PIRATE MUSIC ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1062){
    // BEAT 1062: ALEX AND NEKA ARE 2.
    // Toby, October 10, 2026, 1:30 PM EDT, his own typing:
    //   “NEKA TAKES OFF HIS COAT, AND THERE IS ALEX
    //   RIGHT THERE... ALEX AND NEKA ARE 2. THEY HAVE
    //   THE SAME EVERYTHING, BUT THEY ARE 2 BEINGS.”
    // Priors, each verified in the archive before it was drawn:
    //   PRESSURETALE ALEX
    //     OCT 7: “NEKA AND CODE MERGED AND BECAME
    //     BASICALLY PRESSURETALE ALEX KNOWN AS NEKA.”
    //     NOW: TWO BEINGS, SAME EVERYTHING, CLONES OF EACH OTHER.
    //   GREG AND GASTER
    //     THE OLD ARCHIVE: “GREG IS THE MAN IN THE
    //     GREEN SHIRT, ALEX WITH THE BLUE.”
    //     NOW GREG AND GASTER ARE CLONES TOO.
    //   THE FACELESS DOLL
    //     SEPT 29: “FACELESS DOLL IS A DOLL WHERE
    //     LUIGI GREEN ERASED THE FACE.”
    //     NOW SHE ERASES BORT’S FACE, AND THE TWO DOLLS COMBINE.
    const dt = c - 23084.0;
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
    const gr1062=ctx.createLinearGradient(0,top+H,0,top);
    gr1062.addColorStop(0,'rgba(120,255,200,0.22)'); gr1062.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1062.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1062; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,255,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ALEX AND NEKA ARE 2', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA TAKES OFF HIS COAT, AND THERE IS ALEX', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('RIGHT THERE... ALEX AND NEKA ARE 2. THEY HAVE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SAME EVERYTHING, BUT THEY ARE 2 BEINGS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 10, 1:30 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1062=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,255,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1062, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,255,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1062, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,255,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PRESSURETALE ALEX', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 7: “NEKA AND CODE MERGED AND BECAME', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BASICALLY PRESSURETALE ALEX KNOWN AS NEKA.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW: TWO BEINGS, SAME EVERYTHING, CLONES OF EACH OTHER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GREG AND GASTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE OLD ARCHIVE: “GREG IS THE MAN IN THE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GREEN SHIRT, ALEX WITH THE BLUE.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW GREG AND GASTER ARE CLONES TOO.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1062=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1062, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1062, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE FACELESS DOLL', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29: “FACELESS DOLL IS A DOLL WHERE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI GREEN ERASED THE FACE.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOW SHE ERASES BORT’S FACE, AND THE TWO DOLLS COMBINE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“YOU WEREN’T FROM THIS WORLD... I AM.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ALEX MOVES SO FAST YOU NEED TO PAUSE THE GAME TO SEE HIM.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ALEX AND NEKA ARE 2 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
