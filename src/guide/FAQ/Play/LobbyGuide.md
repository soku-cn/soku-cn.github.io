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

## **大厅房间进不去，卡加载loading**
![](https://bu.dusays.com/2023/08/06/64cf55b644ff8.png =500x120)

::: info 解决办法
解决办法：检测更新你的大厅mod版本！
:::

## **进入大厅或者菜单里点自定义形象就崩溃**

![报错](https://bu.dusays.com/2023/08/06/64cf5741976d0.png =440x300) ![](https://bu.dusays.com/2023/08/06/64cf57e8457e4.png =420x350)

::: info 解决办法
**解决办法：** 看图中文件夹路径 `th123/modules/SokuLobbiesMod` 文件夹内，删除你的settings.dat 和 stats.dat 
:::


## **大厅内的操作**
::: info
- Enter回车 开关聊天框，输入 /help 查看命令列表 
发表情   两个冒号中间夹着名字和数字  格式，如   :reimu1: 
详见Modules\SokuLobbiesMod\assets\emotes\list.json文件记录
- Esc 退出大厅房间
- 按住A疾跑
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

## **这个报错弹窗是什么意思，我被踢出房间了**
![](https://bu.dusays.com/2023/08/06/64cf58d497d26.png =300x150)
::: info
这个正常，也没办法，冷不丁抽风来一下，被踢就算了，过会儿等他刷新再进就是了。
:::


## **我有些人可以观战，但是有些人却观战不了**
::: info
**回答：正常。**  
:::


## **大厅内我和别人无法联机**
### 一、可能是版本问题
![检查游戏标题](https://bu.dusays.com/2023/08/06/64cf59355a97c.png)


![版本问题报错](https://bu.dusays.com/2023/08/06/64cf5aa78a42c.png)

::: info
联机时显示这种四行红字报错提示，意思是双方版本不一致
Your version一行是你自己的版本，图中 GiuRoll with SWR 的意思是60F版本giuroll + 绯想天合体，
Their version一行是对方的版本，图中GiuRoll-62FPS with SWR的意思是62F版本giuroll  + 绯想天合体
with SWR就说明是和绯想天合体成功的；without SWR就说明是没和绯想天合体成功。
检查并更新游戏版本，注意CN代表的62F，与不加CN的60F之间不能互相联机。
:::

### 二、不支持AP(AutoPunch)联机

::: warning
在使用和进入大厅，联机之前，你必须先检测你的网络环境支不支持AP联机，若不支持，则不能通过大厅联机，可以暂时把大厅mod关掉或者按S恢复传统菜单（后续可能会加入大厅支持swarm）
:::

![运行“autopunch检测”](https://bu.dusays.com/2023/08/06/64cf5b295d248.png)

![支持](https://bu.dusays.com/2023/08/06/64cf5c1042070.png =520x340)

![不支持](https://bu.dusays.com/2023/08/06/64cf5c560e881.png =520x340)


::: info
显示 **Hole-punching is supported** 即为支持可用；
而 **NOT supported** 即为不支持，不能在大厅内联机，请使用swarm和原版菜单。

**【UDP 打洞 (UDP Hole Punching) 原理 - CSDN】**
 https://blog.csdn.net/jsict/article/details/122828898
:::

![遇到类似这样的情况，重新多试几次，直到显示出结果](https://bu.dusays.com/2023/08/06/64cf5c9b4425f.png =520x340)


### 三、我支持AP但是还是连不上
::: info 
**可能对手不支持AP。需要双方都支持AP才能互相联机**

也可以尝试**重连重试几次**，或者**换另一方建主**，或者**换个端口**，**重开游戏**，还是不行就算了有时候就是会抽风
:::

![在这里换个端口，保存并重开游戏](https://bu.dusays.com/2023/08/06/64cf5cd1322e6.png)


## **选人界面这个对话框怎么关掉**
![](https://bu.dusays.com/2023/08/06/64cf5d0492199.png =520x380)


::: info
选人界面会显示不会消失，不用理它，选完地图进入对战就会消失了
如果会键入打字，那就按回车把字输出就行了，然后就不会再打字了。
:::

## **建主或进别人时提示“bind”弹窗，我进去大厅发现已经有一个我，然后自己的ID后面多了个0**

![](https://bu.dusays.com/2023/08/06/64cf5d4a57684.png)

::: info 解决办法
这是因为你之前的则刚好卡死崩溃黑屏等，此时关掉窗口并不会实际关闭游戏，游戏进程th123.exe依然残留在电脑中

**解决办法:** 右键任务栏打开任务管理器，进程页面，英文输入法按T，可定位th123.exe，检查游戏是不是有残留进程，结束掉（小心别结束掉现在在玩的游戏进程）

我怎么开任务管理器？
最底下任务栏空白处，右键就能找到了；或者按快捷键Ctrl+Shift+ESC。不要按Ctrl+Alt+Delete，会让游戏崩溃。
:::