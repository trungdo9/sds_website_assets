"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[3806],{1994:function(e,t,a){var l=a(257),n=a(7408),r=a(3639),o=a(994),c=a(6679),i=a(5019),s=a(2216),m=a(370),d=a(2850),g=a(1514),h=a(2986),u=a(4070),y=a.n(u);const p=(0,l.lazy)((()=>a.e(2885).then(a.t.bind(a,3720,23)))),E=e=>{let{links:t,title:a}=e;const{t:n}=(0,i.$)(),r={SdsManager:[{label:n("footer.footerText")}],company:[{label:n("About Us"),url:"/about-us/"},{label:n("Partner Program"),url:"/partner-program/"},{label:n("contactUs"),url:"/contact-us/"}],solution:[{label:n("SdsInventoryManagement"),url:"/"},{label:n("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:n("authoring_creation"),url:"/sds-author/"},{label:n("data_extraction_parsing"),url:"/sds-parser-api/"},{label:n("safety_data_sheet_database"),url:"/search/"}],contact:[{label:n("contactUs"),url:"/contact-us/"},{label:n("footer.footerCompany")},{label:n("footer.footerAddress")}]};return l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading"},a),l.createElement("ul",null,r[t].map(((e,t)=>e.url?l.createElement("li",{key:t},l.createElement(c.Z,{to:e.url,title:e.label},e.label)):l.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,i.$)(),[t,a]=l.useState(!1),{country:u}=(0,g.l)();return l.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(h.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),y().init(),console.log("Sbjs: ",null===y()||void 0===y()||null===(e=y().get)||void 0===e?void 0:e.current))}),[]),l.createElement("div",{className:"footer-section-v2"},l.createElement(r.Z,null,l.createElement(o.Z,{className:"footer-inner"},l.createElement(n.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},l.createElement("div",{className:"d-flex footer-info"},l.createElement(s.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),l.createElement(E,{title:e("SdsMangerAs"),links:"SdsManager"}))),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(E,{title:e("Solutions"),links:"solution"})),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(E,{title:e("Company"),links:"company"}),l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),l.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===u?l.createElement("p",{className:"phonenumber-text"},l.createElement(s.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===u?l.createElement("p",{className:"phonenumber-text"},l.createElement(s.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(u)?l.createElement("p",{className:"phonenumber-text"},l.createElement(s.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),l.createElement("div",{className:"bottom-footer"},l.createElement(r.Z,null,l.createElement("div",{className:"bottom-footer-inner"},l.createElement("div",{className:"col-left"},l.createElement(c.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),l.createElement(c.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),l.createElement("div",{className:"social-link"},l.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},l.createElement(s.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},l.createElement(s.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},l.createElement(s.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),l.createElement("div",null,l.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&l.createElement(d.Z,null,l.createElement("div",{className:"cookie-consent"},l.createElement(p,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},6300:function(e,t,a){var l=a(257),n=a(5019),r=a(3639);t.Z=e=>{let{headline:t,headlineStyle:a="",title:o,titleStyle:c="",content:i,contentStyle:s="",containerStyle:m="",style:d="",readMoreUrl:g}=e;const{t:h}=(0,n.$)();return l.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${d}`},l.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},l.createElement("p",{className:`lead ${a}`}," ",t," "),l.createElement("h1",{dangerouslySetInnerHTML:{__html:o},className:`page-header-title ${c}`}),l.createElement("div",{dangerouslySetInnerHTML:{__html:i},className:`page-header-text ${s}`}),g&&l.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",h("Read More")," ")))}},4842:function(e,t,a){var l=a(257),n=a(5414),r=a(3963),o=a(1994),c=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const i={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return l.createElement(c.Z,null,l.createElement(n.q,{titleTemplate:`%s - ${i.title}`,defaultTitle:i.title,meta:[{name:"description",content:i.description},{name:"keywords",content:i.keywords}]}),l.createElement(r.Z,{version:a}),l.createElement("main",null,t),l.createElement(o.Z,null))}},4373:function(e,t,a){a.r(t);var l=a(257),n=a(4842),r=a(4001),o=a(5019),c=a(6300),i=a(4513),s=a(3639),m=a(7365);t.default=e=>{const{data:t}=e,{t:a}=(0,o.$)();let d=e.pageContext.dir;["us","no"].includes(d)||(d=m.nr);const g=t.allPagesJson.edges;return l.createElement(n.Z,null,l.createElement(r.Z,{title:a("Privacy Policy"),canonicalUrl:d+e.pageContext.originalPath}),l.createElement("div",{className:"privacy-policy-page"},l.createElement(c.Z,{title:a("Privacy Policy")}),l.createElement("div",{className:"privacy-policy-header"},l.createElement(i.Z,{black:!0,headline1:!0,textStyle:"privacy-policy-title"}," ",a("privacyPolicy.title")," "),l.createElement(i.Z,{black:!0,headline1:!0,textStyle:"privacy-policy-subTitle"}," ",a("privacyPolicy.subTitle")," ")),l.createElement("div",{className:"privacy-policy-section-container"},l.createElement(s.Z,null,g.map(((e,t)=>{let{node:a}=e;return l.createElement("div",{key:t,className:"privacy-policy-section",dangerouslySetInnerHTML:{__html:a.body}})}))))))}}}]);