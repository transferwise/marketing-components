(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"13lk":function(e,t,n){var r=n("4W7d");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"4W7d":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},"5KQa":function(e,t,n){"use strict";var r=n("skok"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("O94r"),s=n.n(l),u=n("ALPR"),c=(n("H+dI"),function(e){return"#"===e[0]}),f=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?i.a.createElement("div",{className:"tw-trust-element__svg_container"},n):i.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},p=function(e){function t(){d&&O(!0)}var n=e.title,r=e.alt,l=e.linkText,p=e.href,m=e.src,d=e.shouldAnimate,v=e.useIllustration,h=Object(o.useState)(!1),E=a()(h,2),b=E[0],O=E[1];return i.a.createElement("div",{className:s()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":b}),onAnimationEnd:function(){return O(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},v&&i.a.createElement(f,{alt:r,src:m,shouldAnimate:d}),i.a.createElement("div",{className:"h4 m-t-1"},n),p&&l&&i.a.createElement(u.a,{href:p,target:c(p)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}},l))};p.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=p},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r,a=n("uSvS"),o=n.n(a),i=n("13lk"),l=n.n(i),s=n("ERkP"),u=n.n(s),c=n("O94r"),f=n.n(c),p=n("gC0r"),m=n.n(p),d=(n("PnnE"),n("aWzz")),v=n.n(d),h=n("za2A"),E={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},b=(r={},m()(r,E.EXTRA_SMALL,10),m()(r,E.SMALL,16),m()(r,E.MEDIUM,24),r),O=function(e){var t=e.className;return u.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};O.propTypes={className:v.a.string},O.defaultProps={className:null};var T=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=f()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=b[n];return n===E.EXTRA_SMALL?u.a.createElement(O,{className:o}):u.a.createElement(h.a,{className:o,size:i})};T.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},T.Size=E,T.propTypes={orientation:v.a.oneOf([T.Orientation.TOP,T.Orientation.BOTTOM,T.Orientation.LEFT,T.Orientation.RIGHT]),size:v.a.oneOf([T.Size.EXTRA_SMALL,T.Size.SMALL,T.Size.MEDIUM]),disabled:v.a.bool,className:v.a.string},T.defaultProps={orientation:T.Orientation.BOTTOM,size:T.Size.SMALL,disabled:!1,className:null};var y=T;n("aFlK");function A(e){var t=e.className,n=e.href,r=e.children,a=l()(e,["className","href","children"]);return u.a.createElement("a",o()({},a,{className:f()("tw-link-with-chevron",t),href:n}),r,u.a.createElement(y,{size:y.Size.EXTRA_SMALL,orientation:y.Orientation.RIGHT}))}},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ej5l:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/FSRAApprovedTrustElement",function(){return n("q25x")}])},exc1:function(e,t,n){var r=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},q25x:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return m})),n.d(t,"default",(function(){return h}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),s=n("Qi1R"),u=n("5KQa"),c=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration;return i.a.createElement(u.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/FCA.svg",title:t,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var f=c,p='() => (\n  <FSRAApprovedTrustElement\n    title="Regulated by ADGM Financial Services Regulatory Authority"\n    linkText="Learn more"\n    href="https://transferwise.com/help/article/1870573/security/security-and-regulatory-information"\n    useIllustration\n  />\n);\n',m=(i.a.createElement,{name:"FSRAApprovedTrustElement"}),d={meta:m},v="wrapper";function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)(v,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(s.b,{code:p,scope:{FSRAApprovedTrustElement:f},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"FSRAApprovedTrustElement",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},skok:function(e,t,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),i=n("mPqz");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},uSvS:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}},[["ej5l",0,1,3,5,4,2]]]);