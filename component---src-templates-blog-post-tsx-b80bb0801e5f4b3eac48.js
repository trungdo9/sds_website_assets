"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[7],{1767:function(e,t,a){var l=a(257),n=a(5019),c=a(2984),r=a(2216),s=a(8304);t.Z=e=>{let{image:t,title:a,fields:o,id:i,excerpt:m,category:d}=e;const{t:g}=(0,n.$)();return l.createElement("div",{className:"col-xl-4 col-md-6 col-sm-12 col-12 blog-item-box"},l.createElement("div",{className:"card"},l.createElement(r.LazyLoadImage,{alt:a,height:259,src:`${s.$J}${t}`,className:"card-img-top blog-image",width:404}),l.createElement("div",{className:"card-body pt-4 pb-4"},l.createElement("div",{className:"text-center blog-card-text-container"},l.createElement("p",{className:"blog-category purple-color"},d),l.createElement(c.Z,{className:"blog-title",to:o.slug,title:a},a),l.createElement("div",{style:{height:150,position:"relative"}},l.createElement("p",{className:"blog-excerpt"},m),l.createElement("div",{className:"position-button"},l.createElement(c.Z,{to:o.slug,itemProp:"url",className:"btn read-more-btn blue-color",title:a},l.createElement("span",{dangerouslySetInnerHTML:{__html:g("Read More")}}))))))))}},1035:function(e,t,a){a.d(t,{q:function(){return n}});var l=a(257);const n=e=>{const[t,a]=l.useState(!1),n=()=>{t||(e(),a(!0))};return l.useEffect((()=>(document.addEventListener("mousemove",n),document.addEventListener("scroll",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousemove",n),document.removeEventListener("scroll",n),document.removeEventListener("touchstart",n)}))),t}},3855:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(257),n=a(3437),c=a(7700),r=a(6187),s=a(8304),o=a(1035);var i=e=>((0,o.q)((()=>{const t=document.getElementById("article-detail-image-wrapper");if(t.childNodes&&0===t.childNodes.length){const a=document.createElement("img");a.width=940,a.height=630,a.src=`${s.$J}${e.image}`,a.alt=e.title,t.appendChild(a)}})),l.createElement("div",{className:"blog-detail-page-header-section"},l.createElement(r.Z,null,l.createElement("div",{className:"page-header-inner"},l.createElement("div",{className:"feature-image",id:"article-detail-image-wrapper"}),l.createElement("div",{className:"post-meta"},l.createElement("p",{className:"post-category"},e.category),l.createElement("h1",{className:"post-title"},e.title),l.createElement("div",{className:"post-bottom-meta d-flex"},l.createElement("span",null,e.author),l.createElement("span",null,e.date)))),l.createElement("div",{className:"blog-description"},l.createElement("section",{dangerouslySetInnerHTML:{__html:e.content},itemProp:"articleBody"}))))),m=a(1767),d=a(5019);var g=e=>{let{queryResult:t}=e;const{t:a}=(0,d.$)();return l.createElement("div",{className:"latest-blog-section blog-section"},l.createElement("div",{className:"page-heading-inner"},l.createElement("p",{className:"heading-text"}," ",a("blog.latestArticles")," ")),l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},t.allPostsJson.edges.map(((e,t)=>{let{node:a}=e;return l.createElement(m.Z,{key:t,fields:a.fields,image:a.image,title:a.title,id:a.id,excerpt:a.excerpt,category:a.category})})))))},p=a(4627),u=a(7018),E=a(4083);var h=e=>{const{data:t}=e,{country:a}=(0,u.l)(),r=t.postsJson,s=[l.createElement("script",{type:"application/ld+json",key:"0"},JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":"https://sdsmanager.com"+e.location.pathname},headline:r.title,description:r.excerpt,articleBody:(0,p.IQ)(r.content),image:"https://sdsmanager.com"+r.image,author:{"@type":"Person",name:r.author},publisher:{"@type":"Organization",name:"SdsManager",logo:{"@type":"ImageObject",url:"https://sdsmanager.com/images/logo.svg"}},datePublished:r.date}))];return l.createElement(n.Z,null,l.createElement(c.Z,{title:r.title,microData:s,canonicalUrl:("en"===E.KV[a]?"":a)+e.pageContext.originalPath}),l.createElement("div",{className:"blog-detail-page"},l.createElement(i,Object.assign({title:r.title,image:r.image,content:r.content,category:r.category,author:r.author,date:r.date},r)),l.createElement(g,{queryResult:t})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-b80bb0801e5f4b3eac48.js.map