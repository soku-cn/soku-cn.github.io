---
title: 网易云、UAC、任务管理器游戏崩溃
# 标题
icon: circle-info
# 图标
order: 8
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: Laqua
#作者
date: 2023-07-22
#文章编辑日期
---

![address 4081d2](https://bu.dusays.com/2023/08/29/64edac2329545.png =450x)

![弹出类似这样的“已停止工作”或者直接不弹框游戏消失](https://bu.dusays.com/2023/08/29/64edac3de0f34.jpg =450x)


::: info 解决办法1
**不要使用这些快捷键： Ctrl+Alt+Delete 打开任务管理器、Win+L 锁屏**

**不要进入睡眠状态、使用 UAC 用户账户控制(有些游戏、软件等会要求UAC权限，百度搜关闭UAC)**

**不要打开控制面板**

**打开网易云音乐也会触发，见下图设置后即可 👇**

![网易云设置，把禁用GPU加速的勾给勾上](https://bu.dusays.com/2023/08/20/64e2140ab3814.png =650x)

:::

::: info 解决办法2
禁用 Trialmode

![SWRSToys.ini配置文件内，Ctrl+F搜索 trial，句首加分号，保存](https://bu.dusays.com/2023/08/29/64edaf1bd154a.png =450x)

:::