import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "nodejs-jieba";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "天则指南",
  description: "一个普通的「东方非想天则」指南",

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
      indexOptions: {
        // 使用 nodejs-jieba 进行分词
        tokenize: (text, fieldName) =>
          fieldName === "id" ? [text] : cut(text, true),
      },
    }),
  ],
  


    // Enable it with pwa
  // shouldPrefetch: false,
});


