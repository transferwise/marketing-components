(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),s=n.n(o),l=n("O94r"),i=n.n(l),u=(n("H+dI"),function(t){return"#"===t[0]}),c=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?s.a.createElement("div",{className:"tw-trust-element__svg_container"},n):s.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(t){function e(){p&&v(!0)}var n=t.title,r=t.alt,l=t.linkText,m=t.href,f=t.src,p=t.shouldAnimate,d=t.useIllustration,h=Object(o.useState)(!1),y=a()(h,2),b=y[0],v=y[1];return s.a.createElement("div",{className:i()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return v(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&s.a.createElement(c,{alt:r,src:f,shouldAnimate:p}),s.a.createElement("div",{className:"h4 m-t-1"},n),m&&l&&s.a.createElement("a",{href:m,target:u(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},l))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=m},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&t.push(s)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&t.push(l)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},RHUM:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return y}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),s=n.n(o),l=n("ZVZ0"),i=n("Qi1R"),u=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return s.a.createElement(u.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/instamoney.png",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var m=c,f='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <InstaMoneyTrustElement\n      title="Powered by Instamoney"\n      linkText="Learn More"\n      href="https://www.instamoney.co/"\n      useIllustration\n    />\n  </div>\n);\n',p=(s.a.createElement,{name:"InstaMoneyTrustElement"}),d={meta:p},h="wrapper";function y(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.a)(h,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(l.a)("span",null,Object(l.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(l.a)(i.b,{code:f,scope:{InstaMoneyTrustElement:m},mdxType:"LiveEditorBlock"}),Object(l.a)(i.a,{componentName:"InstaMoneyTrustElement",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"tT1/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/InstaMoneyTrustElement",function(){return n("RHUM")}])}},[["tT1/",0,1,2,3,4]]]);