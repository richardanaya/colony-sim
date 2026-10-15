# Engine

Galt's Gulch is a colony simulation set in one hidden valley in Colorado. There is no world map and no second settlement. The player arrives, and the people already there live by their own judgment: voluntary trade, gold dollars, productive work, and reason. Force answers force. It is not a tool for improving someone's ideas.

This document is the design of that simulation. The code in this repository is the slice underneath it: a fixed tick, an entity record, and a seeded valley with a few founders walking. Beliefs, visitors, workshops, and research have places to live in that record. They do not run yet.

## Valley generation

`generateValley(seed)` in `src/game/generate.ts` builds the map. The same seed returns the same ground, the same deposits, and the same people. A fresh page uses `0x6a1c`. The title shows that seed and can reroll it. In the valley, New valley reloads on a new seed. Generation has its own mulberry32 stream. The simulation then starts its wander stream from the same seed. The two streams do not share a cursor.

The map is 188 by 168 cells, several times the earlier 64 by 56 valley. A heightmap cuts a broad oval floor, wide enough to build on and to walk among the founders, with a creek down the middle. Foothills rise from that floor about one low tier every few cells until the rim is high granite. One two-cell cleft in the south wall is the only way in. Meadows, soil, and forest sit on the floor. Boulders line the banks. Rock and ore crags stand on the upper slopes. The renderer draws each tier's top and the rock faces between steps, using IsoRim rough stone, gravel, and rock textures. It does not fake the mountains with a flat ring of wall tiles. Cliff faces and crag walls share a mesh per material. Trees and boulders are merged by material. Furniture stays a separate object so it can be carried. The starting yard stays on elevation 0, so it can be built on.

The starting site is a plank cabin and a smaller store, each with a door and a roof, on a flagstone yard. The yard is the buildable clearing: open cells, connected to each other and to the rest of the walkable ground. A shelf and barrels mark the store. Food, timber, and stone start in the founders' own inventories, and gold starts in their purses. There is no common pile. The ore and the boulders stay on the map until someone mines them, which this build does not do.

Three to five founders are placed on the yard. Nell is always one of them. Each has a name, a body, all eight skills, and a mind in the save shape: stated objectivism, no foreign seeds, residence `founder`, force `none`, and their own goods. The count, the other names, the skill levels, and the amounts move with the seed.

`createValley(seed)` returns that colony, the spawns, and the clearing. The viewer passes the spawns and the seed into `createSimulation` and draws the colony. It does not roll the map. `src/data/layout.json` is the old hand-placed Hearthstead catalog from `tools/build_layout.py`. The game does not load it.

## Player orders

A click selects a colonist. The action bar offers Move, Pick up, and Place. Each one is an engine order. The colonist switches to the `haul` activity and walks an A* path on the walk grid. The renderer draws that motion and sends the click. It does not teleport anyone.

Pick up walks them to the object and sets `carrierId`. Place walks them to the chosen cell, writes the object's new cell, and clears the carrier. One person carries one object. Walls, cliffs, trees, and boulders are fixed. The bedroll, table, chair, shelf, barrels, and campfire can be moved.

## Time

The simulation advances in fixed ticks of 1/20 second (`TICK_HZ` in `src/engine/types.ts`). Rendering does not advance the world.

Each display frame the viewer calls `advance(frameSeconds)`:

1. Add the frame delta to an accumulator, capped at a quarter of a second so a stalled tab cannot fast-forward the valley.
2. While the accumulator holds a full tick, copy the current transforms into the previous columns, then step once.
3. Leave the leftover fraction for the renderer. `alpha()` is that leftover divided by the tick length, in `[0, 1)`.

The renderer samples `prev` and current columns with `alpha`. Water, fire, and the idle glance use the display clock. They are not simulation.

A seeded mulberry32 stream (`seed`, `rngState`, both saved) decides goals and pauses. The same seed and the same ticks produce the same walk. A later WebAssembly build has to use that same stream if it is going to match the TypeScript reference.

## Entities

