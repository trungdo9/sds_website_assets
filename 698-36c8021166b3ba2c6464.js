"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[698,408,114,921],{4653:function(e,t,a){var n=a(5900),l=a.n(n),s=a(257),o=a(5697),i=a.n(o),r=a(1312);const c={type:i().string,tooltip:i().bool,as:i().elementType},u=s.forwardRef(((e,t)=>{let{as:a="div",className:n,type:s="valid",tooltip:o=!1,...i}=e;return(0,r.tZ)(a,{...i,ref:t,className:l()(n,`${s}-${o?"tooltip":"feedback"}`)})}));u.displayName="Feedback",u.propTypes=c,t.Z=u},4709:function(e,t,a){var n=a(5900),l=a.n(n),s=a(257),o=a(8788),i=a(9541),r=a(1312);const c=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:c,type:u="checkbox",isValid:m=!1,isInvalid:d=!1,as:p="input",...g}=e;const{controlId:f}=(0,s.useContext)(o.Z);return n=(0,i.vE)(n,"form-check-input"),(0,r.tZ)(p,{...g,ref:t,type:u,id:a||f,className:l()(c,n,m&&"is-valid",d&&"is-invalid")})}));c.displayName="FormCheckInput",t.Z=c},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),l=a.n(n),s=a(257),o=(a(2473),a(4653)),i=a(8788),r=a(9541),c=a(1312);const u=s.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:o,htmlSize:u,id:m,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:f,readOnly:E,as:v="input",...y}=e;const{controlId:C}=(0,s.useContext)(i.Z);let b;return a=(0,r.vE)(a,"form-control"),b=f?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${o}`]:o},(0,c.tZ)(v,{...y,type:n,size:u,ref:t,readOnly:E,id:m||C,className:l()(d,b,p&&"is-valid",g&&"is-invalid","color"===n&&`${a}-color`)})}));u.displayName="FormControl",t.Z=Object.assign(u,{Feedback:o.Z})},3114:function(e,t,a){a.r(t);var n=a(5900),l=a.n(n),s=a(257),o=a(9541),i=a(1312);const r=s.forwardRef(((e,t)=>{let{bsPrefix:a,variant:n,animation:s,size:r,as:c="div",className:u,...m}=e;a=(0,o.vE)(a,"spinner");const d=`${a}-${s}`;return(0,i.tZ)(c,{ref:t,...m,className:l()(u,d,r&&`${d}-${r}`,n&&`text-${n}`)})}));r.displayName="Spinner",t.default=r},8427:function(e,t,a){a.r(t);var n=a(257),l=a(8203),s=a(6594),o=a(5019);t.default=e=>{let{title:t="",content:a,onConfirm:i,onCancel:r,cancelButtonTitle:c=""}=e;const{t:u}=(0,o.$)();return n.createElement(l.Z,{dialogClassName:"alert-modal",show:!0,centered:!0,onHide:r},n.createElement("div",{className:"alert-modal-container"},t&&n.createElement("div",{className:"alert-modal-title"}," ",t," "),a&&n.createElement("div",{className:"alert-modal-content"}," ",a," "),null!=i?n.createElement("div",{style:{display:"flex",gap:10}},n.createElement(s.Z,{className:"alert-modal-back-button",onClick:r}," ",u("Back")," "),n.createElement(s.Z,{className:"alert-modal-confirm-button",onClick:i}," ",u("Yes")," ")):n.createElement(s.Z,{className:"alert-modal-back-button",onClick:r}," ",c||u("Back")," ")))}},395:function(e,t,a){var n=a(257),l=a(3932);t.Z=e=>{let{placeHolder:t,type:a,value:s,onChange:o,errorText:i,containerClass:r="",inputClass:c="",feedbackClass:u="",maxLength:m,...d}=e;return n.createElement("div",{className:`form-field-container ${r}`},n.createElement(l.Z.Control,Object.assign({onChange:e=>{o(e.target.value)},value:s,className:`form-field-input ${c}`,type:a,isInvalid:!!i,placeholder:t},d)),n.createElement(l.Z.Control.Feedback,{className:`form-field-feedback ${u}`,type:"invalid"}," ",i," "))}},3009:function(e,t,a){a.r(t);var n=a(257),l=a(5019),s=a(3932),o=a(8203),i=a(6594),r=a(3114),c=a(3586),u=a(4329),m=a(4627),d=a(8427),p=a(7018),g=a(8304),f=a(395),E=a(2216);t.default=e=>{let{plan:t,show:a,onCancel:v,email:y=null,custom_type:C=null,sds_count:b,service:h,redirect_url:N,pageRef:_,needCompanyWebsite:U=!0,isDemo:S=!1,defaultToken:Z=null,defaultFullName:$=null,defaultCompanyName:M=null,isTrialPeriodProp:k=!0}=e;const{t:w}=(0,l.$)(),{geoCountry:x,changeGeoCountry:L,country:I}=(0,p.l)(),[T,A]=n.useState(""),[H,F]=n.useState(""),[P,B]=n.useState(""),[R,O]=n.useState(""),[Y,D]=n.useState(""),[z,K]=n.useState(!1),[W,j]=n.useState(c.ZP.language),[G,q]=n.useState(null),[J,V]=n.useState(t||null),[X,Q]=n.useState(h||null),[ee,te]=n.useState(C||null),[ae,ne]=n.useState({}),[le,se]=n.useState(!1),[oe,ie]=n.useState(null),[re,ce]=n.useState(null),[ue,me]=n.useState(null),[de,pe]=n.useState(null),[ge,fe]=n.useState(null),[Ee,ve]=n.useState(!1),[ye,Ce]=n.useState(k);n.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("email"),a=e.get("name"),n=e.get("language"),l=e.get("subscription_plan"),s=e.get("service"),o=e.get("custom_type"),i="true"===e.get("is_trial_period"),r={};for(let[c,u]of e.entries())"email"!==c&&"name"!==c&&"language"!==c&&"subscription_plan"!==c&&"service"!==c&&"custom_type"!==c&&"ref"!==c&&"popup"!==c&&"sds_count"!==c&&(r[c]=u);ne(r),t&&(A(t),K(!0)),a&&F(a),i&&Ce(i),n&&j(n),l&&V(l),s&&Q(s),o&&te(o),o&&te(o)}),[]);const be=()=>{A(""),F(""),B(""),D(""),K(!1),se(!1),v&&v()},he=e=>{e.preventDefault();const t=(0,m.gK)(H),a=(0,m.gK)(P),l=(0,m.gK)(R);if(0===t.length)return void ce(w("signUpModal.FullNameCannotBeEmpty"));if(ce(null),0===l.length)return void me(w("signUpModal.PhoneNumberCanNotBeEmpty"));if(l.length>1&&isNaN(Number(l)))return void me(w("signUpModal.PhoneNumberIsInvalid"));if(me(null),0===a.length)return void pe(w("signUpModal.CompanyNameCannotBeEmpty"));if(pe(null),U){if(0===(0,m.gK)(Y).length)return void fe(w("signUpModal.CompanyWebsiteCannotBeEmpty"));if(-1===Y.indexOf("."))return void fe(w("signUpModal.CompanyWebsiteIsInvalid"));fe(null)}if(!J)return void q(n.createElement(d.default,{title:w("Error"),content:w("signUpModal.FormIsInvalid"),onConfirm:()=>q(null),onCancel:()=>q(null)}));ve(!0);const s=H.split(" "),o=s[0];s.splice(0,1);let i="-";s.length>0&&(i=s.join(" "));const r=g.RE;let c={email:y?y.toLowerCase():T.toLowerCase(),first_name:(0,m.gK)(o),last_name:(0,m.gK)(i),service:X,company:a,country:(0,m.Th)("no"),default_language:W,subscription_plan:g.Uq[J],company_website:U?Y:"",phone_number:l,password:null,ref:"signup_form__"+J};Object.entries(ae).map((e=>{let[t,a]=e;c[t]=a})),ee&&(c.custom_type=ee),b&&(c.sds_count=b),(0,u.h)(r,"post",c).then((e=>{if("sds_inventory"===X){let e=1;switch(g.Uq[J]){case 2:e=500;break;case 4:e=1e3;break;case 6:e=1500}(0,m.CR)("fp9RCPeS9KkDEOyx5uED")}ve(!1),se(!0),e.login_token_link&&(window.location.href=e.login_token_link)})).catch((e=>{ve(!1);let t="";if("AUTHENTICATION_SIGNUP_EMAIL_ADDRESS_HAS_ALREADY"===e.error_code)return t=w("value_already_exist",{value:c.email}),void q(n.createElement(d.default,{title:w("Error"),content:t,onConfirm:()=>{window.location.href=`${g.rB}/login?lang=${W}&email=${T}`},onCancel:()=>{q(null)}}));t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),t||"string"!=typeof e||(t=e),q(n.createElement(d.default,{title:w("Error"),content:t,onConfirm:()=>q(null),onCancel:()=>q(null)}))}))};return le?n.createElement(n.Fragment,null,n.createElement(o.Z,{centered:!0,show:a,onHide:be,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),n.createElement("div",{className:"signup-modal-container signup-modal-success"},n.createElement(E.LazyLoadImage,{alt:"logo",height:167,src:"/images/logo/logo-full-yellow-light.svg",width:500}),n.createElement("div",{className:"signup-modal-title"},w("signUpModal.AlmostDone")),n.createElement("div",{className:"signup-modal-sub-title"},w("signUpModal.YourAccountIsAlmostReady")," ",y?y.toLowerCase():T.toLowerCase()))),G):null!=y||z?G||n.createElement(o.Z,{centered:!0,show:a,onHide:be,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},S?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"signup-modal-title"},w("signUpModal.SetupYourAccount")),n.createElement("div",{className:"signup-modal-sub-title"},w("signUpModal.FillInYourProfileDetails"))),n.createElement(s.Z,{onSubmit:he},n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",w("signUpModal.FullName"),"*"," "),n.createElement(f.Z,{placeHolder:w("signUpModal.EnterYourFullName"),type:"text",value:H,onChange:e=>{F(e)},errorText:re,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",w("signUpModal.PhoneNumber"),"*"," "),n.createElement(f.Z,{placeHolder:w("signUpModal.EnterYourPhoneNumber"),type:"text",value:R,onChange:e=>{O(e)},errorText:ue,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:50}),n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",w("signUpModal.CompanyName"),"*"," "),n.createElement(f.Z,{placeHolder:w("signUpModal.EnterYourCompanyName"),type:"text",value:P,onChange:e=>{B(e)},errorText:de,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),U?n.createElement(n.Fragment,null,n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",w("signUpModal.CompanyWebsite")," "),n.createElement(f.Z,{placeHolder:w("signUpModal.EnterYourCompanyWebsite"),type:"text",value:Y,onChange:e=>{D(e)},errorText:ge,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100})):null,S?n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",dangerouslySetInnerHTML:{__html:w("signUpModal.ByContinuingYouAgree")}}):n.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",dangerouslySetInnerHTML:{__html:w("signUpModal.BySigningUpYouAgreeTo")}}),Ee?n.createElement(i.Z,{disabled:!0,type:"submit",className:"signup-modal-continue-button"},w(S?"signUpModal.Continue":"signUpModal.CreateAccount"),n.createElement(r.default,{style:{width:16,height:16,marginLeft:10},animation:"border"})):n.createElement(i.Z,{type:"submit",className:"signup-modal-continue-button"},w(S?"signUpModal.Continue":"signUpModal.CreateAccount")),null==y?n.createElement(i.Z,{onClick:()=>{K(!1)},className:"signup-modal-back-button"},w("Back")):null))):n.createElement(n.Fragment,null,n.createElement(o.Z,{centered:!0,show:a,onHide:be,backdrop:"static"},n.createElement(o.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),n.createElement("div",{className:"signup-modal-container"},n.createElement("div",{className:"signup-modal-title"},w("signUpModal.CreateAccount")),n.createElement("div",{className:"signup-modal-sub-title"},w("signUpModal.LetGetStartedWithAFew")),n.createElement(s.Z,{onSubmit:e=>{e.preventDefault(),0!=(0,m.gK)(T).length?(0,m.oH)(T)?(ie(null),K(!0)):ie(w("EmailIsInvalid")):ie(w("EmailCanNotBeEmpty"))}},n.createElement(s.Z.Label,{className:"signup-modal-label"}," ",w("signUpModal.EnterEmail"),"*"," "),n.createElement(f.Z,{placeHolder:w("signUpModal.name@company.com"),type:"text",value:T,onChange:e=>{A(e)},errorText:oe,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),n.createElement(i.Z,{type:"submit",className:"signup-modal-continue-button"}," ",w("signUpModal.CreateAccount")," ")),n.createElement("div",{className:"signup-modal-or"}," ",w("signUpModal.Or")," "),n.createElement("a",{href:(()=>{if(console.log("isTrialPeriod",ye),(0,m.tm)(N)){const e="en"===c.ZP.language?"":"/no";return`${g.Up}?redirect_url=${g.xz+e}${N}%3Fpopup=setup-account%26subscription_plan=${t}${b?"%26sds_count="+b:""}%26service=${h}${C?"%26custom_type="+C:""}%26ref=${_}%26is_trial_period=${ye}`}return`${g.Up}?redirect_url=${g.xz}/${I}${N}%3Fpopup=setup-account%26subscription_plan=${t}${b?"%26sds_count="+b:""}%26service=${h}${C?"%26custom_type="+C:""}%26ref=${_}%26is_trial_period=${ye}`})(),className:"signup-modal-google-button",title:"google login"},n.createElement("img",{src:"/icons/GoogleLogo.png",alt:"Google Logo Icon"}),w("signUpModal.ContinueWithGoogle")),n.createElement("div",{className:"signup-modal-footer"},n.createElement("div",null," ",w("signUpModal.AlreadyHaveAnAccount")," "),n.createElement("a",{href:`${g.rB}/login/?lang=${W}`,title:"Login"}," ",w("signUpModal.LogIn")," ")))),G)}},4329:function(e,t,a){function n(e,t,a,n,l){return new Promise(((s,o)=>{const i=new XMLHttpRequest;i.onreadystatechange=()=>{if(4===i.readyState){let t;switch(i.status){case 200:try{t=JSON.parse(i.responseText)}catch(e){t=i.status}s(t);break;case 201:try{t=JSON.parse(i.responseText)}catch(e){t=i.status}s(t);break;case 400:case 401:case 403:case 409:case 290:case 490:case 500:try{t=JSON.parse(i.responseText),t.status=i.status}catch(e){t="Server currently under maintenance, please try again later."}break;default:t="Server currently under maintenance, please try again later."}o(t)}},i.open(t,e,!0),l&&i.setRequestHeader("Authorization","JWT "+l),n?i.send(n):(i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.send(JSON.stringify(a)))}))}a.d(t,{h:function(){return n}})}}]);
//# sourceMappingURL=698-36c8021166b3ba2c6464.js.map