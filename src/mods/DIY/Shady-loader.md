---
title: 下载管理美化包（Shady-loader）
# 标题
icon: circle-info
# 图标
order: 10
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-15
#文章编辑日期
---

<!-- ::: caution 全人类灵击动作的包有bug，会导致不同步，不要使用


- [【非想天则Mod】全人类单独灵击动作](https://www.bilibili.com/video/BV1Cm4y1K7aY/)

::: -->

## Shady-loader 2.8 版本更新，F2 下载列表
::: info 更新内容
从 [灵梦图标的启动器 SokuLauncher](/FAQ/update.html) **更新 Shady-Loader 2.8 版本**，
此次更新由于修改了配置数据，会关闭你当前的所有美化包，但是美化包文件都还是保留的不会丢失
- 增加左右方向键翻页的功能
- 按 C 可以调换 shady 包的优先级位次顺序
- 增加国内 gitee 源的 shady 包下载列表（**如果你想上传自己的美化包到 F2 列表上公开，可联系三回 QQ 1434716883**）
:::

进入游戏，按 F2 打开菜单，你可以重新打开你需要的 shady 包，
也请顺路往下看看我们推荐的 shady 包，全都配有封面和简介，看到感兴趣的可以下载

![](https://bu.dusays.com/2025/04/03/67ee88ec73584.jpg =600x)




## 游戏外手动修改配置文件来调整 shady 包优先级

文本编辑器打开文件 `th123\modules\shady-loader\shady-loader.ini`

`[Packages]` 栏目下 `文件名=1` 表示启用这个包，`文件名=0` 表示关闭这个包

最末尾的 `[Options]` 栏目下，最末尾的 `order=文件1,文件2,····` 就是表示 shady 包的优先级次序，越靠前越优先，后添加的包都会处于最末尾，可以手动 Ctrl X 剪贴到最前面以保持高优先级，注意使用英文逗号隔开

操作完后，按 Ctrl S 保存文件，建议复制一份作为备份，然后重开游戏即可

![th123\modules\shady-loader\shady-loader.ini](https://bu.dusays.com/2025/04/03/67ee8df5d2f5c.jpg =300x)


## F2菜单里变红色（美化包重复冲突）

**如果美化包变红色，说明其中某些部分存在冲突而无法加载**

假设有A包和B包，它们都修改了血条样式，现在情况是A包绿色，B包红色，加载情况则是A优先
现在你想要B包优先，显示出B包的样式，有以下方法


### 方法一、F2菜单内按C调换位置，越往顶上越优先生效

按F2打开菜单，会发现A包更靠顶上，是绿色；而B包位于下方，是红色。

此时我们移动光标到B包，按下C键，然后再移动光标到A包的位置，按Z确定。

就会发现B包和A包互换了位置，现在B包是绿色，A包是红色。

越往顶上越优先生效，再进入游戏，检验效果。


###  方法二、手动处理重复冲突的素材

打开（解压）A和B两个压缩包查看比对，找到其中的相同重复文件，删掉（移除）你不需要的



<!-- ::: tabs
@tab 解决办法1
**更新 Shady-loader 2.6.1 即可**

![](https://bu.dusays.com/2024/06/19/66724c89de881.png =450x)

@tab 解决办法2
**将美化包的zip压缩包解压成文件夹，再删掉压缩包，即可**

![解压后，一层文件夹，再删除zip压缩包](hhttps://bu.dusays.com/2024/10/26/671ca601790bd.webp =850x)

::: -->


## 将手动下载的美化包导入游戏内
::: info 一、将美化包zip放入shady-loader文件夹
**将“zip”或“文件夹”格式的美化包放入这里 `th123/modules/shady-loader`**

**如果是用文件夹形式，注意 ==文件夹的名称不能包含小数点==**

![将“zip”或“文件夹”格式的美化包放入这里 `th123/modules/shady-loader`](https://bu.dusays.com/2024/01/21/65acdc2ceabbb.webp =900x)
:::

::: tip 二、激活美化包
**放置完 zip 包后在游戏内按 F2 打开菜单，然后按Z，选择 Enable，看到变绿即可，部分修改可能需要重开游戏** 

**或者在 `shady-loader.ini` 内，手动编辑 `文件名=1` 的形式激活**
:::

::: caution F2 菜单里变绿但是依然无效
**打开压缩包查看，注意压缩包不要 ==多嵌套了一层文件夹==，以及压缩包内文件的名字是否规则正确**

**如果是用文件夹形式，注意 ==文件夹的名称不能包含小数点==**

![zip 压缩包内应该是这个样子，**注意压缩包里面不要有文件夹**](https://bu.dusays.com/2024/01/21/65acdc4ecc467.webp =400x)

:::




## 关于修改对战结束后的角色立绘等非英文名的文件
:::: details 关于修改对战结束后的角色立绘等非英文名的文件


- [**Shady-Loader Lua 编程示例**](https://docs.qq.com/aio/DR25tUFNLRkhpY2lS?p=W0IYddrsKfOgW5MSxkO2MR)
- Mod 交流群 200803640

由于zip内无法读取到这些非英文名的文件，所以我们需要使用 lua 工具给这些文件取个别名
以及在某个文件可以重复使用的情况下，我们也可以使用别名来一文件多用，而不需要复制多个文件来逐一替换

新建文本文件改名为 `init.lua`，在其中按照需求添加 lua 代码即可，代码例子如下

![](https://bu.dusays.com/2024/03/16/65f59babbf61c.png =400x)
<!-- 
1. 晧 = 負 = lose；战败
2. 娋 = 汗 = sweat；流汗，无语
3. 搟 = 怒 = angry；生气
4. 嬃 = 驚 = surprise；惊讶
5. 梋 = 余 = confident；自信，优越
6. 榝 = 惑 = confuse；怀疑，不解
7. 晛 = 普 = normal；普通立绘
8. 寛 = 決 = attack；一般和释放符卡的立绘差不多，战斗姿态
9. 婐 = 嬉 = happy；笑颜
 -->


::: details lua一文件重复利用例子
```lua
loader.removeFile("data_character_komachi_bulletCa000.png")
loader.addAlias("data_character_komachi_bulletCa000.png",
    string.format("data_character_youmu_objectAa000-%03d.png", info.teamId))
-- 使用妖梦的麻薯贴图，作为小町的幽灵贴图，它们是一模一样的，这样就不必额外复制一份幽灵贴图给小町了
```
:::

::: details lua一维数组例子
```lua
-- 一维数组 UTF-8  init.lua
local Path0 = "data_se_alice_%s.wav"
local Aminos = {"035","026"}
function replaceAll(name, xxx)
		for e = 1, #xxx do
			local path1 = string.format(Path0, xxx[e])
			loader.removeFile(path1)
			loader.addAlias(path1, string.format(Path0, name))
		end
	end
-----------------------------------------------------------------------
replaceAll("Aminos", Aminos)
```
:::

::: details lua二维数组例子
```lua
-- 二维数组 UTF-8  init.lua
local Path0 = "data_character_%s_stand_%s.png"
local Dict = {
	lose	= "\x95\x89",--負
	sweat	= "\x8A\xBE",--汗
	angry	= "\x93\x7B",--怒
	surprise	= "\x8B\xC1",--驚
	confident="\x97\x5D",--余
	confuse	= "\x98\x66",--惑
	normal	= "\x95\x81",--普
	attack	= "\x8C\x88",--決
	happy	= "\x8A\xF0",--嬉
	--all	= "\x95\x89\x8A\xBE\x93\x7B\x8B\xC1\x97\x5D\x98\x66\x95\x81\x8C\x88\x8A\xF0"
}
local function replaceAll(name, selc)
	if type(name)=="number" then name = soku.characterName(name) end
	if type(selc)=="table" then
		for i,e in ipairs(selc) do
			local path1 = string.format(Path0, name, Dict[e])
			loader.removeFile(path1)
			loader.addAlias(path1, string.format(Path0, name, e))
		end
	else
		for e,j in pairs(Dict) do
			local path1 = string.format(Path0, name, j)
			loader.removeFile(path1)
			loader.addAlias(path1, string.format(Path0, name, e))
		end
	end	
end
-----------------------------------------------------------------------
--replaceAll(soku.Character.Meiling)
--replaceAll("meirin", {"lose", "sweat"})
--replaceAll("meirin")  -- 游戏内名字，加双引号  meirin udonge chirno
```
:::
::::

