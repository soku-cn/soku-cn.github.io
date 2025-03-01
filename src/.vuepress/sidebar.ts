import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":
    [
      {
        text: "「关于本站、资源下载」",
        icon: "download",
        prefix: "about/",
        link: "about/",
        children: "structure",
      },


      {
        text: "「新手上路」",
        icon: "book",
        prefix: "Beginners/",
        collapsible: true,
        children: "structure",
      },


      {
        text: "「游戏常见问题」",
        icon: "question",
        prefix: "FAQ/",
        collapsible: true,
        children:
          [
            "update.md",
            "tree.md",
            {
              text: "游戏无法正常运行",
              icon: "power-off",
              prefix: "Failed-to-Start/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "游戏内问题",
              icon: "wrench",
              prefix: "In-Games/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "对战和大厅问题",
              icon: "wifi",
              prefix: "Play/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "神AI杀软CHM等其他问题",
              icon: "fa-solid fa-lightbulb",
              prefix: "Others/",
              collapsible: true,
              children: "structure",
            }
          ],
      },


      {
        text: "「Mod、插件介绍」",
        icon: "gear",
        prefix: "mods/",
        collapsible: true,
        children: [
          "WhatsMod.md",
          "PracticeMods.md",
          {
            text: "功能插件",
            icon: "fa-solid fa-wrench",
            prefix: "QoLMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "高级功能插件",
            icon: "fa-solid fa-chalkboard-user",
            prefix: "AdvancedMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "美化改色类",
            icon: "fa-solid fa-palette",
            prefix: "DIY/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "游戏性Mod",
            icon: "fa-solid fa-gamepad",
            prefix: "GameplayMods/",
            collapsible: true,
            children: "structure",
          },

        ],
      },


      {
        text: "「游戏系统与机制」",
        icon: "fa-brands fa-wikipedia-w",
        prefix: "GameGuide/",
        collapsible: true,
        children: "structure",
      },


      {
        text: "「攻略数据」",
        icon: "laptop-code",
        prefix: "data/",
        collapsible: true,
        children: "structure",
      },

    ],

  "/en/":
    [
      {
        text: "「About」",
        icon: "download",
        prefix: "about/",
        link: "about/",
        children: "structure",
      },


      {
        text: "「Beginners」",
        icon: "book",
        prefix: "Beginners/",
        collapsible: true,
        children: "structure",
      },


      {
        text: "「FAQ」",
        icon: "question",
        prefix: "FAQ/",
        collapsible: true,
        children:
          [
            "update.md",
            {
              text: "Failed-to-Start",
              icon: "question",
              prefix: "Failed-to-Start/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "In-Games",
              icon: "question",
              prefix: "In-Games/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Playing",
              icon: "question",
              prefix: "Play/",
              collapsible: true,
              children: "structure",
            }
          ],
      },


      {
        text: "「Mods」",
        icon: "gear",
        prefix: "mods/",
        collapsible: true,
        children: [
          "WhatsMod.md",
          "PracticeMods.md",
          {
            text: "QoLMods",
            icon: "gears",
            prefix: "QoLMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "AdvancedMods",
            icon: "gears",
            prefix: "AdvancedMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "ModifyMods",
            icon: "gears",
            prefix: "DIY/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "GameplayMods",
            icon: "gears",
            prefix: "GameplayMods/",
            collapsible: true,
            children: "structure",
          },

        ],
      },


      {
        text: "「GameSystemMachine」",
        icon: "fa-brands fa-wikipedia-w",
        prefix: "GameGuide/",
        collapsible: true,
        children: "structure",
      },


      {
        text: "「FrameData」",
        icon: "laptop-code",
        prefix: "data/",
        collapsible: true,
        children: "structure",
      },

    ],
});
