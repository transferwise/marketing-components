_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"5KQa":function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("ddV6"),i=n.n(o),s=n("m3Bd"),l=n.n(s),u=n("ERkP"),c=n.n(u),m=n("O94r"),f=n.n(m),p=n("ALPR"),d=(n("H+dI"),function(e){return"#"===e[0]}),h=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?c.a.createElement("div",{className:"tw-trust-element__svg_container"},n):c.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},E=function(e){function t(){E&&L(!0)}var n=e.title,r=e.alt,o=e.linkText,s=e.href,m=e.src,E=e.shouldAnimate,T=e.useIllustration,v=l()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),b=Object(u.useState)(!1),O=i()(b,2),w=O[0],L=O[1];return c.a.createElement("div",{className:f()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":w}),onAnimationEnd:function(){return L(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},T&&c.a.createElement(h,{alt:r,src:m,shouldAnimate:E}),c.a.createElement("div",{className:"h4 m-t-1"},n),s&&o&&c.a.createElement(p.a,a()({},v,{href:s,target:d(s)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),o))};E.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=E},"6H5g":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return E})),n.d(t,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),s=n("ZVZ0"),l=n("Qi1R"),u=n("97Jx"),c=n.n(u),m=n("m3Bd"),f=n.n(m),p=n("5KQa"),d=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration,o=f()(e,["title","linkText","href","useIllustration"]);return i.a.createElement(p.a,c()({},o,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/customers.svg",title:t,linkText:n,href:r,useIllustration:a}))};d.defaultProps={useIllustration:!0};var h=d,E=(i.a.createElement,{name:"CustomersTrustElement"}),T={meta:E};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)("wrapper",Object(r.a)({},T,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)(l.b,{code:'() => (\n  <CustomersTrustElement\n    title="Over 8 million customers"\n    linkText="Read on Trustpilot"\n    href="https://www.trustpilot.com/review/transferwise.com"\n    useIllustration\n  />\n);\n',scope:{CustomersTrustElement:h},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"CustomersTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r,a=n("97Jx"),o=n.n(a),i=n("m3Bd"),s=n.n(i),l=n("ERkP"),u=n.n(l),c=n("O94r"),m=n.n(c),f=n("KEM+"),p=n.n(f),d=(n("PnnE"),n("aWzz")),h=n.n(d),E=n("/Vl7"),T={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},v=(r={},p()(r,T.EXTRA_SMALL,10),p()(r,T.SMALL,16),p()(r,T.MEDIUM,24),r),b=function(e){var t=e.className;return u.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};b.propTypes={className:h.a.string},b.defaultProps={className:null};var O=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=m()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=v[n];return n===T.EXTRA_SMALL?u.a.createElement(b,{className:o}):u.a.createElement(E.a,{className:o,size:i})};O.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},O.Size=T,O.propTypes={orientation:h.a.oneOf([O.Orientation.TOP,O.Orientation.BOTTOM,O.Orientation.LEFT,O.Orientation.RIGHT]),size:h.a.oneOf([O.Size.EXTRA_SMALL,O.Size.SMALL,O.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},O.defaultProps={orientation:O.Orientation.BOTTOM,size:O.Size.SMALL,disabled:!1,className:null};var w=O;n("aFlK");function L(e){var t=e.className,n=e.href,r=e.children,a=s()(e,["className","href","children"]);return u.a.createElement("a",o()({},a,{className:m()("tw-link-with-chevron",t),href:n}),r,u.a.createElement(w,{size:w.Size.EXTRA_SMALL,orientation:w.Orientation.RIGHT}))}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}},ddV6:function(e,t,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},ef7e:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/CustomersTrustElement",function(){return n("6H5g")}])},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["ef7e",0,1,3,5,4,2]]]);