  } else if(ph===1104){
    // BEAT 1104: NOT A GLITCH.
    // Toby, October 12, 2026, 1:50 PM EDT, his own typing:
    //   “ALEX SNAPS AND SAWS APPEAR ALL AROUND THE ROOM.”
    //   “THAT IS JUST THE NORMAL GAME, NOT A GLITCH.”
    //   “THE GAME IS THE GAME, AND IT ISN’T MY BIRTHDAY YET.”
    // Priors, each verified in the archive before it was drawn:
    //   SAWS AND SWORDS
    //     OCT 7: BLUE PLASMA SAWS CUT THE HALLWAY ROOF. EMAIL 325:
    //     ALEX HIT KARUTO WITH THE DIAMOND SWORD. BOTH ARE BACK.
    //     GASTER DODGES THE SAWS. LUIGI INUS CUTS THEM.
    //   THE SINK SINGS
    //     FIRE BARS SLAM THE WHITE METAL WALLS AND THE SINK
    //     STARTS SINGING A CALM SONG. GASTER PUTS OUT THE FIRE.
    //     “I MADE THE GAME, AND I RENAMED IT, CAUSE I WANTED TO.”
    //   THE CAKE
    //     ALEX TAKES OUT A CAKE FOR LUIGI INUS. AUG 28: GASTER
    //     OFFERED PERO CAKE. “NO. I AM LAI, NOT HUMAN.”
    //     HIS BIRTHDAY IS OCT 31. THE CAKE COMES OUT ON OCT 12.
    const dt = c - 24008.0;
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
    const gr1104=ctx.createLinearGradient(0,top+H,0,top);
    gr1104.addColorStop(0,'rgba(255,90,90,0.22)'); gr1104.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1104.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1104; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,90,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOT A GLITCH', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX SNAPS AND SAWS APPEAR ALL AROUND THE ROOM.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THAT IS JUST THE NORMAL GAME, NOT A GLITCH.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THE GAME IS THE GAME, AND IT ISN’T MY BIRTHDAY YET.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1104=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,90,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky1104, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,90,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1104, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,90,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SAWS AND SWORDS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 7: BLUE PLASMA SAWS CUT THE HALLWAY ROOF. EMAIL 325:', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEX HIT KARUTO WITH THE DIAMOND SWORD. BOTH ARE BACK.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('GASTER DODGES THE SAWS. LUIGI INUS CUTS THEM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE SINK SINGS', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRE BARS SLAM THE WHITE METAL WALLS AND THE SINK', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('STARTS SINGING A CALM SONG. GASTER PUTS OUT THE FIRE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('“I MADE THE GAME, AND I RENAMED IT, CAUSE I WANTED TO.”', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1104=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1104, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1104, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE CAKE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALEX TAKES OUT A CAKE FOR LUIGI INUS. AUG 28: GASTER', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OFFERED PERO CAKE. “NO. I AM LAI, NOT HUMAN.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('HIS BIRTHDAY IS OCT 31. THE CAKE COMES OUT ON OCT 12.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“JUST HORROR, NO EXTRA NONSENSE”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE RELIEVED FACE WAS PERO’S PUNCTUATION. NOW IT IS ALEXEN’S.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOT A GLITCH ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1105){
    // BEAT 1105: TRILLIONS OF YEARS OLD.
    // Toby, October 12, 2026, 1:50 PM EDT, his own typing:
    //   “THIS PLACE IS TRILLIONS OF YEARS OLD NOW.”
    //   “A RUSTY BAR THAT IS EVEN OLDER THAN HIM ... A
    //   WITHERED FLOWER THAT IS OLDER THAN HIM.”
    // Priors, each verified in the archive before it was drawn:
    //   BEFORE THE FIRST GASTER
    //     “NEKA MADE ALL THIS, BEFORE EVEN THE FIRST GASTER
    //     WAS BORN BY A NOVA.”
    //     OCT 11: THE NOVAS WERE MADE BY NEKA, WHEN HE WAS PERO.
    //   THE VERY FIRST EVENT
    //     NEKA SENDS THEM TO A ROOM “THAT DATED TO THE VERY
    //     FIRST EVENT IN LORE (BEFORE THE NOVAS HAPPENED).”
    //     THE ROOM FELL. NEKA SENT THEM BACK TO THE HYPERSPACE.
    //   HYPERSPACE
    //     AUG 16: HYPERSPACE WAS PERO’S LARGEST ATTACK/DOMAIN.
    //     SEPT 10: HIS MAIN ABILITY. NOW IT IS WHERE YOU RETURN TO.
    //     THE ROOF FALLS. GASTER KNOCKS DOWN THE WALLS TO ESCAPE.
    const dt = c - 24030.0;
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
    const gr1105=ctx.createLinearGradient(0,top+H,0,top);
    gr1105.addColorStop(0,'rgba(170,140,90,0.22)'); gr1105.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1105.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1105; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(170,140,90,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('TRILLIONS OF YEARS OLD', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“THIS PLACE IS TRILLIONS OF YEARS OLD NOW.”', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“A RUSTY BAR THAT IS EVEN OLDER THAN HIM ... A', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('WITHERED FLOWER THAT IS OLDER THAN HIM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1105=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(170,140,90,0.46)';
      ctx.fillRect(cx-W*0.352, ky1105, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(170,140,90,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1105, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(170,140,90,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEFORE THE FIRST GASTER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“NEKA MADE ALL THIS, BEFORE EVEN THE FIRST GASTER', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WAS BORN BY A NOVA.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 11: THE NOVAS WERE MADE BY NEKA, WHEN HE WAS PERO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE VERY FIRST EVENT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('NEKA SENDS THEM TO A ROOM “THAT DATED TO THE VERY', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRST EVENT IN LORE (BEFORE THE NOVAS HAPPENED).”', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE ROOM FELL. NEKA SENT THEM BACK TO THE HYPERSPACE.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1105=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1105, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1105, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('HYPERSPACE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 16: HYPERSPACE WAS PERO’S LARGEST ATTACK/DOMAIN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 10: HIS MAIN ABILITY. NOW IT IS WHERE YOU RETURN TO.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ROOF FALLS. GASTER KNOCKS DOWN THE WALLS TO ESCAPE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OLDER THAN HIM”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A BAR OLDER THAN GASTER. A FLOWER OLDER THAN LUIGI INUS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ TRILLIONS OF YEARS OLD ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1106){
    // BEAT 1106: HOLLOW INUS GASTER.
    // Toby, October 12, 2026, 1:50 PM EDT, his own typing:
    //   “CAPTAIN FOX.” ... “THEN CAME INUS AU GASTER. BOTH
    //   ENTITIES MERGE INTO A GASTER WITH A INUS AU.”
    //   “GASTER BECAME HOLLOW INUS GASTER.”
    // Priors, each verified in the archive before it was drawn:
    //   SENT TO HALLOWEEN
    //     “GASTER WAS SENT FORWARD IN TIME TO HALLOWEEN.
    //     GASTER DIED.” THEN THE GAME HALLOWEEN CHANGED.
    //     “SO NOW, GASTER WON’T DIE.” THE NIGHT ITSELF WAS EDITED.
    //   HOLLOW
    //     AUG 13: HOLLOW OBSIDIAN WAS ALEX’S STRONGEST ATTACK.
    //     AUG 25: HOLLOW: VOID. NOW HOLLOW IS PART OF GASTER’S NAME.
    //     THE FIRST CAPTAIN WAS ARCSIS (JULY 16). NOW CAPTAIN FOX.
    //   NEKA HQ
    //     “ALEX MAKES NEW FUTURISTIC COMPUTERS FROM THE
    //     ENERGY GASTER GETS NOW.”
    //     OCT 12, 9:54 AM: A BODY OF FUTURISTIC MATERIALS AND CODE.
    const dt = c - 24052.0;
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
    const gr1106=ctx.createLinearGradient(0,top+H,0,top);
    gr1106.addColorStop(0,'rgba(255,140,0,0.22)'); gr1106.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1106.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1106; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,140,0,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HOLLOW INUS GASTER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“CAPTAIN FOX.” ... “THEN CAME INUS AU GASTER. BOTH', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ENTITIES MERGE INTO A GASTER WITH A INUS AU.”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“GASTER BECAME HOLLOW INUS GASTER.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 12, 1:50 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1106=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,140,0,0.46)';
      ctx.fillRect(cx-W*0.352, ky1106, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,140,0,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1106, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,140,0,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SENT TO HALLOWEEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“GASTER WAS SENT FORWARD IN TIME TO HALLOWEEN.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER DIED.” THEN THE GAME HALLOWEEN CHANGED.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('“SO NOW, GASTER WON’T DIE.” THE NIGHT ITSELF WAS EDITED.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HOLLOW', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 13: HOLLOW OBSIDIAN WAS ALEX’S STRONGEST ATTACK.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 25: HOLLOW: VOID. NOW HOLLOW IS PART OF GASTER’S NAME.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE FIRST CAPTAIN WAS ARCSIS (JULY 16). NOW CAPTAIN FOX.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1106=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1106, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1106, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('NEKA HQ', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('“ALEX MAKES NEW FUTURISTIC COMPUTERS FROM THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ENERGY GASTER GETS NOW.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OCT 12, 9:54 AM: A BODY OF FUTURISTIC MATERIALS AND CODE.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“INUS GASTER?”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('HIS OWN QUESTION MARK, KEPT. THE MERGE HAS A NAME NOW.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HOLLOW INUS GASTER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
