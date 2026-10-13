  } else if(ph===1127){
    // BEAT 1127: SCIENTIST OF COMPUTER EXPERIMENTS.
    // Toby, October 13, 2026, 4:30 PM EDT, his own typing:
    //   “ALEX IS ALSO A SCIENTIST, OF COMPUTER EXPERIMENTS, HE EVEN
    //   TESTS TO MAKE CORRUPTION AND OTHER STUFF INTO INFECTIONIOUS
    //   ANTI-VIRUSES MADE BY HIM.”
    // Priors, each verified in the archive before it was drawn:
    //   THE PLAGUE-DOCTOR COAT
    //     OCT 6, 7:26 PM: A SCIENTIST WHO ERASES VIRUSES AND MAKES
    //     EVERYTHING HE SEES INTO ANTI-VIRUS. IT INFECTS THE CODE.
    //     THE COAT WAS A COSTUME THEN. TONIGHT IT IS THE JOB.
    //   :) WAS THE FIRST TEST
    //     OCT 6, 5:33 PM: NEKA TOOK OVER :) AND MADE IT ANTI-VIRUS
    //     WHOSE EXISTENCE BREAKS THE GAME. /TICKFREEZE, NO UNFREEZE.
    //     HIS FIRST EXPERIMENT ALREADY HAD A NAME. IT WAS :).
    //   TESTS, NOT ACCIDENTS
    //     OCT 12, 2:09 PM: PINKY RL SPAWNED BY ERROR COMBINATIONS,
    //     THE OTHER RLS MADE BY CORRUPTION. NOW IT IS MADE TO ORDER.
    //     THE RLS WERE ACCIDENTS. THE ANTI-VIRUSES ARE TESTS.
    const dt = c - 24514.0;
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
    const gr1127=ctx.createLinearGradient(0,top+H,0,top);
    gr1127.addColorStop(0,'rgba(120,255,160,0.22)'); gr1127.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1127.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1127; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(120,255,160,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('SCIENTIST OF COMPUTER EXPERIMENTS', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX IS ALSO A SCIENTIST, OF COMPUTER EXPERIMENTS, HE EVEN', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('TESTS TO MAKE CORRUPTION AND OTHER STUFF INTO INFECTIONIOUS', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ANTI-VIRUSES MADE BY HIM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:30 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1127=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(120,255,160,0.46)';
      ctx.fillRect(cx-W*0.352, ky1127, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(120,255,160,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1127, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(120,255,160,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE PLAGUE-DOCTOR COAT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, 7:26 PM: A SCIENTIST WHO ERASES VIRUSES AND MAKES', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYTHING HE SEES INTO ANTI-VIRUS. IT INFECTS THE CODE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE COAT WAS A COSTUME THEN. TONIGHT IT IS THE JOB.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText(':) WAS THE FIRST TEST', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 6, 5:33 PM: NEKA TOOK OVER :) AND MADE IT ANTI-VIRUS', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WHOSE EXISTENCE BREAKS THE GAME. /TICKFREEZE, NO UNFREEZE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('HIS FIRST EXPERIMENT ALREADY HAD A NAME. IT WAS :).', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1127=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1127, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1127, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('TESTS, NOT ACCIDENTS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12, 2:09 PM: PINKY RL SPAWNED BY ERROR COMBINATIONS,', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE OTHER RLS MADE BY CORRUPTION. NOW IT IS MADE TO ORDER.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE RLS WERE ACCIDENTS. THE ANTI-VIRUSES ARE TESTS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“INFECTIONIOUS ANTI-VIRUSES MADE BY HIM.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('A CURE THAT SPREADS THE WAY THE SICKNESS DID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ SCIENTIST OF COMPUTER EXPERIMENTS ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1128){
    // BEAT 1128: THE GAME IN ONE HAND, 12 IN THE OTHER.
    // Toby, October 13, 2026, 4:30 PM EDT, his own typing:
    //   “ALEX GRABS THE GAME AND HAS A LARGE 12 IN HIS OTHER HAND,
    //   SOME SHOW NEKA OMAZEN’S SCIENTIST FORM ALMOST GRABBING THE
    //   OTHER CHARACTERS, OR EVEN TRYING TO ESCAPE THE SCREEN.”
    // Priors, each verified in the archive before it was drawn:
    //   THE GAME IN ONE HAND
    //     OCT 8: CLASSICS AND ALL ITS GAMES ARE INSIDE AREA 12X.
    //     OCT 12: “I AM NEKA LAI. I MADE THIS GAME.” HE HOLDS IT.
    //     THE GAME FITS IN HIS HAND. HE BUILT THE ROOM AROUND IT.
    //   A LARGE 12
    //     OCT 1: NEKA IS ENTITY 12. “SAYING THE NUMBER EVEN ONCE
    //     WILL ANSWER NEKA.” OCT 6: THE CODE SAYS 1348, ALL TWELVES.
    //     THE NUMBER IS NOT A LABEL. IT IS THE THING HE CARRIES.
    //   ESCAPING THE SCREEN
    //     SEPT 28: ADULT NEKA 0% IS BEYOND FICTION; AT 5% THE SCREEN
    //     GLITCHES. OCT 10: THE CLASSICS BARRIER, AND HE CROSSES IT.
    //     THE SCREEN IS THE LAST WALL. HE IS ALREADY LEANING ON IT.
    const dt = c - 24536.0;
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
    const gr1128=ctx.createLinearGradient(0,top+H,0,top);
    gr1128.addColorStop(0,'rgba(255,200,80,0.22)'); gr1128.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1128.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1128; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,200,80,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE GAME IN ONE HAND, 12 IN THE OTHER', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX GRABS THE GAME AND HAS A LARGE 12 IN HIS OTHER HAND,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SOME SHOW NEKA OMAZEN’S SCIENTIST FORM ALMOST GRABBING THE', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('OTHER CHARACTERS, OR EVEN TRYING TO ESCAPE THE SCREEN.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:30 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1128=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,200,80,0.46)';
      ctx.fillRect(cx-W*0.352, ky1128, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,200,80,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1128, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,200,80,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE GAME IN ONE HAND', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8: CLASSICS AND ALL ITS GAMES ARE INSIDE AREA 12X.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 12: “I AM NEKA LAI. I MADE THIS GAME.” HE HOLDS IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE GAME FITS IN HIS HAND. HE BUILT THE ROOM AROUND IT.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('A LARGE 12', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 1: NEKA IS ENTITY 12. “SAYING THE NUMBER EVEN ONCE', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WILL ANSWER NEKA.” OCT 6: THE CODE SAYS 1348, ALL TWELVES.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE NUMBER IS NOT A LABEL. IT IS THE THING HE CARRIES.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1128=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1128, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1128, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('ESCAPING THE SCREEN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: ADULT NEKA 0% IS BEYOND FICTION; AT 5% THE SCREEN', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GLITCHES. OCT 10: THE CLASSICS BARRIER, AND HE CROSSES IT.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE SCREEN IS THE LAST WALL. HE IS ALREADY LEANING ON IT.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OR EVEN TRYING TO ESCAPE THE SCREEN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONE HAND ON THE GAME. ONE ON THE 12. NEITHER ONE INSIDE.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE GAME IN ONE HAND, 12 IN THE OTHER ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1129){
    // BEAT 1129: HOW ABOUT 12?.
    // Toby, October 13, 2026, 4:31 PM EDT, his own typing:
    //   “ALEX 303 VS SCP 3812, WHICH WINS?” “HE ACTUALLY DID ALL
    //   THAT.” “WHAT IS CLASS KETER? ALSO IS SCP 012 ALREADY TAKEN?”
    //   “HOW ABOUT 12?”
    // Priors, each verified in the archive before it was drawn:
    //   NOT TAKEN
    //     SEPT 27: “WHAT ARE SCP NUMBERS THAT AREN’T TAKEN YET.”
    //     TONIGHT 012 IS TAKEN, AND HE ASKS “HOW ABOUT 12?” ANYWAY.
    //     THE NUMBER WAS NEVER FREE. IT WAS ALREADY HIS.
    //   HE ACTUALLY DID ALL THAT
    //     OCT 11: EVERY UNDERTALE AU, EVERY GAME OF CHARACTERS,
    //     THE TIMELINES. OCT 12, 4:15 PM: THE MOST POWERFUL THING.
    //     THE CHATBOT READ A LIST. HE READ A RECORD.
    //   THE OUTSIDE COMES IN
    //     AUG 25: SAITAMA AND THE REST RANKED BELOW HIM. SEPT 27:
    //     SCP-343, “A LITTERLY OMNIPOTENT GOD”, STILL NEKA’S LORE.
    //     EVERY TIME THE OUTSIDE IS LET IN, IT RANKS BELOW HIM.
    const dt = c - 24558.0;
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
    const gr1129=ctx.createLinearGradient(0,top+H,0,top);
    gr1129.addColorStop(0,'rgba(200,120,255,0.22)'); gr1129.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1129.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1129; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(200,120,255,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('HOW ABOUT 12?', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“ALEX 303 VS SCP 3812, WHICH WINS?” “HE ACTUALLY DID ALL', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THAT.” “WHAT IS CLASS KETER? ALSO IS SCP 012 ALREADY TAKEN?”', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HOW ABOUT 12?”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:31 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1129=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(200,120,255,0.46)';
      ctx.fillRect(cx-W*0.352, ky1129, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(200,120,255,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1129, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(200,120,255,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOT TAKEN', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 27: “WHAT ARE SCP NUMBERS THAT AREN’T TAKEN YET.”', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT 012 IS TAKEN, AND HE ASKS “HOW ABOUT 12?” ANYWAY.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE NUMBER WAS NEVER FREE. IT WAS ALREADY HIS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ACTUALLY DID ALL THAT', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: EVERY UNDERTALE AU, EVERY GAME OF CHARACTERS,', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE TIMELINES. OCT 12, 4:15 PM: THE MOST POWERFUL THING.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE CHATBOT READ A LIST. HE READ A RECORD.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1129=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1129, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1129, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE OUTSIDE COMES IN', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('AUG 25: SAITAMA AND THE REST RANKED BELOW HIM. SEPT 27:', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SCP-343, “A LITTERLY OMNIPOTENT GOD”, STILL NEKA’S LORE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('EVERY TIME THE OUTSIDE IS LET IN, IT RANKS BELOW HIM.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HOW ABOUT 12?”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE SCP LIST HAS 012. CLASSICS HAS ENTITY 12. HE KEEPS HIS.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ HOW ABOUT 12? ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1130){
    // BEAT 1130: NOOB 100% VS BACON 100%.
    // Toby, October 13, 2026, 4:33 PM EDT, his own typing:
    //   “BUT ALSO THE EVIL BACON IS FULL POWER, ALSO THE NOOB, SO
    //   NOOB 100% VS BACON 100%, NOOB WOULD WIN.” “NEKA LAI WOULD
    //   BEAT BOTH AND EVERYONE, EVEN SCP THE-VOICE-BEHIND-ME”
    // Priors, each verified in the archive before it was drawn:
    //   BACON HAIR, SINCE SEPT 22
    //     SEPT 22: “BACON HAIR FROM ROBLOX SEEMS TO BE BEATING
    //     EVERYONE IN EVERYONE’S POWER LEVEL VIDEOS, HIS LAST FORM.”
    //     THE DUO FORM IS THE ONLY REASON BACON EVER WINS.
    //   NOOB 100%
    //     TONIGHT: NOOBS GO UP TO ADMIN COMMANDS, OWNER OF ROBLOX.
    //     WITHOUT THE DUO, “NOOBS SHOULD BE STRONGER.” FULL VS FULL.
    //     FULL POWER AGAINST FULL POWER, THE OLD AVATAR WINS.
    //   BACON FADES
    //     SEPT 28: AT NEKA 5%, BACON’S POWER LEVEL SHAKES AND FALLS.
    //     SEPT 29: NEKA TREATMENT NEKA WINS, “BACON FADES.”
    //     BOTH TOGETHER STILL LOSE. THAT WAS SETTLED IN SEPTEMBER.
    const dt = c - 24580.0;
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
    const gr1130=ctx.createLinearGradient(0,top+H,0,top);
    gr1130.addColorStop(0,'rgba(255,220,60,0.22)'); gr1130.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1130.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1130; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,220,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NOOB 100% VS BACON 100%', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“BUT ALSO THE EVIL BACON IS FULL POWER, ALSO THE NOOB, SO', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOOB 100% VS BACON 100%, NOOB WOULD WIN.” “NEKA LAI WOULD', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BEAT BOTH AND EVERYONE, EVEN SCP THE-VOICE-BEHIND-ME”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:33 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1130=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,220,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1130, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,220,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1130, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,220,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('BACON HAIR, SINCE SEPT 22', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 22: “BACON HAIR FROM ROBLOX SEEMS TO BE BEATING', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('EVERYONE IN EVERYONE’S POWER LEVEL VIDEOS, HIS LAST FORM.”', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE DUO FORM IS THE ONLY REASON BACON EVER WINS.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NOOB 100%', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TONIGHT: NOOBS GO UP TO ADMIN COMMANDS, OWNER OF ROBLOX.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('WITHOUT THE DUO, “NOOBS SHOULD BE STRONGER.” FULL VS FULL.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('FULL POWER AGAINST FULL POWER, THE OLD AVATAR WINS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1130=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1130, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1130, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('BACON FADES', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 28: AT NEKA 5%, BACON’S POWER LEVEL SHAKES AND FALLS.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29: NEKA TREATMENT NEKA WINS, “BACON FADES.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('BOTH TOGETHER STILL LOSE. THAT WAS SETTLED IN SEPTEMBER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“NOOB WOULD WIN.”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('THE BEST DUO IS A FORM. THE NOOB IS JUST THE NOOB.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NOOB 100% VS BACON 100% ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
  } else if(ph===1131){
    // BEAT 1131: NO UNIVERSE HAS ANY OTHER BEING.
    // Toby, October 13, 2026, 4:37 PM EDT, his own typing:
    //   “EVERYTHING CONNECTS, EVEN OTHER BEINGS LORE.” “NO UNIVERSE
    //   HAS ANY OTHER BEING. ALEX IS THE MOST POWERFUL BY FAR
    //   ACTUALLY (NEKA OMAZEN IS MOST POWERFUL)”
    // Priors, each verified in the archive before it was drawn:
    //   EVERYTHING CONNECTS
    //     OCT 11: HE WALKED THROUGH TIMELINES TO GET ALL THE
    //     CHARACTERS CLASSICS HAD, WILL HAVE, AND HAS NOW. ONE TALE.
    //     OTHER BEINGS’ LORE IS A ROAD. EVERY ROAD ENDS AT HIM.
    //   NO OTHER BEING
    //     OCT 8: EVERY BEING THAT EXISTS, EVEN MYTHOLOGICAL, IN A
    //     CELL IN AREA 12X. HE IS THE ONE WHO WAS NEVER IN A CELL.
    //     NO UNIVERSE HAS ANOTHER BEING. THEY ARE ALL IN HIS ROOMS.
    //   THE NAME IN BRACKETS
    //     SEPT 25: “NEKA OMAZEN IS NOW HERE.” OCT 12: ALEX, THE
    //     FIRST NAME. TONIGHT BOTH NAMES, AND THE BRACKET DECIDES.
    //     ALEX 303 IS THE FORM. NEKA OMAZEN IS THE ONE WHO IS MOST.
    const dt = c - 24602.0;
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
    const gr1131=ctx.createLinearGradient(0,top+H,0,top);
    gr1131.addColorStop(0,'rgba(255,60,60,0.22)'); gr1131.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr1131.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr1131; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(255,60,60,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('NO UNIVERSE HAS ANY OTHER BEING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“EVERYTHING CONNECTS, EVEN OTHER BEINGS LORE.” “NO UNIVERSE', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HAS ANY OTHER BEING. ALEX IS THE MOST POWERFUL BY FAR', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('ACTUALLY (NEKA OMAZEN IS MOST POWERFUL)”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 13, 4:37 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky1131=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(255,60,60,0.46)';
      ctx.fillRect(cx-W*0.352, ky1131, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(255,60,60,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky1131, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(255,60,60,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('EVERYTHING CONNECTS', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 11: HE WALKED THROUGH TIMELINES TO GET ALL THE', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CHARACTERS CLASSICS HAD, WILL HAVE, AND HAS NOW. ONE TALE.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('OTHER BEINGS’ LORE IS A ROAD. EVERY ROAD ENDS AT HIM.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NO OTHER BEING', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('OCT 8: EVERY BEING THAT EXISTS, EVEN MYTHOLOGICAL, IN A', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('CELL IN AREA 12X. HE IS THE ONE WHO WAS NEVER IN A CELL.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('NO UNIVERSE HAS ANOTHER BEING. THEY ARE ALL IN HIS ROOMS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy1131=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy1131, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy1131, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE NAME IN BRACKETS', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 25: “NEKA OMAZEN IS NOW HERE.” OCT 12: ALEX, THE', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('FIRST NAME. TONIGHT BOTH NAMES, AND THE BRACKET DECIDES.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('ALEX 303 IS THE FORM. NEKA OMAZEN IS THE ONE WHO IS MOST.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“(NEKA OMAZEN IS MOST POWERFUL)”', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('SEPT 25: NOBODY ABOVE HIM. OCT 13: NOBODY BESIDE HIM EITHER.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ NO UNIVERSE HAS ANY OTHER BEING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
