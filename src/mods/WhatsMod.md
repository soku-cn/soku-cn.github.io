---
title: 如何开关配置mod

# 标题
icon: circle-info
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-01-07
#文章编辑日期
---


::: info 如何开关配置mod和添加新mod
请检查确认更新

**“12-8 版本”后使用ModLoader（d3d9-loader-debug.dll），则 SWRStoys.ini 作废，而是使用 ModLoaderSettings.json 文件**

**主菜单里按D，有修改mod配置的菜单，也有添加新mod的选项**

![主菜单里按D，有修改mod配置的菜单](https://bu.dusays.com/2024/01/07/6599882245d9b.png =400x)

![](https://bu.dusays.com/2024/01/07/659988b9b72e2.png =400x)

:::

::: info  进一步设置mod，自定义按键和开关功能等

某些插件的ini配置文件内或者游戏内可以进行设置，如自定义热键和开关某些功能
大多数是无需调整的
键位码可参考此表    https://github.com/SokuDev/SokuMods/blob/master/VIK.md

注意插件有版本之分，110与110A版本的插件不能互通，一般正常切换版本是没问题的，遇到check version failed的弹窗要注意是不是版本出了问题
:::


::: info 什么是 SWRSToys 插件
**SWRSToys 的 Github 项目仓库**  https://github.com/SokuDev/SokuMods/

**国际非想天则 Disocrd 社区群（需梯子）**  https://discord.gg/hisouten

我的mod群200803640
欢迎对mod感兴趣，有疑问需要帮助的朋友。
:::

![三件套组成 SWRSToys](https://bu.dusays.com/2023/08/20/64e21cc628b96.png =600x)

 
::: tip 以下是 [12-8] SWRSToys-default-备份.ini 的内容
;################################################
; 在每行语句开头加英文分号，代表关闭插件，语句是绿色
; 在每行语句开头删英文分号，代表启用插件，语句是黑色
; 若新添加mod，将mod文件放入modules文件夹，并在此添加路径语句
; 各插件详细信息请看chm手册
; th123 文件夹内有备份的配置文件

;                 【整合包常见问题速查-实时更新】
;           https://wiki.514.live   或    https://tstar00.github.io
;################################################

[Module]
;#####  1、不需要关闭的mod  ################################

;Easydeck开启后，可以在网战选人时也能按C来即可修改卡组
EasyDecks=modules/EasyDecks/EasyDecks.dll

;帧数补丁+网络回滚，是改善联机质量和游戏体验的必要插件      国内默认用62F版本，国外用60F
;giuroll-0.6.7=modules/giuroll(60+61+62)/giuroll-0.6.X/giuroll-0.6.7.dll 
giuroll-0.5.3b=modules/giuroll(60+61+62)/giuroll-62F.dll
;【转载/中文字幕】Core-A分析：格斗游戏"回滚型网络代码"的好处 https://www.bilibili.com/video/BV1L5411a7vK
;【FTG】Code Mystics 解释网络代码：输入延迟 vs. 网络回滚 https://www.bilibili.com/video/BV1wy4y1C77F

;新版的网络大厅mod，按S切换原本联机界面，开启后打网战可计入统计和解锁成就（不必非到大厅里面打网战） https://wiki.514.live/FAQ/Play/LobbyGuide.html
SokuLobbiesMod=modules/SokuLobbiesMod/SokuLobbiesMod.dll
;SokuLobbiesModDebug=modules/SokuLobbiesMod/SokuLobbiesModdebug.dll

;新版练习模式相关，详情 https://wiki.514.live/mods/PracticeMods.html
PracticeEx=modules/PracticeEx/PracticeEx.dll

;就是那个练习模式蹦出来的黑命令框，可以查看有利不利帧数的功能，大键盘1 2可使角色复位或保存角色位置，详情 https://wiki.514.live/mods/PracticeMods/Labtool.html
LabTool=modules/LabTool/LabTool.dll

;查看输入指令，判定框，游戏信息等，详情 https://wiki.514.live/mods/PracticeMods/ReplayInputView_.html
ReplayInputView+=modules/ReplayInputView+/ReplayInputView+.dll

;计分插件
ScoreTracker=Modules/ScoreTracker/ScoreTracker.dll

;语言插件，可修改中文、日文、英文版本
th123intl=Modules/th123intl/th123intl.dll

;可以修复更换设备导致需要重开游戏的情况
ControlPnP=Modules/ControlPnP.dll

;惩罚显示插件，提示出招被打断或者被确反被抓乱动
PunishDisplay=Modules/PunishDisplay.dll

;替换游戏资源使用的mod，游戏内主菜单按F2可展开设置，你看到的随机主菜单界面就是它的功劳
shady-loader=modules/shady-loader/shady-loader.dll

;请看它的 ini 配置文件
MemoryPatch=modules/MemoryPatch/MemoryPatch.dll

;修复美铃原236芳波联机时造成不同步的bug
FixMeiling236=modules/FixMeiling236/FixMeiling236.dll

; 修复手柄和摇杆的十字键问题
DPadFix=modules/DPadFix/DPadFix.dll

SokuReplays=modules/SokuReplays/SokuReplays.dll

UPnPNat=modules/UPnPNat/UPnPNat.dll

; 简称 AP，UDP打洞直连工具
Autopunch=modules/Autopunch/Autopunch.dll

;修复蕾米莉亚锁链招数数据异常而不同步的问题（Windows环境基本不会发生，Linux环境下非常容易发生），最好双方都启用才能保证效果
ChainCFix=modules/ChainCFix.dll

;使游戏支持 IPV6 联机（且适配大厅mod），可直接复制 IPV6 地址，默认补充端口10800，从剪贴板加入连接即可，详情 https://www.bilibili.com/video/BV1eB4y1f7ML/
IPv6MapSokuMod=modules\IPv6MapSokuMod\IPv6MapSokuMod.dll

; SaveRep 0.2.1版本：开启此 mod 时，VS PLAYER 本地对战、网络对战、观战中，在以下情况下可以保存 replay：
; 对方或自己 esc 结束对局，或自己取消观战时
; 不同步导致对局提前结束时
; 网络连接断开时
; 游戏窗口被关闭时
; 游戏崩溃时
SaveRep=modules/SaveRep/SaveRep.dll

;拖拉放大窗口的插件，按alt+enter来全屏，不要去设置里开全屏 （old版没有全屏优化，需要配合AltFullscreen）
WindowResizer=modules/WindowResizer/WindowResizer.dll
;WindowResizer-old=modules/WindowResizer/WindowResizer-old.dll

;双击rep即可播放，右键render to mp4可以把rep快速录制为mp4 （Win7需要用old版，不能使用rep快速录制为mp4的功能）
;ReplayDnD=modules/ReplayDnD/ReplayDnD.dll
ReplayDnD-old=modules/ReplayDnD/ReplayDnD-old.dll

;######################################################


;#####  2、可选打开的mod  ################################

;血条不挡人插件，但是会遮挡住伤害信息面板
CharactersInForeground=modules/CharactersInForeground/CharactersInForeground.dll

; 则2 mod（要额外单独下载 ） 详情 https://wiki.514.live/mods/GameplayMods/SOKU2general.html
;SOKU2=Modules/SOKU2/SOKU2.dll
;MemoryPatchSOKU2FIX=Modules/MemoryPatchSOKU2FIX/MemoryPatchSOKU2FIX.dll
; 上面两个要保持一起开或者一起关

;录比赛视频或者直播用，激活后在OBS内添加浏览器 127.0.0.1，观战和看rep时有效
;SokuStreaming=Modules/SokuStreaming/SokuStreaming.dll

;跳过游戏开头动画，若跳过的话进入 VS NETWORK 时需要等待一会儿加载大厅mod
;SkipIntro=modules/SkipIntro/SkipIntro.dll

;v1.2 将网战模式下按下 Esc 键中断对局改为按住 Esc 键两秒的mod，以避免发生误触而中断对局的意外，只对自己有效（不能防止对面误触，除非对面也装mod）可以单方面使用此mod
;HoldEscOnline=Modules/HoldEscOnline.dll

;把卡组从喜怒哀乐四套改成无限套卡组且可以自定义命名和在选人时预览
;【开启前提前备份卡组，开启后会丢失喜卡组，看说明后再来使用】
;InfiniteDecks=modules/InfiniteDecks.dll

;TrialMode 是制作连段包和打连段挑战的mod 
;【非想天则】Trialmode 快速上手 - 编辑与游玩 https://www.bilibili.com/video/BV1eY4y1r7A5/
;连段包下载（网盘） https://www.bilibili.com/opus/792989024813842456
; 编辑制作推荐用0.5.12版本，游玩推荐用0.6.1版本
;TrialMode-0.6.1=modules/TrialMode/TrialMode-0.6.1.dll
;TrialMode-0.5.12=modules/TrialMode/TrialMode-0.5.12.dll

;修复插拔耳机导致需要重开游戏的情况，但是有些人由于未知原因，开启后会导致游戏打不开，进程假死在初始阶段，所以没有默认开启
;DSoundFix=Modules/DSoundFix.dll

;打开后游戏不在焦点时不播放BGM
;NoFocusNoBgm=Modules/NoFocusNoBgm.dll

;替换BGM用的插件，请看chm说明
;BGMChanger=modules/BGMChanger/BGMChanger.dll

;突破一次性8个角色配色的数量上限并可快速添加自定义配色
;palette-picker=Modules/palette-picker/palette-picker.dll

;黑名单插件，看chm手册说明
;Blacklist=modules/Blacklist/Blacklist.dll

;方便换掉网战X入时那个“叮”的声效
;NetBellChanger=modules/NetBellChanger/NetBellChanger.dll

;可在 Disocrd 桌面端APP上显示游戏具体信息
;DiscordIntegration=modules/DiscordIntegration/DiscordIntegration.dll

;######################################################

:::
