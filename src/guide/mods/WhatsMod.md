---
title: Mod通用说明

# 标题
icon: circle-info
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## **我的mod群200803640**
::: info
欢迎对mod感兴趣，想玩mod联机，有疑问需要帮助，想自己做mod魔改的朋友。
:::

## **什么是 SWRSToys 插件**

::: info
SWRSToys 的 Github 项目仓库  https://github.com/SokuDev/SokuMods/
国际非想天则 Disocrd 社区群（需梯子）  https://discord.gg/hisouten
:::

![三件套组成 SWRSToys](https://img.514.live/img/202308041020205.png)

### **1.如何开关插件？**
::: info 1.如何开关插件？
点 【打开SWRStoys.ini插件配置文件】.bat 进行插件的开关设置
- 在每行语句开头加英文分号，代表关闭插件，语句是绿色
- 在每行语句开头删英文分号，代表启用插件，语句是黑色
- 若新添加mod，将mod文件放入modules文件夹，并在此添加路径语句
各插件详细信息请看chm手册，网页也会开始建设并更新内容，则以网页为准
:::

### **2.如何添加新插件？**
::: info 2.如何添加新插件？
一般插件即是单独dll本体，有的也会有ini配置文件(这样就会包成一个文件夹)

第一步：将dll文件或者文件夹放入modules文件夹
第二步：打开SWRSToys.ini，添加路径语句并保存

路径语句例子：
1.PunishDisplay=Modules/PunishDisplay.dll  （不带文件夹，dll文件直接放到modules文件夹内）
2.th123intl=Modules/th123intl/th123intl.dll  （带ini组成文件夹，整个文件夹放到modules文件夹内）
:::

### **3.设置插件，自定义按键和开关功能等**
::: info 3.设置插件，自定义按键和开关功能等

某些插件的ini配置文件内或者游戏内可以进行设置，如自定义热键和开关某些功能
大多数是无需调整的
键位码可参考此表    https://github.com/SokuDev/SokuMods/blob/master/VIK.md

注意插件有版本之分，110与110A版本的插件不能互通，一般正常切换版本是没问题的，遇到check version failed的弹窗要注意是不是切换出了问题，重新切换就行


 
