import{_ as c,r as t,o as i,c as d,a as s,d as n,b as a,w as l,e as o}from"./app-CbVPB85h.js";const r={},m=o('<h2 id="old基础功能简介-不带rep转mp4" tabindex="-1"><a class="header-anchor" href="#old基础功能简介-不带rep转mp4"><span>old基础功能简介（不带rep转mp4）</span></a></h2><div class="hint-container info"><p class="hint-container-title">ReplayDnD-old 基础功能简介（不带rep转mp4）</p><ul><li>右键rep文件选择<strong>属性</strong>，<strong>打开方式</strong>设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了</li></ul><ul><li>将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）</li></ul></div><h2 id="新版rep转mp4功能" tabindex="-1"><a class="header-anchor" href="#新版rep转mp4功能"><span>新版Rep转mp4功能</span></a></h2>',3),k={class:"hint-container tip"},u=s("p",{class:"hint-container-title"},"新版 ReplayDnD 的 Rep 转 mp4 视频功能",-1),v={class:"hint-container warning"},b=s("p",{class:"hint-container-title"},"注意",-1),y=s("strong",null,[n("整合包内默认启用 "),s("code",null,"ReplayDnD-old"),n(" 旧版，想要使用新版的功能请手动调整")],-1),h=s("strong",null,"如何开关配置 mod",-1),w=s("li",null,[s("p",null,"使用时可能会偶尔冒出dll被禁用的弹窗，点确认关掉然后忽略即可，无不良影响")],-1),g=s("li",null,[s("p",null,"如果一次性同时运行多个录制，可能会因内存不足或CPU占用过高等引发一系列问题，所以请根据自己的电脑性能资源量力而行")],-1),q=o('<ul><li><p><strong>切换为新版后，先打开一遍游戏</strong>，然后以后右键则的rep文件就会多一个选项 <code>&quot;render to mp4 with soku&quot;</code>，点了就是开始录制了</p></li><li><p><strong>想要同时录制多个rep，请分别在每个rep文件上右键。</strong> <mark>不要多选rep文件一次性右键点录制，会出现问题</mark></p></li></ul><figure><img src="https://bu.dusays.com/2024/06/13/666ac232c75ff.gif" alt="ReplayDnD 快速录制 rep 为 mp4 展示.gif" width="400" tabindex="0" loading="lazy"><figcaption>ReplayDnD 快速录制 rep 为 mp4 展示.gif</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp" alt="游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)" width="400" tabindex="0" loading="lazy"><figcaption>游戏标题栏信息，Rendering 58.0s说明已经录了58秒的视频了，@1157.6fps说明当前录制速率为将近20倍速(1200fps)</figcaption></figure><div class="hint-container info"><p class="hint-container-title">ReplayDnD的Rep转mp4的特点</p><ol><li><strong>录制速度成倍数</strong>，不需要像录屏软件那样一比一时间录制；（标题栏可以看到，60fps为一倍速，120fps为二倍速，以此类推）</li><li><strong>可多线程录制</strong>，同时录制多个rep为mp4视频，互相之间不干扰，也不被电脑上其他音频干扰；</li><li>录制得到的视频尺寸为 640*480(则的游戏分辨率本来就这么大)，60F帧率，<strong>约5000~10000kbps码率</strong>，可配合改皮肤类mod录制</li><li><strong>注意使用录制功能后，游戏内Config的“FPS显示”会被关掉，导致左下角自己的输入延迟和右下角的帧率不显示，记得自己手动再打开</strong></li><li>根据我自己的使用经验，同时开很多个同时录导致满负荷的话，偶尔会录出来音质较差（如妖梦的B弹幕）的情况，可以考虑重新录制</li><li>我自己电脑目前环境（AMD Ryzen 5500U）录出来的视频的伽马值会偏高（画面异常明亮）。尝试装了最新A卡驱动后，录出来的正常了，但是我整个画面的伽马值反而变成偏高了，懒得深究了。</li></ol></div>',4),_=s("h3",{id:"已知bug",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#已知bug"},[s("span",null,"已知BUG")])],-1),D={class:"hint-container caution"},f=s("p",{class:"hint-container-title"},"新版ReplayDnD的Rep转mp4视频功能的已知BUG",-1),R=s("li",null,[s("p",null,[s("strong",null,"Win7不能用，会报错")])],-1),x=s("li",null,[s("p",null,[s("strong",null,"部分 Nvida 系列显卡可能会有以下情况不能使用，原因和解决办法未知")]),s("ul",null,[s("li",null,"右键点 render 后游戏的标题栏无信息或自动关闭，生成0KB~几十KB的无效mp4文件"),s("li",null,"点了后录了一小段然后卡死不动"),s("li",null,"第一次能正常录制，之后就一直出问题了")])],-1),P=s("li",null,[s("p",null,[s("strong",null,"部分 Intel 系列核显可能会有“右键点 render 后如下图所示报错”的情况不能使用，原因和解决办法未知")])],-1),T=s("figure",null,[s("img",{src:"https://bu.dusays.com/2024/06/13/666abd762ca5e.png",alt:"可能是 Intel 系列核显就会这样报错",width:"400",tabindex:"0",loading:"lazy"}),s("figcaption",null,"可能是 Intel 系列核显就会这样报错")],-1),L=s("h2",{id:"命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站"},[s("span",null,"命令行脚本流水线无人值守自动录制Rep文件为1080P视频上传至B站")])],-1),C={class:"hint-container info"},O=s("p",{class:"hint-container-title"},"需要用到的软件和工具",-1),U={href:"https://www.bandisoft.com/bandizip/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},F={href:"http://ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/HandBrake/HandBrake",target:"_blank",rel:"noopener noreferrer"},S=s("ul",null,[s("li",null,[n("然而CLI版 "),s("code",null,"--preset-import-file"),n(" 直接读取json预设文件存在 Bug 无法生效，所以我必须得下载GUI版本，再使用 "),s("code",null,"--preset-import-gui"),n(" 选项才能读取其默认的json预设。我平常也用GUI版本所以多下一个无所谓，不想再下载GUI版本的话就得自己手动编写下命令行参数，或者用其他软件替代")])],-1),N={href:"https://github.com/biliup/biliup-rs/",target:"_blank",rel:"noopener noreferrer"},B=s("li",null,[s("p",null,"在线转换10位时间戳的网页小工具，用于设置B站的定时发布（大于4小时，小于15天），网上有很多在线网站可转换")],-1),I={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},E=s("div",{class:"hint-container note"},[s("p",{class:"hint-container-title"},"待添加的功能"),s("ul",null,[s("li",null,"远程接收Rep文件或压缩包，解压并自动加入流水线队列")])],-1),A={class:"hint-container important"},M=s("p",{class:"hint-container-title"},"bat脚本文件内的各项参数说明（注意配置环境路径，末尾不要带反斜杠）",-1),W=s("li",null,[s("p",null,[s("code",null,'set "Rep_Root=C:\\Users\\1\\Desktop\\【非想天则Rep】\\录Rep工程"')]),s("ul",null,[s("li",null,"自己创建一个工程文件夹，然后设置路径")])],-1),j=s("li",null,[s("p",null,[s("code",null,'set "TH123path=C:\\Users\\1\\Desktop\\【2024-06-24 完整游戏】\\th123"')]),s("ul",null,[s("li",null,"这是非想天则游戏th123文件夹的路径，确保开启了 ReplayDnD")])],-1),G=s("p",null,[s("code",null,'set "C:\\Users\\1\\Desktop\\HandBrakeCLI\\HandBrakeCLI.exe"')],-1),z=s("li",null,"这是 handbrake-CLI 软件的路径",-1),Z={href:"https://handbrake.fr/docs/en/1.7.0/cli/cli-options.html",target:"_blank",rel:"noopener noreferrer"},X=s("p",null,[s("code",null,'set "biliup_path=C:\\Users\\1\\Desktop\\biliupR-v0.2.1-x86_64-windows"')],-1),Y=s("li",null,"这是 biliup软件的路径",-1),Q=s("li",null,"若没有手动登陆 biliup 软件，运行脚本时检测到 Cookies 文件不存在会让你登陆，登陆成功后再使用脚本",-1),K=s("li",null,[s("strong",null,"biliup 软件的工作目录必须在自己的文件夹内，这样才能正常读取 Cookies 登录信息，否则上传会失败")],-1),J={href:"https://biliup.github.io/index.html",target:"_blank",rel:"noopener noreferrer"},$=s("li",null,[s("code",null,"--dtime"),n(" 是定时发布，后面接10位时间戳 "),s("code",null,"VideoUploadTime"),n(" ，要求比现在"),s("strong",null,"晚4个小时但不超过15天，非法时间点会导致消耗网络上传完毕后被白白丢弃"),n("；若不加该参数则不定时发布而是即时发布")],-1),ss=s("li",null,[s("p",null,[s("mark",null,[s("strong",null,'FFmpeg 路径请到"系统环境变量"里设置！')])])],-1),ns=o('<div class="hint-container tip"><p class="hint-container-title">脚本使用方法说明</p><ol><li>创建工程文件夹用于 <code>Rep_Root</code>，阅读其他参数并设置好参数的路径</li><li>点开rep文件夹，将其中任意一个文件拖拽到此 bat 上即可，会把整个文件夹的rep文件 逐个录制+合并+压制+截图+上传+归档</li><li>一个任务开始了，此时再点开另外一个rep文件夹，继续拖拽文件到此 bat 上，会使其加入等待队列，一旦前面的任务完成即可接着执行</li><li>复制此 bat 创建副本，修改 <code>Workingtxt</code> 避免冲突，即可多条流水线，建议不超过 3 个，否则会很卡</li><li>在录制rep过程中可直接关闭cmd窗口终止脚本，但是则的窗口建议最好不要终止，否则要手动删除未完成的mp4，已经录过的rep不会重新录</li><li>压制过程中终止脚本，需要手动删除未完成的1080P视频</li></ol></div>',1),as=o(`<details class="hint-container details"><summary>（录制+压制+上传）三段合一的bat脚本示例</summary><div class="language-batch line-numbers-mode" data-ext="batch" data-title="batch"><pre class="language-batch"><code><span class="token comment">rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html</span>
<span class="token comment">rem https://www.bilibili.com/opus/942465276772876307</span>
<span class="token comment">rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】</span>
<span class="token comment">rem </span>
<span class="token comment">rem https://sokureplays.delthas.fr/</span>
<span class="token comment">rem 大厅内Bot自动观战记录战绩</span>

<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">chcp</span> <span class="token number">65001</span></span>
<span class="token command"><span class="token keyword">setlocal</span> ENABLEDELAYEDEXPANSION</span>

<span class="token comment">rem 配置各个路径，路径结尾不要带反斜杠！</span>
<span class="token comment">rem 2024-09-30 -&gt; 1727676000 ，10位时间戳，要求比现在晚4个小时但不超过15天，非法时间点会导致消耗网络上传完毕后被白白丢弃</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;VideoUploadTime=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Workingtxt=3in1_Working.txt&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Rep_Root=？&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Rep_Root%&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Rep_Done=%Rep_Root%\\归档的Rep&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Rep_Done%&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;TH123path=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;HandBrakeCLI_path=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;biliup_path=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;OUTPUT_480=[Output480P].mp4&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;VideoName[1080P]Output=[1080P]_Output_[%Workingtxt%].mp4&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;CoverName[1080P]Output=Cover_[1080P]_Output_[%Workingtxt%].jpg&quot;</span></span>

<span class="token comment">rem 请确保上面的参数全部设置正确</span>
<span class="token comment">rem ########################################################</span>



<span class="token comment">rem 我们需要设一个RepDoneFolder变量，把包含文件夹的路径作为标题，之后去网页端后台修改标题和定时发布</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;RepDoneFolder=%CD%&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%RepDoneFolder%</span> &gt; RepDoneFolder.txt</span>

<span class="token label property">:CheckBiliupLogin</span>
<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> 你尚未登录 biliup</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%biliup_path%\\cookies.json&quot;</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token string">&quot;%biliup_path%&quot;</span></span>
	<span class="token command"><span class="token keyword">biliup</span> <span class="token parameter attr-name">-h</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span> 你尚未登录 biliup，可以选择扫码登陆，会在 biliup 文件夹内生成一个 qrcode.png</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">biliup</span> login</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span> 脚本即将从头开始，再次检测你的 cookies.json 是否存在</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">pause</span></span>
	<span class="token command"><span class="token keyword">goto</span> CheckBiliupLogin</span>
<span class="token punctuation">)</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token string">&quot;%RepDoneFolder%&quot;</span></span>
	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  等待执行</span>
	
<span class="token label property">:CheckTaskOrder</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token string">&quot;%Rep_Root%\\%Workingtxt%&quot;</span></span> <span class="token command"><span class="token keyword">echo</span> 排号等待中</span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">timeout</span> <span class="token parameter attr-name">/t</span> <span class="token number">10</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> CheckTaskOrder</span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span>&gt;<span class="token string">&quot;%Rep_Root%\\%Workingtxt%&quot;</span></span>

<span class="token comment">rem 执行文件夹内的全部rep文件，不管路径是否包含空格</span>
	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  录制任务开始 <span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;RecordStartTime=%time%&quot;</span></span>
	<span class="token command"><span class="token keyword">echo</span>  录制任务开始 <span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> 【rep文件夹，工作路径】===<span class="token variable">%CD%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token variable">%OUTPUT_480%</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">for</span> <span class="token variable">%%i</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>*.rep<span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token variable">!time!</span> 【Filename】===<span class="token variable">%%i</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token comment">rem 逐个执行，已录制过的会跳过</span>
	<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%%~ni.mp4&quot;</span></span> &quot;%TH123path%\\th123.exe&quot; /render &quot;%CD%\\%%i&quot;
		<span class="token punctuation">)</span>
	<span class="token punctuation">)</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> 录制任务结束 <span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;RecordDoneTime=%time%&quot;</span></span>
	<span class="token command"><span class="token keyword">echo</span> Ctrl<span class="token operator">^</span>G BEL 响铃</span>
	<span class="token command"><span class="token keyword">echo</span> \x07 \x07 \x07</span>

