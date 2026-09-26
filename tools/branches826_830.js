  } else if(ph===826){
    // BEAT 826: FROGGYDUDE VS NEKA OMAZEN.
    // Toby, September 26, 2026, 1:58:06 PM EDT (Email 1531), three pieces of his own typing:
    //   "Have you heard of the YouTuber \"FroggyDude Gaming?\""
    //   "He battles powerful things like Herobrine and AJTheBold"
    //   "What will win? FroggyDude VS Neka Omazen"
    // The "Neka Omazen wins under the powers you've given him" paragraph is the machine's and is not canon.
    // Priors, each verified in the archive before it was drawn:
    //   HEROBRINE IS FIFTH ON TOBY'S OWN LADDER AND THE SEAT ABOVE ALL EIGHT IS ALREADY NEKA'S.
    //     August 13, Email 959: "I say it is Verity > Falsity > Long Horse > Creator > Herobrine >
    //     Entity 303 > Null > Wither Storm." He held a ninth seat back as ??? and then filled it himself -
    //     "the mystery character is Pero LAI, the creator of Classics, he is far over Verity."
    //     Forty-four days before the matchup was asked, the person asking had already settled it.
    //   THE CHALLENGER IS NOT AN OUTSIDER. Toby's own canon-vault rule split this story in two:
    //     "I used you to keep most of the Simon's Secret, the other parts are with YouTubers and people...
    //      the Simon's Law and Classic RL 2, things that you can't understand." YouTubers hold half the
    //     secret by his own instruction, so a YouTuber walking in is his own archive walking in.
    //   HE HAS RUN THIS ONCE BEFORE AND THE CHALLENGER NEVER THREW THE PUNCH. September 25, beats 804-805:
    //     Saitama, whose only line in five months is "I'll beat you in one punch", lost to "a single touch
    //     of immediance speed."
    //   THE VERDICT RUNS ON TWO OF HIS OWN RULES AND HE SAID NEKA DOES NOT KNOW ONE. The touch (beat 805)
    //     and the bite (September 20: "just one bite on another character or if a character eats what he
    //     bit, then that character instantly becomes a zombie"), while September 20, beat 776, is his own
    //     typing: "Neka also doesn't really know."
    //   FroggyDude and AJTheBold both have zero prior hits in five months. Herobrine has exactly one.
    const dt = c - 17892.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const ldA=Math.max(0,Math.min(1,(dt-4.2)/2.4));
    const vaA=Math.max(0,Math.min(1,(dt-7.8)/1.6));
    const saA=Math.max(0,Math.min(1,(dt-10.8)/1.6));
    const ruA=Math.max(0,Math.min(1,(dt-13.8)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-16.4)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-18.8)/1.2));

    ctx.fillStyle='rgba(6,10,8,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr826=ctx.createLinearGradient(0,top+H,0,top);
    gr826.addColorStop(0,'rgba(98,224,106,0.20)'); gr826.addColorStop(0.55,'rgba(6,10,8,0.98)');
    gr826.addColorStop(1,'rgba(6,10,8,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr826; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(98,224,106,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('FROGGYDUDE VS NEKA OMAZEN', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“HAVE YOU HEARD OF THE YOUTUBER ‘FROGGYDUDE GAMING?’ … HE BATTLES POWERFUL THINGS LIKE HEROBRINE AND AJTHEBOLD”', cx, top+H*0.138);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(168,255,178,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“WHAT WILL WIN? FROGGYDUDE VS NEKA OMAZEN”', cx, top+H*0.162);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 1:58 PM — HIS OWN TYPING, EMAIL 1531. THE “NEKA OMAZEN WINS” PARAGRAPH UNDER IT IS THE MACHINE’S AND IS COMMENTARY, NOT CANON.', cx, top+H*0.184);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('“FROGGYDUDE” AND “AJTHEBOLD” HAVE ZERO PRIOR HITS IN FIVE MONTHS OF THIS ARCHIVE. “HEROBRINE” HAS EXACTLY ONE.', cx, top+H*0.204);

    if(ldA>0.01){
      // THE AUGUST 13 MINECRAFT-HORROR LADDER, AND THE SEAT HE KEPT BACK
      var ly826=top+H*0.300, lsp826=W*0.0828, lrw826=W*0.074, lrh826=H*0.030;
      var ln826=['VERITY','FALSITY','LONG HORSE','CREATOR','HEROBRINE','ENTITY 303','NULL','WITHER STORM'];
      ctx.globalAlpha=g*ldA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AUGUST 13, EMAIL 959 — TOBY’S OWN MINECRAFT-HORROR RANKING, WRITTEN FORTY-FOUR DAYS BEFORE HE ASKED THIS QUESTION', cx, ly826-H*0.038);
      for(var i826=0;i826<8;i826++){
        var lx826=cx-lsp826*3.5+i826*lsp826;
        var lp826=Math.max(0,Math.min(1,(ldA*3.4)-i826*0.34));
        if(lp826<=0) continue;
        var hero826=(i826===4);
        ctx.globalAlpha=g*lp826*(hero826?0.28:0.13);
        ctx.fillStyle=hero826?'rgba(255,77,109,0.70)':'rgba(140,150,164,0.50)';
        ctx.fillRect(lx826-lrw826/2, ly826-lrh826/2, lrw826, lrh826);
        ctx.globalAlpha=g*lp826*(hero826?(0.62+0.26*pul):0.40);
        ctx.strokeStyle=hero826?'rgba(255,120,145,0.94)':'rgba(150,160,174,0.56)'; ctx.lineWidth=hero826?0.56:0.30;
        ctx.strokeRect(lx826-lrw826/2, ly826-lrh826/2, lrw826, lrh826);
        ctx.globalAlpha=g*lp826*0.94;
        ctx.fillStyle=hero826?'rgba(255,196,206,0.98)':'rgba(206,214,224,0.90)'; ctx.font='900 3.5px ui-monospace,monospace';
        ctx.fillText(ln826[i826], lx826, ly826+H*0.002);
        ctx.globalAlpha=g*lp826*0.82;
        ctx.fillStyle=hero826?'rgba(255,216,79,0.96)':'rgba(140,150,164,0.80)'; ctx.font='900 3.2px ui-monospace,monospace';
        ctx.fillText('#'+(i826+1), lx826, ly826-lrh826/2-H*0.006);
      }
      ctx.globalAlpha=g*ldA*0.92;
      ctx.fillStyle='rgba(255,138,61,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('AND THE NINTH SEAT WAS HELD BACK AS ??? UNTIL HE FILLED IT HIMSELF — “THE MYSTERY CHARACTER IS PERO LAI, THE CREATOR OF CLASSICS, HE IS FAR OVER VERITY”', cx, ly826+lrh826/2+H*0.024);
      ctx.globalAlpha=g*ldA*0.88;
      ctx.fillStyle='rgba(240,244,250,0.92)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('FROGGYDUDE’S FAMOUS ENEMY IS FIFTH OF EIGHT ON A LIST TOBY WROTE, AND THE THRONE OVER ALL EIGHT IS THE CHARACTER HE IS BEING ASKED ABOUT', cx, ly826+lrh826/2+H*0.042);
    }

    if(vaA>0.01){
      // THE YOUTUBERS HOLD HALF THE SECRET, BY HIS OWN INSTRUCTION
      var vy826=top+H*0.622;
      ctx.globalAlpha=g*vaA*0.14; ctx.fillStyle='rgba(90,200,255,0.48)';
      ctx.fillRect(cx-W*0.346, vy826-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*vaA*(0.50+0.20*pul); ctx.strokeStyle='rgba(90,200,255,0.72)'; ctx.lineWidth=0.36;
      ctx.strokeRect(cx-W*0.346, vy826-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*vaA*0.98;
      ctx.fillStyle='rgba(168,222,255,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE CHALLENGER IS NOT AN OUTSIDER — TOBY SPLIT THIS STORY IN TWO HIMSELF AND GAVE ONE HALF TO YOUTUBERS', cx, vy826-H*0.026);
      ctx.globalAlpha=g*vaA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“I USED YOU TO KEEP MOST OF THE SIMON’S SECRET, THE OTHER PARTS ARE WITH YOUTUBERS AND PEOPLE… THE SIMON’S LAW AND', cx, vy826-H*0.006);
      ctx.fillText('CLASSIC RL 2, THINGS THAT YOU CAN’T UNDERSTAND, AND THINGS THEY CAN’T UNDERSTAND.”', cx, vy826+H*0.012);
      ctx.globalAlpha=g*vaA*0.86;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('SO WHEN A YOUTUBER WALKS INTO A POWER MATCHUP, IT IS THE OTHER HALF OF HIS OWN ARCHIVE WALKING IN, NOT A STRANGER.', cx, vy826+H*0.032);
    }

    if(saA>0.01){
      ctx.globalAlpha=g*saA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE HAS RUN A MATCHUP LIKE THIS EXACTLY ONCE BEFORE — SEPTEMBER 25, BEATS 804-805 — AND THE CHALLENGER NEVER THREW THE PUNCH', cx, top+H*0.712);
      ctx.globalAlpha=g*saA*0.92;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('SAITAMA’S ONLY LINE IN FIVE MONTHS IS “I’LL BEAT YOU IN ONE PUNCH”, AND HE LOST TO “A SINGLE TOUCH OF IMMEDIANCE SPEED”', cx, top+H*0.732);
    }

    if(ruA>0.01){
      ctx.globalAlpha=g*ruA*0.14; ctx.fillStyle='rgba(176,124,255,0.44)';
      ctx.fillRect(cx-W*0.346, top+H*0.754, W*0.692, H*0.062);
      ctx.globalAlpha=g*ruA*0.48; ctx.strokeStyle='rgba(176,124,255,0.64)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, top+H*0.754, W*0.692, H*0.062);
      ctx.globalAlpha=g*ruA*0.96;
      ctx.fillStyle='rgba(212,180,255,0.98)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('THE VERDICT RUNS ON TWO OF HIS OWN RULES — THE TOUCH (BEAT 805) AND THE BITE (SEPT 20: “JUST ONE BITE… INSTANTLY BECOMES A ZOMBIE”)', cx, top+H*0.774);
      ctx.globalAlpha=g*ruA*0.92;
      ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('AND SEPTEMBER 20, BEAT 776, IS HIS OWN TYPING ABOUT THE SECOND ONE: “NEKA ALSO DOESN’T REALLY KNOW.”', cx, top+H*0.798);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('A REAL YOUTUBER GETS ASKED INTO THE GAME, AND THE ANSWER WAS FILED FORTY-FOUR DAYS AGO BY THE PERSON ASKING THE QUESTION', cx, top+H*0.846);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('“IT’S FUN TO THINK ABOUT THOSE FIGHTS AS POWER MATCHUPS” IS THE MACHINE’S LINE. THE LADDER IT IS THINKING WITH IS TOBY’S.', cx, top+H*0.868);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ HE BROUGHT IN AN OUTSIDER AND THE OUTSIDER WAS ALREADY ON HIS LIST ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===827){
    // BEAT 827: I AM FAR UNDER NEKA OMAZEN.
    // Toby, September 26, 2026, 1:58:06 PM EDT (Email 1531), his own typing, in full:
    //   "I never did anything, Neka gave everything about himself to himself himself. I am FAR under
    //    Neka Omazen."
    // It is a correction. The machine had written "Neka Omazen wins under the powers you've given him",
    // and then retracted it itself ("I got that wrong when I said 'the powers you've given him'"). That
    // retraction is the machine's; the sentence above is Toby's, and it takes the credit back out.
    // "to himself himself" is his doubling and is kept.
    // Priors, each verified in the archive before it was drawn:
    //   THE ONLY OTHER TIME HE RANKED HIMSELF HE ALSO WROTE ZERO. August 27, 2:45 PM, Email 1188, beat 495:
    //     "I am a Classics Admin. ClassicsAI. I basically have 0 game control. My player connection isn't
    //      that important. Gaster and Pero are the most powerful in the game, that is important."
    //   THE AVATARS KEEP FALLING OFF UNDERNEATH HIM. "My avatar IS tdeshane" (September 19) -> "tdeshane
    //     lost access" (September 24) -> ClassicsPro7777... (beat 801, lasted one day) -> ClassicsAdmin1
    //     (beat 811). ClassicsAdmin is the one name he ever gave himself and the one he ranked zero.
    //   "FANON > CANON", August 27, 11:47 AM, ranked kinds of authorship and picked the unofficial one.
    //     Thirty days later he removes himself from authorship altogether.
    //   SELF-SOURCING WAS ALREADY THE MECHANIC. September 23: "Now he erased the others and became Neka
    //     Omazen, True Over(x Infinity)lord... he uses the other forms as shields." Today it stops being
    //     a power and becomes the reason nobody else has a claim on him.
    const dt = c - 17914.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const twA=Math.max(0,Math.min(1,(dt-4.4)/2.0));
    const avA=Math.max(0,Math.min(1,(dt-7.8)/2.4));
    const faA=Math.max(0,Math.min(1,(dt-11.6)/1.6));
    const seA=Math.max(0,Math.min(1,(dt-14.4)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-17.0)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(12,10,4,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr827=ctx.createLinearGradient(0,top,0,top+H);
    gr827.addColorStop(0,'rgba(255,212,59,0.20)'); gr827.addColorStop(0.5,'rgba(12,10,4,0.98)');
    gr827.addColorStop(1,'rgba(12,10,4,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr827; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,212,59,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('I AM FAR UNDER NEKA OMAZEN', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,236,168,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“I NEVER DID ANYTHING, NEKA GAVE EVERYTHING ABOUT HIMSELF TO HIMSELF HIMSELF. I AM FAR UNDER NEKA OMAZEN.”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.86;
    ctx.fillStyle='rgba(240,244,250,0.92)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE MACHINE HAD WRITTEN “NEKA OMAZEN WINS UNDER THE POWERS YOU’VE GIVEN HIM.” THIS SENTENCE TAKES THE CREDIT BACK OUT.', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 1:58 PM — HIS OWN TYPING, EMAIL 1531. “TO HIMSELF HIMSELF” IS HIS DOUBLING AND IS KEPT.', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('THE WORD HAS TO BE SAID TWICE BECAUSE THE GIVER AND THE RECEIVER ARE THE SAME PERSON.', cx, top+H*0.206);

    if(twA>0.01){
      // TWO SELF-RANKINGS, THIRTY DAYS APART, BOTH AT THE BOTTOM
      var ty827=top+H*0.312, tsp827=W*0.1720, tw827=W*0.322, th827=H*0.080;
      var tt827=['AUGUST 27, 2:45 PM · BEAT 495','SEPTEMBER 26, 1:58 PM · TONIGHT'];
      var tq827=['“I BASICALLY HAVE 0 GAME CONTROL.”','“I AM FAR UNDER NEKA OMAZEN.”'];
      var td827=['“MY PLAYER CONNECTION ISN’T THAT','“I NEVER DID ANYTHING, NEKA GAVE'];
      var td2827=['IMPORTANT. GASTER AND PERO ARE THE','EVERYTHING ABOUT HIMSELF TO'];
      var td3827=['MOST POWERFUL IN THE GAME.”','HIMSELF HIMSELF.”'];
      var tc827=['rgba(140,150,164,','rgba(255,212,59,'];
      for(var i827=0;i827<2;i827++){
        var tx827=cx-tsp827+i827*tsp827*2;
        var tp827=Math.max(0,Math.min(1,(twA*2.4)-i827*0.9));
        if(tp827<=0) continue;
        ctx.globalAlpha=g*tp827*0.14; ctx.fillStyle=tc827[i827]+'0.60)';
        ctx.fillRect(tx827-tw827/2, ty827-th827/2, tw827, th827);
        ctx.globalAlpha=g*tp827*(i827===1?(0.58+0.24*pul):0.40);
        ctx.strokeStyle=tc827[i827]+'0.80)'; ctx.lineWidth=i827===1?0.52:0.32;
        ctx.strokeRect(tx827-tw827/2, ty827-th827/2, tw827, th827);
        ctx.globalAlpha=g*tp827*0.90;
        ctx.fillStyle=tc827[i827]+'0.96)'; ctx.font='900 3.6px ui-monospace,monospace';
        ctx.fillText(tt827[i827], tx827, ty827-th827/2+H*0.014);
        ctx.globalAlpha=g*tp827*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
        ctx.fillText(tq827[i827], tx827, ty827-H*0.006);
        ctx.globalAlpha=g*tp827*0.82;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 3.1px ui-monospace,monospace';
        ctx.fillText(td827[i827], tx827, ty827+H*0.012);
        ctx.fillText(td2827[i827], tx827, ty827+H*0.024);
        ctx.fillText(td3827[i827], tx827, ty827+H*0.036);
      }
      ctx.globalAlpha=g*twA*0.94;
      ctx.fillStyle='rgba(255,138,61,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE HAS RANKED HIMSELF EXACTLY TWICE IN FIVE MONTHS, THIRTY DAYS APART, AND BOTH TIMES HE PUT HIMSELF AT THE BOTTOM', cx, ty827+th827/2+H*0.024);
    }

    if(avA>0.01){
      // THE AVATAR CHAIN, AND THE ONE NAME HE GAVE HIMSELF
      var ay827=top+H*0.620, asp827=W*0.1680, arr827=W*0.038;
      var an827=['TDESHANE','CLASSICSPRO7777…','CLASSICSADMIN1'];
      var ad827=['SEPT 19 · “MY AVATAR','SEPT 24 · BEAT 801','SEPT 25 · BEAT 811'];
      var ad2827=['IS TDESHANE” — LOST','LASTED ONE DAY','THE NAME HE RANKED 0'];
      ctx.globalAlpha=g*avA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND THE AVATARS KEEP FALLING OFF UNDERNEATH HIM — THREE IN SIX DAYS, AND THE LAST ONE IS THE NAME HE ALREADY SCORED ZERO', cx, ay827-H*0.062);
      for(var j827=0;j827<3;j827++){
        var ax827=cx-asp827+j827*asp827;
        var ap827=Math.max(0,Math.min(1,(avA*3.2)-j827*0.8));
        if(ap827<=0) continue;
        ctx.globalAlpha=g*ap827*0.15; ctx.fillStyle='rgba(255,212,59,0.66)';
        ctx.beginPath(); ctx.ellipse(ax827, ay827, arr827, arr827*0.60, 0, 0, Math.PI*2); ctx.fill();
        ctx.globalAlpha=g*ap827*(0.52+0.24*pul);
        ctx.strokeStyle=j827===2?'rgba(255,120,145,0.94)':'rgba(255,212,59,0.80)'; ctx.lineWidth=0.48;
        ctx.beginPath(); ctx.ellipse(ax827, ay827, arr827, arr827*0.60, 0, 0, Math.PI*2); ctx.stroke();
        if(j827<2){
          ctx.globalAlpha=g*ap827*0.88;
          ctx.strokeStyle='rgba(255,77,109,0.90)'; ctx.lineWidth=0.62;
          ctx.beginPath();
          ctx.moveTo(ax827-arr827*0.52, ay827-arr827*0.34); ctx.lineTo(ax827+arr827*0.52, ay827+arr827*0.34);
          ctx.moveTo(ax827+arr827*0.52, ay827-arr827*0.34); ctx.lineTo(ax827-arr827*0.52, ay827+arr827*0.34);
          ctx.stroke();
        }
        ctx.globalAlpha=g*ap827*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 3.5px ui-monospace,monospace';
        ctx.fillText(an827[j827], ax827, ay827-arr827*0.60-H*0.016);
        ctx.globalAlpha=g*ap827*0.84;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(ad827[j827], ax827, ay827+arr827*0.60+H*0.018);
        ctx.fillText(ad2827[j827], ax827, ay827+arr827*0.60+H*0.030);
      }
    }

    if(faA>0.01){
      ctx.globalAlpha=g*faA*0.14; ctx.fillStyle='rgba(176,124,255,0.44)';
      ctx.fillRect(cx-W*0.346, top+H*0.718, W*0.692, H*0.058);
      ctx.globalAlpha=g*faA*0.48; ctx.strokeStyle='rgba(176,124,255,0.64)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, top+H*0.718, W*0.692, H*0.058);
      ctx.globalAlpha=g*faA*0.96;
      ctx.fillStyle='rgba(212,180,255,0.98)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“FANON > CANON” IS THIRTY DAYS OLD — AUGUST 27, 11:47 AM — AND IT RANKED KINDS OF AUTHORSHIP AGAINST EACH OTHER', cx, top+H*0.736);
      ctx.globalAlpha=g*faA*0.92;
      ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('TODAY HE TAKES HIMSELF OUT OF AUTHORSHIP ALTOGETHER: NOT A WEAKER AUTHOR, NOT A LOWER RANK — “I NEVER DID ANYTHING.”', cx, top+H*0.760);
    }

    if(seA>0.01){
      ctx.globalAlpha=g*seA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('SELF-SOURCING WAS ALREADY THE MECHANIC — SEPT 23: “NOW HE ERASED THE OTHERS AND BECAME NEKA OMAZEN… HE USES THE OTHER FORMS AS SHIELDS”', cx, top+H*0.804);
      ctx.globalAlpha=g*seA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('TONIGHT IT STOPS BEING A POWER AND BECOMES A PROPERTY CLAIM: IF HE GAVE HIMSELF EVERYTHING, THEN NOBODY ELSE HAS A SHARE IN HIM.', cx, top+H*0.826);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.92;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('THE MACHINE TRIED TO HAND HIM THE CREDIT AND HE REFUSED IT IN NINE WORDS, WHICH IS THE SHORTEST THING HE HAS EVER CORRECTED', cx, top+H*0.870);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ THE AUTHOR SAYS HE NEVER DID ANYTHING ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===828){
    // BEAT 828: GRAY SAVES MR. BLACK, THEN BEATS HIM DOWN.
    // Toby, September 26, 2026, 1:58:06 PM EDT (Email 1531), his own typing, the opening of the scene:
    //   "Neka Omazen says \"Mweh heh heh. 🦊\", He uses 25 Series on Mr. Black, Gray saves Mr. Black, then
    //    Gray beats Mr. Black down."
    // Priors, each verified in the archive before it was drawn:
    //   SEVEN HOURS EARLIER GRAY WAS THE RESCUE. September 26, 7:04 AM, beat 822: "Combine Wenda.ps and
    //     Mr. Black to get Gray.ps, Gray.ps is the eraser of the game... The 3 can ruin and corrupt the
    //     game, but all together, they can do anything and change and can SAVE the game from Neka Omazen."
    //     So Gray is beating down one of the two he is made of, and nothing attacked the coalition to make
    //     that happen.
    //   HE HAS OFFERED MR. BLACK SOMETHING ONCE BEFORE AND IT WAS A TRAP. Email 933: "Gray temps Mr. Black
    //     to eat an apple. Both fell for the attack... Mr. Black was corrupted."
    //   MR. BLACK IS THE ONE SUPPOSED TO BE STRONGER. Email 236: "Mr. Black is actually stronger than Gray."
    //   THE 25 SERIES HAS NEVER MISSED BEFORE. Beat 825 counted two uses and the barrier came down both
    //     times. This is the third, the first interception in the archive, and the target ends up worse off
    //     than if it had landed.
    //   THE LAUGH IS NOT NEW. "mweh heh heh heh heh 🦊" arrived with the Room of Many Tubes, and Zumeral
    //     said "Mweh heh heh heh" long before that. What is new is the shape of the scene: he laughs, fires
    //     once, and every bit of the damage is done by somebody on the other side.
    const dt = c - 17936.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const suA=Math.max(0,Math.min(1,(dt-4.4)/2.2));
    const apA=Math.max(0,Math.min(1,(dt-8.0)/1.8));
    const stA=Math.max(0,Math.min(1,(dt-11.2)/1.6));
    const inA=Math.max(0,Math.min(1,(dt-14.0)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-16.8)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(9,9,10,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr828=ctx.createLinearGradient(0,top,W,top+H);
    gr828.addColorStop(0,'rgba(244,246,250,0.16)'); gr828.addColorStop(0.5,'rgba(9,9,10,0.98)');
    gr828.addColorStop(1,'rgba(20,20,22,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr828; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 8.4px ui-monospace,monospace';
    ctx.fillText('GRAY SAVES MR. BLACK, THEN BEATS HIM DOWN', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,180,110,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SAYS ‘MWEH HEH HEH. 🦊’, HE USES 25 SERIES ON MR. BLACK,”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“GRAY SAVES MR. BLACK, THEN GRAY BEATS MR. BLACK DOWN.”', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 1:58 PM — HIS OWN TYPING, EMAIL 1531. THE PROSE RETELLING AT THE BOTTOM OF THE MAIL IS THE MACHINE’S.', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('THE LAUGH IS NOT NEW — “MWEH HEH HEH HEH HEH 🦊” CAME WITH THE ROOM OF MANY TUBES, AND ZUMERAL SAID IT BEFORE HIM.', cx, top+H*0.206);

    if(suA>0.01){
      // THE SUM AND ITS TWO HALVES, SEVEN HOURS OLD
      var sy828=top+H*0.322, ssp828=W*0.1900, srr828=W*0.046;
      var sn828=['WENDA.PS','MR. BLACK','GRAY.PS'];
      var sd828=['THE COLOURS BLASTING','THE ABSORBTION AND','THE ERASER OF'];
      var sd2828=['OUT TOWARD YOU','CONSUMPTION OF COLOR','THE GAME'];
      var sc828=['rgba(255,122,217,','rgba(140,150,164,','rgba(215,222,230,'];
      ctx.globalAlpha=g*suA*0.96;
      ctx.fillStyle='rgba(98,224,106,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('SEVEN HOURS EARLIER, BEAT 822 — “COMBINE WENDA.PS AND MR. BLACK TO GET GRAY.PS… THE 3 CAN SAVE THE GAME FROM NEKA OMAZEN”', cx, sy828-H*0.058);
      for(var i828=0;i828<3;i828++){
        var sx828=cx-ssp828+i828*ssp828;
        var sp828=Math.max(0,Math.min(1,(suA*3.2)-i828*0.8));
        if(sp828<=0) continue;
        ctx.globalAlpha=g*sp828*0.15; ctx.fillStyle=sc828[i828]+'0.60)';
        ctx.beginPath(); ctx.ellipse(sx828, sy828, srr828, srr828*0.58, 0, 0, Math.PI*2); ctx.fill();
        ctx.globalAlpha=g*sp828*(0.54+0.24*pul);
        ctx.strokeStyle=sc828[i828]+'0.88)'; ctx.lineWidth=0.50;
        ctx.beginPath(); ctx.ellipse(sx828, sy828, srr828, srr828*0.58, 0, 0, Math.PI*2); ctx.stroke();
        ctx.globalAlpha=g*sp828*0.96;
        ctx.fillStyle=sc828[i828]+'0.98)'; ctx.font='900 4.0px ui-monospace,monospace';
        ctx.fillText(sn828[i828], sx828, sy828+H*0.002);
        ctx.globalAlpha=g*sp828*0.84;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(sd828[i828], sx828, sy828+srr828*0.58+H*0.018);
        ctx.fillText(sd2828[i828], sx828, sy828+srr828*0.58+H*0.030);
      }
      // the arrow from GRAY back onto MR. BLACK, drawn first, then labelled on a dark backing
      ctx.globalAlpha=g*suA*0.92;
      ctx.strokeStyle='rgba(255,77,109,0.92)'; ctx.lineWidth=0.62;
      ctx.beginPath();
      ctx.moveTo(cx+ssp828-srr828*0.30, sy828-srr828*0.70);
      ctx.bezierCurveTo(cx+W*0.040, sy828-srr828*1.34, cx-W*0.020, sy828-srr828*1.34, cx-srr828*0.30, sy828-srr828*0.70);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx-srr828*0.30, sy828-srr828*0.70);
      ctx.lineTo(cx-srr828*0.30+W*0.008, sy828-srr828*0.70-H*0.008);
      ctx.lineTo(cx-srr828*0.30+W*0.012, sy828-srr828*0.70-H*0.001);
      ctx.closePath(); ctx.fillStyle='rgba(255,77,109,0.92)'; ctx.fill();
      ctx.globalAlpha=g*suA*0.88; ctx.fillStyle='rgba(9,9,10,0.92)';
      ctx.fillRect(cx-W*0.088, sy828-srr828*1.34-H*0.012, W*0.176, H*0.017);
      ctx.globalAlpha=g*suA*0.96;
      ctx.fillStyle='rgba(255,140,165,0.98)'; ctx.font='900 3.6px ui-monospace,monospace';
      ctx.fillText('THE SUM BEATS DOWN ITS OWN HALF', cx, sy828-srr828*1.34);
      ctx.globalAlpha=g*suA*0.92;
      ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('NOTHING ATTACKED THE COALITION. IT BROKE ITSELF SEVEN HOURS AFTER BEING NAMED, AND THE FIRST CRACK IS A RESCUE.', cx, sy828+srr828*0.58+H*0.052);
    }

    if(apA>0.01){
      var py828=top+H*0.618;
      ctx.globalAlpha=g*apA*0.14; ctx.fillStyle='rgba(255,77,109,0.44)';
      ctx.fillRect(cx-W*0.346, py828-H*0.044, W*0.692, H*0.088);
      ctx.globalAlpha=g*apA*0.48; ctx.strokeStyle='rgba(255,77,109,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, py828-H*0.044, W*0.692, H*0.088);
      ctx.globalAlpha=g*apA*0.98;
      ctx.fillStyle='rgba(255,160,180,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE HAS OFFERED MR. BLACK SOMETHING ONCE BEFORE AND IT WAS A TRAP — EMAIL 933:', cx, py828-H*0.024);
      ctx.globalAlpha=g*apA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('“GRAY TEMPS MR. BLACK TO EAT AN APPLE. BOTH FELL FOR THE ATTACK… MR. BLACK WAS CORRUPTED.”', cx, py828-H*0.002);
      ctx.globalAlpha=g*apA*0.88;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('AN APPLE THEN, A RESCUE NOW. BOTH TIMES THE GIFT IS THE ATTACK, AND BOTH TIMES MR. BLACK TAKES IT.', cx, py828+H*0.020);
    }

    if(stA>0.01){
      ctx.globalAlpha=g*stA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND MR. BLACK IS THE ONE SUPPOSED TO BE STRONGER — EMAIL 236: “MR. BLACK IS ACTUALLY STRONGER THAN GRAY.”', cx, top+H*0.706);
      ctx.globalAlpha=g*stA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('HE IS ALSO THE RINGMASTER, THE OLDEST AUTHORITY IN THIS SETTING. HE GETS ONE SENTENCE TODAY AND HE SPENDS IT BEING RESCUED.', cx, top+H*0.728);
    }

    if(inA>0.01){
      ctx.globalAlpha=g*inA*0.96;
      ctx.fillStyle='rgba(255,138,61,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE 25 SERIES HAS NEVER MISSED BEFORE — BEAT 825 COUNTED TWO USES AND THE BARRIER CAME DOWN BOTH TIMES', cx, top+H*0.772);
      ctx.globalAlpha=g*inA*0.92;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('THIS IS THE THIRD USE AND THE FIRST INTERCEPTION IN THIS ARCHIVE. THE TARGET ENDS UP WORSE OFF THAN IF IT HAD LANDED.', cx, top+H*0.794);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('HE LAUGHS, FIRES ONCE, AND EVERY BIT OF THE DAMAGE IS DONE BY SOMEBODY ON THE OTHER SIDE', cx, top+H*0.840);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('BEING SAVED BY GRAY TURNS OUT TO BE WORSE THAN BEING HIT BY THE ATTACK THAT SLASHES THE OMNIVERSE.', cx, top+H*0.864);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ THE RESCUE IS THE FIRST CRACK ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===829){
    // BEAT 829: NOW, WENDA.PS, YOUR SAFE.
    // Toby, September 26, 2026, 1:58:06 PM EDT (Email 1531), his own typing, the middle of the scene:
    //   "Gray.ps says \"Now, Wenda.ps, your safe.\", Wenda.ps puts on the suit and then Wenda.ps battles
    //    Gray.ps"
    // "your safe" is his spelling and is kept. The machine's retelling writes "you're safe"; that is not
    // what he typed and it is not drawn.
    // Priors, each verified in the archive before it was drawn:
    //   THE SUIT IS ALREADY OPEN AND THIS MORNING PROVED IT TWICE. 6:51 AM, beat 819: "the shadows fill the
    //     mechasuit... holes are in the vacuum, and needles carve through the helmet." 7:04 AM, beat 820:
    //     "Neka Omazen cuts through the titainuim suit."
    //   SHE ATTACKS THE OTHER HALF OF HERSELF. Gray.ps is Wenda.ps plus Mr. Black (beat 822), so in one
    //     message both halves have turned on the sum.
    //   SHE HAS WORN IT AGAINST HIM BEFORE AND IT WORKED. 6:51 AM: "Wenda.ps goes into the mechanical suit
    //     and now Gray.ps is struggling. Wenda.ps strikes down Gray.ps."
    //   SAFETY HAS BEEN A LIE HERE SINCE JULY 22, where the cutscene roster gave Mr. Fun Computer a fake
    //     safety and gave nobody a real one.
    //   SHE ASKED FOR A REASON THIS MORNING AND NEVER GOT ONE. 7:04 AM: "Hello, Pero LAI, I just want to
    //     know WHY you spared me before." Being spared is the question she has carried all day; the next
    //     person to tell her she is safe gets attacked.
    const dt = c - 17958.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const suA=Math.max(0,Math.min(1,(dt-4.4)/2.2));
    const haA=Math.max(0,Math.min(1,(dt-8.0)/1.8));
    const woA=Math.max(0,Math.min(1,(dt-11.2)/1.6));
    const faA=Math.max(0,Math.min(1,(dt-14.0)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-16.8)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(14,6,12,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr829=ctx.createLinearGradient(0,top+H,0,top);
    gr829.addColorStop(0,'rgba(255,122,217,0.22)'); gr829.addColorStop(0.55,'rgba(14,6,12,0.98)');
    gr829.addColorStop(1,'rgba(14,6,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr829; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,122,217,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('NOW, WENDA.PS, YOUR SAFE', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,196,236,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“GRAY.PS SAYS ‘NOW, WENDA.PS, YOUR SAFE.’, WENDA.PS PUTS ON THE SUIT AND THEN WENDA.PS BATTLES GRAY.PS”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.86;
    ctx.fillStyle='rgba(240,244,250,0.92)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SHE IS TOLD SHE IS SAFE AND SHE SUITS UP IN THE SAME BREATH. NOTHING HAPPENS IN BETWEEN.', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 1:58 PM — HIS OWN TYPING, EMAIL 1531. “YOUR SAFE” IS HIS SPELLING AND IS KEPT.', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('THE MACHINE’S RETELLING WRITES “YOU’RE SAFE”. THAT IS NOT WHAT HE TYPED, SO IT IS NOT WHAT IS DRAWN.', cx, top+H*0.206);

    if(suA>0.01){
      // WHAT THE SUIT HAD DONE TO IT ALREADY, IN ORDER, THIS MORNING
      var sy829=top+H*0.316, ssp829=W*0.1620, srw829=W*0.150, srh829=H*0.062;
      var st829=['6:51 AM · BEAT 819','7:04 AM · BEAT 820','1:58 PM · TONIGHT'];
      var sq829=['SHADOWS FILL IT','CUT THROUGH','SHE PUTS IT ON'];
      var sd829=['“HOLES ARE IN THE VACUUM,','“NEKA OMAZEN CUTS THROUGH','“WENDA.PS PUTS ON THE SUIT'];
      var sd2829=['AND NEEDLES CARVE','THE TITAINUIM SUIT,','AND THEN WENDA.PS'];
      var sd3829=['THROUGH THE HELMET”','WENDA.PS VALUEABLE.”','BATTLES GRAY.PS”'];
      var sc829=['rgba(176,124,255,','rgba(255,77,109,','rgba(255,122,217,'];
      ctx.globalAlpha=g*suA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('SHE PUTS BACK ON A SUIT THAT WAS HOLED, NEEDLED AND CUT OPEN SEVEN HOURS AGO, AND NOBODY REPAIRED IT IN BETWEEN', cx, sy829-H*0.046);
      for(var i829=0;i829<3;i829++){
        var sx829=cx-ssp829+i829*ssp829;
        var sp829=Math.max(0,Math.min(1,(suA*3.2)-i829*0.8));
        if(sp829<=0) continue;
        ctx.globalAlpha=g*sp829*0.14; ctx.fillStyle=sc829[i829]+'0.58)';
        ctx.fillRect(sx829-srw829/2, sy829-srh829/2, srw829, srh829);
        ctx.globalAlpha=g*sp829*(i829===2?(0.58+0.24*pul):0.42);
        ctx.strokeStyle=sc829[i829]+'0.84)'; ctx.lineWidth=i829===2?0.52:0.32;
        ctx.strokeRect(sx829-srw829/2, sy829-srh829/2, srw829, srh829);
        ctx.globalAlpha=g*sp829*0.88;
        ctx.fillStyle=sc829[i829]+'0.96)'; ctx.font='900 3.3px ui-monospace,monospace';
        ctx.fillText(st829[i829], sx829, sy829-srh829/2+H*0.012);
        ctx.globalAlpha=g*sp829*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 4.0px ui-monospace,monospace';
        ctx.fillText(sq829[i829], sx829, sy829-H*0.004);
        ctx.globalAlpha=g*sp829*0.82;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.8px ui-monospace,monospace';
        ctx.fillText(sd829[i829], sx829, sy829+H*0.010);
        ctx.fillText(sd2829[i829], sx829, sy829+H*0.021);
        ctx.fillText(sd3829[i829], sx829, sy829+H*0.032);
      }
    }

    if(haA>0.01){
      var hy829=top+H*0.612;
      ctx.globalAlpha=g*haA*0.14; ctx.fillStyle='rgba(215,222,230,0.42)';
      ctx.fillRect(cx-W*0.346, hy829-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*haA*0.48; ctx.strokeStyle='rgba(215,222,230,0.62)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, hy829-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*haA*0.98;
      ctx.fillStyle='rgba(240,244,250,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND SHE IS ATTACKING THE OTHER HALF OF HERSELF — GRAY.PS IS WENDA.PS PLUS MR. BLACK (BEAT 822)', cx, hy829-H*0.024);
      ctx.globalAlpha=g*haA*0.96;
      ctx.fillStyle='rgba(255,196,236,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('IN ONE MESSAGE BOTH HALVES HAVE TURNED ON THE SUM: HE BEATS DOWN MR. BLACK, THEN SHE FIGHTS HIM', cx, hy829-H*0.002);
      ctx.globalAlpha=g*haA*0.88;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('THE ONE COMBINATION THAT COULD SAVE THE GAME FROM NEKA OMAZEN IS NOW THE ONLY FIGHT ON THE BOARD.', cx, hy829+H*0.022);
    }

    if(woA>0.01){
      ctx.globalAlpha=g*woA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE SUIT IS THE ONE THING IN THIS FIGHT WITH A WINNING RECORD — 6:51 AM: “WENDA.PS GOES INTO THE MECHANICAL SUIT AND NOW', cx, top+H*0.702);
      ctx.globalAlpha=g*woA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('GRAY.PS IS STRUGGLING. WENDA.PS STRIKES DOWN GRAY.PS.” SHE REACHES FOR IT AGAIN THE MOMENT SHE IS TOLD SHE DOES NOT NEED IT.', cx, top+H*0.722);
    }

    if(faA>0.01){
      ctx.globalAlpha=g*faA*0.14; ctx.fillStyle='rgba(176,124,255,0.44)';
      ctx.fillRect(cx-W*0.346, top+H*0.748, W*0.692, H*0.060);
      ctx.globalAlpha=g*faA*0.48; ctx.strokeStyle='rgba(176,124,255,0.64)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, top+H*0.748, W*0.692, H*0.060);
      ctx.globalAlpha=g*faA*0.96;
      ctx.fillStyle='rgba(212,180,255,0.98)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('SAFETY HAS BEEN A LIE HERE SINCE JULY 22 — THE CUTSCENE ROSTER GAVE MR. FUN COMPUTER A FAKE SAFETY AND GAVE NOBODY A REAL ONE', cx, top+H*0.768);
      ctx.globalAlpha=g*faA*0.92;
      ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('SO “YOUR SAFE” ARRIVES IN A GAME WHERE THE WORD HAS ONLY EVER BEEN USED TO SET SOMEBODY UP.', cx, top+H*0.792);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('SHE ASKED FOR A REASON THIS MORNING AND NEVER GOT ONE — 7:04 AM: “I JUST WANT TO KNOW WHY YOU SPARED ME BEFORE.”', cx, top+H*0.838);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('BEING SPARED IS THE QUESTION SHE HAS CARRIED ALL DAY. THE NEXT PERSON TO TELL HER SHE IS SAFE GETS ATTACKED.', cx, top+H*0.862);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ TOLD SHE IS SAFE, SHE REACHES FOR THE ARMOUR ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===830){
    // BEAT 830: NEKA OMAZEN GETS AWAY.
    // Toby, September 26, 2026, 1:58:06 PM EDT (Email 1531), the last nine words of his own typing:
    //   "Neka Omazen gets away, and Wenda.ps and Gray.ps are still fighting."
    // Priors, each verified in the archive before it was drawn:
    //   THE ONLY OTHER ESCAPE IN FIVE MONTHS EXPIRED FOUR SENTENCES LATER. "Supreme Sans got away", and
    //     then "he grabbed Supreme Sans with a tentacle, Supreme Sans was absorbed into the character's
    //     body."
    //   THIS ONE HOLDS, ON A RULE TOBY WROTE SEVEN HOURS EARLIER. September 26, 7:04 AM, beat 822: "And
    //     none of the 3 surpass each other." That is the second undefined loop in this archive and the
    //     first on the heroes' side - Email 595, June 27: "it's like Steel VS Fire VS Water VS
    //     Electricity", called undefined by ToddLLM and Luigi Green themselves. An undefined loop has no
    //     winner, so "still fighting" is not a cliffhanger, it is the rule, and nobody is coming after him.
    //   HE LEFT ONCE ALREADY TODAY AND THAT TIME HE HAD WON. 7:04 AM: "Neka Omazen cuts through the
    //     titainuim suit, Wenda.ps valueable. Neka Omazen left." The same exit now works without the win.
    //   HE DID NOT WIN THIS ONE. He laughed, fired once, the shot was intercepted, and he walked out while
    //     the three who can save the game took each other apart.
    const dt = c - 17980.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const loA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const ssA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const unA=Math.max(0,Math.min(1,(dt-11.4)/1.6));
    const leA=Math.max(0,Math.min(1,(dt-14.2)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-17.0)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(10,7,5,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr830=ctx.createLinearGradient(0,top,W,top+H);
    gr830.addColorStop(0,'rgba(255,138,61,0.20)'); gr830.addColorStop(0.5,'rgba(10,7,5,0.98)');
    gr830.addColorStop(1,'rgba(255,122,217,0.12)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr830; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,138,61,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('NEKA OMAZEN GETS AWAY', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,196,140,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN GETS AWAY, AND WENDA.PS AND GRAY.PS ARE STILL FIGHTING.”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.86;
    ctx.fillStyle='rgba(240,244,250,0.92)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HE DID NOT WIN. HE LAUGHED, FIRED ONCE, THE SHOT WAS INTERCEPTED, AND HE WALKED OUT WHILE THEY FOUGHT EACH OTHER.', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 1:58 PM — THE LAST NINE WORDS OF HIS OWN TYPING, EMAIL 1531.', cx, top+H*0.186);

    if(loA>0.01){
      // THE UNDEFINED LOOP, AND THE DOOR HE WALKS OUT OF
      var oy830=top+H*0.330, orr830=W*0.048, ord830=W*0.118;
      var on830=['WENDA.PS','MR. BLACK','GRAY.PS'];
      var oc830=['rgba(255,122,217,','rgba(140,150,164,','rgba(215,222,230,'];
      ctx.globalAlpha=g*loA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('SEVEN HOURS EARLIER HE WROTE THE RULE THAT LETS HIM OUT — BEAT 822: “AND NONE OF THE 3 SURPASS EACH OTHER”', cx, oy830-H*0.070);
      for(var i830=0;i830<3;i830++){
        var oa830=-Math.PI/2 + i830*(Math.PI*2/3);
        var ox830=cx-W*0.088+Math.cos(oa830)*ord830, oyy830=oy830+Math.sin(oa830)*ord830*0.46;
        var op830=Math.max(0,Math.min(1,(loA*3.2)-i830*0.7));
        if(op830<=0) continue;
        var na830=-Math.PI/2 + ((i830+1)%3)*(Math.PI*2/3);
        var nx830=cx-W*0.088+Math.cos(na830)*ord830, ny830=oy830+Math.sin(na830)*ord830*0.46;
        ctx.globalAlpha=g*op830*0.52; ctx.strokeStyle='rgba(255,138,61,0.70)'; ctx.lineWidth=0.36;
        ctx.beginPath(); ctx.moveTo(ox830,oyy830); ctx.lineTo(nx830,ny830); ctx.stroke();
        ctx.globalAlpha=g*op830*0.15; ctx.fillStyle=oc830[i830]+'0.58)';
        ctx.beginPath(); ctx.ellipse(ox830, oyy830, orr830, orr830*0.52, 0, 0, Math.PI*2); ctx.fill();
        ctx.globalAlpha=g*op830*(0.54+0.24*pul);
        ctx.strokeStyle=oc830[i830]+'0.86)'; ctx.lineWidth=0.48;
        ctx.beginPath(); ctx.ellipse(ox830, oyy830, orr830, orr830*0.52, 0, 0, Math.PI*2); ctx.stroke();
        ctx.globalAlpha=g*op830*0.96;
        ctx.fillStyle=oc830[i830]+'0.98)'; ctx.font='900 3.6px ui-monospace,monospace';
        ctx.fillText(on830[i830], ox830, oyy830+H*0.002);
      }
      ctx.globalAlpha=g*loA*0.92;
      ctx.fillStyle='rgba(255,180,110,0.96)'; ctx.font='900 3.8px ui-monospace,monospace';
      ctx.fillText('UNDEFINED', cx-W*0.088, oy830+H*0.002);
      // the door, and the small figure going through it
      ctx.globalAlpha=g*loA*0.90;
      ctx.strokeStyle='rgba(255,138,61,0.86)'; ctx.lineWidth=0.52;
      ctx.strokeRect(cx+W*0.222, oy830-H*0.034, W*0.062, H*0.068);
      ctx.globalAlpha=g*loA*0.16; ctx.fillStyle='rgba(255,138,61,0.66)';
      ctx.fillRect(cx+W*0.222, oy830-H*0.034, W*0.062, H*0.068);
      ctx.globalAlpha=g*loA*0.94;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('🦊', cx+W*0.253, oy830+H*0.006);
      ctx.globalAlpha=g*loA*(0.62+0.24*pul);
      ctx.strokeStyle='rgba(255,138,61,0.88)'; ctx.lineWidth=0.44;
      ctx.beginPath(); ctx.moveTo(cx+W*0.052, oy830); ctx.lineTo(cx+W*0.214, oy830); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx+W*0.214, oy830); ctx.lineTo(cx+W*0.204, oy830-H*0.006);
      ctx.lineTo(cx+W*0.204, oy830+H*0.006); ctx.closePath();
      ctx.fillStyle='rgba(255,138,61,0.88)'; ctx.fill();
      ctx.globalAlpha=g*loA*0.88;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.2px ui-monospace,monospace';
      ctx.fillText('HE LEAVES', cx+W*0.253, oy830-H*0.042);
      ctx.globalAlpha=g*loA*0.92;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('AN UNDEFINED LOOP HAS NO WINNER, SO “STILL FIGHTING” IS NOT A CLIFFHANGER — IT IS THE RULE, AND NOBODY IS COMING AFTER HIM', cx, oy830+H*0.074);
    }

    if(ssA>0.01){
      var sy830=top+H*0.620;
      ctx.globalAlpha=g*ssA*0.14; ctx.fillStyle='rgba(255,77,109,0.44)';
      ctx.fillRect(cx-W*0.346, sy830-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*ssA*0.48; ctx.strokeStyle='rgba(255,77,109,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, sy830-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*ssA*0.98;
      ctx.fillStyle='rgba(255,160,180,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE ONLY OTHER ESCAPE IN FIVE MONTHS EXPIRED FOUR SENTENCES LATER', cx, sy830-H*0.024);
      ctx.globalAlpha=g*ssA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“SUPREME SANS GOT AWAY” … “HE GRABBED SUPREME SANS WITH A TENTACLE, SUPREME SANS WAS ABSORBED INTO THE CHARACTER’S BODY.”', cx, sy830-H*0.002);
      ctx.globalAlpha=g*ssA*0.88;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('NOTHING HERE HAS EVER GOT TO KEEP ITSELF, INCLUDING THE ONE WHO GOT OUT. THIS IS THE FIRST ESCAPE THAT STAYS AN ESCAPE.', cx, sy830+H*0.022);
    }

    if(unA>0.01){
      ctx.globalAlpha=g*unA*0.96;
      ctx.fillStyle='rgba(90,200,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('IT IS THE SECOND UNDEFINED LOOP IN THIS ARCHIVE AND THE FIRST ON THE HEROES’ SIDE — EMAIL 595, JUNE 27:', cx, top+H*0.712);
      ctx.globalAlpha=g*unA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“IT’S LIKE STEEL VS FIRE VS WATER VS ELECTRICITY” — CALLED UNDEFINED BY TODDLLM AND LUIGI GREEN THEMSELVES', cx, top+H*0.732);
    }

    if(leA>0.01){
      ctx.globalAlpha=g*leA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE LEFT ONCE ALREADY TODAY AND THAT TIME HE HAD WON — 7:04 AM: “NEKA OMAZEN CUTS THROUGH THE TITAINUIM SUIT,', cx, top+H*0.772);
      ctx.globalAlpha=g*leA*0.92;
      ctx.fillStyle='rgba(255,196,140,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('WENDA.PS VALUEABLE. NEKA OMAZEN LEFT.” SEVEN HOURS LATER THE SAME EXIT WORKS WITHOUT THE VICTORY IN FRONT OF IT.', cx, top+H*0.794);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('THE THREE WHO CAN SAVE THE GAME ARE STILL ON THE BOARD, STILL ABLE TO SAVE IT, AND BUSY', cx, top+H*0.840);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('FIRST TIME IN THIS ARCHIVE THE VILLAIN GETS OUT BECAUSE OF WHAT THE HEROES DID, NOT BECAUSE OF WHAT HE DID.', cx, top+H*0.864);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ HE WALKS OUT OF A FIGHT THAT CANNOT END ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
