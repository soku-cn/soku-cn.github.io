import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "天则指南",
  description: "一个普通的东方非想天则Wiki By ChocoFleece",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
