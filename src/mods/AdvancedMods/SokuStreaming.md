---
title: 直播用边框-SokuStreaming

# 标题
icon: circle-info
# 图标
order: 60
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-01
#文章编辑日期
---


::: info 功能简介
SokuStreaming 默认关闭

- 单机、观战、看REP时可以显示卡组、升级、名称、比分等信息，不是直接显示在游戏窗口，而是配合 OBS、直播姬 等录屏软件使用

在录屏软件内选择添加源 “浏览器”，地址栏输入`http://127.0.0.1`（**默认使用80端口，可以改为其他端口，不要使用 https**），设置尺寸为`1920*1080`（16:9）
也可以在浏览器内直接打开来检验是否正常，地址栏输入`http://127.0.0.1` 

在对应ini文件里设置键位，通过键位可以修改比分、改名（**不要设置中文名否则游戏会崩溃**）
默认热键如下
大键盘1左方减分，2左方加分，3左方改名；5重置分数，6刷新，7修改回合名；8右方减分，9右方加分，0右方改名

还可以在对应ini内修改 css,js 等自定义布局 `（th123\Modules\SokuStreaming\SokuStreaming.ini）`

![效果如图 【非想天则】舞虎杯比赛（直播录像）https://www.bilibili.com/video/BV1mm4y1Z7S5/ ](https://bu.dusays.com/2024/01/21/65acdb7f0553d.webp =800x)

::: warning
**若默认的80端口冲突或游戏多开则会在打开游戏时报错，改为其他端口即可**
:::