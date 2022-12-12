"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[688,413],{4653:function(e,t,a){var l=a(5900),n=a.n(l),r=a(257),c=a(5697),o=a.n(c),s=a(1312);const i={type:o().string,tooltip:o().bool,as:o().elementType},m=r.forwardRef(((e,t)=>{let{as:a="div",className:l,type:r="valid",tooltip:c=!1,...o}=e;return(0,s.tZ)(a,{...o,ref:t,className:n()(l,`${r}-${c?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=i,t.Z=m},4709:function(e,t,a){var l=a(5900),n=a.n(l),r=a(257),c=a(8788),o=a(9541),s=a(1312);const i=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:l,className:i,type:m="checkbox",isValid:d=!1,isInvalid:g=!1,as:u="input",...p}=e;const{controlId:f}=(0,r.useContext)(c.Z);return l=(0,o.vE)(l,"form-check-input"),(0,s.tZ)(u,{...p,ref:t,type:m,id:a||f,className:n()(i,l,d&&"is-valid",g&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const l=a(257).createContext({});t.Z=l},1760:function(e,t,a){var l=a(5900),n=a.n(l),r=a(257),c=(a(2473),a(4653)),o=a(8788),s=a(9541),i=a(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,type:l,size:c,htmlSize:m,id:d,className:g,isValid:u=!1,isInvalid:p=!1,plaintext:f,readOnly:E,as:h="input",...b}=e;const{controlId:y}=(0,r.useContext)(o.Z);let v;return a=(0,s.vE)(a,"form-control"),v=f?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${c}`]:c},(0,i.tZ)(h,{...b,type:l,size:m,ref:t,readOnly:E,id:d||y,className:n()(g,v,u&&"is-valid",p&&"is-invalid","color"===l&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:c.Z})},6722:function(e,t,a){var l=a(257),n=a(7408),r=a(6187),c=a(994),o=a(2984),s=a(5019),i=a(2216),m=a(4627),d=a(9874),g=a(7018),u=a(8304),p=a(4070),f=a.n(p);const E=(0,l.lazy)((()=>a.e(885).then(a.t.bind(a,3720,23)))),h=e=>{let{links:t,title:a}=e;const{t:n}=(0,s.$)(),r={SdsManager:[{label:n("footer.footerText")}],company:[{label:n("About Us"),url:"/about-us/"},{label:n("Partner Program"),url:"/partner-program/"},{label:n("contactUs"),url:"/contact-us/"}],solution:[{label:n("SdsInventoryManagement"),url:"/"},{label:n("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:n("authoring_creation"),url:"/sds-author/"},{label:n("data_extraction_parsing"),url:"/sds-parser-api/"},{label:n("safety_data_sheet_database"),url:"/search/"}],contact:[{label:n("contactUs"),url:"/contact-us/"},{label:n("footer.footerCompany")},{label:n("footer.footerAddress")}]};return l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading"},a),l.createElement("ul",null,r[t].map(((e,t)=>e.url?l.createElement("li",{key:t},l.createElement(o.Z,{to:e.url,title:e.label},e.label)):l.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=l.useState(!1),{country:p}=(0,g.l)();return l.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(u.xz,{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),f().init(),console.log("Sbjs: ",null===f()||void 0===f()||null===(e=f().get)||void 0===e?void 0:e.current))}),[]),l.createElement("div",{className:"footer-section-v2"},l.createElement(r.Z,null,l.createElement(c.Z,{className:"footer-inner"},l.createElement(n.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},l.createElement("div",{className:"d-flex footer-info"},l.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),l.createElement(h,{title:e("SdsMangerAs"),links:"SdsManager"}))),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(h,{title:e("Solutions"),links:"solution"})),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(h,{title:e("Company"),links:"company"}),l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),l.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===p?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===p?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(p)?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),l.createElement("div",{className:"bottom-footer"},l.createElement(r.Z,null,l.createElement("div",{className:"bottom-footer-inner"},l.createElement("div",{className:"col-left"},l.createElement(o.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),l.createElement(o.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),l.createElement("div",{className:"social-link"},l.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},l.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},l.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},l.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),l.createElement("div",null,l.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&l.createElement(d.Z,null,l.createElement("div",{className:"cookie-consent"},l.createElement(E,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},6707:function(e,t,a){var l=a(257),n=a(5019),r=a(6187),c=a(5305),o=a(7018),s=a(8304);t.Z=()=>{const{originalPath:e}=(0,o.l)(),{t:t}=(0,n.$)(),[a,i]=l.useState(!1),[m,d]=l.useState(null);return l.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("popup"),a=e.get("subscription_plan"),l=e.get("ref");a&&d(a),"setup-account"===t&&"get-free-access"===l&&i(!0)}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"get-free-trial-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},l.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},l.createElement("h2",{className:"display-4 get-your-free-trial"},t("Get Your Free Trial Today")),l.createElement("a",{className:"btn yellow-btn",href:"#",onClick:()=>{d("free"),i(!0)}},t("Get Free Access")))),a&&l.createElement(c.XL,{plan:m,show:a,onCancel:()=>{i(!1)},needCompanyWebsite:!1,service:"sds_inventory",custom_type:s.BV.WELCOME_NEW_USER,redirect_url:e,pageRef:"get-free-access"}))}},1767:function(e,t,a){var l=a(257),n=a(5019),r=a(2984),c=a(2216);t.Z=e=>{let{image:t,title:a,fields:o,id:s,excerpt:i,category:m}=e;const{t:d}=(0,n.$)();return l.createElement("div",{className:"col-xl-4 col-md-6 col-sm-12 col-12 blog-item-box"},l.createElement("div",{className:"card"},l.createElement(c.LazyLoadImage,{alt:a,height:259,src:t,className:"card-img-top blog-image",width:404}),l.createElement("div",{className:"card-body pt-4 pb-4"},l.createElement("div",{className:"text-center blog-card-text-container"},l.createElement("p",{className:"blog-category purple-color"},m),l.createElement(r.Z,{className:"blog-title",to:o.slug,title:a},a),l.createElement("div",{style:{height:150,position:"relative"}},l.createElement("p",{className:"blog-excerpt"},i),l.createElement("div",{className:"position-button"},l.createElement(r.Z,{to:o.slug,itemProp:"url",className:"btn read-more-btn blue-color",title:a},d("Read More"))))))))}},7825:function(e,t,a){var l=a(257),n=a(5414),r=a(9178),c=a(6722),o=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return l.createElement(o.Z,null,l.createElement(n.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),l.createElement(r.Z,{version:a}),l.createElement("main",null,t),l.createElement(c.Z,null))}},2034:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(257),n=a(7825),r=a(7700),c=a(6707),o=a(5019),s=a(6187),i=a(1767),m=a(2984),d=a(4627),g=a(3433),u=a(3586);var p=e=>{let{total:t,perPage:a,page:n,onClick:r,path:c}=e;const{i18n:s}=(0,o.$)();let i=Math.ceil(t/a),m=Array.from({length:i},((e,t)=>t+1));const p=e=>{e<0||e>i||r(e)},f=e=>{if(e<0||e>i)return"#";let t="";return t=0==e?(0,d.Gr)(c,u.ZP.language):(0,d.Gr)(`/articles/page/${e+1}/`,u.ZP.language),t};let E=m;if(m.length>10){let e=m.slice(0,5),t=m.slice(m.length-5,m.length);E=[].concat((0,g.Z)(e),(0,g.Z)(t))}if(1===m.length)return l.createElement("div",null);let h=null;return l.createElement("div",{className:"pagination-inner"},l.createElement("ul",{className:"pagination"},l.createElement("li",{className:""},l.createElement("a",{className:"pagination-arrow",onClick:()=>p(n-1)},l.createElement("img",{src:"/images/arrow-prev.png",alt:"Arrow Prev Icon"}))),E.map(((e,t)=>{if(h){if(e-h!=1)return h=e,l.createElement("li",{key:t,className:""},l.createElement("span",{className:"pagination-item"},"..."));h++}else h=e;return l.createElement("li",{key:t,className:""},l.createElement("a",{className:n+1===e?"active pagination-item":"pagination-item",href:f(e-1),onClick:t=>{t.preventDefault(),Number.isInteger(e)&&r(e-1)}},e))})),n+1<i&&l.createElement("li",{className:""},l.createElement("a",{className:"pagination-arrow",onClick:()=>p(n+1)},l.createElement("img",{src:"/images/arrow-next.png",alt:"Arrow Next Icon"})))))};const f=e=>{let{title:t,image:a,excerpt:n,category:r,fields:c}=e;const{t:i}=(0,o.$)();return l.createElement("div",{className:"blog-page-header-section overflow-hidden d-flex align-items-center justify-content-center flex-column"},l.createElement(s.Z,null,l.createElement("div",{className:"page-header-inner"},l.createElement("h1",{className:"text-center"}," ",i("blog.header")," "),l.createElement("div",{className:"text-box-container"},l.createElement("div",{className:"text-box"},l.createElement("p",{className:"box-tag"},r),l.createElement("p",{className:"box-title"},t),l.createElement("p",{className:"text"},n),l.createElement(m.Z,{to:c.slug,className:"read-more-btn blue-color fw-bold"}," ",i("Read More")," ")),l.createElement("div",{className:"image-box"},l.createElement("img",{width:936,height:"auto",src:a,alt:t}))))))};var E=e=>{let{queryResult:t,blogContext:a}=e;const{t:n,i18n:r}=(0,o.$)();let c=t.allPostsJson.edges;if(0===c.length)return l.createElement("div",null," ",n("blog.noArticle")," ");const s=c[0].node,m=c.filter(((e,t)=>0!==t));return l.createElement("div",null,l.createElement(f,{title:s.title,excerpt:s.excerpt,image:s.image,fields:s.fields,category:s.category}),l.createElement("div",{className:"blog-section"},l.createElement("h2",{className:"text-center"}," ",n("blog.title")," "),l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},m.map(((e,t)=>{let{node:a}=e;return l.createElement(i.Z,{key:t,fields:a.fields,image:a.image,title:a.title,id:a.id,excerpt:a.excerpt,category:a.category})}))),l.createElement(p,{total:a.total,perPage:a.blogPerPage,page:a.currentPage,path:"/articles/",onClick:e=>{0==e?(0,d.c4)("/articles/",a.lang):(0,d.c4)(`/articles/page/${e+1}/`,a.lang)}}))))};var h=e=>{const{t:t}=(0,o.$)();return l.createElement(n.Z,null,l.createElement(r.Z,{title:t("Articles & News")+" - page "+(e.pageContext.currentPage+1),canonicalUrl:("en"!==e.pageContext.dir?e.pageContext.dir:"")+e.pageContext.originalPath,description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers - page "+(e.pageContext.currentPage+1)}),l.createElement("div",{className:"blog-page"},l.createElement(E,{queryResult:e.data,blogContext:e.pageContext}),l.createElement(c.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-articles-tsx-0460b25202ca646f680c.js.map