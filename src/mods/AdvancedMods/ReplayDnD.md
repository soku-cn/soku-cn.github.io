---
title: 双击rep文件观看，rep转mp4视频功能-ReplayDnD

# 标题
icon: circle-info
# 图标
order: 20
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-08-23
#文章编辑日期
---



## old基础功能简介（不带rep转mp4）
::: info ReplayDnD-old 基础功能简介（不带rep转mp4）

- 右键rep文件选择**属性**，**打开方式**设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了

<!-- - rep文件可能要和th123.exe在同一个盘符内 -->

- 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）
:::

## 新版Rep转mp4功能
:::: tip 新版 ReplayDnD 的 Rep 转 mp4 视频功能
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
::::

### 已知BUG
::: caution 新版ReplayDnD的Rep转mp4视频功能的已知BUG

- 录制 mp4 功能不能和 `SokuDirectXOptimizations` mod 同时使用，会造成录出来的视频以倍速播放的 bug，请关掉 `SokuDirectXOptimizations` mod 再使用录制功能  [**如何开关配置 mod**](/mods/WhatsMod.html)

- 文件名以及文件路径不能包括百分号`%`和英文感叹号`!`和`号，否则会发生双击rep文件只打开游戏和不播放rep的情况（ReplayDnD mod没激活就双击rep的话也会这样）

- Win7不能用，会报错

- 打了[Intel 核显特效消失（变成一根线）的补丁](/FAQ/In-Games/MissingGraphic.html)后，使用Rep转mp4功能会报错无法使用

- **部分 Nvida 系列显卡可能会有以下情况不能使用，原因和解决办法未知**
  - 右键点 render 后游戏的标题栏无信息或自动关闭，生成0KB~几十KB的无效mp4文件
  - 点了后录了一小段然后卡死不动
  - 第一次能正常录制，之后就一直出问题了

- **部分 Intel 系列核显可能会有“右键点 render 后如下图所示报错”的情况不能使用，原因和解决办法未知**

![可能是 Intel 系列核显就会这样报错](https://bu.dusays.com/2024/06/13/666abd762ca5e.png =400x)
::::

## 命令行脚本流水线无人值守自动录制Rep文件为1080P视频上传至B站

::: info 需要用到的软件和工具

- [Bandzip 解压缩软件](https://www.bandisoft.com/bandizip/)有个智能解压并删除的功能，我挺喜欢的。也可以用 [7z 解压缩软件](https://www.7-zip.org/) ，随你喜欢

- [FFmpeg 软件(推荐 Shared 版本)](http://ffmpeg.org/)+设置FFmpeg路径环境变量，用于合并录制来的视频得到640x480的长视频，以及截取视频中的一帧当作1920x1080的视频封面

- [Handbrake 视频压制软件，CLI 命令行版和 GUI 可视界面版两个都要下](https://github.com/HandBrake/HandBrake)，用于放大分辨率并压制得到1440x1080视频，支持GPU硬件编码，效率较高。
  - 然而CLI版 `--preset-import-file` 直接读取json预设文件存在 Bug 无法生效，所以我必须得下载GUI版本，再使用 `--preset-import-gui` 选项才能读取其默认的json预设。我平常也用GUI版本所以多下一个无所谓，不想再下载GUI版本的话就得自己手动编写下命令行参数，或者用其他软件替代

- [biliup-rs 命令行B站视频上传软件](https://github.com/biliup/biliup-rs/)，它既有CLI命令行版，也有GUI可视界面版，也有录播版

- 在线转换10位时间戳的网页小工具，用于设置B站的定时发布（大于4小时，小于15天），网上有很多在线网站可转换

- （可选项）[python 环境](https://www.python.org/)发送邮件，用于提醒流水线工作完成

::: note 待添加的功能

- 远程接收Rep文件或压缩包，解压并自动加入流水线队列

:::


::: important bat脚本文件内的各项参数说明（注意配置环境路径，末尾不要带反斜杠）


- `set "Rep_Root=C:\Users\1\Desktop\【非想天则Rep】\录Rep工程"`
  - 自己创建一个工程文件夹，然后设置路径

- `set "TH123path=C:\Users\1\Desktop\【2024-06-24 完整游戏】\th123"`
  - 这是非想天则游戏th123文件夹的路径，确保开启了 ReplayDnD

- `set "C:\Users\1\Desktop\HandBrakeCLI\HandBrakeCLI.exe"`
  - 这是 handbrake-CLI 软件的路径
  - [handbrake 命令行参数说明](https://handbrake.fr/docs/en/1.7.0/cli/cli-options.html)

- `set "biliup_path=C:\Users\1\Desktop\biliupR-v0.2.1-x86_64-windows"`
  - 这是 biliup软件的路径
  - 若没有手动登陆 biliup 软件，运行脚本时检测到 Cookies 文件不存在会让你登陆，登陆成功后再使用脚本
  - **biliup 软件的工作目录必须在自己的文件夹内，这样才能正常读取 Cookies 登录信息，否则上传会失败**
  - [biliup使用说明+命令行参数说明](https://biliup.github.io/index.html)
  - `--dtime` 是定时发布，后面接10位时间戳 `VideoUploadTime` ，要求比现在**晚4个小时但不超过15天，非法时间点会导致消耗网络上传完毕后被白白丢弃**；若不加该参数则不定时发布而是即时发布

- ==**FFmpeg 路径请到"系统环境变量"里设置！**==


::: tip 脚本使用方法说明

1. 创建工程文件夹用于 `Rep_Root`，阅读其他参数并设置好参数的路径
2. 点开rep文件夹，将其中任意一个文件拖拽到此 bat 上即可，会把整个文件夹的rep文件 逐个录制+合并+压制+截图+上传+归档
3. 一个任务开始了，此时再点开另外一个rep文件夹，继续拖拽文件到此 bat 上，会使其加入等待队列，一旦前面的任务完成即可接着执行
4. 复制此 bat 创建副本，修改 `Workingtxt` 避免冲突，即可多条流水线，建议不超过 3 个，否则会很卡
5. 在录制rep过程中可直接关闭cmd窗口终止脚本，但是则的窗口建议最好不要终止，否则要手动删除未完成的mp4，已经录过的rep不会重新录
6. 压制过程中终止脚本，需要手动删除未完成的1080P视频

:::

::: details （录制+压制+上传）三段合一的bat脚本示例

```batch:line-numbers
rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html
rem https://www.bilibili.com/opus/942465276772876307
rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】
rem 
rem https://sokureplays.delthas.fr/
rem 大厅内Bot自动观战记录战绩

