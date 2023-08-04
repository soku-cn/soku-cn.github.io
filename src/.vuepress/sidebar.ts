import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": 
  [
    {
      text: "天则指南",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: [
        "update.md",
        {
          text: "非想天启更新器说明",
          icon :"gears",
          prefix: "FXTQ/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "问题指南",
          icon: "question",
          prefix: "FAQ/",
          collapsible: true,
          children: [
            {
              text: "游戏外问题",
              icon: "question",
              prefix: "Out-of-Games/",
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
            }
          ],
        },
        {
          text: "MOD插件介绍",
          icon: "gear",
          prefix: "mods/",
          //link:"mods/",
          collapsible: true,
          children: [
            "WhatsMod.md",
            {
              text: "练习模式插件",
              icon: "file",
              prefix: "PracticeMods/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "联机相关插件",
              icon: "file",
              prefix: "NetMods/",
              collapsible: true,
              children: "structure",
            },
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
              text: "修改素材Mod",
              icon: "file",
              prefix: "DIY/",
              collapsible: true,
              children: "structure",
            },
          ],
        }
      ],
    },

    {
      text: "记录",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
});
