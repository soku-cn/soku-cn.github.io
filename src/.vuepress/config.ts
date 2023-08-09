import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { cut } from "@node-rs/jieba";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { viteBundler } from '@vuepress/bundler-vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'

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
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            tailwindcss(),
            autoprefixer(),
          ]
        }
      },
    },
    vuePluginOptions: {},
  }),


  // Enable it with pwa
  // shouldPrefetch: false,
});


