(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(0),o=n(3),a=n.n(o),l=n(212),u=n.n(l),i=n(72);const s=e=>e.preventDefault();function r(e){let t=e.placement,n=e.focusedItemIndex,o=e.items,l=e.onItemClick,r=e.isOpen;const d=Object(c.useRef)(),m=Object(c.useMemo)((()=>o.map(((e,t)=>({__html:d.current.sanitize(e),index:t})))),[o]);return Object(c.useEffect)((()=>{d.current=u()(window)}),[]),Object(c.createPortal)(c.default.createElement("div",{role:"menu",className:"top-full mt-1 react-contexify menu-secondary",style:{position:"absolute",top:null==t?void 0:t.y,left:null==t?void 0:t.x,opacity:r?1:0,width:null==t?void 0:t.width,transform:"none"}},m.map(((e,t)=>c.default.createElement("div",{className:a()({focus:t===n},"react-contexify__item"),key:e.index,onClick:()=>l(o[t]),onMouseDown:s},c.default.createElement("div",{className:"react-contexify__item__content"},c.default.createElement(i.a,null),c.default.createElement("span",{dangerouslySetInnerHTML:e})))))),document.body)}}}]);