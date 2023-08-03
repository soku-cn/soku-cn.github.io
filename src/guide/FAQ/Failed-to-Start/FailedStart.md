---
title: 运行游戏没有窗口出现
# 标题
icon: circle-info
# 图标
order: 9
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: Laqua
#作者
date: 2023-07-22
#文章编辑日期
---

## **打开游戏没反应，没窗口出现，任务栏也没有**
::: info
1. 打开任务管理器，查看是否有 ```th123.exe``` 进程
2. 若有，则是 ```DsoundFix```[^first] 插件导致的问题 ，原因未知，极个别的电脑上存在这个问题
:::

### **解决方法**
::: info 解决办法
先关闭所有 ```th123.exe``` 进程，打开```SWRStoys.ini```配置文件，找到 DsoundFix 一行，加分号屏蔽掉，保存后再开游戏

若没有，则可能是其他mod冲突或有mod 的配置文件有问题，可以先试试恢复默认SWRSToys配置或重新下载老游戏升级包覆盖换新
:::

[^first]: [关于这个插件](DSound.md)
