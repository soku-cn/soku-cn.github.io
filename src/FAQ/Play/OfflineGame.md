---
title: 如何线下联机打则
# 标题
icon: circle-info
# 图标
order: 4
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

::: info 方法一、通过网线直连两台电脑玩游戏

- 首先使用网线直接两头互联两台电脑
- 按 Win+R 输入 **ncpa.cpl** 回车 
- 找到本地连接(以太网)，右键-属性-双击 `Internet协议版本4`，把自动获取IP地址改成手动设置，并设置IP地址

例如：
- A 电脑设置 IP 地址 192.168.1.100  网关和DNS可以不设置
- B 电脑设置 IP 地址 192.168.1.101  网关和DNS可以不设置
- **注意 A 和 B 的 IP 地址不能相同**

- **注意：结束本地联机后，记得把手动设置的IP改回自动获取IP，否则会无法联网。**

![手动设置 IP](https://bu.dusays.com/2023/10/11/6526830a749ed.png)

:::

::: info 方法二、通过路由器连接两台电脑玩游戏

使用 **网线** 或 **WIFI** 或 **热点** 或 **路由器** 连接两台电脑，将两台电脑连接上同一个局域网内

**然后分别在两台电脑上 Win+R 输入 cmd，并在 cmd 黑框内输入 ipconfig，查看对应网络（以太网适配器 以太网）下的 ipv4 地址，并尝试 ping 对方电脑的地址，ping 通说明OK。（确认双方的默认网关是同一个IP，相同说明是连接的同一个路由器）**

![ipconfig 查看本机IP](https://bu.dusays.com/2023/10/11/6526830946f03.png)

若连接失败，可以尝试**换另一方建主**，或者在**检查关闭防火墙。**

![关闭防火墙](https://bu.dusays.com/2023/10/11/6526830a940fa.png)


`例如：若A 电脑的 IP 显示为 192.168.100.101 使用默认 10800 端口建立主机，B 电脑就可以使用 192.168.100.101:10800 来进行连接`

**此时两台电脑也可以分别正常上网，不影响本地局域网联机**
:::




::: info 方法三、在一台电脑上用两个键盘玩游戏

使用软件 **Keyboard Splitter**（将第二个键盘虚拟成手柄，或者你本身就有手柄） 

**注意：进入 VS PLAYER 模式，按C给2P键重新设置键位位为手柄按键即可。**

**软件下载链接**: 
（汉化版，内含使用说明）https://pan.baidu.com/s/1ClhNvt-yotQiIj4AgRsiMw?pwd=2w6n 

（原Github地址）https://github.com/djlastnight/KeyboardSplitterXbox/releases/tag/


**使用说明、参考：**
《格斗游戏本地键盘双人，多个键盘分别模拟多个控制器，KeyboardSplitter 软件使用演示 Keyboard Splitter Xbox》
https://www.bilibili.com/video/BV1hT411h7uw/

《Touhou How To : Multiplayer with 2 keyboards on same PC》
https://www.youtube.com/watch?v=_hvoFs_amT8
:::
