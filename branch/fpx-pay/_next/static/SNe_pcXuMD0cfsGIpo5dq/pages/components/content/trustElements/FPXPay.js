(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"5KQa":function(e,t,n){"use strict";var r=n("ddV6"),a=n.n(r),o=n("ERkP"),s=n.n(o),i=n("O94r"),c=n.n(i),l=(n("H+dI"),function(e){function t(){p&&b(!0)}var n=e.title,r=e.alt,i=e.linkText,l=e.href,m=e.src,p=e.shouldAnimate,f=Object(o.useState)(!1),d=a()(f,2),h=d[0],b=d[1];return s.a.createElement("div",{className:c()("tw-trust-element callout-container text-center",{"tw-trust-element-animate":h}),onAnimationEnd:function(){return b(!1)},onMouseEnter:t,"data-testid":"trust-element-container"},p?s.a.createElement("div",{className:"tw-trust-element__svg_container"},m):s.a.createElement("img",{className:"tw-trust-element__image",src:m,alt:r}),s.a.createElement("div",{className:"h4 m-t-1"},n),l&&i&&s.a.createElement("a",{href:l,target:u(l)?"_self":"_blank",rel:"noopener noreferrer",onFocus:function(){return t()},className:"link-callout"},i))}),u=function(e){return"#"===e[0]};l.defaultProps={linkText:null,href:null,alt:"",shouldAnimate:!1},t.a=l},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},fpZK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/trustElements/FPXPay",function(){return n("qX5V")}])},qX5V:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return f})),n.d(t,"default",(function(){return b}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),s=n.n(o),i=n("ZVZ0"),c=n("Qi1R"),l=n("5KQa"),u=function(e){var t=e.title,n=e.linkText,r=e.href,a=e.alt;return s.a.createElement(l.a,{src:"https://transferwise.com/public-resources/assets/marketing-components/illustrations/fpx.png",title:t,linkText:n,href:r,alt:a})};u.defaultProps={alt:""};var m=u,p='() => {\n    return (\n        <>\n        <div style={{background: \'#b8d6cb\'}}>\n            <FPXPay\n            title="Pay with FPX, bank transfer, or debit card"\n            linkText="Learn more"\n            href="https://transferwise.com/my/blog/instant-payments-with-fpx-on-transferwise"\n            />\n        </div>\n        </>\n    )\n};',f=(s.a.createElement,{name:"FPXPay"}),d={meta:f},h="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(h,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("span",null," ",Object(i.a)("b",null,"NOTE: The background color is needed to highlight the image. Not part of the component")),Object(i.a)(c.b,{code:p,scope:{FPXPay:m},mdxType:"LiveEditorBlock"}),Object(i.a)(c.a,{componentName:"FPXPay",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0}},[["fpZK",0,1,2,3,4]]]);