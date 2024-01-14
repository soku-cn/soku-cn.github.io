---
title: 开则弹窗没有此Unicode字符可以映射
# 标题
icon: circle-info
# 图标
order: 11
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: Laqua
#作者
date: 2024-01-14
#文章编辑日期
---

::: info 
**状况如图**

![非法字符 json.jpg](https://bu.dusays.com/2024/01/14/65a39072b47b0.jpg)

:::

::: tip 解决办法

点开 th123 文件夹，用文本编辑器打开里面的 ModLoaderSettings.json 文件

![ModLoaderSettings.json 内含有非法字符](https://bu.dusays.com/2024/01/14/65a390c264b27.png)

清理含有非法字符的语句段，以及追查 modules 文件夹内的这个非法字符文件名的dll文件，将其删除

就可以了

:::
