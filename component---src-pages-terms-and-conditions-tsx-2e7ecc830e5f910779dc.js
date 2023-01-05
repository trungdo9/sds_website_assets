"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[7235],{6722:function(e,t,a){var n=a(257),l=a(7408),r=a(6187),o=a(994),c=a(2984),s=a(5019),i=a(2216),m=a(4627),d=a(9874),g=a(7018),h=a(8304),u=a(4070),E=a.n(u);const p=(0,n.lazy)((()=>a.e(2885).then(a.t.bind(a,3720,23)))),y=e=>{let{links:t,title:a}=e;const{t:l}=(0,s.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,r[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(c.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=n.useState(!1),{country:u}=(0,g.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(h.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),E().init(),console.log("Sbjs: ",null===E()||void 0===E()||null===(e=E().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(r.Z,null,n.createElement(o.Z,{className:"footer-inner"},n.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(y,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(y,{title:e("Solutions"),links:"solution"})),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(y,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===u?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===u?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(u)?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(r.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(c.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(c.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(d.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(p,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},5818:function(e,t,a){var n=a(257),l=a(5019),r=a(6187);t.Z=e=>{let{headline:t,headlineStyle:a="",title:o,titleStyle:c="",content:s,contentStyle:i="",containerStyle:m="",style:d="",readMoreUrl:g}=e;const{t:h}=(0,l.$)();return n.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${d}`},n.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},n.createElement("p",{className:`lead ${a}`}," ",t," "),n.createElement("h1",{dangerouslySetInnerHTML:{__html:o},className:`page-header-title ${c}`}),n.createElement("div",{dangerouslySetInnerHTML:{__html:s},className:`page-header-text ${i}`}),g&&n.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",h("Read More")," ")))}},7825:function(e,t,a){var n=a(257),l=a(5414),r=a(9178),o=a(6722),c=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(c.Z,null,n.createElement(l.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),n.createElement(r.Z,{version:a}),n.createElement("main",null,t),n.createElement(o.Z,null))}},7063:function(e,t,a){a.r(t);var n=a(257),l=a(7825),r=a(7700),o=a(5019),c=a(5818),s=a(1804),i=a(6187),m=a(6222);t.default=e=>{const{data:t}=e,{t:a}=(0,o.$)(),d=t.allPagesJson.edges;let g=e.pageContext.dir;return["us","no"].includes(g)||(g=m.nr),n.createElement(l.Z,null,n.createElement(r.Z,{title:a("Terms and Conditions"),canonicalUrl:g+e.pageContext.originalPath}),n.createElement("div",{className:"terms-and-conditions-page"},n.createElement(c.Z,{title:a("Terms and Conditions")}),n.createElement("div",{className:"terms-and-conditions-header"},n.createElement(s.Z,{black:!0,headline1:!0,textStyle:"terms-and-conditions-title"}," ",a("toc.title")," "),n.createElement(s.Z,{black:!0,headline1:!0,textStyle:"terms-and-conditions-subTitle"}," ",a("toc.subTitle")," ")),n.createElement("div",{className:"terms-and-conditions-section-container"},n.createElement(i.Z,null,d.map(((e,t)=>{let{node:a}=e;return n.createElement("div",{key:t,className:"terms-and-conditions-section",dangerouslySetInnerHTML:{__html:a.body}})}))))))}}}]);
//# sourceMappingURL=component---src-pages-terms-and-conditions-tsx-2e7ecc830e5f910779dc.js.map