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

  head: [
	  ['script', {}, `(function() {
            if (typeof ogReplaceState != "undefined")
              return;
            function send(msg1, msg2) {
              console.log("send", msg1, msg2);
              window.parent.postMessage([msg1,msg2], "*");
            }
            function sendtitle() {
              send("title", document.title);
            }
            var observer = new MutationObserver(function(list) {
              for (const i of list)
                for (const e of i.addedNodes)
                  if (e.tagName == "TITLE")
                    sendtitle();
            });
            document.head.addEventListener("DOMNodeInserted", function(event) {
              if (event.target.tagName == "TITLE")
                sendtitle();
            })
            var config = {childList: true}
            observer.observe(document.head, config);
          
            function sendpath() {
              send("path", window.location.href.substr(window.location.origin.length));
            };
            // https://stackoverflow.com/a/56760883
            ogReplaceState = history.replaceState;
            history.replaceState = function() {
              ogReplaceState.apply(history, arguments);
              sendpath();
            }
            ogPushState = history.pushState;
            history.pushState = function() {
              ogPushState.apply(history, arguments);
              sendpath();
            }
            sendpath();
          })();`]
  ],
});


