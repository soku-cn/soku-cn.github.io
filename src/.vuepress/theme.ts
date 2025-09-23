import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 主题选项
  // 请参考 https://theme-hope.vuejs.press/zh/config/theme/basic.html

  // 是否开启热重载
  hotReload: true,
  // 站点域名
  hostname: "https://wiki.514.live",
  // 协议信息
  license: "CC BY-NC-SA 4.0",
  // iconAssets: "fontawesome-with-brands",
  navbar,
  // 是否在向下滚动时自动隐藏导航栏，"always"或"mobile"或"none"
  // navbarAutoHide: "always",
  sidebar,
  // 右上角Github图标指向的仓库地址
  repo: "https://github.com/soku-cn/soku-cn.github.io",
  // 左上角图标
  logo: "/logo-navbar.webp",
  // 是否显示最后更新时间
  lastUpdated: true,
  // 是否显示页面贡献者
  contributors: true,
  // 是否显示编辑此页链接
  editLink: false,
  // 文章信息显示
  pageInfo: false,
  // 是否显示Copyright信息
  displayFooter: true,
  // 左上角文字，设置为""来留空
  navbarTitle:"天则指南",
  // 是否显示更新历史
  changelog: true,

  titleIcon: true,

  // 使用GithubPages及非中国大陆服务器部署时，无需显示此备案号
  // footer: '<a href="https://beian.miit.gov.cn/">浙ICP备2023006473号</a>',


  // "switch": 在深色模式，浅色模式和自动之间切换
  // "toggle": 在深色模式和浅色模式之间切换
  // "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
  // "enable": 强制深色模式
  // "disable": 禁用深色模式
  darkmode: "toggle",


  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {

    comment: {
      provider: "Giscus",
      repo: "ChocoFleece/SokuComments",
      repoId: "R_kgDOLuJ96Q",
      category: "Announcements",
      categoryId: "DIC_kwDOLuJ96c4CesDB",
    },

    search: {
      maxSuggestions: 10,
    },
    
    icon: {
      assets: "fontawesome",
    },
    
    components: {
      components: [
        "BiliBili",
        //"Badge",
      ]
    },
    // All features are enabled for demo, only preserve features you need here
    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   chart: true,
    //   codetabs: true,
    //   demo: true,
    //   echarts: true,
    //   figure: true,
    //   flowchart: true,
    //   gfm: true,
    //   imgLazyload: true,
    //   imgSize: true,
    //   include: true,
    //   katex: true,
    //   mark: true,
    //   mermaid: true,
    //   playground: {
    //     presets: ["ts", "vue"],
    //   },
    //   stylize: [
    //     {
    //       matcher: "Recommended",
    //       replacer: ({ tag }) => {
    //         if (tag === "em")
    //           return {
    //             tag: "Badge",
    //             attrs: { type: "tip" },
    //             content: "Recommended",
    //           };
    //       },
    //     },
    //   ],
    //   sub: true,
    //   sup: true,
    //   tabs: true,
    //   vPre: true,
    //   vuePlayground: true,
    // },
  },



},

);