<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  <span class="token string">&quot;开始合并 480P 视频&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 开始合并 480P 视频</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token punctuation">(</span><span class="token command"><span class="token keyword">for</span> <span class="token variable">%%i</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>*.mp4<span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> file &#39;<span class="token variable">%%i</span>&#39;</span><span class="token punctuation">)</span>&gt;LIST.txt
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token variable">%OUTPUT_480%</span></span> <span class="token command"><span class="token keyword">echo</span> 已存在Output</span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> HaveDone480Output</span>
<span class="token command"><span class="token keyword">ffmpeg</span>.exe <span class="token parameter attr-name">-f</span> concat -safe <span class="token number">0</span> <span class="token parameter attr-name">-i</span> LIST.txt <span class="token parameter attr-name">-c</span> copy <span class="token variable">%OUTPUT_480%</span></span>

	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> error level 为 <span class="token variable">%errorlevel%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">neq</span> <span class="token number">0</span></span> <span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;Error Level not 0, upload failed&quot;</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> Upload Success Pass</span>



	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  <span class="token string">&quot;合并480P完毕，发邮件，开始压制1080P&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 合并480P完毕，发邮件，准备开始压制1080P <span class="token variable">%time%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;480PDoneTime=%time%&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">echo</span> 传输给 Handbrake 得到 1080P</span>