@echo off
chcp 65001
setlocal ENABLEDELAYEDEXPANSION

rem 配置各个路径，路径结尾不要带反斜杠！
rem 2024-09-30 -> 1727676000 ，10位时间戳，要求比现在晚4个小时但不超过15天，非法时间点会导致消耗网络上传完毕后被白白丢弃
set "VideoUploadTime=？"
set "Workingtxt=3in1_Working.txt"
set "Rep_Root=？"
mkdir "%Rep_Root%"
set "Rep_Done=%Rep_Root%\归档的Rep"
mkdir "%Rep_Done%"
set "TH123path=？"
set "HandBrakeCLI_path=？"
set "biliup_path=？"
set "OUTPUT_480=[Output480P].mp4"
set "VideoName[1080P]Output=[1080P]_Output_[%Workingtxt%].mp4"
set "CoverName[1080P]Output=Cover_[1080P]_Output_[%Workingtxt%].jpg"

rem 请确保上面的参数全部设置正确
rem ########################################################



rem 我们需要设一个RepDoneFolder变量，把包含文件夹的路径作为标题，之后去网页端后台修改标题和定时发布
set "RepDoneFolder=%CD%"
echo %RepDoneFolder% > RepDoneFolder.txt

:CheckBiliupLogin
title %Workingtxt% 你尚未登录 biliup
if not exist "%biliup_path%\cookies.json" (
	cd /D "%biliup_path%"
	biliup -h
	echo.
	echo ##############################################
	echo 你尚未登录 biliup，可以选择扫码登陆，会在 biliup 文件夹内生成一个 qrcode.png
	echo ##############################################
	echo.
	biliup login
	echo.
	echo ##############################################
	echo 脚本即将从头开始，再次检测你的 cookies.json 是否存在
	echo ##############################################
	echo.
	pause
	goto CheckBiliupLogin
)

