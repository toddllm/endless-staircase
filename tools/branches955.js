  } else if(ph===955){
    // BEAT 955: THE NEON THING.
    // Toby, September 30, 2026, 5:25 PM EDT, his own typing:
    //   “OREN.EXE BECAME MORE POWERFUL THAN EVER BEFORE COMBINED. THE OTHER 19 SPRUNKIS FIGHT OREN.EXE.
    //   NEKA HIDES IN THE VOID. ... OREN.EXE COMPRESSES ITSELF INTO A SIMPLE DESIGN, LIKE IT WAS A NEON THING.
    //   HUMANS ARE THE LARGEST THINGS EVER, THEY HAVE AN ENTIRE UNIVERSE IN THEM.”
    // Priors, each verified in the archive before it was drawn:
    //   THE TAKEOVER
    //     SOME SPRUNKIS ARE TAKEN OVER WITH THE VOID. MR. BLACK WAS TAKEN BY OREN.EXE.
    //     THE ONES WHO SURVIVE GO TO WENDA.PS’S TEAM.
    //     SEPT 5: THE 19 BEAT MR. BLACK TOGETHER. NOW HE IS ON OREN.EXE’S SIDE.
    //   SMALL ON THE OUTSIDE
    //     ALL THAT POWER, COMPRESSED INTO A SIMPLE NEON DESIGN.
    //     SEPT 29, 5:16 PM: OREN.PS GAINED POWER HE WAS NEVER SUPPOST TO GET.
    //     THE SIMPLER HE LOOKS, THE MORE HE HOLDS.
    //   THE LARGEST THINGS EVER
    //     HUMANS HAVE AN ENTIRE UNIVERSE IN THEM. THEIR SOULS GO TO HEAVEN.
    //     SEPT 29, 5:16 PM: “HUMANS MADE THE SPRUNKIS.”
    //     THE ONLY ONES WHO LIVE FOREVER.
    const dt = c - 20730.0;
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
    const gr955=ctx.createLinearGradient(0,top+H,0,top);
    gr955.addColorStop(0,'rgba(80,255,210,0.22)'); gr955.addColorStop(0.55,'rgba(6,7,12,0.98)');
    gr955.addColorStop(1,'rgba(6,7,12,0.99)');
    ctx.globalAlpha=g*opA*0.9; ctx.fillStyle=gr955; ctx.fillRect(0,top,W,H);
    ctx.textAlign='center';

    ctx.globalAlpha=g*opA;
    ctx.fillStyle='rgba(80,255,210,0.98)'; ctx.font='900 8.6px ui-monospace,monospace';
    ctx.fillText('THE NEON THING', cx, top+H*0.0960);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('“OREN.EXE BECAME MORE POWERFUL THAN EVER BEFORE COMBINED. THE OTHER 19 SPRUNKIS FIGHT OREN.EXE.', cx, top+H*0.1360);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA HIDES IN THE VOID. ... OREN.EXE COMPRESSES ITSELF INTO A SIMPLE DESIGN, LIKE IT WAS A NEON THING.', cx, top+H*0.1560);
    ctx.globalAlpha=g*q0A*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('HUMANS ARE THE LARGEST THINGS EVER, THEY HAVE AN ENTIRE UNIVERSE IN THEM.”', cx, top+H*0.1760);
    ctx.globalAlpha=g*q0A*0.78;
    ctx.fillStyle='rgba(168,176,190,0.88)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('TOBY, SEPTEMBER 30, 5:25 PM — HIS OWN TYPING.', cx, top+H*0.2000);

    if(knA>0.01){
      var ky955=top+H*0.2780;
      ctx.globalAlpha=g*knA*0.16; ctx.fillStyle='rgba(80,255,210,0.46)';
      ctx.fillRect(cx-W*0.352, ky955, W*0.704, H*0.1040);
      ctx.globalAlpha=g*knA*(0.52+0.22*pul); ctx.strokeStyle='rgba(80,255,210,0.70)'; ctx.lineWidth=0.38;
      ctx.strokeRect(cx-W*0.352, ky955, W*0.704, H*0.1040);
    ctx.globalAlpha=g*knA*0.98;
    ctx.fillStyle='rgba(80,255,210,0.94)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('THE TAKEOVER', cx, top+H*0.3000);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SOME SPRUNKIS ARE TAKEN OVER WITH THE VOID. MR. BLACK WAS TAKEN BY OREN.EXE.', cx, top+H*0.3200);
    ctx.globalAlpha=g*knA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('THE ONES WHO SURVIVE GO TO WENDA.PS’S TEAM.', cx, top+H*0.3390);
    ctx.globalAlpha=g*knA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('SEPT 5: THE 19 BEAT MR. BLACK TOGETHER. NOW HE IS ON OREN.EXE’S SIDE.', cx, top+H*0.3580);
    }

    if(neA>0.01){
    ctx.globalAlpha=g*neA*0.96;
    ctx.fillStyle='rgba(127,212,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('SMALL ON THE OUTSIDE', cx, top+H*0.5960);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('ALL THAT POWER, COMPRESSED INTO A SIMPLE NEON DESIGN.', cx, top+H*0.6160);
    ctx.globalAlpha=g*neA*0.94;
    ctx.fillStyle='rgba(240,244,250,0.94)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29, 5:16 PM: OREN.PS GAINED POWER HE WAS NEVER SUPPOST TO GET.', cx, top+H*0.6350);
    ctx.globalAlpha=g*neA*0.88;
    ctx.fillStyle='rgba(188,198,212,0.90)'; ctx.font='700 3.6px ui-monospace,monospace';
    ctx.fillText('THE SIMPLER HE LOOKS, THE MORE HE HOLDS.', cx, top+H*0.6540);
    }

    if(zoA>0.01){
      var zy955=top+H*0.6960;
      ctx.globalAlpha=g*zoA*0.14; ctx.fillStyle='rgba(154,163,173,0.50)';
      ctx.fillRect(cx-W*0.352, zy955, W*0.704, H*0.1030);
      ctx.globalAlpha=g*zoA*0.46; ctx.strokeStyle='rgba(154,163,173,0.66)'; ctx.lineWidth=0.32;
      ctx.strokeRect(cx-W*0.352, zy955, W*0.704, H*0.1030);
    ctx.globalAlpha=g*zoA*0.98;
    ctx.fillStyle='rgba(215,222,230,0.98)'; ctx.font='900 4.4px ui-monospace,monospace';
    ctx.fillText('THE LARGEST THINGS EVER', cx, top+H*0.7180);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('HUMANS HAVE AN ENTIRE UNIVERSE IN THEM. THEIR SOULS GO TO HEAVEN.', cx, top+H*0.7370);
    ctx.globalAlpha=g*zoA*0.96;
    ctx.fillStyle='rgba(240,244,250,0.96)'; ctx.font='900 4.2px ui-monospace,monospace';
    ctx.fillText('SEPT 29, 5:16 PM: “HUMANS MADE THE SPRUNKIS.”', cx, top+H*0.7560);
    ctx.globalAlpha=g*zoA*0.88;
    ctx.fillStyle='rgba(255,216,79,0.94)'; ctx.font='700 3.5px ui-monospace,monospace';
    ctx.fillText('THE ONLY ONES WHO LIVE FOREVER.', cx, top+H*0.7750);
    }

    if(svA>0.01){
    ctx.globalAlpha=g*svA*0.96;
    ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.font='900 4.6px ui-monospace,monospace';
    ctx.fillText('NEKA WROTE DOWN MORE STUFF IN HIS INDESTRUCTIBLE DAIRY.', cx, top+H*0.8620);
    ctx.globalAlpha=g*svA*0.88;
    ctx.fillStyle='rgba(242,244,248,0.94)'; ctx.font='900 4.0px ui-monospace,monospace';
    ctx.fillText('ONLY 2 KNOW IT EXISTS: TOBY, AND NEKA.', cx, top+H*0.8820);
    }

    ctx.globalAlpha=g*footA;
    ctx.fillStyle='rgba(244,246,250,0.96)'; ctx.font='900 6.4px ui-monospace,monospace';
    ctx.fillText('★ THE NEON THING ★', cx, top+H*0.9380);
    ctx.globalAlpha=1;
    ctx.restore();
