(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"5KQa":function(t,e,n){"use strict";var r=n("skok"),o=n.n(r),a=n("ERkP"),s=n.n(a),i=n("O94r"),u=n.n(i),l=(n("H+dI"),function(t){return"#"===t[0]}),c=function(t){var e=t.shouldAnimate,n=t.src,r=t.alt;return e?s.a.createElement("div",{className:"tw-trust-element__svg_container"},n):s.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(t){function e(){p&&v(!0)}var n=t.title,r=t.alt,i=t.linkText,m=t.href,f=t.src,p=t.shouldAnimate,d=t.useIllustration,y=Object(a.useState)(!1),h=o()(y,2),b=h[0],v=h[1];return s.a.createElement("div",{className:u()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return v(!1)},onMouseEnter:e,"data-testid":"trust-element-container"},d&&s.a.createElement(c,{alt:r,src:f,shouldAnimate:p}),s.a.createElement("div",{className:"h4 m-t-1"},n),m&&i&&s.a.createElement("a",{href:m,target:l(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return e()},className:"link-callout"},i))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},e.a=m},NGLw:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&t.push(s)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},RHUM:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return h}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),s=n.n(a),i=n("ZVZ0"),u=n("Qi1R"),l=n("5KQa"),c=function(t){var e=t.title,n=t.linkText,r=t.href,o=t.useIllustration;return s.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/instamoney.png",title:e,linkText:n,href:r,useIllustration:o})};c.defaultProps={useIllustration:!0};var m=c,f='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <InstaMoneyTrustElement\n      title="Powered by Instamoney"\n      linkText="Learn More"\n      href="https://www.instamoney.co/"\n      useIllustration\n    />\n  </div>\n);\n',p=(s.a.createElement,{name:"InstaMoneyTrustElement"}),d={meta:p},y="wrapper";function h(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.a)(y,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)("span",null,Object(i.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(i.a)(u.b,{code:f,scope:{InstaMoneyTrustElement:m},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"InstaMoneyTrustElement",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},efpx:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},exc1:function(t,e,n){var r=n("efpx");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},mPqz:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(t,e,n){var r=n("teNE"),o=n("NGLw"),a=n("exc1"),s=n("mPqz");t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||s()}},"tT1/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/InstaMoneyTrustElement",function(){return n("RHUM")}])},teNE:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}}},[["tT1/",0,1,3,4,2]]]);