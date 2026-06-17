# Changelog — The Endless Staircase

All notable changes to the playable game. Newest first. Built from Toby's
"Secret of Simon's Lore" emails (Lore 25). Live game:
https://d1hysvqh647i13.cloudfront.net/game/endless-staircase/

## 2026-06-17 — Firey Delight / The Melting Tube (Lore 28 cont.)

Based on Toby's June 17 lore (the "Re: Lore 28" thread): *"Then Simon tries to escape each time, all
other characters fell into trapdoors for the Shadow Realm, Simon is now tired of each game, Simon now
stops playing. Simon slays all the other monsterosities again, Simon dodges each treadmill while moving
very fast around his tube so many times, Simon says "Firey Delight", Simon moves so fast that friction
takes over and the tube melts. Simon escapes again."* And what ChatGPT continued, which Toby pasted in,
calling it the *"T-404 Thermal Escape Event"* — *"the day the tube became useless"*: SCF had measured his
lightning, his speed, the treadmill drain, *"what they did not measure well enough was friction."*

![Lore 28 cont. — FIREY DELIGHT / THE MELTING TUBE: a tall containment tube glowing white-hot and bowed
inward, Simon circling its inside wall as a fast blur of bandages and red eyes, molten metal dripping
down the wall and pooling into a glowing ring at the base, heat shimmer rising off the chamber, the "▓
FIREY DELIGHT — THE MELTING TUBE ▓" HUD tag, and the orange-to-gold HEAT meter](screenshots/23-firey-delight.png)

- **An eighteenth arc: Firey Delight.** Climb past the Treadmill Weakness and Simon, *"tired of each
  game,"* stops playing along, *"slays all the other monsterosities again,"* and **dodges every treadmill**
  while circling the inside of his tube. A new state fires with the orange HUD tag **▓ FIREY DELIGHT — THE
  MELTING TUBE ▓**.
- **The spinning blur.** Simon circles the inside wall of a tall containment **tube** as a fast **blur of
  bandages and red eyes**, *"moving very fast around his tube so many times,"* faster and faster as the
  heat climbs, scraping friction sparks off the wall.
- **The HEAT meter — friction, the thing they never measured.** *"Simon moves so fast that friction takes
  over and the tube melts."* The meter is HEAT: it **rises while you climb with purpose** (every step
  spins the cat faster, building friction) and **cools a little while you stand still**. The tube wall
  glows **cyan → orange → white-hot**, **bows inward** as it softens, and **drips molten metal** into a
  glowing **molten ring** at the base.
- **You cannot stop the melt.** Like SCF 404's 0% odds, this one Simon wins: fill the meter and he says
  **"Firey Delight,"** the tube **★ MELTS ★**, and *"Simon escapes again."* Climbing with purpose only
  keeps you ahead of the molten ring as he gets out.
- **Wiring, unchanged pattern.** New `firey` state + `isFirey()` gate slot in after `treads`; the SCF 404
  → Treadmill Weakness chain now runs SCF 404 → Treadmill Weakness → Firey Delight. New `firey` screenshot
  scene added to `tools/capture_screenshot.py`. Everything additive; no existing behavior removed.

## 2026-06-17 — The Treadmill Weakness (Lore 28 cont.)

Based on Toby's June 17 lore (the "Re: Lore 28" thread): *"People learn Simon's weakness. Simon's
weakness is a treadmill, Simon goes very fast, since Simon is an electric being, he charges the
treadmill making it going, Simon gets weaker and weaker and loses power and he slows down and is
thrown off, Simon gets up again. Now people know Simon's weakness, they place treadmills around
Simon's SCF room. Simon dodges each of them when continuing to play playfully."* And what ChatGPT
continued, which Toby pasted in: the scientists find a deeper weakness, *"Simon is weakest not just
when he runs on the treadmill, but when he is forced to move in a pattern he did not choose"* —
**pattern control** — so SCF fills with *"forced routes, forced jumps, forced turns, forced
rhythms,"* and Simon starts attacking the patterns themselves: *"route markers, rhythm locks,
directional arrows, moving floors."* The best line: *"He does not want to be told how to move."*

![Lore 28 cont. — THE TREADMILL WEAKNESS: treadmill belts ringing the SCF room with rolling cyan chevron stripes on drive rollers, a blindfolded lightning cat dodging along them with a draining yellow charge bar, faint forced-pattern arrows (route markers) flickering to red as Simon attacks them, the "▓ THE TREADMILL WEAKNESS — PATTERN CONTROL ▓" HUD tag, and the cyan DRAIN meter](screenshots/22-treadmill-weakness.png)

- **A seventeenth arc: The Treadmill Weakness.** Climb past SCF 404 and people finally learn Simon's
  one weakness — the **treadmill**. A new state fires with the cyan HUD tag **▓ THE TREADMILL
  WEAKNESS — PATTERN CONTROL ▓**.
