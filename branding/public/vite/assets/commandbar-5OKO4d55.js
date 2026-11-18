import{c as A,r as q,w as on,af as Rn,ab as xn,I as $n,o as kn,e as jn,i as j,M as be,t as Ie,C as oe,ac as Dn,l as Bn,F as Ln}from"./_plugin-vue_export-helper-C2mj1YQq.js";import{Y as Hn,u as ie,e as H,b as U,c as Nt}from"./useBranding-BxKFqhtJ.js";import{a as yt}from"./index-QuMdyDls.js";import{P as Pn,Q as Ct,R as sn,S as an,T as Zn,U as Vn,V as Un,W as Gn,X as zn,Y as Kn,Z as rn,$ as ln,a0 as Fn,a1 as Yn,a2 as Wn,a3 as Xn,a4 as Jn,a5 as qn,a6 as pt,a7 as Qn,a8 as ei,a9 as ti,aa as ni,ab as ii}from"./dashboard-CyJVlofJ.js";import{L as oi,u as Mt,w as z,a as si}from"./Validators-mmhhnWZa.js";import{L as ai,O as ri,F as li,bU as ci,bV as hi}from"./DashboardIcon-WX3KCoad.js";import"./utils.esm-qHqIGgqd.js";import"./index-ZW46MiZK.js";import"./index-DJvsux1d.js";import"./typing-D43n8j6T.js";import"./index-DjAevNOK.js";import"./vue-dompurify-html-xc1cZssS.js";import"./useKeyboardNavigableList-BYkXbQgE.js";import"./helper-BVTgYTlr.js";import"./Icon-jHSQyKb-.js";import"./index-BESOyd3y.js";import"./module-DHXVxwIq.js";import"./chatwoot-viz-DSF2tmI1.js";import"./index-BzsA7Fck.js";import"./constants-lVAyZKq6.js";import"./IframeLoader-2AuJYJWh.js";import"./HTMLSanitizer-cciupgGC.js";import"./js.cookie-Cz0CWeBA.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=window,wt=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,St=Symbol(),Tt=new WeakMap;let cn=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==St)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(wt&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Tt.set(t,e))}return e}toString(){return this.cssText}};const di=n=>new cn(typeof n=="string"?n:n+"",void 0,St),De=(n,...e)=>{const t=n.length===1?n[0]:e.reduce(((i,o,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[s+1]),n[0]);return new cn(t,n,St)},ui=(n,e)=>{wt?n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const i=document.createElement("style"),o=xe.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,n.appendChild(i)}))},bt=wt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return di(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Je;const $e=window,It=$e.trustedTypes,pi=It?It.emptyScript:"",Rt=$e.reactiveElementPolyfillSupport,_t={toAttribute(n,e){switch(e){case Boolean:n=n?pi:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},hn=(n,e)=>e!==n&&(e==e||n==n),qe={attribute:!0,type:String,converter:_t,reflect:!1,hasChanged:hn},vt="finalized";let ae=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))})),e}static createProperty(e,t=qe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qe}static finalize(){if(this.hasOwnProperty(vt))return!1;this[vt]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(bt(o))}else e!==void 0&&t.push(bt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((t=>t(this)))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ui(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=qe){var o;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const a=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:_t).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),r=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:_t;this._$El=s,this[s]=r.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||hn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,s)=>this[s]=o)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)})),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach((i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ae[vt]=!0,ae.elementProperties=new Map,ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},Rt==null||Rt({ReactiveElement:ae}),((Je=$e.reactiveElementVersions)!==null&&Je!==void 0?Je:$e.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qe;const ke=window,re=ke.trustedTypes,xt=re?re.createPolicy("lit-html",{createHTML:n=>n}):void 0,ft="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,dn="?"+G,_i=`<${dn}>`,ee=document,fe=()=>ee.createComment(""),ge=n=>n===null||typeof n!="object"&&typeof n!="function",un=Array.isArray,vi=n=>un(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",et=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,kt=/>/g,W=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Dt=/"/g,pn=/^(?:script|style|textarea|title)$/i,fi=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=fi(1),$=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Bt=new WeakMap,Q=ee.createTreeWalker(ee,129,null,!1);function _n(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(e):e}const gi=(n,e)=>{const t=n.length-1,i=[];let o,s=e===2?"<svg>":"",a=de;for(let r=0;r<t;r++){const l=n[r];let c,h,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,h=a.exec(l),h!==null);)p=a.lastIndex,a===de?h[1]==="!--"?a=$t:h[1]!==void 0?a=kt:h[2]!==void 0?(pn.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=W):h[3]!==void 0&&(a=W):a===W?h[0]===">"?(a=o??de,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?W:h[3]==='"'?Dt:jt):a===Dt||a===jt?a=W:a===$t||a===kt?a=de:(a=W,o=void 0);const v=a===W&&n[r+1].startsWith("/>")?" ":"";s+=a===de?l+_i:u>=0?(i.push(c),l.slice(0,u)+ft+l.slice(u)+G+v):l+G+(u===-2?(i.push(void 0),r):v)}return[_n(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class Ae{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const r=e.length-1,l=this.parts,[c,h]=gi(e,t);if(this.el=Ae.createElement(c,i),Q.currentNode=this.el.content,t===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(o=Q.nextNode())!==null&&l.length<r;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const p of o.getAttributeNames())if(p.endsWith(ft)||p.startsWith(G)){const v=h[a++];if(u.push(p),v!==void 0){const f=o.getAttribute(v.toLowerCase()+ft).split(G),m=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Oi:m[1]==="?"?Ni:m[1]==="@"?Ci:Be})}else l.push({type:6,index:s})}for(const p of u)o.removeAttribute(p)}if(pn.test(o.tagName)){const u=o.textContent.split(G),p=u.length-1;if(p>0){o.textContent=re?re.emptyScript:"";for(let v=0;v<p;v++)o.append(u[v],fe()),Q.nextNode(),l.push({type:2,index:++s});o.append(u[p],fe())}}}else if(o.nodeType===8)if(o.data===dn)l.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(G,u+1))!==-1;)l.push({type:7,index:s}),u+=G.length-1}s++}}static createElement(e,t){const i=ee.createElement("template");return i.innerHTML=e,i}}function le(n,e,t=n,i){var o,s,a,r;if(e===$)return e;let l=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const c=ge(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(n),l._$AT(n,t,i)),i!==void 0?((a=(r=t)._$Co)!==null&&a!==void 0?a:r._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=le(n,l._$AS(n,e.values),l,i)),e}class Ai{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ee).importNode(i,!0);Q.currentNode=s;let a=Q.nextNode(),r=0,l=0,c=o[0];for(;c!==void 0;){if(r===c.index){let h;c.type===2?h=new he(a,a.nextSibling,this,e):c.type===1?h=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(h=new Mi(a,this,e)),this._$AV.push(h),c=o[++l]}r!==(c==null?void 0:c.index)&&(a=Q.nextNode(),r++)}return Q.currentNode=ee,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class he{constructor(e,t,i,o){var s;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(s=o==null?void 0:o.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=le(this,e,t),ge(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):vi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&ge(this._$AH)?this._$AA.nextSibling.data=e:this.$(ee.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ae.createElement(_n(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const a=new Ai(s,this),r=a.u(this.options);a.v(i),this.$(r),this._$AH=a}}_$AC(e){let t=Bt.get(e.strings);return t===void 0&&Bt.set(e.strings,t=new Ae(e)),t}T(e){un(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new he(this.k(fe()),this.k(fe()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}let Be=class{constructor(e,t,i,o,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(s===void 0)e=le(this,e,t,0),a=!ge(e)||e!==this._$AH&&e!==$,a&&(this._$AH=e);else{const r=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=le(this,r[i+l],t,l),c===$&&(c=this._$AH[l]),a||(a=!ge(c)||c!==this._$AH[l]),c===C?e=C:e!==C&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!o&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Oi extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}const mi=re?re.emptyScript:"";class Ni extends Be{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,mi):this.element.removeAttribute(this.name)}}class Ci extends Be{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=le(this,e,t,0))!==null&&i!==void 0?i:C)===$)return;const o=this._$AH,s=e===C&&o!==C||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==C&&(o===C||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Mi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}}const wi={I:he},Lt=ke.litHtmlPolyfillSupport;Lt==null||Lt(Ae,he),((Qe=ke.litHtmlVersions)!==null&&Qe!==void 0?Qe:ke.litHtmlVersions=[]).push("2.8.0");const Si=(n,e,t)=>{var i,o;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let a=s._$litPart$;if(a===void 0){const r=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new he(e.insertBefore(fe(),r),r,void 0,t??{})}return a._$AI(n),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt,nt;let K=class extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Si(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return $}};K.finalized=!0,K._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:K});const Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:K});((nt=globalThis.litElementVersions)!==null&&nt!==void 0?nt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:o,elements:s}=i;return{kind:o,elements:s,finisher(a){customElements.define(t,a)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},yi=(n,e,t)=>{e.constructor.createProperty(t,n)};function E(n){return(e,t)=>t!==void 0?yi(n,e,t):Ei(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(n){return E({...n,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;((it=window.HTMLSlotElement)===null||it===void 0?void 0:it.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},me=n=>(...e)=>({_$litDirective$:n,values:e});class Ne{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ti}=wi,vn=n=>n.strings===void 0,Pt=()=>document.createComment(""),ue=(n,e,t)=>{var i;const o=n._$AA.parentNode,s=e===void 0?n._$AB:e._$AA;if(t===void 0){const a=o.insertBefore(Pt(),s),r=o.insertBefore(Pt(),s);t=new Ti(a,r,n,n.options)}else{const a=t._$AB.nextSibling,r=t._$AM,l=r!==n;if(l){let c;(i=t._$AQ)===null||i===void 0||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(c=n._$AU)!==r._$AU&&t._$AP(c)}if(a!==s||l){let c=t._$AA;for(;c!==a;){const h=c.nextSibling;o.insertBefore(c,s),c=h}}}return t},X=(n,e,t=n)=>(n._$AI(e,t),n),bi={},fn=(n,e=bi)=>n._$AH=e,Ii=n=>n._$AH,ot=n=>{var e;(e=n._$AP)===null||e===void 0||e.call(n,!1,!0);let t=n._$AA;const i=n._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=(n,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(n[o],o);return i},Ri=me(class extends Ne{constructor(n){if(super(n),n.type!==L.CHILD)throw Error("repeat() can only be used in text expressions")}ct(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],s=[];let a=0;for(const r of n)o[a]=i?i(r,a):a,s[a]=t(r,a),a++;return{values:s,keys:o}}render(n,e,t){return this.ct(n,e,t).values}update(n,[e,t,i]){var o;const s=Ii(n),{values:a,keys:r}=this.ct(e,t,i);if(!Array.isArray(s))return this.ut=r,a;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let h,u,p=0,v=s.length-1,f=0,m=a.length-1;for(;p<=v&&f<=m;)if(s[p]===null)p++;else if(s[v]===null)v--;else if(l[p]===r[f])c[f]=X(s[p],a[f]),p++,f++;else if(l[v]===r[m])c[m]=X(s[v],a[m]),v--,m--;else if(l[p]===r[m])c[m]=X(s[p],a[m]),ue(n,c[m+1],s[p]),p++,m--;else if(l[v]===r[f])c[f]=X(s[v],a[f]),ue(n,s[p],s[v]),v--,f++;else if(h===void 0&&(h=Zt(r,f,m),u=Zt(l,p,v)),h.has(l[p]))if(h.has(l[v])){const R=u.get(r[f]),Y=R!==void 0?s[R]:null;if(Y===null){const Z=ue(n,s[p]);X(Z,a[f]),c[f]=Z}else c[f]=X(Y,a[f]),ue(n,s[p],Y),s[R]=null;f++}else ot(s[v]),v--;else ot(s[p]),p++;for(;f<=m;){const R=ue(n,c[m+1]);X(R,a[f]),c[f++]=R}for(;p<=v;){const R=s[p++];R!==null&&ot(R)}return this.ut=r,fn(n,c),$}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=me(class extends Ne{constructor(n){if(super(n),n.type!==L.PROPERTY&&n.type!==L.ATTRIBUTE&&n.type!==L.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!vn(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[e]){if(e===$||e===C)return e;const t=n.element,i=n.name;if(n.type===L.PROPERTY){if(e===t[i])return $}else if(n.type===L.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return $}else if(n.type===L.ATTRIBUTE&&t.getAttribute(i)===e+"")return $;return fn(n),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=(n,e)=>{var t,i;const o=n._$AN;if(o===void 0)return!1;for(const s of o)(i=(t=s)._$AO)===null||i===void 0||i.call(t,e,!1),_e(s,e);return!0},je=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},gn=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),ji(e)}};function $i(n){this._$AN!==void 0?(je(this),this._$AM=n,gn(this)):this._$AM=n}function ki(n,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)_e(i[s],!1),je(i[s]);else i!=null&&(_e(i,!1),je(i));else _e(this,n)}const ji=n=>{var e,t,i,o;n.type==L.CHILD&&((e=(i=n)._$AP)!==null&&e!==void 0||(i._$AP=ki),(t=(o=n)._$AQ)!==null&&t!==void 0||(o._$AQ=$i))};class Di extends Ne{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),gn(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(_e(this,e),je(this))}setValue(e){if(vn(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=()=>new Bi;let Bi=class{};const st=new WeakMap,On=me(class extends Di{render(n){return C}update(n,[e]){var t;const i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=n.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=n.element)),C}ot(n){var e;if(typeof this.G=="function"){const t=(e=this.dt)!==null&&e!==void 0?e:globalThis;let i=st.get(t);i===void 0&&(i=new WeakMap,st.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,n),n!==void 0&&this.G.call(this.dt,n)}else this.G.value=n}get rt(){var n,e,t;return typeof this.G=="function"?(e=st.get((n=this.dt)!==null&&n!==void 0?n:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=me(class extends Ne{constructor(n){var e;if(super(n),n.type!==L.ATTRIBUTE||n.name!=="class"||((e=n.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter((e=>n[e])).join(" ")+" "}update(n,[e]){var t,i;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in e)e[s]&&!(!((t=this.nt)===null||t===void 0)&&t.has(s))&&this.it.add(s);return this.render(e)}const o=n.element.classList;this.it.forEach((s=>{s in e||(o.remove(s),this.it.delete(s))}));for(const s in e){const a=!!e[s];a===this.it.has(s)||!((i=this.nt)===null||i===void 0)&&i.has(s)||(a?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return $}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var at=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function rt(n,e,t){n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent("on".concat(e),function(){t(window.event)})}function mn(n,e){for(var t=e.slice(0,e.length-1),i=0;i<t.length;i++)t[i]=n[t[i].toLowerCase()];return t}function Nn(n){typeof n!="string"&&(n=""),n=n.replace(/\s/g,"");for(var e=n.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function Li(n,e){for(var t=n.length>=e.length?n:e,i=n.length>=e.length?e:n,o=!0,s=0;s<t.length;s++)i.indexOf(t[s])===-1&&(o=!1);return o}var Cn={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":at?173:189,"=":at?61:187,";":at?59:186,"'":222,"[":219,"]":221,"\\":220},te={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},Vt={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},T={16:!1,18:!1,17:!1,91:!1},y={};for(var Re=1;Re<20;Re++)Cn["f".concat(Re)]=111+Re;var N=[],Mn="all",wn=[],He=function(e){return Cn[e.toLowerCase()]||te[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Sn(n){Mn=n||"all"}function Oe(){return Mn||"all"}function Hi(){return N.slice(0)}function Pi(n){var e=n.target||n.srcElement,t=e.tagName,i=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(i=!1),i}function Zi(n){return typeof n=="string"&&(n=He(n)),N.indexOf(n)!==-1}function Vi(n,e){var t,i;n||(n=Oe());for(var o in y)if(Object.prototype.hasOwnProperty.call(y,o))for(t=y[o],i=0;i<t.length;)t[i].scope===n?t.splice(i,1):i++;Oe()===n&&Sn(e||"all")}function Ui(n){var e=n.keyCode||n.which||n.charCode,t=N.indexOf(e);if(t>=0&&N.splice(t,1),n.key&&n.key.toLowerCase()==="meta"&&N.splice(0,N.length),(e===93||e===224)&&(e=91),e in T){T[e]=!1;for(var i in te)te[i]===e&&(w[i]=!1)}}function Gi(n){if(!n)Object.keys(y).forEach(function(a){return delete y[a]});else if(Array.isArray(n))n.forEach(function(a){a.key&&lt(a)});else if(typeof n=="object")n.key&&lt(n);else if(typeof n=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var o=t[0],s=t[1];typeof o=="function"&&(s=o,o=""),lt({key:n,scope:o,method:s,splitKey:"+"})}}var lt=function(e){var t=e.key,i=e.scope,o=e.method,s=e.splitKey,a=s===void 0?"+":s,r=Nn(t);r.forEach(function(l){var c=l.split(a),h=c.length,u=c[h-1],p=u==="*"?"*":He(u);if(y[p]){i||(i=Oe());var v=h>1?mn(te,c):[];y[p]=y[p].map(function(f){var m=o?f.method===o:!0;return m&&f.scope===i&&Li(f.mods,v)?{}:f})}})};function Ut(n,e,t){var i;if(e.scope===t||e.scope==="all"){i=e.mods.length>0;for(var o in T)Object.prototype.hasOwnProperty.call(T,o)&&(!T[o]&&e.mods.indexOf(+o)>-1||T[o]&&e.mods.indexOf(+o)===-1)&&(i=!1);(e.mods.length===0&&!T[16]&&!T[18]&&!T[17]&&!T[91]||i||e.shortcut==="*")&&e.method(n,e)===!1&&(n.preventDefault?n.preventDefault():n.returnValue=!1,n.stopPropagation&&n.stopPropagation(),n.cancelBubble&&(n.cancelBubble=!0))}}function Gt(n){var e=y["*"],t=n.keyCode||n.which||n.charCode;if(w.filter.call(this,n)){if((t===93||t===224)&&(t=91),N.indexOf(t)===-1&&t!==229&&N.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(v){var f=Vt[v];n[v]&&N.indexOf(f)===-1?N.push(f):!n[v]&&N.indexOf(f)>-1?N.splice(N.indexOf(f),1):v==="metaKey"&&n[v]&&N.length===3&&(n.ctrlKey||n.shiftKey||n.altKey||(N=N.slice(N.indexOf(f))))}),t in T){T[t]=!0;for(var i in te)te[i]===t&&(w[i]=!0);if(!e)return}for(var o in T)Object.prototype.hasOwnProperty.call(T,o)&&(T[o]=n[Vt[o]]);n.getModifierState&&!(n.altKey&&!n.ctrlKey)&&n.getModifierState("AltGraph")&&(N.indexOf(17)===-1&&N.push(17),N.indexOf(18)===-1&&N.push(18),T[17]=!0,T[18]=!0);var s=Oe();if(e)for(var a=0;a<e.length;a++)e[a].scope===s&&(n.type==="keydown"&&e[a].keydown||n.type==="keyup"&&e[a].keyup)&&Ut(n,e[a],s);if(t in y){for(var r=0;r<y[t].length;r++)if((n.type==="keydown"&&y[t][r].keydown||n.type==="keyup"&&y[t][r].keyup)&&y[t][r].key){for(var l=y[t][r],c=l.splitKey,h=l.key.split(c),u=[],p=0;p<h.length;p++)u.push(He(h[p]));u.sort().join("")===N.sort().join("")&&Ut(n,l,s)}}}}function zi(n){return wn.indexOf(n)>-1}function w(n,e,t){N=[];var i=Nn(n),o=[],s="all",a=document,r=0,l=!1,c=!0,h="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(s=e.scope),e.element&&(a=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(h=e.splitKey)),typeof e=="string"&&(s=e);r<i.length;r++)n=i[r].split(h),o=[],n.length>1&&(o=mn(te,n)),n=n[n.length-1],n=n==="*"?"*":He(n),n in y||(y[n]=[]),y[n].push({keyup:l,keydown:c,scope:s,mods:o,shortcut:i[r],method:t,key:i[r],splitKey:h});typeof a<"u"&&!zi(a)&&window&&(wn.push(a),rt(a,"keydown",function(u){Gt(u)}),rt(window,"focus",function(){N=[]}),rt(a,"keyup",function(u){Gt(u),Ui(u)}))}var ct={setScope:Sn,getScope:Oe,deleteScope:Vi,getPressedKeyCodes:Hi,isPressed:Zi,filter:Pi,unbind:Gi};for(var ht in ct)Object.prototype.hasOwnProperty.call(ct,ht)&&(w[ht]=ct[ht]);if(typeof window<"u"){var Ki=window.hotkeys;w.noConflict=function(n){return n&&window.hotkeys===w&&(window.hotkeys=Ki),w},window.hotkeys=w}var Ce=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let ne=class extends K{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=An()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const i of this.breadcrumbs)t.push(b`<button
            tabindex="-1"
            @click=${()=>this.selectParent(i)}
            class="breadcrumb"
          >
            ${i}
          </button>`);e=b`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return b`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${On(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};ne.styles=De`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;Ce([E()],ne.prototype,"placeholder",void 0);Ce([E({type:Boolean})],ne.prototype,"hideBreadcrumbs",void 0);Ce([E()],ne.prototype,"breadcrumbHome",void 0);Ce([E({type:Array})],ne.prototype,"breadcrumbs",void 0);ne=Ce([Le("ninja-header")],ne);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class At extends Ne{constructor(e){if(super(e),this.et=C,e.type!==L.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this.ft=void 0,this.et=e;if(e===$)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}At.directiveName="unsafeHTML",At.resultType=1;const Fi=me(At);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Yi(n,e){if(n!==void 0){let t=-1;for(const i of n)t>-1&&(yield e),t++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const Wi=De`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ot=class extends K{render(){return b`<span><slot></slot></span>`}};Ot.styles=[Wi];Ot=Hn([Le("mwc-icon")],Ot);var Pe=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let ce=class extends K{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=b`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Fi(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(o=>{const s=o.split("+"),a=b`${Yi(s.map(r=>b`<kbd>${r}</kbd>`),"+")}`;return b`<div class="ninja-hotkey ninja-hotkeys">
            ${a}
          </div>`}):t=this.action.hotkey.split(",").map(o=>{const a=o.split("+").map(r=>b`<kbd class="ninja-hotkey">${r}</kbd>`);return b`<kbd class="ninja-hotkeys">${a}</kbd>`}));const i={selected:this.selected,"ninja-action":!0};return b`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${gt(i)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};ce.styles=De`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;Pe([E({type:Object})],ce.prototype,"action",void 0);Pe([E({type:Boolean})],ce.prototype,"selected",void 0);Pe([E({type:Boolean})],ce.prototype,"hotKeysJoinedView",void 0);ce=Pe([Le("ninja-action")],ce);const Xi=b` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,Ji=De`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var S=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(a=n[r])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let M=class extends K{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=An()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1,this.dispatchEvent(new CustomEvent("closed",{bubbles:!0,composed:!0}))}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let i=(e=this._selected)===null||e===void 0?void 0:e.parent;if(i)for(t.push(i);i;){const o=this._flatData.find(s=>s.id===i);o!=null&&o.parent&&t.push(o.parent),i=o?o.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let i=[];return e||(e=[]),e.map(o=>{const s=o.children&&o.children.some(r=>typeof r=="string"),a={...o,parent:o.parent||t};return s||(a.children&&a.children.length&&(t=o.id,i=[...i,...a.children]),a.children=a.children?a.children.map(r=>r.id):[]),a}).concat(i.length?this._flattern(i,t):i)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{w(t.hotkey,i=>{i.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&w(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&w(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&w(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&w(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&w(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&w(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&w.unbind(this.openHotkey),this.selectHotkey&&w.unbind(this.selectHotkey),this.goBackHotkey&&w.unbind(this.goBackHotkey),this.navigationDownHotkey&&w.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&w.unbind(this.navigationUpHotkey),this.closeHotkey&&w.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},o=this._flatData.filter(r=>{var l;const c=new RegExp(this._search,"gi"),h=r.title.match(c)||((l=r.keywords)===null||l===void 0?void 0:l.match(c));return(!this._currentRoot&&this._search||r.parent===this._currentRoot)&&h}).reduce((r,l)=>r.set(l.section,[...r.get(l.section)||[],l]),new Map);this._actionMatches=[...o.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const s=r=>b` ${Ri(r,l=>l.id,l=>{var c;return b`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${xi(l.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${h=>this._actionFocused(l,h)}
            @actionsSelected=${h=>this._actionSelected(h.detail)}
            .action=${l}
          ></ninja-action>`})}`,a=[];return o.forEach((r,l)=>{const c=l?b`<div class="group-header">${l}</div>`:void 0;a.push(b`${c}${s(r)}`)}),b`
      <div @click=${this._overlayClick} class=${gt(t)}>
        <div class=${gt(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${On(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${r=>this.setParent(r.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${a}</div>
          </div>
          <slot name="footer"> ${Xi} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const i=e.handler(e);i!=null&&i.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};M.styles=[Ji];S([E({type:String})],M.prototype,"placeholder",void 0);S([E({type:Boolean})],M.prototype,"disableHotkeys",void 0);S([E({type:Boolean})],M.prototype,"hideBreadcrumbs",void 0);S([E()],M.prototype,"openHotkey",void 0);S([E()],M.prototype,"navigationUpHotkey",void 0);S([E()],M.prototype,"navigationDownHotkey",void 0);S([E()],M.prototype,"closeHotkey",void 0);S([E()],M.prototype,"goBackHotkey",void 0);S([E()],M.prototype,"selectHotkey",void 0);S([E({type:Boolean})],M.prototype,"hotKeysJoinedView",void 0);S([E({type:Boolean})],M.prototype,"noAutoLoadMdIcons",void 0);S([E({type:Array,hasChanged(){return!0}})],M.prototype,"data",void 0);S([F()],M.prototype,"visible",void 0);S([F()],M.prototype,"_bump",void 0);S([F()],M.prototype,"_actionMatches",void 0);S([F()],M.prototype,"_search",void 0);S([F()],M.prototype,"_currentRoot",void 0);S([F()],M.prototype,"_flatData",void 0);S([F()],M.prototype,"breadcrumbs",null);S([F()],M.prototype,"_selected",void 0);M=S([Le("ninja-keys")],M);const zt='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.003-4.596l8.5-8.51A3.25 3.25 0 0 1 14.284 2h5.465Zm0 1.5h-5.465c-.465 0-.91.185-1.239.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75ZM17 5.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" fill="currentColor"/></svg>',Kt='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.478 2a6.474 6.474 0 0 0-.708 1.5h-7.06a.75.75 0 0 0-.75.75v.907c0 .656.286 1.279.783 1.706C5.545 19.945 7.44 20.501 10 20.501c.599 0 1.162-.03 1.688-.091.25.5.563.964.93 1.38-.803.141-1.676.21-2.618.21-2.89 0-5.128-.656-6.691-2a3.75 3.75 0 0 1-1.305-2.843v-.907A2.25 2.25 0 0 1 4.254 14h7.768Zm4.697.588-.069.058-2.515 2.517-.041.05-.035.058-.032.078-.012.043-.01.086.003.088.019.085.032.078.025.042.05.066 2.516 2.516a.5.5 0 0 0 .765-.638l-.058-.069L15.711 18h4.79a.5.5 0 0 0 .491-.41L21 17.5a.5.5 0 0 0-.41-.492L20.5 17h-4.789l1.646-1.647a.5.5 0 0 0 .058-.637l-.058-.07a.5.5 0 0 0-.638-.058ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" fill="currentColor"/></svg>',qi='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.92 3.316c.806-.717 2.08-.145 2.08.934v15.496c0 1.078-1.274 1.65-2.08.934l-4.492-3.994a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.247V9.75a2.25 2.25 0 0 1 2.25-2.25h3.68a.75.75 0 0 0 .498-.19l4.491-3.993Zm.58 1.49L9.425 8.43A2.25 2.25 0 0 1 7.93 9H4.25a.75.75 0 0 0-.75.75v4.497c0 .415.336.75.75.75h3.68a2.25 2.25 0 0 1 1.495.57l4.075 3.623V4.807ZM16.22 9.22a.75.75 0 0 1 1.06 0L19 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L20.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" fill="currentColor"/></svg>',Qi='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.25c0-1.079-1.274-1.65-2.08-.934L8.427 7.309a.75.75 0 0 1-.498.19H4.25A2.25 2.25 0 0 0 2 9.749v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .498.19l4.491 3.994c.806.716 2.081.144 2.081-.934V4.25ZM9.425 8.43 13.5 4.807v14.382l-4.075-3.624a2.25 2.25 0 0 0-1.495-.569H4.25a.75.75 0 0 1-.75-.75V9.75a.75.75 0 0 1 .75-.75h3.68a2.25 2.25 0 0 0 1.495-.569ZM18.992 5.897a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 22 12a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 20.5 12a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049Z" fill="#212121"/><path d="M17.143 8.37a.75.75 0 0 1 1.017.302c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z" fill="currentColor"/></svg>',Ft='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-.026.026a6.473 6.473 0 0 0-1.43-.692l.395-.395a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75h-5.466c-.464 0-.91.185-1.238.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.33.13c.165.487.386.947.654 1.374a3.256 3.256 0 0 1-4.043-.442L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953h5.465ZM17 5.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-2.354-7.854a.5.5 0 0 1 .708 0l1.646 1.647 1.646-1.647a.5.5 0 0 1 .708.708L18.207 17.5l1.647 1.646a.5.5 0 0 1-.708.708L17.5 18.207l-1.646 1.647a.5.5 0 0 1-.708-.708l1.647-1.646-1.647-1.646a.5.5 0 0 1 0-.708Z" fill="currentColor"/></svg>',En='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.25 2a.75.75 0 0 0-.743.648l-.007.102v5.69l-4.574-4.56a6.41 6.41 0 0 0-8.878-.179l-.186.18a6.41 6.41 0 0 0 0 9.063l8.845 8.84a.75.75 0 0 0 1.06-1.062l-8.845-8.838a4.91 4.91 0 0 1 6.766-7.112l.178.17L17.438 9.5H11.75a.75.75 0 0 0-.743.648L11 10.25c0 .38.282.694.648.743l.102.007h7.5a.75.75 0 0 0 .743-.648L20 10.25v-7.5a.75.75 0 0 0-.75-.75Z" fill="currentColor"/></svg>',yn='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-1.25 9.94 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073 1.97 1.97 4.47-4.47-4.47 4.47Z" fill="currentColor"/></svg>',eo='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.75 11.5a.75.75 0 0 1 .743.648l.007.102v5a4.75 4.75 0 0 1-4.533 4.745L15.75 22h-7.5c-.98 0-1.813-.626-2.122-1.5h9.622l.184-.005a3.25 3.25 0 0 0 3.06-3.06L19 17.25v-5a.75.75 0 0 1 .75-.75Zm-2.5-2a.75.75 0 0 1 .743.648l.007.102v7a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-10a2.25 2.25 0 0 1-2.245-2.096L3.5 17.25v-7a.75.75 0 0 1 1.493-.102L5 10.25v7c0 .38.282.694.648.743L5.75 18h10a.75.75 0 0 0 .743-.648l.007-.102v-7a.75.75 0 0 1 .75-.75ZM6.218 6.216l3.998-3.996a.75.75 0 0 1 .976-.073l.084.072 4.004 3.997a.75.75 0 0 1-.976 1.134l-.084-.073-2.72-2.714v9.692a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L10 14.255V4.556L7.279 7.277a.75.75 0 0 1-.977.072l-.084-.072a.75.75 0 0 1-.072-.977l.072-.084 3.998-3.996-3.998 3.996Z" fill="currentColor"/></svg>',Ze='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12S6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333c0 4.595 3.738 8.333 8.333 8.333c4.595 0 8.333-3.738 8.333-8.333c0-4.595-3.738-8.333-8.333-8.333ZM11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.648l-.007-.102v-6a.75.75 0 0 1 .75-.75Z" fill="currentColor"/></svg>',Yt='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2-.09.007a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14Zm-3.246-4c.835 0 1.563.454 1.951 1.13a6.44 6.44 0 0 0-1.518.509.736.736 0 0 0-.433-.139H9.752a.75.75 0 0 0-.75.75v4.249c0 1.41.974 2.594 2.286 2.915a6.42 6.42 0 0 0 .735 1.587l-.02-.001a4.501 4.501 0 0 1-4.501-4.501V12.25A2.25 2.25 0 0 1 9.752 10h4.502Zm-6.848 0a3.243 3.243 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v2.749a2.501 2.501 0 0 0 3.082 2.433c.085.504.24.985.453 1.432A4.001 4.001 0 0 1 2 14.999V12.25a2.25 2.25 0 0 1 2.096-2.245L4.25 10h3.156Zm12.344 0A2.25 2.25 0 0 1 22 12.25v.56A6.478 6.478 0 0 0 17.5 11l-.245.005A3.21 3.21 0 0 0 16.6 10h3.15ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm13 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-6.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor"/></svg>',to='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M9.562 3.262a.5.5 0 0 1 .879 0l6.5 12a.5.5 0 0 1-.44.739H3.5a.5.5 0 0 1-.44-.739l6.503-12Zm1.758-.477c-.567-1.047-2.07-1.047-2.638 0L2.18 14.786a1.5 1.5 0 0 0 1.32 2.215h13.002a1.5 1.5 0 0 0 1.319-2.215l-6.5-12ZM10.5 7.5a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4Zm.25 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"/></svg>',no=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#FFEBEE"/>
<path d="M8 8.5C8 7.94772 8.44772 7.5 9 7.5C9.55228 7.5 10 7.94772 10 8.5V13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13V8.5Z" fill="#FF382D"/>
<path d="M8 15.5C8 14.9477 8.44772 14.5 9 14.5C9.55228 14.5 10 14.9477 10 15.5C10 16.0523 9.55228 16.5 9 16.5C8.44772 16.5 8 16.0523 8 15.5Z" fill="#FF382D"/>
<path d="M11 8.5C11 7.94772 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8.5Z" fill="#FF382D"/>
<path d="M11 15.5C11 14.9477 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9477 13 15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5Z" fill="#FF382D"/>
<path d="M14 8.5C14 7.94772 14.4477 7.5 15 7.5C15.5523 7.5 16 7.94772 16 8.5V13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13V8.5Z" fill="#FF382D"/>
<path d="M14 15.5C14 14.9477 14.4477 14.5 15 14.5C15.5523 14.5 16 14.9477 16 15.5C16 16.0523 15.5523 16.5 15 16.5C14.4477 16.5 14 16.0523 14 15.5Z" fill="#FF382D"/>
</svg>
`,io=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M9.7642 8L9.62358 14.1619H8.25142L8.11506 8H9.7642ZM8.9375 16.821C8.67898 16.821 8.45739 16.7301 8.27273 16.5483C8.09091 16.3665 8 16.1449 8 15.8835C8 15.6278 8.09091 15.4091 8.27273 15.2273C8.45739 15.0455 8.67898 14.9545 8.9375 14.9545C9.19034 14.9545 9.40909 15.0455 9.59375 15.2273C9.78125 15.4091 9.875 15.6278 9.875 15.8835C9.875 16.0568 9.83097 16.2145 9.7429 16.3565C9.65767 16.4986 9.54403 16.6122 9.40199 16.6974C9.26278 16.7798 9.10795 16.821 8.9375 16.821Z" fill="#446888"/>
<path d="M13.1073 8L12.9667 14.1619H11.5945L11.4582 8H13.1073ZM12.2806 16.821C12.0221 16.821 11.8005 16.7301 11.6159 16.5483C11.434 16.3665 11.3431 16.1449 11.3431 15.8835C11.3431 15.6278 11.434 15.4091 11.6159 15.2273C11.8005 15.0455 12.0221 14.9545 12.2806 14.9545C12.5335 14.9545 12.7522 15.0455 12.9369 15.2273C13.1244 15.4091 13.2181 15.6278 13.2181 15.8835C13.2181 16.0568 13.1741 16.2145 13.086 16.3565C13.0008 16.4986 12.8872 16.6122 12.7451 16.6974C12.6059 16.7798 12.4511 16.821 12.2806 16.821Z" fill="#446888"/>
<path d="M16.4505 8L16.3098 14.1619H14.9377L14.8013 8H16.4505ZM15.6237 16.821C15.3652 16.821 15.1436 16.7301 14.959 16.5483C14.7772 16.3665 14.6862 16.1449 14.6862 15.8835C14.6862 15.6278 14.7772 15.4091 14.959 15.2273C15.1436 15.0455 15.3652 14.9545 15.6237 14.9545C15.8766 14.9545 16.0953 15.0455 16.28 15.2273C16.4675 15.4091 16.5612 15.6278 16.5612 15.8835C16.5612 16.0568 16.5172 16.2145 16.4291 16.3565C16.3439 16.4986 16.2303 16.6122 16.0882 16.6974C15.949 16.7798 15.7942 16.821 15.6237 16.821Z" fill="#446888"/>
</svg>`,oo=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M10.7642 8L10.6236 14.1619H9.25142L9.11506 8H10.7642ZM9.9375 16.821C9.67898 16.821 9.45739 16.7301 9.27273 16.5483C9.09091 16.3665 9 16.1449 9 15.8835C9 15.6278 9.09091 15.4091 9.27273 15.2273C9.45739 15.0455 9.67898 14.9545 9.9375 14.9545C10.1903 14.9545 10.4091 15.0455 10.5938 15.2273C10.7812 15.4091 10.875 15.6278 10.875 15.8835C10.875 16.0568 10.831 16.2145 10.7429 16.3565C10.6577 16.4986 10.544 16.6122 10.402 16.6974C10.2628 16.7798 10.108 16.821 9.9375 16.821Z" fill="#446888"/>
<path d="M14.1073 8L13.9667 14.1619H12.5945L12.4582 8H14.1073ZM13.2806 16.821C13.0221 16.821 12.8005 16.7301 12.6159 16.5483C12.434 16.3665 12.3431 16.1449 12.3431 15.8835C12.3431 15.6278 12.434 15.4091 12.6159 15.2273C12.8005 15.0455 13.0221 14.9545 13.2806 14.9545C13.5335 14.9545 13.7522 15.0455 13.9369 15.2273C14.1244 15.4091 14.2181 15.6278 14.2181 15.8835C14.2181 16.0568 14.1741 16.2145 14.086 16.3565C14.0008 16.4986 13.8872 16.6122 13.7451 16.6974C13.6059 16.7798 13.4511 16.821 13.2806 16.821Z" fill="#446888"/>
</svg>`,so=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M12.7642 8L12.6236 14.1619H11.2514L11.1151 8H12.7642ZM11.9375 16.821C11.679 16.821 11.4574 16.7301 11.2727 16.5483C11.0909 16.3665 11 16.1449 11 15.8835C11 15.6278 11.0909 15.4091 11.2727 15.2273C11.4574 15.0455 11.679 14.9545 11.9375 14.9545C12.1903 14.9545 12.4091 15.0455 12.5938 15.2273C12.7812 15.4091 12.875 15.6278 12.875 15.8835C12.875 16.0568 12.831 16.2145 12.7429 16.3565C12.6577 16.4986 12.544 16.6122 12.402 16.6974C12.2628 16.7798 12.108 16.821 11.9375 16.821Z" fill="#446888"/>
</svg>`,ao=`<svg role="img" class="ninja-icon ninja-icon--fluent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#F1F5F8"/>
<path d="M13.5686 8L11.1579 16.9562H10L12.4107 8H13.5686Z" fill="#446888"/>
</svg>`,ve='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.314 7.565l-.136.126l-10.48 10.488a2.27 2.27 0 0 0 3.211 3.208L16.388 10.9a2.251 2.251 0 0 0-.001-3.182l-.157-.146a2.25 2.25 0 0 0-2.916-.007Zm-.848 2.961l1.088 1.088l-8.706 8.713a.77.77 0 1 1-1.089-1.088l8.707-8.713Zm4.386 4.48L16.75 15a.75.75 0 0 0-.743.648L16 15.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.694.648.743l.102.007H16v.75c0 .38.282.694.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V18h.75a.75.75 0 0 0 .743-.648L19 17.25a.75.75 0 0 0-.648-.743l-.102-.007h-.75v-.75a.75.75 0 0 0-.648-.743L16.75 15l.102.007Zm-1.553-6.254l.027.027a.751.751 0 0 1 0 1.061l-.711.713l-1.089-1.089l.73-.73a.75.75 0 0 1 1.043.018ZM6.852 5.007L6.75 5a.75.75 0 0 0-.743.648L6 5.75v.75h-.75a.75.75 0 0 0-.743.648L4.5 7.25c0 .38.282.693.648.743L5.25 8H6v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648L7.5 8.75V8h.75a.75.75 0 0 0 .743-.648L9 7.25a.75.75 0 0 0-.648-.743L8.25 6.5H7.5v-.75a.75.75 0 0 0-.648-.743L6.75 5l.102.007Zm12-2L18.75 3a.75.75 0 0 0-.743.648L18 3.75v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743L17.25 6H18v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V6h.75a.75.75 0 0 0 .743-.648L21 5.25a.75.75 0 0 0-.648-.743L20.25 4.5h-.75v-.75a.75.75 0 0 0-.648-.743L18.75 3l.102.007Z" fill="currentColor"/></svg>',ro='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15ZM5.5 18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1V18Z" fill="currentColor"/></svg>',lo='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 19.5h14.5a.75.75 0 0 0 .102-1.493L21.25 18H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm0-15h14.5a.75.75 0 0 0 .102-1.493L21.25 3H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm7 3.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM13 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm-2-2.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H7V9.5Z" fill="currentColor"/></svg>',co='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 4.5h14.5a.75.75 0 0 0 .102-1.493L21.25 3H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm0 15h14.5a.75.75 0 0 0 .102-1.493L21.25 18H6.75a.75.75 0 0 0-.102 1.493l.102.007Zm7-11.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM13 13.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm-2-2.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2 0a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5Z" fill="currentColor"/></svg>',ho='<svg role="img" class="ninja-icon ninja-icon--fluent" width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17h7.522l-2 2H3a1 1 0 0 1-.117-1.993L3 17Zm0-2h7.848a1.75 1.75 0 0 1-.775-2H3l-.117.007A1 1 0 0 0 3 15Zm0-8h18l.117-.007A1 1 0 0 0 21 5H3l-.117.007A1 1 0 0 0 3 7Zm9.72 9.216a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5ZM3 9h10a1 1 0 0 1 .117 1.993L13 11H3a1 1 0 0 1-.117-1.993L3 9Zm13.5-1a.75.75 0 0 1 .744.658l.14 1.13a3.25 3.25 0 0 0 2.828 2.829l1.13.139a.75.75 0 0 1 0 1.488l-1.13.14a3.25 3.25 0 0 0-2.829 2.828l-.139 1.13a.75.75 0 0 1-1.488 0l-.14-1.13a3.25 3.25 0 0 0-2.828-2.829l-1.13-.139a.75.75 0 0 1 0-1.488l1.13-.14a3.25 3.25 0 0 0 2.829-2.828l.139-1.13A.75.75 0 0 1 16.5 8Z" fill="currentColor"/></svg>',uo='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18"viewBox="0 0 24 24"><path fill="currentColor" d="M3.839 5.858c2.94-3.916 9.03-5.055 13.364-2.36c4.28 2.66 5.854 7.777 4.1 12.577c-1.655 4.533-6.016 6.328-9.159 4.048c-1.177-.854-1.634-1.925-1.854-3.664l-.106-.987l-.045-.398c-.123-.934-.311-1.352-.705-1.572c-.535-.298-.892-.305-1.595-.033l-.351.146l-.179.078c-1.014.44-1.688.595-2.541.416l-.2-.047l-.164-.047c-2.789-.864-3.202-4.647-.565-8.157Zm.984 6.716l.123.037l.134.03c.439.087.814.015 1.437-.242l.602-.257c1.202-.493 1.985-.54 3.046.05c.917.512 1.275 1.298 1.457 2.66l.053.459l.055.532l.047.422c.172 1.361.485 2.09 1.248 2.644c2.275 1.65 5.534.309 6.87-3.349c1.516-4.152.174-8.514-3.484-10.789c-3.675-2.284-8.899-1.306-11.373 1.987c-2.075 2.763-1.82 5.28-.215 5.816Zm11.225-1.994a1.25 1.25 0 1 1 2.414-.647a1.25 1.25 0 0 1-2.414.647Zm.494 3.488a1.25 1.25 0 1 1 2.415-.647a1.25 1.25 0 0 1-2.415.647ZM14.07 7.577a1.25 1.25 0 1 1 2.415-.647a1.25 1.25 0 0 1-2.415.647Zm-.028 8.998a1.25 1.25 0 1 1 2.414-.647a1.25 1.25 0 0 1-2.414.647Zm-3.497-9.97a1.25 1.25 0 1 1 2.415-.646a1.25 1.25 0 0 1-2.415.646Z"/></svg>',po='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2Zm5 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0Zm4.25.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z"/></svg>',_o='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661A9.965 9.965 0 0 1 3.13 17.68a.75.75 0 0 1 .365-1.132c3.767-1.348 5.785-2.91 6.956-5.146c1.232-2.353 1.551-4.93.689-8.463a.75.75 0 0 1 .769-.927a9.961 9.961 0 0 1 4.457 1.327c4.784 2.762 6.423 8.879 3.66 13.662Zm-8.248-4.903c-1.25 2.389-3.31 4.1-6.817 5.499a8.49 8.49 0 0 0 2.152 1.766a8.502 8.502 0 0 0 8.502-14.725a8.484 8.484 0 0 0-2.792-1.015c.647 3.384.23 6.043-1.045 8.475Z"/></svg>',vo='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M4.25 3A2.25 2.25 0 0 0 2 5.25v10.5A2.25 2.25 0 0 0 4.25 18H9.5v1.25c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-.5c-.69 0-1.25-.56-1.25-1.25V18h5.25A2.25 2.25 0 0 0 22 15.75V5.25A2.25 2.25 0 0 0 19.75 3H4.25ZM13 18v1.25c0 .45.108.875.3 1.25h-2.6c.192-.375.3-.8.3-1.25V18h2ZM3.5 5.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75V13h-17V5.25Zm0 9.25h17v1.25a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V14.5Z"/></svg>',se='<svg role="img" class="ninja-icon ninja-icon--fluent" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3.5c-3.104 0-6 2.432-6 6.25v4.153L4.682 17h14.67l-1.354-3.093V11.75a.75.75 0 0 1 1.5 0v1.843l1.381 3.156a1.25 1.25 0 0 1-1.145 1.751H15a3.002 3.002 0 0 1-6.003 0H4.305a1.25 1.25 0 0 1-1.15-1.739l1.344-3.164V9.75C4.5 5.068 8.103 2 12 2c.86 0 1.705.15 2.5.432a.75.75 0 0 1-.502 1.413A5.964 5.964 0 0 0 12 3.5ZM12 20c.828 0 1.5-.671 1.501-1.5h-3.003c0 .829.673 1.5 1.502 1.5Zm3.25-13h-2.5l-.101.007A.75.75 0 0 0 12.75 8.5h1.043l-1.653 2.314l-.055.09A.75.75 0 0 0 12.75 12h2.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.042l1.653-2.314l.055-.09A.75.75 0 0 0 15.25 7Zm6-5h-3.5l-.101.007A.75.75 0 0 0 17.75 3.5h2.134l-2.766 4.347l-.05.09A.75.75 0 0 0 17.75 9h3.5l.102-.007A.75.75 0 0 0 21.25 7.5h-2.133l2.766-4.347l.05-.09A.75.75 0 0 0 21.25 2Z"/></svg>',dt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"/></g></svg>',Wt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"/></svg>',fo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/></g></svg>',Xt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"/></g></svg>',go='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"/></svg>',Ao='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"/></g></svg>',Oo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18m13.4-2.1c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></g></svg>',mo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7c2 0 2 3 4 3c2.5 0 4.5-5 5-7"/></g></svg>',Jt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></g></svg>',qt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></g></svg>',Qt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"/><circle cx="10.5" cy="6.5" r=".5" fill="currentColor"/></g></svg>',No='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 18l6-6l-6-6M8 6l-6 6l6 6"/></svg>',Co='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m17 2l4 4l-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></g></svg>',mt='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3m14 0V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"/></g></svg>',Mo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 14a2 2 0 0 0 2-2V8h-2"/><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M8 14a2 2 0 0 0 2-2V8H8"/></g></svg>',wo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect width="8" height="8" x="14" y="2" rx="1"/></g></svg>',en='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></g></svg>',tn='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 6v6l4 2m4-2v5m0 4h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></g></svg>',So='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></g></svg>',Eo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></g></svg>',yo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"/></g></svg>',To='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></g></svg>',bo='<svg role="img" class="ninja-icon" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></g></svg>',Io=n=>[{key:"light",label:n("COMMAND_BAR.COMMANDS.LIGHT_MODE"),icon:po},{key:"dark",label:n("COMMAND_BAR.COMMANDS.DARK_MODE"),icon:_o},{key:"auto",label:n("COMMAND_BAR.COMMANDS.SYSTEM_MODE"),icon:vo}],Ro=n=>{oi.set(ai.COLOR_SCHEME,n);const e=window.matchMedia("(prefers-color-scheme: dark)").matches;Pn(e)};function xo(){const{t:n}=ie(),e=A(()=>Io(n));return{goToAppearanceHotKeys:A(()=>{const i=e.value.map(o=>({id:o.key,title:o.label,parent:"appearance_settings",section:n("COMMAND_BAR.SECTIONS.APPEARANCE"),icon:o.icon,handler:()=>{Ro(o.key)}}));return[{id:"appearance_settings",title:n("COMMAND_BAR.COMMANDS.CHANGE_APPEARANCE"),section:n("COMMAND_BAR.SECTIONS.APPEARANCE"),icon:uo,children:i.map(o=>o.id)},...i]})}}const D=z.SNOOZE_OPTIONS,pe=n=>()=>H.emit(sn,n),$o=[{id:"snooze_notification",title:"COMMAND_BAR.COMMANDS.SNOOZE_NOTIFICATION",icon:se,children:Object.values(D)},{id:D.AN_HOUR_FROM_NOW,title:"COMMAND_BAR.COMMANDS.AN_HOUR_FROM_NOW",parent:"snooze_notification",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",icon:se,handler:pe(D.AN_HOUR_FROM_NOW)},{id:D.UNTIL_TOMORROW,title:"COMMAND_BAR.COMMANDS.UNTIL_TOMORROW",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:se,handler:pe(D.UNTIL_TOMORROW)},{id:D.UNTIL_NEXT_WEEK,title:"COMMAND_BAR.COMMANDS.UNTIL_NEXT_WEEK",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:se,handler:pe(D.UNTIL_NEXT_WEEK)},{id:D.UNTIL_NEXT_MONTH,title:"COMMAND_BAR.COMMANDS.UNTIL_NEXT_MONTH",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:se,handler:pe(D.UNTIL_NEXT_MONTH)},{id:D.UNTIL_CUSTOM_TIME,title:"COMMAND_BAR.COMMANDS.UNTIL_CUSTOM_TIME",section:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",parent:"snooze_notification",icon:se,handler:pe(D.UNTIL_CUSTOM_TIME)}];function ko(){const{t:n}=ie(),e=Mt(),t=o=>o.map(s=>({...s,title:n(s.title),section:s.section?n(s.section):void 0}));return{inboxHotKeys:A(()=>Ct(e.name)?t($o):[])}}const J="COMMAND_BAR.SECTIONS.GENERAL",P="COMMAND_BAR.SECTIONS.REPORTS",I="COMMAND_BAR.SECTIONS.SETTINGS",jo=[{id:"goto_my_inbox",title:"COMMAND_BAR.COMMANDS.GO_TO_MY_INBOX",section:J,icon:dt,routeName:"inbox_view"},{id:"goto_conversation_dashboard",title:"COMMAND_BAR.COMMANDS.GO_TO_CONVERSATION_DASHBOARD",section:J,icon:Wt,routeName:"home"},{id:"goto_contacts_dashboard",title:"COMMAND_BAR.COMMANDS.GO_TO_CONTACTS_DASHBOARD",section:J,icon:fo,routeName:"contacts_dashboard_index"},{id:"goto_captain",title:"COMMAND_BAR.COMMANDS.GO_TO_CAPTAIN",section:J,icon:Xt,routeName:"captain_assistants_index",params:{navigationPath:"captain_assistants_overview_index"}},{id:"goto_calls_dashboard",title:"COMMAND_BAR.COMMANDS.GO_TO_CALLS_DASHBOARD",section:J,icon:go,routeName:"calls_dashboard_index"},{id:"goto_campaigns",title:"COMMAND_BAR.COMMANDS.GO_TO_CAMPAIGNS",section:J,icon:Ao,routeName:"campaigns_livechat_index"},{id:"goto_help_center",title:"COMMAND_BAR.COMMANDS.GO_TO_HELP_CENTER",section:J,icon:Oo,routeName:"portals_index",params:{navigationPath:"portals_articles_index"}},{id:"open_reports_overview",title:"COMMAND_BAR.COMMANDS.GO_TO_REPORTS_OVERVIEW",section:P,icon:mo,routeName:"account_overview_reports"},{id:"open_conversation_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_CONVERSATION_REPORTS",section:P,icon:Wt,routeName:"conversation_reports"},{id:"open_agent_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_AGENT_REPORTS",section:P,icon:Jt,routeName:"agent_reports_index"},{id:"open_label_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_LABEL_REPORTS",section:P,icon:Qt,routeName:"label_reports_index"},{id:"open_inbox_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_INBOX_REPORTS",section:P,icon:dt,routeName:"inbox_reports_index"},{id:"open_team_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_TEAM_REPORTS",section:P,icon:qt,routeName:"team_reports_index"},{id:"open_csat_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_CSAT_REPORTS",section:P,icon:yo,routeName:"csat_reports"},{id:"open_bot_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_BOT_REPORTS",section:P,icon:Xt,routeName:"bot_reports"},{id:"open_sla_reports",title:"COMMAND_BAR.COMMANDS.GO_TO_SLA_REPORTS",section:P,icon:tn,routeName:"sla_reports"},{id:"open_agent_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_AGENTS",section:I,icon:Jt,routeName:"agent_list"},{id:"open_team_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_TEAMS",section:I,icon:qt,routeName:"settings_teams_list"},{id:"open_inbox_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_INBOXES",section:I,icon:dt,routeName:"settings_inbox_list"},{id:"open_template_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_TEMPLATES",section:I,icon:To,routeName:"settings_templates"},{id:"open_label_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_LABELS",section:I,icon:Qt,routeName:"labels_list"},{id:"open_custom_attribute_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_CUSTOM_ATTRIBUTES",section:I,icon:No,routeName:"attributes_list"},{id:"open_automation_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_AUTOMATION",section:I,icon:Co,routeName:"automation_list"},{id:"open_macro_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_MACROS",section:I,icon:mt,routeName:"macros_wrapper"},{id:"open_canned_response_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_CANNED_RESPONSES",section:I,icon:Mo,routeName:"canned_list"},{id:"open_sla_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_SLA",section:I,icon:tn,routeName:"sla_list"},{id:"open_applications_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_APPLICATIONS",section:I,icon:wo,routeName:"settings_applications"},{id:"open_data_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_DATA",section:I,icon:bo,routeName:"settings_data_imports"},{id:"open_audit_logs_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_AUDIT_LOGS",section:I,icon:en,routeName:"auditlogs_list"},{id:"open_billing_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_BILLING",section:I,icon:So,routeName:"billing_settings_index"},{id:"open_account_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_ACCOUNT",section:I,icon:en,routeName:"general_settings_index"},{id:"open_profile_settings",title:"COMMAND_BAR.COMMANDS.GO_TO_SETTINGS_PROFILE",section:I,icon:Eo,routeName:"profile_settings_index"}];function Do(n=q(!1)){const{t:e}=ie(),t=si(),{checkPermissions:i,checkInstallationType:o,isFeatureFlagEnabled:s}=an(),a=U("getCurrentAccountId"),r=h=>t.resolve({name:h.routeName,params:{accountId:a.value,...h.params}}),l=h=>{const{meta:u}=h;return!s(u==null?void 0:u.featureFlag)||!i(u==null?void 0:u.permissions)||!o(u==null?void 0:u.installationTypes)?!1:!n.value||Zn(h.name)};return{goToCommandHotKeys:A(()=>jo.flatMap(h=>{const u=r(h);return l(u)?{id:h.id,section:e(h.section),title:e(h.title),icon:h.icon,handler:()=>t.push(u)}:[]}))}}const Tn=z.SNOOZE_OPTIONS,Bo=[{id:"resolve_conversation",title:"COMMAND_BAR.COMMANDS.RESOLVE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:yn,handler:()=>H.emit(zn)}],bn=(n,e,t)=>Object.values(Tn).map(i=>({id:i,title:`COMMAND_BAR.COMMANDS.${i.toUpperCase()}`,parent:e,section:t,icon:Ze,handler:()=>H.emit(n,i)})),nn=[{id:"snooze_conversation",title:"COMMAND_BAR.COMMANDS.SNOOZE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:Ze,children:Object.values(Tn)},...bn(rn,"snooze_conversation","COMMAND_BAR.SECTIONS.SNOOZE_CONVERSATION")],Lo=[{id:"reopen_conversation",title:"COMMAND_BAR.COMMANDS.REOPEN_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:En,handler:()=>H.emit(Kn)}],Ho={id:"send_transcript",title:"COMMAND_BAR.COMMANDS.SEND_TRANSCRIPT",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:eo,handler:()=>H.emit(Gn)},Po={id:"unmute_conversation",title:"COMMAND_BAR.COMMANDS.UNMUTE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:Qi,handler:()=>H.emit(Vn)},Zo={id:"mute_conversation",title:"COMMAND_BAR.COMMANDS.MUTE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.CONVERSATION",icon:qi,handler:()=>H.emit(Un)},Vo=z.SNOOZE_OPTIONS,In=n=>()=>H.emit(n),Uo=[{id:"bulk_action_snooze_conversation",title:"COMMAND_BAR.COMMANDS.SNOOZE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.BULK_ACTIONS",icon:Ze,children:Object.values(Vo)},...bn(ln,"bulk_action_snooze_conversation","COMMAND_BAR.SECTIONS.BULK_ACTIONS")],Go=[{id:"bulk_action_reopen_conversation",title:"COMMAND_BAR.COMMANDS.REOPEN_CONVERSATION",section:"COMMAND_BAR.SECTIONS.BULK_ACTIONS",icon:En,handler:In(Fn)}],zo=[{id:"bulk_action_resolve_conversation",title:"COMMAND_BAR.COMMANDS.RESOLVE_CONVERSATION",section:"COMMAND_BAR.SECTIONS.BULK_ACTIONS",icon:yn,handler:In(Yn)}];function Ko(){const{t:n}=ie(),e=U("bulkActions/getSelectedConversationIds"),t=o=>o.map(s=>({...s,title:n(s.title),section:n(s.section)}));return{bulkActionsHotKeys:A(()=>{let o=[];return e.value.length>0&&(o=[...Uo,...Go,...zo]),t(o)})}}const ut=(n,e)=>n.map(t=>({...t,title:e(t.title),section:e(t.section)})),Fo=(n,e)=>[{label:n("CONVERSATION.PRIORITY.OPTIONS.NONE"),key:null,icon:ao},{label:n("CONVERSATION.PRIORITY.OPTIONS.URGENT"),key:"urgent",icon:no},{label:n("CONVERSATION.PRIORITY.OPTIONS.HIGH"),key:"high",icon:io},{label:n("CONVERSATION.PRIORITY.OPTIONS.MEDIUM"),key:"medium",icon:oo},{label:n("CONVERSATION.PRIORITY.OPTIONS.LOW"),key:"low",icon:so}].filter(t=>t.key!==e),Yo=(n,e)=>e===ri.REPLY?[{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.REPLY_SUGGESTION"),key:"reply_suggestion",icon:ve}]:[{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.SUMMARIZE"),key:"summarize",icon:ro}],Wo=n=>[{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.CONFIDENT"),key:"confident",icon:ve},{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.FIX_SPELLING_GRAMMAR"),key:"fix_spelling_grammar",icon:ho},{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.PROFESSIONAL"),key:"professional",icon:lo},{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.CASUAL"),key:"casual",icon:co},{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.MAKE_FRIENDLY"),key:"friendly",icon:ve},{label:n("INTEGRATION_SETTINGS.OPEN_AI.OPTIONS.STRAIGHTFORWARD"),key:"straightforward",icon:ve}];function Xo(){const{t:n}=ie(),e=Nt(),t=Mt(),{activeLabels:i,inactiveLabels:o,addLabelToConversation:s,removeLabelFromConversation:a}=Wn(),{captainTasksEnabled:r}=Xn(),{agentsList:l}=Jn(),c=U("getSelectedChat"),h=U("draftMessages/getReplyEditorMode"),u=U("getContextMenuChatId"),p=U("teams/getTeams"),v=U("draftMessages/get"),f=A(()=>{var d;return(d=c.value)==null?void 0:d.id}),m=A(()=>`draft-${f.value}-${h.value}`),R=A(()=>v.value(m.value)),Y=A(()=>{var d,_;return!!((_=(d=c.value)==null?void 0:d.meta)!=null&&_.team)}),Z=A(()=>Y.value?[{id:0,name:n("TEAMS_SETTINGS.LIST.NONE")},...p.value]:p.value),Me=d=>{e.dispatch("assignAgent",{conversationId:c.value.id,agentId:d.agentInfo.id})},V=d=>{e.dispatch("assignPriority",{conversationId:c.value.id,priority:d.priority.key})},B=d=>{e.dispatch("assignTeam",{conversationId:c.value.id,teamId:d.teamInfo.id})},Ve=A(()=>{var k,Te,Et;const d=((k=c.value)==null?void 0:k.status)===z.STATUS_TYPE.OPEN,_=((Te=c.value)==null?void 0:Te.status)===z.STATUS_TYPE.SNOOZED,O=((Et=c.value)==null?void 0:Et.status)===z.STATUS_TYPE.RESOLVED;let x=[];return d?x=[...Bo,...nn]:(O||_)&&(x=Lo),ut(x,n)}),Ue=A(()=>{var d;return Fo(n,(d=c.value)==null?void 0:d.priority)}),we=A(()=>{const d=l.value.map(_=>({id:`agent-${_.id}`,title:_.name,parent:"assign_an_agent",section:n("COMMAND_BAR.SECTIONS.CHANGE_ASSIGNEE"),agentInfo:_,icon:Kt,handler:Me}));return[{id:"assign_an_agent",title:n("COMMAND_BAR.COMMANDS.ASSIGN_AN_AGENT"),section:n("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:Kt,children:d.map(_=>_.id)},...d]}),Se=A(()=>{const d=Ue.value.map(_=>({id:`priority-${_.key}`,title:_.label,parent:"assign_priority",section:n("COMMAND_BAR.SECTIONS.CHANGE_PRIORITY"),priority:_,icon:_.icon,handler:V}));return[{id:"assign_priority",title:n("COMMAND_BAR.COMMANDS.ASSIGN_PRIORITY"),section:n("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:to,children:d.map(_=>_.id)},...d]}),Ge=A(()=>{const d=Z.value.map(_=>({id:`team-${_.id}`,title:_.name,parent:"assign_a_team",section:n("COMMAND_BAR.SECTIONS.CHANGE_TEAM"),teamInfo:_,icon:Yt,handler:B}));return[{id:"assign_a_team",title:n("COMMAND_BAR.COMMANDS.ASSIGN_A_TEAM"),section:n("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:Yt,children:d.map(_=>_.id)},...d]}),Ee=A(()=>[...o.value.map(_=>({id:_.title,title:`#${_.title}`,parent:"add_a_label_to_the_conversation",section:n("COMMAND_BAR.SECTIONS.ADD_LABEL"),icon:zt,handler:O=>s({title:O.id})})),{id:"add_a_label_to_the_conversation",title:n("COMMAND_BAR.COMMANDS.ADD_LABELS_TO_CONVERSATION"),section:n("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:zt,children:o.value.map(_=>_.title)}]),ze=A(()=>[...i.value.map(_=>({id:_.title,title:`#${_.title}`,parent:"remove_a_label_to_the_conversation",section:n("COMMAND_BAR.SECTIONS.REMOVE_LABEL"),icon:Ft,handler:O=>a(O.id)})),{id:"remove_a_label_to_the_conversation",title:n("COMMAND_BAR.COMMANDS.REMOVE_LABEL_FROM_CONVERSATION"),section:n("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:Ft,children:i.value.map(_=>_.title)}]),Ke=A(()=>i.value.length?[...Ee.value,...ze.value]:Ee.value),ye=A(()=>ut([c.value.muted?Po:Zo,Ho],n)),Fe=A(()=>{const _=(R.value?Wo(n):Yo(n,h.value)).map(O=>({id:`ai-assist-${O.key}`,title:O.label,parent:"ai_assist",section:n("COMMAND_BAR.SECTIONS.AI_ASSIST"),priority:O,icon:O.icon,handler:()=>H.emit(qn,O.key)}));return[{id:"ai_assist",title:n("COMMAND_BAR.COMMANDS.AI_ASSIST"),section:n("COMMAND_BAR.SECTIONS.AI_ASSIST"),icon:ve,children:_.map(O=>O.id)},..._]}),Ye=A(()=>pt(t.name)||Ct(t.name)),We=A(()=>pt(t.name,!0,!1)&&u.value),Xe=A(()=>{const d=[...Ve.value,...ye.value,...we.value,...Ge.value,...Ke.value,...Se.value];return r.value?[...d,...Fe.value]:d});return{conversationHotKeys:A(()=>We.value?ut(nn,n):Ye.value?Xe.value:[])}}function Jo(){const{t:n}=ie(),e=Nt(),t=Mt(),{orderedMacros:i}=Qn(),{execute:o,submitPendingAttributes:s,dismissPendingAttributes:a}=ei(),{isFeatureFlagEnabled:r}=an(),l=U("getSelectedChat"),c=q(null),h=A(()=>r(li.MACROS)&&(pt(t.name)||Ct(t.name)));return on(h,p=>{p&&!i.value.length&&e.dispatch("macros/get")},{immediate:!0}),{macroHotKeys:A(()=>{if(!h.value||!i.value.length)return[];const p=i.value.map(v=>({id:`macro-${v.id}`,title:v.name,parent:"execute_a_macro",section:n("COMMAND_BAR.SECTIONS.EXECUTE_MACRO"),icon:mt,handler:()=>{c.value=o(v,l.value.id)}}));return[{id:"execute_a_macro",title:n("COMMAND_BAR.COMMANDS.EXECUTE_A_MACRO"),section:n("COMMAND_BAR.SECTIONS.CONVERSATION"),icon:mt,children:p.map(v=>v.id)},...p]}),pendingAttributes:c,submitPendingAttributes:s,dismissPendingAttributes:a}}const qo=["placeholder"],Qo={slot:"footer",class:"flex items-center [border-top:var(--ninja-separate-border)] bg-[var(--ninja-footer-background)] px-4 py-2 text-[color:var(--ninja-secondary-text-color)]"},es={class:"me-[1em] flex items-center text-[0.75em]"},ts={class:"me-[1em] flex items-center text-[0.75em]"},ns={class:"me-[1em] flex items-center text-[0.75em]"},is={class:"flex items-center text-[0.75em]"},os="dynamic_snooze_",Bs={__name:"commandbar",props:{isPaywalled:{type:Boolean,default:!1}},setup(n){const e=n,t=Nt(),{t:i,tm:o}=ie(),{resolvedLocale:s}=ti(),a=q(null),r=q(null),l=q(null),{goToAppearanceHotKeys:c}=xo(),{inboxHotKeys:h}=ko(),{goToCommandHotKeys:u}=Do(Rn(e,"isPaywalled")),{bulkActionsHotKeys:p}=Ko(),{conversationHotKeys:v}=Xo(),{macroHotKeys:f,pendingAttributes:m,submitPendingAttributes:R,dismissPendingAttributes:Y}=Jo();on(m,g=>{var d;g&&((d=r.value)==null||d.open(g.missing,g.customAttributes))});const Z=["snooze_conversation","snooze_notification","bulk_action_snooze_conversation"],Me=z.SNOOZE_OPTIONS.UNTIL_CUSTOM_TIME,V=q([]),B=q(null),Ve=A(()=>Z.includes(B.value)?i("COMMAND_BAR.SNOOZE_PLACEHOLDER"):i("COMMAND_BAR.SEARCH_PLACEHOLDER")),Ue=new Set(Object.values(z.SNOOZE_OPTIONS)),we=A(()=>{if(e.isPaywalled)return[...c.value,...u.value];const g=[...V.value,...h.value,...u.value,...c.value,...p.value,...v.value,...f.value];return V.value.length?g.filter(d=>!Ue.has(d.id)||!Z.includes(d.parent)):g}),Se=()=>{a.value.data=we.value},Ge={snooze_conversation:rn,snooze_notification:sn,bulk_action_snooze_conversation:ln},Ee={snooze_conversation:"COMMAND_BAR.SECTIONS.SNOOZE_CONVERSATION",snooze_notification:"COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION",bulk_action_snooze_conversation:"COMMAND_BAR.SECTIONS.BULK_ACTIONS"},ze=A(()=>{const g=o("SNOOZE_PARSER");return!g||typeof g!="object"?{}:JSON.parse(JSON.stringify(g))}),Ke=(g,d)=>{const _=ii(g,new Date,{translations:ze.value,locale:s.value});if(!_.length)return[];const O=Ge[d],x=i(Ee[d]);return _.map((k,Te)=>({id:`${os}${Te}`,title:k.label!==k.formattedDate?`${k.label} - ${k.formattedDate}`:k.formattedDate,parent:d,section:x,icon:Ze,keywords:g,handler:()=>{H.emit(O,k.resolve()),yt(hi.NLP_SNOOZE_APPLIED,{label:k.label})}}))},ye=()=>{B.value=null,V.value=[]},Fe=g=>{if(!g||typeof g.open!="function"||typeof g.close!="function")return;const d=g.open.bind(g),_=g.close.bind(g);g.open=(...O)=>{const[x={}]=O;return B.value=x.parent||null,V.value=[],d(...O)},g.close=(...O)=>(ye(),_(...O))},Ye=g=>{const{detail:{action:{title:d=null,section:_=null,id:O=null,children:x=null}={}}={}}=g;l.value=O===Me?O:null,Array.isArray(x)&&x.length&&(B.value=O),yt(ci.COMMAND_BAR,{section:_,action:d}),Se()},We=g=>{const{detail:{search:d="",actions:_=[]}={}}=g,O=d.trim();if(_.length>0){const x=[...new Set(_.map(k=>k.parent).filter(Boolean))];x.length===1?B.value=x[0]:B.value=null}if(!O||!Z.includes(B.value||"")){V.value=[];return}V.value=Ke(O,B.value)},Xe=()=>{l.value!==Me&&t.dispatch("setContextMenuChatId",null),ye()};return xn(()=>{a.value&&(a.value.data=we.value)}),$n(()=>{Se(),Fe(a.value)}),(g,d)=>(kn(),jn(Ln,null,[j("ninja-keys",{ref_key:"ninjakeys",ref:a,noAutoLoadMdIcons:"",hideBreadcrumbs:"",placeholder:Ve.value,onChange:We,onSelected:Ye,onClosed:Xe},[j("div",Qo,[j("span",es,[d[0]||(d[0]=j("svg",{version:"1.0",class:"me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1280 1280"},[j("path",{d:"M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"})],-1)),be(" "+Ie(oe(i)("COMMAND_BAR.FOOTER.SELECT")),1)]),j("span",ts,[d[1]||(d[1]=Dn('<svg class="me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg><svg class="me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>',2)),be(" "+Ie(oe(i)("COMMAND_BAR.FOOTER.NAVIGATE")),1)]),j("span",ns,[d[2]||(d[2]=j("span",{class:"me-2 rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] px-[0.25em] py-[0.06em] text-[1.1em]"},"esc",-1)),be(" "+Ie(oe(i)("COMMAND_BAR.FOOTER.CLOSE")),1)]),j("span",is,[d[3]||(d[3]=j("svg",{class:"me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current opacity-70",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[j("path",{"fill-rule":"evenodd",d:"M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z","clip-rule":"evenodd"})],-1)),be(" "+Ie(oe(i)("COMMAND_BAR.FOOTER.MOVE_TO_PARENT")),1)])])],40,qo),Bn(ni,{ref_key:"resolveAttributesModalRef",ref:r,onSubmit:oe(R),onClose:oe(Y)},null,8,["onSubmit","onClose"])],64))}};export{Bs as default};
//# sourceMappingURL=commandbar-5OKO4d55.js.map
