(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"5KQa":function(t,e,n){"use strict";var r=n("ddV6"),a=n.n(r),s=n("ERkP"),o=n.n(s),i=n("O94r"),l=n.n(i),u=(n("H+dI"),function(t){return"#"===t[0]}),c=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?o.a.createElement("div",{className:"tw-trust-element__svg_container"},n):o.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(t){function e(){p&&T(!0)}var n=t.title,r=t.alt,i=t.linkText,m=t.href,f=t.src,p=t.shouldAnimate,d=t.useIllustration,h=Object(s.useState)(!1),v=a()(h,2),b=v[0],T=v[1];return o.a.createElement("div",{className:l()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return T(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&o.a.createElement(c,{alt:r,src:f,shouldAnimate:p}),o.a.createElement("div",{className:"h4 m-t-1"},n),m&&i&&o.a.createElement("a",{href:m,target:u(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},i))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=m},CJOq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/StraitsTimesTrustElement",function(){return n("Qx2T")}])},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var s=typeof r;if("string"===s||"number"===s)t.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&t.push(o)}else if("object"===s)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Qx2T:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),s=n("ERkP"),o=n.n(s),i=n("ZVZ0"),l=n("Qi1R"),u=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return o.a.createElement(u.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/straits_times.svg",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var m=c,f='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <StraitsTimesTrustElement\n      title="Over 8 million customers"\n      linkText="Read on Straits Times"\n      href="https://www.sgsme.sg/news/transferwise-aims-be-next-skype-money-transfers"\n      useIllustration\n    />\n  </div>\n);\n',p=(o.a.createElement,{name:"StraitsTimesTrustElement"}),d={meta:p},h="wrapper";function v(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.a)(h,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("span",null,Object(i.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(i.a)(l.b,{code:f,scope:{StraitsTimesTrustElement:m},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"StraitsTimesTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},Ua7V:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(l){a=!0,s=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return n}}},ddV6:function(t,e,n){var r=n("qPgQ"),a=n("Ua7V"),s=n("f2kJ");t.exports=function(t,e){return r(t)||a(t,e)||s()}},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["CJOq",0,1,2,3,4]]]);