---
title: 任务栏有游戏，但没有游戏窗口，任务栏预览图为全黑
# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-07-23
#文章编辑日期
---

::: info 问题原因
**是因为窗口到屏幕外面了，窗口位置坐标和窗口大小被莫名其妙错误记录了（位置为负数，窗口大小异常）**

::: tabs
@tab 方法一
::: tip 关闭游戏，双击重置窗口的 bat 即可

![关闭游戏，双击重置窗口的 bat ](https://bu.dusays.com/2024/02/17/65cf95df7d687.png =900x)


@tab 方法二（手动）
::: tip 参考图片手动进行设置
关闭游戏，打开 ```th123/modules/WindowResizer/WindowResizer.ini``` 


![WindowResizer设置示例](https://bu.dusays.com/2024/01/21/65accae5e37fe.webp =450x)

:::

::: warning WindowResizer 的一个bug
**多开的时候，可能会出现第二个则的缩放转移到第一个则，然后第二个则缩放失效的情况**

**以及不要按 alt+enter 全屏，可能会出现只能给第一个则全屏的问题**
:::