<span class="token label property">:HaveDone480Output</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token string">&quot;%biliup_path%\\%VideoName[1080P]Output%&quot;</span></span>  <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">choice</span> <span class="token parameter attr-name">/T</span> <span class="token number">10</span> <span class="token parameter attr-name">/C</span> YN <span class="token parameter attr-name">/D</span> N <span class="token parameter attr-name">/M</span> <span class="token string">&quot;已存在一个1080P视频，按Y强行继续 debug，按N等待直到这个视频执行完毕&quot;</span></span>
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">equ</span> <span class="token number">2</span></span> <span class="token command"><span class="token keyword">goto</span> HaveDone480Output</span>
<span class="token punctuation">)</span>

<span class="token command"><span class="token keyword">cd</span> .</span>
<span class="token comment">rem cd . 可以重置 errorlevel</span>

<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%biliup_path%\\%VideoName[1080P]Output%&quot;</span></span> &quot;%HandBrakeCLI_path%\\HandBrakeCLI.exe&quot; --preset-import-gui --aencoder copy:aac --width 1440 --height 1080 -i &quot;%OUTPUT_480%&quot; -o &quot;%biliup_path%\\%VideoName[1080P]Output%&quot;
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> error level 为 <span class="token variable">%errorlevel%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">neq</span> <span class="token number">0</span></span> <span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;压制检测到错误&quot;</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> HaveDone480Output</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> Upload Success Pass</span>


<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span> <span class="token number">1080</span>压制完毕，即将进入CD biliup，准备截图和上传</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;1080PDoneTime=%time%&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token label property">:Making1080Cover</span>
	<span class="token command"><span class="token keyword">del</span> <span class="token parameter attr-name">/q</span> <span class="token string">&quot;%Rep_Root%\\%Workingtxt%&quot;</span></span>
	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  制作封面中</span>
