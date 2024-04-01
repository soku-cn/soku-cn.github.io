import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as s,c as l,a as e,e as n,b as r,f as a}from"./app-bQ8TthJ_.js";const c={},d=a(`<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>BGMChanger 默认关闭</p><p>打开对应 ini 文件，会看到各个BGM <code>（th123\\Modules\\BGMChanger\\BGMChanger.ini）</code></p><p>path 即文件路径，推荐自己新键一个非中文名文件夹，设置path为Modules/BGMChanger/文件夹/文件.ogg<br> intro 即开始循环点（秒数 x 44100）<br> loop 即循环长度，从intro点开始过多久，就回到intro点（秒数 x 44100）</p><p>个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 <strong>（秒数 x 44100）</strong> 即可循环</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>path=Modules/BGMChanger/0/12-till-when.ogg
intro=1265361
loop=2954303

path=Modules/BGMChanger/0/23-till-when-alternative-version.ogg
intro=1
loop=8621663
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),p={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"注意",-1),u=e("p",null,[e("strong",null,[n("替换 BGM 用的音乐文件必须是 "),e("code",null,"ogg 格式，44100 HZ"),n("，单声道还是双声道是根据你的源文件。")])],-1),g={href:"https://convertio.co/zh",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),v=e("figure",null,[e("img",{src:"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp",alt:"转化设置如图，否则可能会发生游戏内无法播放没声音的情况",width:"320",tabindex:"0",loading:"lazy"}),e("figcaption",null,"转化设置如图，否则可能会发生游戏内无法播放没声音的情况")],-1);function m(b,f){const t=i("ExternalLinkIcon");return s(),l("div",null,[d,e("div",p,[h,u,e("p",null,[n("可以使用这个网站在线转换 "),e("strong",null,[e("a",g,[n("https://convertio.co/zh"),r(t)])]),_,n(" 其他的应该也是可以的随便你")]),v])])}const B=o(c,[["render",m],["__file","BGMChanger.html.vue"]]);export{B as default};
