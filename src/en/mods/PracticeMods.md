---
title: 练习模式Mod使用说明

# 标题
icon: wand-magic-sparkles
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-08
#文章编辑日期
---

## **Lua Labtool v2.5**
Please disable original Labtool mod when using Lua Labtool mod.

**Download:** 

**Install:** 
Download the mod zip file, then drag and drop this zip into `soku/modules/shady-loader` folder,
now you could enable this mod pack via F2 menu, or manually open shady-loader.ini to add PackName=1 to enable,
final step restart the game.

### **Usage:** 
- Working in Practice and Replay mode
- Custom config in `config.lua` file

**in Practice Mode**
- Once you go in practice mode you can instantly starting attack
- Fix Dummy when High Jump not getting full HP
- Hold ESC for 1 sec to see Help link
- Key 1 reset position + character state
  - Direction input(your game keyconfig) + 1: reset as preset  
  - Right_Ctrl + 1: Swap position of 1P and 2P
  - Left_Ctrl + 1: Swap position as mirror
  - Reset Youmu's myon completely, TODO: all chars special reset
- Key 2 save position
  - Multi save slots for different position, won't lose unless  restart game
  - Right_Ctrl + 2: delete current slot (5/8 -> 4/7)
  - Left_Ctrl +2: Disable/Enable everything output showing
  - when press 2 if character is in the air then it will get locked, move or get hit will unlock
    - "Left_Ctrl + F" to lock/unlock 1P
    - "Left_Ctrl + G" to lock/unlock 2P
    - When currently control character is locked, holding F/G/H + direction to move character freely
- Key 3 switch to previous save slot, Right_Ctrl + 3 for next save slot, head tail loop

**in Both Mode**
- Key 4 open/close SKill Menu
  - arrow ↑↓←→ keys(menu direction) to select and level
  - A key(Dash) to change alt skill
  - 4 again to close SKill Menu
  - Right_Ctrl + 4: reset now controlling character's skill to custom default (like Youmu has a236 by default)
  - Left_Ctrl + 4: 
    - in Practice Mode, it's to reset skill to fully default
    - in Replay and VS-PLAYER Mode, it's to switch 1P/2P's overview, to access Skill menu or adv frames
    - press F11 to pause and press 4 to change skill, then press 4 again to close skill menu, then press F or G to takeover, if you want back to normal, hold Q to rewind that you haven't changed skill
  - Support SOKU2 (also Tewi and Mamizou)
- Key 5 open/close showing color state on character
  - grazing - Transparent
  - melee invul - Blue
  - able to get countered - Red
  - unable to block - Purple
- Frame advantage and Gap
  - High Jump Cancel advantage is off by default
  - When airetech is done, show advantage and start count Gap

**Controller to Key (off by default, it may cause random crash currently)**
- globally, start key (Key8) works like ESC, custom in `config.lua`
		Start = ESC
- Practice Mode
		LeftStickButton = Reset Position
		RighStickButton = Save Position
		RightTrigger = Skill Menu
		LeftTrigger = Change Save Slot
- Replay Mode
		LeftStickButton = Takeover_1P
		RighStickButton = Takeover_2P
		RightTrigger = Rewind/Quit Takeover
		LeftTrigger = Retry

**See Also:**
BetterDebugInfo(F8) mod: https://discord.com/channels/167593473854144512/1354448046569689231/1355084943461715990

## 原版练习模式功能

- F1 木桩减 1000 血（满血10000）
- F2 卡槽补满
- F3 卡槽清空且重置卡组
- **注意：木桩的卡组是你 1P 自己机签的卡组**

::: warning 按 F1、F2、F3 这些键都没有效果可能是因为 Fn Lock 的问题

