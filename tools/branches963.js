  } else if(ph===963){
    // BEAT 963: THE SHORT-NOSED MASK.
    // Toby, October 1, 2026, 4:44 PM EDT, his own typing:
    //   “NEKA OMAZEN WEARS A SHORT FACED PLAUGE DOCTOR MASK THAT FEELS AND LOOKS
    //   ROUGH, AND IT BLACK COLORED. HIS EYES CAN BE SEEN, AND HE HAS BLACK COLORED
    //   GLOVES ON. HE HANGS MANY OUTFITS UP, AND HE EVEN CLEANED HIS LABATORY.”
    // Priors, each verified in the archive before it was drawn:
    //   A SHORT NOSE
    //     A PLAUGE DOCTOR MASK, BUT THE NOSE PART IS SHORT.
    //     NORMALLY THAT STUFF HAS A LONG NOSE. ROUGH. BLACK.
    //     SEPT 16: PERO LAI WAS THE PLAUGE DOCTOR. THE MASK CAME BACK.
    //   EYES AND GLOVES
    //     HIS EYES CAN BE SEEN THROUGH IT.
    //     BLACK COLORED GLOVES ON BOTH HANDS.
    //     NOT A FACELESS MASK. YOU CAN STILL SEE HIM LOOKING.
    //   MANY OUTFITS
    //     HE HANGS MANY OUTFITS UP.
    //     AND HE EVEN CLEANED HIS LABATORY.
    //     THE LAB COAT IS ONE OUTFIT ON THE RACK. THERE ARE MORE.
    const dt = c - 20906.0;
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
    const gr963=ctx.createLinearGradient(0,top+H,0,top);
    gr963.addColorStop(0,'rgba(170,170,185,0.22)'); gr963.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr963.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr963; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,170,185,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE SHORT-NOSED MASK', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN WEARS A SHORT FACED PLAUGE DOCTOR MASK THAT FEELS AND LOOKS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ROUGH, AND IT BLACK COLORED. HIS EYES CAN BE SEEN, AND HE HAS BLACK COLORED', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GLOVES ON. HE HANGS MANY OUTFITS UP, AND HE EVEN CLEANED HIS LABATORY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:44 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky963=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,170,185,0.46)';
      ctx.fillRect(cx-W*0.352, ky963, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,170,185,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky963, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,170,185,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SHORT NOSE', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A PLAUGE DOCTOR MASK, BUT THE NOSE PART IS SHORT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NORMALLY THAT STUFF HAS A LONG NOSE. ROUGH. BLACK.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 16: PERO LAI WAS THE PLAUGE DOCTOR. THE MASK CAME BACK.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EYES AND GLOVES', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS EYES CAN BE SEEN THROUGH IT.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('BLACK COLORED GLOVES ON BOTH HANDS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOT A FACELESS MASK. YOU CAN STILL SEE HIM LOOKING.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy963=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy963, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy963, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('MANY OUTFITS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HANGS MANY OUTFITS UP.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND HE EVEN CLEANED HIS LABATORY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LAB COAT IS ONE OUTFIT ON THE RACK. THERE ARE MORE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SHORT BLACK MASK. EYES SHOWING.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A CLEAN LAB, FOR ONCE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE SHORT-NOSED MASK ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===964){
    // BEAT 964: LIKE ALWAYS!.
    // Toby, October 1, 2026, 4:44 PM EDT, his own typing:
    //   “EVERYTHING EVERYONE USES FAILS LIKE ALWAYS. NEKA OMAZEN SAYS “LIKE ALWAYS!”,
    //   PS-50 LOOKS AT NEKA OMAZEN, NEKA OMAZEN’S OUTFIT CHANGES TO HIS LAB SUIT.
    //   PS-50 SAYS “NEKA, DESTROY ALL THE OTHER CHARACTERS HERE.””
    // Priors, each verified in the archive before it was drawn:
    //   LIKE ALWAYS!
    //     EVERYTHING EVERYONE USES FAILS.
    //     AND THIS TIME NEKA SAYS IT HIMSELF: “LIKE ALWAYS!”
    //     SEPT 26: “EVERYTHING PS-50 DID FAILED, LIKE ALWAYS!”
    //   THE LAB SUIT
    //     PS-50 LOOKS AT HIM. HIS OUTFIT CHANGES TO HIS LAB SUIT.
    //     HIS EYES LOOK AT PS-50.
    //     HER GAZE NEVER WORKED ON HIM BEFORE. NOW HIS CLOTHES CHANGE.
    //   ALL THE OTHER CHARACTERS
    //     “NEKA, DESTROY ALL THE OTHER CHARACTERS HERE.”
    //     NEKA OMAZEN DESTROYED ALL THE OTHER CHARACTERS IN BATTLE.
    //     SHE GIVES THE ORDER. HE DOES ALL THE FIGHTING.
    const dt = c - 20928.0;
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
    const gr964=ctx.createLinearGradient(0,top+H,0,top);
    gr964.addColorStop(0,'rgba(255,90,90,0.22)'); gr964.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr964.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr964; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('LIKE ALWAYS!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“EVERYTHING EVERYONE USES FAILS LIKE ALWAYS. NEKA OMAZEN SAYS “LIKE ALWAYS!”,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 LOOKS AT NEKA OMAZEN, NEKA OMAZEN’S OUTFIT CHANGES TO HIS LAB SUIT.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 SAYS “NEKA, DESTROY ALL THE OTHER CHARACTERS HERE.””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:44 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky964=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky964, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky964, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LIKE ALWAYS!', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING EVERYONE USES FAILS.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND THIS TIME NEKA SAYS IT HIMSELF: “LIKE ALWAYS!”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 26: “EVERYTHING PS-50 DID FAILED, LIKE ALWAYS!”', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE LAB SUIT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 LOOKS AT HIM. HIS OUTFIT CHANGES TO HIS LAB SUIT.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HIS EYES LOOK AT PS-50.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HER GAZE NEVER WORKED ON HIM BEFORE. NOW HIS CLOTHES CHANGE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy964=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy964, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy964, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ALL THE OTHER CHARACTERS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA, DESTROY ALL THE OTHER CHARACTERS HERE.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN DESTROYED ALL THE OTHER CHARACTERS IN BATTLE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE GIVES THE ORDER. HE DOES ALL THE FIGHTING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE FAILS. NEKA DOES NOT.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('BUT WHO IS GIVING THE ORDERS?', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ LIKE ALWAYS! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===965){
    // BEAT 965: YOU ARE MINE.
    // Toby, October 1, 2026, 4:48 PM EDT, his own typing:
    //   “PS-50 IS HYPNOTISING NEKA OMAZEN. LUIGI TOUCHED NEKA OMAZEN, NEKA OMAZEN
    //   TURNS AND LOOKS AT PS-50, AND A MESSAGE APPEARS IN HER MIND. “YOU ARE PS-50,
    //   YOU ARE LUIGI INUS, YOU ARE LUIGI GREEN, YOU ARE MINE, YOU ARE SAFE HERE.””
    // Priors, each verified in the archive before it was drawn:
    //   HYPNOTISING
    //     ANSWER: PS-50 IS HYPNOTISING NEKA OMAZEN.
    //     THE LAB SUIT, THE ORDER, THE BATTLE. IT WAS HER.
    //     TOBY ANSWERED HIS OWN QUESTION FOUR MINUTES LATER.
    //   IT TURNS AROUND
    //     LUIGI TOUCHED NEKA. NEKA TURNS AND LOOKS AT PS-50.
    //     MORE AND MORE IMAGES OF NEKA FLYING, IN HER MIND.
    //     “DO NOT BE AFRAID OF ME, NOR ANYONE, I AM WITH YOU.”
    //   THREE NAMES
    //     “YOU ARE PS-50, YOU ARE LUIGI INUS, YOU ARE LUIGI GREEN.”
    //     “I KNOW YOU FAIL ALL THE TIME, I KNOW YOU.”
    //     LUIGI INUS IS THE NAME NEKA GAVE LUIGI GREEN.
    const dt = c - 20950.0;
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
    const gr965=ctx.createLinearGradient(0,top+H,0,top);
    gr965.addColorStop(0,'rgba(200,120,255,0.22)'); gr965.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr965.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr965; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE MINE', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 IS HYPNOTISING NEKA OMAZEN. LUIGI TOUCHED NEKA OMAZEN, NEKA OMAZEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TURNS AND LOOKS AT PS-50, AND A MESSAGE APPEARS IN HER MIND. “YOU ARE PS-50,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('YOU ARE LUIGI INUS, YOU ARE LUIGI GREEN, YOU ARE MINE, YOU ARE SAFE HERE.””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:48 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky965=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky965, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky965, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HYPNOTISING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ANSWER: PS-50 IS HYPNOTISING NEKA OMAZEN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE LAB SUIT, THE ORDER, THE BATTLE. IT WAS HER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY ANSWERED HIS OWN QUESTION FOUR MINUTES LATER.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IT TURNS AROUND', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LUIGI TOUCHED NEKA. NEKA TURNS AND LOOKS AT PS-50.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MORE AND MORE IMAGES OF NEKA FLYING, IN HER MIND.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“DO NOT BE AFRAID OF ME, NOR ANYONE, I AM WITH YOU.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy965=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy965, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy965, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THREE NAMES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“YOU ARE PS-50, YOU ARE LUIGI INUS, YOU ARE LUIGI GREEN.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I KNOW YOU FAIL ALL THE TIME, I KNOW YOU.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('LUIGI INUS IS THE NAME NEKA GAVE LUIGI GREEN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“DO NOT RUN, DO NOT HIDE, YOU ARE FREE.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('“YOU ARE MINE, YOU ARE SAFE HERE.”', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ YOU ARE MINE ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===966){
    // BEAT 966: THE MEGA STAR.
    // Toby, October 1, 2026, 4:49 PM EDT, his own typing:
    //   “PS-50 SNAPS OUT OF IT, PS-50 STANDS IN NEKA’S CREATION.
    //   PS-50 LOOKS AROUND AND SEES THAT SHE IS JUST A TINY MASS
    //   IN THE HUGE CREATION OF THE MEGA STAR.”
    // Priors, each verified in the archive before it was drawn:
    //   SNAPS OUT OF IT
    //     THE MESSAGE ENDS. PS-50 SNAPS OUT OF IT.
    //     SHE IS NOT WHERE SHE WAS.
    //     SHE TRIED TO HYPNOTISE HIM. HE SHOWED HER WHERE SHE IS.
    //   NEKA’S CREATION
    //     PS-50 STANDS IN NEKA’S CREATION.
    //     IT IS HUGE. IT IS CALLED THE MEGA STAR.
    //     “YOU ARE SAFE HERE.” HERE IS INSIDE SOMETHING HE MADE.
    //   A TINY MASS
    //     PS-50 LOOKS AROUND.
    //     SHE IS JUST A TINY MASS INSIDE IT.
    //     THE ONE WHO GIVES ORDERS IS A SPECK IN HIS STAR.
    const dt = c - 20972.0;
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
    const gr966=ctx.createLinearGradient(0,top+H,0,top);
    gr966.addColorStop(0,'rgba(255,210,90,0.22)'); gr966.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr966.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr966; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,210,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE MEGA STAR', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“PS-50 SNAPS OUT OF IT, PS-50 STANDS IN NEKA’S CREATION.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PS-50 LOOKS AROUND AND SEES THAT SHE IS JUST A TINY MASS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('IN THE HUGE CREATION OF THE MEGA STAR.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 4:49 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky966=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,210,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky966, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,210,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky966, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,210,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SNAPS OUT OF IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE MESSAGE ENDS. PS-50 SNAPS OUT OF IT.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE IS NOT WHERE SHE WAS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE TRIED TO HYPNOTISE HIM. HE SHOWED HER WHERE SHE IS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S CREATION', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 STANDS IN NEKA’S CREATION.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT IS HUGE. IT IS CALLED THE MEGA STAR.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“YOU ARE SAFE HERE.” HERE IS INSIDE SOMETHING HE MADE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy966=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy966, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy966, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A TINY MASS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PS-50 LOOKS AROUND.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SHE IS JUST A TINY MASS INSIDE IT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONE WHO GIVES ORDERS IS A SPECK IN HIS STAR.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A HUGE STAR. A TINY PS-50.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('AND THE MEGA STAR IS THE SMALL ONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE MEGA STAR ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===967){
    // BEAT 967: THE ULTIMATE MASS.
    // Toby, October 1, 2026, 5:02 PM EDT, his own typing:
    //   “THE MEGA STAR IS WAY SMALLER THAN PRESSURE, AND PRESSURE AND CLASSICS ARE
    //   INTO THE ULTIMATE MASS. NEKA MADE IT ALL. IT IS KNOWN AS THE GRAND JUDGEMENT
    //   HALL. NEKA OMAZEN IS EVEN LARGER THAN THE ULTIMATE MASS.”
    // Priors, each verified in the archive before it was drawn:
    //   SMALLEST TO LARGEST
    //     MEGA STAR < PRESSURE < THE ULTIMATE MASS < NEKA OMAZEN.
    //     PRESSURE AND CLASSICS ARE BOTH INSIDE THE ULTIMATE MASS.
    //     AND NEKA OMAZEN CAN CONSUME IT ALL.
    //   THE GRAND JUDGEMENT HALL
    //     IT CONTAINS THE JUDGEMENT HALL, THE ERROR HALL,
    //     AND ALL THE HALL VERSIONS.
    //     JULY 26 THE ERROR HALL REPLACED THE JUDGEMENT HALL. NOW BOTH ARE ROOMS IN ONE.
    //   EVEN EVERYTHING
    //     MILLIONS, TRILLIONS, QUADRILLIONS, QUAQUINGAGINTALLARDS,
    //     GOOGLEPLEXES, INFINITIES. ALL FICTION. THE BARRIER. THE REALITIES.
    //     IT ALSO CONTAINS EVEN EVERYTHING.
    const dt = c - 20994.0;
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
    const gr967=ctx.createLinearGradient(0,top+H,0,top);
    gr967.addColorStop(0,'rgba(120,230,200,0.22)'); gr967.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr967.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr967; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,230,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE ULTIMATE MASS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE MEGA STAR IS WAY SMALLER THAN PRESSURE, AND PRESSURE AND CLASSICS ARE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('INTO THE ULTIMATE MASS. NEKA MADE IT ALL. IT IS KNOWN AS THE GRAND JUDGEMENT', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HALL. NEKA OMAZEN IS EVEN LARGER THAN THE ULTIMATE MASS.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 1, 5:02 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky967=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,230,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky967, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,230,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky967, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,230,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SMALLEST TO LARGEST', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MEGA STAR < PRESSURE < THE ULTIMATE MASS < NEKA OMAZEN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRESSURE AND CLASSICS ARE BOTH INSIDE THE ULTIMATE MASS.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AND NEKA OMAZEN CAN CONSUME IT ALL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GRAND JUDGEMENT HALL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('IT CONTAINS THE JUDGEMENT HALL, THE ERROR HALL,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AND ALL THE HALL VERSIONS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('JULY 26 THE ERROR HALL REPLACED THE JUDGEMENT HALL. NOW BOTH ARE ROOMS IN ONE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy967=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy967, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy967, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVEN EVERYTHING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('MILLIONS, TRILLIONS, QUADRILLIONS, QUAQUINGAGINTALLARDS,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GOOGLEPLEXES, INFINITIES. ALL FICTION. THE BARRIER. THE REALITIES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT ALSO CONTAINS EVEN EVERYTHING.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA MADE IT ALL.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN IS LARGER THAN ALL OF IT.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE ULTIMATE MASS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
