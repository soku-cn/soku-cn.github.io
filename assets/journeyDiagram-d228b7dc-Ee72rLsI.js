import{N as ut,D as yt,I as pt,$ as ft,g as dt,h as gt,J as A,T as z,P as mt,i as xt}from"./mermaid.esm.min-Cwz22A9e.js";import{x as kt,g as nt,d as _t,l as bt}from"./svgDrawCommon-f84b32fd-CR7b_JmN.js";import{v as Z}from"./arc-dd975067-D8mCOa5L.js";import"./app-CtdcmdCr.js";import"./path-428ebac9-B0oSrkCJ.js";var U=(function(){var t=function(d,i,r,c){for(r=r||{},c=d.length;c--;r[d[c]]=i);return r},e=[6,8,10,11,12,14,16,17,18],s=[1,9],o=[1,10],n=[1,11],h=[1,12],l=[1,13],y=[1,14],p={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:function(d,i,r,c,u,a,g){var x=a.length-1;switch(u){case 1:return a[x-1];case 2:this.$=[];break;case 3:a[x-1].push(a[x]),this.$=a[x-1];break;case 4:case 5:this.$=a[x];break;case 6:case 7:this.$=[];break;case 8:c.setDiagramTitle(a[x].substr(6)),this.$=a[x].substr(6);break;case 9:this.$=a[x].trim(),c.setAccTitle(this.$);break;case 10:case 11:this.$=a[x].trim(),c.setAccDescription(this.$);break;case 12:c.addSection(a[x].substr(8)),this.$=a[x].substr(8);break;case 13:c.addTask(a[x-1],a[x]),this.$="task";break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:s,12:o,14:n,16:h,17:l,18:y},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:s,12:o,14:n,16:h,17:l,18:y},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:function(d,i){if(i.recoverable)this.trace(d);else{var r=new Error(d);throw r.hash=i,r}},parse:function(d){var i=this,r=[0],c=[],u=[null],a=[],g=this.table,x="",D=0,G=0,ot=2,J=1,lt=a.slice.call(arguments,1),k=Object.create(this.lexer),S={yy:{}};for(var N in this.yy)Object.prototype.hasOwnProperty.call(this.yy,N)&&(S.yy[N]=this.yy[N]);k.setInput(d,S.yy),S.yy.lexer=k,S.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var R=k.yylloc;a.push(R);var ct=k.options&&k.options.ranges;typeof S.yy.parseError=="function"?this.parseError=S.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ht(){var w;return w=c.pop()||k.lex()||J,typeof w!="number"&&(w instanceof Array&&(c=w,w=c.pop()),w=i.symbols_[w]||w),w}for(var _,P,b,B,C={},L,$,H,O;;){if(P=r[r.length-1],this.defaultActions[P]?b=this.defaultActions[P]:((_===null||typeof _>"u")&&(_=ht()),b=g[P]&&g[P][_]),typeof b>"u"||!b.length||!b[0]){var Y="";O=[];for(L in g[P])this.terminals_[L]&&L>ot&&O.push("'"+this.terminals_[L]+"'");k.showPosition?Y="Parse error on line "+(D+1)+`:
`+k.showPosition()+`
Expecting `+O.join(", ")+", got '"+(this.terminals_[_]||_)+"'":Y="Parse error on line "+(D+1)+": Unexpected "+(_==J?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(Y,{text:k.match,token:this.terminals_[_]||_,line:k.yylineno,loc:R,expected:O})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+P+", token: "+_);switch(b[0]){case 1:r.push(_),u.push(k.yytext),a.push(k.yylloc),r.push(b[1]),_=null,G=k.yyleng,x=k.yytext,D=k.yylineno,R=k.yylloc;break;case 2:if($=this.productions_[b[1]][1],C.$=u[u.length-$],C._$={first_line:a[a.length-($||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-($||1)].first_column,last_column:a[a.length-1].last_column},ct&&(C._$.range=[a[a.length-($||1)].range[0],a[a.length-1].range[1]]),B=this.performAction.apply(C,[x,G,D,S.yy,b[1],u,a].concat(lt)),typeof B<"u")return B;$&&(r=r.slice(0,-1*$*2),u=u.slice(0,-1*$),a=a.slice(0,-1*$)),r.push(this.productions_[b[1]][0]),u.push(C.$),a.push(C._$),H=g[r[r.length-2]][r[r.length-1]],r.push(H);break;case 3:return!0}}return!0}},m=(function(){var d={EOF:1,parseError:function(i,r){if(this.yy.parser)this.yy.parser.parseError(i,r);else throw new Error(i)},setInput:function(i,r){return this.yy=r||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var r=i.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var r=i.length,c=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===u.length?this.yylloc.first_column:0)+u[u.length-c.length].length-c[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),r=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},test_match:function(i,r){var c,u,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),u=i[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],c=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var g in a)this[g]=a[g];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,r,c,u;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),g=0;g<a.length;g++)if(c=this._input.match(this.rules[a[g]]),c&&(!r||c[0].length>r[0].length)){if(r=c,u=g,this.options.backtrack_lexer){if(i=this.test_match(c,a[g]),i!==!1)return i;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(i=this.test_match(r,a[u]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,r,c,u){switch(c){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return d})();p.lexer=m;function f(){this.yy={}}return f.prototype=p,p.Parser=f,new f})();U.parser=U;const vt=U;let E="";const W=[],I=[],j=[],$t=function(){W.length=0,I.length=0,E="",j.length=0,xt()},wt=function(t){E=t,W.push(t)},Mt=function(){return W},St=function(){let t=Q();const e=100;let s=0;for(;!t&&s<e;)t=Q(),s++;return I.push(...j),I},Pt=function(){const t=[];return I.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},Tt=function(t,e){const s=e.substr(1).split(":");let o=0,n=[];s.length===1?(o=Number(s[0]),n=[]):(o=Number(s[0]),n=s[1].split(","));const h=n.map(y=>y.trim()),l={section:E,type:E,people:h,task:t,score:o};j.push(l)},At=function(t){const e={section:E,type:E,description:t,task:t,classes:[]};I.push(e)},Q=function(){const t=function(s){return j[s].processed};let e=!0;for(const[s,o]of j.entries())t(s),e=e&&o.processed;return e},Ct=function(){return Pt()},K={getConfig:()=>A().journey,clear:$t,setDiagramTitle:gt,getDiagramTitle:dt,setAccTitle:ft,getAccTitle:pt,setAccDescription:yt,getAccDescription:ut,addSection:wt,getSections:Mt,getTasks:St,addTask:Tt,addTaskOrg:At,getActors:Ct},Et=t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,It=Et,q=function(t,e){return bt(t,e)},jt=function(t,e){const s=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),o=t.append("g");o.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),o.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function n(y){const p=Z().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function h(y){const p=Z().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function l(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return e.score>3?n(o):e.score<3?h(o):l(o),s},st=function(t,e){const s=t.append("circle");return s.attr("cx",e.cx),s.attr("cy",e.cy),s.attr("class","actor-"+e.pos),s.attr("fill",e.fill),s.attr("stroke",e.stroke),s.attr("r",e.r),s.class!==void 0&&s.attr("class",s.class),e.title!==void 0&&s.append("title").text(e.title),s},rt=function(t,e){return _t(t,e)},Vt=function(t,e){function s(n,h,l,y,p){return n+","+h+" "+(n+l)+","+h+" "+(n+l)+","+(h+y-p)+" "+(n+l-p*1.2)+","+(h+y)+" "+n+","+(h+y)}const o=t.append("polygon");o.attr("points",s(e.x,e.y,50,20,7)),o.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,rt(t,e)},Dt=function(t,e,s){const o=t.append("g"),n=nt();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=s.width*e.taskCount+s.diagramMarginX*(e.taskCount-1),n.height=s.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,q(o,n),at(s)(e.text,o,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},s,e.colour)};let tt=-1;const Lt=function(t,e,s){const o=e.x+s.width/2,n=t.append("g");tt++,n.append("line").attr("id","task"+tt).attr("x1",o).attr("y1",e.y).attr("x2",o).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),jt(n,{cx:o,cy:300+(5-e.score)*30,score:e.score});const l=nt();l.x=e.x,l.y=e.y,l.fill=e.fill,l.width=s.width,l.height=s.height,l.class="task task-type-"+e.num,l.rx=3,l.ry=3,q(n,l);let y=e.x+14;e.people.forEach(p=>{const m=e.actors[p].color,f={cx:y,cy:e.y,r:7,fill:m,stroke:"#000",title:p,pos:e.actors[p].position};st(n,f),y+=10}),at(s)(e.task,n,l.x,l.y,l.width,l.height,{class:"task"},s,e.colour)},Ot=function(t,e){kt(t,e)},at=(function(){function t(n,h,l,y,p,m,f,d){const i=h.append("text").attr("x",l+p/2).attr("y",y+m/2+5).style("font-color",d).style("text-anchor","middle").text(n);o(i,f)}function e(n,h,l,y,p,m,f,d,i){const{taskFontSize:r,taskFontFamily:c}=d,u=n.split(/<br\s*\/?>/gi);for(let a=0;a<u.length;a++){const g=a*r-r*(u.length-1)/2,x=h.append("text").attr("x",l+p/2).attr("y",y).attr("fill",i).style("text-anchor","middle").style("font-size",r).style("font-family",c);x.append("tspan").attr("x",l+p/2).attr("dy",g).text(u[a]),x.attr("y",y+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),o(x,f)}}function s(n,h,l,y,p,m,f,d){const i=h.append("switch"),r=i.append("foreignObject").attr("x",l).attr("y",y).attr("width",p).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");r.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),e(n,i,l,y,p,m,f,d),o(r,f)}function o(n,h){for(const l in h)l in h&&n.attr(l,h[l])}return function(n){return n.textPlacement==="fo"?s:n.textPlacement==="old"?t:e}})(),Ft=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},V={drawRect:q,drawCircle:st,drawSection:Dt,drawText:rt,drawLabel:Vt,drawTask:Lt,drawBackgroundRect:Ot,initGraphics:Ft},Nt=function(t){Object.keys(t).forEach(function(e){F[e]=t[e]})},M={};function Rt(t){const e=A().journey;let s=60;Object.keys(M).forEach(o=>{const n=M[o].color,h={cx:20,cy:s,r:7,fill:n,stroke:"#000",pos:M[o].position};V.drawCircle(t,h);const l={x:40,y:s+7,fill:"#666",text:o,textMargin:e.boxTextMargin|5};V.drawText(t,l),s+=20})}const F=A().journey,T=F.leftMargin,Bt=function(t,e,s,o){const n=A().journey,h=A().securityLevel;let l;h==="sandbox"&&(l=z("#i"+e));const y=h==="sandbox"?z(l.nodes()[0].contentDocument.body):z("body");v.init();const p=y.select("#"+e);V.initGraphics(p);const m=o.db.getTasks(),f=o.db.getDiagramTitle(),d=o.db.getActors();for(const g in M)delete M[g];let i=0;d.forEach(g=>{M[g]={color:n.actorColours[i%n.actorColours.length],position:i},i++}),Rt(p),v.insert(0,0,T,Object.keys(M).length*50),Yt(p,m,0);const r=v.getBounds();f&&p.append("text").text(f).attr("x",T).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const c=r.stopy-r.starty+2*n.diagramMarginY,u=T+r.stopx+2*n.diagramMarginX;mt(p,c,u,n.useMaxWidth),p.append("line").attr("x1",T).attr("y1",n.height*4).attr("x2",u-T-4).attr("y2",n.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const a=f?70:0;p.attr("viewBox",`${r.startx} -25 ${u} ${c+a}`),p.attr("preserveAspectRatio","xMinYMin meet"),p.attr("height",c+a+25)},v={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,s,o){t[e]===void 0?t[e]=s:t[e]=o(s,t[e])},updateBounds:function(t,e,s,o){const n=A().journey,h=this;let l=0;function y(p){return function(m){l++;const f=h.sequenceItems.length-l+1;h.updateVal(m,"starty",e-f*n.boxMargin,Math.min),h.updateVal(m,"stopy",o+f*n.boxMargin,Math.max),h.updateVal(v.data,"startx",t-f*n.boxMargin,Math.min),h.updateVal(v.data,"stopx",s+f*n.boxMargin,Math.max),h.updateVal(m,"startx",t-f*n.boxMargin,Math.min),h.updateVal(m,"stopx",s+f*n.boxMargin,Math.max),h.updateVal(v.data,"starty",e-f*n.boxMargin,Math.min),h.updateVal(v.data,"stopy",o+f*n.boxMargin,Math.max)}}this.sequenceItems.forEach(y())},insert:function(t,e,s,o){const n=Math.min(t,s),h=Math.max(t,s),l=Math.min(e,o),y=Math.max(e,o);this.updateVal(v.data,"startx",n,Math.min),this.updateVal(v.data,"starty",l,Math.min),this.updateVal(v.data,"stopx",h,Math.max),this.updateVal(v.data,"stopy",y,Math.max),this.updateBounds(n,l,h,y)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},X=F.sectionFills,et=F.sectionColours,Yt=function(t,e,s){const o=A().journey;let n="";const h=o.height*2+o.diagramMarginY,l=s+h;let y=0,p="#CCC",m="black",f=0;for(const[d,i]of e.entries()){if(n!==i.section){p=X[y%X.length],f=y%X.length,m=et[y%et.length];let c=0;const u=i.section;for(let g=d;g<e.length&&e[g].section==u;g++)c=c+1;const a={x:d*o.taskMargin+d*o.width+T,y:50,text:i.section,fill:p,num:f,colour:m,taskCount:c};V.drawSection(t,a,o),n=i.section,y++}const r=i.people.reduce((c,u)=>(M[u]&&(c[u]=M[u]),c),{});i.x=d*o.taskMargin+d*o.width+T,i.y=l,i.width=o.diagramMarginX,i.height=o.diagramMarginY,i.colour=m,i.fill=p,i.num=f,i.actors=r,V.drawTask(t,i,o),v.insert(i.x,i.y,i.x+i.width+o.taskMargin,450)}},it={setConf:Nt,draw:Bt},Gt={parser:vt,db:K,renderer:it,styles:It,init:t=>{it.setConf(t.journey),K.clear()}};export{Gt as diagram};
