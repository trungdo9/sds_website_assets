/*! For license information please see 1b4af1b302b520af8b8b57b7241ffe5aaea1efe3-44c987c2ebc14709bd18.js.LICENSE.txt */
(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[2885],{3720:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(){var e={808:function(e,t,n){var o,r,i;i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(e){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var l="";for(var s in i)i[s]&&(l+="; "+s,!0!==i[s]&&(l+="="+i[s].split(";")[0]));return document.cookie=t+"="+n+l}}function c(e,n){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var l=i[c].split("="),s=l.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var a=t(l[0]);if(s=(o.read||o)(s,a)||t(s),n)try{s=JSON.parse(s)}catch(e){}if(r[a]=s,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(t,n){i(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))},void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r),e.exports=i()},703:function(e,t,n){"use strict";var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,c){if(c!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.r(r),o.d(r,{Cookies:function(){return s()},OPTIONS:function(){return C},SAME_SITE_OPTIONS:function(){return g},VISIBLE_OPTIONS:function(){return S},default:function(){return T},getCookieConsentValue:function(){return k},resetCookieConsentValue:function(){return x}});const e=n(257);var t=o.n(e),i=o(697),c=o.n(i),l=o(808),s=o.n(l);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=["children"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function v(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C={TOP:"top",BOTTOM:"bottom",NONE:"none"},g={STRICT:"strict",LAX:"lax",NONE:"none"},S={HIDDEN:"hidden",SHOW:"show",BY_COOKIE_VALUE:"byCookieValue"},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=s().get(e);return void 0===t?s().get(j(e)):t},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;s().remove(e)},j=function(e){return"".concat(e,"-legacy")},w="CookieConsent",B=function(e){var t=e.condition,n=e.wrapper,o=e.children;return t?n(o):o},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(l,e);var n,o,r,i,c=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(i){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),h(O(t=c.call(this,e)),"handleScroll",(function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,o=document.body,r="scrollTop",i="scrollHeight";(n[r]||o[r])/((n[i]||o[i])-n.clientHeight)*100>e&&t.accept(!0)})),h(O(t),"removeScrollListener",(function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)})),t.state={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},t}return n=l,o=[{key:"componentDidMount",value:function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))}},{key:"componentWillUnmount",value:function(){this.removeScrollListener()}},{key:"accept",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props,n=t.cookieName,o=t.cookieValue,r=t.hideOnAccept,i=t.onAccept;this.setCookie(n,o),i(null!=e&&e),r&&(this.setState({visible:!1}),this.removeScrollListener())}},{key:"overlayClick",value:function(){var e=this.props,t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()}},{key:"decline",value:function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,o=e.hideOnDecline,r=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),r(),o&&this.setState({visible:!1})}},{key:"setCookie",value:function(e,t){var n=this.props,o=n.extraCookieOptions,r=n.expires,i=n.sameSite,c=this.props.cookieSecurity;void 0===c&&(c=!location||"https:"===location.protocol);var l=b(b({expires:r},o),{},{sameSite:i,secure:c});i===g.NONE&&s().set(j(e),t,l),s().set(e,t,l)}},{key:"getCookieValue",value:function(){var e=this.props.cookieName;return k(e)}},{key:"render",value:function(){var e=this;switch(this.props.visible){case S.HIDDEN:return null;case S.BY_COOKIE_VALUE:if(!this.state.visible)return null}var n=this.props,o=n.location,r=n.style,i=n.buttonStyle,c=n.declineButtonStyle,l=n.contentStyle,s=n.disableStyles,a=n.buttonText,u=n.declineButtonText,f=n.containerClasses,y=n.contentClasses,d=n.buttonClasses,v=n.buttonWrapperClasses,O=n.declineButtonClasses,m=n.buttonId,h=n.declineButtonId,g=n.disableButtonStyles,k=n.enableDeclineButton,x=n.flipButtons,j=n.ButtonComponent,w=n.overlay,P=n.overlayClasses,T=n.overlayStyle,E=n.ariaAcceptLabel,D=n.ariaDeclineLabel,_=n.customContainerAttributes,I=n.customContentAttributes,A=n.customButtonProps,N=n.customDeclineButtonProps,L=n.customButtonWrapperAttributes,R={},V={},U={},W={},M={};switch(s?(R=p({},r),V=p({},i),U=p({},c),W=p({},l),M=p({},T)):(R=p({},b(b({},this.state.style),r)),W=p({},b(b({},this.state.contentStyle),l)),M=p({},b(b({},this.state.overlayStyle),T)),g?(V=p({},i),U=p({},c)):(V=p({},b(b({},this.state.buttonStyle),i)),U=p({},b(b({},this.state.declineButtonStyle),c)))),o){case C.TOP:R.top="0";break;case C.BOTTOM:R.bottom="0"}var H=[];return k&&H.push(t().createElement(j,p({key:"declineButton",style:U,className:O,id:h,"aria-label":D,onClick:function(){e.decline()}},N),u)),H.push(t().createElement(j,p({key:"acceptButton",style:V,className:d,id:m,"aria-label":E,onClick:function(){e.accept()}},A),a)),x&&H.reverse(),t().createElement(B,{condition:w,wrapper:function(n){return t().createElement("div",{style:M,className:P,onClick:function(){e.overlayClick()}},n)}},t().createElement("div",p({className:"".concat(f),style:R},_),t().createElement("div",p({style:W,className:y},I),this.props.children),t().createElement("div",p({className:"".concat(v)},L),H.map((function(e){return e})))))}}],o&&y(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),l}(e.Component);P.propTypes={location:c().oneOf(Object.keys(C).map((function(e){return C[e]}))),visible:c().oneOf(Object.keys(S).map((function(e){return S[e]}))),sameSite:c().oneOf(Object.keys(g).map((function(e){return g[e]}))),style:c().object,buttonStyle:c().object,declineButtonStyle:c().object,contentStyle:c().object,children:c().any,disableStyles:c().bool,hideOnAccept:c().bool,hideOnDecline:c().bool,onAccept:c().func,onDecline:c().func,buttonText:c().oneOfType([c().string,c().func,c().element]),declineButtonText:c().oneOfType([c().string,c().func,c().element]),cookieName:c().string,cookieValue:c().oneOfType([c().string,c().bool,c().number]),declineCookieValue:c().oneOfType([c().string,c().bool,c().number]),setDeclineCookie:c().bool,debug:c().bool,expires:c().number,containerClasses:c().string,contentClasses:c().string,buttonClasses:c().string,buttonWrapperClasses:c().string,declineButtonClasses:c().string,buttonId:c().string,declineButtonId:c().string,extraCookieOptions:c().object,disableButtonStyles:c().bool,enableDeclineButton:c().bool,flipButtons:c().bool,ButtonComponent:c().elementType,cookieSecurity:c().bool,overlay:c().bool,overlayClasses:c().string,overlayStyle:c().object,onOverlayClick:c().func,acceptOnOverlayClick:c().bool,ariaAcceptLabel:c().string,ariaDeclineLabel:c().string,acceptOnScroll:c().bool,acceptOnScrollPercentage:c().number,customContentAttributes:c().object,customContainerAttributes:c().object,customButtonProps:c().object,customDeclineButtonProps:c().object,customButtonWrapperAttributes:c().object},P.defaultProps={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:C.BOTTOM,visible:S.BY_COOKIE_VALUE,onAccept:function(){},onDecline:function(){},cookieName:w,cookieValue:!0,declineCookieValue:!1,setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:g.LAX,ButtonComponent:function(e){var n=e.children,o=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,u);return t().createElement("button",o,n)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{}};const T=P}(),r}()}}]);