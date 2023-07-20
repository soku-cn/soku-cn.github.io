import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": 
  [
    {
      text: "天则指南",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
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
