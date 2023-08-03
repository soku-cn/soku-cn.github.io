---
title: 使用Linux+Wine遇到问题
# 标题
icon: circle-info
# 图标
order: 11
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-07-23
#文章编辑日期
---


## 可参考 英文Wiki内的 Linux support 章节
https://hisouten.koumakan.jp/wiki/Linux_support



::: info 引用内容

**引用** —— 2022/04/26 20:09
If your modules arent loading, open winecfg, go to libraries, add d3d9 and configure it `native, then builtin`

If your game is crashing (most likely because of InGameLobby or SokuEngine) try running it using this env:
`LIBGL_ALWAYS_SOFTWARE=1 wine th123.exe`

if you want a shortcut to launch the game try `vi $HOME/.bash_aliases` (it doesnt need to be vim, use whatever text editor you want) and paste this

```
function soku {
        cd ~/(change this to whatever path you've put your game)/HISOUTENSOKU/Touhou\ 12.3\ -\ Hisoutensoku/
        LIBGL_ALWAYS_SOFTWARE=1 WINEDEBUG=err-all,fixme-all wine th123e.exe
        cd ~
}
```

then save, then run `source ~/.bash_aliases` and now you can run hisoutensoku by typing `soku` in the terminal

:::



## 部分Mod与Wine的兼容性，新mod若有问题可私聊求助
![](https://img.514.live/img/202307231901059.png)
