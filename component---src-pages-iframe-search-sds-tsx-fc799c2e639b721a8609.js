"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[467,408,427,921],{4653:function(e,t,a){var n=a(5900),r=a.n(n),s=a(257),l=a(5697),o=a.n(l),c=a(1312);const i={type:o().string,tooltip:o().bool,as:o().elementType},d=s.forwardRef(((e,t)=>{let{as:a="div",className:n,type:s="valid",tooltip:l=!1,...o}=e;return(0,c.tZ)(a,{...o,ref:t,className:r()(n,`${s}-${l?"tooltip":"feedback"}`)})}));d.displayName="Feedback",d.propTypes=i,t.Z=d},4709:function(e,t,a){var n=a(5900),r=a.n(n),s=a(257),l=a(8788),o=a(9541),c=a(1312);const i=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:i,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:h="input",...p}=e;const{controlId:f}=(0,s.useContext)(l.Z);return n=(0,o.vE)(n,"form-check-input"),(0,c.tZ)(h,{...p,ref:t,type:d,id:a||f,className:r()(i,n,u&&"is-valid",m&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),r=a.n(n),s=a(257),l=(a(2473),a(4653)),o=a(8788),c=a(9541),i=a(1312);const d=s.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:l,htmlSize:d,id:u,className:m,isValid:h=!1,isInvalid:p=!1,plaintext:f,readOnly:v,as:b="input",...g}=e;const{controlId:E}=(0,s.useContext)(o.Z);let y;return a=(0,c.vE)(a,"form-control"),y=f?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${l}`]:l},(0,i.tZ)(b,{...g,type:n,size:d,ref:t,readOnly:v,id:u||E,className:r()(m,y,h&&"is-valid",p&&"is-invalid","color"===n&&`${a}-color`)})}));d.displayName="FormControl",t.Z=Object.assign(d,{Feedback:l.Z})},8203:function(e,t,a){a.d(t,{Z:function(){return H}});var n,r=a(5900),s=a.n(r),l=a(9351),o=a(3004),c=a(7216),i=a(99);function d(e){if((!n&&0!==n||e)&&o.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}var u=a(3924),m=a(5655),h=a(1822),p=a(9129),f=a(6914),v=a(257),b=a(2178),g=a(7640),E=a(563),y=a(8870),Z=(0,y.Z)("modal-body"),N=a(123),w=a(9541),S=a(1312);const x=v.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,contentClassName:r,centered:l,size:o,fullscreen:c,children:i,scrollable:d,...u}=e;a=(0,w.vE)(a,"modal");const m=`${a}-dialog`,h="string"==typeof c?`${a}-fullscreen-${c}`:`${a}-fullscreen`;return(0,S.tZ)("div",{...u,ref:t,className:s()(m,n,o&&`${a}-${o}`,l&&`${m}-centered`,d&&`${m}-scrollable`,c&&h),children:(0,S.tZ)("div",{className:s()(`${a}-content`,r),children:i})})}));x.displayName="ModalDialog";var k=x,C=(0,y.Z)("modal-footer"),_=a(1929);const T=v.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,...r}=e;return a=(0,w.vE)(a,"modal-header"),(0,S.tZ)(_.Z,{ref:t,...r,className:s()(n,a)})}));T.displayName="ModalHeader",T.defaultProps={closeLabel:"Close",closeButton:!1};var $=T;const F=(0,a(6132).Z)("h4");var R=(0,y.Z)("modal-title",{Component:F});const P={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:k};function I(e){return(0,S.tZ)(E.Z,{...e,timeout:null})}function O(e){return(0,S.tZ)(E.Z,{...e,timeout:null})}const M=v.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,style:r,dialogClassName:E,contentClassName:y,children:Z,dialogAs:x,"aria-labelledby":k,"aria-describedby":C,"aria-label":_,show:T,animation:$,backdrop:F,keyboard:R,onEscapeKeyDown:P,onShow:M,onHide:H,container:z,autoFocus:D,enforceFocus:A,restoreFocus:B,restoreFocusOptions:L,onEntered:V,onExit:U,onExiting:W,onEnter:j,onEntering:J,onExited:q,backdropClassName:K,manager:X,...G}=e;const[Y,Q]=(0,v.useState)({}),[ee,te]=(0,v.useState)(!1),ae=(0,v.useRef)(!1),ne=(0,v.useRef)(!1),re=(0,v.useRef)(null),[se,le]=(0,u.Z)(),oe=(0,h.Z)(t,le),ce=(0,m.Z)(H),ie=(0,w.SC)();a=(0,w.vE)(a,"modal");const de=(0,v.useMemo)((()=>({onHide:ce})),[ce]);function ue(){return X||(0,g.t)({isRTL:ie})}function me(e){if(!o.Z)return;const t=ue().getScrollbarWidth()>0,a=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;Q({paddingRight:t&&!a?d():void 0,paddingLeft:!t&&a?d():void 0})}const he=(0,m.Z)((()=>{se&&me(se.dialog)}));(0,p.Z)((()=>{(0,i.Z)(window,"resize",he),null==re.current||re.current()}));const pe=()=>{ae.current=!0},fe=e=>{ae.current&&se&&e.target===se.dialog&&(ne.current=!0),ae.current=!1},ve=()=>{te(!0),re.current=(0,f.Z)(se.dialog,(()=>{te(!1)}))},be=e=>{"static"!==F?ne.current||e.target!==e.currentTarget?ne.current=!1:null==H||H():(e=>{e.target===e.currentTarget&&ve()})(e)},ge=(0,v.useCallback)((e=>(0,S.tZ)("div",{...e,className:s()(`${a}-backdrop`,K,!$&&"show")})),[$,K,a]),Ee={...r,...Y};Ee.display="block";return(0,S.tZ)(N.Z.Provider,{value:de,children:(0,S.tZ)(b.Z,{show:T,ref:oe,backdrop:F,container:z,keyboard:!0,autoFocus:D,enforceFocus:A,restoreFocus:B,restoreFocusOptions:L,onEscapeKeyDown:e=>{R?null==P||P(e):(e.preventDefault(),"static"===F&&ve())},onShow:M,onHide:H,onEnter:(e,t)=>{e&&me(e),null==j||j(e,t)},onEntering:(e,t)=>{null==J||J(e,t),(0,l.ZP)(window,"resize",he)},onEntered:V,onExit:e=>{null==re.current||re.current(),null==U||U(e)},onExiting:W,onExited:e=>{e&&(e.style.display=""),null==q||q(e),(0,i.Z)(window,"resize",he)},manager:ue(),transition:$?I:void 0,backdropTransition:$?O:void 0,renderBackdrop:ge,renderDialog:e=>(0,S.tZ)("div",{role:"dialog",...e,style:Ee,className:s()(n,a,ee&&`${a}-static`,!$&&"show"),onClick:F?be:void 0,onMouseUp:fe,"aria-label":_,"aria-labelledby":k,"aria-describedby":C,children:(0,S.tZ)(x,{...G,onMouseDown:pe,className:E,contentClassName:y,children:Z})})})})}));M.displayName="Modal",M.defaultProps=P;var H=Object.assign(M,{Body:Z,Header:$,Title:R,Footer:C,Dialog:k,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},8427:function(e,t,a){a.r(t);var n=a(257),r=a(8203),s=a(6594),l=a(5019);t.default=e=>{let{title:t="",content:a,onConfirm:o,onCancel:c,cancelButtonTitle:i=""}=e;const{t:d}=(0,l.$)();return n.createElement(r.Z,{dialogClassName:"alert-modal",show:!0,centered:!0,onHide:c},n.createElement("div",{className:"alert-modal-container"},t&&n.createElement("div",{className:"alert-modal-title"}," ",t," "),a&&n.createElement("div",{className:"alert-modal-content"}," ",a," "),null!=o?n.createElement("div",{style:{display:"flex",gap:10}},n.createElement(s.Z,{className:"alert-modal-back-button",onClick:c}," ",d("Back")," "),n.createElement(s.Z,{className:"alert-modal-confirm-button",onClick:o}," ",d("Yes")," ")):n.createElement(s.Z,{className:"alert-modal-back-button",onClick:c}," ",i||d("Back")," ")))}},756:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(257),r=a(5900),s=a.n(r),l=a(8870),o=a(9541),c=a(4709),i=a(7427),d=a(1312);const u=(0,l.Z)("input-group-text",{Component:"span"}),m=n.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,hasValidation:l,className:c,as:u="div",...m}=e;a=(0,o.vE)(a,"input-group");const h=(0,n.useMemo)((()=>({})),[]);return(0,d.tZ)(i.Z.Provider,{value:h,children:(0,d.tZ)(u,{ref:t,...m,className:s()(c,a,r&&`${a}-${r}`,l&&"has-validation")})})}));m.displayName="InputGroup";var h=Object.assign(m,{Text:u,Radio:e=>(0,d.tZ)(u,{children:(0,d.tZ)(c.Z,{type:"radio",...e})}),Checkbox:e=>(0,d.tZ)(u,{children:(0,d.tZ)(c.Z,{type:"checkbox",...e})})}),p=a(1760),f=a(6594),v=a(5019),b=a(9874);const g=(0,n.lazy)((()=>a.e(427).then(a.bind(a,8427)))),E=(0,n.lazy)((()=>a.e(687).then(a.bind(a,6687))));var y=function(e){let{onSearch:t,captcha:a=!1,valueInit:r="",countryFilter:s}=e;const{0:l,1:o}=(0,n.useState)(r),{0:c,1:i}=(0,n.useState)(""),{0:d,1:u}=(0,n.useState)(!1),{0:m,1:y}=(0,n.useState)(null),[Z,N]=n.useState(!1),[w,S]=n.useState(1),{t:x}=(0,v.$)(),k=()=>{l.length<3?y(n.createElement(b.Z,null,n.createElement(g,{title:"Error",content:"You must enter at least 3 characters when searching...",onCancel:()=>y(null)}))):(N(!1),S(1),t(l))},C=()=>n.createElement(f.Z,{type:"submit",className:"search-bar-btn"},n.createElement("img",{src:"/icons/Search.png",alt:"Search Icon",className:"search-icon"}),n.createElement("div",{className:"search-text"}," ",x("searchbar.searchButton")," "));return n.createElement(n.Fragment,null,d&&n.createElement(b.Z,null,n.createElement(g,{title:x("captcha.errorMessageTitle"),content:x("captcha.errorMessageContent"),onCancel:()=>{u(!1)}})),n.createElement("div",{className:"search-container"},n.createElement("form",{className:"search-form",onSubmit:e=>{e.preventDefault(),5==w&&console.log("Error 5 times"),a?Z?S((e=>e+1)):N(!0):k()}},n.createElement(h,{className:"search-input-group"},n.createElement(p.Z,{placeholder:x("searchbar.searchPlaceHolder"),className:"place-holder",value:l,onChange:e=>{o(e.target.value)}}),a&&n.createElement(b.Z,null,n.createElement("div",{className:"captcha-box-container"},n.createElement(E,{value:c,setValue:e=>{i(e)},onValidateCaptcha:Z,count:w,onValidateSuccess:k,onValidateFail:()=>{u(!0)}}))),s?n.createElement("div",{className:"search-button-group"},C(),s):C()))),m)}},9253:function(e,t,a){var n=a(257),r=a(5019),s=a(9874);const l=(0,n.lazy)((()=>a.e(114).then(a.bind(a,3114)))),o=(0,n.lazy)((()=>Promise.all([a.e(351),a.e(727),a.e(12),a.e(286),a.e(107)]).then(a.bind(a,3107))));t.Z=e=>{let{title:t,searchBar:a,searchFooter:c=!0,showTable:i=!1,loading:d=!1,notFound:u=!1,keyword:m="",response:h=null,pdfModal:p=!1,source:f=""}=e;const{t:v}=(0,r.$)();return n.createElement(s.Z,null,n.createElement("div",null,n.createElement("div",{className:"search-box-container"},n.createElement("div",{className:"search-box-header"},n.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),n.createElement("div",{className:"search-box-bar-container"},n.createElement("div",{className:"search-box-bar"},a)),i?!u&&n.createElement("div",{className:"search-box-result-count"}," ",h?h.total:0," ",v("search.result")," "):null),i?m&&n.createElement("div",{className:"search-box-result-table"},d?n.createElement(l,{animation:"border"}):u?n.createElement("div",{className:"not-found-text"},v("search.notFound")):n.createElement(o,{pdfModal:p,response:h,source:f})):null),c?n.createElement("div",{className:"search-box-link"},v("search.PoweredBy"),n.createElement("a",{target:"_blank",href:"https://sdsmanager.com/",title:"SDS manager"},"sdsmanager.com")):null))}},4329:function(e,t,a){function n(e,t,a,n,r){return new Promise(((s,l)=>{const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(4===o.readyState){let t;switch(o.status){case 200:try{t=JSON.parse(o.responseText)}catch(e){t=o.status}s(t);break;case 201:try{t=JSON.parse(o.responseText)}catch(e){t=o.status}s(t);break;case 400:case 401:case 403:case 409:case 290:case 490:case 500:try{t=JSON.parse(o.responseText),t.status=o.status}catch(e){t="Server currently under maintenance, please try again later."}break;default:t="Server currently under maintenance, please try again later."}l(t)}},o.open(t,e,!0),r&&o.setRequestHeader("Authorization","JWT "+r),n?o.send(n):(o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.send(JSON.stringify(a)))}))}a.d(t,{h:function(){return n}})},5638:function(e,t,a){a.r(t),a.d(t,{MAX_RESULT:function(){return m},PER_PAGE:function(){return u}});var n=a(257),r=a(756),s=a(5019),l=a(4329),o=a(3586),c=a(6222),i=a(8427),d=a(9253);const u=5,m=20;t.default=()=>{const{t:e}=(0,s.$)(),{0:t,1:a}=(0,n.useState)(null),{0:u,1:m}=(0,n.useState)(!1),{0:h,1:p}=(0,n.useState)(!1),{0:f,1:v}=(0,n.useState)(0),{0:b,1:g}=(0,n.useState)(null),{0:E,1:y}=(0,n.useState)(""),{0:Z,1:N}=(0,n.useState)(c.X9),{0:w,1:S}=(0,n.useState)("eu"),{0:x,1:k}=(0,n.useState)(null),{0:C,1:_}=(0,n.useState)(!1);(0,n.useEffect)((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("lang"),a=e.get("company_website"),n=e.get("region");if(a){k(a);const e=`https://discovery.sdsmanager.com/customer/website/${a}/status`;(0,l.h)(e,"get").then((e=>{_(e.status)})).catch((e=>{}))}t&&t!=Z&&c.Mj.indexOf(t)>-1&&(N(t),o.ZP.changeLanguage(t)),w&&n!=w&&c.nR.indexOf(n)>-1&&S(n)}),[]);const T=e=>{if(h&&p(!1),f>=4)return p(!0),void v(0);!function(e,t){void 0===t&&(t=0),m(!0),a(null);let r="https://admin55.sdsmanager.com/api/discovery-es/";r+=`?search=${e}&language_code=${Z}&company_web_site=${x}`,(0,l.h)(r,"get").then((e=>{if(e.results){const t=e.results;t.sort(((e,t)=>e.sds_pdf_revision_date<t.sds_pdf_revision_date?1:e.sds_pdf_revision_date>t.sds_pdf_revision_date||!t.sds_pdf_revision_date?-1:0));const n={...e,results:t};a(n),m(!1)}if(0==e.status)return m(!1),void g(n.createElement(i.default,{title:"Error",content:e.message,onCancel:()=>g(null)}))})).catch((e=>{m(!1),g(n.createElement(i.default,{title:"Error",content:e.message?e.message:e,onCancel:()=>g(null)}))}))}(e),y(e),v(f+1)};let $=!t||t&&0===t.results.length;return x?C?n.createElement(n.Fragment,null,n.createElement(d.Z,{title:`<p class="search-box-title"> ${e("search.title")} </p>`,searchBar:n.createElement(r.Z,{valueInit:E,captcha:h,onSearch:e=>T(e)}),loading:u,notFound:$,keyword:E,response:t,showTable:!0}),b):n.createElement("div",null," ",e("searchIframe.Website")," ",x," ",e("searchIframe.HasNotAccessToThisService")," "):n.createElement("div",null," ",e("searchIframe.MissingCompanyWebsite")," ")}}}]);
//# sourceMappingURL=component---src-pages-iframe-search-sds-tsx-fc799c2e639b721a8609.js.map