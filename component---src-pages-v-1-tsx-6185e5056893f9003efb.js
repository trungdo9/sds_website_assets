"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[511],{4789:function(e,t,n){var a=n(257),l=n(5019),i=n(6187),r=n(3932),o=n(6594),s=n(395),m=n(4627),c=n(9874),d=n(3114),g=n(8304);const h=(0,a.lazy)((()=>Promise.resolve().then(n.bind(n,1220))));t.Z=()=>{const{t:e}=(0,l.$)(),t=[{title:e("landing.easy_access_for_sds_for_all_your_employees"),image:"/images/home-v4/easy-access-img.webp"},{title:e("landing.get_alerted_about_new_revisions_of_your_sds"),image:"/images/home-v4/get-alert-img.webp"},{title:e("landing.employees_informed_about_chemical_risks_and_ppe"),image:"/images/home-v4/employees-img.webp"},{title:e("landing.suitable_for_organizations_of_all_sizes"),image:"/images/home-v4/suitable-img.webp"}],[n,u]=a.useState(""),[y,S]=a.useState(!1),[p,f]=a.useState(!1),[b,C]=a.useState(null),[v,E]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement(i.Z,null,a.createElement("div",{className:"hero-section"},a.createElement("div",{className:"starting-left"},a.createElement("h1",{className:"hero-title"},e("landing.be_prepared_for_regulatory_hse_inspections")),a.createElement("div",{className:"hero-items-list"},t.map(((e,t)=>a.createElement("div",{key:t,className:"hero-item"},a.createElement("p",{className:"hero-item-title",dangerouslySetInnerHTML:{__html:e.title}}),a.createElement("img",{width:"400",height:"319",className:"hero-item-image",src:e.image,alt:e.title,srcSet:`${e.image} 400w`})))))))),a.createElement("div",{className:"hero-start-trial-section"},a.createElement(i.Z,null,a.createElement("div",{className:"col-lg-6 col-md-12  offset-lg-3"},a.createElement(r.Z,{noValidate:!0,onSubmit:t=>{t.preventDefault(),0!=(0,m.gK)(n).length?(0,m.oH)(n)?(C(null),(0,m.CR)("MvOTCMWI45sDEOyx5uED"),E(!0),f(!0)):C(e("EmailIsInvalid")):C(e("EmailCanNotBeEmpty"))},className:"hero-start-trial-form"},a.createElement(s.Z,{placeHolder:e("landing.name@company.com"),type:"text",value:n,onChange:e=>{u(e)},errorText:b,inputClass:"starting-left-input",maxLength:100}),a.createElement(o.Z,{type:"submit",className:"starting-left-button"},e("landing.StartFreeTrial"),v?a.createElement(d.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)),a.createElement("div",{className:"no-credit-card-required-text purple-text"}," ",e("landing.NoCreditcardRequired")," ")))),p&&a.createElement(c.Z,null,a.createElement(h,{plan:"premium",show:y,onCancel:()=>{S(!1),f(!1)},needCompanyWebsite:!1,email:n,service:"sds_inventory",custom_type:g.BV.WELCOME_NEW_USER,redirect_url:"/",pageRef:"home",onSuccess:e=>{E(!1),S(!0)},onError:e=>{E(!1),C(e),f(!1)}})))}},7825:function(e,t,n){var a=n(257),l=n(5414),i=n(9178),r=n(6722),o=n(1648);t.Z=e=>{let{children:t,version:n="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return a.createElement(o.Z,null,a.createElement(l.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),a.createElement(i.Z,{version:n}),a.createElement("main",null,t),a.createElement(r.Z,null))}},5778:function(e,t,n){n.r(t);var a=n(257),l=n(7825),i=n(7700),r=n(5019),o=n(2984),s=n(3238),m=n(7018),c=n(4789);t.default=e=>{const{country:t}=(0,m.l)(),{t:n}=(0,r.$)(),d=[n("landing.SearchByLocationCAS"),n("landing.25Languages"),n("landing.WeAreCrawling150.000Suppliers"),n("landing.20.000NewSdsAddedEveryWeek"),n("landing.AllAvailableForYourSdsEBinders")],g=[{leftContent:a.createElement("div",{className:"home-box-search-left"},a.createElement("div",{className:"home-box-search-left-content"},a.createElement("h2",{className:"home-box-search-header"}," ",n("landing.SearchAmongOur8MillionSafetyDataSheets")," "),a.createElement("div",{className:"home-box-search-list"},d.map(((e,t)=>a.createElement("div",{key:t,className:"home-box-search-item"},a.createElement("img",{src:"/icons/Check.png",alt:"Check Icon"}),a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))))),a.createElement("div",{className:"home-box-search-left-img"},a.createElement("img",{src:"/images/home-v4/SearchAmongOurIllus.png"}))),rightContentStyle:"home-box-search-right",index:0},{leftContentStyle:"home-box-stay-connected-left",header:n("landing.StayConnected"),body:n("landing.StayConnectedContent"),imgSrc:"/images/home-v4/StayConnectedIllus.png",index:1},{rightContentStyle:"home-box-risk-assessment-right",header:n("landing.RiskAssessment"),body:n("landing.AllSdsAreRatedForHealth"),imgSrc:"/images/home-v4/RiskAssessmentIllus.png",index:2}],h=[{leftContentStyle:"home-box-stay-current-left",header:n("landing.StayCurrentAndCompliant"),body:n("landing.RevisionAlertKeepYouInformedAboutNewVisions"),imgSrc:"/images/home-v4/StayCurrentIllus.png",index:3},{rightContentStyle:"home-box-keep-worders-healthy-right",header:n("landing.KeepsWorkersHealthyAndSafe"),body:n("landing.StayInRegulatoryComplianceWithDocumented"),imgSrc:"/images/home-v4/KeepWorkersHealthyIllus.png",index:4},{leftContentStyle:"home-box-restriction-lists-left",header:n("landing.RestrictionLists"),body:n("landing.GetNotifiedAboutRestrictedComponents"),imgSrc:"/images/home-v4/RestrictionListsIllus.png",index:5}],u=[{rightContentStyle:"home-box-let-us-obtain-your-sds-right",header:n("landing.LetUsObtainYourSds"),body:n("landing.WeHaveADedicatedTeamForMaintaining"),imgSrc:"/images/home-v4/LetUsObtainYourSdsIllus.png",index:6},{leftContentStyle:"home-box-manage-secondary-container-labeling-left",header:n("landing.ManageSecondaryContainerLabeling"),body:n("landing.CreateSecondaryContainerLabelsWithQR"),imgSrc:"/images/home-v4/ManageSecondaryContainerLabelingIllus.png",index:7},{rightContentStyle:"home-box-track-inventory-right",header:n("landing.TrackInventory"),body:n("landing.KeepRecordsOfAmountOfProducts"),imgSrc:"/images/home-v4/TrackInventoryIllus.png",index:8}],y=[a.createElement("script",{type:"application/ld+json",key:"0"},JSON.stringify({"@context":"https://schema.org","@type":"WebApplication",name:"SDS Inventory Management",url:"https://sdsmanager.com"+e.location.pathname,publisher:{"@type":"Organization",name:"SdsManager"},offers:{"@type":"Offer",price:"0"},applicationCategory:"BusinessApplication",screenshot:"https://sdsmanager.com/images/benefits/MobileAccess.png",featureList:"Mobile access to SDS from anywhere, Record amount of chemical on location, View and print SDS from QR code or product barcode, Add SDS when new products are purchased or arrive, Instant access to info about protective equipment, Easy access to SDS data in structured format, Offline access to SDS, Easy access to Inherent hazard rating, Easy to build inventory–efficient import of data, Secondary Container Labeling with QR code, Flexible Access Control with location hierarchy, Risk Assessment of chemicals on locations, Stay informed about new revisions of you SDS, Stay informed about hazardous chemicals, We will help you find the SDS you need, Automated extraction of SDS data, Preview, edit & confirm SDS data on the spot, Import SDS data to your ERP system, Overview of your hazardous components"}))];return a.createElement(l.Z,null,a.createElement(i.Z,{title:n("seo.inventoryManagement.title"),description:n("seo.inventoryManagement.description"),microData:y,canonicalUrl:e.pageContext.dir+e.pageContext.originalPath}),a.createElement("div",{className:"home-v4"},a.createElement(c.Z,null),a.createElement(s.ne,{text:n("landing.SdsManagergivesYourEmployees")}),g.map(((e,t)=>a.createElement("div",{key:t,className:t%2==0?"home-box-white-grey":"home-box-grey-white"},a.createElement(s.xu,{leftContent:e.leftContent?e.leftContent:null,header:e.header?e.header:null,body:e.body?e.body:null,rightContentStyle:e.rightContentStyle?e.rightContentStyle:"",leftContentStyle:e.leftContentStyle?e.leftContentStyle:"",index:e.index,imgSrc:e.imgSrc?e.imgSrc:null})))),a.createElement(s.BO,{imgSrc:"/images/home-v4/ViewDemo.svg",leftTitle:n("landing.ViewDemoVersion"),leftContent:n("landing.StartTheDemoToday"),footer:a.createElement(a.Fragment,null,n("landing.WeWillSentYouAccess")),btnTitle:n("landing.ViewDemo"),plan:"free",isDemo:!0}),h.map(((e,t)=>a.createElement("div",{key:t,className:t%2==0?"home-box-white-grey":"home-box-grey-white"},a.createElement(s.xu,{header:e.header?e.header:null,body:e.body?e.body:null,rightContentStyle:e.rightContentStyle?e.rightContentStyle:"",leftContentStyle:e.leftContentStyle?e.leftContentStyle:"",index:e.index,imgSrc:e.imgSrc?e.imgSrc:null})))),a.createElement(s.BO,{imgSrc:"/images/home-v4/BuildSdsLibrary.svg",leftTitle:n("landing.BuildYourSdsLibrary"),leftContent:n("landing.YouCanBeUpAndRunningInMinutes"),footer:a.createElement(a.Fragment,null,n("landing.NoCreditCardRequired"),a.createElement(o.Z,{to:"/pricing/"}," ",n("landing.PricingPlans")," ")),btnTitle:n("landing.StartFreeTrial"),plan:"premium"}),u.map(((e,t)=>a.createElement("div",{key:t,className:t%2==0?"home-box-white-grey":"home-box-grey-white"},a.createElement(s.xu,{header:e.header?e.header:null,body:e.body?e.body:null,rightContentStyle:e.rightContentStyle?e.rightContentStyle:"",leftContentStyle:e.leftContentStyle?e.leftContentStyle:"",index:e.index,imgSrc:e.imgSrc?e.imgSrc:null})))),a.createElement(s.tl,null)))}}}]);