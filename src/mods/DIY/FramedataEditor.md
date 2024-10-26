---
title: 制作角色改色和导入游戏
# 标题
icon: circle-info
# 图标
order: 2
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-09-04
#文章编辑日期
---

## 1.将已经制作好的角色皮肤改色 .pal 文件导入游戏

> [!info]
> ::: tabs
> @tab Shady-loader法（推荐）
> ::: tip Shady-loader法（推荐）
> **将 pal 文件按规则命名，`data_character_对应角色的名字_palette00X.pal`**（`X`取值为`0-7`，一共八个配色位）
>
> **如果我们想设置其为瓜的第一个配色，<br>那么对应角色的名字中，瓜就是 `suika`，第一个配色就是 000**
> 
> **最终我们得到 `data_character_suika_palette000.pal`**
> 
> **然后把这个 pal 文件直接打包成 zip 包或者文件夹 ==（压缩包里不要多套一层文件夹）==，放入 `shady-loader` 文件夹内，在游戏主菜单按 F2 菜单加载即可**
> 
> [**shady-loader 使用方法传送门**](/mods/DIY/Shady-loader.html)
> 
> @tab Palette-picker法
> ::: tip Palette-picker法
> [**Mod说明：改色管理 - palette-picker**](mods/AdvancedMods/palette-picker.html)
> 
> ![Palette-picker使用效果如图](https://bu.dusays.com/2024/01/21/65acddebbe890.webp =400x)
> 
> @tab th123c.dat 解包封包古法
> ::: tip th123c.dat 解包封包古法
> 新则不需要这种方法，1.10 版本不能使用插件，需要这种方法
> 
> 没什么好说的，偷梁换柱即可
> 
> @tab data文件夹法（不推荐）
> ::: tip data文件夹法（不推荐）
> 在 `MemoryPatch` 里启用了 `FileSystemFirst` 后 ==**（警告：开启可能会增长游戏加载时间，即使你没有通过它加载任何东西）**==
> 
> 在 `th123` 文件夹内新建文件夹命名为 `data，继续在` `data` 文件夹里面新建 `character` 文件夹，再继续创建如图的角色名文件夹，
> 
> 将得到的 **513 字节** `palette000.pal` 文件放入角色名文件夹内 ==（见下方附录）==，然后返回游戏主菜单，再进入选人界面即可。**> （支持热更新，每次回主菜单再进来选人界面就可以重新刷新读取，不需要重开游戏）**
> 
> **把 `data` 文件夹或者 `character` 文件夹之类的改个名，即可破坏这种导入方式以取消导入**
> 
> ![成品就这样，注意路径文件夹角色名是否正确，pal文件命名格式是否正确，是否是游戏和编辑器可以读取的格式](https://bu.dusays.com/2023/09/13/6500902380b28.png =800x)
> 
> 
> - `palette000.pal` 对应 **第一个** 配色位
> - `palette001.pal` 对应 **第二个** 配色位
> - ...
> - `palette007.pal` 对应 **第八个也就是最后一个** 配色位
> 
> ::: important 举个例子吧
> 
> 
> **需求：我想要将 `黑白瓜.pal` 这个配色放到瓜的`第一个配色位`上**
> 
> **步骤：**
> 1. **在 `th123` 文件夹内新建文件夹，取名为 `data`**
> 2. **在这个 `data` 文件夹内新建文件夹，取名为 `character`**
> 3. **在 `character` 文件夹内新建文件夹，取名就是对应角色的名字，瓜就是 `suika`==（见下方附录）==**
> 4. **将 `黑白瓜.pal` 文件移动到这个对应角色的名字的文件夹内**
> 5. **将 `黑白瓜.pal` 文件名改为 `palette000.pal`（000就是第一个）**
> 6. **游戏不用关，回到主菜单，重新进练习模式选人即可**
> :::
> ::: details 对应角色的名字（附录）
> ::: note 对应角色的名字
> 1. alice
> 1. aya
> 1. chirno
> 1. iku
> 1. komachi
> 1. marisa
> 1. meirin
> 1. patchouli
> 1. reimu
> 1. remilia
> 1. sakuya
> 1. sanae
> 1. suika
> 1. suwako
> 1. tenshi
> 1. udonge
> 1. utsuho
> 1. youmu
> 1. yukari
> 1. yuyuko
> :::

## 2.自己使用编辑器制作角色皮肤改色

::: info 下载 FramedataEditor（FDE）编辑器并使用改色功能
[**下载链接传送门，压缩包内有简单操作说明**](/about/#非想天则资源下载指路) 


![下载mod工具](https://bu.dusays.com/2024/01/21/65acdd09285ee.webp =320x)

::: warning
**首次打开会提示选择游戏 th123c.dat 数据位置**

**注意需要将游戏路径（文件夹名称）改为全英文，否则会报错**
::: details FrameDataEditor 编辑器操作说明
::: info FrameDataEditor 编辑器操作说明

左上角，先导入角色： File > import > framedata > from game package

然后导入配色（自己新建配色则忽略）： File > import > palette > from file

开始编辑配色，切换英文输入法，**按 H 可关闭判定框，然后可以滚轮放大**

打开调色板，左上角 View > palette editor，然后鼠标可以悬浮查看改色区域

导出配色： File > export > palette > to file 【注意命名和后缀，如palette000.pal】

一共有 8 个配色位所以你只能写 000-007 内的范围。

**正常你会导出得到一个513字节的文件（Alt+双击 或者 右键-属性，查看文件大小）**
此文件可以支持再次导入FDE编辑器编辑，或者直接导入游戏使用，不需要再进行什么转化。

![如图，改色完成，左上角导出得到 pal 文件](https://bu.dusays.com/2024/01/21/65acdf0948973.webp =400x)

![导入进游戏内的效果](https://bu.dusays.com/2024/01/21/65acdf265b777.webp =400x)
:::


## 3.将前人使用老工具“绯色二”制作的皮肤配色 .pal 文件转化格式以导入游戏和编辑器

::: info
如果pal文件是显示 **1.02KB（Alt+双击 或者 右键-属性，查看文件大小）** 的，则是使用老工具“绯色二”制作的**未转化格式**，可继续在“绯色二”上编辑，不能导入FDE编辑，也不能直接导入游戏

使用 convpal-old-FDE 转化工具将其转化为 **513 字节**的文件

**用法是将未转化的pal文件拖入其上**，转化后的文件可以导入FDE编辑，也可以导入游戏内使用

![新工具 Shady-Packer](https://bu.dusays.com/2024/03/01/65e158e8763d5.png =400x)
:::

## 4.convpal-true 转化工具和 true-color-palettes 的插件可搭配制作带透明度的配色

::: info
上面的新工具 Shady-Packer 内有一个半透明妖梦的成品，是转化后的格式，也是 1KB大小

我暂时还不会制作，但是可以去问，如果有人想做的话可以在mod群里找我，我再去问问看怎么做

![半透明妖梦配色](https://bu.dusays.com/2024/01/21/65acde92efe8b.webp =200x)

![半透明妖梦配色2](https://bu.dusays.com/2024/01/21/65acdeda97f8c.webp =500x)

## 5.已知问题


::: warning 配色转化后得到 515字节 的 pal 文件，加载进游戏后配色乱码
**解决方法二选一：**

1、不要用 Palette-Picker mod
    - **无 Palette-Picker 法不能加载大于 513字节 的 pal 文件，如透明配色等**

2、用诸如 `HxD Hex Editor` 之类的16进制编辑器打开 515字节 的那个 pal 配色文件，删掉末尾的两个字节（如FF两个字母代表一个字节）


:::

## 编辑器导入额外素材

::: info 编辑器导入额外素材

在左上角，点 File，点 settings，可选择导入额外素材文件夹

素材文件夹可以是包含文件夹层级 `data/character/reisen/xxxxx.png` 格式的文件夹，
也可以是包含按 shady-loader 格式命名的文件 `data_character_reisen_xxxxx.png` 的文件夹

![settings 内导入额外素材文件夹](https://bu.dusays.com/2024/10/26/671c956eebfd8.webp =500x)

导入后，就可以使用并预览其内的素材资源了

![导入额外素材后的效果，铃仙眼睛多出来了索引配色](https://bu.dusays.com/2024/10/26/671c956f1d105.webp =800x)

:::


## 修改弹幕特效颜色等

::: info 用到的软件工具

- LunaPic（在线网站） / Photoshop

https://discord.com/channels/167593473854144512/253944555831820288/1272981537050067087
https://discord.com/channels/167593473854144512/253944555831820288/892911846254862346
例子 LunaPic Color Tint
:::



## 修改角色Sprite精灵图色块区域

::: info 用到的软件工具

- Aseprite（贴吧内下载）

:::






