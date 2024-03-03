import{aK as q,aL as at,v as lt,x as ot,s as ct,g as ht,b as ut,a as yt,z as ft,d as pt,c as et,l as it,aM as gt,aJ as dt,i as mt,aN as _t}from"./mermaid.core-LUiTHHvy.js";import{a as tt}from"./arc-QqiUHR7d.js";import{o as vt}from"./ordinal-wXG5obU4.js";import{a as xt}from"./array-Nw74a44z.js";import{c as z}from"./path-aUcfwwLI.js";import"./app-yta06hcW.js";import"./init-Hi12RPRh.js";function kt(e,u){return u<e?-1:u>e?1:u>=e?0:NaN}function bt(e){return e}function St(){var e=bt,u=kt,$=null,f=z(0),b=z(q),w=z(0);function c(r){var l,g=(r=xt(r)).length,S,A,O=0,m=new Array(g),k=new Array(g),_=+f.apply(this,arguments),h=Math.min(q,Math.max(-q,b.apply(this,arguments)-_)),T,I=Math.min(Math.abs(h)/g,w.apply(this,arguments)),p=I*(h<0?-1:1),t;for(l=0;l<g;++l)(t=k[m[l]=l]=+e(r[l],l,r))>0&&(O+=t);for(u!=null?m.sort(function(i,n){return u(k[i],k[n])}):$!=null&&m.sort(function(i,n){return $(r[i],r[n])}),l=0,A=O?(h-g*p)/O:0;l<g;++l,_=T)S=m[l],t=k[S],T=_+(t>0?t*A:0)+p,k[S]={data:r[S],index:l,value:t,startAngle:_,endAngle:T,padAngle:I};return k}return c.value=function(r){return arguments.length?(e=typeof r=="function"?r:z(+r),c):e},c.sortValues=function(r){return arguments.length?(u=r,$=null,c):u},c.sort=function(r){return arguments.length?($=r,u=null,c):$},c.startAngle=function(r){return arguments.length?(f=typeof r=="function"?r:z(+r),c):f},c.endAngle=function(r){return arguments.length?(b=typeof r=="function"?r:z(+r),c):b},c.padAngle=function(r){return arguments.length?(w=typeof r=="function"?r:z(+r),c):w},c}var H=function(){var e=function(p,t,i,n){for(i=i||{},n=p.length;n--;i[p[n]]=t);return i},u=[1,3],$=[1,4],f=[1,5],b=[1,6],w=[1,10,12,14,16,18,19,20,21,22],c=[2,4],r=[1,5,10,12,14,16,18,19,20,21,22],l=[20,21,22],g=[2,7],S=[1,12],A=[1,13],O=[1,14],m=[1,15],k=[1,16],_=[1,17],h={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(t,i,n,a,o,s,P){var v=s.length-1;switch(o){case 3:a.setShowData(!0);break;case 6:this.$=s[v-1];break;case 8:a.addSection(s[v-1],a.cleanupValue(s[v]));break;case 9:this.$=s[v].trim(),a.setDiagramTitle(this.$);break;case 10:this.$=s[v].trim(),a.setAccTitle(this.$);break;case 11:case 12:this.$=s[v].trim(),a.setAccDescription(this.$);break;case 13:a.addSection(s[v].substr(8)),this.$=s[v].substr(8);break}},table:[{3:1,4:2,5:u,20:$,21:f,22:b},{1:[3]},{3:7,4:2,5:u,20:$,21:f,22:b},e(w,c,{6:8,7:[1,9]}),e(r,[2,14]),e(r,[2,15]),e(r,[2,16]),{1:[2,1]},e(l,g,{8:10,9:11,1:[2,2],10:S,12:A,14:O,16:m,18:k,19:_}),e(w,c,{6:18}),e(w,[2,5]),{4:19,20:$,21:f,22:b},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},e(l,[2,12]),e(l,[2,13]),e(l,g,{8:10,9:11,1:[2,3],10:S,12:A,14:O,16:m,18:k,19:_}),e(w,[2,6]),e(l,[2,8]),e(l,[2,9]),e(l,[2,10]),e(l,[2,11])],defaultActions:{7:[2,1]},parseError:function(t,i){if(i.recoverable)this.trace(t);else{var n=new Error(t);throw n.hash=i,n}},parse:function(t){var i=this,n=[0],a=[],o=[null],s=[],P=this.table,v="",d=0,V=0,F=2,M=1,B=s.slice.call(arguments,1),y=Object.create(this.lexer),N={yy:{}};for(var Y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Y)&&(N.yy[Y]=this.yy[Y]);y.setInput(t,N.yy),N.yy.lexer=y,N.yy.parser=this,typeof y.yylloc>"u"&&(y.yylloc={});var J=y.yylloc;s.push(J);var st=y.options&&y.options.ranges;typeof N.yy.parseError=="function"?this.parseError=N.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function rt(){var C;return C=a.pop()||y.lex()||M,typeof C!="number"&&(C instanceof Array&&(a=C,C=a.pop()),C=i.symbols_[C]||C),C}for(var x,L,E,K,R={},j,D,X,W;;){if(L=n[n.length-1],this.defaultActions[L]?E=this.defaultActions[L]:((x===null||typeof x>"u")&&(x=rt()),E=P[L]&&P[L][x]),typeof E>"u"||!E.length||!E[0]){var Z="";W=[];for(j in P[L])this.terminals_[j]&&j>F&&W.push("'"+this.terminals_[j]+"'");y.showPosition?Z="Parse error on line "+(d+1)+`:
`+y.showPosition()+`
Expecting `+W.join(", ")+", got '"+(this.terminals_[x]||x)+"'":Z="Parse error on line "+(d+1)+": Unexpected "+(x==M?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(Z,{text:y.match,token:this.terminals_[x]||x,line:y.yylineno,loc:J,expected:W})}if(E[0]instanceof Array&&E.length>1)throw new Error("Parse Error: multiple actions possible at state: "+L+", token: "+x);switch(E[0]){case 1:n.push(x),o.push(y.yytext),s.push(y.yylloc),n.push(E[1]),x=null,V=y.yyleng,v=y.yytext,d=y.yylineno,J=y.yylloc;break;case 2:if(D=this.productions_[E[1]][1],R.$=o[o.length-D],R._$={first_line:s[s.length-(D||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(D||1)].first_column,last_column:s[s.length-1].last_column},st&&(R._$.range=[s[s.length-(D||1)].range[0],s[s.length-1].range[1]]),K=this.performAction.apply(R,[v,V,d,N.yy,E[1],o,s].concat(B)),typeof K<"u")return K;D&&(n=n.slice(0,-1*D*2),o=o.slice(0,-1*D),s=s.slice(0,-1*D)),n.push(this.productions_[E[1]][0]),o.push(R.$),s.push(R._$),X=P[n[n.length-2]][n[n.length-1]],n.push(X);break;case 3:return!0}}return!0}},T=function(){var p={EOF:1,parseError:function(i,n){if(this.yy.parser)this.yy.parser.parseError(i,n);else throw new Error(i)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var i=t.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===a.length?this.yylloc.first_column:0)+a[a.length-n.length].length-n[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+i+"^"},test_match:function(t,i){var n,a,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),a=t[0].match(/(?:\r\n?|\n).*/g),a&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in o)this[s]=o[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,i,n,a;this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),s=0;s<o.length;s++)if(n=this._input.match(this.rules[o[s]]),n&&(!i||n[0].length>i[0].length)){if(i=n,a=s,this.options.backtrack_lexer){if(t=this.test_match(n,o[s]),t!==!1)return t;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(t=this.test_match(i,o[a]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,n,a,o){switch(a){case 0:break;case 1:break;case 2:return 20;case 3:break;case 4:break;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 15:this.popState();break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};return p}();h.lexer=T;function I(){this.yy={}}return I.prototype=h,h.Parser=I,new I}();H.parser=H;const Et=H,nt=at.pie,G={sections:{},showData:!1,config:nt};let U=G.sections,Q=G.showData;const $t=structuredClone(nt),wt=()=>structuredClone($t),At=()=>{U=structuredClone(G.sections),Q=G.showData,ft()},Tt=(e,u)=>{e=pt(e,et()),U[e]===void 0&&(U[e]=u,it.debug(`added new section: ${e}, with value: ${u}`))},It=()=>U,Dt=e=>(e.substring(0,1)===":"&&(e=e.substring(1).trim()),Number(e.trim())),Ct=e=>{Q=e},Ot=()=>Q,Pt={getConfig:wt,clear:At,setDiagramTitle:lt,getDiagramTitle:ot,setAccTitle:ct,getAccTitle:ht,setAccDescription:ut,getAccDescription:yt,addSection:Tt,getSections:It,cleanupValue:Dt,setShowData:Ct,getShowData:Ot},Vt=e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,Nt=Vt,Lt=e=>{const u=Object.entries(e).map(f=>({label:f[0],value:f[1]})).sort((f,b)=>b.value-f.value);return St().value(f=>f.value)(u)},zt=(e,u,$,f)=>{var b,w;it.debug(`rendering pie chart
`+e);const c=f.db,r=et(),l=gt(c.getConfig(),r.pie),g=450,S=((w=(b=document.getElementById(u))==null?void 0:b.parentElement)==null?void 0:w.offsetWidth)??l.useWidth,A=dt(u);A.attr("viewBox",`0 0 ${S} ${g}`),mt(A,g,S,l.useMaxWidth);const O=40,m=18,k=4,_=A.append("g");_.attr("transform","translate("+S/2+","+g/2+")");const{themeVariables:h}=r;let[T]=_t(h.pieOuterStrokeWidth);T??(T=2);const I=l.textPosition,p=Math.min(S,g)/2-O,t=tt().innerRadius(0).outerRadius(p),i=tt().innerRadius(p*I).outerRadius(p*I);_.append("circle").attr("cx",0).attr("cy",0).attr("r",p+T/2).attr("class","pieOuterCircle");const n=c.getSections(),a=Lt(n),o=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],s=vt(o);_.selectAll("mySlices").data(a).enter().append("path").attr("d",t).attr("fill",d=>s(d.data.label)).attr("class","pieCircle");let P=0;Object.keys(n).forEach(d=>{P+=n[d]}),_.selectAll("mySlices").data(a).enter().append("text").text(d=>(d.data.value/P*100).toFixed(0)+"%").attr("transform",d=>"translate("+i.centroid(d)+")").style("text-anchor","middle").attr("class","slice"),_.append("text").text(c.getDiagramTitle()).attr("x",0).attr("y",-(g-50)/2).attr("class","pieTitleText");const v=_.selectAll(".legend").data(s.domain()).enter().append("g").attr("class","legend").attr("transform",(d,V)=>{const F=m+k,M=F*s.domain().length/2,B=12*m,y=V*F-M;return"translate("+B+","+y+")"});v.append("rect").attr("width",m).attr("height",m).style("fill",s).style("stroke",s),v.data(a).append("text").attr("x",m+k).attr("y",m-k).text(d=>{const{label:V,value:F}=d.data;return c.getShowData()?`${V} [${F}]`:V})},Ft={draw:zt},Yt={parser:Et,db:Pt,renderer:Ft,styles:Nt};export{Yt as diagram};
