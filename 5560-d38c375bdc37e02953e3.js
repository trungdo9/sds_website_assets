"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[5560,2413,9335,3114],{4653:function(e,t,a){var n=a(5900),l=a.n(n),o=a(257),s=a(5697),r=a.n(s),i=a(1312);const c={type:r().string,tooltip:r().bool,as:r().elementType},m=o.forwardRef(((e,t)=>{let{as:a="div",className:n,type:o="valid",tooltip:s=!1,...r}=e;return(0,i.tZ)(a,{...r,ref:t,className:l()(n,`${o}-${s?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=c,t.Z=m},3932:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(5900),l=a.n(n),o=a(5697),s=a.n(o),r=a(257),i=a(4653),c=a(4709),m=a(8788),u=a(9541),d=a(1312);const p=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,htmlFor:o,...s}=e;const{controlId:i}=(0,r.useContext)(m.Z);return a=(0,u.vE)(a,"form-check-label"),(0,d.tZ)("label",{...s,ref:t,htmlFor:o||i,className:l()(n,a)})}));p.displayName="FormCheckLabel";var g=p;const f=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,bsSwitchPrefix:o,inline:s=!1,reverse:p=!1,disabled:f=!1,isValid:v=!1,isInvalid:b=!1,feedbackTooltip:h=!1,feedback:y,feedbackType:E,className:N,style:C,title:Z="",type:_="checkbox",label:x,children:w,as:$="input",...k}=e;n=(0,u.vE)(n,"form-check"),o=(0,u.vE)(o,"form-switch");const{controlId:U}=(0,r.useContext)(m.Z),I=(0,r.useMemo)((()=>({controlId:a||U})),[U,a]),S=!w&&null!=x&&!1!==x||function(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}(w,g),M=(0,d.tZ)(c.Z,{...k,type:"switch"===_?"checkbox":_,ref:t,isValid:v,isInvalid:b,disabled:f,as:$});return(0,d.tZ)(m.Z.Provider,{value:I,children:(0,d.tZ)("div",{style:C,className:l()(N,S&&n,s&&`${n}-inline`,p&&`${n}-reverse`,"switch"===_&&o),children:w||(0,d.BX)(d.HY,{children:[M,S&&(0,d.tZ)(g,{title:Z,children:x}),y&&(0,d.tZ)(i.Z,{type:E,tooltip:h,children:y})]})})})}));f.displayName="FormCheck";var v=Object.assign(f,{Input:c.Z,Label:g}),b=a(1760),h=(0,a(8870).Z)("form-floating");const y=r.forwardRef(((e,t)=>{let{controlId:a,as:n="div",...l}=e;const o=(0,r.useMemo)((()=>({controlId:a})),[a]);return(0,d.tZ)(m.Z.Provider,{value:o,children:(0,d.tZ)(n,{...l,ref:t})})}));y.displayName="FormGroup";var E=y,N=(a(2473),a(7408));const C=r.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:n,column:o,visuallyHidden:s,className:i,htmlFor:c,...p}=e;const{controlId:g}=(0,r.useContext)(m.Z);n=(0,u.vE)(n,"form-label");let f="col-form-label";"string"==typeof o&&(f=`${f} ${f}-${o}`);const v=l()(i,n,s&&"visually-hidden",o&&f);return c=c||g,o?(0,d.tZ)(N.Z,{ref:t,as:"label",className:v,htmlFor:c,...p}):(0,d.tZ)(a,{ref:t,className:v,htmlFor:c,...p})}));C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};var Z=C;const _=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,id:o,...s}=e;const{controlId:i}=(0,r.useContext)(m.Z);return a=(0,u.vE)(a,"form-range"),(0,d.tZ)("input",{...s,type:"range",ref:t,className:l()(n,a),id:o||i})}));_.displayName="FormRange";var x=_;const w=r.forwardRef(((e,t)=>{let{bsPrefix:a,size:n,htmlSize:o,className:s,isValid:i=!1,isInvalid:c=!1,id:p,...g}=e;const{controlId:f}=(0,r.useContext)(m.Z);return a=(0,u.vE)(a,"form-select"),(0,d.tZ)("select",{...g,size:o,ref:t,className:l()(s,a,n&&`${a}-${n}`,i&&"is-valid",c&&"is-invalid"),id:p||f})}));w.displayName="FormSelect";var $=w;const k=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:o="small",muted:s,...r}=e;return a=(0,u.vE)(a,"form-text"),(0,d.tZ)(o,{...r,ref:t,className:l()(n,a,s&&"text-muted")})}));k.displayName="FormText";var U=k;const I=r.forwardRef(((e,t)=>(0,d.tZ)(v,{...e,ref:t,type:"switch"})));I.displayName="Switch";var S=Object.assign(I,{Input:v.Input,Label:v.Label});const M=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,children:o,controlId:s,label:r,...i}=e;return a=(0,u.vE)(a,"form-floating"),(0,d.BX)(E,{ref:t,className:l()(n,a),controlId:s,...i,children:[o,(0,d.tZ)("label",{htmlFor:s,children:r})]})}));M.displayName="FloatingLabel";var L=M;const F={_ref:s().any,validated:s().bool,as:s().elementType},P=r.forwardRef(((e,t)=>{let{className:a,validated:n,as:o="form",...s}=e;return(0,d.tZ)(o,{...s,ref:t,className:l()(a,n&&"was-validated")})}));P.displayName="Form",P.propTypes=F;var T=Object.assign(P,{Group:E,Control:b.Z,Floating:h,Check:v,Switch:S,Label:Z,Text:U,Range:x,Select:$,FloatingLabel:L})},4709:function(e,t,a){var n=a(5900),l=a.n(n),o=a(257),s=a(8788),r=a(9541),i=a(1312);const c=o.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:c,type:m="checkbox",isValid:u=!1,isInvalid:d=!1,as:p="input",...g}=e;const{controlId:f}=(0,o.useContext)(s.Z);return n=(0,r.vE)(n,"form-check-input"),(0,i.tZ)(p,{...g,ref:t,type:m,id:a||f,className:l()(c,n,u&&"is-valid",d&&"is-invalid")})}));c.displayName="FormCheckInput",t.Z=c},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),l=a.n(n),o=a(257),s=(a(2473),a(4653)),r=a(8788),i=a(9541),c=a(1312);const m=o.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:s,htmlSize:m,id:u,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:f,readOnly:v,as:b="input",...h}=e;const{controlId:y}=(0,o.useContext)(r.Z);let E;return a=(0,i.vE)(a,"form-control"),E=f?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${s}`]:s},(0,c.tZ)(b,{...h,type:n,size:m,ref:t,readOnly:v,id:u||y,className:l()(d,E,p&&"is-valid",g&&"is-invalid","color"===n&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:s.Z})},3114:function(e,t,a){a.r(t);var n=a(5900),l=a.n(n),o=a(257),s=a(9541),r=a(1312);const i=o.forwardRef(((e,t)=>{let{bsPrefix:a,variant:n,animation:o,size:i,as:c="div",className:m,...u}=e;a=(0,s.vE)(a,"spinner");const d=`${a}-${o}`;return(0,r.tZ)(c,{ref:t,...u,className:l()(m,d,i&&`${d}-${i}`,n&&`text-${n}`)})}));i.displayName="Spinner",t.default=i},9335:function(e,t,a){a.r(t);var n=a(257),l=a(8203),o=a(6594),s=a(5019);t.default=e=>{let{title:t="",content:a,onConfirm:r,onCancel:i,cancelButtonTitle:c=""}=e;const{t:m}=(0,s.$)();return n.createElement(l.Z,{dialogClassName:"alert-modal",show:!0,centered:!0,onHide:i},n.createElement("div",{className:"alert-modal-container"},t&&n.createElement("div",{className:"alert-modal-title"}," ",t," "),a&&n.createElement("div",{className:"alert-modal-content"}," ",a," "),null!=r?n.createElement("div",{style:{display:"flex",gap:10}},n.createElement(o.Z,{className:"alert-modal-back-button",onClick:i}," ",m("Back")," "),n.createElement(o.Z,{className:"alert-modal-confirm-button",onClick:r}," ",m("Yes")," ")):n.createElement(o.Z,{className:"alert-modal-back-button",onClick:i}," ",c||m("Back")," ")))}},9652:function(e,t,a){var n=a(257),l=a(3932);t.Z=e=>{let{placeHolder:t,type:a,value:o,onChange:s,errorText:r,containerClass:i="",inputClass:c="",feedbackClass:m="",maxLength:u,...d}=e;return n.createElement("div",{className:`form-field-container ${i}`},n.createElement(l.Z.Control,Object.assign({onChange:e=>{s(e.target.value)},value:o,className:`form-field-input ${c}`,type:a,isInvalid:!!r,placeholder:t},d)),n.createElement(l.Z.Control.Feedback,{className:`form-field-feedback ${m}`,type:"invalid"}," ",r," "))}},5560:function(e,t,a){a.r(t);var n=a(257),l=a(5019),o=a(3932),s=a(8203),r=a(6594),i=a(3114),c=a(3586),m=a(847),u=a(370),d=a(9335),p=a(1514),g=a(2986),f=a(9652),v=a(2216);t.default=e=>{let{plan:t,show:a,onCancel:b,email:h=null,custom_type:y=null,sds_count:E,service:N,redirect_url:C,pageRef:Z,needCompanyWebsite:_=!0,isDemo:x=!1,defaultToken:w=null,defaultFullName:$=null,defaultCompanyName:k=null,isTrialPeriodProp:U=!0}=e;const{t:I}=(0,l.$)(),{geoCountry:S,changeGeoCountry:M,country:L}=(0,p.l)(),[F,P]=n.useState(""),[T,R]=n.useState(""),[A,H]=n.useState(""),[B,O]=n.useState(""),[Y,z]=n.useState(""),[D,j]=n.useState(!1),[G,K]=n.useState(c.ZP.language),[W,V]=n.useState(null),[q,X]=n.useState(t||null),[J,Q]=n.useState(N||null),[ee,te]=n.useState(y||null),[ae,ne]=n.useState({}),[le,oe]=n.useState(!1),[se,re]=n.useState(null),[ie,ce]=n.useState(null),[me,ue]=n.useState(null),[de,pe]=n.useState(null),[ge,fe]=n.useState(null),[ve,be]=n.useState(!1),[he,ye]=n.useState(U);n.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("email"),a=e.get("name"),n=e.get("language"),l=e.get("subscription_plan"),o=e.get("service"),s=e.get("custom_type"),r="true"===e.get("is_trial_period"),i={};for(let[c,m]of e.entries())"email"!==c&&"name"!==c&&"language"!==c&&"subscription_plan"!==c&&"service"!==c&&"custom_type"!==c&&"ref"!==c&&"popup"!==c&&"sds_count"!==c&&(i[c]=m);ne(i),t&&(P(t),j(!0)),a&&R(a),r&&ye(r),n&&K(n),l&&X(l),o&&Q(o),s&&te(s),s&&te(s)}),[]);const Ee=()=>{P(""),R(""),H(""),z(""),j(!1),oe(!1),b&&b()},Ne=e=>{e.preventDefault();const t=(0,u.gK)(T),a=(0,u.gK)(A),l=(0,u.gK)(B);if(0===t.length)return void ce(I("signUpModal.FullNameCannotBeEmpty"));if(ce(null),0===l.length)return void ue(I("signUpModal.PhoneNumberCanNotBeEmpty"));if(l.length>1&&isNaN(Number(l)))return void ue(I("signUpModal.PhoneNumberIsInvalid"));if(ue(null),0===a.length)return void pe(I("signUpModal.CompanyNameCannotBeEmpty"));if(pe(null),_){if(0===(0,u.gK)(Y).length)return void fe(I("signUpModal.CompanyWebsiteCannotBeEmpty"));if(-1===Y.indexOf("."))return void fe(I("signUpModal.CompanyWebsiteIsInvalid"));fe(null)}if(!q)return void V(n.createElement(d.default,{title:I("Error"),content:I("signUpModal.FormIsInvalid"),onConfirm:()=>V(null),onCancel:()=>V(null)}));be(!0);const o=T.split(" "),s=o[0];o.splice(0,1);let r="-";o.length>0&&(r=o.join(" "));const i=g.RE;let c={email:h?h.toLowerCase():F.toLowerCase(),first_name:(0,u.gK)(s),last_name:(0,u.gK)(r),service:J,company:a,country:(0,u.Th)("no"),default_language:G,subscription_plan:g.Uq[q],company_website:_?Y:"",phone_number:l,password:null,ref:"signup_form__"+q};Object.entries(ae).map((e=>{let[t,a]=e;c[t]=a})),ee&&(c.custom_type=ee),E&&(c.sds_count=E),(0,m.h)(i,"post",c).then((e=>{if("sds_inventory"===J){let e=1;switch(g.Uq[q]){case 2:e=500;break;case 4:e=1e3;break;case 6:e=1500}(0,u.CR)("fp9RCPeS9KkDEOyx5uED")}be(!1),oe(!0),e.login_token_link&&(window.location.href=e.login_token_link)})).catch((e=>{be(!1);let t="";if("AUTHENTICATION_SIGNUP_EMAIL_ADDRESS_HAS_ALREADY"===e.error_code)return t=I("value_already_exist",{value:c.email}),void V(n.createElement(d.default,{title:I("Error"),content:t,onConfirm:()=>{window.location.href=`${g.rB}/login?lang=${G}&email=${F}`},onCancel:()=>{V(null)}}));t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),t||"string"!=typeof e||(t=e),V(n.createElement(d.default,{title:I("Error"),content:t,onConfirm:()=>V(null),onCancel:()=>V(null)}))}))};return le?n.createElement(n.Fragment,null,n.createElement(s.Z,{centered:!0,show:a,onHide:Ee,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),n.createElement("div",{className:"signup-modal-container signup-modal-success"},n.createElement(v.LazyLoadImage,{alt:"logo",height:167,src:"/images/logo/logo-full-yellow-light.svg",width:500}),n.createElement("div",{className:"signup-modal-title"},I("signUpModal.AlmostDone")),n.createElement("div",{className:"signup-modal-sub-title"},I("signUpModal.YourAccountIsAlmostReady")," ",h?h.toLowerCase():F.toLowerCase()))),W):null!=h||D?W||n.createElement(s.Z,{centered:!0,show:a,onHide:Ee,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},x?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"signup-modal-title"},I("signUpModal.SetupYourAccount")),n.createElement("div",{className:"signup-modal-sub-title"},I("signUpModal.FillInYourProfileDetails"))),n.createElement(o.Z,{onSubmit:Ne},n.createElement(o.Z.Label,{className:"signup-modal-label"}," ",I("signUpModal.FullName"),"*"," "),n.createElement(f.Z,{placeHolder:I("signUpModal.EnterYourFullName"),type:"text",value:T,onChange:e=>{R(e)},errorText:ie,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement(o.Z.Label,{className:"signup-modal-label"}," ",I("signUpModal.PhoneNumber"),"*"," "),n.createElement(f.Z,{placeHolder:I("signUpModal.EnterYourPhoneNumber"),type:"text",value:B,onChange:e=>{O(e)},errorText:me,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:50}),n.createElement(o.Z.Label,{className:"signup-modal-label"}," ",I("signUpModal.CompanyName"),"*"," "),n.createElement(f.Z,{placeHolder:I("signUpModal.EnterYourCompanyName"),type:"text",value:A,onChange:e=>{H(e)},errorText:de,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),_?n.createElement(n.Fragment,null,n.createElement(o.Z.Label,{className:"signup-modal-label"}," ",I("signUpModal.CompanyWebsite")," "),n.createElement(f.Z,{placeHolder:I("signUpModal.EnterYourCompanyWebsite"),type:"text",value:Y,onChange:e=>{z(e)},errorText:ge,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100})):null,x?n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",dangerouslySetInnerHTML:{__html:I("signUpModal.ByContinuingYouAgree")}}):n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",dangerouslySetInnerHTML:{__html:I("signUpModal.BySigningUpYouAgreeTo")}}),ve?n.createElement(r.Z,{disabled:!0,type:"submit",className:"signup-modal-continue-button"},I(x?"signUpModal.Continue":"signUpModal.CreateAccount"),n.createElement(i.default,{style:{width:16,height:16,marginLeft:10},animation:"border"})):n.createElement(r.Z,{type:"submit",className:"signup-modal-continue-button"},I(x?"signUpModal.Continue":"signUpModal.CreateAccount")),null==h?n.createElement(r.Z,{onClick:()=>{j(!1)},className:"signup-modal-back-button"},I("Back")):null))):n.createElement(n.Fragment,null,n.createElement(s.Z,{centered:!0,show:a,onHide:Ee,backdrop:"static"},n.createElement(s.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},n.createElement("div",{className:"signup-modal-title"},I("signUpModal.CreateAccount")),n.createElement("div",{className:"signup-modal-sub-title"},I("signUpModal.LetGetStartedWithAFew")),n.createElement(o.Z,{onSubmit:e=>{e.preventDefault(),0!=(0,u.gK)(F).length?(0,u.oH)(F)?(re(null),j(!0)):re(I("EmailIsInvalid")):re(I("EmailCanNotBeEmpty"))}},n.createElement(o.Z.Label,{className:"signup-modal-label"}," ",I("signUpModal.EnterEmail"),"*"," "),n.createElement(f.Z,{placeHolder:I("signUpModal.name@company.com"),type:"text",value:F,onChange:e=>{P(e)},errorText:se,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement(r.Z,{type:"submit",className:"signup-modal-continue-button"}," ",I("signUpModal.CreateAccount")," ")),n.createElement("div",{className:"signup-modal-or"}," ",I("signUpModal.Or")," "),n.createElement("a",{href:(()=>{if(console.log("isTrialPeriod",he),(0,u.tm)(C)){const e="en"===c.ZP.language?"":"/no";return`${g.Up}?redirect_url=${g.xz+e}${C}%3Fpopup=setup-account%26subscription_plan=${t}${E?"%26sds_count="+E:""}%26service=${N}${y?"%26custom_type="+y:""}%26ref=${Z}%26is_trial_period=${he}`}return`${g.Up}?redirect_url=${g.xz}/${L}${C}%3Fpopup=setup-account%26subscription_plan=${t}${E?"%26sds_count="+E:""}%26service=${N}${y?"%26custom_type="+y:""}%26ref=${Z}%26is_trial_period=${he}`})(),className:"signup-modal-google-button",title:"google login"},n.createElement("img",{src:"/icons/GoogleLogo.png",alt:"Google Logo Icon"}),I("signUpModal.ContinueWithGoogle")),n.createElement("div",{className:"signup-modal-footer"},n.createElement("div",null," ",I("signUpModal.AlreadyHaveAnAccount")," "),n.createElement("a",{href:`${g.rB}/login/?lang=${G}`,title:"Login"}," ",I("signUpModal.LogIn")," ")))),W)}}}]);