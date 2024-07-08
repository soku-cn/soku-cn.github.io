import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as r,a as e,d as t,b as l,w as i,e as p}from"./app-DWkx9u2m.js";const c={},d=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"ReplayDnD-old基础功能简介（不带rep转mp4）"),e("ul",null,[e("li",null,[t("右键rep文件选择"),e("strong",null,"属性"),t("，"),e("strong",null,"打开方式"),t("设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了")]),e("li",null,"rep文件可能要和th123.exe在同一个盘符内"),e("li",null,"将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）")])],-1),m={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"新版ReplayDnD的Rep转mp4视频功能",-1),h={class:"hint-container warning"},g=e("p",{class:"hint-container-title"},"注意",-1),f=e("strong",null,[t("整合包内默认启用 "),e("code",null,"ReplayDnD-old"),t(" 旧版，想要使用新版的功能请手动调整")],-1),_=e("strong",null,"如何开关配置 mod",-1),y=e("p",null,"使用时可能会偶尔冒出dll被禁用的弹窗，点确认关掉然后忽略即可，无不良影响",-1),D=e("p",null,"如果一次性同时运行多个录制，可能会因内存不足或CPU占用过高等引发一系列问题，所以请根据自己的电脑性能资源量力而行",-1),x=p(`<ul><li><p><strong>切换为新版后，先打开一遍游戏</strong>，然后以后右键则的rep文件就会多一个选项 &quot;render to mp4 with soku&quot;，点了就是开始录制了</p></li><li><p><strong>想要同时录制多个rep，请分别在每个rep文件上右键。</strong> <mark>不要多选rep文件一次性右键点录制，会出现问题</mark></p></li></ul><figure><img src="https://bu.dusays.com/2024/06/13/666ac232c75ff.gif" alt="ReplayDnD 快速录制 rep 为 mp4 展示.gif" width="400" tabindex="0" loading="lazy"><figcaption>ReplayDnD 快速录制 rep 为 mp4 展示.gif</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp" alt="游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)" width="400" tabindex="0" loading="lazy"><figcaption>游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)</figcaption></figure><div class="hint-container info"><p class="hint-container-title">ReplayDnD的Rep转mp4的特点</p><ol><li><strong>录制速度成倍数</strong>，不需要像录屏软件那样一比一时间录制；（标题栏可以看到，60fps为一倍速，120fps为二倍速，以此类推）</li><li><strong>可多线程录制</strong>，同时录制多个rep为mp4视频，互相之间不干扰，也不被电脑上其他音频干扰；</li><li>录制得到的视频尺寸为 640*480(则的游戏分辨率本来就这么大)，60F帧率，<strong>约7000~10000kbps码率</strong>，可配合改皮肤类mod录制</li><li>注意使用录制功能后，游戏内Config的“FPS显示”会被关掉，记得自己手动再打开</li></ol></div><details class="hint-container details"><summary>ffmpeg快速合并一个文件夹内的所有mp4视频文件</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>rem 拼接视频 ffmpeg 命令
chcp 65001
(for %%i in (*.mp4) do @echo file &#39;%%i&#39;) &gt; LIST.txt
ffmpeg -f concat -safe 0 -i LIST.txt -c copy Output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述内容保存为 .bat 脚本</p></details>`,5),v={class:"hint-container caution"},b=e("p",{class:"hint-container-title"},"警告",-1),R=e("li",null,[e("p",null,[e("strong",null,"Win7不能用，会报错")])],-1),T=e("li",null,[e("p",null,[e("strong",null,"Nvida 系列显卡可能会有一下一些情况，不能使用，原因和解决办法未知")]),e("ul",null,[e("li",null,"右键点 render 后游戏的标题栏无信息或自动关闭，生成0KB~几十KB的无效mp4文件"),e("li",null,"点了后录了一小段然后卡死不动"),e("li",null,"第一次能正常录制，之后就一直出问题了")])],-1),k=e("li",null,[e("p",null,[e("strong",null,"Intel 系列核显可能会有“右键点 render 后如下图所示报错”的情况，不能使用，原因和解决办法未知")])],-1),w=e("figure",null,[e("img",{src:"https://bu.dusays.com/2024/06/13/666abd762ca5e.png",alt:"可能是 Intel 系列核显就会这样报错",width:"400",tabindex:"0",loading:"lazy"}),e("figcaption",null,"可能是 Intel 系列核显就会这样报错")],-1);function N(z,C){const n=a("RouteLink");return s(),r("div",null,[d,e("div",m,[u,e("div",h,[g,e("p",null,[f,t(),l(n,{to:"/mods/WhatsMod.html"},{default:i(()=>[_]),_:1})]),y,D]),x,e("div",v,[b,e("ul",null,[R,e("li",null,[e("p",null,[e("strong",null,[t("打了"),l(n,{to:"/FAQ/In-Games/MissingGraphic.html"},{default:i(()=>[t("特效消失（变成一根线）的补丁")]),_:1}),t("后，使用Rep转mp4功能会报错无法使用")])])]),T,k]),w])])])}const S=o(c,[["render",N],["__file","ReplayDnD.html.vue"]]),Z=JSON.parse('{"path":"/mods/AdvancedMods/ReplayDnD.html","title":"双击rep播放转mp4视频功能-ReplayDnD","lang":"zh-CN","frontmatter":{"title":"双击rep播放转mp4视频功能-ReplayDnD","icon":"circle-info","order":2,"editLink":false,"author":"三回転Tstar","date":"2023-12-01T00:00:00.000Z","description":"ReplayDnD-old基础功能简介（不带rep转mp4） 右键rep文件选择属性，打开方式设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了 rep文件可能要和th123.exe在同一个盘符内 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/mods/AdvancedMods/ReplayDnD.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"双击rep播放转mp4视频功能-ReplayDnD"}],["meta",{"property":"og:description","content":"ReplayDnD-old基础功能简介（不带rep转mp4） 右键rep文件选择属性，打开方式设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了 rep文件可能要和th123.exe在同一个盘符内 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-01T05:43:19.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T05:43:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双击rep播放转mp4视频功能-ReplayDnD\\",\\"image\\":[\\"https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x\\",\\"https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp =400x\\",\\"https://bu.dusays.com/2024/06/13/666abd762ca5e.png =400x\\"],\\"datePublished\\":\\"2023-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T05:43:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1704618486000,"updatedTime":1719812599000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":7}]},"readingTime":{"minutes":2.93,"words":880},"localizedDate":"2023年12月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">ReplayDnD-old基础功能简介（不带rep转mp4）</p>\\n<ul>\\n<li>右键rep文件选择<strong>属性</strong>，<strong>打开方式</strong>设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了</li>\\n<li>rep文件可能要和th123.exe在同一个盘符内</li>\\n<li>将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）</li>\\n</ul>\\n</div>"}');export{S as comp,Z as data};
