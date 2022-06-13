import{ba as Z,c as B,aL as D,d as h,a as m,b as F,ay as f,bd as ee,be as te,e as C,u as E,i as z,R as ne,g as $,k as M,h as l,K as oe,M as re,bf as ie,aY as G,O as U,n as ae,I as P,a_ as le,aS as se,T as de,G as ce,s as y,z as S,A as u,B as c,x as k,r as w,H as ue,F as R,b7 as O,bg as me,o as pe,bh as he,E as ge,v as V,b9 as A,C as fe}from"./index.b5757991.js";import{_ as Y}from"./Ellipsis.59aaf728.js";import{_ as N}from"./Space.19c09f4f.js";import{u as _e}from"./Tooltip.e60e40cb.js";import{_ as ve}from"./Image.f8966ba9.js";import{G as be}from"./home.286b8d63.js";import{d as xe}from"./public.df0b58e8.js";import{b as ye}from"./base.12718b58.js";import{_ as Ce}from"./Pagination.4ed9ba69.js";import"./get-slot.5ad428c3.js";import"./use-merged-state.2943affb.js";import"./next-frame-once.da993024.js";import"./Input.d2a77564.js";import"./index.80337ce4.js";import"./create.aafe3cda.js";import"./Tag.9478b0e2.js";let K=!1;function ze(){if(!!Z&&!!window.CSS&&!K&&(K=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const $e=t=>{const{textColor2:e,cardColor:n,modalColor:o,popoverColor:r,dividerColor:i,borderRadius:a,fontSize:d}=t;return{textColor:e,color:n,colorModal:o,colorPopover:r,borderColor:i,borderColorModal:D(o,i),borderColorPopover:D(r,i),borderRadius:a,fontSize:d}},we={name:"List",common:B,self:$e};var Se=we;const ke=t=>{const{opacityDisabled:e,heightTiny:n,heightSmall:o,heightMedium:r,heightLarge:i,heightHuge:a,primaryColor:d,fontSize:s}=t;return{fontSize:s,textColor:d,sizeTiny:n,sizeSmall:o,sizeMedium:r,sizeLarge:i,sizeHuge:a,color:d,opacitySpinning:e}},Re={name:"Spin",common:B,self:ke};var Pe=Re;const Be=t=>{const{textColor1:e,textColor2:n,fontWeightStrong:o,fontSize:r}=t;return{fontSize:r,titleTextColor:e,textColor:n,titleFontWeight:o}},Ee={name:"Thing",common:B,self:Be};var Le=Ee,Te=h([m("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[F("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[m("list-item",`
 padding: 12px 20px;
 `,[h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("header, footer",`
 padding: 12px 20px;
 `,[h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),f("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),m("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[f("prefix",`
 margin-right: 20px;
 flex: 0;
 `),f("suffix",`
 margin-left: 20px;
 flex: 0;
 `),f("main",`
 flex: 1;
 `),h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),ee(m("list",`
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),te(m("list",`
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const je=Object.assign(Object.assign({},z.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),X=oe("n-list");var Ie=C({name:"List",props:je,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=E(t),o=z("List","-list",Te,Se,t,e);ne(X,{mergedClsPrefixRef:e});const r=$(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:d,textColor:s,color:_,colorModal:v,colorPopover:g,borderColor:b,borderColorModal:p,borderColorPopover:L,borderRadius:x}}=o.value;return{"--n-font-size":d,"--n-bezier":a,"--n-text-color":s,"--n-color":_,"--n-border-radius":x,"--n-border-color":b,"--n-border-color-modal":p,"--n-border-color-popover":L,"--n-color-modal":v,"--n-color-popover":g}}),i=n?M("list",void 0,r,t):void 0;return{mergedClsPrefix:e,cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t;const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),l("ul",{class:[`${n}-list`,this.bordered&&`${n}-list--bordered`,this.themeClass],style:this.cssVars},e.header?l("div",{class:`${n}-list__header`},e.header()):null,(t=e.default)===null||t===void 0?void 0:t.call(e),e.footer?l("div",{class:`${n}-list__footer`},e.footer()):null)}}),q=C({name:"ListItem",setup(){const t=re(X,null);return t||ie("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return l("li",{class:`${e}-list-item`},t.prefix?l("div",{class:`${e}-list-item__prefix`},t.prefix()):null,t.default?l("div",{class:`${e}-list-item__main`},t):null,t.suffix?l("div",{class:`${e}-list-item__suffix`},t.suffix()):null)}});const Oe=t=>{const{heightSmall:e,heightMedium:n,heightLarge:o,borderRadius:r}=t;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:e,heightMedium:n,heightLarge:o}},Ve={name:"Skeleton",common:B,self:Oe};var Fe=h([m("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),h("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]);const Ue=Object.assign(Object.assign({},z.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}});var Me=C({name:"Skeleton",inheritAttrs:!1,props:Ue,setup(t){ze();const{mergedClsPrefixRef:e}=E(t),n=z("Skeleton","-skeleton",Fe,Ve,t,e);return{mergedClsPrefix:e,style:$(()=>{var o,r;const i=n.value,{common:{cubicBezierEaseInOut:a}}=i,d=i.self,{color:s,colorEnd:_,borderRadius:v}=d;let g;const{circle:b,sharp:p,round:L,width:x,height:T,size:H,text:W,animated:Q}=t;H!==void 0&&(g=d[G("height",H)]);const j=b?(o=x!=null?x:T)!==null&&o!==void 0?o:g:x,I=(r=b&&x!=null?x:T)!==null&&r!==void 0?r:g;return{display:W?"inline-block":"",verticalAlign:W?"-0.125em":"",borderRadius:b?"50%":L?"4096px":p?"":v,width:typeof j=="number"?U(j):j,height:typeof I=="number"?U(I):I,animation:Q?"":"none","--n-bezier":a,"--n-color-start":s,"--n-color-end":_}})}},render(){const{repeat:t,style:e,mergedClsPrefix:n,$attrs:o}=this,r=l("div",ae({class:`${n}-skeleton`,style:e},o));return t>1?l(P,null,Array.apply(null,{length:t}).map(i=>[r,`
`])):r}}),Ne=h([h("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m("spin-container",{position:"relative"},[m("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[le()])]),m("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[F("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),m("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[F("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const He={small:20,medium:18,large:16},We=Object.assign(Object.assign({},z.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var De=C({name:"Spin",props:We,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=E(t),o=z("Spin","-spin",Ne,Pe,t,e),r=$(()=>{const{size:a}=t,{common:{cubicBezierEaseInOut:d},self:s}=o.value,{opacitySpinning:_,color:v,textColor:g}=s,b=typeof a=="number"?U(a):s[G("size",a)];return{"--n-bezier":d,"--n-opacity-spinning":_,"--n-size":b,"--n-color":v,"--n-text-color":g}}),i=n?M("spin",$(()=>{const{size:a}=t;return typeof a=="number"?String(a):a[0]}),r,t):void 0;return{mergedClsPrefix:e,compitableShow:_e(t,["spinning","show"]),mergedStrokeWidth:$(()=>{const{strokeWidth:a}=t;if(a!==void 0)return a;const{size:d}=t;return He[typeof d=="number"?"medium":d]}),cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t,e;const{$slots:n,mergedClsPrefix:o,description:r}=this,i=n.icon&&this.rotate,a=(r||n.description)&&l("div",{class:`${o}-spin-description`},r||((t=n.description)===null||t===void 0?void 0:t.call(n))),d=n.icon?l("div",{class:[`${o}-spin-body`,this.themeClass]},l("div",{class:[`${o}-spin`,i&&`${o}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),a):l("div",{class:[`${o}-spin-body`,this.themeClass]},l(se,{clsPrefix:o,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${o}-spin`}),a);return(e=this.onRender)===null||e===void 0||e.call(this),n.default?l("div",{class:[`${o}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${o}-spin-content`,this.compitableShow&&`${o}-spin-content--spinning`]},n),l(de,{name:"fade-in-transition"},{default:()=>this.compitableShow?d:null})):d}}),Ae=m("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[m("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),m("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[m("thing-header-wrapper",`
 flex: 1;
 `)]),m("thing-main",`
 flex-grow: 1;
 `,[m("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[f("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),f("description",[h("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),f("content",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)]),f("footer",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)]),f("action",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const Ke=Object.assign(Object.assign({},z.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var J=C({name:"Thing",props:Ke,setup(t,{slots:e}){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=E(t),r=z("Thing","-thing",Ae,Le,t,n),i=$(()=>{const{self:{titleTextColor:d,textColor:s,titleFontWeight:_,fontSize:v},common:{cubicBezierEaseInOut:g}}=r.value;return{"--n-bezier":g,"--n-font-size":v,"--n-text-color":s,"--n-title-font-weight":_,"--n-title-text-color":d}}),a=o?M("thing",void 0,i,t):void 0;return()=>{var d;const{value:s}=n;return(d=a==null?void 0:a.onRender)===null||d===void 0||d.call(a),l("div",{class:[`${s}-thing`,a==null?void 0:a.themeClass],style:o?void 0:i.value},e.avatar&&t.contentIndented?l("div",{class:`${s}-thing-avatar`},e.avatar()):null,l("div",{class:`${s}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?l("div",{class:`${s}-thing-avatar-header-wrapper`},e.avatar?l("div",{class:`${s}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header-wrapper`},l("div",{class:`${s}-thing-header`},e.header||t.title?l("div",{class:`${s}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?l("div",{class:`${s}-thing-main__description`},e.description?e.description():t.description):null):null):l(P,null,e.header||t.title||e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header`},e.header||t.title?l("div",{class:`${s}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?l("div",{class:`${s}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?l("div",{class:`${s}-thing-main__description`},e.description?e.description():t.description):null),e.default||t.content?l("div",{class:`${s}-thing-main__content`},e.default?e.default():t.content):null,e.footer?l("div",{class:`${s}-thing-main__footer`},e.footer()):null,e.action?l("div",{class:`${s}-thing-main__action`},e.action()):null))}}});const Ge={},Ye=k("div",{style:{height:"5px",width:"100px"}},null,-1),Xe=k("div",{style:{height:"7px",width:"100px"}},null,-1),qe=k("div",{style:{height:"7px",width:"100px"}},null,-1);function Je(t,e){const n=Me,o=Y,r=N,i=J,a=q;return y(),S(a,null,{prefix:u(()=>[c(n,{height:"148px",width:"100px"})]),default:u(()=>[c(i,{class:"6666"},{default:u(()=>[c(o,{"line-clamp":1,tooltip:!1},{default:u(()=>[c(n,{height:"24px",width:"150px",round:""})]),_:1}),c(r,null,{default:u(()=>[c(o,{"line-clamp":1,tooltip:!1},{default:u(()=>[c(n,{height:"18px",width:"180px",round:""})]),_:1})]),_:1}),c(r,null,{default:u(()=>[Ye]),_:1}),c(n,{height:"20px",width:"100%",style:{"max-width":"100%"},round:""}),c(r,null,{default:u(()=>[Xe]),_:1}),c(n,{height:"20px",width:"100%",round:""}),c(r,null,{default:u(()=>[qe]),_:1}),c(n,{height:"20px",width:"100%",round:""})]),_:1})]),_:1})}var Qe=ce(Ge,[["render",Je]]);const Ze=C({__name:"imgLazy",props:{imgUrl:null},setup(t){const e=t,n=w(!1),o=w();return fetch(e.imgUrl,{method:"GET",mode:"cors"}).then(r=>{if(r.ok)return r.blob();throw new Error("Network response was not ok."+r.statusText)}).then(r=>{var i=URL.createObjectURL(r);o.value=i,n.value=!0}).catch(r=>{console.log("There has been a problem with your fetch operation: ",r)}),(r,i)=>{const a=ve,d=De,s=ue;return n.value?(y(),S(a,{key:0,class:"user-drag",width:"100",src:o.value,"preview-disabled":""},null,8,["src"])):(y(),S(s,{key:1,bordered:!1,style:{width:"100px"}},{default:u(()=>[c(d,{size:"large"})]),_:1}))}}}),et=C({__name:"SearchResult",props:{imgUrl:null,name:null,desc:null,director:null,actor:null,category:null,id:null},setup(t){const e=t;return(n,o)=>{const r=Ze,i=Y,a=N,d=J,s=q;return y(),S(s,null,{prefix:u(()=>[c(r,{imgUrl:e.imgUrl},null,8,["imgUrl"])]),default:u(()=>[c(d,{title:e.name},{default:u(()=>[k("div",null,[c(i,{"line-clamp":1,tooltip:!1},{default:u(()=>[R("\u5BFC\u6F14\uFF1A"+O(e.director),1)]),_:1})]),k("div",null,[c(i,{"line-clamp":1,tooltip:!1},{default:u(()=>[R("\u4E3B\u6F14\uFF1A"+O(e.actor),1)]),_:1})]),c(a,null,{default:u(()=>[c(i,{"line-clamp":3,tooltip:!1},{default:u(()=>[R(O(e.desc),1)]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})}}});const tt=R(" \u5F71\u7247\u641C\u7D22\u7ED3\u679C "),vt=C({__name:"Search",setup(t){const e=me(),n=w(!1),o=w({movies:[],pgCount:0}),r=w(1);return pe(()=>{he(()=>{be(ye+"/search",{keyword:e.params.keyword,pg:r.value,num:20},o).then(()=>{n.value=!0})})}),(i,a)=>{const d=et,s=ge("router-link"),_=Qe,v=Ie,g=Ce,b=N;return y(),V("div",null,[c(v,{bordered:""},{header:u(()=>[tt]),default:u(()=>[n.value?(y(!0),V(P,{key:0},A(o.value.movies,p=>(y(),S(s,{key:p.id,to:"/play/"+p.id},{default:u(()=>[c(d,{imgUrl:p.pic,name:p.name,desc:fe(xe)(p.description),director:p.director,actor:p.actor,category:"",id:p.id},null,8,["imgUrl","name","desc","director","actor","id"])]),_:2},1032,["to"]))),128)):(y(),V(P,{key:1},A(4,p=>c(_)),64))]),_:1}),c(b,{justify:"center"},{default:u(()=>[c(g,{page:r.value,"onUpdate:page":a[0]||(a[0]=p=>r.value=p),"page-count":o.value.pgCount},null,8,["page","page-count"])]),_:1})])}}});export{vt as default};
