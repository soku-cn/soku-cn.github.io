---
title: 游戏画面显示错位

# 标题
icon: circle-info
# 图标
order: 4
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

![如图的问题](https://bu.dusays.com/2023/08/20/64e216c34240c.png =640x)

## 解决办法1
::: info 解决办法1
（自带中文输入法）右键输入法进入设置，常规，取消使用旧版输入法，重开游戏即可，
如果也没用或者你不是使用自带输入法而是其他输入法，请通知我让我记录。
:::

![在“英”字上右键，设置](https://bu.dusays.com/2023/08/20/64e216dce37d6.png)

![](https://bu.dusays.com/2023/08/20/64e216eab9ce6.png)

![](https://bu.dusays.com/2023/08/20/64e216f39d71c.png)

## 解决办法2
::: info
把游戏拖到最小的640x480分辨率，并保存重开游戏，然后再重开游戏拉大，拉大不会触发bug
当分辨率不是最小时就会触发bug，所以需要每次都以最小分辨率打开。
在 WindowResizer.ini 里将 [Size] 的 Enable 设置为0，即不允许拖大窗口，但是这样做依然可以按 Alt+Enter 全屏
:::

![即使不能拖大窗口，但是这样做依然可以按 Alt+Enter 全屏](https://bu.dusays.com/2023/08/20/64e21705af8a2.png =425x)

## 解决办法3
::: info 解决办法3
先关闭游戏，打开SWRSToys.ini配置文件，在两者中开启WindowResizer-old的一项，而关掉另一项
:::

::: warning
**注意替换完旧版本后，就不要开全屏了**
:::

![文件修改](https://bu.dusays.com/2023/08/20/64e2172f05999.png =500x)

![或者非想天启内修改](https://bu.dusays.com/2023/08/20/64e2174192fcd.png =425x)
