---
title: 双击rep播放转mp4视频功能-ReplayDnD

# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-08-23
#文章编辑日期
---



## ReplayDnD-old基础功能简介（不带rep转mp4）
::: info ReplayDnD-old基础功能简介（不带rep转mp4）

- 右键rep文件选择**属性**，**打开方式**设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了
- rep文件可能要和th123.exe在同一个盘符内
- 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）
:::

## 新版ReplayDnD的Rep转mp4视频功能
:::: tip 新版ReplayDnD的Rep转mp4视频功能
::: warning
- **整合包内默认启用 `ReplayDnD-old` 旧版，想要使用新版的功能请手动调整** [**如何开关配置 mod**](/mods/WhatsMod.html)

- 使用时可能会偶尔冒出dll被禁用的弹窗，点确认关掉然后忽略即可，无不良影响

- 如果一次性同时运行多个录制，可能会因内存不足或CPU占用过高等引发一系列问题，所以请根据自己的电脑性能资源量力而行
:::

- **切换为新版后，先打开一遍游戏**，然后以后右键则的rep文件就会多一个选项 `"render to mp4 with soku"`，点了就是开始录制了

- **想要同时录制多个rep，请分别在每个rep文件上右键。** ==不要多选rep文件一次性右键点录制，会出现问题==

![ReplayDnD 快速录制 rep 为 mp4 展示.gif](https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x)

![游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)](https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp =400x)

::: info ReplayDnD的Rep转mp4的特点
1. **录制速度成倍数**，不需要像录屏软件那样一比一时间录制；（标题栏可以看到，60fps为一倍速，120fps为二倍速，以此类推）
2. **可多线程录制**，同时录制多个rep为mp4视频，互相之间不干扰，也不被电脑上其他音频干扰；
3. 录制得到的视频尺寸为 640*480(则的游戏分辨率本来就这么大)，60F帧率，**约5000~10000kbps码率**，可配合改皮肤类mod录制
4. **注意使用录制功能后，游戏内Config的“FPS显示”会被关掉，导致左下角自己的输入延迟和右下角的帧率不显示，记得自己手动再打开**
5. 根据我自己的使用经验，同时开很多个同时录导致满负荷的话，偶尔会录出来音质较差（如妖梦的B弹幕）的情况，可以考虑重新录制
6. 我自己电脑目前环境（AMD Ryzen 5500U）录出来的视频的伽马值会偏高（画面异常明亮）。尝试装了最新A卡驱动后，录出来的正常了，但是我整个画面的伽马值反而变成偏高了，懒得深究了。
:::


### 新版ReplayDnD的Rep转mp4视频功能的已知BUG
::: caution 新版ReplayDnD的Rep转mp4视频功能的已知BUG

- **Win7不能用，会报错**

- **打了[Intel 核显特效消失（变成一根线）的补丁](/FAQ/In-Games/MissingGraphic.html)后，使用Rep转mp4功能会报错无法使用**

- **部分 Nvida 系列显卡可能会有以下情况不能使用，原因和解决办法未知**
  - 右键点 render 后游戏的标题栏无信息或自动关闭，生成0KB~几十KB的无效mp4文件
  - 点了后录了一小段然后卡死不动
  - 第一次能正常录制，之后就一直出问题了

- **部分 Intel 系列核显可能会有“右键点 render 后如下图所示报错”的情况不能使用，原因和解决办法未知**

