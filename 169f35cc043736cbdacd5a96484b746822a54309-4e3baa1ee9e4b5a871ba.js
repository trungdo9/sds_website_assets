"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[12,427,114],{3932:function(e,t,a){a.d(t,{Z:function(){return $}});var n=a(5900),l=a.n(n),o=a(5697),s=a.n(o),r=a(257),i=a(8881),c=a(4709),u=a(8788),m=a(9541),d=a(1312);const p=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,htmlFor:o,...s}=e;const{controlId:i}=(0,r.useContext)(u.Z);return a=(0,m.vE)(a,"form-check-label"),(0,d.tZ)("label",{...s,ref:t,htmlFor:o||i,className:l()(n,a)})}));p.displayName="FormCheckLabel";var g=p;const f=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,bsSwitchPrefix:o,inline:s=!1,reverse:p=!1,disabled:f=!1,isValid:h=!1,isInvalid:v=!1,feedbackTooltip:E=!1,feedback:b,feedbackType:N,className:y,style:C,title:_="",type:w="checkbox",label:S,children:Z,as:U="input",...x}=e;n=(0,m.vE)(n,"form-check"),o=(0,m.vE)(o,"form-switch");const{controlId:M}=(0,r.useContext)(u.Z),k=(0,r.useMemo)((()=>({controlId:a||M})),[M,a]),I=!Z&&null!=S&&!1!==S||function(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}(Z,g),L=(0,d.tZ)(c.Z,{...x,type:"switch"===w?"checkbox":w,ref:t,isValid:h,isInvalid:v,disabled:f,as:U});return(0,d.tZ)(u.Z.Provider,{value:k,children:(0,d.tZ)("div",{style:C,className:l()(y,I&&n,s&&`${n}-inline`,p&&`${n}-reverse`,"switch"===w&&o),children:Z||(0,d.BX)(d.HY,{children:[L,I&&(0,d.tZ)(g,{title:_,children:S}),b&&(0,d.tZ)(i.Z,{type:N,tooltip:E,children:b})]})})})}));f.displayName="FormCheck";var h=Object.assign(f,{Input:c.Z,Label:g}),v=a(1760),E=(0,a(8870).Z)("form-floating");const b=r.forwardRef(((e,t)=>{let{controlId:a,as:n="div",...l}=e;const o=(0,r.useMemo)((()=>({controlId:a})),[a]);return(0,d.tZ)(u.Z.Provider,{value:o,children:(0,d.tZ)(n,{...l,ref:t})})}));b.displayName="FormGroup";var N=b,y=(a(2473),a(7408));const C=r.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:n,column:o,visuallyHidden:s,className:i,htmlFor:c,...p}=e;const{controlId:g}=(0,r.useContext)(u.Z);n=(0,m.vE)(n,"form-label");let f="col-form-label";"string"==typeof o&&(f=`${f} ${f}-${o}`);const h=l()(i,n,s&&"visually-hidden",o&&f);return c=c||g,o?(0,d.tZ)(y.Z,{ref:t,as:"label",className:h,htmlFor:c,...p}):(0,d.tZ)(a,{ref:t,className:h,htmlFor:c,...p})}));C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};var _=C;const w=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,id:o,...s}=e;const{controlId:i}=(0,r.useContext)(u.Z);return a=(0,m.vE)(a,"form-range"),(0,d.tZ)("input",{...s,type:"range",ref:t,className:l()(n,a),id:o||i})}));w.displayName="FormRange";var S=w;const Z=r.forwardRef(((e,t)=>{let{bsPrefix:a,size:n,htmlSize:o,className:s,isValid:i=!1,isInvalid:c=!1,id:p,...g}=e;const{controlId:f}=(0,r.useContext)(u.Z);return a=(0,m.vE)(a,"form-select"),(0,d.tZ)("select",{...g,size:o,ref:t,className:l()(s,a,n&&`${a}-${n}`,i&&"is-valid",c&&"is-invalid"),id:p||f})}));Z.displayName="FormSelect";var U=Z;const x=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:o="small",muted:s,...r}=e;return a=(0,m.vE)(a,"form-text"),(0,d.tZ)(o,{...r,ref:t,className:l()(n,a,s&&"text-muted")})}));x.displayName="FormText";var M=x;const k=r.forwardRef(((e,t)=>(0,d.tZ)(h,{...e,ref:t,type:"switch"})));k.displayName="Switch";var I=Object.assign(k,{Input:h.Input,Label:h.Label});const L=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,children:o,controlId:s,label:r,...i}=e;return a=(0,m.vE)(a,"form-floating"),(0,d.BX)(N,{ref:t,className:l()(n,a),controlId:s,...i,children:[o,(0,d.tZ)("label",{htmlFor:s,children:r})]})}));L.displayName="FloatingLabel";var P=L;const T={_ref:s().any,validated:s().bool,as:s().elementType},F=r.forwardRef(((e,t)=>{let{className:a,validated:n,as:o="form",...s}=e;return(0,d.tZ)(o,{...s,ref:t,className:l()(a,n&&"was-validated")})}));F.displayName="Form",F.propTypes=T;var $=Object.assign(F,{Group:N,Control:v.Z,Floating:E,Check:h,Switch:I,Label:_,Text:M,Range:S,Select:U,FloatingLabel:P})},3114:function(e,t,a){a.r(t);var n=a(5900),l=a.n(n),o=a(257),s=a(9541),r=a(1312);const i=o.forwardRef(((e,t)=>{let{bsPrefix:a,variant:n,animation:o,size:i,as:c="div",className:u,...m}=e;a=(0,s.vE)(a,"spinner");const d=`${a}-${o}`;return(0,r.tZ)(c,{ref:t,...m,className:l()(u,d,i&&`${d}-${i}`,n&&`text-${n}`)})}));i.displayName="Spinner",t.default=i},8427:function(e,t,a){a.r(t);var n=a(257),l=a(8203),o=a(6594),s=a(5019);t.default=e=>{let{title:t="",content:a,onConfirm:r,onCancel:i,cancelButtonTitle:c=""}=e;const{t:u}=(0,s.$)();return n.createElement(l.Z,{dialogClassName:"alert-modal",show:!0,centered:!0,onHide:i},n.createElement("div",{className:"alert-modal-container"},t&&n.createElement("div",{className:"alert-modal-title"}," ",t," "),a&&n.createElement("div",{className:"alert-modal-content"}," ",a," "),null!=r?n.createElement("div",{style:{display:"flex",gap:10}},n.createElement(o.Z,{className:"alert-modal-back-button",onClick:i}," ",u("Back")," "),n.createElement(o.Z,{className:"alert-modal-confirm-button",onClick:r}," ",u("Yes")," ")):n.createElement(o.Z,{className:"alert-modal-back-button",onClick:i}," ",c||u("Back")," ")))}},395:function(e,t,a){var n=a(257),l=a(3932);t.Z=e=>{let{placeHolder:t,type:a,value:o,onChange:s,errorText:r,containerClass:i="",inputClass:c="",feedbackClass:u="",maxLength:m,...d}=e;return n.createElement("div",{className:`form-field-container ${i}`},n.createElement(l.Z.Control,Object.assign({onChange:e=>{s(e.target.value)},value:o,className:`form-field-input ${c}`,type:a,isInvalid:!!r,placeholder:t},d)),n.createElement(l.Z.Control.Feedback,{className:`form-field-feedback ${u}`,type:"invalid"}," ",r," "))}},1220:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(257),l=a(5019),o=a(8203),s=a(3932),r=a(6594),i=a(3114),c=a(5133),u=a(4329),m=a(4627),d=a(8427),p=a(7018),g=a(8304),f=a(395);var h=e=>{let{show:t,onCancel:a,onFinish:c,isDemo:p=!1,needCompanyWebsite:h=!0,defaultFullName:v="",defaultCompanyName:E="",data:b,showPolicy:N}=e;const{t:y}=(0,l.$)(),[C,_]=n.useState(v),[w,S]=n.useState(E),[Z,U]=n.useState(""),[x,M]=n.useState(""),[k,I]=n.useState(null),[L,P]=n.useState(null),[T,F]=n.useState(null),[$,H]=n.useState(null),[R,B]=n.useState(null),[A,W]=n.useState(!1);return k||n.createElement(o.Z,{centered:!0,show:t,onHide:a,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},p?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"signup-modal-title"},y("signUpModal.SetupYourAccount")),n.createElement("div",{className:"signup-modal-sub-title"},y("signUpModal.FillInYourProfileDetails"))),n.createElement(s.Z,{onSubmit:e=>{e.preventDefault();const t=(0,m.gK)(C),l=(0,m.gK)(w),o=(0,m.gK)(Z);if(0===t.length)return void P(y("signUpModal.FullNameCannotBeEmpty"));if(P(null),0===o.length)return void F(y("signUpModal.PhoneNumberCanNotBeEmpty"));if(o.length>1&&isNaN(Number(o)))return void F(y("signUpModal.PhoneNumberIsInvalid"));if(F(null),0===l.length)return void H(y("signUpModal.CompanyNameCannotBeEmpty"));if(H(null),h){if(0===(0,m.gK)(x).length)return void B(y("signUpModal.CompanyWebsiteCannotBeEmpty"));if(-1===x.indexOf("."))return void B(y("signUpModal.CompanyWebsiteIsInvalid"));B(null)}W(!0);const s=C.split(" "),r=s[0];s.splice(0,1);let i="-";if(s.length>0&&(i=s.join(" ")),!b)return void I(n.createElement(d.default,{title:"Something Wrong!",onCancel:()=>I(null)}));let p=g.CZ;p+=`api/user/${b.userId}/`;let f={first_name:(0,m.gK)(r),last_name:(0,m.gK)(i),company:l,phone_number:o};h&&(f.company_website=x),(0,u.h)(p,"PATCH",f,null,b.accessToken).then((e=>{W(!1),c(C)})).catch((e=>{W(!1);let t="";if(401===(null==e?void 0:e.status))return t="Oops, you haven't responded for a while. Please check your email to login and update more information if needed.",void I(n.createElement(d.default,{title:"Timeout",content:t,onCancel:()=>{I(null),a()},cancelButtonTitle:y("Close")}));t||void 0===e.error_message?"string"==typeof e&&(t=e):t=e.error_message.errors.join(", "),I(n.createElement(d.default,{content:t,onCancel:()=>I(null)}))}))}},n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",y("signUpModal.FullName"),"*"," "),n.createElement(f.Z,{placeHolder:y("signUpModal.EnterYourFullName"),type:"text",value:C,onChange:e=>{_(e)},errorText:L,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",y("signUpModal.PhoneNumber"),"*"," "),n.createElement(f.Z,{placeHolder:y("signUpModal.EnterYourPhoneNumber"),type:"text",value:Z,onChange:e=>{U(e)},errorText:T,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:50}),n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",y("signUpModal.CompanyName"),"*"," "),n.createElement(f.Z,{placeHolder:y("signUpModal.EnterYourCompanyName"),type:"text",value:w,onChange:e=>{S(e)},errorText:$,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),h?n.createElement(n.Fragment,null,n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",y("signUpModal.CompanyWebsite")," "),n.createElement(f.Z,{placeHolder:y("signUpModal.EnterYourCompanyWebsite"),type:"text",value:x,onChange:e=>{M(e)},errorText:R,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100})):null,N&&n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",style:{marginTop:10},dangerouslySetInnerHTML:{__html:y("signUpModal.BySigningUpYouAgreeTo")}}),n.createElement(r.Z,{type:"submit",className:"signup-modal-continue-button"},y("signUpModal.NextStep"),A?n.createElement(i.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null))))};var v=e=>{let{show:t,onCancel:a,onFinish:s,data:c}=e;const{t:m}=(0,l.$)(),[p,f]=n.useState(null),[h,v]=n.useState(null),[E,b]=n.useState(!1),N=[{label:m("pricingV2.i_do_not_know"),value:0},{label:"1-50",value:50},{label:"51-100",value:100},{label:"101-200",value:200},{label:"201 - 400",value:400},{label:"401 - 1,000",value:1e3},{label:"1,001 - 2,000",value:2e3},{label:"2,001 - 4,000",value:4e3},{label:"4,001 or more",value:4001}];return p||n.createElement(o.Z,{centered:!0,show:t,onHide:a,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},n.createElement("div",{className:"signup-modal-title"},m("signUpModal.LetsPersonalizeYour")),n.createElement("div",{className:"signup-modal-sub-title"},m("signUpModal.ApproximatelyHowMany")),n.createElement("div",{className:"signup-modal-sds-range"},N.map(((e,t)=>n.createElement("div",{key:t,className:"sds-range "+(h==e.value?"selected-sds-range":""),onClick:()=>v(e.value)},e.label)))),n.createElement(r.Z,{className:"signup-modal-continue-button",onClick:()=>{(()=>{if(null===h)return void f(n.createElement(d.default,{content:m("pricingV2.please_choose_option"),onCancel:()=>f(null)}));if(!c)return void f(n.createElement(d.default,{title:"Something Wrong!",onCancel:()=>f(null)}));b(!0);let e=g.CZ;e+=`api/user/${c.userId}/`;let t={sds_range:h,last_step:!0};(0,u.h)(e,"PATCH",t,null,c.accessToken).then((e=>{b(!1),s()})).catch((e=>{b(!1);let t="";t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),f(n.createElement(d.default,{title:t,onCancel:()=>f(null)}))}))})()}},m("signUpModal.NextStep"),E?n.createElement(i.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null)))};var E=e=>{let{show:t,onCancel:a,onFinish:c,data:p,fullName:h=""}=e;const{t:v}=(0,l.$)(),[E,b]=n.useState(null),[N,y]=n.useState(""),[C,_]=n.useState(null),[w,S]=n.useState(!1);return E||n.createElement(o.Z,{centered:!0,show:t,onHide:a,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},n.createElement("div",{className:"signup-modal-title"},v("signUpModal.LastlyTest",{userName:h})),n.createElement("div",{className:"signup-modal-sub-title"},v("signUpModal.SoYouCanGetInto")),n.createElement(s.Z,{onSubmit:e=>{if(e.preventDefault(),!N)return void _(v("signUpModal.PasswordCanNotBeEmpty"));const t=(0,m.gK)(N);if(!(0,m.uo)(t))return void _("Password need to contain at least 10 characters");if(_(null),!p)return void b(n.createElement(d.default,{title:"Something Wrong!",onCancel:()=>b(null)}));S(!0);let a=g.CZ+"api/auth/set-password/",l={token:p.setPasswordToken,userId:p.userId,password:t};(0,u.h)(a,"post",l).then((e=>{S(!1),c()})).catch((e=>{S(!1);let t="";t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),b(n.createElement(d.default,{title:t,onCancel:()=>b(null)}))}))}},n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",v("signUpModal.Password")," "),n.createElement(f.Z,{placeHolder:v("signUpModal.EnterYourPassword"),type:"password",value:N,onChange:e=>{y(e)},errorText:C,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",style:{marginTop:10},dangerouslySetInnerHTML:{__html:v("signUpModal.BySigningUpYouAgreeTo")}}),n.createElement(r.Z,{type:"submit",className:"signup-modal-continue-button"},v("signUpModal.TakeMeToMyAccount"),w?n.createElement(i.default,{style:{width:16,height:16,marginLeft:10},animation:"border"}):null))))},b=a(4070),N=a.n(b);var y=e=>{let{plan:t,show:a,onCancel:b,email:y=null,custom_type:C=g.BV.WELCOME_NEW_USER,sds_count:_,service:w,redirect_url:S,pageRef:Z,needCompanyWebsite:U=!0,isDemo:x=!1,substanceId:M,onSuccess:k,onError:I,isTrialPeriodProp:L=!0}=e;const{t:P}=(0,l.$)(),{country:T}=(0,p.l)(),[F,$]=n.useState(""),[H,R]=n.useState(""),[B,A]=n.useState(""),[W,Y]=n.useState(""),[D,K]=n.useState(_),[O,j]=n.useState(!1),[G,z]=n.useState(null),[V,q]=n.useState(!1),[X,J]=n.useState(!1),[Q,ee]=n.useState(!1),[te,ae]=n.useState(c.ZP.language),[ne,le]=n.useState(null),[oe,se]=n.useState(t||null),[re,ie]=n.useState(w||null),[ce,ue]=n.useState(C||null),[me,de]=n.useState(null),[pe,ge]=n.useState(!1),[fe,he]=n.useState(L);n.useEffect((()=>{if("undefined"==typeof window)return;if(y){$(y);const e=Ee(y);return void be({...e,email:y},k,I)}const e=new URLSearchParams(window.location.search),t=e.get("email"),a=e.get("name"),n=e.get("language"),l=e.get("subscription_plan"),o=e.get("service"),s=e.get("custom_type"),r=e.get("sds_count"),i=e.get("method"),c="true"===e.get("is_trial_period"),u={};for(let[m,d]of e.entries())"email"!==m&&"name"!==m&&"language"!==m&&"subscription_plan"!==m&&"service"!==m&&"custom_type"!==m&&"ref"!==m&&"popup"!==m&&(u[m]=d);if(a&&R(a),c&&he(c),n&&ae(n),l&&se(l),o&&ie(o),s&&ue(s),r&&K(parseInt(r)),i&&"google-signup"===i&&(q(!0),(0,m.CR)("fp9RCPeS9KkDEOyx5uED")),t){$(t);const e=Ee(t);(0,m.Th)()||(0,m.yF)()?be({...e,fullName:a||e.fullName,email:t,otherParams:u}):fetch(g.xz,{mode:"cors"}).then((function(n){const l=n.headers.get("x-country-code");l&&(window.localStorage.setItem("x-country-code",(0,m.gK)(l.toLowerCase())),be({...e,fullName:a||e.fullName,email:t,otherParams:u}))})).catch((()=>{}))}}),[]);const ve=()=>{$(""),R(""),A(""),Y(""),j(!1),b&&b()},Ee=e=>{let t=F;e&&(t=e);let a=t.split("@")[0];return a.length>0&&(a=a[0].toUpperCase()+a.slice(1)),{fullName:a,companyName:""}},be=function(e,t,a){if(void 0===t&&(t=e=>{}),void 0===a&&(a=e=>{}),!oe)return void le(n.createElement(d.default,{title:P("Error"),content:P("signUpModal.FormIsInvalid"),onCancel:()=>le(null)}));ge(!0);const l=Ne(e);(0,u.h)(g.RE,"post",l).then((a=>{var n;if("sds_inventory"===re){let e=1;switch(g.Uq[oe]){case 2:e=500;break;case 4:e=1e3;break;case 6:e=1500}(0,m.CR)("fp9RCPeS9KkDEOyx5uED")}const l={accessToken:a.access_token,refreshToken:a.refresh_token,setPasswordToken:a.set_password_token,userId:a.id,defaultLocation:null===(n=a.inventory_manager_settings)||void 0===n?void 0:n.default_location};ye(l,e),t(l)})).catch((e=>{var t;ge(!1);let o="";if(o||void 0===(null===(t=e.error_message)||void 0===t?void 0:t.errors)||(o=e.error_message.errors.join(", ")),"AUTHENTICATION_SIGNUP_EMAIL_ADDRESS_HAS_ALREADY"===e.error_code)return o=P("value_already_exist",{value:l.email}),void le(n.createElement(d.default,{title:P("Error"),content:o,onConfirm:()=>{window.location.href=`${g.rB}/login?lang=${te}&email=${F}`},onCancel:()=>{le(null),y&&a("")}}));y?a(o):(o||"string"!=typeof e||(o=e),le(n.createElement(d.default,{title:P("Error"),content:o,onCancel:()=>le(null)})))}))},Ne=e=>{const t=(0,m.gK)(e.companyName),a=(0,m.gK)(e.fullName).split(" ")[0],l=(0,m.IF)(N());let o=F;y&&(o=y),e.email&&(o=e.email);let s={email:o.toLowerCase(),first_name:(0,m.gK)(a),last_name:"-",service:re,company:t,country:(0,m.Th)("no"),default_language:te,subscription_plan:g.Uq[oe],company_website:U?W:"",phone_number:null,password:null,ref:"signup_form__"+oe,is_trial_period:fe,origination_referral:l.origination_type,origination_source:l.origination_source};if(e.otherParams&&Object.entries(e.otherParams).map((e=>{let[t,a]=e;s[t]=a})),ce&&(s.custom_type=ce),D&&(s.sds_count=D),"search-save-online"===Z&&(s.default_sds_id=M,!M)){const e=new URLSearchParams(window.location.search).get("substance_id");if(!e)return void le(n.createElement(d.default,{title:P("Error"),content:"No substance",onCancel:()=>le(null)}));s.default_sds_id=e}return s},ye=(e,t)=>{ge(!1),R(t.fullName),A(t.companyName),j(!0),z(e)},Ce=()=>{if(!G)return void le(n.createElement(d.default,{title:"Something Wrong!",onCancel:()=>le(null)}));let e=Z;if(!e){e=new URLSearchParams(window.location.search).get("ref")}e?window.location.href="search-save-online"!==e?`${g.rB}/?token=${G.refreshToken}`:`${g.rB}/location-management/?token=${G.refreshToken}`:le(n.createElement(d.default,{title:"Something Wrong!",onCancel:()=>le(null)}))};return Q&&!V?n.createElement(n.Fragment,null,n.createElement(E,{show:a,onCancel:ve,onFinish:()=>{Ce()},data:G,fullName:H}),ne):X?n.createElement(v,{show:a,onCancel:ve,onFinish:()=>{V?Ce():ee(!0)},data:G}):G||O?n.createElement(h,{show:a,onCancel:ve,isDemo:x,needCompanyWebsite:U,defaultFullName:H,defaultCompanyName:B,onFinish:e=>{D&&D>100&&(ee(!0),V&&Ce()),J(!0),R(e)},data:G,showPolicy:!!y}):n.createElement(n.Fragment,null,n.createElement(o.Z,{centered:!0,show:a,onHide:ve,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},"search-save-online"===Z?n.createElement(n.Fragment,null,n.createElement("img",{className:"search-box-result-table-icon",src:"/icons/CloudUpload.png",alt:"Pdf Icon of Search Page"}),n.createElement("div",{className:"signup-modal-title"},P("signUpModal.RegistrationIsNeeded")),n.createElement("div",{className:"signup-modal-sub-title"},P("signUpModal.LetsGetStarted"))):n.createElement(n.Fragment,null,n.createElement("div",{className:"signup-modal-title"},P("signUpModal.CreateAccount")),n.createElement("div",{className:"signup-modal-sub-title"},P("signUpModal.LetGetStartedWithAFew"))),n.createElement(s.Z,{onSubmit:e=>{if(e.preventDefault(),0==(0,m.gK)(F).length)return void de(P("EmailCanNotBeEmpty"));if(!(0,m.oH)(F))return void de(P("EmailIsInvalid"));de(null);const t=Ee();be(t)}},n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",P("signUpModal.EnterEmail"),"*"," "),n.createElement(f.Z,{placeHolder:P("signUpModal.name@company.com"),type:"text",value:F,onChange:e=>{$(e)},errorText:me,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),pe?n.createElement(r.Z,{disabled:!0,type:"submit",className:"signup-modal-continue-button"},P("search-save-online"===Z?"signUpModal.StartFreeTrial":"signUpModal.CreateAccount"),n.createElement(i.default,{style:{width:16,height:16,marginLeft:10},animation:"border"})):n.createElement(r.Z,{type:"submit",className:"signup-modal-continue-button"},P("search-save-online"===Z?"signUpModal.StartFreeTrial":"signUpModal.CreateAccount"))),n.createElement("div",{className:"signup-modal-or"}," ",P("signUpModal.Or")," "),n.createElement("a",{href:(()=>{let e="";if((0,m.tm)(S)){const t="en"===c.ZP.language?"":"/no";e+=`${g.xz+t}${S}%3F`}else e+=`${g.xz}/${T}${S}%3F`;const a=new URLSearchParams(window.location.search);let n="";for(let[t,o]of a.entries())n=n+t+"="+o+"%26";"search-save-online"===Z&&(n+=`substance_id=${M}%26`),e+=n,e+="popup=setup-account";const l={method:"google-signup",subscription_plan:t,sds_count:_,service:w,custom_type:C,ref:Z,is_trial_period:fe};for(const t in l)void 0!==l[t]&&(e=e+"%26"+t+"="+l[t]);return`${g.Up}?redirect_url=${e}`})(),className:"signup-modal-google-button",title:"Sign up with google"},n.createElement("img",{src:"/icons/GoogleLogo.png",alt:"Google Logo Icon"}),P("signUpModal.ContinueWithGoogle")),n.createElement("div",{className:"signup-modal-footer"},n.createElement("div",null," ",P("signUpModal.AlreadyHaveAnAccount")," "),n.createElement("a",{href:`${g.rB}/login/?lang=${te}`,title:"Login"}," ",P("signUpModal.LogIn")," ")),n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",style:{marginTop:10},dangerouslySetInnerHTML:{__html:P("signUpModal.BySigningUpYouAgreeTo")}}))),ne)}}}]);