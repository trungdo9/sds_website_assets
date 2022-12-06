"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[981,408,114],{4653:function(e,t,a){var r=a(5900),n=a.n(r),l=a(257),o=a(5697),c=a.n(o),s=a(1312);const i={type:c().string,tooltip:c().bool,as:c().elementType},m=l.forwardRef(((e,t)=>{let{as:a="div",className:r,type:l="valid",tooltip:o=!1,...c}=e;return(0,s.tZ)(a,{...c,ref:t,className:n()(r,`${l}-${o?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=i,t.Z=m},4709:function(e,t,a){var r=a(5900),n=a.n(r),l=a(257),o=a(8788),c=a(9541),s=a(1312);const i=l.forwardRef(((e,t)=>{let{id:a,bsPrefix:r,className:i,type:m="checkbox",isValid:u=!1,isInvalid:d=!1,as:p="input",...g}=e;const{controlId:f}=(0,l.useContext)(o.Z);return r=(0,c.vE)(r,"form-check-input"),(0,s.tZ)(p,{...g,ref:t,type:m,id:a||f,className:n()(i,r,u&&"is-valid",d&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const r=a(257).createContext({});t.Z=r},1760:function(e,t,a){var r=a(5900),n=a.n(r),l=a(257),o=(a(2473),a(4653)),c=a(8788),s=a(9541),i=a(1312);const m=l.forwardRef(((e,t)=>{let{bsPrefix:a,type:r,size:o,htmlSize:m,id:u,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:f,readOnly:h,as:E="input",...b}=e;const{controlId:y}=(0,l.useContext)(c.Z);let N;return a=(0,s.vE)(a,"form-control"),N=f?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${o}`]:o},(0,i.tZ)(E,{...b,type:r,size:m,ref:t,readOnly:h,id:u||y,className:n()(d,N,p&&"is-valid",g&&"is-invalid","color"===r&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:o.Z})},3114:function(e,t,a){a.r(t);var r=a(5900),n=a.n(r),l=a(257),o=a(9541),c=a(1312);const s=l.forwardRef(((e,t)=>{let{bsPrefix:a,variant:r,animation:l,size:s,as:i="div",className:m,...u}=e;a=(0,o.vE)(a,"spinner");const d=`${a}-${l}`;return(0,c.tZ)(i,{ref:t,...u,className:n()(m,d,s&&`${d}-${s}`,r&&`text-${r}`)})}));s.displayName="Spinner",t.default=s},6722:function(e,t,a){var r=a(257),n=a(7408),l=a(6187),o=a(994),c=a(2984),s=a(5019),i=a(2216),m=a(4627),u=a(9874),d=a(7018),p=a(8304),g=a(4070),f=a.n(g);const h=(0,r.lazy)((()=>a.e(885).then(a.t.bind(a,3720,23)))),E=e=>{let{links:t,title:a}=e;const{t:n}=(0,s.$)(),l={SdsManager:[{label:n("footer.footerText")}],company:[{label:n("About Us"),url:"/about-us/"},{label:n("Partner Program"),url:"/partner-program/"},{label:n("contactUs"),url:"/contact-us/"}],solution:[{label:n("SdsInventoryManagement"),url:"/"},{label:n("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:n("authoring_creation"),url:"/sds-author/"},{label:n("data_extraction_parsing"),url:"/sds-parser-api/"},{label:n("safety_data_sheet_database"),url:"/search/"}],contact:[{label:n("contactUs"),url:"/contact-us/"},{label:n("footer.footerCompany")},{label:n("footer.footerAddress")}]};return r.createElement("div",{className:"col-inner"},r.createElement("p",{className:"col-heading"},a),r.createElement("ul",null,l[t].map(((e,t)=>e.url?r.createElement("li",{key:t},r.createElement(c.Z,{to:e.url,title:e.label},e.label)):r.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=r.useState(!1),{country:g}=(0,d.l)();return r.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(p.xz,{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),f().init(),console.log("Sbjs: ",null===f()||void 0===f()||null===(e=f().get)||void 0===e?void 0:e.current))}),[]),r.createElement("div",{className:"footer-section-v2"},r.createElement(l.Z,null,r.createElement(o.Z,{className:"footer-inner"},r.createElement(n.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},r.createElement("div",{className:"d-flex footer-info"},r.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),r.createElement(E,{title:e("SdsMangerAs"),links:"SdsManager"}))),r.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},r.createElement(E,{title:e("Solutions"),links:"solution"})),r.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},r.createElement(E,{title:e("Company"),links:"company"}),r.createElement("div",{className:"col-inner"},r.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),r.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===g?r.createElement("p",{className:"phonenumber-text"},r.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),r.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===g?r.createElement("p",{className:"phonenumber-text"},r.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),r.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(g)?r.createElement("p",{className:"phonenumber-text"},r.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),r.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),r.createElement("div",{className:"bottom-footer"},r.createElement(l.Z,null,r.createElement("div",{className:"bottom-footer-inner"},r.createElement("div",{className:"col-left"},r.createElement(c.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),r.createElement(c.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),r.createElement("div",{className:"social-link"},r.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},r.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),r.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},r.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),r.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},r.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),r.createElement("div",null,r.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&r.createElement(u.Z,null,r.createElement("div",{className:"cookie-consent"},r.createElement(h,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},5818:function(e,t,a){var r=a(257),n=a(5019),l=a(6187);t.Z=e=>{let{headline:t,headlineStyle:a="",title:o,titleStyle:c="",content:s,contentStyle:i="",containerStyle:m="",style:u="",readMoreUrl:d}=e;const{t:p}=(0,n.$)();return r.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${u}`},r.createElement(l.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},r.createElement("p",{className:`lead ${a}`}," ",t," "),r.createElement("h1",{dangerouslySetInnerHTML:{__html:o},className:`page-header-title ${c}`}),r.createElement("div",{dangerouslySetInnerHTML:{__html:s},className:`page-header-text ${i}`}),d&&r.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",p("Read More")," ")))}},1804:function(e,t,a){var r=a(257);t.Z=function(e){const{title1:t,title2:a,title3:n,headline1:l,headline2:o,headline3:c,body1:s,body2:i,body3:m,black:u,dark:d,primary:p,light:g,grey:f,lightGrey:h,darkGrey:E,white:b,yellow:y,decoration:N,textStyle:v,children:Z}=e;let S="";return t&&(S=S.concat("title1 ")),a&&(S=S.concat("title2 ")),n&&(S=S.concat("title3 ")),l&&(S=S.concat("headline1 ")),o&&(S=S.concat("headline2 ")),c&&(S=S.concat("headline3 ")),s&&(S=S.concat("body1 ")),i&&(S=S.concat("body2 ")),m&&(S=S.concat("body3 ")),u&&(S=S.concat("black ")),d&&(S=S.concat("dark ")),p&&(S=S.concat("primary ")),g&&(S=S.concat("light ")),f&&(S=S.concat("grey ")),h&&(S=S.concat("light-grey ")),E&&(S=S.concat("dark-grey ")),b&&(S=S.concat("white ")),y&&(S=S.concat("yellow ")),N&&(S=S.concat("decoration ")),v&&(S=S.concat(v)),r.createElement("span",{className:"text-component"},r.createElement("p",{className:S},Z))}},7825:function(e,t,a){var r=a(257),n=a(5414),l=a(9178),o=a(6722),c=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return r.createElement(c.Z,null,r.createElement(n.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),r.createElement(l.Z,{version:a}),r.createElement("main",null,t),r.createElement(o.Z,null))}},4856:function(e,t,a){var r=a(257),n=a(5019),l=a(8203),o=a(3932),c=a(6594),s=a(3114),i=a(5444);t.Z=e=>{let{show:t,title:a,loading:m=!1,onSubmit:u,onCancel:d}=e;const{t:p}=(0,n.$)(),[g,f]=r.useState(""),[h,E]=r.useState(""),[b,y]=r.useState(""),[N,v]=r.useState(""),[Z,S]=r.useState(""),[x,C]=r.useState(null),[k,P]=r.useState(""),w=(0,i.K2)("2695443777").allCountryCodeJson.nodes;return r.createElement(l.Z,{size:"lg",dialogClassName:"partner-modal-container",centered:!0,show:t,onHide:d},r.createElement(l.Z.Header,{className:"partner-modal-header",closeButton:!0}),r.createElement("div",{className:"partner-modal"},r.createElement("div",{className:"partner-modal-title"},p("partnerModal.title"),r.createElement("span",{className:"partner-modal-title-text"}," ",a," ")),r.createElement("div",{className:"partner-modal-content"},r.createElement(o.Z,{onSubmit:e=>{e.preventDefault();const t={full_name:g,email:h,phone:b,company:N,job_title:Z,country:void 0!==x?x.short_name:"en",business:k};u(t),f(""),E(""),y(""),v(""),S(""),C(null),P("")}},r.createElement(o.Z.Group,{className:"form-input-container",controlId:"fullName"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel1"),"*"," "),r.createElement(o.Z.Control,{maxLength:100,onChange:e=>{f(e.target.value)},value:g,className:"form-input-text",type:"text",required:!0,placeholder:p("partnerModal.inputPlaceHolder1")})),r.createElement(o.Z.Group,{className:"form-input-container",controlId:"email"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel2"),"*"," "),r.createElement(o.Z.Control,{maxLength:100,onChange:e=>{E(e.target.value)},value:h,className:"form-input-text",type:"email",required:!0,placeholder:p("partnerModal.inputPlaceHolder2")})),r.createElement(o.Z.Group,{className:"form-input-container",controlId:"phoneNumber"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel3"),"*"," "),r.createElement(o.Z.Control,{maxLength:50,onChange:e=>{y(e.target.value)},value:b,className:"form-input-text",type:"text",required:!0,placeholder:p("partnerModal.inputPlaceHolder3")})),r.createElement(o.Z.Group,{className:"form-input-container",controlId:"companyName"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel4"),"*"," "),r.createElement(o.Z.Control,{maxLength:100,onChange:e=>{v(e.target.value)},value:N,className:"form-input-text",type:"text",required:!0,placeholder:p("partnerModal.inputPlaceHolder4")})),r.createElement(o.Z.Group,{className:"form-input-container",controlId:"jobTitle"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel5"),"*"," "),r.createElement(o.Z.Control,{maxLength:100,onChange:e=>{S(e.target.value)},value:Z,className:"form-input-text",type:"text",required:!0,placeholder:p("partnerModal.inputPlaceHolder5")})),r.createElement(o.Z.Group,{className:"form-input-container",controlId:"industry"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel6"),"*"," "),r.createElement(o.Z.Select,{onChange:e=>{C(w[e.target.value])},defaultValue:"",required:!0,className:"form-input-text"},r.createElement("option",{value:""}," ",p("demoModal.Select")," "),w.map(((e,t)=>r.createElement("option",{value:t,key:t}," ",e.name," "))))),r.createElement(o.Z.Group,{className:"form-input-container",controlId:"business"},r.createElement(o.Z.Label,{className:"form-input-label"}," ",p("partnerModal.inputLabel7"),"*"," "),r.createElement(o.Z.Control,{maxLength:100,onChange:e=>{P(e.target.value)},value:k,className:"form-input-text",type:"text",required:!0,placeholder:p("partnerModal.inputPlaceHolder7")})),r.createElement("div",{className:"form-input-text"}," ",p("partnerModal.footer")," "),r.createElement(o.Z.Group,{controlId:"agreement"},r.createElement(o.Z.Check,{className:"form-input-text form-agreement",type:"checkbox",required:!0,label:p("partnerModal.agreement")})),r.createElement(c.Z,{type:"submit",className:"form-input-button"},p("partnerModal.submitBtn"),m?r.createElement(s.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)))))}},4329:function(e,t,a){function r(e,t,a,r,n){return new Promise(((l,o)=>{const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(4===c.readyState){let t;switch(c.status){case 200:try{t=JSON.parse(c.responseText)}catch(e){t=c.status}l(t);break;case 201:try{t=JSON.parse(c.responseText)}catch(e){t=c.status}l(t);break;case 400:case 401:case 403:case 409:case 290:case 490:case 500:try{t=JSON.parse(c.responseText),t.status=c.status}catch(e){t="Server currently under maintenance, please try again later."}break;default:t="Server currently under maintenance, please try again later."}o(t)}},c.open(t,e,!0),n&&c.setRequestHeader("Authorization","JWT "+n),r?c.send(r):(c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.send(JSON.stringify(a)))}))}a.d(t,{h:function(){return r}})},1890:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var r=a(257),n=a(7825),l=a(7700),o=a(5019),c=a(5818),s=a(6187),i=a(6594),m=a(1804),u=a(4329),d=a(5133),p=a(4627),g=a(9874),f=a(4856);const h=(0,r.lazy)((()=>a.e(921).then(a.bind(a,8427))));var E=()=>{const{t:e}=(0,o.$)(),[t,a]=r.useState(!1),[n,l]=r.useState(null),[c,E]=r.useState(!1),b=[{icon:r.createElement("img",{className:"affiliate-item-img",src:"/icons/Sound.png",alt:"Sound Icon"}),title:e("partnerProgram.affiliateIcon1"),content:e("partnerProgram.affiliateContent1")},{icon:r.createElement("img",{className:"affiliate-item-img",src:"/icons/CheckNote.png",alt:"Check Note Icon"}),title:e("partnerProgram.affiliateIcon2"),content:e("partnerProgram.affiliateContent2")},{icon:r.createElement("img",{className:"affiliate-item-img",src:"/icons/Coin.png",alt:"Coin Icon"}),title:e("partnerProgram.affiliateIcon3"),content:e("partnerProgram.affiliateContent3")}];return r.createElement(r.Fragment,null,r.createElement("div",{className:"affiliate-background"},r.createElement(s.Z,null,r.createElement("div",{className:"affiliate"},r.createElement("div",{className:"affiliate-title-container"},r.createElement("div",{className:"affiliate-title"}," ",e("partnerProgram.affiliateTitle")," "),r.createElement("div",{className:"affiliate-subtitle"}," ",e("partnerProgram.affiliateSubTitle")," ")),r.createElement("div",{className:"affiliate-icon-list"},b.map(((e,t)=>r.createElement("div",{key:t,className:"affiliate-item"},e.icon,r.createElement("div",{className:"affiliate-item-title"}," ",e.title," "),r.createElement("div",{className:"affiliate-item-content"}," ",e.content," "))))),r.createElement("div",{className:"affiliate-footer-container"},r.createElement(m.Z,{headline3:!0,textStyle:"affiliate-footer"},e("partnerProgram.affiliateFooter"))),r.createElement("div",{className:"affiliate-btn-container"},r.createElement(i.Z,{onClick:()=>{a(!0)},className:"affiliate-btn"}," ",e("partnerProgram.applyNow")," "))))),r.createElement(g.Z,null,r.createElement(f.Z,{loading:c,show:t,title:e("partnerModal.affiliate"),onSubmit:t=>{(t=>{E(!0);let n="https://admin55.sdsmanager.com/";n+="api/submitMessage/joinProgram/";let o=(e=>{let t=[];return 0===e.full_name.length&&t.push("Full name is required"),0===e.email.length&&t.push("Full email is required"),0===e.phone.length&&t.push("Phone number is required"),0===e.company.length&&t.push("Company name is required"),0===e.job_title.length&&t.push("Job title is required"),0===e.business.length&&t.push("Job title is required"),t})(t=(0,p.xN)(t));if(o.length>0)return void l(r.createElement(h,{title:"Error",content:o.join(", "),onCancel:()=>l(null)}));const c={...t,program:"Affiliate",language:d.ZP.language};(0,u.h)("https://admin55.sdsmanager.com/api/submitMessage/joinProgram/","post",c).then((t=>{E(!1),a(!1),l(r.createElement(h,{title:e("success"),content:e("partnerProgram.successMessage"),onCancel:()=>l(null)}))})).catch((e=>{E(!1),l(r.createElement(h,{title:"Error",content:e.message?e.message:e,onCancel:()=>l(null)}))}))})(t)},onCancel:()=>{a(!1)}})),r.createElement(g.Z,null,n))},b=a(994),y=a(7408);var N=e=>{let{list:t,bulletHref:a,containerStyle:n="",textStyle:l="",bulletStyle:o=""}=e;return r.createElement("div",{className:`bullet-list ${n}`},r.createElement(b.Z,{xs:1,sm:1,md:1,lg:2},t.map(((e,t)=>r.createElement(y.Z,{key:t},r.createElement("div",{className:"bullet-list-item"},r.createElement("img",{src:a,className:`bullet-list-icon ${o}`,alt:"Bullet Icon"}),r.createElement(m.Z,{body3:!0,black:!0,textStyle:`${l}`}," ",e," ")))))))};const v=(0,r.lazy)((()=>a.e(921).then(a.bind(a,8427))));var Z=()=>{const{t:e}=(0,o.$)(),[t,a]=r.useState(!1),[n,l]=r.useState(null),[c,p]=r.useState(!1),h=[e("partnerProgram.referralContent1"),e("partnerProgram.referralContent2"),e("partnerProgram.referralContent3"),e("partnerProgram.referralContent4"),e("partnerProgram.referralContent5"),e("partnerProgram.referralContent6"),e("partnerProgram.referralContent7"),e("partnerProgram.referralContent8")];return r.createElement(r.Fragment,null,r.createElement("div",{className:"referral-program-background"},r.createElement(s.Z,null,r.createElement("div",{className:"referral-program"},r.createElement("div",{className:"referral-program-title-container"},r.createElement(m.Z,{headline1:!0,black:!0,textStyle:"referral-program-title"}," ",e("partnerProgram.referralTitle")," ")),r.createElement(N,{list:h,bulletHref:"/icons/Bullet.png",bulletStyle:"referral-program-bullet",textStyle:"referral-program-content"}),r.createElement("div",{className:"referral-program-btn-container"},r.createElement(i.Z,{onClick:()=>{a(!0)},className:"referral-program-btn"}," ",e("partnerProgram.applyNow")," "))))),r.createElement(g.Z,null,r.createElement(f.Z,{loading:c,show:t,onSubmit:t=>{(t=>{p(!0);let n="https://admin55.sdsmanager.com/";n+="api/submitMessage/joinProgram/";const o={...t,program:"Refferal- program",language:d.ZP.language};(0,u.h)("https://admin55.sdsmanager.com/api/submitMessage/joinProgram/","post",o).then((t=>{p(!1),a(!1),l(r.createElement(v,{title:e("success"),content:e("partnerProgram.successMessage"),onCancel:()=>l(null)}))})).catch((e=>{p(!1),l(r.createElement(v,{title:"Error",content:e.message?e.message:e,onCancel:()=>l(null)}))}))})(t)},title:e("partnerModal.referralPartner"),onCancel:()=>{a(!1)}})),r.createElement(g.Z,null,n))};const S=(0,r.lazy)((()=>a.e(921).then(a.bind(a,8427))));var x=()=>{const{t:e}=(0,o.$)(),[t,a]=r.useState(!1),[n,l]=r.useState(null),[c,p]=r.useState(!1),h=[e("partnerProgram.resellerContent1"),e("partnerProgram.resellerContent2"),e("partnerProgram.resellerContent3"),e("partnerProgram.resellerContent4"),e("partnerProgram.resellerContent5"),e("partnerProgram.resellerContent6")];return r.createElement(r.Fragment,null,r.createElement("div",{className:"reseller-program-background"},r.createElement(s.Z,null,r.createElement("div",{className:"reseller-program"},r.createElement("div",{className:"reseller-program-title-container"},r.createElement(m.Z,{headline1:!0,black:!0,textStyle:"reseller-program-title"}," ",e("partnerProgram.resellerTitle")," ")),r.createElement(N,{list:h,bulletHref:"/icons/Bullet.png",bulletStyle:"reseller-program-bullet",textStyle:"reseller-program-content"}),r.createElement("div",{className:"reseller-program-btn-container"},r.createElement(i.Z,{onClick:()=>{a(!0)},className:"reseller-program-btn"}," ",e("partnerProgram.applyNow")," "))))),r.createElement(g.Z,null,r.createElement(f.Z,{loading:c,show:t,title:e("partnerModal.partnerProgram"),onSubmit:t=>{(t=>{p(!0);let n="https://admin55.sdsmanager.com/";n+="api/submitMessage/joinProgram/";const o={...t,program:"Partner-program",language:d.ZP.language};(0,u.h)("https://admin55.sdsmanager.com/api/submitMessage/joinProgram/","post",o).then((t=>{p(!1),a(!1),l(r.createElement(S,{title:e("success"),content:e("partnerProgram.successMessage"),onCancel:()=>l(null)}))})).catch((e=>{p(!1),l(r.createElement(S,{title:"Error",content:e.message?e.message:e,onCancel:()=>l(null)}))}))})(t)},onCancel:()=>{a(!1)}})),r.createElement(g.Z,null,n))},C=a(6222);var k=e=>{const{t:t}=(0,o.$)();let a=e.pageContext.dir;return["us","no"].includes(a)||(a=C.nr),r.createElement(n.Z,null,r.createElement(l.Z,{title:t("Partner Program"),canonicalUrl:a+e.pageContext.originalPath}),r.createElement("div",{className:"partner-program"},r.createElement(c.Z,{headline:t("partnerProgram.headline"),headlineStyle:"partner-program-headeline",title:t("partnerProgram.title"),content:t("partnerProgram.subTitle")}),r.createElement(E,null),r.createElement(Z,null),r.createElement(x,null)))}}}]);
//# sourceMappingURL=component---src-pages-partner-program-tsx-69b5d894c19066c2fc84.js.map