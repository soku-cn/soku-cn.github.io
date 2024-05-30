---
title: Game's on taskbar but no window
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

::: info Problem Causes
**It's because the position and size of the game window got wrong in `WindowResizer.ini` for unknown reason.**


::: tip Solution
Kill the game and open ```th123/modules/WindowResizer/WindowResizer.ini``` 

there's follows a default config 
```
[Size]
; allow resizing the game window (1) or disallow (0)
Enabled=1
Width=800
Height=600

[Position]
; remember the game window position on screen between runs (1) or do not remember (0)
Enabled=1
X=1
Y=1

[Bars]
; whether to display black bars around the game content in fullscreen when letterboxing (1) or to only display the game content (0)
Enabled=1
```

it's recommended to make a your own config as `WindowResizer-back.ini` in case of this problem happening again.

:::

::: warning Another WindowResizer bug for multi instances of the game
When you run multi instances of the game, you may got WindowResizer not working on the second game, also don't use Fullscreen then.

:::
