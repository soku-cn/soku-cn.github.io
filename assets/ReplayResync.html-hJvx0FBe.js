import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as p,e as n}from"./app-AzFgpISg.js";const r={},o=n('<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>ReplayResync 默认关闭</p><p><strong>在播放rep前按 F9 可切换为“Moutain Vapor状态”（晴岚状态）；按 F10 可切换为“Normal状态”（正常状态）</strong></p><p><strong>状态相符的rep就可以正常播放，不符合的rep会出现卡组和天气不同步的状况</strong></p></div><div class="hint-container tip"><p class="hint-container-title">天气不同步问题已被解决</p><p><strong>天气不同步问题已被 DesyncProtector 和 Giuroll 解决</strong></p></div><div class="hint-container tip"><p class="hint-container-title">科普晴岚不同步</p><p>在川雾天气下结束游戏（对战或观战或rep），下一局游戏（对战或观战或rep）中会出现1P站位左移1.6而2P站位右移1.6（两人距离比原来更远）的情况，位置的变化会使得擦边球攻击在rep中出现挥空的状况而导致后续不同步</p><p>在晴岚天气下结束游戏，下一局游戏（对战或观战或rep）中会进行一种异于常态的算法，使得初始天气和卡组顺序发生变化导致后续不同步；保存的rep中记录了按键输入的信息，重播时只是按照时间轴机械地输入按键而已，环境不同结果就会不一样了，例如在晴岚天气下打完了一局，下一局就是特殊情况了</p><p>（假设初始天气是梅雨，抽到的第一张卡是灵击并使用），在晴岚状态下打完了一局并保存rep，但在正常情况下播放rep会发现初始天气是烈日，抽到的第一张卡是羽衣且用不出来，那么后续就会不同步了</p><p>110版本无插件情况的解决办法就是在练习模式里晴岚天气下ESC退出游戏来切换到晴岚异常状态再来看这个rep</p></div>',3),s=[o];function i(c,a){return t(),p("div",null,s)}const d=e(r,[["render",i],["__file","ReplayResync.html.vue"]]);export{d as default};
