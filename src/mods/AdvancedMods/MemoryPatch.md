---
title: 一些补丁-MemoryPatch

# 标题
icon: circle-info
# 图标
order: 40
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-01
#文章编辑日期
---


::: info 功能简介
MemoryPatch 默认开启，里面各个详细部分可自己选择

打开对应ini文件，会看到各个部分 （`th123\Modules\MemoryPatch\MemoryPatch.ini`）

`Enabled=1` 为开启

`Enabled=0` 为关闭
:::

::: note 2024-09-21 可使用的补丁

[General]
Hash=df35d1fbc7b583317adabe8cd9f53b2e
; MD5 检测游戏版本 1.10a

[DeckEditRightCountWhite]
Enabled=1
0044e441=0F94
; 改卡组时，让右下角的 X/20 数字在数量正确时为白色，不正确时为红色，更符合逻辑
; By 鱼的千千

[SuwakoRingBounceFxFix]
Enabled=0
;if speed.x>0 -> speed.x<0
00787d13=41 75
;if speed.x<0 -> speed.x>0
00787d76=05 7A
;2SC the same
007900ED=41 75
0079014E=05 7A
; 铁轮的反弹不止有弹地特效，弹墙也有特效，只是因为黄昏算错位置导致弹墙特效不在墙上在半空，然后就被铁轮的光圈盖住了。真的是低级错误，偏移正负号写反了。然后调整了大小让弹墙更明显
; 可单方面使用
; By 鱼的千千

[SaveReplayDefaultYes]
Enabled=1
;story: PUSH 01
;00449295=6A 01
;battle: PUSH 00
0044967F=6A 01
;exit to select / menu : PUSH 00
00444D49=6A 01
;“每次询问”模式下存rep的默认选项从“否”改为“是”，打完连按Z就是存，连按X就是不存
; By 鱼的千千

[SkipMatchEndDialog]
Enabled=0
0048273d=28
; 跳过KO决着后的对话环节
; 可单方面使用
; 本地对战打 AI 时也会生效，打 Arcade 接机模式时会发生只打完一局就退回选人界面的 BUG


[RebindMenuKeys]
Enabled = 0
; 键位参考表   https://handmade.network/forums/articles/t/2823-keyboard_inputs_-_scancodes%252C_raw_input%252C_text_input%252C_key_names
; 键位参考表 https://github.com/SokuDev/SokuMods/blob/master/DIK.md
; 从上到下是“上下左右”的顺序
 00442B35 = C8
 00442B40 = D0
 00442B4B = CB
 00442B56 = CD
; 给主菜单的操作界面改键，原版是固定 方向键上下左右 不能变
; https://discord.com/channels/167593473854144512/253944555831820288/1019359752137998396


[AnonymousPlayers]
Enabled=0
; 0047D938 对战界面 1P 的
0047D938=E9B100000090
; 0047D9FE 对战界面 2P 的
0047D9FE=E99201000090
; 00421308 选人界面双方的
00421308=EB
; 三项互相独立，若有不需要隐藏的，屏蔽该项即可
; 隐藏选人界面和对战界面的 Profile 机签名
; https://discord.com/channels/167593473854144512/253944555831820288/738488619051909180


[AllowMultiInstance]
Enabled=1
007FB5C8=B8
; 允许游戏多开


;天气循环表，晴岚后面直接跳过川雾到台风
[NoRiverMist]
Enabled=0
00483E6D=0D
;“00483E6D”即为晴岚后的下一个天气；“0D”即为 13号 台风，所以晴岚后面不是川雾而是台风
;https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756

;可以自定义天气预报循环。下面的左边二十个是地址，右边的是天气值（使用十六进制，如台风是 13号 即 0D）
[ItWorksLmao]
Enabled=0
00483DD3=
00483DE1=
00483DEF=
00483DFD=
00483E0B=
00483E19=
00483E27=
00483E35=
00483E43=
00483E51=
00483E5F=
00483E6D=
00483E7B=
00483E89=
00483E97=
00483EA5=
00483EB3=
00483EC1=
00483ECF=
00483EDD=
;https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588


[AlwaysRandomMusic]
Enabled=0
00420A61=BF0000000090
; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】


[DisableWeatherEffect]
Enabled=0
00470619=00
; 禁用天气背景特效（下雨、飘雪、刮风）


[RemiAnyStageAsHost]
Enabled=0
0043F206=EB4B
; 允许蕾咪选择室外地图（联机下1P开启才有效）


[DisableElevator]
Enabled=0
00473613=83C000
; 禁用电梯地图旋转特效


[CalmMaxHPFix]
Enabled=1
; lea eax,[ecx+05]
; add ax,[esi+000004CE]
; mov cx,[esi+00000186]
; cmp ax,cx
; jle th123.exe+88F98
; mov ax,cx
; mov [esi+00000184],ax
; 8 nop
00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090
; 修复血量超过一万时无风天气反而掉血的bug


[FullScreenSoku]
Enabled=0
00429581=40EBD7
0042955B=88462EEB24
; 全屏视角，会影响部分招数，需要双方使用


[NoDamage]
Enabled=0
0047B11C=90909090909090
; 锁血 (可以联机使用，额，当然了双方使用)


[MorePalette]
Enabled=0
004223B1=0A
; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)


[GUIBegone]
Enabled=0
0047d7a0 = C3
; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突


