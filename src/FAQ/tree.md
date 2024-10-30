---
title: 新则整合包目录结构所有文件解析
# 标题
icon: list
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-10-28
#文章编辑日期
---
## 根目录

![根目录](https://bu.dusays.com/2024/10/28/671fb3792143a.jpg =960x)

:::: info 

- [非想天则资源下载（CHM游戏攻略(部分过时)、MOD、其他工具和资源等）](/about/)

- [SokuLauncher 更新器使用说明](/FAQ/update.html)

- [如何开关配置Mod](/mods/WhatsMod.html)

- [非想天则 神AI 使用说明](/FAQ/Others/th123AI.html)




<!-- @include: ../mods/WhatsMod.md#ModReset -->

::::


### 手册目录

- `autopunch检测-check-gui.exe`：[为什么我不支持 AutoPunch 直连](FAQ/Play/AP_NOT_Supported.html)

![手册目录](https://bu.dusays.com/2024/10/28/671fb379122e6.jpg =960x)

## th123文件夹内目录

:::::: info th123文件夹内目录
- [modules](/FAQ/tree.html#modules%E6%96%87%E4%BB%B6%E5%A4%B9%E5%86%85%E7%9B%AE%E5%BD%95)：放 mod(模组) 的文件夹

- [profile](/FAQ/tree.html#profile%E6%96%87%E4%BB%B6%E5%A4%B9%E5%86%85%E7%9B%AE%E5%BD%95)：放机签 .pf 文件的文件夹

- replay：放 .rep 回放录像的文件夹  [**【扩展自定义Rep文件名格式 - ReplayLabelEx】**](/mods/QoLMods/ReplayLabelEx.html)

- [th105](/FAQ/tree.html#th105%E6%96%87%E4%BB%B6%E5%A4%B9%E5%86%85%E7%9B%AE%E5%BD%95)：合体用的绯想天的文件夹

- tsk：本地记录网战战绩的工具的文件夹  [**【战绩记录工具 - TSK】**](/mods/QoLMods/TSK.html) 

- `[LobbiesMod-Swarm].exe`：搭配 Swarm-old 使用的快捷应用IP于大厅工具

- `config123.dat`：游戏内 Config 菜单的数据

- `configex123.ini`：绯想天合体路径以及观战端口的配置

- ==d3d9.dll==：**ModLoader，即所有 mod 的加载器，少了它所有 mod 都会失效**

- `mod.json`：mod加载器的版本信息，会被SokuLauncher检测用于更新

- `d3dx9_33.dll、d3dx9_43.dll、msvcp140.dll、vcruntime140.dll`：Directx9 组件

- ==ModLoaderSettings.json==：**mod 的开关配置文件。**
  - [**如何开关配置Mod**](/mods/WhatsMod.html)

- `score123.dat`：存档文件，里面包含故事模式通关信息，以及卡组解锁信息。默认全开档，也有备份文件，若丢失会导致选人界面缺失灵乌路空和诹访子，以及卡组内卡片变成问号未解锁。 ==双击 `[修复]【 重置 Mod 配置 】.bat` 恢复全开档==

- ==swarm.exe==：**即 Swarm，用于中转得到 IP 建主的工具。可能会被杀毒软件拦截，导致无法获取服务器。**
  - [使用 Swarm 等中转 IP 在大厅里联机](/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA)
  - [Swarm 被杀毒软件误杀，刷不出服务器](/Beginners/BeforePlaying.html#swarm%E8%A2%AB%E8%AF%AF%E6%9D%80-%E5%88%B7%E4%B8%8D%E5%87%BA%E6%9C%8D%E5%8A%A1%E5%99%A8)

<!-- ::::: details 使用 Swarm 等中转 IP 在大厅里联机

<!-- @include: ../Beginners/BeforePlaying.md#SwarmUsage --===>


::::: -->

- `SWARM-CORE.EXE`：Swarm 的子文件，不要单独双击运行，也不要删除，无视即可。**请运行 swarm.exe 程序**

- `swarm-old.exe`：即 [Swarm-old](/Beginners/BeforePlaying.html#swarm%E8%A2%AB%E8%AF%AF%E6%9D%80-%E5%88%B7%E4%B8%8D%E5%87%BA%E6%9C%8D%E5%8A%A1%E5%99%A8)，可能不会被杀毒软件拦截，相比新版没有“IP应用于大厅”的快捷功能

- `SWRSToys.ini`：旧的 mod 的开关配置文件，现在不发挥作用。

- ==th123.exe==：非想天则游戏主程序。**请注意修改时间为 ==2020年8月16日==，文件大小为 ==4.59MB(4,816,896 字节)==**
  - 若不符合则说明 [**游戏文件被蠕虫病毒篡改**](/FAQ/Failed-to-Start/RamnitVirus.html)

- `th123a.dat、th123b.dat、th123c.dat`：非想天则游戏数据文件

::::::

![th123文件夹内目录](https://bu.dusays.com/2024/10/28/671fb3ed8c906.jpg =960x)

### modules文件夹内目录

::: info
- 每个文件夹都对应着一个 mod

- [**各 Mod 说明 👀**](/mods/)，部分小功能 mod 可在 [SokuLauncher](/FAQ/update.html) 内悬浮查看说明

- [**如何开关配置Mod**](/mods/WhatsMod.html)
:::

![modules文件夹内目录](https://bu.dusays.com/2024/10/29/671fb89f9a38f.jpg =960x)




### profile文件夹内目录

![profile文件夹内目录](https://bu.dusays.com/2024/10/29/671fba08445fd.jpg =960x)

:::: info 

- 若你使用 [InfiniteDeck mod](/mods/AdvancedMods/InfiniteDeck.html)，则会看见 .json 后缀的机签文件


::: details 如何在游戏内修改和应用Profile机签名

- 来源：[对战前新人须知 (联机教程)](/Beginners/BeforePlaying.html#开始游戏前-设置好你的机签名-profile-、键位、卡组)

<!-- @include: ../Beginners/BeforePlaying.md#ProfileName -->

::::


### th105文件夹内目录

- 绯想天本体，可双击 `th105.exe` 打开

![th105文件夹内目录](https://bu.dusays.com/2024/10/29/671fba9e137d8.jpg =960x)

