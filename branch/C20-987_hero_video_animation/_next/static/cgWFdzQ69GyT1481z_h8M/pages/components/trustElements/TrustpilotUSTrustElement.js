(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"5KQa":function(e,t,n){"use strict";var a=n("uSvS"),r=n.n(a),o=n("skok"),l=n.n(o),i=n("13lk"),s=n.n(i),u=n("ERkP"),c=n.n(u),m=n("O94r"),p=n.n(m),f=n("ALPR"),d=(n("H+dI"),function(e){return"#"===e[0]}),h=function(e){var t=e.shouldAnimate,n=e.src,a=e.alt;return t?c.a.createElement("div",{className:"tw-trust-element__svg_container"},n):c.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:a})},E=function(e){function t(){E&&g(!0)}var n=e.title,a=e.alt,o=e.linkText,i=e.href,m=e.src,E=e.shouldAnimate,v=e.useIllustration,T=s()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),_=Object(u.useState)(!1),w=l()(_,2),y=w[0],g=w[1];return c.a.createElement("div",{className:p()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":y}),onAnimationEnd:function(){return g(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},v&&c.a.createElement(h,{alt:a,src:m,shouldAnimate:E}),c.a.createElement("div",{className:"h4 m-t-1"},n),i&&o&&c.a.createElement(f.a,r()({},T,{href:i,target:d(i)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),o))};E.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=E},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a,r=n("uSvS"),o=n.n(r),l=n("13lk"),i=n.n(l),s=n("ERkP"),u=n.n(s),c=n("O94r"),m=n.n(c),p=n("gC0r"),f=n.n(p),d=(n("PnnE"),n("aWzz")),h=n.n(d),E=n("za2A"),v={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},T=(a={},f()(a,v.EXTRA_SMALL,10),f()(a,v.SMALL,16),f()(a,v.MEDIUM,24),a),_=function(e){var t=e.className;return u.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};_.propTypes={className:h.a.string},_.defaultProps={className:null};var w=function(e){var t=e.orientation,n=e.size,a=e.disabled,r=e.className,o=m()("tw-chevron",{"chevron-color":!a},"".concat([t]).toLowerCase(),r),l=T[n];return n===v.EXTRA_SMALL?u.a.createElement(_,{className:o}):u.a.createElement(E.a,{className:o,size:l})};w.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},w.Size=v,w.propTypes={orientation:h.a.oneOf([w.Orientation.TOP,w.Orientation.BOTTOM,w.Orientation.LEFT,w.Orientation.RIGHT]),size:h.a.oneOf([w.Size.EXTRA_SMALL,w.Size.SMALL,w.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},w.defaultProps={orientation:w.Orientation.BOTTOM,size:w.Size.SMALL,disabled:!1,className:null};var y=w;n("aFlK");function g(e){var t=e.className,n=e.href,a=e.children,r=i()(e,["className","href","children"]);return u.a.createElement("a",o()({},r,{className:m()("tw-link-with-chevron",t),href:n}),a,u.a.createElement(y,{size:y.Size.EXTRA_SMALL,orientation:y.Orientation.RIGHT}))}},FDI1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/TrustpilotUSTrustElement",function(){return n("XymX")}])},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Rkui:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a);n("Da+w");t.a=function(){return r.a.createElement("svg",{id:"el_H8G--UHWO",className:"tw-trust-element__image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 50"},r.a.createElement("path",{d:"M14.3 43.5h46.9v-21H0v21h7.1V50l7.2-6.5z",id:"el_o50-IfnOhY"}),r.a.createElement("g",{id:"el_ZKUtuKmlJ2_an_27_VJB_eK","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{d:"M70.1 38.5H7.2v-24h77.2v24h-7.1V45l-7.2-6.5z",id:"el_ZKUtuKmlJ2"})),r.a.createElement("g",{id:"el_cKmWEw9KDj_an_Al496FKhj","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{d:"M24 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z",id:"el_cKmWEw9KDj"})),r.a.createElement("g",{id:"el_FrN2weN1HV_an_VyY4hnoQje","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_FrN2weN1HV",d:"M37 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1z"})),r.a.createElement("g",{id:"el_QxWDtUDnYN_an_fi3jS4kw1","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_QxWDtUDnYN",d:"M50 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})),r.a.createElement("g",{id:"el_0LSJko48lh_an_2TS1w_u6J","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_0LSJko48lh",d:"M63 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})),r.a.createElement("g",{id:"el_Yv2r1TIYxk_an_GdS0Y6cG7","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_Yv2r1TIYxk",d:"M76 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})))}},XymX:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return y}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),i=n("ZVZ0"),s=n("Qi1R"),u=n("uSvS"),c=n.n(u),m=n("13lk"),p=n.n(m),f=n("5KQa"),d=n("Rkui"),h=function(e){var t=e.title,n=e.linkText,a=e.href,r=e.useIllustration,o=p()(e,["title","linkText","href","useIllustration"]);return l.a.createElement(f.a,c()({},o,{src:l.a.createElement(d.a,null),title:t,linkText:n,href:a,shouldAnimate:!0,useIllustration:r}))};h.defaultProps={useIllustration:!0};var E=h,v='() => (\n  <TrustpilotUSTrustElement\n    title="Millions of happy customers"\n    linkText="See what they have to say"\n    href="https://www.trustpilot.com/review/transferwise.com"\n    useIllustration\n  />\n);\n',T=(l.a.createElement,{name:"TrustpilotUSTrustElement"}),_={meta:T},w="wrapper";function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(w,Object(a.a)({},_,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(s.b,{code:v,scope:{TrustpilotUSTrustElement:E},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"TrustpilotUSTrustElement",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},exc1:function(e,t,n){var a=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},skok:function(e,t,n){var a=n("teNE"),r=n("NGLw"),o=n("exc1"),l=n("mPqz");e.exports=function(e,t){return a(e)||r(e,t)||o(e,t)||l()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["FDI1",0,1,3,5,4,2]]]);