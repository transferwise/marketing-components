(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5KQa":function(t,e,n){"use strict";var r=n("skok"),a=n.n(r),o=n("ERkP"),s=n.n(o),i=n("O94r"),u=n.n(i),l=(n("H+dI"),function(t){return"#"===t[0]}),c=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?s.a.createElement("div",{className:"tw-trust-element__svg_container"},n):s.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(t){function e(){p&&y(!0)}var n=t.title,r=t.alt,i=t.linkText,m=t.href,f=t.src,p=t.shouldAnimate,d=t.useIllustration,h=Object(o.useState)(!1),v=a()(h,2),b=v[0],y=v[1];return s.a.createElement("div",{className:u()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return y(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&s.a.createElement(c,{alt:r,src:f,shouldAnimate:p}),s.a.createElement("div",{className:"h4 m-t-1"},n),m&&i&&s.a.createElement("a",{href:m,target:l(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},i))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=m},CJOq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/StraitsTimesTrustElement",function(){return n("Qx2T")}])},NGLw:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&t.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},Qx2T:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),s=n.n(o),i=n("ZVZ0"),u=n("Qi1R"),l=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,a=t.useIllustration;return s.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/straits_times.svg",title:e,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var m=c,f='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <StraitsTimesTrustElement\n      title="Over 8 million customers"\n      linkText="Read on Straits Times"\n      href="https://www.sgsme.sg/news/transferwise-aims-be-next-skype-money-transfers"\n      useIllustration\n    />\n  </div>\n);\n',p=(s.a.createElement,{name:"StraitsTimesTrustElement"}),d={meta:p},h="wrapper";function v(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.a)(h,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("span",null,Object(i.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(i.a)(u.b,{code:f,scope:{StraitsTimesTrustElement:m},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"StraitsTimesTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},efpx:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},exc1:function(t,e,n){var r=n("efpx");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},mPqz:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(t,e,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),s=n("mPqz");t.exports=function(t,e){return r(t)||a(t,e)||o(t,e)||s()}},teNE:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["CJOq",0,1,2,3,4]]]);