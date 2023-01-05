"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[19],{2566:function(e,t,a){a.d(t,{Z:function(){return S}});var n=a(5900),r=a.n(n),l=a(257),o=a(5210),c=a(9541),s=a(9533);function i(e,t){return Array.isArray(e)?e.includes(t):e===t}const m=l.createContext({});m.displayName="AccordionContext";var d=m,u=a(1312);const h=l.forwardRef(((e,t)=>{let{as:a="div",bsPrefix:n,className:o,children:m,eventKey:h,...p}=e;const{activeEventKey:f}=(0,l.useContext)(d);return n=(0,c.vE)(n,"accordion-collapse"),(0,u.tZ)(s.Z,{ref:t,in:i(f,h),...p,className:r()(o,n),children:(0,u.tZ)(a,{children:l.Children.only(m)})})}));h.displayName="AccordionCollapse";var p=h;const f=l.createContext({eventKey:""});f.displayName="AccordionItemContext";var g=f;const v=l.forwardRef(((e,t)=>{let{as:a="div",bsPrefix:n,className:o,...s}=e;n=(0,c.vE)(n,"accordion-body");const{eventKey:i}=(0,l.useContext)(g);return(0,u.tZ)(p,{eventKey:i,children:(0,u.tZ)(a,{ref:t,...s,className:r()(o,n)})})}));v.displayName="AccordionBody";var y=v;const E=l.forwardRef(((e,t)=>{let{as:a="button",bsPrefix:n,className:o,onClick:s,...m}=e;n=(0,c.vE)(n,"accordion-button");const{eventKey:h}=(0,l.useContext)(g),p=function(e,t){const{activeEventKey:a,onSelect:n,alwaysOpen:r}=(0,l.useContext)(d);return l=>{let o=e===a?null:e;r&&(o=Array.isArray(a)?a.includes(e)?a.filter((t=>t!==e)):[...a,e]:[e]),null==n||n(o,l),null==t||t(l)}}(h,s),{activeEventKey:f}=(0,l.useContext)(d);return"button"===a&&(m.type="button"),(0,u.tZ)(a,{ref:t,onClick:p,...m,"aria-expanded":h===f,className:r()(o,n,!i(f,h)&&"collapsed")})}));E.displayName="AccordionButton";var b=E;const N=l.forwardRef(((e,t)=>{let{as:a="h2",bsPrefix:n,className:l,children:o,onClick:s,...i}=e;return n=(0,c.vE)(n,"accordion-header"),(0,u.tZ)(a,{ref:t,...i,className:r()(l,n),children:(0,u.tZ)(b,{onClick:s,children:o})})}));N.displayName="AccordionHeader";var w=N;const x=l.forwardRef(((e,t)=>{let{as:a="div",bsPrefix:n,className:o,eventKey:s,...i}=e;n=(0,c.vE)(n,"accordion-item");const m=(0,l.useMemo)((()=>({eventKey:s})),[s]);return(0,u.tZ)(g.Provider,{value:m,children:(0,u.tZ)(a,{ref:t,...i,className:r()(o,n)})})}));x.displayName="AccordionItem";var Z=x;const k=l.forwardRef(((e,t)=>{const{as:a="div",activeKey:n,bsPrefix:s,className:i,onSelect:m,flush:h,alwaysOpen:p,...f}=(0,o.Ch)(e,{activeKey:"onSelect"}),g=(0,c.vE)(s,"accordion"),v=(0,l.useMemo)((()=>({activeEventKey:n,onSelect:m,alwaysOpen:p})),[n,m,p]);return(0,u.tZ)(d.Provider,{value:v,children:(0,u.tZ)(a,{ref:t,...f,className:r()(i,g,h&&`${g}-flush`)})})}));k.displayName="Accordion";var S=Object.assign(k,{Button:b,Collapse:p,Item:Z,Header:w,Body:y})},6722:function(e,t,a){var n=a(257),r=a(7408),l=a(6187),o=a(994),c=a(2984),s=a(5019),i=a(2216),m=a(4627),d=a(9874),u=a(7018),h=a(8304),p=a(4070),f=a.n(p);const g=(0,n.lazy)((()=>a.e(885).then(a.t.bind(a,3720,23)))),v=e=>{let{links:t,title:a}=e;const{t:r}=(0,s.$)(),l={SdsManager:[{label:r("footer.footerText")}],company:[{label:r("About Us"),url:"/about-us/"},{label:r("Partner Program"),url:"/partner-program/"},{label:r("contactUs"),url:"/contact-us/"}],solution:[{label:r("SdsInventoryManagement"),url:"/"},{label:r("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:r("authoring_creation"),url:"/sds-author/"},{label:r("data_extraction_parsing"),url:"/sds-parser-api/"},{label:r("safety_data_sheet_database"),url:"/search/"}],contact:[{label:r("contactUs"),url:"/contact-us/"},{label:r("footer.footerCompany")},{label:r("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,l[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(c.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=n.useState(!1),{country:p}=(0,u.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(h.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),f().init(),console.log("Sbjs: ",null===f()||void 0===f()||null===(e=f().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(l.Z,null,n.createElement(o.Z,{className:"footer-inner"},n.createElement(r.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(v,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(r.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(v,{title:e("Solutions"),links:"solution"})),n.createElement(r.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(v,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===p?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===p?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(p)?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(l.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(c.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(c.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(d.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(g,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},756:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(257),r=a(5900),l=a.n(r),o=a(8870),c=a(9541),s=a(4709),i=a(7427),m=a(1312);const d=(0,o.Z)("input-group-text",{Component:"span"}),u=n.forwardRef(((e,t)=>{let{bsPrefix:a,size:r,hasValidation:o,className:s,as:d="div",...u}=e;a=(0,c.vE)(a,"input-group");const h=(0,n.useMemo)((()=>({})),[]);return(0,m.tZ)(i.Z.Provider,{value:h,children:(0,m.tZ)(d,{ref:t,...u,className:l()(s,a,r&&`${a}-${r}`,o&&"has-validation")})})}));u.displayName="InputGroup";var h=Object.assign(u,{Text:d,Radio:e=>(0,m.tZ)(d,{children:(0,m.tZ)(s.Z,{type:"radio",...e})}),Checkbox:e=>(0,m.tZ)(d,{children:(0,m.tZ)(s.Z,{type:"checkbox",...e})})}),p=a(1760),f=a(6594),g=a(5019),v=a(9874);const y=(0,n.lazy)((()=>a.e(427).then(a.bind(a,8427)))),E=(0,n.lazy)((()=>a.e(687).then(a.bind(a,6687))));var b=function(e){let{onSearch:t,captcha:a=!1,valueInit:r="",countryFilter:l}=e;const{0:o,1:c}=(0,n.useState)(r),{0:s,1:i}=(0,n.useState)(""),{0:m,1:d}=(0,n.useState)(!1),{0:u,1:b}=(0,n.useState)(null),[N,w]=n.useState(!1),[x,Z]=n.useState(1),{t:k}=(0,g.$)(),S=()=>{o.length<3?b(n.createElement(v.Z,null,n.createElement(y,{title:"Error",content:"You must enter at least 3 characters when searching...",onCancel:()=>b(null)}))):(w(!1),Z(1),t(o))},C=()=>n.createElement(f.Z,{type:"submit",className:"search-bar-btn"},n.createElement("img",{src:"/icons/Search.png",alt:"Search Icon",className:"search-icon"}),n.createElement("div",{className:"search-text"}," ",k("searchbar.searchButton")," "));return n.createElement(n.Fragment,null,m&&n.createElement(v.Z,null,n.createElement(y,{title:k("captcha.errorMessageTitle"),content:k("captcha.errorMessageContent"),onCancel:()=>{d(!1)}})),n.createElement("div",{className:"search-container"},n.createElement("form",{className:"search-form",onSubmit:e=>{e.preventDefault(),5==x&&console.log("Error 5 times"),a?N?Z((e=>e+1)):w(!0):S()}},n.createElement(h,{className:"search-input-group"},n.createElement(p.Z,{placeholder:k("searchbar.searchPlaceHolder"),className:"place-holder",value:o,onChange:e=>{c(e.target.value)}}),a&&n.createElement(v.Z,null,n.createElement("div",{className:"captcha-box-container"},n.createElement(E,{value:s,setValue:e=>{i(e)},onValidateCaptcha:N,count:x,onValidateSuccess:S,onValidateFail:()=>{d(!0)}}))),l?n.createElement("div",{className:"search-button-group"},C(),l):C()))),u)}},7825:function(e,t,a){var n=a(257),r=a(5414),l=a(9178),o=a(6722),c=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(c.Z,null,n.createElement(r.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),n.createElement(l.Z,{version:a}),n.createElement("main",null,t),n.createElement(o.Z,null))}}}]);