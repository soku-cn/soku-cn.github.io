import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as r,c,a as n,e,b as i,d as s,f as o}from"./app-tR1spsP1.js";const a={},p=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"问题原因"),n("p",null,[n("strong",null,"这是因为你的新 Intel CPU 新核显，新版本 Intel 核显的驱动程序，对非想天则这个旧游戏有 Bug")]),n("figure",null,[n("img",{src:"https://bu.dusays.com/2024/01/21/65acc4c45b122.webp",alt:"如：灵梦 JA 的黄色护符特效变成一根线，早苗 C 弹星星变成一根线等",width:"500",tabindex:"0",loading:"lazy"}),n("figcaption",null,"如：灵梦 JA 的黄色护符特效变成一根线，早苗 C 弹星星变成一根线等")])],-1),h={class:"hint-container tip"},_=n("p",{class:"hint-container-title"},"解决办法",-1),D=n("p",null,[n("strong",null,"感谢 Hagb 大佬提供的补丁，修复了新设备 Intel CPU 核显+高版本驱动导致的非想天则特效变成一根线的问题，目前处于测试阶段，有什么问题可以加作者QQ 571499084 反馈")],-1),u=n("strong",null,"点下方链接可下载修复补丁",-1),m=n("br",null,null,-1),g={href:"https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/%E4%BF%AE%E5%A4%8D%E9%9D%9E%E6%83%B3%E5%A4%A9%E5%88%99%E7%89%B9%E6%95%88%E5%8F%98%E6%88%90%E4%B8%80%E6%A0%B9%E7%BA%BFBUG%E7%9A%84%E8%A1%A5%E4%B8%81-d3d9_0.4.2%20wined3d_9.4-staging%E3%80%902024-3-10%E3%80%91.zip",target:"_blank",rel:"noopener noreferrer"},X=o(`<div class="hint-container important"><p class="hint-container-title">补丁使用方法</p><p><strong>把压缩包内 th123 文件夹里的 3 个 dll 文件，放到你的游戏文件夹内，和 th123.exe 同目录</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>d3d9.dll
d3d9_custom.dll
wined3d.dll
th123.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这四个文件处于同一个文件夹内，即可</strong></p><div class="hint-container caution"><p class="hint-container-title">已知BUG</p><p><strong>1、使用补丁后，OBS<code>“游戏源”</code>录制非想天则时会出现问题，换成<code>“窗口采集”</code>即可正常录制</strong></p><p><strong>2、没有这个特效变成一根线 BUG 的电脑最好不要安装这个补丁，否则可能会打不开游戏，删掉<code>d3d9_custom.dll</code>就可以打开了</strong></p></div></div>`,1),f={class:"hint-container details"},v=n("summary",null,"一些技术解释 - 修复非想天则特效变成一根线BUG的补丁",-1),W={class:"hint-container note"},V=n("p",{class:"hint-container-title"},"注",-1),E=n("p",null,[n("strong",null,"虽然在某些较新的 Intel 集显驱动下非想天则有特效缺失，但使用其他第三方 DirectX 实现（如 WineD3D、DXVK）能够绕过这个问题。")],-1),b=n("p",null,"补丁包文件：",-1),w={href:"https://github.com/SokuDev/SokuMods/pull/25",target:"_blank",rel:"noopener noreferrer"},B={href:"https://downloads.fdossena.com/geth.php?r=wined3dst-latest",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/adolfintel/wined3d4win",target:"_blank",rel:"noopener noreferrer"},I={class:"hint-container info"},x=n("p",{class:"hint-container-title"},"一些细节",-1),G={href:"https://community.intel.com/t5/Graphics/Iris-Xe-Graphics-doesn-t-run-DirectX-9-game-properly/m-p/1444706#M112728",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"DXVK 一般在 Wine 上使用（这是一个用于在类 unix 系统上运行 Windows 程序的兼容层）。在 Wine 中，我们一般用 WineD3D 或者 DXVK 而非微软的来作为 DirectX 的实现。它们也都是兼容层，即它们自己提供 DirectX API 被应用调用，而后它们会把这些 DirectX 形式的调用“翻译”成其他类型的 API 并调用之。DXVK 基于 Vulkan，WineD3D 则基于 OpenGL。（即，应用程序把 DXVK 作为 DirectX 接口调用，而 DXVK 则调用 Vulkan 来完成和对应 DirectX 调用等价的事情；WineD3D 同理。）",-1),A=n("p",null,"这些兼容层虽然是为 Wine 提供的，但实际上也是基于 Windows API 编写，理论上来说保留了对 Windows 的兼容性，因此是有可能用在 Windows 上的。于是我分别尝试了 DXVK 和 WineD3D，发现它们都能在我的 N 卡上良好运行，因此我把它们发给受 DirectX 渲染问题困扰的用户让他们测试（直接把它们在系统层面应用是有风险的，所以要配合专门为此进行了修改的非想天则 mod 加载器，来单独给非想天则加载这些库）。",-1),U=o('<p><strong>DXVK 和 WineD3D 两种方案默认配置下的测试结果</strong></p><div class="hint-container info"><p class="hint-container-title">可用性</p><ul><li>WineD3D：在 Wine 上是默认选择；而在所有我所知的受 DirectX 图像缺失问题的设备上，基于 WineD3D 的方案也都能在 Windows 开箱即用，然后问题也确实消失了。此外，WineD3D 也能在多显卡的环境（比如集显+独显）下，遵循用户手动指定的显卡。不过有的 AMD 集显用户反映使用了之后游戏无法正常启动。（不过问题不大，这个解决方案本来也不是面向他们的。）</li><li>DXVK：在 Wine 社区中被普遍认为是性能更好的选择，因此许多 Wine 发行版会把 DXVK 作为默认的 DirectX 实现。支持 Vulkan 的硬件和驱动没有那么多，因此 DXVK 的支持范围自然也小一些。有用户反馈他的设备（使用 Intel 集显）无法直接使用 DXVK。</li></ul></div><div class="hint-container info"><p class="hint-container-title">性能</p><p>大家普遍认为 DXVK 性能比 WineD3D 的好，但这点至少在我们这里的目标用户那儿没有体现出来：我询问了几个用户，结果都是 WineD3D 的 GPU 占用率和 DXVK 基本相当，而 DXVK 占用的内存却比 WineD3D 大不少。</p><p>关于性能相当的可能的解释是：Intel 对 OpenGL 的实现较好，达到了比较好的性能。（事实上，我的 N 卡上结果中，性能从好到坏依次为 DXVK、微软的实现、WineD3D，在数值上有较为明显的差别。）</p><p>关于内存占用的可能的解释是：在测试中，DXVK 趋向于将素材放到显存中，而 WineD3D 则并不是这样，同时前者在“显存”中消耗的体积比后者在内存中消耗的体积更大。在集显的“显存”中分配，实际上也是动态分配并使用了内存，从而从结果来说 DXVK 占用总内存更大。</p></div>',3);function C(P,M){const t=d("ExternalLinkIcon");return r(),c("div",null,[p,n("div",h,[_,D,n("p",null,[u,m,n("a",g,[e(" 修复非想天则特效变成一根线 BUG 的补丁 - d3d9_0.4.2 wined3d_9.4-staging【2024-3-10】.zip"),i(t)])]),X]),s(`
::: details 特效变成一根线，但是Win7
是 win7 的话，下这个 https://downloads.fdossena.com/geth.php?r=wined3d-recommended7 
:::
`),n("details",f,[v,n("div",W,[V,E,b,n("ul",null,[n("li",null,[e("d3d9.dll: mod 加载器，加入了加载自定义 DirectX 库的支持。"),n("a",w,[e("d3d9 ModLoader_0.4.2 的源码"),i(t)])]),n("li",null,[e("d3d9_custom.dll: “自定义”的 d3d9 接口，"),n("a",B,[e("来自 fdossena 下载的 WineD3D"),i(t)])]),n("li",null,[e("wined3d.dll: 前一个文件的依赖项。"),n("a",K,[e("WineD3D For Windows Build Scripts 源码"),i(t)])])]),n("div",I,[x,n("p",null,[e("由于不明原因，在较新的 Intel 集显及其驱动上，微软提供的 DirectX 实现会将某些图像素材错误地渲染成一根（一些）细线。根据一些用户所说，"),n("a",G,[e("DXVK 可以把它们正确地渲染出来"),i(t)]),e("。")]),k,A]),U])]),s(`
::: tip 解决办法
1、右键计算机，管理，设备管理器，显示设备，确认电脑是否有**独立显卡**，若有则可以使用独立显卡运行游戏（百度）

2、若只有 XXX Graphic（**核显**），则可以尝试右键，属性，**回滚驱动程序**，此方法对某些人的设备可能有效，**也可能无效**，若无效可再重新更新显卡驱动

**3、没办法了，除非加独显或者换CPU换电脑，否则就只能忍受特效显示的问题了**
:::

::: caution 反面教材 
**下面这些电脑配置，除非加独显或者换CPU换电脑，否则就只能忍受特效显示的问题了**

CPU：Intel® 12th Gen Core i7-12700H  （首次出现时间 2022-11）
核显：Intel® Iris® Xe Graphics

CPU：Intel® N95 x86 Family 6 Model 14 Stepping 0  （首次出现时间 2023-02）
核显：Intel® UHD Graphics

![像这种新的硬件设备，最低的驱动都没办法](https://bu.dusays.com/2024/01/21/65acc4f46c201.webp =600x)

:::
`)])}const S=l(a,[["render",C],["__file","MissingGraphic.html.vue"]]);export{S as default};
