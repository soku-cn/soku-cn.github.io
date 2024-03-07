import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as a,c as s,a as t,e,b as n,f as i}from"./app-r6XSI-e-.js";const c={},l=t("p",null,"如果你看不懂这个标题，那么你应该不需要用到本篇内容。",-1),h=t("p",null,"本篇内容是关于如何在 GNU/Linux 使用 wine 运行非想天则及相关程序的。",-1),u=t("h1",{id:"安装-wine-并运行带-mod-的非想天则-包括新则",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#安装-wine-并运行带-mod-的非想天则-包括新则","aria-hidden":"true"},"#"),e(" 安装 Wine 并运行带 Mod 的非想天则（包括新则）")],-1),p=t("p",null,"Wine 是类 Unix 系统上运行 Windows 程序的兼容层。",-1),_={href:"https://wiki.winehq.org/Debian",target:"_blank",rel:"noopener noreferrer"},g={href:"https://wiki.winehq.org/Fedora",target:"_blank",rel:"noopener noreferrer"},f={href:"https://wiki.winehq.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/lutris/lutris",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>运行 <code>winecfg</code>，在函数库（<code>Libraries</code>）选项卡中添加 <code>d3d9.dll</code> 的配置，设为“原装先于内建”（native, builtin），之后在非想天则目录里运行 <code>wine th123.exe</code> 就可以打则了（在确认能够正常运行前请先在虚拟终端中运行，而非直接在文件管理器中点击运行，以便获取日志定位可能存在的问题）。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>若不使用 Mod，那么不需要进行上面这个设置。非想天则的 mod 是通过劫持 <code>d3d9.dll</code> 来加载的，因此需要配置 Wine 让它此时优先使用 mod 加载器的 <code>d3d9.dll</code>。亦可在环境变量 <code>WINEDLLOVERRIDES=d3d9=n,b</code> 下启动非想天则来做到这一点，反过来说当需要在同一路径下使用原版非想天则时，使用环境变量 <code>WINEDLLOVERRIDES=d3d9=b,n</code> 来运行即可。</p></div><p>此外，<strong>请务必启用 ChainCFix mod！</strong> 详见<a href="#%E8%95%BE%E7%B1%B3%E8%8E%89%E4%BA%9A-c-%E9%93%BE%E4%B8%8D%E5%90%8C%E6%AD%A5%E3%80%81c-%E9%93%BE%E5%8F%98%E6%88%90%E4%B8%8D%E6%AD%A3%E5%B8%B8%E7%9A%84%E7%9F%AD%E9%93%BE">下文</a>。</p><p>若使用中遇到问题可查询下面的文档，若下面文档也未涵盖或无法解决你的问题请向我们反馈。</p><h1 id="已知问题-有解决方案" tabindex="-1"><a class="header-anchor" href="#已知问题-有解决方案" aria-hidden="true">#</a> 已知问题（有解决方案）</h1><h2 id="游戏一般性问题" tabindex="-1"><a class="header-anchor" href="#游戏一般性问题" aria-hidden="true">#</a> 游戏一般性问题</h2><h3 id="运行带-mod-的非想天则时出现-0108-err-sync-rtlpwaitforcriticalsection-section-7bc6c3c0-dlls-ntdll-loader-c-的报错-标准错误输出-游戏无法启动" tabindex="-1"><a class="header-anchor" href="#运行带-mod-的非想天则时出现-0108-err-sync-rtlpwaitforcriticalsection-section-7bc6c3c0-dlls-ntdll-loader-c-的报错-标准错误输出-游戏无法启动" aria-hidden="true">#</a> 运行带 Mod 的非想天则时出现 <code>0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 &quot;dlls/ntdll/loader.c…</code> 的报错（标准错误输出），游戏无法启动</h3><p>完整报错为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 &quot;dlls/ntdll/loader.c: loader_section&quot; wait timed out in thread 0108, blocked by 0024, retrying (60 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是 wine 的 bug，但在最新版中已经修复。若遇到这种情况，检查你的 wine 版本是不是在 8.1~8.8 范围内。若是，尝试换用稳定版或 WineQH 最新的测试版包。</p><h3 id="运行则的终端被-0160-fixme-d3d-wined3d-swapchain-present-ignoring-flags-0x1-刷屏" tabindex="-1"><a class="header-anchor" href="#运行则的终端被-0160-fixme-d3d-wined3d-swapchain-present-ignoring-flags-0x1-刷屏" aria-hidden="true">#</a> 运行则的终端被 <code>0160:fixme:d3d:wined3d_swapchain_present Ignoring flags 0x1.</code> 刷屏</h3><p>在环境变量 <code>WINEDEBUG=fixme-d3d</code> 下运行非想天则可以关闭这个警告的输出。</p><h3 id="打则时一些图像-比如机体、弹幕-变为白色矩形-终端被-01b8-err-d3d-resource-init-out-of-adapter-memory-刷屏" tabindex="-1"><a class="header-anchor" href="#打则时一些图像-比如机体、弹幕-变为白色矩形-终端被-01b8-err-d3d-resource-init-out-of-adapter-memory-刷屏" aria-hidden="true">#</a> 打则时一些图像（比如机体、弹幕）变为白色矩形，终端被 <code>01b8:err:d3d:resource_init Out of adapter memory.</code> 刷屏</h3><p>尤其发生在进入了大厅 mod 的 VS NETWORK 页面后；此外也可能在打街机模式或者故事模式的过程中出现。</p>`,14),x={href:"https://github.com/doitsujin/dxvk",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"set-video-memory.reg",-1),w=t("code",null,"wine regedit set-video-memory.reg",-1),v=i(`<div class="language-reg line-numbers-mode" data-ext="reg"><pre class="language-reg"><code>Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Software\\Wine\\Direct3D]
&quot;VideoMemorySize&quot;=&quot;1024&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="蕾米莉亚-c-链不同步、c-链变成不正常的短链" tabindex="-1"><a class="header-anchor" href="#蕾米莉亚-c-链不同步、c-链变成不正常的短链" aria-hidden="true">#</a> 蕾米莉亚 C 链不同步、C 链变成不正常的短链</h3><p>具体表现为：</p><ul><li>网络对战中使用若干次蕾米莉亚 C 链（不管是哪一方使用）后两方不同步</li><li>蕾米莉亚 C 链变为不正常的短链，攻击效果消失/改变</li></ul>`,4),y={href:"https://gitee.com/sanhuizhuan/soku_giuroll_cn/releases",target:"_blank",rel:"noopener noreferrer"},W=t("p",null,[e("若因为某些原因需要打无 Mod 的非想天则，那么请使用 "),t("code",null,"WINEDEBUG=trace+heap"),e(" 环境变量来启动非想天则，触发概率几乎变为 0（不确定是不是确实变为 0 了）。")],-1),k=t("h3",{id:"运行非想天则时弹出-dsound-相关错误",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#运行非想天则时弹出-dsound-相关错误","aria-hidden":"true"},"#"),e(" 运行非想天则时弹出 DSound 相关错误")],-1),B={href:"https://wiki.archlinux.org/title/wine#Sound",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/lutris/docs/blob/master/WineDependencies.md",target:"_blank",rel:"noopener noreferrer"},D=i('<h2 id="联机大厅相关" tabindex="-1"><a class="header-anchor" href="#联机大厅相关" aria-hidden="true">#</a> 联机大厅相关</h2><p>遇到问题可以对照以下表格更新大厅</p><table><thead><tr><th style="text-align:left;">大厅可能遇到的问题</th><th style="text-align:left;">首次修复问题的大厅mod版本</th></tr></thead><tbody><tr><td style="text-align:left;">Host 或使用 host list 时报 SSL 相关错误</td><td style="text-align:left;">0.6.4</td></tr><tr><td style="text-align:left;">大厅内无法用中文输入法聊天（Wine&gt;=8.8）</td><td style="text-align:left;">0.6.5</td></tr><tr><td style="text-align:left;">加入联机大厅时连接超时或长时间卡在 Joining</td><td style="text-align:left;">0.6.6.1</td></tr></tbody></table><p>（总而言之把大厅 mod 更新到 0.6.6.1 或以上的最新版就好）</p><p>在聊天框打字时若遇到光标与文字之间对不齐的问题（尤其文字中包含英文字母时），可使用 <code>FREETYPE_PROPERTIES=&quot;truetype:interpreter-version=35&quot;</code> 环境变量来运行，或使用低于 <code>7.17</code> 版本的 Wine。</p><p>若遇其他问题请向我们进行反馈。</p><h2 id="swarm-相关" tabindex="-1"><a class="header-anchor" href="#swarm-相关" aria-hidden="true">#</a> Swarm 相关</h2>',7),S={href:"https://github.com/evshiron/swarm-ng-build/releases",target:"_blank",rel:"noopener noreferrer"},L=i('<h2 id="启动器相关" tabindex="-1"><a class="header-anchor" href="#启动器相关" aria-hidden="true">#</a> 启动器相关</h2><p>在终端中使用 <code>wine 东方非想天启.exe</code> 或类似方式运行非想天启启动器时，可能会弹出 <code>OSError: (Errno 9) Bad file descriptor</code> 的错误而无法启动。遇此问题可以直接在图形界面点击运行，或者在终端中将标准输出重定向到 <code>/dev/null</code>（如 <code>wine 东方非想天启.exe &gt; /dev/null</code>）。</p><figure><img src="https://bu.dusays.com/2024/01/21/65acf18dc1dc4.webp" alt="Linux Mods" width="400" tabindex="0" loading="lazy"><figcaption>Linux Mods</figcaption></figure>',3);function R(q,N){const r=o("ExternalLinkIcon");return a(),s("div",null,[l,h,u,p,t("p",null,[e("以 Debian、Fedora、Ubuntu 为例，你可以安装发行版维护的 Wine 包，也可以安装 WineHQ 提供的包（"),t("a",_,[e("Debian"),n(r)]),e("、"),t("a",g,[e("Fedora"),n(r)]),e("、"),t("a",f,[e("Ubuntu"),n(r)]),e("），也可以使用 "),t("a",m,[e("Lutris"),n(r)]),e(" 提供的经过了优化的 Wine 包。")]),b,t("p",null,[e("使用 "),t("a",x,[e("dxvk"),n(r)]),e("，或将下面的注册表配置保存为 "),E,e(" 并运行 "),w]),v,t("p",null,[e("源于非想天则的数组越界 bug，但在 Wine 中触发的概率远高于在 Windows 中触发的概率。务必启用 ChainCFix mod，该 mod 修复了这个问题。非想天启启动器的最新 giuroll 更新包中包含了这个 mod，此外亦可在 "),t("a",y,[e("https://gitee.com/sanhuizhuan/soku_giuroll_cn/releases"),n(r)]),e(" 手动获取。")]),W,k,t("p",null,[e("可能是由于 Wine 缺少音频库的依赖。可尝试根据 "),t("a",B,[e("Wine 的 ArchWiki 页面"),n(r)]),e("或 "),t("a",C,[e("Lutris 给出的 Wine 依赖"),n(r)]),e("补齐依赖。")]),D,t("p",null,[e("直接使用"),t("a",S,[e("Swarm-NG仓库"),n(r)]),e("的Linux发行版即可。")]),L])}const A=d(c,[["render",R],["__file","Linux.html.vue"]]);export{A as default};
