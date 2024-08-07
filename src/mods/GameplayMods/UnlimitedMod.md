---
title: UnlimitedSoku改版Mod

# 标题
icon: circle-info
# 图标
order: 5
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---
## Unlimited mod简介
::: warning
**这是一个改版的Mod，对游戏系统和角色招数数据进行了大量修改**

**注意，此 mod 需要双方一起使用且版本相同**
:::
::: tip 下载
**[**可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了**](/about/)**
:::
::: info 试玩视频
[非想天则 Unlimited MOD 浅玩一下 紫和西瓜 (20220423 录播)](https://www.bilibili.com/video/BV1a5411m7Wy/)  
https://space.bilibili.com/357511007/channel/collectiondetail?sid=382168

.　　　　![](https://bu.dusays.com/2023/08/24/64e701d52032c.gif =380x) 　　![](https://bu.dusays.com/2023/08/24/64e702fc06592.gif =380x)
:::


::: info 安装与使用 Unlimited Mod
1、 `NextSokuLauncher.exe` 放到和 `th123.exe` 同目录，
2、 `NextSoku文件夹` 放到`th123/modules`文件夹内，
3、 接着把 `NextSoku.dll` 这个 mod 启用，==**并把 SOKU2 禁用，否则会有问题**==

[**如何开关配置mod**](/mods/WhatsMod.html) 

4、 开启mod后保存配置，==不要直接启动游戏==，打开`NextSokuLauncher.exe`在页面选择最下面那项 Unlimited ，右上方可选择机签，==**右下方 Options 的三个框全都不要勾选！**==

![注意，要打开 NextSokuLauncher.exe 来启动游戏才能玩 UnlimitedMod](https://bu.dusays.com/2023/08/20/64e21c9299e26.png =550x)

5、 启动成功的话，游戏标题栏会多一个[Unlimited 3.6.5] （开了giuroll的话会一闪而过）
6、 **要切换回正常游戏只需要把 `NextSoku.dll` 这个 mod 禁用并用平常的方式启动游戏就OK**

:::  warning
NextSokuLauncher.exe 打不开的话，先检查 DX 修复和 C++ 组件修复

:::



## **Unlimited mod详细修改说明(版本 3.65)**

### **总体修改**
- 取消 Limit 出圈限制
- 取消 Smash / Lift / 必杀取消 / SC取消 等伤害修正，虽然伤害面板上依然会显示，但是实际上没有进行伤害修正
- 所有招数都会有额外 18% 的伤害增益
- 所有招数都会有额外 10F 的追击时间
- 给角色增加了待机动画效果
- 取消链系统调整
  - 有连点系近A的角色 可以在 第二下AA 之后用 2A 取消，**即 连点AA -> 2A**
 （像 **妖梦、灵梦、文** 这种即为连点系近A角色；**UU、高达、天子** 这种不行；**例外：小町 第一下近A 后可以用 2A 取消**）
  - 没有连点系近A的角色 可以在 2A 之后用 近A 取消，**即 2A -> 近A**
 （像 **妖梦、灵梦、文** 这种不行；**UU、高达、天子** 这种即为非连点系近A角色；**例外：小町不可用 近A 取消 2A**）
  （注：妖梦既可以AA -> 1A也可以AA -> F2A，取决于按2A时的距离）
  - 近A连打的最后一下可以换成 3A 或 6A
  - 近A连打的任何一下都可以被 B系弹幕 以上取消

 **已知的 Bug** 
- 龙星可能造成不同步（？
- 某些招数攻击是固定会出圈的（不影响游戏）
- 以及某些角色相关的bug，详情查看具体角色页
  - 妖梦折服无间升级后帧数数据恢复为原版了

### **1、灵梦**

**==== 普通技 ====**

- 6D：最终的持续速度 8 -> 9（萃梦想水平）
- AAA：前进变快，不容易断连了
- AAAA：**追击时间无限**，新招数动作
- DA：全体：36F -> 34F（收招硬直 -2）
- DC：追击时间增加 40 -> 60
- JA：追击时间增加 25 -> 30
- J6A：**追击时间无限**，伤害 -50
- J2A：**不打康也会弹地**
- J8A：追击时间增加 45 -> 60
- 5B：移动取消: 29 -> 25; 发生: 15 -> 14 （与 2B, 6B 相同）
- 6B：移动取消: 28 -> 25 （与 2B 相同）
- 2B：**弹幕可以全版移动** （与绯想天相同）
- C弹幕：追击时间增加 25 -> 30，命中hitstop增加 5 -> 10

**==== 必杀技 ====**

- 原236 博丽护符：追击时间增加 30 -> 35，命中hitstop 5 -> 10，B版会在离灵梦更近的地方生成弹幕，C版则会在更远的地方生成弹幕
- 236改 妖怪破坏者：伤害增加 90 -> 120；命中后弹墙会旋转
- 原623 升天脚：B版追击时间无限，**1级就有体术无敌**，移除了打康的能力（依然可以被别人康）；C版追击时间无限
- 623改 抄地升天脚：**2hit：未挥空时，可以随意移动取消或出招取消（不能直接2hit后拉防）**；3hit：追击时间无限
- 623改 祈雨之仪：追击时间无限，挥空不可取消，伤害 300 -> 400，Rate修正 95% -> 96%，后坐力调整（版中更好用了）
- 原214 警醒阵：追击时间增加 40 -> 45；**可以反射对手的弹幕**；`不会被擦掉消失了`（原文这么写的但是实际还是会被擦掉消失）
- 214改 紧缚阵：追击时间增加 40 -> 45，发生 -10
- 214改 常置阵：追击时间增加 40 -> 45；**地面攻击后不会将对手击飞**
- 原421 亚空穴：B版不打康也可以弹地，C版收招硬直减少，不会击飞对手，命中可接后续（B版正防-5，C版正防-4，命中+14）
- 421改 刹那亚空穴：命中会击飞对手，追击时间无限，位移后可被康窗口-10，硬直+14（**落地前动不了，不能防不能出招不能Dash，着地了也有15F硬直**）；B版空中地面启动体术无敌
- 421改 封魔亚空穴：**B版启动瞬间即可当身体术，C版启动瞬间即可当身弹幕**

**==== SC符卡 ====**

- 一卡 珠符「明珠暗投」：追击时间无限
- 二卡 灵符「梦想妙珠」：追击时间无限
- 二卡 宝符「阴阳宝玉」：追击时间无限
- 二卡 梦符「封魔阵」：启动没无敌了，可以大跳取消 **（依然烂到爆）**
- 三卡 结界「扩散结界」：追击时间无限，削灵 0.15 -> 0.25，伤害 500 -> 400，命中击飞向量调整
- 五卡 神灵「梦想封印」：不管远近的大小弹都是800伤害了
- 五卡 「梦想天生」：**罗曼取消，超级加帧**，7下激活后伤害降低（打满约 3500）但是削灵依然恐怖 （注意：rate打的太低会导致对手有机会受身）

### **2、魔理沙**

**==== 普通技 ====**

- 飞翔/空中冲刺：新的贴图动画
- 远A：伤害都为450（修复两段判定伤害不一致的bug）
- AAA：前进变快，不容易断连了
- 6A：**即使在空中，接触即可必杀技取消**
- JA：追击时间增加 25 -> 30
- J6A、HJ6A、HJ2A：**追击时间无限**
- J8A：追击时间增加 45 -> 60
- J2A：发生加快 16 -> 13（等于J6A的发生速度）
- DA：**现在是下择了，打蹲防**
- DB：**可被必杀技取消**
- DC：不打康也会弹地
- B系弹幕：命中hitstop 5 -> 12，伤害 -50
- 6C：修正rate 98% -> 96.5%

**==== 必杀技 ====**

- 原236：**各种星星都为rate 96%**
- 236改 绿光：**激光线也带攻击判定了**
- 236改 激光：移动取消加快，追击时间无限
- 原623升龙：**延长无敌时间，不会再互康了**；追击时间无限
- 623改 旋转扫把：体术判定，追击时间无限，着地前全程硬直，接触后可 SC 取消
- 623改 防空炮：判定增大
- 原214：追击时间无限
- 214改 星炮：追击时间无限，击飞向量调整
- 22改 魔废再利用炸弹：**不会炸到魔理沙自己了**

**==== SC符卡 ====**

- 一卡 星符「Meteoric Shower」：可以跳跃取消了
- 二卡 魔符「Stardust Reverie」 钻头：**不会把对手击飞到背后了**
- 二卡 光符「Luminous Strike」：**追击时间无限**
- 二卡 仪符「Orrery's Sun」：**罗曼取消**
- 三卡 星符「Escape Velocity」 大升龙：追击时间无限
- 三卡 星符「Gravity Beat」：伤害 3000 -> 1800
- 五卡 彗星「Blazing Star」：将对手向前击飞而不是向上

### **3、咲夜**

**==== 普通技 ====**

- AAAA：**追击时间无限**
- 2A：发生 -2
- 3A：击飞得更高
- 6A：**发生 -2（F5A命中不康也可以直接接上6A了）**
- JA：追击时间增加 25 -> 30
- J6A：**追击时间无限**，伤害 -50
- J2A：伤害 -100
- J8A：追击时间增加 45 -> 60
- DB：**追击时间无限，可必杀取消**
- DC：击飞角度调整，减少向前的量
- B弹幕：伤害 -10，Rate 95% -> 97%，追击时间增加 25 -> 35
- C弹幕：追击时间增加 45 -> 60

**==== 必杀技 ====**

- 原236：追击时间无限
- 236改 离剑之见：**丢出时静止的刀也有攻击判定**，伤害增加 150 -> 200，追击时间增加 40 -> 45，削灵增加 0.125 -> 0.15
- 236改 绿刀：取消后刀不消失
- 原623：**追击时间无限**，空中版伤害 +100，攻击和着地硬直时可用 SC 取消
- 623改 星舞剑：B版 回灵冷却时间缩短 120 -> 60；C版 可以大跳取消了，身上的刀被打不消失，飞出的刀 blockstop 增加
- 623改 刀圈：攻击判定加快，攻击/移动取消加快 B版33 -> 29 C版38 -> 33，削灵 0.1 -> 0.15，增加 blockstop: 0 -> 5，收招硬直 -12
- 22改 当身：**启动瞬间即可当身**，收招硬直 +10，空中版不可取消
- 22改 分身：B版 发生 -6，收招硬直 -9，追击时间增加为 120，击飞角度调整更易于连段；C版 追击时间无限

**==== SC符卡 ====**

- 三卡 四卡 伤魂：追击时间无限
- 四卡 幻葬：发生 -10，每Hit伤害调整为 140

### **4、蕾咪**

**==== 普通技 ====**

- AAA：第一Hit攻击判定增大，A连打不会断连了
- AAAA：新动作，**追击时间无限**
- 3A：新动作
- JA：追击时间增加 25 -> 30
- JAA：命中地面对手也会弹地了
- J6A：**追击时间无限**
- B弹幕：Hitstop 增加 5 -> 10
- C弹幕：伤害 120 -> 100，Rate 97% -> 98%

**==== 必杀技 ====**

- 原236：**追击时间无限**
- 236改 爪子：B版第3Hit 追击时间无限；C版第3Hit Hitstop增加，击飞高度增加，便于后续连段
- 236改 魔术手：击飞弹墙旋转，便于后续连段
- 原623：**追击时间无限**
- 623改 吸血：发生加快 B版 33 -> 9，C版 38 -> 25；命中后续有利帧增加
- 623改 火箭炮：弹幕判定增大(可攻击地面对手)，Hitstop增加 3 -> 25，Rate 93% -> 95%
- 214改 锁链：追击时间增加
- 214改 叉子：**追击时间无限**
- 原22：**追击时间无限**
- 22改 轰炸机：**追击时间无限**
- 22改 手里剑：发生加快 28 -> 20，跳跃取消加快 44 -> 22，Hitstop增加

**==== SC符卡 ====**

- 二卡 小夜王：**发生加快为 10F(可4A接)，追击时间无限**，Rate 增加
- 二卡 小神枪：追击时间无限
- 三卡 小不夜：追击时间无限
- 四卡 大爪子：发生速度加快 81 -> 42，收招硬直 -30，击飞角度调整为弹地便于后续连段，追击时间无限，伤害 4250 -> 3500，调整为可防御
- 四卡 大神枪：追击时间无限
- 四卡 千年吸血鬼：**罗曼取消，有利帧巨大**

### **5、小爱**

**==== 普通技 ====**

- AAA：提前向前位移，A连打不容易断连了
- 蓄力AAAA：伤害 1250 -> 1500，硬直 -12（正防 +3）
- 6A：**追击时间无限**
- 蓄力6A：**追击时间无限，不可空防**
- 2A：发生 -1
- 3A、JA、J2A：**出招时扩展的受击判定绿框减少**
- JA：追击时间增加 30 -> 35
- J6A：**发生加快 15 -> 13，追击时间无限，攻击后降落得更快，消除着地硬直**
- J2A：发生加快 21 -> 17，追击时间增加 50 -> 60
- J8A：持续帧减少 65 -> 56，追击时间增加 45 -> 60
- 2B：发生加快 16 -> 13
- B系：**即使跳取消或出招取消，B人偶也不会消失**；弹幕伤害 100 -> 90
- JB、J6B：后摇硬直增加
- C系：**一局结束时若是爱丽丝自己胜利，场上设置的人偶不会消失**
- 4C：移动取消加快 34 -> 28
- J2C：移动取消加快 28 -> 20
- **新增动作 J4C**：移动取消 28F

**==== 必杀技 ====**

- 原236：追击时间增加 50 -> 70
- 236改 伏兵：移动取消加快 43 -> 34
- 原623：**人偶碰到对手时就会爆炸**而不是着地后才爆炸；B版启动时体术无敌
- 623改 大江户：**场上可同时存在多个人偶**
- 原214：增加 Blockstop 0 -> 10
- 214改 千枪：追击时间无限，收招硬直 -6
- 214改 弓兵：追击时间无限，小爱不被击飞时不消失，移动取消加快 B版37 -> 29，C版 45 -> 37
- 原22：**追击时间无限**
- 22改 折射：所有等级的弹幕擦弹耐性都调整为[3, 5, 7, 9] -> 10
- 22改 SP：追击时间无限

**==== SC符卡 ====**

- 一卡 小炸弹：追击时间无限，发生加快 55 -> 45，伤害 2250 -> 1750
- 二卡 战符：削灵 0.75 -> 1
- 二卡 注力：追击时间无限，发生加快 地面版 22 -> 16，空中版 24 -> 18
- 二卡 上海人偶：**追击时间无限，可跳跃取消**
- 三卡 文乐：磨血伤害增加，爆炸伤害 500 -> 1500
- 四卡 荷兰人偶：发生 -14，收招硬直 -19
- 四卡 蓬莱人偶：追击时间无限，削灵 0.66 -> 1.33
- 四卡 大千枪：Rate 98% -> 98.5%
- 四卡 战符：发生加快 37 -> 24，Rate 95% -> 97%
- 五卡 旅鼠：伤害减少

### **6、图书**

**==== 普通技 ====**

- AAA：追击时间无限，防御削1灵，命中音效修改
- 6A：发生加快 2F，和 3A 一样快，击飞角度修改，可以弹地
- JA：追击时间 25 -> 30，Rate: 94% -> 95%
- J6A：追击时间无限，Rate: 87% -> 94%，击飞角度修改：对手被击飞的距离减少
- J2A：发生加快 20 -> 13，可以弹地
- J8A：追击时间增加 45 -> 60
- 5C：伤害 -50，追击时间增加 30 -> 45
- 2C：追击时间增加 45 -> 60，击飞角度修改：对手会被击飞得更高
- 6C：追击时间增加 25 -> 45
- DC：附加擦弹属性


**==== 必杀技 ====**


- 原236火球：追击时间无限
- 236改火雾：Hitstop增加 10 -> 15，命中地面对手不会击飞了
- 236改火刀：可以自己取消自己，伤害增加 400 -> 500，命中地面对手不会击飞了
- 623改空气炮：发生加快 25 -> 18，命中对手后会垂直击飞，Rate 80% -> 95%，伤害 1200 -> 800
- 623改雷升：追击时间无限，1级就有体术无敌
- 原214：发生加快 9F，削灵增加 0.2 - > 0.3
- 214改齿轮：追击时间无限
- 214改悬剑：发生加快 23 -> 18，收招硬直减少 32 -> 8
- 421改绿石：追击时间无限
- 22改大水泡：移动取消 35 -> 27（和原22一样快），出招取消 35 -> 19（和空中版一样快）
- 22改小水泡：对手被小水泡命中时不能行动，小水泡会造成 50 伤害且追击时间无限，集满 10 个小水泡后的大泡泡会造成 1000 伤害，移动取消 35 -> 27（和原22一样快），出招取消 35 -> 19（和空中版一样快）

**==== SC符卡 ====**

- 二卡齿轮凹：追击时间无限，伤害 130 -> 150，Rate 98.5% -> 99%
- 三卡火金：伤害增加 2800 -> 3250，追击时间增加，将对手击飞得更高，收招硬直减少 10F
- 三卡火水柱：发生加快 24 -> 16
- 三卡日木圣光：全体 102 -> 78（减少收招硬直，和三卡酸雨一样快）
- 四卡绿石：收招硬直减少 10F
- 五卡日月环：追击时间无限
- 五卡贤者之石：追击时间无限


### **7、妖梦**

**==== 普通技 ====**

- AAAAA：对手被击飞的横向距离缩短，离妖梦越近
- 3A：**新动作，类似2B向前上方对空体术**
- JA：追击时间增加 25 -> 30，伤害 -100
- J6A：**追击时间无限**，伤害 -100
- J8A：追击时间增加 45 -> 60
- J2A：**判定框横向加大，不打康也会弹地，可被必杀技级取消**，修正增大 85% -> 78.5%
- DAA：**发生 -6（打中可以直接接上DA DAA，打防DA DAA无缝），可被必杀技级取消**
- B系弹幕：追击时间增加 25 -> 30，命中hitstop 10 -> 15，伤害 200 -> 150
- C系弹幕：追击时间增加 25 -> 30，命中hitstop 10 -> 15，**空中命中对手时会让对手翻滚而不是强制站立**（增大受击面积）
- 6C和J6C：**追击时间无限**，伤害 -100


**==== 必杀技 ====**


- 原236 下届反射斩：**升1级后反射盾会带攻击判定**，伤害600，削1灵
- 236改 结跏趺斩：发生加快，移动取消加快，**可以在空中使用（射程较短）**，2级后判定加大，4级后2hit攻击判定
- 原623 弦月斩：B版和C版第2hit 追击时间无限
- 623改 折服无间：
  - 1级：启动 13 -> 9（可以连上1A/4A） 修正 63.2%
  - 2级：启动 13（Bug，本来应该也是调到9的） 修正 68.2%
  - 3级：启动 13（Bug，本来应该也是调到9的） 修正 73.2%
  - 4级：启动 13（Bug，本来应该也是调到9的） 修正 80.7%
  - **长按后续飞膝击飞向量调整更易于后续连段，追击时间无限**，飞膝修正rate 95% （基本稳定接板边空连，至少3k+）
- 623改 炯眼剑：**启动瞬间即可当身体术**，收招硬直 +8
- 原214 生死流转斩：**第3hit 不打康也会弹地**（可接DA，623C，远A，远2A等）
- 214改 头上花剪斩：**不打康也会弹地**，**可在空中使用**
- 214改 心抄斩：发生加快 25 -> 17 （绯想天水平）
- 原22 凭依之缚：**追击时间无限**
- 22改 灵妙半身：命中地面对手不会击飞了

**==== SC符卡 ====**

- 二卡 魂符「幽明之苦轮」：**后摇硬直 -6（相当于妖梦的有利帧 +6）**
- 三卡 断命剑「冥想斩」：追击时间无限
- 三卡 剑技「樱花闪々」：击飞向量调整，不会原地抬升而吃不到后续hit，伤害 1000 -> 700
- 四卡 断迷剑「迷津慈航斩」：伤害 1200 -> 1000
- 四卡 断灵剑「成佛得脱斩」：追击时间无限
- 五卡 空观剑「六根清净斩」：**启动完全无敌**
- 五卡 魂魄「幽明求问持聪明之法」：**罗曼取消，超级加帧**

### **8、铃仙**

**==== 普通技 ====**

- AAA：不会击飞地面的对手
- AAAA：修改击飞角度：对手击飞的距离减少
- 3A：不会击飞地面的对手
- H3A：会击飞对手，二段（2 HIT）攻击
- H6A：攻击判定有效时附带擦弹属性
- JA：追击时间增加 25 -> 30
- J6A：追击时间无限
- B系弹幕：Rate 93% -> 95%
- C系弹幕：追击时间增加 25 -> 45


**==== 必杀技 ====**


- 原236火箭：伤害减少
- 236改散弹：发生加快 4F，伤害增加 100，追击时间增加 40 -> 60，Rate 85% -> 95%，追击时间无限，命中姿势修改更利于连段
- 236改子母弹：移动取消加快 6F，不击飞对手，Rate 93% -> 99%
- 623改电光眼：B版启动无敌，不能SC取消；C版启动擦弹
- 原214激光：追击时间无限
- 214改扫描：扫描激光也带攻击判定
- 214改花环：追击时间无限
- 原22分身：发生加快 5F，Rate 93% -> 95%，B版分身射击同时即可行动，C版可跳取消或SC取消
- 22改分身斩：追击时间无限

**==== SC符卡 ====**

- 一卡花环：追击时间无限，伤害 600 -> 800，Rate 90% -> 93%，地面版收招硬直减少 18F，空中版发生加快 8F
- 一卡碎卡：追击时间无限
- 三卡碎卡：追击时间无限
- 三卡紫电光眼分身：启动无敌，追击时间无限  
- 三卡国士无双：喝完4瓶后爆炸伤害 4500 -> 20000，全屏爆炸范围
- 三卡近眼火花：发生加快
- 五卡幻胧月睨：追击时间无限

### **9、幽幽子**

**==== 普通技 ====**

- AAA：追击时间无限，伤害减少500
- 4A，F5A，DA：收招时的绿框扩展减少
- 6A：可弹地
- J6A，J8A：追击时间增加 45 -> 60
- J2A：追击时间无限，伤害减少50
- C系弹幕：追击时间增加 25 -> 30，Rate 93% -> 96%，修改击飞向量避免无限连

**==== 必杀技 ====**

- 原236激光：追击时间无限
- 236凤纹蝶之枪：弹墙幅度增大，追击时间增加 20F，跳取消加快 12F
- 236改死还大地：伤害增加 50，追击时间增加 40 -> 50，Rate 93% -> 96%，修改击飞向量更利于连段，B版发生加快 23 -> 13，C版发生加快 33 -> 23
- 原623蝴蝶梦之舞：追击时间无限
- 623改逆屏：攻击判定增大，攻击判定生效时可反射弹幕
- 623改扇子：Rate 85% -> 94%，将对手击飞得更高，B版追击时间增加 40 -> 60；C版追击时间无限
- 421改诱灵的甘蜜：伤害增加 300 -> 350，生成的幽灵弹幕加大
- 421改空中投：伤害增加 300，小幽灵弹幕：磨灵增加，Hitstop 增加 5 -> 10

**==== SC符卡 ====**

- 二卡小凹蝶：追击时间无限
- 二卡小无寿：追击时间无限
- 四卡大无寿：伤害增加 3500 -> 4000，Rate 85% -> 40%
- 五卡大扇子：发生加快 10F

### **10、八云紫**

**==== 其他 ====**

- 地面6D冲刺的速度：8 -> 9 （和萃梦想一样快）
- 版边44穿版：启动时无敌

**==== 普通技 ====**

- AAA：Hitsotp 增加 10 -> 15（有利于AAA B的连段）
- AAAA：动作修改，追击时间无限
- 3A：追击时间增加 45 -> 60
- JA：追击时间增加 25 -> 30
- J6A：追击时间无限，收招硬直减少 8F，前移加快
- J2A：攻击判定增大，只有挥空落地才有落地硬直
- J8A：追击时间增加 45 -> 60
- B系弹幕：伤害减少为 75，追击时间增加为 30F
- 2B：出招取消喝跳取消加快 31 -> 26，弹幕速度加快
- DB：发生加快 14 -> 13，伤害减少 50，可弹地
- C系弹幕：伤害减少为 275，追击时间增加为 45F，Rate 为 95%

**==== 必杀技 ====**

- 原236墓碑：发动-5，命中弹地，伤害-500，B版生成得更靠近紫，期间按住4可以更近
- 236改诱饵：上位取消 37-> 22; 移动取消 37 -> 32，总体帧数 ground: 67 -> 59; air: 75 -> 67，削灵 0.5 -> 1，并不会把人击飞; hitstop 10 -> 20; blockstop 0 -> 15
- 236改青山：弹墙幅度更大
- 623改知能：B版发动-5，防御blockstop 0 -> 10; C版发动-15
- 623改万伞：蓄力未脱手时可命中，发射出去后的弹幕：追击时间 45 -> 60
- 214改宇宙：hitstop 10 -> 20; blockstop 10 -> 15; 命中后把对手朝上击飞, 追击时间无限
- 原421：B版弹墙幅度更大，C版命中弹地
- 421改魔眼：削灵: 0.5 -> ，追击时间 40 -> 60, Rate 92% -> 98%; 只能同时存在一个C版魔眼于场上
- 421改分解机：紫出现时带擦弹, B版底下移动速度: 6 -> 8; C版降落时可取消; 每级的出地延迟: [20, 16, 12, 5] -> [16, 13, 10, 5]

**==== SC符卡 ====**

- 一卡二次元与三次元的境界：发动-14，Rate 100%，削灵 0.5 -> 0.25，追击时间无限
- 一卡橙：往斜下扔而不是往斜上扔，Rate 80% -> 90%, 削灵 0.25，追击时间无限
- 二卡诱饵：不会把人击飞，hitstop 10 -> 20; blockstop 0 -> 15
- 三卡蓝：Rate 92% -> 99%，追击时间无限
- 三卡客观结界：追击时间无限
- 三卡飞光虫：追击时间大幅增加
- 四卡魔眼：追击时间无限，Rate 99%
- 三卡四重结界：弹墙幅度更大，可接后续
- 五卡列车：击飞改变，可稳接4HIT，伤害-500

### **11、萃香**

**==== 普通技 ====**

- AAA：跨步更早，不容易断连了，且可以弹幕取消
- AAAA：追击时间无限
- F5A：发生 17 -> 15; 持续 4 -> 6, 收招时的扩展受击判定减少
- HF5A：收招时的扩展受击判定减少
- 新招数 H2A：弹幕攻击，可被擦，必杀技取消，防御削1灵
- 3A：发生 19 -> 17
- 6A：发生 18 -> 17
- JA：追击时间 25 -> 30; 伤害 -100
- J2A：攻击判定和角度调整为更适合版中连段
- J6A：追击时间无限，伤害-200
- J8A：追击时间 45 -> 60
- DA：两段全是中段，每次错防削1灵
- DB：招数替换成了萃梦想里的 D3A，中段，发生 18 -> 17
- 6B：追击时间 30 -> 45; 伤害 -200
- 2B：改成下段，普通命中也会弹地，追击时间 60 -> 45，Rate 85% -> 75%
- H2B：持续帧 2 -> 4，弹地高度增加
- 6C和J6C：碰到版边会反弹回来（和萃梦想一样）

**==== 必杀技 ====**

- 原236瓜拳：追击时间无限，B版0级时出手后拥有7F霸体；C版启动时拥有霸体直到出手
- 236改元鬼：追击时间无限
- 214改厌雾：发生 27 -> 8, 一旦萃香现身就可以取消
- 236改屁股蹲：命中就会弹地，下降时也带攻击判定，中段
- 原623头槌：追击时间无限
- 623改捶地：取消体术判定，但是可以移动取消
- 22改黑洞投：启动带霸体，B版发生为 15F，C版发生 -10F


**==== SC符卡 ====**


- 一卡雾：硬直 -20，blockstop 3 -> 10
- 二卡石头：追击时间无限
- 二卡大鬼凹：追击时间无限
- 二卡锁链：持续 3 -> 15，Rate 100%
- 三卡三拳：追击时间无限
- 四卡大鬼：
  * 前走：第一帧就有攻击判定
  * 站立时后摇的角：追击时间无限
  * 跳跃：追击时间无限，速度和普通跳跃一样快
  * 降落着地时：和普通落地一样快
  * A：追击时间无限，弹墙幅度更大
  * B：命中时弹地
  * C：硬直减少
  * JA：追击时间无限，弹墙幅度更大
  * JB：命中时弹地
  * JC：追击时间无限
- 四卡锁链：伤害 0 -> 1500，持续 3 -> 15，Rate 100%
- 五卡大江山：伤害 6.2k -> 4.5k，发生 12 -> 3 （SC暗转前就会命中所以无法反应）

### **12、文**

**==== 普通技 ====**

- AAAA：新动作，追击时间无限
- 3A：击飞向量改变，可以接后续
- JA：追击时间增加 25 -> 30
- J6A：追击时间无限
- J2A：必杀技取消，攻击判定增大，命中时弹地，发生 = 13，落地硬直 = 14，伤害 -100，Rate 90% -> 79%，追击时间 60 -> 45
- J8A：追击时间 45 -> 60
- C系列弹幕：追击时间 45 -> 60
- 6C：追击时间 40 -> 50, Rate 85% -> 90%

**==== 必杀技 ====**

- 原214疾走风靡：追击时间无限，C版命中对手时可随意取消
- 214改疾走优美：追击时间无限
- 214改倒树：不再发射弹幕只能移动，移动后即可用其他招数取消
- 236改烈风扇：攻击判定扩大，将对手横向击飞且可弹墙，伤害+100
- 236改枫扇风：攻击判定更靠近文，命中硬直更大，Rate 93% -> 98%
- 421改镰风：不取消的话就不会消失
- 421改天狗砾：B版发生-11，移动取消-8；C版和空中的B/C版：发生-10；削灵 0.1 -> 0.25; blockstop 2 -> 8; hitstop 5 -> 10, Rate = 100%, 追击时间 = 40
- 22改太鼓：
  - 第一HIT：追击时间无限
  - A后续：追击时间无限
  - B后续：不弹地
  - C后续：追击时间无限
- 22改Down Burst：攻击判定扩大

**==== SC符卡 ====**

-  二卡天狗报：罗曼取消
-  二卡天狗道的开风：弹墙幅度更大
-  三卡Macro Burst：修正减少
-  四卡禁制：石头修正减少，追击时间增加，hitstop 增加

### **13、小町**

**==== 其他 ====**

- 修改了受击时的判定，就不会被UU地面2B 2C无限连

**==== 普通技 ====**

- 4A和近A：变成中段
- AAA：招数新动作
- AAAA：hitstop 增加
- F5A：追击时间无限，发生 15 -> 13; 全体 57 -> 47，扩展受击判定减少
- 3A：Rate 80% -> 85%, 追击时间 45 -> 50
- H3A：追击时间无限
- JA：追击时间 25 -> 30，全体 46 -> 40
- J6A：追击时间无限，挥空也没有落地硬直，移除贴身攻击盲点（和绯想天一样），全体 69 -> 57
- J2A：小町前方的扩展受击判定移除
- DC：追击时间无限
- 2B：发生 21 -> 17，移动取消 28 -> 24(和绯想天一样)
- C 弹幕：场上可同时存在多个C弹幕，追击时间 45 -> 60
- JC：落地时一定会等到弹幕释放
- 2C：追击时间无限
- 6C J6C J2C：追击时间 45 -> 60，弹幕相杀 C3 -> B1

**==== 必杀技 ====**

- 原236：发生-2，击飞地面上的对手
- 236改逆灵：追击时间无限
- 236改大镰：地面B/C版和空中B版的追击时间无限
- 原623：弹幕生成时就带攻击判定
- 623改死风：可反射弹幕，追击时间无限
- 623改船：小町跳下船时可随意行动
- 原22换位：B版启动时体术无敌，收招硬直-20，不可SC取消；C版启动时擦弹，收招硬直-20
- 22改超渡：蓄力时带霸体，收招硬直-5
- 22改无间：命中击飞方向修正为向下，B版发生 17F，C版发生 31F，蓄力C版生成在对手脚下
- 214改离魂：每个灵的回血量 15 -> 45，不会把对手击飞得很高；每个灵爆炸时削灵 0.125 -> 0.5, 伤害 300 -> 600, Rate 94% -> 96%；B版发生 24 -> 20, 移动取消 52 -> 32; C版发生 36 -> 32,移动取消 64 -> 44；

**==== SC符卡 ====**

- 一卡灵：追击时间无限，可移动取消
- 一卡船：命中后弹墙可接后续，硬直减少，修正减少
- 三卡无间：第一HIT体术会弹地，后续柱子会打倒地
- 三卡八重雾：发生-30
- 四卡区别死者之镰：命中后弹地，伤害 4000 -> 3500
- 四卡生魂流离之镰：启动无敌，伤害减少
- 五卡半命：第一HIT就造成 1000 伤害，后续再扣半命

### **14、衣玖**

**==== 普通技 ====**

- AA：上段变中段
- AAA：中段变下段
- AAAA：追击时间无限，改成特射属性，防御削1灵，hitstop 5 -> 10
- 6A：追击时间无限
- JA：追击时间 25 -> 30
- J6A：追击时间无限
- DB：可用必杀技取消
- 6C弹幕：伤害 300 -> 250，追击时间 45 -> 50，Rate 92% -> 96.5%

**==== 必杀技 ====**

- 原236硬钻：追击时间无限
- 236改龙鱼得水：可用任意招数取消
- 原623羽衣若水：追击时间无限，B版防御效果从启动直到出现攻击判定但不可SC取消
- 原214静电诱导弹：追击时间无限
- 623改羽衣若风：反射盾也带攻击判定；B版向上发射，伤害 600，削 0.5 灵；C版向前发射，伤害 800，削 1 灵
- 原22龙鱼愤怒：发生 -4，磨血稍微减少，追击时间无限，顶端判定会把人往下击飞

**==== SC符卡 ====**

- 一卡羽衣若时：追击时间无限，启动后的硬直时间内可拉防，击飞向量修改得以接后续，地面攻击伤害 500 -> 700，空中攻击伤害 200 -> 300
- 三卡钻头：追击时间无限
- 三卡静电龙宫：追击时间无限
- 四卡五爪鱼：追击时间无限
- 五卡游泳弹：追击时间无限，不会把对手击飞得太高

### **15、天子**

**==== 普通技 ====**

- AAA：追击时间无限
- F5A：命中空中对手会弹地而不是击倒，追击时间 45 -> 30
- 3A和H3A：追击时间无限
- H6A：持续时间帧内霸体，持续帧+5，全体不变，伤害+100，命中音效修复
- JA：追击时间 25 -> 30，全体-3
- J6A：追击时间无限，持续帧 13 -> 15，全体-3
- J2A：命中后弹地，发生 20 -> 14，落地硬直 29 -> 23，Rate 85% -> 80%
- J8A：追击时间 45 -> 60
- DB：不会把人击飞了
- B系列小石头：伤害 150 -> 125
- C系列弹幕：追击时间 45 -> 60

**==== 必杀技 ====**

- 236改剑气：第一下挥舞是体术
- 236改天地之压：追击时间无限，削 1 灵，改为了体术（？存疑，可能还是特射，我没试）；B版最快释放速度 12 -> 6，C版最快释放速度 18 -> 12
- 623改升天突：追击时间无限，体术无敌时间覆盖持续帧，B版伤害 1000 -> 1200，C版伤害 1000 -> 1250，空中使用后可在硬直结束后移动
- 214改回旋镖：回到手里后没有硬直，hitstop 增加，改变对手被命中的动作，每 HIT 伤害 200 -> 250，削灵 0.125 -> 0.25
- 22改守护的要石：生成时围绕在天子周围的石头有攻击判定，发生+50，灵力停止时间 120 -> 60，C版发射出去的石头擦弹耐性无限
- 22改地精的起床：发生加快，丢出去时的伤害增加且弹地，地震不会把人击飞

**==== SC符卡 ====**

- 二卡石头：追击时间无限
- 二卡封印：命中后可取消
- 三卡乱砍：招数动作改变
- 三卡绯想天促：追击时间无限
- 四卡天启：无天气时使用，伤害 800 -> 1000, 削灵 1.25 -> 2.5，击飞向量和有天气时一样；有天气时使用，伤害 800 -> 1000, 削灵 2.5 -> 5
- 四卡霸体：罗曼取消
- 五卡地震：地震准备时间 120F，硬直-21（和C版六震一样），可防御，下段特射，全正防也削3灵
- 五卡绯想天：发生 41 -> 31, Rate 98% -> 95%


### **16、早苗**

**==== 普通技 ====**

- AAAA：追击时间无限
- 6A：命中后弹地
- JA：追击时间增加 25 -> 30
- J8A：追击时间增加 45 -> 60
- J6A：追击时间无限
- J2A：命中后可立即取消
- DC：第一HIT Rate 100%
- B系列弹幕： hitstop 5 -> 15; blockstop = 2
- 5B和J5B：改变弹幕生成的位置，会前后围绕早苗
- 新招数 H2C HJ2C：普通 2C 生成五颗星弹，蓄力 2C 生成七颗
- 6C和J6C：追击时间无限，一旦神奈子消失就会立即回满CD
- 4C和J4C：追击时间增加 45 -> 60，一旦诹访子消失就会立即回满CD
- J4C：发生 37 -> 31，移动取消 -10

**==== 必杀技 ====**

- 原623妈突：追击时间无限，CD比原版减少25%
- 623改妈风：CD比原版减少25%
- 623改妈柱：失去无敌属性，伤害减少，可以跳取消了，CD比其他623减少50%，命中弹地，追击时间无限
- 所有214青蛙：CD比原版减少50%
- 214改铁轮：不可擦弹
- 原22抽签炸弹：大吉的追击时间无限
- 22改水蛙：不会把对手击飞
- 22改白蛇：B版发生 33 -> 23，移动取消 28 -> 26；C版发生 33 -> 93，移动取消 28 -> 30（蛇弹幕在早苗背后生成）
- 236改星落：弹幕扩大
- 236改起浪：发生加快

**==== SC符卡 ====**

- 二卡祈运：硬直减少，可接后续
- 二卡抽签炸弹：丢出四个签前早苗保持擦弹状态，所有攻击都追击时间无限，大凶伤害增加
- 二卡仪式：追击时间无限
- 三卡星落：发生加快，硬直减少，追击时间增加
- 四卡红星凹：发生加快 25 -> 19
- 五卡大开海：伤害-1000，Rate 90%

### **17、美铃**

**==== 普通技 ====**

- F5A：追击时间增加 35 -> 45
- 删除招数 AAA6A 和 AAA3A
- JA：追击时间增加 25 -> 30
- J2A：追击时间增加 45 -> 60
- J6A：追击时间无限
- J8A：硬直-15，追击时间增加 60 -> 90
- DB：霸体 10 -> 20，追击时间增加 45 -> 60，硬直 +12
- 5B：hitstop 0 -> 10
- 6B：hitstop 0 -> 10
- 2B: 追击时间增加 45 -> 50
- C弹幕：hitstop 5 -> 10
- 6C: blockstop 0 -> 5

**==== 必杀技 ====**

- 原236芳波：B版发生 28 -> 24，C版发生 59 -> 31，击飞向量修改更容易接后续
- 236改水型：吸收盾带攻击判定，B版发生 4 -> 12，C版发生 4 -> 20
- 236改彩雨：B版发生 21 -> 20，C版和空中C版发生都变成 24且旋转时向前移动，hitstop 0 -> 10，追击时间增加
- 原214螺光步：发生-7，追击时间无限
- 214改烈虹拳：弹幕部分伤害 50 -> 100
- 原623红炮：BC版硬直-7，追击时间 60F，Rate 85%
- 623改红寸劲：攻击判定扩大
- 623改虎劲：可以任意取消
- 原22黄震脚：命中后击飞对手可接后续，追击时间增加 45 -> 60，Rate 95% -> 92%
- 22改地龙波：击飞得更高，Rate 85% -> 90%
- 22改天龙脚：BC版都追击时间无限且攻击持续帧内带擦弹

**==== SC符卡 ====**

- 二卡欧拉：硬直减少，hitstop 增加，击飞高度增加，后续可接F5A和2B
- 三卡小球：发生加快，可4A接；硬直减少，不会击飞地面上的对手，对空中对手的击飞也减轻，每 HIT 削灵 0.2 -> 0.25
- 三卡大鹏：Rate 75% -> 85%
- 四卡猛虎：罗曼取消
- 五卡大鹏：前两HIT Rate 100%，第三HIT Rate 75%
- 五卡大球：弹墙幅度增大，更容易接后续

### **18、琪露诺**

**==== 其他 ====**

- 6DD责任： 27 -> 25（全角色一般都是25）

**==== 普通技 ====**

- AAA：hitstop +5
- AAAA：新招数动作，追击时间无限
- F5A：hitstop +5
- 6A：发生加快 21 -> 17（和3A一样快）
- 3A：击飞向量修改，可接后续
- JA：追击时间 25 -> 30
- J6A：硬直-7，追击时间无限
- J2A：每HIT Rate 94% -> 95%
- J8A：硬直-4，追击时间 45 -> 60
- DB：硬直-4，可必杀取消
- DC：击飞向量修改
- 5B弹幕：hitstop 0 -> 10
- 6B：发生 18 -> 15，移动取消 34 -> 30
- 2B和J2B：移动取消 30, 33 -> 23
- 5C：追击时间无限
- 6C：hitstop 10 -> 20; 追击时间 35 -> 40, 每HIT削灵 0.125 -> 0.25
- 2C：蓄力越久尺寸越大，伤害越高

**==== 必杀技 ====**

- 原236冰锥：追击时间无限，B版发生 24 -> 20，C版发生 35 -> 31（都和空中版一样快）
- 236改陷阱：被打不消失，削灵 0.5 -> 1，击飞得更高，移动取消B版 39 -> 35；C版 47 -> 43
- 236改射线：B版角度较小，C版角度较大，1HIT变成了3HIT，伤害150，Rate 96%，移动取消 40 -> 36
- 原214雪球：追击时间无限，发生 17 -> 11
- 214改头槌：追击时间无限，一级就可以空中使用
- 214改踢：可以控制下落
- 原623：追击时间无限，发生-5
- 623改转剑：击飞向量修改易于连段，追击时间增加
- 623改冰刺：伤害 150 -> 200，追击时间 45 -> 60

**==== SC符卡 ====**

- 二卡冰锥：可大跳取消
- 二卡转圈：硬直减少，修复落地时无限旋转的bug
- 三卡射线：追击时间无限
- 三卡制冰：罗曼取消
- 三卡喷头：弹幕的击退减少，blockstop: 0 -> 5; speed: 4.5 -> 3, 发生 36 -> 26; 全体 68 -> 55
- 三卡踢：发生-28，修复使用耗灵的bug，打防或命中后可随意取消
- 五卡完美冻结：追击时间无限
- 五卡大冰锤：普通命中时弹地

### **19、高达**

- 6DD责任： 30 -> 27

**==== 普通技 ====**

- 空中冲刺：新动作
- AAA：新动作
- AAAA：新动作，追击时间增加，击飞向量修改
- 2A：对手被命中后的动作修改
- JA：硬直-9
- J6A：追击时间无限，取消额外的受击判定
- J2A：发生 20 -> 14，调整攻击判定，命中后弹地，命中音效修改
- J8A：追击时间增加 45 -> 60
- B弹幕： hitstop 5 -> 14
- 6B弹幕：带 Lift 修正，追击时间增加 25 -> 45，攻击等级 中等 -> 大
- C弹幕：追击时间 +25
- 6C弹幕：伤害 150 -> 120
- 2C：取消额外的受击判定
- DC：第二HIT可随意取消

**==== 必杀技 ====**

- 原22太阳：伤害减少，Rate减少，追击时间无限
- 22改火柱：追击时间无限，击飞高度降低，持续+26
- 22改波动炮：追击时间无限，hitstop 20F，移动取消-5，持续+10
- 原623：击飞向量修改
- 623改飞机：LV2的额外6F攻击的追击时间无限
- 623改足浴：可以投到荷叶青蛙，修复不耗灵的bug
- 原236扫地：发生 56 -> 41，移动取消： 53, 58 -> 37
- 236改光刀：带smash修正，命中弹墙，追击时间增加，伤害 400 -> 450，硬直-6
- 214改怨灵：瞄准对手发射而不是瞄准高达自己

**==== SC符卡 ====**

- 一卡人造太阳：发生-5
- 三卡小核炮：发生-6，硬直-61
- 三卡光刀：发生-21，硬直-10
- 三卡面包圈：追击时间无限
- 四卡十凶星：发生 37 -> 31，伤害减少
- 四卡核炎井：伤害减少
- 四卡地底太阳：硬直-88
- 四卡飞机：击飞向量和击飞动作修改
- 五卡大核炮：伤害减少
- 五卡自爆：罗曼取消

### **20、青蛙**

**==== 其他 ====**

- J1D/J2D/J3D：可用空中冲刺和空中招数取消
- 切换荷叶姿态帧数：14 -> 3（但是判定框还是需要14F才会变化）


**==== 普通技 ====**

- AA： hitstop 10 -> 15
- AAAA：追击时间无限
- F5A：不把人击飞，hitstop 10 -> 15
- 3A：不把人击飞，可用荷叶招数取消，发生 25 -> 15
- JA：硬直-4
- LA：不把人击飞，hitstop 10 -> 15
- L6A：击飞向量修改，可接钻地招数
- DA：发生-12
- J6A：击飞向量修改，可接钻地招数
- J2A：弹墙幅度增大，发生 40 -> 25
- J8A：树的伤害和击飞与青蛙本体的HIT一样，追击时间增加 45 -> 60
- B系列小水弹和6B铁轮：追击时间+15
- 6B：移动取消 34 -> 29，全体 65 -> 55
- L6B：移动取消 49 -> 39，全体 65 -> 55
- 5C水柱：一旦接近对手就会触发，击飞得更高， hitstop 0 -> 10，发生-10，移动取消 39 -> 34，全体 74 -> 64
- H5C：发生-10，移动取消 54 -> 49，全体 89 -> 79
- 6C：移动取消 48 -> 39，全体 84 -> 79
- L5C弹幕：会击飞地面对手，但不会击飞得更远而丢连段
- L5C：发生-6，移动取消 43 -> 35，全体 82 -> 74
- J5C：发生-6，移动取消 41 -> 33，全体 73 -> 65

**==== 必杀技 ====**

- 原623蛤蟆：LV1后体术无敌，不可SC取消，追击时间无限
- 623改铁轮：追击时间无限
- 623改长手长脚：一旦生成就有攻击判定，伤害 200 -> 240，追击时间增加 45 -> 60
- 原214水柱：每HIT伤害 200 -> 230
- 214改水蛙：一靠近对手就立即爆炸
- 214改喷水：击飞向量修改，hitstop增加，追击时间增加 25 -> 45
- 原236大地之湖：发生不变但是跳跃提早，下降时的攻击会弹地，地面攻击追击时间无限
- 236改翡翠：翡翠玉一从地里刷新就有攻击判定
- 236改蛙石神：空中版发生-9，追击时间无限，硬直期间可SC取消，击飞向量修改
- 原22作祟：发生 20 -> 16

**==== SC符卡 ====**

- 二卡清水：追击时间无限
- 二卡铁轮：追击时间无限
- 三卡长手长脚：追击时间无限
- 四卡赤蛙：追击时间无限
- 四卡川：第一HIT攻击判定增大


## 英文说明原文

::: details 英文说明原文
::: info 英文说明原文


Unlimited 英文Wiki说明: https://hisouten.koumakan.jp/wiki/User:Tessiro#The_Soku_Instrumentality_Project

NextSoku 英文Wiki说明: https://hisouten.koumakan.jp/wiki/User:Yumeko/NextSoku

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
* 3A: consistent parameters: damage: 750; proration: 85%; untech: 45 # bugfix
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
* demon sealing dimensional rift: B version: melee invincible on startup; C version: grazes on startup, cannot be HJC'd or cancelled into spellcards
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
* Demon's Dinner Fork: forces knockdown
* Rocket Kick Upper: hitbox size increased # able to hit enemies on the ground, hitstop 3 -> 25, proration 93% -> 95%
* Vampire Kiss: B version: startup 33 -> 9; C version: startup 38 -> 25, more recovery on hit
* Demon Lord Cradle: forces knockdown
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
* 3[A]: now a 2-hit combo; launches foes to allow followups
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
* Dance of the Butterfly Dream: forces knockdown
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
* Tengu Drum: initial hit: forces knockdown, a followup: forces knockdown, b followup: no longer ground bounces, c followup: forces knockdown
* Wind from the Maple Fan: spawns closer to aya, more hitstun # easier to follow, proration 93% -> 98%
* Tengu's Downburst: hitbox size increased to allow crossups
* Wind Sickle Veling: will not disappate if not cancelled
-- Spells ====
* Tengu Limited Special: acts as a roman cancel
* Wind of the Tengu Path: bigger wallbounce
* Tengu's Macroburst: proration reduced
* Route Forbidden to Man: rock proration reduced, more untech, hitstop increased # juggles more consistently

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
* Short Life Expectancy: initial strike deals 1k damage # able to score KOs
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
* Yellow Quake Kick: launches foes into the air # allows followup combo, untech 45 -> 60, proration 95% -> 92%
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
* 5AAAA: new animation; more untech # allows followup combos; hit vector changed # enemy is closer to utsuho
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
* Lake of Great Earth: dives earlier (startup is the same); falling attack: groundbounces; splash: forces knockdown
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