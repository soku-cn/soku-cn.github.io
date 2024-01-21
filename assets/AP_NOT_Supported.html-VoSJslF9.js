import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,e as n}from"./app-8zTuaFbO.js";const c={},o=n('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>大厅0.6.3更新：可以在大厅内使用 Swarm 来联机了，所以不支持 AP 也没有任何关系。</strong></p></div><div class="hint-container info"><p class="hint-container-title">检测自己的网络是否支持AP</p><p>1、点这个 autopunch检测-check-gui.exe 检测</p><figure><img src="https://bu.dusays.com/2024/01/21/65ac9ebf4ee9f.webp" alt="ap-check" width="300" tabindex="0" loading="lazy"><figcaption>ap-check</figcaption></figure><p>2、如果是这样是检测失败，就再试一次</p><figure><img src="https://bu.dusays.com/2024/01/21/65aca10f90429.webp" alt="Try Again" width="300" tabindex="0" loading="lazy"><figcaption>Try Again</figcaption></figure><p>3、是这样就说明 支持AP</p><figure><img src="https://bu.dusays.com/2024/01/21/65aca1919e2f4.webp" alt="AP Supported" width="300" tabindex="0" loading="lazy"><figcaption>AP Supported</figcaption></figure><p>4、是这样就说明 不支持AP</p><figure><img src="https://bu.dusays.com/2024/01/21/65aca16127d2a.webp" alt="AP NOT Supported" width="300" tabindex="0" loading="lazy"><figcaption>AP NOT Supported</figcaption></figure></div><div class="hint-container tip"><p class="hint-container-title">为什么我显示不支持？</p><p>网络被各种路由或者运营商套娃了，如一些餐厅网，校园网（浏览器网页登陆验证而非宽带拨号），酒店网，公司网和插流量卡的移动WIFI，手机流量等，就会因为被多层NAT设备套娃或者防火墙限制而无法穿透，就会不支持了<br> 或者可能你没给Windows防火墙点允许 <strong>（弹出问你是否允许访问网络，以及右侧弹出问你是否希望被网络内其他设备发现的的弹窗，点专用网络+公用网络，点允许）</strong></p><p><strong>我还能抢救吗？</strong><br> 可以试一试看，<strong>得花点时间和耐心</strong>，如果你是在用你自己的家庭网络，且可以登陆后台操作的话。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>其他情况比如校园网（<code>10.x.x.x</code> 浏览器网页登陆验证），手机热点，酒店公司餐厅等公共场所<br> 直接不用继续看了，没办法去操作的。</p></div><h3 id="下面尝试解决ap不支持的问题" tabindex="-1"><a class="header-anchor" href="#下面尝试解决ap不支持的问题" aria-hidden="true">#</a> 下面尝试解决AP不支持的问题</h3><div class="hint-container info"><p class="hint-container-title">查看路由网关路线</p><p>按win+r然后粘贴这个运行 <code>cmd /k tracert -4 -d -h 6 baidu.com</code></p><figure><img src="https://bu.dusays.com/2024/01/21/65aca2c7b2cc4.webp" alt="tracert" width="400" tabindex="0" loading="lazy"><figcaption>tracert</figcaption></figure><p>此示例中，他有两个路由器<code>（192.168.88.1 和 192.168.1.1）</code>和一个光猫（天翼网关）<code>（100.xxx）</code><br>  <br> 再输入 <code>ipconfig</code> 可查看本机内网IP并二次确认自己电脑的<strong>上级路由器（网关</strong>）</p><figure><img src="https://bu.dusays.com/2024/01/21/65aca347da187.webp" alt="示例中内网IP为192.168.88.4，默认网关为192.168.88.1" width="400" tabindex="0" loading="lazy"><figcaption>示例中内网IP为192.168.88.4，默认网关为192.168.88.1</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">第一种办法：直接让自己电脑接到拨号源头（如果是光猫拨号就接到光猫上，如果是光猫桥接路由器拨号，就接到对应路由器上）</p><p>根据上面得到的 <strong>默认网关</strong>，在浏览器地址栏中输入并回车（<strong>注意别变成百度搜索这个IP了</strong>）</p><figure><img src="https://bu.dusays.com/2024/01/21/65acab1ad1174.png" alt="我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）" width="400" tabindex="0" loading="lazy"><figcaption>我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）</figcaption></figure><p>先不需要登陆，确保连接后电脑能上网<br> 然后再次做tracert与ipconfig进行确认<br> 同时进行AP检测，一般是可以支持的了</p></div><div class="hint-container info"><p class="hint-container-title">还是不行的话，参考下面设置光猫桥接路由拨号或者NAT端口转发</p><p>顺便比对品牌和网线确认电脑是连接到哪个路由器，默认账号密码应该在路由器上有贴，登陆后进入后台</p><figure><img src="https://bu.dusays.com/2024/01/21/65acac7ea8d64.webp" alt="示例，成功登陆路由器后台" width="700" tabindex="0" loading="lazy"><figcaption>示例，成功登陆路由器后台</figcaption></figure><p>接下来找到并打开UPNP设置，<br> 设置 <strong>NAT端口转发或虚拟服务器</strong>（设置多个端口如10800、10801...10810，以后可能需要切换着用），<strong>协议选择UDP或者BOTH, ALL</strong>，输入自己的本机内网IP（在 ipconfig 里查看）</p><figure><img src="https://bu.dusays.com/2024/01/21/65acad7a27a86.webp" alt="路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有" width="400" tabindex="0" loading="lazy"><figcaption>路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有</figcaption></figure><p><strong>设置完毕后再进行AP检测，可能有效，也可能无效。还是无效就算了别管了</strong></p><p>有效的话，在DHCP设置里给自己的电脑（根据内网IP判断哪个设备是自己的电脑）设置静态保留内网IP，这是为了防止每次重启网络后电脑的内网IP变化</p><figure><img src="https://bu.dusays.com/2024/01/21/65acadf03cbc1.webp" alt="不同设备的设置界面关键词可能不一样，DHCP，静态，保留" width="400" tabindex="0" loading="lazy"><figcaption>不同设备的设置界面关键词可能不一样，DHCP，静态，保留</figcaption></figure><p>之后应该就没什么问题了</p></div>',8),e=[o];function p(r,s){return t(),a("div",null,e)}const f=i(c,[["render",p],["__file","AP_NOT_Supported.html.vue"]]);export{f as default};
