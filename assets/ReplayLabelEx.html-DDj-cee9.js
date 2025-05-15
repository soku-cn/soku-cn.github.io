import{_ as s,r as a,o as d,c as t,a as e,b as i,d as l,e as c}from"./app-DyF7XLlz.js";const r={},v=c(`<div class="hint-container tip"><p class="hint-container-title">功能展示</p><p><strong>加 ReplayLabelEx mod 后的文件夹存储格式 👇</strong></p><figure><img src="https://bu.dusays.com/2024/06/17/66701c789d25d.jpg" alt="" width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://bu.dusays.com/2024/06/17/66701c76de1b5.jpg" alt="" width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>原版Replay文件夹的存储格式 👇</strong></p><figure><img src="https://bu.dusays.com/2024/06/17/666fa6f231065.jpg" alt="" width="700" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><div class="hint-container important"><p class="hint-container-title">下载安装</p><p><strong>SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包</strong></p><figure><img src="https://bu.dusays.com/2024/10/26/671ca5adca22f.webp" alt="点这里下载新发布的 mod" width="300" tabindex="0" loading="lazy"><figcaption>点这里下载新发布的 mod</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">详细-自定义自己喜欢的命名排列格式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># UTF-16 LE BOM (UCS-2 Little Endian) &lt;ReplayLabelEx.ini&gt;
# https://www.bilibili.com/opus/938087060078592000
# https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html

####【 扩展自定义Rep文件名格式-ReplayLabelEx 】################

# 取代了 th123/configex123.ini 里的Rep文件名格式

# 注意：文件名建议不要使用 自己/对手 格式区分，否则容易造成内战下1P 2P对应混乱辨别困难的情况

# Self / Opponent 后缀，网战下可自动区分 自己/对手，其他模式下按照名称 abcd 字典序统一排列

# 各标签 label 代号和内容均可自定义，若填入非法字符 / : * ? &quot;&quot; &lt; &gt; |  会导致文件名错误，Rep也无法保存

# ReplayLabelEx.ini 和 CharacterNames.ini 配置文件支持热修改

######################################################

[PathFormat]
file_vs=%mode\\%y-%m-%d_%h-%min-%sec_%p1(%spc1)_%p2(%spc2)_(%s1︰%s2_%e1)
# %y %m %d %h %min %sec 表示时间，年 月 日 时 分 秒
# 反斜杠 \\ 表示文件夹


[BattleMode]
label=%mode
# %mode 表示对战模式，可以根据 本地人机、本地双人、联机对战、观战 等模式分别保存至对于的文件夹

vs_com=	【本地Rep】\\VS_COM
vs_loc= 【本地Rep】\\VS_PLAYER
vs_net= 【联机对战Rep】\\[%po]
spectate= 【观战Rep】\\[%ps]_[%po]
other=	【其他】
# 可以自定义分类文件夹的名称


[BattleResult]
label1=%e1
# %e1 表示 1P 的胜负
win= 胜
lose= 负
noed= 无
draw= 平
;label2=%e2
;labels=%es
;labelo=%eo


[BattleScore]
label1=%s1
label2=%s2
# %s1 表示 1P 的比分，%s2 表示 2P 的比分
# 推荐使用这个特殊的对称全角冒号 ︰ 普通的中文冒号是不对称的


[ProfileName]
; 玩家的机签名
; %p1
; %p2
labels=%ps
labelo=%po
# Self / Opponent 后缀


[CharacterName]
; 使用原版英文角色名，如 &quot;reimu, marisa&quot;
; %c1
; %c2
labels=%cs
labelo=%co
# Self / Opponent 后缀


[CharacterNameW]
# sp 前缀支持中文角色名，如“灵梦，魔理沙&quot;
# 在 th123\\modules\\ReplayLabelEx\\CharacterNames.ini 内自定义角色名
label1=%spc1
label2=%spc2
labels=%spcs
labelo=%spco
# Self / Opponent 后缀

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>默认CharacterNames.ini</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ANSI-GBK &lt;CharacterNames.ini&gt;
# https://www.bilibili.com/opus/938087060078592000
# https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html

[Character]
ch0=灵梦
ch1=魔理沙
ch2=咲夜
ch3=爱丽丝
ch4=帕秋莉
ch5=妖梦
ch6=蕾米莉亚
ch7=幽幽子
ch8=八云紫
ch9=萃香
ch10=铃仙
ch11=文
ch12=小町
ch13=衣玖
ch14=天子
ch15=早苗
ch16=琪露诺
ch17=红美铃
ch18=灵乌路空
ch19=诹访子
; ch20=随机
; ch21=大鲶鱼

ch22=犬走椛
ch23=皮丝
ch24=芙兰
ch25=阿燐
ch26=幽香
ch27=辉夜
ch28=妹红
ch29=魅魔
ch30=寅丸星
ch31=水蜜
ch32=赤蛮奇
ch33=古明地觉
ch34=八云蓝


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div>`,3),m={class:"hint-container note"},o=e("p",{class:"hint-container-title"},"注",-1),u={href:"https://resemblances.click3.org/product_list/index.cgi/detail/38",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/jyanf/ReplayLabelEx/",target:"_blank",rel:"noopener noreferrer"};function p(h,g){const n=a("ExternalLinkIcon");return d(),t("div",null,[v,e("div",m,[o,e("ul",null,[e("li",null,[e("p",null,[i("灵感+借鉴原型："),e("a",u,[i("ReplayExtension 原链接"),l(n)])])]),e("li",null,[e("p",null,[i("鱼蛙仓库源代码 "),e("a",b,[i("https://github.com/jyanf/ReplayLabelEx/"),l(n)])])])])])])}const f=s(r,[["render",p],["__file","ReplayLabelEx.html.vue"]]),x=JSON.parse('{"path":"/mods/QoLMods/ReplayLabelEx.html","title":"扩展自定义Rep文件名格式-ReplayLabelEx","lang":"zh-CN","frontmatter":{"title":"扩展自定义Rep文件名格式-ReplayLabelEx","icon":"circle-info","order":21,"editLink":false,"author":"三回転Tstar","date":"2024-06-16T00:00:00.000Z","description":"功能展示 加 ReplayLabelEx mod 后的文件夹存储格式 👇 原版Replay文件夹的存储格式 👇 下载安装 SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包 点这里下载新发布的 mod点这里下载新发布的 mod 详细-自定义自己喜欢的命名排列格式 默认CharacterNames.ini 注 ...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"扩展自定义Rep文件名格式-ReplayLabelEx"}],["meta",{"property":"og:description","content":"功能展示 加 ReplayLabelEx mod 后的文件夹存储格式 👇 原版Replay文件夹的存储格式 👇 下载安装 SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包 点这里下载新发布的 mod点这里下载新发布的 mod 详细-自定义自己喜欢的命名排列格式 默认CharacterNames.ini 注 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/06/17/66701c789d25d.jpg =700x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-01T05:44:47.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-06-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-01T05:44:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"扩展自定义Rep文件名格式-ReplayLabelEx\\",\\"image\\":[\\"https://bu.dusays.com/2024/06/17/66701c789d25d.jpg =700x\\",\\"https://bu.dusays.com/2024/06/17/66701c76de1b5.jpg =700x\\",\\"https://bu.dusays.com/2024/06/17/666fa6f231065.jpg =700x\\",\\"https://bu.dusays.com/2024/10/26/671ca5adca22f.webp =300x\\"],\\"datePublished\\":\\"2024-06-16T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-01T05:44:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1718624251000,"updatedTime":1740807887000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":4}]},"readingTime":{"minutes":2.51,"words":753},"localizedDate":"2024年6月16日","autoDesc":true,"excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">功能展示</p>\\n<p><strong>加 ReplayLabelEx mod 后的文件夹存储格式 👇</strong></p>\\n<figure><img src=\\"https://bu.dusays.com/2024/06/17/66701c789d25d.jpg\\" alt=\\"\\" width=\\"700\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<figure><img src=\\"https://bu.dusays.com/2024/06/17/66701c76de1b5.jpg\\" alt=\\"\\" width=\\"700\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p><strong>原版Replay文件夹的存储格式 👇</strong></p>\\n<figure><img src=\\"https://bu.dusays.com/2024/06/17/666fa6f231065.jpg\\" alt=\\"\\" width=\\"700\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</div>"}');export{f as comp,x as data};
