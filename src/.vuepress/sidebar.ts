import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": 
  [
    {
      text: "关于本站",
      icon: "circle-info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },


    {
      text: "新手上路",
      icon: "book",
      prefix: "Beginners/",
      collapsible: true,
      children: "structure",
    },


    {
      text: "游戏常见问题",
      icon: "circle-question",
      prefix: "FAQ/",
      collapsible: true,
      children: 
      [
          "update.md",
          {
            text: "「非想天启」更新器说明",
            icon :"gears",
            prefix: "FXTQ/",
            collapsible: true,
            children: "structure",
            },
            {
              text: "神AI杀软等其他问题",
              icon: "question",
              prefix: "Others/",
              collapsible: true,
              children: "structure",
            },
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
              text: "Linux相关问题",
              icon: "question",
              prefix: "Linux/",
              collapsible: true,
              children: "structure",
            }
      ],
    },

        
    {
      text: "插件介绍",
      icon: "gear",
      prefix: "mods/",
      collapsible: true,
      children: [
        "WhatsMod.md",
        "PracticeMods.md",
        {
          text: "功能性插件",
          icon: "file",
          prefix: "QoLMods/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "游戏性Mod介绍",
          icon: "file",
          prefix: "GameplayMods/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "高级功能插件",
          icon: "file",
          prefix: "AdvancedMods/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "修改素材相关Mod",
          icon: "file",
          prefix: "DIY/",
          collapsible: true,
          children: "structure",
        },

    ],
    },


    {
      text: "游戏系统与机制",
      icon: "clock",
      prefix: "GameGuide/",
      collapsible: true,
      children: "structure",
    },


    {
      text: "攻略数据",
      icon: "laptop-code",
      prefix: "data/",
      collapsible: true,
      children: "structure",
    },

    // {
    //   text: "其他内容",
    //   icon: "ellipsis",
    //   prefix: "others/",
    //   collapsible: true,
    //   children: "structure",
    // },



    // {
    //   text: "记录",
    //   icon: "circle",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
  ],
});
