import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,f as d}from"./app-cjTUN_G4.js";const l={},s=d(`<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>MemoryPatch 默认开启，里面各个详细部分可自己选择</p><p>打开对应ini文件，会看到各个部分 （th123\\Modules\\MemoryPatch\\MemoryPatch.ini）</p><p>Enabled=1 为开启</p><p>Enabled=0 为关闭</p></div><details class="hint-container details"><summary>[2-20] 可使用的补丁如下</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[General]
Hash=df35d1fbc7b583317adabe8cd9f53b2e
; MD5 检测游戏版本 1.10a


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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2),v=[s];function a(c,r){return i(),e("div",null,v)}const u=n(l,[["render",a],["__file","MemoryPatch.html.vue"]]);export{u as default};