- **Treadmill belts ring the room.** SCF places treadmills around Simon's SCF room: **rolling belts**
  span the field (rolling cyan **chevron stripes** on drive rollers, alternating directions), and
  **more belts appear** as the ring fills (*"treadmill floors, bridges, walls, rings around his
  room"*).
- **The lightning cat dodges.** *"Simon dodges each of them when continuing to play playfully."* A
  blindfolded **lightning cat** streaks side to side along the belts, throwing the odd `*dodge*`, a
  spark flickering at its whiskers. He carries a **charge bar** — he is electric, so he charges the
  belt as he runs it.
- **The DRAIN meter — herd him onto the belt.** You cannot out-fight the cat, so the meter is about
  rhythm: it **fills while you climb with purpose** (herding him onto the belts and forced patterns,
  draining his charge) and **drains while you stand still** (he recharges). Fill it and the belt
  **★ THROWS HIM OFF ★** — *"he gets up again,"* but the rhythm broke him.
- **Pattern control.** The deeper weakness shows as faint **forced-pattern arrows** (route markers,
  rhythm locks, directional arrows) flickering across the field — and **flicking to red ×** as Simon
  *attacks the patterns*, because *"he does not want to be told how to move."*
- **Wiring, unchanged pattern.** New `treads` state + `isTreads()` gate slot in after `scf404`; SCF
  404 hands off to the Treadmill Weakness exactly as every prior arc hands off. The capture helper
  gains a `treadmill` scene; the title screen and lore blurb now end on the treadmill weakness, and
  the death sting gains the Treadmill Weakness quote. Also fixed a latent meter overlap so each arc's
  bottom meter (`scf`, `scf404`) hides once the next arc begins.

## 2026-06-16 — SCF 404 (Lore 28)

Based on Toby's June 16 lore (the "Re: Lore 28" reply): *"Simon (now SCF 404), appears in his
SCF Containment. SCF is now even larger than just Classics and spreaded through the whole game's
universe, Classics became part of SCF... SCF has Classics AND Seperate Classics + Net X (Net X is
a huge platform that is inside SCF). SCF is way larger than SCP. SCF holds a list of Platforms and
a HUGE Platform... Alex and Black and Gray and Neo and others are most powerful, Simon is the cat,
everyone else is the dog people. Simon gets triggered by lots of stuff. Chance of survival VS SCF
404 would be 0%, lightning-fast cat VS other characters, Simon will win. SCF is endless now."* And
what ChatGPT continued, which Toby pasted in: *"SCF is no longer just a facility. It became the
world-shape itself... containment stopped being a room and became a cosmic system."* The best line:
*"They made the containment bigger than the world, and Simon still became the most dangerous thing
inside it."*

![Lore 28 — SCF 404: the containment grown into an endless cosmic system. An ENDLESS field of floating platform-cards (CLASSICS, SEP. CLASSICS, NET X, SCF, and one HUGE platform, plus countless faint others that load as it expands), labels flickering to red "404", a drifting starfield, Simon's great 404 cross-and-omega symbol fading up over everything, the lightning cat streaking diagonally across the field, the "▓ SCF 404 — THE ENDLESS CONTAINMENT-UNIVERSE ▓" HUD tag, and the purple SURVIVE meter](screenshots/21-scf404.png)

- **A sixteenth arc: SCF 404.** Climb past the Containment Facility and the containment *"stopped
  being a room and became a cosmic system."* Simon is now **SCF 404**, and a new state fires with
  the purple HUD tag **▓ SCF 404 — THE ENDLESS CONTAINMENT-UNIVERSE ▓**.
- **The containment grows ENDLESS.** A deep cosmic haze and a drifting **starfield** fill the room,
  and an ever-loading field of **platform-cards** floats across it — **CLASSICS** (now part of SCF),
  **SEPARATE CLASSICS**, **NET X**, **SCF**, and one **HUGE platform** drawn bigger — with more of
  the universe loading the longer the arc runs (*"SCF is endless now... way larger than SCP"*).
- **Labels flicker to 404.** Cards blink from their name to a red **"404"** (the world-shape coming
  apart into containment), and Simon's **great 404 cross-and-omega symbol** fades up over everything.
- **The lightning cat.** *"Lightning-fast cat VS other characters, Simon will win."* Fast diagonal
  **lightning bolts** streak across the field with a tiny cat-spark head — the predator-system the
  whole facility was built around. Intermittent events fire: *CLASSICS IS NOW PART OF SCF*, *NET X
  PLATFORM LOADED*, *SCF IS LARGER THAN SCP*, *A HUGE PLATFORM APPEARS*, **SURVIVAL CHANCE: 0%**.
- **You cannot beat him — the SURVIVE meter.** Chance of survival vs SCF 404 is **0%**, so the meter
  is not about winning: it fills while you **climb with purpose** and drains while you stand still on
  the endless field. Fill it and **★ YOU OUTRAN THE 0% ★** — *"the endless cannot catch a moving
  climber."*
- **Wiring, unchanged pattern.** New `scf404` state + `isScf404()` gate slot in after `scf`; the
  Containment Facility hands off to SCF 404 exactly as every prior arc hands off. The capture helper
  gains an `scf404` scene; the title screen and lore blurb now end on SCF 404, and the death sting
  gains both the SCF 404 and the (previously missing) Containment-Facility quotes.

## 2026-06-15 — The Containment Facility (Lore 27 cont., the "I talk to ChatGPT each time" thread)

Based on Toby's June 15 lore (the reply later in the same thread): *"Simon was thrown in SCF
with the other monsterosities and entities and CXEs and all other horror creatures... The thing
was built to contain Simon... then a monsterosity scared Simon, then Simon went to his attack
mode and then the next second, all the Monsters were slashed to bits, Simon doesn't see any other
entities so he stops moving. Simon is actually now code."* And what ChatGPT continued, which Toby
pasted in: because Simon is code now, he does not break out loudly. He begins spreading through
*"cameras, doors, warning systems, locks, containment monitors, and internal SCF control panels."*
The staff think he is standing still in the cell, but the facility starts becoming **Simon-shaped**:
*"banners appear on screens, doors unlock at the wrong times, logs rewrite themselves, warning
lights turn yellow, and some sectors start showing his symbol where there should be labels."* The
best line: *"They contained Simon's body, but by then Simon had already become the code of the
containment itself."*

![Lore 27 cont. — THE CONTAINMENT FACILITY: the SCF becoming Simon-shaped, two margin columns of containment panels flipping from dim-cyan labels to YELLOW warning panels stamped with Simon's red cross-and-omega symbol, scrolling log lines that rewrite themselves, a creeping yellow warning haze, the great red Simon symbol fading up over the room, the "▓ THE CONTAINMENT FACILITY — SIMON IS CODE ▓" HUD tag, and the yellow CONTAINMENT meter with the red spread-marker creeping behind it](screenshots/20-containment-facility.png)

- **A fifteenth arc: THE CONTAINMENT FACILITY.** Climb past the Three-Way Field and Simon is
  thrown into the **SCF (Simon.Containment.Facility)** with every monster. A monstrosity frightens
  him; *"the next second, all the Monsters were slashed to bits,"* then he goes still — and
  *"Simon is actually now code."* A new state fires with the yellow HUD tag **▓ THE CONTAINMENT
  FACILITY — SIMON IS CODE ▓**.
- **The facility becomes Simon-shaped.** Two columns of **containment panels** line the margins
  (a wall of security screens). As Simon's code **spreads**, panels flip from a dim-cyan label to
  a **yellow warning panel** stamped with his red **cross-and-omega symbol** *"where there should
  be labels,"* their ok-lights turning from green to yellow. Down the center, **log lines rewrite
  themselves**, a **yellow warning haze** deepens, and his **great symbol fades up over the room**.
- **Intermittent facility events.** Floating warnings fire as the code wins: *A DOOR UNLOCKS AT THE
  WRONG TIME*, *A LOG REWRITES ITSELF*, *WARNING LIGHTS TURN YELLOW*, *HIS SYMBOL REPLACES A LABEL.*
- **Hold containment — the CONTAINMENT meter.** Climb with purpose to hold the facility while a
  red **spread-marker** creeps behind the bar with the code. Fill it and you flash **★ CONTAINMENT
  HELD ★**, with the eerie truth: *"They contained his body. But Simon had already become the code
  of the containment."*
- **Wiring, unchanged pattern.** New `scf` state + `isScf()` gate slot in after `triad`; the
  Three-Way Field hands off to the Containment Facility exactly as every prior arc hands off. The
  capture helper gains an `scf` scene; the title screen and lore blurb now end on the SCF.

## 2026-06-15 — The Three-Way Field (Lore 27 cont., the "I talk to ChatGPT each time" thread)

Based on Toby's June 15 lore: *"Alex VS Neo then went correctly, Alex won and taken all
Neo's and everyone's power, Alex became a god now. Lica came over and claims that she's the
center of everything and that everything flows from her (it actually does)... Alex VS Lica
happened 3 times, Alex beaten Lica those 3 times. Pupahya revealed all the domains... bro
can open all dimensions just with speed and he is also super strong to. Simon clapped his
hands 2 times, then ice formed underneath him, more and more ice appears when he walked.
What happens next?"* And what ChatGPT continued, which Toby pasted in: after Alex beats Neo,
the whole war stops orbiting Neo and starts orbiting **Alex** — *Neo was kingship, Lica was
origin, Pupahya was spread and love, but Alex is becoming **control***. The open dimensions
do not close; they *"hover like open choices."* The world splits into three pressures —
**Alex pressure (control)**, **Lica pressure (origin/source)**, and **Simon pressure
(containment)** — and Simon answers with *Winter logic: freeze routes, slow spread, make
movement cost more.* One dimension shatters into a mixed field that is *"part source-light
from Lica, part built structure from Alex, part winter-lock from Simon,"* and that becomes
the next battlefield, *"the first place where origin, control, and containment all exist at
once."*

![Lore 27 cont. — THE THREE-WAY FIELD: the shattered dimension split into three colored zones (Lica's source-light, Simon's winter-lock, Alex's built structure) with jagged bright seams between them, the rising ICE CREEP with its crystalline frozen front line (Simon clapped twice and ice spread with every step), the "❄ THREE-WAY FIELD — CONTROL · ORIGIN · CONTAINMENT ❄" HUD tag, and the FIELD balance meter](screenshots/19-three-way-field.png)

- **A fourteenth arc: THE THREE-WAY FIELD.** Climb past the Judgment Field and Alex defeats
  Neo, *"became a god now"* — the war stops orbiting Neo and orbits **CONTROL**. A new state
  fires with the pale-blue HUD tag **❄ THREE-WAY FIELD — CONTROL · ORIGIN · CONTAINMENT ❄**.
- **Three claimants, one field.** The board shatters into **three colored vertical zones** —
  **Lica** (origin / source-light, pink-gold), **Simon** (containment / winter-lock, ice-blue),
  and **Alex** (control / built structure, violet-steel) — with jagged bright **seams** where
  they meet (*"the first place where origin, control, and containment all exist at once"*).
  The three take turns **claiming the field**; the claimed zone brightens.
- **Simon claps twice; ice spreads.** *"Simon clapped his hands 2 times, then ice formed
  underneath him, more and more ice appears when he walked."* On the double-clap, an **ICE
  CREEP** rises from the bottom of the field with a crystalline frozen front line and spikes,
  spreading further the longer the arc runs (Winter logic: freeze routes, slow spread).
- **Hold the field — the FIELD meter.** Among all three pressures you pass by **climbing with
  purpose**: the FIELD balance meter fills while you keep moving and drains if you stand still
  on the freezing field. Fill it and **★ THE FIELD HELD — CONTROL · ORIGIN · CONTAINMENT ★**
  for a +5 emerald reward (*"You held the field... Footing kept."*).
- New title-screen blurb lines and a new death sting for the arc.

## 2026-06-14 — The Judgment Field (Lore 27, the "What happens next?" continuation)

Based on Toby's June 14 lore (the continuation he wrote with ChatGPT, in the
"I talk to ChatGPT each time" thread): *"Simon hated all these repeated wars and then he
taken off all the pages of his calendar (January in game), Simon became Winter Simon and then
he beeps and sends signals with his antena, he taken on a cloak, and then he walks out, he
makes presents of 5 emeralds and coal. Alex and Gray were the 2 only ones who gotten 5
emeralds, everyone else got coal. Simon then made another game, it was a game where a player
only had 1 chance to guess 1 out of the 12 thousand cards to find a gold piece, there is only
1 gold piece."* And what ChatGPT continued, which Toby pasted in: with too many wars for too
many reasons, Winter Simon stops fighting and starts *judging* — he *"freezes all the side
wars,"* the whole broken board *"turns white with frozen signal-lines,"* and he makes a
**judgment field** where *"no reinforcements come in, no random wars break out, no side
battles distract... and every move is being measured."* Only **Alex, Neo, and Winter Simon**
are left in motion, and Simon is *"the one who decides whether the battlefield continues
existing."*

![Lore 27 — THE JUDGMENT FIELD: Winter Simon froze the board white, a locked lattice of frozen signal-lines with blinking measure-nodes and drifting snow, the "❄ WINTER SIMON — THE JUDGMENT FIELD ❄" HUD tag, the "You both ruined the board again." taunt, falling Gold Card presents (coal + the one gold), and the VERDICT meter](screenshots/18-judgment-field.png)

- **A thirteenth arc: THE JUDGMENT FIELD.** Climb past the Lore of the Void and Simon *"hated
  all these repeated wars,"* tears January off his calendar, takes on a cloak, and becomes
  **WINTER SIMON**. He stops fighting and starts *judging*: a new state fires with the pale-blue
  HUD tag **❄ WINTER SIMON — THE JUDGMENT FIELD ❄** and the death sting *"You both ruined the
  board again."*
- **The board freezes white.** The whole room takes a pale-white wash, a **locked lattice of
  frozen signal-lines** runs across it (the side wars, paused mid-motion) with **blinking
  measure-nodes** at the intersections (*"every move is being measured"*), and snow drifts down.
- **Climb with purpose — the VERDICT meter.** Winter Simon measures every move, so you pass
  judgment by **climbing with purpose**: the VERDICT meter fills while you keep moving upward
  and stalls if you just sit still. Fill it and **★ JUDGMENT PASSED ★** — *"You did not ruin
  the board"* — for a +5 emerald reward.
- **The Gold Card game.** Simon *"made another game... 1 chance to guess 1 out of the 12
  thousand cards to find a gold piece, there is only 1 gold piece."* Presents fall from above:
  almost all are **COAL** (worthless), exactly **one is the GOLD CARD**. Catch the gold and
  **★ THE ONE GOLD CARD — 5 EMERALDS ★** (Alex and Gray were the only two who got 5 emeralds;
  everyone else got coal).
- New title-screen blurb line and a new death sting for the arc.

## 2026-06-14 — The Lore of the Void (Lore 27, the "I talk to ChatGPT each time" thread)

Based on Toby's June 14 lore: *"Lore of the Void: Simon created the void now, a totally
dense space. Simon created the void and then he taken the Void and combined it with his
Domain Expansion, now it became even stronger, 'VOID EXPANSION AND CLOSING: Marvolent
Kitchen And Fork'. Simon is now an actual godly character now... he even remade the Endless
Staircase, he summoned all his pets. Simon Made A Thousand New Robots... Simon also brought
everything he needed to make the game his, Simon's eyes turned red and he says 'Torqe' and
he jumps, Several Wars in 1 Happened, what happens next?"* And what ChatGPT continued, which
Toby pasted in: the world becomes *a stack of wars happening at once*, the **Blackhole
Tower** becomes the tallest and most dangerous place where *"gravity keeps shifting,"* the
remade Endless Staircase becomes *"part of the Tower's feeding system,"* and *"Torqe"
becomes a trigger-word that starts the next speed-law... the entire war suddenly speeds up."*
The **War of Shapes** is the heart of it: every side fights for *"what shape should Classics
become?"*

![Lore 27 — THE LORE OF THE VOID: the purple "THE LORE OF THE VOID — TORQE" HUD tag, the Blackhole Tower rising as a column of bent light with accretion rings and red-rimmed void mouths down its core, the "VOID EXPANSION AND CLOSING — Marvolent Kitchen And Fork!" taunt, GODLY SIMON's caption, and the WAR OF SHAPES — HOLD YOUR SHAPE meter](screenshots/17-lore-of-the-void.png)

- **A twelfth arc: THE LORE OF THE VOID.** Climb past the 17 Sound Battles and Simon
  *"created the void now, a totally dense space,"* fuses it with his Domain Expansion
  (**VOID EXPANSION AND CLOSING — Marvolent Kitchen And Fork!**), and becomes *"an actual
  godly character."* His eyes turn red, he says **"Torqe"** and jumps. A new state fires with
  a purple HUD tag **▓ THE LORE OF THE VOID — TORQE ▓** and Simon's caption becomes **GODLY
  SIMON — the lore of the void**.
- **The Blackhole Tower.** A gravity well rises at the center of the room: a column of bent
  light with swirling accretion rings and a chain of black void-mouths (red-rimmed, for
  Simon's red eyes) running up its core. It **pulls you toward the center**, and the core
  **drifts side to side** so the pull keeps shifting (*"gravity keeps shifting"*).
- **"Torqe" — the speed-law.** While the Void holds, the whole war speeds up: Simon's rising
  tide comes faster (he benefits most, *"because he was already the fastest"*). A nudge to
  the pace, never an instant wall.
- **The War of Shapes.** Hold your **own shape** away from the dense core and keep climbing
  to fill the **SHAPE** meter (**WAR OF SHAPES — HOLD YOUR SHAPE, KEEP CLIMBING**). Get
  caught in the core band and the Void presses you: your shape slips and you take an
  occasional hit (a nudge, never a wall).
- **Outlast the Torqe.** Fill the SHAPE meter and **★ TORQE OUTLASTED — YOU KEPT YOUR SHAPE
  ★**: a +5 emerald reward for keeping your own shape inside Simon's god-made Void.
- New death sting: *"I created the void, a totally dense space, and fused it with my Domain.
  My eyes turned red, I said Torqe, and I jumped." — The Lore of the Void*.

## 2026-06-14 — The 17 Sound Battles (Lore 27, the "I talk to ChatGPT each time" thread)

Based on Toby's June 14 lore: *"Simon then says 'Hope this will shock some sense into ya!'
... then he shoots out lightning and takes control of the main control panel so he can
control himself without anyone controlling him. Simon says 'Unleash The Domain Expansion'
'Marvolent Kitchen and Fork!', he destroys the game instantly. The next battle called 17
Sound Battles begin."* And what ChatGPT continued, which Toby pasted in: *"nobody is
controlling Simon anymore. Simon is controlling Simon... the game does not just get
damaged. It gets ended... Because now that Simon has destroyed the game and reset the
field... the only thing left that still makes sense is Sound Battle law. So everything
that comes next has to be decided through sound."* Seventeen separate Sound Battles —
Simon vs Black, Gray, Alex, Luigi Green, the cast, the claim-battles (Sky, City,
Underlayers, Cores), and **Battle 14 — Simon vs ToddLLM**, the duel of created will
(*"I move by my will now"*). Folds in Toby's two same-day follow-ups: *"The Endless
Staircase is THE FINAL LEVEL"* (now in the title) and, from the Region Battle / domes
lore, *"Sound Battle remains the one law that crosses all domes"* (the all-17 victory).

![Lore 27 — THE 17 SOUND BATTLES: the gold banner, Simon's lead beats rising as glowing eighth-notes to be answered ON BEAT, a cyan PRESSURE sweep crossing the room, the PHASE 2 SIMON — the 17 sound battles caption, the SOUND BATTLE 14/17 — vs TODDLLM meter, and Simon's taunt "I move by my will now"](screenshots/16-sound-battles.png)

- **An eleventh arc: THE 17 SOUND BATTLES.** Climb past the Residual War and Simon takes
  *direct command*: *"Hope this will shock some sense into ya!"* He fires lightning, seizes
  the main control panel (Simon controls Simon), then the Domain Expansion **"Marvolent
  Kitchen and Fork!"** ends the game all at once. A new state fires with a gold HUD tag
  **▓ THE 17 SOUND BATTLES ▓** and Simon's caption becomes **PHASE 2 SIMON — the 17 sound
  battles**.
- **Everything is decided through sound.** With the board destroyed, only Sound Battle law
  is left. Simon **LEADS the beat**: glowing eighth-notes rise through the room. Reach one
  to **ANSWER ON BEAT** and the **BATTLE** meter climbs. Miss them (let them drift off the
  top) and you lose a little ground.
- **The foe answers with PRESSURE.** The current opponent sweeps a translucent cyan band of
  sound across the room; let it cross you and you take a hit and the meter slips (a nudge,
  never a wall).
- **17 claims, one at a time.** Fill the meter and the current foe **loses its claim**: the
  next of the seventeen steps up — Black, Gray, Alex, Luigi Green, Oren, Pinki, Wenda,
  Greg, Clara, then the claim-battles (The Sky, Sprunki City, The Underlayers, The Cores),
  **Sound Battle 14 — Simon vs ToddLLM** (*"I move by my will now"*), the combined-cast
  stands, and finally Sound Battle Law itself. The HUD shows **SOUND BATTLE n/17 — vs
  <FOE>**, and emeralds drop along the way.
- **Win all 17 and Sound Battle law holds.** Decide the last claim and **★ ALL 17 DECIDED —
  SOUND LAW HOLDS ★**: a +5 emerald reward, and (per Toby's same-day Region Battle lore)
  *"Sound Battle remains the one law that crosses all domes."*
- **The final level.** Per Toby's note that *"The Endless Staircase is THE FINAL LEVEL,"*
  the title now reads **CLASSIC RL · THE FINAL LEVEL**. New death sting: *"With the board
  destroyed, only Sound Battle law makes sense. Everything is decided through sound now,
  and Simon controls Simon." — The 17 Sound Battles*.

## 2026-06-14 — The Residual War (Lore 27, the "No. 😿" thread)

Based on Toby's June 14 lore: *"Simon then was tired of saying 'Certainly' to anything,
so he decides not to, Simon then says 'no. 😿', everyone goes upon again. Then The
Residual War begins."* And what ChatGPT continued, which Toby pasted in: Simon's refusal
*"creates a gap. Residual loves gaps,"* so **Residual** — *"growing in the dead layers out
of all the unfinished things everyone left behind: broken stair logic, old corruption,
failed erasures, torn maps, loose atomix, dead sounds, abandoned routes"* — *"slips upward
through the loosened seams"* into the active game. The key rule: *"Residual cannot be
fought like Black... Residual is fought by finishing what it tries to leave unfinished,"*
but *"every time Simon finishes one thing, Residual grows stronger somewhere else, because
the war itself creates new unfinished matter. That is the trap."* The only way out:
*"It has to be forced into one final shape and ended all at once... The Sound Spine.
So Simon calls everyone back... 'Converge.'"*

![Lore 27 — THE RESIDUAL WAR: the green Sound Spine column running down the center with its vertebrae, half-formed REMNANTS (a broken staircase, a reversed laugh, a false door, half a polo, a dead sound prompt) flickering with open gaps, the PHASE 2 SIMON — the residual war caption, and the FILL THE SPINE convergence meter](screenshots/15-residual-war.png)

- **A tenth arc: THE RESIDUAL WAR.** Climb on past the Atomix War and Simon, tired of
  always answering the world, finally refuses: *"No. 😿"* His refusal opens a **gap**, a
  new state fires with its own warning and a green HUD tag **▓ THE RESIDUAL WAR ▓**, and
  his caption becomes **PHASE 2 SIMON — the residual war**.
- **Residual climbs through the gap.** It surfaces as half-formed **REMNANTS** of all the
  unfinished things: a broken staircase, a reversed laugh-wave, half a polo icon, a false
  door, a dead sound prompt. Each is drawn as an **open ring with a gap** — unfinished,
  flickering, half-real, drifting through the room.
- **You finish it, you don't fight it.** Reach a remnant and it **FINISHES**: the ring
  snaps closed and flares green, and the **SPINE** meter climbs. But finishing one makes a
  little *new* unfinished matter appear somewhere else (*"the war itself creates new
  unfinished matter. That is the trap."*). Remnants left alone fold back into the world.
- **The Sound Spine.** A bright vertebral column runs down the center of the room and
  grows solid as the SPINE meter fills. Fill it and Residual is forced to **CONVERGE**:
  the Spine flares gold, the war is sealed all at once, and you are rewarded (+5 emeralds).
- **A remembered hole.** Let Residual sprawl unchecked and the floor opens into the shaft
  Simon once caught himself from. A gentle nudge, then the climb continues. New death
  sting: *"I stopped answering the world, and the gap let Residual in. It is not fought,
  only finished, then forced to converge." — The Residual War*.

## 2026-06-13 — The Atomix War (Lore 27, the scale-of-reality batch)

Based on Toby's June 13 lore (a new "Lore 27" thread, the scale-of-reality one):
*"Simon divides his zones apart... 1 domain holds 15,000,075 zones... Infinity Worlds
in Classics. Simon divides even more than a zone: semi-zones, olpha, shred, and
atomix... Simon continues to corrupt the game at one atomix at a time."* And what
ChatGPT said happens next, which Toby pasted in: *"Simon stops conquering like a
fighter and starts conquering like a system... He is no longer just taking land. He
is taking outcomes."* Plus the follow-ups: the **Copies of Intention** (*"tiny,
logic-sized Simon traces that live inside the atomix and carry one instruction each:
Belong. Close. Fall. Forget. Return to Center"*) so *"the game starts trying to choose
him by itself,"* and the rebellion below, where **Alex and Luigi Green** *"free it from
below by cleaning atomix upward,"* fighting *"over which version of the board gets to
exist."*

![Lore 27 — THE ATOMIX WAR: the board divided into a red/blue atomix lattice, Simon's cross-and-omega symbol forming in the sky, red Copies of Intention diamonds carrying the words Belong and Fall, the PHASE 2 SIMON — the atomix war caption, and the BOARD tug-of-war bar showing the RETURN TO CENTER curse](screenshots/14-atomix-war.png)

- **A ninth arc: THE ATOMIX WAR.** Climb on past the Silent Executioner and Simon
  stops conquering like a fighter and conquers like a *system*. A new state fires with
  its own warning, taunts (*"Center's mine. I take outcomes now, one atomix at a time."*),
  and a red HUD tag: **▓ THE ATOMIX WAR ▓**. His caption becomes **PHASE 2 SIMON — the
  atomix war**.
- **The board, divided down to the atomix.** The whole screen becomes a flickering
  lattice of tiny cells, each one an *atomix*, flickering between **RED (Simon-owned)**
  and **BLUE (freed by the rebellion)**. The red share tracks the live board state, so
  you can *see* the board being fought over.
- **Copies of Intention.** Simon seeds tiny red diamond slivers of his will, each with a
  flickering eye and **one instruction** drifting in and homing on you:
  **Belong · Close · Fall · Forget · Return to Center**. Let one touch you and the board
  flips toward Simon (*"the game starts choosing him by itself"*) and your movement is
  **cursed by its word**: *Return to Center* / *Close* drag you back to the middle, *Fall*
  / *Belong* pull you downward, *Forget* makes you lose your momentum. The curses are
  gentle and time-limited, a nudge, never a trap.
- **The rebellion cleans upward.** From below, Alex and Luigi Green free atomix back, so
  the **BOARD** tug-of-war bar steadily slides back toward blue whenever you *dodge* the
  Copies. The fight is over which version of the board gets to exist.
- **Center's mine.** Let the board fully agree with Simon and the floating zones lock
  into **his symbol** (a great cross with an omega-like curve) and lightning **seals it**
  with a hit. New death sting: *"I stopped conquering like a fighter. I conquer like a
  system. I do not take the land. I take the outcomes." — The Atomix War*.

## 2026-06-13 — The Silent Executioner (Lore 28)

Based on Toby's June 13 lore (Lore 28): *"Simon is a being with his own mind and
will... Simon can do anything with his power, but his power and physical strength
and HP is just reduced, he is actually more efficien[t] and is best at destroying,
he even slain Gray and Black and Alex and the others so many times."* Toby's read
on what Simon does next: *"Next, Simon probably becomes quieter, more precise, and
more efficient, not trying to destroy everything at once, but destroying exactly
what matters most, one target at a time."*

![Lore 28 — THE SILENT EXECUTIONER: a teal HUD tag, the thinned blurry mind, a red precision reticle locked on the player, the MARKED — MOVE! warning, and silent Phase 2 Simon with flickering eyes](screenshots/13-silent-executioner.png)

- **An eighth arc: THE SILENT EXECUTIONER.** A little past the Blurry Mind, climb
  on and found-out Simon goes quiet. A new state fires with its own warning, taunts
  (*"If they all know what I am... I stop hiding it."*), and a teal HUD tag:
  **▓ THE SILENT EXECUTIONER ▓**. His caption changes to **PHASE 2 SIMON — silent**.
- **He stops wasting power.** Weaker on paper but more efficient, Simon thins the
  blurry-thought spam right out (fewer, slower thoughts) and turns to precision.
- **The MARK and the one clean move.** "He only moves when the result is certain."
  Every few seconds Simon **MARKS your exact spot** with a red reticle that
  **contracts as the strike becomes certain**, holds while it locks (the lock dot
  flashes white), then drops **one clean lightning bolt** straight down on the mark.
  Stay on it (hesitate / *"think too much"*) and the clean move lands — **CLEAN HIT**.
  Read it and **MOVE off the mark** and he **MISSED**. A blinking **◎ MARKED — MOVE!**
  warning calls it out.
- **Silent and watchful.** Simon's eyes now flicker **red, then teal, then white**;
  new **aim** (a quiet rising lock tone) and **strike** (one sharp precision crack,
  then silence) sounds; and a new death sting: *"I do not need to overpower the room.
  I only break the right thing first. One clean move." — The Silent Executioner*.

## 2026-06-13 — EXPOSED: The Blurry Mind, Found Out (Lore 27)

Based on Toby's June 13 lore (Lore 27): *"Simon is the only cat, all other
characters are dog people... Simon gets alarmed and offended... his physical
strength dropped even more from a 9 to a 7... He has the power to make memories
blurry and can also make new blurry thoughts, and he seals each with lightning,
victums explode from too much stuff in the mind/brain... Gray couldn't escape
because Gray didn't look close enough at the banages to tell him that Simon is
Phase 2... Simon doesn't even think about attacking now, since everyone finds
him out."*

![Lore 27 — the EXPOSED state: violet blurry-thought blobs drift in and fog the screen, a MIND OVERLOAD bar fills, found-out Simon shows his bandages, sealed with lightning](screenshots/12-exposed-blurry-mind.png)

- **A seventh arc: EXPOSED — THE BLURRY MIND.** A little after Phase 2 locks
  (the .EXE virus), climb on and Simon is **found out**. A new state fires with
  its own warning, taunts (*"Everyone finds me out. meow 😿"*), and a violet HUD
  tag: **▓ EXPOSED — THE BLURRY MIND ▓**.
- **Blurry thoughts.** Simon stops relying on direct attack and **plants blurry
  thoughts** — soft, smeared violet blobs carrying fogged words (*who? · forget ·
  meow · Gray? · 404*) that drift in and slowly home on you. As your memory fogs,
  a **violet haze** creeps over the whole screen.
- **The MIND meter + the lightning seal.** A new **MIND** bar fills while a blurry
  thought overlaps you (*"too much stuff in the mind/brain"*). Let it **overload**
  and Simon **seals it with lightning** — a white seal-flash, an explosion of your
  over-full mind, and a hit. The counter is the lore's own rule: **look closely
  (stand still)** and your mind clears.
- **The bandages are a warning sign.** Found-out Simon now wears **bandages** you
  can see, and they **glow brighter when you stand still to look closely** (with a
  tiny **P2** warning glyph) — the warning Gray missed. His caption changes to
  **PHASE 2 SIMON — found out**.
- **Found out, he stops chasing.** Because everyone knows him now, Simon's direct
  **tendril swipes mostly stop** and he turns watchful and defensive — *scarier in
  a quieter way*. New blurry-mind death sting and a new `blur` sound (a smeared,
  detuned wobble before the seal).
- Everything is additive and gated behind Phase 2 → Exposed, so the climb, the
  Peaceful Ending, the Sound Battle, and the .EXE virus all play exactly as before
  until Simon is found out.

## 2026-06-13 — The Spreading of Simon: Cells, Lightning, and RUN = FUEL (Lore 26)

Based on Toby's June 13 lore (Lore 26): *"Simon forces the game to create small
red cells called Pyrakontacke (Pyra = power/aura, Kont = Nucleus, Acke = true =
Power Nucleus True), and it uses the Pyrakontacke to corrupt the shields and
force of the cores and souls. Simon makes Plorotacke (Ploro = energy/electric,
acke = true, a cell without a nucleus and instead has a huge Mitochondria), and
then the Pyrakontacke and Plorotacke mix inside of Simon and creates
lightning-powered corruption... those who run away become fuel, and those who
hide are safe. Simon Phase 2 is the fastest, he is a lightning cat deity who
became corrupted."*

![Lore 26 — red Pyrakontacke cells with a Power Nucleus, cyan Plorotacke cells with a huge mitochondria, a lightning bolt where they mix, and the RUN = FUEL bar](screenshots/11-spreading-cells.png)

- **Phase 2 now grows corruption-cells.** Once Simon is locked to Phase 2, the
  room fills with two drifting cell types:
  - **Pyrakontacke** — a red cell with a bright, hot **Power Nucleus** (a glowing
    gold/red core). Simon's tool for corrupting shields, cores, and souls.
  - **Plorotacke** — a cyan cell with **no nucleus** and instead one **huge
    Mitochondria** (a turning charge-blob with cristae lines). Raw electric fuel.
- **Lightning-powered corruption.** When a Pyrakontacke and a Plorotacke drift
  close, they **mix and arc** into a jagged lightning bolt (with a new electric
  `zap` sound). If the bolt crosses you, it hurts. The two cells are spent in
  the reaction, just like they "mix inside Simon."
- **The rule of Phase 2: RUN = FUEL, HIDE = SAFE.** A new charge bar tracks your
  panic. **Running charges the corruption against you** — fill the bar and you
  take a hit and a red **"FUEL"** burst. **Standing still lets it settle** and the
  HUD reads **"HIDDEN = SAFE."** But Simon's tide never stops rising, so you can
  never hide for long: panic is punished, stillness is risky, and you have to
  pick your moments. The HUD shows **RUNNING = FUEL** / **HIDDEN = SAFE** live.
- **Title + death stings updated.** The title screen now tells the Phase 2 rule,
  and the Phase 2 death line is Toby's own: *"Those who run become fuel. Those
  who hide are safe. !CLaSsIcs can'T b3 SAV3b!" — Phase 2 Simon.*
- Everything is additive and gated behind Phase 2, so the climb, the Peaceful
  Ending, and the Sound Battle all play exactly as before until Simon locks.

## 2026-06-13 — Phase 2: The .EXE Virus (Lore 25c)

The End of the Peaceful Ending. Climb past the calm Incredibox and Simon is
locked to Phase 2 forever, the virus takes the world. Based on Toby's June 13
lore: *"Simon is now even less in power and even feels weak, he can't attack, he
is Phase 2 forever... Phase 2 Simon comes and then comes the .EXE virus, all gets
corrupted... he instead made several tentacles and corrupted chaos attack
everyone... he is Phase 2 forever because of the lock. Every second the game gets
more and more corrupt, Error 404, Error 666, Error 303, and several more errors."*

![Phase 2 — the .EXE virus floods the room, Simon's eyes flash red/white/teal, the errors multiply](screenshots/10-phase2-exe-virus.png)

- A new **sixth arc** fires after the Peaceful Ending and Sound Battle: climb
  high enough and **PHASE 2 — THE .EXE VIRUS** breaks the calm. There is no
  Pacifist Phase 1 left inside Simon to clean the chaos, so he is **locked to
  Phase 2 forever** and the danger returns for good.
- **The calm Simon becomes Phase 2 Simon** — a dark, glitching, locked figure
  whose **eyes flash bright red, white, and teal-blue**, with a datamosh ghost
  copy jittering behind him. The caption flips from "SIMON LEADS" to
  **"PHASE 2 SIMON — locked."**
- **The .EXE virus spreads:** the peaceful Incredibox singers get **infected one
  by one**, glitching red/teal with red eyes; the calm dawn **tears** into a
  corrupted red/teal void with a jagged, flashing equalizer.
- **The errors multiply every second** — 404, 666, 303, 502, 0xDEAD, NaN,
  SIMON.EXE flood the background and keep growing, flashing the same
  red/white/teal as Simon's eyes.
- **Corrupted tentacles attack everything:** Simon "can't attack" with his levers
  anymore, so instead the screen throws **.EXE glitch pulses** (torn datamosh
  slices + scanlines) and **extra corruption tendrils** lash out. Damage is back
  on; the once-safe calm surface can hurt you again.
- New audio: a glitchy **corruption crash** when Phase 2 fires (re-muffles the
  room and re-arms the horror drone the Peaceful Ending had calmed), plus a short
  **digital stutter** on every glitch pulse.
- Death screen gets a Phase 2 sting: *"There is no Phase 1 left. Simon is locked
  to Phase 2 forever, attacking all." — .EXE*

## 2026-06-13 — Sound Battles: Simon Leads (Lore 25b)

In the calm Incredibox, the last trace of everything is the Sound Battle, and
Simon is still the fastest. Based on Toby's June 13 lore: *"Simon, and all the
others made sound and animation. Sound Battles happen. It is so small now. Simon
is fastest... Everything became small and simple again, but Simon is still the
fastest sound-and-animation force in the whole game."*

![Sound Battle — Simon leads the beat at bottom-center, the singers answer](screenshots/09-sound-battle.png)

- A **Sound Battle** now runs through the whole Peaceful Ending: a steady, calm
  beat where **Simon leads** and the world answers.
- **Simon is the fastest** — a small, calm gold Simon sits at the bottom-center
  and pulses **first** on every beat (a bright lead note + a ring of his beat
  rippling out), captioned *"SIMON LEADS — fastest."*
- His call **ripples outward** across the room and each **Incredibox singer
  answers** as the wave reaches it: it bobs harder, opens wide, glows in its own
  color, and puffs a matching music note. Simon always moves first; the others
  follow.
- New calm audio: a clean **lead tone** for Simon's call and a soft warm
  **answer chord** a beat behind, layered over the peaceful Incredibox hum.
- The surface stays small and simple, no danger, just sound and animation. The
  on-screen label now reads **♪ SOUND BATTLE ♪ — Simon is the fastest · the lore
  remains underneath.**

## 2026-06-13 — The Peaceful Ending (Lore 25)

Simon steps back from the story and the world settles into its true form.
Based on Toby's June 13 lore: *"Simon goes back from the story, and now it is
just only a peaceful incredibox with lore and Sound Battles. It was all normal."*

![The Peaceful Ending — calm Incredibox, Sound Battles, lore underneath](screenshots/08-peaceful-ending.png)

- **The Peaceful Ending** fires after the Restoration, once you climb high
  enough: Simon **steps back from the story** and his rising tide sinks calmly
  away. He can no longer catch you.
- The whole room turns into a **calm Incredibox** — a soft dawn overtakes the
  void and a gentle **equalizer of light hums** along the bottom.
- **Incredibox singers** sprout on the calm steps, bobbing to a shared beat and
  puffing out **music notes** that drift up.
- **Sound Battles** stays on screen as the last trace, with a reminder that
  **the lore remains underneath** (the 404/666 errors and Parinusian banners
  fade to faint memory but never fully disappear).
- The surface is fully calm: **levers stop, taunts soften, nothing can hurt
  you.** Simon's line settles to: *"It was all normal."*
- A warm major chime plays and the horror drone finally hushes.

## 2026-06-13 — The Restoration (Simon's redemption)

Simon's turn from destroyer to rebuilder. Based on Toby's June 13 lore.

![The Restoration — golden crack, Mr. Sun and Mr. Tree](screenshots/07-restoration.png)

- **The Restoration** fires when you climb high enough: Simon opens a **golden
  crack** down the middle of the sky.
- **Mr. Sun and Mr. Tree** rise over a bright, normal half of the room while the
  other half stays corrupt — half healed, half dark.
- Simon **ends Error 404 and Error 666** (the drifting error words fade) and
  **heals you to full**.
- His line: *"There are no villains. I was the corruption. The rest is only
  perspective."*

## 2026-06-13 — The False Cure

Simon weaponizes hope. Based on Toby's June 13 lore.

![The False Cure](screenshots/05-false-cure.png)

- **The False Cure lever** — two identical red `?` bottles drop. One is the
  Anti-Virus (heals), one is the JTMYHE "juice" (hurts). You cannot tell which
  until you grab it. (Kept non-lethal so the climb stays fair.)
- **The dud lever** — sometimes Simon pulls a lever and nothing happens. The
  cruelest trick: "maybe that one was the cure?"
- **Simon's taunts** — he keeps selling the lie of a cure at a top that does
  not exist ("A cure waits at the top," "Great height. You won't get higher").
- **The 5-emerald cruelty** — reach a milestone and Simon hands out 5 emeralds,
  then pulls a lever to drop you the next step.
- **Combuntia orbs** — blood-red orbs set into the living steps that pulse red
  while a lever is charging.
- **Ancient Endless Room** — moss on the steps and **Parinusian banners**
  (golden cross in a gray omega) hung across the background.
- Death-screen sting updated: "Simon promised a cure at the top. There is no
  cure. There is no top."

## 2026-06-13 — Simon's Levers + the Endless Room

Simon's all-powerful lever controls. Based on Toby's June 13 lore.

![Simon's Levers and the Endless Room](screenshots/06-levers-room.png)

- **Five levers**, each a named attack with a warning banner:
  - **The Staircase Falls** — the steps in view collapse.
  - **The Steps Rearrange** — steps slide to new positions.
  - **It Becomes a Bridge** — steps flatten into a wide span, then snap back.
  - **The Staircase Spins** — the level tilts and left/right controls invert.
  - **The Endless Slide** — steps go icy and Simon's tide drags you down.
- **The Endless Room** — more endless staircases now drift in the background.

## 2026-06-13 — Initial release

The first playable build, from Toby's "Lore 24: The Endless Staircase."

![Title](screenshots/01-title.png)

- Endless vertical climber / survival horror, single self-contained file,
  vanilla Canvas + Web Audio, no external libraries.
- **Simon's rising tide** hunts from below and accelerates with height.
- **Living-staircase hazards** — biting steps, crumbling steps, tendril swipes.
- **Emeralds** to collect; best climb saved locally.
- Synthesized soundtrack whose heartbeat quickens as Simon closes in.
