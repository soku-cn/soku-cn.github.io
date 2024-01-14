import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  // {
  //   text: "天则指南",
  //   icon: "book",
  //   prefix: "/guide/",
  //   children: [
  //   ],
  // },


  "/about/",
  "/Beginners/BeforePlaying.html",
  {
    text: "新更新器使用说明",
    icon: "circle-info",
    link: "/FAQ/update.html",
  },
  "/FAQ/Play/LobbyGuide.html",
  "/mods/PracticeMods.html",
  "/mods/WhatsMod.html",
  {
    text: "则2Mod",
    icon: "circle-info",
    link: "/mods/GameplayMods/SOKU2general.html",
  },

  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },

]);
