(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"39Gj":function(e,n){e.exports={COOKIE_NAME:"twCookieConsent",SIMPLE_COOKIE_NAME:"twCookieConsentGTM",COOKIE_POLICY_ID:"2020-01-31",DEFAULT_COOKIE_EXPIRY:157248e5,COOKIE_CONSENT_ACCEPT_EVENT_NAME:"accepttwcookieconsent"}},cMSu:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return C})),t.d(n,"default",(function(){return I}));var o=t("cxan"),a=t("HbGN"),s=t("ERkP"),i=t.n(s),c=t("ZVZ0"),r=t("Qi1R"),p=t("uSvS"),u=t.n(p),l=t("13lk"),O=t.n(l),d=t("guPZ"),m=t("E/L6"),E=function(e){var n=e.videoId,t=e.posterUrl,o=e.translations,a=e.isOpen,s=e.onDismiss,c=O()(e,["videoId","posterUrl","translations","isOpen","onDismiss"]),r="https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg"),p="https://www.youtube-nocookie.com/embed/".concat(n,"?enablejsapi=1&html5=1&rel=0&showinfo=0&autoplay=1&wmode=opaque");return Object(d.hasValidConsent)()?i.a.createElement(m.a,u()({},c,{posterUrl:t||r,translations:o,isOpen:a,onDismiss:s}),i.a.createElement("iframe",{title:o.title,src:p,frameBorder:"0",allowFullScreen:!0,allow:"autoplay"})):(a&&(window.open("https://youtu.be/".concat(n),"_blank"),s()),null)};E.defaultProps={posterUrl:"",isOpen:!1};var b=E,w="() => {\n  const [open, setOpen] = React.useState(false);\n\n  return (\n    <>\n      <button onClick={() => setOpen(true)}>Open Modal</button>\n      <YouTubeVideoModal\n        videoId=\"MLKKzRvOsLQ\"\n        translations={{\n          title: 'Video modal example',\n          poster: {\n            alt: 'Example',\n          },\n          close: {\n            ariaLabel: 'Close',\n          },\n        }}\n        isOpen={open}\n        onDismiss={() => setOpen(false)}\n        aria-label=\"Video modal example\"\n      />\n    </>\n  );\n};\n",C=(i.a.createElement,{name:"YouTubeVideoModal"}),_={meta:C},f="wrapper";function I(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.a)(f,Object(o.a)({},_,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Modal component for showing YouTube videos"),Object(c.a)("p",null,"Per VideoModal's documentation, it will automatically fetch a poster from YouTube if you don't provide one."),Object(c.a)("p",null,"Used on ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"https://transferwise.com"}),"transferwise.com"),"."),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Note:")," To use this component in your application, you need to install ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"https://transferwise.github.io/neptune-web/about/Setup"}),"neptune-css")," and ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/transferwise/icons"}),"@transferwise/icons@1.5.0")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Note v2:")," This component respects cookie consent and if customer has not accepted it then video is opened in a new tab instead of opening it in a modal. ",Object(c.a)("a",Object(o.a)({parentName:"p"},{href:"https://transferwise.atlassian.net/wiki/spaces/C20/pages/1115621535/How+to+make+your+application+compliant+with+ICO+regulations"}),"Read more why we need to do this")),Object(c.a)(r.b,{code:w,scope:{YouTubeVideoModal:b},mdxType:"LiveEditorBlock"}),Object(c.a)(r.a,{componentName:"YouTubeVideoModal",mdxType:"GeneratePropsTable"}))}I.isMDXComponent=!0},guPZ:function(e,n,t){var o=t("39Gj");function a(){var e=function(){var e=null;"undefined"!==typeof document&&document.cookie&&(e=document.cookie.match(new RegExp("(^|;) ?twCookieConsent=([^;]*)(;|$)")));return e?JSON.parse(decodeURIComponent(e[2])):null}();return!(!e||"accepted"!==e.status)}e.exports={hasValidConsent:a,cookie:{write:function(e,n){n&&n.essential&&(document.cookie=e),a()&&(document.cookie=e)}},COOKIE_NAME:o.COOKIE_NAME,SIMPLE_COOKIE_NAME:o.SIMPLE_COOKIE_NAME,COOKIE_POLICY_ID:o.COOKIE_POLICY_ID,DEFAULT_COOKIE_EXPIRY:o.DEFAULT_COOKIE_EXPIRY,COOKIE_CONSENT_ACCEPT_EVENT_NAME:o.COOKIE_CONSENT_ACCEPT_EVENT_NAME}},mGOh:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/YouTubeVideoModal",function(){return t("cMSu")}])}},[["mGOh",0,1,2,6,3,5,4]]]);