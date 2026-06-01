---
title: 感觉游戏画面模糊

# 标题
icon: circle-info
# 图标
order: 20
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-07-09
#文章编辑日期
---




- Alt + Enter：切换全屏/窗口化
- Alt + 大键盘123：一二三倍整数缩放窗口
- Alt + P：非想天则置顶
- Alt + Tab：切换窗口 

::: info 

1、 请使用 **"Alt + 大键盘123" 一二三倍的整数倍窗口缩放**，不要手动拖拉窗口，否则不规则倍数缩放可能会导致游戏内文字或图片出现锯齿、显示模糊

2、 右键 `th123.exe`，选择属性，兼容性，勾选 "高DPI缩放替代"，选择 "应用程序"。**不要选择"系统(增强)"，会导致游戏打不开！**

![图片加载中... =900x](https://bu.dusays.com/2024/10/26/671cac0b857ea.webp "可以试试勾选“高DPI缩放替代”，选择“应用程序”")


3、还是觉得模糊可以试试启用 [WindowResizer-old 模组](https://gitee.com/soku-cn/WindowResizer/releases/download/v1.0.3/WindowResizer_1.0.3.zip)，关闭 WindowResizer 模组

4、绝对有效的办法：可以试试关闭所有 WindowResizer 模组，只使用 [Magpie](https://github.com/Blinue/Magpie) 或 LosslessScaling 等外部软件来进行缩放和全屏化

:::
<!-- 
::: details WindowResizer-back-2x.ini
```

; https://wiki.514.live/FAQ/In-Games/Blurred.html
; 感觉游戏画面模糊

[Size]
; 设置为 1 允许调整窗口和自由拖拉窗口（保持比例），设置为 0 不允许调整和拖拉窗口
; 建议使用固定的整数倍窗口缩放，而不要手动拖拉窗口，否则不规则倍数缩放可能会导致游戏内文字或图片显示模糊等问题
Enabled=1

; 一倍窗口 1x
; Width=640
; Height=480

; 两倍窗口 2x
Width=1280
Height=960

; 三倍窗口 3x
; Width=1920
; Height=1440


[Position]
; 设置为 1 表示记忆游戏上次运行时的位置，设置为 0 表示不记忆
Enabled=1
X=1
Y=1

[Bars]
; 设置为 1 表示全屏（无边框全屏，非独占全屏）时两边添加黑边，设置为 0 表示不添加黑边（但是依然是 4:3 比例，不会铺满屏幕）
Enabled=1

```
:::
 -->