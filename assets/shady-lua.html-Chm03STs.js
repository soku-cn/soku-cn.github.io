import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as c,c as o,a,b as t,w as l,d as n,e as d}from"./app-B7GC1_aL.js";const u={},h={class:"hint-container warning"},m=a("p",{class:"hint-container-title"},"Warning",-1),p=a("p",null,[a("strong",null,"注意，此 mod 需要双方一起使用且版本相同")],-1),v=a("strong",null,"可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了",-1),b={class:"hint-container info"},y=a("p",{class:"hint-container-title"},"内容介绍",-1),g=a("p",null,"shady-lua=Modules/shady-lua/shady-lua.dll",-1),_={href:"https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua",target:"_blank",rel:"noopener noreferrer"},f=d(`<p>函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似乎也退坑了<br> 我的压缩包内含有给的函数表</p><p>使用给的函数编程，命名为 .lua 并在 shady-lua.ini 内添加对应路径即可</p><p>详情可以下载查看和尝试体验</p><details class="hint-container details"><summary>魔理沙示例是修改魔理沙走路速度为前进30，后退-25，以下为 marisa.lua 的内容</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function marisaUpdate(character, actionId, data)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,4),k=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"下载"),a("p",null,[a("strong",null,"可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了")])],-1);function I(M,T){const i=e("RouteLink"),r=e("ExternalLinkIcon");return c(),o("div",null,[a("div",h,[m,p,a("p",null,[a("strong",null,[t(i,{to:"/about/"},{default:l(()=>[v]),_:1})])])]),a("div",b,[y,g,a("p",null,[n("Github： "),a("a",_,[n("https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua"),t(r)])]),f]),k])}const G=s(u,[["render",I],["__file","shady-lua.html.vue"]]),L=JSON.parse('{"path":"/en/mods/GameplayMods/shady-lua.html","title":"使用lua脚本魔改则(shady-lua)","lang":"en-US","frontmatter":{"title":"使用lua脚本魔改则(shady-lua)","icon":"circle-info","order":21,"editLink":false,"author":"三回転Tstar","date":"2024-01-11T00:00:00.000Z","description":"Warning 注意，此 mod 需要双方一起使用且版本相同 内容介绍 shady-lua=Modules/shady-lua/shady-lua.dll Github： https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua 函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wiki.514.live/mods/GameplayMods/shady-lua.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/en/mods/GameplayMods/shady-lua.html"}],["meta",{"property":"og:site_name","content":"Hisoutensoku Guide"}],["meta",{"property":"og:title","content":"使用lua脚本魔改则(shady-lua)"}],["meta",{"property":"og:description","content":"Warning 注意，此 mod 需要双方一起使用且版本相同 内容介绍 shady-lua=Modules/shady-lua/shady-lua.dll Github： https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua 函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T09:43:02.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T09:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用lua脚本魔改则(shady-lua)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T09:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1704901855000,"updatedTime":1717062182000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":1.13,"words":339},"localizedDate":"January 11, 2024","autoDesc":true,"excerpt":"<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">Warning</p>\\n<p><strong>注意，此 mod 需要双方一起使用且版本相同</strong></p>\\n<p><strong><a href=\\"/about/\\" target=\\"_blank\\"><strong>可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了</strong></a></strong></p>\\n</div>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">内容介绍</p>\\n<p>shady-lua=Modules/shady-lua/shady-lua.dll</p>\\n<p>Github： <a href=\\"https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua</a></p>\\n<p>函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似乎也退坑了<br>\\n我的压缩包内含有给的函数表</p>\\n<p>使用给的函数编程，命名为  .lua 并在 shady-lua.ini 内添加对应路径即可</p>\\n<p>详情可以下载查看和尝试体验</p>\\n<details class=\\"hint-container details\\"><summary>魔理沙示例是修改魔理沙走路速度为前进30，后退-25，以下为 marisa.lua 的内容</summary>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>function marisaUpdate(character, actionId, data)\\n    if actionId == 4 then -- WALKING_FORWARD\\n        character:applyGroundMechanics()\\n        character:updateXMovement(30)\\n        character:advanceFrame()\\n        return true\\n    elseif actionId == 5 then -- WALKING_BACKWARD\\n        character:applyGroundMechanics()\\n        character:updateXMovement(-25)\\n        character:advanceFrame()\\n        return true\\n    end\\nend\\n\\nfunction marisaInitAction(character, actionId, data)\\n    -- once each time an action id changes \\nend\\n\\nfunction marisaInitialize(character, data)\\n    -- once at battle start, but after InitAction(0)\\nend\\n\\nbattle.replaceCharacter(soku.Character.Marisa, marisaUpdate, marisaInitAction, marisaInitialize)\\n</code></pre></div></details>\\n</div>"}');export{G as comp,L as data};
