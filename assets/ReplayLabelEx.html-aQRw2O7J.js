import{_ as n,c as a,a as i,o as e}from"./app-CqEDUxPV.js";const l={};function p(c,s){return e(),a("div",null,[...s[0]||(s[0]=[i(`<div class="hint-container tip"><p class="hint-container-title">功能展示</p><p><strong>加 ReplayLabelEx mod 后的文件夹存储格式 👇</strong></p><figure><img src="https://bu.dusays.com/2024/06/17/66701c789d25d.jpg" alt="图片加载中..." width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://bu.dusays.com/2024/06/17/66701c76de1b5.jpg" alt="图片加载中..." width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>原版Replay文件夹的存储格式 👇</strong></p><figure><img src="https://bu.dusays.com/2024/06/17/666fa6f231065.jpg" alt="图片加载中..." width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><div class="hint-container important"><p class="hint-container-title">下载安装</p><p><strong>SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包</strong></p><figure><img src="https://bu.dusays.com/2024/10/26/671ca5adca22f.webp" alt="图片加载中..." width="300" tabindex="0" loading="lazy"><figcaption>点这里下载新发布的 mod</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">详细-自定义自己喜欢的命名排列格式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># UTF-16 LE BOM (UCS-2 Little Endian) &lt;ReplayLabelEx.ini&gt;</span></span>
<span class="line"><span># https://www.bilibili.com/opus/938087060078592000</span></span>
<span class="line"><span># https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>####【 扩展自定义Rep文件名格式-ReplayLabelEx 】################</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 取代了 th123/configex123.ini 里的Rep文件名格式</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 注意：文件名建议不要使用 自己/对手 格式区分，否则容易造成内战下1P 2P对应混乱辨别困难的情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Self / Opponent 后缀，网战下可自动区分 自己/对手，其他模式下按照名称 abcd 字典序统一排列</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 各标签 label 代号和内容均可自定义，若填入非法字符 / : * ? &quot;&quot; &lt; &gt; |  会导致文件名错误，Rep也无法保存</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ReplayLabelEx.ini 和 CharacterNames.ini 配置文件支持热修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>######################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[PathFormat]</span></span>
<span class="line"><span>file_vs=%mode\\%y-%m-%d_%h-%min-%sec_%p1(%spc1)_%p2(%spc2)_(%s1︰%s2_%e1)</span></span>
<span class="line"><span># %y %m %d %h %min %sec 表示时间，年 月 日 时 分 秒</span></span>
<span class="line"><span># 反斜杠 \\ 表示文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[BattleMode]</span></span>
<span class="line"><span>label=%mode</span></span>
<span class="line"><span># %mode 表示对战模式，可以根据 本地人机、本地双人、联机对战、观战 等模式分别保存至对于的文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vs_com=	【本地Rep】\\VS_COM</span></span>
<span class="line"><span>vs_loc= 【本地Rep】\\VS_PLAYER</span></span>
<span class="line"><span>vs_net= 【联机对战Rep】\\[%po]</span></span>
<span class="line"><span>spectate= 【观战Rep】\\[%ps]_[%po]</span></span>
<span class="line"><span>other=	【其他】</span></span>
<span class="line"><span># 可以自定义分类文件夹的名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[BattleResult]</span></span>
<span class="line"><span>label1=%e1</span></span>
<span class="line"><span># %e1 表示 1P 的胜负</span></span>
<span class="line"><span>win= 胜</span></span>
<span class="line"><span>lose= 负</span></span>
<span class="line"><span>noed= 无</span></span>
<span class="line"><span>draw= 平</span></span>
<span class="line"><span>;label2=%e2</span></span>
<span class="line"><span>;labels=%es</span></span>
<span class="line"><span>;labelo=%eo</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[BattleScore]</span></span>
<span class="line"><span>label1=%s1</span></span>
<span class="line"><span>label2=%s2</span></span>
<span class="line"><span># %s1 表示 1P 的比分，%s2 表示 2P 的比分</span></span>
<span class="line"><span># 推荐使用这个特殊的对称全角冒号 ︰ 普通的中文冒号是不对称的</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ProfileName]</span></span>
<span class="line"><span>; 玩家的机签名</span></span>
<span class="line"><span>; %p1</span></span>
<span class="line"><span>; %p2</span></span>
<span class="line"><span>labels=%ps</span></span>
<span class="line"><span>labelo=%po</span></span>
<span class="line"><span># Self / Opponent 后缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[CharacterName]</span></span>
<span class="line"><span>; 使用原版英文角色名，如 &quot;reimu, marisa&quot;</span></span>
<span class="line"><span>; %c1</span></span>
<span class="line"><span>; %c2</span></span>
<span class="line"><span>labels=%cs</span></span>
<span class="line"><span>labelo=%co</span></span>
<span class="line"><span># Self / Opponent 后缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[CharacterNameW]</span></span>
<span class="line"><span># sp 前缀支持中文角色名，如“灵梦，魔理沙&quot;</span></span>
<span class="line"><span># 在 th123\\modules\\ReplayLabelEx\\CharacterNames.ini 内自定义角色名</span></span>
<span class="line"><span>label1=%spc1</span></span>
<span class="line"><span>label2=%spc2</span></span>
<span class="line"><span>labels=%spcs</span></span>
<span class="line"><span>labelo=%spco</span></span>
<span class="line"><span># Self / Opponent 后缀</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>默认CharacterNames.ini</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># ANSI-GBK &lt;CharacterNames.ini&gt;</span></span>
<span class="line"><span># https://www.bilibili.com/opus/938087060078592000</span></span>
<span class="line"><span># https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Character]</span></span>
<span class="line"><span>ch0=灵梦</span></span>
<span class="line"><span>ch1=魔理沙</span></span>
<span class="line"><span>ch2=咲夜</span></span>
<span class="line"><span>ch3=爱丽丝</span></span>
<span class="line"><span>ch4=帕秋莉</span></span>
<span class="line"><span>ch5=妖梦</span></span>
<span class="line"><span>ch6=蕾米莉亚</span></span>
<span class="line"><span>ch7=幽幽子</span></span>
<span class="line"><span>ch8=八云紫</span></span>
<span class="line"><span>ch9=萃香</span></span>
<span class="line"><span>ch10=铃仙</span></span>
<span class="line"><span>ch11=文</span></span>
<span class="line"><span>ch12=小町</span></span>
<span class="line"><span>ch13=衣玖</span></span>
<span class="line"><span>ch14=天子</span></span>
<span class="line"><span>ch15=早苗</span></span>
<span class="line"><span>ch16=琪露诺</span></span>
<span class="line"><span>ch17=红美铃</span></span>
<span class="line"><span>ch18=灵乌路空</span></span>
<span class="line"><span>ch19=诹访子</span></span>
<span class="line"><span>; ch20=随机</span></span>
<span class="line"><span>; ch21=大鲶鱼</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ch22=犬走椛</span></span>
<span class="line"><span>ch23=皮丝</span></span>
<span class="line"><span>ch24=芙兰</span></span>
<span class="line"><span>ch25=阿燐</span></span>
<span class="line"><span>ch26=幽香</span></span>
<span class="line"><span>ch27=辉夜</span></span>
<span class="line"><span>ch28=妹红</span></span>
<span class="line"><span>ch29=魅魔</span></span>
<span class="line"><span>ch30=寅丸星</span></span>
<span class="line"><span>ch31=水蜜</span></span>
<span class="line"><span>ch32=赤蛮奇</span></span>
<span class="line"><span>ch33=古明地觉</span></span>
<span class="line"><span>ch34=八云蓝</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><div class="hint-container note"><p class="hint-container-title">注</p><ul><li><p>灵感+借鉴原型：<a href="https://resemblances.click3.org/product_list/index.cgi/detail/38" target="_blank" rel="noopener noreferrer">ReplayExtension 原链接</a></p></li><li><p>鱼蛙仓库源代码 https://github.com/jyanf/ReplayLabelEx/</p></li></ul></div>`,4)])])}const t=n(l,[["render",p]]),r=JSON.parse('{"path":"/mods/QoLMods/ReplayLabelEx.html","title":"扩展自定义Rep文件名格式-ReplayLabelEx","lang":"zh-CN","frontmatter":{"title":"扩展自定义Rep文件名格式-ReplayLabelEx","icon":"circle-info","order":21,"editLink":false,"author":"三回転Tstar","date":"2024-06-16T00:00:00.000Z","description":"功能展示 加 ReplayLabelEx mod 后的文件夹存储格式 👇 图片加载中... 图片加载中... 原版Replay文件夹的存储格式 👇 图片加载中... 下载安装 SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包 图片加载中...点这里下载新发布的 mod 详细-自定义自己喜欢的命名排列格式 默...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"扩展自定义Rep文件名格式-ReplayLabelEx\\",\\"image\\":[\\"https://bu.dusays.com/2024/06/17/66701c789d25d.jpg \\\\\\" \\\\\\"\\",\\"https://bu.dusays.com/2024/06/17/66701c76de1b5.jpg \\\\\\" \\\\\\"\\",\\"https://bu.dusays.com/2024/06/17/666fa6f231065.jpg \\\\\\" \\\\\\"\\",\\"https://bu.dusays.com/2024/10/26/671ca5adca22f.webp \\\\\\"点这里下载新发布的 mod\\\\\\"\\"],\\"datePublished\\":\\"2024-06-16T00:00:00.000Z\\",\\"dateModified\\":\\"2025-09-24T05:46:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"扩展自定义Rep文件名格式-ReplayLabelEx"}],["meta",{"property":"og:description","content":"功能展示 加 ReplayLabelEx mod 后的文件夹存储格式 👇 图片加载中... 图片加载中... 原版Replay文件夹的存储格式 👇 图片加载中... 下载安装 SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包 图片加载中...点这里下载新发布的 mod 详细-自定义自己喜欢的命名排列格式 默..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/06/17/66701c789d25d.jpg \\" \\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-09-24T05:46:06.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-06-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-09-24T05:46:06.000Z"}]]},"git":{"createdTime":1718624251000,"updatedTime":1758692766000,"contributors":[{"name":"Tstar00","username":"Tstar00","email":"1434716883@qq.com","commits":4,"url":"https://github.com/Tstar00"},{"name":"zhongzi26","username":"zhongzi26","email":"zhongzi2333@gmail.com","commits":1,"url":"https://github.com/zhongzi26"}],"changelog":[{"hash":"9fdbaeeca13c7d4c306d837d8d2e4d2c16626728","time":1758692766000,"email":"zhongzi2333@gmail.com","author":"zhongzi26","message":"将全站所有图片更新至新版语法，以及一些修补。"},{"hash":"dda4173f1ca0dfbd84a47ffffce4a27025c203aa","time":1740807887000,"email":"1434716883@qq.com","author":"Tstar00","message":"BUG注意：FDE本体、则、pat文件、pal文件等放在纯英文路径，否则可能会出现问题"},{"hash":"62c355fd8c46314059a14fbf7812b842d8d86fc5","time":1729933349000,"email":"1434716883@qq.com","author":"Tstar00","message":"压缩图片"},{"hash":"c6da43176d6bff2809a8cf5d885d0eadfb531ce2","time":1718766855000,"email":"1434716883@qq.com","author":"Tstar00","message":"更新 Shady-loader 2.6.1"},{"hash":"7d760a408710f48fbf81059878f1d5ca4c44354a","time":1718624251000,"email":"1434716883@qq.com","author":"Tstar00","message":"ReplayLabelEx"}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"mods/QoLMods/ReplayLabelEx.md","autoDesc":true}');export{t as comp,r as data};