<span class="token command"><span class="token keyword">echo</span> 制作封面中</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%biliup_path%</span></span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token variable">%CoverName</span>[1080P]Output%</span> &quot;ffmpeg.exe&quot; -i %VideoName[1080P]Output% -ss 00:01:05 -frames:v 1 -q:v 2  -vf &quot;pad=1920:1080:240:00:black&quot; %CoverName[1080P]Output%

	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> error level 为 <span class="token variable">%errorlevel%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">neq</span> <span class="token number">0</span></span> <span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;截图检测到错误&quot;</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> Making1080Cover</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span> 截图完毕</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;CoverDoneTime=%time%&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">echo</span> 开始上传，时间戳小于<span class="token number">15</span>天</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token label property">:UploadingVideo</span>
<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  开始上传，时间戳小于<span class="token number">15</span>天</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%biliup_path%</span></span>
<span class="token command"><span class="token keyword">biliup</span>.exe upload <span class="token parameter attr-name">--limit</span> <span class="token number">5</span> <span class="token parameter attr-name">--tid</span> <span class="token number">17</span> <span class="token parameter attr-name">--cover</span> <span class="token string">&quot;%CoverName[1080P]Output%&quot;</span> <span class="token parameter attr-name">--title</span> <span class="token string">&quot;%RepDoneFolder:~-75%&quot;</span> <span class="token parameter attr-name">--desc</span> <span class="token string">&quot;https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html    https://www.bilibili.com/opus/942465276772876307    使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-08-23】    https://sokureplays.delthas.fr/    大厅内Bot自动观战记录战绩&quot;</span> <span class="token parameter attr-name">--dtime</span> <span class="token variable">%VideoUploadTime%</span> <span class="token parameter attr-name">--tag</span> <span class="token string">&quot;biliup,非想天则,东方,FXTZ,Replay&quot;</span>  <span class="token string">&quot;%VideoName[1080P]Output%&quot;</span></span>
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">equ</span> <span class="token number">1</span></span>  <span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;error level 为 %errorlevel% ，上传检测到错误&quot;</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> UploadingVideo</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span>  上传完毕，归档rep文件</span>

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 上传完毕，归档rep文件</span>

<span class="token command"><span class="token keyword">copy</span> <span class="token variable">%CoverName</span>[1080P]Output% <span class="token string">&quot;%Rep_Done%\\%CoverName[1080P]Output%_%random%.jpg&quot;</span></span>
<span class="token command"><span class="token keyword">move</span> <span class="token variable">%CoverName</span>[1080P]Output% <span class="token string">&quot;%RepDoneFolder%\\&quot;
move %VideoName[1080P]Output% &quot;</span><span class="token variable">%Rep_Done%</span>\\<span class="token variable">%VideoName</span>[1080P]Output<span class="token variable">%_%</span>random%.mp4</span>&quot;
<span class="token comment">rem del /q %VideoName[1080P]Output%</span>



<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span> 上传完毕，回到rep文件夹</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;UploadDoneTime=%time%&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token string">&quot;%RepDoneFolder%&quot;</span></span>
<span class="token command"><span class="token keyword">del</span> <span class="token parameter attr-name">/Q</span> *.mp4</span>
<span class="token punctuation">(</span><span class="token command"><span class="token keyword">echo</span> RecordStartTime <span class="token variable">%RecordStartTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> RecordDoneTime <span class="token variable">%RecordDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 480PDoneTime <span class="token variable">%480PDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 1080PDoneTime <span class="token variable">%1080PDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> CoverDoneTime <span class="token variable">%CoverDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> UploadDoneTime <span class="token variable">%UploadDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> ALL DONE <span class="token variable">%time%</span></span>
<span class="token command"><span class="token keyword">echo</span>. </span>
<span class="token punctuation">)</span>&gt;&quot;ALL-DONE-TIME.txt&quot;

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%Rep_Root%</span></span>

<span class="token command"><span class="token keyword">set</span> <span class="token variable">DateTimeForLog</span><span class="token operator">=</span><span class="token variable">%date:~0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%date:~5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%date:~8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;DateTimeForLog=%DateTimeForLog: =0%&quot;</span></span>

<span class="token command"><span class="token keyword">xcopy</span>  <span class="token parameter attr-name">/E</span> <span class="token string">&quot;%RepDoneFolder%\\&quot;  &quot;</span><span class="token variable">%Rep_Done%</span>\\<span class="token variable">%DateTimeForLog%</span>\\<span class="token string">&quot;

rmdir  /s /q &quot;</span><span class="token variable">%RepDoneFolder%</span></span>&quot;

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> RecordStartTime <span class="token variable">%RecordStartTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> RecordDoneTime <span class="token variable">%RecordDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 480PDoneTime <span class="token variable">%480PDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 1080PDoneTime <span class="token variable">%1080PDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> CoverDoneTime <span class="token variable">%CoverDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> UploadDoneTime <span class="token variable">%UploadDoneTime%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> ALL DONE <span class="token variable">%time%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">endlocal</span></span>
<span class="token command"><span class="token keyword">pause</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>分段式一、批量录制并积攒480P成品（此脚本可重复并行运行）</summary><div class="language-batch line-numbers-mode" data-ext="batch" data-title="batch"><pre class="language-batch"><code><span class="token comment">rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html</span>
<span class="token comment">rem https://www.bilibili.com/opus/942465276772876307</span>
<span class="token comment">rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】</span>
<span class="token comment">rem </span>
<span class="token comment">rem https://sokureplays.delthas.fr/</span>
<span class="token comment">rem 大厅内Bot自动观战记录战绩</span>

<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">chcp</span> <span class="token number">65001</span></span>
<span class="token command"><span class="token keyword">setlocal</span> ENABLEDELAYEDEXPANSION</span>

<span class="token comment">rem 配置各个路径，路径结尾不要带反斜杠！</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;LimitVideo=30&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Rep_Root=？&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Rep_Root%&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Rep_Done=%Rep_Root%\\归档的Rep&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Rep_Done%&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;TH123path=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;StoreHouse480=%Rep_Root%\\分段式一批量积攒480P成品&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token variable">%StoreHouse480%</span></span>

