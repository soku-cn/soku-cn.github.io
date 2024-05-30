---
title: There's folder in Replay but no files

# 标题
icon: circle-info
# 图标
order: 4
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-09
#文章编辑日期
---


::: tabs
@tab Case 1: Fix configex123.ini

::: tip Fix configex123.ini

Here follows recommended config

adding `[%p2]\` fix it, don't use `%p1_VS_%p2\...`
```
[replay]
###########################################
# %p1 means 1P's Profile name
# %c1 means 1P's Character name
# %y %m %d %h %min %sec means Year, Month, Day, Hour, Minute, Second
# \  means folder path
###########################################

file_vs=[%p1]_VS_[%p2]\%y_%m_%d_%hh%minm%secs_%p1(%c1)_%p2(%c2)
```
@tab Case 2: Bad Profile Name
::: tip Case 2: Bad Profile Name

Maybe you got Space or what in the end of your profile name

you could navigate to your profile folder, delete your old profile filename and input new filename

:::