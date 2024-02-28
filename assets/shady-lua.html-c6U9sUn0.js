import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as r,c as d,a as e,e as a,b as c,f as n}from"./app-RtC0STjd.js";const l={},o=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,[e("strong",null,"注意，此 mod 需要双方一起使用且版本相同")])],-1),u={class:"hint-container info"},v=e("p",{class:"hint-container-title"},"内容介绍",-1),m=e("p",null,"shady-lua=Modules/shady-lua/shady-lua.dll",-1),h={href:"https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua",target:"_blank",rel:"noopener noreferrer"},b=n(`<p>函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似乎也退坑了<br> 我的压缩包内含有给的函数表</p><p>使用给的函数编程，命名为 .lua 并在 shady-lua.ini 内添加对应路径即可</p><p>详情可以下载查看和尝试体验</p><details class="hint-container details"><summary>以下为 shady-lua.ini 的内容</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Scripts]
marisa=marisa/marisa.lua
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details>`,4),p=n(`<details class="hint-container details"><summary>魔理沙示例是修改魔理沙走路速度为前进30，后退-25，以下为 marisa.lua 的内容</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function marisaUpdate(character, actionId, data)
    if actionId == 4 then -- WALKING_FORWARD
        character:applyGroundMechanics()
        character:updateXMovement(30)
        character:advanceFrame()
        return true
    elseif actionId == 5 then -- WALKING_BACKWARD
        character:applyGroundMechanics()
        character:updateXMovement(-25)
        character:advanceFrame()
        return true
    end
end

function marisaInitAction(character, actionId, data)
    -- once each time an action id changes 
end

function marisaInitialize(character, data)
    -- once at battle start, but after InitAction(0)
end

battle.replaceCharacter(soku.Character.Marisa, marisaUpdate, marisaInitAction, marisaInitialize)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="hint-container tip"><p class="hint-container-title">下载</p><p><strong>可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了</strong></p></div>`,2);function _(f,g){const i=t("ExternalLinkIcon");return r(),d("div",null,[o,e("div",u,[v,m,e("p",null,[a("Github： "),e("a",h,[a("https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua"),c(i)])]),b]),p])}const I=s(l,[["render",_],["__file","shady-lua.html.vue"]]);export{I as default};
