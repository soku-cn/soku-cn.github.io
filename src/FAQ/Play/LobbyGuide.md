---
title: 大厅常见问题
# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## **大厅内如何联机**

::: tip 联机说明


[**点击跳转教程————大厅内使用 Swarm 联机**](/Beginners/BeforePlaying.html#使用-swarm-等中转-ip-在大厅里联机)

:::



## **联机显示红字**

::: info 情况一：网络不支持AP联机

![两行红字](https://bu.dusays.com/2023/09/28/6515a2a37e0ce.png =800x)

**请看上面，大厅内如何联机**

[**点击跳转教程————大厅内使用 Swarm 联机**](/Beginners/BeforePlaying.html#使用-swarm-等中转-ip-在大厅里联机)
:::

::: info 情况二：版本问题

![检查游戏标题](https://bu.dusays.com/2023/09/28/65150454aa41f.png)

![版本问题报错](https://bu.dusays.com/2023/08/06/64cf5aa78a42c.png)

联机时显示这种四行红字报错提示，意思是双方版本不一致
Your version一行是你自己的版本，图中 GiuRoll with SWR 的意思是60F版本giuroll + 绯想天合体，
Their version一行是对方的版本，图中GiuRoll-62FPS with SWR的意思是62F版本giuroll  + 绯想天合体
with SWR就说明是和绯想天合体成功的；without SWR就说明是没和绯想天合体成功。
检查并更新游戏版本，注意CN代表的62F，与不加CN的60F之间不能互相联机。
:::

## **大厅内的操作**
::: info
- 默认是 Enter 回车 开关聊天框（可自定义热键），输入 /help 查看命令列表 
  
- 发表情   两个冒号中间夹着名字和数字  格式，如   :reimu1: （详见Modules\SokuLobbiesMod\assets\emotes\list.json文件记录）

- **Esc 退出大厅房间**
  
- **按住A疾跑**
  
- 在电梯前按Z进入
:::

![表情文件](https://bu.dusays.com/2023/08/06/64cf587bbf921.png)

::: info 大厅成就——预期完整版
赢十局：解锁角色形象
输十局：解锁吃瘪表情
把所有必杀卡和SC卡都用一遍：解锁角色形象的其他配色
玩十局：解锁头衔称号 title（待更新）
玩一百局：解锁accesory配饰（待更新）
玩一千局：解锁背景（待更新）
隐藏彩蛋：解锁恋恋等其他角色形象
:::

![全开档，改名替换。 替换全开档后不能查看成就选项](https://bu.dusays.com/2023/11/01/65425fe6de26a.png =700x)

## **进入大厅时弹窗报错，无法进入**

![报错如图 stat.dat](https://bu.dusays.com/2023/08/06/64cf5741976d0.png =500x) 

::: info 
**解决办法：** 
看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，
删除 `stats.dat`文件，然后将你的 `stats.dat.backup` 备份文件给改名为 `stats.dat` 实现备份恢复即可

![如图替换文件](https://bu.dusays.com/2023/09/11/64fed57e9e421.png =700x)
:::

## **菜单里点自定义形象时崩溃**

::: info
**解决办法：** 
看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，
删除你的 `settings.dat` 文件

![settings.dat 文件](https://bu.dusays.com/2023/08/06/64cf57e8457e4.png =700x)
:::

## **大厅房间进不去，卡加载loading，"Unknown exception"报错**

![大厅房间进不去，卡加载loading，"Unknown exception"报错](https://bu.dusays.com/2023/08/06/64cf55b644ff8.png =500x)

::: info 
**情况1：** 大厅主服务器炸了，**按 S 可以切换回原版菜单**，等待 法国作者PinkySmile 重启主服务器

**情况2：** 自己偶尔卡了或者断网了，让他等一会儿或者回到主菜单重进
:::

::: tip
**按 S 可以来回切换原版菜单，不要傻等着**
:::

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


## **我有些人可以观战，但是有些人却观战不了**
::: info
回答：**正常。** 
:::




## **选人界面这个对话框怎么关掉**
![](https://bu.dusays.com/2023/08/06/64cf5d0492199.png =520x)


::: info
选人界面会显示不会消失，不用理它，选完地图进入对战就会消失了
如果会键入打字，那就按回车把字输出就行了，然后就不会再打字了。
:::

## **建主或进别人时提示“bind”弹窗，我进去大厅发现已经有一个我，然后自己的ID后面多了个0**

![](https://bu.dusays.com/2023/08/06/64cf5d4a57684.png =500x)

::: info 解决办法
这是因为你之前的则刚好卡死崩溃黑屏等，此时关掉窗口并不会实际关闭游戏，游戏进程th123.exe依然残留在电脑中

**解决办法:** 右键任务栏打开任务管理器，进程页面，英文输入法按T，可定位th123.exe，检查游戏是不是有残留进程，结束掉（小心别结束掉现在在玩的游戏进程）

我怎么开任务管理器？
最底下任务栏空白处，右键就能找到了；或者按快捷键Ctrl+Shift+ESC。不要按Ctrl+Alt+Delete，会让游戏崩溃。
:::

## 进入大厅后过一段时间，整个游戏就会变成PPT，退出大厅也依然很卡

::: warning
现在碰到有个别人会遇到这种情况


**尝试一：如果你有独显，尝试使用独显运行游戏（百度）**

**尝试二：如果你已经是独显了，尝试使用核显运行游戏；不行就试试更新或者回滚显卡驱动**

**尝试三：没有独显，试试更新或者回滚显卡驱动**
:::