cd /D "%RepDoneFolder%"
	title %Workingtxt%  等待执行
	
:CheckTaskOrder
if exist "%Rep_Root%\%Workingtxt%" echo 排号等待中&timeout /t 10&goto CheckTaskOrder
echo %time%>"%Rep_Root%\%Workingtxt%"

rem 执行文件夹内的全部rep文件，不管路径是否包含空格
	title %Workingtxt%  录制任务开始 %time%
	echo.
	set "RecordStartTime=%time%"
	echo  录制任务开始 %time%
	echo.
	echo 【rep文件夹，工作路径】===%CD%
	echo.
if not exist %OUTPUT_480% (
	for %%i in (*.rep) do (
	echo !time! 【Filename】===%%i
	echo.
rem 逐个执行，已录制过的会跳过
	if not exist "%%~ni.mp4" "%TH123path%\th123.exe" /render "%CD%\%%i"
		)
	)
echo.
	echo 录制任务结束 %time%
	set "RecordDoneTime=%time%"
	echo Ctrl^G BEL 响铃
	echo   

title %Workingtxt%  "开始合并 480P 视频"
echo.
echo 开始合并 480P 视频
echo.

(for %%i in (*.mp4) do @echo file '%%i')>LIST.txt
if exist %OUTPUT_480% echo 已存在Output&goto HaveDone480Output
ffmpeg.exe -f concat -safe 0 -i LIST.txt -c copy %OUTPUT_480%

	echo.
	echo error level 为 %errorlevel%
	echo.
	if %errorlevel% neq 0 echo "Error Level not 0, upload failed"&pause
	echo.
	echo Upload Success Pass



	title %Workingtxt%  "合并480P完毕，发邮件，开始压制1080P"
echo.
echo 合并480P完毕，发邮件，准备开始压制1080P %time%
set "480PDoneTime=%time%"
echo.

echo 传输给 Handbrake 得到 1080P

:HaveDone480Output
if exist "%biliup_path%\%VideoName[1080P]Output%"  (
	choice /T 10 /C YN /D N /M "已存在一个1080P视频，按Y强行继续 debug，按N等待直到这个视频执行完毕"
	if %errorlevel% equ 2 goto HaveDone480Output
)

cd .
rem cd . 可以重置 errorlevel

if not exist "%biliup_path%\%VideoName[1080P]Output%" "%HandBrakeCLI_path%\HandBrakeCLI.exe" --preset-import-gui --aencoder copy:aac --width 1440 --height 1080 -i "%OUTPUT_480%" -o "%biliup_path%\%VideoName[1080P]Output%"
	echo.
	echo error level 为 %errorlevel%
	echo.
	if %errorlevel% neq 0 echo "压制检测到错误"&pause&goto HaveDone480Output
	echo.
	echo Upload Success Pass


echo.
echo.
echo %time% 1080压制完毕，即将进入CD biliup，准备截图和上传
set "1080PDoneTime=%time%"
echo.
echo.

:Making1080Cover
	del /q "%Rep_Root%\%Workingtxt%"
	title %Workingtxt%  制作封面中
echo 制作封面中

cd /D %biliup_path%
if not exist %CoverName[1080P]Output% "ffmpeg.exe" -i %VideoName[1080P]Output% -ss 00:01:05 -frames:v 1 -q:v 2  -vf "pad=1920:1080:240:00:black" %CoverName[1080P]Output%

	echo.
	echo error level 为 %errorlevel%
	echo.
	if %errorlevel% neq 0 echo "截图检测到错误"&pause&goto Making1080Cover
	echo.

echo.
echo %time% 截图完毕
set "CoverDoneTime=%time%"
echo.
echo.

echo 开始上传，时间戳小于15天
echo.

:UploadingVideo
title %Workingtxt%  开始上传，时间戳小于15天
echo.

cd /D %biliup_path%
biliup.exe upload --limit 5 --tid 17 --cover "%CoverName[1080P]Output%" --title "%RepDoneFolder:~-75%" --desc "https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html    https://www.bilibili.com/opus/942465276772876307    使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-08-23】    https://sokureplays.delthas.fr/    大厅内Bot自动观战记录战绩" --dtime %VideoUploadTime% --tag "biliup,非想天则,东方,FXTZ,Replay"  "%VideoName[1080P]Output%"
	if %errorlevel% equ 1  echo "error level 为 %errorlevel% ，上传检测到错误"&pause&goto UploadingVideo
	echo.
	title %Workingtxt%  上传完毕，归档rep文件

