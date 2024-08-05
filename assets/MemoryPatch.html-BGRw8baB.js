import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as a,c as b,a as n,d as e,b as t,e as s}from"./app-C8ah-ZX1.js";const d={},i=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"功能简介"),n("p",null,"MemoryPatch 默认开启，里面各个详细部分可自己选择"),n("p",null,[e("打开对应ini文件，会看到各个部分 （"),n("code",null,"th123\\Modules\\MemoryPatch\\MemoryPatch.ini"),e("）")]),n("p",null,[n("code",null,"Enabled=1"),e(" 为开启")]),n("p",null,[n("code",null,"Enabled=0"),e(" 为关闭")])],-1),c={class:"hint-container info"},p=n("p",{class:"hint-container-title"},"[2-20] 可使用的补丁如下",-1),h=n("p",null,[e("[General]"),n("br"),e(" Hash=df35d1fbc7b583317adabe8cd9f53b2e"),n("br"),e(" ; MD5 检测游戏版本 1.10a")],-1),E=n("p",null,[e("[AllowMultiInstance]"),n("br"),e(" Enabled=1"),n("br"),e(" 007FB5C8=B8"),n("br"),e(" ; 允许游戏多开")],-1),u=n("br",null,null,-1),m=n("br",null,null,-1),_=n("br",null,null,-1),D=n("br",null,null,-1),F=n("br",null,null,-1),y={href:"https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),C=n("br",null,null,-1),B=n("br",null,null,-1),f=n("br",null,null,-1),P=n("br",null,null,-1),M=n("br",null,null,-1),g=n("br",null,null,-1),A=n("br",null,null,-1),v=n("br",null,null,-1),N=n("br",null,null,-1),S=n("br",null,null,-1),I=n("br",null,null,-1),T=n("br",null,null,-1),k=n("br",null,null,-1),R=n("br",null,null,-1),w=n("br",null,null,-1),G=n("br",null,null,-1),W=n("br",null,null,-1),L=n("br",null,null,-1),U=n("br",null,null,-1),H=n("br",null,null,-1),j=n("br",null,null,-1),O=n("br",null,null,-1),V={href:"https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588",target:"_blank",rel:"noopener noreferrer"},Z=s("<p>[AlwaysRandomMusic]<br> Enabled=0<br> 00420A61=BF0000000090<br> ; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】</p><p>[DisableWeatherEffect]<br> Enabled=0<br> 00470619=00<br> ; 禁用天气背景特效（下雨、飘雪、刮风）</p><p>[RemiAnyStageAsHost]<br> Enabled=0<br> 0043F206=EB4B<br> ; 允许蕾咪选择室外地图（联机下1P开启才有效）</p><p>[DisableElevator]<br> Enabled=0<br> 00473613=83C000<br> ; 禁用电梯地图旋转特效</p><p>[CalmMaxHPFix]<br> Enabled=1<br> ; lea eax,[ecx+05]<br> ; add ax,[esi+000004CE]<br> ; mov cx,[esi+00000186]<br> ; cmp ax,cx<br> ; jle th123.exe+88F98<br> ; mov ax,cx<br> ; mov [esi+00000184],ax<br> ; 8 nop<br> 00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090<br> ; 修复血量超过一万时无风天气反而掉血的bug</p><p>[FullScreenSoku]<br> Enabled=0<br> 00429581=40EBD7<br> 0042955B=88462EEB24<br> ; 全屏视角，会影响部分招数，需要双方使用</p><p>[NoDamage]<br> Enabled=0<br> 0047B11C=90909090909090<br> ; 锁血 (可以联机使用，额，当然了双方使用)</p><p>[MorePalette]<br> Enabled=0<br> 004223B1=0A<br> ; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)</p><p>[GUIBegone]<br> Enabled=0<br> 0047d7a0 = C3<br> ; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突</p><p>[DisableWeather]<br> Enabled=0<br> ; xorw cx, cx; nop<br> 00482428=6631C9 90<br> ; 禁用天气（功能）【当然了，需要双方使用】</p><p>[FilesystemFirst]<br> Enabled=0<br> 0040d1FB=EB<br> 0040D27A=7491<br> 0040D245=1C<br> 0040D27C=90909090909090<br> ; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png<br> ; （警告：开启后会严重增加进入对局的加载时间！）</p><p>[FixNum9]<br> Enabled =1<br> 0043DC7D = 0A<br> ; 修复右下角数字9显示问题</p><p>[16bitsColor]<br> Enabled=0<br> ; D3DFORMAT_R5G6B5<br> 0041514D=17<br> ; 16bit配色兼容，基本没人会再遇到的问题吧</p><p>[InputFreedom]<br> Enabled=0<br> ; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND<br> 0040DDA4=0A<br> ; 窗口不在前台时也可以用手柄操控游戏</p><p>[DefaultDenyWatch]<br> Enabled=0<br> ; jmp short xxxxxxxxh<br> 00446E8A=EB16<br> ; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh<br> 00446EA2=6A00 885E09 E9E2FFFFFF<br> ; 作为1P时默认不允许观战（2023.7.2已查错修复）</p><p>[DefaultDenyBattle]<br> Enabled=0<br> ; push 0<br> 00448AAE=00<br> ; 作为2P加入时默认不加入对战（而是观战）</p>",16),X=n("br",null,null,-1),z=n("br",null,null,-1),q=n("br",null,null,-1),K=n("br",null,null,-1),J=n("br",null,null,-1),Q={href:"https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt",target:"_blank",rel:"noopener noreferrer"},Y=n("br",null,null,-1),$=n("br",null,null,-1);function n0(e0,r0){const r=o("ExternalLinkIcon");return a(),b("div",null,[i,n("div",c,[p,h,E,n("p",null,[e(";天气循环表，晴岚后面直接跳过川雾到台风"),u,e(" [NoRiverMist]"),m,e(" Enabled=0"),_,e(" 00483E6D=0D"),D,e(" ;“00483E6D”即为晴岚后的下一个天气；“0D”即为 13号 台风，所以晴岚后面不是川雾而是台风"),F,e(" ;"),n("a",y,[e("https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756"),t(r)])]),n("p",null,[e(";可以自定义天气预报循环。下面的左边二十个是地址，右边的是天气值（使用十六进制，如台风是 13号 即 0D）"),x,e(" [ItWorksLmao]"),C,e(" Enabled=0"),B,e(" 00483DD3="),f,e(" 00483DE1="),P,e(" 00483DEF="),M,e(" 00483DFD="),g,e(" 00483E0B="),A,e(" 00483E19="),v,e(" 00483E27="),N,e(" 00483E35="),S,e(" 00483E43="),I,e(" 00483E51="),T,e(" 00483E5F="),k,e(" 00483E6D="),R,e(" 00483E7B="),w,e(" 00483E89="),G,e(" 00483E97="),W,e(" 00483EA5="),L,e(" 00483EB3="),U,e(" 00483EC1="),H,e(" 00483ECF="),j,e(" 00483EDD="),O,e(" ;"),n("a",V,[e("https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588"),t(r)])]),Z,n("p",null,[e("; use the gamepad DPad rather than the circle pad"),X,e(" ; warning: try using the DPadFix mod first, only recommended for XInput devices"),z,e(" ; warning: disable DPadFix before enabling this mod, as they conflict with each other"),q,e(" [NativeDPadFix]"),K,e(" Enabled=0"),J,e(" ; technical details: "),n("a",Q,[e("https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt"),t(r)]),Y,e(" 0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490"),$,e(" ; 与DPadFix mod不兼容")])])])}const o0=l(d,[["render",n0],["__file","MemoryPatch.html.vue"]]),a0=JSON.parse('{"path":"/mods/AdvancedMods/MemoryPatch.html","title":"一些补丁-MemoryPatch","lang":"zh-CN","frontmatter":{"title":"一些补丁-MemoryPatch","icon":"circle-info","order":4,"editLink":false,"author":"三回転Tstar","date":"2023-12-01T00:00:00.000Z","description":"功能简介 MemoryPatch 默认开启，里面各个详细部分可自己选择 打开对应ini文件，会看到各个部分 （th123\\\\Modules\\\\MemoryPatch\\\\MemoryPatch.ini） Enabled=1 为开启 Enabled=0 为关闭 [2-20] 可使用的补丁如下 [General] Hash=df35d1fbc7b583317ada...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/mods/AdvancedMods/MemoryPatch.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/MemoryPatch.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"一些补丁-MemoryPatch"}],["meta",{"property":"og:description","content":"功能简介 MemoryPatch 默认开启，里面各个详细部分可自己选择 打开对应ini文件，会看到各个部分 （th123\\\\Modules\\\\MemoryPatch\\\\MemoryPatch.ini） Enabled=1 为开启 Enabled=0 为关闭 [2-20] 可使用的补丁如下 [General] Hash=df35d1fbc7b583317ada..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-28T05:51:00.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-28T05:51:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一些补丁-MemoryPatch\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-28T05:51:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1704618486000,"updatedTime":1722145860000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":9}]},"readingTime":{"minutes":2.54,"words":763},"localizedDate":"2023年12月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">功能简介</p>\\n<p>MemoryPatch 默认开启，里面各个详细部分可自己选择</p>\\n<p>打开对应ini文件，会看到各个部分 （<code>th123\\\\Modules\\\\MemoryPatch\\\\MemoryPatch.ini</code>）</p>\\n<p><code>Enabled=1</code> 为开启</p>\\n<p><code>Enabled=0</code> 为关闭</p>\\n</div>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">[2-20] 可使用的补丁如下</p>\\n<p>[General]<br>\\nHash=df35d1fbc7b583317adabe8cd9f53b2e<br>\\n; MD5 检测游戏版本 1.10a</p>\\n<p>[AllowMultiInstance]<br>\\nEnabled=1<br>\\n007FB5C8=B8<br>\\n; 允许游戏多开</p>\\n<p>;天气循环表，晴岚后面直接跳过川雾到台风<br>\\n[NoRiverMist]<br>\\nEnabled=0<br>\\n00483E6D=0D<br>\\n;“00483E6D”即为晴岚后的下一个天气；“0D”即为 13号 台风，所以晴岚后面不是川雾而是台风<br>\\n;<a href=\\"https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/253944555831820288/883035642081181756</a></p>\\n<p>;可以自定义天气预报循环。下面的左边二十个是地址，右边的是天气值（使用十六进制，如台风是 13号 即 0D）<br>\\n[ItWorksLmao]<br>\\nEnabled=0<br>\\n00483DD3=<br>\\n00483DE1=<br>\\n00483DEF=<br>\\n00483DFD=<br>\\n00483E0B=<br>\\n00483E19=<br>\\n00483E27=<br>\\n00483E35=<br>\\n00483E43=<br>\\n00483E51=<br>\\n00483E5F=<br>\\n00483E6D=<br>\\n00483E7B=<br>\\n00483E89=<br>\\n00483E97=<br>\\n00483EA5=<br>\\n00483EB3=<br>\\n00483EC1=<br>\\n00483ECF=<br>\\n00483EDD=<br>\\n;<a href=\\"https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/253944555831820288/888446810723606588</a></p>\\n<p>[AlwaysRandomMusic]<br>\\nEnabled=0<br>\\n00420A61=BF0000000090<br>\\n; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】</p>\\n<p>[DisableWeatherEffect]<br>\\nEnabled=0<br>\\n00470619=00<br>\\n; 禁用天气背景特效（下雨、飘雪、刮风）</p>\\n<p>[RemiAnyStageAsHost]<br>\\nEnabled=0<br>\\n0043F206=EB4B<br>\\n; 允许蕾咪选择室外地图（联机下1P开启才有效）</p>\\n<p>[DisableElevator]<br>\\nEnabled=0<br>\\n00473613=83C000<br>\\n; 禁用电梯地图旋转特效</p>\\n<p>[CalmMaxHPFix]<br>\\nEnabled=1<br>\\n; lea eax,[ecx+05]<br>\\n; add ax,[esi+000004CE]<br>\\n; mov cx,[esi+00000186]<br>\\n; cmp ax,cx<br>\\n; jle th123.exe+88F98<br>\\n; mov ax,cx<br>\\n; mov [esi+00000184],ax<br>\\n; 8 nop<br>\\n00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090<br>\\n; 修复血量超过一万时无风天气反而掉血的bug</p>\\n<p>[FullScreenSoku]<br>\\nEnabled=0<br>\\n00429581=40EBD7<br>\\n0042955B=88462EEB24<br>\\n; 全屏视角，会影响部分招数，需要双方使用</p>\\n<p>[NoDamage]<br>\\nEnabled=0<br>\\n0047B11C=90909090909090<br>\\n; 锁血 (可以联机使用，额，当然了双方使用)</p>\\n<p>[MorePalette]<br>\\nEnabled=0<br>\\n004223B1=0A<br>\\n; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)</p>\\n<p>[GUIBegone]<br>\\nEnabled=0<br>\\n0047d7a0 = C3<br>\\n; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突</p>\\n<p>[DisableWeather]<br>\\nEnabled=0<br>\\n; xorw cx, cx; nop<br>\\n00482428=6631C9 90<br>\\n; 禁用天气（功能）【当然了，需要双方使用】</p>\\n<p>[FilesystemFirst]<br>\\nEnabled=0<br>\\n0040d1FB=EB<br>\\n0040D27A=7491<br>\\n0040D245=1C<br>\\n0040D27C=90909090909090<br>\\n; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png<br>\\n; （警告：开启后会严重增加进入对局的加载时间！）</p>\\n<p>[FixNum9]<br>\\nEnabled =1<br>\\n0043DC7D = 0A<br>\\n; 修复右下角数字9显示问题</p>\\n<p>[16bitsColor]<br>\\nEnabled=0<br>\\n; D3DFORMAT_R5G6B5<br>\\n0041514D=17<br>\\n; 16bit配色兼容，基本没人会再遇到的问题吧</p>\\n<p>[InputFreedom]<br>\\nEnabled=0<br>\\n; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND<br>\\n0040DDA4=0A<br>\\n; 窗口不在前台时也可以用手柄操控游戏</p>\\n<p>[DefaultDenyWatch]<br>\\nEnabled=0<br>\\n; jmp short xxxxxxxxh<br>\\n00446E8A=EB16<br>\\n; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh<br>\\n00446EA2=6A00 885E09 E9E2FFFFFF<br>\\n; 作为1P时默认不允许观战（2023.7.2已查错修复）</p>\\n<p>[DefaultDenyBattle]<br>\\nEnabled=0<br>\\n; push 0<br>\\n00448AAE=00<br>\\n; 作为2P加入时默认不加入对战（而是观战）</p>\\n<p>; use the gamepad DPad rather than the circle pad<br>\\n; warning: try using the DPadFix mod first, only recommended for XInput devices<br>\\n; warning: disable DPadFix before enabling this mod, as they conflict with each other<br>\\n[NativeDPadFix]<br>\\nEnabled=0<br>\\n; technical details: <a href=\\"https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt</a><br>\\n0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490<br>\\n; 与DPadFix mod不兼容</p>\\n</div>"}');export{o0 as comp,a0 as data};
