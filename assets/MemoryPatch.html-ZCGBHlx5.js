import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as s,c as b,a as l,d as n,b as t,e as a}from"./app-xMRG7mQX.js";const c={},d=l("div",{class:"hint-container info"},[l("p",{class:"hint-container-title"},"功能简介"),l("p",null,"MemoryPatch 默认开启，里面各个详细部分可自己选择"),l("p",null,"打开对应ini文件，会看到各个部分 （th123\\Modules\\MemoryPatch\\MemoryPatch.ini）"),l("p",null,"Enabled=1 为开启"),l("p",null,"Enabled=0 为关闭")],-1),i={class:"hint-container tip"},_=l("p",{class:"hint-container-title"},"可使用的补丁如下",-1),u=l("p",null,[n("[General]"),l("br"),n(" Hash=df35d1fbc7b583317adabe8cd9f53b2e"),l("br"),n(" ; MD5 检测游戏版本 1.10a")],-1),h=l("p",null,[n("[AllowMultiInstance]"),l("br"),n(" Enabled=1"),l("br"),n(" 007FB5C8=B8"),l("br"),n(" ; 允许游戏多开")],-1),E=l("br",null,null,-1),p=l("br",null,null,-1),m=l("br",null,null,-1),D=l("br",null,null,-1),F=l("br",null,null,-1),x={href:"https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756",target:"_blank",rel:"noopener noreferrer"},C=l("br",null,null,-1),B=l("br",null,null,-1),y=l("br",null,null,-1),f=l("br",null,null,-1),P=l("br",null,null,-1),A=l("br",null,null,-1),g=l("br",null,null,-1),v=l("br",null,null,-1),M=l("br",null,null,-1),N=l("br",null,null,-1),I=l("br",null,null,-1),S=l("br",null,null,-1),k=l("br",null,null,-1),R=l("br",null,null,-1),w=l("br",null,null,-1),L=l("br",null,null,-1),W=l("br",null,null,-1),G=l("br",null,null,-1),V=l("br",null,null,-1),T=l("br",null,null,-1),U=l("br",null,null,-1),j=l("br",null,null,-1),H=l("br",null,null,-1),O={href:"https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588",target:"_blank",rel:"noopener noreferrer"},X=a("<p>[AlwaysRandomMusic]<br> Enabled=0<br> 00420A61=BF0000000090<br> ; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】</p><p>[DisableWeatherEffect]<br> Enabled=0<br> 00470619=00<br> ; 禁用天气背景特效（下雨、飘雪、刮风）</p><p>[RemiAnyStageAsHost]<br> Enabled=0<br> 0043F206=EB4B<br> ; 允许蕾咪选择室外地图（联机下1P开启才有效）</p><p>[DisableElevator]<br> Enabled=0<br> 00473613=83C000<br> ; 禁用电梯地图旋转特效</p><p>[CalmMaxHPFix]<br> Enabled=1<br> ; lea eax,[ecx+05]<br> ; add ax,[esi+000004CE]<br> ; mov cx,[esi+00000186]<br> ; cmp ax,cx<br> ; jle th123.exe+88F98<br> ; mov ax,cx<br> ; mov [esi+00000184],ax<br> ; 8 nop<br> 00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090<br> ; 修复血量超过一万时无风天气反而掉血的bug</p><p>[FullScreenSoku]<br> Enabled=0<br> 00429581=40EBD7<br> 0042955B=88462EEB24<br> ; 全屏视角，会影响部分招数，需要双方使用</p><p>[NoDamage]<br> Enabled=0<br> 0047B11C=90909090909090<br> ; 锁血 (可以联机使用，额，当然了双方使用)</p><p>[MorePalette]<br> Enabled=0<br> 004223B1=0A<br> ; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)</p><p>[GUIBegone]<br> Enabled=0<br> 0047d7a0 = C3<br> ; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突</p><p>[DisableWeather]<br> Enabled=0<br> ; xorw cx, cx; nop<br> 00482428=6631C9 90<br> ; 禁用天气（功能）【当然了，需要双方使用】</p><p>[FilesystemFirst]<br> Enabled=0<br> 0040d1FB=EB<br> 0040D27A=7491<br> 0040D245=1C<br> 0040D27C=90909090909090<br> ; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png<br> ; （警告：开启后会严重增加进入对局的加载时间！）</p><p>[FixNum9]<br> Enabled =1<br> 0043DC7D = 0A<br> ; 修复右下角数字9显示问题</p><p>[16bitsColor]<br> Enabled=0<br> ; D3DFORMAT_R5G6B5<br> 0041514D=17<br> ; 16bit配色兼容，基本没人会再遇到的问题吧</p><p>[InputFreedom]<br> Enabled=0<br> ; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND<br> 0040DDA4=0A<br> ; 窗口不在前台时也可以用手柄操控游戏</p><p>[DefaultDenyWatch]<br> Enabled=0<br> ; jmp short xxxxxxxxh<br> 00446E8A=EB16<br> ; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh<br> 00446EA2=6A00 885E09 E9E2FFFFFF<br> ; 作为1P时默认不允许观战（2023.7.2已查错修复）</p><p>[DefaultDenyBattle]<br> Enabled=0<br> ; push 0<br> 00448AAE=00<br> ; 作为2P加入时默认不加入对战（而是观战）</p>",16),K=l("br",null,null,-1),q=l("br",null,null,-1),z=l("br",null,null,-1),J=l("br",null,null,-1),Q=l("br",null,null,-1),Y={href:"https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt",target:"_blank",rel:"noopener noreferrer"},Z=l("br",null,null,-1),$=l("br",null,null,-1);function l0(n0,e0){const e=o("ExternalLinkIcon");return s(),b("div",null,[d,l("div",i,[_,u,h,l("p",null,[n(";天气循环表，晴岚后面直接跳过川雾到台风"),E,n(" [NoRiverMist]"),p,n(" Enabled=0"),m,n(" 00483E6D=0D"),D,n(" ;“00483E6D”即为晴岚后的下一个天气；“0D”即为 13号 台风，所以晴岚后面不是川雾而是台风"),F,n(" ;"),l("a",x,[n("https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756"),t(e)])]),l("p",null,[n(";可以自定义天气预报循环。下面的左边二十个是地址，右边的是天气值（使用十六进制，如台风是 13号 即 0D）"),C,n(" [ItWorksLmao]"),B,n(" Enabled=0"),y,n(" 00483DD3="),f,n(" 00483DE1="),P,n(" 00483DEF="),A,n(" 00483DFD="),g,n(" 00483E0B="),v,n(" 00483E19="),M,n(" 00483E27="),N,n(" 00483E35="),I,n(" 00483E43="),S,n(" 00483E51="),k,n(" 00483E5F="),R,n(" 00483E6D="),w,n(" 00483E7B="),L,n(" 00483E89="),W,n(" 00483E97="),G,n(" 00483EA5="),V,n(" 00483EB3="),T,n(" 00483EC1="),U,n(" 00483ECF="),j,n(" 00483EDD="),H,n(" ;"),l("a",O,[n("https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588"),t(e)])]),X,l("p",null,[n("; use the gamepad DPad rather than the circle pad"),K,n(" ; warning: try using the DPadFix mod first, only recommended for XInput devices"),q,n(" ; warning: disable DPadFix before enabling this mod, as they conflict with each other"),z,n(" [NativeDPadFix]"),J,n(" Enabled=0"),Q,n(" ; technical details: "),l("a",Y,[n("https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt"),t(e)]),Z,n(" 0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490"),$,n(" ; 与DPadFix mod不兼容")])])])}const o0=r(c,[["render",l0],["__file","MemoryPatch.html.vue"]]);export{o0 as default};
