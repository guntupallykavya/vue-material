/*!
 * vue-material v1.0.0-beta-11
 * Made with <3 by marcosmoura 2020
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=659)})({0:function(e,t){e.exports=function(e,t,r,n,o,u){var i,a,s,c,l,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(i=e,f=e.default),a="function"==typeof f?f.options:f,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),r&&(a.functional=!0),o&&(a._scopeId=o),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=s):n&&(s=n),s&&(c=a.functional,l=c?a.render:a.beforeCreate,c?(a._injectStyles=s,a.render=function(e,t){return s.call(t),l(e,t)}):a.beforeCreate=l?[].concat(l,s):[s]),{esModule:i,exports:f,options:a}}},2:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,r=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,a.default)(t,e)},o=r(5),u=n(o),i=r(7),a=n(i)},290:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),t.default=new o.default({name:"MdDivider",computed:{insideList:function(){return"md-list"===this.$parent.$options._componentTag}}})},3:function(t,r){t.exports=e},4:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r(8),o=r(6),u=n(o),i=r(5),a=n(i),s=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"yyyy-MM-dd",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},494:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),o=r(4),u=n(o),i=r(495),a=n(i),t.default=function(e){(0,u.default)(e),e.component(a.default.name,a.default)}},495:function(e,t,r){"use strict";function n(e){r(496)}var o,u,i,a,s,c,l,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=r(290),u=r.n(o);for(i in o)"default"!==i&&(function(e){r.d(t,e,(function(){return o[e]}))})(i);a=r(497),s=r(0),c=!1,l=n,f=null,d=null,m=s(u.a,a.a,c,l,f,d),t.default=m.exports},496:function(e,t){},497:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.insideList?r("li",{staticClass:"md-divider",class:[e.$mdActiveTheme]}):r("hr",{staticClass:"md-divider",class:[e.$mdActiveTheme]})},o=[],u={render:n,staticRenderFns:o};t.a=u},5:function(e,t,r){"use strict";var n,o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),n=r(3),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),u=null,i=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var o=n.mdTheme,u=n.$parent;return o&&o!==t?o:e(u)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){i&&i.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),i=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},6:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(3),o=(function(e){return e&&e.__esModule?e:{default:e}})(n)},659:function(e,t,r){e.exports=r(494)},7:function(e,t,r){!(function(t,r){e.exports=r()})(0,(function(){"use strict";function e(e){return!!e&&"object"==typeof e}function t(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||r(e)}function r(e){return e.$$typeof===m}function n(e){return Array.isArray(e)?[]:{}}function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(n(e),e,t):e}function u(e,t,r){return e.concat(t).map((function(e){return o(e,r)}))}function i(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l}function a(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}function s(e){return Object.keys(e).concat(a(e))}function c(e,t,r){var n={};return r.isMergeableObject(e)&&s(e).forEach((function(t){n[t]=o(e[t],r)})),s(t).forEach((function(u){r.isMergeableObject(t[u])&&e[u]?n[u]=i(u,r)(e[u],t[u],r):n[u]=o(t[u],r)})),n}function l(e,t,r){var n,i,a;return r=r||{},r.arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||f,n=Array.isArray(t),i=Array.isArray(e),a=n===i,a?n?r.arrayMerge(e,t,r):c(e,t,r):o(t,r)}var f=function(r){return e(r)&&!t(r)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103;return l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return l(e,r,t)}),{})},l}))},8:function(e,t){}})}));