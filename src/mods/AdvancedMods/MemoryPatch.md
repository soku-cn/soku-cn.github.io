---
title: 一些补丁-MemoryPatch

# 标题
icon: circle-info
# 图标
order: 4
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

打开对应ini文件，会看到各个部分 （th123\Modules\MemoryPatch\MemoryPatch.ini）

Enabled=1 为开启
Enabled=0 为关闭
:::

::: tip 默认的MemoryPatch.ini内容如下
[General]
; th123.exe ver 1.10a MD5
Hash=df35d1fbc7b583317adabe8cd9f53b2e
; 检测游戏版本 1.10a

[AlwaysRandomMusic]
Enabled=1
00420A61=BF0000000090
; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】

[DisableWeatherEffect]
Enabled=0
00470619=00
; 禁用天气背景特效（下雨、飘雪、刮风）

[RemiAnyStageAsHost]
Enabled=1
0043F206=EB4B
; 允许蕾咪选择室外地图（联机下1P开启才有效）

[DisableElevator]
Enabled=1
00473613=83C000
; 禁用电梯地图旋转特效

[FullScreenSoku]
Enabled=0
00429581=40EBD7
0042955B=88462EEB24
; 全屏视角，会影响部分招数，需要双方使用

[NoDamage]
Enabled=0
0047B11C=90909090909090
; 锁血(可以联机使用，额，当然了双方使用)


[MorePalette]
Enabled=0
004223B1=0A
; 可以选择隐藏配色(联机单方面启用可能会造成配色不同步)


[GUIBegone]
Enabled=0
0047d7a0 = C3
; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突


; disable weather (quick&dirty, sets the weather tick to 0)
; always active, make sure to disable for network play and replay watching
[DisableWeather]
Enabled=0
; xorw cx, cx; nop
00482428=6631C9 90
; 禁用天气（功能）【当然了，需要双方使用】


[FilesystemFirst]
Enabled=1
0040d1FB=EB
0040D27A=7491
0040D245=1C
0040D27C=90909090909090
; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png


[FixNum9]
Enabled = 1
0043DC7D = 0A
; 修复右下角数字9显示问题


; reduce rendering color depth from 32 bits to 16 bits
[16bitsColor]
Enabled=0
; D3DFORMAT_R5G6B5
0041514D=17
; 16bit配色兼容，基本没人会再遇到的问题吧


; accept gamepad input even when the device is inactive
[InputFreedom]
Enabled=0
; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND
0040DDA4=0A
; 窗口不在前台时也可以用摇杆操控游戏


; disallow spectating by default
[DefaultDenyWatch]
Enabled=0
; jmp short xxxxxxxxh
 00446E8A=EB16
; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh
 00446EA2=6A00 885E09 E9E2FFFFFF
; 作为1P时默认不允许观战（2023.7.2已查错修复）


; spectate by default
[DefaultDenyBattle]
Enabled=0
; push 0
00448AAE=00
; 作为2P加入时默认不加入对战（而是观战）


; allow running multiple instances of the game at once
[AllowMultiInstance]
Enabled=1
007FB5C8=B8
; 允许游戏多开


; use the gamepad DPad rather than the circle pad
; warning: try using the DPadFix mod first, only recommended for XInput devices
; warning: disable DPadFix before enabling this mod, as they conflict with each other
[NativeDPadFix]
Enabled=0
; technical details: https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt
0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490
; 与DPadFix mod不兼容
:::






