import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { componentsPlugin } from "vuepress-plugin-components";

export default hopeTheme({

  hostname: "https://wiki.514.live",
  iconAssets: "fontawesome-with-brands",

  // navbar
  // navbarAutoHide: "always",

  // sidebar
  sidebar,

  plugins: {

    components: {
      components: [
        //"BiliBili",
        //"Badge",
      ]
    },
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

  locales: {
    "/": {
      navbar,

      author: {
        name: "巧克力绒",
        url: "https://www.514.live",
        email: "zhongzi2333@gmail.com",
      },

      logo: "/logo-navbar.webp",
      //link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Mp-vWDZfrlFC4bRl3BBORRsmbx-i1L4n&authKey=43xVKaGVfMnGASzO7g9r6TgN2PTsmY0r%2F4w1K%2FZ1rVpDgw4GGlwWzp1Yz869HLQD&noverify=0&group_code=200803640",
      repo: "https://github.com/soku-cn/soku-cn.github.io",
      //repo: "https://gitee.com/soku-cn/soku-cn",
      docsDir: "src",

      // footer
      footer: '<a href="https://beian.miit.gov.cn/">浙ICP备-2023006473号-1</a>',
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
      lastUpdated: true,
      contributors: true,
      editLink: false,
      pageInfo: false,


    },
    "/en/": {
      navbar: [
        {
          text: "About",
          icon: "download",
          link: "/en/about/",
        },
        {
          text: "SokuLauncher (Mods Manager)",
          icon: "file",
          link: "/en/FAQ/update.html",
        },

        "/en/Beginners/BeforePlaying.html",
        "/en/FAQ/Play/LobbyGuide.html",
        "/en/mods/PracticeMods.html",
        "/en/mods/WhatsMod.html",

      ],

      author: {
        name: "巧克力绒",
        url: "https://www.514.live",
        email: "zhongzi2333@gmail.com",
      },

      logo: "/logo-navbar.webp",
      //link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Mp-vWDZfrlFC4bRl3BBORRsmbx-i1L4n&authKey=43xVKaGVfMnGASzO7g9r6TgN2PTsmY0r%2F4w1K%2FZ1rVpDgw4GGlwWzp1Yz869HLQD&noverify=0&group_code=200803640",
      repo: "https://github.com/soku-cn/soku-cn.github.io",
      //repo: "https://gitee.com/soku-cn/soku-cn",
      docsDir: "src",


      // footer
      footer: "游戏制作「上海アリス幻樂団」、「黄昏フロンティア」",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
      lastUpdated: true,
      contributors: true,
      editLink: false,
      pageInfo: false,

    },
  },
},

  /*  原本的单语言 theme
    hostname: "https://wiki.514.live",
  
    author: {
      name: "巧克力绒",
      url: "https://www.514.live",
      email: "zhongzi2333@gmail.com",
    },
  
    iconAssets: "fontawesome-with-brands",
    logo: "/logo-navbar.webp",
    //link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Mp-vWDZfrlFC4bRl3BBORRsmbx-i1L4n&authKey=43xVKaGVfMnGASzO7g9r6TgN2PTsmY0r%2F4w1K%2FZ1rVpDgw4GGlwWzp1Yz869HLQD&noverify=0&group_code=200803640",
    repo: "https://github.com/soku-cn/soku-cn.github.io",
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
    lastUpdated: true,
    contributors: true,
    editLink: false,
    pageInfo: false,
  
    plugins: {
  
      components: {
        components: [
          //"BiliBili",
          //"Badge",
        ]
      },
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
    }, */
);
