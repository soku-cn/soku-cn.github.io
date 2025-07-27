---
title: 如何线下联机打则
# 标题
icon: circle-info
# 图标
order: 3
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## 视频教程

::: info 视频教程

[**【⑨都能看懂的线下非想天则联机教程-哔哩哔哩】**](https://www.bilibili.com/video/BV1QU411d7P8)

:::
::: caution 注意，线下联机进入 NETWORK 后，按 S 键退出大厅界面切换回原版菜单


![按 S 键切换回原版菜单，或者关掉大厅 SokuLobbies Mod](https://bu.dusays.com/2024/01/21/65acb556e19fb.webp =600x)

:::




## 图文教程


::: important 第一步：关掉 Windows 防火墙

按 `Win+S` 快捷键，搜索并打开 控制面板

![关闭防火墙](https://bu.dusays.com/2024/01/21/65acbef5331e0.webp =900x)

:::

::: info 如何线下联机打则

- 首先使用网线直接互联两台电脑，按 `Win+R` 快捷键，输入 `ncpa.cpl` 回车，或者 网络和Internet设置 里点 “更改适配器选项”

- 找到 ==以太网==，此时它不显示为 “网络电缆已拔出” 则 OK。
  - 若显示为 “网络电缆已拔出”，可能的原因：网线没插紧接触不良、网线坏了、电脑的网络接口坏了

::: tabs
@tab 方法一：通过网线直连两台电脑玩游戏
::: tip 方法一：通过网线直连两台电脑玩游戏

- 双击点开 “以太网”，再双击 “Internet协议版本4”，把“自动获取IP地址”改成“手动设置IP地址”，并按如下设置IP地址
  - A 电脑当 1P，设置 IP 地址 `192.168.1.100`，网关可以留空
  - B 电脑当 2P，设置 IP 地址 `192.168.1.101`，网关要设置为 `192.168.1.100`，即 A 电脑的 IP 地址
  - 两台电脑的 DNS 全都不需要设置
- 设置完毕后，A 电脑 打开 `cmd`，输入 `ping 192.168.1.101`，看看能不能 ping 通，能 ping 通就可以联机
- 如果无法 ping 通，可以按 `Win+R` 输入 `ncpa.cpl` 回车，将两台电脑的 以太网 右键禁用，然后再启用

> [!caution]
> **切记！线下打完了以后，记得要 ==把 “手动设置 IP” 改回“自动获取 IP”，否则会无法联网==**

![以太网，也叫本地连接](https://bu.dusays.com/2024/10/26/671caa614d79e.webp =800x)

![手动设置 IP](https://bu.dusays.com/2024/01/21/65acbc2fa7e61.webp =800x)

![线下联机用这个选项更方便，如果是线上用 swarm 玩则不要用这个方式](https://bu.dusays.com/2024/10/26/671c9c9780941.webp =600x)


<!--  @tab 方法一：通过网线直连两台电脑玩游戏
::: tip 方法一：通过网线直连两台电脑玩游戏

1. 首先使用网线直接互联两台电脑

2. 网线连接后，查看 ipconfig，应该会看到以太网显示 169 打头的 IP，一台电脑不显示默认网关，一台电脑会有默认网关

3. 以不显示“默认网关”的那台机子为1P，就叫他A电脑，它来建主。假设A电脑就是如图所示的 `169.254.100.144`

4. 现在我们的B电脑就是有显示“默认网关”，来当2P。随便打开一个输入框比如文件夹的地址栏，把A电脑的IP地址 `169.254.100.144:10800` 手敲上去然后复制，进IP，而不要在游戏里使用那个密码锁连接IP。

5. 如果进不去，尝试用B电脑建主，用A电脑进B电脑的IP。还不行那就检查是不是找错了位置，要找“以太网”。 -->




@tab 方法二：通过路由器连接两台电脑玩游戏
::: tip 方法二：通过路由器连接两台电脑玩游戏

> [!caution]
> **不能用手机开热点，然后两台电脑连到同一个热点上，这是无法互相联机的，热点自带有网络分段AP隔离**

通过同一个 路由器 或 WIFI 连接两台电脑，确保两台电脑处于同一个局域网内（有线无线都可以）

- 分别在两台电脑上 `Win+R` 输入 `cmd`

- 在黑框内输入 `ipconfig`，查看对应网络 `以太网适配器 以太网` 或 `无线局域网适配器 WLAN` 下的 `IPv4 地址`

- **检查双方的 ==默认网关== 是否相同，相同才是属于同一局域网内**

- 尝试 `ping 对方电脑的 IPv4 地址`，ping 通说明 OK（不通请检查防火墙）

- 如图，若 A电脑的 IP 显示为 `192.168.31.121` 使用默认 `10800` 端口建立主机，那么 B电脑就可以使用 `192.168.31.121:10800` 来连接 A电脑

![ipconfig 查看本机IP](https://bu.dusays.com/2024/01/21/65acbede3a8ff.webp =800x)



@tab 方法三：在一台电脑上用两个键盘玩游戏
::: tip 方法三：在一台电脑上用两个键盘玩游戏

使用软件 **Keyboard Splitter**（将第二个键盘虚拟成手柄，或者你本身就有手柄） 

- **注意要给模拟键盘玩家的机签 Profile 重新设置键位。**

- [**软件下载链接（汉化版 by 鱼的千千，内含使用说明）**](https://www.123pan.com/s/scmzVv-EnA6v.html) | [**Keyboard Splitter原Github地址**](https://github.com/djlastnight/KeyboardSplitterXbox/)

- 详细的还可以看我 [**2V2 说明里的部分**](https://docs.qq.com/aio/p/sckx6x9a9t2qquv)

![KeyboardSplitter 模拟键盘使用方法.gif](https://bu.dusays.com/2024/04/05/660f77d6974cf.gif =600x)

> 使用说明和参考：
> [《格斗游戏本地键盘双人，多个键盘分别模拟多个控制器，KeyboardSplitter 软件使用演示 Keyboard Splitter Xbox](https://www.bilibili.com/video/BV1hT411h7uw/)
> [《Touhou How To : Multiplayer with 2 keyboards on same PC》](https://www.youtube.com/watch?v=_hvoFs_amT8)
:::