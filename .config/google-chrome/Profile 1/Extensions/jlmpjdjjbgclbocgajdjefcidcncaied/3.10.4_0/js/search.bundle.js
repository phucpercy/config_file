(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(1),o=n.n(r),u=n(0),l=n(16),a=n.n(l),i=n(9),c=n(2),s=n.n(c),f=n(96);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,u=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=n(8);const p=c.gql`
  query SearchPostSuggestions($query: String!) {
    searchPostSuggestions(query: $query) {
      hits {
        title
      }
    }
  }
`;var m=n(46);function v(e,t,n,r,o,u,l){try{var a=e[u](l),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(r,o)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,u=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const w=a()((()=>Promise.all([n.e(21),n.e(20)]).then(n.bind(null,220))),{ssr:!1});function S(e){let t=e.initialQuery,n=e.onSubmitQuery,r=e.closeSearch,l=e.suggestionType,a=void 0===l?"searchPostSuggestions":l;const c=Object(u.useRef)(),y=g(Object(u.useState)(),2),b=y[0],S=y[1],j=g(Object(u.useState)(),2),O=j[0],I=j[1],A=Object(u.useRef)(),x=g(Object(u.useState)(null),2),C=x[0],k=x[1],E=g(Object(u.useState)([]),2),q=E[0],P=E[1],T="searchPostSuggestions"===a?p:m.e,$=Object(i.useQuery)([a,O],(()=>s()(`${h.a}/graphql`,T,{query:O})),{enabled:!!O}),D=$.data,K=$.isLoading;Object(u.useEffect)((()=>{b||S(t)}),[t]);const Q=()=>k(null),R=()=>{if(C)return;const e=c.current.getBoundingClientRect(),t=e.left,n=e.bottom,r=e.width;k({x:t,y:n+window.scrollY,width:r})};Object(u.useEffect)((()=>{var e,t,n;K||(null!=q&&q.length||null==D||null===(e=D[a])||void 0===e||!e.hits.length||R(),P(null!==(t=null==D||null===(n=D[a])||void 0===n?void 0:n.hits.map((e=>e.title)))&&void 0!==t?t:[]))}),[D,K]);const B=function(){var e,t=(e=o.a.mark((function e(t){var r,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=null==t||null===(r=t.replace)||void 0===r?void 0:r.call(t,/<(\/?)strong>/g,""),e.next=3,n(u||O);case 3:u&&S(u),Q();case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function l(e){v(u,r,o,l,a,"next",e)}function a(e){v(u,r,o,l,a,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}(),F=function(e,t){const n=d(Object(u.useState)(-1),2),r=n[0],o=n[1];return Object(u.useEffect)((()=>{o(-1)}),[e]),{selectedItemIndex:r,onKeyDown:n=>{if(40===n.keyCode||38===n.keyCode){n.preventDefault();const t=e.length+1;if(r>-1){const e=40===n.keyCode?1:-1;o(((r+e)%t+t)%t)}else o(40===n.keyCode?0:t-1)}else 13===n.keyCode&&t(r>-1&&e[r])}}}(q,B),J=F.selectedItemIndex,M=F.onKeyDown;Object(u.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.querySelector("input").focus()}),[c]);const U=!!C&&!!q.length;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.a,{className:"absolute top-0 right-0 left-0 w-full compact",inputId:"posts-search",compact:!0,ref:c,value:b,valueChanged:e=>{if(!e.length)return Q(),void I("");e&&e!==t&&(A.current&&clearTimeout(A.current),A.current=window.setTimeout((()=>I(e)),100))},onKeyDown:M,onBlur:()=>{null!=O&&O.length?Q():r()},onFocus:()=>(null==q?void 0:q.length)&&R(),"aria-haspopup":"true","aria-expanded":U}),u.default.createElement(w,{placement:C,items:q,focusedItemIndex:J,onItemClick:B,isOpen:U}))}}}]);