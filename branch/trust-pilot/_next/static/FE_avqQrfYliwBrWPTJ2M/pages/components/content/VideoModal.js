(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4Hhb":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/VideoModal",function(){return t("Ouy5")}])},Ouy5:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return d})),t.d(n,"default",(function(){return b}));var o=t("cxan"),a=t("HbGN"),i=t("ERkP"),s=t.n(i),c=t("ZVZ0"),p=t("Qi1R"),r=t("E/L6"),l='() => {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <>\n      <button onClick={() => setOpen(true)}>Open Modal</button>\n      <VideoModal\n        posterUrl="https://transferwise.com/staticrab/homepage/_next/static/images/en-e09d936b919f436ff85caf38e1822030.jpg"\n        translations={{\n          poster: {\n            alt: \'Example\',\n          },\n          close: {\n            ariaLabel: \'Close\',\n          },\n        }}\n        isOpen={open}\n        onDismiss={() => setOpen(false)}\n        aria-label="Video modal example"\n      >\n        <iframe\n          title="Video modal example"\n          src="https://www.youtube.com/embed/MLKKzRvOsLQ"\n          frameBorder="0"\n          allowFullScreen\n          allow="autoplay"\n        />\n      </VideoModal>\n    </>\n  );\n};\n',d=(s.a.createElement,{name:"VideoModal"}),u={meta:d},m="wrapper";function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.a)(m,Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Low level, video friendly modal component"),Object(c.a)("p",null,"Typically, you avoid using the VideoModal component directly, and instead use ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"/components/content/YouTubeVideoModal"}),"YouTubeVideoModal"),"."),Object(c.a)("p",null,"If you're using a different video host, we recommend you contribute that component here."),Object(c.a)("p",null,"Animates the video in, which requires you to give the modal a poster, which is a temporary image shown before the animation has completed. This is to avoid jank while the animation is taking place and the video is loading."),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Note:")," To use this component in your application, you need to install ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/about/Setup"}),"neptune-css")," and ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/transferwise/icons"}),"@transferwise/icons@1.5.0")),Object(c.a)(p.b,{code:l,scope:{VideoModal:r.a},mdxType:"LiveEditorBlock"}),Object(c.a)(p.a,{componentName:"VideoModal",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0}},[["4Hhb",0,1,2,5,3,6,4]]]);