![可能是 Intel 系列核显就会这样报错](https://bu.dusays.com/2024/06/13/666abd762ca5e.png =400x)
::::

## 命令行脚本流水线无人值守自动录制Rep文件为1080P视频上传至B站

::: info 需要用到的软件和工具

- [Bandzip 解压缩软件](https://www.bandisoft.com/bandizip/)有个智能解压并删除的功能，我挺喜欢的。用 [7Z 解压缩软件](https://www.7-zip.org/) 这种也没问题

- [FFmpeg 软件(Shared版本)](http://ffmpeg.org/)+设置FFmpeg路径环境变量，用于合并录制来的视频得到640x480的长视频，以及截取视频中的一帧当作1920x1080的视频封面

- [Handbrake-CLI 命令行视频压制软件](https://github.com/HandBrake/HandBrake)，用于转换分辨率并压制得到1440x1080视频，支持GPU硬件编码，效率较高。它既有CLI命令行式，也有GUI可视界面式。其直接读取json预设文件似乎存在Bug，所以我使用读取GUI版本的json格式预设，感兴趣可以都装下体验一下，或者自己重新编写下命令行参数

- [biliup-rs 命令行B站视频上传软件](https://github.com/biliup/biliup-rs/)，它既有CLI命令行式，也有GUI可视界面式，也有录播式，在此自动化我们需要命令行式

- 在线转换10位时间戳的网页小工具，用于设置B站的定时发布（大于4小时，小于15天）

- （可选项）[python 脚本](https://www.python.org/)发送邮件，用于提醒流水线工作完成

::: note 待添加的功能

- 流水线列队，上传一个视频的同时（此时已不消耗性能资源）开始一条新的流水线

- 远程接收Rep文件或压缩包，解压并自动加入流水线队列

:::
::: info 脚本使用方法说明

**新建一个叫【非想天则Rep】的文件夹，将rep文件夹放入其中<br>点开rep文件夹，将其中一个rep文件拖拽到此bat上<br>就会把整个文件夹的rep文件 逐个录制+合并+压制+截图+上传+删除视频+归档rep和封面**

:::



::: important bat脚本文件内容需要注意更改的路径



- 这是非想天则游戏th123文件夹的路径`set "TH123path=C:\Users\1\Desktop\【2024-06-24 完整游戏】\th123"`

- ffmpeg路径环境变量设置，或者使用绝对路径

- handbrake软件的路径，本例中直接用了绝对路径`"C:\Users\1\Desktop\HandBrakeCLI\HandBrakeCLI.exe"`，用环境变量应该也可以
- [handbrake 命令行参数说明](https://handbrake.fr/docs/en/1.7.0/cli/cli-options.html)

- [biliup使用说明+命令行参数说明](https://biliup.github.io/index.html)
- 【注意】biliup软件的工作目录必须在自己的文件夹内，也就是CD到`C:\Users\1\Desktop\biliupR-v0.2.1-x86_64-windows\`，这样才能正常读取Cookies登录信息，否则上传会失败！！！
- biliup软件的路径，本例中直接用了绝对路径 `C:\Users\1\Desktop\biliupR-v0.2.1-x86_64-windows\`，用环境变量应该也可以
- `--dtime` 是定时发布，后面接10位时间戳，默认不加该参数则不选择定时发布，`--tag` tag标签使用英文逗号隔开

::: note bat脚本文件内容

```batch:line-numbers


rem 使用方法：新建一个叫【非想天则Rep】的文件夹，将rep文件夹放入其中，点开rep文件夹，将其中一个rep文件拖拽到此bat上，就会把整个文件夹的rep文件逐个录制+合并+压制+截图+上传+删除+归档

@echo off
chcp 65001
setlocal

rem 配置各个路径
set "TH123path=C:\Users\1\Desktop\【2024-06-24 完整游戏】\th123"
set "ffmpeg_path=C:\Users\1\Desktop\ffmpeg-master-latest-win64-gpl-shared\bin"
set "HandBrakeCLI_path=C:\Users\1\Desktop\HandBrakeCLI"
set "biliup_path=C:\Users\1\Desktop\biliupR-v0.2.1-x86_64-windows"


rem 执行文件夹内的全部rep文件，不管路径是否包含空格
	echo.
	echo 录制任务开始，%time%
	echo.
	echo "【rep文件夹，工作路径】===%CD%"
	title 录制中
for %%i in (*.rep) do (
	echo.
	echo "【Filename】===%%i"	
	echo.
rem 逐个执行
	"%TH123path%\th123.exe" /render "%CD%\%%i"
	echo.
	)
	echo 录制任务结束，%time%
	
rem 合并得到 480P 视频
(for %%i in (*.mp4) do @echo file '%%i') > LIST.txt
if not exist 【】Output.mp4 ("%ffmpeg_path%\ffmpeg.exe" -f concat -safe 0 -i LIST.txt -c copy 【】Output.mp4)



echo.
echo 下一步：传输【】Output.mp4给 Handbrake 得到 1080P
echo.
echo 检测Handbrake的输出区是否已经存在视频，若有则是出现异常，暂停等待
echo 如果暂停了就是已经存在"[1080P]_Output.mp4"
echo.
echo.

	title 制作1080P中
echo 传输给 Handbrake 得到 1080P
if not exist "%biliup_path%\[1080P]_Output.mp4" ("%HandBrakeCLI_path%\HandBrakeCLI.exe" --preset-import-gui "C:\Users\1\Desktop\REP5500K.json" --aencoder copy:aac --width 1440 --height 1080 -i 【】Output.mp4 -o "%biliup_path%\[1080P]_Output.mp4") else (echo 已存在成品！！&pause)
timeout /t 2 

rem 即将CD进入biliup工作路径，所以我们需要设一个RepDoneFolder变量，保存当前工作路径，后续需要返回此路径
set "RepDoneFolder=%CD%"

echo %RepDoneFolder% > RepDoneFolder.txt

echo.
echo.
echo 【%time%】1080-DONE，即将进入CD biliup，准备截图和上传
echo.
echo.


cd /D %biliup_path%

	title 制作封面中
echo 截图得到 Cover_[1080P]_Output.jpg
if not exist Cover_[1920]_Output.jpg ("%ffmpeg_path%\ffmpeg.exe" -i [1080P]_Output.mp4 -ss 00:02:20 -frames:v 1 -q:v 2  -vf "pad=1920:1080:240:00:black" Cover_[1920]_Output.jpg)

echo 等待5s，以免上传时没有截图文件
timeout /t 5

if not exist Cover_[1920]_Output.jpg pause
echo 截图正常
if not exist [1080P]_Output.mp4 pause
echo 视频正常

echo.
echo.
echo 开始上传，时间戳小于15天
	title 上传中

cd /D %biliup_path%
biliup.exe upload --limit 5 --tid 17 --cover Cover_[1920]_Output.jpg --title 【非想天则Rep】 --desc "这是简介内容，我不知道该怎么在这里给简介换行" --tag "biliup,非想天则,东方,FXTZ,Replay"  [1080P]_Output.mp4

	title 上传完毕

echo.
echo.
echo 删除视频，归档rep文件

move Cover_[1920]_Output.jpg "%RepDoneFolder%\Cover_Done.jpg"
rem move [1080P]_Output.mp4 %RepDoneFolder%\[1080P]_Done.mp4
del /q [1080P]_Output.mp4



echo.
echo.
echo ----%time%----上传完毕，回到CD %RepDoneFolder%
echo.
echo.

cd /D %RepDoneFolder%

del /Q *.mp4

cd ..
if not exist "!RepDoneFolder" mkdir "!RepDoneFolder"

set DateTimeForLog=%date:~0,4%-%date:~5,2%-%date:~8,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%
set "DateTimeForLog=%DateTimeForLog: =0%"

xcopy  /E "%RepDoneFolder%\"  ".\!RepDoneFolder\%DateTimeForLog%\"

rmdir  /s /q "%RepDoneFolder%"


endlocal
echo.
echo.
echo ALL DONE
echo.
pause



```
:::

## 相关链接
::: tip 相关链接

https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html
https://www.bilibili.com/opus/942465276772876307
使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-08-23】


https://sokureplays.delthas.fr/
大厅内Bot自动观战记录战绩

:::

