"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[113,114,921],{3114:function(e,t,a){a.r(t);var n=a(5900),l=a.n(n),o=a(257),s=a(9541),r=a(1312);const i=o.forwardRef(((e,t)=>{let{bsPrefix:a,variant:n,animation:o="border",size:i,as:u="div",className:c,...m}=e;a=(0,s.vE)(a,"spinner");const d=`${a}-${o}`;return(0,r.tZ)(u,{ref:t,...m,className:l()(c,d,i&&`${d}-${i}`,n&&`text-${n}`)})}));i.displayName="Spinner",t.default=i},8427:function(e,t,a){a.r(t);var n=a(257),l=a(8203),o=a(6594),s=a(5019);t.default=e=>{let{title:t="",content:a,onConfirm:r,onCancel:i,cancelButtonTitle:u=""}=e;const{t:c}=(0,s.$)();return n.createElement(l.Z,{dialogClassName:"alert-modal",show:!0,centered:!0,onHide:i},n.createElement("div",{className:"alert-modal-container"},t&&n.createElement("div",{className:"alert-modal-title"}," ",t," "),a&&n.createElement("div",{className:"alert-modal-content"}," ",a," "),null!=r?n.createElement("div",{style:{display:"flex",gap:10}},n.createElement(o.Z,{className:"alert-modal-back-button",onClick:i}," ",c("Back")," "),n.createElement(o.Z,{className:"alert-modal-confirm-button",onClick:r}," ",c("Yes")," ")):n.createElement(o.Z,{className:"alert-modal-back-button",onClick:i}," ",u||c("Back")," ")))}},395:function(e,t,a){var n=a(257),l=a(3932);t.Z=e=>{let{placeHolder:t,type:a,value:o,onChange:s,errorText:r,containerClass:i="",inputClass:u="",feedbackClass:c="",maxLength:m,...d}=e;return n.createElement("div",{className:`form-field-container ${i}`},n.createElement(l.Z.Control,Object.assign({onChange:e=>{s(e.target.value)},value:o,className:`form-field-input ${u}`,type:a,isInvalid:!!r,placeholder:t},d)),n.createElement(l.Z.Control.Feedback,{className:`form-field-feedback ${c}`,type:"invalid"}," ",r," "))}},1220:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(257),l=a(5019),o=a(3586),s=a(8203),r=a(3932),i=a(6594),u=a(3114),c=a(4070),m=a.n(c),d=a(4329),p=a(4627),g=a(182),f=a(7018),h=a(8304),E=a(4083),v=a(8427),C=a(395);var b=e=>{let{show:t,onCancel:a,onFinish:o,isDemo:c=!1,needCompanyWebsite:m=!0,defaultFullName:g="",defaultCompanyName:f="",data:E,showPolicy:b}=e;const{t:N}=(0,l.$)(),[_,y]=n.useState(g),[S,w]=n.useState(f),[U,M]=n.useState(""),[k,Z]=n.useState(""),[T,L]=n.useState(null),[x,P]=n.useState(null),[$,I]=n.useState(null),[F,H]=n.useState(null),[A,B]=n.useState(null),[W,K]=n.useState(!1);return T||n.createElement(s.Z,{centered:!0,show:t,onHide:a,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},c?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"signup-modal-title"},N("signUpModal.SetupYourAccount")),n.createElement("div",{className:"signup-modal-sub-title"},N("signUpModal.FillInYourProfileDetails"))),n.createElement(r.Z,{onSubmit:e=>{e.preventDefault();const t=(0,p.gK)(_),l=(0,p.gK)(S),s=(0,p.gK)(U);if(0===t.length)return void P(N("signUpModal.FullNameCannotBeEmpty"));if(P(null),0===s.length)return void I(N("signUpModal.PhoneNumberCanNotBeEmpty"));if(s.length>1&&isNaN(Number(s)))return void I(N("signUpModal.PhoneNumberIsInvalid"));if(I(null),0===l.length)return void H(N("signUpModal.CompanyNameCannotBeEmpty"));if(H(null),m){if(0===(0,p.gK)(k).length)return void B(N("signUpModal.CompanyWebsiteCannotBeEmpty"));if(-1===k.indexOf("."))return void B(N("signUpModal.CompanyWebsiteIsInvalid"));B(null)}K(!0);const r=_.split(" "),i=r[0];r.splice(0,1);let u="-";if(r.length>0&&(u=r.join(" ")),!E)return void L(n.createElement(v.default,{title:"Something Wrong!",onCancel:()=>L(null)}));let c=h.CZ;c+=`api/user/${E.userId}/`;let g={first_name:(0,p.gK)(i),last_name:(0,p.gK)(u),company:l,phone_number:s};m&&(g.company_website=k),(0,d.h)(c,"PATCH",g,null,E.accessToken).then((e=>{K(!1),o(_)})).catch((e=>{K(!1);let t="";if(401===(null==e?void 0:e.status))return t="Oops, you haven't responded for a while. Please check your email to login and update more information if needed.",void L(n.createElement(v.default,{title:"Timeout",content:t,onCancel:()=>{L(null),a()},cancelButtonTitle:N("Close")}));t||void 0===e.error_message?"string"==typeof e&&(t=e):t=e.error_message.errors.join(", "),L(n.createElement(v.default,{content:t,onCancel:()=>L(null)}))}))}},n.createElement(r.Z.Label,{className:"signup-modal-label"}," ",N("signUpModal.FullName"),"*"," "),n.createElement(C.Z,{placeHolder:N("signUpModal.EnterYourFullName"),type:"text",value:_,onChange:e=>{y(e)},errorText:x,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement(r.Z.Label,{className:"signup-modal-label"}," ",N("signUpModal.PhoneNumber"),"*"," "),n.createElement(C.Z,{placeHolder:N("signUpModal.EnterYourPhoneNumber"),type:"text",value:U,onChange:e=>{M(e)},errorText:$,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:50}),n.createElement(r.Z.Label,{className:"signup-modal-label"}," ",N("signUpModal.CompanyName"),"*"," "),n.createElement(C.Z,{placeHolder:N("signUpModal.EnterYourCompanyName"),type:"text",value:S,onChange:e=>{w(e)},errorText:F,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),m?n.createElement(n.Fragment,null,n.createElement(r.Z.Label,{className:"signup-modal-label"}," ",N("signUpModal.CompanyWebsite")," "),n.createElement(C.Z,{placeHolder:N("signUpModal.EnterYourCompanyWebsite"),type:"text",value:k,onChange:e=>{Z(e)},errorText:A,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100})):null,b&&n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",style:{marginTop:10},dangerouslySetInnerHTML:{__html:N("signUpModal.BySigningUpYouAgreeTo")}}),n.createElement(i.Z,{type:"submit",className:"signup-modal-continue-button"},N("signUpModal.NextStep"),W?n.createElement(u.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null))))};var N=e=>{let{show:t,onCancel:a,onFinish:o,data:r}=e;const{t:c}=(0,l.$)(),[m,p]=n.useState(null),[g,f]=n.useState(null),[E,C]=n.useState(!1),b=[{label:c("pricingV2.i_do_not_know"),value:0},{label:"1-50",value:50},{label:"51-100",value:100},{label:"101-200",value:200},{label:"201 - 400",value:400},{label:"401 - 1,000",value:1e3},{label:"1,001 - 2,000",value:2e3},{label:"2,001 - 4,000",value:4e3},{label:"4,001 or more",value:4001}];return m||n.createElement(s.Z,{centered:!0,show:t,onHide:a,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},n.createElement("div",{className:"signup-modal-title"},c("signUpModal.LetsPersonalizeYour")),n.createElement("div",{className:"signup-modal-sub-title"},c("signUpModal.ApproximatelyHowMany")),n.createElement("div",{className:"signup-modal-sds-range"},b.map(((e,t)=>n.createElement("div",{key:t,className:"sds-range "+(g==e.value?"selected-sds-range":""),onClick:()=>f(e.value)},e.label)))),n.createElement(i.Z,{className:"signup-modal-continue-button",onClick:()=>{(()=>{if(null===g)return void p(n.createElement(v.default,{content:c("pricingV2.please_choose_option"),onCancel:()=>p(null)}));if(!r)return void p(n.createElement(v.default,{title:"Something Wrong!",onCancel:()=>p(null)}));C(!0);let e=h.CZ;e+=`api/user/${r.userId}/`;let t={sds_range:g,last_step:!0};(0,d.h)(e,"PATCH",t,null,r.accessToken).then((e=>{C(!1),o()})).catch((e=>{C(!1);let t="";t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),p(n.createElement(v.default,{title:t,onCancel:()=>p(null)}))}))})()}},c("signUpModal.NextStep"),E?n.createElement(u.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)))};var _=e=>{let{show:t,onCancel:a,onFinish:o,data:c,fullName:m=""}=e;const{t:g}=(0,l.$)(),[f,E]=n.useState(null),[b,N]=n.useState(""),[_,y]=n.useState(null),[S,w]=n.useState(!1);return f||n.createElement(s.Z,{centered:!0,show:t,onHide:a,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},n.createElement("div",{className:"signup-modal-title"},g("signUpModal.LastlyTest",{userName:m})),n.createElement("div",{className:"signup-modal-sub-title"},g("signUpModal.SoYouCanGetInto")),n.createElement(r.Z,{onSubmit:e=>{if(e.preventDefault(),!b)return void y(g("signUpModal.PasswordCanNotBeEmpty"));const t=(0,p.gK)(b);if(!(0,p.uo)(t))return void y("Password need to contain at least 10 characters");if(y(null),!c)return void E(n.createElement(v.default,{title:"Something Wrong!",onCancel:()=>E(null)}));w(!0);let a=h.CZ+"api/auth/set-password/",l={token:c.setPasswordToken,userId:c.userId,password:t};(0,d.h)(a,"post",l).then((e=>{w(!1),o()})).catch((e=>{w(!1);let t="";t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),E(n.createElement(v.default,{title:t,onCancel:()=>E(null)}))}))}},n.createElement(r.Z.Label,{className:"signup-modal-label"}," ",g("signUpModal.Password")," "),n.createElement(C.Z,{placeHolder:g("signUpModal.EnterYourPassword"),type:"password",value:b,onChange:e=>{N(e)},errorText:_,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",style:{marginTop:10},dangerouslySetInnerHTML:{__html:g("signUpModal.BySigningUpYouAgreeTo")}}),n.createElement(i.Z,{type:"submit",className:"signup-modal-continue-button"},g("signUpModal.TakeMeToMyAccount"),S?n.createElement(u.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null))))};var y=e=>{let{plan:t,show:a,onCancel:c,email:y=null,custom_type:S=h.BV.WELCOME_NEW_USER,sds_count:w,service:U,redirect_url:M,pageRef:k,needCompanyWebsite:Z=!0,isDemo:T=!1,substanceId:L,onSuccess:x,onError:P,isTrialPeriodProp:$=!0}=e;const{t:I}=(0,l.$)(),{country:F}=(0,f.l)(),[H,A]=n.useState(""),[B,W]=n.useState(""),[K,R]=n.useState(""),[D,Y]=n.useState(""),[O,j]=n.useState(w),[G,z]=n.useState(!1),[V,q]=n.useState(null),[J,Q]=n.useState(!1),[X,ee]=n.useState(!1),[te,ae]=n.useState(!1),[ne,le]=n.useState(o.ZP.language),[oe,se]=n.useState(null),[re,ie]=n.useState(t||null),[ue,ce]=n.useState(U||null),[me,de]=n.useState(S||null),[pe,ge]=n.useState(null),[fe,he]=n.useState(!1),[Ee,ve]=n.useState($);n.useEffect((()=>{if("undefined"==typeof window)return;if(y){A(y);const e=be(y);return void Ne({...e,email:y},x,P)}const e=new URLSearchParams(window.location.search),t=e.get("email"),a=e.get("name"),n=e.get("language"),l=e.get("subscription_plan"),o=e.get("service"),s=e.get("custom_type"),r=e.get("sds_count"),i=e.get("method"),u="true"===e.get("is_trial_period"),c={};for(let[m,d]of e.entries())"email"!==m&&"name"!==m&&"language"!==m&&"subscription_plan"!==m&&"service"!==m&&"custom_type"!==m&&"ref"!==m&&"popup"!==m&&(c[m]=d);if(a&&W(a),u&&ve(u),n&&le(n),l&&ie(l),o&&ce(o),s&&de(s),r&&j(parseInt(r)),i&&"google-signup"===i&&(Q(!0),(0,p.CR)("fp9RCPeS9KkDEOyx5uED")),t){A(t);const e=be(t);(0,p.Th)()||(0,p.yF)()?Ne({...e,fullName:a||e.fullName,email:t,otherParams:c}):fetch(h.xz,{mode:"cors"}).then((function(n){const l=n.headers.get("x-country-code");l&&(window.localStorage.setItem("x-country-code",(0,p.gK)(l.toLowerCase())),Ne({...e,fullName:a||e.fullName,email:t,otherParams:c}))})).catch((()=>{}))}}),[]);const Ce=()=>{A(""),W(""),R(""),Y(""),z(!1),c&&c()},be=e=>{let t=H;e&&(t=e);let a=t.split("@")[0];return a.length>0&&(a=a[0].toUpperCase()+a.slice(1)),{fullName:a,companyName:""}},Ne=function(e,t,a){if(void 0===t&&(t=e=>{}),void 0===a&&(a=e=>{}),!re)return void se(n.createElement(v.default,{title:I("Error"),content:I("signUpModal.FormIsInvalid"),onCancel:()=>se(null)}));he(!0);const l=_e(e);(0,d.h)(h.RE,"post",l).then((a=>{var n;if("sds_inventory"===ue){let e=1;switch(h.Uq[re]){case 2:e=500;break;case 4:e=1e3;break;case 6:e=1500}(0,p.CR)("fp9RCPeS9KkDEOyx5uED")}const l={accessToken:a.access_token,refreshToken:a.refresh_token,setPasswordToken:a.set_password_token,userId:a.id,defaultLocation:null===(n=a.inventory_manager_settings)||void 0===n?void 0:n.default_location};ye(l,e),t(l)})).catch((e=>{var t;he(!1);let o="";if(o||void 0===(null===(t=e.error_message)||void 0===t?void 0:t.errors)||(o=e.error_message.errors.join(", ")),"AUTHENTICATION_SIGNUP_EMAIL_ADDRESS_HAS_ALREADY"===e.error_code)return o=I("value_already_exist",{value:l.email}),void se(n.createElement(v.default,{title:I("Error"),content:o,onConfirm:()=>{window.location.href=`${h.rB}/login?lang=${ne}&email=${H}`},onCancel:()=>{se(null),y&&a("")}}));y?a(o):(o||"string"!=typeof e||(o=e),se(n.createElement(v.default,{title:I("Error"),content:o,onCancel:()=>se(null)})))}))},_e=e=>{const t=(0,p.gK)(e.companyName),a=(0,p.gK)(e.fullName).split(" ")[0],l=(0,p.IF)(m());let o=H;y&&(o=y),e.email&&(o=e.email);const s=(0,p.Th)("no"),r=E.KV[s];let i={email:o.toLowerCase(),first_name:(0,p.gK)(a),last_name:"-",service:ue,company:t,country:s,default_language:null!=r?r:"en",subscription_plan:h.Uq[re],company_website:Z?D:"",phone_number:null,password:null,ref:"signup_form__"+re,is_trial_period:Ee,origination_referral:l.origination_type,origination_source:l.origination_source,signup_site:F};if(e.otherParams&&Object.entries(e.otherParams).map((e=>{let[t,a]=e;i[t]=a})),me&&(i.custom_type=me),O&&(i.sds_count=O),"search-save-online"===k&&(i.default_sds_id=L,!L)){const e=new URLSearchParams(window.location.search).get("substance_id");if(!e)return void se(n.createElement(v.default,{title:I("Error"),content:"No substance",onCancel:()=>se(null)}));i.default_sds_id=e}return i},ye=(e,t)=>{he(!1),W(t.fullName),R(t.companyName),z(!0),q(e)},Se=()=>{if(!V)return void se(n.createElement(v.default,{title:"Something Wrong!",onCancel:()=>se(null)}));let e=k;if(!e){e=new URLSearchParams(window.location.search).get("ref")}e?window.location.href="search-save-online"!==e?`${h.rB}/?token=${V.refreshToken}`:`${h.rB}/location-management/?token=${V.refreshToken}`:se(n.createElement(v.default,{title:"Something Wrong!",onCancel:()=>se(null)}))};return te&&!J?n.createElement(n.Fragment,null,n.createElement(_,{show:a,onCancel:Ce,onFinish:()=>{Se()},data:V,fullName:B}),oe):X?n.createElement(N,{show:a,onCancel:Ce,onFinish:()=>{J?Se():ae(!0)},data:V}):V||G?n.createElement(b,{show:a,onCancel:Ce,isDemo:T,needCompanyWebsite:Z,defaultFullName:B,defaultCompanyName:K,onFinish:e=>{O&&O>100&&(ae(!0),J&&Se()),ee(!0),W(e)},data:V,showPolicy:!!y}):n.createElement(n.Fragment,null,n.createElement(s.Z,{centered:!0,show:a,onHide:Ce,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},"search-save-online"===k?n.createElement(n.Fragment,null,n.createElement("img",{className:"search-box-result-table-icon",src:"/icons/CloudUpload.png",alt:"Pdf Icon of Search Page"}),n.createElement("div",{className:"signup-modal-title"},I("signUpModal.RegistrationIsNeeded")),n.createElement("div",{className:"signup-modal-sub-title"},I("signUpModal.LetsGetStarted"))):n.createElement(n.Fragment,null,n.createElement("div",{className:"signup-modal-title"},I("signUpModal.CreateAccount")),n.createElement("div",{className:"signup-modal-sub-title"},I("signUpModal.LetGetStartedWithAFew"))),n.createElement(r.Z,{onSubmit:e=>{if(e.preventDefault(),0==(0,p.gK)(H).length)return void ge(I("EmailCanNotBeEmpty"));if(!(0,p.oH)(H))return void ge(I("EmailIsInvalid"));ge(null);const t=be();Ne(t)}},n.createElement(r.Z.Label,{className:"signup-modal-label"}," ",I("signUpModal.EnterEmail"),"*"," "),n.createElement(C.Z,{placeHolder:I("signUpModal.name@company.com"),type:"text",value:H,onChange:e=>{A(e)},errorText:pe,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),fe?n.createElement(i.Z,{disabled:!0,type:"submit",className:"signup-modal-continue-button"},I("search-save-online"===k?"signUpModal.StartFreeTrial":"signUpModal.CreateAccount"),n.createElement(u.default,{style:{width:16,height:16,marginLeft:10},animation:"border"})):n.createElement(i.Z,{type:"submit",className:"signup-modal-continue-button"},I("search-save-online"===k?"signUpModal.StartFreeTrial":"signUpModal.CreateAccount"))),n.createElement("div",{className:"signup-modal-or"}," ",I("signUpModal.Or")," "),n.createElement("a",{href:(()=>{let e="";if((0,g.t)(M)){const t="en"===o.ZP.language?"":"/no";e+=`${h.xz+t}${M}%3F`}else e+=`${h.xz}/${F}${M}%3F`;const a=new URLSearchParams(window.location.search);let n="";for(let[t,o]of a.entries())n=n+t+"="+o+"%26";"search-save-online"===k&&(n+=`substance_id=${L}%26`),e+=n,e+="popup=setup-account";const l={method:"google-signup",subscription_plan:t,sds_count:w,service:U,custom_type:S,ref:k,is_trial_period:Ee};for(const t in l)void 0!==l[t]&&(e=e+"%26"+t+"="+l[t]);return`${h.Up}?redirect_url=${e}`})(),className:"signup-modal-google-button",title:"Sign up with google",id:"signup-modal-google-login"},n.createElement("img",{src:"/icons/GoogleLogo.png",alt:"Google Logo Icon"}),I("signUpModal.ContinueWithGoogle")),n.createElement("div",{className:"signup-modal-footer"},n.createElement("div",null," ",I("signUpModal.AlreadyHaveAnAccount")," "),n.createElement("a",{href:`${h.rB}/login/?lang=${ne}`,title:"Login",id:"signup-modal-sds-login"}," ",I("signUpModal.LogIn")," ")),n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",style:{marginTop:10},dangerouslySetInnerHTML:{__html:I("signUpModal.BySigningUpYouAgreeTo")}}))),oe)}}}]);