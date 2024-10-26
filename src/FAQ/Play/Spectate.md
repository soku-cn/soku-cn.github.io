---
title: 观战不了别人
# 标题
icon: circle-info
# 图标
order: 5
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

::: info 加入主机方发出的IP，观战连接失败
**解决办法：让2P打开swarm，确保`config123.ini`文件内的`clientport`观战端口（“蜈蚣端口”）为默认的10800，然后2P点中转IP后，所有人可通过2P的这个中转IP观战。**

![`config123.ini`文件内的`clientport`观战端口，默认为10800](https://bu.dusays.com/2024/10/26/671caa3869585.webp =500x)

:::

::: info 我想观战别人，但是不知道别人的IP有没有人已经进去了

**在这个选项处选择“否”，如果对方还没开战，则不会进去IP；如果对方已经开战，就会进入观战**

![选否只观战，不连接对战](https://bu.dusays.com/2024/10/26/671caa29e3a0a.webp =600x)
:::

::: info 有些 IP 可以观战，但是有些却不能观战
回答：正常。
:::

::: tip 参考文章
[**非想天则网络协议说明**](https://github.com/delthas/touhou-protocol-docs/blob/master/protocol_123.md)
:::
