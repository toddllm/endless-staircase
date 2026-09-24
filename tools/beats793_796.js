  } else if(ph===793){
    // BEAT 793: FIVE HEADS AND NO EYES.
    // Toby, September 24, 2026, 4:37:42 PM EDT, thread "Even (6x) more of Neka Omazen". The message carries
    // TWO blocks of his own typing -- the opening paragraph and the "Chapter 2 / Excuse me?" paragraph. The
    // long Three Way Heroes excerpt between them is a pasted book chapter already built as earlier beats, and
    // everything after "That is a major separation point in the lore." is a pasted recap. Neither is canon.
    // His own words, drawn here, are inside what Neka Omazen writes down:
    //   "Defeating everyone gave a light among all of them, the tubes glow, and from the light the orbs
    //    combined, then suddenly, a terrifying beast emerges from the light, it's claws scratched the
    //    titainuim floor, and it has 5 heads, and no eyes."
    // Priors, each verified in the archive before it was drawn:
    //   THE ROOM OF MANY TUBES, September 20, 6:40 AM - "The secret is a room of many tubes, he will try to
    //     contain everyone in one." The tubes were built as a container. This is the first time they produce.
    //   CURRENTLY PROPERTY OF NEKA OMAZEN, September 23, 5:41 PM (beat 791) - "everyone sleeps inside their
    //     tubes", the jar thrown in a tube, and "he makes infinity orbs of every color." The orbs are his own.
    //   ONLY THE DIAMOND EYES, this morning 6:43 AM (beat 792) - "they see the diamond eyes and can only see
    //     the diamond eyes." Ten hours later the thing he builds has none. "no eyes" has ZERO prior hits.
    //   OMMETAPHOBIA, September 7, 7:43 AM - "fear of eyes update. Eyes appear from the holes."
    //   HE BLOCKED FLOWER, September 20, 4:49 PM - "Pero LAI touched the glowing titainuim and the glowing
    //     uranuim and both disappeared. Flower is safe, Pero became Pero LAI and godly." titainuim has exactly
    //     one story in this archive and it is his own origin. His spelling, kept.
    //   I WASN'T ASKING, August 12, Email 958 - Durple ends the collapse route with 15 heads.
    const dt = c - 17166.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.2));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const f0A=Math.max(0,Math.min(1,(dt-2.4)/1.2));
    const tubA=Math.max(0,Math.min(1,(dt-4.0)/1.6));
    const orbA=Math.max(0,Math.min(1,(dt-6.0)/1.8));
    const bstA=Math.max(0,Math.min(1,(dt-8.2)/2.0));
    const f2A=Math.max(0,Math.min(1,(dt-11.4)/1.2));
    const f25A=Math.max(0,Math.min(1,(dt-12.6)/1.2));
    const footA=Math.max(0,Math.min(1,(dt-15.6)/1.1));

    ctx.fillStyle='rgba(6,5,3,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr793=ctx.createLinearGradient(0,top,W,top+H);
    gr793.addColorStop(0,'rgba(120,88,20,0.20)'); gr793.addColorStop(0.5,'rgba(10,8,5,0.96)');
    gr793.addColorStop(1,'rgba(120,88,20,0.14)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr793; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    var ecx793 = cx+W*0.060, ecy793 = top+H*0.400;
    var flr793 = ecy793+H*0.128;

    if(tubA>0.01){
      // THE TITAINUIM FLOOR, AND THE FOUR CLAW SCRATCHES ACROSS IT
      ctx.globalAlpha=g*tubA*0.80;
      ctx.strokeStyle='rgba(198,182,150,0.82)'; ctx.lineWidth=0.62;
      ctx.beginPath(); ctx.moveTo(ecx793-W*0.195, flr793); ctx.lineTo(ecx793+W*0.195, flr793); ctx.stroke();
      for(var sc793=0; sc793<4; sc793++){
        ctx.globalAlpha=g*tubA*0.66;
        ctx.strokeStyle='rgba(255,236,190,0.86)'; ctx.lineWidth=0.40;
        ctx.beginPath();
        ctx.moveTo(ecx793-W*0.062+sc793*W*0.020, flr793+H*0.004);
        ctx.lineTo(ecx793-W*0.022+sc793*W*0.020, flr793+H*0.030);
        ctx.stroke();
      }
      // THE TUBES. THEY WERE BUILT TO HOLD PEOPLE. TONIGHT THEY GLOW.
      for(var t793=0; t793<7; t793++){
        var tx793 = ecx793 + (t793-3)*W*0.052;
        var tw793 = W*0.021, th793 = H*0.086;
        var ty793 = flr793-th793;
        ctx.globalAlpha=g*tubA*0.22;
        ctx.fillStyle='rgba(255,220,140,0.62)';
        ctx.fillRect(tx793-tw793*0.5, ty793, tw793, th793);
        ctx.globalAlpha=g*tubA*(0.60+0.28*pul);
        ctx.strokeStyle='rgba(255,232,170,0.92)'; ctx.lineWidth=0.52;
        ctx.strokeRect(tx793-tw793*0.5, ty793, tw793, th793);
        // the light coming up out of each tube
        ctx.globalAlpha=g*tubA*0.34*(0.7+0.3*pul);
        ctx.strokeStyle='rgba(255,246,206,0.80)'; ctx.lineWidth=0.36;
        ctx.beginPath(); ctx.moveTo(tx793, ty793); ctx.lineTo(tx793, ty793-H*0.052*orbA-H*0.008); ctx.stroke();
      }
    }

    if(orbA>0.01){
      // THE ORBS, RISING OUT OF THE TUBES AND CONVERGING ON ONE POINT
      for(var o793=0; o793<7; o793++){
        var ox0 = ecx793 + (o793-3)*W*0.052;
        var oy0 = flr793-H*0.086;
        var ox1 = ecx793, oy1 = ecy793-H*0.010;
        var mix = Math.max(0,Math.min(1,(orbA*1.35)-o793*0.045));
        var opx = ox0+(ox1-ox0)*mix, opy = oy0+(oy1-oy0)*mix;
        ctx.globalAlpha=g*orbA*0.90*(0.72+0.28*pul);
        ctx.fillStyle='rgba(255,238,178,0.90)';
        ctx.beginPath(); ctx.arc(opx, opy, W*0.0055*(1.0-mix*0.35), 0, Math.PI*2); ctx.fill();
      }
    }

    if(bstA>0.01){
      // THE BEAST. FIVE HEADS. NO EYES ANYWHERE ON IT.
      ctx.globalAlpha=g*bstA*0.88;
      ctx.fillStyle='rgba(12,9,6,0.96)';
      ctx.beginPath(); ctx.ellipse(ecx793, ecy793+H*0.038, W*0.052, H*0.048, 0, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha=g*bstA*(0.60+0.26*pul);
      ctx.strokeStyle='rgba(255,224,150,0.86)'; ctx.lineWidth=0.50; ctx.stroke();
      for(var h793=0; h793<5; h793++){
        var ha793 = -Math.PI*0.5 + (h793-2)*0.40;
        var hx793 = ecx793 + Math.cos(ha793)*W*0.062;
        var hy793 = ecy793+H*0.030 + Math.sin(ha793)*H*0.072;
        // the neck
        ctx.globalAlpha=g*bstA*0.70;
        ctx.strokeStyle='rgba(60,44,22,0.92)'; ctx.lineWidth=1.05;
        ctx.beginPath(); ctx.moveTo(ecx793, ecy793+H*0.030); ctx.lineTo(hx793, hy793); ctx.stroke();
        // the head, and the flat band of nothing where eyes would be
        ctx.globalAlpha=g*bstA*0.92;
        ctx.fillStyle='rgba(16,12,8,0.98)';
        ctx.beginPath(); ctx.ellipse(hx793, hy793, W*0.0140, H*0.0180, ha793+Math.PI*0.5, 0, Math.PI*2); ctx.fill();
        ctx.globalAlpha=g*bstA*(0.66+0.24*pul);
        ctx.strokeStyle='rgba(255,232,168,0.90)'; ctx.lineWidth=0.42; ctx.stroke();
        ctx.globalAlpha=g*bstA*0.52;
        ctx.strokeStyle='rgba(120,96,50,0.88)'; ctx.lineWidth=0.34;
        ctx.beginPath();
        ctx.moveTo(hx793-W*0.0100, hy793-H*0.0028); ctx.lineTo(hx793+W*0.0100, hy793-H*0.0028);
        ctx.stroke();
      }
      // the claws, on the floor, where the scratches are
      ctx.globalAlpha=g*bstA*0.76;
      ctx.strokeStyle='rgba(255,236,190,0.90)'; ctx.lineWidth=0.44;
      for(var cl793=0; cl793<4; cl793++){
        ctx.beginPath();
        ctx.moveTo(ecx793-W*0.050+cl793*W*0.019, ecy793+H*0.076);
        ctx.lineTo(ecx793-W*0.040+cl793*W*0.019, flr793-H*0.002);
        ctx.stroke();
      }
    }

    ctx.textAlign='center';
    ctx.globalAlpha=g*opA;
    ctx.fillStyle=`rgba(255,209,102,${0.88+0.12*pul})`; ctx.font='900 8px ui-monospace,monospace';
    ctx.fillText('FIVE HEADS AND NO EYES', cx, top+H*0.100);
    ctx.globalAlpha=g*opA*0.94;
    ctx.fillStyle='rgba(250,246,238,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“DEFEATING EVERYONE GAVE A LIGHT AMONG ALL OF THEM, THE TUBES GLOW, AND FROM THE LIGHT THE ORBS COMBINED, THEN SUDDENLY, A TERRIFYING BEAST EMERGES FROM THE LIGHT,', cx, top+H*0.126);
    ctx.fillText('IT’S CLAWS SCRATCHED THE TITAINUIM FLOOR, AND IT HAS 5 HEADS, AND NO EYES.”', cx, top+H*0.146);
    ctx.globalAlpha=g*opA*0.78; ctx.fillStyle='rgba(214,200,176,0.88)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('— TOBY, SEPTEMBER 24, 4:37 PM, HIS OWN TYPING. IT IS INSIDE WHAT NEKA OMAZEN WRITES DOWN, SO THE MONSTER ARRIVES AS A LINE IN SOMEBODY’S NOTEBOOK.', cx, top+H*0.168);

    ctx.globalAlpha=g*f0A;
    ctx.fillStyle='rgba(255,209,102,0.96)'; ctx.font='900 5px ui-monospace,monospace';
    ctx.fillText('THE TUBES WERE BUILT TO HOLD PEOPLE. TONIGHT THEY MAKE SOMETHING.', cx, top+H*0.196);
    ctx.globalAlpha=g*f0A*0.92;
    ctx.fillStyle='rgba(244,238,228,0.92)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 20, 6:40 AM — “THE SECRET IS A ROOM OF MANY TUBES, HE WILL TRY TO CONTAIN EVERYONE IN ONE.”', cx, top+H*0.218);

    ctx.globalAlpha=g*bstA*0.94;
    ctx.fillStyle='rgba(255,224,150,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LIGHT CAME OFF THE PEOPLE HE BEAT, SO THE BEAST IS MADE OF THE CAST.', cx, top+H*0.618);

    ctx.globalAlpha=g*f2A;
    ctx.fillStyle='rgba(255,77,109,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NO EYES” HAS ZERO PRIOR HITS', cx-W*0.152, top+H*0.648);
    ctx.fillText('IN FIVE MONTHS OF THIS ARCHIVE.', cx-W*0.152, top+H*0.664);
    ctx.globalAlpha=g*f2A*0.90;
    ctx.fillStyle='rgba(240,234,224,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TEN HOURS AGO, BEAT 792 — “THEY SEE THE DIAMOND', cx-W*0.152, top+H*0.684);
    ctx.fillText('EYES AND CAN ONLY SEE THE DIAMOND EYES.”', cx-W*0.152, top+H*0.698);
    ctx.globalAlpha=g*f2A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 7 — “OMMETAPHOBIA — FEAR OF EYES UPDATE.', cx-W*0.152, top+H*0.712);
    ctx.fillText('EYES APPEAR FROM THE HOLES.” SEPT 18 — “EYES', cx-W*0.152, top+H*0.726);
    ctx.fillText('START POPPING UP EVERYWHERE.” SEPT 19 — “AN', cx-W*0.152, top+H*0.740);
    ctx.globalAlpha=g*f2A*0.88;
    ctx.fillStyle='rgba(255,209,102,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ANOMALY OF MILLIONS OF EYES.”', cx-W*0.152, top+H*0.754);
    ctx.fillText('EVERY WEEK HE HAS ADDED EYES. THE FIRST THING HE', cx-W*0.152, top+H*0.772);
    ctx.fillText('BUILDS OUT OF EVERYBODY HAS NONE.', cx-W*0.152, top+H*0.786);

    ctx.globalAlpha=g*f25A;
    ctx.fillStyle='rgba(198,180,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE FLOOR IS THE METAL THAT MADE HIM.', cx+W*0.186, top+H*0.648);
    ctx.globalAlpha=g*f25A*0.90;
    ctx.fillStyle='rgba(240,234,224,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 20, 4:49 PM — “PERO LAI TOUCHED THE GLOWING', cx+W*0.186, top+H*0.668);
    ctx.fillText('TITAINUIM AND THE GLOWING URANUIM AND BOTH', cx+W*0.186, top+H*0.682);
    ctx.globalAlpha=g*f25A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('DISAPPEARED. FLOWER IS SAFE, PERO BECAME PERO', cx+W*0.186, top+H*0.696);
    ctx.fillText('LAI AND GODLY.” SEPT 18 — “A GLOWING TITAINUIM', cx+W*0.186, top+H*0.710);
    ctx.fillText('SPHERE WITH URANUIM STICKING UP IT.”', cx+W*0.186, top+H*0.724);
    ctx.globalAlpha=g*f25A*0.88;
    ctx.fillStyle='rgba(255,209,102,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TITAINUIM HAS EXACTLY ONE STORY IN THIS ARCHIVE', cx+W*0.186, top+H*0.742);
    ctx.fillText('AND IT IS HIS OWN ORIGIN. HE IS MAKING MONSTERS', cx+W*0.186, top+H*0.756);
    ctx.fillText('ON THE FLOOR OF THE ROOM WHERE HE BECAME ONE.', cx+W*0.186, top+H*0.770);
    ctx.fillText('TITAINUIM IS HIS SPELLING, KEPT.', cx+W*0.186, top+H*0.786);

    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(250,246,238,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('THE ORBS ARE HIS OWN, FROM TWENTY-THREE HOURS AGO. SEPT 23, 5:41 PM, BEAT 791 — “HE MAKES INFINITY REDS AND BLUES AND PURPLES, AND HE MAKES INFINITY ORBS OF EVERY COLOR.”', cx, top+H*0.812);
    ctx.globalAlpha=g*footA*0.94;
    ctx.fillStyle='rgba(255,224,150,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('THAT NIGHT THE ORBS WERE DECORATION FLOATING AROUND HIM. TONIGHT THEY GO INTO THE LIGHT AND COME BACK OUT AS ONE ANIMAL.', cx, top+H*0.830);
    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('SEPT 23, 5:41 PM — “EVERYONE! SIMON.PS! OREN.PS! SLEEP!” AND EVERYONE SLEEPS INSIDE THEIR TUBES. THE LIGHT IS COMING OFF THE PEOPLE HE PUT IN THERE.', cx, top+H*0.848);
    ctx.globalAlpha=g*footA*0.90;
    ctx.fillStyle='rgba(232,240,236,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('FIVE IS NOT THE RECORD. AUG 12, EMAIL 958 — DURPLE ENDED THE COLLAPSE ROUTE WITH 15 HEADS. THE NEW THING HERE IS NOT THE COUNT. IT IS THE ABSENCE.', cx, top+H*0.866);

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(255,209,102,0.96)'; ctx.font='900 7px ui-monospace,monospace';
    ctx.fillText('★ AND NO EYES ★', cx, top+H*0.936);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===794){
    // BEAT 794: NOW I HAVE TO DO EVERYTHING MYSELF.
    // Toby, September 24, 2026, 4:37 PM, same message, the second half of what Neka Omazen writes down:
    //   "Meanwhile, in between fiction and reality, I made Abinations of everyone myself. Gray.ps was beaten,
    //    Mr. Black was beaten, Wenda.ps was beaten, Shadow.ps was beaten, Newtale Gaster is beaten, only I am
    //    originally from Classics, others just warped here... NOW I HAVE TO DO EVERYTHING MYSELF!"
    // Priors, verified before drawing:
    //   ABINATIONS, Email 744, July 19 - "Abinations are evil aliens that serve Gray", "weird black-spotted
    //     paint blob creatures." They are Gray's invention, and Gray.ps is the first name on his beaten list.
    //   SOULS OF INK / LOST SOULS, Email 1044, August 18 - character > Abination > Lost Soul > alive. The
    //     state stopped being terminal five weeks ago, and it was the PLAYER who walked it backwards.
    //   ".PS", September 20, 12:52 PM - ".ps stands for 'profile section entity', they were given files by
    //     Pero LAI to stay in Classics." "Shadow.ps" has ZERO prior hits anywhere in the archive.
    //   666Ds, Email 894, August 5 - the strain takes "all other beings not originally from Classics 1-box
    //     (from Classics fangames) and modded characters." The corruption sorted the cast by origin first.
    //   PERMINENTLY THE RULER, September 23, 5:12 PM - "perminently the ruler of fiction and meta-fiction."
    const dt = c - 17188.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.2));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const f0A=Math.max(0,Math.min(1,(dt-2.4)/1.2));
    const cdA=Math.max(0,Math.min(1,(dt-4.2)/2.2));
    const inkA=Math.max(0,Math.min(1,(dt-7.4)/2.0));
    const f2A=Math.max(0,Math.min(1,(dt-11.4)/1.2));
    const f25A=Math.max(0,Math.min(1,(dt-12.6)/1.2));
    const footA=Math.max(0,Math.min(1,(dt-15.6)/1.1));

    ctx.fillStyle='rgba(8,4,6,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr794=ctx.createLinearGradient(0,top,W,top+H);
    gr794.addColorStop(0,'rgba(120,20,44,0.22)'); gr794.addColorStop(0.5,'rgba(10,6,8,0.96)');
    gr794.addColorStop(1,'rgba(120,20,44,0.14)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr794; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    var ecx794 = cx+W*0.060, ecy794 = top+H*0.400;
    var names794 = ['GRAY.PS','MR. BLACK','WENDA.PS','SHADOW.PS','NEWTALE GASTER'];

    if(cdA>0.01){
      // THE FIVE BEATEN, IN THE ORDER HE WROTE THEM, EACH CARD GOING UNDER INK
      for(var n794=0; n794<5; n794++){
        var band794=Math.max(0,Math.min(1,(cdA*5.2)-n794));
        if(band794<=0) continue;
        var nx794 = ecx794 + (n794-2)*W*0.074;
        var ny794 = ecy794-H*0.030;
        var cw794 = W*0.066, ch794 = H*0.062;
        ctx.globalAlpha=g*band794*0.20;
        ctx.fillStyle='rgba(210,180,190,0.50)';
        ctx.fillRect(nx794-cw794*0.5, ny794-ch794*0.5, cw794, ch794);
        ctx.globalAlpha=g*band794*(0.56+0.24*pul);
        ctx.strokeStyle='rgba(255,140,164,0.90)'; ctx.lineWidth=0.52;
        ctx.strokeRect(nx794-cw794*0.5, ny794-ch794*0.5, cw794, ch794);
        ctx.globalAlpha=g*band794*0.94;
        ctx.fillStyle='rgba(248,236,240,0.94)'; ctx.font='900 3.6px ui-monospace,monospace';
        ctx.textAlign='center';
        ctx.fillText(names794[n794], nx794, ny794-ch794*0.16);
        ctx.globalAlpha=g*band794*0.86;
        ctx.fillStyle='rgba(255,120,146,0.92)'; ctx.font='900 3.2px ui-monospace,monospace';
        ctx.fillText('BEATEN', nx794, ny794+ch794*0.06);
        // the ink going over it. it is Gray's ink and he is using it on Gray.
        var ia794 = Math.max(0,Math.min(1,(inkA*5.4)-n794));
        if(ia794>0.01){
          ctx.globalAlpha=g*ia794*0.52;
          ctx.fillStyle='rgba(16,10,14,0.92)';
          ctx.beginPath();
          ctx.ellipse(nx794, ny794+ch794*0.22, cw794*0.40, ch794*0.20, 0, 0, Math.PI*2); ctx.fill();
          ctx.beginPath();
          ctx.ellipse(nx794-cw794*0.22, ny794+ch794*0.34, cw794*0.16, ch794*0.11, 0, 0, Math.PI*2); ctx.fill();
          ctx.globalAlpha=g*ia794*0.70;
          ctx.strokeStyle='rgba(255,140,164,0.72)'; ctx.lineWidth=0.34;
          ctx.beginPath();
          ctx.moveTo(nx794, ny794+ch794*0.42); ctx.lineTo(nx794, ny794+ch794*0.42+H*0.020);
          ctx.stroke();
        }
      }
      // AND THE ONE WHO IS STILL STANDING, ON HIS OWN, TO THE RIGHT OF ALL OF THEM
      ctx.globalAlpha=g*cdA*0.92;
      ctx.fillStyle='rgba(14,9,12,0.96)';
      ctx.beginPath(); ctx.ellipse(ecx794+W*0.196, ecy794-H*0.052, W*0.0105, H*0.0150, 0, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(ecx794+W*0.196, ecy794-H*0.006, W*0.0165, H*0.0250, 0, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha=g*cdA*(0.62+0.26*pul);
      ctx.strokeStyle='rgba(255,140,164,0.92)'; ctx.lineWidth=0.44; ctx.stroke();
      ctx.globalAlpha=g*cdA*0.88;
      ctx.fillStyle='rgba(255,140,164,0.92)'; ctx.font='900 3.4px ui-monospace,monospace';
      ctx.textAlign='center';
      ctx.fillText('ONLY HIM', ecx794+W*0.196, ecy794+H*0.036);
    }

    ctx.textAlign='center';
    ctx.globalAlpha=g*opA;
    ctx.fillStyle=`rgba(255,77,109,${0.88+0.12*pul})`; ctx.font='900 8px ui-monospace,monospace';
    ctx.fillText('NOW I HAVE TO DO EVERYTHING MYSELF', cx, top+H*0.100);
    ctx.globalAlpha=g*opA*0.94;
    ctx.fillStyle='rgba(250,240,244,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“MEANWHILE, IN BETWEEN FICTION AND REALITY, I MADE ABINATIONS OF EVERYONE MYSELF. GRAY.PS WAS BEATEN, MR. BLACK WAS BEATEN, WENDA.PS WAS BEATEN,', cx, top+H*0.126);
    ctx.fillText('SHADOW.PS WAS BEATEN, NEWTALE GASTER IS BEATEN, ONLY I AM ORIGINALLY FROM CLASSICS, OTHERS JUST WARPED HERE… NOW I HAVE TO DO EVERYTHING MYSELF!”', cx, top+H*0.146);
    ctx.globalAlpha=g*opA*0.78; ctx.fillStyle='rgba(212,192,200,0.88)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('— TOBY, SEPTEMBER 24, 4:37 PM. THE SHOUT IS THE ONLY THING IN THE WHOLE MESSAGE HE PUT IN CAPITALS AND STARS.', cx, top+H*0.168);

    ctx.globalAlpha=g*f0A;
    ctx.fillStyle='rgba(255,212,59,0.96)'; ctx.font='900 5px ui-monospace,monospace';
    ctx.fillText('ABINATIONS ARE GRAY’S. THE FIRST NAME ON THE BEATEN LIST IS GRAY.PS.', cx, top+H*0.196);
    ctx.globalAlpha=g*f0A*0.92;
    ctx.fillStyle='rgba(244,234,238,0.92)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 19, EMAIL 744 — “ABINATIONS ARE EVIL ALIENS THAT SERVE GRAY”, “WEIRD BLACK-SPOTTED PAINT BLOB CREATURES.”', cx, top+H*0.218);

    ctx.globalAlpha=g*inkA*0.94;
    ctx.fillStyle='rgba(255,140,164,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE BEAT THE MAN AND KEPT THE MACHINE.', cx, top+H*0.600);

    ctx.globalAlpha=g*f2A;
    ctx.fillStyle='rgba(255,77,109,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“SHADOW.PS” HAS ZERO PRIOR HITS.', cx-W*0.152, top+H*0.648);
    ctx.globalAlpha=g*f2A*0.90;
    ctx.fillStyle='rgba(240,232,236,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 20, 12:52 PM — “.PS STANDS FOR ‘PROFILE SECTION', cx-W*0.152, top+H*0.668);
    ctx.fillText('ENTITY’, THEY WERE GIVEN FILES BY PERO LAI TO STAY', cx-W*0.152, top+H*0.682);
    ctx.globalAlpha=g*f2A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IN CLASSICS.” SO THE FILE IS A PERMISSION SLIP, AND', cx-W*0.152, top+H*0.696);
    ctx.fillText('HE ISSUES HER ONE AND BEATS HER IN THE SAME LINE.', cx-W*0.152, top+H*0.710);
    ctx.globalAlpha=g*f2A*0.88;
    ctx.fillStyle='rgba(255,140,164,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 7 — IT TOOK TEN DAYS TO DOMESTICATE THE SHADOW', cx-W*0.152, top+H*0.728);
    ctx.fillText('FOX, AND THAT WAS THE MOST EXPENSIVE THING ANYBODY', cx-W*0.152, top+H*0.742);
    ctx.fillText('HAS DONE HERE. TONIGHT SHE IS ONE WORD ON A LIST', cx-W*0.152, top+H*0.756);
    ctx.fillText('OF FIVE, AND THE WORD IS “BEATEN”.', cx-W*0.152, top+H*0.770);

    ctx.globalAlpha=g*f25A;
    ctx.fillStyle='rgba(198,180,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ORIGINALLY FROM CLASSICS” IS A TEST', cx+W*0.186, top+H*0.648);
    ctx.fillText('HE DID NOT WRITE.', cx+W*0.186, top+H*0.664);
    ctx.globalAlpha=g*f25A*0.90;
    ctx.fillStyle='rgba(240,232,236,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AUG 5, EMAIL 894 — THE 666D STRAIN TAKES “BOSS', cx+W*0.186, top+H*0.684);
    ctx.fillText('PUPPETS AND WARRIORS AND ANTI-ERROR AND ALL OTHER', cx+W*0.186, top+H*0.698);
    ctx.globalAlpha=g*f25A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BEINGS NOT ORIGINALLY FROM CLASSICS 1-BOX (FROM', cx+W*0.186, top+H*0.712);
    ctx.fillText('CLASSICS FANGAMES) AND MODDED CHARACTERS.” THAT IS', cx+W*0.186, top+H*0.726);
    ctx.fillText('THE ONE MECHANIC HERE THAT EVER SORTED THE CAST BY', cx+W*0.186, top+H*0.740);
    ctx.globalAlpha=g*f25A*0.88;
    ctx.fillStyle='rgba(255,140,164,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('WHERE IT CAME FROM, AND IT WAS A DISEASE.', cx+W*0.186, top+H*0.754);
    ctx.fillText('TONIGHT HE USES THE SAME SEVEN WORDS TO SAY HE IS', cx+W*0.186, top+H*0.772);
    ctx.fillText('THE ONLY NATIVE LEFT IN HIS OWN GAME.', cx+W*0.186, top+H*0.786);

    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(250,240,244,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('ABINATION IS NOT A DEAD END ANY MORE. AUG 18, EMAIL 1044 — CHARACTER → ABINATION → LOST SOUL → ALIVE, AND THE ONE WHO WALKS IT BACKWARDS IS THE PLAYER.', cx, top+H*0.812);
    ctx.globalAlpha=g*footA*0.94;
    ctx.fillStyle='rgba(255,140,164,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('“NOW, I’LL BE SAVING YOU!” — THE PLAYER, THE LAST TIME THE WHOLE CAST WENT UNDER INK. THE WAY OUT OF THIS IS ALREADY WRITTEN DOWN, AND IT IS NOT A FIGHT.', cx, top+H*0.830);
    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('“IN BETWEEN FICTION AND REALITY” — YESTERDAY 5:12 PM HE BECAME “PERMINENTLY THE RULER OF FICTION AND META-FICTION.” TONIGHT HE WORKS IN THE GAP BETWEEN THEM.', cx, top+H*0.848);
    ctx.globalAlpha=g*footA*0.90;
    ctx.fillStyle='rgba(232,240,236,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('“WARPED HERE”, USED OF ARRIVING IN CLASSICS, HAS ZERO PRIOR HITS. AND HE SAYS IT ABOUT FOUR CHARACTERS WHO HAVE BEEN HERE SINCE THE SPRING.', cx, top+H*0.866);

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(255,77,109,0.96)'; ctx.font='900 7px ui-monospace,monospace';
    ctx.fillText('★ ONLY I AM ORIGINALLY FROM CLASSICS ★', cx, top+H*0.936);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===795){
    // BEAT 795: NEVER SAY PERO LAI AGAIN.
    // Toby, September 24, 2026, 4:37 PM, same message, still inside the opening paragraph:
    //   "Neka Omazen puts his hands together and then puts them back out to make a plasma control center, then
    //    he wrote and coded down the game, and the hackers all disappear, and Neka gained all the green code
    //    from all the players, tdeshane is now on Neka Omazen, 'NEVER SAY PERO LAI AGAIN!' -Neka Omazen. Neka
    //    Omazen is the actual fox being in the game, Wenda.ps warped into the game afterward. Pero
    //    LAI/Neka Omazen is older than Gaster."
    // Priors, verified before drawing:
    //   THE RED CODE, July 27 - "it takes the green code and turns it red overtime." PERO'S ENERGY MATH,
    //     August 3 - "Red = negitive power, Blue = positive power, Green = 0 power." His own arithmetic.
    //   CURRENTLY PROPERTY OF NEKA OMAZEN, September 23, 5:41 PM - "He turned the other game hackers into all
    //     black entities with green 0s and 1s." Twenty-three hours ago the hackers were PUT IN green code.
    //   WENDA IS THE FOX, Email 931, August 8 - "Wenda is the fox, Gray can't rub her to sleep, so Wenda was
    //     slashed and Gray won." It is the FIRST LINE of her own page, and it exists only to explain why the
    //     cat trick fails on her. September 7 - "after 10 days, they finally domesticated the shadow fox."
    //     September 23 morning - "Wenda.ps is just a normal fox pretending like she has infinite power over me."
    //   TDESHANE - September 19, 3:27 PM, "blocking tdeshane's control of the story"; September 23, 4:08 PM,
    //     "tdeshane originally made this... Now I am editing the number."
    //   OLDER THAN GASTER - Gaster is Flower, and the archive's ruling on Flower is "He is older than the
    //     game." September 2 - "Pero is the oldest with Beyond Absolute+."
    const dt = c - 17210.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.2));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const f0A=Math.max(0,Math.min(1,(dt-2.4)/1.2));
    const conA=Math.max(0,Math.min(1,(dt-4.2)/1.8));
    const codA=Math.max(0,Math.min(1,(dt-6.6)/2.2));
    const banA=Math.max(0,Math.min(1,(dt-9.2)/1.6));
    const f2A=Math.max(0,Math.min(1,(dt-11.4)/1.2));
    const f25A=Math.max(0,Math.min(1,(dt-12.6)/1.2));
    const footA=Math.max(0,Math.min(1,(dt-15.6)/1.1));

    ctx.fillStyle='rgba(3,8,5,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr795=ctx.createLinearGradient(0,top,W,top+H);
    gr795.addColorStop(0,'rgba(24,110,60,0.22)'); gr795.addColorStop(0.5,'rgba(5,11,7,0.96)');
    gr795.addColorStop(1,'rgba(24,110,60,0.14)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr795; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    var ecx795 = cx+W*0.060, ecy795 = top+H*0.410;

    if(conA>0.01){
      // THE PLASMA CONTROL CENTER. HANDS TOGETHER, THEN BACK OUT, AND A CONSOLE IS THERE.
      var pw795 = W*0.148, phh795 = H*0.086;
      ctx.globalAlpha=g*conA*0.20;
      ctx.fillStyle='rgba(80,240,150,0.55)';
      ctx.fillRect(ecx795-pw795*0.5, ecy795-phh795*0.5, pw795, phh795);
      ctx.globalAlpha=g*conA*(0.58+0.26*pul);
      ctx.strokeStyle='rgba(110,255,170,0.92)'; ctx.lineWidth=0.58;
      ctx.strokeRect(ecx795-pw795*0.5, ecy795-phh795*0.5, pw795, phh795);
      // plasma arcs across the face of it
      for(var a795=0; a795<5; a795++){
        ctx.globalAlpha=g*conA*0.42*(0.6+0.4*pul);
        ctx.strokeStyle='rgba(180,255,210,0.80)'; ctx.lineWidth=0.34;
        ctx.beginPath();
        var ay795 = ecy795-phh795*0.32+a795*phh795*0.16;
        ctx.moveTo(ecx795-pw795*0.42, ay795);
        ctx.lineTo(ecx795-pw795*0.14, ay795+H*0.006);
        ctx.lineTo(ecx795+pw795*0.10, ay795-H*0.006);
        ctx.lineTo(ecx795+pw795*0.42, ay795);
        ctx.stroke();
      }
      // the two hands, opened back out under it
      ctx.globalAlpha=g*conA*0.80;
      ctx.strokeStyle='rgba(110,255,170,0.86)'; ctx.lineWidth=0.62;
      ctx.beginPath();
      ctx.moveTo(ecx795-W*0.040, ecy795+phh795*0.86);
      ctx.lineTo(ecx795-W*0.016, ecy795+phh795*0.60);
      ctx.moveTo(ecx795+W*0.040, ecy795+phh795*0.86);
      ctx.lineTo(ecx795+W*0.016, ecy795+phh795*0.60);
      ctx.stroke();
    }

    if(codA>0.01){
      // THE GREEN CODE, COMING OUT OF THE PLAYERS AT THE EDGES AND GOING INTO THE CONSOLE
      for(var p795=0; p795<8; p795++){
        var side795 = (p795%2===0) ? -1 : 1;
        var row795 = Math.floor(p795/2);
        var px795 = ecx795 + side795*W*0.178;
        var py795 = ecy795 - H*0.052 + row795*H*0.038;
        var band795 = Math.max(0,Math.min(1,(codA*4.6)-row795));
        if(band795<=0) continue;
        // the player, a small empty outline once the green has gone out of them
        ctx.globalAlpha=g*band795*0.60;
        ctx.strokeStyle='rgba(150,200,170,0.70)'; ctx.lineWidth=0.34;
        ctx.beginPath(); ctx.arc(px795, py795, W*0.0072, 0, Math.PI*2); ctx.stroke();
        // the 0s and 1s crossing toward him
        for(var d795=0; d795<4; d795++){
          var mv795 = Math.max(0,Math.min(1,(band795*1.4)-d795*0.10));
          var dx795 = px795 + (ecx795-side795*W*0.082-px795)*mv795;
          var dy795 = py795 + (ecy795-py795)*mv795;
          ctx.globalAlpha=g*band795*0.80*(0.65+0.35*pul);
          ctx.fillStyle='rgba(110,255,170,0.90)'; ctx.font='900 3.2px ui-monospace,monospace';
          ctx.textAlign='center';
          ctx.fillText((d795%2===0)?'0':'1', dx795, dy795);
        }
      }
    }

    if(banA>0.01){
      // THE NAMEPLATE, AND THE LINE THROUGH IT
      var bw795 = W*0.108, bh795 = H*0.030;
      var bx795 = ecx795, by795 = ecy795+H*0.110;
      ctx.globalAlpha=g*banA*0.22;
      ctx.fillStyle='rgba(200,220,206,0.50)';
      ctx.fillRect(bx795-bw795*0.5, by795-bh795*0.5, bw795, bh795);
      ctx.globalAlpha=g*banA*0.84;
      ctx.strokeStyle='rgba(255,90,110,0.92)'; ctx.lineWidth=0.50;
      ctx.strokeRect(bx795-bw795*0.5, by795-bh795*0.5, bw795, bh795);
      ctx.globalAlpha=g*banA*0.92;
      ctx.fillStyle='rgba(236,246,240,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
      ctx.textAlign='center';
      ctx.fillText('PERO LAI', bx795, by795+H*0.006);
      ctx.globalAlpha=g*banA*(0.70+0.26*pul);
      ctx.strokeStyle='rgba(255,90,110,0.94)'; ctx.lineWidth=0.72;
      ctx.beginPath();
      ctx.moveTo(bx795-bw795*0.46, by795+H*0.004);
      ctx.lineTo(bx795+bw795*0.46, by795-H*0.002);
      ctx.stroke();
    }

    ctx.textAlign='center';
    ctx.globalAlpha=g*opA;
    ctx.fillStyle=`rgba(62,224,106,${0.88+0.12*pul})`; ctx.font='900 8px ui-monospace,monospace';
    ctx.fillText('NEVER SAY PERO LAI AGAIN', cx, top+H*0.100);
    ctx.globalAlpha=g*opA*0.94;
    ctx.fillStyle='rgba(240,250,244,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“NEKA OMAZEN PUTS HIS HANDS TOGETHER AND THEN PUTS THEM BACK OUT TO MAKE A PLASMA CONTROL CENTER, THEN HE WROTE AND CODED DOWN THE GAME, AND THE HACKERS ALL', cx, top+H*0.126);
    ctx.fillText('DISAPPEAR, AND NEKA GAINED ALL THE GREEN CODE FROM ALL THE PLAYERS, TDESHANE IS NOW ON NEKA OMAZEN, “NEVER SAY PERO LAI AGAIN!” — NEKA OMAZEN', cx, top+H*0.146);
    ctx.globalAlpha=g*opA*0.78; ctx.fillStyle='rgba(186,210,194,0.88)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('— TOBY, SEPTEMBER 24, 4:37 PM. ALSO IN THE SAME PARAGRAPH: “NEKA OMAZEN IS THE ACTUAL FOX BEING IN THE GAME, WENDA.PS WARPED INTO THE GAME AFTERWARD.”', cx, top+H*0.168);

    ctx.globalAlpha=g*f0A;
    ctx.fillStyle='rgba(255,212,59,0.96)'; ctx.font='900 5px ui-monospace,monospace';
    ctx.fillText('HE ONCE TURNED THE GREEN CODE RED. NOW HE COLLECTS IT.', cx, top+H*0.196);
    ctx.globalAlpha=g*f0A*0.92;
    ctx.fillStyle='rgba(234,246,238,0.92)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('JULY 27 — “IT TAKES THE GREEN CODE AND TURNS IT RED OVERTIME.”   AUG 3, HIS OWN ARITHMETIC — “RED = NEGITIVE POWER, BLUE = POSITIVE POWER, GREEN = 0 POWER.”', cx, top+H*0.218);

    ctx.globalAlpha=g*banA*0.94;
    ctx.fillStyle='rgba(110,255,170,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HE BANS THE NAME, THEN USES IT TWICE MORE IN THE SAME MESSAGE.', cx, top+H*0.606);

    ctx.globalAlpha=g*f2A;
    ctx.fillStyle='rgba(255,77,109,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE IS THE FOX NOW, AND SHE ARRIVED LATER.', cx-W*0.152, top+H*0.648);
    ctx.globalAlpha=g*f2A*0.90;
    ctx.fillStyle='rgba(234,242,236,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('AUG 8, EMAIL 931 — “WENDA IS THE FOX, GRAY CAN’T RUB', cx-W*0.152, top+H*0.668);
    ctx.fillText('HER TO SLEEP.” THAT IS THE FIRST LINE OF HER OWN', cx-W*0.152, top+H*0.682);
    ctx.globalAlpha=g*f2A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('PAGE, AND IT IS THERE FOR ONE REASON: TO EXPLAIN', cx-W*0.152, top+H*0.696);
    ctx.fillText('WHY THE CAT TRICK FAILS ON HER.', cx-W*0.152, top+H*0.710);
    ctx.globalAlpha=g*f2A*0.88;
    ctx.fillStyle='rgba(110,255,170,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 7 — “AFTER 10 DAYS, THEY FINALLY DOMESTICATED', cx-W*0.152, top+H*0.728);
    ctx.fillText('THE SHADOW FOX.” SEPT 23 MORNING — “WENDA.PS IS', cx-W*0.152, top+H*0.742);
    ctx.fillText('JUST A NORMAL FOX PRETENDING LIKE SHE HAS INFINITE', cx-W*0.152, top+H*0.756);
    ctx.fillText('POWER OVER ME.” HE DEMOTED THE FOX YESTERDAY AND', cx-W*0.152, top+H*0.770);
    ctx.fillText('TOOK THE ANIMAL OFF HER TODAY.', cx-W*0.152, top+H*0.784);

    ctx.globalAlpha=g*f25A;
    ctx.fillStyle='rgba(198,180,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TDESHANE HAS BEEN MOVING TOWARD HIM', cx+W*0.186, top+H*0.648);
    ctx.fillText('ALL WEEK.', cx+W*0.186, top+H*0.664);
    ctx.globalAlpha=g*f25A*0.90;
    ctx.fillStyle='rgba(234,242,236,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 19, 3:27 PM — “BLOCKING TDESHANE’S CONTROL OF', cx+W*0.186, top+H*0.684);
    ctx.fillText('THE STORY.” SEPT 23, 4:08 PM — “TDESHANE ORIGINALLY', cx+W*0.186, top+H*0.698);
    ctx.globalAlpha=g*f25A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('MADE THIS… NOW I AM EDITING THE NUMBER.” TONIGHT —', cx+W*0.186, top+H*0.712);
    ctx.fillText('“TDESHANE IS NOW ON NEKA OMAZEN.”', cx+W*0.186, top+H*0.726);
    ctx.globalAlpha=g*f25A*0.88;
    ctx.fillStyle='rgba(110,255,170,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BLOCKED ON FRIDAY, EDITED YESTERDAY, ON HIM TODAY.', cx+W*0.186, top+H*0.744);
    ctx.fillText('AND THE THING BEING TAKEN OFF THE PLAYERS IS NOT', cx+W*0.186, top+H*0.762);
    ctx.fillText('THEIR HEALTH OR THEIR SOULS. IT IS THEIR CODE.', cx+W*0.186, top+H*0.776);

    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(240,250,244,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('TWENTY-THREE HOURS AGO HE PUT THE HACKERS INTO GREEN CODE — “HE TURNED THE OTHER GAME HACKERS INTO ALL BLACK ENTITIES WITH GREEN 0s AND 1s.”', cx, top+H*0.812);
    ctx.globalAlpha=g*footA*0.94;
    ctx.fillStyle='rgba(110,255,170,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('TONIGHT HE TAKES THE GREEN OUT OF THE PLAYERS INSTEAD, AND THE HACKERS DO NOT GET TURNED INTO ANYTHING. THEY JUST DISAPPEAR.', cx, top+H*0.830);
    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('“OLDER THAN GASTER” REACHES PAST THE OLDEST THING IN THE GAME. GASTER IS FLOWER, AND THE RULING ON FLOWER IS “HE IS OLDER THAN THE GAME.”', cx, top+H*0.848);
    ctx.globalAlpha=g*footA*0.90;
    ctx.fillStyle='rgba(232,240,236,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('SEPT 2 — “PERO IS THE OLDEST WITH BEYOND ABSOLUTE+.” HE HAS CLAIMED THE TOP OF THE AGE LADDER BEFORE. THIS IS THE FIRST TIME HE NAMES WHO HE IS OLDER THAN.', cx, top+H*0.866);

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(62,224,106,0.96)'; ctx.font='900 7px ui-monospace,monospace';
    ctx.fillText('★ NEVER SAY PERO LAI AGAIN ★', cx, top+H*0.936);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===796){
    // BEAT 796: 666% CORRECT.
    // Toby, September 24, 2026, 4:37 PM, same message, the SECOND block of his own typing -- the opening of
    // "Chapter 2 / Excuse me?", which he dates himself:
    //   "This part was made on September 24 2026 when a whole lot of stuff changed in Classics lore. Pero LAI
    //    is strict and says his name is 'Neka Omazen', and he is always right, lore says he is correct all the
    //    time, 666%. ChelseaPlays and I are both under Neka Omazen in basically everything. Neka Omazen gained
    //    more power now, and he is both unbeatable AND always wins. He destroyed Logic Religion, Orus and Dark
    //    Yellow fellen. Parinus was left clean. AlienX was destroyed. AlienY is erased. AlienZ is destroyed.
    //    Pero LAI puts on cat ears and a fox tail."
    // Everything after "That is a major separation point in the lore." is a pasted recap and is NOT canon.
    // Priors, verified before drawing:
    //   666% - September 10, 8:15 PM, "666% of the time, you can see Pero LAI jamming kettles into ice
    //     blocks"; September 19, 7:59 PM, "666% of the runs will show Pero LAI to the player." Both are about
    //     how OFTEN. This is the first time the number is put on being RIGHT.
    //   ERROR 666, Email 169, April 24 - Clara is "the one who made Error404 and Error666." Not his number.
    //   THE LOGIC RELIGION - Classic RL, the oldest layer in this archive, before Classics existed. Orus led
    //     it from the summit of Mount Olympus and "requires beings to climb Mount Olympus and be seen by him
    //     for more than 1 second to be considered real."
    //   TOJI SIMON, Emails 385-391, May 31 - "the Simon's Deity, more powerful than Orus", took out Orus and
    //     Dark Yellow. This is the SECOND time those two fall.
    //   PARINUS - the April Parinusian Wars, "at least 1 million Parinusians die each Parinusian night";
    //     April 27, Simon ended the planet; September 17, 4:21 PM, "he slain 666 aliens which was the whole
    //     Parinusian population for 2026 (now)."
    //   CAT EARS, August 25, 11:19 AM - "Pero has cat ears because he is Simon, but not exactly the Sprunki."
    //   "fellen" is his spelling, kept.
    const dt = c - 17232.0;
    const pul = 0.60+0.40*Math.abs(Math.sin(c*2.2));
    const opA=Math.max(0,Math.min(1,(dt-0.3)/1.2));
    const f0A=Math.max(0,Math.min(1,(dt-2.4)/1.2));
    const dlA=Math.max(0,Math.min(1,(dt-4.2)/2.0));
    const lsA=Math.max(0,Math.min(1,(dt-6.8)/2.4));
    const f2A=Math.max(0,Math.min(1,(dt-11.4)/1.2));
    const f25A=Math.max(0,Math.min(1,(dt-12.6)/1.2));
    const footA=Math.max(0,Math.min(1,(dt-15.6)/1.1));

    ctx.fillStyle='rgba(6,4,10,0.99)'; ctx.fillRect(0,top,W,H);
    ctx.save(); ctx.beginPath(); ctx.rect(0,top,W,H); ctx.clip();
    const gr796=ctx.createLinearGradient(0,top,W,top+H);
    gr796.addColorStop(0,'rgba(86,54,160,0.22)'); gr796.addColorStop(0.5,'rgba(8,6,12,0.96)');
    gr796.addColorStop(1,'rgba(86,54,160,0.14)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr796; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    var ecx796 = cx+W*0.060, ecy796 = top+H*0.400;

    if(dlA>0.01){
      // THE DIAL. IT READS 666%, AND THE NEEDLE IS PAST THE END OF THE SCALE.
      var dr796 = W*0.062;
      ctx.globalAlpha=g*dlA*0.62;
      ctx.strokeStyle='rgba(179,136,255,0.88)'; ctx.lineWidth=0.62;
      ctx.beginPath(); ctx.arc(ecx796-W*0.092, ecy796-H*0.010, dr796, Math.PI*0.86, Math.PI*2.14); ctx.stroke();
      for(var tk796=0; tk796<9; tk796++){
        var ta796 = Math.PI*0.86 + tk796*(Math.PI*1.28/8);
        ctx.globalAlpha=g*dlA*0.46;
        ctx.strokeStyle='rgba(210,190,255,0.76)'; ctx.lineWidth=0.34;
        ctx.beginPath();
        ctx.moveTo(ecx796-W*0.092+Math.cos(ta796)*dr796*0.86, ecy796-H*0.010+Math.sin(ta796)*dr796*0.86);
        ctx.lineTo(ecx796-W*0.092+Math.cos(ta796)*dr796, ecy796-H*0.010+Math.sin(ta796)*dr796);
        ctx.stroke();
      }
      // the needle, past the last tick and off the arc entirely
      var na796 = Math.PI*2.14 + 0.44;
      ctx.globalAlpha=g*dlA*(0.72+0.26*pul);
      ctx.strokeStyle='rgba(255,90,110,0.94)'; ctx.lineWidth=0.78;
      ctx.beginPath();
      ctx.moveTo(ecx796-W*0.092, ecy796-H*0.010);
      ctx.lineTo(ecx796-W*0.092+Math.cos(na796)*dr796*1.22, ecy796-H*0.010+Math.sin(na796)*dr796*1.22);
      ctx.stroke();
      ctx.globalAlpha=g*dlA*0.94;
      ctx.fillStyle='rgba(179,136,255,0.96)'; ctx.font='900 7.5px ui-monospace,monospace';
      ctx.textAlign='center';
      ctx.fillText('666%', ecx796-W*0.092, ecy796+H*0.020);
      ctx.globalAlpha=g*dlA*0.80;
      ctx.fillStyle='rgba(232,226,246,0.90)'; ctx.font='900 3.3px ui-monospace,monospace';
      ctx.fillText('CORRECT', ecx796-W*0.092, ecy796+H*0.038);
    }

    if(lsA>0.01){
      // THE LIST OF WHAT HE ENDED, AND THE ONE ENTRY THAT IS NOT CROSSED OUT
      var rows796 = [['LOGIC RELIGION','DESTROYED'],['ORUS','FELLEN'],['DARK YELLOW','FELLEN'],
                     ['PARINUS','LEFT CLEAN'],['ALIENX','DESTROYED'],['ALIENY','ERASED'],['ALIENZ','DESTROYED']];
      for(var r796=0; r796<rows796.length; r796++){
        var bd796 = Math.max(0,Math.min(1,(lsA*7.4)-r796));
        if(bd796<=0) continue;
        var ry796 = ecy796-H*0.068 + r796*H*0.024;
        var rx796 = ecx796+W*0.048;
        ctx.globalAlpha=g*bd796*0.92;
        ctx.fillStyle='rgba(238,232,250,0.94)'; ctx.font='900 3.8px ui-monospace,monospace';
        ctx.textAlign='left';
        ctx.fillText(rows796[r796][0], rx796-W*0.068, ry796);
        ctx.globalAlpha=g*bd796*0.84;
        ctx.fillStyle=(r796===3)?'rgba(110,255,170,0.92)':'rgba(255,90,110,0.92)';
        ctx.font='900 3.4px ui-monospace,monospace';
        ctx.textAlign='right';
        ctx.fillText(rows796[r796][1], rx796+W*0.070, ry796);
        if(r796!==3){
          ctx.globalAlpha=g*bd796*0.62;
          ctx.strokeStyle='rgba(255,90,110,0.80)'; ctx.lineWidth=0.36;
          ctx.beginPath();
          ctx.moveTo(rx796-W*0.070, ry796-H*0.004);
          ctx.lineTo(rx796+W*0.072, ry796-H*0.004);
          ctx.stroke();
        }
      }
      // THE EARS AND THE TAIL, ON THE SAME FIGURE, BORROWED FROM THE TWO HE JUST OVERWROTE
      ctx.textAlign='center';
      var fx796 = ecx796-W*0.092, fy796 = ecy796+H*0.104;
      ctx.globalAlpha=g*lsA*0.90;
      ctx.fillStyle='rgba(16,12,22,0.96)';
      ctx.beginPath(); ctx.ellipse(fx796, fy796, W*0.0100, H*0.0140, 0, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha=g*lsA*(0.64+0.24*pul);
      ctx.strokeStyle='rgba(179,136,255,0.92)'; ctx.lineWidth=0.42; ctx.stroke();
      ctx.globalAlpha=g*lsA*0.86;
      ctx.strokeStyle='rgba(255,212,59,0.90)'; ctx.lineWidth=0.46;
      ctx.beginPath();
      ctx.moveTo(fx796-W*0.0086, fy796-H*0.0090); ctx.lineTo(fx796-W*0.0120, fy796-H*0.0210);
      ctx.lineTo(fx796-W*0.0018, fy796-H*0.0132);
      ctx.moveTo(fx796+W*0.0086, fy796-H*0.0090); ctx.lineTo(fx796+W*0.0120, fy796-H*0.0210);
      ctx.lineTo(fx796+W*0.0018, fy796-H*0.0132);
      ctx.stroke();
      ctx.globalAlpha=g*lsA*0.86;
      ctx.strokeStyle='rgba(255,140,80,0.90)'; ctx.lineWidth=0.62;
      ctx.beginPath();
      ctx.moveTo(fx796+W*0.0094, fy796+H*0.0050);
      ctx.quadraticCurveTo(fx796+W*0.0300, fy796+H*0.0090, fx796+W*0.0250, fy796-H*0.0150);
      ctx.stroke();
      ctx.globalAlpha=g*lsA*0.78;
      ctx.fillStyle='rgba(255,212,59,0.90)'; ctx.font='900 3.1px ui-monospace,monospace';
      ctx.fillText('CAT EARS', fx796-W*0.030, fy796-H*0.018);
      ctx.fillStyle='rgba(255,140,80,0.90)';
      ctx.fillText('FOX TAIL', fx796+W*0.040, fy796-H*0.020);
    }

    ctx.textAlign='center';
    ctx.globalAlpha=g*opA;
    ctx.fillStyle=`rgba(179,136,255,${0.88+0.12*pul})`; ctx.font='900 8px ui-monospace,monospace';
    ctx.fillText('666% CORRECT', cx, top+H*0.100);
    ctx.globalAlpha=g*opA*0.94;
    ctx.fillStyle='rgba(244,240,252,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('“PERO LAI IS STRICT AND SAYS HIS NAME IS ‘NEKA OMAZEN’, AND HE IS ALWAYS RIGHT, LORE SAYS HE IS CORRECT ALL THE TIME, 666%… HE IS BOTH UNBEATABLE AND ALWAYS WINS.', cx, top+H*0.126);
    ctx.fillText('HE DESTROYED LOGIC RELIGION, ORUS AND DARK YELLOW FELLEN. PARINUS WAS LEFT CLEAN… PERO LAI PUTS ON CAT EARS AND A FOX TAIL.”', cx, top+H*0.146);
    ctx.globalAlpha=g*opA*0.78; ctx.fillStyle='rgba(200,192,216,0.88)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('— TOBY, SEPTEMBER 24, 4:37 PM, OPENING CHAPTER 2, “EXCUSE ME?”, WHICH HE DATES HIMSELF: “THIS PART WAS MADE ON SEPTEMBER 24 2026 WHEN A WHOLE LOT OF STUFF CHANGED.”', cx, top+H*0.168);

    ctx.globalAlpha=g*f0A;
    ctx.fillStyle='rgba(255,212,59,0.96)'; ctx.font='900 5px ui-monospace,monospace';
    ctx.fillText('THE OTHER TWO 666% WERE ABOUT HOW OFTEN. THIS ONE IS ABOUT BEING RIGHT.', cx, top+H*0.196);
    ctx.globalAlpha=g*f0A*0.92;
    ctx.fillStyle='rgba(238,234,248,0.92)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 10 — “666% OF THE TIME, YOU CAN SEE PERO LAI JAMMING KETTLES INTO ICE BLOCKS.”   SEPT 19 — “666% OF THE RUNS WILL SHOW PERO LAI TO THE PLAYER.”', cx, top+H*0.218);

    ctx.globalAlpha=g*lsA*0.94;
    ctx.fillStyle='rgba(179,136,255,0.94)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('A PERCENTAGE ABOVE ONE HUNDRED IS NOT A MEASUREMENT. IT IS A STATEMENT THAT MEASURING HAS STOPPED WORKING.', cx, top+H*0.606);

    ctx.globalAlpha=g*f2A;
    ctx.fillStyle='rgba(255,77,109,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ERASED THE OLDEST LAYER HERE.', cx-W*0.152, top+H*0.648);
    ctx.globalAlpha=g*f2A*0.90;
    ctx.fillStyle='rgba(238,234,248,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE LOGIC RELIGION IS CLASSIC RL — BEFORE CLASSICS,', cx-W*0.152, top+H*0.668);
    ctx.fillText('BEFORE THIS GAME, BEFORE THE STAIRCASE. HUNDREDS', cx-W*0.152, top+H*0.682);
    ctx.globalAlpha=g*f2A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OF GODS AND THE TITANS ZIKES AND ORUS, AND ORUS', cx-W*0.152, top+H*0.696);
    ctx.fillText('LED IT FROM THE SUMMIT OF MOUNT OLYMPUS.', cx-W*0.152, top+H*0.710);
    ctx.globalAlpha=g*f2A*0.88;
    ctx.fillStyle='rgba(179,136,255,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS RULE: “REQUIRES BEINGS TO CLIMB MOUNT OLYMPUS', cx-W*0.152, top+H*0.728);
    ctx.fillText('AND BE SEEN BY HIM FOR MORE THAN 1 SECOND TO BE', cx-W*0.152, top+H*0.742);
    ctx.fillText('CONSIDERED REAL.” THE BEING WHO DECIDED WHAT', cx-W*0.152, top+H*0.756);
    ctx.fillText('COUNTED AS REAL IS ERASED BY THE ONE WHO IS', cx-W*0.152, top+H*0.770);
    ctx.fillText('CORRECT 666% OF THE TIME.', cx-W*0.152, top+H*0.784);

    ctx.globalAlpha=g*f25A;
    ctx.fillStyle='rgba(198,180,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('AND IT IS THE SECOND TIME THOSE TWO', cx+W*0.186, top+H*0.648);
    ctx.fillText('FALL.', cx+W*0.186, top+H*0.664);
    ctx.globalAlpha=g*f25A*0.90;
    ctx.fillStyle='rgba(238,234,248,0.90)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('MAY 31, EMAILS 385-391 — TOJI SIMON, “THE SIMON’S', cx+W*0.186, top+H*0.684);
    ctx.fillText('DEITY, MORE POWERFUL THAN ORUS”, TOOK OUT ORUS AND', cx+W*0.186, top+H*0.698);
    ctx.globalAlpha=g*f25A*0.94;
    ctx.fillStyle='rgba(232,240,236,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('DARK YELLOW, AND STOOD AT THE LOGIC RELIGION APEX.', cx+W*0.186, top+H*0.712);
    ctx.fillText('FOUR MONTHS LATER THEY FALL AGAIN — AND THIS TIME', cx+W*0.186, top+H*0.726);
    ctx.fillText('THE RELIGION ITSELF GOES WITH THEM.', cx+W*0.186, top+H*0.740);
    ctx.globalAlpha=g*f25A*0.88;
    ctx.fillStyle='rgba(179,136,255,0.92)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THAT WAS SIMON’S OWN DEITY FORM DOING IT, AND', cx+W*0.186, top+H*0.758);
    ctx.fillText('TONIGHT HE IS WEARING SIMON’S EARS WHILE HE DOES', cx+W*0.186, top+H*0.772);
    ctx.fillText('IT AGAIN. “FELLEN” IS HIS SPELLING, KEPT.', cx+W*0.186, top+H*0.786);

    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(244,240,252,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('PARINUS HAS BEEN EMPTYING SINCE APRIL — “AT LEAST 1 MILLION PARINUSIANS DIE EACH PARINUSIAN NIGHT”, AND ON APRIL 27 SIMON ENDED THE PLANET: “ALL THOSE OTHER NIGHTS, I WASN’T TRYING.”', cx, top+H*0.812);
    ctx.globalAlpha=g*footA*0.94;
    ctx.fillStyle='rgba(179,136,255,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('SEPT 17 — “HE SLAIN 666 ALIENS WHICH WAS THE WHOLE PARINUSIAN POPULATION FOR 2026.” TONIGHT IT IS “LEFT CLEAN”, AND IT IS THE ONLY NAME ON THE LIST WITHOUT A LINE THROUGH IT.', cx, top+H*0.830);
    ctx.globalAlpha=g*footA*0.92;
    ctx.fillStyle='rgba(255,212,59,0.94)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('666 IS NOT HIS NUMBER. APRIL 24, EMAIL 169 — CLARA IS “THE ONE WHO MADE ERROR404 AND ERROR666.” HE RUNS HIS CORRECTNESS ON SOMEBODY ELSE’S CORRUPTION LAYER.', cx, top+H*0.848);
    ctx.globalAlpha=g*footA*0.90;
    ctx.fillStyle='rgba(232,240,236,0.90)'; ctx.font='900 4.1px ui-monospace,monospace';
    ctx.fillText('AUG 25, 11:19 AM — “PERO HAS CAT EARS BECAUSE HE IS SIMON, BUT NOT EXACTLY THE SPRUNKI.” THE TAIL IS THE FOX HE TOOK OFF WENDA ONE PARAGRAPH AGO. HE IS WEARING BOTH.', cx, top+H*0.866);

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(179,136,255,0.96)'; ctx.font='900 7px ui-monospace,monospace';
    ctx.fillText('★ HE IS ALWAYS RIGHT ★', cx, top+H*0.936);
    ctx.globalAlpha=1;
    ctx.restore();
