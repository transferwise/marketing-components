(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),s=n.n(o),u=n("O94r"),i=n.n(u),l=(n("H+dI"),function(t){function e(){p&&b(!0)}var n=t.title,r=t.alt,u=t.linkText,l=t.href,f=t.src,p=t.shouldAnimate,d=t.useIllustration,v=Object(o.useState)(!1),w=a()(v,2),h=w[0],b=w[1];return s.a.createElement("div",{className:i()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":h}),onAnimationEnd:function(){return b(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&s.a.createElement(m,{alt:r,src:f,shouldAnimate:p}),s.a.createElement("div",{className:"h4 m-t-1"},n),l&&u&&s.a.createElement("a",{href:l,target:c(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},u))}),c=function(t){return"#"===t[0]},m=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?s.a.createElement("div",{className:"tw-trust-element__svg_container"},n):s.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})};l.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=l},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&t.push(s)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}},Z8MN:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return w}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),s=n.n(o),u=n("ZVZ0"),i=n("Qi1R"),l=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return s.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/customers.svg",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var m=c,f='() => (\n  <Customers\n    title="Over 8 million customers"\n    linkText="Read on Trustpilot"\n    href="https://www.trustpilot.com/review/transferwise.com"\n    useIllustration\n  />\n);\n',p=(s.a.createElement,{name:"Customers"}),d={meta:p},v="wrapper";function w(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(u.a)(v,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)(i.b,{code:f,scope:{Customers:m},mdxType:"LiveEditorBlock"}),Object(u.a)(i.a,{componentName:"Customers",mdxType:"GeneratePropsTable"}))}w.isMDXComponent=!0},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},wGYu:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/Customers",function(){return n("Z8MN")}])}},[["wGYu",0,1,2,3,4]]]);