import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as d,a as t,b as e,w as n,f as c,d as i,e as o}from"./app-bM2_BQET.js";const p={},h=t("h2",{id:"_1-下载-framedataeditor-fde-编辑器并使用改色功能",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-下载-framedataeditor-fde-编辑器并使用改色功能","aria-hidden":"true"},"#"),i(" 1.下载 FramedataEditor（FDE）编辑器并使用改色功能")],-1),g={class:"hint-container info"},u=t("p",{class:"hint-container-title"},"相关信息",-1),_=t("strong",null,"下载链接传送门",-1),f=t("p",null,[t("strong",null,"压缩包内有简单操作说明")],-1),m=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acdd09285ee.webp",alt:"下载mod工具",width:"320",tabindex:"0",loading:"lazy"}),t("figcaption",null,"下载mod工具")],-1),b=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,[t("strong",null,"首次打开会提示选择游戏 th123c.dat 数据位置")]),t("p",null,[t("strong",null,"注意需要将游戏路径（文件夹名称）改为全英文，否则会报错")])],-1),v=o('<div class="hint-container info"><p class="hint-container-title">FrameDataEditor 操作说明</p><p>左上角，先导入角色： File &gt; import &gt; framedata &gt; from game package</p><p>然后导入配色（自己新建配色则忽略）： File &gt; import &gt; palette &gt; from file</p><p>开始编辑配色，切换英文输入法，<strong>按 H 可关闭判定框，然后可以滚轮放大</strong></p><p>打开调色板，左上角 View &gt; palette editor，然后鼠标可以悬浮查看改色区域</p><p>导出配色： File &gt; export &gt; palette &gt; to file 【注意命名和后缀，如palette000.pal】</p><p>一共有 8 个配色位所以你只能写 000-007 内的范围。</p><p><strong>正常你会导出得到一个513字节的文件（Alt+双击 或者 右键-属性，查看文件大小）</strong><br> 此文件可以支持再次导入FDE编辑器编辑，或者直接导入游戏使用，不需要再进行什么转化。</p><figure><img src="https://bu.dusays.com/2024/01/21/65acdf0948973.webp" alt="如图，改色完成，左上角导出得到 pal 文件" width="400" tabindex="0" loading="lazy"><figcaption>如图，改色完成，左上角导出得到 pal 文件</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdf265b777.webp" alt="导入进游戏内的效果" width="400" tabindex="0" loading="lazy"><figcaption>导入进游戏内的效果</figcaption></figure></div><h2 id="_2-将改好的配色-pal-文件导入游戏内使用" tabindex="-1"><a class="header-anchor" href="#_2-将改好的配色-pal-文件导入游戏内使用" aria-hidden="true">#</a> 2.将改好的配色 pal 文件导入游戏内使用</h2>',2),y={class:"hint-container info"},E=t("p",{class:"hint-container-title"},"Shady-loader法",-1),w=t("p",null,[t("strong",null,[i("将 pal 文件按规则命名，如 "),t("code",null,"data_character_reimu_palette000.pal")])],-1),x=t("p",null,[t("strong",null,"然后打包成 zip 包，放入 shady-loader 文件夹内，F2 菜单加载即可")],-1),F=t("strong",null,"shady-loader 使用方法传送门",-1),B={class:"hint-container info"},k=t("p",{class:"hint-container-title"},"Palette-picker法",-1),D=t("strong",null,"Mod说明：改色管理 - palette-picker",-1),V=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acddebbe890.webp",alt:"Palette-picker使用效果如图",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Palette-picker使用效果如图")],-1),z=o('<div class="hint-container info"><p class="hint-container-title">解包封包古法</p><p>新则不需要这种方法，1.10 版本不能使用插件，需要这种方法</p><p>没什么好说的，偷梁换柱即可</p></div><h2 id="_3-将前人使用老工具-绯色二-制作的配色-pal-导入游戏和编辑器" tabindex="-1"><a class="header-anchor" href="#_3-将前人使用老工具-绯色二-制作的配色-pal-导入游戏和编辑器" aria-hidden="true">#</a> 3.将前人使用老工具“绯色二”制作的配色 pal 导入游戏和编辑器</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果pal文件是显示 <strong>1.02KB（Alt+双击 或者 右键-属性，查看文件大小）</strong> 的，则是使用老工具“绯色二”制作的<strong>未转化格式</strong>，可继续在“绯色二”上编辑，不能导入FDE编辑，也不能直接导入游戏</p><p>使用 convpal-old-FDE 转化工具将其转化为 <strong>513 字节</strong>的文件</p><p><strong>用法是将未转化的pal文件拖入其上</strong>，转化后的文件可以导入FDE编辑，也可以导入游戏内使用</p><figure><img src="https://bu.dusays.com/2024/01/21/65acde798a53f.webp" alt="mod工具" width="400" tabindex="0" loading="lazy"><figcaption>mod工具</figcaption></figure></div><h2 id="_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色" tabindex="-1"><a class="header-anchor" href="#_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色" aria-hidden="true">#</a> 4.convpal-true 转化工具和 true-color-palettes 的插件可搭配制作带透明度的配色</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>目前有一个半透明妖梦的成品，转化后也是 1KB大小（右键-属性，查看文件大小）</p><p><strong>应该是可以实现全透明或者半透明之类的效果</strong>（我暂时还不会制作，但是可以去问到，如果有人想做的话可以在mod群里 call 我，我再去问问看怎么做）</p><figure><img src="https://bu.dusays.com/2024/01/21/65acde92efe8b.webp" alt="半透明妖梦配色" width="200" tabindex="0" loading="lazy"><figcaption>半透明妖梦配色</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdeda97f8c.webp" alt="半透明妖梦配色2" width="500" tabindex="0" loading="lazy"><figcaption>半透明妖梦配色2</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p>【已知问题：不能通过 Palette-picker 法加载透明配色】</p></div></div>',5);function A(N,P){const a=s("RouterLink");return r(),d("div",null,[h,t("div",g,[u,t("p",null,[e(a,{to:"/about/#%E9%9D%9E%E6%83%B3%E5%A4%A9%E5%88%99%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E6%8C%87%E8%B7%AF"},{default:n(()=>[_]),_:1})]),f,m,b]),v,c(` >::: info data文件夹法
在 MemoryPatch 里启用了 FileSystemFirst 后（默认启用，可以不必检查）

在 th123 文件夹内新建文件夹命名为 data，继续在 data 文件夹里面新建 character 文件夹，再继续创建如图的角色名文件夹，

将得到的 **513 字节** palette000.pal 文件放入角色名文件夹内，然后返回游戏主菜单，再进入选人界面即可。
**（支持热更新，每次回主菜单再进来选人界面就可以重新刷新读取，不需要重开游戏）**

![角色名文件夹，注意易错名](https://bu.dusays.com/2023/09/05/64f68ee665473.png =200x)

**把 data 文件夹或者 character 文件夹之类的改个名，即可破坏（取消）这种导入方式**

![成品就这样](https://bu.dusays.com/2023/09/13/6500902380b28.png =800x)

::: tip 举个例子吧

palette**000**.pal 对应 **第一个** 配色位
palette**001**.pal 对应 **第二个** 配色位
palette**007**.pal 对应 **第八个也就是最后一个** 配色位

**下面是实操案例：**

**需求：我想要将 V-紲星灯.pal 这个配色放到兔子的 第三个 配色位上**

步骤：
1. **创建 th123/data/character/udonge/ 这个目录**
2. **将 V-紲星灯.pal 文件移动到这个目录**
3. **修改 V-紲星灯.pal 文件名为 palette002.pal**
4. **游戏不用关，回到主菜单，重新进练习模式选人即可**


::: `),t("div",y,[E,w,x,t("p",null,[e(a,{to:"/mods/DIY/Shady-loader.html"},{default:n(()=>[F]),_:1})])]),t("div",B,[k,t("p",null,[e(a,{to:"/mods/DIY/mods/AdvancedMods/palette-picker.html"},{default:n(()=>[D]),_:1})]),V]),z])}const M=l(p,[["render",A],["__file","FramedataEditor.html.vue"]]);export{M as default};
