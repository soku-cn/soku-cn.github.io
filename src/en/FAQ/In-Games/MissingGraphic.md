---
title: Soku Effects Graphic Issue

# 标题
icon: circle-info
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-10
#文章编辑日期
---


:::: info Causes
It's because **New Intel CPU's Integrated Graphics's Driver** don't support well on old games like Soku.

Devices Examlpes
```
CPU：Intel® 12th Gen Core i7-12700H
GPU：Intel® Iris® Xe Graphics

CPU：Intel® N95 x86 Family 6 Model 14 Stepping 0
GPU：Intel® UHD Graphics
```

![Issue examples: Reimu's J5A, Sanae's 5C](https://bu.dusays.com/2024/01/21/65acc4c45b122.webp =400x)
::::

::: tip Solution&Download

Thanks to Hagb making it

[**Download the Effects Graphic Issue Fix Patch**](https://discord.com/channels/167593473854144512/253944555831820288/1217081294194737173).


::: important Install the Ptach
drop the 3 content dll files besides th123.exe

```
d3d9.dll
d3d9_custom.dll
wined3d.dll
th123.exe
```

::: caution Known side-effects

- Have problem with OBS Game Source Capture, **please use Window Capture Method instead**.
- Please don't install the fix patch if you don't have such problem, it may cause game not starting if you don't have such Effect Issue!

:::

<!--
::: details 特效变成一根线，但是Win7
是 win7 的话，下这个 https://downloads.fdossena.com/geth.php?r=wined3d-recommended7 
:::
-->

::: details 一些技术解释 - 修复非想天则特效变成一根线BUG的补丁
> [!note]
> 
> **虽然在某些较新的 Intel 集显驱动下非想天则有特效缺失，但使用其他第三方 DirectX 实现（如 WineD3D、DXVK）能够绕过这个问题。**
> 
> 补丁包文件：
> 
> - d3d9.dll: mod 加载器，加入了加载自定义 DirectX 库的支持。[d3d9 ModLoader_0.4.2 的源码](https://github.com/SokuDev/SokuMods/pull/25)
> - d3d9_custom.dll: “自定义”的 d3d9 接口，[来自 fdossena 下载的 WineD3D](https://downloads.fdossena.com/geth.php?r=wined3dst-latest)
> - wined3d.dll: 前一个文件的依赖项。[WineD3D For Windows Build Scripts 源码](https://github.com/adolfintel/wined3d4win)
> 
> ::: info 一些细节
> 
> 由于不明原因，在较新的 Intel 集显及其驱动上，微软提供的 DirectX 实现会将某些图像素材错误地渲染成一根（一些）细线。根据一些用户所说，[DXVK 可以把它们正确地渲染出来](https://community.intel.com/t5/Graphics/Iris-Xe-Graphics-doesn-t-run-DirectX-9-game-properly/m-p/1444706#M112728)。
> 
> DXVK 一般在 Wine 上使用（这是一个用于在类 unix 系统上运行 Windows 程序的兼容层）。在 Wine 中，我们一般用 WineD3D 或者 DXVK 而非微软的来作为 DirectX 的实现。它们也都是兼容层，即它们自己提供 DirectX API 被应用调用，而后它们会把这些 DirectX 形式的调用“翻译”成其他类型的 API 并调用之。DXVK 基于 Vulkan，WineD3D 则基于 OpenGL。（即，应用程序把 DXVK 作为 DirectX 接口调用，而 DXVK 则调用 Vulkan 来完成和对应 DirectX 调用等价的事情；WineD3D 同理。）
> 
> 这些兼容层虽然是为 Wine 提供的，但实际上也是基于 Windows API 编写，理论上来说保留了对 Windows 的兼容性，因此是有可能用在 Windows 上的。于是我分别尝试了 DXVK 和 WineD3D，发现它们都能在我的 N 卡上良好运行，因此我把它们发给受 DirectX 渲染问题困扰的用户让他们测试（直接把它们在系统层面应用是有风险的，所以要配合专门为此进行了修改的非想天则 mod 加载器，来单独给非想天则加载这些库）。
> :::
> 
> **DXVK 和 WineD3D 两种方案默认配置下的测试结果**
> 
> ::: info 可用性
> 
> - WineD3D：在 Wine 上是默认选择；而在所有我所知的受 DirectX 图像缺失问题的设备上，基于 WineD3D 的方案也都能在 Windows 开箱即用，然后问题也确实消失了。此外，WineD3D 也能在多显卡的环境（比如集显+独显）下，遵循用户手动指定的显卡。不过有的 AMD 集显用户反映使用了之后游戏无法正常启动。（不过问题不大，这个解决方案本来也不是面向他们的。）
> - DXVK：在 Wine 社区中被普遍认为是性能更好的选择，因此许多 Wine 发行版会把 DXVK 作为默认的 DirectX 实现。支持 Vulkan 的硬件和驱动没有那么多，因此 DXVK 的支持范围自然也小一些。有用户反馈他的设备（使用 Intel 集显）无法直接使用 DXVK。
> :::
> ::: info 性能
> 
> 大家普遍认为 DXVK 性能比 WineD3D 的好，但这点至少在我们这里的目标用户那儿没有体现出来：我询问了几个用户，结果都是 WineD3D 的 GPU 占用率和 DXVK 基本相当，而 DXVK 占用的内存却比 WineD3D 大不少。
> 
> 关于性能相当的可能的解释是：Intel 对 OpenGL 的实现较好，达到了比较好的性能。（事实上，我的 N 卡上结果中，性能从好到坏依次为 DXVK、微软的实现、WineD3D，在数值上有较为明显的差别。）
> 
> 关于内存占用的可能的解释是：在测试中，DXVK 趋向于将素材放到显存中，而 WineD3D 则并不是这样，同时前者在“显存”中消耗的体积比后者在内存中消耗的体积更大。在集显的“显存”中分配，实际上也是动态分配并使用了内存，从而从结果来说 DXVK 占用总内存更大。
> 
> :::
:::


<!--
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
-->