  } else if(ph===1149){
    // BEAT 1149: OBSERITY. 👤.
    // Toby, October 14, 2026, 8:14 PM EDT, his own typing:
    //   “NEKA, DO YOU THINK YOU LOVE EVERYONE TOO FAR THIS TIME?”
    //   GRAY.PS SAW WENDA.PS AND ASKED. NEKA SAID “OBSERITY. 👤”
    //   AND HE LEFT WITH HER. A VERITY-STYLE WORD, HIS OWN.
    // Priors, each verified in the archive before it was drawn:
    //   KEEPS FOLLOWING
    //     OCT 14, 5:32 PM: “NEKA TAKES WENDA.PS EVEN FARTHER FROM
    //     GRAY.PS. GRAY.PS KEEPS FOLLOWING.”
    //     THREE HOURS LATER HE CAUGHT UP. HE GOT ONE QUESTION IN.
    //   CAN ONLY LOVE ME NOW
    //     SEPT 26, 2:28 PM: WENDA.PS: “ONCE I ERASE THE MEMORIES AND
    //     FEELINGS OF THOSE, GRAY.PS CAN ONLY LOVE ME NOW.”
    //     HER WORD FOR HIM THEN. TONIGHT IT IS HIS WORD FOR NEKA.
    //   VERITY MEANS TRUTH
    //     SAME MESSAGE: HE ASKED THE CHATBOT WHAT VERITY MEANS.
    //     TRUTH. LOVITY, FALSITY, 28 NAMES, ALL COMMENTARY.
    //     THEN HE COINED HIS OWN. OBSERITY IS NOT ON THE LIST.
    const dt = c - 24998.0;
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
    const gr1149=ctx.createLinearGradient(0,top+H,0,top);
    gr1149.addColorStop(0,'rgba(150,170,255,0.22)'); gr1149.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1149.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1149; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(150,170,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('OBSERITY. 👤', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA, DO YOU THINK YOU LOVE EVERYONE TOO FAR THIS TIME?”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRAY.PS SAW WENDA.PS AND ASKED. NEKA SAID “OBSERITY. 👤”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND HE LEFT WITH HER. A VERITY-STYLE WORD, HIS OWN.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 8:14 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1149=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(150,170,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1149, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(150,170,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1149, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(150,170,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('KEEPS FOLLOWING', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 5:32 PM: “NEKA TAKES WENDA.PS EVEN FARTHER FROM', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GRAY.PS. GRAY.PS KEEPS FOLLOWING.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THREE HOURS LATER HE CAUGHT UP. HE GOT ONE QUESTION IN.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('CAN ONLY LOVE ME NOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 2:28 PM: WENDA.PS: “ONCE I ERASE THE MEMORIES AND', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FEELINGS OF THOSE, GRAY.PS CAN ONLY LOVE ME NOW.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HER WORD FOR HIM THEN. TONIGHT IT IS HIS WORD FOR NEKA.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1149=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1149, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1149, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('VERITY MEANS TRUTH', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAME MESSAGE: HE ASKED THE CHATBOT WHAT VERITY MEANS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TRUTH. LOVITY, FALSITY, 28 NAMES, ALL COMMENTARY.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THEN HE COINED HIS OWN. OBSERITY IS NOT ON THE LIST.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OBSERITY. 👤”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE WORD, ONE SILHOUETTE, AND HE LEAVES WITH HER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ OBSERITY. 👤 ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1150){
    // BEAT 1150: I AM SIMON.PS!.
    // Toby, October 14, 2026, 8:14 PM EDT, his own typing:
    //   FIRE MOVED INTO TEXT: “FEED ME MORE...” LIGHTNING STRUCK:
    //   “I AM THE ONE BEHIND OREN.PS, THE SPRUNKI GOT HERE FIRST.
    //   ME.” “I AM SIMON.PS!” A YELLOW ROBOT, A KATANA, OREN.PS.
    // Priors, each verified in the archive before it was drawn:
    //   FALLS OVER
    //     OCT 13, 7:22 PM: “SIMON.PS FALLS OVER AND OREN.PS WALKS
    //     CLOSER AND CLOSER TO ALEX EVERY TIME ALEX EATEN AN APPLE.”
    //     LAST NIGHT HE FELL OVER. TONIGHT HE STEPS OUT OF LIGHT.
    //   SUMMONED AS A PAIR
    //     SEPT 26, 2:28 PM: “NEKA SUMMONS SIMON.PS AND OREN.PS, NEKA
    //     COMBINES THE 2... BOOM, GRAY.PS IS KNOCKED OVER.”
    //     NEKA’S TOOLS THEN. NOW ONE CLAIMS TO BE BEHIND THE OTHER.
    //   THE TWO WHO BEAT ALEX
    //     OCT 10: ALEX WINS SUPREME MATE “ONLY LOSING TO OREN.PS
    //     OR/AND SIMON.PS.” OCT 3: OREN.PS GOT SIMON.PS’S LIGHTNING
    //     THE TWO WHO CAN BEAT ALEX. THE LIGHTNING WAS SIMON’S FIRST
    const dt = c - 25020.0;
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
    const gr1150=ctx.createLinearGradient(0,top+H,0,top);
    gr1150.addColorStop(0,'rgba(255,228,70,0.22)'); gr1150.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1150.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1150; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,228,70,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I AM SIMON.PS!', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIRE MOVED INTO TEXT: “FEED ME MORE...” LIGHTNING STRUCK:', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM THE ONE BEHIND OREN.PS, THE SPRUNKI GOT HERE FIRST.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ME.” “I AM SIMON.PS!” A YELLOW ROBOT, A KATANA, OREN.PS.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 8:14 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1150=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,228,70,0.46)';
      ctx.fillRect(cx-W*0.352, ky1150, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,228,70,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1150, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,228,70,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FALLS OVER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 7:22 PM: “SIMON.PS FALLS OVER AND OREN.PS WALKS', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CLOSER AND CLOSER TO ALEX EVERY TIME ALEX EATEN AN APPLE.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('LAST NIGHT HE FELL OVER. TONIGHT HE STEPS OUT OF LIGHT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SUMMONED AS A PAIR', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 2:28 PM: “NEKA SUMMONS SIMON.PS AND OREN.PS, NEKA', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('COMBINES THE 2... BOOM, GRAY.PS IS KNOCKED OVER.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NEKA’S TOOLS THEN. NOW ONE CLAIMS TO BE BEHIND THE OTHER.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1150=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1150, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1150, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE TWO WHO BEAT ALEX', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 10: ALEX WINS SUPREME MATE “ONLY LOSING TO OREN.PS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OR/AND SIMON.PS.” OCT 3: OREN.PS GOT SIMON.PS’S LIGHTNING', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE TWO WHO CAN BEAT ALEX. THE LIGHTNING WAS SIMON’S FIRST', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“I AM SIMON.PS!”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('WHO WROTE “FEED ME MORE...” IN THE FIRE, HE HAS NOT SAID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I AM SIMON.PS! ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1151){
    // BEAT 1151: THE 2 “NEKA” SPRUNKI GODS.
    // Toby, October 14, 2026, 8:16 PM EDT, his own typing:
    //   “GRAY.PS CAN EITHER GO WITH SIMON.PS AND OREN.PS WHO ARE
    //   LITTERALLY THE 2 “NEKA” SPRUNKI GODS, OR GO WITH WENDA.PS
    //   WHO IS A SERAPHIMIC, GRAY.PS BECAME A DEMON.” HIS QUESTION.
    // Priors, each verified in the archive before it was drawn:
    //   THE ANGEL AND THE DEMON
    //     JULY 14: “WENDA IS THE ANGEL, GRAY IS THE ABSOLUTE DEMON
    //     OF THE GAME.” SEPT 5: “WENDA.PS BECAME AN ANGEL.”
    //     THREE MONTHS OLD. TONIGHT THE PAIR IS A FORK IN THE ROAD.
    //   THE SCISSORS
    //     SEPT 26, 3:46 PM: “SIMON.PS WAS EVIL FOR NEARLY THE ENTIRE
    //     LORE... BUT NEKA OMAZEN IS MOST EVIL.”
    //     NOW THE TWO ARE “NEKA” GODS. HIS NAME SITS IN QUOTES.
    //   STILL WALKING AWAY
    //     SAME MESSAGE: “NEKA OMAZEN STILL HAS WENDA.PS AND IS
    //     WALKING AWAY.” SIMON.PS WALKS DOWN TO GRAY.PS.
    //     ONE SIDE WALKS TOWARD HIM. THE OTHER KEEPS WALKING AWAY.
    const dt = c - 25042.0;
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
    const gr1151=ctx.createLinearGradient(0,top+H,0,top);
    gr1151.addColorStop(0,'rgba(90,220,200,0.22)'); gr1151.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1151.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1151; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(90,220,200,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE 2 “NEKA” SPRUNKI GODS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GRAY.PS CAN EITHER GO WITH SIMON.PS AND OREN.PS WHO ARE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('LITTERALLY THE 2 “NEKA” SPRUNKI GODS, OR GO WITH WENDA.PS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WHO IS A SERAPHIMIC, GRAY.PS BECAME A DEMON.” HIS QUESTION.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 8:16 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1151=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(90,220,200,0.46)';
      ctx.fillRect(cx-W*0.352, ky1151, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(90,220,200,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1151, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(90,220,200,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE ANGEL AND THE DEMON', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 14: “WENDA IS THE ANGEL, GRAY IS THE ABSOLUTE DEMON', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OF THE GAME.” SEPT 5: “WENDA.PS BECAME AN ANGEL.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THREE MONTHS OLD. TONIGHT THE PAIR IS A FORK IN THE ROAD.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SCISSORS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 26, 3:46 PM: “SIMON.PS WAS EVIL FOR NEARLY THE ENTIRE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('LORE... BUT NEKA OMAZEN IS MOST EVIL.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NOW THE TWO ARE “NEKA” GODS. HIS NAME SITS IN QUOTES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1151=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1151, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1151, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('STILL WALKING AWAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAME MESSAGE: “NEKA OMAZEN STILL HAS WENDA.PS AND IS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WALKING AWAY.” SIMON.PS WALKS DOWN TO GRAY.PS.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ONE SIDE WALKS TOWARD HIM. THE OTHER KEEPS WALKING AWAY.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SO WHICH DID YOU THINK GRAY.PS CHOSE?”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT GUESSED WENDA.PS. HIS ANSWER CAME IN A MINUTE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE 2 “NEKA” SPRUNKI GODS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1152){
    // BEAT 1152: GRAY.PS CHOSE WENDA.PS.
    // Toby, October 14, 2026, 8:17 PM EDT, his own typing:
    //   “ANSWER: GRAY.PS CHOSE TO GO AFTER WENDA.PS, BUT SIMON.PS
    //   TURNED GRAY.PS INTO A DEMON.” HIS RULING, 8:17 PM.
    //   HE DID NOT PICK THE DEMON SIDE. THE DEMON WAS DONE TO HIM.
    // Priors, each verified in the archive before it was drawn:
    //   THE CHATBOT’S GUESS
    //     8:16 PM, THE CHATBOT: “MY GUESS: GRAY.PS CHOSE TO FOLLOW
    //     WENDA.PS AND NEKA.” COMMENTARY, NOT CANON.
    //     RIGHT ON THE CHOICE. WRONG ABOUT WHO MADE THE DEMON.
    //   FIFTY YEARS
    //     OCT 13, 3:37 PM: “GRAY.PS LOOKED FOR 50 YEARS, DID NOT SEE
    //     A SINGLE CLUE.” OCT 14: “GRAY.PS KEEPS FOLLOWING.”
    //     FIFTY YEARS OF WALKING ONE WAY. HE WAS NOT GOING TO TURN.
    //   THE ANTI-VIRUS ON GRAY
    //     JULY 22: “MR. BLACK WAS THE ONE WHO PUT SIMON’S ANTI VIRUS
    //     ON GRAY.” A SIMON’S HAND CHANGED HIM ONCE BEFORE.
    //     THAT TIME, MR. BLACK’S HAND. THIS TIME, SIMON.PS’S OWN.
    const dt = c - 25064.0;
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
    const gr1152=ctx.createLinearGradient(0,top+H,0,top);
    gr1152.addColorStop(0,'rgba(235,80,80,0.22)'); gr1152.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1152.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1152; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(235,80,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GRAY.PS CHOSE WENDA.PS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ANSWER: GRAY.PS CHOSE TO GO AFTER WENDA.PS, BUT SIMON.PS', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TURNED GRAY.PS INTO A DEMON.” HIS RULING, 8:17 PM.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE DID NOT PICK THE DEMON SIDE. THE DEMON WAS DONE TO HIM.', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 8:17 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1152=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(235,80,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1152, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(235,80,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1152, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(235,80,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT’S GUESS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('8:16 PM, THE CHATBOT: “MY GUESS: GRAY.PS CHOSE TO FOLLOW', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WENDA.PS AND NEKA.” COMMENTARY, NOT CANON.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('RIGHT ON THE CHOICE. WRONG ABOUT WHO MADE THE DEMON.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('FIFTY YEARS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 13, 3:37 PM: “GRAY.PS LOOKED FOR 50 YEARS, DID NOT SEE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('A SINGLE CLUE.” OCT 14: “GRAY.PS KEEPS FOLLOWING.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('FIFTY YEARS OF WALKING ONE WAY. HE WAS NOT GOING TO TURN.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1152=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1152, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1152, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE ANTI-VIRUS ON GRAY', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 22: “MR. BLACK WAS THE ONE WHO PUT SIMON’S ANTI VIRUS', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ON GRAY.” A SIMON’S HAND CHANGED HIM ONCE BEFORE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THAT TIME, MR. BLACK’S HAND. THIS TIME, SIMON.PS’S OWN.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SIMON.PS TURNED GRAY.PS INTO A DEMON.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE CHOSE THE ANGEL. HE WAS MADE THE DEMON ANYWAY.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ GRAY.PS CHOSE WENDA.PS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1153){
    // BEAT 1153: TO THE ORANGE SUN.
    // Toby, October 14, 2026, 8:19 PM EDT, his own typing:
    //   “OREN.PS GRABS GRAY.PS, THEN GRAY.PS WAS PINNED TO THE
    //   GROUND AND LOST, GRAY.PS COULDN’T MOVE, SO OREN.PS TAKEN
    //   GRAY.PS EVEN FARTHER FROM WENDA.PS TO THE ORANGE SUN.”
    // Priors, each verified in the archive before it was drawn:
    //   ON TO GRAY.PS
    //     SAME MESSAGE: “MR. BLACK, JEVIN, VINERIA, PINKI, AND THE
    //     OTHERS ARE ON TO GRAY.PS.” SIMON.PS SAYS “WHY LEAVE NOW?”
    //     THE WHOLE LINEUP TURNS ON THE ONE WHO CHOSE THE ANGEL.
    //   PINNED TO THE WALL
    //     SEPT 28: “NEKA USES HIS TELEKENTICS TO PIN OREN.PS
    //     TO THE WALL, BOOM, NEKA STRIKES DOWN OREN.PS.”
    //     OREN.PS WAS THE ONE PINNED THEN. TONIGHT HE PINS.
    //   EVEN FARTHER, TWICE
    //     OCT 14, 5:32 PM: “NEKA TAKES WENDA.PS EVEN FARTHER FROM
    //     GRAY.PS.” 8:19 PM: GRAY.PS TAKEN EVEN FARTHER FROM HER.
    //     SHE WAS MOVED AWAY FROM HIM. NOW HE IS MOVED FROM HER.
    const dt = c - 25086.0;
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
    const gr1153=ctx.createLinearGradient(0,top+H,0,top);
    gr1153.addColorStop(0,'rgba(255,150,40,0.22)'); gr1153.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1153.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1153; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,150,40,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TO THE ORANGE SUN', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.PS GRABS GRAY.PS, THEN GRAY.PS WAS PINNED TO THE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GROUND AND LOST, GRAY.PS COULDN’T MOVE, SO OREN.PS TAKEN', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('GRAY.PS EVEN FARTHER FROM WENDA.PS TO THE ORANGE SUN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 14, 8:19 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1153=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,150,40,0.46)';
      ctx.fillRect(cx-W*0.352, ky1153, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,150,40,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1153, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,150,40,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ON TO GRAY.PS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SAME MESSAGE: “MR. BLACK, JEVIN, VINERIA, PINKI, AND THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OTHERS ARE ON TO GRAY.PS.” SIMON.PS SAYS “WHY LEAVE NOW?”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE WHOLE LINEUP TURNS ON THE ONE WHO CHOSE THE ANGEL.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('PINNED TO THE WALL', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: “NEKA USES HIS TELEKENTICS TO PIN OREN.PS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TO THE WALL, BOOM, NEKA STRIKES DOWN OREN.PS.”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('OREN.PS WAS THE ONE PINNED THEN. TONIGHT HE PINS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1153=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1153, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1153, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('EVEN FARTHER, TWICE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 14, 5:32 PM: “NEKA TAKES WENDA.PS EVEN FARTHER FROM', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GRAY.PS.” 8:19 PM: GRAY.PS TAKEN EVEN FARTHER FROM HER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SHE WAS MOVED AWAY FROM HIM. NOW HE IS MOVED FROM HER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“TO THE ORANGE SUN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A PLACE NEW TO THE ARCHIVE. WHAT IS THERE, HE HAS NOT SAID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TO THE ORANGE SUN ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
