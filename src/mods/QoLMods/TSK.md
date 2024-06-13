---
title: 战绩记录工具-TSK

# 标题
icon: circle-info
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-06-01
#文章编辑日期
---

::: caution 旧版本giuroll造成的多次记录Bug

**旧版本giuroll 和 原版TSK 一起使用时，可能会发生一局游戏 KO 后，重复记录多次胜场或者输场的 Bug**

- 已推出 修复版TSK，搭配 giuroll-0.6.15版 使用可修复重复记录的 Bug

- [**下载单独的TSK插件，将tsk文件夹放于th123文件夹内**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/tsk.zip)

- 修复版TSK 已包含于【2024-06-01 升级包 和 完整游戏包】
:::



::: info 简介


**TSK（Tensokukan，天则观）** 可以在本地记录网络对战的战绩（时间、机签、比分等）并给出胜率，也可以查询和筛选对局信息
注册 TSK 账号或登陆旧账号后，也可以在游戏关闭时自动将信息上传至 [Tenco！网站](https://tenco.info/)

[Tenco! TSK战绩记录网站，在右侧链接栏可找到日文全人类攻略Wiki](https://tenco.info/game/2/pov/2/)

Tenco！ 网站的个人信息页面格式，末尾的杠号不能缺少： `https://tenco.info/game/2/account/【注册昵称】/`
> 例，这是三回的页面： https://tenco.info/game/2/account/sanhuizhuan/

::: info 你知道吗

[SokuReplays - Konni Bot在此记录对局，可计分elo和记录比分、卡组等](https://sokureplays.delthas.fr) 

:::

::: info 本地使用 TSK
- [**下载单独的TSK插件，将tsk文件夹放于th123文件夹内**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/tsk.zip)

![没开游戏，或者匹配出错时，未生效的任务栏托盘图标](https://bu.dusays.com/2023/08/20/64e218f39882a.png)

![开了游戏后成功匹配，成功生效的任务栏托盘图标](https://bu.dusays.com/2023/08/20/64e21902c64bf.png)

- 游戏关闭后，TSK 也会自动退出，并自动上传
- **双击图标，或者右键图标点击第一项打开对战表，即是打开信息面板，显示的是你玩的角色的战绩**
- 双击某一行角色的信息，可以查看你玩该角色时，对战对手角色时的详细信息

![双击某一行角色的信息，可以查看你玩该角色时，对战对手角色时的详细信息](https://bu.dusays.com/2024/06/01/665b11aa64e8e.png =400x)

**在信息面板的标题栏处右键，有更多选项**

![在信息面板的标题栏处右键，有更多功能](https://bu.dusays.com/2024/06/01/665b0dd3617a0.png =250x)

- **打开天则观数据文件**：选择 `Default.db` 数据文件的路径，这个数据文件就是记录了战绩数据的文件，一般就是在 `th123\tsk\Default.db`
  - **TSK 老用户可以把之前的`Default.db`数据文件复制过来新的则的`th123\tsk\`目录下，然后打开新的Tsk，点“打开天则观数据文件”，选择刚复制过来的旧数据，即可导入先前的战绩接着用**
- **撤销更改**：撤销你手贱双击信息而增加的胜局/输局
- **对手 Profile 表**：见图，可以查询和某个机签玩的战绩
  - 双击其中某一行查看详细对战记录

![选项 - 对手 Profile 表](https://bu.dusays.com/2024/06/01/665b12df91bbc.png =400x)

- **对战记录查询**：可以按照参数查询对战记录。什么都不填直接确定就是按照时间顺序列出所有对战记录（不可排序）
:::

::: info 上传至Tenco！网站 （TSK Report）

1. 注册账号前先想好一个账号名，只能是英文字母和下划线
假如要注册一个`ABC`账号名，先打开 https://tenco.info/game/2/account/ABC/ 这个网址，查看这个页面是否已经被人注册
被注册了就换个账号名，如`A1_B2_C3`，直到出现 404 的页面，说明这个账号名还没被注册

![账号名已被注册](https://bu.dusays.com/2024/06/01/665b173c94c49.png =400x)

![出现 404 的页面，说明这个账号名还没被注册](https://bu.dusays.com/2024/06/01/665b175ee420d.png =400x)

2. 开始注册账号或者登陆先前已有的账号
密码最好用复杂点的，大写字母+小写字母+数字+特殊符号，**弱密码可能会导致注册失败**

![](https://bu.dusays.com/2024/06/01/665b181a76782.png =800x)

3. **输完密码后，不管它最终弹的结果是什么，先尝试打开你的个人页面 https://tenco.info/game/2/account/A1_B2_C3/ 检验是否从 404 变成了正常页面，是的话就注册成功了**

::: warning TSK上传提示错误

**TSK偶尔上传失败完全正常，等你之后再上传也许就可以了**

:::

::: caution 开 则2 等 MOD 后 TSK 识别失败的问题

**因为TSK是通过游戏的标题来识别游戏的，所以像 则2 这种会修改游戏标题的 MOD 会导致 TSK 识别出现问题**


::: tip 解决办法

**打开 `th123\tsk\tsk_110A\SWRSAddr.ini` 和 `th123\modules\Giuroll\giuroll.ini`**

![](https://bu.dusays.com/2024/06/01/665b207beef49.png =600x)

![](https://bu.dusays.com/2024/06/01/665b1fa8b10f0.png =800x)

:::




