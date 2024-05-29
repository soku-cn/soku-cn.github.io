import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as a,c,a as t,d as l,b as e,w as d,e as o}from"./app-Clv3_u55.js";const g={},p=o('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>Custom weather&#39;s april fools mod</p><ul><li><strong>注意，此 mod 需要联机双方一起使用且版本相同</strong></li><li><strong>可以和 “则2 MOD” 共存</strong></li><li><strong>若和 “2V2 MOD” 一起使用，某些功能会出问题，不建议一起使用</strong></li></ul><div class="hint-container caution"><p class="hint-container-title">注意Mod冲突</p><p><strong>与 <code>CharacterInForeground</code> 这个 Mod 存在冲突，先把这个 Mod 关闭</strong></p></div></div><div class="hint-container important"><p class="hint-container-title">已发布【4-6 修复版】愚人节搞怪天气 mod 1.10</p><p>修复内容：</p><ul><li>修复了大鬼天气的一些bug</li><li>增加了 <code>CustomWeathers.ini</code>，可以设定如下内容 <ol><li>可自定义天气预报下的读数倍速 <code>ClearTimerMultiplier</code>（默认是三倍速，原版是一帧 0.1 读数）</li><li>可自定义永久生效的天气 <code>ForcedWeather</code></li><li>可自定义启用哪些天气，关闭哪些天气</li><li>可自定义各个天气的循环顺序</li></ol></li></ul></div>',2),h={class:"hint-container info"},y=t("p",{class:"hint-container-title"},"MOD 内容介绍（19个新天气+极光）",-1),m=o("<li><p><strong>替换掉了原版的 20 个天气，在 VS PLAYER 模式里通过 F5 F6 来切换调用；在练习模式里依然是原版天气</strong></p></li><li><p><strong>天气预报状态下，一帧是 0.3 读数（原版是 0.1）；天气已启动状态下依然是两帧 0.1 读数和原版一样</strong></p></li><li><p><strong>修改了系统卡铜钱的效果：</strong><br><strong>和其他普通卡一样只能在自由状态下主动使用，消耗掉卡片并发动10秒的天气免疫效果（类似天子的气质封印）</strong><br><strong>就是10秒内自己不受天气影响</strong></p></li><li><p><strong>各自天气本身以及影响的各自角色招数可能会存在很多 bug，很正常，不用大惊小怪，玩的开心最重要</strong></p></li>",4),x={href:"https://www.bilibili.com/video/BV12F4m1F7Sj/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.bilibili.com/video/BV1bx4y1e7us/",target:"_blank",rel:"noopener noreferrer"},f=o('<table><thead><tr><th style="text-align:left;">天气中文名</th><th style="text-align:center;">天气英文名</th><th style="text-align:left;">天气效果</th><th style="text-align:center;">持续时间</th></tr></thead><tbody><tr><td style="text-align:left;">1. 绯想天</td><td style="text-align:center;">Twilight</td><td style="text-align:left;">屏幕变黑，只能看见自己角色周围一小块区域（聚光灯）</td><td style="text-align:center;">50.0</td></tr><tr><td style="text-align:left;">2. 圣光普照</td><td style="text-align:center;">Angel&#39;s Halo</td><td style="text-align:left;">类似无风天，先命中对手的人立即获得天滴效果(持续到天气结束)，且天气读数变为原先的三分之一</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">3. 海市蜃楼</td><td style="text-align:center;">Desert Mirage</td><td style="text-align:left;">双方立即终止当前动作，随机变成另一个角色，且不能使用卡片（多次遇到此天气的话依不会再随机）</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">4. 流星雨</td><td style="text-align:center;">Shooting Star</td><td style="text-align:left;">随机启动一个天气（除了极光），且每当天气读数的十位数变化时就会再次随机一个天气</td><td style="text-align:center;">*</td></tr><tr><td style="text-align:left;">5. 雷雨</td><td style="text-align:center;">Thunderstorm</td><td style="text-align:left;">错防就会直接被命中</td><td style="text-align:center;">50.0</td></tr><tr><td style="text-align:left;">6. 迷雾</td><td style="text-align:center;">Impassable Fog</td><td style="text-align:left;">双方角色隐身，特效依然显示，地上依然有影子</td><td style="text-align:center;">50.0</td></tr><tr><td style="text-align:left;">7. 反常天气</td><td style="text-align:center;">Antinomy of Common Weather</td><td style="text-align:left;">像凭依华一般浮在空中，可通过上下跳跃，左右移动；无限次数飞翔和 Dash<br><code>（凭依华是 Antinomy of Common Flowers）</code></td><td style="text-align:center;">75.0</td></tr><tr><td style="text-align:left;">8. 失忆之风</td><td style="text-align:center;">Forgetful Wind</td><td style="text-align:left;">双方获得弹幕无敌。时停期间双方的弹幕和特效都会被暂停，但是体术攻击依然有效</td><td style="text-align:center;">50.0</td></tr><tr><td style="text-align:left;">9. 暴风雪</td><td style="text-align:center;">Blizzard</td><td style="text-align:left;">双方的输入延迟都增加 9 帧</td><td style="text-align:center;">25.0</td></tr><tr><td style="text-align:left;">10. 诸神黄昏</td><td style="text-align:center;">Ragnarök</td><td style="text-align:left;">刷出双倍弹幕和特效，如果可以修改发射角度则会变成一上一下的小夹角，否则重叠</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">11. 哈雾</td><td style="text-align:center;">Haar</td><td style="text-align:left;">双方所有的必杀技的种类和等级都随机变化一次，天气结束后恢复原样（不同于疏雨，如果你在天气途中吃卡，也无法保存，会恢复原样）</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">12. 遗忘的鬼雾</td><td style="text-align:center;">Missing Purple Mist</td><td style="text-align:left;">角色和弹幕都巨大化为两倍尺寸（占位判定不变），行动速度不变，霸体效果，不能防御<br><code>萃香的 Missing Purple Power</code></td><td style="text-align:center;">66.6</td></tr><tr><td style="text-align:left;">13. 水雾</td><td style="text-align:center;">Water Haze</td><td style="text-align:left;">双方角色的任何速度都变为原来的四分之一</td><td style="text-align:center;">75.0</td></tr><tr><td style="text-align:left;">14. 反向力场</td><td style="text-align:center;">Reverse Field</td><td style="text-align:left;">防御段位颠倒。中段变下段，下段变中段</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">15. 幻雾</td><td style="text-align:center;">Illusion Mist</td><td style="text-align:left;">全员幽冥（妖梦的半灵还在，可以再开幽冥，就有两个分身和一个本体了）</td><td style="text-align:center;">50.0</td></tr><tr><td style="text-align:left;">16. 极夜</td><td style="text-align:center;">Eternal Night</td><td style="text-align:left;">双方角色被时停，但是已生成的弹幕依然可以飞行和造成伤害（类似咲夜的四卡特制时计）</td><td style="text-align:center;">9.0</td></tr><tr><td style="text-align:left;">17. 霜</td><td style="text-align:center;">Frost</td><td style="text-align:left;">地面结冰，小心打滑（不是冻青蛙）</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">18. 热浪</td><td style="text-align:center;">Hot Wind</td><td style="text-align:left;">类似黄砂。康了会造成 4000 固定伤害并立即出圈，有一个很长的 Hitstop 暂停，天气读数减少 50；<br>不康的话就造成 750 固定伤害，天气读数减少 10。</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">19. 神秘之风</td><td style="text-align:center;">Mysterious Wind</td><td style="text-align:left;">版边变得互通，角色和弹幕等都可以随意穿越。弹墙招数如 6A 不会穿越而是弹墙。请注意防御方向不是根据朝向，还是根据场上双方的位置</td><td style="text-align:center;">99.9</td></tr><tr><td style="text-align:left;">20. 极光</td><td style="text-align:center;">Aurora</td><td style="text-align:left;">和原版一样随机启动一个天气（除了流星雨）</td><td style="text-align:center;">*</td></tr></tbody></table>',1),_={href:"https://discord.com/channels/167593473854144512/216678374846758913/1221592961834553385",target:"_blank",rel:"noopener noreferrer"},M={href:"https://docs.google.com/spreadsheets/d/1auTCMs_pG99o8WP35bkIUgnRtHRB6KQ8c5m9o2PCGzI",target:"_blank",rel:"noopener noreferrer"},b={class:"hint-container info"},v=o('<p class="hint-container-title">安装步骤说明</p><div class="hint-container caution"><p class="hint-container-title">注意Mod冲突</p><ul><li><p><strong>与 <code>CharacterInForeground</code> 这个 Mod 存在冲突，要先把它关闭</strong></p></li><li><p><strong>再打开 Mod： <code>CustomWeathers</code></strong></p></li><li><p><strong>压缩包里的 <code>giuroll</code> 是特制的 0.6.14b 版本的，如果使用其他版本的不知道会不会发生不同步</strong></p></li></ul></div>',2),w=t("img",{src:"https://bu.dusays.com/2024/03/25/660157b22ae86.png",alt:"如何开关配置mod 打开 Mod： ",width:"550",tabindex:"0",loading:"lazy"},null,-1),C=t("strong",null,"如何开关配置mod",-1),F=t("strong",null,[l("打开 Mod： "),t("code",null,"CustomWeathers")],-1),T={class:"hint-container tip"},W=t("p",{class:"hint-container-title"},"下载",-1),D=t("strong",null,"可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了",-1);function k(O,A){const n=r("ExternalLinkIcon"),i=r("RouteLink");return a(),c("div",null,[p,t("div",h,[y,t("ul",null,[m,t("li",null,[t("p",null,[t("a",x,[l("新天气介绍视频 - 【非想天则MOD】搞怪天气Mod-愚人节活动"),e(n)])])]),t("li",null,[t("p",null,[t("a",u,[l("试玩视频 - 因为太害怕弹幕所以把盾全开开了 愚人节天气 MOD 启动！（普信 VS 秋水）【非想天则 MOD】"),e(n)])])])]),f,t("ul",null,[t("li",null,[t("a",_,[l("Source-Discord"),e(n)])]),t("li",null,[t("a",M,[l("Source-doc"),e(n)])])])]),t("div",b,[v,t("figure",null,[w,t("figcaption",null,[e(i,{to:"/mods/WhatsMod.html"},{default:d(()=>[C]),_:1}),l(),F])])]),t("div",T,[W,t("p",null,[t("strong",null,[e(i,{to:"/about/"},{default:d(()=>[D]),_:1})])])])])}const P=s(g,[["render",k],["__file","AprilFoolWeathers.html.vue"]]),S=JSON.parse(`{"path":"/mods/GameplayMods/AprilFoolWeathers.html","title":"愚人节搞怪天气mod","lang":"zh-CN","frontmatter":{"title":"愚人节搞怪天气mod","icon":"circle-info","order":31,"editLink":false,"author":"三回転Tstar","date":"2024-04-01T00:00:00.000Z","description":"注意 Custom weather's april fools mod 注意，此 mod 需要联机双方一起使用且版本相同 可以和 “则2 MOD” 共存 若和 “2V2 MOD” 一起使用，某些功能会出问题，不建议一起使用 注意Mod冲突 与 CharacterInForeground 这个 Mod 存在冲突，先把这个 Mod 关闭 已发布【4-6 修...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/GameplayMods/AprilFoolWeathers.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"愚人节搞怪天气mod"}],["meta",{"property":"og:description","content":"注意 Custom weather's april fools mod 注意，此 mod 需要联机双方一起使用且版本相同 可以和 “则2 MOD” 共存 若和 “2V2 MOD” 一起使用，某些功能会出问题，不建议一起使用 注意Mod冲突 与 CharacterInForeground 这个 Mod 存在冲突，先把这个 Mod 关闭 已发布【4-6 修..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wiki.514.live/mods/WhatsMod.html"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T18:02:47.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-04-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T18:02:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"愚人节搞怪天气mod\\",\\"image\\":[\\"https://wiki.514.live/mods/WhatsMod.html\\"],\\"datePublished\\":\\"2024-04-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T18:02:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1711364469000,"updatedTime":1712340167000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":12}]},"readingTime":{"minutes":4.83,"words":1449},"filePathRelative":"mods/GameplayMods/AprilFoolWeathers.md","localizedDate":"2024年4月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>Custom weather's april fools mod</p>\\n<ul>\\n<li><strong>注意，此 mod 需要联机双方一起使用且版本相同</strong></li>\\n<li><strong>可以和 “则2 MOD” 共存</strong></li>\\n<li><strong>若和 “2V2 MOD” 一起使用，某些功能会出问题，不建议一起使用</strong></li>\\n</ul>\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">注意Mod冲突</p>\\n<p><strong>与 <code>CharacterInForeground</code> 这个 Mod 存在冲突，先把这个 Mod 关闭</strong></p>\\n</div>\\n</div>"}`);export{P as comp,S as data};
