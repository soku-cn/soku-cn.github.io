---
title: DSound相关弹窗报错
# 标题
icon: circle-info
# 图标
order: 12
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-21
#文章编辑日期
---




:::: tabs
@tab 情况一：无法启动游戏，Dsound Error
::: info 情况一：无法启动游戏，Dsound Error
请检查电脑右下角任务栏音量喇叭如果存在红叉图标，音频设备是否连接正常，**==声卡驱动==** 是否正常，电脑能否正常播放声音

![像这样右下角喇叭红叉，要么是没有插耳机，要么是声卡驱动异常，是无法打开游戏的](https://bu.dusays.com/2024/02/29/65e00037246ed.png =300x)


没有耳机或者插耳机也没用的话，可以尝试**安装一个虚拟声卡软件例如 Voicemeeter**

::: important 已知的另一种情况是，Win7 系统且电脑声音和声卡正常
Win7 系统且电脑声音和声卡正常，使用新的mod加载器（d3d9.dll ModLoader）时会发生这种报错

解决办法是换用[**旧版的mod加载器**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/d3d9-old.dll)，下载后改名为 `d3d9.dll`，替换进游戏文件夹内
:::



@tab 情况二：游戏中途报错DsoundBuffer
::: info 情况二：游戏中途报错DsoundBuffer
打开游戏后**不要再次插拔耳机**，非想天则不会自动切换音频输出设备，会崩溃或者依然保持旧设备播放声音

可以尝试开启[**DSoundFix 修复插件**](/mods/QoLMods/DSoundFix.html)，**其可修复中途音频设备切换导致的问题**

[如何开关配置mod](/mods/WhatsMod.html)

::: warning
DSoundFix 修复插件**默认关闭**

原因是 **“部分电脑”** 不支持，启用此插件时会由于未知原因而无法打开游戏

**你如果不知道自己电脑支不支持，推荐你先打开试试看，不支持再关掉即可**
:::



