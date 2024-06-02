---
title: 扩展Rep文件名格式-ReplayExtension

# 标题
icon: circle-info
# 图标
order: 21
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-06-01
#文章编辑日期
---

::: info 简介

**增加 Replay 文件名的格式**
%winlose 表示输赢，自己赢了会变成 win，自己输了会变成 lose，未分胜负会变成 no_game

- ReplayExtension 已包含于【2024-06-01 完整游戏包】，不包含于升级包


![效果如图](https://bu.dusays.com/2024/06/01/665b323f652af.png =600x)
:::

::: info 使用说明

- [**下载 ReplayExtension Mod**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/ReplayExtension_Mod.zip)

**1、将压缩包中 ReplayExtension 文件夹的 `SWRSAddr.ini` 和 `winmm.dll` 两个文件放入 th123 文件夹内**

![](https://bu.dusays.com/2024/06/02/665bfd319ac63.png =500x)

**2、将下列文本覆盖掉 th123文件夹内的 `configex123.ini` 内的原内容**

```
[replay]
####【 自定义保存的rep文件名格式 】################
# %p1 表示 1P机签
# %c1 表示 1P机体名
# %y %m %d %h %min %sec 表示时间年 月 日 时 分 秒
# \  表示文件夹
# %winlose 表示输赢，自己赢了会变成 win，自己输了会变成 lose，未分胜负会变成 no_game
###########################################

file_vs=[%p1]_VS_[%p2]\%y_%m_%d_%h_%min_%sec_%p1(%c1)_%p2(%c2)_[%winlose]
```


- [ReplayExtension 原链接](https://resemblances.click3.org/product_list/index.cgi/detail/38)

:::




