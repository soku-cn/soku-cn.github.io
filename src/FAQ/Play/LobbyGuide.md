---
title: 大厅常见问题(联机教程)
# 标题
icon: fa-solid fa-star
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-01
#文章编辑日期
---

## **大厅内如何联机**

::: important 联机教程 👇 👇 👇 

[**视频教程 —— 新人指路 2024五月最新 “新则”使用向导【非想天则-整合包】**](https://www.bilibili.com/video/BV1gZ421s7yF/)

[**图文教程 —— 大厅内使用 Swarm 联机**](/Beginners/BeforePlaying.html#使用-swarm-等中转-ip-在大厅里联机)

:::



## **联机失败，显示红字报错**
::: caution 联机失败，显示红字报错
::: tabs

@tab 情况一：没有正确使用 Swarm，且网络不支持 AP 打洞直连

![](https://bu.dusays.com/2024/01/21/65acafbf35591.webp =400x)

![](https://bu.dusays.com/2024/02/21/65d5783ecd429.png =400x)

对手不支持 AP，也没正确使用 swarm 建主，所以你进不去他

::: tip 解决办法


**自己开好 Swarm，点中转，点IP用于大厅，然后进不去别人的时候，自己立马原地建主，然后别人进自己就可以进来了。**   

@tab 情况二：双方版本不同

![](https://bu.dusays.com/2024/01/21/65acb0ebcf925.webp =400x)

![检查游戏标题的 giuroll 版本，以及大厅界面右下角的大厅版本](https://bu.dusays.com/2024/01/21/65accc0205ba1.png =300x)

::: tip 请注意大厅界面的公告，及时更新

联机时显示这种四行红字报错提示，意思是双方版本不一致
Your version一行是你自己的版本，图中 `GiuRoll 0.6-62FPS with SWR` 的意思是 0.6.X 系列版本giuroll 62F CN + 绯想天合体，
Their version一行是对方的版本，图中 `GiuRoll-62FPS with SWR` 的意思是 0.5.X 系列版本giuroll 62F CN + 绯想天合体，

合体绯想天配置错误的话，也会出现连接不上的情况的，检查 `th123文件夹` 里的 `configex123.ini` 配置文件


@tab 情况三：弹窗“Failed to get public IP”

![Failed to get public IP](https://bu.dusays.com/2024/01/21/65acb17f3c9bb.webp =300x)

**意思是服务器无法获取你的公网IP（没使用 swarm 的情况下）**

::: tip 解决办法
**1、在这里点开大厅的 ini 配置文件  `th123/modules/SokuLobbiesMod/SokuLobbies.ini`**

![](https://bu.dusays.com/2024/01/21/65acb227de9a8.webp =600x)

**2、把 `https://api-ipv4.ip.sb/ip` 的句首的分号删掉，把 `http://www.sfml-dev.org/ip-provider.php` 的句首加上英文分号，然后保存并重开游戏**

![把 ipv4.sb 的句首的分号删掉，把 sfml-dev 的句首加上英文分号](https://bu.dusays.com/2024/01/21/65acb240ef91e.webp =400x)


> 大厅获取用户IP的网址，默认用第一个 `http://www.sfml-dev.org/ip-provider.php` ，有问题了再用第二个 `https://api-ipv4.ip.sb/ip`
:::

## 大厅内的操作、发表情
::: info 大厅内的操作

- 在电梯和机子前按 `键盘 Z` 交互
- 按 `Esc` 退出大厅房间
- 按住`键盘 A` 加左右方向可以疾跑  
- 按住 `键盘 S` 和 `方向键`，可以自由移动镜头（自己角色不动），再同时按住 `键盘 A` 可以加快镜头的移动速度
- 聊天框内输入 `/help` 查看全部命令列表 
- 发表情是用`两个冒号中间夹着名字和数字`的格式，如 `:reimu1:` （见图1）

![图1 表情文件在这里查看 `th123\Modules\SokuLobbiesMod\assets\emotes\list.json`](https://bu.dusays.com/2024/01/21/65acb2edc1742.webp =900x)

:::

## **全开档解锁**

::: info 全开档解锁

- **不想自己打成就解锁的话，可以手动使用全开档（见图2）**

![图2 成就解锁全开档](https://bu.dusays.com/2024/05/05/66377cc681625.png =900x)

:::


## **修改聊天框热键**
::: info 修改聊天框热键


- **默认是 `Enter 回车键` 开关聊天框**
（**可在 `th123/modules/SokuLobbiesMod/SokuLobbies.ini` 内自定义开关聊天框的热键**）

```
ChatKey=0x0D   
; 设置打开聊天界面的快捷键，默认0x0D，回车
; 推荐的其他键位：0x09是 TAB，0x11是 CTRL，0x12是 ALT
; 键位参考表   https://github.com/SokuDev/SokuMods/blob/master/VIK.md
```

:::



## **这样做就可以大厅建主同时发IP到群里**

::: tip 
**在这里点开大厅的 ini 配置文件  `th123/modules/SokuLobbiesMod/SokuLobbies.ini`**
```
AcceptHostlist=1
; 设置为 1 可以在大厅内建主的同时，向群里发 IP，别人既可以在大厅内进入，也可以通过 IP 连接对战
; 设置为 0 则只允许大厅内连接对战，无法通过 IP 进入
```

![](https://bu.dusays.com/2024/07/26/66a38f703348d.png =600x)

<!-- ![](https://bu.dusays.com/2024/04/18/6621083a00f28.png =800x) -->

:::



## **大厅内自己显示为黑块，菜单里点自定义形象就崩溃**

::: info 解决办法

**看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，删除 `settings.dat` 文件**


![删除 settings.dat 文件](https://bu.dusays.com/2024/01/21/65acb47068f41.webp =600x)
:::

## 游戏ESC返回主菜单时卡住

::: warning 


**游戏ESC返回主菜单时卡住为正常，不要强行关闭游戏，挂在后台稍微等一会儿即可**


:::

## **大厅房间进不去，卡加载，"Unknown exception"报错**

![大厅房间进不去，卡加载，"Unknown exception"报错](https://bu.dusays.com/2024/01/21/65acb556e19fb.webp =400x)

::: info 发生甚么事了
**情况1：** 如果别人也显示这个画面进不去，那就是大厅主服务器炸了，==**按 S 可以切换回原版菜单**==，群里通知三回，等待重启主服务器

**情况2：** 别人都正常但是你不正常，可以试试重开游戏，可能情况有：断网了、防火墙阻挡了

:::

## 进入大厅界面后房间列表全黄，加载很慢

::: info

这是因为有无效房间卡在列表里导致的bug，显示黄色的等待，但其实房间本身是可以盲进的

::: tip 解决办法

**直接进入菜单，按上键可以直接定位最后一个房间，然后依次往上一个一个进，直到进到有人的正确房间**
:::




## 掉出大厅了，这个报错是什么
::: info 

![](https://bu.dusays.com/2024/07/13/66926fbfb3015.png =450x)

1、可能是大厅房间服务器 关闭/重启 了，回主菜单过一会刷新，重进房间即可

2、**或者你机签有问题**，[请去改名](Beginners/BeforePlaying.html#%E5%BC%80%E5%A7%8B%E6%B8%B8%E6%88%8F%E5%89%8D-%E8%AE%BE%E7%BD%AE%E5%A5%BD%E4%BD%A0%E7%9A%84%E6%9C%BA%E7%AD%BE%E5%90%8D-profile-%E3%80%81%E9%94%AE%E4%BD%8D%E3%80%81%E5%8D%A1%E7%BB%84)

![](https://bu.dusays.com/2024/07/19/669a80cd2bfc9.png =600x)

3、大厅全红，无法连接，说明你被 ban 了

:::


## **大厅内如何观战**


::: info 
不需要走到正在对战的俩人那边观战，可以在大门口右边这个特殊机子上观战，不过人太多时底下看不到

![大门口右边这个特殊机子](https://bu.dusays.com/2024/01/25/65b27fce74ae1.png =400x)

![](https://bu.dusays.com/2024/01/25/65b27fcef35ac.png =400x)

::: caution 潜在卡顿BUG

**注意，加载观战列表可能会发生游戏突然变得很卡的 BUG，尤其是大厅人多的时候，卡了就重开游戏**

:::

::: info 另一种方法

（需要梯子） [Hisouten Discord](https://discord.gg/Hisouten) 服务器上的 Hostlist

（不需要梯子，纯文本） https://konni.delthas.fr/games

可以在这个网页中，Ctrl F搜索 started，每一行是一条信息

![Hisouten Discord 服务器上的 Hostlist](https://bu.dusays.com/2024/08/02/66acafdf896e5.png =500x)

::: details

<iframe 
    id="Hostlist"
    src="https://konni.delthas.fr/games" 
    width="100%" 
    height="400" 
    frameborder="0" 
    srcolling="auto"
></iframe>
<!--  
<script>
var frame = document.getElementById('Hostlist');
    frame.onload = function () {
        var body = frame.contentWindow.document.querySelector('body');
        body.style.color = 'red';
        body.style.fontSize = '20px';
        body.style.lineHeight = '20px';
    };
</script>-->
:::

## **非中文系统开游戏时弹窗 Sokulobby Eoor**

![非中文系统开游戏时弹窗 Sokulobby Eoor，报错弹窗如图，Windows区域设置为日文](https://bu.dusays.com/2024/01/21/65acc84cb5413.webp =400x)

::: info 解决方法

**非中文系统开游戏时弹窗 Sokulobby Eoor，是因为游戏路径内包含中文汉字，将游戏路径改成全英文即可**

**或者 Windows 区域语言设置换回中文（不要开启 UTF-8）**

:::


## **进入 VS NETWORK 就弹窗报错 stats.dat**

![报错如图 stat.dat](https://bu.dusays.com/2024/01/21/65acb37ad836f.webp =400x)

::: info  解决办法

**看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内<br>删除 `stats.dat`文件<br>然后将你的 `stats.dat.backup` 备份文件给改名为 `stats.dat` 实现备份恢复**

![](https://bu.dusays.com/2024/05/25/66515b2e32b6e.png =400x)

:::


## **一直在弹成就**
::: info 解决办法
**关掉游戏重开就行了，不要傻等**
:::

## **建主或进别人时提示端口冲突，我进去大厅发现已经有一个我，然后自己的ID后面多了个0**

![开任务管理器清理后台卡死的进程](https://bu.dusays.com/2024/01/21/65acef915315e.webp =400x)

::: info 解决办法

**这是因为你之前的则刚好卡死崩溃黑屏等，此时关掉窗口并不会实际关闭游戏，游戏进程th123.exe依然残留在电脑中**

**双击这个 bat 就可以清除所有 `th123.exe` 游戏进程**

![](https://bu.dusays.com/2024/01/21/65acefd479761.webp =400x)

:::


## **选人界面这个对话框怎么关掉**
::: info

![](https://bu.dusays.com/2024/01/21/65acf01c835a3.webp =500x)


选人界面会显示不会消失，不用理它，选完地图进入对战就会消失了

如果会键入打字，那就按ESC或者回车把字输出就行了，然后就不会再打字了。
:::

<!-- ## **进入大厅后过一段时间，整个游戏就会变成PPT，退出大厅也依然很卡（极少见的问题）**

::: caution 现在碰到有个别人会遇到这种情况

**尝试一：如果你有独显，尝试使用独显运行游戏（百度）**

**尝试二：如果你已经是独显了，尝试使用核显运行游戏；不行就试试更新或者回滚显卡驱动**

**尝试三：没有独显，试试更新或者回滚显卡驱动**

**都不行的话，那就 总配置文件 里把 大厅mod 关掉吧** [**如何开关配置 mod**](/mods/WhatsMod.html)

::: -->

