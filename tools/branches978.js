  } else if(ph===978){
    // BEAT 978: I’M SO TIRED....
    // Toby, October 3, 2026, 12:56 PM EDT, his own typing:
    //   “HERE IS THE RESULT. GASTER USES PYCHOTETHICALICIA, THEN HE SAYS ‘I’M SO TIRED...’,
    //   THEN HE FALLS OVER AND SLEEPS. GASTER HIMSELF STANDS IN A BLACK VOID,
    //   HE ABSORBED THE COLOR, MAKING IT WHITE.”
    // Priors, each verified in the archive before it was drawn:
    //   THE RESULT
    //     TEN MINUTES EARLIER HE ASKED FOR A VIDEO OF THE GASTER ATTACK.
    //     THE ATTACK IS BEAT 976. THIS IS WHAT HAPPENS AFTER IT.
    //     IT KOS ANYTHING, AND IT USES UP GASTER TOO.
    //   もう疲れた……
    //     PRESSURETALE IS ALL JAPANESE (BEAT 977),
    //     SO THIS IS HOW HE SAYS IT THERE.
    //     I’M SO TIRED... THEN HE FALLS OVER AND SLEEPS.
    //   THE VOID TURNS WHITE
    //     GASTER STANDS ALONE IN THE BLACK VOID.
    //     HE ABSORBS THE COLOR, AND THE VOID TURNS WHITE.
    //     NEKA WAS TIRED AND ASLEEP BEFORE. NOW NEKA IS INSIDE GASTER, AND GASTER SLEEPS.
    const dt = c - 21236.0;
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
    const gr978=ctx.createLinearGradient(0,top+H,0,top);
    gr978.addColorStop(0,'rgba(230,232,245,0.22)'); gr978.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr978.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr978; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(230,232,245,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('I’M SO TIRED...', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“HERE IS THE RESULT. GASTER USES PYCHOTETHICALICIA, THEN HE SAYS ‘I’M SO TIRED...’,', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THEN HE FALLS OVER AND SLEEPS. GASTER HIMSELF STANDS IN A BLACK VOID,', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HE ABSORBED THE COLOR, MAKING IT WHITE.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, OCTOBER 3, 12:56 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky978=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(230,232,245,0.46)';
      ctx.fillRect(cx-W*0.352, ky978, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(230,232,245,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky978, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(230,232,245,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE RESULT', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('TEN MINUTES EARLIER HE ASKED FOR A VIDEO OF THE GASTER ATTACK.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ATTACK IS BEAT 976. THIS IS WHAT HAPPENS AFTER IT.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('IT KOS ANYTHING, AND IT USES UP GASTER TOO.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('もう疲れた……', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('PRESSURETALE IS ALL JAPANESE (BEAT 977),', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SO THIS IS HOW HE SAYS IT THERE.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('I’M SO TIRED... THEN HE FALLS OVER AND SLEEPS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy978=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy978, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy978, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE VOID TURNS WHITE', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('GASTER STANDS ALONE IN THE BLACK VOID.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HE ABSORBS THE COLOR, AND THE VOID TURNS WHITE.', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('NEKA WAS TIRED AND ASLEEP BEFORE. NOW NEKA IS INSIDE GASTER, AND GASTER SLEEPS.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE STRONGEST ATTACK IN THE GAME ENDS IN A NAP.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('GASTER WON. NOW HE SLEEPS IN A WHITE VOID.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ I’M SO TIRED... ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
