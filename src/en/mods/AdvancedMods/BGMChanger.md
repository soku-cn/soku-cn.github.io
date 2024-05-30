---
title: 改BGM-BGMChanger

# 标题
icon: circle-info
# 图标
order: 3
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-01
#文章编辑日期
---


::: info 功能简介
BGMChanger 默认关闭

打开对应 ini 文件，会看到各个BGM `th123\Modules\BGMChanger\BGMChanger.ini`

`path` 即文件路径，推荐自己新建一个文件夹，设置 path 为 `Modules/BGMChanger/文件夹/文件.ogg`
`intro` 即开始循环点（秒数 x 44100）
`loop` 即循环长度，从intro点开始过多久，就回到intro点（秒数 x 44100）
 
个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 **（秒数 x 44100）** 即可循环

如果需要音频编辑软件的话，推荐 Audacity，免费小巧

:::

::: caution 文件夹和文件名都不要用中文！
:::

::: tip 配置示例
```
path=Modules/BGMChanger/0/12-till-when.ogg
intro=1265361
loop=2954303

path=Modules/BGMChanger/0/23-till-when-alternative-version.ogg
intro=1
loop=8621663
```
:::

::: warning
**替换 BGM 用的音乐文件必须是 `ogg 格式，44100 HZ`，声道默认就行（如果没用那就试试单声道）。** 

可以使用这个网站在线转换 **https://convertio.co/zh** 
其他的应该也是可以的随便你

![](https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp =400x)

:::