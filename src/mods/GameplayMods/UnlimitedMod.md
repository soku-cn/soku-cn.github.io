---
title: UnlimitedSoku改版Mod

# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## **什么是UnlimitedMod**

::: info
**这是一个改版的Mod，对游戏系统和角色招数数据进行了大量修改**

【游玩视频】  https://space.bilibili.com/357511007/channel/collectiondetail?sid=382168
【资源下载】  https://wiki.514.live/guide/#网盘

视频简介评论区里有一些改动说明，后续有空再做完整的changelog翻译吧。
在 ``th123\Modules\NextSoku\modset\unlimited\doc`` 文件夹内有对应的英文文档 summary.txt 是MOD的改动介绍
Unlimited 英文Wiki说明: https://hisouten.koumakan.jp/wiki/User:Tessiro#The_Soku_Instrumentality_Project
NextSoku 英文Wiki说明: https://hisouten.koumakan.jp/wiki/User:Yumeko/NextSoku
:::

![](https://bu.dusays.com/2023/08/24/64e701d52032c.gif)

![](https://bu.dusays.com/2023/08/24/64e702fc06592.gif =329x)

## **安装与使用UnlimitedMod**

::: info 启用MOD方法：
- NextSokuLauncher.exe 放到和th123.exe同目录，
- NextSoku文件夹放到th123/modules文件夹内，
- 在SWRSToys.ini中添加语句 `NextSoku=Modules/NextSoku/NextSoku.dll`
**并把 shady-loader 和 SOKU2 禁用，否则会有问题**
- 保存，打开NextSokuLauncher.exe就可以选择改版了，注意联机的话俩人版本要一样
- 在启动器页面选择第四项 Unlimited ，右上方可选择机签，下边的几个勾选项有开R和英文版，**都不要勾选！**
- 启动成功的话，游戏标题栏会多一个[Unlimited 3.6.5] （开了giuroll的话会一闪而过）

**要切换回正常游戏只需要再打开SWRStoys配置文件，将Nextsoku前的分号加回去并保存就OK**
:::


::: warning
**注意，要打开 NextSokuLauncher.exe 来启动游戏才能玩 UnlimitedMod**

**把 shady-loader 和 SOKU2 禁用，否则会有问题**

NextSokuLauncher.exe 打不开的话，先检查 DX 修复和 C++ 组件修复
:::

![注意，要打开 NextSokuLauncher.exe 来启动游戏才能玩 UnlimitedMod](https://bu.dusays.com/2023/08/20/64e21c9299e26.png =540x340)

## mod详细修改说明

::: info 中文说明
版本 3.65

:::

::: info 英文说明原文
= Changelist =
Current version: Soku Unlimited ver. 3.6.5

=== Universal ===
* Limit system removed
* "Rift Attack" corrected to "Lift Attack"
* Extra proration on lift/smash/skills/spells are removed. They will still show up on the HUD, but will not affect damage
* All moves will prorate by an extra 18%
* All moves have untech increased by 10 more than their listed values
* characters will perform special actions after standing idle for a certain amount of time (purely aesthetic)
* Cancel system revamped
** Characters that repeat their jab for the second hit of dial a can cancel it into 2A
** Characters without rapid attacks can cancel 2A into 5A (Komachi can cancel 5A into 2A) 
** Dial A enders can be replaced with 3a/6a in chains
** All parts of dial A can be cancelled into bullets/skills

=== Known bugs ===
* Dragon Star may cause desync
* Some moves are hard coded to force limit and will induce it despite it being disabled

=== Reimu ===
==== Normals ====
* 5AAA: earlier forward step # less dial a drops
* 5AAAA: forces knockdown; new animation
* 3A: consistent parameters: damage: 750; proration: 85%; untech: 50 # bugfix
* 66A: duration: 36 -> 34 # recovery -2 # soku 1.03
* 66C: untech 40 -> 60
* j.5A: untech 25 -> 30
* j.6A: forces knockdown; damage -50
* j.2A: causes groundbounce
* j.8A: untech 45 -> 60
* 5B: motion cancel: 29 -> 25; startup: 15 -> 14 # = 2B, 6B
* 6B: motion cancel: 28 -> 25 # = 2B
* 2B: bullet: reaches all the way across the stage # SWR
* C bullets: untech: 25 -> 30, hitstop 5 -> 10
==== Skills ====-
* Hakurei Amulet: untech: 30 -> 35, hitstop 5 -> 10, B version (air and ground): spawns close to reimu; C version (air and ground): spawns far from reimu
* Youkai Buster: damage 90 -> 120; bigger wallbounce
* Ascension Kick: B version: forces knockdown, counter hit property removed, gains melee invincibility at level 1; C version: forces knockdown
* Sliding Ascension Kick: 2nd hit: cancellable into anything; 3rd hit: forces knockdown
* Rain Dance: damage: 300 -> 400; proration: 95% -> 96%, pushback vector modified # midscreen hits work better, cannot be canceled on whiff; forces knockdown
* Cautionary Border: untech: 40 -> 45; cannot be diffused by grazing; reflects projectiles
* Binding Border: untech: 40 -> 45; startup -10
* Permanent Border: untech: 40 -> 45, launch vector modifed # better follow-up options
* Dimensional Rift: B version: ground bounces; C version: recovery reduced, allows combos on hit
* Instant Dimensional Rift: can activate from startup, counter window -10, recovery +14
* demon sealing dimensional rift: forces knockdown; B version: melee invincible on startup; C version: grazes on startup, cannot be HJC'd or cancelled into spellcards
==== Spells ====
* Concealed Orbs of Light: forces knockdown
* Ying Yang Orb: forces knockdown
* Fantasy Orb: forces knockdown
* Demon Binding Array: no longer a reversal, now high jump cancellable
* Fantasy Orb: consistent damage: 350
* Fantasy Seal: consistent damage: 800
* Fantasy Heaven: activation: acts as a roman cancel; attack: no longer causes instant KO (~3500 damage)
* Expanding Boundary: spirit damage: 0.15 -> 0.25, forces knockdown, damage 500 -> 400, launch vector changed # hits link more reliably, does more damage
* Fantasy Seal: forces knockdown
* Dash: speed: 8 -> 9 # iamp

=== Marisa ===
==== Normals ====
* Flight/Airdash: New animation
* f.5A: consistent damage: 450 # bugfix
* 6A: skill cancellable at any time after it hits/is blocked
* 5AAA: earlier forward step # less dial a drops
* 66A: block direction mid -> low
* j.5A: untech 25 -> 30
* j.6A: forces knockdown
* j.6[A]: forces knockdown
* j.8A: untech 45 -> 60
* j.2A: startup 16 -> 13 # j.6A
* j.2[A]: forces knockdown
* 66B: now skill cancellable
* B bullets: hitstop 5 -> 12, damage -50
* 6C bullet: proration 98% -> 96.5%
* 66C: groundbounces
==== Skills ====
* Meteonic Debris: consistent proration: 96% # bugfix; forces knockdown
* Green Spread: lasers have a hitbox on creation; explosion: forces knockdown, bigger wallbounce
* Miasma Sweep: forces knockdown, will no longer trade
* Narrow Spark: forces knockdown; hjc -6, launches higher
* Witch Leyline: forces knockdown
* Radial Strike: forces knockdown, launch vector modified # better wallbounce
* Up Sweeper: melee, forces knockdown, marisa cannot move until she touches the ground, spell-cancellable if it hits
* Stellar Missile: size increased
* Magical Reusable Bomb: cannot hit marisa
==== Spells ====
* Metoric Shower: can be high jump cancelled
* Stardust Reverie: hit animation modified # always sends foes in front of marisa
* Escape Velocity: forces knockdown
* Orrieries Sun: acts as a roman cancel
* Luminous Strike: forces knockdown
* Blazing Star: hit animation changed # blasts forwards instead of up
* Gravity Beat: damage: 3000 -> 1800

=== Sakuya ===
==== Normals ====
* 5AAAA: forces knockdown
* 2A: startup -2
* 3A: launches higher
* 6A: startup -2 # combos from f.5A
* j.5A: untech 25 -> 30
* j.6A: forces knockdown, damage -50
* j.2A: damage: 900 -> 800
* j.8A: untech 45 -> 60
* B bullets: damage 100 -> 90, proration 95% -> 97%, untech 25 -> 35
* 66B: forces knockdown; now skill cancellable
* C bullets: untech 45 -> 60
* 66C: different hit angle (less forwards)
==== Skills ====
* Sense of Thrown Edge: stationary knives can damage enemies; untech: 40 -> 45 # = 6C, damage: 150 -> 200, spirit damage: 0.125 -> 0.15 # magic star sword
* Crossup Magic: forces knockdown; air versions: damage +100, can be cancelled into spells during the attack and during land recovery
* Parallel Brain: knives remain on cancel
* Propelling Silver:  ring can hit while forming; attack+motion cancel: b: 33 -> 29; c: 38 -> 33, spirit damage: 0.1 -> 0.15; blockstop: 0 -> 5; recovery -12
* Magic Star Sword: forces knockdown
* Dancing Star Sword: setup animation: spirit regeneration delay: 120 -> 60; orbiting knives stay until she is launched
* Dancing Star Sword: activation: high jump cancellable; thrown knives: easier to combo with, more blockstun
* Perfect Maid: can counter from the start, recovery +10, air versions cannot be cancelled on whiff
* Time Paradox: B version: recovery -9, startup -6, damage = 800/500, untech = 120, launch vector modified # can be followed by aerial attacks
* Time Paradox: C version: forces knockdown
==== Spells ====
* Inscribed Red Soul: forces knockdown
* Soul Sculpture: forces knockdown
* Phantasmic Killer: startup -10, damage per hit = 140

=== Remilia ===
==== Normals ====
* 5AAA: first hit: hitbox size increased (fixes dial A drops)
* 5AAAA: forces knockdown; hit sfx adjusted; new animation
* 3A: new animation
* j.5A: untech 25 -> 30
* j.5AA: ground bounce on standing characters # prevents infinite loop
* j.6A: forces knockdown
* B bullets: hitstop: 5 -> 10
* C bullets: proration = 97% -> 98%, damage = 120 -> 100
==== Skills ====
* Demon Lord Walk: forces knockdown
* Vampire Claw: B version ender: forces knockdown; C version ender: hitstop increased, launch height increased # allows followup combo
* Chain Gang: more untech
* Demon's Dinner Fork: forces knockdow
* Rocket Kick Upper: hitbox size increased # able to hit enemies on the ground, hitstop 3 -> 25, proration 93% -> 95%
* Vampire Kiss: B version: startup 33 -> 9; C version: startup 38 -> 25, more recovery on hit
* Demon Lord Arrow: forces knockdown
* Trickster Devil: bigger wallbounce; allows followup combos
* Demon's Dinner Fork: forces knockdown
* Ceiling Fear: forces knockdown
* stigmatizer: startup 28 -> 20, hjc 44 -> 22, more hitstop
==== Spells ====
* Demon King Cradle: startup reduced (links from 4A # 5Card cradle); proration increased, more untech
* Heart Break: forces knockdown
* red the nightless castle: forces knockdown
* Remilia Stretch: blockable, damage 4250 -> 3500. startup -39, recovery -30 launch vector changed # groundbounces
* Demon King Cradle: startup reduced (links from 4A # 5Card cradle)
* Spear The Gungir: forces knockdown
* Millenium Vampire: acts as a roman cancel

=== Alice ===
==== Normals ====
* 5AAA: earlier forward step # less dial a drops
* 5AAA[A]: damage 1250 -> 1500, recovery -12 (+3 on block)
* 6A: forces knockdown
* 6[A]: forces knockdown; air unblockable
* 2A: startup -1
* 3A, j.5A, j.2A: startup: hurtbox extension reduced
* j.5A: untech 30 -> 35
* j.6A: falls faster after using; landing recovery removed, forces knockdown, startup: 15 -> 13
* j.2A: startup: 21 -> 17, untech 50 -> 60
* j.8A: duration: 65 -> 56 # recovery -9;  untech 45 -> 60
* 2B: startup: 16 -> 13
* B series: damage 100 -> 90, will fire even if canceled by a high jump, skill or c bullet 
* j.5B, j.6B: recovery increased
* C series: not cleared if alice wins the round
* 4C: motion cancel: 34 -> 28 # = doll arrangement
* j.2C: motion cancel: 28 -> 20 # = jc and j.6C
* j.4C: added; motion cancel: 28 # = j.2C before the fix
==== Skills ====
* Doll Placement: untech 50 -> 70
* Volatile Doll: B version: melee invulnerable on startup; both versions: dolls will explode on contact with enemy instead of the ground
* Edo High-Explosive Pawn: can have multiple instances
* Thousand Spear Dolls: B version: recovery -6; C version: recovery -6; forces knockdown vs. air
* Doll Archers: B version: motion cancel: 37 -> 29; C version: motion cancel: 45 -> 37, arrows stay when alice flinches # soku 1.03; forces knockdown
* Doll Ambush: motion cancel: 43 -> 34
* Doll Arrangement: blockstop per hit: 0 -> 10
* Seeker Wire: graze resistance by level: [3, 5, 7, 9] -> 10
* Doll Activation: forces knockdown
* SP Doll: forces knockdown
==== Spells ====
* Hourai Doll: untech: 60 -> 9999; spirit damage: 0.66 -> 1.33 # full card
* Holland Doll: startup -14; recovery -19
* Little Legion: spirit damage: ~0.75 -> ~1.0 # full card
* Trip Wire: untech: dolls: forces knockdown, startup: ground: 22 -> 16; air: 24 -> 18
* Artful Sacrifice: startup: 55 -> 45; damage: 2250 -> 1750; forces knockdown
* Futuristic Puppet: more chip damage; explosion damage: 500 -> 1500
* Shanghai Doll: untech: 60 -> 6000; motion cancelable
* Cute Phalanx: proration per hit: 98% -> 98.5%
* Dolls War: proration: 95% -> 97%, startup: 37 -> 24, extended recovery period if it doesn't connect
* Lemmings Parade: damage reduced
==== Other ====
* Spirit Regeneration: delay after using skills: 120 -> 75
* Border Escape Forwards: extended hurtbox behind alice removed

=== Patchouli ===
==== Normals ====
* 5AAA: forces knockdown, ungrazable bullet that deals 1 orb on block, hit sfx modified
* 6A: startup -2 # 3A ; hit vector changed: causes groundbounce
* j.5A: untech 25 -> 30, proration: 94% -> 95%
* j.6A: proration: 87% -> 94%, launch vector: opponent stays closer to patchouli, forces knockdown
* j.2A: groundbounces, startup 20 -> 13
* j.8A: untech 45 -> 60
* 2C: launch vector: bounces higher; untech: 45 -> 60
* 5C bullets: untech 30 -> 45, damage -50
* 6C series: untech 25 -> 45
* 66C: grazes
==== Skills ====
* Summer Red: forces knockdown
* Summer Flame: hitstop 10 -> 15, hit animation changed # grounded opponents are not launched
* Flash Of Spring: startup: 25 -> 18, lift attack # launches people into the air with high untech, proration 80% -> 95%, damage 1200 -> 800
* Wipe Moisture: cancellable into itself (acts as a rekka), damage 400 -> 500; no longer launches foes
* Static Green: level of attaining melee invincibility: 2 -> 1, forces knockdown
* Condensed Bubble: attack cancel: 35 -> 19 # = air version, motion cancel: 35 -> 27 # = winter element
* Sticky Bubble: opponent cannot move while bubbles are being attached to them, small bubbles do 50 damage and force knockdown against air opponents; damage from accumulating 10 bubbles: 0 -> 1000, attack cancel: 35 -> 19 # = air version, motion cancel: 35 -> 27 # = winter element
* Autumn Edge: spirit damage: 0.2 -> 0.3, startup -9
* Autumn Blade: forces knockdown
* Force Lasher: startup 23 -> 18, recovery 32 -> 8
* Emerald City: forces knockdown
==== Spells ====
* st elmo's pillar -> launch height, more untech # allows followup combos, damage: 2800 -> 3250; proration: 70% -> 75%; forces knockdown
* Phlogistic Pillar: startup: 24 -> 16 # +6 for each additional wave
* St Elmo's Pillar: duration: 96 -> 86 # recovery -10
* Elemental Harvester: damage: 130 -> 150; proration: 98.5% -> 99%, forces knockdown
* Emerald Megalopolis: total: 49 -> 39
* photosynthesis: total 102 -> 78 # satellite sunflower
* Royal Diamond Ring: forces knockdown
* Philosopher's Stone: extra projectiles: forces knockdown

=== Youmu ===
==== Normals ====
* 5AAAAA: opponent bounces closer to youmu
* 3A: replaced with an anti air melee attack
* j.5A: untech 25 -> 30; damage -100
* j.6A: forces knockdown; damage -100
* j.8A: untech 45 -> 60
* j.2A: horizontal range extended # soku 1.03, groundbounces on normal hit, now skill cancellable, proration 85% -> 78.5%
* 66AA: startup -6 # combos from 66A, skill cancelable
* B bullets: untech 25 -> 30, hitstop 10 -> 15, damage 200 -> 150
* 6C, j.6C: forces knockdown; damage -100
* 5C series bullets: untech 25 -> 30, hitstop 10 -> 15, hit animation modified
* 6C: damage 700 -> 600
==== Skills ====
* Netherworld Reflection Slash: has a damaging hitbox starting at level 1, damage = 600, spirit damage = 1 orb
* Crescent Moon Slash: both versions: forces knockdown
* Slashing a Flower Upon One's Head: causes groundbounce on hit; now air-usable
* Slash of Life and Death: 3rd hit will ground bounce
* Lotus Stance Cut: air version enabled, startup decreased, high jump cancels earlier, 1 hit on lvl 1-3 and 4 hits on max
* Heart-Carving Cut: startup 25 -> 17 # SWR
* Intolerant Avici: startup 13 -> 9 # combos from 5A/2A, launch vector changed # has better followup options, proration = 95%
* Strange Half Body: no longer launches
* Insightful Sword: can counter from startup, recovery +8
* Medium's Bind: forces knockdown
==== Spells ====
* Wheel of pain: recovery -6
* Ascension to Nirvana: forces knockdown
* Life ending sword 'Meditation': forces knockdown
* Thousand Cherry Blossoms: launch vector changed # hits link better, damage 1000 -> 700
* Rise from Delusion: damage per hit 1200 -> 1000
* Six Root Cleansing: invulnerable startup
* Secret of Life and Death: acts as a roman cancel, animation can be cancelled into attacks after clone appears
==== Other ====
* Dash: continuous graze
* Flight: spirit cost per frame: 12 -> 10

=== Reisen ===
==== Normals ====
* 5AAA: no longer launches foes
* 5AAAA: launch vector modified # opponent bounces closer to reisen
* 3A: no longer launches
* 3[A]: now a 2-hit combo; lauches foes to allow followups
* 6[a]: grazes while active
* j.5A: untech 25 -> 30
* j.6A: forces knockdown
* B bullets: proration 93% ->  95%
* C bullets: untech 25 -> 45
==== Skills ====
* Mind Explosion: damage reduced
* Mind Bending: all versions: startup -4,  +100 damage, untech 40 -> 60, proration 850 -> 950, hit animation changed # hits link better and is now easier to follow; forces knockdown
* Illusionary Blast: forces knockdown
* Eyesight Cleansing: tracer beams have a hitbox on creation
* Ripple Vision: forces knockdown
* Mind Dropping: bullets does not launch, proration 93% -> 99%, hjc -6
* Undersense Break: B version: melee invulnerable on startup, no longer spell cancellable; C version: grazes on startup
* Disbelief Aspect: B version: startup -5, reisen can move as soon as clone starts firing; C version: startup -5, now high jump/spell cancellable, both versions: proration 93% -> 95%
* Disorder Eye: forces knockdown
=== Spells ====
* Corolla Vision: ground: recovery -18, air: startup -8
* weak heart "demotivation": forces knockdown
* discarder: forces knockdown
* x-wave: invincible on startup, forces knockdown
* Corolla Vision: bullet: forces knockdown, damage 600 -> 800, proration 90% -> 93%
* Patriots' Elixir: damage from drinking 4 potions: 4500 -> 20000, explosion is now fullscreen
* Lunatic Red Eyes: forces knockdown
* Mind Starmine: less startup

=== Yuyuko ===
==== Normals ====
* 5AAA: forces knockdown; damage -500
* 5A, f.5A, 66A: hurtbox extension on recovery reduced
* 6A: causes groundbounce
* j.6A: untech 45 -> 60
* j.8A: untech 45 -> 60
* j.2A: forces knockdown; damage -50
* C series: proration 93% -> 96%, untech 25 -> 30
* C series: launch vector modified to prevent infinites
==== Skills ====
* Light of the Undead: forces knockdown
* Dance of the Buttefly Dream: forces knockdown
* Sense Of Elegance: B version: damage 1000 -> 700, startup: 25 -> 17, recovery 25 -> 20, blockstop on opponent 10 -> 5
* Sense Of Elegance: B version: untech 40 -> 60, proration 850 -> 940, launch height increased # allows yuyuko to combo after
* Sense of Elegance: C version: always forces knockdown
* Land Of Death: damage +50; B version: startup 23 -> 13; C version: startup 33 -> 23; proration 93% -> 96%, untech 40 -> 50, launch vector modified # better follow options
* Lance of the Swallowtail Crest: bigger wallbounce; untech +20, hjc -12
* Reverse Screens: bigger hitbox # can combo from moves in midscreen; reflects while active
* Spirit Luring Nectar: forms bigger ghosts, damage 300 -> 350
* Gifts to the Deceased: damage +300; formed ghosts: spirit damage increased, hitstop 5 -> 10, blockstop 5 -> 10
==== Spells ====
* ticket to the netherworld: explosion: proration 85% -> 40%, damage 3500 -> 4000
* Ghastly Dream: forces knockdown
* Ageless Dream: forces knockdown
* Sense of Cherry Blossom: startup -10

=== Yukari ===
==== Normals ====
* 5AAA: hitstop 10 -> 15 # 5AAA 5B is more consistent
* 5AAAA: forces knockdown; new animation
* j.5A: untech 25 -> 30
* 3A: untech 45 -> 60
* j.2A: bigger hitbox; no landing recovery on hit
* j.6A: total duration: 61 -> 53 # recovery -8, forces knockdown, changes yukari's momentum sooner
* j.8A: untech 45 -> 60
* B bullets: untech = 30, damage = 75
* 2B: cancel, motion cancel: (31, 31) -> (26, 26) # soku 1.03, bullet speed: 10 -> 12
* 66B: startup: 14 -> 13; groundbounces, damage -50
* c series: untech = 45, damage = 275, proration = 95%
==== Skills ====
* Open, Lamented Box of Urashima: startup -5; causes groundbounce on hit, damage -500; B version: drops closer to yukari and can hold [4] to drop even closer
* Bewitching Bait: attack cancel: 37-> 22; motion cancel: 37 -> 32, total: ground: 67 -> 59; air: 75 -> 67; spirit damage 0.5 -> 1
* Border Between Brains and Feet: B version startup -6, blockstop 0 -> 10; C version startup -15
* Ride the Waves, Fight the Ocean: B version: has a damaging hurtbox (damage: 800, spirit damage: 0.5, proration: 92%, launch: wallslam)
* Illusion Manji Parasol: hits while being held, released parasol: untech 45 -> 60
* Open, Lamented Box of Urashima: damage 1200 -> 700
* Bound to the grave: bigger wallbounce
* Bewitching Bait: no longer launches; hitstop 10 -> 20; blockstop 0 -> 15
* Universe of Matter and antimatter: hitstop 10 -> 20; blockstop 10 -> 15; launches foes straight upwards, cannot be teched
* Illusional Rift: B version: bigger wallbounce; C version: groundbounces
* Eye Of Changes: spirit damage: 0.5 -> 1 untech 40 -> 60, proration 92% -> 98%; C version: can only have one at a time
* Flesh Dismantler: grazes when yukari appears, B version: underground movement speed: 6 -> 8; C version: landing animation is now cancellable to allow followups; pop-out delay by level: [20, 16, 12, 5] -> [16, 13, 10, 5]
==== Spells ====
* Boundary Between 2D and 3D: forces knockdown, does not prorate, startup -14, spirit damage 0.5 -> 0.25
* Chen: thrown downwards instead of upwards, forces knockdown, proration 80% -> 90%, spirit damage = 0.25 orb
* Ran: forces knockdown, proration 92% -> 99%
* Objective Border: forces knockdown
* Nest Of Fireflies: untech greatly increased
* The Magic Eye of Laplace: proration = 99%, forces knockdown
* Quadruple Barrier: bigger wallbounce, now allows followups
* Laced with Venom: no longer launches; hitstop 10 -> 20; blockstop 0 -> 15
* Trip to the Old Station: damage -500; hit animation changed # always hits 4 times
==== Other ====
* Dash: speed: 8 -> 9 # iamp
* 44 wall teleport: invincible startup

=== Suika ===
==== Normals ====
* 5AAA: earlier forward step # less dial a drops; now bullet cancellable
* 5AAAA: forces knockdown
* f.5A: startup: 17 -> 15; active: 4 -> 6, hurtbox extension on recovery reduced
* f.5[a]: hurtbox extension on recovery reduced
* 2[a]: recovered # note: this is a grazable move that is skill cancellable, does 1 orb on block and hits mid
* 3A: startup: 19 -> 17
* 6A: startup: 18 -> 17
* j.5A: untech 25 -> 30; damage -100
* j.2A: hitboxes/angles adjusted for better linking midscreen
* j.6A: forces knockdown; damage -200
* j.8A: untech 45 -> 60
* 66A: both hits are high and do 1 orb on wrongblock
* 6B bullet: untech 30 -> 45; damage -200
* 2B: block direction: mid -> low, now groundbounces on standing or air, prorate 85% -> 75%, untech 60 -> 45
* 2[b]: bounce height increased, active frames 2 -> 4
* 66B: startup: 18 -> 17; replaced with an attack similar to IaMP Suika's 3DA: hits mid
* 6C, j.6C: bounces off walls # iamp
==== Skills ====
* Oni Spirit Bomb: forces knockdown
* Spectre -Dense-: B version: super armor for 7 frames after releasing the button on lvl 0; forces knockdown
* Spectre -Dense-: C version: super armor on startup # continues while held until first active frame
* Unpleasant Mist: startup 27 -> 8, can be cancelled as soon as suika exits the mist
* Foot Bellows: air versions: has a damaging hitbox while decending that hits high; all versions now cause ground bounce
* Gnome -Thin-: C version: loses melee hitbox, can be high jump cancelled
* Gnome -Dense-: forces knockdown
* Kidnapping Oni: B version: startup = 15; C version: startup -10, now has super armor
==== Spells ====
* Gathering And Dissipating: recovery -20, blockstop 3 -> 10
* Missing Power: forces knockdown
* 3-step destruction: forces knockdown
* Throwing Mt. Togakushi: forces knockdown
* Missing Purple Power:
** walk cycle: hits on the first frame
** standing horn attack: forces knockdown
** jump: same speed as normal jump, forces knockdown
** landing: same speed as normal landing
** 5A: bigger wallbounce to allow followups, forces knockdown
** 5B: causes groundbounce to allow followups
** 5C: less recovery
** j.5A: bigger wallbounce to allow followups, forces knockdown
** j.5B: causes groundbounce to allow followups
** j.5C: forces knockdown
* Art of Oni Binding: does not prorate; duration 3 -> 15
* Art of Gaki binding: does not prorate; damage 0 -> 1500, duration 3 -> 15
* Massacre on Mt. Ooe: startup 12 -> 3 # can't be jumped in reaction to the spellflash, damage ~6.2k -> ~4.5k

=== Aya ===
==== Normals ====
* 5AAAA: forces knockdown; new animation
* 6[a]: consistent damage: 800 # bugfix
* 3A: launch vector changed to allow combos
* 3[a]: consistent damage: 800 # bugfix
* j.5A: untech 25 -> 30
* j.6A: forces knockdown
* j.2A: startup = 13, landing recovery = 14, groundbounce on hit, untech 60 -> 45, proration 90% -> 79%, now skill cancellable; hitbox size increased to allow crossups; damage -100
* j.8A: untech 45 -> 60
* C bullets: untech 45 -> 60
* 6C bullets: untech 40 -> 50, proration 85% -> 90%
==== Skills ====
* Domination Dash: all versions: forces knockdown; C version: cancellable into any move ON HIT ONLY
* Tengu Felling: cancellable into attacks after the movement; will not fire a bullet (essentially a command high jump)
* Graceful Dash: forces knockdown
* Gale Fan: longer hitbox % hits closer to aya; launches foes horizontally and can wallslam, damage +100
* Tengu's Pebbles: ground B version: startup -11, hjc -8; ground c, air b/C versions: startup -10; spirit damage per hit: 0.1 -> 0.25; blockstop 2 -> 8; hitstop 5 -> 10, proration = 100%, untech = 40
* Tengu Drum: intial hit: forces knockdown, a followup: forces knockdown, b followup: no longer ground bounces, c followup: forces knockdown
* Wind from the Maple Fan: spawns closer to aya, more hitstun # easier to follow, proration 93% -> 98%
* Tengu's Downburst: hitbox size increased to allow crossups
* Wind Sickle Veling: will not disappate if not cancelled
-- Spells ====
* Tengu Limited Special: acts as a roman cancel
* Wind of the Tengu Path: bigger wallbounce
* Tengu's Macroburst: proration reduced
* Route Forbidden to Man: rock proration reduced, more untech, histop increased # juggles more consistently

=== Komachi ===
==== Normals ====
* 4A/5A: block direction: any -> high
* 5AAA:  new animation
* 5AAAA: hitstop increased # allows easier/more varied followups
* f.5A: startup: 15 -> 13; total: 57 -> 47 # recovery -10, recovery: hurtbox extension reduced; forces knockdown
* 3A: proration 80% -> 85%, untech 45 -> 50
* 3[a]: forces knockdown
* j.5A: total duration: 46 -> 40 # recovery -6, untech: 25 -> 30
* j.6A: blindspot removed # swr, total duration: 69 -> 57 # recovery -12, forces knockdown, no landing recovery on whiff
* j.2A: extended hurtbox in front of komachi removed
* 2B: startup: 21 -> 17; motion cancel: 28 -> 24 # swr
* 5C bullets: can have multiple ghosts on screen at once; untech 45 -> 60
* j.5C: spirit is ensured to come out while land canceling
* 2C: forces knockdown
* 6C, j.6C, j.2C: bullet priority: c(3) -> b(1), untech 45 -> 60
* 66C: forces knockdown
==== Skills ====
* Spirits of the Firm: startup -2; launches ground enemies
* Scythe of the Reaper: ground B/C, air B version: forces knockdown
* Bound Spirits of the Earth: hits while coming out
* Wind on the Last Journey: forces knockdown; has a reflecting effect
* Boat on the Sanzu: can act with anything after komachi jumps off the boat
* Taste Of Death: recovery -5 # swr, soku 1.03, forces knockdown, armored while held
* The Endless Way: b startup = 17, c startup = 31, charged C version: spawns on the opponent # bugfix, launch vector modified # launches downward
* Ritual Of Ecstacy: B version: melee invincible on startup, recovery -20, cannot be cancelled into spells; C version: grazes on startup, startup -20
* Scythe Of Exorcism: hp healed by one spirit: 15 -> 45; launch vector modified # opponent does not fly as high
* Scythe Of Exorcism: B version: startup 24 -> 20, hjc 52 -> 32; C version: startup 36 -> 32,hjc 64 -> 44
* Scythe Of Exorcism: mini ghost explosions: spirit damage 0.125 -> 0.5, damage 300 -> 600, proration 94% -> 96%, launch vector/untech modified # 2C explosions
* Human Spirit Passing By: forces knockdown
==== Spells ====
* Abundant Floating Spirits: forces knockdown; can be high jump cancelled
* Flow of the River: proration/recovery reduced. causes wallbounce on hit # allows followup combo
* Narrow Confines of Avici: initial strike always causes groundbounce. pillar hits will send foes downward. # strike will always combo into the pillar
* Ferriage in the Deep Fog: startup -30
* Scythe of Final Judgement: damage: 4000 -> 3500, causes groundbounce on hit # allows followup combo
* Scythe of Wandering Spirits: damage reduced, invincible on startup # acts as a reversal
* Short Life Expectancy: inital strike deals 1k damage # able to score KOs
==== Other ====
* Hitbox while taking damage modified to stay the same for the whole animation # prevents infinites from yuyuko

=== Iku ===
==== Normals ====
* 5AA: block direction: mid -> high
* 5AAA: block direction: high -> low
* 5AAAA: forces knockdown, hitstop 5 -> 10, now an ungrazeable bullet does 1 spirit damage on block
* 6A: forces knockdown
* j.5A: untech 25 -> 30
* j.6A: forces knockdown
* 66B: can now be cancelled into skills
* 6C series: proration 92% -> 96.5%, untech 45 -> 50, damage 300 -> 250
==== Skills ====
* Dragon Fish's Stike: forces knockdown
* Dragonfish, the Able Swimmer: cancellable into any action
* Veils Like Water: both versions force knockdown
* Veils Like Water: B version: autoguards from startup to first active frame # functions as a proper reversal, cannot be cancelled into spellcards
* Electrostatic Guided Missile: forces knockdown
* Veils Like Wind: both versions have a damaging hitbox
* Veils Like Wind: B version: launches upwards, damage = 600, spirit damage = 0.5;
* Veils Like Wind: C version: launches forwards, damage = 800, spirit damage = 1
* Dragon Fish's Wrath: bolt directly above iku will bring foes downwards, forces knockdown
* Dragon Fish's Wrath: startup -4; chip damage slightly reduced
==== Spells ====
* Veils Like Time: activation is guard cancellable after startup, launch vector modified to allow easier followups
* Veils Like Time: ground counter: damage 500 -> 700, forces knockdown; air counter: damage 200 -> 300, forces knockdown
* Dragonfish Drill: forces knockdown
* Orb of the Five-Clawed Dragon: forces knockdown
* Elekiter Dragon Palace: forces knockdown
* Swimming Oarfish Shot: forces knockdown, opponents are not sent as high

=== Tenshi ===
==== Normals ====
* 5AAA: forces knockdown
* f.5A: groundbounces airborne characters, untech 45 -> 30
* f.5[a]: groundbounces airborne characters
* 3A: forces knockdown
* 3[a]: forces knockdown
* 6[a]: super armor while active; damage +100, duration +5, recovery -5; hit sfx adjusted
* j.5A: untech 25 -> 30, total: 40 -> 37 # recovery -3
* j.6A: active: 13 -> 15; total: 58 -> 55 # recovery -3 # soku 1.03, forces knockdown
* j.2A: startup 20 -> 14, groundbounce on normal hit, landing recovery: 29 -> 23, proration: 85% -> 80%
* j.8A: untech 45 -> 60
* B bullets: damage 150 -> 125
* 66B: no longer launches
* C bullets: untech 45 -> 60
==== Skills ====
* Scarlet Sword Temperament: first swing is melee
* Sky Attack: both ground versions will no longer trade. B version damage: 1000 -> 1200; C version damage: 1000 -> 1250, forces knockdown, air version: can airdash after recovery
* Heaven and Earth Press: all parts of the move are melee, spirit damage: 0 -> 1, forces knockdown
* Heaven and Earth Press: B version: minimum delay: 12 -> 6 C version: minimum delay: 18 -> 12 # soku 1.03
* Sword of Fate: no recovery on catch
* Sword of Fate: spirit damage per hit: 0.125 -> 0.25, damage 200 -> 250, hitstop increased # easier to combo with, hit animation changed
* Guardian Keystones: setup animation: has a hitbox while orbiting tenshi, startup +50; spirit regeneration delay: 120 -> 60; C version: launched stones: infinite graze resistance
* Awakening of the Earth Spirits: thrown projectile damage increased, causes ground bounce; startup decreased; earthquake will not launch
==== Spells ====
* Sword of Unletting Soil: forces knockdown
* Sword Of Rapture: cancellable animation on hit
* Sword Of Swagger: hit animation changed # looks cooler
* Meteorological Revelation: weatherless activation: damage 800 -> 1000, spirit damage 1.25 -> 2.5, launch vector modified to mimic weather version
* Meteorological Revelation: weather activation: damage 800 -> 1000, spirit damage 2.5 -> 5
* State Of Enlightenment: acts as a roman cancel
* Scarlet Weather Pressure: forces knockdown
* Sword of Worry and Joy: recovery -21, startup = 120F # six signs C version, blockable (low, 3 spirit damage on rightblock)
* Scarlet Weather Rapture: startup 41 -> 31, proration 98% -> 95%

=== Sanae ===
==== Normals ====
* 5AAAA: forces knockdown
* 6A: groundbounces
* j.5A: untech 25 -> 30
* j.6A: forces knockdown
* j.2A: can cancel as soon as it hits
* j.8A: untech 45 -> 60
* 5B, j.5B: bullet spawn location changed # bullets appear around sanae in a circle
* B series: hitstop 5 -> 15; blockstop = 2
* 2[c]: recovered; fires seven stars
* j.2C: always fires five stars # bugfix
* j.2[c]: recovered; fires seven stars
* 6C, j.6C: gauge instantly recovers as soon as kanako leaves, forces knockdown
* 4C, j.4C: gauge instantly recovers as soon as suwako leaves, untech 45 -> 60
* j.4C: startup: 37 -> 31; j.4C: hjc -10
* 66C: first hit does not prorate
==== Skills ====
* Sky Goddess Summon: attack: forces knockdown
* Sky God Summon: onbashira: no longer a reversal; damage reduced; now can be high jump cancelled, gauge recovery is now twice as fast as the other 623 skills; causes groundbounce; forces knockdown
* sky god summon skills other than onbashira: gauge recovery reduced 25%
* all earth god summon skills: gauge recovery reduced 50%
* Earth God Summon: iron ring: cannot be grazed
* Omikuji Bomb: 'very good luck': forces knockdown
* Cobalt Spread: no longer launches
* Falling Stars: size increased
* Wave Call: startup reduced
* Sky Serpent: B version: startup: 33 -> 23; motion cancel: 28 -> 26. C version: startup: 33 -> 93; motion cancel: 28 -> 30 # spawns snakes behind sanae
* Cobalt Spread: hit vector modified # launches higher
==== Spells ====
* Forgotten Ritual: startup: 25 -> 19
* charm of good commerce: recovery reduced, easier to follow
* Random Omikuji Barrage: all fortunes: forces knockdown, "very bad luck": damage increased, sanae will graze until she throws all 4 packets
* mid-day supernova: startup decreased, recovery decreased, more untech
* Grey Thamaturgy: forces knockdown
* Moses' Miracle: damage -1000, proration: 90%

=== Meiling ===
==== Normals ====
* f.5A: untech 35 -> 45
* 5AAA6A and 5AAA3A: no longer can be performed
* j.5A: untech 25 -> 30
* j.2A: untech 45 -> 60
* j.6A: forces knockdown
* j.8A: duration: 67 -> 52 # recovery -15, untech: 60 -> 90
* 5B bullets: hitstop: 0 -> 10
* 6B bullets: hitstop: 0 -> 10
* 2B: untech 45 -> 50
* 66B: recovery +12 ; armored on frames 10 -> 20; untech 45 -> 60
* C bullets: hitstop: 5 -> 10
* 6C: blockstop: 0 -> 5
==== Skills ====
* Searing Red Fist: bullet portion: damage 50 -> 100
* Fragrant Wave: startup: B version: 26, 28 -> 24; C version: 61, 59 -> 31, hit angle changed # easier to follow
* Water Taichi Fist: has a damaging hurtbox, b startup 4 -> 12, c startup 4 -> 20
* Colorful Rain: startup: b: 21 -> 20; c: 32 -> 24; jc: 34 -> 24, c and jC version: moves forwards while spinning, hitstop 0 -> 10; bullets produced are slightly bigger, have more hitstop and untech
* Spiral Light Steps: forces knockdown, startup -7
* Red Cannon: both versions: recovery -7, untech = 60, proration = 85% # functions as a launcher
* Red Energy Release: bigger hitbox (takes up the entire explosion)
* Yellow Quake Kick: lauches foes into the air # allows followup combo, untech 45 -> 60, proration 95% -> 92%
* Earth Dragon Wave: launches higher, proration 85% -> 90%
* Sky Dragon Kick: both versions: grazes while active, both versions: forces knockdown
* Tiger Chi Release: can be canceled by any action
==== Spells ====
* Intense Rainbow Fist: hitstop increased, juggle height increased, recovery decreased # allows followups like f.5A and 2B
* Star Bullets: startup reduced (links from 4A # 5Card ball); recovery reduced, no longer launches grounded foes, launch against aerial foes decreased, spirit damage per hit: 0.2 -> 0.25 # soku 1.03; consistent damage: 650 # bugfix
* Roc Fist: proration 75% -> 85%
* Fierce Tiger Chi Release: reduced recovery # functions as a roman cancel
* Roc-Killing Fist: first two hits: proration = 100%, final hit: proration = 75%
* Earth moving star bullets: bigger wall bounce # allows better followups

=== Cirno ===
==== Normals ====
* 5AAA: hitstop +5
* 5AAAA: forces knockdown; new animation
* f5A: hitstop +5
* 6A: startup: 21 -> 17 # = 3A
* 3A: new launch vector % can start combos
* j.5A: untech 25 -> 30
* j.6A: total: 61 -> 54 # recovery -7
* j.6A: forces knockdown
* j.2A: proration per hit: 94% -> 95%
* j.8A: total: 58 -> 54 # recovery -4; untech 45 -> 60
* 5B bullets: hitstop: 0 -> 10
* 6B, j.6B: motion cancel: 34 -> 30, - 6B, j.6B: startup 18 -> 15
* 6B bullet: hits come out slower
* 2B, j.2B: motion cancel: 30, 33 -> 23
* 66B: now skill cancellable, total: 64 -> 60 # recovery -4
* 5C: forces knockdown
* 6C, j.6C: hitstop: 10 -> 20; untech: 35 -> 40, spirit damage per hit: 0.125 -> 0.25
* 2C, j.2C: damage scales according to size
* 66C: new launch vector
==== Skills ====
* Icicle Shot: forces knockdown, startup: ground B version: 24 -> 20 # = air B version, startup: ground C version: 35 -> 31 # = air C version
* Frost Pillars: spirit damage: 0.5 -> 1 # soku 1.03, motion cancel: b: 39 -> 35; c: 47 -> 43, does not disappear when cirno gets hit; launches higher
* Freezing Light: motion cancel: 40 -> 36, number of hits: 1 -> 3; damage: 150; proration: 96
* Freezing Light: split into b and C versions; B version: narrow angle; C version: wide angle
* Midsummer Snowman: startup 17 -> 11 # links much easier, forces knockdown
* Ice Charge: forces knockdown, air usable level: 2 -> 1
* Ice Kick: can control descent
* Icicle Spear: damage: 150 -> 200; untech: 45 -> 60
* Icicle Sword: hit vectors modified # hits link better; C versions damage, more untech
* Freeze Touch Me: all versions startup -5, forces knockdown
==== Spells ====
* Icicle Machine Gun: high jump cancellable
* Fairy Spin: recovery reduced, air version: infinite landing bug fixed # bugfix
* insta-freeze beam: forces knockdown
* Cold Sprinkler: pushback reduced; blockstop: 0 -> 5; speed: 4.5 -> 3, startup: 36 -> 26; total: 68 -> 55 # better frame advantage
* Super Ice Kick: startup -28,  can be cancelled into any action on block or hit; no longer consumes spirit or adds meter # bugfix
* Perfect Freeze: forces knockdown
* Freeze Atmosphere: acts as a roman cancel
* Great Crusher: groundbounce on normal hit
==== Other ====
* Border Escape Forwards: commitment: 27 -> 25 # = all characters

=== Utsuho ===
==== Normals ====
* Airdash: new animation
* 5AAA: new animation
* 5AAAA: new animation; more untech # allows followup combos; hit vector changed # enemy is closer to utusho
* 2A: hit animation changed
* j.5A: duration: 55 -> 46 # recovery -9
* j.6A: forces knockdown, hitbox remains the same size for the entire duration, extended hurtbox under utsuho removed
* j.2A: startup 20 -> 14; adjusted hitbox; ground bounce on hit; hit sfx modified
* j.8A: untech 45 -> 60
* B bullets: hitstop 5 -> 14
* 6B bullet: launch property: lift attack, untech: 25 -> 45, stun type: medium -> heavy
* 5C: untech +25
* 6C bullet: damage 150 -> 120
* 2C: extended hurtbox on top of utsuho removed
* 66C: second hit can be cancelled into anything
==== Skills ====
* Break Sun: damage reduced, prorates more, forces knockdown
* Rocket Dive: lv 2+ blast: forces knockdown
* Ground Melt: startup: 56 -> 41 # all versions, motion cancel: 53, 58 -> 37 # all versions
* Radiant Blade: smash attack # causes wallbounce with high untech, damage 400 -> 450, recovery 18 -> 12
* Flare Up: launch vector modified # enemy lands in front of utsuho
* Melting Pummel Kick: consumes spirit and adds meter # bugfix, now grabs standing suwako
* Shooting Sun: forces knockdown, enemy does not go flying as high, total animation +26
* Vengeful Nuclear Spirits: aims at the enemy instead of utsuho
* Hell Wave Cannon: forces knockdown, hitstop = 20, hjc -5; total animation +10f
==== Spells ====
* Mega Flare: air version: startup -6, recovery -61
* High Tension Blade: startup -21, recovery -10 # easier to combo into and follow
* Hell's Artificial Sun: startup -5
* The Ten Suns: startup: 37 -> 31, damage reduced
* Nuclear Blaze Geyser: damage reduced
* Subterranean Sun: recovery -88
* Fixed Star: forces knockdown
* Uncontrollable Dive: hit vectors, hit animation changed # links more reliably
* Giga Flare: damage reduced
* Abyss Nova: acts as a roman cancel
==== Other ====
* Border Escape forwards: commitment: 30 -> 27 # = Cirno

=== Suwako ===
==== Normals ====
* 5AA: hitstop: 10 -> 15
* 5AAAA: forces knockdown
* f.5A: no longer launches; hitstop 10 -> 15
* 3A: startup 25 -> 15; can now cancel into any lilypad attack; will not launch foes
* j.5A: total: 56 -> 52 # recovery -4
* LA: No longer launches, hitstop 10 -> 15
* L6A: launch vector changed to allow linking into underground attacks
* 66A: startup -12
* j.6A: linking hits: launch vector changed to allow linking into underground attacks
* j.2A: startup 40 -> 25; bigger wallbounce
* j.8A: untech 45 -> 60; tree has the same launch vector and damage as suwako's body
* j.5B series: untech +15
* j.6B series: untech +15
* 6B: motion cancel: 34 -> 29; total: 65 -> 55
* l6B: motion cancel: 49 -> 39; total: 65 -> 55
* 5C bullet: activates instantly upon reaching the opponent; hitstop 0 -> 10; launches higher
* 5C: motion cancel: startup -10, 39 -> 34; total: 74 -> 64
* 5[c]: motion cancel: startup -10 54 -> 49; total: 89 -> 79
* 6C: motion cancel: 48 -> 39; total: 84 -> 79
* LC bullets: launches grounded enemies; foes hit are not sent away from suwako
* LC, j5C: startup -6
* LC: motion cancel: 43 -> 35; total: 82 -> 74
* j.5C: motion cancel: 41 -> 33; total: 73 -> 65
==== Skills ====
* Ancient Metal Ring: forces knockdown
* Ancient Geyser: damage per hit: 200 -> 230
* Lake of Great Earth: dives earlier (startup is the same); falling attackw: groundbounces; splash: forces knockdown
* Frog God: explodes instantly when opponent is close
* Rain-Calling Frog: untech: 25 -> 45; hitstop + hit vector adjustment
* Toad God: melee invincible at level 1; spellcard cancel removed; forces knockdown
* Ms Longlimbs: becomes active on creation # soku 1.03, damage: 200 -> 240; consistent damage on all frames # bugfix; untech 45 -> 60
* Stone Frog God: forces knockdown; can be cancelled into spellcards while recovering, changed hit vector to allow spellcard links; air versions: startup -9
* Ancient Jade: becomes active as soon as the orbs emerge from the ground
* Moriya God: startup: 20 -> 16 # soku 1.03
==== Spells ====
* Moriya Clear Water: forces knockdown
* Moriya's Metal Ring: forces knockdown
* Master Longlimbs: forces knockdown
* Red Frog of Houei 4: forces knockdown
* Horrid River Jade: initial hitbox: increased size for easier linkings
==== Other ====
* jD1/D2/D3: cancellable into airdashes and attacks
* standing -> crouch: startup 14 -> 3 (hurtbox will not fully move until 14F of crouching)
* crouch -> stand: startup 16 -> 3 (hurtbox will not fully move until 10F of standing)
:::