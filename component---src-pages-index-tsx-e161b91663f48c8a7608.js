"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[6691,2413],{4653:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),o=a(5697),i=a.n(o),s=a(1312);const c={type:i().string,tooltip:i().bool,as:i().elementType},m=r.forwardRef(((e,t)=>{let{as:a="div",className:n,type:r="valid",tooltip:o=!1,...i}=e;return(0,s.tZ)(a,{...i,ref:t,className:l()(n,`${r}-${o?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=c,t.Z=m},4709:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),o=a(8788),i=a(9541),s=a(1312);const c=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:c,type:m="checkbox",isValid:d=!1,isInvalid:g=!1,as:u="input",...h}=e;const{controlId:p}=(0,r.useContext)(o.Z);return n=(0,i.vE)(n,"form-check-input"),(0,s.tZ)(u,{...h,ref:t,type:m,id:a||p,className:l()(c,n,d&&"is-valid",g&&"is-invalid")})}));c.displayName="FormCheckInput",t.Z=c},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),o=(a(2473),a(4653)),i=a(8788),s=a(9541),c=a(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:o,htmlSize:m,id:d,className:g,isValid:u=!1,isInvalid:h=!1,plaintext:p,readOnly:y,as:b="input",...E}=e;const{controlId:f}=(0,r.useContext)(i.Z);let v;return a=(0,s.vE)(a,"form-control"),v=p?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${o}`]:o},(0,c.tZ)(b,{...E,type:n,size:m,ref:t,readOnly:y,id:d||f,className:l()(g,v,u&&"is-valid",h&&"is-invalid","color"===n&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:o.Z})},6722:function(e,t,a){var n=a(257),l=a(7408),r=a(6187),o=a(994),i=a(2984),s=a(5019),c=a(2216),m=a(4627),d=a(9874),g=a(7018),u=a(8304),h=a(4070),p=a.n(h);const y=(0,n.lazy)((()=>a.e(2885).then(a.t.bind(a,3720,23)))),b=e=>{let{links:t,title:a}=e;const{t:l}=(0,s.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,r[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(i.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=n.useState(!1),{country:h}=(0,g.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(u.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),p().init(),console.log("Sbjs: ",null===p()||void 0===p()||null===(e=p().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(r.Z,null,n.createElement(o.Z,{className:"footer-inner"},n.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(c.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(b,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(b,{title:e("Solutions"),links:"solution"})),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(b,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===h?n.createElement("p",{className:"phonenumber-text"},n.createElement(c.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===h?n.createElement("p",{className:"phonenumber-text"},n.createElement(c.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(h)?n.createElement("p",{className:"phonenumber-text"},n.createElement(c.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(r.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(i.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(i.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(c.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(c.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(c.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(d.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(y,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},1626:function(e,t,a){var n=a(257),l=a(7408),r=a(994),o=a(2216);t.Z=e=>{let{leftContent:t=null,rightContent:a=null,index:i,leftContentStyle:s="",rightContentStyle:c="",header:m=null,imgSrc:d=null,body:g=null,qrLink:u}=e;const h=()=>{window.open(u,"_blank")};return n.createElement("div",{className:"home-box"},n.createElement(r.Z,{className:"home-box-row"},n.createElement(l.Z,{xl:6,sm:12,xs:12,className:i%2==0?`home-box-white ${s}`:`home-box-grey ${s}`,style:{cursor:u&&s?"pointer":"default"},onClick:u&&s?h:void 0},n.createElement("div",{className:"home-box-content home-box-max-width"},i%2==0&&d?n.createElement(o.LazyLoadImage,{alt:"logo",className:"home-box-img",height:331,src:d,width:881,style:{cursor:u?"pointer":"default"},onClick:u?h:void 0}):null,i%2==0&&m?n.createElement("h2",{className:"home-box-header",dangerouslySetInnerHTML:{__html:m}}):null,i%2==0&&g?n.createElement("div",{className:"home-box-body",dangerouslySetInnerHTML:{__html:g}}):null,t)),n.createElement(l.Z,{xl:6,sm:12,xs:12,className:i%2==0?`home-box-grey ${c}`:`home-box-right home-box-white ${c}`,style:{cursor:u&&c?"pointer":"default"},onClick:u&&c?h:void 0},n.createElement("div",{className:"home-box-content home-box-max-width"},i%2!=0&&d?n.createElement(o.LazyLoadImage,{alt:"logo",className:"home-box-img",height:331,src:d,width:881,style:{cursor:u?"pointer":"default"},onClick:u?h:void 0}):null,i%2!=0&&m?n.createElement("h2",{className:"home-box-header",dangerouslySetInnerHTML:{__html:m}}):null,i%2!=0&&g?n.createElement("div",{className:"home-box-body",dangerouslySetInnerHTML:{__html:g}}):null,a))))}},8717:function(e,t,a){var n=a(257),l=a(5019),r=a(6594),o=a(6187),i=a(3932),s=a(3114),c=a(395),m=a(4627),d=a(7018),g=a(8304),u=a(9874);const h=(0,n.lazy)((()=>Promise.resolve().then(a.bind(a,1220))));t.Z=()=>{const{t:e}=(0,l.$)(),{country:t}=(0,d.l)(),a=[{title:e("landing.easy_access_for_sds_for_all_your_employees"),image:"https://eukimpul.sirv.com/Images/easy-access-img-1.webp"},{title:e("landing.get_alerted_about_new_revisions_of_your_sds"),image:"/images/home-v4/get-alert-img.webp"},{title:e("landing.employees_informed_about_chemical_risks_and_ppe"),image:"/images/home-v4/employees-img.webp"},{title:e("landing.suitable_for_organizations_of_all_sizes"),image:"/images/home-v4/suitable-img.webp"}],[p,y]=n.useState(""),[b,E]=n.useState(!1),[f,v]=n.useState(!1),[_,S]=n.useState(null),[x,N]=n.useState(!1),w=t=>{t.preventDefault(),0!=(0,m.gK)(p).length?(0,m.oH)(p)?(S(null),(0,m.CR)("MvOTCMWI45sDEOyx5uED"),N(!0),v(!0)):S(e("EmailIsInvalid")):S(e("EmailCanNotBeEmpty"))},C=n.createElement("div",{className:"starting-left"},n.createElement("h1",{className:"header-text"},e("landing.sds_management_software")),n.createElement("h2",{className:`hero-title ${t}`},e("landing.be_prepared_for_inspections",{key:{uk:"COSHH",us:"OSHA",eu:"HSE",ca:"HSE",au:"HSE",nz:"HSE",no:"HMS"}[t]})),n.createElement("div",{className:"hero-subtitle",dangerouslySetInnerHTML:{__html:e("landing.the_all_in_one_solution")}}),n.createElement(i.Z,{noValidate:!0,onSubmit:w,className:"hero-start-trial-form start-free-trial-btn"},n.createElement(c.Z,{placeHolder:e("landing.name@company.com"),type:"text",value:p,onChange:e=>{y(e)},errorText:_,inputClass:"starting-left-input",maxLength:100}),n.createElement(r.Z,{type:"submit",className:"starting-left-button start-free-trial-btn"}," ",e("landing.StartFreeTrial")," "),x?n.createElement(s.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null),n.createElement("div",{className:"hero-items-list"},a.map(((e,t)=>n.createElement("div",{key:t,className:"hero-item"},n.createElement("p",{className:"hero-item-title",dangerouslySetInnerHTML:{__html:e.title}}),n.createElement("img",{width:"272",height:"217",className:"hero-item-image",src:e.image,alt:e.title}))))));return n.createElement(n.Fragment,null,n.createElement(o.Z,null,n.createElement("div",{className:"hero-section"},C)),n.createElement("div",{className:"hero-start-trial-section"},n.createElement(o.Z,null,n.createElement("div",{className:"col-lg-6 col-md-12  offset-lg-3"},n.createElement(i.Z,{noValidate:!0,onSubmit:w,className:"hero-start-trial-form start-free-trial-btn"},n.createElement(c.Z,{placeHolder:e("landing.name@company.com"),type:"text",value:p,onChange:e=>{y(e)},errorText:_,inputClass:"starting-left-input",maxLength:100}),n.createElement(r.Z,{type:"submit",className:"starting-left-button start-free-trial-btn"},e("landing.StartFreeTrial"),x?n.createElement(s.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)),n.createElement("div",{className:"no-credit-card-required-text purple-text"}," ",e("landing.NoCreditcardRequired")," ")))),f&&n.createElement(u.Z,null,n.createElement(h,{plan:"premium",show:b,onCancel:()=>{E(!1),v(!1)},needCompanyWebsite:!1,email:p,service:"sds_inventory",custom_type:g.BV.WELCOME_NEW_USER,redirect_url:"/",pageRef:"home",onSuccess:e=>{N(!1),E(!0)},onError:e=>{N(!1),S(e),v(!1)}})))}},4617:function(e,t,a){var n=a(257),l=a(5019),r=a(6594),o=a(6187),i=a(3932),s=a(395),c=a(3114),m=a(4627),d=a(1220),g=a(2216),u=a(8304);t.Z=e=>{let{imgSrc:t,leftTitle:a,leftContent:h,footer:p,btnTitle:y,plan:b,isDemo:E=!1}=e;const{t:f}=(0,l.$)(),[v,_]=n.useState(""),[S,x]=n.useState(null),[N,w]=n.useState(!1),[C,k]=n.useState(!1),[Z,L]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:"sign-up-section"},n.createElement(o.Z,null,n.createElement("div",{className:"sign-up-section-container"},n.createElement("div",{className:"sign-up-section-left"},n.createElement(g.LazyLoadImage,{alt:"logo",height:150,src:t,width:185}),n.createElement("div",{className:"sign-up-section-left-content"},n.createElement("div",{className:"sign-up-section-left-title",dangerouslySetInnerHTML:{__html:a}}),n.createElement("div",{className:"sign-up-section-left-text",dangerouslySetInnerHTML:{__html:h}}))),n.createElement("div",{className:"sign-up-section-right"},n.createElement(i.Z,{noValidate:!0,onSubmit:e=>{e.preventDefault(),0!=(0,m.gK)(v).length?(0,m.oH)(v)?(x(null),(0,m.CR)("MvOTCMWI45sDEOyx5uED"),L(!0),k(!0)):x(f("EmailIsInvalid")):x(f("EmailCanNotBeEmpty"))},className:"sign-up-section-right-form"},n.createElement(s.Z,{placeHolder:f("landing.name@company.com"),type:"text",value:v,onChange:e=>{_(e)},errorText:S,inputClass:"sign-up-section-right-input",feedbackClass:"sign-up-section-right-feedback",maxLength:100}),n.createElement(r.Z,{type:"submit",className:"sign-up-section-right-button start-free-trial-btn"},y,Z?n.createElement(c.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)),n.createElement("div",{className:"sign-up-section-right-footer"}," ",p," "))))),C&&n.createElement(d.default,{plan:b,show:N,onCancel:()=>{w(!1),k(!1)},needCompanyWebsite:!1,email:v,service:"sds_inventory",custom_type:u.BV.WELCOME_NEW_USER,redirect_url:"/",pageRef:"home",isDemo:E,onSuccess:e=>{L(!1),w(!0)},onError:e=>{L(!1),x(e),k(!1)}}))}},1766:function(e,t,a){var n=a(257),l=a(6187),r=a(2216);t.Z=e=>{let{text:t}=e;return n.createElement("div",{className:"slogan"},n.createElement(l.Z,null,n.createElement("div",{className:"slogan-container"},n.createElement("h2",{className:"slogan-text",dangerouslySetInnerHTML:{__html:t}}),n.createElement(r.LazyLoadImage,{alt:"logo",height:150,src:"/images/logo/logo-yellow-white.svg",width:150}))))}},5098:function(e,t,a){var n=a(257),l=a(6594),r=a(6187),o=a(3932),i=a(5019),s=a(4627),c=a(1220),m=a(2984),d=a(395),g=a(3114),u=a(8304);t.Z=()=>{const{t:e}=(0,i.$)(),[t,a]=n.useState(""),[h,p]=n.useState(!1),[y,b]=n.useState(!1),[E,f]=n.useState(null),[v,_]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:"home-build-sds-library"},n.createElement(r.Z,null,n.createElement("div",{className:"home-build-sds-library-container"},n.createElement("div",{className:"home-build-sds-library-header"},e("landing.ItIsTimeToBuildYourSdsLibraryNow")),n.createElement("div",{className:"home-build-sds-library-sub-header"},e("landing.YouCanBeUpAndRunningInMinutes")),n.createElement(o.Z,{onSubmit:a=>{a.preventDefault(),0!=(0,s.gK)(t).length?(0,s.oH)(t)?(f(null),(0,s.CR)("MvOTCMWI45sDEOyx5uED"),_(!0),b(!0)):f(e("EmailIsInvalid")):f(e("EmailCanNotBeEmpty"))},className:"home-build-sds-library-form"},n.createElement(d.Z,{placeHolder:e("landing.name@company.com"),type:"text",value:t,onChange:e=>{a(e)},errorText:E,feedbackClass:"home-build-sds-library-feedback",inputClass:"home-build-sds-library-input",maxLength:100}),n.createElement(l.Z,{type:"submit",className:"home-build-sds-library-button start-free-trial-btn"},e("landing.StartFreeTrial"),v?n.createElement(g.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)),n.createElement("div",{className:"home-build-sds-library-footer"},e("landing.NoCreditCardRequired")," ",n.createElement(m.Z,{to:"/pricing/",title:"pricing plans"}," ",e("landing.PricingPlans")," "))))),y&&n.createElement(c.default,{plan:"premium",show:h,onCancel:()=>{p(!1),b(!1)},needCompanyWebsite:!1,email:t,service:"sds_inventory",custom_type:u.BV.WELCOME_NEW_USER,redirect_url:"/",pageRef:"home",onSuccess:e=>{_(!1),p(!0)},onError:e=>{_(!1),f(e),b(!1)}}))}},7825:function(e,t,a){var n=a(257),l=a(5414),r=a(9178),o=a(6722),i=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(i.Z,null,n.createElement(l.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),n.createElement(r.Z,{version:a}),n.createElement("main",null,t),n.createElement(o.Z,null))}},9680:function(e,t,a){a.r(t);var n=a(257),l=a(7825),r=a(7700),o=a(5019),i=a(2984),s=a(1626),c=a(4617),m=a(1766),d=a(8717),g=a(5098),u=a(2216),h=a(6222),p=a(7018);t.default=e=>{var t;const{country:a}=(0,p.l)(),{t:y}=(0,o.$)(),b=[y("landing.all_in_one_sds_management"),y("landing.8_million_sds_at_your_fingertips"),y("landing.no_limits_on_users_locations"),y("landing.easy_to_get_started"),y("landing.competitive_pricing_no_lock_in"),y("landing.only_system_that_extracts_data")],E={eu:y("seo.inventoryManagement.descriptionEU"),us:y("seo.inventoryManagement.descriptionUS"),uk:y("seo.inventoryManagement.descriptionUK"),no:y("seo.inventoryManagement.descriptionNO"),ca:y("seo.inventoryManagement.descriptionEU"),au:y("seo.inventoryManagement.descriptionEU"),nz:y("seo.inventoryManagement.descriptionEU")},f=[{header:y("landing.always_up_to_date_sds_library"),body:y("landing.RevisionAlertKeepYouInformedAboutNewVisions"),imgSrc:"/images/home-v4/StayCurrentIllus.webp",rightContentStyle:"home-box-stay-current-left",index:0},{leftContentStyle:`home-box-qr-code-${-1!==["en","no","de"].indexOf(h.ZP.language)?h.ZP.language:"en"}`,header:y("landing.scan_me_to_view_your_next_sds_library"),body:y("landing.hang_up_posters_with_qr_codes"),imgSrc:`/images/home-v4/qr-code/illustration/${-1!==["en","no","de"].indexOf(h.ZP.language)?h.ZP.language:"en"}.webp`,qrLink:null!==(t=h.LZ[a])&&void 0!==t?t:h.LZ.en,index:1},{rightContentStyle:"home-box-keep-worders-healthy-right",header:y("landing.KeepWorkersHealthyAndSafe"),body:y("landing.hazard_risks_and_requirements"),imgSrc:"/images/home-v4/KeepWorkersHealthyIllus.webp",index:2}],v=[{rightContentStyle:"home-box-restriction-lists-left",header:y("landing.know_what_is_in_your_chemicals"),body:y("landing.GetNotifiedAboutRestrictedComponents"),imgSrc:"/images/home-v4/RestrictionListsIllus.png",index:4},{leftContentStyle:"home-box-manage-secondary-container-labeling-left",header:y("landing.track_inventory_with_container_labeling"),body:y("landing.create_secondary_container_labels"),imgSrc:"/images/home-v4/ManageSecondaryContainerLabelingIllus.webp",index:5},{leftContent:n.createElement("div",{className:"home-box-search-left"},n.createElement("div",{className:"home-box-search-left-content"},n.createElement("h2",{className:"home-box-search-header"},y("landing.why_choose_us")),n.createElement("div",{className:"home-box-search-list"},b.map(((e,t)=>n.createElement("div",{key:t,className:"home-box-search-item"},n.createElement(u.LazyLoadImage,{alt:"Check Icon",height:18,src:"/icons/Check.png",width:24}),n.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))))),n.createElement("div",{className:"home-box-search-left-img"},n.createElement(u.LazyLoadImage,{alt:"logo",height:501,src:"/images/home-v4/SearchAmongOurIllus.webp",width:241}))),rightContentStyle:"home-box-let-us-obtain-your-sds-right",index:6}],_=[n.createElement("script",{type:"application/ld+json",key:"0"},JSON.stringify({"@context":"https://schema.org","@type":"WebApplication",name:"SDS Inventory Management",url:"https://sdsmanager.com"+e.location.pathname,publisher:{"@type":"Organization",name:"SdsManager"},offers:{"@type":"Offer",price:"0"},applicationCategory:"BusinessApplication",screenshot:"https://sdsmanager.com/images/benefits/MobileAccess.png",featureList:"Mobile access to SDS from anywhere, Record amount of chemical on location, View and print SDS from QR code or product barcode, Add SDS when new products are purchased or arrive, Instant access to info about protective equipment, Easy access to SDS data in structured format, Offline access to SDS, Easy access to Inherent hazard rating, Easy to build inventory–efficient import of data, Secondary Container Labeling with QR code, Flexible Access Control with location hierarchy, Risk Assessment of chemicals on locations, Stay informed about new revisions of you SDS, Stay informed about hazardous chemicals, We will help you find the SDS you need, Automated extraction of SDS data, Preview, edit & confirm SDS data on the spot, Import SDS data to your ERP system, Overview of your hazardous components"}))];let S=e.pageContext.dir;return["en","no","eu","us","uk","de","nl","pt","fi","pl","el","dk","se","it","fr","es"].includes(S)||(S=h.nr),n.createElement(l.Z,null,n.createElement(r.Z,{title:y("seo.inventoryManagement.title"),description:E[a],microData:_,canonicalUrl:S+e.pageContext.originalPath}),n.createElement("div",{className:"home-v4"},n.createElement(d.Z,null),n.createElement(m.Z,{text:y("landing.are_you_struggling_to_keep")}),f.map(((e,t)=>n.createElement("div",{key:t,className:t%2==0?"home-box-white-grey":"home-box-grey-white"},n.createElement(s.Z,{header:e.header?e.header:null,body:e.body?e.body:null,rightContentStyle:e.rightContentStyle?e.rightContentStyle:"",leftContentStyle:e.leftContentStyle?e.leftContentStyle:"",index:e.index,imgSrc:e.imgSrc?e.imgSrc:null,qrLink:e.qrLink})))),n.createElement(c.Z,{imgSrc:"/images/home-v4/BuildSdsLibrary.svg",leftTitle:y("landing.BuildYourSdsLibrary"),leftContent:y("landing.YouCanBeUpAndRunningInMinutes"),footer:n.createElement(n.Fragment,null,y("landing.NoCreditCardRequired"),n.createElement(i.Z,{to:"/pricing/",title:"pricing plans"}," ",y("landing.PricingPlans")," ")),btnTitle:y("landing.StartFreeTrial"),plan:"premium"}),v.map(((e,t)=>n.createElement("div",{key:t,className:t%2==0?"home-box-white-grey":"home-box-grey-white"},n.createElement(s.Z,{leftContent:e.leftContent?e.leftContent:null,header:e.header?e.header:null,body:e.body?e.body:null,rightContentStyle:e.rightContentStyle?e.rightContentStyle:"",leftContentStyle:e.leftContentStyle?e.leftContentStyle:"",index:e.index,imgSrc:e.imgSrc?e.imgSrc:null})))),n.createElement("div",{className:"home"},n.createElement(g.Z,null))))}}}]);