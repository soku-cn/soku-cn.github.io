---
title: 扩展自定义Rep文件名格式-ReplayLabelEx

# 标题
icon: circle-info
# 图标
order: 21
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-06-16
#文章编辑日期
---



::: tip 功能展示

**加 ReplayLabelEx mod 后的文件夹存储格式 👇**


![图片加载中... =700x](https://bu.dusays.com/2024/06/17/66701c789d25d.jpg " ")

![图片加载中... =700x](https://bu.dusays.com/2024/06/17/66701c76de1b5.jpg " ")

**原版Replay文件夹的存储格式 👇**

![图片加载中... =700x](https://bu.dusays.com/2024/06/17/666fa6f231065.jpg " ")

:::

::: important 下载安装

**SokuLauncher 更新器内下载，或者手动下载【2024-06-17】及以后的升级包**

![图片加载中... =300x](https://bu.dusays.com/2024/10/26/671ca5adca22f.webp "点这里下载新发布的 mod")

:::


:::: info 详细-自定义自己喜欢的命名排列格式


```
# UTF-16 LE BOM (UCS-2 Little Endian) <ReplayLabelEx.ini>
# https://www.bilibili.com/opus/938087060078592000
# https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html

####【 扩展自定义Rep文件名格式-ReplayLabelEx 】################

# 取代了 th123/configex123.ini 里的Rep文件名格式

# 注意：文件名建议不要使用 自己/对手 格式区分，否则容易造成内战下1P 2P对应混乱辨别困难的情况

# Self / Opponent 后缀，网战下可自动区分 自己/对手，其他模式下按照名称 abcd 字典序统一排列

# 各标签 label 代号和内容均可自定义，若填入非法字符 / : * ? "" < > |  会导致文件名错误，Rep也无法保存

# ReplayLabelEx.ini 和 CharacterNames.ini 配置文件支持热修改

######################################################

[PathFormat]
file_vs=%mode\%y-%m-%d_%h-%min-%sec_%p1(%spc1)_%p2(%spc2)_(%s1︰%s2_%e1)
# %y %m %d %h %min %sec 表示时间，年 月 日 时 分 秒
# 反斜杠 \ 表示文件夹


[BattleMode]
label=%mode
# %mode 表示对战模式，可以根据 本地人机、本地双人、联机对战、观战 等模式分别保存至对于的文件夹

vs_com=	【本地Rep】\VS_COM
vs_loc= 【本地Rep】\VS_PLAYER
vs_net= 【联机对战Rep】\[%po]
spectate= 【观战Rep】\[%ps]_[%po]
other=	【其他】
# 可以自定义分类文件夹的名称


[BattleResult]
label1=%e1
# %e1 表示 1P 的胜负
win= 胜
lose= 负
noed= 无
draw= 平
;label2=%e2
;labels=%es
;labelo=%eo


[BattleScore]
label1=%s1
label2=%s2
# %s1 表示 1P 的比分，%s2 表示 2P 的比分
# 推荐使用这个特殊的对称全角冒号 ︰ 普通的中文冒号是不对称的


[ProfileName]
; 玩家的机签名
; %p1
; %p2
labels=%ps
labelo=%po
# Self / Opponent 后缀


[CharacterName]
; 使用原版英文角色名，如 "reimu, marisa"
; %c1
; %c2
labels=%cs
labelo=%co
# Self / Opponent 后缀


[CharacterNameW]
# sp 前缀支持中文角色名，如“灵梦，魔理沙"
# 在 th123\modules\ReplayLabelEx\CharacterNames.ini 内自定义角色名
label1=%spc1
label2=%spc2
labels=%spcs
labelo=%spco
# Self / Opponent 后缀

```

::: details 默认CharacterNames.ini
```
# ANSI-GBK <CharacterNames.ini>
# https://www.bilibili.com/opus/938087060078592000
# https://wiki.514.live/mods/QoLMods/ReplayLabelEx.html

[Character]
ch0=灵梦
ch1=魔理沙
ch2=咲夜
ch3=爱丽丝
ch4=帕秋莉
ch5=妖梦
ch6=蕾米莉亚
ch7=幽幽子
ch8=八云紫
ch9=萃香
ch10=铃仙
ch11=文
ch12=小町
ch13=衣玖
ch14=天子
ch15=早苗
ch16=琪露诺
ch17=红美铃
ch18=灵乌路空
ch19=诹访子
; ch20=随机
; ch21=大鲶鱼

ch22=犬走椛
ch23=皮丝
ch24=芙兰
ch25=阿燐
ch26=幽香
ch27=辉夜
ch28=妹红
ch29=魅魔
ch30=寅丸星
ch31=水蜜
ch32=赤蛮奇
ch33=古明地觉
ch34=八云蓝


```
:::


::::



::: note 

- 灵感+借鉴原型：[ReplayExtension 原链接](https://resemblances.click3.org/product_list/index.cgi/detail/38)

- 鱼蛙仓库源代码 https://github.com/jyanf/ReplayLabelEx/
:::




