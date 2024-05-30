---
title: DSound Error
# 标题
icon: circle-info
# 图标
order: 12
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-21
#文章编辑日期
---




:::: tabs
@tab Case 1: can't run game for Dsound Error
::: info Case 1: can't run game for Dsound Error

Please check your **Speaker icon** in lower right corner taskbar and your **Audio Driver**.

![You can't run the game if there's **Red Cross** on Speaker icon](https://bu.dusays.com/2024/02/29/65e00037246ed.png =200x)

::: tip
If you just don't have any audio device like earphone or speaker, you could try install a **Virtual Audio Driver** like **Voicemeeter**, so the game would think the audio is good.

:::



@tab Case 2: DsoundBuffer Error during game
::: info Case 2: DsoundBuffer Error during game
it probably happens when your Blue-tooth earphone's battery dies.

By default, please **avoid changing your audio device when Soku is running**, the game won't switch to the new devices and may crash

::: tip
Thanks to Ichirin, there's [**mod DSoundFix**](https://discord.com/channels/167593473854144512/253944555831820288/984060351001796610) fixing this problem. 

However, **DSoundFix may not work on some people**, and even causing game not starting to remain as ghost th123.exe.

**Recommend to try enable it to see if it's working on you**, if yes then just keep it always enabled, or have it disabled.

:::



