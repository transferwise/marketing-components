(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=n("O94r"),c=n.n(s),l=(n("H+dI"),function(t){function e(){p&&h(!0)}var n=t.title,r=t.alt,s=t.linkText,l=t.href,f=t.src,p=t.shouldAnimate,m=Object(o.useState)(!1),d=a()(m,2),w=d[0],h=d[1];return i.a.createElement("div",{className:c()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":w}),onAnimationEnd:function(){return h(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},p?i.a.createElement("div",{className:"tw-trust-element__svg_container"},f):i.a.createElement("img",{className:"tw-trust-element__image",src:f,alt:r}),i.a.createElement("div",{className:"h4 m-t-1"},n),l&&s&&i.a.createElement("a",{href:l,target:u(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},s))}),u=function(t){return"#"===t[0]};l.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1},e.a=l},GQVl:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/trustElements/CanstarAward",function(){return n("bZPp")}])},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&t.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}},bZPp:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return w}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("ZVZ0"),c=n("Qi1R"),l=n("5KQa"),u=function(t){var e=t.title,n=t.linkText,r=t.href;return i.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/canstar.png",title:e,linkText:n,href:r})},f='() => {\n    return (\n        <>\n            <CanstarAward\n            title="Awarded 5 stars for international money transfers"\n            linkText="Read the full report"\n            href="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"\n            />\n        </>\n    )\n};',p=(i.a.createElement,{name:"Canstar Award"}),m={meta:p},d="wrapper";function w(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(s.a)(d,Object(r.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(s.a)(c.b,{code:f,scope:{CanstarAward:u},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"CanstarAward",mdxType:"GeneratePropsTable"}))}w.isMDXComponent=!0},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["GQVl",0,1,2,3,4]]]);