<span class="token comment">rem 请确保上面的参数全部设置正确</span>
<span class="token comment">rem ########################################################</span>



	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> 录制任务开始<span class="token number">480</span> <span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> 录制任务开始<span class="token number">480</span> <span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;【rep文件夹，工作路径】===%CD%&quot;</span></span>

<span class="token comment">rem 即将CD进入biliup工作路径，所以我们需要设一个RepDoneFolder变量，保存当前工作路径，后续需要返回此路径</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;RepDoneFolder=%CD%&quot;</span></span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%RepDoneFolder%</span> &gt; RepDoneFolder.txt</span>

<span class="token command"><span class="token keyword">for</span> <span class="token variable">%%i</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>*.rep<span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;!time! 【Filename】===%%i&quot;</span>	</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token comment">rem 逐个执行</span>
	<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%%~ni.mp4&quot;</span></span> &quot;%TH123path%\\th123.exe&quot; /render &quot;%CD%\\%%i&quot;
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token punctuation">)</span>
	<span class="token command"><span class="token keyword">echo</span> 录制任务结束，<span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span> Ctrl<span class="token operator">^</span>G BEL 响铃</span>
	<span class="token command"><span class="token keyword">echo</span> \x07 \x07 \x07</span>

<span class="token command"><span class="token keyword">echo</span> 开始合并 480P 视频</span>
<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token punctuation">(</span><span class="token command"><span class="token keyword">for</span> <span class="token variable">%%i</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>*.mp4<span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> file &#39;<span class="token variable">%%i</span>&#39;</span><span class="token punctuation">)</span> &gt; LIST.txt
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> 【】Output.mp4</span> <span class="token command"><span class="token keyword">echo</span> 已存在Output</span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> HaveDoneOutput</span>
<span class="token command"><span class="token keyword">ffmpeg</span>.exe <span class="token parameter attr-name">-f</span> concat -safe <span class="token number">0</span> <span class="token parameter attr-name">-i</span> LIST.txt <span class="token parameter attr-name">-c</span> copy 【】Output.mp4</span>


<span class="token label property">:HaveDoneOutput</span>
<span class="token command"><span class="token keyword">echo</span> 制作<span class="token number">1080</span>封面</span>

<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token string">&quot;%StoreHouse480%\\%LimitVideo%_Cover_[1920]_Output-480.jpg&quot;</span></span> <span class="token command"><span class="token keyword">echo</span> 已满 <span class="token variable">%LimitVideo%</span> 个封面视频</span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span>

<span class="token command"><span class="token keyword">for</span> <span class="token parameter attr-name">/L</span> <span class="token variable">%%a</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token variable">%LimitVideo%</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%StoreHouse480%\\%%a_Cover_[1920]_Output-480.jpg&quot;</span></span> <span class="token punctuation">(</span>
		<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> <span class="token variable">%%a</span> / <span class="token variable">%LimitVideo%</span>  制作<span class="token number">1080</span>封面</span>
		<span class="token command"><span class="token keyword">move</span> 【】Output.mp4 <span class="token string">&quot;%StoreHouse480%\\%%a_[480P]_Output.mp4&quot;</span>	</span>
		<span class="token command"><span class="token keyword">timeout</span> <span class="token parameter attr-name">/t</span> <span class="token number">1</span>	</span>
		&quot;ffmpeg.exe&quot; -i &quot;%StoreHouse480%\\%%a_[480P]_Output.mp4&quot; -ss 00:02:20 -frames:v 1 -q:v 2  -vf &quot;scale=-1:1080&quot; &quot;%StoreHouse480%\\Cover_[1920]_Output-480-temp-%%a.jpg&quot;		
		<span class="token command"><span class="token keyword">timeout</span> <span class="token parameter attr-name">/t</span> <span class="token number">1</span>		</span>
		&quot;ffmpeg.exe&quot; -i &quot;%StoreHouse480%\\Cover_[1920]_Output-480-temp-%%a.jpg&quot;  -vf &quot;pad=1920:1080:240:00:black&quot;  &quot;%StoreHouse480%\\Cover_[1920]_Output-480-%%a.jpg&quot;
		
		<span class="token command"><span class="token keyword">copy</span> <span class="token string">&quot;%StoreHouse480%\\%%a_Cover_[1920]_Output-480.jpg&quot;</span> <span class="token string">&quot;%RepDoneFolder%\\Cover_Done.jpg&quot;</span></span>
		<span class="token command"><span class="token keyword">del</span> <span class="token string">&quot;%StoreHouse480%\\Cover_[1920]_Output-480-temp-%%a.jpg&quot;</span>			</span>
		<span class="token command"><span class="token keyword">copy</span> RepDoneFolder.txt <span class="token string">&quot;%StoreHouse480%\\%%a_RepDoneFolder.txt&quot;</span></span>
		
		<span class="token command"><span class="token keyword">goto</span> CoverDone</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token label property">:CoverDone</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span> 截图完毕</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> 归档rep文件</span>


<span class="token command"><span class="token keyword">del</span> <span class="token parameter attr-name">/Q</span> *.mp4</span>

<span class="token comment">rem cd ..</span>
<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%Rep_Root%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token variable">DateTimeForLog</span><span class="token operator">=</span><span class="token variable">%date:~0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%date:~5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%date:~8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span><span class="token operator">-</span><span class="token variable">%time:~6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;DateTimeForLog=%DateTimeForLog: =0%&quot;</span></span>
<span class="token command"><span class="token keyword">xcopy</span>  <span class="token parameter attr-name">/E</span> <span class="token string">&quot;%RepDoneFolder%\\&quot;  &quot;</span>.\\RepDoneFolder\\<span class="token variable">%DateTimeForLog%</span>\\<span class="token string">&quot;
rmdir  /s /q &quot;</span><span class="token variable">%RepDoneFolder%</span></span>&quot;


