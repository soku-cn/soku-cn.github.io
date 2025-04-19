import{_ as o,r as i,o as a,c as r,a as e,d as t,b as c,e as l}from"./app-DvKMHrO2.js";const s={},d=l(`<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>BGMChanger 默认关闭</p><p>打开对应 ini 文件，会看到各个BGM <code>th123\\Modules\\BGMChanger\\BGMChanger.ini</code></p><ul><li><code>path</code> 即文件路径，推荐自己新建一个文件夹，设置 path 为 <code>Modules/BGMChanger/文件夹/文件.ogg</code></li><li><code>intro</code> 即开始循环点A（秒数 x 44100）</li><li><code>loop</code> 即循环长度，循环点B 减去 循环点A（秒数 x 44100）</li></ul><blockquote><p>举例：<br> 一首歌长6分钟，我想让他先播放倒循环点A（1分钟），再让他在A和循环点B（5分钟）之间循环<br> 那么 intro = 1分钟，loop = 4分钟（也就是循环点B减去循环点A）</p></blockquote><p>个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 <strong>（秒数 x 44100）</strong> 即可循环</p><p>如果需要音频编辑软件的话，推荐 Audacity，免费小巧，导出格式为 OGG Vorbis</p></div><div class="hint-container caution"><p class="hint-container-title">文件夹和文件名都不要用中文！</p></div><div class="hint-container tip"><p class="hint-container-title">配置示例</p><p>注意，主菜单的音乐是 [op], 不是 [op2]</p><p>以及游戏内的 BGM 音量记得打开</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>path=Modules/BGMChanger/0/12-till-when.ogg
intro=1265361
loop=2954303

path=Modules/BGMChanger/0/23-till-when-alternative-version.ogg
intro=1
loop=8621663
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,3),p={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"注意",-1),g=e("p",null,[e("strong",null,[t("替换 BGM 用的音乐文件必须是 "),e("code",null,"OGG Vorbis 格式，44100 HZ"),t("，声道默认就行（如果没用那就试试单声道），请注意你的音乐本身是否声音过小。")])],-1),u={href:"https://convertio.co/zh",target:"_blank",rel:"noopener noreferrer"},m=e("figure",null,[e("img",{src:"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp",alt:"",width:"400",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function M(B,G){const n=i("ExternalLinkIcon");return a(),r("div",null,[d,e("div",p,[h,g,e("p",null,[t("可以使用这个网站在线转换 "),e("strong",null,[e("a",u,[t("https://convertio.co/zh"),c(n)])])]),m])])}const v=o(s,[["render",M],["__file","BGMChanger.html.vue"]]),_=JSON.parse('{"path":"/mods/AdvancedMods/BGMChanger.html","title":"改BGM-BGMChanger","lang":"zh-CN","frontmatter":{"title":"改BGM-BGMChanger","icon":"circle-info","order":30,"editLink":false,"author":"三回転Tstar","date":"2023-12-01T00:00:00.000Z","description":"功能简介 BGMChanger 默认关闭 打开对应 ini 文件，会看到各个BGM th123\\\\Modules\\\\BGMChanger\\\\BGMChanger.ini path 即文件路径，推荐自己新建一个文件夹，设置 path 为 Modules/BGMChanger/文件夹/文件.ogg intro 即开始循环点A（秒数 x 44100） loop 即...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/BGMChanger.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"改BGM-BGMChanger"}],["meta",{"property":"og:description","content":"功能简介 BGMChanger 默认关闭 打开对应 ini 文件，会看到各个BGM th123\\\\Modules\\\\BGMChanger\\\\BGMChanger.ini path 即文件路径，推荐自己新建一个文件夹，设置 path 为 Modules/BGMChanger/文件夹/文件.ogg intro 即开始循环点A（秒数 x 44100） loop 即..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-19T05:27:53.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-19T05:27:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"改BGM-BGMChanger\\",\\"image\\":[\\"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp =400x\\"],\\"datePublished\\":\\"2023-12-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-19T05:27:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1704618486000,"updatedTime":1745040473000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":8}]},"readingTime":{"minutes":1.36,"words":407},"localizedDate":"2023年12月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">功能简介</p>\\n<p>BGMChanger 默认关闭</p>\\n<p>打开对应 ini 文件，会看到各个BGM <code>th123\\\\Modules\\\\BGMChanger\\\\BGMChanger.ini</code></p>\\n<ul>\\n<li><code>path</code> 即文件路径，推荐自己新建一个文件夹，设置 path 为 <code>Modules/BGMChanger/文件夹/文件.ogg</code></li>\\n<li><code>intro</code> 即开始循环点A（秒数 x 44100）</li>\\n<li><code>loop</code> 即循环长度，循环点B 减去 循环点A（秒数 x 44100）</li>\\n</ul>\\n<blockquote>\\n<p>举例：<br>\\n一首歌长6分钟，我想让他先播放倒循环点A（1分钟），再让他在A和循环点B（5分钟）之间循环<br>\\n那么 intro = 1分钟，loop = 4分钟（也就是循环点B减去循环点A）</p>\\n</blockquote>\\n<p>个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 <strong>（秒数 x 44100）</strong> 即可循环</p>\\n<p>如果需要音频编辑软件的话，推荐 Audacity，免费小巧，导出格式为 OGG Vorbis</p>\\n</div>"}');export{v as comp,_ as data};
