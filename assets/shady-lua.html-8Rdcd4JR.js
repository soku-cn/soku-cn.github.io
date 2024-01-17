import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c,a,d as t,b as o,e as s}from"./app-y2cQYys6.js";const l={},d=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"注意"),a("p",null,[a("strong",null,"注意，此 mod 需要双方一起使用且版本相同")])],-1),h={class:"hint-container info"},p=a("p",{class:"hint-container-title"},"内容介绍",-1),u=a("p",null,"shady-lua=Modules/shady-lua/shady-lua.dll",-1),_={href:"https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,[t("函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似乎也退坑了"),a("br"),t(" 我的压缩包内含有给的函数表")],-1),m=a("p",null,[t("使用给的函数编程，命名为 .lua 并在 shady-lua.ini 内添加对应路径即可"),a("br"),t(" 以下为 shady-lua.ini 的内容")],-1),f=a("p",null,[t("[Scripts]"),a("br"),t(" marisa=marisa/marisa.lua")],-1),v=a("p",null,"详情可以下载查看和尝试体验",-1),I=s('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>魔理沙示例是修改魔理沙走路速度为前进30，后退-25<br> 以下为 marisa.lua 的内容</p><p>function marisaUpdate(character, actionId, data)<br> if actionId == 4 then -- WALKING_FORWARD<br> character:applyGroundMechanics()<br> character:updateXMovement(30)<br> character:advanceFrame()<br> return true<br> elseif actionId == 5 then -- WALKING_BACKWARD<br> character:applyGroundMechanics()<br> character:updateXMovement(-25)<br> character:advanceFrame()<br> return true<br> end<br> end</p><p>function marisaInitAction(character, actionId, data)<br> -- once each time an action id changes<br> end</p><p>function marisaInitialize(character, data)<br> -- once at battle start, but after InitAction(0)<br> end</p><p>battle.replaceCharacter(soku.Character.Marisa, marisaUpdate, marisaInitAction, marisaInitialize)</p></div><div class="hint-container tip"><p class="hint-container-title">下载</p><p><strong>可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了</strong></p></div>',2);function y(k,g){const e=r("ExternalLinkIcon");return i(),c("div",null,[d,a("div",h,[p,u,a("p",null,[t("Github： "),a("a",_,[t("https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua"),o(e)])]),b,m,f,v]),I])}const M=n(l,[["render",y],["__file","shady-lua.html.vue"]]);export{M as default};
