_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"5KQa":function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),i=n("ddV6"),o=n.n(i),l=n("m3Bd"),s=n.n(l),c=n("ERkP"),u=n.n(c),f=n("O94r"),m=n.n(f),p=n("ALPR"),d=(n("H+dI"),function(e){return"#"===e[0]}),h=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?u.a.createElement("div",{className:"tw-trust-element__svg_container"},n):u.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},E=function(e){function t(){E&&y(!0)}var n=e.title,r=e.alt,i=e.linkText,l=e.href,f=e.src,E=e.shouldAnimate,T=e.useIllustration,v=s()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),L=Object(c.useState)(!1),b=o()(L,2),O=b[0],y=b[1];return u.a.createElement("div",{className:m()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":O}),onAnimationEnd:function(){return y(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},T&&u.a.createElement(h,{alt:r,src:f,shouldAnimate:E}),u.a.createElement("div",{className:"h4 m-t-1"},n),l&&i&&u.a.createElement(p.a,a()({},v,{href:l,target:d(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),i))};E.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=E},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r,a=n("97Jx"),i=n.n(a),o=n("m3Bd"),l=n.n(o),s=n("ERkP"),c=n.n(s),u=n("O94r"),f=n.n(u),m=n("KEM+"),p=n.n(m),d=(n("PnnE"),n("aWzz")),h=n.n(d),E=n("/Vl7"),T={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},v=(r={},p()(r,T.EXTRA_SMALL,10),p()(r,T.SMALL,16),p()(r,T.MEDIUM,24),r),L=function(e){var t=e.className;return c.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};L.propTypes={className:h.a.string},L.defaultProps={className:null};var b=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,i=f()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),o=v[n];return n===T.EXTRA_SMALL?c.a.createElement(L,{className:i}):c.a.createElement(E.a,{className:i,size:o})};b.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},b.Size=T,b.propTypes={orientation:h.a.oneOf([b.Orientation.TOP,b.Orientation.BOTTOM,b.Orientation.LEFT,b.Orientation.RIGHT]),size:h.a.oneOf([b.Size.EXTRA_SMALL,b.Size.SMALL,b.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},b.defaultProps={orientation:b.Orientation.BOTTOM,size:b.Size.SMALL,disabled:!1,className:null};var O=b;n("aFlK");function y(e){var t=e.className,n=e.href,r=e.children,a=l()(e,["className","href","children"]);return c.a.createElement("a",i()({},a,{className:f()("tw-link-with-chevron",t),href:n}),r,c.a.createElement(O,{size:O.Size.EXTRA_SMALL,orientation:O.Orientation.RIGHT}))}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}}},YrUv:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return E})),n.d(t,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),i=n("ERkP"),o=n.n(i),l=n("ZVZ0"),s=n("Qi1R"),c=n("97Jx"),u=n.n(c),f=n("m3Bd"),m=n.n(f),p=n("5KQa"),d=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration,i=m()(e,["title","linkText","href","useIllustration"]);return o.a.createElement(p.a,u()({},i,{src:"https://wise.com/public-resources/assets/spot-illustrations/banking.svg",title:t,linkText:n,href:r,useIllustration:a}))};d.defaultProps={useIllustration:!0};var h=d,E=(o.a.createElement,{name:"BrazilianLicenseTrustElement"}),T={meta:E};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},T,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(s.b,{code:'() => (\n  <BrazilianLicenseTrustElement\n    title="Licence from Brazilian Central Bank"\n    linkText="Learn More"\n    href="https://transferwise.com/help/articles/2Cp4HepKB0xemJ3GwNhRVM"\n    useIllustration\n  />\n);\n',scope:{BrazilianLicenseTrustElement:h},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"BrazilianLicenseTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},ddV6:function(e,t,n){var r=n("qPgQ"),a=n("Ua7V"),i=n("peMk"),o=n("f2kJ");e.exports=function(e,t){return r(e)||a(e,t)||i(e,t)||o()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},jrcy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/BrazilianLicenseTrustElement",function(){return n("YrUv")}])},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["jrcy",0,1,3,5,4,2]]]);