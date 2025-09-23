import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import MergeCells from "markdown-it-multimd-table";


export default defineUserConfig({

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  base: "/",
  lang: "zh-CN",
  title: "非想天则指南",
  description: "一个关于「东方非想天则」的中文指南 Wiki",  

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

});


