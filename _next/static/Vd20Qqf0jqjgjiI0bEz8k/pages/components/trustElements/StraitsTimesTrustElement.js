(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"13lk":function(e,t,n){var r=n("4W7d");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"4W7d":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},"5KQa":function(e,t,n){"use strict";var r=n("skok"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=n("O94r"),l=n.n(s),c=n("ALPR"),u=(n("H+dI"),function(e){return"#"===e[0]}),f=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?i.a.createElement("div",{className:"tw-trust-element__svg_container"},n):i.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(e){function t(){d&&O(!0)}var n=e.title,r=e.alt,s=e.linkText,m=e.href,p=e.src,d=e.shouldAnimate,h=e.useIllustration,v=Object(o.useState)(!1),T=a()(v,2),b=T[0],O=T[1];return i.a.createElement("div",{className:l()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return O(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},h&&i.a.createElement(f,{alt:r,src:p,shouldAnimate:d}),i.a.createElement("div",{className:"h4 m-t-1"},n),m&&s&&i.a.createElement(c.a,{href:m,target:u(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}},s))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=m},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,a=n("uSvS"),o=n.n(a),i=n("13lk"),s=n.n(i),l=n("ERkP"),c=n.n(l),u=n("O94r"),f=n.n(u),m=n("gC0r"),p=n.n(m),d=(n("PnnE"),n("aWzz")),h=n.n(d),v=n("za2A"),T={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},b=(r={},p()(r,T.EXTRA_SMALL,10),p()(r,T.SMALL,16),p()(r,T.MEDIUM,24),r),O=function(e){var t=e.className;return c.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};O.propTypes={className:h.a.string},O.defaultProps={className:null};var E=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=f()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=b[n];return n===T.EXTRA_SMALL?c.a.createElement(O,{className:o}):c.a.createElement(v.a,{className:o,size:i})};E.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},E.Size=T,E.propTypes={orientation:h.a.oneOf([E.Orientation.TOP,E.Orientation.BOTTOM,E.Orientation.LEFT,E.Orientation.RIGHT]),size:h.a.oneOf([E.Size.EXTRA_SMALL,E.Size.SMALL,E.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},E.defaultProps={orientation:E.Orientation.BOTTOM,size:E.Size.SMALL,disabled:!1,className:null};var y=E;n("aFlK");function w(e){var t=e.className,n=e.href,r=e.children,a=s()(e,["className","href","children"]);return c.a.createElement("a",o()({},a,{className:f()("tw-link-with-chevron",t),href:n}),r,c.a.createElement(y,{size:y.Size.EXTRA_SMALL,orientation:y.Orientation.RIGHT}))}},CJOq:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/StraitsTimesTrustElement",function(){return n("Qx2T")}])},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Qx2T:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("ZVZ0"),l=n("Qi1R"),c=n("5KQa"),u=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration;return i.a.createElement(c.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/straits_times.svg",title:t,linkText:n,href:r,useIllustration:a})};u.defaultProps={useIllustration:!0};var f=u,m='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <StraitsTimesTrustElement\n      title="Over 8 million customers"\n      linkText="Read on Straits Times"\n      href="https://www.sgsme.sg/news/transferwise-aims-be-next-skype-money-transfers"\n      useIllustration\n    />\n  </div>\n);\n',p=(i.a.createElement,{name:"StraitsTimesTrustElement"}),d={meta:p},h="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)(h,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("span",null,Object(s.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(s.a)(l.b,{code:m,scope:{StraitsTimesTrustElement:f},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"StraitsTimesTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},exc1:function(e,t,n){var r=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(e,t,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),i=n("mPqz");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},uSvS:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}},[["CJOq",0,1,4,5,3,2]]]);