<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> ALL DONE<span class="token number">-480</span> 积攒<span class="token number">480</span> <span class="token variable">%time%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">endlocal</span></span>
<span class="token command"><span class="token keyword">pause</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>分段式二、批量压制（任务交给高性能GPU台式电脑）</summary><div class="language-batch line-numbers-mode" data-ext="batch" data-title="batch"><pre class="language-batch"><code><span class="token comment">rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html</span>
<span class="token comment">rem https://www.bilibili.com/opus/942465276772876307</span>
<span class="token comment">rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】</span>
<span class="token comment">rem </span>
<span class="token comment">rem https://sokureplays.delthas.fr/</span>
<span class="token comment">rem 大厅内Bot自动观战记录战绩</span>

<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">chcp</span> <span class="token number">65001</span></span>
<span class="token command"><span class="token keyword">setlocal</span> ENABLEDELAYEDEXPANSION</span>

<span class="token comment">rem 配置各个路径，路径结尾不要带反斜杠！</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;LimitVideo=30&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Rep_Root=？&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Rep_Root%&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Rep_Done=%Rep_Root%\\归档的Rep&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Rep_Done%&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;HandBrakeCLI_path=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;StoreHouse480=%Rep_Root%\\分段式一批量积攒480P成品&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token variable">%StoreHouse480%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Compressed480=%StoreHouse480%\\已被压制成1080P，归档的480P视频&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token string">&quot;%Compressed480%&quot;</span></span>

<span class="token comment">rem 请确保上面的参数全部设置正确</span>
<span class="token comment">rem ########################################################</span>



	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span>  批量压制任务开始 <span class="token variable">%time%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>

<span class="token command"><span class="token keyword">for</span> <span class="token parameter attr-name">/L</span> <span class="token variable">%%a</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token variable">%LimitVideo%</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> 处理第 <span class="token variable">%%a</span> / <span class="token variable">%LimitVideo%</span> 个  <span class="token variable">!time!</span></span>
	
	<span class="token command"><span class="token keyword">echo</span> 处理第 <span class="token variable">%%a</span> / <span class="token variable">%LimitVideo%</span> 个  <span class="token variable">!time!</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	
<span class="token command"><span class="token keyword">set</span> <span class="token variable">Input480PVideo</span><span class="token operator">=</span><span class="token string">&quot;%StoreHouse480%\\%%a_[480P]_Output.mp4&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token variable">Output1080PVideo</span><span class="token operator">=</span><span class="token string">&quot;%StoreHouse480%\\%%a_[480P]_Output_[1080P].mp4&quot;</span></span>
	
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token variable">!Input480PVideo!</span></span> <span class="token command"><span class="token keyword">echo</span> 存在 <span class="token variable">!Input480PVideo!</span> 了</span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">echo</span>.</span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;!Output1080PVideo!&quot;</span></span> <span class="token punctuation">(</span>
	&quot;%HandBrakeCLI_path%\\HandBrakeCLI.exe&quot; --preset-import-gui --aencoder copy:aac --width 1440 --height 1080 -i !Input480PVideo! -o !Output1080PVideo! 
	
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> error level 为 <span class="token variable">%errorlevel%</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">neq</span> <span class="token number">0</span></span> <span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;Error Level not 0, upload failed&quot;</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> Upload Success Pass</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	
	<span class="token command"><span class="token keyword">set</span> <span class="token variable">DateTimeForLog</span><span class="token operator">=</span><span class="token variable">!date:~0,4!-!date:~5,2!-!date:~8,2!-!time:~0,2!-!time:~3,2!-!time:~6,2!</span></span>
	<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;DateTimeForLog=!DateTimeForLog: =0!&quot;</span></span>
	<span class="token command"><span class="token keyword">move</span> <span class="token variable">!Input480PVideo!</span> <span class="token string">&quot;%Compressed480%\\!DateTimeForLog!\\&quot;</span>	</span>
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>


<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> \x07 \x07 \x07</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span> <span class="token number">1080</span>批量压制-DONE</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">pause</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>分段式三、批量上传</summary><div class="language-batch line-numbers-mode" data-ext="batch" data-title="batch"><pre class="language-batch"><code><span class="token comment">rem https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html</span>
<span class="token comment">rem https://www.bilibili.com/opus/942465276772876307</span>
<span class="token comment">rem 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】</span>
<span class="token comment">rem </span>
<span class="token comment">rem https://sokureplays.delthas.fr/</span>
<span class="token comment">rem 大厅内Bot自动观战记录战绩</span>

<span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">chcp</span> <span class="token number">65001</span></span>
<span class="token command"><span class="token keyword">setlocal</span> ENABLEDELAYEDEXPANSION</span>

<span class="token comment">rem 配置各个路径，路径结尾不要带反斜杠！</span>
<span class="token comment">rem 2024-09-30 -&gt; 1727676000 ，10位时间戳，要求比现在晚4个小时但不超过15天，非法时间点会导致消耗网络上传完毕后被白白丢弃</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;VideoUploadTime=1727676000&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;LimitVideo=30&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;biliup_path=？&quot;</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;StoreHouse480=%Rep_Root%\\分段式一批量积攒480P成品&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token variable">%StoreHouse480%</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Uploaded1080PVideo=%StoreHouse480%\\已上传的1080P视频&quot;</span></span>
<span class="token command"><span class="token keyword">mkdir</span> <span class="token variable">%Uploaded1080PVideo%</span></span>

<span class="token comment">rem 请确保上面的参数全部设置正确</span>
<span class="token comment">rem ########################################################</span>


<span class="token label property">:CheckBiliupLogin</span>
<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> 你尚未登录 biliup</span>
<span class="token command"><span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token keyword">exist</span> <span class="token string">&quot;%biliup_path%\\cookies.json&quot;</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token string">&quot;%biliup_path%&quot;</span></span>
	<span class="token command"><span class="token keyword">biliup</span> <span class="token parameter attr-name">-h</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span> 你尚未登录 biliup，可以选择扫码登陆，会在 biliup 文件夹内生成一个 qrcode.png</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">biliup</span> login</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span> 脚本即将从头开始，再次检测你的 cookies.json 是否存在</span>
	<span class="token command"><span class="token keyword">echo</span> ##############################################</span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">pause</span></span>
	<span class="token command"><span class="token keyword">goto</span> CheckBiliupLogin</span>
<span class="token punctuation">)</span>

