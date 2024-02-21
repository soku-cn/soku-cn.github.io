import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default hopeTheme({
  hostname: "https://wiki.514.live",

  author: {
    name: "巧克力绒",
    url: "https://www.514.live",
    email: "zhongzi2333@gmail.com",
  },

  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "Tstar00/tstar00.github.io",
  //repo: "https://gitee.com/soku-cn/soku-cn",
  docsDir: "src",

  // navbar
  navbar,
  // navbarAutoHide: "always",

  // sidebar
  sidebar,

  // footer
  footer: "游戏制作「上海アリス幻樂団」、「黄昏フロンティア」",
  displayFooter: true,
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {

    components: {
      components: [
        "BiliBili",
      ]},
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Twikoo",
    //   envId: "https://chat.514.live/",
    // },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});