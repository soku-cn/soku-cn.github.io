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
date: 2023-12-01
#文章编辑日期
---

## **大厅内如何联机**

::: important 联机教程

[**【联机教程———大厅内使用 Swarm 联机】**](/Beginners/BeforePlaying.html#使用-swarm-等中转-ip-在大厅里联机)

:::



## **联机失败，显示红字报错**
::: info 情况一：双方版本不同

![Giuroll 版本不同](https://bu.dusays.com/2024/01/21/65acb0ebcf925.webp =400x)

![检查游戏标题的 giuroll 版本，以及大厅界面右下角的大厅版本](https://bu.dusays.com/2024/01/21/65accc0205ba1.png =300x)

::: tip 解决办法
**请注意大厅界面的公告，及时更新**

联机时显示这种四行红字报错提示，意思是双方版本不一致
Your version一行是你自己的版本，图中 GiuRoll 0.6-62FPS with SWR 的意思是 0.6.X 系列版本giuroll 62F CN + 绯想天合体，
Their version一行是对方的版本，图中GiuRoll-62FPS with SWR的意思是 0.5.X 系列版本giuroll 62F CN + 绯想天合体，

:::

::: info 情况二：连接失败（网络不支持 AP，不能 UDP 打洞直连）

![HTTP 400](https://bu.dusays.com/2024/01/21/65acafbf35591.webp =400x)

![连接失败](https://bu.dusays.com/2024/02/21/65d5783ecd429.png =400x)

::: tip 解决办法

1、对手不支持 AP，也没正确使用 swarm 建主，所以你进不去他
**解决办法：自己正确使用 swarm 建主，然后让他来进你**  [**【联机教程 ——— 大厅内使用 Swarm 联机】**](/Beginners/BeforePlaying.html#使用-swarm-等中转-ip-在大厅里联机)

2、自己先检测 AP，如果是支持那可能是偶尔卡了，可以再尝试连几次。 [**【如何进行检测？为什么我不支持AP？】**](/FAQ/Play/AP_NOT_Supported.html)

:::

::: info 情况三：弹窗“Failed to get public IP”

![Failed to get public IP](https://bu.dusays.com/2024/01/21/65acb17f3c9bb.webp =300x)

**意思是服务器无法获取你的公网IP（没使用 swarm 的情况下）**

::: tip 解决办法
1、在这里点开大厅的 ini 配置文件  `th123/modules/SokuLobbiesMod/SokuLobbies.ini`

![1、在这里点开大厅的 ini 配置文件](https://bu.dusays.com/2024/01/21/65acb227de9a8.webp =400x)

2、把 ipv4.sb 的句首的分号删掉，把 sfml-dev 的句首加上英文分号，然后保存并重开游戏

`大厅获取用户IP的网址，默认用第一个（http://www.sfml-dev.org/ip-provider.php），有问题了再用第二个（https://api-ipv4.ip.sb/ip）`

![把 ipv4.sb 的句首的分号删掉，把 sfml-dev 的句首加上英文分号](https://bu.dusays.com/2024/01/21/65acb240ef91e.webp =400x)

:::

<!-- 
::: info 情况三：版本问题

![检查游戏标题](https://bu.dusays.com/2023/09/28/65150454aa41f.png)

![版本问题报错](https://bu.dusays.com/2023/08/06/64cf5aa78a42c.png =500x)

联机时显示这种四行红字报错提示，意思是双方版本不一致
Your version一行是你自己的版本，图中 GiuRoll with SWR 的意思是60F版本giuroll + 绯想天合体，
Their version一行是对方的版本，图中GiuRoll-62FPS with SWR的意思是62F版本giuroll  + 绯想天合体

with SWR就说明是和绯想天合体成功的；without SWR就说明是没和绯想天合体成功。

检查并更新游戏版本，注意CN代表的62F，与不加CN的60F之间不能互相联机。

**0.5.X系列和0.6.X系列之间不能互相联机。**
::: -->

## **大厅内的操作**
::: info
- 默认是 Enter 回车 开关聊天框（可自定义热键），输入 /help 查看命令列表 
  
- 发表情   两个冒号中间夹着名字和数字  格式，如   :reimu1: （详见下图文件）

- **Esc 退出大厅房间**
  
- **按住 A 加左右方向疾跑**
  
- 在电梯前按Z进入

![表情文件在这里查看 `th123\Modules\SokuLobbiesMod\assets\emotes\list.json`](https://bu.dusays.com/2024/01/21/65acb2edc1742.webp =700x)

![全开档，改名替换。替换全开档后不能查看成就选项 gif](https://bu.dusays.com/2024/01/21/65acf4915243c.gif =400x)

:::

## **大厅内观战**
::: info

**不需要走到正在对战的俩人那边观战，可以在大门口右边这个特殊机子上观战**

![大门口右边这个特殊机子](https://bu.dusays.com/2024/01/25/65b27fce74ae1.png =500x)

![](https://bu.dusays.com/2024/01/25/65b27fcef35ac.png =500x)

:::

<!-- 
::: info 大厅成就——预期完整版
赢十局：解锁角色形象
输十局：解锁吃瘪表情
把所有必杀卡和SC卡都用一遍：解锁角色形象的其他配色
玩十局：解锁头衔称号 title（待更新）
玩一百局：解锁accesory配饰（待更新）
玩一千局：解锁背景（待更新）
隐藏彩蛋：解锁恋恋等其他角色形象
::: 
-->

## **进入大厅时弹窗报错，无法进入**

![报错如图 stat.dat](https://bu.dusays.com/2024/01/21/65acb37ad836f.webp =400x)

::: info  解决办法

看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，
删除 `stats.dat`文件，然后将你的 `stats.dat.backup` 备份文件给改名为 `stats.dat` 实现备份恢复即可

![如图改名替换文件，将你的 `stats.dat.backup` 备份文件给改名为 `stats.dat`](https://bu.dusays.com/2024/01/21/65acb3d6926a3.webp =700x)
:::

## **大厅内自己显示为黑块，菜单里点自定义形象就崩溃**

::: info 解决办法

看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，
删除你的 `settings.dat` 文件

![删除 settings.dat 文件](https://bu.dusays.com/2024/01/21/65acb47068f41.webp =600x)

:::

## **大厅房间进不去，卡加载loading，"Unknown exception"报错**

![大厅房间进不去，卡加载loading，Unknown exception报错](https://bu.dusays.com/2024/01/21/65acb556e19fb.webp =400x)

::: info 
**情况1：** 大厅主服务器炸了，**按 S 可以切换回原版菜单**，等待 法国作者PinkySmile 重启主服务器

**情况2：** 自己偶尔卡了或者断网了，让他等一会儿或者回到主菜单重进

::: tip
**按 S 可以来回切换原版菜单，不要傻等着**
:::

<!--
## **点创建大厅提示这个是什么意思**

![](https://bu.dusays.com/2023/08/08/64d233d146e89.png)

::: warning
**玩家请点加入大厅**
创建大厅需要公网IP，使用文件夹内的RunServer.bat
:::


## **这个报错弹窗是什么意思，我被踢出房间了**
![](https://bu.dusays.com/2023/08/06/64cf58d497d26.png =300x)
::: info
这个正常，也没办法，冷不丁抽风来一下，被踢就算了，过会儿等他刷新再进就是了。
:::

-->

## **选人界面这个对话框怎么关掉**
![选人界面对话框](https://bu.dusays.com/2024/01/21/65acf01c835a3.webp =500x)


::: info
选人界面会显示不会消失，不用理它，选完地图进入对战就会消失了

如果会键入打字，那就按ESC或者回车把字输出就行了，然后就不会再打字了。
:::

## **建主或进别人时提示“bind”弹窗，我进去大厅发现已经有一个我，然后自己的ID后面多了个0**

![开任务管理器清理后台卡死的进程](https://bu.dusays.com/2024/01/21/65acef915315e.webp =400x)

::: info 解决办法

![双击这个 bat 就可以清除所有 th123.exe 游戏进程](https://bu.dusays.com/2024/01/21/65acefd479761.webp =400x)

这是因为你之前的则刚好卡死崩溃黑屏等，此时关掉窗口并不会实际关闭游戏，游戏进程th123.exe依然残留在电脑中

:::

## **进入大厅后过一段时间，整个游戏就会变成PPT，退出大厅也依然很卡**

::: warning
现在碰到有个别人会遇到这种情况


**尝试一：如果你有独显，尝试使用独显运行游戏（百度）**

**尝试二：如果你已经是独显了，尝试使用核显运行游戏；不行就试试更新或者回滚显卡驱动**

**尝试三：没有独显，试试更新或者回滚显卡驱动**

**都不行的话，那就在 swrstoys.ini 总配置文件里把 大厅mod 关掉吧**
:::

