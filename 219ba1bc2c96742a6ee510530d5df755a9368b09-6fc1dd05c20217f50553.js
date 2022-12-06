/*! For license information please see 219ba1bc2c96742a6ee510530d5df755a9368b09-6fc1dd05c20217f50553.js.LICENSE.txt */
(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[669],{3924:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(257);function o(){return(0,r.useState)(null)}},9424:function(t,e,n){"use strict";var r=n(257);e.Z=function(t){var e=(0,r.useRef)(t);return(0,r.useEffect)((function(){e.current=t}),[t]),e}},5655:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(257),o=n(9424);function i(t){var e=(0,o.Z)(t);return(0,r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},1822:function(t,e,n){"use strict";var r=n(257),o=function(t){return t&&"function"!=typeof t?function(e){t.current=e}:t};e.Z=function(t,e){return(0,r.useMemo)((function(){return function(t,e){var n=o(t),r=o(e);return function(t){n&&n(t),r&&r(t)}}(t,e)}),[t,e])}},6400:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(257);function o(){var t=(0,r.useRef)(!0),e=(0,r.useRef)((function(){return t.current}));return(0,r.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e.current}},9223:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(257);function o(t){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){e.current=t})),e.current}},9129:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(257);function o(t){var e,n,o=(e=t,(n=(0,r.useRef)(e)).current=e,n);(0,r.useEffect)((function(){return function(){return o.current()}}),[])}},1118:function(t,e,n){"use strict";n.d(e,{FT:function(){return s}});var r=n(257),o=n(1312);const i=["as","disabled"];function s(t){let{tagName:e,disabled:n,href:r,target:o,rel:i,role:s,onClick:a,tabIndex:u=0,type:c}=t;e||(e=null!=r||null!=o||null!=i?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:n},l];const f=t=>{(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==a||a(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===e?o:void 0,"aria-disabled":n||void 0,rel:"a"===e?i:void 0,onClick:f,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),f(t))}},l]}const a=r.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,a=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,i);const[u,{tagName:c}]=s(Object.assign({tagName:n,disabled:r},a));return(0,o.tZ)(c,Object.assign({},a,u,{ref:e}))}));a.displayName="Button",e.ZP=a},3590:function(t,e,n){"use strict";n.d(e,{$F:function(){return o},PB:function(){return r}});function r(t){return`data-rr-ui-${t}`}function o(t){return`rrUi${t}`}},2178:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(7216);function o(t){void 0===t&&(t=(0,r.Z)());try{var e=t.activeElement;return e&&e.nodeName?e:null}catch(n){return t.body}}var i=n(424),s=n(3004),a=n(2950),u=n(257),c=n(6400),l=n(9129),f=n(9223),d=n(5655),p=n(7255),h=n(6536);const v=(t,e)=>{var n;return s.Z?null==t?(e||(0,r.Z)()).body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),null!=(n=t)&&n.nodeType&&t||null):null};var m=n(1312);const g=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let E;function b(t){const e=(0,h.Z)(),n=t||function(t){return E||(E=new p.Z({ownerDocument:null==t?void 0:t.document})),E}(e),r=(0,u.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,u.useCallback)((t=>{r.current.dialog=t}),[]),setBackdropRef:(0,u.useCallback)((t=>{r.current.backdrop=t}),[])})}const x=(0,u.forwardRef)(((t,e)=>{let{show:n=!1,role:r="dialog",className:p,style:E,children:x,backdrop:y=!0,keyboard:Z=!0,onBackdropClick:C,onEscapeKeyDown:w,transition:k,backdropTransition:O,autoFocus:N=!0,enforceFocus:S=!0,restoreFocus:R=!0,restoreFocusOptions:T,renderDialog:L,renderBackdrop:P=(t=>(0,m.tZ)("div",Object.assign({},t))),manager:D,container:j,onShow:M,onHide:A=(()=>{}),onExit:B,onExited:I,onExiting:_,onEnter:F,onEntering:$,onEntered:W}=t,H=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,g);const U=function(t,e){const n=(0,h.Z)(),[r,o]=(0,u.useState)((()=>v(t,null==n?void 0:n.document)));if(!r){const e=v(t);e&&o(e)}return(0,u.useEffect)((()=>{e&&r&&e(r)}),[e,r]),(0,u.useEffect)((()=>{const e=v(t);e!==r&&o(e)}),[t,r]),r}(j),z=b(D),V=(0,c.Z)(),X=(0,f.Z)(n),[Y,G]=(0,u.useState)(!n),K=(0,u.useRef)(null);(0,u.useImperativeHandle)(e,(()=>z),[z]),s.Z&&!X&&n&&(K.current=o()),k||n||Y?n&&Y&&G(!1):G(!0);const J=(0,d.Z)((()=>{if(z.add(),rt.current=(0,a.Z)(document,"keydown",et),nt.current=(0,a.Z)(document,"focus",(()=>setTimeout(Q)),!0),M&&M(),N){const t=o(document);z.dialog&&t&&!(0,i.Z)(z.dialog,t)&&(K.current=t,z.dialog.focus())}})),q=(0,d.Z)((()=>{var t;(z.remove(),null==rt.current||rt.current(),null==nt.current||nt.current(),R)&&(null==(t=K.current)||null==t.focus||t.focus(T),K.current=null)}));(0,u.useEffect)((()=>{n&&U&&J()}),[n,U,J]),(0,u.useEffect)((()=>{Y&&q()}),[Y,q]),(0,l.Z)((()=>{q()}));const Q=(0,d.Z)((()=>{if(!S||!V()||!z.isTopModal())return;const t=o();z.dialog&&t&&!(0,i.Z)(z.dialog,t)&&z.dialog.focus()})),tt=(0,d.Z)((t=>{t.target===t.currentTarget&&(null==C||C(t),!0===y&&A())})),et=(0,d.Z)((t=>{Z&&27===t.keyCode&&z.isTopModal()&&(null==w||w(t),t.defaultPrevented||A())})),nt=(0,u.useRef)(),rt=(0,u.useRef)(),ot=function(){G(!0),null==I||I(...arguments)},it=k;if(!U||!(n||it&&!Y))return null;const st=Object.assign({role:r,ref:z.setDialogRef,"aria-modal":"dialog"===r||void 0},H,{style:E,className:p,tabIndex:-1});let at=L?L(st):(0,m.tZ)("div",Object.assign({},st,{children:u.cloneElement(x,{role:"document"})}));it&&(at=(0,m.tZ)(it,{appear:!0,unmountOnExit:!0,in:!!n,onExit:B,onExiting:_,onExited:ot,onEnter:F,onEntering:$,onEntered:W,children:at}));let ut=null;if(y){const t=O;ut=P({ref:z.setBackdropRef,onClick:tt}),t&&(ut=(0,m.tZ)(t,{appear:!0,in:!!n,children:ut}))}return(0,m.tZ)(m.HY,{children:u.default.createPortal((0,m.BX)(m.HY,{children:[ut,at]}),U)})}));x.displayName="Modal";var y=Object.assign(x,{Manager:p.Z})},7255:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(3164);const o=(0,n(3590).PB)("modal-open");var i=class{constructor(){let{ownerDocument:t,handleContainerOverflow:e=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=e,this.isRTL=n,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const e={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();t.style={overflow:i.style.overflow,[n]:i.style[n]},t.scrollBarWidth&&(e[n]=`${parseInt((0,r.Z)(i,n)||"0",10)+t.scrollBarWidth}px`),i.setAttribute(o,""),(0,r.Z)(i,e)}reset(){[...this.modals].forEach((t=>this.remove(t)))}removeContainerStyle(t){const e=this.getElement();e.removeAttribute(o),Object.assign(e.style,t.style)}add(t){let e=this.modals.indexOf(t);return-1!==e?e:(e=this.modals.length,this.modals.push(t),this.setModalAttributes(t),0!==e||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),e)}remove(t){const e=this.modals.indexOf(t);-1!==e&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}},6536:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(257),o=n(3004);const i=(0,r.createContext)(o.Z?window:void 0);i.Provider;function s(){return(0,r.useContext)(i)}},5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&t.push(s)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&t.push(a);else t.push(n.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},1929:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(257),o=n(5655),i=n(5697),s=n.n(i),a=n(5900),u=n.n(a),c=n(1312);const l={"aria-label":s().string,onClick:s().func,variant:s().oneOf(["white"])},f=r.forwardRef(((t,e)=>{let{className:n,variant:r,...o}=t;return(0,c.tZ)("button",{ref:e,type:"button",className:u()("btn-close",r&&`btn-close-${r}`,n),...o})}));f.displayName="CloseButton",f.propTypes=l,f.defaultProps={"aria-label":"Close"};var d=f,p=n(123);const h=r.forwardRef(((t,e)=>{let{closeLabel:n,closeVariant:i,closeButton:s,onHide:a,children:u,...l}=t;const f=(0,r.useContext)(p.Z),h=(0,o.Z)((()=>{null==f||f.onHide(),null==a||a()}));return(0,c.BX)("div",{ref:e,...l,children:[u,s&&(0,c.tZ)(d,{"aria-label":n,variant:i,onClick:h})]})}));h.defaultProps={closeLabel:"Close",closeButton:!1};var v=h},7640:function(t,e,n){"use strict";n.d(e,{Z:function(){return p},t:function(){return d}});var r=n(3164),o=n(930);function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n(7255);const a=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",u=".sticky-top",c=".navbar-toggler";class l extends s.Z{adjustAndStore(t,e,n){const o=e.style[t];e.dataset[t]=o,(0,r.Z)(e,{[t]:`${parseFloat((0,r.Z)(e,t))+n}px`})}restore(t,e){const n=e.dataset[t];void 0!==n&&(delete e.dataset[t],(0,r.Z)(e,{[t]:n}))}setContainerStyle(t){super.setContainerStyle(t);const e=this.getElement();var n,r;if(r="modal-open",(n=e).classList?n.classList.add(r):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)),!t.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,o.Z)(e,a).forEach((e=>this.adjustAndStore(i,e,t.scrollBarWidth))),(0,o.Z)(e,u).forEach((e=>this.adjustAndStore(s,e,-t.scrollBarWidth))),(0,o.Z)(e,c).forEach((e=>this.adjustAndStore(s,e,t.scrollBarWidth)))}removeContainerStyle(t){super.removeContainerStyle(t);const e=this.getElement();var n,r;r="modal-open",(n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=i(n.className,r):n.setAttribute("class",i(n.className&&n.className.baseVal||"",r));const s=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";(0,o.Z)(e,a).forEach((t=>this.restore(s,t))),(0,o.Z)(e,u).forEach((t=>this.restore(l,t))),(0,o.Z)(e,c).forEach((t=>this.restore(l,t)))}}let f;function d(t){return f||(f=new l(t)),f}var p=l},6594:function(t,e,n){"use strict";var r=n(5900),o=n.n(r),i=n(257),s=n(1118),a=n(9541),u=n(1312);const c=i.forwardRef(((t,e)=>{let{as:n,bsPrefix:r,variant:i,size:c,active:l,className:f,...d}=t;const p=(0,a.vE)(r,"btn"),[h,{tagName:v}]=(0,s.FT)({tagName:n,...d}),m=v;return(0,u.tZ)(m,{...h,...d,ref:e,className:o()(f,p,l&&"active",i&&`${p}-${i}`,c&&`${p}-${c}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=c},563:function(t,e,n){"use strict";var r=n(5900),o=n.n(r),i=n(257),s=n(317),a=n(949),u=n(9059),c=n(558),l=n(1312);const f={[s.d0]:"show",[s.cn]:"show"},d=i.forwardRef(((t,e)=>{let{className:n,children:r,transitionClasses:s={},...d}=t;const p=(0,i.useCallback)(((t,e)=>{(0,u.Z)(t),null==d.onEnter||d.onEnter(t,e)}),[d]);return(0,l.tZ)(c.Z,{ref:e,addEndListener:a.Z,...d,onEnter:p,childRef:r.ref,children:(t,e)=>i.cloneElement(r,{...e,className:o()("fade",n,r.props.className,f[t],s[t])})})}));d.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},d.displayName="Fade",e.Z=d},7427:function(t,e,n){"use strict";const r=n(257).createContext(null);r.displayName="InputGroupContext",e.Z=r},123:function(t,e,n){"use strict";const r=n(257).createContext({onHide(){}});e.Z=r},9541:function(t,e,n){"use strict";n.d(e,{SC:function(){return d},pi:function(){return l},vE:function(){return c},zG:function(){return f}});var r=n(257);n(1312);const o=["xxl","xl","lg","md","sm","xs"],i="xs",s=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:i}),{Consumer:a,Provider:u}=s;function c(t,e){const{prefixes:n}=(0,r.useContext)(s);return t||n[e]||e}function l(){const{breakpoints:t}=(0,r.useContext)(s);return t}function f(){const{minBreakpoint:t}=(0,r.useContext)(s);return t}function d(){const{dir:t}=(0,r.useContext)(s);return"rtl"===t}},558:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(257),o=n(317),i=n(1822);var s=n(1312);var a=r.default.forwardRef(((t,e)=>{let{onEnter:n,onEntering:a,onEntered:u,onExit:c,onExiting:l,onExited:f,addEndListener:d,children:p,childRef:h,...v}=t;const m=(0,r.useRef)(null),g=(0,i.Z)(m,h),E=t=>{var e;g((e=t)&&"setState"in e?r.default.findDOMNode(e):null!=e?e:null)},b=t=>e=>{t&&m.current&&t(m.current,e)},x=(0,r.useCallback)(b(n),[n]),y=(0,r.useCallback)(b(a),[a]),Z=(0,r.useCallback)(b(u),[u]),C=(0,r.useCallback)(b(c),[c]),w=(0,r.useCallback)(b(l),[l]),k=(0,r.useCallback)(b(f),[f]),O=(0,r.useCallback)(b(d),[d]);return(0,s.tZ)(o.ZP,{ref:e,...v,onEnter:x,onEntered:Z,onEntering:y,onExit:C,onExited:k,onExiting:w,addEndListener:O,nodeRef:m,children:"function"==typeof p?(t,e)=>p(t,{...e,ref:E}):r.default.cloneElement(p,{ref:E})})}))},8870:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5900),o=n.n(r),i=/-(.)/g;var s=n(257),a=n(9541),u=n(1312);const c=t=>{return t[0].toUpperCase()+(e=t,e.replace(i,(function(t,e){return e.toUpperCase()}))).slice(1);var e};function l(t){let{displayName:e=c(t),Component:n,defaultProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=s.forwardRef(((e,r)=>{let{className:i,bsPrefix:s,as:c=n||"div",...l}=e;const f=(0,a.vE)(s,t);return(0,u.tZ)(c,{ref:r,className:o()(i,f),...l})}));return i.defaultProps=r,i.displayName=e,i}},6132:function(t,e,n){"use strict";var r=n(257),o=n(5900),i=n.n(o),s=n(1312);e.Z=t=>r.forwardRef(((e,n)=>(0,s.tZ)("div",{...e,ref:n,className:i()(e.className,t)})))},949:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(3164),o=n(6914);function i(t,e){const n=(0,r.Z)(t,e)||"",o=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*o}function s(t,e){const n=i(t,"transitionDuration"),r=i(t,"transitionDelay"),s=(0,o.Z)(t,(n=>{n.target===t&&(s(),e(n))}),n+r)}},9059:function(t,e,n){"use strict";function r(t){t.offsetHeight}n.d(e,{Z:function(){return r}})},5019:function(t,e,n){"use strict";n.d(e,{$:function(){return E}});var r=n(7424),o=n.n(r),i=n(8416),s=n.n(i),a=n(257),u=n(50);function c(){if(console&&console.warn){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(t=console).warn.apply(t,n)}}var l={};function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];"string"==typeof e[0]&&l[e[0]]||("string"==typeof e[0]&&(l[e[0]]=new Date),c.apply(void 0,e))}function d(t,e,n){t.loadNamespaces(e,(function(){if(t.isInitialized)n();else{t.on("initialized",(function e(){setTimeout((function(){t.off("initialized",e)}),0),n()}))}}))}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.languages[0],o=!!e.options&&e.options.fallbackLng,i=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(t,n){var r=e.services.backendConnector.state["".concat(t,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!s(e.isLanguageChangingTo,t))&&(!!e.hasResourceBundle(r,t)||(!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!s(r,t)||o&&!s(i,t))))}function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return f("i18n.languages were undefined or empty",e.languages),!0;var r=void 0!==e.options.ignoreJSONStructure;return r?e.hasLoadedNamespace(t,{precheck:function(e,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,t))return!1}}):p(t,e,n)}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=function(t,e){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=e?n.current:t}),[t,e]),n.current};function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.i18n,r=(0,a.useContext)(u.OO)||{},i=r.i18n,s=r.defaultNS,c=n||i||(0,u.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.zv),!c){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(t){return Array.isArray(t)?t[t.length-1]:t},p=[l,{},!1];return p.t=l,p.i18n={},p.ready=!1,p}c.options.react&&void 0!==c.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=m(m(m({},(0,u.JP)()),c.options.react),e),E=v.useSuspense,b=v.keyPrefix,x=t||s||c.options&&c.options.defaultNS;x="string"==typeof x?[x]:x||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(x);var y=(c.isInitialized||c.initializedStoreOnce)&&x.every((function(t){return h(t,c,v)}));function Z(){return c.getFixedT(null,"fallback"===v.nsMode?x:x[0],b)}var C=(0,a.useState)(Z),w=o()(C,2),k=w[0],O=w[1],N=x.join(),S=g(N),R=(0,a.useRef)(!0);(0,a.useEffect)((function(){var t=v.bindI18n,e=v.bindI18nStore;function n(){R.current&&O(Z)}return R.current=!0,y||E||d(c,x,(function(){R.current&&O(Z)})),y&&S&&S!==N&&R.current&&O(Z),t&&c&&c.on(t,n),e&&c&&c.store.on(e,n),function(){R.current=!1,t&&c&&t.split(" ").forEach((function(t){return c.off(t,n)})),e&&c&&e.split(" ").forEach((function(t){return c.store.off(t,n)}))}}),[c,N]);var T=(0,a.useRef)(!0);(0,a.useEffect)((function(){R.current&&!T.current&&O(Z),T.current=!1}),[c,b]);var L=[k,c,y];if(L.t=k,L.i18n=c,L.ready=y,y)return L;if(!y&&!E)return L;throw new Promise((function(t){d(c,x,(function(){t()}))}))}},317:function(t,e,n){"use strict";n.d(e,{cn:function(){return f},d0:function(){return l},Wj:function(){return c},Ix:function(){return d},ZP:function(){return v}});var r=n(3366),o=n(4578),i=n(257),s=!1,a=i.default.createContext(null),u="unmounted",c="exited",l="entering",f="entered",d="exiting",p=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=c,r.appearStatus=l):o=f:o=e.unmountOnExit||e.mountOnEnter?u:c,r.state={status:o},r.nextCallback=null,r}(0,o.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:c}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==l&&n!==f&&(e=l):n!==l&&n!==f||(e=d)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===l){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:i.default.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:u})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[i.default.findDOMNode(this),r],a=o[0],u=o[1],c=this.getTimeouts(),d=r?c.appear:c.enter;!t&&!n||s?this.safeSetState({status:f},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,u),this.safeSetState({status:l},(function(){e.props.onEntering(a,u),e.onTransitionEnd(d,(function(){e.safeSetState({status:f},(function(){e.props.onEntered(a,u)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:i.default.findDOMNode(this);e&&!s?(this.props.onExit(r),this.safeSetState({status:d},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:i.default.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=o[0],a=o[1];this.props.addEndListener(s,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.default.createElement(a.Provider,{value:null},"function"==typeof n?n(t,o):i.default.cloneElement(i.default.Children.only(n),o))},e}(i.default.Component);function h(){}p.contextType=a,p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},p.UNMOUNTED=u,p.EXITED=c,p.ENTERING=l,p.ENTERED=f,p.EXITING=d;var v=p},9351:function(t,e,n){"use strict";var r=n(3004),o=!1,i=!1;try{var s={get passive(){return o=!0},get once(){return i=o=!0}};r.Z&&(window.addEventListener("test",s,s),window.removeEventListener("test",s,!0))}catch(a){}e.ZP=function(t,e,n,r){if(r&&"boolean"!=typeof r&&!i){var s=r.once,a=r.capture,u=n;!i&&s&&(u=n.__once||function t(r){this.removeEventListener(e,t,a),n.call(this,r)},n.__once=u),t.addEventListener(e,u,o?r:a)}t.addEventListener(e,n,r)}},3004:function(t,e){"use strict";e.Z=!("undefined"==typeof window||!window.document||!window.document.createElement)},424:function(t,e,n){"use strict";function r(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}n.d(e,{Z:function(){return r}})},3164:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7216);function o(t,e){return function(t){var e=(0,r.Z)(t);return e&&e.defaultView||window}(t).getComputedStyle(t,e)}var i=/([A-Z])/g;var s=/^ms-/;function a(t){return function(t){return t.replace(i,"-$1").toLowerCase()}(t).replace(s,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var c=function(t,e){var n="",r="";if("string"==typeof e)return t.style.getPropertyValue(a(e))||o(t).getPropertyValue(a(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?!function(t){return!(!t||!u.test(t))}(o)?n+=a(o)+": "+i+";":r+=o+"("+i+") ":t.style.removeProperty(a(o))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}},2950:function(t,e,n){"use strict";var r=n(9351),o=n(99);e.Z=function(t,e,n,i){return(0,r.ZP)(t,e,n,i),function(){(0,o.Z)(t,e,n,i)}}},7216:function(t,e,n){"use strict";function r(t){return t&&t.ownerDocument||document}n.d(e,{Z:function(){return r}})},930:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,e){return r(t.querySelectorAll(e))}},99:function(t,e){"use strict";e.Z=function(t,e,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)}},6914:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(3164),o=n(2950);function i(t,e,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,n,r),t.dispatchEvent(o)}}(t,"transitionend",!0)}),e+n),s=(0,o.Z)(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),s()}}function s(t,e,n,s){var a,u,c;null==n&&(a=t,u=(0,r.Z)(a,"transitionDuration")||"",c=-1===u.indexOf("ms")?1e3:1,n=parseFloat(u)*c||0);var l=i(t,n,s),f=(0,o.Z)(t,"transitionend",e);return function(){l(),f()}}},9874:function(t,e,n){"use strict";var r=n(257);e.Z=t=>{let{children:e}=t;return"undefined"==typeof window?r.createElement(r.Fragment,null,e):r.createElement(r.Suspense,{fallback:r.createElement("div",null,"loading...")},e)}},2473:function(t){"use strict";var e=function(){};t.exports=e},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},5372:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},8872:function(t){t.exports=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(u){a=!0,o=u}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}},t.exports.__esModule=!0,t.exports.default=t.exports},2218:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7424:function(t,e,n){var r=n(5372),o=n(8872),i=n(6116),s=n(2218);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,n){var r=n(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},3366:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=219ba1bc2c96742a6ee510530d5df755a9368b09-6fc1dd05c20217f50553.js.map