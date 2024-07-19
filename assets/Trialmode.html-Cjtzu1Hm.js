import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c,a as t,d as e,b as l,w as o,e as n}from"./app-Ck2tWm4X.js";const p={},h=t("h2",{id:"trialmode简介",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#trialmode简介"},[t("span",null,"Trialmode简介")])],-1),b={class:"hint-container info"},u=t("p",{class:"hint-container-title"},"功能简介",-1),m=t("mark",null,"Trialmode 默认关闭，请手动打开",-1),_=t("strong",null,"如何开关配置mod",-1),g=t("li",null,[t("p",null,[e("TrialMode 是制作连段包和打连段试炼的 mod，"),t("strong",null,"主菜单原本 Result 的位置替换为了 Trial")])],-1),y=t("li",null,[t("p",null,[t("strong",null,"从主菜单选择 Trial，进入菜单后，最底部有导航栏，已有汉化")])],-1),f=t("li",null,[t("p",null,"装了较多连段包的话，进入 Trial 时卡一会是正常的，在加载")],-1),T={href:"https://www.bilibili.com/video/BV1eY4y1r7A5/",target:"_blank",rel:"noopener noreferrer"},A=t("strong",null,"非想天则Trialmode 快速上手 - 编辑与游玩",-1),x=t("li",null,[t("p",null,"若游玩时发现无法重新观看演示，是因为制作者使用了“第二种录制模式”而导致的 Bug，可以返回菜单重进或者查看 gif 演示")],-1),k={class:"hint-container tip"},v=t("p",{class:"hint-container-title"},"连段包下载",-1),w=t("strong",null,"网盘里可以下载连段包",-1),B=t("p",null,[t("strong",null,[e("连段包的压缩包下载完毕后，将其中包含的文件夹拖到 "),t("code",null,"th123\\Modules\\TrialMode\\packs"),e(" 内，注意不要多包了一层文件夹")])],-1),C=t("p",null,"提示Soku2 is missing的连段包，其中某些关卡需要下载并开启则2才可以启用特殊角色",-1),D=t("h2",{id:"连段包编辑教程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#连段包编辑教程"},[t("span",null,"连段包编辑教程")])],-1),M={class:"hint-container info"},J=t("p",{class:"hint-container-title"},"相关信息",-1),S=t("p",null,[t("code",null,"(待填坑，我会做个视频，示范一下从零开始做一个连段包)")],-1),V=t("code",null,"Trialmode排版工具 by 鱼的千千.exe",-1),E=t("li",null,[t("p",null,[t("mark",null,[e("做完连段包后，准备打包发给别人之前，记得删掉"),t("code",null,".backup"),e("文件和"),t("code",null,"score.dat"),e("文件")])])],-1),L=t("h3",{id:"手动编辑-微调-格式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#手动编辑-微调-格式"},[t("span",null,"手动编辑（微调）格式")])],-1),N={class:"hint-container details"},U=n('<summary>手动编辑（微调）格式</summary><div class="hint-container info"><p class="hint-container-title">有两种记录模式</p><p>一是记录字面，按照字面重播（可编辑字面来改变重播）,记录得笨，但是可以编辑，而且文件小（2kb）</p><p>二是记录按键，按照按键重播（编辑字面不改变重播），记录得精准，但是不可再编辑，而且连段越长文件越大（6kb以上）</p><p>所以没有设置说两种选项随便用，而是强制迫不得已才使用第二种模式，来减小文件大小，省的打包太大，加载太慢</p></div><p>Type Combo连段编辑语法：</p><table><thead><tr><th style="text-align:center;">英语</th><th style="text-align:center;">中文</th></tr></thead><tbody><tr><td style="text-align:center;">J5A</td><td style="text-align:center;">空中JA</td></tr><tr><td style="text-align:center;">66A/B/C</td><td style="text-align:center;">DA/B/C</td></tr><tr><td style="text-align:center;">HJ7/8/9</td><td style="text-align:center;">7/8/9大跳</td></tr><tr><td style="text-align:center;">Flight, J6D</td><td style="text-align:center;">空中6D</td></tr><tr><td style="text-align:center;">J6D2</td><td style="text-align:center;">空中6D2</td></tr><tr><td style="text-align:center;">DASH, 6D</td><td style="text-align:center;">地面6D</td></tr><tr><td style="text-align:center;">6D8</td><td style="text-align:center;">地面6D8</td></tr><tr><td style="text-align:center;">5A 5AA 5AAA 5AAAA 5AAAAA</td><td style="text-align:center;">Dial-A、近A（连打）</td></tr><tr><td style="text-align:center;">4A</td><td style="text-align:center;">4A</td></tr><tr><td style="text-align:center;">2A</td><td style="text-align:center;">2A</td></tr><tr><td style="text-align:center;">F5A</td><td style="text-align:center;">远A</td></tr><tr><td style="text-align:center;">1A</td><td style="text-align:center;">1A（妖梦专属）</td></tr><tr><td style="text-align:center;">f2A</td><td style="text-align:center;">远2A（妖梦专属）</td></tr></tbody></table><p><code>&lt;br&gt;</code> 是换行符，用于简介描述中</p>',5),Z=n("<p><code>/</code> 表示或的意思，可以并列招数，作为连段组件变体</p><p><code>6a:5</code> 冒号后的数字表示延迟多少帧</p><p><code>6a[15]</code> 方括号表示蓄力按住多少帧</p><p><code>!j5a</code> 感叹号表示可选，忽略或任意的步骤</p><p><code>d214</code> d表示default，原214</p><p><code>a1623 a2623</code> a表示alt，改卡1号623，改卡2号623</p><p><code>sc203</code> 203号SC（不同角色不同）</p>",7),R=t("h3",{id:"_1基础篇",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1基础篇"},[t("span",null,"①基础篇")])],-1),z={href:"https://www.bilibili.com/video/BV1eY4y1r7A5/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.bilibili.com/video/BV1nybUeuE9Q/",target:"_blank",rel:"noopener noreferrer"},G=n('<details class="hint-container details"><summary>①基础篇</summary><p>编辑建议使用0.5版本<br> 游玩建议使用0.6版本</p><p>按D进入编辑模式<br> 按C创建新连段包<br><mark>注意：机签名不能带中文，否则创建连段包时会报错</mark><br> 输入名称，不可中文<br> 下面有操作提示</p><p>名称改一下<br> 把前面的路径删掉</p><p>可以选择外部文件<br> 我这里展示<br> 选择个内部文件</p><p>按A创建新连段<br> 第二项输入combo<br> 下面有操作提示</p><p>选择角色，卡组中<br> 每个SC都塞一个就行<br> 根据连段调整位置</p><p>系统设置<br> 耗卡量建议改为1</p><p>中文版BGM乱码了<br> 可以选择外部音乐文件</p><p>系统设置<br> 连段设置<br> 打完后设置合格标准<br> 简单连段可自动获取</p><p>其他设置<br> 隐藏HUD方便录制gif</p><p>方向键右 →<br> 可编辑连段信息<br> 简介可打中文</p><p>按C复制连段<br> 输入新的连段名<br> 连段名不能带中文<br> 也不能带非法字符<br> 否则无法创建</p><p>重点！修改书面连段<br> 注意下面的操作提示<br> 按C是标记可选<br> 就是不管做没做都行<br> 一般6D和飞翔为可选<br> 按Z直接编辑，斜杠<br> 添加连段组件变体</p><p>回到手操界面<br> 自己打下变体连段<br> 打完了有音效即OK</p></details><h3 id="_2基础篇" tabindex="-1"><a class="header-anchor" href="#_2基础篇"><span>②基础篇</span></a></h3>',2),H={href:"https://www.bilibili.com/video/BV1SLb9eYEe7/",target:"_blank",rel:"noopener noreferrer"},I=n('<details class="hint-container details"><summary>②基础篇</summary><p>按C给大跳标记为可选</p><p>直接手动编辑连段<br> 添加连段组件变体<br> 皆有格式要求<br> 如 d22b a122b<br> a2623b f5a 等<br> 详细请查看文档</p><p>将JA标记为可选<br> 作为“妥协连”</p><p>可以将最次的连段<br> 记为C级的合格标准</p><p>自己打一遍验证<br> 有慢放和音效说明OK</p><p>这里我复制一个3-1<br> 来表示版中距离较远时<br> 接不上JA<br> 直接J6A的情况<br> 所以有时可以忽略JA</p><p>录制连断失误了<br> 直接按ESC重新即可</p><p>把HJ9大跳标记为可选<br> 你往哪个方向跳都一样</p><p>编辑 AAA/F5A 组件变体<br> 直接手动选择 编辑连段<br> 检查伤害和HIT数<br> 以及Limit等，修改标准<br> 然后验证修改合理</p></details><h3 id="_3微调进阶篇" tabindex="-1"><a class="header-anchor" href="#_3微调进阶篇"><span>③微调进阶篇</span></a></h3>',2),Y={href:"https://www.bilibili.com/video/BV1j1bYepEAB/",target:"_blank",rel:"noopener noreferrer"},O=n('<details class="hint-container details"><summary>③微调进阶篇</summary><p>目前版本对飞翔判定等<br> 有点问题 近期不会修复<br> 这篇视频来演示一个<br> 常见案例和解决思路</p><p>调下位置<br> 录个J2A康连段<br> 然后看它的回放</p><p>录完了 看第一遍回放<br> 发现第一遍他接不上<br> 于是他进入第二种模式<br> 就是不按照书面，而是<br> 直接读取了我们的按键<br> 所以不支持继续微调<br> 而且游玩模式下有BUG<br> 不能重看演示<br> 顺便展示下为什么<br> 我们要标记这些为可选</p><p>游玩模式下我们连段<br> 成功了 但是却没通过<br> 就是因为没有按照<br> 书面上指定的行动<br> 而后面招数就不被识别<br> 所以给这些标记可选<br> 就能避免其死板不通过</p><p>回到编辑模式<br> 我们重新录制连段<br> 在第一遍失败前按ESC<br> 打断即可留在第一种模式<br> 否则会进入第二种模式<br> 演示一下微调的思路<br> 我们是J6D后放帧接JA<br> 但是录制时没有放帧<br> 所以我们给JA加个延迟<br> 同时尝试缩短J6D持续<br> 观察结果微调即可</p><p>再次返回游玩模式<br> 验证一下刚才的微调<br> OK完美 怎么连都行<br> 只要连上就能过<br> 不存在连上不给过情况</p><p>再看一篇很早前录的<br> 一个小爱的带飞翔连段<br> 可以再结合刚才的示例<br> 理解一下微调的思路</p></details><h2 id="_0-5版本编辑模式已知bug" tabindex="-1"><a class="header-anchor" href="#_0-5版本编辑模式已知bug"><span>0.5版本编辑模式已知BUG</span></a></h2><div class="hint-container caution"><p class="hint-container-title">0.5版本编辑模式已知BUG</p><ul><li>开着<code>CharactersInForeground</code> mod的时候去设置卡组会频发随机性崩溃</li></ul><figure><img src="https://bu.dusays.com/2024/06/14/666c3f06c4018.png" alt="开着 mod的时候去设置卡组会频发随机性崩溃" width="300" tabindex="0" loading="lazy"><figcaption>开着<code>CharactersInForeground</code> mod的时候去设置卡组会频发随机性崩溃</figcaption></figure><ul><li>编辑连段时的输入框，部分人用鼠标互动可能会发生卡死无响应</li></ul><figure><img src="https://bu.dusays.com/2024/06/14/666c3f2078559.png" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div>',3);function j(K,q){const i=a("RouteLink"),r=a("ExternalLinkIcon");return s(),c("div",null,[h,t("div",b,[u,t("ul",null,[t("li",null,[t("p",null,[m,e(),l(i,{to:"/mods/WhatsMod.html"},{default:o(()=>[_]),_:1})])]),g,y,f,t("li",null,[t("p",null,[t("a",T,[A,l(r)])])]),x]),t("div",k,[v,t("p",null,[l(i,{to:"/about/"},{default:o(()=>[w]),_:1})]),B,C])]),D,t("div",M,[J,S,t("ul",null,[t("li",null,[t("p",null,[V,e(" 可在"),l(i,{to:"/about/"},{default:o(()=>[e("网盘的连段包文件夹")]),_:1}),e("内下载")])]),E])]),L,t("details",N,[U,t("ul",null,[t("li",null,[e("不需要手动换行，可以用鱼的千千做的排版工具，可在"),l(i,{to:"/about/"},{default:o(()=>[e("网盘的连段包文件夹")]),_:1}),e("内下载")])]),Z]),R,t("ul",null,[t("li",null,[t("p",null,[e("旧视频： "),t("a",z,[e("非想天则Trialmode 快速上手-编辑与游玩"),l(r)])])]),t("li",null,[t("p",null,[t("a",F,[e("连段包制作教程 ①基础篇 Trialmode非想天则Mod"),l(r)])])])]),G,t("ul",null,[t("li",null,[t("a",H,[e("连段包制作教程 ②基础篇 Trialmode非想天则Mod"),l(r)])])]),I,t("ul",null,[t("li",null,[t("a",Y,[e("连段包制作教程 ③微调进阶篇 Trialmode非想天则Mod"),l(r)])])]),O])}const Q=d(p,[["render",j],["__file","Trialmode.html.vue"]]),X=JSON.parse('{"path":"/mods/AdvancedMods/Trialmode.html","title":"连段试炼-Trialmode","lang":"zh-CN","frontmatter":{"title":"连段试炼-Trialmode","icon":"circle-info","order":1,"editLink":false,"author":"三回転Tstar","date":"2023-12-01T00:00:00.000Z","description":"Trialmode简介 功能简介 Trialmode 默认关闭，请手动打开 TrialMode 是制作连段包和打连段试炼的 mod，主菜单原本 Result 的位置替换为了 Trial 从主菜单选择 Trial，进入菜单后，最底部有导航栏，已有汉化 装了较多连段包的话，进入 Trial 时卡一会是正常的，在加载 非想天则Trialmode 快速上手 -...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/mods/AdvancedMods/Trialmode.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/Trialmode.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"连段试炼-Trialmode"}],["meta",{"property":"og:description","content":"Trialmode简介 功能简介 Trialmode 默认关闭，请手动打开 TrialMode 是制作连段包和打连段试炼的 mod，主菜单原本 Result 的位置替换为了 Trial 从主菜单选择 Trial，进入菜单后，最底部有导航栏，已有汉化 装了较多连段包的话，进入 Trial 时卡一会是正常的，在加载 非想天则Trialmode 快速上手 -..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/06/14/666c3f06c4018.png =300x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-17T01:30:05.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-17T01:30:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"连段试炼-Trialmode\\",\\"image\\":[\\"https://bu.dusays.com/2024/06/14/666c3f06c4018.png =300x\\",\\"https://bu.dusays.com/2024/06/14/666c3f2078559.png =300x\\"],\\"datePublished\\":\\"2023-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-17T01:30:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[{"level":2,"title":"Trialmode简介","slug":"trialmode简介","link":"#trialmode简介","children":[]},{"level":2,"title":"连段包编辑教程","slug":"连段包编辑教程","link":"#连段包编辑教程","children":[{"level":3,"title":"手动编辑（微调）格式","slug":"手动编辑-微调-格式","link":"#手动编辑-微调-格式","children":[]},{"level":3,"title":"①基础篇","slug":"_1基础篇","link":"#_1基础篇","children":[]},{"level":3,"title":"②基础篇","slug":"_2基础篇","link":"#_2基础篇","children":[]},{"level":3,"title":"③微调进阶篇","slug":"_3微调进阶篇","link":"#_3微调进阶篇","children":[]}]},{"level":2,"title":"0.5版本编辑模式已知BUG","slug":"_0-5版本编辑模式已知bug","link":"#_0-5版本编辑模式已知bug","children":[]}],"git":{"createdTime":1690871118000,"updatedTime":1721179805000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":13}]},"readingTime":{"minutes":6.32,"words":1895},"localizedDate":"2023年12月1日","autoDesc":true,"excerpt":"<h2>Trialmode简介</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">功能简介</p>\\n<ul>\\n<li>\\n<p><mark>Trialmode 默认关闭，请手动打开</mark> <a href=\\"/mods/WhatsMod.html\\" target=\\"_blank\\"><strong>如何开关配置mod</strong></a></p>\\n</li>\\n<li>\\n<p>TrialMode 是制作连段包和打连段试炼的 mod，<strong>主菜单原本 Result 的位置替换为了 Trial</strong></p>\\n</li>\\n<li>\\n<p><strong>从主菜单选择 Trial，进入菜单后，最底部有导航栏，已有汉化</strong></p>\\n</li>\\n<li>\\n<p>装了较多连段包的话，进入 Trial 时卡一会是正常的，在加载</p>\\n</li>\\n<li>\\n<p><a href=\\"https://www.bilibili.com/video/BV1eY4y1r7A5/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>非想天则Trialmode 快速上手 - 编辑与游玩</strong></a></p>\\n</li>\\n<li>\\n<p>若游玩时发现无法重新观看演示，是因为制作者使用了“第二种录制模式”而导致的 Bug，可以返回菜单重进或者查看 gif 演示</p>\\n</li>\\n</ul>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">连段包下载</p>\\n<p><a href=\\"/about/\\" target=\\"_blank\\"><strong>网盘里可以下载连段包</strong></a></p>\\n<p><strong>连段包的压缩包下载完毕后，将其中包含的文件夹拖到 <code>th123\\\\Modules\\\\TrialMode\\\\packs</code> 内，注意不要多包了一层文件夹</strong></p>\\n<p>提示Soku2 is missing的连段包，其中某些关卡需要下载并开启则2才可以启用特殊角色</p>\\n</div>\\n</div>"}');export{Q as comp,X as data};
