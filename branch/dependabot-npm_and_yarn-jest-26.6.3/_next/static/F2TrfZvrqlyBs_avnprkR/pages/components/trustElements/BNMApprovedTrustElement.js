(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+5gG":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/BNMApprovedTrustElement",function(){return n("OicJ")}])},"5KQa":function(e,t,n){"use strict";var r=n("uSvS"),a=n.n(r),o=n("skok"),i=n.n(o),l=n("13lk"),s=n.n(l),u=n("ERkP"),c=n.n(u),m=n("O94r"),p=n.n(m),f=n("ALPR"),d=(n("H+dI"),function(e){return"#"===e[0]}),v=function(e){var t=e.shouldAnimate,n=e.src,r=e.alt;return t?c.a.createElement("div",{className:"tw-trust-element__svg_container"},n):c.a.createElement("img",{className:"tw-trust-element__image",src:n,alt:r})},E=function(e){function t(){E&&L(!0)}var n=e.title,r=e.alt,o=e.linkText,l=e.href,m=e.src,E=e.shouldAnimate,h=e.useIllustration,T=s()(e,["title","alt","linkText","href","src","shouldAnimate","useIllustration"]),_=Object(u.useState)(!1),g=i()(_,2),w=g[0],L=g[1];return c.a.createElement("div",{className:p()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":w}),onAnimationEnd:function(){return L(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},h&&c.a.createElement(v,{alt:r,src:m,shouldAnimate:E}),c.a.createElement("div",{className:"h4 m-t-1"},n),l&&o&&c.a.createElement(f.a,a()({},T,{href:l,target:d(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()}}),o))};E.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=E},ALPR:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r,a=n("uSvS"),o=n.n(a),i=n("13lk"),l=n.n(i),s=n("ERkP"),u=n.n(s),c=n("O94r"),m=n.n(c),p=n("gC0r"),f=n.n(p),d=(n("PnnE"),n("aWzz")),v=n.n(d),E=n("za2A"),h={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},T=(r={},f()(r,h.EXTRA_SMALL,10),f()(r,h.SMALL,16),f()(r,h.MEDIUM,24),r),_=function(e){var t=e.className;return u.a.createElement("span",{className:m()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},u.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};_.propTypes={className:v.a.string},_.defaultProps={className:null};var g=function(e){var t=e.orientation,n=e.size,r=e.disabled,a=e.className,o=m()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),a),i=T[n];return n===h.EXTRA_SMALL?u.a.createElement(_,{className:o}):u.a.createElement(E.a,{className:o,size:i})};g.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},g.Size=h,g.propTypes={orientation:v.a.oneOf([g.Orientation.TOP,g.Orientation.BOTTOM,g.Orientation.LEFT,g.Orientation.RIGHT]),size:v.a.oneOf([g.Size.EXTRA_SMALL,g.Size.SMALL,g.Size.MEDIUM]),disabled:v.a.bool,className:v.a.string},g.defaultProps={orientation:g.Orientation.BOTTOM,size:g.Size.SMALL,disabled:!1,className:null};var w=g;n("aFlK");function L(e){var t=e.className,n=e.href,r=e.children,a=l()(e,["className","href","children"]);return u.a.createElement("a",o()({},a,{className:m()("tw-link-with-chevron",t),href:n}),r,u.a.createElement(w,{size:w.Size.EXTRA_SMALL,orientation:w.Orientation.RIGHT}))}},NGLw:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},OicJ:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return w}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),s=n("Qi1R"),u=n("uSvS"),c=n.n(u),m=n("13lk"),p=n.n(m),f=n("5KQa"),d=n("np5S"),v=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.useIllustration,o=p()(e,["title","linkText","href","useIllustration"]);return i.a.createElement(f.a,c()({},o,{src:i.a.createElement(d.a,null),title:t,linkText:n,href:r,shouldAnimate:!0,useIllustration:a}))};v.defaultProps={useIllustration:!0};var E=v,h='() => (\n  <BNMApprovedTrustElement\n    title="Approved in Malaysia"\n    linkText="Learn More"\n    href="https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country"\n    useIllustration\n  />\n);\n',T=(i.a.createElement,{name:"BNMApprovedTrustElement"}),_={meta:T},g="wrapper";function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)(g,Object(r.a)({},_,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(s.b,{code:h,scope:{BNMApprovedTrustElement:E},mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"BNMApprovedTrustElement",mdxType:"GeneratePropsTable"}))}w.isMDXComponent=!0},efpx:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},exc1:function(e,t,n){var r=n("efpx");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mPqz:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},np5S:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r);n("C0fJ");t.a=function(){return a.a.createElement("svg",{className:"tw-trust-element__image",id:"el_Z4_PUNsl8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 60"},a.a.createElement("g",{id:"el_FgEewNUKkJ_an_oeMg4ag9e","data-animator-group":"true","data-animator-type":"0"},a.a.createElement("g",{id:"el_FgEewNUKkJ_an_uU4kUuboq","data-animator-group":"true","data-animator-type":"1"},a.a.createElement("path",{d:"M28.8 53.6h-3.4V22.2c0-4.1-3.3-7.3-7.3-7.3s-7.3 3.2-7.3 7.3v8.5H7.3v-8.5a10.7 10.7 0 0 1 21.4-.6l.1 32z",id:"el_FgEewNUKkJ"}))),a.a.createElement("g",{id:"el_tgDFFwJ5S2"},a.a.createElement("g",{id:"el__TfCLs8FIv_an_-X7dfYVN9","data-animator-group":"true","data-animator-type":"1"},a.a.createElement("g",{id:"el__TfCLs8FIv_an_Hq9pZE6IR","data-animator-group":"true","data-animator-type":"2"},a.a.createElement("path",{id:"el__TfCLs8FIv",d:"M3.3 30.3h29.4v25.9H3.3z"}))),a.a.createElement("g",{id:"el_SK4UH8Lmy6_an_z3K7pURx4","data-animator-group":"true","data-animator-type":"1"},a.a.createElement("path",{id:"el_SK4UH8Lmy6",d:"M20.8 41.1c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7c0 .8.4 1.6 1 2.2v5h3.4v-5c.6-.6 1-1.4 1-2.2z"}))))}},skok:function(e,t,n){var r=n("teNE"),a=n("NGLw"),o=n("exc1"),i=n("mPqz");e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()}},teNE:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}},[["+5gG",0,1,3,5,4,2]]]);