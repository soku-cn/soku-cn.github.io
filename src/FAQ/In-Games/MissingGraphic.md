---
title: 游戏内部分弹幕和特效贴图消失（变成一根线）

# 标题
icon: circle-info
# 图标
order: 5
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

![**如：灵梦 JA 的黄色护符特效变成一根线，早苗 C 弹星星变成一根线等**](https://bu.dusays.com/2023/08/20/64e2166943b5e.png =500x)

::: info 问题原因
**这是因为你的新电脑设备，新 intel CPU 新核显，新版本 intel 核显的驱动程序，对非想天则这个旧游戏有 bug**
:::

::: tip 解决办法
1、右键计算机，管理，设备管理器，显示设备，确认电脑是否有**独立显卡**，若有则可以使用独立显卡运行游戏（百度）

2、若只有 XXX Graphic（**核显**），则可以尝试右键，属性，**回滚驱动程序**，此方法对某些人的设备可能有效，**也可能无效**，若无效可再重新更新显卡驱动
:::

::: warning 已知的失败案例，除非加独显或者换CPU换电脑，就只能忍受特效显示的问题了
CPU：Intel® 12th Gen Core i7-12700H  （首次出现时间 2022-11）
核显：Intel® Iris® Xe Graphics

CPU：Intel® N95 x86 Family 6 Model 14 Stepping 0  （首次出现时间 2023-02）
核显：lntel® UHD Graphics
:::

![像这种新的硬件设备，最低的驱动都没办法](https://bu.dusays.com/2023/11/20/655b80c94f56f.png =700x)
