(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),i=n.n(o),u=n("O94r"),s=n.n(u),l=(n("H+dI"),function(t){function e(){m&&b(!0)}var n=t.title,r=t.alt,u=t.linkText,l=t.href,f=t.src,m=t.shouldAnimate,p=t.useIllustration,d=Object(o.useState)(!1),h=a()(d,2),v=h[0],b=h[1];return i.a.createElement("div",{className:s()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":v}),onAnimationEnd:function(){return b(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},p&&i.a.createElement((function(){return m?i.a.createElement("div",{className:"tw-trust-element__svg_container"},f):i.a.createElement("img",{className:"tw-trust-element__image",src:f,alt:r})}),null),i.a.createElement("div",{className:"h4 m-t-1"},n),l&&u&&i.a.createElement("a",{href:l,target:c(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},u))}),c=function(t){return"#"===t[0]};l.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=l},LqqH:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),u=n("ZVZ0"),s=n("Qi1R"),l=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return i.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var f=c,m='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <Mitsui\n      title="Mitsui & Co invested in us"\n      linkText="Read on TechCrunch"\n      href="https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/"\n      useIllustration\n    />\n  </div>\n);\n',p=(i.a.createElement,{name:"Mitsui"}),d={meta:p},h="wrapper";function v(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(u.a)(h,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)("span",null,Object(u.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(u.a)(s.b,{code:m,scope:{Mitsui:f},mdxType:"LiveEditorBlock"}),Object(u.a)(s.a,{componentName:"Mitsui",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&t.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||o()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},kHaY:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/Mitsui",function(){return n("LqqH")}])},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["kHaY",0,1,2,3,4]]]);