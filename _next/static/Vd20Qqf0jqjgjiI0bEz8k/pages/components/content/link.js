(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"13lk":function(e,n,t){var r=t("4W7d");e.exports=function(e,n){if(null==e)return{};var t,a,o=r(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},"4W7d":function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}},ALPR:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r,a=t("uSvS"),o=t.n(a),i=t("13lk"),c=t.n(i),s=t("ERkP"),l=t.n(s),u=t("O94r"),p=t.n(u),f=t("gC0r"),m=t.n(f),O=(t("PnnE"),t("aWzz")),L=t.n(O),d=t("za2A"),T={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},v=(r={},m()(r,T.EXTRA_SMALL,10),m()(r,T.SMALL,16),m()(r,T.MEDIUM,24),r),b=function(e){var n=e.className;return l.a.createElement("span",{className:p()("tw-icon","tw-icon-chevron",n),role:"presentation","aria-hidden":!0},l.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},l.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};b.propTypes={className:L.a.string},b.defaultProps={className:null};var h=function(e){var n=e.orientation,t=e.size,r=e.disabled,a=e.className,o=p()("tw-chevron",{"chevron-color":!r},"".concat([n]).toLowerCase(),a),i=v[t];return t===T.EXTRA_SMALL?l.a.createElement(b,{className:o}):l.a.createElement(d.a,{className:o,size:i})};h.Orientation={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},h.Size=T,h.propTypes={orientation:L.a.oneOf([h.Orientation.TOP,h.Orientation.BOTTOM,h.Orientation.LEFT,h.Orientation.RIGHT]),size:L.a.oneOf([h.Size.EXTRA_SMALL,h.Size.SMALL,h.Size.MEDIUM]),disabled:L.a.bool,className:L.a.string},h.defaultProps={orientation:h.Orientation.BOTTOM,size:h.Size.SMALL,disabled:!1,className:null};var E=h;t("aFlK");function w(e){var n=e.className,t=e.href,r=e.children,a=c()(e,["className","href","children"]);return l.a.createElement("a",o()({},a,{className:p()("tw-link-with-chevron",n),href:t}),r,l.a.createElement(E,{size:E.Size.EXTRA_SMALL,orientation:E.Orientation.RIGHT}))}},NDiA:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"default",(function(){return O}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),i=t.n(o),c=t("ZVZ0"),s=t("Qi1R"),l=t("ALPR"),u='() => <Link href="https://transferwise.com">Home</Link>;\n',p=(i.a.createElement,{name:"Link"}),f={meta:p},m="wrapper";function O(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.a)(m,Object(r.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)(s.b,{code:u,scope:{Link:l.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Link",mdxType:"GeneratePropsTable"}))}O.isMDXComponent=!0},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},cVg3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/link",function(){return t("NDiA")}])},gC0r:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},uSvS:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t}},[["cVg3",0,1,4,5,3,2]]]);