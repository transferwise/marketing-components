(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5KQa":function(e,t,n){"use strict";var a=n("uSvS"),r=n.n(a),i=n("skok"),o=n.n(i),l=n("13lk"),s=n.n(l),u=n("ERkP"),c=n.n(u),m=n("O94r"),d=n.n(m),f=n("ALPR"),p=(n("H+dI"),function(e){return"#"===e[0]}),E=function(e){var t=e.shouldAnimate,n=e.src,a=e.alt;return t?c.a.createElement("div",{className:"tw-trust-element__svg_container"},n):c.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:a})},v=function(e){function t(){v&&L(!0)}var n=e.title,a=e.alt,i=e.linkText,l=e.href,m=e.src,v=e.shouldAnimate,h=e.useIllustration,T=s()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),g=Object(u.useState)(!1),_=o()(g,2),y=_[0],L=_[1];return c.a.createElement("div",{className:d()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":y}),onAnimationEnd:function(){return L(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},h&&c.a.createElement(E,{alt:a,src:m,shouldAnimate:v}),c.a.createElement("div",{className:"h4 m-t-1"},n),l&&i&&c.a.createElement(f.a,r()({},T,{href:l,target:p(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),i))};v.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=v},"9adW":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return y}));var a=n("cxan"),r=n("HbGN"),i=n("ERkP"),o=n.n(i),l=n("ZVZ0"),s=n("Qi1R"),u=n("uSvS"),c=n.n(u),m=n("13lk"),d=n.n(m),f=n("5KQa"),p=n("np5S"),E=function(e){var t=e.title,n=e.linkText,a=e.href,r=e.useIllustration,i=d()(e,["title","linkText","href","useIllustration"]);return o.a.createElement(f.a,c()({},i,{src:o.a.createElement(p.a,null),title:t,linkText:n,href:a,shouldAnimate:!0,useIllustration:r}))};E.defaultProps={useIllustration:!0,linkText:null,href:null};var v=E,h='() => (\n  <BirlesikOdemeRegulatedTrustElement\n    title="Transactions processed by Birlesik \xd6deme Hizmetleri"\n    useIllustration\n  />\n);\n',T=(o.a.createElement,{name:"BirlesikOdemeRegulatedTrustElement"}),g={meta:T},_="wrapper";function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)(_,Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(s.b,{code:h,scope:{BirlesikOdemeRegulatedTrustElement:v},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"BirlesikOdemeRegulatedTrustElement",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a,r=n("uSvS"),i=n.n(r),o=n("13lk"),l=n.n(o),s=n("ERkP"),u=n.n(s),c=n("O94r"),m=n.n(c),d=n("gC0r"),f=n.n(d),p=(n("PnnE"),n("aWzz")),E=n.n(p),v=n("za2A"),h={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},T=(a={},f()(a,h.EXTRA_SMALL,10),f()(a,h.SMALL,16),f()(a,h.MEDIUM,24),a),g=function(e){var t=e.className;return u.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};g.propTypes={className:E.a.string},g.defaultProps={className:null};var _=function(e){var t=e.orientation,n=e.size,a=e.disabled,r=e.className,i=m()("tw-chevron",{"chevron-color":!a},"".concat([t]).toLowerCase(),r),o=T[n];return n===h.EXTRA_SMALL?u.a.createElement(g,{className:i}):u.a.createElement(v.a,{className:i,size:o})};_.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},_.Size=h,_.propTypes={orientation:E.a.oneOf([_.Orientation.TOP,_.Orientation.BOTTOM,_.Orientation.LEFT,_.Orientation.RIGHT]),size:E.a.oneOf([_.Size.EXTRA_SMALL,_.Size.SMALL,_.Size.MEDIUM]),disabled:E.a.bool,className:E.a.string},_.defaultProps={orientation:_.Orientation.BOTTOM,size:_.Size.SMALL,disabled:!1,className:null};var y=_;n("aFlK");function L(e){var t=e.className,n=e.href,a=e.children,r=l()(e,["className","href","children"]);return u.a.createElement("a",i()({},r,{className:m()("tw-link-with-chevron",t),href:n}),a,u.a.createElement(y,{size:y.Size.EXTRA_SMALL,orientation:y.Orientation.RIGHT}))}},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},exc1:function(e,t,n){var a=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},np5S:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a);n("C0fJ");t.a=function(){return r.a.createElement("svg",{className:"tw-trust-element__image",id:"el_Z4_PUNsl8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 60"},r.a.createElement("g",{id:"el_FgEewNUKkJ_an_oeMg4ag9e","data-animator-group":"true","data-animator-type":"0"},r.a.createElement("g",{id:"el_FgEewNUKkJ_an_uU4kUuboq","data-animator-group":"true","data-animator-type":"1"},r.a.createElement("path",{d:"M28.8 53.6h-3.4V22.2c0-4.1-3.3-7.3-7.3-7.3s-7.3 3.2-7.3 7.3v8.5H7.3v-8.5a10.7 10.7 0 0 1 21.4-.6l.1 32z",id:"el_FgEewNUKkJ"}))),r.a.createElement("g",{id:"el_tgDFFwJ5S2"},r.a.createElement("g",{id:"el__TfCLs8FIv_an_-X7dfYVN9","data-animator-group":"true","data-animator-type":"1"},r.a.createElement("g",{id:"el__TfCLs8FIv_an_Hq9pZE6IR","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el__TfCLs8FIv",d:"M3.3 30.3h29.4v25.9H3.3z"}))),r.a.createElement("g",{id:"el_SK4UH8Lmy6_an_z3K7pURx4","data-animator-group":"true","data-animator-type":"1"},r.a.createElement("path",{id:"el_SK4UH8Lmy6",d:"M20.8 41.1c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7c0 .8.4 1.6 1 2.2v5h3.4v-5c.6-.6 1-1.4 1-2.2z"}))))}},ryvy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/BirlesikOdemeRegulatedTrustElement",function(){return n("9adW")}])},skok:function(e,t,n){var a=n("teNE"),r=n("NGLw"),i=n("exc1"),o=n("mPqz");e.exports=function(e,t){return a(e)||r(e,t)||i(e,t)||o()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["ryvy",0,1,3,5,4,2]]]);