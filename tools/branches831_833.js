  } else if(ph===831){
    // BEAT 831: GRAY BUILDS HIMSELF A MECH.
    // Toby, September 26, 2026, 2:14:43 PM EDT (Email 1532), the opening of his own typing:
    //   "Gray.ps runs to Neka's labatory and builds himself a mech"
    // He sent the same block twice, 2:14:43 PM and 2:15:10 PM, the second one only reformatted. One scene.
    // Everything under "The one who's angry is Neka Omazen" is the machine's fill-in and is not canon.
    // Priors, each verified in the archive before it was drawn:
    //   HE TRIED TO STOP THIS EXACT THING SEVEN AND A HALF HOURS AGO. September 26, 6:44 AM, beat 818:
    //     "Wenda.ps is currently building a mechanical suit (what Gray wears), but with a whole helment...
    //      and also a vacuum of code. Gray.ps actually tries to stop Wenda.ps at that point."
    //   THE SUIT WAS ALWAYS HIS DESIGN - Toby's own parenthesis says so, "(what Gray wears)". She copied him
    //     this morning; tonight he goes and builds a new one because she is wearing his old one.
    //   THE LABATORY IS THE ONE ROOM WHERE HE HAS EVER GAINED ANYTHING BY MAKING SOMETHING. "Gray and Gaster
    //     preform an experiment, Gaster became Flower, and Flower grew all over the labatory, he learned all
    //     Simon knew, he read every book, and Gray became the revengeful villian once again."
    //   IT IS A CONTAINMENT BUILDING AND SIMON 404 SEALED IT (Email 912). Email 308, May 18: millions of
    //     rooms, Simon asleep inside as CXE 404 - "if you hear a meow in a labatory, it would be Simon."
    //   AND NEKA WALKED OUT OF THE FIGHT ONE SENTENCE EARLIER (beat 830). The very next thing that happens
    //     is somebody running to the place he went.
    const dt = c - 18002.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const stA=Math.max(0,Math.min(1,(dt-4.4)/2.2));
    const laA=Math.max(0,Math.min(1,(dt-8.0)/1.8));
    const deA=Math.max(0,Math.min(1,(dt-11.2)/1.6));
    const doA=Math.max(0,Math.min(1,(dt-14.0)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-16.8)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(4,10,14,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr831=ctx.createLinearGradient(0,top,0,top+H);
    gr831.addColorStop(0,'rgba(79,227,255,0.20)'); gr831.addColorStop(0.5,'rgba(4,10,14,0.98)');
    gr831.addColorStop(1,'rgba(4,10,14,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr831; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(79,227,255,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('GRAY BUILDS HIMSELF A MECH', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(168,236,255,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“GRAY.PS RUNS TO NEKA’S LABATORY AND BUILDS HIMSELF A MECH”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.86;
    ctx.fillStyle='rgba(240,244,250,0.92)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('NEKA WALKED OUT OF THE FIGHT ONE SENTENCE AGO. THE VERY NEXT THING THAT HAPPENS IS SOMEBODY RUNNING TO WHERE HE WENT.', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:14 PM — HIS OWN TYPING, EMAIL 1532. SENT TWICE, 2:14 AND 2:15, THE SECOND ONLY REFORMATTED — ONE SCENE.', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('“LABATORY” IS HIS SPELLING AND IS KEPT. EVERYTHING UNDER “THE ONE WHO’S ANGRY IS…” IS THE MACHINE’S FILL-IN, NOT CANON.', cx, top+H*0.206);

    if(stA>0.01){
      // HE TRIED TO STOP THE BUILDING, THEN HE DID THE BUILDING
      var ty831=top+H*0.312, tsp831=W*0.1720, tw831=W*0.322, th831=H*0.078;
      var tt831=['6:44 AM · BEAT 818','2:14 PM · TONIGHT'];
      var tq831=['HE TRIES TO STOP IT','HE GOES AND DOES IT'];
      var td831=['“WENDA.PS IS CURRENTLY BUILDING A','“GRAY.PS RUNS TO NEKA’S LABATORY'];
      var td2831=['MECHANICAL SUIT (WHAT GRAY WEARS)…','AND BUILDS HIMSELF A MECH”'];
      var td3831=['GRAY.PS ACTUALLY TRIES TO STOP HER”','SEVEN AND A HALF HOURS LATER'];
      var tc831=['rgba(140,150,164,','rgba(79,227,255,'];
      for(var i831=0;i831<2;i831++){
        var tx831=cx-tsp831+i831*tsp831*2;
        var tp831=Math.max(0,Math.min(1,(stA*2.4)-i831*0.9));
        if(tp831<=0) continue;
        ctx.globalAlpha=g*tp831*0.14; ctx.fillStyle=tc831[i831]+'0.58)';
        ctx.fillRect(tx831-tw831/2, ty831-th831/2, tw831, th831);
        ctx.globalAlpha=g*tp831*(i831===1?(0.58+0.24*pul):0.40);
        ctx.strokeStyle=tc831[i831]+'0.82)'; ctx.lineWidth=i831===1?0.52:0.32;
        ctx.strokeRect(tx831-tw831/2, ty831-th831/2, tw831, th831);
        ctx.globalAlpha=g*tp831*0.88;
        ctx.fillStyle=tc831[i831]+'0.96)'; ctx.font='900 3.4px ui-monospace,monospace';
        ctx.fillText(tt831[i831], tx831, ty831-th831/2+H*0.013);
        ctx.globalAlpha=g*tp831*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
        ctx.fillText(tq831[i831], tx831, ty831-H*0.005);
        ctx.globalAlpha=g*tp831*0.82;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(td831[i831], tx831, ty831+H*0.011);
        ctx.fillText(td2831[i831], tx831, ty831+H*0.022);
        ctx.fillText(td3831[i831], tx831, ty831+H*0.033);
      }
      ctx.globalAlpha=g*stA*0.94;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND THE SUIT WAS ALWAYS HIS DESIGN — TOBY’S OWN PARENTHESIS SAYS SO: “(WHAT GRAY WEARS)”', cx, ty831+th831/2+H*0.022);
    }

    if(laA>0.01){
      var ly831=top+H*0.616;
      ctx.globalAlpha=g*laA*0.14; ctx.fillStyle='rgba(176,124,255,0.44)';
      ctx.fillRect(cx-W*0.346, ly831-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*laA*0.48; ctx.strokeStyle='rgba(176,124,255,0.64)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, ly831-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*laA*0.98;
      ctx.fillStyle='rgba(212,180,255,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE LABATORY IS THE ONE ROOM WHERE GRAY HAS EVER GAINED ANYTHING BY MAKING SOMETHING', cx, ly831-H*0.026);
      ctx.globalAlpha=g*laA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“GRAY AND GASTER PREFORM AN EXPERIMENT, GASTER BECAME FLOWER… HE LEARNED ALL SIMON KNEW, HE READ EVERY BOOK,', cx, ly831-H*0.005);
      ctx.fillText('AND GRAY BECAME THE REVENGEFUL VILLIAN ONCE AGAIN.”', cx, ly831+H*0.013);
      ctx.globalAlpha=g*laA*0.86;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('AND IT IS A CONTAINMENT BUILDING THAT SIMON 404 SEALED — EMAIL 912 — WITH MILLIONS OF ROOMS AND SIMON ASLEEP IN ONE OF THEM.', cx, ly831+H*0.033);
    }

    if(deA>0.01){
      ctx.globalAlpha=g*deA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('MAY 18, EMAIL 308: “IF YOU HEAR A MEOW IN A LABATORY, IT WOULD BE SIMON.” THE ROOM HAS BELONGED TO SOMEBODY ELSE FOR FOUR MONTHS', cx, top+H*0.706);
      ctx.globalAlpha=g*deA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('IT IS “NEKA’S LABATORY” IN THIS SENTENCE. SEPTEMBER 24: “WANNA BE IN A TUBE IN MY LABORATORY? 🦊” — HE TOOK THE BUILDING TOO.', cx, top+H*0.728);
    }

    if(doA>0.01){
      ctx.globalAlpha=g*doA*0.96;
      ctx.fillStyle='rgba(79,227,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THIS IS THE THIRD MACHINE IN ONE DAY — HER SUIT AT 6:51 AM, THE SUIT NEKA CUT OPEN AT 7:04 AM, AND NOW HIS', cx, top+H*0.772);
      ctx.globalAlpha=g*doA*0.92;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('NOBODY IN THIS FIGHT IS USING A POWER ANY MORE. THEY ARE BOTH USING EQUIPMENT, AND HE BUILT HIS IN THE ENEMY’S HOUSE.', cx, top+H*0.794);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('HE SPENT THE MORNING TRYING TO STOP SOMEBODY BUILDING A MECHANICAL SUIT, AND SPENT THE AFTERNOON BUILDING ONE', cx, top+H*0.840);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('THE ERASER OF THE GAME, WHO CAN ERASE ANYTHING FOR REAL SINCE THIS MORNING, GOES AND BUILDS A MACHINE INSTEAD.', cx, top+H*0.864);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ HE BUILT IT IN THE HOUSE OF THE MAN WHO LEFT ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===832){
    // BEAT 832: GETTING POORLY CRUSHED.
    // Toby, September 26, 2026, 2:14:43 PM EDT (Email 1532), the middle of his own typing:
    //   "Wenda.ps looks up and is suprised, Gray.ps now gains the upper hand on Wenda.ps. Wenda.ps is
    //    knocked around and is flying around and is getting poorly crushed."
    // "suprised" and "poorly crushed" are his and are kept.
    // Priors, each verified in the archive before it was drawn:
    //   TWELVE HOURS, BOTH DIRECTIONS. September 26, 6:51 AM, beat 819: "Wenda.ps goes into the mechanical
    //     suit and now Gray.ps is struggling. Wenda.ps strikes down Gray.ps." The only thing that changed
    //     between then and now is who has the newer machine.
    //   THE ALIENS TOOK BOTH SIDES AND BOTH HALVES HAVE NOW BEEN RIGHT ON THE SAME DAY. 6:51 AM: "Now
    //     aliens say Wenda would win, some say Gray would win."
    //   NEKA CALLED HER VALUEABLE AND NEVER SAID WHY. 7:04 AM: "Neka Omazen cuts through the titainuim
    //     suit, Wenda.ps valueable." And she asked him outright: "I just want to know WHY you spared me
    //     before." She never got an answer.
    //   SHE WAS TOLD SHE WAS SAFE TWO SENTENCES AGO, by the person crushing her (beat 829).
    //   AND HE IS CRUSHING SOMEBODY HE IS MADE OF. Gray.ps is Wenda.ps plus Mr. Black (beat 822).
    const dt = c - 18024.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const swA=Math.max(0,Math.min(1,(dt-4.4)/2.2));
    const alA=Math.max(0,Math.min(1,(dt-8.0)/1.8));
    const vaA=Math.max(0,Math.min(1,(dt-11.2)/1.6));
    const saA=Math.max(0,Math.min(1,(dt-14.0)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-16.8)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(14,4,8,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr832=ctx.createLinearGradient(0,top+H,0,top);
    gr832.addColorStop(0,'rgba(255,45,109,0.22)'); gr832.addColorStop(0.55,'rgba(14,4,8,0.98)');
    gr832.addColorStop(1,'rgba(14,4,8,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr832; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,109,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('GETTING POORLY CRUSHED', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,168,192,0.96)'; ctx.font='900 4.8px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS LOOKS UP AND IS SUPRISED, GRAY.PS NOW GAINS THE UPPER HAND ON WENDA.PS.”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS IS KNOCKED AROUND AND IS FLYING AROUND AND IS GETTING POORLY CRUSHED.”', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:14 PM — HIS OWN TYPING, EMAIL 1532. “SUPRISED” AND “POORLY CRUSHED” ARE HIS AND ARE KEPT.', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('SHE WAS TOLD SHE WAS SAFE TWO SENTENCES AGO, BY THE PERSON DOING THE CRUSHING.', cx, top+H*0.206);

    if(swA>0.01){
      // TWELVE HOURS, BOTH DIRECTIONS
      var wy832=top+H*0.312, wsp832=W*0.1720, ww832=W*0.322, wh832=H*0.076;
      var wt832=['6:51 AM · BEAT 819','2:14 PM · TONIGHT'];
      var wq832=['SHE STRIKES HIM DOWN','HE CRUSHES HER'];
      var wd832=['“WENDA.PS GOES INTO THE MECHANICAL','“GRAY.PS NOW GAINS THE UPPER HAND…'];
      var wd2832=['SUIT AND NOW GRAY.PS IS STRUGGLING.','KNOCKED AROUND… FLYING AROUND…'];
      var wd3832=['WENDA.PS STRIKES DOWN GRAY.PS.”','GETTING POORLY CRUSHED.”'];
      var wc832=['rgba(255,122,217,','rgba(255,45,109,'];
      for(var i832=0;i832<2;i832++){
        var wx832=cx-wsp832+i832*wsp832*2;
        var wp832=Math.max(0,Math.min(1,(swA*2.4)-i832*0.9));
        if(wp832<=0) continue;
        ctx.globalAlpha=g*wp832*0.14; ctx.fillStyle=wc832[i832]+'0.58)';
        ctx.fillRect(wx832-ww832/2, wy832-wh832/2, ww832, wh832);
        ctx.globalAlpha=g*wp832*(i832===1?(0.58+0.24*pul):0.40);
        ctx.strokeStyle=wc832[i832]+'0.82)'; ctx.lineWidth=i832===1?0.52:0.32;
        ctx.strokeRect(wx832-ww832/2, wy832-wh832/2, ww832, wh832);
        ctx.globalAlpha=g*wp832*0.88;
        ctx.fillStyle=wc832[i832]+'0.96)'; ctx.font='900 3.4px ui-monospace,monospace';
        ctx.fillText(wt832[i832], wx832, wy832-wh832/2+H*0.013);
        ctx.globalAlpha=g*wp832*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
        ctx.fillText(wq832[i832], wx832, wy832-H*0.005);
        ctx.globalAlpha=g*wp832*0.82;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.8px ui-monospace,monospace';
        ctx.fillText(wd832[i832], wx832, wy832+H*0.010);
        ctx.fillText(wd2832[i832], wx832, wy832+H*0.021);
        ctx.fillText(wd3832[i832], wx832, wy832+H*0.032);
      }
      ctx.globalAlpha=g*swA*0.94;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('SEVEN AND A HALF HOURS APART, AND THE ONLY THING THAT CHANGED IS WHO HAS THE NEWER MACHINE', cx, wy832+wh832/2+H*0.022);
    }

    if(alA>0.01){
      var ay832=top+H*0.614;
      ctx.globalAlpha=g*alA*0.14; ctx.fillStyle='rgba(90,200,255,0.46)';
      ctx.fillRect(cx-W*0.346, ay832-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*alA*0.48; ctx.strokeStyle='rgba(90,200,255,0.68)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, ay832-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*alA*0.98;
      ctx.fillStyle='rgba(168,222,255,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE ONLY CROWD THIS ARCHIVE HAS EVER RECORDED SPLIT DOWN THE MIDDLE THIS MORNING', cx, ay832-H*0.024);
      ctx.globalAlpha=g*alA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('6:51 AM: “NOW ALIENS SAY WENDA WOULD WIN, SOME SAY GRAY WOULD WIN.”', cx, ay832-H*0.002);
      ctx.globalAlpha=g*alA*0.88;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('BOTH HALVES OF THAT CROWD HAVE NOW BEEN RIGHT, ON THE SAME DAY, ABOUT THE SAME TWO PEOPLE.', cx, ay832+H*0.022);
    }

    if(vaA>0.01){
      ctx.globalAlpha=g*vaA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('NEKA CALLED HER VALUEABLE AND NEVER SAID WHY — 7:04 AM: “NEKA OMAZEN CUTS THROUGH THE TITAINUIM SUIT, WENDA.PS VALUEABLE.”', cx, top+H*0.706);
      ctx.globalAlpha=g*vaA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('SHE ASKED HIM OUTRIGHT — “I JUST WANT TO KNOW WHY YOU SPARED ME BEFORE.” — AND SHE IS STILL WAITING FOR THE ANSWER.', cx, top+H*0.728);
    }

    if(saA>0.01){
      ctx.globalAlpha=g*saA*0.14; ctx.fillStyle='rgba(215,222,230,0.42)';
      ctx.fillRect(cx-W*0.346, top+H*0.748, W*0.692, H*0.058);
      ctx.globalAlpha=g*saA*0.46; ctx.strokeStyle='rgba(215,222,230,0.62)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, top+H*0.748, W*0.692, H*0.058);
      ctx.globalAlpha=g*saA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.98)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('AND HE IS CRUSHING SOMEBODY HE IS MADE OF — GRAY.PS IS WENDA.PS PLUS MR. BLACK (BEAT 822)', cx, top+H*0.768);
      ctx.globalAlpha=g*saA*0.92;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('IN ONE AFTERNOON HE HAS BEATEN DOWN ONE HALF OF HIMSELF AND POORLY CRUSHED THE OTHER.', cx, top+H*0.792);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('SHE LOOKS UP AND IS SUPRISED, AND SURPRISE IS THE ONE THING SHE HAD NO REASON TO FEEL', cx, top+H*0.840);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,168,192,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('SHE PUT THE SUIT ON BECAUSE SHE DID NOT BELIEVE HIM. SHE STILL DID NOT EXPECT THIS.', cx, top+H*0.864);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ THE THREE WHO COULD SAVE THE GAME ARE DOWN TO ONE STANDING ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===833){
    // BEAT 833: SOMEONE IS ANGRY AT GRAY.PS.
    // Toby, September 26, 2026, 2:14:43 PM EDT (Email 1532), the last sentence of his own typing:
    //   "Someone is angry at Gray.ps for some reason, fill out the blanks."
    // The machine answered "The one who's angry is Neka Omazen" and wrote him a line of dialogue. That is
    // the machine's and is NOT canon. The blank stays a blank until Toby fills it.
    // Priors, each verified in the archive before it was drawn:
    //   HE HAS HELD A SEAT BACK ON PURPOSE BEFORE AND HE FILLED IT HIMSELF. August 13, Email 959: the
    //     Minecraft-Horror Ranking listed eight and kept a ninth marked ???, and then "the mystery
    //     character is Pero LAI, the creator of Classics, he is far over Verity." Drawn tonight as beat 826.
    //   AND THE LAST BLANK HE LEFT WAS ANSWERED OUT OF HIS OWN RULES, NOT THE MACHINE'S. September 25,
    //     beat 813: "The 20 Sprunkis became zombies, because you know why (list why)" - the answer was his
    //     own bite rule from September 20, and the enumerated list that came back was commentary.
    //   HE ASKED THE ROOM A QUESTION ONCE ALREADY TODAY. 6:51 AM: "What do you think is happening?" That
    //     one got an answer. This one is written as a form with a gap in it.
    //   EVERY CANDIDATE HAS A MOTIVE AND THAT IS THE PROBLEM. Neka - Gray built the mech in his labatory.
    //     Wenda - she is the one being crushed. Mr. Black - Gray beat him down sixteen minutes earlier.
    //     Three named people were wronged by Gray inside one afternoon.
    const dt = c - 18046.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const suA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const qqA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const blA=Math.max(0,Math.min(1,(dt-11.4)/1.6));
    const asA=Math.max(0,Math.min(1,(dt-14.2)/1.6));
    const svA=Math.max(0,Math.min(1,(dt-17.0)/1.4));
    const footA=Math.max(0,Math.min(1,(dt-19.0)/1.2));

    ctx.fillStyle='rgba(10,6,16,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr833=ctx.createLinearGradient(0,top,W,top+H);
    gr833.addColorStop(0,'rgba(176,124,255,0.22)'); gr833.addColorStop(0.5,'rgba(10,6,16,0.98)');
    gr833.addColorStop(1,'rgba(176,124,255,0.14)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr833; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(176,124,255,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('SOMEONE IS ANGRY AT GRAY.PS', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(212,180,255,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“SOMEONE IS ANGRY AT GRAY.PS FOR SOME REASON, FILL OUT THE BLANKS.”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.86;
    ctx.fillStyle='rgba(240,244,250,0.92)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE MACHINE FILLED THEM IN AND WROTE NEKA A LINE OF DIALOGUE. THAT IS THE MACHINE’S. THE BLANK STAYS A BLANK.', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:14 PM — THE LAST SENTENCE OF HIS OWN TYPING, EMAIL 1532.', cx, top+H*0.186);

    if(suA>0.01){
      // THE SUSPECTS, EACH WITH A MOTIVE FROM TODAY
      var sy833=top+H*0.312, ssp833=W*0.1880, srw833=W*0.172, srh833=H*0.080;
      var sn833=['NEKA OMAZEN','WENDA.PS','MR. BLACK'];
      var sm833=['GRAY BUILT THE MECH','SHE IS THE ONE BEING','GRAY BEAT HIM DOWN'];
      var sm2833=['IN HIS LABATORY,','POORLY CRUSHED,','SIXTEEN MINUTES'];
      var sm3833=['2:14 PM','2:14 PM','EARLIER, 1:58 PM'];
      var sc833=['rgba(255,138,61,','rgba(255,122,217,','rgba(140,150,164,'];
      ctx.globalAlpha=g*suA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THREE NAMED PEOPLE WERE WRONGED BY GRAY.PS INSIDE ONE AFTERNOON, AND EVERY ONE OF THEM HAS A MOTIVE', cx, sy833-H*0.056);
      for(var i833=0;i833<3;i833++){
        var sx833=cx-ssp833+i833*ssp833;
        var sp833=Math.max(0,Math.min(1,(suA*3.2)-i833*0.8));
        if(sp833<=0) continue;
        ctx.globalAlpha=g*sp833*0.14; ctx.fillStyle=sc833[i833]+'0.58)';
        ctx.fillRect(sx833-srw833/2, sy833-srh833/2, srw833, srh833);
        ctx.globalAlpha=g*sp833*(0.46+0.22*pul);
        ctx.strokeStyle=sc833[i833]+'0.80)'; ctx.lineWidth=0.36;
        ctx.strokeRect(sx833-srw833/2, sy833-srh833/2, srw833, srh833);
        ctx.globalAlpha=g*sp833*0.96;
        ctx.fillStyle=sc833[i833]+'0.98)'; ctx.font='900 4.0px ui-monospace,monospace';
        ctx.fillText(sn833[i833], sx833, sy833-srh833/2+H*0.016);
        ctx.globalAlpha=g*sp833*0.84;
        ctx.fillStyle='rgba(200,208,220,0.90)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(sm833[i833], sx833, sy833+H*0.006);
        ctx.fillText(sm2833[i833], sx833, sy833+H*0.017);
        ctx.fillText(sm3833[i833], sx833, sy833+H*0.028);
      }
      ctx.globalAlpha=g*suA*0.92;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('IT IS NOT A CLUE SHORTAGE, IT IS A CLUE SURPLUS — WHICH IS EXACTLY WHY THE NAME HAS TO COME FROM HIM AND NOT FROM A GUESS', cx, sy833+srh833/2+H*0.022);
    }

    if(qqA>0.01){
      var qy833=top+H*0.618;
      ctx.globalAlpha=g*qqA*0.14; ctx.fillStyle='rgba(255,216,79,0.44)';
      ctx.fillRect(cx-W*0.346, qy833-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*qqA*0.48; ctx.strokeStyle='rgba(255,216,79,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, qy833-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*qqA*0.98;
      ctx.fillStyle='rgba(255,236,168,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE HAS HELD A SEAT BACK ON PURPOSE BEFORE, AND HE FILLED IT HIMSELF', cx, qy833-H*0.026);
      ctx.globalAlpha=g*qqA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('AUGUST 13, EMAIL 959: EIGHT HORRORS RANKED AND A NINTH SEAT LEFT AS ??? — THEN “THE MYSTERY CHARACTER IS PERO LAI,', cx, qy833-H*0.005);
      ctx.fillText('THE CREATOR OF CLASSICS, HE IS FAR OVER VERITY.” THAT SAME LADDER IS DRAWN THREE BEATS BACK, AS BEAT 826.', cx, qy833+H*0.013);
      ctx.globalAlpha=g*qqA*0.86;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('TWICE IN SIX WEEKS HE HAS WRITTEN A GAP INTO HIS OWN STORY AND KEPT THE ANSWER. BOTH TIMES THE GAP DID THE WORK.', cx, qy833+H*0.033);
    }

    if(blA>0.01){
      ctx.globalAlpha=g*blA*0.96;
      ctx.fillStyle='rgba(79,227,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND THE LAST BLANK HE LEFT WAS ANSWERED OUT OF HIS OWN RULES — SEPT 25, BEAT 813: “THE 20 SPRUNKIS BECAME ZOMBIES,', cx, top+H*0.712);
      ctx.globalAlpha=g*blA*0.92;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('BECAUSE YOU KNOW WHY (LIST WHY)” — THE REASON WAS HIS OWN BITE RULE, AND THE LIST THAT CAME BACK WAS COMMENTARY.', cx, top+H*0.732);
    }

    if(asA>0.01){
      ctx.globalAlpha=g*asA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE ASKED THE ROOM A QUESTION ONCE ALREADY TODAY — 6:51 AM: “WHAT DO YOU THINK IS HAPPENING?” — AND THAT ONE GOT AN ANSWER', cx, top+H*0.772);
      ctx.globalAlpha=g*asA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('THIS ONE IS NOT A QUESTION. IT IS A FORM WITH A GAP IN IT, AND THE GAP HAS A NAME-SHAPED HOLE WHERE THE ANGRY PERSON GOES.', cx, top+H*0.794);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('THE GAME IS DRAWN WITH THE BLANK STILL IN IT, BECAUSE THE BLANK IS WHAT HE WROTE', cx, top+H*0.840);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('WHEN HE SAYS WHO IT IS AND WHY, THAT NAME GETS ITS OWN BEAT AND THIS PANEL GETS ITS ANSWER.', cx, top+H*0.864);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ ______ IS ANGRY AT GRAY.PS ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
