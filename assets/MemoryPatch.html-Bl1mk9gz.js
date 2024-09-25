import{_ as b,r as o,o as a,c as s,a as n,d as e,b as t,e as l}from"./app-Djmd2i6Z.js";const d={},i=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"功能简介"),n("p",null,"MemoryPatch 默认开启，里面各个详细部分可自己选择"),n("p",null,[e("打开对应ini文件，会看到各个部分 （"),n("code",null,"th123\\Modules\\MemoryPatch\\MemoryPatch.ini"),e("）")]),n("p",null,[n("code",null,"Enabled=1"),e(" 为开启")]),n("p",null,[n("code",null,"Enabled=0"),e(" 为关闭")])],-1),p={class:"hint-container note"},c=l('<p class="hint-container-title">2024-09-21 可使用的补丁</p><p>[General]<br> Hash=df35d1fbc7b583317adabe8cd9f53b2e<br> ; MD5 检测游戏版本 1.10a</p><p>[DeckEditRightCountWhite]<br> Enabled=1<br> 0044e441=0F94<br> ; 改卡组时，让右下角的 X/20 数字在数量正确时为白色，不正确时为红色，更符合逻辑<br> ; By 鱼的千千</p><p>[SuwakoRingBounceFxFix]<br> Enabled=0<br> ;if speed.x&gt;0 -&gt; speed.x&lt;0<br> 00787d13=41 75<br> ;if speed.x&lt;0 -&gt; speed.x&gt;0<br> 00787d76=05 7A<br> ;2SC the same<br> 007900ED=41 75<br> 0079014E=05 7A<br> ; 铁轮的反弹不止有弹地特效，弹墙也有特效，只是因为黄昏算错位置导致弹墙特效不在墙上在半空，然后就被铁轮的光圈盖住了。真的是低级错误，偏移正负号写反了。然后调整了大小让弹墙更明显<br> ; 可单方面使用<br> ; By 鱼的千千</p><p>[SaveReplayDefaultYes]<br> Enabled=1<br> ;story: PUSH 01<br> ;00449295=6A 01<br> ;battle: PUSH 00<br> 0044967F=6A 01<br> ;exit to select / menu : PUSH 00<br> 00444D49=6A 01<br> ;“每次询问”模式下存rep的默认选项从“否”改为“是”，打完连按Z就是存，连按X就是不存<br> ; By 鱼的千千</p><p>[SkipMatchEndDialog]<br> Enabled=0<br> 0048273d=28<br> ; 跳过KO决着后的对话环节<br> ; 可单方面使用<br> ; 本地对战打 AI 时也会生效，打 Arcade 接机模式时会发生只打完一局就退回选人界面的 BUG</p>',6),E=n("br",null,null,-1),F=n("br",null,null,-1),h={href:"https://handmade.network/forums/articles/t/2823-keyboard_inputs_-_scancodes%252C_raw_input%252C_text_input%252C_key_names",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),_={href:"https://github.com/SokuDev/SokuMods/blob/master/DIK.md",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),D=n("br",null,null,-1),B=n("br",null,null,-1),C=n("br",null,null,-1),A=n("br",null,null,-1),y=n("br",null,null,-1),x=n("br",null,null,-1),f={href:"https://discord.com/channels/167593473854144512/253944555831820288/1019359752137998396",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),S=n("br",null,null,-1),P=n("br",null,null,-1),k=n("br",null,null,-1),M=n("br",null,null,-1),v=n("br",null,null,-1),w=n("br",null,null,-1),I=n("br",null,null,-1),N=n("br",null,null,-1),R=n("br",null,null,-1),U={href:"https://discord.com/channels/167593473854144512/253944555831820288/738488619051909180",target:"_blank",rel:"noopener noreferrer"},K=n("p",null,[e("[AllowMultiInstance]"),n("br"),e(" Enabled=1"),n("br"),e(" 007FB5C8=B8"),n("br"),e(" ; 允许游戏多开")],-1),O=n("br",null,null,-1),T=n("br",null,null,-1),H=n("br",null,null,-1),W=n("br",null,null,-1),X=n("br",null,null,-1),G={href:"https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756",target:"_blank",rel:"noopener noreferrer"},V=n("br",null,null,-1),L=n("br",null,null,-1),Z=n("br",null,null,-1),j=n("br",null,null,-1),Y=n("br",null,null,-1),z=n("br",null,null,-1),q=n("br",null,null,-1),J=n("br",null,null,-1),Q=n("br",null,null,-1),$=n("br",null,null,-1),n0=n("br",null,null,-1),e0=n("br",null,null,-1),r0=n("br",null,null,-1),t0=n("br",null,null,-1),l0=n("br",null,null,-1),b0=n("br",null,null,-1),o0=n("br",null,null,-1),a0=n("br",null,null,-1),s0=n("br",null,null,-1),d0=n("br",null,null,-1),i0=n("br",null,null,-1),p0=n("br",null,null,-1),c0=n("br",null,null,-1),E0={href:"https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588",target:"_blank",rel:"noopener noreferrer"},F0=l("<p>[AlwaysRandomMusic]<br> Enabled=0<br> 00420A61=BF0000000090<br> ; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】</p><p>[DisableWeatherEffect]<br> Enabled=0<br> 00470619=00<br> ; 禁用天气背景特效（下雨、飘雪、刮风）</p><p>[RemiAnyStageAsHost]<br> Enabled=0<br> 0043F206=EB4B<br> ; 允许蕾咪选择室外地图（联机下1P开启才有效）</p><p>[DisableElevator]<br> Enabled=0<br> 00473613=83C000<br> ; 禁用电梯地图旋转特效</p><p>[CalmMaxHPFix]<br> Enabled=1<br> ; lea eax,[ecx+05]<br> ; add ax,[esi+000004CE]<br> ; mov cx,[esi+00000186]<br> ; cmp ax,cx<br> ; jle th123.exe+88F98<br> ; mov ax,cx<br> ; mov [esi+00000184],ax<br> ; 8 nop<br> 00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090<br> ; 修复血量超过一万时无风天气反而掉血的bug</p><p>[FullScreenSoku]<br> Enabled=0<br> 00429581=40EBD7<br> 0042955B=88462EEB24<br> ; 全屏视角，会影响部分招数，需要双方使用</p><p>[NoDamage]<br> Enabled=0<br> 0047B11C=90909090909090<br> ; 锁血 (可以联机使用，额，当然了双方使用)</p><p>[MorePalette]<br> Enabled=0<br> 004223B1=0A<br> ; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)</p><p>[GUIBegone]<br> Enabled=0<br> 0047d7a0 = C3<br> ; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突</p><p>[DisableWeather]<br> Enabled=0<br> ; xorw cx, cx; nop<br> 00482428=6631C9 90<br> ; 禁用天气（功能）【当然了，需要双方使用】</p><p>[FilesystemFirst]<br> Enabled=0<br> 0040d1FB=EB<br> 0040D27A=7491<br> 0040D245=1C<br> 0040D27C=90909090909090<br> ; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png<br> ; （警告：开启后会严重增加进入对局的加载时间！）</p><p>[FixNum9]<br> Enabled =1<br> 0043DC7D = 0A<br> ; 修复右下角数字9显示问题</p><p>[16bitsColor]<br> Enabled=0<br> ; D3DFORMAT_R5G6B5<br> 0041514D=17<br> ; 16bit配色兼容，基本没人会再遇到的问题吧</p><p>[InputFreedom]<br> Enabled=0<br> ; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND<br> 0040DDA4=0A<br> ; 窗口不在前台时也可以用手柄操控游戏</p><p>[DefaultDenyWatch]<br> Enabled=0<br> ; jmp short xxxxxxxxh<br> 00446E8A=EB16<br> ; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh<br> 00446EA2=6A00 885E09 E9E2FFFFFF<br> ; 作为1P时默认不允许观战（2023.7.2已查错修复）</p><p>[DefaultDenyBattle]<br> Enabled=0<br> ; push 0<br> 00448AAE=00<br> ; 作为2P加入时默认不加入对战（而是观战）</p>",16),h0=n("br",null,null,-1),u0=n("br",null,null,-1),_0=n("br",null,null,-1),m0=n("br",null,null,-1),D0=n("br",null,null,-1),B0={href:"https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt",target:"_blank",rel:"noopener noreferrer"},C0=n("br",null,null,-1),A0=n("br",null,null,-1),y0=l("<p>; ######################################################<br> ; 则2 MemoryPatchSOKU2FIX</p><p>[SOKU2DESYNCFIX]<br> Enabled=1</p><p>;using unused region of un-airusable moves (youmu alt)</p><p>;Fix Melting Pummel Kick<br> 007A7967 = E9 08 CF DC FF 90<br> 00574874 = D9 05 B0 B3 85 00 D9 9E F4 00 00 00 6A 1E 8B CE E8 F7 00 EF FF E9 EE 30 23 00 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90</p><p>;Fix Emerald City<br> 0054F06F = E9 29 58 02 00 90 90 90<br> 0057489D = 66 83 BE 40 01 00 00 02 0F 85 EA A7 FD FF 80 BE AD 06 00 00 02 E9 C9 A7 FD FF 90 90 90 90 90 90 90 90 90 90 90</p><p>;Fix Endless Way 1<br> 0064FF02 = E9 BB 49 F2 FF 90 90 90<br> 005748C2 = D9 5C 24 04 DB 44 24 28 D8 86 EC 00 00 00 D9 5C 24 28 D9 44 24 28 D9 1C 24 E9 3B B6 0D 00 90 90 90 90 90 90</p><p>;Fix Endless Way 2<br> 0064FF58 = E9 89 49 F2 FF 90 90 90<br> 005748E6 = D9 5C 24 04 89 54 24 28 DB 44 24 28 D8 86 EC 00 00 00 D9 5C 24 28 D9 1C 24 E9 71 B6 0D 00 90 90 90 90 90 90</p><p>;Fix Sense of Thrown Edge<br> 004F29FD = E9 08 1F 08 00 90 90 90<br> 004F314A = E9 D5 17 08 00 90 90 90<br> 004F3913 = E9 26 10 08 00 90 90 90<br> 004F40F9 = E9 5A 08 08 00 90 90 90<br> 0057490A = 66 83 BE 40 01 00 00 01 0F 85 05 E1 F7 FF 80 BE AA 06 00 00 02 E9 EA E0 F7 FF 66 83 BE 40 01 00 00 01 0F 85 38 E8 F7 FF 80 BE AA 06 00 00 02 E9 1D E8 F7 FF 66 83 BE 40 01 00 00 01 0F 85 E7 EF F7 FF 80 BE AA 06 00 00 02 E9 CC EF F7 FF 66 83 BE 40 01 00 00 01 0F 85 C0 F7 F7 FF 80 BE AA 06 00 00 02 E9 98 F7 F7 FF 90</p><p>;Fix Native Scourge</p><p>[SOKU2RNGFIX]<br> Enabled=1</p><p>;all of this and below uses code region used by okuu in story mode<br> 007EB6CB = EB 38 90 90 90 90 90<br> 00441673 = E9 5A A0 3A 00 90 90<br> 007EB6D2 = FF 15 5C 72 85 00 A3 60 B6 89 00 0F B6 05 60 B6 89 00 A3 20 6B 89 00 8B C6 31 C9 8D 78 01 E9 85 5F C5 FF 90</p><p>[SOKU2RANDOMCRASH]<br> Enabled=1</p><p>;temp fix, allows only vanilla on random random character can only net vanilla characters<br> ;0042096A = B9 14 00 00 00 90</p><p>;full fix, idk if working<br> 0042096A = E9 87 AD 3C 00 90<br> 007EB6F6 = 8B 86 A0 00 00 00 8B 8E 9C 00 00 00 29 C8 C1 F8 02 8B C8 83 E9 01 81 F9 15 00 00 00 7D 06 83 E9 01 90 90 90 E9 51 52 C3 FF 90</p><p>[SOKU2CRASHFIX]<br> Enabled=1</p><p>;Fix weird end game crash</p><p>;VS Network<br> 0043289A = E9 0A 01 00 00 90</p><p>;VS Network Sokuroll, VS Player<br> 00432702 = EB 6D</p><p>[SOKU2CRASHFIX2]<br> Enabled=1</p><p>00481FFD = BA 00 00 00 00 90<br> 0048201B = BA 00 00 00 00 90<br> 00482049 = BA 00 00 00 00 90<br> 00482066 = BA 00 00 00 00 90<br> 0048208F = BA 00 00 00 00 90<br> 004820AE = BA 00 00 00 00 90<br> 004820CB = BA 00 00 00 00 90<br> 00482039 = E9 A7 00 00 00 90</p>",20);function x0(f0,g0){const r=o("ExternalLinkIcon");return a(),s("div",null,[i,n("div",p,[c,n("p",null,[e("[RebindMenuKeys]"),E,e(" Enabled = 0"),F,e(" ; 键位参考表 "),n("a",h,[e("https://handmade.network/forums/articles/t/2823-keyboard_inputs_-_scancodes%252C_raw_input%252C_text_input%252C_key_names"),t(r)]),u,e(" ; 键位参考表 "),n("a",_,[e("https://github.com/SokuDev/SokuMods/blob/master/DIK.md"),t(r)]),m,e(" ; 从上到下是“上下左右”的顺序"),D,e(" 00442B35 = C8"),B,e(" 00442B40 = D0"),C,e(" 00442B4B = CB"),A,e(" 00442B56 = CD"),y,e(" ; 给主菜单的操作界面改键，原版是固定 方向键上下左右 不能变"),x,e(" ; "),n("a",f,[e("https://discord.com/channels/167593473854144512/253944555831820288/1019359752137998396"),t(r)])]),n("p",null,[e("[AnonymousPlayers]"),g,e(" Enabled=0"),S,e(" ; 0047D938 对战界面 1P 的"),P,e(" 0047D938=E9B100000090"),k,e(" ; 0047D9FE 对战界面 2P 的"),M,e(" 0047D9FE=E99201000090"),v,e(" ; 00421308 选人界面双方的"),w,e(" 00421308=EB"),I,e(" ; 三项互相独立，若有不需要隐藏的，屏蔽该项即可"),N,e(" ; 隐藏选人界面和对战界面的 Profile 机签名"),R,e(" ; "),n("a",U,[e("https://discord.com/channels/167593473854144512/253944555831820288/738488619051909180"),t(r)])]),K,n("p",null,[e(";天气循环表，晴岚后面直接跳过川雾到台风"),O,e(" [NoRiverMist]"),T,e(" Enabled=0"),H,e(" 00483E6D=0D"),W,e(" ;“00483E6D”即为晴岚后的下一个天气；“0D”即为 13号 台风，所以晴岚后面不是川雾而是台风"),X,e(" ;"),n("a",G,[e("https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756"),t(r)])]),n("p",null,[e(";可以自定义天气预报循环。下面的左边二十个是地址，右边的是天气值（使用十六进制，如台风是 13号 即 0D）"),V,e(" [ItWorksLmao]"),L,e(" Enabled=0"),Z,e(" 00483DD3="),j,e(" 00483DE1="),Y,e(" 00483DEF="),z,e(" 00483DFD="),q,e(" 00483E0B="),J,e(" 00483E19="),Q,e(" 00483E27="),$,e(" 00483E35="),n0,e(" 00483E43="),e0,e(" 00483E51="),r0,e(" 00483E5F="),t0,e(" 00483E6D="),l0,e(" 00483E7B="),b0,e(" 00483E89="),o0,e(" 00483E97="),a0,e(" 00483EA5="),s0,e(" 00483EB3="),d0,e(" 00483EC1="),i0,e(" 00483ECF="),p0,e(" 00483EDD="),c0,e(" ;"),n("a",E0,[e("https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588"),t(r)])]),F0,n("p",null,[e("; use the gamepad DPad rather than the circle pad"),h0,e(" ; warning: try using the DPadFix mod first, only recommended for XInput devices"),u0,e(" ; warning: disable DPadFix before enabling this mod, as they conflict with each other"),_0,e(" [NativeDPadFix]"),m0,e(" Enabled=0"),D0,e(" ; technical details: "),n("a",B0,[e("https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt"),t(r)]),C0,e(" 0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490"),A0,e(" ; 与DPadFix mod不兼容")]),y0])])}const P0=b(d,[["render",x0],["__file","MemoryPatch.html.vue"]]),k0=JSON.parse('{"path":"/mods/AdvancedMods/MemoryPatch.html","title":"一些补丁-MemoryPatch","lang":"zh-CN","frontmatter":{"title":"一些补丁-MemoryPatch","icon":"circle-info","order":4,"editLink":false,"author":"三回転Tstar","date":"2023-12-01T00:00:00.000Z","description":"功能简介 MemoryPatch 默认开启，里面各个详细部分可自己选择 打开对应ini文件，会看到各个部分 （th123\\\\Modules\\\\MemoryPatch\\\\MemoryPatch.ini） Enabled=1 为开启 Enabled=0 为关闭 2024-09-21 可使用的补丁 [General] Hash=df35d1fbc7b583317a...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/MemoryPatch.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"一些补丁-MemoryPatch"}],["meta",{"property":"og:description","content":"功能简介 MemoryPatch 默认开启，里面各个详细部分可自己选择 打开对应ini文件，会看到各个部分 （th123\\\\Modules\\\\MemoryPatch\\\\MemoryPatch.ini） Enabled=1 为开启 Enabled=0 为关闭 2024-09-21 可使用的补丁 [General] Hash=df35d1fbc7b583317a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T08:48:05.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T08:48:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一些补丁-MemoryPatch\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-25T08:48:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1704618486000,"updatedTime":1727254085000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":10}]},"readingTime":{"minutes":5.95,"words":1786},"localizedDate":"2023年12月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">功能简介</p>\\n<p>MemoryPatch 默认开启，里面各个详细部分可自己选择</p>\\n<p>打开对应ini文件，会看到各个部分 （<code>th123\\\\Modules\\\\MemoryPatch\\\\MemoryPatch.ini</code>）</p>\\n<p><code>Enabled=1</code> 为开启</p>\\n<p><code>Enabled=0</code> 为关闭</p>\\n</div>\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">2024-09-21 可使用的补丁</p>\\n<p>[General]<br>\\nHash=df35d1fbc7b583317adabe8cd9f53b2e<br>\\n; MD5 检测游戏版本 1.10a</p>\\n<p>[DeckEditRightCountWhite]<br>\\nEnabled=1<br>\\n0044e441=0F94<br>\\n; 改卡组时，让右下角的 X/20 数字在数量正确时为白色，不正确时为红色，更符合逻辑<br>\\n; By 鱼的千千</p>\\n<p>[SuwakoRingBounceFxFix]<br>\\nEnabled=0<br>\\n;if speed.x&gt;0 -&gt; speed.x&lt;0<br>\\n00787d13=41 75<br>\\n;if speed.x&lt;0 -&gt; speed.x&gt;0<br>\\n00787d76=05 7A<br>\\n;2SC the same<br>\\n007900ED=41 75<br>\\n0079014E=05 7A<br>\\n; 铁轮的反弹不止有弹地特效，弹墙也有特效，只是因为黄昏算错位置导致弹墙特效不在墙上在半空，然后就被铁轮的光圈盖住了。真的是低级错误，偏移正负号写反了。然后调整了大小让弹墙更明显<br>\\n; 可单方面使用<br>\\n; By 鱼的千千</p>\\n<p>[SaveReplayDefaultYes]<br>\\nEnabled=1<br>\\n;story: PUSH 01<br>\\n;00449295=6A 01<br>\\n;battle: PUSH 00<br>\\n0044967F=6A 01<br>\\n;exit to select / menu : PUSH 00<br>\\n00444D49=6A 01<br>\\n;“每次询问”模式下存rep的默认选项从“否”改为“是”，打完连按Z就是存，连按X就是不存<br>\\n; By 鱼的千千</p>\\n<p>[SkipMatchEndDialog]<br>\\nEnabled=0<br>\\n0048273d=28<br>\\n; 跳过KO决着后的对话环节<br>\\n; 可单方面使用<br>\\n; 本地对战打 AI 时也会生效，打 Arcade 接机模式时会发生只打完一局就退回选人界面的 BUG</p>\\n<p>[RebindMenuKeys]<br>\\nEnabled = 0<br>\\n; 键位参考表   <a href=\\"https://handmade.network/forums/articles/t/2823-keyboard_inputs_-_scancodes%252C_raw_input%252C_text_input%252C_key_names\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://handmade.network/forums/articles/t/2823-keyboard_inputs_-_scancodes%252C_raw_input%252C_text_input%252C_key_names</a><br>\\n; 键位参考表 <a href=\\"https://github.com/SokuDev/SokuMods/blob/master/DIK.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/SokuDev/SokuMods/blob/master/DIK.md</a><br>\\n; 从上到下是“上下左右”的顺序<br>\\n00442B35 = C8<br>\\n00442B40 = D0<br>\\n00442B4B = CB<br>\\n00442B56 = CD<br>\\n; 给主菜单的操作界面改键，原版是固定 方向键上下左右 不能变<br>\\n; <a href=\\"https://discord.com/channels/167593473854144512/253944555831820288/1019359752137998396\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/253944555831820288/1019359752137998396</a></p>\\n<p>[AnonymousPlayers]<br>\\nEnabled=0<br>\\n; 0047D938 对战界面 1P 的<br>\\n0047D938=E9B100000090<br>\\n; 0047D9FE 对战界面 2P 的<br>\\n0047D9FE=E99201000090<br>\\n; 00421308 选人界面双方的<br>\\n00421308=EB<br>\\n; 三项互相独立，若有不需要隐藏的，屏蔽该项即可<br>\\n; 隐藏选人界面和对战界面的 Profile 机签名<br>\\n; <a href=\\"https://discord.com/channels/167593473854144512/253944555831820288/738488619051909180\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/253944555831820288/738488619051909180</a></p>\\n<p>[AllowMultiInstance]<br>\\nEnabled=1<br>\\n007FB5C8=B8<br>\\n; 允许游戏多开</p>\\n<p>;天气循环表，晴岚后面直接跳过川雾到台风<br>\\n[NoRiverMist]<br>\\nEnabled=0<br>\\n00483E6D=0D<br>\\n;“00483E6D”即为晴岚后的下一个天气；“0D”即为 13号 台风，所以晴岚后面不是川雾而是台风<br>\\n;<a href=\\"https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756</a></p>\\n<p>;可以自定义天气预报循环。下面的左边二十个是地址，右边的是天气值（使用十六进制，如台风是 13号 即 0D）<br>\\n[ItWorksLmao]<br>\\nEnabled=0<br>\\n00483DD3=<br>\\n00483DE1=<br>\\n00483DEF=<br>\\n00483DFD=<br>\\n00483E0B=<br>\\n00483E19=<br>\\n00483E27=<br>\\n00483E35=<br>\\n00483E43=<br>\\n00483E51=<br>\\n00483E5F=<br>\\n00483E6D=<br>\\n00483E7B=<br>\\n00483E89=<br>\\n00483E97=<br>\\n00483EA5=<br>\\n00483EB3=<br>\\n00483EC1=<br>\\n00483ECF=<br>\\n00483EDD=<br>\\n;<a href=\\"https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588</a></p>\\n<p>[AlwaysRandomMusic]<br>\\nEnabled=0<br>\\n00420A61=BF0000000090<br>\\n; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】</p>\\n<p>[DisableWeatherEffect]<br>\\nEnabled=0<br>\\n00470619=00<br>\\n; 禁用天气背景特效（下雨、飘雪、刮风）</p>\\n<p>[RemiAnyStageAsHost]<br>\\nEnabled=0<br>\\n0043F206=EB4B<br>\\n; 允许蕾咪选择室外地图（联机下1P开启才有效）</p>\\n<p>[DisableElevator]<br>\\nEnabled=0<br>\\n00473613=83C000<br>\\n; 禁用电梯地图旋转特效</p>\\n<p>[CalmMaxHPFix]<br>\\nEnabled=1<br>\\n; lea eax,[ecx+05]<br>\\n; add ax,[esi+000004CE]<br>\\n; mov cx,[esi+00000186]<br>\\n; cmp ax,cx<br>\\n; jle th123.exe+88F98<br>\\n; mov ax,cx<br>\\n; mov [esi+00000184],ax<br>\\n; 8 nop<br>\\n00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090<br>\\n; 修复血量超过一万时无风天气反而掉血的bug</p>\\n<p>[FullScreenSoku]<br>\\nEnabled=0<br>\\n00429581=40EBD7<br>\\n0042955B=88462EEB24<br>\\n; 全屏视角，会影响部分招数，需要双方使用</p>\\n<p>[NoDamage]<br>\\nEnabled=0<br>\\n0047B11C=90909090909090<br>\\n; 锁血 (可以联机使用，额，当然了双方使用)</p>\\n<p>[MorePalette]<br>\\nEnabled=0<br>\\n004223B1=0A<br>\\n; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)</p>\\n<p>[GUIBegone]<br>\\nEnabled=0<br>\\n0047d7a0 = C3<br>\\n; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突</p>\\n<p>[DisableWeather]<br>\\nEnabled=0<br>\\n; xorw cx, cx; nop<br>\\n00482428=6631C9 90<br>\\n; 禁用天气（功能）【当然了，需要双方使用】</p>\\n<p>[FilesystemFirst]<br>\\nEnabled=0<br>\\n0040d1FB=EB<br>\\n0040D27A=7491<br>\\n0040D245=1C<br>\\n0040D27C=90909090909090<br>\\n; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png<br>\\n; （警告：开启后会严重增加进入对局的加载时间！）</p>\\n<p>[FixNum9]<br>\\nEnabled =1<br>\\n0043DC7D = 0A<br>\\n; 修复右下角数字9显示问题</p>\\n<p>[16bitsColor]<br>\\nEnabled=0<br>\\n; D3DFORMAT_R5G6B5<br>\\n0041514D=17<br>\\n; 16bit配色兼容，基本没人会再遇到的问题吧</p>\\n<p>[InputFreedom]<br>\\nEnabled=0<br>\\n; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND<br>\\n0040DDA4=0A<br>\\n; 窗口不在前台时也可以用手柄操控游戏</p>\\n<p>[DefaultDenyWatch]<br>\\nEnabled=0<br>\\n; jmp short xxxxxxxxh<br>\\n00446E8A=EB16<br>\\n; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh<br>\\n00446EA2=6A00 885E09 E9E2FFFFFF<br>\\n; 作为1P时默认不允许观战（2023.7.2已查错修复）</p>\\n<p>[DefaultDenyBattle]<br>\\nEnabled=0<br>\\n; push 0<br>\\n00448AAE=00<br>\\n; 作为2P加入时默认不加入对战（而是观战）</p>\\n<p>; use the gamepad DPad rather than the circle pad<br>\\n; warning: try using the DPadFix mod first, only recommended for XInput devices<br>\\n; warning: disable DPadFix before enabling this mod, as they conflict with each other<br>\\n[NativeDPadFix]<br>\\nEnabled=0<br>\\n; technical details: <a href=\\"https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt</a><br>\\n0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490<br>\\n; 与DPadFix mod不兼容</p>\\n<p>; ######################################################<br>\\n; 则2 MemoryPatchSOKU2FIX</p>\\n<p>[SOKU2DESYNCFIX]<br>\\nEnabled=1</p>\\n<p>;using unused region of un-airusable moves (youmu alt)</p>\\n<p>;Fix Melting Pummel Kick<br>\\n007A7967 = E9 08 CF DC FF 90<br>\\n00574874 = D9 05 B0 B3 85 00 D9 9E F4 00 00 00 6A 1E 8B CE E8 F7 00 EF FF E9 EE 30 23 00 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90</p>\\n<p>;Fix Emerald City<br>\\n0054F06F = E9 29 58 02 00 90 90 90<br>\\n0057489D = 66 83 BE 40 01 00 00 02 0F 85 EA A7 FD FF 80 BE AD 06 00 00 02 E9 C9 A7 FD FF 90 90 90 90 90 90 90 90 90 90 90</p>\\n<p>;Fix Endless Way 1<br>\\n0064FF02 = E9 BB 49 F2 FF 90 90 90<br>\\n005748C2 = D9 5C 24 04 DB 44 24 28 D8 86 EC 00 00 00 D9 5C 24 28 D9 44 24 28 D9 1C 24 E9 3B B6 0D 00 90 90 90 90 90 90</p>\\n<p>;Fix Endless Way 2<br>\\n0064FF58 = E9 89 49 F2 FF 90 90 90<br>\\n005748E6 = D9 5C 24 04 89 54 24 28 DB 44 24 28 D8 86 EC 00 00 00 D9 5C 24 28 D9 1C 24 E9 71 B6 0D 00 90 90 90 90 90 90</p>\\n<p>;Fix Sense of Thrown Edge<br>\\n004F29FD = E9 08 1F 08 00 90 90 90<br>\\n004F314A = E9 D5 17 08 00 90 90 90<br>\\n004F3913 = E9 26 10 08 00 90 90 90<br>\\n004F40F9 = E9 5A 08 08 00 90 90 90<br>\\n0057490A = 66 83 BE 40 01 00 00 01 0F 85 05 E1 F7 FF 80 BE AA 06 00 00 02 E9 EA E0 F7 FF 66 83 BE 40 01 00 00 01 0F 85 38 E8 F7 FF 80 BE AA 06 00 00 02 E9 1D E8 F7 FF 66 83 BE 40 01 00 00 01 0F 85 E7 EF F7 FF 80 BE AA 06 00 00 02 E9 CC EF F7 FF 66 83 BE 40 01 00 00 01 0F 85 C0 F7 F7 FF 80 BE AA 06 00 00 02 E9 98 F7 F7 FF 90</p>\\n<p>;Fix Native Scourge</p>\\n<p>[SOKU2RNGFIX]<br>\\nEnabled=1</p>\\n<p>;all of this and below uses code region used by okuu in story mode<br>\\n007EB6CB = EB 38 90 90 90 90 90<br>\\n00441673 = E9 5A A0 3A 00 90 90<br>\\n007EB6D2 = FF 15 5C 72 85 00 A3 60 B6 89 00 0F B6 05 60 B6 89 00 A3 20 6B 89 00 8B C6 31 C9 8D 78 01 E9 85 5F C5 FF 90</p>\\n<p>[SOKU2RANDOMCRASH]<br>\\nEnabled=1</p>\\n<p>;temp fix, allows only vanilla on random random character can only net vanilla characters<br>\\n;0042096A = B9 14 00 00 00 90</p>\\n<p>;full fix, idk if working<br>\\n0042096A = E9 87 AD 3C 00 90<br>\\n007EB6F6 = 8B 86 A0 00 00 00 8B 8E 9C 00 00 00 29 C8 C1 F8 02 8B C8 83 E9 01 81 F9 15 00 00 00 7D 06 83 E9 01 90 90 90 E9 51 52 C3 FF 90</p>\\n<p>[SOKU2CRASHFIX]<br>\\nEnabled=1</p>\\n<p>;Fix weird end game crash</p>\\n<p>;VS Network<br>\\n0043289A = E9 0A 01 00 00 90</p>\\n<p>;VS Network Sokuroll, VS Player<br>\\n00432702 = EB 6D</p>\\n<p>[SOKU2CRASHFIX2]<br>\\nEnabled=1</p>\\n<p>00481FFD = BA 00 00 00 00 90<br>\\n0048201B = BA 00 00 00 00 90<br>\\n00482049 = BA 00 00 00 00 90<br>\\n00482066 = BA 00 00 00 00 90<br>\\n0048208F = BA 00 00 00 00 90<br>\\n004820AE = BA 00 00 00 00 90<br>\\n004820CB = BA 00 00 00 00 90<br>\\n00482039 = E9 A7 00 00 00 90</p>\\n</div>"}');export{P0 as comp,k0 as data};
