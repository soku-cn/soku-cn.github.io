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

## 联机教程
::: important 视频教程

- 视频教程 —— [**😎 新人指路 2024 五月 “新则” 使用向导**](https://www.bilibili.com/video/BV1gZ421s7yF/)

:::



## 联机失败，显示红字报错，请先阅读上面的联机教程
<!-- - ==**请 先 阅读 上面 的 联机教程**== -->
::: tabs

@tab 情况一：没有正确使用 Swarm

![](https://bu.dusays.com/2024/01/21/65acafbf35591.webp =x64)

对手 ==**没正确使用 swarm 建主**==，所以你进不去他

::: tip 解决办法

自己开好 Swarm，点中转，点 IP 用于大厅，
然后进别人但是失败的时候，自己立马原地狂按 Z键 建主，叫对方进自己的就可以进来了 😎  

- [**大厅内正确使用 Swarm 联机**](/Beginners/BeforePlaying.html#使用-swarm-等中转-ip-在大厅里联机)

@tab 情况二：双方版本不同

![](https://bu.dusays.com/2024/01/21/65acb0ebcf925.webp =400x)

![1、检查游戏标题的 giuroll 版本，giuroll，且 CN 结尾](https://bu.dusays.com/2025/01/03/6777c5d33d007.jpg =500x)

![2、点击 `[修复]【 重置 Mod 配置 】.bat`](https://bu.dusays.com/2025/01/03/6777c9535edb7.jpg =280x)

::: tip 

- 联机时显示这种四行红字报错提示，意思是双方版本不一致<br>**通常是因为mod没有加载上，点击 `[修复]【 重置 Mod 配置 】.bat` 可修复，还不行就重新下载升级包或者完整游戏包**
------
- Your version 一行是你自己的版本，Their version 一行是对方的版本
- Vanilla 指 原版游戏
- with SWR / without SWR 指 绯想天合体与否
- GiuRoll 0.6-62FPS 指 giuroll 0.6.X + 62F CN版本，看游戏窗口标题
- GiuRoll 0.6 ，不带`-62FPS` 指 giuroll 0.6.X + 60F 外国版本，看游戏窗口标题



@tab 情况三：弹窗“Failed to get public IP”

![Failed to get public IP](https://bu.dusays.com/2024/01/21/65acb17f3c9bb.webp =300x)

意思是服务器无法获取你的公网IP（没使用 swarm 的情况下）

::: tip 解决办法
1、在这里点开大厅的 ini 配置文件  `th123/modules/SokuLobbiesMod/SokuLobbies.ini`

![](https://bu.dusays.com/2024/01/21/65acb227de9a8.webp =600x)

2、把 `https://api-ipv4.ip.sb/ip` 的句首的分号删掉，把 `http://www.sfml-dev.org/ip-provider.php` 的句首加上英文分号，然后保存并重开游戏

![把 ipv4.sb 的句首的分号删掉，把 sfml-dev 的句首加上英文分号](https://bu.dusays.com/2024/01/21/65acb240ef91e.webp =400x)


> 大厅获取用户IP的网址，默认用第一个 `http://www.sfml-dev.org/ip-provider.php` ，
> 有问题了再用第二个 `https://api-ipv4.ip.sb/ip`
:::

## 一进大厅就掉了

![](https://bu.dusays.com/2024/10/26/671caac7893bd.webp =400x)

一般是因为你的机签名字有问题，不要使用默认的 profile1p 机签名字，改名然后重新进大厅

- [**请查看新人需知，并修改名字**](/Beginners/BeforePlaying.html#%E5%BC%80%E5%A7%8B%E6%B8%B8%E6%88%8F%E5%89%8D-%E8%AE%BE%E7%BD%AE%E5%A5%BD%E4%BD%A0%E7%9A%84%E6%9C%BA%E7%AD%BE%E5%90%8D-profile-%E3%80%81%E9%94%AE%E4%BD%8D%E3%80%81%E5%8D%A1%E7%BB%84)


## 大厅内的操作、发表情

- 在电梯和机子前按 `键盘 Z` 交互
- 按 `Esc` 退出大厅房间
- 按住`键盘 A` 加左右方向可以疾跑  
- 进入电梯后可以扩大视野
- 按住 `键盘 S` 和 `方向键`，可以自由移动镜头（自己角色不动），再同时按住 `键盘 A` 可以加快镜头的移动速度
- 聊天框内输入 `/help` 查看全部命令列表 
- 发表情是用`两个冒号中间夹着名字和数字`的格式，如 `:reimu1:` （见图1）
- 大厅菜单，选择最后一项：统计，统计界面可以查看网络对战中（不管是否通过大厅，只要是网战就都会记录下来）自己的局数、胜率、卡片携带率、卡片使用率等数据

![图 1：表情文件在这里查看文件 `th123\Modules\SokuLobbiesMod\assets\emotes\list.json`](https://bu.dusays.com/2024/01/21/65acb2edc1742.webp =600x)


## 全开档解锁

- **不想自己打成就解锁的话，可以手动使用全开档**

- 全开档解锁全部小人形象，和聊天表情，但是注意用全开档后就不能查看成就页面了

- 全开档文件遗失了的话可以点这里 [下载 achievements_cheated-全开档.dat](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/achievements_cheated-%E5%85%A8%E5%BC%80%E6%A1%A3.dat)

![如图，先关掉游戏，手动删除原先的achievements.dat文件，然后把achievements_cheated.dat改名为achievements.dat，再打开游戏，即可解锁全开档](https://bu.dusays.com/2024/05/05/66377cc681625.png =600x)

![**注意用全开档后就不能查看成就页面了**](https://bu.dusays.com/2024/10/26/671c931693f9a.webp =300x)



## 修改聊天框热键
默认是 `Enter 回车键` 打字和发送消息

可在 `th123/modules/SokuLobbiesMod/SokuLobbies.ini` 内自定义开关聊天框的热键

```
ChatKey=0x0D   
; 设置打开聊天界面的快捷键，默认0x0D，回车
; 推荐的其他键位：0x09是 TAB，0x11是 CTRL，0x12是 ALT
; 键位参考表   https://github.com/SokuDev/SokuMods/blob/master/VIK.md
```


## 这样做就可以大厅建主同时发IP到群里

::: tabs
@tab 方法一
::: tip 
在这里点开大厅的 ini 配置文件  `th123/modules/SokuLobbiesMod/SokuLobbies.ini`

AcceptHostlist 设置为 1，就是激活功能；设置为 0 是屏蔽功能
```
AcceptHostlist=1
; 设置为 1 可以在大厅内建主的同时，向群里发 IP，别人既可以在大厅内进入，也可以通过 IP 连接对战
; 设置为 0 则只允许大厅内连接对战，无法通过 IP 进入
```

<!-- 
![](https://bu.dusays.com/2024/10/26/671cab0e0746e.webp =400x)
![大厅的ini配置](https://bu.dusays.com/2024/10/26/671c9eea7f5d8.webp =800x) 
-->

@tab 方法二
::: tip

进入 Network 菜单
先按一次S切换到普通界面，建立主机，然后显示等待连接中
之后再按一次S键，切换到大厅界面，进入大厅，找个空闲机子
也可以实现大厅和IP同时可以进人

:::



## 大厅内自己显示为黑框黑块，菜单里点自定义人物自定义形象就崩溃
::: info 解决办法
看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，删除 `settings.dat` 文件

或者运行 `[修复]【 重置 Mod 配置 】.bat`

![删除 settings.dat 文件](https://bu.dusays.com/2024/01/21/65acb47068f41.webp =500x)

:::

## Network 弹窗报错 SokuLobbyError: Cannot load stats.dat Invalid magic
<!-- 
![报错如图 Cannot load stats.dat Invalid magic](https://bu.dusays.com/2024/01/21/65acb37ad836f.webp =400x)
 -->
::: info  解决办法

看图中文件夹路径，点到 `th123/modules/SokuLobbiesMod` 文件夹内，
删除 `stats.dat`文件，然后将你的 `stats.dat.backup` 备份文件给改名为 `stats.dat`，实现备份恢复

![](https://bu.dusays.com/2024/05/25/66515b2e32b6e.png =600x)

:::

## 大厅内人多的时候画面就变得很卡
这是目前大厅 mod 的 bug，打开 SokuLauncher 启动器，下载并开启 SokuDirectXOptimizations mod 后可以避免游戏变得迟缓，而只有画面抽帧
::: tip 解决方法
**画面变得卡顿后，退出大厅进入练习模式或者顶着卡顿加入一次网络对战，选完人进入对局后，就不会再卡了，游戏结束返回大厅也不会再卡了**
:::



## 游戏ESC返回主菜单时卡住

游戏ESC返回主菜单时卡住为正常，挂在后台稍微等一会儿即可
::: caution 不要强行关闭游戏，否则可能会造成数据损坏！
:::




## 大厅进不去，卡加载，红字 Unknown exception

![大厅房间进不去，卡加载，"Unknown exception"报错](https://bu.dusays.com/2024/01/21/65acb556e19fb.webp =400x)

==**按键盘 S 键，可以切换 原版菜单/大厅，换回原版菜单用 IP 玩**==

这是因为大厅主服务器炸了，过一段时间会自动恢复





## 进入大厅界面后房间列表全黄，加载很慢

这是因为有无效房间卡在列表里导致的bug，显示黄色的等待，但其实房间本身是可以盲进的

::: tip 解决办法：<br>直接进入菜单，按上键定位最后一个房间，然后依次往上一个一个进，直到进到有人的正确房间；或者等一会儿让他加载房间
:::





## 除了 Public Lobby，国内大厅房间红色无法连接
说明你被 ban 了，可能是挂机临时 ban，也可能是蹲起鞭尸等永久 ban，加 QQ 1434716883 说明情况（机签名字、IP 等）

<!-- ![](https://bu.dusays.com/2024/10/26/671c98c41f5da.webp =600x)
 -->



## 大厅内如何观战
::: tabs
@tab 特殊机子
不需要走到正在对战的俩人那边观战，可以在大门口右边这个特殊机子上观战，不过人太多时底下看不到

![大门口右边这个特殊机子](https://bu.dusays.com/2024/10/26/671caaa262c3e.webp =400x)  ![](https://bu.dusays.com/2024/10/26/671caaa3f2c45.webp =400x)

@tab 另一种方法

（需要梯子） [Hisouten Discord](https://discord.gg/Hisouten) 服务器上的 Hostlist

![Hisouten Discord 服务器上的 Hostlist](https://bu.dusays.com/2024/10/26/671caa8bdd47f.webp =500x)

::: details （不需要梯子，纯文本）在此网页中 Ctrl F 搜索 started，每一行是一条信息

https://konni.delthas.fr/games

<iframe
  src="https://konni.delthas.fr/games" title="Hostlist-文本" width="90%" height="280vh" loading="lazy"
  style="border-radius: 15px; padding: 10px; background-color: #eeeeee; border: 3px dashed #111111;"
  sandbox="allow-modals allow-pointer-lock allow-web-share allow-orientation-lock allow-screen-wake-lock allow-presentation allow-encrypted-media allow-autoplay"
  referrerpolicy="no-referrer"
  tabindex="0"
></iframe>

:::

## 非中文系统开游戏时弹窗 Sokulobby Eoor

![非中文系统开游戏时弹窗 Sokulobby Eoor，报错弹窗如图，Windows区域设置为日文](https://bu.dusays.com/2024/01/21/65acc84cb5413.webp =350x)

::: tip 解决方法

**非中文系统开游戏时弹窗 Sokulobby Eoor，是因为游戏路径内包含中文汉字，将游戏路径改成全英文即可**

**或者 Windows 区域语言设置换回中文（不要开启 UTF-8）**

:::


## 一直在弹成就
::: tip 解决办法：关掉游戏重开就行了，不要傻等
:::

## 建主或进别人时提示端口冲突，我进去大厅发现已经有一个我，然后自己的ID后面多了个0
<!-- 
![开任务管理器清理后台卡死的进程](https://bu.dusays.com/2024/01/21/65acef915315e.webp =400x)
 -->

这是因为你之前的则刚好卡死崩溃黑屏等，此时关掉窗口并不会实际关闭游戏，游戏进程th123.exe依然残留在电脑后台
::: tip 解决办法
双击 `[修复]【 强制结束游戏进程 th123.exe 】.bat` 就可以清除所有 `th123.exe` 游戏进程

![](https://bu.dusays.com/2024/01/21/65acefd479761.webp =300x)

:::


## 选人界面这个对话框怎么关掉

![](https://bu.dusays.com/2024/01/21/65acf01c835a3.webp =300x)


选人界面会显示不会消失，不用理它，选完地图进入对战就会消失了

如果会键入打字，那就按回车把字输出就行了，然后就不会再打字了



