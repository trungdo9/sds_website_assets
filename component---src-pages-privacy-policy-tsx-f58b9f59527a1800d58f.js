"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[806],{5818:function(e,t,a){var n=a(257),c=a(5019),l=a(6187),r=a(1035);t.Z=e=>{let{headline:t,headlineStyle:a="",title:o,titleStyle:i="",content:s,contentStyle:d="",containerStyle:m="",style:y="",readMoreUrl:h}=e;const{t:u}=(0,c.$)();return(0,r.q)((()=>{const e=document.getElementsByClassName("page-header-section");e&&e.length>0&&e[0].classList.add("page-header-triangle-img")})),n.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${y}`},n.createElement("div",{className:"circle"}),n.createElement(l.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},n.createElement("p",{dangerouslySetInnerHTML:{__html:t},className:`lead ${a}`}),n.createElement("h1",{dangerouslySetInnerHTML:{__html:o},className:`page-header-title ${i}`}),n.createElement("div",{dangerouslySetInnerHTML:{__html:s},className:`page-header-text ${d}`}),h&&n.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"},n.createElement("span",{dangerouslySetInnerHTML:{__html:u("Read More")}}))))}},1804:function(e,t,a){var n=a(257);t.Z=function(e){const{title1:t,title2:a,title3:c,headline1:l,headline2:r,headline3:o,body1:i,body2:s,body3:d,black:m,dark:y,primary:h,light:u,grey:p,lightGrey:v,darkGrey:g,white:E,yellow:b,decoration:f,textStyle:N,children:_}=e;let k="";return t&&(k=k.concat("title1 ")),a&&(k=k.concat("title2 ")),c&&(k=k.concat("title3 ")),l&&(k=k.concat("headline1 ")),r&&(k=k.concat("headline2 ")),o&&(k=k.concat("headline3 ")),i&&(k=k.concat("body1 ")),s&&(k=k.concat("body2 ")),d&&(k=k.concat("body3 ")),m&&(k=k.concat("black ")),y&&(k=k.concat("dark ")),h&&(k=k.concat("primary ")),u&&(k=k.concat("light ")),p&&(k=k.concat("grey ")),v&&(k=k.concat("light-grey ")),g&&(k=k.concat("dark-grey ")),E&&(k=k.concat("white ")),b&&(k=k.concat("yellow ")),f&&(k=k.concat("decoration ")),N&&(k=k.concat(N)),n.createElement("span",{className:"text-component"},n.createElement("p",{className:k},_))}},1035:function(e,t,a){a.d(t,{q:function(){return c}});var n=a(257);const c=e=>{const[t,a]=n.useState(!1),c=()=>{t||(e(),a(!0))};return n.useEffect((()=>(document.addEventListener("mousemove",c),document.addEventListener("scroll",c),document.addEventListener("touchstart",c),()=>{document.removeEventListener("mousemove",c),document.removeEventListener("scroll",c),document.removeEventListener("touchstart",c)}))),t}},6279:function(e,t,a){a.r(t);var n=a(257),c=a(3437),l=a(7700),r=a(5019),o=a(5818),i=a(1804),s=a(6187);t.default=e=>{const{data:t}=e,{t:a}=(0,r.$)();let d=e.pageContext.dir;const m=t.allPagesJson.edges;return n.createElement(c.Z,null,n.createElement(l.Z,{title:a("Privacy Policy"),canonicalUrl:d+e.pageContext.originalPath}),n.createElement("div",{className:"privacy-policy-page"},n.createElement(o.Z,{title:a("Privacy Policy")}),n.createElement("div",{className:"privacy-policy-header"},n.createElement(i.Z,{black:!0,headline1:!0,textStyle:"privacy-policy-title"}," ",a("privacyPolicy.title")," "),n.createElement(i.Z,{black:!0,headline1:!0,textStyle:"privacy-policy-subTitle"}," ",a("privacyPolicy.subTitle")," ")),n.createElement("div",{className:"privacy-policy-section-container"},n.createElement(s.Z,null,m.map(((e,t)=>{let{node:a}=e;return n.createElement("div",{key:t,className:"privacy-policy-section",dangerouslySetInnerHTML:{__html:a.body}})}))))))}}}]);
//# sourceMappingURL=component---src-pages-privacy-policy-tsx-f58b9f59527a1800d58f.js.map