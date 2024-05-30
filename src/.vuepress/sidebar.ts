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
            {
              text: "游戏无法正常运行",
              icon: "question",
              prefix: "Failed-to-Start/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "游戏内问题",
              icon: "question",
              prefix: "In-Games/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "对战和大厅问题",
              icon: "question",
              prefix: "Play/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "神AI杀软CHM等其他问题",
              icon: "question",
              prefix: "Others/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Linux相关问题",
              icon: "question",
              prefix: "Linux/",
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
            text: "功能性插件",
            icon: "gears",
            prefix: "QoLMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "高级功能插件",
            icon: "gears",
            prefix: "AdvancedMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "改色等Mod",
            icon: "gears",
            prefix: "DIY/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "游戏性Mod",
            icon: "gears",
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
            {
              text: "游戏无法正常运行",
              icon: "question",
              prefix: "Failed-to-Start/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "游戏内问题",
              icon: "question",
              prefix: "In-Games/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "对战和大厅问题",
              icon: "question",
              prefix: "Play/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "神AI杀软CHM等其他问题",
              icon: "question",
              prefix: "Others/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "Linux相关问题",
              icon: "question",
              prefix: "Linux/",
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
            text: "功能性插件",
            icon: "gears",
            prefix: "QoLMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "高级功能插件",
            icon: "gears",
            prefix: "AdvancedMods/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "改色等Mod",
            icon: "gears",
            prefix: "DIY/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "游戏性Mod",
            icon: "gears",
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
});
