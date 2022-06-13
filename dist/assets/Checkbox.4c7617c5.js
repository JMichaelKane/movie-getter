import{c as te,aT as se,h as b,e as H,u as K,aV as j,r as F,g as A,R as be,t as I,K as ue,aJ as d,d as m,a as n,ay as z,b as V,aP as he,bd as fe,be as ke,M as ve,Q as xe,i as L,aW as me,aY as U,k as ge,a$ as Ce,aR as pe,Z as ye}from"./index.b5757991.js";import{u as N}from"./use-merged-state.2943affb.js";var Re={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px"};const ze=o=>{const{baseColor:u,inputColorDisabled:h,cardColor:R,modalColor:S,popoverColor:i,textColorDisabled:k,borderColor:l,primaryColor:r,textColor2:a,fontSizeSmall:w,fontSizeMedium:f,fontSizeLarge:c,borderRadiusSmall:v,lineHeight:x}=o;return Object.assign(Object.assign({},Re),{labelLineHeight:x,fontSizeSmall:w,fontSizeMedium:f,fontSizeLarge:c,borderRadius:v,color:u,colorChecked:r,colorDisabled:h,colorDisabledChecked:h,colorTableHeader:R,colorTableHeaderModal:S,colorTableHeaderPopover:i,checkMarkColor:u,checkMarkColorDisabled:k,checkMarkColorDisabledChecked:k,border:`1px solid ${l}`,borderDisabled:`1px solid ${l}`,borderDisabledChecked:`1px solid ${l}`,borderChecked:`1px solid ${r}`,borderFocus:`1px solid ${r}`,boxShadowFocus:`0 0 0 2px ${se(r,{alpha:.3})}`,textColor:a,textColorDisabled:k})},Se={name:"Checkbox",common:te,self:ze};var we=Se,De=b("svg",{viewBox:"0 0 64 64",class:"check-icon"},b("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),$e=b("svg",{viewBox:"0 0 100 100",class:"line-icon"},b("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const E=ue("n-checkbox-group"),Me={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}};var Pe=H({name:"CheckboxGroup",props:Me,setup(o){const{mergedClsPrefixRef:u}=K(o),h=j(o),{mergedSizeRef:R,mergedDisabledRef:S}=h,i=F(o.defaultValue),k=A(()=>o.value),l=N(k,i),r=A(()=>{var f;return((f=l.value)===null||f===void 0?void 0:f.length)||0}),a=A(()=>Array.isArray(l.value)?new Set(l.value):new Set);function w(f,c){const{nTriggerFormInput:v,nTriggerFormChange:x}=h,{onChange:g,"onUpdate:value":C,onUpdateValue:p}=o;if(Array.isArray(l.value)){const t=Array.from(l.value),_=t.findIndex(P=>P===c);f?~_||(t.push(c),p&&d(p,t),C&&d(C,t),v(),x(),i.value=t,g&&d(g,t)):~_&&(t.splice(_,1),p&&d(p,t),C&&d(C,t),g&&d(g,t),i.value=t,v(),x())}else f?(p&&d(p,[c]),C&&d(C,[c]),g&&d(g,[c]),i.value=[c],v(),x()):(p&&d(p,[]),C&&d(C,[]),g&&d(g,[]),i.value=[],v(),x())}return be(E,{checkedCountRef:r,maxRef:I(o,"max"),minRef:I(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:R,toggleCheckbox:w}),{mergedClsPrefix:u}},render(){return b("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=m([n("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[m("&:hover",[n("checkbox-box",[z("border",{border:"var(--n-border-checked)"})])]),m("&:focus:not(:active)",[n("checkbox-box",[z("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),V("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),V("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[m(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),V("indeterminate",[n("checkbox-box",[n("checkbox-icon",[m(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),m(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),V("checked, indeterminate",[m("&:focus:not(:active)",[n("checkbox-box",[z("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[z("border",{border:"var(--n-border-checked)"})])]),V("disabled",{cursor:"not-allowed"},[V("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[z("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[z("border",{border:"var(--n-border-disabled)"}),n("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),z("label",{color:"var(--n-text-color-disabled)"})]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[z("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[m(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),he({left:"1px",top:"1px"})])]),z("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 padding: var(--n-label-padding);
 `,[m("&:empty",{display:"none"})])]),fe(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ke(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);const Ve=Object.assign(Object.assign({},L.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var Be=H({name:"Checkbox",props:Ve,setup(o){const u=F(null),{mergedClsPrefixRef:h,inlineThemeDisabled:R,mergedRtlRef:S}=K(o),i=j(o,{mergedSize(e){const{size:y}=o;if(y!==void 0)return y;if(r){const{value:s}=r.mergedSizeRef;if(s!==void 0)return s}if(e){const{mergedSize:s}=e;if(s!==void 0)return s.value}return"medium"},mergedDisabled(e){const{disabled:y}=o;if(y!==void 0)return y;if(r){if(r.disabledRef.value)return!0;const{maxRef:{value:s},checkedCountRef:D}=r;if(s!==void 0&&D.value>=s&&!c.value)return!0;const{minRef:{value:M}}=r;if(M!==void 0&&D.value<=M&&c.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:k,mergedSizeRef:l}=i,r=ve(E,null),a=F(o.defaultChecked),w=I(o,"checked"),f=N(w,a),c=xe(()=>{if(r){const e=r.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),v=L("Checkbox","-checkbox",Te,we,o,h);function x(e){if(r&&o.value!==void 0)r.toggleCheckbox(!c.value,o.value);else{const{onChange:y,"onUpdate:checked":s,onUpdateChecked:D}=o,{nTriggerFormInput:M,nTriggerFormChange:B}=i,T=c.value?o.uncheckedValue:o.checkedValue;s&&d(s,T,e),D&&d(D,T,e),y&&d(y,T,e),M(),B(),a.value=T}}function g(e){k.value||x(e)}function C(e){if(!k.value)switch(e.key){case" ":case"Enter":x(e)}}function p(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=u.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=u.value)===null||e===void 0||e.blur()}},_=me("Checkbox",S,h),P=A(()=>{const{value:e}=l,{common:{cubicBezierEaseInOut:y},self:{borderRadius:s,color:D,colorChecked:M,colorDisabled:B,colorTableHeader:T,colorTableHeaderModal:O,colorTableHeaderPopover:G,checkMarkColor:Y,checkMarkColorDisabled:J,border:Q,borderFocus:W,borderDisabled:Z,borderChecked:q,boxShadowFocus:X,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ne,labelPadding:ce,labelLineHeight:le,[U("fontSize",e)]:de,[U("size",e)]:ie}}=v.value;return{"--n-label-line-height":le,"--n-size":ie,"--n-bezier":y,"--n-border-radius":s,"--n-border":Q,"--n-border-checked":q,"--n-border-focus":W,"--n-border-disabled":Z,"--n-border-disabled-checked":ne,"--n-box-shadow-focus":X,"--n-color":D,"--n-color-checked":M,"--n-color-table":T,"--n-color-table-modal":O,"--n-color-table-popover":G,"--n-color-disabled":B,"--n-color-disabled-checked":ae,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":J,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),$=R?ge("checkbox",A(()=>l.value[0]),P,o):void 0;return Object.assign(i,t,{rtlEnabled:_,selfRef:u,mergedClsPrefix:h,mergedDisabled:k,renderedChecked:c,mergedTheme:v,labelId:Ce(),handleClick:g,handleKeyUp:C,handleKeyDown:p,cssVars:R?void 0:P,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var o;const{$slots:u,renderedChecked:h,mergedDisabled:R,indeterminate:S,privateInsideTable:i,cssVars:k,labelId:l,label:r,mergedClsPrefix:a,focusable:w,handleKeyUp:f,handleKeyDown:c,handleClick:v}=this;return(o=this.onRender)===null||o===void 0||o.call(this),b("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,h&&`${a}-checkbox--checked`,R&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,i&&`${a}-checkbox--inside-table`],tabindex:R||!w?void 0:0,role:"checkbox","aria-checked":S?"mixed":h,"aria-labelledby":l,style:k,onKeyup:f,onKeydown:c,onClick:v,onMousedown:()=>{ye("selectstart",window,x=>{x.preventDefault()},{once:!0})}},b("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",b("div",{class:`${a}-checkbox-box`},b(pe,null,{default:()=>this.indeterminate?b("div",{key:"indeterminate",class:`${a}-checkbox-icon`},$e):b("div",{key:"check",class:`${a}-checkbox-icon`},De)}),b("div",{class:`${a}-checkbox-box__border`}))),r!==null||u.default?b("span",{class:`${a}-checkbox__label`,id:l},u.default?u.default():r):null)}});export{Pe as N,Be as _,we as c};
