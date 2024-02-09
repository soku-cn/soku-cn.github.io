import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as l,a as t,d as o,b as e,e as a}from"./app-JA2YIPQf.js";const c={},p=a('<div class="hint-container info"><p class="hint-container-title">方法一、通过网线直连两台电脑玩游戏</p><ul><li>首先使用网线直接两头互联两台电脑</li><li>按 Win+R 输入 <strong>ncpa.cpl</strong> 回车</li><li>找到本地连接(以太网)，右键-属性-双击 <code>Internet协议版本4</code>，把自动获取IP地址改成手动设置，并设置IP地址</li></ul><p>例如：</p><ul><li><p>A 电脑设置 IP 地址 192.168.1.100 网关和DNS可以不设置</p></li><li><p>B 电脑设置 IP 地址 192.168.1.101 网关和DNS可以不设置</p></li><li><p><strong>注意 A 和 B 的 IP 地址不能相同</strong></p></li><li><p><strong>注意：结束本地联机后，记得把手动设置的IP改回自动获取IP，否则会无法联网。</strong></p></li></ul><figure><img src="https://bu.dusays.com/2024/01/21/65acbc2fa7e61.webp" alt="手动设置 IP" width="800" tabindex="0" loading="lazy"><figcaption>手动设置 IP</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">方法二、通过路由器连接两台电脑玩游戏</p><p>使用 <strong>网线</strong> 或 <strong>WIFI</strong> 或 <strong>热点</strong> 或 <strong>路由器</strong> 连接两台电脑，将两台电脑连接上同一个局域网内</p><p><strong>然后分别在两台电脑上 Win+R 输入 cmd，并在 cmd 黑框内输入 ipconfig，查看对应网络（以太网适配器 以太网）下的 ipv4 地址，并尝试 ping 对方电脑的地址，ping 通说明OK。（确认双方的默认网关是同一个IP，相同说明是连接的同一个路由器）</strong></p><figure><img src="https://bu.dusays.com/2024/01/21/65acbede3a8ff.webp" alt="ipconfig 查看本机IP" width="500" tabindex="0" loading="lazy"><figcaption>ipconfig 查看本机IP</figcaption></figure><p>若连接失败，可以尝试<strong>换另一方建主</strong>，或者在<strong>检查关闭防火墙。</strong></p><figure><img src="https://bu.dusays.com/2024/01/21/65acbef5331e0.webp" alt="关闭防火墙" width="600" tabindex="0" loading="lazy"><figcaption>关闭防火墙</figcaption></figure><p><code>例如：若A 电脑的 IP 显示为 192.168.100.101 使用默认 10800 端口建立主机，B 电脑就可以使用 192.168.100.101:10800 来进行连接</code></p><p><strong>此时两台电脑也可以分别正常上网，不影响本地局域网联机</strong></p></div>',2),d={class:"hint-container info"},g=t("p",{class:"hint-container-title"},"方法三、在一台电脑上用两个键盘玩游戏",-1),h=t("p",null,[o("使用软件 "),t("strong",null,"Keyboard Splitter"),o("（将第二个键盘虚拟成手柄，或者你本身就有手柄）")],-1),u=t("p",null,[t("strong",null,"注意：进入 VS PLAYER 模式，按C给2P键重新设置键位位为手柄按键即可。")],-1),_=t("strong",null,"软件下载链接",-1),f=t("br",null,null,-1),b={href:"https://pan.baidu.com/s/1ClhNvt-yotQiIj4AgRsiMw?pwd=2w6n",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/djlastnight/KeyboardSplitterXbox/releases/tag/",target:"_blank",rel:"noopener noreferrer"},w=t("strong",null,"使用说明、参考：",-1),I=t("br",null,null,-1),v=t("br",null,null,-1),y={href:"https://www.bilibili.com/video/BV1hT411h7uw/",target:"_blank",rel:"noopener noreferrer"},P=t("br",null,null,-1),x={href:"https://www.youtube.com/watch?v=_hvoFs_amT8",target:"_blank",rel:"noopener noreferrer"};function k(S,B){const n=s("ExternalLinkIcon");return r(),l("div",null,[p,t("div",d,[g,h,u,t("p",null,[_,o(":"),f,o(" （汉化版，内含使用说明）"),t("a",b,[o("https://pan.baidu.com/s/1ClhNvt-yotQiIj4AgRsiMw?pwd=2w6n"),e(n)])]),t("p",null,[o("（原Github地址）"),t("a",m,[o("https://github.com/djlastnight/KeyboardSplitterXbox/releases/tag/"),e(n)])]),t("p",null,[w,I,o(" 《格斗游戏本地键盘双人，多个键盘分别模拟多个控制器，KeyboardSplitter 软件使用演示 Keyboard Splitter Xbox》"),v,t("a",y,[o("https://www.bilibili.com/video/BV1hT411h7uw/"),e(n)])]),t("p",null,[o("《Touhou How To : Multiplayer with 2 keyboards on same PC》"),P,t("a",x,[o("https://www.youtube.com/watch?v=_hvoFs_amT8"),e(n)])])])])}const V=i(c,[["render",k],["__file","OfflineGame.html.vue"]]);export{V as default};
