import{_ as i,r as l,o as c,c as r,a as n,d as s,b as a,w as o,e as t}from"./app-B3bqo3Gv.js";const d={},m=t('<h2 id="replaydnd-old基础功能简介-不带rep转mp4" tabindex="-1"><a class="header-anchor" href="#replaydnd-old基础功能简介-不带rep转mp4"><span>ReplayDnD-old基础功能简介（不带rep转mp4）</span></a></h2><div class="hint-container info"><p class="hint-container-title">ReplayDnD-old基础功能简介（不带rep转mp4）</p><ul><li>右键rep文件选择<strong>属性</strong>，<strong>打开方式</strong>设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了</li><li>rep文件可能要和th123.exe在同一个盘符内</li><li>将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）</li></ul></div><h2 id="新版replaydnd的rep转mp4视频功能" tabindex="-1"><a class="header-anchor" href="#新版replaydnd的rep转mp4视频功能"><span>新版ReplayDnD的Rep转mp4视频功能</span></a></h2>',3),k={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"新版ReplayDnD的Rep转mp4视频功能",-1),v={class:"hint-container warning"},h=n("p",{class:"hint-container-title"},"注意",-1),b=n("strong",null,[s("整合包内默认启用 "),n("code",null,"ReplayDnD-old"),s(" 旧版，想要使用新版的功能请手动调整")],-1),y=n("strong",null,"如何开关配置 mod",-1),_=n("li",null,[n("p",null,"使用时可能会偶尔冒出dll被禁用的弹窗，点确认关掉然后忽略即可，无不良影响")],-1),g=n("li",null,[n("p",null,"如果一次性同时运行多个录制，可能会因内存不足或CPU占用过高等引发一系列问题，所以请根据自己的电脑性能资源量力而行")],-1),w=t('<ul><li><p><strong>切换为新版后，先打开一遍游戏</strong>，然后以后右键则的rep文件就会多一个选项 <code>&quot;render to mp4 with soku&quot;</code>，点了就是开始录制了</p></li><li><p><strong>想要同时录制多个rep，请分别在每个rep文件上右键。</strong> <mark>不要多选rep文件一次性右键点录制，会出现问题</mark></p></li></ul><figure><img src="https://bu.dusays.com/2024/06/13/666ac232c75ff.gif" alt="ReplayDnD 快速录制 rep 为 mp4 展示.gif" width="400" tabindex="0" loading="lazy"><figcaption>ReplayDnD 快速录制 rep 为 mp4 展示.gif</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp" alt="游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)" width="400" tabindex="0" loading="lazy"><figcaption>游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)</figcaption></figure><div class="hint-container info"><p class="hint-container-title">ReplayDnD的Rep转mp4的特点</p><ol><li><strong>录制速度成倍数</strong>，不需要像录屏软件那样一比一时间录制；（标题栏可以看到，60fps为一倍速，120fps为二倍速，以此类推）</li><li><strong>可多线程录制</strong>，同时录制多个rep为mp4视频，互相之间不干扰，也不被电脑上其他音频干扰；</li><li>录制得到的视频尺寸为 640*480(则的游戏分辨率本来就这么大)，60F帧率，<strong>约5000~10000kbps码率</strong>，可配合改皮肤类mod录制</li><li><strong>注意使用录制功能后，游戏内Config的“FPS显示”会被关掉，导致左下角自己的输入延迟和右下角的帧率不显示，记得自己手动再打开</strong></li><li>根据我自己的使用经验，同时开很多个同时录导致满负荷的话，偶尔会录出来音质较差（如妖梦的B弹幕）的情况，可以考虑重新录制</li><li>我自己电脑目前环境（AMD Ryzen 5500U）录出来的视频的伽马值会偏高（画面异常明亮）。尝试装了最新A卡驱动后，录出来的正常了，但是我整个画面的伽马值反而变成偏高了，懒得深究了。</li></ol></div><h3 id="新版replaydnd的rep转mp4视频功能的已知bug" tabindex="-1"><a class="header-anchor" href="#新版replaydnd的rep转mp4视频功能的已知bug"><span>新版ReplayDnD的Rep转mp4视频功能的已知BUG</span></a></h3>',5),f={class:"hint-container caution"},D=n("p",{class:"hint-container-title"},"新版ReplayDnD的Rep转mp4视频功能的已知BUG",-1),R=n("li",null,[n("p",null,[n("strong",null,"Win7不能用，会报错")])],-1),x=n("li",null,[n("p",null,[n("strong",null,"部分 Nvida 系列显卡可能会有以下情况不能使用，原因和解决办法未知")]),n("ul",null,[n("li",null,"右键点 render 后游戏的标题栏无信息或自动关闭，生成0KB~几十KB的无效mp4文件"),n("li",null,"点了后录了一小段然后卡死不动"),n("li",null,"第一次能正常录制，之后就一直出问题了")])],-1),q=n("li",null,[n("p",null,[n("strong",null,"部分 Intel 系列核显可能会有“右键点 render 后如下图所示报错”的情况不能使用，原因和解决办法未知")])],-1),C=n("figure",null,[n("img",{src:"https://bu.dusays.com/2024/06/13/666abd762ca5e.png",alt:"可能是 Intel 系列核显就会这样报错",width:"400",tabindex:"0",loading:"lazy"}),n("figcaption",null,"可能是 Intel 系列核显就会这样报错")],-1),F=n("h2",{id:"命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站"},[n("span",null,"命令行脚本流水线无人值守自动录制Rep文件为1080P视频上传至B站")])],-1),T={class:"hint-container info"},B=n("p",{class:"hint-container-title"},"需要用到的软件和工具",-1),P={href:"https://www.bandisoft.com/bandizip/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},I={href:"http://ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/HandBrake/HandBrake",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/biliup/biliup-rs/",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,[n("p",null,"在线转换10位时间戳的网页小工具，用于设置B站的定时发布（大于4小时，小于15天）")],-1),j={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},z=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"待添加的功能"),n("ul",null,[n("li",null,[n("p",null,"流水线列队，上传一个视频的同时（此时已不消耗性能资源）开始一条新的流水线")]),n("li",null,[n("p",null,"远程接收Rep文件或压缩包，解压并自动加入流水线队列")])])],-1),A=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"脚本使用方法说明"),n("p",null,[n("strong",null,[s("新建一个叫【非想天则Rep】的文件夹，将rep文件夹放入其中"),n("br"),s("点开rep文件夹，将其中一个rep文件拖拽到此bat上"),n("br"),s("就会把整个文件夹的rep文件 逐个录制+合并+压制+截图+上传+删除视频+归档rep和封面")])])],-1),M={class:"hint-container important"},N=n("p",{class:"hint-container-title"},"bat脚本文件内容需要注意更改的路径",-1),G=n("li",null,[n("p",null,[s("这是非想天则游戏th123文件夹的路径"),n("code",null,'set "TH123path=C:\\Users\\1\\Desktop\\【2024-06-24 完整游戏】\\th123"')])],-1),Z=n("li",null,[n("p",null,"ffmpeg路径环境变量设置，或者使用绝对路径")],-1),E=n("li",null,[n("p",null,[s("handbrake软件的路径，本例中直接用了绝对路径"),n("code",null,'"C:\\Users\\1\\Desktop\\HandBrakeCLI\\HandBrakeCLI.exe"'),s("，用环境变量应该也可以")])],-1),S={href:"https://handbrake.fr/docs/en/1.7.0/cli/cli-options.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://biliup.github.io/index.html",target:"_blank",rel:"noopener noreferrer"},K=t("<li><p>【注意】biliup软件的工作目录必须在自己的文件夹内，也就是CD到<code>C:\\Users\\1\\Desktop\\biliupR-v0.2.1-x86_64-windows\\</code>，这样才能正常读取Cookies登录信息，否则上传会失败！！！</p></li><li><p>biliup软件的路径，本例中直接用了绝对路径 <code>C:\\Users\\1\\Desktop\\biliupR-v0.2.1-x86_64-windows\\</code>，用环境变量应该也可以</p></li><li><p><code>--dtime</code> 是定时发布，后面接10位时间戳，默认不加该参数则不选择定时发布，<code>--tag</code> tag标签使用英文逗号隔开</p></li>",3),Q=t(`<div class="hint-container note"><p class="hint-container-title">bat脚本文件内容</p><div class="language-batch line-numbers-mode" data-ext="batch" data-title="batch"><pre class="language-batch"><code>	
<span class="token comment">rem 使用方法：新建一个叫【非想天则Rep】的文件夹，将rep文件夹放入其中，点开rep文件夹，将其中一个rep文件拖拽到此bat上，就会把整个文件夹的rep文件逐个录制+合并+压制+截图+上传+删除+归档</span>

<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">chcp</span> <span class="token number">65001</span></span>
<span class="token command"><span class="token keyword">setlocal</span></span>

<span class="token comment">rem 配置各个路径</span>
<span class="token comment">rem set &quot;TH123path=D:\\Project\\th123&quot;</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;TH123path=C:\\Users\\1\\Desktop\\【2024-06-24 完整游戏】\\th123&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;ffmpeg_path=C:\\Users\\1\\Desktop\\ffmpeg&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;HandBrakeCLI_path=C:\\Users\\1\\Desktop\\HandBrakeCLI&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;biliup_path=C:\\Users\\1\\Desktop\\biliupR-v0.2.1-x86_64-windows&quot;</span></span>


<span class="token comment">rem 执行文件夹内的全部rep文件，不管路径是否包含空格</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> 录制任务开始，<span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;【rep文件夹，工作路径】===%CD%&quot;</span></span>
	<span class="token command"><span class="token keyword">title</span> 录制中</span>
<span class="token command"><span class="token keyword">for</span> <span class="token variable">%%i</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>*.rep<span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;【Filename】===%%i&quot;</span>	</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token comment">rem 逐个执行</span>
	&quot;%TH123path%\\th123.exe&quot; /render &quot;%CD%\\%%i&quot;
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token punctuation">)</span>
	<span class="token command"><span class="token keyword">echo</span> 录制任务结束，<span class="token variable">%time%</span></span>
	
<span class="token comment">rem 合并得到 480P 视频</span>
<span class="token punctuation">(</span><span class="token command"><span class="token keyword">for</span> <span class="token variable">%%i</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>*.mp4<span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> file &#39;<span class="token variable">%%i</span>&#39;</span><span class="token punctuation">)</span> &gt; LIST.txt
%ffmpeg_path%\\ffmpeg.exe -f concat -safe 0 -i LIST.txt -c copy 【】Output.mp4


<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 下一步：传输【】Output.mp4给 Handbrake 得到 1080P</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 检测Handbrake的输出区是否已经存在视频，若有则是出现异常，暂停等待</span>
<span class="token command"><span class="token keyword">echo</span> 如果暂停了就是已经存在<span class="token string">&quot;%biliup_path%\\[1080P]_Output.mp4&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token string">&quot;%biliup_path%\\[1080P]_Output.mp4&quot;</span></span> <span class="token command"><span class="token keyword">pause</span></span>

	<span class="token command"><span class="token keyword">title</span> 制作1080P中</span>
<span class="token command"><span class="token keyword">echo</span> 传输给 Handbrake 得到 1080P</span>
&quot;%HandBrakeCLI_path%\\HandBrakeCLI.exe&quot; --preset-import-gui &quot;C:\\Users\\1\\Desktop\\REP5500K.json&quot; --aencoder copy:aac --width 1440 --height 1080 -i 【】Output.mp4 -o &quot;%biliup_path%\\[1080P]_Output.mp4&quot;
<span class="token command"><span class="token keyword">timeout</span> <span class="token parameter attr-name">/t</span> <span class="token number">2</span> </span>

<span class="token comment">rem 即将CD进入biliup工作路径，所以我们需要设一个RepDoneFolder变量，保存当前工作路径，后续需要返回此路径</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;RepDoneFolder=%CD%&quot;</span></span>

<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%RepDoneFolder%</span> &gt; RepDoneFolder.txt</span>

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 【<span class="token variable">%time%</span>】<span class="token number">1080</span>-DONE，即将进入CD biliup，准备截图和上传</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>


<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%biliup_path%</span></span>

	<span class="token command"><span class="token keyword">title</span> 制作封面中</span>
<span class="token command"><span class="token keyword">echo</span> 截图得到 Cover_[1080P]_Output.jpg</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> Cover_[<span class="token number">1920</span>]_Output.jpg</span> <span class="token punctuation">(</span>%ffmpeg_path%\\ffmpeg.exe -i [1080P]_Output.mp4 -ss 00:02:20 -frames:v 1 -q:v 2  -vf &quot;pad=1920:1080:240:00:black&quot; Cover_[1920]_Output.jpg<span class="token punctuation">)</span>

<span class="token command"><span class="token keyword">echo</span> 等待5s，以免上传时没有截图文件</span>
<span class="token command"><span class="token keyword">timeout</span> <span class="token parameter attr-name">/t</span> <span class="token number">5</span></span>

<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> Cover_[<span class="token number">1920</span>]_Output.jpg</span> <span class="token command"><span class="token keyword">pause</span></span>

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 开始上传，时间戳小于<span class="token number">15</span>天</span>
	<span class="token command"><span class="token keyword">title</span> 上传中</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%biliup_path%</span></span>
<span class="token command"><span class="token keyword">biliup</span>.exe upload <span class="token parameter attr-name">--limit</span> <span class="token number">5</span> <span class="token parameter attr-name">--tid</span> <span class="token number">17</span> <span class="token parameter attr-name">--cover</span> Cover_[<span class="token number">1920</span>]_Output.jpg <span class="token parameter attr-name">--title</span> 【非想天则Rep】 <span class="token parameter attr-name">--desc</span> <span class="token string">&quot;这是简介内容，我不知道该怎么在这里给简介换行&quot;</span> <span class="token parameter attr-name">--tag</span> <span class="token string">&quot;biliup,非想天则,东方,FXTZ,Replay&quot;</span>  [1080P]_Output.mp4</span>

	<span class="token command"><span class="token keyword">title</span> 上传完毕</span>

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 删除视频，归档rep文件</span>

<span class="token command"><span class="token keyword">move</span> Cover_[<span class="token number">1920</span>]_Output.jpg <span class="token variable">%RepDoneFolder%</span>\\Cover_Done.jpg</span>
<span class="token comment">rem move [1080P]_Output.mp4 %RepDoneFolder%\\[1080P]_Done.mp4</span>
<span class="token command"><span class="token keyword">del</span> <span class="token parameter attr-name">/q</span> [1080P]_Output.mp4</span>



<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> ----<span class="token variable">%time%</span>----上传完毕，回到CD <span class="token variable">%RepDoneFolder%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%RepDoneFolder%</span></span>

<span class="token command"><span class="token keyword">del</span> <span class="token parameter attr-name">/Q</span> *.mp4</span>

<span class="token command"><span class="token keyword">cd</span> ..</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;!RepDoneFolder&quot;</span></span> <span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;!RepDoneFolder&quot;</span></span>

<span class="token command"><span class="token keyword">set</span> <span class="token variable">DateTimeForLog</span><span class="token operator">=</span><span class="token variable">%date:~0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%date:~5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%date:~8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;DateTimeForLog=%DateTimeForLog: =0%&quot;</span></span>

<span class="token command"><span class="token keyword">xcopy</span>  <span class="token parameter attr-name">/E</span> <span class="token variable">%RepDoneFolder%</span>\\  .\\!RepDoneFolder\\<span class="token variable">%DateTimeForLog%</span>\\</span>

<span class="token command"><span class="token keyword">rmdir</span>  <span class="token parameter attr-name">/s</span> <span class="token parameter attr-name">/q</span> <span class="token variable">%RepDoneFolder%</span></span>


<span class="token command"><span class="token keyword">endlocal</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> ALL DONE</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">pause</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,1),W=n("h2",{id:"相关链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关链接"},[n("span",null,"相关链接")])],-1),J={class:"hint-container tip"},X=n("p",{class:"hint-container-title"},"相关链接",-1),Y={href:"https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html",target:"_blank",rel:"noopener noreferrer"},$=n("br",null,null,-1),nn={href:"https://www.bilibili.com/opus/942465276772876307",target:"_blank",rel:"noopener noreferrer"},sn=n("br",null,null,-1),an={href:"https://sokureplays.delthas.fr/",target:"_blank",rel:"noopener noreferrer"},en=n("br",null,null,-1);function tn(pn,ln){const p=l("RouteLink"),e=l("ExternalLinkIcon");return c(),r("div",null,[m,n("div",k,[u,n("div",v,[h,n("ul",null,[n("li",null,[n("p",null,[b,s(),a(p,{to:"/mods/WhatsMod.html"},{default:o(()=>[y]),_:1})])]),_,g])]),w,n("div",f,[D,n("ul",null,[R,n("li",null,[n("p",null,[n("strong",null,[s("打了"),a(p,{to:"/FAQ/In-Games/MissingGraphic.html"},{default:o(()=>[s("Intel 核显特效消失（变成一根线）的补丁")]),_:1}),s("后，使用Rep转mp4功能会报错无法使用")])])]),x,q]),C])]),F,n("div",T,[B,n("ul",null,[n("li",null,[n("p",null,[n("a",P,[s("Bandzip 解压缩软件"),a(e)]),s("有个智能解压并删除的功能，我挺喜欢的。用 "),n("a",L,[s("7Z 解压缩软件"),a(e)]),s(" 这种也没问题")])]),n("li",null,[n("p",null,[n("a",I,[s("FFmpeg 软件(Shared版本)"),a(e)]),s("+设置FFmpeg路径环境变量，用于合并录制来的视频得到640x480的长视频，以及截取视频中的一帧当作1920x1080的视频封面")])]),n("li",null,[n("p",null,[n("a",O,[s("Handbrake-CLI 命令行视频压制软件"),a(e)]),s("，用于转换分辨率并压制得到1440x1080视频，支持GPU硬件编码，效率较高。它既有CLI命令行式，也有GUI可视界面式。其直接读取json预设文件似乎存在Bug，所以我使用读取GUI版本的json格式预设，感兴趣可以都装下体验一下，或者自己重新编写下命令行参数")])]),n("li",null,[n("p",null,[n("a",U,[s("biliup-rs 命令行B站视频上传软件"),a(e)]),s("，它既有CLI命令行式，也有GUI可视界面式，也有录播式，在此自动化我们需要命令行式")])]),H,n("li",null,[n("p",null,[s("（可选项）"),n("a",j,[s("python 脚本"),a(e)]),s("发送邮件，用于提醒流水线工作完成")])])]),z]),A,n("div",M,[N,n("ul",null,[G,Z,E,n("li",null,[n("p",null,[n("a",S,[s("handbrake 命令行参数说明"),a(e)])])]),n("li",null,[n("p",null,[n("a",V,[s("biliup使用说明+命令行参数说明"),a(e)])])]),K]),Q]),W,n("div",J,[X,n("p",null,[n("a",Y,[s("https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html"),a(e)]),$,n("a",nn,[s("https://www.bilibili.com/opus/942465276772876307"),a(e)]),sn,s(" 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-08-23】")]),n("p",null,[n("a",an,[s("https://sokureplays.delthas.fr/"),a(e)]),en,s(" 大厅内Bot自动观战记录战绩")])])])}const cn=i(d,[["render",tn],["__file","ReplayDnD.html.vue"]]),rn=JSON.parse('{"path":"/mods/AdvancedMods/ReplayDnD.html","title":"双击rep播放转mp4视频功能-ReplayDnD","lang":"zh-CN","frontmatter":{"title":"双击rep播放转mp4视频功能-ReplayDnD","icon":"circle-info","order":2,"editLink":false,"author":"三回転Tstar","date":"2024-08-23T00:00:00.000Z","description":"ReplayDnD-old基础功能简介（不带rep转mp4） ReplayDnD-old基础功能简介（不带rep转mp4） 右键rep文件选择属性，打开方式设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了 rep文件可能要和th123.exe在同一个盘符内 将包含rep文件的文件夹直接拖...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/mods/AdvancedMods/ReplayDnD.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"双击rep播放转mp4视频功能-ReplayDnD"}],["meta",{"property":"og:description","content":"ReplayDnD-old基础功能简介（不带rep转mp4） ReplayDnD-old基础功能简介（不带rep转mp4） 右键rep文件选择属性，打开方式设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了 rep文件可能要和th123.exe在同一个盘符内 将包含rep文件的文件夹直接拖..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-07T14:43:53.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-08-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T14:43:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双击rep播放转mp4视频功能-ReplayDnD\\",\\"image\\":[\\"https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x\\",\\"https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp =400x\\",\\"https://bu.dusays.com/2024/06/13/666abd762ca5e.png =400x\\"],\\"datePublished\\":\\"2024-08-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T14:43:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[{"level":2,"title":"ReplayDnD-old基础功能简介（不带rep转mp4）","slug":"replaydnd-old基础功能简介-不带rep转mp4","link":"#replaydnd-old基础功能简介-不带rep转mp4","children":[]},{"level":2,"title":"新版ReplayDnD的Rep转mp4视频功能","slug":"新版replaydnd的rep转mp4视频功能","link":"#新版replaydnd的rep转mp4视频功能","children":[]},{"level":2,"title":"命令行脚本流水线无人值守自动录制Rep文件为1080P视频上传至B站","slug":"命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站","link":"#命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站","children":[]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]}],"git":{"createdTime":1704618486000,"updatedTime":1723041833000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":8},{"name":"三回転Tstar","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":8.32,"words":2495},"localizedDate":"2024年8月23日","autoDesc":true,"excerpt":"<h2>ReplayDnD-old基础功能简介（不带rep转mp4）</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">ReplayDnD-old基础功能简介（不带rep转mp4）</p>\\n<ul>\\n<li>右键rep文件选择<strong>属性</strong>，<strong>打开方式</strong>设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了</li>\\n<li>rep文件可能要和th123.exe在同一个盘符内</li>\\n<li>将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）</li>\\n</ul>\\n</div>"}');export{cn as comp,rn as data};
