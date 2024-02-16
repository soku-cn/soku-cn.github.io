---
title: 任务栏有游戏，但没有游戏窗口，任务栏预览图为全黑
# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: Laqua
#作者
date: 2023-07-23
#文章编辑日期
---

::: info 方法一
**关闭游戏，双击重置窗口的bat即可**

![新版本的整合包内才有这个bat](https://bu.dusays.com/2024/02/17/65cf95df7d687.png =700x)

:::


::: info 方法二
关闭游戏，打开 ```th123/modules/WindowResizer/WindowResizer.ini``` 
参考图片进行设置
**是因为窗口到屏幕外面了，窗口位置坐标和窗口大小被莫名其妙错误记录了（位置为负数，窗口大小异常）**

![WindowResizer设置示例](https://bu.dusays.com/2024/01/21/65accae5e37fe.webp =450x)

:::