An entity is a stable integer id. Zero means none. Slots are parallel arrays, not objects the renderer walks one method call at a time. The hot columns are typed arrays (`ColonistColumns`). A Zig module is expected to write those same columns into linear memory. See [Zig and WebAssembly](#zig-and-webassembly).

Capacity in this build is 64 slots. Five are founders. The rest are reserved for people who arrive later. Growing the arrays bumps `generation`. Callers must not keep a view across a generation change.

| Component | What it holds | Stepped now |
| --- | --- | --- |
| Identity | id, map key, name | no |
| Transform | x, z, yaw, gait phase, previous values, moving flag | yes, for wanderers |
| Needs | food, rest, recreation, each 0 to 1 | yes, a slow decay with no effect yet |
| Skills | construction, plants, mining, cooking, medicine, intellectual, social, crafting | no |
| Purse | gold cents the person owns | no |
| Contract | id of an accepted contract, or null | the scheduler only |
| Activity | `wander` or `work` | yes |
| Mind | philosophy, certainty, idea seeds, influence, receptivity, residence, integrity, morale, force, labor hours, inventory | stored only |

Valley-level state, also stored and not stepped:

- `contracts` — empty
- `research` — nothing unlocked, nothing active
- `orders` — no production in progress
- an event queue drained every frame

Mannequins in the barracks are scenery. They are not entities. Animals are scenery. When either starts to matter, they become entities with the same components, not a second system.

### Mind

`Mind` is the component ideological play, arrivals, and property share.

- `stated` and `certainty` are the philosophy a person would name, and how sure they are.
- `seeds` are foreign ideas taking hold. Each seed has a philosophy, an infection `stage`, a `visibility`, and an age in ticks. Visibility is allowed to lag the stage.
- `charisma` is how readily they sway others. `suggestibility` is how readily a new idea gets in.
- `receptivity` is trust in voluntary argument. Coercive persuasion lowers it.
- `residence` is how they stand in the valley: `founder`, `member`, `recruit`, `trader`, `visitor`, `passing`, or `departed`.
- `integrity` falls when this person initiates force or joins a rights violation. `morale` is their own willingness to stay. Neither is a colony mood meter.
- `force` is `none`, `initiation`, or `retaliation`. It is never inferred from a philosophy.
- `laborHoursLeft` is the hours they can still commit today.
- `inventory` is the goods they own.

Founders start as `residence: "founder"`, `stated: "objectivism"`, no seeds, `force: "none"`, and an empty inventory. Their gold is in the purse, in cents. One gold dollar is 100 cents. There is no valley treasury.

## Needs, skills, and jobs

Needs are personal and in `[0, 1]`, where 1 is sated.

- **Food** falls unless they eat food they grew, bought, or were paid.
- **Rest** falls until they sleep in a bed they own or rent.
- **Recreation** falls until they spend time on something they chose: talk, a book, a party, a walk.

A low need changes what they will accept. It does not let anyone assign them a task. A hungry person will take a fair wage for harvest work. They will not take a sermon in place of a meal, and the game will not treat feeding them as a debt they owe the feeder.

Skills are small integers. They rise by doing the work, including failed attempts that still taught something. They do not rise by a social score. The eight skills are the ones on `SKILL_NAMES`. Social skill matters for debate and for trade. It is not a license to manage anyone else.

A job is a kind of work: haul, construct, plant, cook, mine, research, tend, craft. A job is not an activity. The activity is `wander` until a contract for a job is accepted, and then `work`.

## Scheduler

Each tick the scheduler looks at contracts and writes `activity`.

A colonist works only a contract they accepted. The check is `state === "accepted"` on that contract. Offering, refusing, withdrawing, and fulfilling are ordinary outcomes. Refusal is not a crime and not a mood penalty for anyone else.

With no contracts, everyone wanders. That is what the five founders do now. The wander system picks a walkable cell at least four steps away, searches a four-connected path around blocked cells, and walks at 1.45 cells per second. If someone is standing on the next cell, the walker drops that path and steps aside. A haul path treats other people as blocked and goes around them. Water, streams, walls, blocking props, animal footprints, and the unmoving mannequins are blocked. The walk grid is a `Uint8Array` built from the map in `src/game/walkability.ts`, which is the form a WASM module would copy once.

Nothing in the scheduler drafts, prioritizes over a refusal, or fills a quota by picking the nearest idle person.

## Economy

Gold cents are the money. They are not a score and not a policy lever. New gold enters only as metal someone mined (`inventory.goldOre`) and coined, or as coins a visitor actually brought. Coining is a craft. It does not inflate. There is no unbacked issue and no valley account that can levy purses.

Trade is a contract. Both sides name what they give and what they get. Goods move when both have accepted and the goods are in the giver's inventory. A standing offer can expire or be withdrawn. A person may give something away, including at a price of zero, because it is theirs. The game does not ask them to, does not reward them for the loss, and does not punish anyone else for the gift not happening.

Prices are bids. A building does not have an official price. Labor is hired by the hour or by the job, paid from the hirer's purse into the worker's.

Property is the inventory on an entity, plus buildings and benches that entity owns. A stockpile crate is someone's crate, or a warehouse run under a contract that names the owner. It is not a common pile. Stealing from it is theft. "For the valley" is not an owner.

## Events

Systems emit short records: contract offered, accepted, refused, fulfilled, and trade. The viewer drains the queue every frame so a later system cannot grow it without bound. The log UI is not built. Ideological and legal events (a hint overheard, an accusation, a verdict, a departure) will use the same queue when those systems exist. An event names a cause. The interface does not hide the dice.

## Save and load

`SaveGame` version 1 stores the seed, the RNG state, the tick, the time, every colonist's components (including mind and inventory), the contracts, the research record, and the production orders. Paths are dropped on load and searched again. This build can load only the same number of colonists it started with. A WASM backend has to read and write this shape, or a versioned successor of it.

## Principles, as mechanics

| Principle | What the simulation does |
| --- | --- |
| Reason | Causes are visible. The RNG state is in the save, so a stretch of play can be replayed. Arguments cite evidence, not authority. |
| Productive work | Goods and buildings exist because someone made them. Skills rise by the work. A discovery is owned by the people who paid for the hours and the materials. |
| Trade | Goods and gold move on accepted contracts. Both sides can refuse. |
| Gold | Integer cents. Metal in, coins out. No fiat, no tax account. |
| Rights | A person's body, labor, and inventory are not resources of the valley. |
| No altruistic duty | Needs are personal. There is no colony mood that falls because someone ate their own bread. Aid is a contract, priced at whatever the giver asks, including zero. |
| No initiated force | The scheduler cannot assign work. Exile, prison, and seizure are not tools against an idea. See [Force](#force-initiation-and-retaliation). |

## Core loop: wanderers

People come up the pass. That arrival is a core loop, beside survival and beside the culture war. Each wanderer is an entity with a philosophy, a certainty, skills, a purse, an inventory, and a residence of `visitor`. They are not members and not enemies.

The colony can look. Skills, purse, and what the person will say are the evaluation. What they will not say is not available. A hidden seed stays hidden. See [Idea injection](#idea-injection).

Four endings, all voluntary:

1. **Join.** They become `recruit` while terms are open, then `member` when they accept a contract that trades value. A stake in a shop, a hired skill, a lease on a bench, gold on the table. Charity is not a path in. A player who wants them in pays, or convinces them the work is worth taking. Dragging them across the line is initiation of force.
2. **Trade.** They become `trader` and stay for the deals. They keep their own inventory. They may leave when the deals dry up.
3. **Pass through.** Residence `passing`, then `departed`. They buy a meal, sleep a night, and go. No penalty for the player. No reward for detaining them.
4. **Seed an idea.** Any of the four can carry a seed, including someone who joins honestly and someone who only stays for supper. Spreading is not a fifth crime. It is the cultural conflict in the next sections. It becomes a legal matter only if they steal, sabotage, defraud, or start a fight.

Arrivals use the same components as founders. The residence enum is the whole lifecycle. No second "NPC" class.

## Force: initiation and retaliation

Every use of force is tagged.

- **Initiation** is the start. Striking a person, locking them up, taking their goods, wrecking their work, throwing them out of the valley, threatening any of those. The reason does not change the tag. "They believe something false" is not a defense.
- **Retaliation** answers an initiation that has already begun, or one that is imminent in the plain sense of a raised weapon, not a bad opinion. It aims at the aggressor, it stops when the aggression stops, and it is accountable afterward.
- **None** is everything else: argument, refusal, ostracism a person chooses without seizure or violence, walking away, a sharp sentence.

Belief, speech, association, and peaceful presence are `none`. A philosophy cannot set `force` to `initiation` by itself.

### What the player may not do

The player may not expel, imprison, or seize property from a peaceful wanderer or colonist for holding an idea. Those orders are initiations, and the simulation treats them as such.

Consequences, stacked, not a single scold:

- **Morale** falls for people who saw it, especially anyone who judged the victim innocent.
- **Integrity** falls for the player-character's agents who carried it out, and for members who applaud it.
- **Reputation** outside the valley falls. Fewer traders come. The ones who come are more likely to be the factions that like a fist.
- **Founders leave.** A founder with high certainty in Objectivism and high integrity will set residence to `departed` rather than stay in a place that initiates force. They take their purse, their inventory, and their labor. They do not take other people's goods on the way out.
- **Conviction erodes.** Members' certainty in Objectivism falls when the valley's practice contradicts it. The gap is an opening for other seeds. Do this often enough and the practice itself is collectivist or fascist: seizure, a leader's emergency, a person treated as the group's material. Those ideas then spread faster, because the evidence of the valley's own behavior supports them. The player is not handed a game-over screen on the first offense. The colony changes under them.

### What the player may do

Retaliation is legitimate against someone who initiates force: a raider in the act, a thief, a saboteur, a person committing fraud by taking payment for a lie about the goods. The answer is restraint and restitution, under objective law, with evidence and a chance to answer. It is not re-education, and it is not exile for the belief that accompanied the crime.

Due process is the difference between retaliation and a new initiation. An accusation without evidence, a punishment decided before the answer, or a sanction aimed at the idea rather than the act, is tagged initiation even if the accused really does hold an ugly philosophy.

Private vengeance is not retaliation. A member who shoots a visitor over an argument has initiated force, even if they call it defense of property and even if their philosophy praises trade. That case is the anarcho-capitalist failure mode below, and the law answers it the same way it answers any other initiation.

## Future: ideological raiders

Raiders are not a random barbarian table. The factions that come against the valley carry ideas Objectivism opposes. Four of them are in the philosophy enum besides `objectivism`: fascism, collectivism, anarchism, and anarcho-capitalism. They also arrive as visitors, books, and offhand remarks. A raid is the same idea after it has given up on persuasion.

This section is design only. No faction spawns in this build.

**Fascism.** A leader, a collective will, and the fist as proof of seriousness. It spreads through spectacle, fear, and the offer of order. When it acts, the crimes are assault, expropriation, and shutting a person's shop because they would not kneel.

**Collectivism.** The person owes their product to the group. It spreads through guilt and through the sentence "for the valley." When it acts, the crimes are requisition, which is theft with a speech attached, and sabotage of a workshop that stayed private.

**Anarchism.** Here, the form that rejects property and rejects any institution that answers force. It spreads as a romance of tearing things down. When it acts, the crimes are sabotage, theft, and starting a fight "against authority," including against a lock on someone else's door.

**Anarcho-capitalism.** Property and trade, plus a refusal of objective law. It spreads as "your rules are just another gang." The peaceful version is an argument, and argument is how it is answered. The failure mode is enforcement without due process: a private punishment, a gun pulled over a broken contract that was never an initiation, a visitor tried in the street. That act is initiation, whoever commits it.

A faction raid is an initiation. The defenders' response, aimed at the raiders and stopped when the raid stops, is retaliation. Looting a raider's pack in the fight is not a blank check to keep what a peaceful traveler was carrying. Restitution is sorted afterward, on evidence.

Ideas spread without a raid. A faction that never draws a weapon is still the cultural conflict. The colony's counter is reason, argument, and example. It is not a purge.

### How an idea moves

Treat a foreign idea as a contagion with a low rate, a carrier, and a setting. Not as a moral meter.

Each tick, for each pair that shares a place (a room, a table, a job site, a party), a carrier with a seed at `sympathetic` or worse can expose the other. The chance rises with the carrier's charisma and the listener's suggestibility, and with the hours they actually spend. It falls with the listener's certainty in a contrary stated philosophy, and with the listener's receptivity only in the sense that a person who still trusts argument will go hear the other side on purpose. Receptivity is not a shield. Certainty and a practiced judgment are.

A seed moves one stage at a time:

`clear → exposed → sympathetic → convinced → acting`

- **Exposed.** They heard it. They may not agree. They may not notice they heard it.
- **Sympathetic.** It feels partly right. They repeat a phrase. They are not acting on it.
- **Convinced.** They would state it. Their `stated` philosophy does not flip until they say so, and they may not.
- **Acting.** They will spend labor on it. That can mean argument, which is still `force: none`. It can mean a crime, which is the rare case in the next section.

Stages do not skip. A festival can expose many people at once and still leave them at `exposed`.

Objectivism spreads by the same rules. A founder's example, a kept contract, a book, a class someone chose to attend: those are carriers too. The player's ideas do not get a privileged channel.

## Idea injection

Injection is sneaky on purpose. A visitor does not arrive with a banner. They seed through offhand remarks, a flash of sympathy, a joke at supper, a book left on a bench, a favor that comes with a sentence attached. The player is not shown a contagion icon.

### Visibility

Each seed has a visibility that lags the stage. Age is necessary but not sufficient. The player has to be in a position to notice, or have spent attention on listening.

| Visibility | What the player gets |
| --- | --- |
| `hidden` | Nothing. The stage may already be `exposed`. |
| `hint` | One weak signal. A line of overheard talk, a pause at a slogan, a gift that is slightly off, a page left open. The signal does not name the philosophy. |
| `rumor` | Two hints line up. The player can open a conversation. It is still not proof. |
| `plain` | Asked honestly, they will say it, or they are already acting in the open. |

A seed can be `sympathetic` while still a `hint`. Missing that window is the costly branch. Catching it at `exposed` / `hint` is a conversation or a book: a little social labor, if the listener is willing. Missing it lets the stage compound. The player then has to dismantle the arguments and deprogram convinced people by debate, example, and evidence. That is a cultural conflict. It takes the salon, the patient people, and a lot of hours. It can fail, especially if receptivity was already damaged.

Signals are easy to miss in noise. A party is the worst and the best room in the valley: many exposures, and the hints are buried in ordinary talk. Listening is an action. It spends the player's attention. It does not spend anyone's rights.

### Crimes, rarely

Some ideas, once `acting`, tell the holder that objective law need not be respected. The acts that follow can be theft, sabotage, fraud, or an initiation of force. Those acts are crimes. Belief that the law is a fraud is not a crime. Saying it is not a crime. Association with people who say it is not a crime.

Only the concrete act allows arrest, and only with evidence: the missing goods, the broken machine, the payment taken for a delivery that was never meant to happen, the blow. The accused gets the accusation, the evidence, and an answer. The sanction is restitution and restraint of the aggressor. It is not a course of mandatory correction, and it is not applied to the people who only agreed with the speech.

This branch is rare. Most of the conflict stays cultural. A playthrough that arrests someone every season is a playthrough that has started initiating force, and the consequences in [Force](#force-initiation-and-retaliation) apply.

### The two conflicts

- **Direct.** Raids, theft, sabotage, fraud, a drawn weapon. Answer: retaliation under law.
- **Cultural.** Remarks, sympathy, books, debates, examples. Answer: persuasion that leaves the listener's judgment intact.

They meet when a cultural loss becomes an acting crime, and when a rights violation by the player becomes evidence for the ideas the player was trying to stamp out.

## Cultural counterplay

The colony builds places and spends hours so that judgment gets practice. None of these force attendance. A locked door on a schoolhouse, a roll call, a punishment for a wrong answer, or a festival someone is not allowed to skip are coercive persuasion. They are covered under receptivity below. If they include seizure, prison, or expulsion, they are also initiations.

Each of these spends the same labor, food, timber, stone, and quiet hours as survival and research. That competition is the point. See [Resources](#resources-production-and-research).

**School.** A voluntary class. A teacher with the intellectual or social skill, a room, and hours. Students who chose to come leave with more practice at weighing an argument. Over time their suggestibility toward unseen seeds falls, and their certainty rises only in what they actually judged convincing. A class is not a syringe of Objectivism.

**Art.** Studios, galleries, sculpture. Example and pleasure, not a poster. Slow, and it spends skilled labor and materials. A gallery is also a room where people talk, so it is a vector as well as a counter. What hangs there matters less than whether people are free to argue with it.

**Parties and gatherings.** High bandwidth. A clear host inoculates. A charming carrier exposes the whole table. Food and evening hours are the cost.

**Holidays and festivals.** The same, on a date, larger, and easier to plan around. They are worth scheduling and dangerous to sleepwalk through. A festival is a detection problem: many hints, one night.

**Writing and publishing.** A book is an argument that stays on the shelf after the writer goes back to the shop. The cost is the writer's best hours, then paper and a press. Once printed, a copy is ordinary property. It persuades only if someone reads it because they want to. Assigning it as a punishment lowers receptivity and teaches nothing.

**Library.** A room of books under its owner's rules, usually a lending contract. It raises the chance a person meets a counter-argument on their own, which is the cheapest persuasion there is. It does not select their conclusions.

**Salons, cafes, debate halls.** Where the debate action happens. A host, chairs, and time. This is the right tool for a seed that is already `rumor` or `plain`. Early on, one evening can be enough. Late, it takes a series, and the listener has to keep agreeing to come back.

Passive example sits under all of these. Contracts kept, wages paid, shops that work, force that is only retaliation and only in the open: that evidence lowers suggestibility against the valley's practice. A valley that preaches rights and seizes a visitor's pack inoculates people in the other direction.

### Receptivity and the backfire

`receptivity` is per person, from 0 to 1. It starts high in someone who has not been bullied. It is trust that an argument is being offered for their judgment, not done to them.

Coercive persuasion lowers it. The list includes mandatory lectures, punishment or public shame staged for a wrong opinion, threats of expulsion, guilt campaigns, interrogation dressed as a question, and forced attendance at a school, a salon, or a festival. The drop scales with the pressure. It does not require a crime.

A lower receptivity reduces the effect of later arguments from the player and from valley institutions, including true ones. The person becomes less movable, not automatically converted. Pressure does not plant Objectivism. It spends the channel Objectivism would have used.

Voluntary argument does not lower receptivity. A person who came, listened, and disagreed can leave with receptivity intact. A person who came and was convinced can gain a little trust. The speaker does not get to decide which of those happened. Social skill and evidence change the odds. They do not set the conclusion.

The rule for every cultural action: it must be refusable, and the refusal must not be priced as retaliation. Persuasion that respects independent judgment is the only kind that compounds.

## Resources, production, and research

The valley is short of things. Ideology does not replace that. Food, timber, stone, ore, power, gold, and labor time are scarce, and every cultural building spends them.

| Good | Where it comes from | What it mostly feeds |
| --- | --- | --- |
| Food | Fields, herds, kitchens | Meals. Festivals spend it in public. |
| Timber | The slopes, then a saw | Fuel, planks, roofs, presses, furniture |
| Stone | A quarry | Walls, halls, a school that is meant to last |
| Ore | A mine | Metal, tools, Rearden Metal's feedstock |
| Power | Wood and charcoal at first, then the motor | Shops, the press, the shield |
| Gold | Ore coined into cents, or a visitor's purse | Trade. Metal in `inventory.goldOre` is not yet money. |
| Labor time | `laborHoursLeft` on each person | Every chain below, and every salon |

Labor is the tight one. An hour in a debate hall is an hour not in the field and not at the bench. The engine stores hours on the person and goods in that person's inventory. A production order names an owner, an optional hired worker, a recipe, and progress. The order stays `offered` until the owner or the worker accepts. Then it may be `working`. Nobody is put on a recipe because the valley needs the output.

There is no common stockpile component. A pile of planks is an entity, or a stack in an inventory, with an owner id.

### Chains

The concrete chains, to be filled in as recipes rather than as a tech sermon:

- Timber becomes planks. Planks and stone become rooms.
- Ore and fuel become metal. Metal becomes tools and parts.
- Raw food becomes meals. Meals fill the food need of whoever bought or cooked them.
- Metal, a funded lab, and power become Rearden Metal. Rearden Metal becomes the parts that ordinary metal will not survive: the motor's heart, and the frame of the shield.
- Rearden Metal, a further project, and power become Galt's static-electricity motor. The motor is a power source. It is someone's machine, licensed by the people who funded it, not a public utility.
- The motor's power, Rearden Metal, and a last project become the refraction shield that hides the valley. The shield is why the pass stays a cleft in the rock instead of a road on a map. If power or upkeep lapses, the shield fails, and raids become more likely. That is the survival tie to the faction war.

Side projects sit next to those, not under them: a press so books can be copied, agronomy so fields yield more, a kiln, a proper saw. They are funded the same way.

### Research

Research is a production order with a different output. The output is a license to use a method, held by the people who paid the goods and the hours. It is not a valley-wide unlock that visitors and looters inherit, and it is not confiscated "for everyone." Knowledge is not a rival good once it is in a person's head. The hours and the metal were. The contract that funded the work says who may use the result. The motor and the shield stay secrets because their owners' interest is that the valley stay hidden. They can sell a license. They cannot be voted into handing it over.

`ResearchState` in the save is the active project, its progress, and the ids already licensed for use inside the valley. This build leaves it empty. Likely ids, in an order the resources force:

1. Prospecting and charcoal, enough to feed a forge.
2. Precision tools.
3. `rearden-metal`.
4. `galt-motor`, which requires Rearden Metal.
5. `refraction-shield`, which requires the motor and Rearden Metal.

A printing press and better fields can be funded in parallel. They compete for the same ore, power, and hours.

### The tension

Cultural investments and the technological ones draw on one pool.

- A school day is a teacher and students not farming and not in the lab.
- A festival spends food that would have covered a lean week.
- A book spends the best hours of someone who could be machining the motor.
- The shield is how the valley survives being found. A player who only builds salons will be raided.
- A player who only builds the motor, and never the library or the hall, will not notice the seeds. The crimes and the departures arrive with the power on.
- Hunger raises suggestibility. A missed harvest is an ideological event whether or not anyone planned it that way. Feeding people is still a trade, not a program.

The interesting game is the shortage, not a tree of moral upgrades. Every plank in a debate hall is a plank that did not become a workshop. Both are ways of staying alive. The player cannot specialize forever.

## Rendering boundary

`src/render/` reads `ColonistColumns`, the roster, and the colony it was given. It sends Move, Pick up, and Place as orders. It does not pathfind and it does not generate the map. `src/ui/` is the title screen, the loading screen, and the corner frame. `src/game/` generates the valley from a seed and derives the nav grid. `src/engine/` does not import Three.js and does not import the layout. Founder skills, minds, needs, and purses are on the spawns the generator hands to `createSimulation`.

Per frame the viewer:

1. Calls `advance`.
2. Drains events.
3. Reads `colonists()` once and interpolates.
4. Writes positions onto Three.js groups.

That last loop is one JavaScript loop over the groups. It is not one call into the simulation per person. The WASM backend must keep it that way.

`createSimulation({ backend: "wasm" })` throws. The TypeScript class is the only backend linked today. The interface both sides share is `Simulation` in `src/engine/types.ts`.

## Zig and WebAssembly

The sim core is planned as Zig, compiled to `wasm32-freestanding`, so the tick can grow (pathfinding, needs, contagion, production) without a garbage collector and without per-entity calls across the host boundary. This build does not include Zig. The TypeScript backend is the reference the Zig module has to match.

### Target

`wasm32-freestanding`, no entry point, memory exported by the module rather than imported. The host instantiates with an empty import object, or with a single optional `host_log` if we want traces. The tick itself imports nothing. Output is committed at `assets/sim/gulch.wasm` and fetched as `./assets/sim/gulch.wasm` (`WASM_URL`). The Pages publish step already copies `assets/sim/` into `dist/assets/sim/` when that directory exists. Dev serves it from the repo `assets/` tree. Relative URLs, same as the IsoRim models, so GitHub Pages under `/galts-gulch/` resolves them.

The C ABI the host expects is `GulchSimModule` in `src/engine/module.ts`:

- `sim_tick(dtMillis)`
- `sim_colonist_count`, `sim_column_capacity`, `sim_generation`
- `sim_column_ptr(column)` as a byte offset into exported memory
- `sim_tick_count`, `sim_time_millis`, `sim_total_gold_cents`

Float columns, 16-byte aligned, in order: `prevX`, `prevZ`, `prevYaw`, `prevPhase`, `x`, `z`, `yaw`, `phase`. Column 8 is `moving` as bytes. Mind, inventory, and research can follow as further columns or as a separate blob. They must not be fetched with a call per entity.

The TypeScript adapter owns the accumulator and the `alpha`. The module only knows `sim_tick`. The renderer keeps calling `Simulation.advance` and reading typed arrays. It never learns which language wrote them.

### SoA, SIMD, no GC

Store each field as its own array: all x, then all z, not an array of structs. Zig `@Vector(4, f32)` then lowers to WASM SIMD128 for the regular work: needs decay, suggestibility updates, distance checks, inventory adds, in groups of four, with a scalar tail. Pathfinding stays scalar. It is a queue over a grid, and pretending otherwise will not make it faster.

Turn SIMD on explicitly in the target CPU (`simd128`). It is baseline in current browsers. If `WebAssembly.validate` rejects the module, the host keeps the TypeScript backend. Do not ship a scalar WASM fallback besides that. Two WASM code paths will drift.

Freestanding Zig has no garbage collector, and this module must not grow one. Entity slots are a fixed table plus a free list. Per-tick work uses bump storage reset at the end of the tick, or plain loops over the columns. Do not call out to `malloc` for a path node. The nav grid and the path buffers are sized when the valley is created.

WasmGC (structref / arrayref) is a separate proposal, baseline in major browsers since late 2024, and it is the wrong tool here. It exists so a managed language can share the host's collector. A Zig sim should not emit GC types. A WasmGC array cannot be viewed as a `Float32Array` without a copy, and it cannot be the input to SIMD128 in linear memory. The JS heap already collects the Three.js objects. The sim does not need a second collector.

### What crosses the boundary

Each frame, after `sim_tick`, the host builds `Float32Array` views on `memory.buffer` at the column pointers. One view per column, width `count`, not capacity, except the host may view the whole capacity and honor `count`. If `memory.grow` runs, every view is detached. The host checks `sim_generation` and rebuilds views when it changes. That is the only per-frame setup. Applying transforms to Three.js groups stays a JS loop, because the scene graph is JS objects. The expensive work stays in the module.

### Reference types and externref

Reference types, including `externref`, are baseline and are a poor fit for this sim.

`externref` is an opaque host pointer the module can hold and pass back. It cannot live in the linear-memory columns, it cannot be an input to SIMD, and the engine would have to call out to mutate it. Using it to hold a `THREE.Object3D` would pin the sim to the JS heap, make a non-JS host impossible, and reintroduce a call per entity. That is the cost this design exists to avoid.

`funcref` would be how we imported a host callback per person. Same rejection. If the module needs the host at all, it is one optional log function, or better, a line written into an event buffer in linear memory that JS drains once per frame. Events are already a queue on the TypeScript side for that reason.

### Multi-value

Multi-value returns are baseline. They are a reasonable way to return a pointer and a length from a cold accessor. They are not how positions leave the module. A function that returns one colonist's x and z would be the per-entity call we are not going to make.

Zig's lowering of a small returned struct to multi-value has changed across releases. The stable contract is scalar exports plus the column pointers: `sim_column_ptr` and `sim_colonist_count`. Do not make the host depend on a multi-value ABI until a specific Zig version is pinned and the parity test loads the real module. Convenience returns of `(ptr, len)` can wait until that pin exists.

### Bulk memory

`memory.copy` and `memory.fill` are baseline. The tick's snapshot of previous transforms should be a `memory.copy` of each column (or `@memcpy` in Zig, with the `bulk_memory` feature enabled so it lowers to that). Clearing a path buffer is `memory.fill`. This stays inside the module. JS does not copy the columns to take the snapshot. JS only views them.

### Tail calls

WASM tail calls have been in Chrome since 112, Firefox since 121, and Safari since 18.2. They became Baseline Newly Available on 11 December 2024. They are not yet Baseline Widely (that date sits in 2027), but every current major engine has them.

They do not help this sim. The hot paths are loops over columns. The grid search is an explicit queue, which uses constant stack and is easier to reason about than a recursive flood fill. Tail calls exist for recursive code that would otherwise blow the WASM stack: interpreters, tree walks. We do not have those. Zig will not reliably emit `return_call` unless the function is in a shape LLVM recognizes, and relying on that is a fragile optimization. Do not rewrite a loop as recursion to chase it. Revisit only if some later system is genuinely recursive and shows up in a profile.

### Threads, and GitHub Pages

The first WASM backend is single-threaded, on the main thread, inside `advance`. A valley of tens to a few thousand entities, ticking at 20 Hz with SIMD on the regular fields, should fit in a frame. Threads are a later option, not a starting requirement.

WASM threads need shared memory, which needs `SharedArrayBuffer`, which needs the page to be cross-origin isolated: `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` (or `credentialless`). GitHub Pages cannot set those headers.

Two workarounds, in the order we would actually use them:

1. **A worker with its own module, and no shared memory.** The worker ticks and posts a copy of the columns back. The main thread keeps the latest snapshot in ordinary `ArrayBuffer`s and the renderer reads those. `Simulation.advance` stays synchronous from the render loop's point of view: it never awaits the in-flight tick, it samples the last published frame. One copy of a few thousand floats is cheap. This works on GitHub Pages with no special headers. It is the right step if a profile shows the tick hitching the frame. The facade in `Simulation` was chosen so this swap does not turn the renderer into an async client.
2. **`coi-serviceworker` (or the same idea written locally).** A classic script, served from this origin and not bundled, registers a service worker that rewrites responses with COOP and COEP, then reloads once. After that, `crossOriginIsolated` is true and `SharedArrayBuffer` works. Our assets are same-origin, so `require-corp` does not have to pull in a third-party CDN. The costs are real: a reload on first visit, a service worker the smoke test would have to account for, and a stuck worker if the script mis-behaves. Do not take this on until a worker without shared memory is measurably not enough. Isolation is not required for SIMD, bulk memory, or the single-threaded module.

Do not assume `SharedArrayBuffer` exists in the Pages build.

### Build

When the backend lands, a `sim/build.zig` sets `wasm32-freestanding`, disables the entry point, and adds `simd128` and `bulk_memory`. Optimize for release-fast first, and compare release-small if the binary dominates the download. The build artifact is committed at `assets/sim/gulch.wasm` so Pages, which serves the repo root and does not run Zig, can fetch it. CI does not need a Zig toolchain until a test actually instantiates the module. A parity test can install Zig later. Until then, committing the wasm is the reproducible artifact, and the TypeScript reference is what CI runs.

`wasm-opt` is optional and only worth it if we measure a size win and the parity test still passes. Do not run a pass that rewrites the ABI.

### Migration

1. This build. TypeScript `Simulation`, SoA columns, fixed tick, seeded RNG, renderer reads columns. Mind, inventory, research, and production orders are in the save and are not simulated.
2. Zig implements the wander tick and the columns. Commit `gulch.wasm`. A parity test runs N ticks from the same seed on both backends and compares transforms within a tight epsilon (bitwise if the RNG and the math match).
3. `createSimulation({ backend: "wasm" })` returns an adapter that fills `ColonistColumns` from `GulchSimModule`. The default stays TypeScript until parity is green in CI.
4. Move one system at a time: needs, then contracts, then inventories and production, then research, then seeds and receptivity. Each move keeps the save shape or bumps `SaveGame` version. The renderer stays ignorant.
5. If a profile says the main-thread tick is too slow, put the module in a worker and publish snapshots. Threads and COOP/COEP stay off the table until that is not enough, and they stay off GitHub Pages until isolation is an explicit decision.

The adapter, not the viewer, is the only file that should mention `WebAssembly`.