[DisableWeather]
Enabled=0
; xorw cx, cx; nop
00482428=6631C9 90
; 禁用天气（功能）【当然了，需要双方使用】


[FilesystemFirst]
Enabled=0
0040d1FB=EB
0040D27A=7491
0040D245=1C
0040D27C=90909090909090
; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png
; （警告：开启后会严重增加进入对局的加载时间！）


[FixNum9]
Enabled =1
0043DC7D = 0A
; 修复右下角数字9显示问题


[16bitsColor]
Enabled=0
; D3DFORMAT_R5G6B5
0041514D=17
; 16bit配色兼容，基本没人会再遇到的问题吧


[InputFreedom]
Enabled=0
; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND
0040DDA4=0A
; 窗口不在前台时也可以用手柄操控游戏


[DefaultDenyWatch]
Enabled=0
; jmp short xxxxxxxxh
 00446E8A=EB16
; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh
 00446EA2=6A00 885E09 E9E2FFFFFF
; 作为1P时默认不允许观战（2023.7.2已查错修复）


[DefaultDenyBattle]
Enabled=0
; push 0
00448AAE=00
; 作为2P加入时默认不加入对战（而是观战）


; use the gamepad DPad rather than the circle pad
; warning: try using the DPadFix mod first, only recommended for XInput devices
; warning: disable DPadFix before enabling this mod, as they conflict with each other
[NativeDPadFix]
Enabled=0
; technical details: https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt
0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490
; 与DPadFix mod不兼容



; ######################################################
; 则2 MemoryPatchSOKU2FIX

[SOKU2DESYNCFIX]
Enabled=1

;using unused region of un-airusable moves (youmu alt)

;Fix Melting Pummel Kick
007A7967 = E9 08 CF DC FF 90
00574874 = D9 05 B0 B3 85 00 D9 9E F4 00 00 00 6A 1E 8B CE E8 F7 00 EF FF E9 EE 30 23 00 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90

;Fix Emerald City
0054F06F = E9 29 58 02 00 90 90 90
0057489D = 66 83 BE 40 01 00 00 02 0F 85 EA A7 FD FF 80 BE AD 06 00 00 02 E9 C9 A7 FD FF 90 90 90 90 90 90 90 90 90 90 90

;Fix Endless Way 1
0064FF02 = E9 BB 49 F2 FF 90 90 90
005748C2 = D9 5C 24 04 DB 44 24 28 D8 86 EC 00 00 00 D9 5C 24 28 D9 44 24 28 D9 1C 24 E9 3B B6 0D 00 90 90 90 90 90 90

;Fix Endless Way 2
0064FF58 = E9 89 49 F2 FF 90 90 90
005748E6 = D9 5C 24 04 89 54 24 28 DB 44 24 28 D8 86 EC 00 00 00 D9 5C 24 28 D9 1C 24 E9 71 B6 0D 00 90 90 90 90 90 90

;Fix Sense of Thrown Edge
004F29FD = E9 08 1F 08 00 90 90 90
004F314A = E9 D5 17 08 00 90 90 90
004F3913 = E9 26 10 08 00 90 90 90
004F40F9 = E9 5A 08 08 00 90 90 90
0057490A = 66 83 BE 40 01 00 00 01 0F 85 05 E1 F7 FF 80 BE AA 06 00 00 02 E9 EA E0 F7 FF 66 83 BE 40 01 00 00 01 0F 85 38 E8 F7 FF 80 BE AA 06 00 00 02 E9 1D E8 F7 FF 66 83 BE 40 01 00 00 01 0F 85 E7 EF F7 FF 80 BE AA 06 00 00 02 E9 CC EF F7 FF 66 83 BE 40 01 00 00 01 0F 85 C0 F7 F7 FF 80 BE AA 06 00 00 02 E9 98 F7 F7 FF 90

;Fix Native Scourge

[SOKU2RNGFIX]
Enabled=1

;all of this and below uses code region used by okuu in story mode
007EB6CB = EB 38 90 90 90 90 90
00441673 = E9 5A A0 3A 00 90 90
007EB6D2 = FF 15 5C 72 85 00 A3 60 B6 89 00 0F B6 05 60 B6 89 00 A3 20 6B 89 00 8B C6 31 C9 8D 78 01 E9 85 5F C5 FF 90

[SOKU2RANDOMCRASH]
Enabled=1

;temp fix, allows only vanilla on random random character can only net vanilla characters
;0042096A = B9 14 00 00 00 90

;full fix, idk if working
0042096A = E9 87 AD 3C 00 90
007EB6F6 = 8B 86 A0 00 00 00 8B 8E 9C 00 00 00 29 C8 C1 F8 02 8B C8 83 E9 01 81 F9 15 00 00 00 7D 06 83 E9 01 90 90 90 E9 51 52 C3 FF 90

[SOKU2CRASHFIX]
Enabled=1

;Fix weird end game crash

;VS Network
0043289A = E9 0A 01 00 00 90

;VS Network Sokuroll, VS Player
00432702 = EB 6D

[SOKU2CRASHFIX2]
Enabled=1

00481FFD = BA 00 00 00 00 90
0048201B = BA 00 00 00 00 90
00482049 = BA 00 00 00 00 90
00482066 = BA 00 00 00 00 90
0048208F = BA 00 00 00 00 90
004820AE = BA 00 00 00 00 90
004820CB = BA 00 00 00 00 90
00482039 = E9 A7 00 00 00 90




:::




