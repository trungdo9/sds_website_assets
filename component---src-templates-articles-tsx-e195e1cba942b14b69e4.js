"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[688,408],{4653:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),c=a(5697),o=a.n(c),s=a(1312);const i={type:o().string,tooltip:o().bool,as:o().elementType},m=r.forwardRef(((e,t)=>{let{as:a="div",className:n,type:r="valid",tooltip:c=!1,...o}=e;return(0,s.tZ)(a,{...o,ref:t,className:l()(n,`${r}-${c?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=i,t.Z=m},4709:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),c=a(8788),o=a(9541),s=a(1312);const i=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:i,type:m="checkbox",isValid:d=!1,isInvalid:g=!1,as:u="input",...p}=e;const{controlId:f}=(0,r.useContext)(c.Z);return n=(0,o.vE)(n,"form-check-input"),(0,s.tZ)(u,{...p,ref:t,type:m,id:a||f,className:l()(i,n,d&&"is-valid",g&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),c=(a(2473),a(4653)),o=a(8788),s=a(9541),i=a(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:c,htmlSize:m,id:d,className:g,isValid:u=!1,isInvalid:p=!1,plaintext:f,readOnly:h,as:E="input",...y}=e;const{controlId:b}=(0,r.useContext)(o.Z);let v;return a=(0,s.vE)(a,"form-control"),v=f?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${c}`]:c},(0,i.tZ)(E,{...y,type:n,size:m,ref:t,readOnly:h,id:d||b,className:l()(g,v,u&&"is-valid",p&&"is-invalid","color"===n&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:c.Z})},6722:function(e,t,a){var n=a(257),l=a(7408),r=a(6187),c=a(994),o=a(2984),s=a(5019),i=a(2216),m=a(4627),d=a(9874),g=a(7018),u=a(8304),p=a(4070),f=a.n(p);const h=(0,n.lazy)((()=>a.e(885).then(a.t.bind(a,3720,23)))),E=e=>{let{links:t,title:a}=e;const{t:l}=(0,s.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,r[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(o.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=n.useState(!1),{country:p}=(0,g.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(u.xz,{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),f().init(),console.log("Sbjs: ",null===f()||void 0===f()||null===(e=f().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(r.Z,null,n.createElement(c.Z,{className:"footer-inner"},n.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(E,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(E,{title:e("Solutions"),links:"solution"})),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(E,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===p?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===p?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(p)?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(r.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(o.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(o.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(d.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(h,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},6707:function(e,t,a){var n=a(257),l=a(5019),r=a(6187),c=a(5305),o=a(7018),s=a(8304);t.Z=()=>{const{originalPath:e}=(0,o.l)(),{t:t}=(0,l.$)(),[a,i]=n.useState(!1),[m,d]=n.useState(null);return n.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("popup"),a=e.get("subscription_plan"),n=e.get("ref");a&&d(a),"setup-account"===t&&"get-free-access"===n&&i(!0)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"get-free-trial-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},n.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},n.createElement("h2",{className:"display-4 get-your-free-trial"},t("Get Your Free Trial Today")),n.createElement("a",{className:"btn yellow-btn",href:"#",onClick:()=>{d("free"),i(!0)}},t("Get Free Access")))),a&&n.createElement(c.XL,{plan:m,show:a,onCancel:()=>{i(!1)},needCompanyWebsite:!1,service:"sds_inventory",custom_type:s.BV.WELCOME_NEW_USER,redirect_url:e,pageRef:"get-free-access"}))}},1767:function(e,t,a){var n=a(257),l=a(5019),r=a(2984);t.Z=e=>{let{image:t,title:a,fields:c,id:o,excerpt:s,category:i}=e;const{t:m}=(0,l.$)();return n.createElement("div",{className:"col-xl-4 col-md-6 col-sm-12 col-12 blog-item-box"},n.createElement("div",{className:"card"},n.createElement("img",{className:"card-img-top blog-image",src:t,alt:a}),n.createElement("div",{className:"card-body pt-4 pb-4"},n.createElement("div",{className:"text-center blog-card-text-container"},n.createElement("p",{className:"blog-category purple-color"},i),n.createElement(r.Z,{className:"blog-title",to:c.slug,title:a},a),n.createElement("div",{style:{height:150,position:"relative"}},n.createElement("p",{className:"blog-excerpt"},s),n.createElement("div",{className:"position-button"},n.createElement(r.Z,{to:c.slug,itemProp:"url",className:"btn read-more-btn blue-color",title:a},m("Read More"))))))))}},7825:function(e,t,a){var n=a(257),l=a(5414),r=a(9178),c=a(6722),o=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(o.Z,null,n.createElement(l.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),n.createElement(r.Z,{version:a}),n.createElement("main",null,t),n.createElement(c.Z,null))}},4329:function(e,t,a){function n(e,t,a,n,l){return new Promise(((r,c)=>{const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(4===o.readyState){let t;switch(o.status){case 200:try{t=JSON.parse(o.responseText)}catch(e){t=o.status}r(t);break;case 201:try{t=JSON.parse(o.responseText)}catch(e){t=o.status}r(t);break;case 400:case 401:case 403:case 409:case 290:case 490:case 500:try{t=JSON.parse(o.responseText),t.status=o.status}catch(e){t="Server currently under maintenance, please try again later."}break;default:t="Server currently under maintenance, please try again later."}c(t)}},o.open(t,e,!0),l&&o.setRequestHeader("Authorization","JWT "+l),n?o.send(n):(o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.send(JSON.stringify(a)))}))}a.d(t,{h:function(){return n}})},2034:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(257),l=a(7825),r=a(7700),c=a(6707),o=a(5019),s=a(6187),i=a(1767),m=a(2984),d=a(4627),g=a(3433),u=a(5133);var p=e=>{let{total:t,perPage:a,page:l,onClick:r,path:c}=e;const{i18n:s}=(0,o.$)();let i=Math.ceil(t/a),m=Array.from({length:i},((e,t)=>t+1));const p=e=>{e<0||e>i||r(e)},f=e=>{if(e<0||e>i)return"#";let t="";return t=0==e?(0,d.Gr)(c,u.ZP.language):(0,d.Gr)(`/articles/page/${e+1}/`,u.ZP.language),t};let h=m;if(m.length>10){let e=m.slice(0,5),t=m.slice(m.length-5,m.length);h=[].concat((0,g.Z)(e),(0,g.Z)(t))}if(1===m.length)return n.createElement("div",null);let E=null;return n.createElement("div",{className:"pagination-inner"},n.createElement("ul",{className:"pagination"},n.createElement("li",{className:""},n.createElement("a",{className:"pagination-arrow",onClick:()=>p(l-1)},n.createElement("img",{src:"/images/arrow-prev.png",alt:"Arrow Prev Icon"}))),h.map(((e,t)=>{if(E){if(e-E!=1)return E=e,n.createElement("li",{key:t,className:""},n.createElement("span",{className:"pagination-item"},"..."));E++}else E=e;return n.createElement("li",{key:t,className:""},n.createElement("a",{className:l+1===e?"active pagination-item":"pagination-item",href:f(e-1),onClick:t=>{t.preventDefault(),Number.isInteger(e)&&r(e-1)}},e))})),l+1<i&&n.createElement("li",{className:""},n.createElement("a",{className:"pagination-arrow",onClick:()=>p(l+1)},n.createElement("img",{src:"/images/arrow-next.png",alt:"Arrow Next Icon"})))))};const f=e=>{let{title:t,image:a,excerpt:l,category:r,fields:c}=e;const{t:i}=(0,o.$)();return n.createElement("div",{className:"blog-page-header-section overflow-hidden d-flex align-items-center justify-content-center flex-column"},n.createElement(s.Z,null,n.createElement("div",{className:"page-header-inner"},n.createElement("h1",{className:"text-center"}," ",i("blog.header")," "),n.createElement("div",{className:"text-box-container"},n.createElement("div",{className:"text-box"},n.createElement("p",{className:"box-tag"},r),n.createElement("p",{className:"box-title"},t),n.createElement("p",{className:"text"},l),n.createElement(m.Z,{to:c.slug,className:"read-more-btn blue-color fw-bold"}," ",i("Read More")," ")),n.createElement("div",{className:"image-box"},n.createElement("img",{width:936,height:"auto",src:a,alt:t}))))))};var h=e=>{let{queryResult:t,blogContext:a}=e;const{t:l,i18n:r}=(0,o.$)();let c=t.allPostsJson.edges;if(0===c.length)return n.createElement("div",null," ",l("blog.noArticle")," ");const s=c[0].node,m=c.filter(((e,t)=>0!==t));return n.createElement("div",null,n.createElement(f,{title:s.title,excerpt:s.excerpt,image:s.image,fields:s.fields,category:s.category}),n.createElement("div",{className:"blog-section"},n.createElement("h2",{className:"text-center"}," ",l("blog.title")," "),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},m.map(((e,t)=>{let{node:a}=e;return n.createElement(i.Z,{key:t,fields:a.fields,image:a.image,title:a.title,id:a.id,excerpt:a.excerpt,category:a.category})}))),n.createElement(p,{total:a.total,perPage:a.blogPerPage,page:a.currentPage,path:"/articles/",onClick:e=>{0==e?(0,d.c4)("/articles/",a.lang):(0,d.c4)(`/articles/page/${e+1}/`,a.lang)}}))))};var E=e=>{const{t:t}=(0,o.$)();return n.createElement(l.Z,null,n.createElement(r.Z,{title:t("Articles & News")+" - page "+(e.pageContext.currentPage+1),canonicalUrl:("en"!==e.pageContext.dir?e.pageContext.dir:"")+e.pageContext.originalPath,description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers - page "+(e.pageContext.currentPage+1)}),n.createElement("div",{className:"blog-page"},n.createElement(h,{queryResult:e.data,blogContext:e.pageContext}),n.createElement(c.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-articles-tsx-e195e1cba942b14b69e4.js.map