---
title: CheckVersionFailed错误（病毒）
# 标题
icon: circle-info
# 图标
order: 5
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-07-22
#文章编辑日期
---


::: info 插件弹出```CheckVersion Failed```错误弹窗，无法正常运行

![图片加载中... =400x](https://bu.dusays.com/2024/01/21/65acc908325c9.webp "CheckVersion Failed报错示例图片")

::: warning
**关闭所有弹窗，看游戏是否运行，如果游戏标题显示是1.10版本则是游戏版本问题；否则很有可能是感染了病毒（不是下载的整合包有毒，是电脑上原先就感染了病毒，下载整合包后先前的病毒感染了整合包）**

**病毒伪装成游戏文件，千万不要运行**

<!-- 可以用 ```Symantec Ramnit Removal Tool``` 赛门铁克Ramnit专杀工具修复

[**Symantec Ramnit Removal Tool 下载链接**](https://pan.baidu.com/s/1D8d4eSvuIRnba0x3202aAQ?pwd=xukd)
https://pan.baidu.com/s/1D8d4eSvuIRnba0x3202aAQ?pwd=xukd

**注意：专杀工具会扫描你硬盘（不知道会不会扫U盘）内的所有文件，所以可能会耗时很久，推荐晚上睡觉挂机的时候杀，可能醒来就OK了，然后重启电脑，再检查 th123.exe 文件的大小检验效果** -->
:::


::: info 病毒文件特征
- **没有缩略图icon、文件大小异常、创建日期修改日期很新**

- **文件名诡异，有明显的伪装意图，srv或其他字母结尾**

- **正常110A游戏主程序大小是4704KB，不符合就是中毒被修改了**


![图片加载中... =380x](https://bu.dusays.com/2024/01/21/65acc9429ad1f.webp "病毒文件示例图片")


![图片加载中... =870x](https://bu.dusays.com/2024/01/21/65acc99c5fb30.webp "左边4764KB就是被病毒感染了，右边4704KB才是正常大小")

:::

::: info 补充
还有的人中毒情况是```th123intl```启用有问题(练习模式选完地图崩溃，改卡点进人物就崩溃)

有```d3d9.dll```的情况下(练习模式选完地图崩溃，改卡点进人物就崩溃)

还有的情况是由于系统乱码问题 —— [解决乱码问题](EncodingError.md)
:::


