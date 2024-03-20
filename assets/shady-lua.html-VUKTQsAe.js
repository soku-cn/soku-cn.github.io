import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as r,c as l,a as n,b as a,w as d,e as i,f as o}from"./app--0-qlw2N.js";const u={},v={class:"hint-container warning"},m=n("p",{class:"hint-container-title"},"注意",-1),h=n("p",null,[n("strong",null,"注意，此 mod 需要双方一起使用且版本相同")],-1),b=n("strong",null,"可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了",-1),_={class:"hint-container info"},p=n("p",{class:"hint-container-title"},"内容介绍",-1),f=n("p",null,"shady-lua=Modules/shady-lua/shady-lua.dll",-1),g={href:"https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua",target:"_blank",rel:"noopener noreferrer"},I=o(`<p>函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似乎也退坑了<br> 我的压缩包内含有给的函数表</p><p>使用给的函数编程，命名为 .lua 并在 shady-lua.ini 内添加对应路径即可</p><p>详情可以下载查看和尝试体验</p><details class="hint-container details"><summary>魔理沙示例是修改魔理沙走路速度为前进30，后退-25，以下为 marisa.lua 的内容</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function marisaUpdate(character, actionId, data)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,4),k=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"下载"),n("p",null,[n("strong",null,"可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了")])],-1);function y(x,L){const t=e("RouterLink"),s=e("ExternalLinkIcon");return r(),l("div",null,[n("div",v,[m,h,n("p",null,[n("strong",null,[a(t,{to:"/about/"},{default:d(()=>[b]),_:1})])])]),n("div",_,[p,f,n("p",null,[i("Github： "),n("a",g,[i("https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua"),a(s)])]),I]),k])}const N=c(u,[["render",y],["__file","shady-lua.html.vue"]]);export{N as default};
