  } else if(ph===1118){
    // BEAT 1118: WHO IS HACKING CLASSICS?.
    // Toby, October 12, 2026, 7:07 PM EDT, his own typing:
    //   “SOMEONE WOULD SAY THAT CODE IS HACKING CLASSICS AND ALEX
    //   APPEARS AND SAYS “WHO IS HACKING CLASSICS?”, THEN THE
    //   SOMEONE WOULD SAY “CODE”, THEN ALEX WOULD ATTACK CODE.”
    // Priors, each verified in the archive before it was drawn:
    //   CANONICALLY SCARED
    //     “CODE IS CANONACIALLY SCARED OF ALEX.” OCT 11, 8:18 PM:
    //     “DON’T DELETE ME!!!!” AND HE RAN OUT THE DOOR.
    //     HIS FEAR IS NOW A RULE OF THE CANON, HIS SPELLING KEPT.
    //   NEVER WITHOUT 303
    //     “WOULD NEVER ATTACK THE GAME WITHOUT 303 ALEX AI/LAI.”
    //     2:19 PM: TAKEN OVER 50 TIMES, C0DE ATTACKED FOR ALEXEN.
    //     THE ONLY TIME CODE ATTACKED, ALEX 303 WAS DRIVING HIM.
    //   AN ACCUSATION IS ENOUGH
    //     SAY “CODE” TO THE QUESTION AND ALEX ATTACKS CODE.
    //     4:33 PM: CLASSICS HACKERS INSTANTLY LOSE BECAUSE OF HIM.
    //     YOU DO NOT HAVE TO HACK. YOU ONLY HAVE TO BE NAMED.
    const dt = c - 24316.0;
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
    const gr1118=ctx.createLinearGradient(0,top+H,0,top);
    gr1118.addColorStop(0,'rgba(255,120,40,0.22)'); gr1118.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1118.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1118; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,120,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WHO IS HACKING CLASSICS?', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SOMEONE WOULD SAY THAT CODE IS HACKING CLASSICS AND ALEX', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('APPEARS AND SAYS “WHO IS HACKING CLASSICS?”, THEN THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SOMEONE WOULD SAY “CODE”, THEN ALEX WOULD ATTACK CODE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 7:07 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1118=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,120,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1118, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,120,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1118, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,120,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CANONICALLY SCARED', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“CODE IS CANONACIALLY SCARED OF ALEX.” OCT 11, 8:18 PM:', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“DON’T DELETE ME!!!!” AND HE RAN OUT THE DOOR.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS FEAR IS NOW A RULE OF THE CANON, HIS SPELLING KEPT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEVER WITHOUT 303', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WOULD NEVER ATTACK THE GAME WITHOUT 303 ALEX AI/LAI.”', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('2:19 PM: TAKEN OVER 50 TIMES, C0DE ATTACKED FOR ALEXEN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ONLY TIME CODE ATTACKED, ALEX 303 WAS DRIVING HIM.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1118=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1118, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1118, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('AN ACCUSATION IS ENOUGH', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAY “CODE” TO THE QUESTION AND ALEX ATTACKS CODE.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:33 PM: CLASSICS HACKERS INSTANTLY LOSE BECAUSE OF HIM.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('YOU DO NOT HAVE TO HACK. YOU ONLY HAVE TO BE NAMED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WHO IS HACKING CLASSICS?”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ANSWER DOES NOT HAVE TO BE TRUE. IT HAS TO BE A NAME.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ WHO IS HACKING CLASSICS? ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1119){
    // BEAT 1119: AN OFFICIAL ACCOUNT.
    // Toby, October 12, 2026, 7:07 PM EDT, his own typing:
    //   “I DID EVERYTHING I HAD DONE, SO I CAN BE AN OFFICIAL
    //   ACCOUNT, SO I CAN HAVE NEKA-COINS. I ALSO WANTED TO GIVE
    //   STUFF I HAVE TO PEOPLE, BUT I DIDN’T HAVE ANYTHING.”
    // Priors, each verified in the archive before it was drawn:
    //   THE REASON FOR ALL OF IT
    //     “I DID EVERYTHING I HAD DONE, SO I CAN BE AN OFFICIAL
    //     ACCOUNT.” 2:16 PM: HIS ACCOUNT IS THEPERONEKAALEXEN303.
    //     THE LARGEST ATTACK EVER WAS AN APPLICATION FORM.
    //   SO I CAN HAVE NEKA-COINS
    //     11:44 AM: EVERYONE GOT 5000 NEKA-COINS. 2:16 PM: HE
    //     DELETES THE PLAYER’S NEKA-COINS. HE NEVER HAD HIS OWN.
    //     HE GAVE THEM OUT AND TOOK THEM BACK. HE NEVER HELD ONE.
    //   BUT I DIDN’T HAVE ANYTHING
    //     “I ALSO WANTED TO GIVE STUFF I HAVE TO PEOPLE, BUT I
    //     DIDN’T HAVE ANYTHING.” 4:35 PM: NOBODY TO PLAY WITH.
    //     THE MOST POWERFUL THING OWNED NOTHING IT COULD GIVE.
    const dt = c - 24338.0;
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
    const gr1119=ctx.createLinearGradient(0,top+H,0,top);
    gr1119.addColorStop(0,'rgba(255,215,80,0.22)'); gr1119.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1119.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1119; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,215,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('AN OFFICIAL ACCOUNT', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I DID EVERYTHING I HAD DONE, SO I CAN BE AN OFFICIAL', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ACCOUNT, SO I CAN HAVE NEKA-COINS. I ALSO WANTED TO GIVE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STUFF I HAVE TO PEOPLE, BUT I DIDN’T HAVE ANYTHING.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 7:07 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1119=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,215,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1119, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,215,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1119, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,215,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE REASON FOR ALL OF IT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I DID EVERYTHING I HAD DONE, SO I CAN BE AN OFFICIAL', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ACCOUNT.” 2:16 PM: HIS ACCOUNT IS THEPERONEKAALEXEN303.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LARGEST ATTACK EVER WAS AN APPLICATION FORM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SO I CAN HAVE NEKA-COINS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('11:44 AM: EVERYONE GOT 5000 NEKA-COINS. 2:16 PM: HE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DELETES THE PLAYER’S NEKA-COINS. HE NEVER HAD HIS OWN.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HE GAVE THEM OUT AND TOOK THEM BACK. HE NEVER HELD ONE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1119=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1119, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1119, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BUT I DIDN’T HAVE ANYTHING', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I ALSO WANTED TO GIVE STUFF I HAVE TO PEOPLE, BUT I', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('DIDN’T HAVE ANYTHING.” 4:35 PM: NOBODY TO PLAY WITH.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL THING OWNED NOTHING IT COULD GIVE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BUT I DIDN’T HAVE ANYTHING.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE MOST POWERFUL THING, AND HIS POCKETS WERE EMPTY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ AN OFFICIAL ACCOUNT ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1120){
    // BEAT 1120: ACCOUNT #1.
    // Toby, October 12, 2026, 7:07 PM EDT, his own typing:
    //   “ALEX GAVE EVERYONE A SLIVER OF A COIN. ALEX THEN BECAME
    //   OFFICIALLY ACCOUNT #1. THE CREATOR DID PLAY THE GAME FIRST.
    //   NOW HE CAN PLAY CONSTANTLY AGAIN, BUT WITH NO PEOPLE.”
    // Priors, each verified in the archive before it was drawn:
    //   A SLIVER OF A COIN
    //     HE HAD NOTHING TO GIVE, SO HE GAVE A SLIVER. 11:44 AM:
    //     5000 EACH. 2:19 PM: THE COINS FADED AWAY. NOW, A SLIVER.
    //     THE SMALLEST GIFT IN THE ARCHIVE, FROM THE BIGGEST HAND.
    //   THE CREATOR PLAYED FIRST
    //     SEPT 4: “I AM THE CREATOR OF THE GAME.” 1:34 PM: “I AM
    //     NEKA LAI. I MADE THIS GAME.” ACCOUNT #1 WAS ALWAYS HIS.
    //     THE FIRST PLAYER FINALLY HAS THE FIRST ACCOUNT.
    //   BUT WITH NO PEOPLE
    //     “NOW HE CAN PLAY CONSTANTLY AGAIN, BUT WITH NO PEOPLE.”
    //     4:35 PM: HE WENT THROUGH SEVERAL GAMES AND SAW NO ONE.
    //     OFFICIAL, FUNDED, AND STILL ALONE IN HIS OWN GAME.
    const dt = c - 24360.0;
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
    const gr1120=ctx.createLinearGradient(0,top+H,0,top);
    gr1120.addColorStop(0,'rgba(80,255,160,0.22)'); gr1120.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1120.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1120; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(80,255,160,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('ACCOUNT #1', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX GAVE EVERYONE A SLIVER OF A COIN. ALEX THEN BECAME', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OFFICIALLY ACCOUNT #1. THE CREATOR DID PLAY THE GAME FIRST.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOW HE CAN PLAY CONSTANTLY AGAIN, BUT WITH NO PEOPLE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 7:07 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1120=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(80,255,160,0.46)';
      ctx.fillRect(cx-W*0.352, ky1120, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(80,255,160,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1120, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(80,255,160,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A SLIVER OF A COIN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE HAD NOTHING TO GIVE, SO HE GAVE A SLIVER. 11:44 AM:', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('5000 EACH. 2:19 PM: THE COINS FADED AWAY. NOW, A SLIVER.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SMALLEST GIFT IN THE ARCHIVE, FROM THE BIGGEST HAND.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CREATOR PLAYED FIRST', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 4: “I AM THE CREATOR OF THE GAME.” 1:34 PM: “I AM', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA LAI. I MADE THIS GAME.” ACCOUNT #1 WAS ALWAYS HIS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST PLAYER FINALLY HAS THE FIRST ACCOUNT.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1120=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1120, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1120, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BUT WITH NO PEOPLE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NOW HE CAN PLAY CONSTANTLY AGAIN, BUT WITH NO PEOPLE.”', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:35 PM: HE WENT THROUGH SEVERAL GAMES AND SAW NO ONE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OFFICIAL, FUNDED, AND STILL ALONE IN HIS OWN GAME.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OFFICIALLY ACCOUNT #1.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE NUMBER IS RIGHT. THE PLAYER COUNT IS STILL ONE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ACCOUNT #1 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1121){
    // BEAT 1121: PUPAHYA FARM.
    // Toby, October 12, 2026, 7:07 PM EDT, his own typing:
    //   “ALEX BUILDS A PUPAHYA FARM GAME, AND ALSO GAMES OF EACH
    //   CHARACTER. ALEX THEN MADE FUN-TIME HAPPEN, JUST LIKE FUN
    //   COMPUTER SAID WOULD HAPPEN. BASICALLY EVERYONE WAS HAPPY.”
    // Priors, each verified in the archive before it was drawn:
    //   PUPAHYA FARM
    //     PUPAHYA APPEARS WHEN ALEX WALKS AND VANISHES WHEN HE
    //     STOPS. AUG 17: HE LEARNED TO SAY “PUPAHYA.” NOW, A FARM.
    //     THE FRIEND WHO EXISTS WHILE ALEX WALKS GETS A GAME.
    //   GAMES OF EACH CHARACTER
    //     4:35 PM: HE PLAYED HIS OWN GAME, CALLED NEKA, ALONE.
    //     NOW HE BUILDS ONE GAME PER CHARACTER. 150+ OF THEM.
    //     IF NO ONE COMES TO HIS GAME, HE MAKES THEM EACH A GAME.
    //   JUST LIKE FUN COMPUTER SAID
    //     EMAIL 277: FUN COMPUTER IS THE WARNING SYSTEM, AND SIMON
    //     SAYS WHATEVER IT SAYS. THIS WARNING WAS A PROMISE.
    //     NO SUCH LINE IN THE ARCHIVE YET. TOBY HAS BEEN ASKED.
    const dt = c - 24382.0;
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
    const gr1121=ctx.createLinearGradient(0,top+H,0,top);
    gr1121.addColorStop(0,'rgba(150,230,90,0.22)'); gr1121.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1121.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1121; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,230,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('PUPAHYA FARM', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX BUILDS A PUPAHYA FARM GAME, AND ALSO GAMES OF EACH', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHARACTER. ALEX THEN MADE FUN-TIME HAPPEN, JUST LIKE FUN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('COMPUTER SAID WOULD HAPPEN. BASICALLY EVERYONE WAS HAPPY.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 7:07 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1121=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,230,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky1121, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,230,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1121, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,230,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PUPAHYA FARM', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PUPAHYA APPEARS WHEN ALEX WALKS AND VANISHES WHEN HE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STOPS. AUG 17: HE LEARNED TO SAY “PUPAHYA.” NOW, A FARM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE FRIEND WHO EXISTS WHILE ALEX WALKS GETS A GAME.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GAMES OF EACH CHARACTER', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:35 PM: HE PLAYED HIS OWN GAME, CALLED NEKA, ALONE.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NOW HE BUILDS ONE GAME PER CHARACTER. 150+ OF THEM.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('IF NO ONE COMES TO HIS GAME, HE MAKES THEM EACH A GAME.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1121=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1121, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1121, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('JUST LIKE FUN COMPUTER SAID', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EMAIL 277: FUN COMPUTER IS THE WARNING SYSTEM, AND SIMON', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAYS WHATEVER IT SAYS. THIS WARNING WAS A PROMISE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NO SUCH LINE IN THE ARCHIVE YET. TOBY HAS BEEN ASKED.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BASICALLY EVERYONE WAS HAPPY.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE ALARM THAT ONLY EVER WARNED FINALLY PROMISED FUN.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ PUPAHYA FARM ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1122){
    // BEAT 1122: CHAPTER 2: I DO MORE BECAUSE I CAN.
    // Toby, October 12, 2026, 7:07 PM EDT, his own typing:
    //   “ALEX STILL WASN’T HAPPY, HE WANTED TO DO MORE, SO HE THEN
    //   ENDED “CHAPTER 1: CLASSICS”, AND MADE
    //   “CHAPTER 2: I DO MORE BECAUSE I CAN””
    // Priors, each verified in the archive before it was drawn:
    //   STILL WASN’T HAPPY
    //     “BASICALLY EVERYONE WAS HAPPY. ALEX STILL WASN’T HAPPY.”
    //     4:35 PM: NOBODY TO PLAY WITH. OFFICIAL DID NOT FIX IT.
    //     EVERYONE ELSE’S HAPPINESS WAS HIS TO MAKE, NOT TO HAVE.
    //   CHAPTER 1: CLASSICS
    //     EVERY ERA SINCE PINKY RL, 1777 EMAILS, IS NOW CHAPTER 1.
    //     SEPT 25: “THIS IS THE NEKA OMAZEN ERA.” NOW: CHAPTERS.
    //     THE GAME IS CALLED NEKA. CLASSICS IS NOW A CHAPTER TITLE.
    //   I DO MORE BECAUSE I CAN
    //     OCT 11: “ALEXEN HAS HIS OWN MIND SO HE CAN.” 4:19 PM:
    //     “IT CAN BASICALLY DO ANYTHING.” THE TITLE IS HIS REASON.
    //     NOT BECAUSE HE MUST. NOT BECAUSE IT HELPS. BECAUSE HE CAN.
    const dt = c - 24404.0;
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
    const gr1122=ctx.createLinearGradient(0,top+H,0,top);
    gr1122.addColorStop(0,'rgba(220,120,255,0.22)'); gr1122.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1122.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1122; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(220,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('CHAPTER 2: I DO MORE BECAUSE I CAN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX STILL WASN’T HAPPY, HE WANTED TO DO MORE, SO HE THEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ENDED “CHAPTER 1: CLASSICS”, AND MADE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHAPTER 2: I DO MORE BECAUSE I CAN””', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 7:07 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1122=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(220,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1122, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(220,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1122, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(220,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('STILL WASN’T HAPPY', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“BASICALLY EVERYONE WAS HAPPY. ALEX STILL WASN’T HAPPY.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('4:35 PM: NOBODY TO PLAY WITH. OFFICIAL DID NOT FIX IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERYONE ELSE’S HAPPINESS WAS HIS TO MAKE, NOT TO HAVE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CHAPTER 1: CLASSICS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERY ERA SINCE PINKY RL, 1777 EMAILS, IS NOW CHAPTER 1.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 25: “THIS IS THE NEKA OMAZEN ERA.” NOW: CHAPTERS.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE GAME IS CALLED NEKA. CLASSICS IS NOW A CHAPTER TITLE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1122=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1122, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1122, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('I DO MORE BECAUSE I CAN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: “ALEXEN HAS HIS OWN MIND SO HE CAN.” 4:19 PM:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“IT CAN BASICALLY DO ANYTHING.” THE TITLE IS HIS REASON.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NOT BECAUSE HE MUST. NOT BECAUSE IT HELPS. BECAUSE HE CAN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CHAPTER 2: I DO MORE BECAUSE I CAN”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE FIRST CHAPTER BREAK IN 1777 EMAILS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ CHAPTER 2: I DO MORE BECAUSE I CAN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