[**百度搜索“Fn锁定”**](https://www.baidu.com/s?ie=UTF-8&wd=Fn%E9%94%81%E5%AE%9A)

一般按 `Fn + ESC` 或者 `Fn + 空格` 可以解除锁定，或者按 `Fn+F2`，`Fn+F3` 来使用热键
:::

## PracticeEX
<!--
::: tip  2023-12-8 已更新 PracticeEX 高级练习模式汉化版

:::
-->

- 视频链接 —— [**Practice-EX 高级练习模式汉化版 使用示例**](https://www.bilibili.com/video/BV1894y177s6/)   

### PracticeEX 功能键说明
- 默认按 `ESC` 或`机签的暂停键`调出高级菜单

![默认按 `ESC` 或`机签的暂停键，图中例子为小键盘减号`调出高级菜单](https://bu.dusays.com/2024/02/29/65e0a4e773202.png =400x)

- 默认是按 `HOME` 键录制动作
- 按 `INSERT` 键播放动作
- 按 `DELETE` 键新建一个空白动作并切换过去
- 按 `PAGE UP` 键切换下一个动作
- 也可以在`录制的动作`这一页中上下选择然后按 `确认键（体术攻击键，默认是 Z）` 来切换到那个动作

::: tip 快捷键设置，可以查看和修改各个热键


![切换到 `快捷键设置` 页面，可以查看和修改各个热键](https://bu.dusays.com/2024/10/26/671ca7ed905ed.webp =500x)
:::

### 给木桩录制动作和播放

一般情况下，右上角没有指示或者是显示黑色背景的“就绪”

黑色“就绪”时，按 **录制动作键（HOME）**，右上角会显示黄色背景的“控制木桩中”，就可以开始控制木桩的角色
黑色“就绪”时，或者切换到想要的动作按 **播放动作键（INSERT）**，右上角变为绿色，并且木桩开始执行动作

黄色“控制木桩中”时，再按 **录制动作键（HOME）**，右上角就会变成红色“录制中”并开始记录时间（帧数）和按键；
黄色“控制木桩中”时，按 **播放动作键（INSERT）**，就会取消控制木桩，返回黑色背景“就绪”状态，控制 1P 角色

红色“录制中”时，按 **录制动作键（HOME）**，就会 **结束录制并保存覆盖**，返回黑色“就绪”状态，控制 1P 角色
红色“录制中”时，按 **播放动作键（INSERT）**，会 **结束录制而不保存**，并返回黄色“控制木桩中”状态，方便录制失误时重新录制动作

![可以在“录制的动作”这一页中上下选择然后按 确认键（体术攻击键，默认是 Z） 来切换到那个动作](https://bu.dusays.com/2024/10/26/671ca7c109a7e.webp =450x)

### PracticeEX 已知的 BUG 注意
<!-- 
- ✅ ~~`不要设置随机空中受身 Random Airtech，会让游戏崩溃`~~ 
练习模式汉化 2.1.1 版本已修复 “空中受身为Random随机时崩溃” 的 BUG，可以正常使用随机受身了 
 -->
- ❌ **录制动作超过 100帧 的话，不要使用精简功能，否则会有无法精简且动作重复翻倍的 bug，如 110F -> 220F**

- ❌ **注意在录制木桩动作操作2P的时候，不要按F7。**
F5、F6、F7在原本练习模式中就是用来给手柄2P录制重播动作的，F5开始录制 F6结束录制 F7播放动作，
所以在用插件录制时按F7会导致无法移动，此时按F5或F6即可恢复

- ❌ **木桩设置一直大跳或者一直做某些动作，而无法进入空闲待机状态时，木桩不会回复血量。**
解决办法：此时可以让木桩在浮空时按大键盘2保存木桩位置，然后再按1恢复位置，可以让木桩落地前处于待机状态而回血

- ❌ 偶尔会出现右上角有控制栏但是却调不出菜单的情况，需要重开游戏

- ❌ 偶尔会出现菜单卡住，然后过一会儿恢复，按的按键一次性全出来的情况，忍受一下

- ❌ 不要既设置防御时DD又设置防御后执行动作（如灵击、4A等），否则会在防御瞬间触发DD又触发动作




## F8信息面板 lua mod

![](https://bu.dusays.com/2025/02/12/67ac17145127f.jpg =800x)


::: important 点开 SokuLauncher 启动器，先更新启动器本体，然后更新 Shady-loader，进入游戏主菜单按 F2，往下拉可以下载
:::


::: info 使用说明

进入对局内按 F8 即可开关信息面板

相比原先的 F6 面板的优点：信息更全，不吃性能，没有内存泄漏bug
:::

## Lua Labtool (0-练习模式木桩复位和锁定)
::: important 点开 SokuLauncher 启动器，先更新启动器本体，然后更新 Shady-loader，进入游戏主菜单按 F2，往下可以看到并下载
:::
::: warning 


如果你从未更新过 >=2.8.0 的版本，请打开 `shady-loader.ini` 文件，把最底下的部分，改为如下的代码，否则会看不到国内的 mod 源
```
[Options]
autoUpdate=1
useLoadLock=1
enableLua=1
viewfont=simhei
remoteConfig=https://gitee.com/sanhuizhuan/SokuMods/raw/master/config.json
```

:::



**已取代和优化原本的 Labtool mod**

![Lua Labtool (0-练习模式木桩复位和锁定)](https://bu.dusays.com/2025/04/28/680f50560aa25.jpg =640x)

:::: info 使用说明

注意，这些热键都是 **大键盘** 的数字

::: tip 视频演示

- [F2 练习模式 mod 更新了必杀技菜单【非想天则 Lua Mod】](https://www.bilibili.com/video/BV1NELazsEe4/)

- [F2 更新了一些实用 mod 望周知【非想天则 Mod】](https://www.bilibili.com/video/BV1V6dXYQEJK/)

:::

- 只在练习模式生效
- 如果你开了 labtoll 小黑框，需要打开 labtool.ini 修改当中的热键，去掉 1 2 4 5 的热键，否则按 4 的时候会重置必杀
- 按 2 保存位置，同时锁定在空中的角色
- 五等分位点预设：方向键 + 1（左，左下，下，右下，右，上。六个方向）
- 角色进行操作或着陆后会解除锁定
- 空中锁定后，左 Ctrl + F 解锁/锁定 1P，左 Ctrl +G 解锁/锁定 2P，锁定状态会影响复位后是否处于锁定
- 空中锁定后，按住 F G H 然后按角色的方向键调位置，F最快，H最慢
- 1P 2P 互换位置：右 Ctrl + 1
- 以中轴对称交换：左 Ctrl + 1
- 按 2 键保存当前双方位置，若已存在相同的位置则切换过去那个槽位，否则在当前槽位后新增一个槽位并保存当前位置，如 4/7 -> 5/8
- 右 Ctrl + 2：删除当前槽位并切换到前一个槽位，如 5/8 -> 4/7
- 左 Ctrl + 2：开关复位槽、print输出、有利帧等的显示
- 按 3 键向前切换一个槽位，右 Ctrl + 3 向后切换一个槽位，首尾循环
- 若当前没有槽位，自动获得一个默认坐标槽位
- 复位槽内容会一直保存直到重开游戏
- 可以复位妖梦的麻薯，结束幽冥状态，结束黏附对手
- 右Ctrl + 4 打开必杀技菜单，左右控制光标，上下控制等级，按 Z 改卡，按 X 或者再按一次右Ctrl + 4 关闭必杀技菜单
- 按 4 重置当前控制角色的必杀技（部分角色的重置必杀技进行了相应的调整，如妖梦的236反射直接重置为改卡磷气斩，且每次新进入游戏也会立即修改）
- 按左Ctrl + 4 修改当前控制角色为全部0级的默认必杀
- config.lua 内可以设置各种快捷键和数据，以及重置必杀技
- 增加了优劣帧和缝隙的计算，且优化了很多原版 Labtool 的逻辑和修复 bug
- “1F 缝” 是最低值，再小就是无缝了
- 检测到大跳会回满血，修复 EX 的 bug

::::


<!-- 
## Labtool（黑框）

![这个黑框程序就是 Labtool mod](https://bu.dusays.com/2024/01/21/65aceba6bc3b4.webp =600x)

### Labtool 按键说明

~~1. **按 1 可恢复双方位置**~~
~~控制 1P 时，==按住 “4 1 2 3 6（你的游戏键位）” 这五个方向的同时，再按 1==，就可以将自己和木桩一起瞬移至五等份点位置，很方便~~
~~[Q：木桩或者自己按 1 复位后，是卡死的状态，或者我想让角色直接恢复普通姿态怎么办](/mods/PracticeMods.html#%E6%9C%A8%E6%A1%A9%E6%88%96%E8%80%85%E8%87%AA%E5%B7%B1%E6%8C%89-1-%E5%A4%8D%E4%BD%8D%E5%90%8E-%E6%98%AF%E5%8D%A1%E6%AD%BB%E7%9A%84%E7%8A%B6%E6%80%81-%E6%88%96%E8%80%85%E6%88%91%E6%83%B3%E8%AE%A9%E8%A7%92%E8%89%B2%E7%9B%B4%E6%8E%A5%E6%81%A2%E5%A4%8D%E6%99%AE%E9%80%9A%E5%A7%BF%E6%80%81%E6%80%8E%E4%B9%88%E5%8A%9E)~~

~~2. **按 2 可记录双方当前位置**，练习连段和微调位置(逐帧走路卡距离)等用很方便~~


::: caution 保存复位功能已被取代！
保存复位功能已被 [**练习模式木桩复位和锁定 lua mod**](mods/PracticeMods.html#%E7%BB%83%E4%B9%A0%E6%A8%A1%E5%BC%8F%E6%9C%A8%E6%A1%A9%E5%A4%8D%E4%BD%8D%E5%92%8C%E9%94%81%E5%AE%9A-lua-mod) 优化取代！
:::

1. **按 4 可将 1P 的必杀恢复为初始默认状态**

2. **按 5 可启用状态颜色显示**（可被康状态红色，擦弹状态透明，硬直状态紫色，无敌状态蓝色）
### Labtool 黑框内信息说明
:::: info 黑框内信息说明

- Gap 的意思是缝隙，没显示 Gap 说明是无缝，或是缝太大
::: warning 注意：Gap：0F 表示 1P的两次攻击之间有 1F 缝，不是无缝。0 就是 1F 缝，1 就是 2F 缝，以此类推
:::
- P1 is +5F 表示 1P有利 5F，最速出手7F招中间有2F缝
- P1 is -6F 表示 1P不利 6F，可被6F的招确反
- P1 is [+24F] 表示 1P大跳取消后有利 24F
::::
### Labtool Bug 注意
::: caution
- ❌ 不要点窗口右上角的 X 关掉这个 LabTool 的黑框，他是和游戏共生的，
你点了 X 的话，游戏也会被关掉，你不想看它可以点最小化，或者[关掉 Labtool 这个 mod](/mods/WhatsMod.html)

- ❌ 若有时候切回游戏发现莫名卡住操作不了，
很有可能是因为 LabTool 的控制台窗口的”属性“里开启了“快速编辑模式”，
然后你选中了窗口出现光标闪烁，会导致窗口不能刷新显示新的文字，游戏就会卡住等待
**【解决办法】：右键取消光标选中，在黑框的标题栏右键-属性-关闭快速编辑模式，即可恢复正常**
:::
 -->




## ReplayInputView



::: info 使用说明
- 单机和观战下才能使用，网战中不能使用

- F4 显示 **判定框** 以及 **受身时间条**

- ~~F6 显示帧数、位置、速度等信息~~ 【F6 已被 [BetterDebug(F8) lua mod](/mods/PracticeMods.html#betterdebug-f8-lua-mod) 取代】

- F7 显示**按键输入**

- F9 减慢游戏速度
❌ 不要在 F11 暂停时按 F9，会导致游戏崩溃

- F10 加快游戏速度

- F11 暂停，**F12**下一帧。即 **逐帧操作** 
❌ 不要在观战时按 F9 F10 F11，会导致不同步

- **绿框是受击判定**
绿框变**蓝色**代表此时可被康
绿框变空心代表此时有体术无敌状态（不一定是完全无敌，也不是所有无敌状况都会空心显示）

- **红框是攻击判定**
某些招数或者弹幕会有判定残留显示或者假判定

- **黄框是占位判定**
不可重叠，且相当于投技的受击判定
:::

### 如何逐帧输入指令

- **在暂停状态下，按住某个键，再按 F12 即可逐帧输入按键**
❌ 注意有可能遇到 **三键冲突** 的情况，会导致按不下去 F12，此时需要两个键盘或者软键盘或者改键位

::: tabs
@tab 例1：逐帧输入 23B
先按住 6 不松，再按下 F12 下一帧

接着按住 2 不松，再按下 F12 下一帧

随后按住 3 以及 B 不松，再按下 F12 下一帧（若冲突键位了可按住 3 下一帧再按 B 下一帧）

@tab 例2：逐帧输入 22B
先按住 2 不松，再按下 F12 下一帧

接着什么都不按，再按下 F12 下一帧

随后按住 2 以及 B 不松，再按下 F12 下一帧
:::

<!-- 
::: details F6（已被 BetterDebug(F8) lua mod 取代）
![F6 数据含义](https://bu.dusays.com/2024/01/21/65acec0c1ddb1.webp =600x)


![F6 数据含义-英文](https://bu.dusays.com/2023/10/30/653e91c4c5846.png =640x)

::: details 关于"1hst"和"2hst"这个值

hst 是 hit state 的 缩写，暂时只知道触发和变化的规律，并不知道有什么实际意义

"1hst"和"2hst"值变化规律：
- 游戏初始状态为“0”；
- 变成“0”的条件：开始出招；体术挥空；进入防御（但是破防和挨打不变）；
- 变成“1”的条件：体术命中；成功丢出弹幕；青蛙成功遁地；
- 变成“2”的条件：对手防御了自己的体术；
- 一些例外情况，尤其是SC，如：青蛙四卡蛙狩，启动时会置0，但是后续无论如何也不会变成1或2；

青蛙L姿水蛙神不能取消的Bug：
当"1hst"或"2hst"值为“0”的时候，1P或2P青蛙L姿（荷叶）214改水蛙神炸弹就不能跳跃取消或者出招取消，为“1”或“2”时可正常取消

::: -->

## ReplayTakeover（Rep接管）

- [**【非想天则Mod】Rep接管 演示（Replay Takeover）**](https://www.bilibili.com/video/BV15E421j7T2/)
### ReplayTakeover（Rep接管）
::: info 什么是 ReplayTakeover（Rep 接管）
顾名思义，就是使玩家可以在观看 Replay 时接管其中一个角色进行操作的 mod，可以用来试验某一时刻下的各种操作可能性

- 比如自己在一个很不寻常的地方偶然摸到了一下对手，本可以连段但是没有抓住机会，
如果想在练习模式里复刻场景的话非常麻烦，但是现在可以在Replay回放时，在那个地方重新接管，
然后再次尝试能否连段，以及能否达成更加完美的连段；

- 又或者自己被对手压制，本知道他这一招有破绽或者是诱饵，但还是错失了机会，
那么也可以在Replay回放时，从那个场景直接复盘再来，
验证自己的想法到底能不能行得通，下次遇到类似情形就更加得心应手

:::

### 如何上手使用 Rep 接管
::: info 如何上手使用 Rep 接管


进入 Replay 菜单，选择 Replay 开始播放；也可以双击 rep 文件播放


下面这QFGR四个接管键都可以在 `giuroll.ini` 内自定义
- Q 倒带，退出接管 
- F 接管 1P （会在左侧显示倒数条）
- G 接管 2P （右侧显示倒数条）
- R 重试
------------
- F11：暂停
- F12：下一帧
- C A S D：二 三 四 五 倍速

左下角显示输入延迟，可以模拟网战环境下的输入延迟，可以在 `giuroll.ini` 内设置默认延迟，和网战一样用默认的大键盘加减号调节

![按 F 接管 1P（会在左侧显示蓝色黄色的倒数条）](https://bu.dusays.com/2024/10/26/671ca78e98e01.webp =500x)
:::

### Rep 接管使用技巧
::: tip Rep 接管使用技巧

1. 按 F11 暂停，然后按 功能键+F12，即可逐帧操作。
如逐帧倍速快进，逐帧倍速倒带，卡准帧再接管

2. 在 1P 操作模式中的时候，再按 G 去操作 2P，可以保留刚才人工输入了的 1P 按键状态而进入 2P 操作模式；
且此时在 2P 操作模式中的时候，再按 F 去操作 1P，则会保留刚才玩家人工输入了的 2P 按键，再进入 1P 操作模式
（是从最开始的激活点开始而不是按 F 的时刻，最开始的 1P 按键被丢弃）

:::


::: info Rep接管 适合什么需求



1. 针对在练习模式很难复现的某一复杂特定情况下，可以很方便地进行无限的尝试与探索研究
2. 可在一方接管进行对策的情况下保存一次，然后再操控另一方角色进行反对策


:::

::: info Rep接管 不适合什么需求


1. 无法满足“影子对手”的需求。
你只能针对某一小段时间内的特定情况进行单方面的对策，在操控一方角色时，
另一方角色只会按照rep内既有的指令机械行动，所以一旦脱离局面，就进入不同步了

2. 无法进行完整的复盘重玩，理由同上

3. 接管时会影响随机数种子（RNG）而可能导致复盘不如意


:::


::: info 目前这个 Rep接管 Mod 的待改进点


1. 倒计时和过渡式接管

2. 可以增加 “双人接管”

3. 可以增加 rep 模式内的练习模式

4. 保存玩家接管的输入(为新rep文件)，从而可以多次进行对策与反对策


:::


## 练习模式使用技巧

### 如何在逐帧时设置练习模式菜单，ESC没用
::: important 
把 **开关菜单键** (默认 ESC) 改为其他按键，或者按 **机签的暂停键**，就可以在 F11 暂停逐帧的同时，调出练习菜单来设置
:::

例如你用妖梦 AAA 6A打木桩防御，你想让木桩在 6A 之前的那个缝里做动作，
而不想在 AAA 这个缝里做动作，由于两个缝都是 1F 的缝没法设置木桩延迟。

这个时候就可以先设置木桩不执行任何动作，然后按 AAA，木桩防御第三下A时，
按 F11 暂停，然后按自己修改的 **开关菜单键** 或 **机签的暂停键** 就可以在 F11 暂停时打开菜单，
给木桩设置动作，再关掉菜单，按 F12 下一帧或者按 F11 取消暂停，即可实现目标了

<!-- **此外这样做也可以在 ESC 时调出原版菜单，方便快速返回主菜单** -->


### 录制木桩最速执行动作（如升龙）

::: caution  自带的那个 “防御后执行动作” 会有点问题，做用卡和执行动作会慢 1F ❌
:::

- 我们想要木桩最速行动，可以使用防御时刷键的方法：
就是切换到 “防御时执行动作”，并搭配木桩延迟，可以实现模拟防御后刷键预输入的情景，通过预输入我们就可以让木桩最速了
  - [**视频演示：【非想天则】练习模式EX - 让木桩最速出招的录制技巧**](https://www.bilibili.com/video/BV11p4y177Ng/)

::: tabs

@tab 情况一：最速 5A、用卡 等（需要一帧输入）

1. 按 录制热键（默认是 HOME） 切换到操控木桩模式，此时右上角显示黄条

2. 按 F11 暂停，然后按 录制热键（默认是 HOME），然后右上角显示红条

3. 按住 A 或者 `用卡键`，然后在此基础上，按 F12 下一帧

4. 按 F11 取消暂停，不要按键，差不多走到十几帧的时候就可以再按一次 录制热键（默认是 HOME），就是结束录制并保存

5. 按 播放热键 让它播放一次看看，一般是没问题的

6. 在 木桩触发设置菜单里，选择 地面防御后 -> 动作，Delay 设置为 **0F**

@tab 情况二：最速 623 或 236 等（需要三帧输入）

1. 按 录制热键（默认是 HOME） 切换到操控木桩模式，此时右上角显示黄条

2. 按 F11 暂停，然后按 录制热键（默认是 HOME），然后右上角显示红条

3. 按住 6，然后在此基础上，按 F12 下一帧

4. 按住 2，然后在此基础上，按 F12 下一帧

5. 按住 3 和 B，然后在此基础上，按 F12 下一帧 `（或者3 和 B 分开，这样需要录四帧，下面的 Delay 值也要调到 4F）`

6. 按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 录制热键（默认是 HOME），就是结束并保存录制了

7. 按 播放热键 让它播放一次看看，一般是没问题的

8. 在 木桩触发设置菜单里，选择 地面防御后 -> 动作，Delay 设置为 **3F**


@tab 情况三：最速 DA(66A) 等（需要三帧输入）

1. 按 录制热键（默认是 HOME） 切换到操控木桩模式，此时右上角显示黄条

2. 按 F11 暂停，然后按 录制热键（默认是 HOME），然后右上角显示红条

3. 按住 6，然后在此基础上，按 F12 下一帧

4. **什么都不按**，然后在此基础上，按 F12 下一帧

5. 按住 6 和 A，然后在此基础上，按 F12 下一帧

6. 按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 录制热键（默认是 HOME），就是结束并保存录制了

7. 按 播放热键 让它播放一次看看，一般是没问题的

8. 在 木桩触发设置菜单里，选择 地面防御后 -> 动作，Delay 设置为 **3F**
:::

### 如何让木桩一直朝着一个方向后退，方便练习打逆

自己和木桩在左板边并使用Labtool保存位置，然后设置木桩站位是右板边，这样木桩就会一直往右板边走了，再用Labtool重置位置就可以反复练习了，但是不能练习打逆的命中和打防，木桩要么总会防御要么总会命中


### 木桩或者自己按 1 复位后，是卡死的状态，或者我想让角色直接恢复普通姿态怎么办


1、让卡死的角色被打一下，就能解除卡死

2、让木桩或者自己在空中下落快要落地时按 2 保存位置，再按 1 复位就不会被卡死，也可以重置角色动作，跳过角色的倒地以及出招等


<!-- 
## 另一个MOD-可联机的练习模式-AdvancedPracticeMode
::: info
[**可联机的练习模式 - AdvancedPracticeMode**](/mods/AdvancedMods/AdvancedPracticeMode.html)
:::
 -->


