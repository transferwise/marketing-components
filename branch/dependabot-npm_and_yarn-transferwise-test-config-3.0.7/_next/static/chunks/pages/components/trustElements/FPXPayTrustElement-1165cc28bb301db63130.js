_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"5KQa":function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("ddV6"),i=n.n(o),l=n("m3Bd"),s=n.n(l),c=n("ERkP"),u=n.n(c),f=n("O94r"),m=n.n(f),p=n("ALPR"),d=(n("H+dI"),function(e){return"#"===e[0]}),h=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?u.a.createElement("div",{className:"tw-trust-element__svg_container"},n):u.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},E=function(e){function t(){E&&L(!0)}var n=e.title,r=e.alt,o=e.linkText,l=e.href,f=e.src,E=e.shouldAnimate,T=e.useIllustration,b=s()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),v=Object(c.useState)(!1),y=i()(v,2),O=y[0],L=y[1];return u.a.createElement("div",{className:m()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":O}),onAnimationEnd:function(){return L(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},T&&u.a.createElement(h,{alt:r,src:f,shouldAnimate:E}),u.a.createElement("div",{className:"h4 m-t-1"},n),l&&o&&u.a.createElement(p.a,a()({},b,{href:l,target:d(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),o))};E.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=E},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r,a=n("97Jx"),o=n.n(a),i=n("m3Bd"),l=n.n(i),s=n("ERkP"),c=n.n(s),u=n("O94r"),f=n.n(u),m=n("KEM+"),p=n.n(m),d=(n("PnnE"),n("aWzz")),h=n.n(d),E=n("/Vl7"),T={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},b=(r={},p()(r,T.EXTRA_SMALL,10),p()(r,T.SMALL,16),p()(r,T.MEDIUM,24),r),v=function(e){var t=e.className;return c.a.createElement("span",{className:f()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};v.propTypes={className:h.a.string},v.defaultProps={className:null};var y=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=f()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=b[n];return n===T.EXTRA_SMALL?c.a.createElement(v,{className:o}):c.a.createElement(E.a,{className:o,size:i})};y.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},y.Size=T,y.propTypes={orientation:h.a.oneOf([y.Orientation.TOP,y.Orientation.BOTTOM,y.Orientation.LEFT,y.Orientation.RIGHT]),size:h.a.oneOf([y.Size.EXTRA_SMALL,y.Size.SMALL,y.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},y.defaultProps={orientation:y.Orientation.BOTTOM,size:y.Size.SMALL,disabled:!1,className:null};var O=y;n("aFlK");function L(e){var t=e.className,n=e.href,r=e.children,a=l()(e,["className","href","children"]);return c.a.createElement("a",o()({},a,{className:f()("tw-link-with-chevron",t),href:n}),r,c.a.createElement(O,{size:O.Size.EXTRA_SMALL,orientation:O.Orientation.RIGHT}))}},BUDa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/FPXPayTrustElement",function(){return n("YWC8")}])},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},YWC8:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return E})),n.d(t,"default",(function(){return b}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),s=n("Qi1R"),c=n("97Jx"),u=n.n(c),f=n("m3Bd"),m=n.n(f),p=n("5KQa"),d=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.alt,o=e.useIllustration,l=m()(e,["title","linkText","href","alt","useIllustration"]);return i.a.createElement(p.a,u()({},l,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/fpx.png",title:t,linkText:n,href:r,alt:a,useIllustration:o}))};d.defaultProps={alt:"",useIllustration:!0};var h=d,E=(i.a.createElement,{name:"FPXPayTrustElement"}),T={meta:E};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},T,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("span",null,Object(l.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(l.a)(s.b,{code:'() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <FPXPayTrustElement\n      title="Pay with FPX, bank transfer, or debit card"\n      linkText="Learn more"\n      href="https://transferwise.com/my/blog/instant-payments-with-fpx-on-transferwise"\n      useIllustration\n    />\n  </div>\n);\n',scope:{FPXPayTrustElement:h},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"FPXPayTrustElement",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0},ddV6:function(e,t,n){var r=n("qPgQ"),a=n("Ua7V"),o=n("peMk"),i=n("f2kJ");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["BUDa",0,1,3,5,4,2]]]);