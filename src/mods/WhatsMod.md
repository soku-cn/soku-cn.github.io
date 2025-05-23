---
title: 如何开关配置Mod

# 标题
icon: gears
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-01-07
#文章编辑日期
---

### 如何安装新 mod
::: tabs

@tab 方式一：手动下载到的mod压缩包（举例 TagSoku）

解压压缩包，里面应该会有含有 dll 文件的文件夹，如 `TagSoku` 文件夹，里面含有 `TagSoku.dll` 文件

已经有文件夹的话就直接将 TagSoku 文件夹放入 `th123/modules` 内，最后再参考下面章节，在配置里激活 mod，然后就可以去游戏内验证是否生效了。


> 下载到新的 mod 文件，要么是单独的 .dll 后缀文件，要么是一个包含 .dll 文件以及 .ini 配置文件的文件夹。单独的 .dll 后缀文件的话，就在 `th123/modules` 文件夹里创建一个文件夹，改成你分得清的名字（不建议带汉字和空格），然后再将你下来的 .dll 后缀文件放进去新建文件夹里

@tab 方式二：从SokuLauncher启动器下载

![右上角](https://bu.dusays.com/2024/01/21/65acec4d9e149.webp =300x)

右上角最左边的下载按钮，可以检测下载新发布的未安装的 mod

:::

### 如何开关配置 mod

::: tabs
@tab 方式一：SokuLauncher启动器

- [**SokuLauncher 更新器使用说明**](/FAQ/update.html)


每次打开时，会自动检测现有 mod 有无更新

右上角点中间选项是设置

![右上角点中间选项是设置](https://bu.dusays.com/2024/01/21/65acec4d9e149.webp =300x)


**在更新器内修改 mod 配置完毕后，记得点 ==右上角保存==**

![在更新器内修改 mod 配置完毕后，记得点右上角保存](https://bu.dusays.com/2024/01/21/65acec60cfc0e.webp =300x)

@tab 方式二：游戏内D菜单


**“12-8 版本”后使用ModLoader（`d3d9-loader-debug.dll`），则 `SWRStoys.ini` 作废，而是使用 `ModLoaderSettings.json` 文件**

**主菜单里按D，有修改mod配置的菜单，也有添加新mod的选项**

![看右上角，主菜单里按D，有修改mod配置的菜单](https://bu.dusays.com/2024/01/21/65acecd975153.webp =300x)

![](https://bu.dusays.com/2024/01/21/65acece85cf42.webp =300x)

@tab 方式三：直接修改配置文件ModLoaderSettings.json

**“12-8 版本”后使用ModLoader（`d3d9-loader-debug.dll`），则 `SWRStoys.ini` 作废，而是使用 `ModLoaderSettings.json` 文件**

若 th123 文件夹内的 `d3d9.dll` 文件大小为 `687KB` 且存在 `ModLoaderSettings.json` 文件，则根据此文件为配置，忽略 `SWRSToys.ini` 的内容，若不存在 `ModLoaderSettings.json` 文件，则根据 `SWRSToys.ini` 内的内容生成一份 `ModLoaderSettings.json` 文件，再根据此文件为配置

若 th123 文件夹内的 `d3d9.dll` 文件大小为 `99KB`，则根据 `SWRSToys.ini` 内的内容作为配置，忽略 `ModLoaderSettings.json` 文件

![ModLoaderSettings.json 文件](https://bu.dusays.com/2024/10/26/671ca75d47ab1.webp =400x)

:::

<!-- ::: warning 如果你是使用启动器，注意其会强制开启或关闭部分mod

![](https://bu.dusays.com/2024/03/02/65e3167068c34.png =500x)

::: -->


### mod配置搞砸了的话，可以恢复配置为默认初始状态

<!-- #region ModReset -->

::: tabs
@tab 情况一：点击这里就可以恢复默认了

![不小心搞砸了的话，点击这里就可以恢复默认了 `[修复]【 恢复默认 Mod 配置 】.bat`](https://bu.dusays.com/2024/02/18/65d1d3683f7a8.png =750x)

@tab 情况二：删掉mod然后再重新安装

![删掉mod然后再重新安装](https://bu.dusays.com/2024/10/26/671ca745639f8.webp =450x)

:::
<!-- #endregion ModReset -->


### 进一步设置mod，自定义按键和开关功能等

某些插件的 ini 配置文件内或者游戏内可以进行设置，如**自定义热键和开关某些功能**

**右上角打开设置**，模组页面，这里**右键可以快捷打开各种 mod 的 ini 配置文件**以及文件夹位置，**鼠标悬浮可以显示 mod 介绍**

![SokuLauncher 更新器，这里右键可以快捷打开 ini 配置文件](https://bu.dusays.com/2024/01/21/65acc1d186370.webp =400x)

![在 modules 文件夹内，各个 mod 的文件夹，有些含有 ini 文件可供设置](https://bu.dusays.com/2024/01/31/65ba67f4278ce.png =700x)

![有些含有 ini 文件可供设置](https://bu.dusays.com/2024/10/26/671ca72cbf51c.webp =500x)


::: details 什么是 SWRSToys / 非想天则 mod
::: info 什么是 SWRSToys / 非想天则 mod
**Github 项目仓库**  https://github.com/SokuDev/SokuMods/

**国际非想天则 Disocrd 社区群（需梯子）**  https://discord.gg/hisouten

我的mod群 200803640，欢迎对mod感兴趣，有疑问需要帮助的朋友。

![三件套组成 SWRSToys](https://bu.dusays.com/2024/01/21/65aced2c30715.webp =700x)
:::

