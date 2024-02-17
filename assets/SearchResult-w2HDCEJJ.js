import{u as U,g as ee,h as j,i as B,J as ae,j as le,t as se,k as x,l as D,m as te,n as J,p as l,q as _,s as F,v as I,x as re,y as ue,z as ie,A as ne,R as oe,O as ce,B as ve,C as pe,D as ye,E as he,F as de,G as me,H as b,I as fe}from"./app-uE8zCv0w.js";const He="SEARCH_PRO_QUERY_HISTORY",h=U(He,[]),ge=()=>{const{queryHistoryCount:r}=b,n=r>0;return{enabled:n,queryHistory:h,addQueryHistory:t=>{n&&(h.value.length<r?h.value=Array.from(new Set([t,...h.value])):h.value=Array.from(new Set([t,...h.value.slice(0,r-1)])))},removeQueryHistory:t=>{h.value=[...h.value.slice(0,t),...h.value.slice(t+1)]}}},Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=b,d=U(Qe,[]),Re=()=>{const r=j(),n=E>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:n,resultHistory:d,addResultHistory:s=>{if(n){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<E?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,E-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const n=oe(),t=B(),{search:s,terminate:u}=ce(),f=x(!1),H=ve([]);return pe(()=>{const m=()=>{H.value=[],f.value=!1},w=fe(g=>{f.value=!0,g?s({type:"search",query:g,locale:t.value,options:n}).then(y=>{H.value=y,f.value=!1}).catch(y=>{console.error(y),m()}):m()},b.searchDelay);J([r,t],()=>w(r.value),{immediate:!0}),ye(()=>{u()})}),{searching:f,results:H}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:n}){const t=j(),s=B(),u=ae(le),{enabled:f,addQueryHistory:H,queryHistory:m,removeQueryHistory:w}=ge(),{enabled:g,resultHistory:y,addResultHistory:O,removeResultHistory:M}=Re(),L=f||g,S=se(r,"query"),{results:Q,searching:Y}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),P=D(()=>L&&(m.value.length>0||y.value.length>0)),q=D(()=>Q.value.length>0),C=D(()=>Q.value[p.value]||null),T=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,z=()=>{const{isQuery:e,index:a}=o.value;a===0?o.value={isQuery:!e,index:e?y.value.length-1:m.value.length-1}:o.value={isQuery:e,index:a-1}},G=()=>{const{isQuery:e,index:a}=o.value;a===(e?m.value.length-1:y.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:a+1}},V=()=>{p.value=p.value>0?p.value-1:Q.value.length-1,c.value=C.value.contents.length-1},K=()=>{p.value=p.value<Q.value.length-1?p.value+1:0,c.value=0},N=()=>{c.value<C.value.contents.length-1?c.value=c.value+1:K()},W=()=>{c.value>0?c.value=c.value-1:V()},A=e=>e.map(a=>he(a)?a:l(a[0],a[1])),X=e=>{if(e.type==="customField"){const a=de[e.index]||"$content",[i,k=""]=me(a)?a[s.value].split("$content"):a.split("$content");return e.display.map(v=>l("div",A([i,...v,k])))}return e.display.map(a=>l("div",A(a)))},R=()=>{p.value=0,c.value=0,n("updateQuery",""),n("close")};return te("keydown",e=>{if(r.isFocusing){if(q.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const a=C.value.contents[c.value],i=T(a);H(r.query),O(a),t.push(i),R()}}else if(g){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o.value;o.value.isQuery?(n("updateQuery",m.value[a]),e.preventDefault()):(t.push(y.value[a].link),R())}}}}),J([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:S.value?!q.value:!P.value}],id:"search-pro-results"},S.value===""?L?P.value?[f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.queryHistory),m.value.map((e,a)=>l("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===a}],onClick:()=>{n("updateQuery",e)}},[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(a)}})]))])):null,g?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.resultHistory),y.value.map((e,a)=>l(I,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===a}],onClick:()=>{R()}},()=>[l(_,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(i=>A(i)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),M(a)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:Y.value?l(re,{hint:u.value.searching}):q.value?l("ul",{class:"search-pro-result-list"},Q.value.map(({title:e,contents:a},i)=>{const k=p.value===i;return l("li",{class:["search-pro-result-list-item",{active:k}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((v,Z)=>{const $=k&&c.value===Z;return l(I,{to:T(v),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{H(r.query),O(v),R()}},()=>[v.type==="text"?null:l(v.type==="title"?ue:v.type==="heading"?ie:ne,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?l("div",{class:"content-header"},v.header):null,l("div",X(v))])])})])})):u.value.emptyResult)}});export{we as default};
