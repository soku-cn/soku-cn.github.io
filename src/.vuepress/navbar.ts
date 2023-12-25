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
  {
    text: "弹幕显示不出BUG",
    icon: "circle-info",
    link: "/FAQ/In-Games/MissingGraphic.html",
  },
  "/Beginners/BeforePlaying.html",
  "/FAQ/Play/LobbyGuide.html",
  "/mods/PracticeMods.html",
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
