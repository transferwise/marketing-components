(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4hvW":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/CanstarAwardTrustElement",function(){return n("tbXB")}])},"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),s=n.n(o),i=n("O94r"),l=n.n(i),u=(n("H+dI"),function(t){return"#"===t[0]}),c=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?s.a.createElement("div",{className:"tw-trust-element__svg_container"},n):s.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},f=function(t){function e(){p&&y(!0)}var n=t.title,r=t.alt,i=t.linkText,f=t.href,m=t.src,p=t.shouldAnimate,d=t.useIllustration,h=Object(o.useState)(!1),v=a()(h,2),w=v[0],y=v[1];return s.a.createElement("div",{className:l()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":w}),onAnimationEnd:function(){return y(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&s.a.createElement(c,{alt:r,src:m,shouldAnimate:p}),s.a.createElement("div",{className:"h4 m-t-1"},n),f&&i&&s.a.createElement("a",{href:f,target:u(f)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},i))};f.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=f},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&t.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},tbXB:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),s=n.n(o),i=n("ZVZ0"),l=n("Qi1R"),u=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return s.a.createElement(u.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/canstar.png",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var f=c,m='() => (\n  <CanstarAwardTrustElement\n    title="Awarded 5 stars for international money transfers"\n    linkText="Read the full report"\n    href="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"\n    useIllustration\n  />\n);\n',p=(s.a.createElement,{name:"CanstarAwardTrustElement"}),d={meta:p},h="wrapper";function v(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.a)(h,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)(l.b,{code:m,scope:{CanstarAwardTrustElement:f},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"CanstarAwardTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0}},[["4hvW",0,1,2,3,4]]]);