(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ALPR:function(e,n,t){"use strict";t.d(n,"a",(function(){return A}));var a,r=t("uSvS"),o=t.n(r),i=t("13lk"),s=t.n(i),c=t("ERkP"),l=t.n(c),u=t("O94r"),p=t.n(u),f=t("gC0r"),m=t.n(f),L=(t("PnnE"),t("aWzz")),T=t.n(L),d=t("/Vl7"),O={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},E=(a={},m()(a,O.EXTRA_SMALL,10),m()(a,O.SMALL,16),m()(a,O.MEDIUM,24),a),h=function(e){var n=e.className;return l.a.createElement("span",{className:p()("tw-icon","tw-icon-chevron",n),role:"presentation","aria-hidden":!0},l.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},l.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};h.propTypes={className:T.a.string},h.defaultProps={className:null};var v=function(e){var n=e.orientation,t=e.size,a=e.disabled,r=e.className,o=p()("tw-chevron",{"chevron-color":!a},"".concat([n]).toLowerCase(),r),i=E[t];return t===O.EXTRA_SMALL?l.a.createElement(h,{className:o}):l.a.createElement(d.a,{className:o,size:i})};v.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},v.Size=O,v.propTypes={orientation:T.a.oneOf([v.Orientation.TOP,v.Orientation.BOTTOM,v.Orientation.LEFT,v.Orientation.RIGHT]),size:T.a.oneOf([v.Size.EXTRA_SMALL,v.Size.SMALL,v.Size.MEDIUM]),disabled:T.a.bool,className:T.a.string},v.defaultProps={orientation:v.Orientation.BOTTOM,size:v.Size.SMALL,disabled:!1,className:null};var b=v;t("aFlK");function A(e){var n=e.className,t=e.href,a=e.children,r=s()(e,["className","href","children"]);return l.a.createElement("a",o()({},r,{className:p()("tw-link-with-chevron",n),href:t}),a,l.a.createElement(b,{size:b.Size.EXTRA_SMALL,orientation:b.Orientation.RIGHT}))}},NDiA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"default",(function(){return L}));var a=t("cxan"),r=t("HbGN"),o=t("ERkP"),i=t.n(o),s=t("ZVZ0"),c=t("Qi1R"),l=t("ALPR"),u='() => <Link href="https://transferwise.com">Home</Link>;\n',p=(i.a.createElement,{name:"Link"}),f={meta:p},m="wrapper";function L(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.a)(m,Object(a.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)(c.b,{code:u,scope:{Link:l.a},mdxType:"LiveEditorBlock"}),Object(s.a)(c.a,{componentName:"Link",mdxType:"GeneratePropsTable"}))}L.isMDXComponent=!0},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},cVg3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/link",function(){return t("NDiA")}])},gC0r:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}}},[["cVg3",0,1,3,5,4,2]]]);