echo.
echo.
echo 上传完毕，归档rep文件

copy %CoverName[1080P]Output% "%Rep_Done%\%CoverName[1080P]Output%_%random%.jpg"
move %CoverName[1080P]Output% "%RepDoneFolder%\"
move %VideoName[1080P]Output% "%Rep_Done%\%VideoName[1080P]Output%_%random%.mp4"
rem del /q %VideoName[1080P]Output%



echo.
echo.
echo %time% 上传完毕，回到rep文件夹
set "UploadDoneTime=%time%"
echo.
echo.

cd /D "%RepDoneFolder%"
del /Q *.mp4
(echo RecordStartTime %RecordStartTime%
echo.
echo RecordDoneTime %RecordDoneTime%
echo.
echo 480PDoneTime %480PDoneTime%
echo.
echo 1080PDoneTime %1080PDoneTime%
echo.
echo CoverDoneTime %CoverDoneTime%
echo.
echo UploadDoneTime %UploadDoneTime%
echo.
echo ALL DONE %time%
echo. 
)>"ALL-DONE-TIME.txt"

cd /D %Rep_Root%

set DateTimeForLog=%date:~0,4%-%date:~5,2%-%date:~8,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%
set "DateTimeForLog=%DateTimeForLog: =0%"

xcopy  /E "%RepDoneFolder%\"  "%Rep_Done%\%DateTimeForLog%\"

rmdir  /s /q "%RepDoneFolder%"

echo.
echo RecordStartTime %RecordStartTime%
echo.
echo RecordDoneTime %RecordDoneTime%
echo.
echo 480PDoneTime %480PDoneTime%
echo.
echo 1080PDoneTime %1080PDoneTime%
echo.
echo CoverDoneTime %CoverDoneTime%
echo.
echo UploadDoneTime %UploadDoneTime%
echo.
echo ALL DONE %time%
echo.
endlocal
pause
```
:::

::: details 分段式一、批量录制并积攒480P成品（此脚本可重复并行运行）
```batch:line-numbers
rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html
rem https://www.bilibili.com/opus/942465276772876307
rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】
rem 
rem https://sokureplays.delthas.fr/
rem 大厅内Bot自动观战记录战绩

@echo off
chcp 65001
setlocal ENABLEDELAYEDEXPANSION

rem 配置各个路径，路径结尾不要带反斜杠！
set "LimitVideo=30"
set "Rep_Root=？"
mkdir "%Rep_Root%"
set "Rep_Done=%Rep_Root%\归档的Rep"
mkdir "%Rep_Done%"
set "TH123path=？"
set "StoreHouse480=%Rep_Root%\分段式一批量积攒480P成品"
mkdir %StoreHouse480%

rem 请确保上面的参数全部设置正确
rem ########################################################



	title %Workingtxt% 录制任务开始480 %time%
	echo.
	echo 录制任务开始480 %time%
	echo.
	echo "【rep文件夹，工作路径】===%CD%"

rem 即将CD进入biliup工作路径，所以我们需要设一个RepDoneFolder变量，保存当前工作路径，后续需要返回此路径
set "RepDoneFolder=%CD%"
echo %RepDoneFolder% > RepDoneFolder.txt

for %%i in (*.rep) do (
	echo.
	echo "!time! 【Filename】===%%i"	
	echo.
rem 逐个执行
	if not exist "%%~ni.mp4" "%TH123path%\th123.exe" /render "%CD%\%%i"
	echo.
	)
	echo 录制任务结束，%time%
	echo Ctrl^G BEL 响铃
	echo   

echo 开始合并 480P 视频
echo.

(for %%i in (*.mp4) do @echo file '%%i') > LIST.txt
if exist 【】Output.mp4 echo 已存在Output&pause&goto HaveDoneOutput
ffmpeg.exe -f concat -safe 0 -i LIST.txt -c copy 【】Output.mp4


:HaveDoneOutput
echo 制作1080封面

