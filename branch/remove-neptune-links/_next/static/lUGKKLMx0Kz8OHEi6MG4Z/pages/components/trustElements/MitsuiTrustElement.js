(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"5KQa":function(t,e,n){"use strict";var r=n("skok"),o=n.n(r),a=n("ERkP"),i=n.n(a),u=n("O94r"),s=n.n(u),l=(n("H+dI"),function(t){return"#"===t[0]}),c=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?i.a.createElement("div",{className:"tw-trust-element__svg_container"},n):i.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(t){function e(){p&&y(!0)}var n=t.title,r=t.alt,u=t.linkText,m=t.href,f=t.src,p=t.shouldAnimate,d=t.useIllustration,h=Object(a.useState)(!1),v=o()(h,2),b=v[0],y=v[1];return i.a.createElement("div",{className:s()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return y(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&i.a.createElement(c,{alt:r,src:f,shouldAnimate:p}),i.a.createElement("div",{className:"h4 m-t-1"},n),m&&u&&i.a.createElement("a",{href:m,target:l(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},u))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=m},NGLw:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},ZJ6G:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/MitsuiTrustElement",function(){return n("hXvo")}])},efpx:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},exc1:function(t,e,n){var r=n("efpx");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},hXvo:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return v}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),u=n("ZVZ0"),s=n("Qi1R"),l=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,o=t.useIllustration;return i.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg",title:e,linkText:n,href:r,useIllustration:o})};c.defaultProps={useIllustration:!0};var m=c,f='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <MitsuiTrustElement\n      title="Mitsui & Co invested in us"\n      linkText="Read on TechCrunch"\n      href="https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/"\n      useIllustration\n    />\n  </div>\n);\n',p=(i.a.createElement,{name:"MitsuiTrustElement"}),d={meta:p},h="wrapper";function v(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(u.a)(h,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)("span",null,Object(u.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(u.a)(s.b,{code:f,scope:{MitsuiTrustElement:m},mdxType:"LiveEditorBlock"}),Object(u.a)(s.a,{componentName:"MitsuiTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},mPqz:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(t,e,n){var r=n("teNE"),o=n("NGLw"),a=n("exc1"),i=n("mPqz");t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},teNE:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["ZJ6G",0,1,2,3,4]]]);