_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"5KQa":function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("ddV6"),i=n.n(o),l=n("m3Bd"),s=n.n(l),u=n("ERkP"),c=n.n(u),m=n("O94r"),d=n.n(m),p=n("ALPR"),f=(n("H+dI"),function(e){return"#"===e[0]}),h=function(e){var t=e.shouldAnimate,n=e.src,a=e.alt;return t?c.a.createElement("div",{className:"tw-trust-element__svg_container"},n):c.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:a})},E=function(e){function t(){E&&g(!0)}var n=e.title,a=e.alt,o=e.linkText,l=e.href,m=e.src,E=e.shouldAnimate,_=e.useIllustration,T=s()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),v=Object(u.useState)(!1),w=i()(v,2),O=w[0],g=w[1];return c.a.createElement("div",{className:d()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":O}),onAnimationEnd:function(){return g(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},_&&c.a.createElement(h,{alt:a,src:m,shouldAnimate:E}),c.a.createElement("div",{className:"h4 m-t-1"},n),l&&o&&c.a.createElement(p.a,r()({},T,{href:l,target:f(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),o))};E.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=E},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a,r=n("97Jx"),o=n.n(r),i=n("m3Bd"),l=n.n(i),s=n("ERkP"),u=n.n(s),c=n("O94r"),m=n.n(c),d=n("KEM+"),p=n.n(d),f=(n("PnnE"),n("aWzz")),h=n.n(f),E=n("/Vl7"),_={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},T=(a={},p()(a,_.EXTRA_SMALL,10),p()(a,_.SMALL,16),p()(a,_.MEDIUM,24),a),v=function(e){var t=e.className;return u.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};v.propTypes={className:h.a.string},v.defaultProps={className:null};var w=function(e){var t=e.orientation,n=e.size,a=e.disabled,r=e.className,o=m()("tw-chevron",{"chevron-color":!a},"".concat([t]).toLowerCase(),r),i=T[n];return n===_.EXTRA_SMALL?u.a.createElement(v,{className:o}):u.a.createElement(E.a,{className:o,size:i})};w.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},w.Size=_,w.propTypes={orientation:h.a.oneOf([w.Orientation.TOP,w.Orientation.BOTTOM,w.Orientation.LEFT,w.Orientation.RIGHT]),size:h.a.oneOf([w.Size.EXTRA_SMALL,w.Size.SMALL,w.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},w.defaultProps={orientation:w.Orientation.BOTTOM,size:w.Size.SMALL,disabled:!1,className:null};var O=w;n("aFlK");function g(e){var t=e.className,n=e.href,a=e.children,r=l()(e,["className","href","children"]);return u.a.createElement("a",o()({},r,{className:m()("tw-link-with-chevron",t),href:n}),a,u.a.createElement(O,{size:O.Size.EXTRA_SMALL,orientation:O.Orientation.RIGHT}))}},B9a8:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/TrustpilotTrustElement",function(){return n("Ocvo")}])},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Ocvo:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return _})),n.d(t,"default",(function(){return v}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),s=n("Qi1R"),u=n("97Jx"),c=n.n(u),m=n("m3Bd"),d=n.n(m),p=n("5KQa"),f=n("Rkui"),h=function(e){var t=e.title,n=e.linkText,a=e.href,r=e.useIllustration,o=d()(e,["title","linkText","href","useIllustration"]);return i.a.createElement(p.a,c()({},o,{src:i.a.createElement(f.a,null),title:t,linkText:n,href:a,shouldAnimate:!0,useIllustration:r}))};h.defaultProps={useIllustration:!0};var E=h,_=(i.a.createElement,{name:"TrustpilotTrustElement"}),T={meta:_};function v(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},T,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(s.b,{code:'() => (\n  <TrustpilotTrustElement\n    title="8 million customers"\n    linkText="Read on Trustpilot"\n    href="https://www.trustpilot.com/review/transferwise.com"\n    useIllustration\n  />\n);\n',scope:{TrustpilotTrustElement:E},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"TrustpilotTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},Rkui:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a);n("Da+w");t.a=function(){return r.a.createElement("svg",{id:"el_H8G--UHWO",className:"tw-trust-element__image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 50"},r.a.createElement("path",{d:"M14.3 43.5h46.9v-21H0v21h7.1V50l7.2-6.5z",id:"el_o50-IfnOhY"}),r.a.createElement("g",{id:"el_ZKUtuKmlJ2_an_27_VJB_eK","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{d:"M70.1 38.5H7.2v-24h77.2v24h-7.1V45l-7.2-6.5z",id:"el_ZKUtuKmlJ2"})),r.a.createElement("g",{id:"el_cKmWEw9KDj_an_Al496FKhj","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{d:"M24 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z",id:"el_cKmWEw9KDj"})),r.a.createElement("g",{id:"el_FrN2weN1HV_an_VyY4hnoQje","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_FrN2weN1HV",d:"M37 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1z"})),r.a.createElement("g",{id:"el_QxWDtUDnYN_an_fi3jS4kw1","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_QxWDtUDnYN",d:"M50 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})),r.a.createElement("g",{id:"el_0LSJko48lh_an_2TS1w_u6J","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_0LSJko48lh",d:"M63 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})),r.a.createElement("g",{id:"el_Yv2r1TIYxk_an_GdS0Y6cG7","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el_Yv2r1TIYxk",d:"M76 25.5h-3.2l-1-3-1 3h-3.2l2.6 1.9-1 3.1 2.6-1.9 2.6 1.9-1-3.1 2.6-1.9z"})))}},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}},ddV6:function(e,t,n){var a=n("qPgQ"),r=n("Ua7V"),o=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return a(e)||r(e,t)||o(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},peMk:function(e,t,n){var a=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["B9a8",0,1,3,5,4,2]]]);