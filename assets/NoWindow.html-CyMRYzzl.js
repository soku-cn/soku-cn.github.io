import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,e as i}from"./app-DT7lNdNb.js";const o={},a=i(`<div class="hint-container info"><p class="hint-container-title">Problem Causes</p><p><strong>It&#39;s because the position and size of the game window got wrong in <code>WindowResizer.ini</code> for unknown reason.</strong></p><div class="hint-container tip"><p class="hint-container-title">Solution</p><p>Kill the game and open <code>th123/modules/WindowResizer/WindowResizer.ini</code></p><p>there&#39;s follows a default config</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Size]
; allow resizing the game window (1) or disallow (0)
Enabled=1
Width=800
Height=600

[Position]
; remember the game window position on screen between runs (1) or do not remember (0)
Enabled=1
X=1
Y=1

[Bars]
; whether to display black bars around the game content in fullscreen when letterboxing (1) or to only display the game content (0)
Enabled=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>it&#39;s recommended to make a your own config as <code>WindowResizer-back.ini</code> in case of this problem happening again.</p></div></div><div class="hint-container warning"><p class="hint-container-title">Another WindowResizer bug for multi instances of the game</p><p>When you run multi instances of the game, you may got WindowResizer not working on the second game, also don&#39;t use Fullscreen then.</p></div>`,2),s=[a];function r(d,l){return n(),t("div",null,s)}const p=e(o,[["render",r],["__file","NoWindow.html.vue"]]),u=JSON.parse(`{"path":"/en/FAQ/Failed-to-Start/NoWindow.html","title":"Game's on taskbar but no window","lang":"en-US","frontmatter":{"title":"Game's on taskbar but no window","icon":"circle-info","order":2,"editLink":false,"author":"三回転Tstar","date":"2023-07-23T00:00:00.000Z","description":"Problem Causes It's because the position and size of the game window got wrong in WindowResizer.ini for unknown reason. Solution Kill the game and open th123/modules/WindowResiz...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wiki.514.live/FAQ/Failed-to-Start/NoWindow.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/en/FAQ/Failed-to-Start/NoWindow.html"}],["meta",{"property":"og:site_name","content":"Hisoutensoku Guide"}],["meta",{"property":"og:title","content":"Game's on taskbar but no window"}],["meta",{"property":"og:description","content":"Problem Causes It's because the position and size of the game window got wrong in WindowResizer.ini for unknown reason. Solution Kill the game and open th123/modules/WindowResiz..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T09:43:02.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-07-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T09:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Game's on taskbar but no window\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T09:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1717062182000,"updatedTime":1717062182000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":0.69,"words":207},"localizedDate":"July 23, 2023","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Problem Causes</p>\\n<p><strong>It's because the position and size of the game window got wrong in <code>WindowResizer.ini</code> for unknown reason.</strong></p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Solution</p>\\n<p>Kill the game and open <code>th123/modules/WindowResizer/WindowResizer.ini</code></p>\\n<p>there's follows a default config</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>[Size]\\n; allow resizing the game window (1) or disallow (0)\\nEnabled=1\\nWidth=800\\nHeight=600\\n\\n[Position]\\n; remember the game window position on screen between runs (1) or do not remember (0)\\nEnabled=1\\nX=1\\nY=1\\n\\n[Bars]\\n; whether to display black bars around the game content in fullscreen when letterboxing (1) or to only display the game content (0)\\nEnabled=1\\n</code></pre></div><p>it's recommended to make a your own config as <code>WindowResizer-back.ini</code> in case of this problem happening again.</p>\\n</div>\\n</div>"}`);export{p as comp,u as data};