<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%biliup_path%</span></span>
<span class="token command"><span class="token keyword">for</span> <span class="token parameter attr-name">/L</span> <span class="token variable">%%a</span> <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token variable">%LimitVideo%</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> <span class="token variable">!time!</span> <span class="token string">&quot;处理第 %%a 个，上传1080，时间戳小于15天&quot;</span></span>
	<span class="token command"><span class="token keyword">echo</span>.</span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token variable">!time!</span> <span class="token string">&quot;处理第 %%a 个，上传1080，时间戳小于15天&quot;</span></span>
	<span class="token command"><span class="token keyword">echo</span>.	</span>
	<span class="token command"><span class="token keyword">set</span> <span class="token variable">DateTimeForLog</span><span class="token operator">=</span><span class="token variable">!date:~0,4!-!date:~5,2!-!date:~8,2!-!time:~0,2!-!time:~3,2!-!time:~6,2!</span></span>
	<span class="token command"><span class="token keyword">echo</span> <span class="token variable">!DateTimeForLog!</span></span>
<span class="token command"><span class="token keyword">set</span> <span class="token parameter attr-name">/p</span> <span class="token variable">RepDoneFolder</span><span class="token operator">=</span>&lt;<span class="token string">&quot;%StoreHouse480%\\%%a_RepDoneFolder.txt&quot;</span></span>

<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token string">&quot;%StoreHouse480%\\%LimitVideo%_Cover_[1920]_Output-480.jpg&quot;</span></span> <span class="token punctuation">(</span>
	<span class="token command"><span class="token keyword">set</span> <span class="token variable">UploadVideo</span><span class="token operator">=</span><span class="token string">&quot;%StoreHouse480%\\%%a_[480P]_Output_[1080P].mp4&quot;</span></span>
	<span class="token command"><span class="token keyword">set</span> <span class="token variable">UploadCover</span><span class="token operator">=</span><span class="token string">&quot;%StoreHouse480%\\%%a_Cover_[1920]_Output-480.jpg&quot;</span></span>
	<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/D</span> <span class="token variable">%biliup_path%</span></span>
	<span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token variable">!UploadVideo!</span></span> <span class="token command"><span class="token keyword">biliup</span>.exe upload <span class="token parameter attr-name">--limit</span> <span class="token number">5</span> <span class="token parameter attr-name">--tid</span> <span class="token number">17</span> <span class="token parameter attr-name">--cover</span> <span class="token variable">!UploadCover!</span> <span class="token parameter attr-name">--title</span> <span class="token string">&quot;%%a_!RepDoneFolder:~-75!&quot;</span> <span class="token parameter attr-name">--desc</span> <span class="token string">&quot;https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html     https://www.bilibili.com/opus/942465276772876307    使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-08-23】    https://sokureplays.delthas.fr/    大厅内Bot自动观战记录战绩09&quot;</span> <span class="token parameter attr-name">--dtime</span> <span class="token variable">%VideoUploadTime%</span> <span class="token parameter attr-name">--tag</span> <span class="token string">&quot;biliup,非想天则,东方,FXTZ,Replay&quot;</span>  <span class="token variable">!UploadVideo!</span></span>
	
	<span class="token command"><span class="token keyword">if</span> %<span class="token keyword">errorlevel</span>% <span class="token operator">equ</span> <span class="token number">1</span></span>  <span class="token command"><span class="token keyword">echo</span> <span class="token string">&quot;error level 为 %errorlevel% ，上传检测到错误&quot;</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">pause</span></span><span class="token operator">&amp;</span><span class="token command"><span class="token keyword">goto</span> UploadingVideo</span>
	
	<span class="token comment">rem del /q !UploadVideo!</span>
	<span class="token command"><span class="token keyword">move</span> <span class="token variable">!UploadVideo!</span> <span class="token string">&quot;%Uploaded1080PVideo%\\&quot;	
	move !UploadCover! &quot;</span><span class="token variable">%Uploaded1080PVideo%</span>\\<span class="token string">&quot;
	move &quot;</span><span class="token variable">%StoreHouse480%</span>\\<span class="token variable">%%a_RepDoneFolder</span>.txt<span class="token string">&quot; &quot;</span><span class="token variable">%Uploaded1080PVideo%</span>\\</span>&quot;	
	<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">title</span> <span class="token variable">%Workingtxt%</span> <span class="token variable">%time%</span> 全部上传完毕 <span class="token variable">%LimitVideo%</span></span>
