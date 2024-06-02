import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as r,a as e,d as t,b as i,e as s}from"./app-Bzhbrbrx.js";const c={},d=s(`<div class="hint-container info"><p class="hint-container-title">Causes</p><p>It&#39;s because <strong>New Intel CPU&#39;s Integrated Graphics&#39;s Driver</strong> don&#39;t support well on old games like Soku.</p><p>Devices Examlpes</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CPU：Intel® 12th Gen Core i7-12700H
GPU：Intel® Iris® Xe Graphics

CPU：Intel® N95 x86 Family 6 Model 14 Stepping 0
GPU：Intel® UHD Graphics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bu.dusays.com/2024/01/21/65acc4c45b122.webp" alt="Issue examples: Reimu&#39;s J5A, Sanae&#39;s 5C" width="400" tabindex="0" loading="lazy"><figcaption>Issue examples: Reimu&#39;s J5A, Sanae&#39;s 5C</figcaption></figure></div>`,1),p={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"Solution",-1),h={href:"https://discord.com/channels/167593473854144512/253944555831820288/1217081294194737173",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="hint-container important"><p class="hint-container-title">Install the Ptach</p><p>drop the 3 content dll files besides th123.exe</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>d3d9.dll
d3d9_custom.dll
wined3d.dll
th123.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container caution"><p class="hint-container-title">Known side-effects</p><ul><li>Have problem with OBS Game Source Capture, <strong>please use Window Capture Method instead</strong>.</li><li>Please don&#39;t install the fix patch if you don&#39;t have such problem, it may cause game not starting if you don&#39;t have such Effect Issue!</li></ul></div></div>`,1),g={class:"hint-container details"},D=e("summary",null,"一些技术解释 - 修复非想天则特效变成一根线BUG的补丁",-1),_={class:"hint-container note"},v=e("p",{class:"hint-container-title"},"Note",-1),f=e("p",null,[e("strong",null,"虽然在某些较新的 Intel 集显驱动下非想天则有特效缺失，但使用其他第三方 DirectX 实现（如 WineD3D、DXVK）能够绕过这个问题。")],-1),I=e("p",null,"补丁包文件：",-1),b={href:"https://github.com/SokuDev/SokuMods/pull/25",target:"_blank",rel:"noopener noreferrer"},x={href:"https://downloads.fdossena.com/geth.php?r=wined3dst-latest",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/adolfintel/wined3d4win",target:"_blank",rel:"noopener noreferrer"},X={class:"hint-container info"},k=e("p",{class:"hint-container-title"},"一些细节",-1),w={href:"https://community.intel.com/t5/Graphics/Iris-Xe-Graphics-doesn-t-run-DirectX-9-game-properly/m-p/1444706#M112728",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"DXVK 一般在 Wine 上使用（这是一个用于在类 unix 系统上运行 Windows 程序的兼容层）。在 Wine 中，我们一般用 WineD3D 或者 DXVK 而非微软的来作为 DirectX 的实现。它们也都是兼容层，即它们自己提供 DirectX API 被应用调用，而后它们会把这些 DirectX 形式的调用“翻译”成其他类型的 API 并调用之。DXVK 基于 Vulkan，WineD3D 则基于 OpenGL。（即，应用程序把 DXVK 作为 DirectX 接口调用，而 DXVK 则调用 Vulkan 来完成和对应 DirectX 调用等价的事情；WineD3D 同理。）",-1),W=e("p",null,"这些兼容层虽然是为 Wine 提供的，但实际上也是基于 Windows API 编写，理论上来说保留了对 Windows 的兼容性，因此是有可能用在 Windows 上的。于是我分别尝试了 DXVK 和 WineD3D，发现它们都能在我的 N 卡上良好运行，因此我把它们发给受 DirectX 渲染问题困扰的用户让他们测试（直接把它们在系统层面应用是有风险的，所以要配合专门为此进行了修改的非想天则 mod 加载器，来单独给非想天则加载这些库）。",-1),S=s('<p><strong>DXVK 和 WineD3D 两种方案默认配置下的测试结果</strong></p><div class="hint-container info"><p class="hint-container-title">可用性</p><ul><li>WineD3D：在 Wine 上是默认选择；而在所有我所知的受 DirectX 图像缺失问题的设备上，基于 WineD3D 的方案也都能在 Windows 开箱即用，然后问题也确实消失了。此外，WineD3D 也能在多显卡的环境（比如集显+独显）下，遵循用户手动指定的显卡。不过有的 AMD 集显用户反映使用了之后游戏无法正常启动。（不过问题不大，这个解决方案本来也不是面向他们的。）</li><li>DXVK：在 Wine 社区中被普遍认为是性能更好的选择，因此许多 Wine 发行版会把 DXVK 作为默认的 DirectX 实现。支持 Vulkan 的硬件和驱动没有那么多，因此 DXVK 的支持范围自然也小一些。有用户反馈他的设备（使用 Intel 集显）无法直接使用 DXVK。</li></ul></div><div class="hint-container info"><p class="hint-container-title">性能</p><p>大家普遍认为 DXVK 性能比 WineD3D 的好，但这点至少在我们这里的目标用户那儿没有体现出来：我询问了几个用户，结果都是 WineD3D 的 GPU 占用率和 DXVK 基本相当，而 DXVK 占用的内存却比 WineD3D 大不少。</p><p>关于性能相当的可能的解释是：Intel 对 OpenGL 的实现较好，达到了比较好的性能。（事实上，我的 N 卡上结果中，性能从好到坏依次为 DXVK、微软的实现、WineD3D，在数值上有较为明显的差别。）</p><p>关于内存占用的可能的解释是：在测试中，DXVK 趋向于将素材放到显存中，而 WineD3D 则并不是这样，同时前者在“显存”中消耗的体积比后者在内存中消耗的体积更大。在集显的“显存”中分配，实际上也是动态分配并使用了内存，从而从结果来说 DXVK 占用总内存更大。</p></div>',3);function V(C,P){const n=o("ExternalLinkIcon");return l(),r("div",null,[d,e("div",p,[u,e("p",null,[t("Thanks to Hagb making the "),e("a",h,[t("Effects Graphic Issue Fix Patch"),i(n)]),t(".")]),m]),e("details",g,[D,e("div",_,[v,f,I,e("ul",null,[e("li",null,[t("d3d9.dll: mod 加载器，加入了加载自定义 DirectX 库的支持。"),e("a",b,[t("d3d9 ModLoader_0.4.2 的源码"),i(n)])]),e("li",null,[t("d3d9_custom.dll: “自定义”的 d3d9 接口，"),e("a",x,[t("来自 fdossena 下载的 WineD3D"),i(n)])]),e("li",null,[t("wined3d.dll: 前一个文件的依赖项。"),e("a",G,[t("WineD3D For Windows Build Scripts 源码"),i(n)])])]),e("div",X,[k,e("p",null,[t("由于不明原因，在较新的 Intel 集显及其驱动上，微软提供的 DirectX 实现会将某些图像素材错误地渲染成一根（一些）细线。根据一些用户所说，"),e("a",w,[t("DXVK 可以把它们正确地渲染出来"),i(n)]),t("。")]),y,W]),S])])])}const N=a(c,[["render",V],["__file","MissingGraphic.html.vue"]]),T=JSON.parse(`{"path":"/en/FAQ/In-Games/MissingGraphic.html","title":"Soku Effects Graphic Issue","lang":"en-US","frontmatter":{"title":"Soku Effects Graphic Issue","icon":"circle-info","order":1,"editLink":false,"author":"三回転Tstar","date":"2024-03-10T00:00:00.000Z","description":"Causes It's because New Intel CPU's Integrated Graphics's Driver don't support well on old games like Soku. Devices Examlpes Issue examples: Reimu's J5A, Sanae's 5CIssue example...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wiki.514.live/FAQ/In-Games/MissingGraphic.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/en/FAQ/In-Games/MissingGraphic.html"}],["meta",{"property":"og:site_name","content":"Hisoutensoku Guide"}],["meta",{"property":"og:title","content":"Soku Effects Graphic Issue"}],["meta",{"property":"og:description","content":"Causes It's because New Intel CPU's Integrated Graphics's Driver don't support well on old games like Soku. Devices Examlpes Issue examples: Reimu's J5A, Sanae's 5CIssue example..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/01/21/65acc4c45b122.webp =400x"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T09:43:02.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T09:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Soku Effects Graphic Issue\\",\\"image\\":[\\"https://bu.dusays.com/2024/01/21/65acc4c45b122.webp =400x\\",\\"https://bu.dusays.com/2024/01/21/65acc4f46c201.webp =600x\\"],\\"datePublished\\":\\"2024-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T09:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1690871118000,"updatedTime":1717062182000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":4.89,"words":1468},"localizedDate":"March 10, 2024","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Causes</p>\\n<p>It's because <strong>New Intel CPU's Integrated Graphics's Driver</strong> don't support well on old games like Soku.</p>\\n<p>Devices Examlpes</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>CPU：Intel® 12th Gen Core i7-12700H\\nGPU：Intel® Iris® Xe Graphics\\n\\nCPU：Intel® N95 x86 Family 6 Model 14 Stepping 0\\nGPU：Intel® UHD Graphics\\n</code></pre></div><figure><img src=\\"https://bu.dusays.com/2024/01/21/65acc4c45b122.webp\\" alt=\\"Issue examples: Reimu's J5A, Sanae's 5C\\" width=\\"400\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Issue examples: Reimu's J5A, Sanae's 5C</figcaption></figure>\\n</div>"}`);export{N as comp,T as data};
