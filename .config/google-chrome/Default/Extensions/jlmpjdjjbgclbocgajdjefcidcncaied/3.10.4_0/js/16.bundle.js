(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{200:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return Array.from(e.elements).reduce(((e,t)=>""===t.name?e:"checkbox"===t.type?a(a({},e),{},{[t.name]:t.checked}):"radio"!==t.type||t.checked?a(a({},e),{},{[t.name]:t.value.length?t.value:null}):e),t)}r.d(t,"a",(function(){return o}))},228:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return $}));var n=r(1),a=r.n(n),l=r(0),o=r(9),c=r(3),u=r.n(c),s=r(2),i=r.n(s),f=r(12),d=r(122),m=r(66),b=r(51),p=r(96),y=r(95),g=r(28),h=r(200),v=r(8);const O=["signal"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function E(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.signal,a=S(r,O);const l=new AbortController,o=fetch(e,j({signal:l.signal},a));n&&n.addEventListener("abort",(()=>l.abort()));const c=setTimeout((()=>l.abort()),t);return o.finally((()=>clearTimeout(c)))}const P=s.gql`
  query SourceByFeed($feed: String!) {
    source: sourceByFeed(feed: $feed) {
      id
      name
      image
    }
  }
`,k=s.gql`
  mutation RequestSource($data: RequestSourceInput!) {
    requestSource(data: $data) {
      id
    }
  }
`;var N=r(27);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function q(e,t,r,n,a,l,o){try{var c=e[l](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){q(l,n,a,o,c,"next",e)}function c(e){q(l,n,a,o,c,"throw",e)}o(void 0)}))}}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e){const t=Object(l.useRef)(),r=D(Object(l.useState)(!1),2),n=r[0],c=r[1],s=D(Object(l.useState)(),2),O=s[0],w=s[1],j=D(Object(l.useState)(!1),2),x=j[0],S=j[1],q=D(Object(l.useState)(),2),R=q[0],$=q[1],I=D(Object(l.useState)(),2),F=I[0],T=I[1],L=D(Object(l.useState)(),2),M=L[0],U=L[1],B=()=>{S(!0),w("Failed to fetch information")},J=Object(o.useMutation)((e=>i()(`${v.a}/graphql`,P,{feed:e}))),W=J.mutateAsync,H=J.isLoading,V=Object(o.useMutation)(function(){var e=C(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(`${v.a}/scrape/source?url=${t}`,2e4,{credentials:"same-origin"});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onMutate:()=>{w(null),S(!1),$(null),T(null),U(null)},onSuccess:e=>{"website"===e.type?e.rss.length?$(e.rss.map((e=>({label:e.title,value:e.url})))):w("Could not find RSS feed"):B()},onError:B}),_=V.mutateAsync,z=V.isLoading,G=Object(o.useMutation)((e=>i()(`${v.a}/graphql`,k,{data:{sourceUrl:e}})),{onSuccess:()=>{var t;Object(N.k)({category:"Request Source",action:"Submit"}),null===(t=e.onRequestClose)||void 0===t||t.call(e,null)}}),K=G.mutateAsync,Q=G.isLoading,X=function(){var e=C(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=Object(h.a)(t.currentTarget),e.next=4,_(r.url);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=C(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=Object(h.a)(t.currentTarget),e.next=4,W(r.rss);case 4:if(!(n=e.sent).source){e.next=9;break}U(n.source),e.next=11;break;case 9:return e.next=11,K(r.rss);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();let Z;Z=M?l.default.createElement("div",{className:"flex items-center self-start px-12 mb-6 w-full typo-callout"},l.default.createElement("img",{src:M.image,alt:M.name,className:"w-8 h-8 rounded-lg"}),l.default.createElement("div",{className:"ml-3 truncate"},M.name),l.default.createElement("div",{className:"ml-auto text-theme-label-tertiary"},"Already exists")):(null==R?void 0:R.length)>0?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"self-start mx-10 mb-6 typo-callout text-theme-label-tertiary"},R.length," RSS feed",R.length>1?"s":""," found"),l.default.createElement("form",{className:"flex flex-col items-center w-full",onSubmit:Y},l.default.createElement(y.a,{name:"rss",options:R,onChange:T,value:F,className:"self-start mx-10"}),l.default.createElement("div",{className:"my-4 w-full h-px bg-theme-divider-secondary"}),l.default.createElement(f.a,{className:"mb-5 btn-primary",type:"submit",disabled:!F,loading:H||Q},"Send for review"))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"new-source-field-desc",className:u()("typo-callout text-theme-status-error mx-10 self-start",!x&&"mb-6",!O&&"invisible")},O||"placeholder"),x&&O&&l.default.createElement(f.a,{tag:"a",className:"self-start mx-10 mt-3 mb-6 btn-secondary small",href:"mailto:hi@daily.dev?subject=Failed to add new source",target:"_blank",rel:"noopener noreferrer"},"Contact"));const ee=e.onRequestClose;return l.default.createElement(b.a,A({},e,{style:{content:{paddingTop:"1.5rem",maxWidth:"27.5rem"}}}),l.default.createElement(m.a,{onClick:ee}),l.default.createElement("h2",{className:"text-2xl font-bold"},"Suggest new source"),l.default.createElement("p",{className:"pt-1.5 pb-2 text-center typo-callout text-theme-label-secondary",style:{maxWidth:"18.75rem"}},"Have an idea for a new source? Insert its link below to add it to the feed."),l.default.createElement("form",{className:"flex flex-col px-10 w-full",ref:t,onSubmit:X,"aria-busy":z},l.default.createElement(p.a,{className:"my-4",inputId:"new-source-field",name:"url",placeholder:"Paste blog / RSS URL",showIcon:!1,type:"url",autoFocus:!0,"aria-describedby":O&&"new-source-field-desc",valueChanged:()=>{t.current&&c(t.current.checkValidity())},rightChildren:l.default.createElement(f.a,{type:"submit",className:"btn-primary small","aria-label":"Search feeds",disabled:!n,icon:l.default.createElement(g.a,{style:{transform:"rotate(90deg)"}})})})),Z,z&&l.default.createElement(d.a,{className:"absolute inset-x-0 bottom-5 mx-auto"}))}}}]);