(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"13lk":function(e,t,n){var r=n("4W7d");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"4W7d":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},"5KQa":function(e,t,n){"use strict";var r=n("skok"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=n("O94r"),l=n.n(s),u=n("ALPR"),c=(n("H+dI"),function(e){return"#"===e[0]}),f=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?i.a.createElement("div",{className:"tw-trust-element__svg_container"},n):i.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},p=function(e){function t(){d&&O(!0)}var n=e.title,r=e.alt,s=e.linkText,p=e.href,m=e.src,d=e.shouldAnimate,v=e.useIllustration,T=Object(o.useState)(!1),h=a()(T,2),E=h[0],O=h[1];return i.a.createElement("div",{className:l()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":E}),onAnimationEnd:function(){return O(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},v&&i.a.createElement(f,{alt:r,src:m,shouldAnimate:d}),i.a.createElement("div",{className:"h4 m-t-1"},n),p&&s&&i.a.createElement(u.a,{href:p,target:c(p)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}},s))};p.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=p},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r,a=n("uSvS"),o=n.n(a),i=n("13lk"),s=n.n(i),l=n("ERkP"),u=n.n(l),c=n("O94r"),f=n.n(c),p=n("gC0r"),m=n.n(p),d=(n("PnnE"),n("aWzz")),v=n.n(d),T=n("za2A"),h={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},E=(r={},m()(r,h.EXTRA_SMALL,10),m()(r,h.SMALL,16),m()(r,h.MEDIUM,24),r),O=function(e){var t=e.className;return u.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};O.propTypes={className:v.a.string},O.defaultProps={className:null};var b=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=f()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=E[n];return n===h.EXTRA_SMALL?u.a.createElement(O,{className:o}):u.a.createElement(T.a,{className:o,size:i})};b.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},b.Size=h,b.propTypes={orientation:v.a.oneOf([b.Orientation.TOP,b.Orientation.BOTTOM,b.Orientation.LEFT,b.Orientation.RIGHT]),size:v.a.oneOf([b.Size.EXTRA_SMALL,b.Size.SMALL,b.Size.MEDIUM]),disabled:v.a.bool,className:v.a.string},b.defaultProps={orientation:b.Orientation.BOTTOM,size:b.Size.SMALL,disabled:!1,className:null};var y=b;n("aFlK");function A(e){var t=e.className,n=e.href,r=e.children,a=s()(e,["className","href","children"]);return u.a.createElement("a",o()({},a,{className:f()("tw-link-with-chevron",t),href:n}),r,u.a.createElement(y,{size:y.Size.EXTRA_SMALL,orientation:y.Orientation.RIGHT}))}},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},QkiE:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return m})),n.d(t,"default",(function(){return T}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("ZVZ0"),l=n("Qi1R"),u=n("5KQa"),c=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration;return i.a.createElement(u.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/tuv.png",title:t,linkText:n,href:r,useIllustration:a})};c.defaultProps={useIllustration:!0};var f=c,p='() => (\n  <TUVApprovedTrustElement\n    title="T\xdcV approved"\n    linkText="The report"\n    href="https://transferwise.com/gb/blog/transferwise-tuv-audit-2019"\n    useIllustration\n  />\n);\n',m=(i.a.createElement,{name:"TUVApprovedTrustElement"}),d={meta:m},v="wrapper";function T(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)(v,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)(l.b,{code:p,scope:{TUVApprovedTrustElement:f},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"TUVApprovedTrustElement",mdxType:"GeneratePropsTable"}))}T.isMDXComponent=!0},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},exc1:function(e,t,n){var r=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(e,t,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),i=n("mPqz");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},uOsP:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/TUVApprovedTrustElement",function(){return n("QkiE")}])},uSvS:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}},[["uOsP",0,1,4,5,3,2]]]);