if exist "%StoreHouse480%\%LimitVideo%_Cover_[1920]_Output-480.jpg" echo 已满 %LimitVideo% 个封面视频&pause

for /L %%a in (1,1,%LimitVideo%) do (
	if not exist "%StoreHouse480%\%%a_Cover_[1920]_Output-480.jpg" (
		title %Workingtxt% %%a / %LimitVideo%  制作1080封面
		move 【】Output.mp4 "%StoreHouse480%\%%a_[480P]_Output.mp4"	
		timeout /t 1	
		"ffmpeg.exe" -i "%StoreHouse480%\%%a_[480P]_Output.mp4" -ss 00:02:20 -frames:v 1 -q:v 2  -vf "scale=-1:1080" "%StoreHouse480%\Cover_[1920]_Output-480-temp-%%a.jpg"		
		timeout /t 1		
		"ffmpeg.exe" -i "%StoreHouse480%\Cover_[1920]_Output-480-temp-%%a.jpg"  -vf "pad=1920:1080:240:00:black"  "%StoreHouse480%\Cover_[1920]_Output-480-%%a.jpg"
		
		copy "%StoreHouse480%\%%a_Cover_[1920]_Output-480.jpg" "%RepDoneFolder%\Cover_Done.jpg"
		del "%StoreHouse480%\Cover_[1920]_Output-480-temp-%%a.jpg"			
		copy RepDoneFolder.txt "%StoreHouse480%\%%a_RepDoneFolder.txt"
		
		goto CoverDone
	)
)

:CoverDone
echo.
echo %time% 截图完毕
echo.
echo.
echo 归档rep文件


del /Q *.mp4

rem cd ..
cd /D %Rep_Root%
set DateTimeForLog=%date:~0,4%-%date:~5,2%-%date:~8,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%
set "DateTimeForLog=%DateTimeForLog: =0%"
xcopy  /E "%RepDoneFolder%\"  ".\RepDoneFolder\%DateTimeForLog%\"
rmdir  /s /q "%RepDoneFolder%"


echo.
echo.
echo ALL DONE-480 积攒480 %time%
echo.
endlocal
pause
```
:::

::: details 分段式二、批量压制（任务交给高性能GPU台式电脑）
```batch:line-numbers
rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html
rem https://www.bilibili.com/opus/942465276772876307
rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】
rem 
rem https://sokureplays.delthas.fr/
rem 大厅内Bot自动观战记录战绩

@echo off
chcp 65001
setlocal ENABLEDELAYEDEXPANSION

rem 配置各个路径，路径结尾不要带反斜杠！
set "LimitVideo=30"
set "Rep_Root=？"
mkdir "%Rep_Root%"
set "Rep_Done=%Rep_Root%\归档的Rep"
mkdir "%Rep_Done%"
set "HandBrakeCLI_path=？"
set "StoreHouse480=%Rep_Root%\分段式一批量积攒480P成品"
mkdir %StoreHouse480%
set "Compressed480=%StoreHouse480%\已被压制成1080P，归档的480P视频"
mkdir "%Compressed480%"

rem 请确保上面的参数全部设置正确
rem ########################################################



	echo.
	echo  批量压制任务开始 %time%
	echo.

for /L %%a in (1,1,%LimitVideo%) do (
	title %Workingtxt% 处理第 %%a / %LimitVideo% 个  !time!
	
	echo 处理第 %%a / %LimitVideo% 个  !time!
	echo.
	
set Input480PVideo="%StoreHouse480%\%%a_[480P]_Output.mp4"
set Output1080PVideo="%StoreHouse480%\%%a_[480P]_Output_[1080P].mp4"
	
if exist !Input480PVideo! echo 存在 !Input480PVideo! 了&echo.&if not exist "!Output1080PVideo!" (
	"%HandBrakeCLI_path%\HandBrakeCLI.exe" --preset-import-gui --aencoder copy:aac --width 1440 --height 1080 -i !Input480PVideo! -o !Output1080PVideo! 
	
	echo.
	echo error level 为 %errorlevel%
	echo.
	if %errorlevel% neq 0 echo "Error Level not 0, upload failed"&pause
	echo.
	echo Upload Success Pass
	echo.
	
	set DateTimeForLog=!date:~0,4!-!date:~5,2!-!date:~8,2!-!time:~0,2!-!time:~3,2!-!time:~6,2!
	set "DateTimeForLog=!DateTimeForLog: =0!"
	move !Input480PVideo! "%Compressed480%\!DateTimeForLog!\"	
	)
)


