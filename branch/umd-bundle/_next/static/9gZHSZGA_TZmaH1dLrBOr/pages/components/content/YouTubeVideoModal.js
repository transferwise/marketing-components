(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{cMSu:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return O})),t.d(n,"default",(function(){return T}));var o=t("cxan"),a=t("HbGN"),r=t("ERkP"),s=t.n(r),i=t("ZVZ0"),l=t("Qi1R"),c=t("uSvS"),p=t.n(c),u=t("13lk"),d=t.n(u),m=t("E/L6"),b=function(e){var n=e.videoId,t=e.posterUrl,o=e.translations,a=d()(e,["videoId","posterUrl","translations"]),r="https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg"),i="https://www.youtube-nocookie.com/embed/".concat(n,"?enablejsapi=1&html5=1&rel=0&showinfo=0&autoplay=1&wmode=opaque");return s.a.createElement(m.a,p()({},a,{posterUrl:t||r,translations:o}),s.a.createElement("iframe",{title:o.title,src:i,frameBorder:"0",allowFullScreen:!0,allow:"autoplay"}))};b.defaultProps={posterUrl:""};var f=b,w="() => {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <>\n      <button onClick={() => setOpen(true)}>Open Modal</button>\n      <YouTubeVideoModal\n        videoId=\"MLKKzRvOsLQ\"\n        translations={{\n          title: 'Video modal example',\n          poster: {\n            alt: 'Example',\n          },\n          close: {\n            ariaLabel: 'Close',\n          },\n        }}\n        isOpen={open}\n        onDismiss={() => setOpen(false)}\n        aria-label=\"Video modal example\"\n      />\n    </>\n  );\n};\n",O=(s.a.createElement,{name:"YouTubeVideoModal"}),h={meta:O},j="wrapper";function T(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)(j,Object(o.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Modal component for showing YouTube videos"),Object(i.a)("p",null,"Per VideoModal's documentation, it will automatically fetch a poster from YouTube if you don't provide one."),Object(i.a)("p",null,"Used on ",Object(i.a)("a",Object(o.a)({parentName:"p"},{href:"https://transferwise.com"}),"transferwise.com"),"."),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Note:")," To use this component in your application, you need to install ",Object(i.a)("a",Object(o.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/about/Setup"}),"neptune-css")," and ",Object(i.a)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/transferwise/icons"}),"@transferwise/icons@1.5.0")),Object(i.a)(l.b,{code:w,scope:{YouTubeVideoModal:f},mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"YouTubeVideoModal",mdxType:"GeneratePropsTable"}))}T.isMDXComponent=!0},mGOh:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/YouTubeVideoModal",function(){return t("cMSu")}])}},[["mGOh",0,1,2,6,3,5,4]]]);