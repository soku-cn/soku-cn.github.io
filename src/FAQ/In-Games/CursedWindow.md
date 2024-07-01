---
title: 游戏画面显示错位

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

![游戏画面显示错位](https://bu.dusays.com/2024/01/21/65acc5407f355.webp =400x)

::: tabs
@tab 解决办法1-微软拼音输入法
::: tip 解决办法1-微软拼音输入法
**如果你是使用的自带的微软中文输入法，右键输入法进入设置，常规，兼容性，取消使用旧版输入法，重开游戏即可。**

![在“英”字上右键，设置](https://bu.dusays.com/2023/08/20/64e216dce37d6.png)

![](https://bu.dusays.com/2023/08/20/64e216eab9ce6.png =x420) ![](https://bu.dusays.com/2023/08/20/64e216f39d71c.png =x420)

**如果也没用或者你不是使用自带输入法而是其他输入法，请查看其他解决办法并通知三回（QQ 1434716883）记录。**

@tab 解决办法2-【重置游戏窗口位置和大小】.bat
::: tip 解决办法2-【重置游戏窗口位置和大小】.bat

![](https://bu.dusays.com/2024/06/19/6672f1bf77c5d.png =500x)

@tab 解决办法3-WindowResizer-old（但是可能不能全屏）
::: tip 解决办法3-WindowResizer-old（但是可能不能全屏）
**先关闭游戏，修改mod配置，==开启 `WindowResizer-old`==，而 ==关掉 `WindowResizer`==**

[**跳转链接——如何开关配置 mod**](/mods/WhatsMod.html)

::: warning
**注意替换完 WindowResizer-old 旧版本后，就不要开全屏了，否则可能会卡住**

@tab 解决办法4-只使用全屏，但是不能拉伸窗口
::: tip 解决办法4-只使用全屏
把游戏拖到最小的 640x480 分辨率，并保存重开游戏，然后再重开游戏拉大，拉大不会触发 bug

当分辨率不是最小时就会触发 bug，所以需要每次都以最小分辨率打开。

在 WindowResizer.ini 里将 `[Size]` 的 Enable 设置为0，即**不允许拖大窗口**，但是这样做依然**可以按 `Alt+Enter` 全屏**

![即使不能拖大窗口，但是这样做依然可以按 `Alt+Enter` 全屏](https://bu.dusays.com/2024/01/21/65acc5895f6b7.webp =400x)

:::

::: warning WindowResizer（非 old 版） 的一个bug
**多开游戏的时候，可能会出现第二个则的缩放转移到第一个则，然后第二个则缩放失效的情况；**
**多开游戏时最好不要按 `Alt+Enter` 全屏，可能会出现只能给第一个则全屏的问题**
:::

