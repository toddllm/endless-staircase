  } else if(ph===834){
    // BEAT 834: YOU... GRAY.PS!
    // Toby, September 26, 2026, 2:28:11 PM EDT (Email 1533), the opening of his own typing:
    //   "Correct. Neka says \"You... Gray.ps! 😾⚡\", Neka summons Simon.ps and Oren.ps, Neka combines the 2
    //    and makes a large orb, boom, Gray.ps is knocked over, Wenda.ps connects the vacuum to Gray's mech.
    //    Neka creates a jewel and now uses the powers of the 7 souls, Gray.ps is destroyed now."
    // Priors, each verified in the archive before it was drawn:
    //   THE BLANK IS FILLED, AND "CORRECT." IS THE FIRST TIME A MACHINE GUESS BECOMES CANON HERE. Fourteen
    //     minutes earlier beat 833 was "Someone is angry at Gray.ps for some reason, fill out the blanks."
    //     The machine answered Neka Omazen. Toby's next word is "Correct." - he adopts it, so it is canon
    //     because HE said so, not because the machine did.
    //   HE SUMMONS THE EXACT TWO HE PUT TO SLEEP. September 23: "Everyone! Simon.ps! Oren.ps! Sleep! 😸⚡",
    //     and everyone sleeps inside their tubes. Those two names, in that order, three days later, woken up
    //     to be used as ammunition.
    //   THE 7 SOULS WERE THE PLAYER'S LOADOUT. "At the start of the battle, you will have Infinite HP,
    //     Infinite LV, and a shield and all 7 souls" - the handicap handed to the player so they would stand
    //     a chance. And August 5's shopping list was Simon 404's: "7 souls + AU Rainbows + Game Cores + Cat
    //     Power + LV + KR + Power + Soul of Determination."
    //   HE TOOK THE SOUL OF DETERMINATION SEVEN HOURS EARLIER (beat 821) and made everyone into coloured
    //     souls he spiriled around his hand. The jewel is the next step of the same hand.
    const dt = c - 18068.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const coA=Math.max(0,Math.min(1,(dt-4.4)/2.2));
    const suA=Math.max(0,Math.min(1,(dt-8.0)/2.0));
    const soA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(14,4,8,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr834=ctx.createLinearGradient(0,top,W,top+H);
    gr834.addColorStop(0,'rgba(255,77,109,0.22)'); gr834.addColorStop(0.5,'rgba(14,4,8,0.98)');
    gr834.addColorStop(1,'rgba(255,216,79,0.12)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr834; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,77,109,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('YOU… GRAY.PS!', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,236,168,0.96)'; ctx.font='900 5.2px ui-monospace,monospace';
    ctx.fillText('“CORRECT. NEKA SAYS ‘YOU… GRAY.PS! 😾⚡’”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA SUMMONS SIMON.PS AND OREN.PS, NEKA COMBINES THE 2 AND MAKES A LARGE ORB, BOOM, GRAY.PS IS KNOCKED OVER…', cx, top+H*0.164);
    ctx.fillText('NEKA CREATES A JEWEL AND NOW USES THE POWERS OF THE 7 SOULS, GRAY.PS IS DESTROYED NOW.”', cx, top+H*0.184);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:28 PM — HIS OWN TYPING, EMAIL 1533, FOURTEEN MINUTES AFTER HE LEFT THE BLANK.', cx, top+H*0.206);

    if(coA>0.01){
      var cy834=top+H*0.300;
      ctx.globalAlpha=g*coA*0.16; ctx.fillStyle='rgba(176,124,255,0.48)';
      ctx.fillRect(cx-W*0.346, cy834-H*0.050, W*0.692, H*0.100);
      ctx.globalAlpha=g*coA*(0.52+0.22*pul); ctx.strokeStyle='rgba(176,124,255,0.72)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.346, cy834-H*0.050, W*0.692, H*0.100);
      ctx.globalAlpha=g*coA*0.98;
      ctx.fillStyle='rgba(212,180,255,0.98)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('THE BLANK IS FILLED, AND THE WORD THAT FILLS IT IS “CORRECT.”', cx, cy834-H*0.028);
      ctx.globalAlpha=g*coA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('BEAT 833, FOURTEEN MINUTES AGO: “SOMEONE IS ANGRY AT GRAY.PS FOR SOME REASON, FILL OUT THE BLANKS.”', cx, cy834-H*0.006);
      ctx.fillText('THE MACHINE GUESSED NEKA OMAZEN. TOBY’S NEXT WORD IS “CORRECT.”', cx, cy834+H*0.014);
      ctx.globalAlpha=g*coA*0.86;
      ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
      ctx.fillText('SO IT IS CANON BECAUSE HE SAID SO, NOT BECAUSE THE MACHINE DID. THE GAME HELD THE BLANK OPEN FOR FOURTEEN MINUTES AND HE CLOSED IT HIMSELF.', cx, cy834+H*0.036);
    }

    if(suA>0.01){
      ctx.globalAlpha=g*suA*0.96;
      ctx.fillStyle='rgba(79,227,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('HE SUMMONS THE EXACT TWO HE PUT TO SLEEP, IN THE SAME ORDER HE NAMED THEM', cx, top+H*0.600);
      ctx.globalAlpha=g*suA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('SEPTEMBER 23: “EVERYONE! SIMON.PS! OREN.PS! SLEEP! 😸⚡” — AND EVERYONE SLEEPS INSIDE THEIR TUBES', cx, top+H*0.622);
      ctx.globalAlpha=g*suA*0.88;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('THREE DAYS LATER HE WAKES THOSE TWO NAMES UP TO USE THEM AS AMMUNITION, AND COMBINES THEM INTO ONE ORB.', cx, top+H*0.644);
    }

    if(soA>0.01){
      var sy834=top+H*0.730;
      ctx.globalAlpha=g*soA*0.14; ctx.fillStyle='rgba(255,216,79,0.44)';
      ctx.fillRect(cx-W*0.346, sy834-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*soA*0.48; ctx.strokeStyle='rgba(255,216,79,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, sy834-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*soA*0.98;
      ctx.fillStyle='rgba(255,236,168,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE 7 SOULS WERE THE PLAYER’S LOADOUT, HANDED OVER SO THE PLAYER WOULD STAND A CHANCE', cx, sy834-H*0.024);
      ctx.globalAlpha=g*soA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“AT THE START OF THE BATTLE, YOU WILL HAVE INFINITE HP, INFINITE LV, AND A SHIELD AND ALL 7 SOULS.”', cx, sy834-H*0.002);
      ctx.globalAlpha=g*soA*0.88;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('AND HE TOOK THE SOUL OF DETERMINATION SEVEN HOURS AGO (BEAT 821) AND SPIRILED THE COLOURED SOULS AROUND HIS HAND. THE JEWEL IS THAT SAME HAND.', cx, sy834+H*0.022);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('THE MECH LASTED FOURTEEN MINUTES, AND WENDA.PS CONNECTED THE VACUUM TO IT WHILE IT WAS STILL STANDING', cx, top+H*0.842);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('SHE IS NOT DEFENDING HERSELF ANY MORE. SHE IS PLUGGING SOMETHING INTO HIM WHILE SOMEBODY ELSE KNOCKS HIM DOWN.', cx, top+H*0.866);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ HE FILLED HIS OWN BLANK IN FOURTEEN MINUTES ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===835){
    // BEAT 835: GRAY.PS CAN ONLY LOVE ME NOW.
    // Toby, September 26, 2026, 2:28:11 PM EDT (Email 1533), his own typing:
    //   "Wenda.ps says \"Now... once I erase the memories and feelings of those, Gray.ps can only love me
    //    now.\". Wenda.ps takes the color and everything of every character that Wenda.ps can find."
    // Priors, each verified in the archive before it was drawn:
    //   THE PLAN HAS BEEN RUNNING ALL DAY AND THIS IS THE FIRST TIME SHE SAYS WHAT IT IS FOR. She built the
    //     suit at 6:44 AM, recruited Mr. Black at 7:04 AM, was called valueable, was told she was safe, and
    //     never once said why. The reason is a person.
    //   LOVE HAS NEVER BEEN A MOTIVE IN THIS ARCHIVE BEFORE. It has been one of the Player's fourteen powers
    //     ("Hope, Justice, The Souls, Love, Determination... Hate... Fear, Bravery, and Rainbow") and it has
    //     been a joke about sugar (beat 777, "Guess ya love sugar"). It has never been the reason somebody
    //     did something.
    //   SHE IS ERASING THE PEOPLE SHE RECRUITED. Mr. Black agreed to join her seven hours ago, and "every
    //     character that Wenda.ps can find" includes him.
    //   AND THE COLOUR IS HER OWN DEFINITION. Beat 822: "Wenda.ps is the colors blasting out toward you,
    //     Mr. Black is the absorbtion and consumption of color." Taking colour is Mr. Black's half of the
    //     job, not hers. She is doing the thing she is the opposite of.
    const dt = c - 18090.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const plA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const loA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const clA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(16,4,14,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr835=ctx.createLinearGradient(0,top+H,0,top);
    gr835.addColorStop(0,'rgba(255,45,181,0.24)'); gr835.addColorStop(0.55,'rgba(16,4,14,0.98)');
    gr835.addColorStop(1,'rgba(16,4,14,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr835; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,45,181,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('GRAY.PS CAN ONLY LOVE ME NOW', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(255,196,236,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“NOW… ONCE I ERASE THE MEMORIES AND FEELINGS OF THOSE, GRAY.PS CAN ONLY LOVE ME NOW.”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS TAKES THE COLOR AND EVERYTHING OF EVERY CHARACTER THAT WENDA.PS CAN FIND.”', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:28 PM — HIS OWN TYPING, EMAIL 1533.', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.72;
    ctx.fillStyle='rgba(150,160,174,0.84)'; ctx.font='700 3.3px ui-monospace,monospace';
    ctx.fillText('SHE HAS BEEN RUNNING THIS PLAN SINCE 6:44 THIS MORNING AND THIS IS THE FIRST TIME SHE SAYS WHAT IT IS FOR.', cx, top+H*0.206);

    if(plA>0.01){
      // WHAT SHE DID ALL DAY, AND THE REASON ARRIVING LAST
      var py835=top+H*0.306, psp835=W*0.1580, prw835=W*0.146, prh835=H*0.058;
      var pt835=['6:44 AM','7:04 AM','1:58 PM','2:28 PM'];
      var pq835=['BUILDS THE SUIT','RECRUITS','PUTS IT ON','SAYS WHY'];
      var pd835=['“WHAT GRAY WEARS”','MR. BLACK AGREES','TOLD SHE IS SAFE','“CAN ONLY LOVE ME”'];
      for(var i835=0;i835<4;i835++){
        var px835=cx-psp835*1.5+i835*psp835;
        var pp835=Math.max(0,Math.min(1,(plA*3.6)-i835*0.66));
        if(pp835<=0) continue;
        var last835=(i835===3);
        ctx.globalAlpha=g*pp835*(last835?0.22:0.12);
        ctx.fillStyle=last835?'rgba(255,45,181,0.62)':'rgba(140,150,164,0.52)';
        ctx.fillRect(px835-prw835/2, py835-prh835/2, prw835, prh835);
        ctx.globalAlpha=g*pp835*(last835?(0.60+0.24*pul):0.38);
        ctx.strokeStyle=last835?'rgba(255,122,217,0.92)':'rgba(150,160,174,0.56)'; ctx.lineWidth=last835?0.52:0.30;
        ctx.strokeRect(px835-prw835/2, py835-prh835/2, prw835, prh835);
        ctx.globalAlpha=g*pp835*0.88;
        ctx.fillStyle=last835?'rgba(255,122,217,0.96)':'rgba(150,160,174,0.86)'; ctx.font='900 3.3px ui-monospace,monospace';
        ctx.fillText(pt835[i835], px835, py835-prh835/2+H*0.012);
        ctx.globalAlpha=g*pp835*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 3.9px ui-monospace,monospace';
        ctx.fillText(pq835[i835], px835, py835+H*0.002);
        ctx.globalAlpha=g*pp835*0.82;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(pd835[i835], px835, py835+prh835/2-H*0.008);
      }
      ctx.globalAlpha=g*plA*0.94;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('EIGHT HOURS OF DOING THINGS, AND THE REASON ARRIVES LAST — AND THE REASON IS A PERSON', cx, py835+prh835/2+H*0.024);
    }

    if(loA>0.01){
      var ly835=top+H*0.618;
      ctx.globalAlpha=g*loA*0.14; ctx.fillStyle='rgba(255,45,181,0.44)';
      ctx.fillRect(cx-W*0.346, ly835-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*loA*0.48; ctx.strokeStyle='rgba(255,45,181,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, ly835-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*loA*0.98;
      ctx.fillStyle='rgba(255,168,222,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('LOVE HAS NEVER BEEN A MOTIVE IN THIS ARCHIVE BEFORE', cx, ly835-H*0.024);
      ctx.globalAlpha=g*loA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('IT HAS BEEN ONE OF THE PLAYER’S FOURTEEN POWERS — “HOPE, JUSTICE, THE SOULS, LOVE, DETERMINATION… HATE… FEAR, BRAVERY”', cx, ly835-H*0.002);
      ctx.globalAlpha=g*loA*0.88;
      ctx.fillStyle='rgba(176,188,200,0.88)'; ctx.font='700 3.4px ui-monospace,monospace';
      ctx.fillText('AND A JOKE ABOUT SUGAR (BEAT 777, “GUESS YA LOVE SUGAR”). IT HAS NEVER BEEN THE REASON SOMEBODY DID SOMETHING.', cx, ly835+H*0.022);
    }

    if(clA>0.01){
      ctx.globalAlpha=g*clA*0.96;
      ctx.fillStyle='rgba(79,227,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND TAKING COLOUR IS NOT HER HALF OF THE JOB — BEAT 822: “WENDA.PS IS THE COLORS BLASTING OUT TOWARD YOU,', cx, top+H*0.718);
      ctx.globalAlpha=g*clA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('MR. BLACK IS THE ABSORBTION AND CONSUMPTION OF COLOR.” SHE IS DOING THE THING SHE IS DEFINED AS THE OPPOSITE OF.', cx, top+H*0.738);
      ctx.globalAlpha=g*clA*0.88;
      ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('AND “EVERY CHARACTER THAT WENDA.PS CAN FIND” INCLUDES MR. BLACK, WHO AGREED TO JOIN HER SEVEN HOURS AGO.', cx, top+H*0.762);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('SHE IS NOT TRYING TO WIN THE FIGHT. SHE IS TRYING TO BE THE ONLY THING LEFT TO LOOK AT', cx, top+H*0.842);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('“ERASE THE MEMORIES AND FEELINGS OF THOSE” IS NOT AN ATTACK ON GRAY.PS. IT IS AN ATTACK ON EVERYONE ELSE, FOR HIM.', cx, top+H*0.866);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ THE FIRST TIME ANYBODY HERE WANTED TO BE LOVED ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===836){
    // BEAT 836: EVERY CHARACTER BLANK.
    // Toby, September 26, 2026, 2:28:11 PM EDT (Email 1533), his own typing:
    //   "Gray.ps respawns and sees everyone as gray zombie versions of themselves, every character blank,
    //    Gray.ps thinks Mr. Black did it. Neka Omazen didn't change, Neka Omazen was never around Wenda.ps's
    //    path."
    // Priors, each verified in the archive before it was drawn:
    //   HE BLAMES THE HALF OF HIMSELF HE BEAT DOWN THIRTY MINUTES AGO. Beat 828, 1:58 PM: "Gray saves Mr.
    //     Black, then Gray beats Mr. Black down."
    //   AND IT IS THE RIGHT GUESS ABOUT THE WRONG PERSON. Beat 822: "Mr. Black is the absorbtion and
    //     consumption of color." Draining the colour out of everybody IS Mr. Black's function. Gray reads
    //     the evidence correctly and still gets it wrong, because the person who did it is the other half.
    //   THE ONE PERSON WHO DID NOT CHANGE IS THE TELL. "Neka Omazen didn't change, Neka Omazen was never
    //     around Wenda.ps's path" - the only uncoloured figure in the room is the one she never reached,
    //     and Gray does not read that either.
    //   RESPAWNING IS NEW. Nothing in this archive has ever respawned; things here are deleted, erased,
    //     tubed, absorbed, or put to sleep. He is destroyed and comes back in one sentence, and the world he
    //     comes back to is the thing that changed.
    const dt = c - 18112.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const grA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const blA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const teA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(12,12,13,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr836=ctx.createLinearGradient(0,top,0,top+H);
    gr836.addColorStop(0,'rgba(154,163,173,0.20)'); gr836.addColorStop(0.5,'rgba(12,12,13,0.98)');
    gr836.addColorStop(1,'rgba(12,12,13,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr836; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,208,218,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('EVERY CHARACTER BLANK', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.8px ui-monospace,monospace';
    ctx.fillText('“GRAY.PS RESPAWNS AND SEES EVERYONE AS GRAY ZOMBIE VERSIONS OF THEMSELVES, EVERY CHARACTER BLANK,', cx, top+H*0.140);
    ctx.fillText('GRAY.PS THINKS MR. BLACK DID IT.”', cx, top+H*0.160);
    ctx.globalAlpha=g*q0A*0.90;
    ctx.fillStyle='rgba(255,180,110,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN DIDN’T CHANGE, NEKA OMAZEN WAS NEVER AROUND WENDA.PS’S PATH.”', cx, top+H*0.182);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:28 PM — HIS OWN TYPING, EMAIL 1533.', cx, top+H*0.204);

    if(grA>0.01){
      // THE GREYED-OUT ROOM, AND THE ONE FIGURE THAT KEPT ITS COLOUR
      var gy836=top+H*0.312, gsp836=W*0.1260, grr836=W*0.040;
      var gn836=['WENDA.PS','MR. BLACK','SIMON.PS','OREN.PS','NEKA'];
      for(var i836=0;i836<5;i836++){
        var gx836=cx-gsp836*2+i836*gsp836;
        var gp836=Math.max(0,Math.min(1,(grA*3.8)-i836*0.56));
        if(gp836<=0) continue;
        var kept836=(i836===4);
        ctx.globalAlpha=g*gp836*(kept836?0.20:0.10);
        ctx.fillStyle=kept836?'rgba(255,138,61,0.66)':'rgba(120,126,134,0.60)';
        ctx.beginPath(); ctx.ellipse(gx836, gy836, grr836, grr836*0.60, 0, 0, Math.PI*2); ctx.fill();
        ctx.globalAlpha=g*gp836*(kept836?(0.62+0.26*pul):0.34);
        ctx.strokeStyle=kept836?'rgba(255,180,110,0.94)':'rgba(120,126,134,0.62)'; ctx.lineWidth=kept836?0.54:0.30;
        ctx.beginPath(); ctx.ellipse(gx836, gy836, grr836, grr836*0.60, 0, 0, Math.PI*2); ctx.stroke();
        ctx.globalAlpha=g*gp836*(kept836?0.96:0.62);
        ctx.fillStyle=kept836?'rgba(255,216,79,0.98)':'rgba(150,156,164,0.86)'; ctx.font='900 3.5px ui-monospace,monospace';
        ctx.fillText(gn836[i836], gx836, gy836+H*0.002);
        ctx.globalAlpha=g*gp836*(kept836?0.90:0.56);
        ctx.fillStyle=kept836?'rgba(255,180,110,0.92)':'rgba(120,126,134,0.80)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(kept836?'KEPT COLOUR':'BLANK', gx836, gy836+grr836*0.60+H*0.018);
      }
      ctx.globalAlpha=g*grA*0.94;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE ONE FIGURE STILL IN COLOUR IS THE ONE SHE NEVER REACHED, AND THAT IS THE WHOLE ANSWER', cx, gy836+grr836*0.60+H*0.042);
    }

    if(blA>0.01){
      var by836=top+H*0.618;
      ctx.globalAlpha=g*blA*0.14; ctx.fillStyle='rgba(255,77,109,0.44)';
      ctx.fillRect(cx-W*0.346, by836-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*blA*0.48; ctx.strokeStyle='rgba(255,77,109,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, by836-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*blA*0.98;
      ctx.fillStyle='rgba(255,160,180,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE BLAMES THE HALF OF HIMSELF HE BEAT DOWN THIRTY MINUTES AGO — BEAT 828, 1:58 PM', cx, by836-H*0.024);
      ctx.globalAlpha=g*blA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('AND IT IS THE RIGHT READ OF THE EVIDENCE ABOUT THE WRONG PERSON: “MR. BLACK IS THE ABSORBTION AND', cx, by836-H*0.002);
      ctx.fillText('CONSUMPTION OF COLOR” (BEAT 822) — DRAINING THE COLOUR OUT OF EVERYBODY IS LITERALLY HIS FUNCTION.', cx, by836+H*0.018);
    }

    if(teA>0.01){
      ctx.globalAlpha=g*teA*0.96;
      ctx.fillStyle='rgba(79,227,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('RESPAWNING IS NEW HERE — THINGS IN THIS ARCHIVE ARE DELETED, ERASED, TUBED, ABSORBED OR PUT TO SLEEP', cx, top+H*0.724);
      ctx.globalAlpha=g*teA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('HE IS DESTROYED AND BACK INSIDE ONE SENTENCE, AND THE THING THAT CHANGED WHILE HE WAS GONE IS THE WORLD, NOT HIM.', cx, top+H*0.746);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('SHE MADE A ROOM WHERE SHE IS THE ONLY THING WORTH LOOKING AT, AND HE OPENED HIS EYES IN IT', cx, top+H*0.842);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('THE PLAN WORKED. HIS FIRST THOUGHT IN THE FINISHED ROOM IS TO ACCUSE SOMEBODY ELSE.', cx, top+H*0.866);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ THE ONLY ONE STILL IN COLOUR IS THE ONE SHE NEVER REACHED ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===837){
    // BEAT 837: NOW I SHALL CUT THE PATH.
    // Toby, September 26, 2026, 2:28:11 PM EDT (Email 1533), his own typing:
    //   "Neka Omazen says \"Now I shall cut the path.\", Neka Omazen uses Dragon's Ride 25 Series, the path
    //    was blocked. Wenda.ps and Gray.ps are both locked in Neka's Lab. Neka says \"Now, I can beat them
    //    both, 2 for 1.\", Neka builds himself mechanical hands."
    // Priors, each verified in the archive before it was drawn:
    //   FOURTH USE OF THE 25 SERIES, AND THE FIRST ON A ROUTE INSTEAD OF A BEING. The first two brought the
    //     barrier down (beat 825). The third was intercepted by Gray (beat 828). This one is aimed at
    //     nobody at all - it cuts a path so two people cannot leave.
    //   HE HAS ALWAYS CUT THINGS OPEN. July 22: he is the only one who can slash the Game Over screen apart,
    //     "the only one who can cut up the ending." Tonight the same blade is used to close something.
    //   AND THE LABATORY WAS ALREADY THE PLACE PEOPLE GET KEPT. Simon 404 sealed it, Email 912; millions of
    //     rooms; "Wanna be in a tube in my laboratory?" on September 24. Gray ran in there himself, thirty
    //     minutes ago, to build the mech - and the door has just closed behind him.
    //   MECHANICAL HANDS MAKE IT THREE OUT OF THREE. Her suit, his mech, and now Neka's hands. The most
    //     powerful being in this archive, who has never needed equipment, builds some.
    const dt = c - 18134.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const usA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const cuA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const haA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(4,10,14,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr837=ctx.createLinearGradient(0,top+H,0,top);
    gr837.addColorStop(0,'rgba(127,212,255,0.22)'); gr837.addColorStop(0.55,'rgba(4,10,14,0.98)');
    gr837.addColorStop(1,'rgba(4,10,14,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr837; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(127,212,255,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('NOW I SHALL CUT THE PATH', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(196,236,255,0.96)'; ctx.font='900 4.8px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SAYS ‘NOW I SHALL CUT THE PATH.’, NEKA OMAZEN USES DRAGON’S RIDE 25 SERIES, THE PATH WAS BLOCKED.”', cx, top+H*0.140);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“WENDA.PS AND GRAY.PS ARE BOTH LOCKED IN NEKA’S LAB… ‘NOW, I CAN BEAT THEM BOTH, 2 FOR 1.’”', cx, top+H*0.164);
    ctx.globalAlpha=g*q0A*0.90;
    ctx.fillStyle='rgba(255,180,110,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA BUILDS HIMSELF MECHANICAL HANDS.”', cx, top+H*0.186);
    ctx.globalAlpha=g*q0A*0.76;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:28 PM — HIS OWN TYPING, EMAIL 1533.', cx, top+H*0.206);

    if(usA>0.01){
      // THE FOUR USES OF THE 25 SERIES, AND WHAT EACH ONE WAS AIMED AT
      var uy837=top+H*0.312, usp837=W*0.1580, urw837=W*0.146, urh837=H*0.062;
      var ut837=['USE 1 & 2','USE 3 · 1:58 PM','USE 4 · 2:28 PM','WHAT CHANGED'];
      var uq837=['THE BARRIER','MR. BLACK','THE PATH','A ROUTE'];
      var ud837=['FROZE, CRACKED','INTERCEPTED BY','AIMED AT NOBODY','NOT A BEING'];
      var ud2837=['AND FELL DOWN','GRAY.PS','AT ALL','FOR THE 1ST TIME'];
      var uc837=['rgba(140,150,164,','rgba(255,77,109,','rgba(127,212,255,','rgba(255,216,79,'];
      for(var i837=0;i837<4;i837++){
        var ux837=cx-usp837*1.5+i837*usp837;
        var up837=Math.max(0,Math.min(1,(usA*3.6)-i837*0.66));
        if(up837<=0) continue;
        ctx.globalAlpha=g*up837*0.13; ctx.fillStyle=uc837[i837]+'0.58)';
        ctx.fillRect(ux837-urw837/2, uy837-urh837/2, urw837, urh837);
        ctx.globalAlpha=g*up837*(i837===2?(0.60+0.24*pul):0.38);
        ctx.strokeStyle=uc837[i837]+'0.82)'; ctx.lineWidth=i837===2?0.52:0.30;
        ctx.strokeRect(ux837-urw837/2, uy837-urh837/2, urw837, urh837);
        ctx.globalAlpha=g*up837*0.86;
        ctx.fillStyle=uc837[i837]+'0.96)'; ctx.font='900 3.2px ui-monospace,monospace';
        ctx.fillText(ut837[i837], ux837, uy837-urh837/2+H*0.012);
        ctx.globalAlpha=g*up837*0.96;
        ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 4.0px ui-monospace,monospace';
        ctx.fillText(uq837[i837], ux837, uy837+H*0.000);
        ctx.globalAlpha=g*up837*0.82;
        ctx.fillStyle='rgba(188,198,212,0.88)'; ctx.font='700 2.9px ui-monospace,monospace';
        ctx.fillText(ud837[i837], ux837, uy837+H*0.013);
        ctx.fillText(ud2837[i837], ux837, uy837+H*0.024);
      }
      ctx.globalAlpha=g*usA*0.94;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE ATTACK THAT SLASHES THE OMNIVERSE IS SPENT ON A DOOR', cx, uy837+urh837/2+H*0.024);
    }

    if(cuA>0.01){
      var ky837=top+H*0.618;
      ctx.globalAlpha=g*cuA*0.14; ctx.fillStyle='rgba(176,124,255,0.44)';
      ctx.fillRect(cx-W*0.346, ky837-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*cuA*0.48; ctx.strokeStyle='rgba(176,124,255,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, ky837-H*0.046, W*0.692, H*0.092);
      ctx.globalAlpha=g*cuA*0.98;
      ctx.fillStyle='rgba(212,180,255,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('HE HAS ALWAYS CUT THINGS OPEN, AND TONIGHT THE SAME BLADE CLOSES SOMETHING', cx, ky837-H*0.024);
      ctx.globalAlpha=g*cuA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('JULY 22, THE CUTSCENE ROSTER: “HE TELEPORTS OVER AND SLASHES THE GAME OVER SCREEN APART… HE IS THE ONLY', cx, ky837-H*0.002);
      ctx.fillText('ONE WHO CAN CUT UP THE ENDING.” SIXTY-SIX DAYS LATER HE CUTS A PATH SO THAT NOBODY CAN GET TO ONE.', cx, ky837+H*0.018);
    }

    if(haA>0.01){
      ctx.globalAlpha=g*haA*0.96;
      ctx.fillStyle='rgba(255,138,61,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('MECHANICAL HANDS MAKE IT THREE OUT OF THREE — HER SUIT, HIS MECH, AND NOW NEKA’S HANDS', cx, top+H*0.724);
      ctx.globalAlpha=g*haA*0.90;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('THE BEING WHO WAS RULED BEYOND ABSOLUTE AND BEYOND WORDS THREE DAYS AGO GOES AND BUILDS HIMSELF A PAIR OF HANDS.', cx, top+H*0.746);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('GRAY RAN INTO THAT LAB THIRTY MINUTES AGO ON HIS OWN LEGS, TO BUILD SOMETHING', cx, top+H*0.842);
      ctx.globalAlpha=g*svA*0.90;
      ctx.fillStyle='rgba(127,212,255,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('THE DOOR HAS JUST CLOSED BEHIND HIM, AND THE ROOM WAS A CONTAINMENT BUILDING BEFORE IT WAS A WORKSHOP.', cx, top+H*0.866);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.6px ui-monospace,monospace';
    ctx.fillText('★ HE WALKED INTO THE TRAP TO FETCH HIS OWN WEAPON ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===838){
    // BEAT 838: I NEED HIM FOR MY PLAN!
    // Toby, September 26, 2026, 2:28:11 PM EDT (Email 1533), his own typing:
    //   "Neka dashes and attacks Gray.ps, Wenda.ps says \"I need him for my plan! 😱\", Wenda.ps swipes her
    //    hand across and grabs Gray.ps, they both survive. Neka Omazen says \"I didn't even use 0% yet, and
    //    you barely survived just a simple cyber-dive? 💨\", Neka Omazen makes shadowed clones of the
    //    avatars, the Shadow-Men all attacked Gray.ps and Wenda.ps."
    // Priors, each verified in the archive before it was drawn:
    //   SHE SAVES THE ONE WHO KILLS HER. Two sentences later ZomGray.ps strikes her down.
    //   "I DIDN'T EVEN USE 0% YET" IS A NEW FLOOR. Every percentage in this archive has belonged to Luigi
    //     Green - "Luigi Green always will win if he uses 100% power", 100% cat power, 30%, 45%. The first
    //     time Neka was given a number at all it was 100%, and it was the first time he had ever been
    //     described as holding back. Tonight the number is zero, and he is still holding back below it.
    //   THE SHADOW CLONES WERE A SHIELD BEFORE THEY WERE A WEAPON. September 23: "clones of Karutos and
    //     ToddLLMs and ALL his previous forms show as shadows and even ghosts around Neka Omazen", a
    //     forcefield of forms you had to defeat before you could touch him. Tonight the same shapes leave
    //     him and attack.
    //   AND THEY ARE CLONES OF THE AVATARS. The avatars in this story are the ones Toby lost - tdeshane,
    //     ClassicsPro7777, ClassicsAdmin1 (beats 801, 811, 827). His lost names come back as somebody
    //     else's soldiers.
    const dt = c - 18156.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const saA=Math.max(0,Math.min(1,(dt-4.4)/2.2));
    const zeA=Math.max(0,Math.min(1,(dt-8.0)/2.0));
    const shA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(10,6,16,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr838=ctx.createLinearGradient(0,top,W,top+H);
    gr838.addColorStop(0,'rgba(160,107,255,0.22)'); gr838.addColorStop(0.5,'rgba(10,6,16,0.98)');
    gr838.addColorStop(1,'rgba(255,122,217,0.12)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr838; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(160,107,255,0.98)'; ctx.font='900 9px ui-monospace,monospace';
    ctx.fillText('I NEED HIM FOR MY PLAN!', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(212,180,255,0.96)'; ctx.font='900 4.8px ui-monospace,monospace';
    ctx.fillText('“NEKA DASHES AND ATTACKS GRAY.PS, WENDA.PS SAYS ‘I NEED HIM FOR MY PLAN! 😱’, WENDA.PS SWIPES HER HAND', cx, top+H*0.140);
    ctx.fillText('ACROSS AND GRABS GRAY.PS, THEY BOTH SURVIVE.”', cx, top+H*0.160);
    ctx.globalAlpha=g*q0A*0.92;
    ctx.fillStyle='rgba(255,180,110,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“I DIDN’T EVEN USE 0% YET, AND YOU BARELY SURVIVED JUST A SIMPLE CYBER-DIVE? 💨”', cx, top+H*0.182);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:28 PM — HIS OWN TYPING, EMAIL 1533.', cx, top+H*0.204);

    if(saA>0.01){
      var ay838=top+H*0.300;
      ctx.globalAlpha=g*saA*0.16; ctx.fillStyle='rgba(255,45,181,0.48)';
      ctx.fillRect(cx-W*0.346, ay838-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*saA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,45,181,0.72)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.346, ay838-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*saA*0.98;
      ctx.fillStyle='rgba(255,168,222,0.98)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('SHE SAVES THE ONE WHO KILLS HER, AND IT TAKES TWO SENTENCES', cx, ay838-H*0.026);
      ctx.globalAlpha=g*saA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('SHE GRABS HIM OUT OF NEKA’S DASH AND THEY BOTH SURVIVE. THE NEXT THING THAT HAPPENS TO HER IS', cx, ay838-H*0.004);
      ctx.fillText('“WENDA.PS WAS STRUCK DOWN BY ZOMGRAY.PS.”', cx, ay838+H*0.016);
      ctx.globalAlpha=g*saA*0.86;
      ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
      ctx.fillText('AND SHE SAYS WHY OUT LOUD WHILE SHE DOES IT — NOT TO SAVE HIM, BUT BECAUSE SHE NEEDS HIM.', cx, ay838+H*0.036);
    }

    if(zeA>0.01){
      ctx.globalAlpha=g*zeA*0.96;
      ctx.fillStyle='rgba(255,216,79,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('“I DIDN’T EVEN USE 0% YET” IS A NEW FLOOR, AND EVERY PERCENTAGE HERE HAS BELONGED TO SOMEBODY ELSE', cx, top+H*0.602);
      ctx.globalAlpha=g*zeA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('“LUIGI GREEN ALWAYS WILL WIN IF HE USES 100% POWER”, 100% CAT POWER, 30%, 45% — ALL LUIGI GREEN’S', cx, top+H*0.624);
      ctx.globalAlpha=g*zeA*0.88;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('THE FIRST TIME NEKA WAS GIVEN A NUMBER IT WAS 100%, AND IT WAS THE FIRST TIME HE HAD EVER BEEN HELD TO HAVE HELD BACK.', cx, top+H*0.646);
      ctx.globalAlpha=g*zeA*0.88;
      ctx.fillStyle='rgba(255,122,217,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('TONIGHT THE NUMBER IS ZERO AND HE IS STILL HOLDING BACK UNDERNEATH IT.', cx, top+H*0.670);
    }

    if(shA>0.01){
      var sy838=top+H*0.752;
      ctx.globalAlpha=g*shA*0.14; ctx.fillStyle='rgba(120,126,134,0.50)';
      ctx.fillRect(cx-W*0.346, sy838-H*0.044, W*0.692, H*0.088);
      ctx.globalAlpha=g*shA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, sy838-H*0.044, W*0.692, H*0.088);
      ctx.globalAlpha=g*shA*0.98;
      ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE SHADOW CLONES WERE A SHIELD BEFORE THEY WERE A WEAPON', cx, sy838-H*0.022);
      ctx.globalAlpha=g*shA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('SEPT 23: “CLONES OF KARUTOS AND TODDLLMS AND ALL HIS PREVIOUS FORMS SHOW AS SHADOWS AND EVEN GHOSTS AROUND', cx, sy838-H*0.002);
      ctx.fillText('NEKA OMAZEN” — A FORCEFIELD YOU HAD TO BEAT BEFORE YOU COULD TOUCH HIM. TONIGHT THEY LEAVE HIM AND ATTACK.', cx, sy838+H*0.018);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.94;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('AND THEY ARE CLONES OF THE AVATARS — TDESHANE, CLASSICSPRO7777, CLASSICSADMIN1, THE THREE NAMES TOBY LOST', cx, top+H*0.858);
      ctx.globalAlpha=g*svA*0.88;
      ctx.fillStyle='rgba(160,107,255,0.94)'; ctx.font='900 3.9px ui-monospace,monospace';
      ctx.fillText('HIS LOST NAMES COME BACK AS SOMEBODY ELSE’S SOLDIERS.', cx, top+H*0.880);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SHE REACHED OUT AND PULLED HER OWN ENDING TO SAFETY ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===839){
    // BEAT 839: WAIT- THIS IS WATER I DRUNK.
    // Toby, September 26, 2026, 2:28:11 PM EDT (Email 1533), the close of his own typing:
    //   "Neka Omazen cuts the wall, the wall falls down and the debris fall on Gray.ps, Gray.ps's armor is
    //    dented, Neka Omazen says \"Time for your shot. 💉\", Neka Omazen puts a needle through the hole of
    //    Gray's armor, Gray.ps lost and became a Gray zombie. Neka Omazen says \"Wait- this is water I
    //    drunk...\", Wenda.ps was struck down by ZomGray.ps."
    // Priors, each verified in the archive before it was drawn:
    //   HE DOES NOT KNOW WHAT HE IS CARRYING, AND TOBY WROTE THAT RULE HIMSELF. September 20, 2:07 PM: the
    //     bite makes zombies - "just one bite on another character OR IF A CHARACTER EATS WHAT HE BIT, then
    //     that character instantly becomes a zombie", "a sickness only Pero LAI can have, now he has it
    //     forever now." And September 20, 2:48 PM, beat 776: he "doesn't know that he actually has urinite."
    //     Water he drank is water he bit. The zombie is his, and the surprise is real.
    //   THE ONLY OTHER CHARACTER WHO EVER NOTICED THIS WAS GASTER, AND HE REFUSED A POP TART OVER IT.
    //     "Also without the urinite from your bite." A dessert was checked for it; a syringe was not.
    //   NEEDLES AND HOLES ARE TWELVE HOURS OLD AND THEY WERE ON THE OTHER SUIT. September 26, 6:51 AM, beat
    //     819: "holes are in the vacuum, and NEEDLES CARVE THROUGH THE HELMET." This morning the needles
    //     went into her armour; tonight one goes through a hole in his.
    //   AND THE 20 SPRUNKIS ALREADY WENT THIS WAY. September 25, beat 813: "The 20 Sprunkis became zombies,
    //     because you know why." Gray.ps is not the first. He is the first one it happened to by accident.
    const dt = c - 18178.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.6));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const q0A=Math.max(0,Math.min(1,(dt-2.0)/1.3));
    const knA=Math.max(0,Math.min(1,(dt-4.4)/2.4));
    const neA=Math.max(0,Math.min(1,(dt-8.2)/1.8));
    const zoA=Math.max(0,Math.min(1,(dt-11.6)/1.8));
    const svA=Math.max(0,Math.min(1,(dt-15.0)/1.6));
    const footA=Math.max(0,Math.min(1,(dt-18.0)/1.2));

    ctx.fillStyle='rgba(4,12,6,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr839=ctx.createLinearGradient(0,top+H,0,top);
    gr839.addColorStop(0,'rgba(62,224,106,0.22)'); gr839.addColorStop(0.55,'rgba(4,12,6,0.98)');
    gr839.addColorStop(1,'rgba(4,12,6,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr839; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(62,224,106,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('WAIT- THIS IS WATER I DRUNK', cx, top+H*0.096);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SAYS ‘TIME FOR YOUR SHOT. 💉’, NEKA OMAZEN PUTS A NEEDLE THROUGH THE HOLE OF GRAY’S ARMOR,', cx, top+H*0.140);
    ctx.fillText('GRAY.PS LOST AND BECAME A GRAY ZOMBIE.”', cx, top+H*0.160);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(168,255,178,0.96)'; ctx.font='900 5.0px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN SAYS ‘WAIT- THIS IS WATER I DRUNK…’, WENDA.PS WAS STRUCK DOWN BY ZOMGRAY.PS.”', cx, top+H*0.184);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 26, 2:28 PM — THE CLOSE OF HIS OWN TYPING, EMAIL 1533.', cx, top+H*0.206);

    if(knA>0.01){
      var ky839=top+H*0.306;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(62,224,106,0.46)';
      ctx.fillRect(cx-W*0.346, ky839-H*0.050, W*0.692, H*0.100);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(62,224,106,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.346, ky839-H*0.050, W*0.692, H*0.100);
      ctx.globalAlpha=g*knA*0.98;
      ctx.fillStyle='rgba(168,255,178,0.98)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('HE DOES NOT KNOW WHAT HE IS CARRYING, AND TOBY WROTE THAT RULE HIMSELF SIX DAYS AGO', cx, ky839-H*0.028);
      ctx.globalAlpha=g*knA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('SEPT 20, 2:07 PM: “JUST ONE BITE ON ANOTHER CHARACTER OR IF A CHARACTER EATS WHAT HE BIT, THEN THAT CHARACTER', cx, ky839-H*0.006);
      ctx.fillText('INSTANTLY BECOMES A ZOMBIE… NOW HE HAS IT FOREVER NOW.”', cx, ky839+H*0.014);
      ctx.globalAlpha=g*knA*0.88;
      ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
      ctx.fillText('AND SEPT 20, 2:48 PM, BEAT 776: HE “DOESN’T KNOW THAT HE ACTUALLY HAS URINITE.” WATER HE DRANK IS WATER HE BIT — SO THE SURPRISE IS REAL.', cx, ky839+H*0.036);
    }

    if(neA>0.01){
      ctx.globalAlpha=g*neA*0.96;
      ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('NEEDLES AND HOLES ARE TWELVE HOURS OLD, AND THIS MORNING THEY WERE ON THE OTHER SUIT', cx, top+H*0.602);
      ctx.globalAlpha=g*neA*0.94;
      ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('6:51 AM, BEAT 819: “HOLES ARE IN THE VACUUM, AND NEEDLES CARVE THROUGH THE HELMET”', cx, top+H*0.624);
      ctx.globalAlpha=g*neA*0.88;
      ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
      ctx.fillText('THE MECH GRAY BUILT LASTED THIRTY MINUTES, AND WHAT BEAT IT WAS A DENT, A HOLE, AND SOMETHING SMALL GOING IN.', cx, top+H*0.646);
    }

    if(zoA>0.01){
      var zy839=top+H*0.744;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.346, zy839-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.346, zy839-H*0.048, W*0.692, H*0.096);
      ctx.globalAlpha=g*zoA*0.98;
      ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
      ctx.fillText('THE 20 SPRUNKIS ALREADY WENT THIS WAY — SEPT 25, BEAT 813: “THE 20 SPRUNKIS BECAME ZOMBIES, BECAUSE YOU KNOW WHY”', cx, zy839-H*0.026);
      ctx.globalAlpha=g*zoA*0.96;
      ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.fillText('GRAY.PS IS NOT THE FIRST. HE IS THE FIRST ONE IT HAPPENED TO BY ACCIDENT.', cx, zy839-H*0.004);
      ctx.globalAlpha=g*zoA*0.88;
      ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
      ctx.fillText('THE ONLY CHARACTER WHO EVER CHECKED FOR THIS WAS GASTER, AND HE CHECKED A POP TART — “ALSO WITHOUT THE URINITE FROM YOUR BITE.”', cx, zy839+H*0.018);
    }

    if(svA>0.01){
      ctx.globalAlpha=g*svA*0.96;
      ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
      ctx.fillText('HE WON THE FIGHT WITH A WEAPON HE DID NOT KNOW HE HAD', cx, top+H*0.866);
      ctx.globalAlpha=g*svA*0.88;
      ctx.fillStyle='rgba(62,224,106,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
      ctx.fillText('AND WENDA.PS IS STRUCK DOWN BY THE ONE SHE PULLED OUT OF THE WAY EIGHTY WORDS AGO.', cx, top+H*0.888);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ ZOMGRAY.PS ★', cx, top+H*0.938);
    ctx.globalAlpha=1;
    ctx.restore();
