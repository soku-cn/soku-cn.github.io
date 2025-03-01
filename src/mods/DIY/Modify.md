---
title: 如何制作美化包（替换游戏素材）
# 标题
icon: circle-info
# 图标
order: 30
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2025-02-12
#文章编辑日期
---

## 下载素材文件和工具包

::: info 

- [**在网盘里下载**](/about/)
②其他非想天则相关资源 > 游戏素材、mod 工具 >
    1、> 游戏素材 > 非想天则解包文件(日文+png).zip
    2、> 工具包 > 【2024.2.22 美化类mod工具 shady-packer  -附说明】.zip
    3、> 工具包 > 透明图片.png
    4、> 工具包 > FDE编辑器 > SokuFramedataEditor-0.3.2-64bits.zip

- **不需要手动解包 th123a.dat 等文件！！**

:::

## 找到自己要替换的文件在哪里

### 素材文件夹结构解析
::: details 素材文件夹结构解析
::: info 素材文件夹结构解析

- background：背景地图。
    通过 [**改地图工具 - StageChanger**](/mods/DIY/StageChanger.html) 来修改游戏背景地图

- battle：**对战界面的 UI**，如血条和伤害面板等贴图。

- bgm：背景音乐。
    通过 [**改 BGM-BGMChanger**](/mods/AdvancedMods/BGMChanger.html) 来修改游戏 BGM

- card：卡牌的贴图。

- character：角色的 **sprite 贴图**、特效、头像、战斗结束的对话立绘。

- csv：各角色的**卡牌**名称和介绍文本。

- effect：通用的对战特效动画。

- guide：游戏下方的操作提示。

- infoeffect：**天气**的文字图片等。

- menu：各种菜单界面的贴图和布局等。

- number：数字的图片。

- profile：profile改卡组菜单页面内的各种贴图。

- scenario：各角色战斗结束和故事模式的**对话文本**。

- scene：**主菜单**、加载时少女祈祷中贴图、**选人界面**、选地图界面的贴图等。

- se：各种**音效** Sound Effect。非角色专属的音效有一个对照表。

- stand：各角色改卡界面出现的**立绘**，其中 cutin 内的是游戏内使用 SC 时出现的立绘。

- weather：天气的背景天空盒贴图和刮风下雨特效。

:::

### 素材文件类型解析
::: details 素材文件类型解析
::: info 素材文件类型解析

- **.cv2** <---> **.png**：图片文件。
    可以是带 index 索引（配色）的图片，也可以是不带索引的图片

- **.pal** <---> **.act**：角色的配色皮肤文件。character 文件夹内。
    - [使用FDE制作角色改色和导入游戏](/mods/DIY/FramedataEditor.html)
    可通过 FDE 编辑器直接使用 .pal 文件，不需要使用 .act 文件。.act 格式文件和 MUGEN 互通且可被其他图像编辑器使用

- **.dat** <---> **.xml**：UI 布局文件。有以下几个格式
    - Static: 静态图片
    - Mutable: 可被游戏代码影响的图片
    - Horz/Vert Slider: 动态宽高图片
    - Number: 动态数字图片

- **.pat** <---> **.xml**：角色招式文件。character 文件夹内。
通过 [FrameDataEditor(FDE)](/mods/DIY/FramedataEditor.html) 可查看和修改角色招式动作信息

- **.cv1** <---> **.csv**：卡组名称和描述。csv 文件夹内。
    注意汉化包内要保持 GBK 中文编码，不要使用 UTF-8 和 Shift-JS 编码

- **.cv0** <---> **.txt**：角色对话文本。scenario 文件夹内。
    注意汉化包内要保持 GBK 中文编码，不要使用 UTF-8 和 Shift-JS 编码

- **.cv3** <---> **.wav**：音效文件。
    **必须为 wav 格式，不能使用 mp3 文件修改文件名后缀来冒充**，可双声道，16位或24位等。
    **替换加载后没声音多半是格式问题或者音量大小问题**

- **.ogg**：BGM 音频文件。bgm 文件夹内。
    **必须为 ogg 格式，不能使用 mp3 文件修改文件名后缀来冒充**，可双声道。
    **替换加载后没声音多半是格式问题或者音量大小问题**

- **.sfl** <---> **.lbl**：纯文本文件，可直接编辑。bgm 文件夹内。
    功能类似于 [改 BGM-BGMChanger](/mods/AdvancedMods/BGMChanger.html)
    内容有三个数值，是 BGM 的控制参数：前奏、循环体时长、BGM名称。
    例子： `8.365011	86.667234	st00` （单位：秒）
    在本例中，BGM st00 会先播放8.365011秒的前奏，然后再播放86.667234秒，之后跳转到8.365011秒的时刻继续循环播放这86.667234秒

::: note
Q：部分素材不是透明的怎么办
A：自己在百度B站知乎等搜色度键、绿幕抠图、通道抠图等 PS PR 教程

Q：部分素材没有颜色（美铃、小爱）
A：游戏内的颜色是代码实现的而不是素材本身的颜色，没办法

Q：部分素材是一张平面的，游戏内是旋转过的
A：自己看着办

![例： data\character\meirin\objectBa006.png](https://bu.dusays.com/2025/02/12/67ac630fa0915.png =100x)

:::

::: tip 推荐的音频编辑工具

- [基于 Web Audio API 实现纯前端的音频处理工具： **Melody Workshop**](https://melody-workshop.rylan.cn/) | [Github](https://github.com/RylanBot/melody-workshop)
如果没下软件的话，简单的处理操作用线上工具就足够解决了

- Audacity 或 Adobe Audition

:::

## 举例修改一些文件并制作成美化包
### 例1、删除图片

::: info 删除图片

即用透明图片替换掉原本的图片，显示不出来那就是删掉了。

[②其他非想天则相关资源 > 游戏素材、mod 工具 > 工具包 > 透明图片.png](/about/)

:::

::: info 制作方法
1、找到要删除的文件位置，如图是 `data\battle\centerObjectB.png`，则我们将反斜杠改成下划线，得到 `data_battle_centerObjectB.png`，将 `透明图片.png` 文件复制并改名为这个下划线

![1、找到要删除的文件位置，路径斜杠改成下划线，作为新图片的文件名](https://bu.dusays.com/2025/02/12/67aca966e0010.webp =600x)

![透明图片替换](https://bu.dusays.com/2025/02/12/67acaa51e370d.webp =700x)

![`透明图片.png` 改名为 `data_battle_centerObjectB.png`，放入 `th123/modules/shady-loader/test` 内](https://bu.dusays.com/2025/02/12/67acaf1ca1148.webp =200x)

2、打开 `th123/modules/shady-loader` 文件夹，新建一个文件夹例如 test，然后把这个 `data_battle_centerObjectB.png` 文件名的透明文件放入 test 文件夹中，打开游戏进入 F2 菜单启用 test 包，之后进入对战，可以看到 UI 中这个框已经没了，就实现了删除图片

![成果展示](https://bu.dusays.com/2025/02/12/67acaebeae63b.webp =800x)

3、如图，把所有文件打包成 zip 压缩包，就可以方便作为美化包发给别人了。zip 压缩包等价于文件夹

![](https://bu.dusays.com/2025/02/12/67acb6b188e95.webp =700x)

![](https://bu.dusays.com/2025/02/12/67acb5ff3a71d.webp =700x)

:::











