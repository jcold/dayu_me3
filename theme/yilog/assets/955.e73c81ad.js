(self.webpackChunkyilog=self.webpackChunkyilog||[]).push([[955],{8955:(t,e,r)=>{var i,n,o=r(9556).default;r(9947),r(5455),r(852),i=[r,e,r(5285),r(135),r(5766),r(7800)],n=function(t,e,r,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0,i=r.__importDefault(i),e.init=function(){return r.__awaiter(this,void 0,void 0,o().mark((function t(){var e,r,u,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.buildNavTree)(".nav-tree",-1);case 2:return e=t.sent,t.next=5,(0,n.setupToc)(".js-toc-content","#js-toc");case 5:r=t.sent,u=function(t){var o,u,l,s=t.querySelector("title");globalThis.document.title=(null===(o=null==s?void 0:s.textContent)||void 0===o?void 0:o.trim())||"",(0,i.default)("#article-body").html((null===(u=t.querySelector("#article-body"))||void 0===u?void 0:u.innerHTML)||""),globalThis.window.scroll(0,0),r(),e(),(0,n.lazyImg)(),null===(l=null===window||void 0===window?void 0:window.Prism)||void 0===l||l.highlightAll()},(l=globalThis.window.daoboxAjaxPathSeg||"")&&(0,n.setupLinkAjax)(l,u);case 9:case"end":return t.stop()}}),t)})))}}.apply(e,i),void 0===n||(t.exports=n)},7800:(t,e,r)=>{"use strict";r.r(e)},7984:(t,e,r)=>{"use strict";var i=r(876).PROPER,n=r(2005),o=r(4602);t.exports=function(t){return n((function(){return!!o[t]()||"\u200b\x85\u180e"!=="\u200b\x85\u180e"[t]()||i&&o[t].name!==t}))}},7276:(t,e,r)=>{"use strict";var i=r(6054),n=r(3684),o=r(7441),u=r(4602),l=i("".replace),s=RegExp("^["+u+"]+"),a=RegExp("(^|[^"+u+"])["+u+"]+$"),c=function(t){return function(e){var r=o(n(e));return 1&t&&(r=l(r,s,"")),2&t&&(r=l(r,a,"$1")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},4602:t=>{"use strict";t.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},852:(t,e,r)=>{"use strict";var i=r(7888),n=r(7276).trim;i({target:"String",proto:!0,forced:r(7984)("trim")},{trim:function(){return n(this)}})}}]);