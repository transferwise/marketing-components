(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"13lk":function(e,t,n){var r=n("4W7d");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"4W7d":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},"5KQa":function(e,t,n){"use strict";var r=n("skok"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=n("O94r"),l=n.n(s),c=n("ALPR"),u=(n("H+dI"),function(e){return"#"===e[0]}),f=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?i.a.createElement("div",{className:"tw-trust-element__svg_container"},n):i.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},m=function(e){function t(){d&&y(!0)}var n=e.title,r=e.alt,s=e.linkText,m=e.href,p=e.src,d=e.shouldAnimate,h=e.useIllustration,v=Object(o.useState)(!1),b=a()(v,2),T=b[0],y=b[1];return i.a.createElement("div",{className:l()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":T}),onAnimationEnd:function(){return y(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},h&&i.a.createElement(f,{alt:r,src:p,shouldAnimate:d}),i.a.createElement("div",{className:"h4 m-t-1"},n),m&&s&&i.a.createElement(c.a,{href:m,target:u(m)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}},s))};m.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=m},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,a=n("uSvS"),o=n.n(a),i=n("13lk"),s=n.n(i),l=n("ERkP"),c=n.n(l),u=n("O94r"),f=n.n(u),m=n("gC0r"),p=n.n(m),d=(n("PnnE"),n("aWzz")),h=n.n(d),v=n("za2A"),b={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},T=(r={},p()(r,b.EXTRA_SMALL,10),p()(r,b.SMALL,16),p()(r,b.MEDIUM,24),r),y=function(e){var t=e.className;return c.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};y.propTypes={className:h.a.string},y.defaultProps={className:null};var O=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=f()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=T[n];return n===b.EXTRA_SMALL?c.a.createElement(y,{className:o}):c.a.createElement(v.a,{className:o,size:i})};O.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},O.Size=b,O.propTypes={orientation:h.a.oneOf([O.Orientation.TOP,O.Orientation.BOTTOM,O.Orientation.LEFT,O.Orientation.RIGHT]),size:h.a.oneOf([O.Size.EXTRA_SMALL,O.Size.SMALL,O.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},O.defaultProps={orientation:O.Orientation.BOTTOM,size:O.Size.SMALL,disabled:!1,className:null};var E=O;n("aFlK");function w(e){var t=e.className,n=e.href,r=e.children,a=s()(e,["className","href","children"]);return c.a.createElement("a",o()({},a,{className:f()("tw-link-with-chevron",t),href:n}),r,c.a.createElement(E,{size:E.Size.EXTRA_SMALL,orientation:E.Orientation.RIGHT}))}},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},RHUM:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("ZVZ0"),l=n("Qi1R"),c=n("5KQa"),u=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration;return i.a.createElement(c.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/instamoney.png",title:t,linkText:n,href:r,useIllustration:a})};u.defaultProps={useIllustration:!0};var f=u,m='() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <InstaMoneyTrustElement\n      title="Powered by Instamoney"\n      linkText="Learn More"\n      href="https://www.instamoney.co/"\n      useIllustration\n    />\n  </div>\n);\n',p=(i.a.createElement,{name:"InstaMoneyTrustElement"}),d={meta:p},h="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)(h,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("span",null,Object(s.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(s.a)(l.b,{code:m,scope:{InstaMoneyTrustElement:f},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"InstaMoneyTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},exc1:function(e,t,n){var r=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(e,t,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),i=n("mPqz");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},"tT1/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/InstaMoneyTrustElement",function(){return n("RHUM")}])},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},uSvS:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}},[["tT1/",0,1,3,5,4,2]]]);