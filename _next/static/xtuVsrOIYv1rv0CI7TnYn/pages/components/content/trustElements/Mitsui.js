(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),i=n("ERkP"),o=n.n(i),s=n("O94r"),u=n.n(s),c=(n("H+dI"),function(t){function e(){m&&v(!0)}var n=t.title,r=t.alt,s=t.linkText,c=t.href,f=t.src,m=t.shouldAnimate,p=Object(i.useState)(!1),d=a()(p,2),h=d[0],v=d[1];return o.a.createElement("div",{className:u()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":h}),onAnimationEnd:function(){return v(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},m?o.a.createElement("div",{className:"tw-trust-element__svg_container"},f):o.a.createElement("img",{className:"tw-trust-element__image",src:f,alt:r}),o.a.createElement("div",{className:"h4 m-t-1"},n),c&&s&&o.a.createElement("a",{href:c,target:l(c)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},s))}),l=function(t){return"#"===t[0]};c.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1},e.a=c},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&t.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),i=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||i()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},hgl4:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return m})),n.d(e,"default",(function(){return h}));var r=n("cxan"),a=n("HbGN"),i=n("ERkP"),o=n.n(i),s=n("ZVZ0"),u=n("Qi1R"),c=n("5KQa"),l=function(t){var e=t.title,n=t.linkText,r=t.href;return o.a.createElement(c.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg",title:e,linkText:n,href:r})},f='() => {\n  return (\n    <>\n      <Mitsui\n        title="Mitsui & Co invested in us"\n        linkText="Read on TechCrunch"\n        href="https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/"\n      />\n    </>\n  )\n};',m=(o.a.createElement,{name:"Mitsui"}),p={meta:m},d="wrapper";function h(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(s.a)(d,Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(s.a)(u.b,{code:f,scope:{Mitsui:l},mdxType:"LiveEditorBlock"}),Object(s.a)(u.a,{componentName:"Mitsui",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},"q/IL":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/trustElements/Mitsui",function(){return n("hgl4")}])},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["q/IL",0,1,2,3,4]]]);