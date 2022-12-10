"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[642,408],{4653:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),c=a(5697),o=a.n(c),s=a(1312);const i={type:o().string,tooltip:o().bool,as:o().elementType},m=r.forwardRef(((e,t)=>{let{as:a="div",className:n,type:r="valid",tooltip:c=!1,...o}=e;return(0,s.tZ)(a,{...o,ref:t,className:l()(n,`${r}-${c?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=i,t.Z=m},4709:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),c=a(8788),o=a(9541),s=a(1312);const i=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:i,type:m="checkbox",isValid:u=!1,isInvalid:d=!1,as:p="input",...g}=e;const{controlId:h}=(0,r.useContext)(c.Z);return n=(0,o.vE)(n,"form-check-input"),(0,s.tZ)(p,{...g,ref:t,type:m,id:a||h,className:l()(i,n,u&&"is-valid",d&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),c=(a(2473),a(4653)),o=a(8788),s=a(9541),i=a(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:c,htmlSize:m,id:u,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:h,readOnly:f,as:y="input",...E}=e;const{controlId:b}=(0,r.useContext)(o.Z);let x;return a=(0,s.vE)(a,"form-control"),x=h?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${c}`]:c},(0,i.tZ)(y,{...E,type:n,size:m,ref:t,readOnly:f,id:u||b,className:l()(d,x,p&&"is-valid",g&&"is-invalid","color"===n&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:c.Z})},6722:function(e,t,a){var n=a(257),l=a(7408),r=a(6187),c=a(994),o=a(2984),s=a(5019),i=a(2216),m=a(4627),u=a(9874),d=a(7018),p=a(8304),g=a(4070),h=a.n(g);const f=(0,n.lazy)((()=>a.e(885).then(a.t.bind(a,3720,23)))),y=e=>{let{links:t,title:a}=e;const{t:l}=(0,s.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,r[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(o.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=n.useState(!1),{country:g}=(0,d.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(p.xz,{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),h().init(),console.log("Sbjs: ",null===h()||void 0===h()||null===(e=h().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(r.Z,null,n.createElement(c.Z,{className:"footer-inner"},n.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(y,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(y,{title:e("Solutions"),links:"solution"})),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(y,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===g?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===g?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(g)?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(r.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(o.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(o.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(u.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(f,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},6707:function(e,t,a){var n=a(257),l=a(5019),r=a(6187),c=a(5305),o=a(7018),s=a(8304);t.Z=()=>{const{originalPath:e}=(0,o.l)(),{t:t}=(0,l.$)(),[a,i]=n.useState(!1),[m,u]=n.useState(null);return n.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("popup"),a=e.get("subscription_plan"),n=e.get("ref");a&&u(a),"setup-account"===t&&"get-free-access"===n&&i(!0)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"get-free-trial-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},n.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},n.createElement("h2",{className:"display-4 get-your-free-trial"},t("Get Your Free Trial Today")),n.createElement("a",{className:"btn yellow-btn",href:"#",onClick:()=>{u("free"),i(!0)}},t("Get Free Access")))),a&&n.createElement(c.XL,{plan:m,show:a,onCancel:()=>{i(!1)},needCompanyWebsite:!1,service:"sds_inventory",custom_type:s.BV.WELCOME_NEW_USER,redirect_url:e,pageRef:"get-free-access"}))}},5818:function(e,t,a){var n=a(257),l=a(5019),r=a(6187);t.Z=e=>{let{headline:t,headlineStyle:a="",title:c,titleStyle:o="",content:s,contentStyle:i="",containerStyle:m="",style:u="",readMoreUrl:d}=e;const{t:p}=(0,l.$)();return n.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${u}`},n.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},n.createElement("p",{className:`lead ${a}`}," ",t," "),n.createElement("h1",{dangerouslySetInnerHTML:{__html:c},className:`page-header-title ${o}`}),n.createElement("div",{dangerouslySetInnerHTML:{__html:s},className:`page-header-text ${i}`}),d&&n.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",p("Read More")," ")))}},7825:function(e,t,a){var n=a(257),l=a(5414),r=a(9178),c=a(6722),o=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(o.Z,null,n.createElement(l.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),n.createElement(r.Z,{version:a}),n.createElement("main",null,t),n.createElement(c.Z,null))}},4329:function(e,t,a){function n(e,t,a,n,l){return new Promise(((r,c)=>{const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(4===o.readyState){let t;switch(o.status){case 200:try{t=JSON.parse(o.responseText)}catch(e){t=o.status}r(t);break;case 201:try{t=JSON.parse(o.responseText)}catch(e){t=o.status}r(t);break;case 400:case 401:case 403:case 409:case 290:case 490:case 500:try{t=JSON.parse(o.responseText),t.status=o.status}catch(e){t="Server currently under maintenance, please try again later."}break;default:t="Server currently under maintenance, please try again later."}c(t)}},o.open(t,e,!0),l&&o.setRequestHeader("Authorization","JWT "+l),n?o.send(n):(o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.send(JSON.stringify(a)))}))}a.d(t,{h:function(){return n}})},8782:function(e,t,a){a.r(t);var n=a(257),l=a(5019),r=a(6187),c=a(994),o=a(7408),s=a(3932),i=a(6594),m=a(3114),u=a(7700),d=a(5818),p=a(7825),g=a(6707),h=a(3586),f=a(4329),y=a(4627),E=a(7018),b=a(6222),x=a(9874),N=a(8304),v=a(5444);const w=(0,n.lazy)((()=>Promise.resolve().then(a.bind(a,8427))));t.default=e=>{const{t:t}=(0,l.$)(),{geoCountry:a,changeGeoCountry:Z,country:S}=(0,E.l)(),[k,P]=n.useState(a||"no"),[C,L]=n.useState(null),[_,U]=n.useState([]),[$,I]=n.useState(!1);n.useEffect((()=>{a||fetch(N.xz,{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&(P(t),Z(t))})).catch((e=>{}))}),[]);const z=[n.createElement("script",{type:"application/ld+json",key:"0"},JSON.stringify({"@context":"https://schema.org","@type":"ContactPage",name:"SdsManager –Contact Us",url:"https://sdsmanager.com"+e.location.pathname}))];let M=e.pageContext.dir;return["us","no"].includes(M)||(M=b.nr),n.createElement(p.Z,null,n.createElement(u.Z,{title:t("contactUs"),microData:z,canonicalUrl:M+e.pageContext.originalPath}),n.createElement("div",{className:"contact-us-page"},n.createElement(d.Z,{title:"us"===S?`${t("contactUsPage.Give us a shout")}\n              <p style='font-size:16px; display: flex; align-items: center;justify-content: center;'>\n                <img\n                    alt='phonenumber'\n                    height=16\n                    src='/icons/phone-icon.png'\n                    width=16\n                    style='margin:0;margin-right:5px'\n                />\n                <a href="tel:+12523709657" style='color:white; text-decoration: none;font-weight: 400'>+1 252 370 9657</a>\n              </p>`:"no"===S?`${t("contactUsPage.Give us a shout")}\n              <p style='font-size:16px; display: flex; align-items: center;justify-content: center;'>\n                <img\n                  alt='phonenumber'\n                  height=16\n                  src='/icons/phone-icon.png'\n                  width=16\n                  style='margin:0;margin-right:5px'\n                />\n                <a href="tel:+4723507478" style='color:white; text-decoration: none;font-weight: 400'>+47 23 50 74 78</a>\n              </p>`:-1!==["uk","eu"].indexOf(S)?`${t("contactUsPage.Give us a shout")}\n            <p style='font-size:16px; display: flex; align-items: center;justify-content: center;'>\n                <img\n                    alt='phonenumber'\n                    height=16\n                    src='/icons/phone-icon.png'\n                    width=16\n                    style='margin:0;margin-right:5px'\n                />\n                <a href="tel:+442039361240"  style='color:white; text-decoration: none;font-weight: 400'>+44 20 3936 1240</a>\n            </p>`:t("contactUsPage.Give us a shout")}),n.createElement("div",{className:"contact-form-section"},n.createElement(r.Z,null,n.createElement(s.Z,{noValidate:!0,onSubmit:e=>{if(e.preventDefault(),!(e=>{let a=!0;const n=[];0==(0,y.gK)(e.target.first_name.value).length&&(n.push(t("contactUsPage.FirstNameCanNotBeEmpty")),a=!1),0==(0,y.gK)(e.target.last_name.value).length&&(n.push(t("contactUsPage.LastNameCanNotBeEmpty")),a=!1),0==(0,y.gK)(e.target.email.value).length?(n.push(t("EmailCanNotBeEmpty")),a=!1):(0,y.oH)(e.target.email.value)||(n.push(t("EmailIsInvalid")),a=!1);const l=e.target.phone_number.value;return l.length>1&&isNaN(Number(l))&&(n.push(t("signUpModal.PhoneNumberIsInvalid")),a=!1),0==(0,y.gK)(e.target.body.value).length&&(n.push(t("contactUsPage.MessageCanNotBeEmpty")),a=!1),U(n),a})(e))return;U([]),I(!0);let a=N.CZ+"api/submitMessage/contactUs/";const l={first_name:e.target.first_name.value,last_name:e.target.last_name.value,email:e.target.email.value,country:k.toLowerCase(),website:e.target.website.value,phone_number:e.target.phone_number.value,company:e.target.company.value,language:h.ZP.language,body:e.target.body.value};(0,f.h)(a,"post",l).then((e=>{console.log("res",e),(0,y.CR)("toqTCISq7qsDEOyx5uED"),I(!1),(0,v.c4)("/thank-you")})).catch((e=>{I(!1),L(n.createElement(w,{title:"Error",content:e,onCancel:()=>L(null)}))}))}},n.createElement(c.Z,{className:"justify-content-md-center"},n.createElement(o.Z,{md:3,className:"mb-3 "},n.createElement(s.Z.Label,{className:"form-input-text"}," ",`${t("contactUsPage.First Name")}*`," "),n.createElement(s.Z.Control,{maxLength:100,name:"first_name",className:"form-input-text",type:"text",placeholder:t("contactUsPage.inputPlaceHolder1")})),n.createElement(o.Z,{md:3,className:"mb-3 "},n.createElement(s.Z.Label,{className:"form-input-text"}," ",`${t("contactUsPage.Last Name")}*`," "),n.createElement(s.Z.Control,{maxLength:100,name:"last_name",className:"form-input-text",type:"text",placeholder:t("contactUsPage.inputPlaceHolder2")}))),n.createElement(c.Z,{className:"justify-content-md-center"},n.createElement(o.Z,{md:3,className:"mb-3 "},n.createElement(s.Z.Label,{className:"form-input-text"}," ",`${t("contactUsPage.Email")}*`," "),n.createElement(s.Z.Control,{maxLength:100,name:"email",className:"form-input-text",type:"email",placeholder:t("signUpModal.name@company.com")})),n.createElement(o.Z,{md:3,className:"mb-3 "},n.createElement(s.Z.Label,{className:"form-input-text"}," ",t("contactUsPage.Phone Number")," "),n.createElement(s.Z.Control,{maxLength:50,name:"phone_number",className:"form-input-text",type:"text",placeholder:`${t("contactUsPage.inputPlaceHolder3")}`}))),n.createElement(c.Z,{className:"justify-content-md-center"},n.createElement(o.Z,{md:3,className:"mb-3 "},n.createElement(s.Z.Label,{className:"form-input-text"}," ",t("contactUsPage.Website")," "),n.createElement(s.Z.Control,{maxLength:100,name:"website",className:"form-input-text",type:"text",placeholder:`${t("contactUsPage.inputPlaceHolder4")}`})),n.createElement(o.Z,{md:3,className:"mb-3 "},n.createElement(s.Z.Label,{className:"form-input-text"}," ",t("contactUsPage.Company")," "),n.createElement(s.Z.Control,{maxLength:100,name:"company",className:"form-input-text",type:"text",placeholder:`${t("contactUsPage.inputPlaceHolder5")}`}))),n.createElement(c.Z,{className:"mb-3 justify-content-md-center"},n.createElement(o.Z,{md:6},n.createElement(s.Z.Label,{className:"form-input-text"}," ",`${t("contactUsPage.What can we do for your?")}*`," "),n.createElement(s.Z.Control,{maxLength:1e3,name:"body",as:"textarea",placeholder:`${t("contactUsPage.inputPlaceHolder6")}`,style:{height:"100px"}}))),n.createElement("div",null,_.map(((e,t)=>n.createElement("div",{key:t,className:"form-feedbacks"},e)))),n.createElement("div",{className:"mb-3 text-center"},n.createElement(i.Z,{type:"submit",className:"submit-btn"},`${t("contactUsPage.SEND IT")}`,$?n.createElement(m.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null))))),n.createElement(g.Z,null)),n.createElement(x.Z,null,C))}}}]);
//# sourceMappingURL=component---src-pages-contact-us-tsx-44658102c3276be676a7.js.map