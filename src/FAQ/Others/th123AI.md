---
title: 下载和使用“神AI”
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


## “神AI”常见问题
::: caution “神AI”常见问题

- **神AI 主程序 `th123_ai.exe` 会被 [杀毒软件误报误杀](\FAQ\Failed-to-Start\AntiVirus.html)，请添加白名单信任**

- 开启“则2” MOD 的情况下，“神AI”会识别不到游戏，**所以“则2”和“神AI”不能共存**
:::

::: warning 
**若是发生 AI 误操作为 1P 的情况<br>可以试试再继续打开第二个AI程序，进入VS PALYER，此时应该会出现两个AI互相打的情况<br>这个时候然后关掉第一个AI程序就行了**
:::

## 下载“神AI”
::: info 下载“神AI”

**“神AI” 下载链接 ↓**
https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/th123ai.zip

下载后解压，注意杀毒软件添加信任，或者临时关闭杀毒软件

会看到一个 `AI（请勿复制修改）.pf` 的文件，将它复制到你非想天则游戏的 `th123/profile` 文件夹内

然后在练习模式选人界面按 C 键，将 2P使用机签 切换至这个 `AI（请勿复制修改）`


:::


## 使用“神AI”
::: info ①使用“神AI”

<!---
如果它询问 AI 脚本文件的话，可以选择 all_standby.ai 文件

![](https://bu.dusays.com/2023/10/01/65196a41cd84f.png)

![如果它询问 AI 脚本文件的话，可以选择 all_standby.ai 文件](https://bu.dusays.com/2023/10/01/65196a41e98c3.png)

不询问 AI 脚本文件也正常，默认就是上面那个文件，然后选择 th123.exe 打开
--->

不需要解压到游戏内，随处都可以双击 `th123_ai.exe` 运行

也可以在 cmd 内输入 `chcp 932`，可以切换至日语代码页，再将 `th123_ai.exe` 拖进 cmd 后回车，可以显示日语，而不是乱码中文

打开后他会询问 th123.exe 即游戏主程序

![询问th123.exe的时候，可以直接点击地址栏箭头这里的 th123 文件夹](https://bu.dusays.com/2024/01/21/65acc340bd37c.webp =900x)

![再双击 th123.exe 即是游戏主程序](https://bu.dusays.com/2024/01/21/65acc36aa6282.webp =900x)
:::

::: info ②使用“神AI”
**打开游戏后，确保冒出来的小黑框的标题如图显示为 Start Menu，如果不是就说明有问题，可能是错打开了 1.10 版本的神AI或者游戏**

![版本匹配正常，小窗口标题栏会显示当前游戏状态](https://bu.dusays.com/2024/01/21/65acc3fddf590.webp =600x)

**正常的话，就进入 VS PLAYER 模式，注意 2P 的机签设置为AI（键位和卡组已经预设好了，键位冲突的话可以修改AI的键位）**

**若游戏脱离聚焦不在前台，AI会停止行动**
:::

<!-- ::: warning  点开提示找不到文件，或无反应

![找不到文件 “th123_ai.exe”](https://bu.dusays.com/2024/01/21/65acc2c439775.webp =400x)

这是因为你的神 AI 主程序文件**被杀毒软件误杀**了。


**下载后将其解压复制到这个路径  `th123/modules/th123ai/th123_ai.exe`**

![](https://bu.dusays.com/2024/01/21/65acc30b8d0ab.webp =600x)

::: -->
