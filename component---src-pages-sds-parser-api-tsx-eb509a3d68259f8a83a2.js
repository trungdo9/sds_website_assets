"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[7452],{4574:function(e,t,a){var n=a(257),l=a(5019),r=a(3639),o=a(6679);t.Z=e=>{let{title:t,titleStyle:a}=e;const{t:s}=(0,l.$)();return n.createElement("div",{className:"contact-footer overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},n.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},n.createElement("div",{className:"d-flex justify-content-center"},n.createElement("div",{className:"contact-footer-container"},n.createElement("div",{className:"contact-footer-content"},n.createElement("div",{className:a?`${a} contact-footer-title`:"contact-footer-title",dangerouslySetInnerHTML:{__html:t||s("inventoryManagement.StillUnsureAbout")}}),n.createElement("div",{className:"contact-footer-subtitle",dangerouslySetInnerHTML:{__html:s("inventoryManagement.ContactUsNowFor")}})),n.createElement(o.Z,{to:"/contact-us/",title:"contact us"}," ",s("inventoryManagement.ContactUs")," ")))))}},1994:function(e,t,a){var n=a(257),l=a(7408),r=a(3639),o=a(994),s=a(6679),c=a(5019),i=a(2216),m=a(370),d=a(2850),u=a(1514),p=a(2986),g=a(4070),h=a.n(g);const E=(0,n.lazy)((()=>a.e(2885).then(a.t.bind(a,3720,23)))),f=e=>{let{links:t,title:a}=e;const{t:l}=(0,c.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,r[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(s.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,c.$)(),[t,a]=n.useState(!1),{country:g}=(0,u.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(p.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),h().init(),console.log("Sbjs: ",null===h()||void 0===h()||null===(e=h().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(r.Z,null,n.createElement(o.Z,{className:"footer-inner"},n.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(f,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(f,{title:e("Solutions"),links:"solution"})),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(f,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===g?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===g?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(g)?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(r.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(s.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(s.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(d.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(E,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},6300:function(e,t,a){var n=a(257),l=a(5019),r=a(3639);t.Z=e=>{let{headline:t,headlineStyle:a="",title:o,titleStyle:s="",content:c,contentStyle:i="",containerStyle:m="",style:d="",readMoreUrl:u}=e;const{t:p}=(0,l.$)();return n.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${d}`},n.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},n.createElement("p",{className:`lead ${a}`}," ",t," "),n.createElement("h1",{dangerouslySetInnerHTML:{__html:o},className:`page-header-title ${s}`}),n.createElement("div",{dangerouslySetInnerHTML:{__html:c},className:`page-header-text ${i}`}),u&&n.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",p("Read More")," ")))}},805:function(e,t,a){a.d(t,{Z:function(){return S}});var n=a(257),l=a(3114),r=a(3639),o=a(5019),s=a(4513),c=a(6594),i=a(8427),m=a(2986);const d={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 0px",border:"1px dashed var(--light)",color:"var(--black)"},u={border:"1px dashed var(--yellow)"};var p=e=>{let{onDrop:t,listFile:a}=e;const{t:l}=(0,o.$)(),{isDragAccept:r,getRootProps:p,open:g,getInputProps:h}=(0,i.uI)({maxFiles:m.cM,noKeyboard:!0,onDrop:t}),E=n.useMemo((()=>({...d,...r?u:{}})),[r]);return n.createElement("section",{className:"dropzone-container"},n.createElement("div",Object.assign({},p({style:E}),{className:"dropzone-input-container",onClick:e=>e.stopPropagation()}),n.createElement("div",{className:"dropzone-input"},n.createElement("input",h()),n.createElement(s.Z,{body1:!0,textStyle:"dopzone-input-text"}," ",l("dropzone.inputText")," ")),n.createElement(c.Z,{className:"dropzone-btn",onClick:g},l("dropzone.browseFile")),n.createElement("div",{className:"dropzone-warning"},n.createElement(s.Z,{body1:!0,textStyle:"dopzone-warning-text"},l("dropzone.warningText")))),a&&a.length>0?n.createElement("aside",{className:"dropzone-files"},n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.path},n.createElement(s.Z,{body1:!0,black:!0,textStyle:"file-item"}," ",e.path," - ",e.size," ",l("dropzone.fileSizeUnit")," ")))))):null)};var g=e=>{let{title:t,content:a,subContent:l,onDrop:r,listFile:o}=e;return n.createElement("div",{className:"box-square-1"},n.createElement("div",{className:"box-square-2"},n.createElement("div",{className:"box-round"},n.createElement("div",{className:"box-content"},n.createElement("div",{className:"box-up-content"},n.createElement(p,{onDrop:r,listFile:o})),n.createElement("div",{className:"box-down-content"},n.createElement("div",{className:"box-description"},n.createElement(s.Z,{body3:!0,black:!0,textStyle:"title"}," ",t," "),n.createElement(s.Z,{body1:!0,black:!0,textStyle:"content"},n.createElement("span",{dangerouslySetInnerHTML:{__html:a}})),l?n.createElement(s.Z,{body1:!0,black:!0,textStyle:"content"},n.createElement("span",{dangerouslySetInnerHTML:{__html:l}})):null))))))},h=a(648),E=a(9335),f=a(7405),y=(a(6339),a(847)),b=a(370),v=a(4070),x=a.n(v);var S=e=>{let{title:t,titleStyle:a="",boxTitle:c,boxContent:i,boxHtmlContent:d}=e;const{t:u,i18n:p}=(0,o.$)(),[v,S]=n.useState(!1),[N,w]=n.useState(null),[k,Z]=n.useState(null),[_,C]=n.useState(null),[L,z]=n.useState(!1),[I,P]=n.useState(null),M=()=>{z(!1),C(null),w([])},D=(e,t)=>{Z(n.createElement(E.default,{title:e,content:t,onCancel:()=>Z(null)}))},T=e=>{D("Error",e),M()};return n.createElement(n.Fragment,null,n.createElement("div",{className:"upload-sds"},n.createElement(r.Z,{className:"upload-sds-container"},n.createElement(s.Z,{headline1:!0,black:!0,textStyle:`upload-sds-header ${a}`},n.createElement("span",{dangerouslySetInnerHTML:{__html:t||u("home.benefitHeader")}})),n.createElement("div",{className:"upload-sds-box"},n.createElement(g,{title:c||u("home.benefitTitle"),content:i||u("home.benefitContent"),subContent:d||null,onDrop:(e,t)=>{if((null==e?void 0:e.length)<1)return(null==t?void 0:t.length)>0&&D("Fail","No file received"),void((null==t?void 0:t.length)>m.cM&&T(`Maximum ${m.cM} files uploaded`));for(let a=0;a<e.length;a++){if(!(0,b.D0)(e[a]))return void T("Unsupported file type. Only PDF, ZIP and RAR files can be uploaded");if(e[a].size>m.Qu)return void T(`Maximum ${m.CE} MB file size`)}w(e),S(!0)},listFile:N})))),n.createElement(h.Br,{show:v,isDisabled:L,loadingSpinner:_,onCancel:()=>{S(!1),w(null)},onSubmit:e=>{(e=>{const t=(0,b.Lk)();z(!0),C(n.createElement(l.default,{as:"span",animation:"border",variant:"dark",size:"sm",role:"status","aria-hidden":"true"}));const a=(0,b.IF)(x());let r=new FormData;r.append("email",e),r.append("id",t),r.append("country",(0,b.Th)("no")),r.append("lang",p.languages[0]),r.append("ref","upload_sds"),r.append("origination_referral",a.origination_type),r.append("origination_source",a.origination_source),N.map((e=>r.append("sdsfile",e)));let o=m.CZ+"sds-admin/v2/uploadSDSBinder/";(0,y.h)(o,"post",null,r).then((a=>{S(!1),M(),a.file_info&&(0,b.Oc)(a.file_info)?P(n.createElement(f.ZP,{email:e,requestUUID:t,show:!0,res:a,onCancel:()=>P(null),onSuccess:()=>{(0,b.CR)("fp9RCPeS9KkDEOyx5uED")}})):D("Fail","No file received")})).catch((e=>{console.log("error",e),T(e.error_message?e.error_message:e),S(!1)}))})(e)}}),I,k)}},4842:function(e,t,a){var n=a(257),l=a(5414),r=a(3963),o=a(1994),s=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const c={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(s.Z,null,n.createElement(l.q,{titleTemplate:`%s - ${c.title}`,defaultTitle:c.title,meta:[{name:"description",content:c.description},{name:"keywords",content:c.keywords}]}),n.createElement(r.Z,{version:a}),n.createElement("main",null,t),n.createElement(o.Z,null))}},2454:function(e,t,a){a.r(t);var n=a(257),l=a(4842),r=a(4001),o=a(5019),s=a(805),c=a(4574),i=a(6300),m=a(7408),d=a(3639),u=a(994),p=a(7365),g=a(2216);t.default=e=>{const{t:t}=(0,o.$)(),a=[{icon:n.createElement("img",{alt:"Extraction Tool Icon",height:57,src:"https://eukimpul.sirv.com/Images/extraction-tool.png",width:60}),title:t("sdsParser.ExtractionTool"),content:t("sdsParser.IfYouNeedAToolToExtract")},{icon:n.createElement(g.LazyLoadImage,{alt:"Blue Globe Icon",height:60,src:"https://eukimpul.sirv.com/Images/blue-globe.png",width:60}),title:t("sdsParser.25Languages"),content:t("sdsParser.OurSystemDoesAutomatic")},{icon:n.createElement(g.LazyLoadImage,{alt:"API Icon",height:60,src:"https://eukimpul.sirv.com/Images/api.png",width:60}),title:t("sdsParser.API"),content:t("sdsParser.WithOurApiYouCanPass")}];let h=e.pageContext.dir;return["us","no"].includes(h)||(h=p.nr),n.createElement(l.Z,null,n.createElement(r.Z,{title:t("seo.sdsParserApi.title"),description:t("seo.sdsParserApi.description"),canonicalUrl:h+e.pageContext.originalPath}),n.createElement("div",{className:"sds-parser-page"},n.createElement(i.Z,{title:t("sdsParser.AutomaticOnlineDataExtractionFromSafetyDataSheets"),titleStyle:"sds-parser-api-page-header-title",style:"sds-parser-api-page-header",containerStyle:"sds-parser-api-page-header-container"}),n.createElement("div",{className:"sds-parser-api-feature"},n.createElement(d.Z,null,n.createElement(u.Z,{className:"sds-parser-item-row"},a.map(((e,t)=>n.createElement(m.Z,{className:"sds-parser-item-col",key:t,lg:4,md:6,sm:12,xs:12},n.createElement("div",{className:"sds-parser-api-item"},e.icon,n.createElement("h2",null," ",e.title," "),n.createElement("p",null," ",e.content," ")))))))),n.createElement(g.LazyLoadComponent,null,n.createElement(s.Z,{title:t("sdsParser.ALiveDemoTells"),boxTitle:t("sdsParser.benefitTitle"),boxContent:t("sdsParser.benefitContent"),boxHtmlContent:t("sdsParser.benefitContent1")})),n.createElement(g.LazyLoadComponent,null,n.createElement(c.Z,{title:t("sdsParser.WouldYouLikeToKnow"),titleStyle:"sds-parser-api-contact"}))))}}}]);