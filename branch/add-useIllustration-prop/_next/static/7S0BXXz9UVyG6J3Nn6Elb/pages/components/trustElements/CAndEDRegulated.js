(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5KQa":function(e,t,n){"use strict";var a=n("ddV6"),r=n.n(a),o=n("ERkP"),l=n.n(o),i=n("O94r"),u=n.n(i),c=(n("H+dI"),function(e){function t(){d&&_(!0)}var n=e.title,a=e.alt,i=e.linkText,c=e.href,m=e.src,d=e.shouldAnimate,p=e.useIllustration,f=Object(o.useState)(!1),g=r()(f,2),E=g[0],_=g[1];return l.a.createElement("div",{className:u()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":E}),onAnimationEnd:function(){return _(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},p&&l.a.createElement((function(){return d?l.a.createElement("div",{className:"tw-trust-element__svg_container"},m):l.a.createElement("img",{className:"tw-trust-element__image",src:m,alt:a})}),null),l.a.createElement("div",{className:"h4 m-t-1"},n),c&&i&&l.a.createElement("a",{href:c,target:s(c)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()},className:"link-callout"},i))}),s=function(e){return"#"===e[0]};c.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1,useIllustration:!0},t.a=c},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Ua7V:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}},ddV6:function(e,t,n){var a=n("qPgQ"),r=n("Ua7V"),o=n("f2kJ");e.exports=function(e,t){return a(e)||r(e,t)||o()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},jRMw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/trustElements/CAndEDRegulated",function(){return n("yxIr")}])},np5S:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a);n("C0fJ");t.a=function(){return r.a.createElement("svg",{className:"tw-trust-element__image",id:"el_Z4_PUNsl8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 60"},r.a.createElement("g",{id:"el_FgEewNUKkJ_an_oeMg4ag9e","data-animator-group":"true","data-animator-type":"0"},r.a.createElement("g",{id:"el_FgEewNUKkJ_an_uU4kUuboq","data-animator-group":"true","data-animator-type":"1"},r.a.createElement("path",{d:"M28.8 53.6h-3.4V22.2c0-4.1-3.3-7.3-7.3-7.3s-7.3 3.2-7.3 7.3v8.5H7.3v-8.5a10.7 10.7 0 0 1 21.4-.6l.1 32z",id:"el_FgEewNUKkJ"}))),r.a.createElement("g",{id:"el_tgDFFwJ5S2"},r.a.createElement("g",{id:"el__TfCLs8FIv_an_-X7dfYVN9","data-animator-group":"true","data-animator-type":"1"},r.a.createElement("g",{id:"el__TfCLs8FIv_an_Hq9pZE6IR","data-animator-group":"true","data-animator-type":"2"},r.a.createElement("path",{id:"el__TfCLs8FIv",d:"M3.3 30.3h29.4v25.9H3.3z"}))),r.a.createElement("g",{id:"el_SK4UH8Lmy6_an_z3K7pURx4","data-animator-group":"true","data-animator-type":"1"},r.a.createElement("path",{id:"el_SK4UH8Lmy6",d:"M20.8 41.1c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7c0 .8.4 1.6 1 2.2v5h3.4v-5c.6-.6 1-1.4 1-2.2z"}))))}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},yxIr:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return f})),n.d(t,"default",(function(){return _}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),i=n("ZVZ0"),u=n("Qi1R"),c=n("5KQa"),s=n("np5S"),m=function(e){var t=e.title,n=e.linkText,a=e.href,r=e.useIllustration;return l.a.createElement(c.a,{src:l.a.createElement(s.a,null),title:t,linkText:n,href:a,shouldAnimate:!0,useIllustration:r})};m.defaultProps={useIllustration:!0};var d=m,p='() => (\n  <CAndEDRegulated\n    title="C&ED regulated"\n    linkText="Learn More"\n    href="https://transferwise.com/help/articles/2932693/how-is-transferwise-regulated-in-each-country"\n    useIllustration\n  />\n);\n',f=(l.a.createElement,{name:"CAndEDRegulated"}),g={meta:f},E="wrapper";function _(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(E,Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(u.b,{code:p,scope:{CAndEDRegulated:d},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"CAndEDRegulated",mdxType:"GeneratePropsTable"}))}_.isMDXComponent=!0}},[["jRMw",0,1,2,3,4]]]);