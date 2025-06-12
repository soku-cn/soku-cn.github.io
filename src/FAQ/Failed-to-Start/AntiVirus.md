---
title: 解压失败，杀毒软件误杀误报
# 标题
icon: file-lines
# 图标
order: 1
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-10-25
#文章编辑日期
# 页脚
# footer: 这是测试显示的页脚
# 版权信息
# copyright: 无版权
---

## 解压说明，下载并安装解压软件
::: important 解压说明

- [**【电子扫盲课】【小白必看】如何解压压缩包？ - ASYS 科技 · 2022-6-17**](https://www.bilibili.com/video/BV1xZ4y1v7pU/)

::: note
<!-- 1. 下载并安装一个解压软件，**不建议使用 Windows 自带的“提取”功能**
   - [**7z**](https://www.7-zip.org/)
   - [**Bandzip**](https://www.bandisoft.com/bandizip/) -->

1. 用解压软件或解压“完整游戏包”

1. 给杀毒软件（Windows Defender或你下的第三方杀软）设置白名单信任文件夹；或者临时关闭杀软的实时防护功能
**不会操作的话看下面的绿色框文字**


2. 双击 `[ 启动游戏并检测更新 ] +Swarm+TSK.bat` 尝试运行游戏，没问题就行

3. **重新打开杀毒软件各项功能，若提示报毒等，请点击信任操作**
   - [大厅常见问题(联机教程)](/FAQ/Play/LobbyGuide.html)
   - [对战前新人须知(联机教程)](/Beginners/BeforePlaying.html)
:::


## 临时关闭杀软和添加白名单信任
::: tip 临时关闭杀软和添加白名单信任
- [Vposy 〈帮助中心〉▷如何关杀毒软件](https://mp.weixin.qq.com/s/kivDC7BhuZ8i1Uefr7eQJQ)

- [Vposy 〈帮助中心〉▷添加至白名单](https://mp.weixin.qq.com/s/xN2OK0oYU4MqsYlFqTL_qQ)

- [**【视频】游戏文件被报毒误删？日头牛手把手教你设置添加信任和找回误删文件**](https://www.bilibili.com/video/BV1Uu411A7Hh/)

::: details 部分杀毒软件隔离区文件恢复教程（转载自火绒安全论坛）
[部分杀毒软件隔离区文件恢复教程（转载自火绒安全论坛）](https://bbs.huorong.cn/forum.php?mod=viewthread&tid=45850)

**图片请手动点击放大查看**

![1 火绒隔离.jpg](https://bu.dusays.com/2024/10/26/671cad799a3ea.webp =100x) ![2 Defender 隔离.jpg](https://bu.dusays.com/2024/10/26/671cad7981bbf.webp =100x) ![3 360 隔离.jpg](https://bu.dusays.com/2024/10/26/671cad7971659.webp =100x) ![4 腾讯管家隔离.jpg](https://bu.dusays.com/2024/10/26/671cad7983b75.webp =100x) ![5 金山毒霸隔离.jpg](https://bu.dusays.com/2024/10/26/671cad7983b75.webp =100x)
:::

## 杀毒软件误杀示例
::: info 杀毒软件误杀示例，可能会导致无法解压，无法启动游戏，缺失mod dll文件

mod 的 dll 文件提示 file does not exist，就是被杀毒软件误杀了

![](https://bu.dusays.com/2024/10/26/671cad1e4266a.webp =x220) ![](https://bu.dusays.com/2024/10/26/671cad1e4aa6e.webp =x220)
![](https://bu.dusays.com/2024/10/26/671cad1e4aa6e.webp =500x) ![](https://bu.dusays.com/2024/10/26/671cad1e68937.webp =500x)
:::

<!-- #region swarm-down -->
### Swarm 获取服务器列表失败
::: caution Swarm 获取服务器列表失败

- 原因1：很多人都出现这种情况，就是 swarm 服务器出了问题，请在QQ群 @三回 或 @1146410994 反映

- 原因2：杀软把 Swarm 软件误杀拦截了，请添加白名单信任

.　　![](https://bu.dusays.com/2024/10/26/671cacd268d1f.webp =x130)　　　　![](https://bu.dusays.com/2024/10/26/671cace3b6e37.webp =x130)



:::

::: tip 也可以使用swarm-old组合启动

如果没有这个bat，[**请下载比 2024-08-04 更晚的升级包**](/about/)

![也可以使用swarm-old组合启动，如果没有这个bat，请下载比 2024-08-04 更晚的升级包](https://bu.dusays.com/2024/10/26/671cacf4854a4.webp =500x)

:::



::: details 实在不行或者赶时间的话，也有备用联机工具

==备用联机工具下载可见 [123网盘（/其他非想天则资源/备用联机工具）](https://www.123pan.com/s/scmzVv-Z3h6v.html)==

::: tabs
@tab 1、不会被杀软误杀的旧版本 Swarm-old
**如果不方便解决的杀软误报等问题而无法使用新版 Swarm 的话，也可以使用旧版本 Swarm-old，带猫头鹰图标的那个，一般整合包内已经包含有 Swarm-old 了，不必再次下载**

[**下载旧版本 Swarm-old**](https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/swarm-old.zip)

![](https://bu.dusays.com/2024/10/26/671cacbe5cd68.webp =400x)

![](https://bu.dusays.com/2024/10/26/671c9a96f29f0.webp =x400)

@tab 2、thlink by weilinfox（桜風の狐）

==**警告：不支持新版本giuroll的观战，只会无法观战而不会导致连接断开**==

[**详细请看其Github页面**](https://github.com/weilinfox/youmu-thlink)

没有搭载服务器，只有作者自己的服务器在运行中转服务

@tab 3、DAxZE by 喵音帝 YIU
==**警告：不支持新版本giuroll的观战，若被观战会导致连接断开！！！**==

**DAxZE by 喵音帝YIU，通过 萌卡(mycard) 的服务器进行中转，和 Swarm 功能类似，在整合包的 th123 文件夹内可以找到**

[**详细请看其Lofter页面**](https://usaginya.lofter.com/post/1d56d69b_1c93aa6aa) | [**详细请看其Github页面**](https://github.com/usaginya/DAxZE)

![](https://bu.dusays.com/2024/10/26/671cac8dee348.webp =x250) 　![](https://bu.dusays.com/2024/10/26/671c9ac396c70.webp =x250)

:::
<!-- #endregion swarm-down -->
