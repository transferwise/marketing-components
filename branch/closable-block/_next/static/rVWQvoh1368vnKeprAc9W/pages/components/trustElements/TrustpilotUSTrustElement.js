(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"13lk":function(e,t,n){var r=n("4W7d");e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"4W7d":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},"5KQa":function(e,t,n){"use strict";var r=n("skok"),a=n.n(r),o=n("ERkP"),i=n.n(o),l=n("O94r"),u=n.n(l),s=n("ALPR"),c=(n("H+dI"),function(e){return"#"===e[0]}),m=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?i.a.createElement("div",{className:"tw-trust-element__svg_container"},n):i.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},p=function(e){function t(){d&&_(!0)}var n=e.title,r=e.alt,l=e.linkText,p=e.href,f=e.src,d=e.shouldAnimate,h=e.useIllustration,E=Object(o.useState)(!1),v=a()(E,2),T=v[0],_=v[1];return i.a.createElement("div",{className:u()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":T}),onAnimationEnd:function(){return _(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},h&&i.a.createElement(m,{alt:r,src:f,shouldAnimate:d}),i.a.createElement("div",{className:"h4 m-t-1"},n),p&&l&&i.a.createElement(s.a,{href:p,target:c(p)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}},l))};p.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=p},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r,a=n("uSvS"),o=n.n(a),i=n("13lk"),l=n.n(i),u=n("ERkP"),s=n.n(u),c=n("O94r"),m=n.n(c),p=n("gC0r"),f=n.n(p),d=(n("PnnE"),n("aWzz")),h=n.n(d),E=n("za2A"),v={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},T=(r={},f()(r,v.EXTRA_SMALL,10),f()(r,v.SMALL,16),f()(r,v.MEDIUM,24),r),_=function(e){var t=e.className;return s.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},s.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},s.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};_.propTypes={className:h.a.string},_.defaultProps={className:null};var w=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=m()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=T[n];return n===v.EXTRA_SMALL?s.a.createElement(_,{className:o}):s.a.createElement(E.a,{className:o,size:i})};w.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},w.Size=v,w.propTypes={orientation:h.a.oneOf([w.Orientation.TOP,w.Orientation.BOTTOM,w.Orientation.LEFT,w.Orientation.RIGHT]),size:h.a.oneOf([w.Size.EXTRA_SMALL,w.Size.SMALL,w.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},w.defaultProps={orientation:w.Orientation.BOTTOM,size:w.Size.SMALL,disabled:!1,className:null};var y=w;n("aFlK");function O(e){var t=e.className,n=e.href,r=e.children,a=l()(e,["className","href","children"]);return s.a.createElement("a",o()({},a,{className:m()("tw-link-with-chevron",t),href:n}),r,s.a.createElement(y,{size:y.Size.EXTRA_SMALL,orientation:y.Orientation.RIGHT}))}},FDI1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/TrustpilotUSTrustElement",function(){return n("XymX")}])},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Rkui:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r);n("Da+w");t.a=function(){return a.a.createElement("svg",{id:"el_H8G--UHWO",className:"tw-trust-element__image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 50"},a.a.createElement("path",{d:"M14.3 43.5h46.9v-21H0v21h7.1V50l7.2-6.5z",id:"el_o50-IfnOhY"}),a.a.createElement("g",{id:"el_ZKUtuKmlJ2_an_27_VJB_eK","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{d:"M70.1 38.5H7.2v-24h77.2v24h-7.1V45l-7.2-6.5z",id:"el_ZKUtuKmlJ2"})),a.a.createElement("g",{id:"el_cKmWEw9KDj_an_Al496FKhj","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{d:"M24 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z",id:"el_cKmWEw9KDj"})),a.a.createElement("g",{id:"el_FrN2weN1HV_an_VyY4hnoQje","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{id:"el_FrN2weN1HV",d:"M37 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1z"})),a.a.createElement("g",{id:"el_QxWDtUDnYN_an_fi3jS4kw1","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{id:"el_QxWDtUDnYN",d:"M50 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})),a.a.createElement("g",{id:"el_0LSJko48lh_an_2TS1w_u6J","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{id:"el_0LSJko48lh",d:"M63 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})),a.a.createElement("g",{id:"el_Yv2r1TIYxk_an_GdS0Y6cG7","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{id:"el_Yv2r1TIYxk",d:"M76 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})))}},XymX:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),u=n("Qi1R"),s=n("5KQa"),c=n("Rkui"),m=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration;return i.a.createElement(s.a,{src:i.a.createElement(c.a,null),title:t,linkText:n,href:r,shouldAnimate:!0,useIllustration:a})};m.defaultProps={useIllustration:!0};var p=m,f='() => (\n  <TrustpilotUSTrustElement\n    title="Millions of happy customers"\n    linkText="See what they have to say"\n    href="https://www.trustpilot.com/review/transferwise.com"\n    useIllustration\n  />\n);\n',d=(i.a.createElement,{name:"TrustpilotUSTrustElement"}),h={meta:d},E="wrapper";function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)(E,Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(u.b,{code:f,scope:{TrustpilotUSTrustElement:p},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"TrustpilotUSTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},exc1:function(e,t,n){var r=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(e,t,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),i=n("mPqz");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},uSvS:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n}},[["FDI1",0,1,3,5,4,8,2]]]);