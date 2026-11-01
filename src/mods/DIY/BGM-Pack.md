---
title: 如何在美化包里修改BGM
# 标题
icon: circle-info
# 图标
order: 30
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2026-10-26
#文章编辑日期
---


### 把BGMchanger包转化为Shady美化包格式

- [改BGM-BGMChangerm模组](/mods/AdvancedMods/BGMChanger.html)
    
记事本打开 `th123\modules\BGMChanger\BGMChanger.ini` 文件，可以看到如下片段

```
;君はあの影を見たか
[op2]
path=Modules/BGMChanger/0/xxxxxx.ogg
intro=1466369
loop=3884593
```

这表示非想天则主菜单BGM“君はあの影を見たか”的编号 op2，计算
1466369 / 44100 = 33.2509977
3884593 / 44100 = 88.0860991

然后我们新建一个文本文件，将它改名为 `data_bgm_op2.lbl`，然后以记事本打开，写入以下内容，按一个TAB来隔开，然后 Ctrl+S 保存

```
33.2509977  88.0860991  op2
```

以及把 `xxxxxx.ogg` 改名为 `data_bgm_op2.ogg`，然后和 `data_bgm_op2.lbl` 文件一起打包放入 Shady-Loader 内加载，就可以替换主菜单BGM了
**游戏内的 BGM 音量记得打开**
==**游戏内的 BGM 音量记得打开**==
**游戏内的 BGM 音量记得打开**


::: note 易错点
绯想天的主菜单BGM编号是 op，不要和则的 op2 搞混了
非想天则选人界面BGM是“萃夢想”，编号是 select，不是两个字母加两个数字的形式
:::



::: details 详细说明



- **.ogg**：BGM 音频文件。bgm 文件夹内。
    **必须为 ogg 格式，不能使用 mp3 文件修改文件名后缀来冒充**，可双声道。
    **替换加载后没声音多半是格式问题或者音量大小问题**

- **.sfl** <---> **.lbl**：纯文本文件，可直接编辑。bgm 文件夹内。
    内容有三个数值，是 BGM 的控制参数：前奏、循环体时长、BGM名称。
    例子： `8.365011	86.667234	st00` （单位：秒）
    在本例中，BGM st00 会先播放8.365011秒的前奏，然后再播放86.667234秒，之后跳转到8.365011秒的时刻继续循环播放这86.667234秒


:::
