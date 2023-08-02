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
          text: "非想天启更新器-指南",
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
            {
              text: "游戏性MOD介绍",
              icon: "question",
              prefix: "MOD_Gameplay/",
              collapsible: true,
              children: "structure",
            },
            {
              text: "联机相关插件",
              icon: "question",
              prefix: "NetMods/",
              collapsible: true,
              children: "structure",
            }
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
