---
title: 如何线下联机打则
# 标题
icon: circle-info
# 图标
order: 10
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## **方法一、在一台电脑上用两个键盘玩游戏**
::: info 方法一、在一台电脑上用两个键盘玩游戏

使用软件 **Keyboard Splitter**（将第二个键盘虚拟成手柄，或者你本身就有手柄） 

**软件下载链接**: https://pan.baidu.com/s/1ClhNvt-yotQiIj4AgRsiMw?pwd=2w6n

**注意：**进入 VS PLAYER 模式，按C给2P键重新设置键位位为手柄按键即可。

参考：《Touhou How To : Multiplayer with 2 keyboards on same PC》
https://www.youtube.com/watch?v=_hvoFs_amT8
:::

## **方法二、在两台电脑上玩游戏**
::: info 方法二、在两台电脑上玩游戏

使用一根网线直接连接两台电脑，或者将两台电脑连接上同一个局域网（Wifi或者手机热点或者路由器，无线信号够好离得够近的话，应该不会出现丢包顿卡的情况）

然后分别在两台电脑上 Win+R 输入 cmd，并在cmd黑框内输入 ipconfig，查看对应网络（以太网适配器 以太网或无线局域网适配器 WLAN）下的ipv4地址，并用这个IP联机即可。

若连接失败，可以尝试换另一方建主。

还是不行的话，分别在两台电脑上 控制面板\所有控制面板项\网络连接 中找到本地网络(以太网)，右键-属性-双击  Internet协议版本4，把自动获取IP地址改成手动设置，并设置IP地址，注意两台电脑IP地址不能相同，之后即可直接使用此IP+10800联机。

**注意：要重新接入互联网，记得把手动设置的IP改回自动获取IP，否则可能无法联网。**
:::