echo.
echo.
echo   
echo.
echo %time% 1080批量压制-DONE
echo.
echo.
pause
```
:::

::: details 分段式三、批量上传
```batch:line-numbers
rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html
rem https://www.bilibili.com/opus/942465276772876307
rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】
rem 
rem https://sokureplays.delthas.fr/
rem 大厅内Bot自动观战记录战绩

@echo off
chcp 65001
setlocal ENABLEDELAYEDEXPANSION

rem 配置各个路径，路径结尾不要带反斜杠！
rem 2024-09-30 -> 1727676000 ，10位时间戳，要求比现在晚4个小时但不超过15天，非法时间点会导致消耗网络上传完毕后被白白丢弃
set "VideoUploadTime=1727676000"
set "LimitVideo=30"
set "biliup_path=？"
set "StoreHouse480=%Rep_Root%\分段式一批量积攒480P成品"
mkdir %StoreHouse480%
set "Uploaded1080PVideo=%StoreHouse480%\已上传的1080P视频"
mkdir %Uploaded1080PVideo%

rem 请确保上面的参数全部设置正确
rem ########################################################


:CheckBiliupLogin
title %Workingtxt% 你尚未登录 biliup
if not exist "%biliup_path%\cookies.json" (
	cd /D "%biliup_path%"
	biliup -h
	echo.
	echo ##############################################
	echo 你尚未登录 biliup，可以选择扫码登陆，会在 biliup 文件夹内生成一个 qrcode.png
	echo ##############################################
	echo.
	biliup login
	echo.
	echo ##############################################
	echo 脚本即将从头开始，再次检测你的 cookies.json 是否存在
	echo ##############################################
	echo.
	pause
	goto CheckBiliupLogin
)

cd /D %biliup_path%
for /L %%a in (1,1,%LimitVideo%) do (
	title %Workingtxt% !time! "处理第 %%a 个，上传1080，时间戳小于15天"
	echo.
	echo !time! "处理第 %%a 个，上传1080，时间戳小于15天"
	echo.	
	set DateTimeForLog=!date:~0,4!-!date:~5,2!-!date:~8,2!-!time:~0,2!-!time:~3,2!-!time:~6,2!
	echo !DateTimeForLog!
set /p RepDoneFolder=<"%StoreHouse480%\%%a_RepDoneFolder.txt"

if exist "%StoreHouse480%\%LimitVideo%_Cover_[1920]_Output-480.jpg" (
	set UploadVideo="%StoreHouse480%\%%a_[480P]_Output_[1080P].mp4"
	set UploadCover="%StoreHouse480%\%%a_Cover_[1920]_Output-480.jpg"
	cd /D %biliup_path%
	if exist !UploadVideo! biliup.exe upload --limit 5 --tid 17 --cover !UploadCover! --title "%%a_!RepDoneFolder:~-75!" --desc "https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html     https://www.bilibili.com/opus/942465276772876307    使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-08-23】    https://sokureplays.delthas.fr/    大厅内Bot自动观战记录战绩09" --dtime %VideoUploadTime% --tag "biliup,非想天则,东方,FXTZ,Replay"  !UploadVideo!
	
	if %errorlevel% equ 1  echo "error level 为 %errorlevel% ，上传检测到错误"&pause&goto UploadingVideo
	
	rem del /q !UploadVideo!
	move !UploadVideo! "%Uploaded1080PVideo%\"	
	move !UploadCover! "%Uploaded1080PVideo%\"
	move "%StoreHouse480%\%%a_RepDoneFolder.txt" "%Uploaded1080PVideo%\"	
	)
)

echo.
echo.
title %Workingtxt% %time% 全部上传完毕 %LimitVideo%
echo %time% 全部上传完毕 %LimitVideo%
echo.
endlocal
pause
```
:::



## 相关链接
::: tip 相关链接

https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html
https://www.bilibili.com/opus/942465276772876307
使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】


https://sokureplays.delthas.fr/
大厅内Bot自动观战记录战绩

:::

