---
title: 在 GNU/Linux 下运行非想天则
icon: file
editLink: false
prev: false
next: false
order: 1
date: 2023-09-07
author: Hagb
---

如果你看不懂这个标题，那么你应该不需要用到本篇内容。

本篇发布在 [MIT 许可证](https://opensource.org/license/mit/)下，内容是关于如何在 GNU/Linux 使用 wine 运行非想天则及相关程序的。

# 安装 Wine 并运行带 Mod 的非想天则（包括新则）

Wine 是类 Unix 系统上运行 Windows 程序的兼容层。

以 Debian、Fedora、Ubuntu 为例，你可以安装发行版维护的 Wine 包，也可以安装 WineHQ 提供的包（[Debian](https://wiki.winehq.org/Debian)、[Fedora](https://wiki.winehq.org/Fedora)、[Ubuntu](https://wiki.winehq.org/Ubuntu)），也可以使用 [Lutris](https://github.com/lutris/lutris) 提供的经过了优化的 Wine 包。

运行 `winecfg`，在函数库（`Libraries`）选项卡中添加 `d3d9.dll` 的配置，设为“原装先于内建”（native, builtin），之后在非想天则目录里运行 `wine th123.exe` 就可以打则了（在确认能够正常运行前请先在虚拟终端中运行，而非直接在文件管理器中点击运行，以便获取日志定位可能存在的问题）。

::: info
若不使用 Mod，那么不需要进行上面这个设置。非想天则的 mod 是通过劫持 `d3d9.dll` 来加载的，因此需要配置 Wine 让它此时优先使用 mod 加载器的 `d3d9.dll`。亦可在环境变量 `WINEDLLOVERRIDES=d3d9=n,b` 下启动非想天则来做到这一点，反过来说当需要在同一路径下使用原版非想天则时，使用环境变量 `WINEDLLOVERRIDES=d3d9=b,n` 来运行即可。
:::

此外，**请务必启用 ChainCFix mod！** 详见[下文](#蕾米莉亚-c-链不同步、c-链变成不正常的短链)。

若使用中遇到问题可查询下面的文档，若下面文档也未涵盖或无法解决你的问题请向我们反馈。

# 已知问题（有解决方案）

## 游戏一般性问题

### 运行带 Mod 的非想天则时出现 `0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 "dlls/ntdll/loader.c…` 的报错（标准错误输出），游戏无法启动

完整报错为：

```
0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 "dlls/ntdll/loader.c: loader_section" wait timed out in thread 0108, blocked by 0024, retrying (60 sec)
```

这是 wine 的 bug，但在最新版中已经修复。若遇到这种情况，检查你的 wine 版本是不是在 8.1~8.8 范围内。若是，尝试换用稳定版或 WineQH 最新的测试版包。

### 运行则的终端被 `0160:fixme:d3d:wined3d_swapchain_present Ignoring flags 0x1.` 刷屏

在环境变量 `WINEDEBUG=fixme-d3d` 下运行非想天则可以关闭这个警告的输出。

### 打则时一些图像（比如机体、弹幕）变为白色矩形，终端被 `01b8:err:d3d:resource_init Out of adapter memory.` 刷屏

尤其发生在进入了大厅 mod 的 VS NETWORK 页面后；此外也可能在打街机模式或者故事模式的过程中出现。

使用 [dxvk](https://github.com/doitsujin/dxvk)，或将下面的注册表配置保存为 `set-video-memory.reg` 并运行 `wine regedit set-video-memory.reg`

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Wine\Direct3D]
"VideoMemorySize"="1024"
```

### 蕾米莉亚 C 链不同步、C 链变成不正常的短链

具体表现为：

- 网络对战中使用若干次蕾米莉亚 C 链（不管是哪一方使用）后两方不同步
- 蕾米莉亚 C 链变为不正常的短链，攻击效果消失/改变

源于非想天则的数组越界 bug，但在 Wine 中触发的概率远高于在 Windows 中触发的概率。务必启用 ChainCFix mod，该 mod 修复了这个问题。

若因为某些原因需要打无 Mod 的非想天则，那么请使用 `WINEDEBUG=trace+heap` 环境变量来启动非想天则，触发概率几乎变为 0（不确定是不是确实变为 0 了）。

## 联机大厅相关

遇到问题可以对照以下表格更新大厅

| 大厅可能遇到的问题                      | 首次修复问题的大厅mod版本 |
|:-------------------------------------|:--------|
| Host 或使用 host list 时报 SSL 相关错误 | 0.6.4   |
| 大厅内无法用中文输入法聊天（Wine>=8.8）   | 0.6.5   |
| 加入联机大厅时连接超时或长时间卡在 Joining | 0.6.6.1 |

（总而言之把大厅 mod 更新到 0.6.6.1 或以上的最新版就好）

在聊天框打字时若遇到光标与文字之间对不齐的问题（尤其文字中包含英文字母时），可使用 `FREETYPE_PROPERTIES="truetype:interpreter-version=35"` 环境变量来运行，或使用低于 `7.17` 版本的 Wine。

若遇其他问题请向我们进行反馈。

### 运行非想天则时弹出 DSound 相关错误

可能是由于 Wine 缺少音频库的依赖。可尝试根据 [Wine 的 ArchWiki 页面](https://wiki.archlinux.org/title/wine#Sound)或 [Lutris 给出的 Wine 依赖](https://github.com/lutris/docs/blob/master/WineDependencies.md)补齐依赖。

## Swarm 相关

### 旧版 Swarm 中服务器延迟显示为 -1ms

这是由于缺失了 `CAP_NET_RAW` capability，wine 无法发送 ICMP 包。以下解决方式供参考：

找到 wine 的下列**二进制可执行文件**（不能是脚本）：`wine`、`wine64`（32 位系统无）、`wine-preloader`（如果有的话）、`wine64-preloader`（如果有的话）。它们可能在  `/usr/lib/wine/`（若使用 Debian/Ubuntu 维护的包）或者 `/opt/wine-*/bin`（若使用 WineHQ 的包）中。

对它们执行以下命令：

```bash
sudo setcap cap_net_raw=ei 文件路径
```

将下列代码 `execl` 中的路径填上后，保存到 `start-swarm.c`

```c
#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <sys/capability.h>

int main(int argc, char *argv[]){
	  cap_t caps = cap_get_proc();
	  cap_value_t newcaps[1] = { CAP_NET_RAW, };
	  cap_set_flag(caps, CAP_INHERITABLE, 1, newcaps, CAP_SET);
	  cap_set_proc(caps);
	  printf("Capabilities: %s\n", cap_to_text(caps, NULL));
	  execl("wine二进制可执行文件路径", "wine二进制可执行文件路径", "Swarm的路径", NULL);
}
```

运行以下命令来编译（需要 gcc 和 libcap，Debian/Ubuntu 可安装 `gcc`、`libcap-dev`）以及设置 capability：

```bash
gcc start-swarm.c -o start-swarm -lcap
sudo setcap cap_net_raw=p start-swarm
```

如果使用旧版 Swarm，之后就可以用 `./start-swarm` 就可以启动 Swarm 了，其中服务器延迟应该可以正常显示。

::: info
如果不在意权限最小化，能够接受所有 wine 运行的程序都有 `CAP_NET_RAW` capability，可对上面提到的 wine 的二进制可执行文件使用 `setcap cap_net_raw=ep 文件路径` 来设置它们的 capability，而无须使用 start-swarm 作为赋予 capability 的 wrapper。
:::

### 新版 Swarm 中服务器延迟显示为 0ms

先进行[上一节“旧版 Swarm 中服务器延迟显示为 -1ms”中的操作](#旧版-swarm-中服务器延迟显示为-1ms)，再在此基础上进行以下操作（替换 `C:\windows\system32\ping.exe`）：

将下列代码保存到 `ping-wrapper.c`

```c
#include <string.h>
#include <stdio.h>

int main(int argc, char *argv[]) {
	char cmd[256] = "ping-bak";
	for(int i=1; i<argc; i++)
		if (strcmp(argv[i], "-4")) {
			strcat(cmd, " ");
			strcat(cmd, argv[i]);
		}
	FILE* fp = popen(cmd, "r");
	setbuf(fp, NULL);

	for (char line[256]; fgets(line, sizeof(line), fp);) {
		if (!strncmp(line, "Ping statistics for " , 20))
			strcpy(line + strlen(line) - 1, ":\n");
		printf("%s", line);
	}

	fclose(fp);
}
```

运行下面的命令备份 wine 的 ping 命令并编译 ping-wrapper（需要 `i686-w64-mingw32-gcc` 命令，Debian/Ubuntu 可用 `gcc-mingw-w64-i686` 包，Fedora 可用 `mingw32-gcc` 包）

```bash
SYSTEM32="${WINEPREFIX:-$HOME/.wine}/dosdevices/c:/windows/system32/"
[ -e "$SYSTEM32"/ping-bak.exe ] || mv "$SYSTEM32"/ping{,-bak}.exe &&
i686-w64-mingw32-gcc ping-wrapper.c -o "${WINEPREFIX:-$HOME/.wine}/dosdevices/c:/windows/system32/ping.exe"
```

运行 `winecfg`，在在函数库（`Libraries`）选项卡中添加 `ping.exe` 的配置，设为“原装先于内建”（native, builtin）。

之后就可以运行 `./start-swarm` 来启动新版 Swarm 了。

:::info 一些技术细节
新版 Swarm 通过 `C:\windows\system32\ping.exe -4 -w 5000 -n 1 -l 32 服务器ip地址` 来测量本机和服务器之间的延迟。Windows 自带的 `ping.exe` 支持 ipv6，可以通过 `-4`、`-6` 来指定使用的 ip 协议，但 Wine 的 `ping.exe`

- 既不支持 ipv6，也不支持 `-4`、`-6` 开关
- 输出格式和 Windows 有差异，使得 Swarm 没法从输出中解析出延时数据
:::

### 旧版Swarm“端点管理”中无内容显示

新版 Swarm 的类似问题暂时无解决方案。

对于旧版 Swarm，尝试使用 WineHQ 维护的包[^1]。

[^1]: Debian 在笔者的测试中，Debian 维护的 Wine 软件包有此问题，而 WineHQ 相同版本的包却没有。原因未知。

### 新版 Swarm 在 Windows 版本小于 Windows 7 的设置下无法获取服务器列表

将下面注册表配置保存为 `set-swarm-win7.reg`，运行 `wine regedit set-swarm-win7.reg`

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Wine\AppDefaults\swarm-core-win7-x86.exe]
"Version"="win7"
```

# 已知问题（暂无解决方案）

## 新版 Swarm 端点管理中无内容显示

新版 Swarm 使用 IE 的 webview 来实现端点管理的显示。安装 IE8（Wine 目前能运行的最新 IE），系统配置为 WinXP 之后能够显示出初始界面，但由于 js 出错界面不再变动。

笔者又尝试安装 IE9，发现 IE9 的 webview 疑似因为 Wine 缺少 [WARP](https://learn.microsoft.com/en-us/windows/win32/direct3darticles/directx-warp) 支持而无法显示[^warp]，但通过将新版 Swarm 中引用的 js 地址替换为本地自行搭建的服务器，可以观察到网页中的 js 确实被加载了。

[^warp]: 目前 Wine 上的 DirectX 实现（WineD3D 及 [DXVK](https://github.com/doitsujin/dxvk)）均没有实现 WARP。
