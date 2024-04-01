---
title: 愚人节搞怪天气mod

# 标题
icon: circle-info
# 图标
order: 31
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-04-01
#文章编辑日期
---

::: warning 
Custom weather's april fools mod

- **注意，此 mod 需要联机双方一起使用且版本相同**
- **可以和 “则2 MOD” 共存**
- **若和 “2V2 MOD” 一起使用，某些功能会出问题，不建议一起使用**

::: caution 注意Mod冲突

**与 `CharacterInForeground` 这个 Mod 存在冲突，先把这个 Mod 关闭**

:::

::: important 已发布【3-31修复版】愚人节搞怪天气 mod
修复内容：
- 修复了大鬼天气的一些bug
:::

::: info MOD 内容介绍（19个新天气+极光）

- **替换掉了原版的 20 个天气，在 VS PLAYER 模式里通过 F5 F6 来切换调用；在练习模式里依然是原版天气**

- **天气预报状态下，一帧是 0.3 读数（原版是 0.1）；天气已启动状态下依然是两帧 0.1 读数和原版一样**

- **修改了系统卡铜钱的效果：**
**和其他普通卡一样只能在自由状态下主动使用，消耗掉卡片并发动10秒的天气免疫效果（类似天子的气质封印）**
**就是10秒内自己不受天气影响**

- **各自天气本身以及影响的各自角色招数可能会存在很多 bug，很正常，不用大惊小怪，玩的开心最重要**

- [新天气介绍视频 - 【非想天则MOD】搞怪天气Mod-愚人节活动](https://www.bilibili.com/video/BV12F4m1F7Sj/)

- [试玩视频 - 因为太害怕弹幕所以把盾全开开了 愚人节天气 MOD 启动！（普信 VS 秋水）【非想天则 MOD】](https://www.bilibili.com/video/BV1bx4y1e7us/)

<style>
table th:first-of-type {
    width: 80pt;
}
table th:nth-of-type(2) {
    width: 80pt;
}
table th:nth-of-type(4) {
    width: 50pt;
}
</style>

| 天气中文名     |         天气英文名         | 天气效果                                                                                                                                     | 持续时间 |
| :------------- | :------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| 1. 绯想天      |          Twilight          | 屏幕变黑，只能看见自己角色周围一小块区域（聚光灯）                                                                                           |   50.0   |
| 2. 圣光普照    |        Angel's Halo        | 类似无风天，先命中对手的人立即获得天滴效果(持续到天气结束)，且天气读数变为原先的三分之一                                                     |   99.9   |
| 3. 海市蜃楼    |       Desert Mirage        | 双方立即终止当前动作，随机变成另一个角色，且不能使用卡片（多次遇到此天气的话依不会再随机）                                                   |   99.9   |
| 4. 流星雨      |       Shooting Star        | 随机启动一个天气（除了极光），且每当天气读数的十位数变化时就会再次随机一个天气                                                               |    *     |
| 5. 雷雨        |        Thunderstorm        | 错防就会直接被命中                                                                                                                           |   50.0   |
| 6. 迷雾        |       Impassable Fog       | 双方角色隐身，特效依然显示，地上依然有影子                                                                                                   |   50.0   |
| 7. 反常天气    | Antinomy of Common Weather | 像凭依华一般浮在空中，可通过上下跳跃，左右移动；无限次数飞翔和 Dash<br>`（凭依华是 Antinomy of Common Flowers）`                             |   75.0   |
| 8. 失忆之风    |       Forgetful Wind       | 双方获得弹幕无敌。时停期间双方的弹幕和特效都会被暂停，但是体术攻击依然有效                                                                   |   50.0   |
| 9. 暴风雪      |          Blizzard          | 双方的输入延迟都增加 9 帧                                                                                                                    |   25.0   |
| 10. 诸神黄昏   |          Ragnarök          | 刷出双倍弹幕和特效，如果可以修改发射角度则会变成一上一下的小夹角，否则重叠                                                                   |   99.9   |
| 11. 哈雾       |            Haar            | 双方所有的必杀技的种类和等级都随机变化一次，天气结束后恢复原样（不同于疏雨，如果你在天气途中吃卡，也无法保存，会恢复原样）                   |   99.9   |
| 12. 遗忘的鬼雾 |    Missing Purple Mist     | 角色和弹幕都巨大化为两倍尺寸（占位判定不变），行动速度不变，霸体效果，不能防御<br>`萃香的 Missing Purple Power`                              |   66.6   |
| 13. 水雾       |         Water Haze         | 双方角色的任何速度都变为原来的四分之一                                                                                                       |   75.0   |
| 14. 反向力场   |       Reverse Field        | 防御段位颠倒。中段变下段，下段变中段                                                                                                         |   99.9   |
| 15. 幻雾       |       Illusion Mist        | 全员幽冥（妖梦的半灵还在，可以再开幽冥，就有两个分身和一个本体了）                                                                           |   50.0   |
| 16. 极夜       |       Eternal Night        | 双方角色被时停，但是已生成的弹幕依然可以飞行和造成伤害（类似咲夜的四卡特制时计）                                                             |   9.0    |
| 17. 霜         |           Frost            | 地面结冰，小心打滑（不是冻青蛙）                                                                                                             |   99.9   |
| 18. 热浪       |          Hot Wind          | 类似黄砂。康了会造成 4000 固定伤害并立即出圈，有一个很长的 Hitstop 暂停，天气读数减少 50；<br>不康的话就造成 750 固定伤害，天气读数减少 10。 |   99.9   |
| 19. 神秘之风   |      Mysterious Wind       | 版边变得互通，角色和弹幕等都可以随意穿越。弹墙招数如 6A 不会穿越而是弹墙。请注意防御方向不是根据朝向，还是根据场上双方的位置                 |   99.9   |
| 20. 极光       |           Aurora           | 和原版一样随机启动一个天气（除了流星雨）                                                                                                     |    *     |

- [Source-Discord](https://discord.com/channels/167593473854144512/216678374846758913/1221592961834553385)
- [Source-doc](https://docs.google.com/spreadsheets/d/1auTCMs_pG99o8WP35bkIUgnRtHRB6KQ8c5m9o2PCGzI)
:::

:::: info 安装步骤说明
::: caution 注意Mod冲突

- **与 `CharacterInForeground` 这个 Mod 存在冲突，要先把它关闭**

- **再打开这两个新 Mod： `CustomWeathers` 和 [DesyncDetector](/mods/QoLMods/DesyncDetector.html)**

- `giuroll` 这个 mod 也要保持开启，默认就是开的所以不用管
:::

![[**如何开关配置mod**](/mods/WhatsMod.html) **打开这两个新 Mod： [CustomWeathers 和 DesyncDetector](/mods/QoLMods/DesyncDetector.html)**](https://bu.dusays.com/2024/03/25/660157b22ae86.png =550x)

::::



::: tip 下载

**[**可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了**](/about/)**
:::



