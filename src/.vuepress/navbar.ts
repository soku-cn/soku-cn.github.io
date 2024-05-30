import { navbar } from "vuepress-theme-hope";

export default navbar([

  // {
  //   text: "天则指南",
  //   icon: "book",
  //   prefix: "/guide/",
  //   children: [
  //   ],
  // },

  // "/",

  {
    text: "资源下载",
    icon: "download",
    link: "/about/",
  },
  {
    text: "新更新器使用说明",
    icon: "file",
    link: "/FAQ/update.html",
  },

  "/Beginners/BeforePlaying.html",
  "/FAQ/Play/LobbyGuide.html",
  "/mods/PracticeMods.html",
  "/mods/WhatsMod.html",


  //  {
  //    text: "2V2 MOD",
  //    icon: "gears",
  //    link: "/mods/GameplayMods/2V2MOD.html",
  //  },

  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh",
  // },
]);
