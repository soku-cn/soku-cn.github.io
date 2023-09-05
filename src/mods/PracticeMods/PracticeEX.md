---
title: PracticeEX高级练习模式

# 标题
icon: circle-info
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## 使用说明

::: info 简介
**可以同时配合 ReplayInputView 和 Labtool 同时使用**

F4查看判定，F11暂停，F12逐帧，让木桩在 防御/异地/起身/挨打 时做动作（擦弹、DD、Dash、凹、抢）、让木桩执行自己录制的动作、不耗卡、早苗无CD，以及保存角色位置、恢复角色位置、查看缝隙帧数、有利不利帧数等
:::

::: info 菜单图文翻译

![practice1.png](https://bu.dusays.com/2023/08/29/64edb574ded32.png =650x)

![practice2.jpg](https://bu.dusays.com/2023/08/29/64edb572ec964.jpg =650x)

![practice3.jpg](https://bu.dusays.com/2023/08/29/64edb56cf0e98.jpg =650x)

![practice4.jpg](https://bu.dusays.com/2023/08/29/64edb56eec620.jpg =650x)

![practice5.jpg](https://bu.dusays.com/2023/08/29/64edb5719c20a.jpg =650x)

![practice6.jpg](https://bu.dusays.com/2023/08/29/64edb56d65538.jpg =650x)

![practice7.jpg](https://bu.dusays.com/2023/08/29/64edb56e1320a.jpg =650x)

![practice8.jpg](https://bu.dusays.com/2023/08/29/64edb95560226.jpg =650x)

![practice9.png](https://bu.dusays.com/2023/08/29/64edbcb098a24.png =650x)

![practice-2.1.0.png](https://bu.dusays.com/2023/08/29/64edb56e6723c.png =650x)

**图7木桩反应 Triggers 选项翻译：**

**NONE**即为无动作，**BORDER ESCAPE**即回避结界，一般称DD； [UP]即为2DD， [UPBACK]即为1DD， [BACK]即为4DD， [FORWARD] 即为6DD
**MACRO**是执行宏，即录制下来的动作，**RANDOM MACRO**是随机执行一个录下来的动作，**SELECT CARD**是指使用手上的卡片

**防御时：** HANGEKI -羽衣

**防御后：** DP-升龙(部分角色才有)，SPIRITUAL STRIKE TALISMAN-灵击，4A,2A，JUMP-小跳，HJ-大跳，DASH-向前66，BACK DASH-向后44
:::

::: warning BUG 注意
**注意在录制木桩动作操作2P的时候，不要按F7**
**F5、F6、F7在原本练习模式中就是用来给手柄2P录制重播动作的，F5开始录制 F6结束录制 F7播放动作，所以在用插件录制时按F7会导致无法移动，此时按F5或F6即可恢复**

**【不要设置随机空中受身 Random Airtech，会让游戏崩溃】**
:::

## 录制技巧
::: tip 让木桩最速执行动作，如防御后用卡，或者执行宏（macro，录制些 623 或者 236 什么的）
自带的那个 AFTER BLOCK（防御后执行动作）会有点问题，做用卡和执行宏会慢 1F ；
此时我们想要最速，可以使用防御时刷键的方法：

**就是切换到 ON BLOCK（防御时执行动作），并搭配木桩延迟，可以实现模拟防御后刷键预输入的情景，通过预输入我们就可以让木桩最速了**

[**配套教程视频 传送门： 【非想天则】新则 - 练习模式 EX - 让木桩最速出招的录制技巧**](https://www.bilibili.com/video/BV11p4y177Ng/)
:::

::: info 情况一：最速 5A、用卡等（只需要一帧输入）
操作方法举例—————录制 5A 或者 用卡：
1. 按 **录制热键（默认是 HOME）** 切换到操控木桩模式，此时右上角显示**黄条**
2. 按 F11 暂停，然后按 **录制热键（默认是 HOME）**，然后右上角显示**红条**
3. **按住** A 或者 用卡键，然后在此基础上，按 F12 下一帧
4. 按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 **录制热键（默认是 HOME）**，就是结束并保存录制了
5. 按 **播放热键** 让它播放一次，一般是没问题的
6. 在 **Triggers 菜单**里，选择 **ON BLOCK -> MACRO**，**Delay 设置为 0F**
:::

::: info 情况二：最速 DA 或 623 或 236 等（需要三帧预输入）
操作方法举例—————录制 623B：
1. 按 **录制热键（默认是 HOME）（默认是 HOME）** 切换到操控木桩模式，此时右上角显示**黄条**
2. 按 F11 暂停，然后按 **录制热键（默认是 HOME）**，然后右上角显示**红条**
3. **按住** 6，然后在此基础上，按 F12 下一帧
4. **按住** 2，然后在此基础上，按 F12 下一帧
5. **按住** 3 和 B，然后在此基础上，按 F12 下一帧 
**（或者3 和 B 分开，这样需要录四帧，下面的 Delay 值也要调到 4F）**
6. 按 F11 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 **录制热键（默认是 HOME）**，就是结束并保存录制了
7. 按 **播放热键** 让它播放一次，一般是没问题的
8. 在 **Triggers 菜单**里，选择 **ON BLOCK -> MACRO**，**Delay 设置为 3F**
:::
