---
title: 使用lua脚本魔改则shady-lua

# 标题
icon: circle-info
# 图标
order: 7
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-01-11
#文章编辑日期
---

::: warning
**注意，此 mod 需要双方一起使用且版本相同**
:::

::: info 内容介绍
shady-lua=Modules/shady-lua/shady-lua.dll

Github： https://github.com/enebe-nb/shady-packer/wiki/Tools-Lua

函数表虽然github上列了表，但是具体内容我也不是特别清楚，原作者似乎也退坑了
我的压缩包内含有给的函数表

使用给的函数编程，命名为  .lua 并在 shady-lua.ini 内添加对应路径即可
以下为 shady-lua.ini 的内容

[Scripts]
marisa=marisa/marisa.lua

详情可以下载查看和尝试体验
:::

::: info
魔理沙示例是修改魔理沙走路速度为前进30，后退-25
以下为 marisa.lua 的内容

function marisaUpdate(character, actionId, data)
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

:::

::: tip 下载
**可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了**
:::



