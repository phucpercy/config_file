(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),a=r(3),l=r.n(a),o=r(51);const c=r(47).f;var u="_1idBRq-oTDvFyU61sr-8cB",i="_1ZZ1yBr4x9Cqvcc3hmdCql";const s=["className","padding"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){let t=e.className,r=e.padding,a=void 0===r||r,d=m(e,s);var p;return Object(n.useEffect)((()=>{var e,t;window.matchMedia&&(window.matchMedia(c.replace("@media ","")).matches||(window.scroll(0,0),null===(e=document.querySelector('[role="dialog"]'))||void 0===e||null===(t=e.scroll)||void 0===t||t.call(e,0,0)))}),[]),p=d.isOpen,Object(n.useEffect)((()=>{const e=document.querySelector("#__next");e&&(p?e.classList.add("hide-on-modal"):e.classList.remove("hide-on-modal"))}),[p]),n.default.createElement(o.a,f({},d,{className:l()(t,u,a&&i)}))}},197:function(e,t,r){"use strict";var n,a=r(0);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.a=function(e){return a.createElement("svg",l({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon"},e),n||(n=a.createElement("path",{d:"M9.106 24c-.002-.466-.005-.914-.01-1.343a168.92 168.92 0 01-.009-1.685l-.436.075a5.57 5.57 0 01-1.052.066 8.027 8.027 0 01-1.318-.132 2.946 2.946 0 01-1.27-.568 2.403 2.403 0 01-.834-1.164l-.19-.436a4.731 4.731 0 00-.597-.966c-.272-.353-.547-.593-.825-.72l-.132-.094a1.391 1.391 0 01-.247-.228 1.039 1.039 0 01-.17-.265c-.038-.088-.007-.16.094-.218.102-.057.285-.084.55-.084l.38.056c.252.05.565.202.938.455.373.252.68.58.92.984.29.518.64.912 1.052 1.184.41.271.824.407 1.241.407.417 0 .778-.032 1.081-.095.303-.063.588-.158.853-.284.114-.846.424-1.496.93-1.95-.721-.076-1.369-.19-1.944-.342a7.743 7.743 0 01-1.782-.738 5.103 5.103 0 01-1.527-1.269c-.404-.505-.736-1.168-.995-1.988-.259-.821-.389-1.768-.389-2.841 0-1.528.5-2.828 1.498-3.901-.467-1.149-.423-2.437.133-3.863.367-.114.91-.029 1.63.255.721.284 1.249.528 1.584.73.335.201.603.372.806.51a13.478 13.478 0 013.64-.491c1.251 0 2.465.164 3.64.492l.721-.454a10.21 10.21 0 011.744-.834c.67-.252 1.182-.322 1.537-.208.568 1.427.619 2.714.15 3.863C21.502 6.989 22 8.29 22 9.817c0 1.073-.13 2.023-.389 2.85s-.593 1.49-1.004 1.988a5.3 5.3 0 01-1.536 1.26 7.758 7.758 0 01-1.783.738c-.575.152-1.223.266-1.943.342.657.568.986 1.464.986 2.689V24H9.106z",fill:"currentcolor",fillRule:"evenodd"})))}},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(1),a=r.n(n),l=r(0),o=r(70),c=r(197),u=r(67),i=r(94),s=r(12),f=r(13),m=r(8),d=r(27);function p(e,t,r,n,a,l,o){try{var c=e[l](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function y(){const e=Object(o.useRouter)(),t=Object(l.useContext)(f.b).getRedirectUri,r=(t,r)=>`${m.a}/v1/auth/authorize?provider=${t}&redirect_uri=${encodeURI(r)}&skip_authenticate=true&register_mode=${e.query.author?"author":"default"}`,n=function(){var e,n=(e=a.a.mark((function e(n){var l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.i)(n);case 2:l=t(),window.location.href=r(n,l);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){p(l,n,a,o,c,"next",e)}function c(e){p(l,n,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"flex flex-col items-stretch self-center -my-2"},l.default.createElement(s.a,{className:"my-2 btn-primary",onClick:()=>n("github"),icon:l.default.createElement(c.a,null)},"Sign in with GitHub"),l.default.createElement(s.a,{className:"my-2 btn-primary",onClick:()=>n("google"),icon:l.default.createElement("img",{src:"/google.svg",className:"icon",alt:"Google logo"})},"Sign in with Google")),l.default.createElement(i.c,{className:"self-center mt-8",style:{maxWidth:"17.25rem"}},"By signing in I accept the"," ",l.default.createElement("a",{href:u.h,target:"_blank",rel:"noopener"},"Terms of Service")," ","and the"," ",l.default.createElement("a",{href:u.e,target:"_blank",rel:"noopener"},"Privacy Policy"),"."))}},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),a=r(3),l=r.n(a),o=r(27);var c=r(12);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){let t=e.origin,r=e.children,a=e.className;const i=u(function(e){return Object(n.useEffect)((()=>{Object(o.f)(e)}),[]),[()=>Object(o.e)(e)]}(t),1)[0];return n.default.createElement(c.a,{className:l()("btn-secondary",a),tag:"a",href:`https://app.daily.dev/devcard?utm_source=dailydev&utm_medium=app&utm_campaign=${t}`,target:"_blank",onClick:i},r)}},229:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return R}));var n=r(0),a=r(195),l=r(3),o=r.n(l),c=r(202);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){return n.default.createElement("svg",u({viewBox:"0 0 821 444",xmlns:"http://www.w3.org/2000/svg"},e),n.default.createElement("g",{fill:"none",fillRule:"evenodd"},n.default.createElement("path",{d:"M791 433a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM141.368 228.408l14.429 14.417-28.857 28.833-14.43-14.417zM705.5 69c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zM247.097 17.418l2.64 9.847-39.42 10.553-2.64-9.846z",fill:"#bc47ff"}),n.default.createElement("path",{d:"M92 382a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm524-198a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM21.5 102c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zM610.346.278l39.765 9.172-6.885 29.799-39.765-9.173z",fill:"#46f3ff"}),n.default.createElement("path",{d:"M704 265a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM126.766 84.946l39.765 9.172-6.886 29.799-39.764-9.173zm452.49.447l15.303 26.485-8.836 5.097-15.304-26.484zM256 66a5.5 5.5 0 110 11 5.5 5.5 0 010-11z",fill:"#ffe047"}),n.default.createElement("path",{d:"M188.573 346.155l22.385 20.857-13.916 14.91-22.385-20.856zM49 273a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm762-16a9.5 9.5 0 110 19 9.5 9.5 0 010-19zM107 23a5.5 5.5 0 110 11 5.5 5.5 0 010-11z",fill:"#fff"}),n.default.createElement("path",{d:"M683.073 362.109l15.304 26.485-17.671 10.194-15.304-26.485zM11.5 342v19H.5v-19zM78 189a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm716.318-63.95l8.836 5.098-20.406 35.313-8.835-5.097z",fill:"#ffa947"})))}var s=r(58),f=r(123),m=r(199),d=r(204),p=r(198),y=r(12),b=r(66),v=r(196),h="_2t0tJbr9jvswY1AiEgQRXm",g="_1HV5KbHDaGmO4dELrYzQZc",O="_2dKaHvFw7PYuRW6ZO38Y59",w="_1E_6_rUOlxqn3gm7raiaUy",E="_35rSP0WQ8KRDzDu7SyEriL",j="_3yDfOcwIE4HSiMItIfUYf4",x="_3njBHAaYqf8Jz3AbjBnuu5",S=r(203);const k=["rank","progress","user","onRequestClose","showDevCard","className","style"];function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function R(e){var t;let r=e.rank,l=e.progress,u=e.user,z=e.onRequestClose,P=e.showDevCard,A=e.className,R=e.style,$=C(e,k);const D=_(Object(n.useState)(r-1),2),I=D[0],q=D[1],B=_(Object(n.useState)(l),2),Y=B[0],H=B[1],T=_(Object(n.useState)(!1),2),U=T[0],F=T[1],L=_(Object(n.useState)(!1),2),G=L[0],J=L[1],W=Object(n.useRef)(),Z=Object(n.useMemo)((()=>{if(u){const e=u.name.split(" ")[0];return 1===r?`Wow, ${e}!`:2===r?`You rock, ${e}!`:3===r?`That's epic, ${e}!`:4===r?`Fantastic, ${e}!`:`Legendary, ${e}!`}return"Good job!"}),[r,u]),K=()=>{var e;null==z||z(null===(e=W.current)||void 0===e?void 0:e.checked)};Object(n.useEffect)((()=>{const e=()=>{"hidden"===document.visibilityState?document.addEventListener("visibilitychange",(()=>setTimeout(e,1e3)),{once:!0}):(F(!0),q(r),H(s.b[r-1]))};setTimeout((()=>e()),1500)}),[]);return n.default.createElement(v.a,N({onRequestClose:K,className:o()(h,A),style:{content:M(M({},null==R?void 0:R.content),{},{"--rank-color":Object(s.c)(r)}),overlay:null==R?void 0:R.overlay}},$),n.default.createElement(b.a,{onClick:K}),n.default.createElement("div",{className:`${g} relative flex items-center justify-center mt-6`},u&&G?n.default.createElement(n.default.Fragment,null,n.default.createElement(d.a,{progress:s.b[r-1],steps:s.b[r-1],maxDegrees:270,className:w}),n.default.createElement("img",{className:`${j} absolute inset-0 object-cover m-auto rounded-full`,src:u.image,alt:"Your profile"}),n.default.createElement(p.a,{className:`${x} absolute inset-x-0 bottom-4 mx-auto rounded-full bg-theme-bg-tertiary`,rank:r,colorByRank:!0})):n.default.createElement(c.a,{rank:I,progress:Y,fillByDefault:!0,showRankAnimation:U,className:O,onRankAnimationFinish:()=>{setTimeout((()=>J(!0)),700)}}),n.default.createElement(a.a,{in:G,timeout:300,classNames:"confetti-transition",mountOnEnter:!0,unmountOnExit:!0},n.default.createElement(i,{className:`${E} absolute inset-x-0 top-0 h-full mx-auto`,style:{"--fill-color":r<s.a.length&&"var(--rank-color)"}}))),n.default.createElement("h1",{className:"mt-2 font-bold text-center typo-callout"},Z),n.default.createElement("p",{className:"mt-1 mb-8 text-center text-theme-label-secondary typo-callout"},"You earned the ",null===(t=s.a[r-1])||void 0===t?void 0:t.toLowerCase()," rank",!u&&n.default.createElement(n.default.Fragment,null,n.default.createElement("br",null),n.default.createElement("br",null),"Add your new rank to your profile by signing up")),u?n.default.createElement("div",{className:"flex gap-4 self-center"},P&&n.default.createElement(S.a,{origin:"new rank popup"},"Generate Dev Card"),n.default.createElement(y.a,{className:"btn-primary",onClick:K},"Awesome!")):n.default.createElement(m.a,null),n.default.createElement(f.a,{ref:W,name:"neverShow",className:"self-center mt-4 mb-7"},"Never show this popup again"))}}}]);