<span class="token command"><span class="token keyword">echo</span> <span class="token variable">%time%</span> 全部上传完毕 <span class="token variable">%LimitVideo%</span></span>
<span class="token command"><span class="token keyword">echo</span>.</span>
<span class="token command"><span class="token keyword">endlocal</span></span>
<span class="token command"><span class="token keyword">pause</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="相关链接" tabindex="-1"><a class="header-anchor" href="#相关链接"><span>相关链接</span></a></h2>`,5),es={class:"hint-container tip"},os=s("p",{class:"hint-container-title"},"相关链接",-1),ps={href:"https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html",target:"_blank",rel:"noopener noreferrer"},ts=s("br",null,null,-1),ls={href:"https://www.bilibili.com/opus/942465276772876307",target:"_blank",rel:"noopener noreferrer"},cs=s("br",null,null,-1),is={href:"https://sokureplays.delthas.fr/",target:"_blank",rel:"noopener noreferrer"},ds=s("br",null,null,-1);function rs(ms,ks){const p=t("RouteLink"),e=t("ExternalLinkIcon");return i(),d("div",null,[m,s("div",k,[u,s("div",v,[b,s("ul",null,[s("li",null,[s("p",null,[y,n(),a(p,{to:"/mods/WhatsMod.html"},{default:l(()=>[h]),_:1})])]),w,g])]),q]),_,s("div",D,[f,s("ul",null,[R,s("li",null,[s("p",null,[s("strong",null,[n("打了"),a(p,{to:"/FAQ/In-Games/MissingGraphic.html"},{default:l(()=>[n("Intel 核显特效消失（变成一根线）的补丁")]),_:1}),n("后，使用Rep转mp4功能会报错无法使用")])])]),x,P]),T]),L,s("div",C,[O,s("ul",null,[s("li",null,[s("p",null,[s("a",U,[n("Bandzip 解压缩软件"),a(e)]),n("有个智能解压并删除的功能，我挺喜欢的。也可以用 "),s("a",V,[n("7z 解压缩软件"),a(e)]),n(" ，随你喜欢")])]),s("li",null,[s("p",null,[s("a",F,[n("FFmpeg 软件(推荐 Shared 版本)"),a(e)]),n("+设置FFmpeg路径环境变量，用于合并录制来的视频得到640x480的长视频，以及截取视频中的一帧当作1920x1080的视频封面")])]),s("li",null,[s("p",null,[s("a",H,[n("Handbrake 视频压制软件，CLI 命令行版和 GUI 可视界面版两个都要下"),a(e)]),n("，用于放大分辨率并压制得到1440x1080视频，支持GPU硬件编码，效率较高。")]),S]),s("li",null,[s("p",null,[s("a",N,[n("biliup-rs 命令行B站视频上传软件"),a(e)]),n("，它既有CLI命令行版，也有GUI可视界面版，也有录播版")])]),B,s("li",null,[s("p",null,[n("（可选项）"),s("a",I,[n("python 环境"),a(e)]),n("发送邮件，用于提醒流水线工作完成")])])]),E]),s("div",A,[M,s("ul",null,[W,j,s("li",null,[G,s("ul",null,[z,s("li",null,[s("a",Z,[n("handbrake 命令行参数说明"),a(e)])])])]),s("li",null,[X,s("ul",null,[Y,Q,K,s("li",null,[s("a",J,[n("biliup使用说明+命令行参数说明"),a(e)])]),$])]),ss]),ns]),as,s("div",es,[os,s("p",null,[s("a",ps,[n("https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html"),a(e)]),ts,s("a",ls,[n("https://www.bilibili.com/opus/942465276772876307"),a(e)]),cs,n(" 使用ReplayDnD Mod流水线自动录制rep并投稿1080P【2024-09-21】")]),s("p",null,[s("a",is,[n("https://sokureplays.delthas.fr/"),a(e)]),ds,n(" 大厅内Bot自动观战记录战绩")])])])}const vs=c(r,[["render",rs],["__file","ReplayDnD.html.vue"]]),bs=JSON.parse('{"path":"/mods/AdvancedMods/ReplayDnD.html","title":"双击rep文件观看，rep转mp4视频功能-ReplayDnD","lang":"zh-CN","frontmatter":{"title":"双击rep文件观看，rep转mp4视频功能-ReplayDnD","icon":"circle-info","order":2,"editLink":false,"author":"三回転Tstar","date":"2024-08-23T00:00:00.000Z","description":"old基础功能简介（不带rep转mp4） ReplayDnD-old 基础功能简介（不带rep转mp4） 右键rep文件选择属性，打开方式设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/AdvancedMods/ReplayDnD.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"双击rep文件观看，rep转mp4视频功能-ReplayDnD"}],["meta",{"property":"og:description","content":"old基础功能简介（不带rep转mp4） ReplayDnD-old 基础功能简介（不带rep转mp4） 右键rep文件选择属性，打开方式设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了 将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T13:41:07.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-08-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T13:41:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双击rep文件观看，rep转mp4视频功能-ReplayDnD\\",\\"image\\":[\\"https://bu.dusays.com/2024/06/13/666ac232c75ff.gif =400x\\",\\"https://bu.dusays.com/2024/01/21/65acdbe7f0924.webp =400x\\",\\"https://bu.dusays.com/2024/06/13/666abd762ca5e.png =400x\\"],\\"datePublished\\":\\"2024-08-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-25T13:41:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[{"level":2,"title":"old基础功能简介（不带rep转mp4）","slug":"old基础功能简介-不带rep转mp4","link":"#old基础功能简介-不带rep转mp4","children":[]},{"level":2,"title":"新版Rep转mp4功能","slug":"新版rep转mp4功能","link":"#新版rep转mp4功能","children":[{"level":3,"title":"已知BUG","slug":"已知bug","link":"#已知bug","children":[]}]},{"level":2,"title":"命令行脚本流水线无人值守自动录制Rep文件为1080P视频上传至B站","slug":"命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站","link":"#命令行脚本流水线无人值守自动录制rep文件为1080p视频上传至b站","children":[]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]}],"git":{"createdTime":1704618486000,"updatedTime":1729863667000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":14},{"name":"三回転Tstar","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":14.87,"words":4461},"localizedDate":"2024年8月23日","autoDesc":true,"excerpt":"<h2>old基础功能简介（不带rep转mp4）</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">ReplayDnD-old 基础功能简介（不带rep转mp4）</p>\\n<ul>\\n<li>右键rep文件选择<strong>属性</strong>，<strong>打开方式</strong>设置为 th123.exe 后，双击rep文件即可直接播放rep。这个功能非常实用，不必在游戏内一个一个找rep了</li>\\n</ul>\\n<!-- - rep文件可能要和th123.exe在同一个盘符内 -->\\n<ul>\\n<li>将包含rep文件的文件夹直接拖到th123.exe上可以连续播放文件夹内的所有rep（按x或者esc来切掉去播下一个，点叉关掉游戏窗口则是完全停止）</li>\\n</ul>\\n</div>"}');export{vs as comp,bs as data};
