import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "@node-rs/jieba";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import MergeCells from "markdown-it-multimd-table";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "天则指南",
  description: "一个普通的「东方非想天则」指南",
  theme,
  extendsMarkdown: (md) => {
    md.use(MergeCells);
    md.linkify.set({ fuzzyEmail: false });
    md.use((MergeCells), {
      multiline: true,
      rowspan: true,
      headerless: true,
      multibody: true,
      aotolabel: true,
    });
  },

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
});
