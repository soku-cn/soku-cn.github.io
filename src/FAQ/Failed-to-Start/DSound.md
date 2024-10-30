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

## 情况一：无法启动游戏 Dsound Error
::: info 情况一：无法启动游戏 Dsound Error
请检查电脑右下角任务栏音量喇叭如果存在红叉图标，音频设备是否连接正常，**==声卡驱动==** 是否正常，电脑能否正常播放声音

![像这样右下角喇叭红叉，要么是没有插耳机，要么是声卡驱动异常，是无法打开游戏的](https://bu.dusays.com/2024/10/26/671cac4a321c2.webp =300x)


**实在没有耳机或者插耳机也没用的话，可以尝试 [下载安装一个虚拟声卡软件例如 Voicemeeter](https://voicemeeter.en.softonic.com/)**

有人也遇到手柄带扬声器，插入后电脑识别为音频设备的情况

::: important 已知的另一种情况是，Win7 系统且电脑声音和声卡正常
建议加我QQ 1434716883 让我看看情况，有新的ModLoader可能修复了问题

根据之前的案例，部分电脑 Win7 系统且电脑声音和声卡正常，使用新的 d3d9.dll mod加载器（ModLoader）时会发生这种报错

解决办法是下载 [**旧版的mod加载器**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/d3d9-old.dll)，下载后改名为 `d3d9.dll`，替换进 th123 文件夹内
:::

## 情况二：游戏中途报错 DsoundBuffer



<!-- @include: ../../mods/QoLMods/DSoundFix.md -->

