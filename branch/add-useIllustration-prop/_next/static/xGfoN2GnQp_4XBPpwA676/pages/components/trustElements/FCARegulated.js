(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),u=n.n(o),l=n("O94r"),i=n.n(l),s=(n("H+dI"),function(t){function e(){m&&y(!0)}var n=t.title,r=t.alt,l=t.linkText,s=t.href,f=t.src,m=t.shouldAnimate,p=t.useIllustration,d=Object(o.useState)(!1),v=a()(d,2),h=v[0],y=v[1];return u.a.createElement("div",{className:i()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":h}),onAnimationEnd:function(){return y(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},p&&u.a.createElement((function(){return m?u.a.createElement("div",{className:"tw-trust-element__svg_container"},f):u.a.createElement("img",{className:"tw-trust-element__image",src:f,alt:r})}),null),u.a.createElement("div",{className:"h4 m-t-1"},n),s&&l&&u.a.createElement("a",{href:s,target:c(s)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},l))}),c=function(t){return"#"===t[0]};s.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=s},Hvx4:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return h}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),u=n.n(o),l=n("ZVZ0"),i=n("Qi1R"),s=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return u.a.createElement(s.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/FCA.svg",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var f=c,m='() => (\n  <FCARegulated\n    title="FCA regulated"\n    linkText="Learn more"\n    href="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"\n    useIllustration\n  />\n);\n',p=(u.a.createElement,{name:"FCARegulated"}),d={meta:p},v="wrapper";function h(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.a)(v,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(l.a)(i.b,{code:m,scope:{FCARegulated:f},mdxType:"LiveEditorBlock"}),Object(l.a)(i.a,{componentName:"FCARegulated",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&t.push(u)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&t.push(l)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},lUh7:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/FCARegulated",function(){return n("Hvx4")}])},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["lUh7",0,1,2,3,4]]]);