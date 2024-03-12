import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c as l,a as n,e as a,b as o,d as c,f as d}from"./app-ZeU_lBTv.js";const r={},p=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"问题原因"),n("p",null,[n("strong",null,"这是因为你的新 Intel CPU 新核显，新版本 Intel 核显的驱动程序，对非想天则这个旧游戏有 Bug")]),n("figure",null,[n("img",{src:"https://bu.dusays.com/2024/01/21/65acc4c45b122.webp",alt:"如：灵梦 JA 的黄色护符特效变成一根线，早苗 C 弹星星变成一根线等",width:"500",tabindex:"0",loading:"lazy"}),n("figcaption",null,"如：灵梦 JA 的黄色护符特效变成一根线，早苗 C 弹星星变成一根线等")])],-1),_={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"解决办法",-1),h=n("p",null,[n("strong",null,"感谢 Hagb 大佬提供的补丁，修复了新设备 Intel CPU 核显+高版本驱动导致的非想天则特效变成一根线的问题，目前处于测试阶段，有什么问题可以加作者QQ 571499084 反馈")],-1),g=n("strong",null,"点下方链接可下载修复补丁",-1),m=n("br",null,null,-1),E={href:"https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/%E4%BF%AE%E5%A4%8D%E9%9D%9E%E6%83%B3%E5%A4%A9%E5%88%99%E7%89%B9%E6%95%88%E5%8F%98%E6%88%90%E4%B8%80%E6%A0%B9%E7%BA%BFBUG%E7%9A%84%E8%A1%A5%E4%B8%81-d3d9_0.4.2%20wined3d_9.4-staging%E3%80%902024-3-10%E3%80%91.zip",target:"_blank",rel:"noopener noreferrer"},v=d(`<div class="hint-container important"><p class="hint-container-title">补丁使用方法</p><p><strong>把压缩包内 th123 文件夹里的 3 个 dll 文件，放到你的游戏文件夹内，和 th123.exe 同目录</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>d3d9.dll
d3d9_custom.dll
wined3d.dll
th123.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这四个文件处于同一个文件夹内，即可</strong></p></div>`,1);function b(f,x){const e=s("ExternalLinkIcon");return i(),l("div",null,[p,n("div",_,[u,h,n("p",null,[g,m,n("a",E,[a(" 修复非想天则特效变成一根线 BUG 的补丁 - d3d9_0.4.2 wined3d_9.4-staging【2024-3-10】.zip"),o(e)])]),v]),c(`
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
`)])}const C=t(r,[["render",b],["__file","MissingGraphic.html.vue"]]);export{C as default};
