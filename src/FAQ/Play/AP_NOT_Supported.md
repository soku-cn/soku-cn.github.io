---
title: 为什么我不支持AutoPunch直连
# 标题
icon: circle-info
# 图标
order: 7
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

::: tip 不支持 AP 也没有关系
==**可以在大厅内使用 Swarm 来联机，所以不支持 AP 也没有关系。**==

[**跳转链接——大厅内使用 Swarm 联机**](/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA)

[**也可以通过 IPV6 直连**](/mods/AdvancedMods/IPv6Mod.html)
:::

::: info 检测自己的网络是否支持AP
**在“自助手册”文件夹内，点这个 `autopunch检测-check-gui.exe` 可以进行检测**

或者[下载 autopunch检测-check-gui.exe](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/autopunch%E6%A3%80%E6%B5%8B-check-gui.exe)

![图片加载中 =300x](https://bu.dusays.com/2024/02/28/65defee74c6b5.png " ")

::: tabs

@tab 重新检测
**如果是这样是检测失败，就再试一次**

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65aca10f90429.webp "再试一次")

@tab 支持AP
**是这样就说明 支持AP**

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65aca1919e2f4.webp "AP Supported 支持AP")

@tab 不支持AP
**是这样就说明 不支持AP**

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65aca16127d2a.webp "AP NOT Supported 不支持AP")

:::

::: details 为什么我支持AP还是显示红字报错无法连接？【不使用 Swarm 的情况下】
::: info
1、再重新多试几次

2、可能对手不支持AP

3、可能是端口抽风了，可以试试**更换建主端口**

4、[**使用 Swarm 中转联机**](/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA)

5、大厅可以修改这个10800，比如改成10801，保存即可，不需要重开游戏

![图片加载中... =400x](https://bu.dusays.com/2024/01/24/65b1333e9f810.png "点开这个 SokuLobbies.ini")

![图片加载中... =400x](https://bu.dusays.com/2024/01/24/65b1333ec7ebc.png "修改这个10800，比如改成10801，保存即可，不需要重开游戏")


:::

::: details 为什么我显示不支持AP？

::: info NAT类型为“对称型 (Symmetric)”时无法UDP打洞直连

网络被各种路由或者运营商套娃了，如一些餐厅网，校园网（浏览器网页登陆验证而非宽带拨号），酒店网，公司网和插流量卡的移动WIFI，手机流量等，就会因为被多层NAT设备套娃或者防火墙限制而无法穿透，就会不支持了

::: tip 我还能抢救吗？

可以试一试看，**得花点时间和耐心**，如果你是在用你自己的家庭网络，且可以登陆后台操作的话。

其他情况比如校园网（`10.x.x.x` 浏览器网页登陆验证），手机热点，酒店公司餐厅等公共场所
直接不用继续看了，没办法去操作的。
:::


::: details 下面尝试解决AP不支持的问题

::: info 查看自己网络环境的路由线路
按win+r然后粘贴这个运行   ```cmd /k tracert -4 -d -h 6 baidu.com```

![图片加载中... =600x](https://bu.dusays.com/2024/01/21/65aca2c7b2cc4.webp "此示例中，他有两个路由器`（192.168.88.1 和 192.168.1.1）`和一个光猫（天翼网关）`（100.xxx）`")

再输入 `ipconfig` ，找到 **“以太网适配器 本地连接”**，可查看本机内网 IP 并再次确认自己电脑的 **上级路由器（默认网关）**

![图片加载中... =600x](https://bu.dusays.com/2024/01/21/65aca347da187.webp "示例中本机内网 IPv4 地址为`192.168.88.4`，默认网关（路由器）为`192.168.88.1`")

::: tabs
@tab 第一种办法（通过光猫上网）
直接让自己电脑接到拨号源头（如果是光猫拨号就接到光猫上，如果是光猫桥接路由器拨号，就接到对应路由器上）

根据上面得到的 **默认网关**，在浏览器地址栏中输入并回车（**注意别变成百度搜索这个IP了**）

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65acab1ad1174.png "我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）")

先不需要登陆，确保连接后电脑能上网，然后再次做上面的 `tracert` 与 `ipconfig` 这两条命令进行确认，同时进行AP检测，一般是可以支持的了

@tab 第二种办法（无法接触光猫）
不能直接连光猫或光猫上无网络（已被桥接路由拨号），参考下面设置光猫桥接路由拨号或者NAT端口转发

顺便比对品牌和网线确认电脑是连接到哪个路由器，默认账号密码应该在路由器上有贴，登陆后进入后台

![图片加载中... =700x](https://bu.dusays.com/2024/01/21/65acac7ea8d64.webp "示例，成功登陆路由器后台")


接下来找到并**打开 UPnP 设置，设置 NAT端口转发或虚拟服务器，协议选择UDP或者BOTH, ALL**，输入自己的本机内网IP（在 ipconfig 里查看）

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65acad7a27a86.webp "路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有")

设置完毕后再进行AP检测，可能有效，也可能无效。**还是无效就算了放弃吧**

有效的话，在DHCP设置里给自己的电脑（根据内网IP判断哪个设备是自己的电脑）设置静态保留内网IP，这是为了防止每次重启网络后电脑的内网IP变化，之后应该就没什么问题了

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65acadf03cbc1.webp "不同设备的设置界面关键词可能不一样，**DHCP，静态，保留**")

:::
