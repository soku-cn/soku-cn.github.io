import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o,c as r,a as e,b as d,w as i,e as n}from"./app-tds7hHyD.js";const u={},_={class:"hint-container info"},v=e("p",{class:"hint-container-title"},"问题原因",-1),m=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"configex123.ini配置文件设置有误"),e("p",null,[e("strong",null,[n("你的 "),e("code",null,"th123"),n(" 文件夹内的 "),e("code",null,"configex123.ini"),n(" 配置文件有误")])]),e("p",null,[e("strong",null,[n("复制下面的内容替换掉你的 "),e("code",null,"[replay]"),n(" 配置即可")])]),e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`[replay]
####【自定义保存的rep文件名格式】################
# %p1 表示 1P机签
# %c1 表示 1P机体名
# %y %m %d %h %min %sec 表示时间年 月 日 时 分 秒
# \\  表示文件夹
###########################################

file_vs=[%p1]_VS_[%p2]\\%y_%m_%d_%hh%minm%secs_%p1(%c1)_%p2(%c2)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),p=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"或者可能是机签名问题"),e("p",null,[e("strong",null,"可能是机签末尾带了空格，或者包含非法字符等，尝试修改名字（点重命名，删除原有的名字，写新的名字）")])],-1);function h(b,f){const l=c("Tabs");return o(),r("div",null,[e("div",_,[v,d(l,{id:"1",data:[{id:"configex123.ini配置文件设置有误"},{id:"或者可能是机签名问题"}]},{title0:i(({value:t,isActive:s})=>[n("configex123.ini配置文件设置有误")]),title1:i(({value:t,isActive:s})=>[n("或者可能是机签名问题")]),tab0:i(({value:t,isActive:s})=>[m]),tab1:i(({value:t,isActive:s})=>[p]),_:1},8,["data"])])])}const N=a(u,[["render",h],["__file","RepNotSaved.html.vue"]]);export{N as default};
