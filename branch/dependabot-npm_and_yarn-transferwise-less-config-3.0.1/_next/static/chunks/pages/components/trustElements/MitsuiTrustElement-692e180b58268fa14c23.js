_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"5KQa":function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),i=n("ddV6"),o=n.n(i),s=n("m3Bd"),l=n.n(s),u=n("ERkP"),c=n.n(u),m=n("O94r"),f=n.n(m),p=n("ALPR"),d=(n("H+dI"),function(e){return"#"===e[0]}),h=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?c.a.createElement("div",{className:"tw-trust-element__svg_container"},n):c.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},T=function(e){function t(){T&&M(!0)}var n=e.title,r=e.alt,i=e.linkText,s=e.href,m=e.src,T=e.shouldAnimate,E=e.useIllustration,v=l()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),b=Object(u.useState)(!1),O=o()(b,2),L=O[0],M=O[1];return c.a.createElement("div",{className:f()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":L}),onAnimationEnd:function(){return M(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},E&&c.a.createElement(h,{alt:r,src:m,shouldAnimate:T}),c.a.createElement("div",{className:"h4 m-t-1"},n),s&&i&&c.a.createElement(p.a,a()({},v,{href:s,target:d(s)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),i))};T.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=T},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r,a=n("97Jx"),i=n.n(a),o=n("m3Bd"),s=n.n(o),l=n("ERkP"),u=n.n(l),c=n("O94r"),m=n.n(c),f=n("KEM+"),p=n.n(f),d=(n("PnnE"),n("aWzz")),h=n.n(d),T=n("/Vl7"),E={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},v=(r={},p()(r,E.EXTRA_SMALL,10),p()(r,E.SMALL,16),p()(r,E.MEDIUM,24),r),b=function(e){var t=e.className;return u.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};b.propTypes={className:h.a.string},b.defaultProps={className:null};var O=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,i=m()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),o=v[n];return n===E.EXTRA_SMALL?u.a.createElement(b,{className:i}):u.a.createElement(T.a,{className:i,size:o})};O.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},O.Size=E,O.propTypes={orientation:h.a.oneOf([O.Orientation.TOP,O.Orientation.BOTTOM,O.Orientation.LEFT,O.Orientation.RIGHT]),size:h.a.oneOf([O.Size.EXTRA_SMALL,O.Size.SMALL,O.Size.MEDIUM]),disabled:h.a.bool,className:h.a.string},O.defaultProps={orientation:O.Orientation.BOTTOM,size:O.Size.SMALL,disabled:!1,className:null};var L=O;n("aFlK");function M(e){var t=e.className,n=e.href,r=e.children,a=s()(e,["className","href","children"]);return u.a.createElement("a",i()({},a,{className:m()("tw-link-with-chevron",t),href:n}),r,u.a.createElement(L,{size:L.Size.EXTRA_SMALL,orientation:L.Orientation.RIGHT}))}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}},ZJ6G:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/MitsuiTrustElement",function(){return n("hXvo")}])},ddV6:function(e,t,n){var r=n("qPgQ"),a=n("Ua7V"),i=n("peMk"),o=n("f2kJ");e.exports=function(e,t){return r(e)||a(e,t)||i(e,t)||o()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},hXvo:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return v}));var r=n("cxan"),a=n("HbGN"),i=n("ERkP"),o=n.n(i),s=n("ZVZ0"),l=n("Qi1R"),u=n("97Jx"),c=n.n(u),m=n("m3Bd"),f=n.n(m),p=n("5KQa"),d=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration,i=f()(e,["title","linkText","href","useIllustration"]);return o.a.createElement(p.a,c()({},i,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/mitsui.svg",title:t,linkText:n,href:r,useIllustration:a}))};d.defaultProps={useIllustration:!0};var h=d,T=(o.a.createElement,{name:"MitsuiTrustElement"}),E={meta:T};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.a)("wrapper",Object(r.a)({},E,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("span",null,Object(s.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(s.a)(l.b,{code:'() => (\n  <div style={{ background: \'#b8d6cb\' }}>\n    <MitsuiTrustElement\n      title="Mitsui & Co invested in us"\n      linkText="Read on TechCrunch"\n      href="https://jp.techcrunch.com/2017/11/04/20171101transferwise-280-million/"\n      useIllustration\n    />\n  </div>\n);\n',scope:{MitsuiTrustElement:h},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"MitsuiTrustElement",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["ZJ6G",0,1,3,5,4,2]]]);