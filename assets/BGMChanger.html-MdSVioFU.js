import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as s,c as a,a as e,e as n,b as l,f as c}from"./app-CVxlUe6O.js";const r={},d=c(`<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>BGMChanger 默认关闭</p><p>打开对应 ini 文件，会看到各个BGM <code>th123\\Modules\\BGMChanger\\BGMChanger.ini</code></p><p><code>path</code> 即文件路径，推荐自己新建一个文件夹，设置 path 为 <code>Modules/BGMChanger/文件夹/文件.ogg</code><br><code>intro</code> 即开始循环点（秒数 x 44100）<br><code>loop</code> 即循环长度，从intro点开始过多久，就回到intro点（秒数 x 44100）</p><p>个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 <strong>（秒数 x 44100）</strong> 即可循环</p><p>如果需要音频编辑软件的话，推荐 Audacity，免费小巧</p></div><div class="hint-container caution"><p class="hint-container-title">文件夹和文件名都不要用中文！</p></div><div class="hint-container tip"><p class="hint-container-title">配置示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>path=Modules/BGMChanger/0/12-till-when.ogg
intro=1265361
loop=2954303

path=Modules/BGMChanger/0/23-till-when-alternative-version.ogg
intro=1
loop=8621663
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,3),p={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"注意",-1),u=e("p",null,[e("strong",null,[n("替换 BGM 用的音乐文件必须是 "),e("code",null,"ogg 格式，44100 HZ"),n("，声道默认就行（如果没用那就试试单声道）。")])],-1),v={href:"https://convertio.co/zh",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),_=e("figure",null,[e("img",{src:"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp",alt:"",width:"400",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function m(b,f){const t=i("ExternalLinkIcon");return s(),a("div",null,[d,e("div",p,[h,u,e("p",null,[n("可以使用这个网站在线转换 "),e("strong",null,[e("a",v,[n("https://convertio.co/zh"),l(t)])]),g,n(" 其他的应该也是可以的随便你")]),_])])}const B=o(r,[["render",m],["__file","BGMChanger.html.vue"]]);export{B as default};
