---
title: 双击rep播放转mp4视频功能-ReplayDnD

# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-01
#文章编辑日期
---


::: info ReplayDnD-old基础功能简介（不带rep转mp4）

- 右键rep文件选择**属性**，**打开方式**设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了
- rep文件可能要和th123.exe在同一个盘符内
- 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）
:::

:::: tip 新版ReplayDnD的Rep转mp4视频功能
::: warning
**整合包内默认启用 `ReplayDnD-old` 旧版，想要使用新版的功能请手动调整** [**如何开关配置 mod**](/mods/WhatsMod.html)

使用时可能会偶尔冒出dll被禁用的弹窗，点确认关掉然后忽略即可，无不良影响

如果一次性同时运行多个录制，可能会因内存不足或CPU占用过高等引发一系列问题，所以请根据自己的电脑性能资源量力而行
:::

- **切换为新版后，先打开一遍游戏**，然后以后右键则的rep文件就会多一个选项 "render to mp4 with soku"，点了就是开始录制了

- **想要同时录制多个rep，请分别在每个rep文件上右键。** ==不要多选rep文件一次性右键点录制，会出现问题==

![ReplayDnD 快速录制 rep 为 mp4 展示.gif](https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x)

![游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)](https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp =400x)

::: info ReplayDnD的Rep转mp4的特点
1. **录制速度成倍数**，不需要像录屏软件那样一比一时间录制；（标题栏可以看到，60fps为一倍速，120fps为二倍速，以此类推）
2. **可多线程录制**，同时录制多个rep为mp4视频，互相之间不干扰，也不被电脑上其他音频干扰；
3. 录制得到的视频尺寸为 640*480(则的游戏分辨率本来就这么大)，60F帧率，**约7000~10000kbps码率**，可配合改皮肤类mod录制
4. 注意使用录制功能后，游戏内Config的“FPS显示”会被关掉，记得自己手动再打开
:::

::: details ffmpeg快速合并一个文件夹内的所有mp4视频文件
```
rem 拼接视频 ffmpeg 命令
chcp 65001
(for %%i in (*.mp4) do @echo file '%%i') > LIST.txt
ffmpeg -f concat -safe 0 -i LIST.txt -c copy Output.mp4
```
上述内容保存为 .bat 脚本
:::

::: caution 

- **Win7不能用，会报错**

- **打了[特效消失（变成一根线）的补丁](/FAQ/In-Games/MissingGraphic.html)后，使用Rep转mp4功能会报错无法使用**

- **Nvida 系列显卡可能会有一下一些情况，不能使用，原因和解决办法未知**
  - 右键点 render 后游戏的标题栏无信息或自动关闭，生成0KB~几十KB的无效mp4文件
  - 点了后录了一小段然后卡死不动
  - 第一次能正常录制，之后就一直出问题了

- **Intel 系列核显可能会有“右键点 render 后如下图所示报错”的情况，不能使用，原因和解决办法未知**

![可能是 Intel 系列核显就会这样报错](https://bu.dusays.com/2024/06/13/666abd762ca5e.png =400x)
::::

