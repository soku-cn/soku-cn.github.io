---
title: 如何将美化包导入游戏（Shady-loader）
# 标题
icon: circle-info
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-15
#文章编辑日期
---

### 将美化包导入游戏内（通过 Shady-loader）
::: info 将美化包导入游戏内（通过 Shady-loader）
**将“zip”或“文件夹”格式的美化包放入这里 `th123/modules/shady-loader`**

![将“zip”或“文件夹”格式的美化包放入这里 `th123/modules/shady-loader`](https://bu.dusays.com/2024/01/21/65acdc2ceabbb.webp =800x)

::: tip
**放置完 zip 包后在游戏内按 F2 菜单，然后 Enable，变绿即可，部分修改可能需要重开游戏** 

:::

::: warning F2菜单里变绿但是依然无效
**打开压缩包查看，注意压缩包不要==多嵌套了文件夹==，以及压缩包内文件的名字是否规则正确**

![zip 压缩包内应该是这个样子，不用解压，**注意压缩包里面不要有文件夹**](https://bu.dusays.com/2024/01/21/65acdc4ecc467.webp =800x)

:::

::: warning F2菜单里变红色（美化包重复冲突）
**如果美化包变红色，说明其中某些部分存在冲突而无法加载，<br>可以打开（解压）压缩包查看比对，会发现有多个包修改了相同的文件，<br>比如一个包里把蓝色的灵力珠改成了绿色，还一个包改成了紫色，<br>那你想要绿色的话，把紫色灵力珠的图片删掉就行了**
:::

:::: caution Win7电脑导入美化包后，进选人界面就报错崩溃的问题

::: tip 解决办法
**可以尝试 [**下载这个旧版本的 dll**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/shady-loader%EF%BC%88%E8%80%81%E7%89%88%E6%9C%AC%EF%BC%8Cwin7%E6%9C%89%E5%AD%97%EF%BC%8C%E5%B8%A6%E4%B8%AD%E6%96%87%E7%9A%84%E8%AF%9D%E6%B8%B8%E6%88%8F%E5%86%85%E5%BC%80%E5%85%B3%E4%BC%9A%E5%B4%A9%E6%BA%83%E9%9C%80%E8%A6%81%E6%89%8B%E5%8A%A8%E5%BC%80%E5%85%B3%EF%BC%89.dll)，将其改名为 `shady-loader.dll`<br>打开文件夹 `th123\Modules\shady-loader`<br>将刚改名的这个 dll 覆盖掉原本的。**

::: warning 这个旧版本 dll 的缺点
**Win7可用，F2 菜单里能显示美化包文件名，<br>文件名带中文的话游戏内开关会崩溃，最好通过`shady-loader.ini`来开关美化包**
:::

![Win7电脑导入美化包后，进选人界面就报错崩溃的问题](https://bu.dusays.com/2024/04/20/662398fc89332.png =400x)

::::



### 下载或自己制作美化包

::: info 下载其他人制作的美化包
::: tabs
@tab 下载方式一：网盘QQ群等直接下载
::: tip 下载方式一，网盘QQ群等直接下载


[**在网盘内或者QQ群文件可以搜索并找到下载**](/about/) 

![下载1](https://bu.dusays.com/2024/01/21/65acdc9078375.webp =400x)　![下载2](https://bu.dusays.com/2024/01/21/65acdc9cd8463.webp =420x)

@tab 下载方式二：游戏内 F2 菜单
::: info 下载方式二：游戏内 F2 菜单
**在游戏主菜单，按 F2 就是打开配置菜单了，可以开关和定位美化包** http://shady.pinkysmile.fr

![](https://bu.dusays.com/2024/01/21/65acdcd434be8.webp =500x)
:::


::: info 自己制作素材修改，自己制作美化包 Mod
[**【非想天则 Mod】魔改 / FDE 编辑器 简易使用说明 By 十字凤**](https://www.bilibili.com/video/BV1tp421971E/)

**下载游戏解包素材以及其他 Mod 工具，欢迎加 Mod 群讨论 【QQ群：200803640】**

[**在网盘内或者QQ群文件可以搜索并下载游戏原始解包素材以及 mod 工具**](/about/#非想天则资源下载指路)

![](https://bu.dusays.com/2024/01/21/65acdd09285ee.webp =400x)

**如果你想上传自己的美化包到 F2 菜单服务器上，可在 Discod 内联系 PinkySmile 或联系三回（QQ 1434716883）转告**
:::



::: details 关于修改对战结束后的角色立绘
::: info 关于修改对战结束后的角色立绘
不能使用“zip 压缩包格式”，要使用“文件夹格式”，且使用这种格式汉字

![](https://bu.dusays.com/2024/03/16/65f59babbf61c.png =400x)

1. 晧 = 負；战败
2. 娋 = 汗；流汗，无语
3. 搟 = 怒；生气
4. 嬃 = 驚；惊讶
5. 梋 = 余；自信，优越
6. 榝 = 惑；怀疑，不解
7. 晛 = 普；普通立绘
8. 寛 = 決；一般和释放符卡的立绘差不多，战斗姿态
9. 婐 = 嬉；笑颜
:::

