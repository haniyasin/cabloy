(()=>{var e={792:(e,t,n)=>{"use strict";function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,c,"next",e)}function c(e){a(i,r,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:()=>s});const s={ebAuthProviders:{meta:{global:!1},methods:{onAction:function(e){var t=this;return i(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.ctx,o=e.action,a=e.item,"loadAuthProviders"!==o.name){n.next=5;break}return n.next=4,t.loadAuthProviders(r,a);case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},loadAuthProviders:function(e,t){var n=this;return i(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.state,r.next=3,n.$api.post("/a/login/auth/list");case 3:if(0!==(a=r.sent).length){r.next=6;break}return r.abrupt("return",a);case 6:return r.next=8,n.__checkAuthProviders({ctx:e,providers:a,state:o});case 8:return a=r.sent,r.abrupt("return",a.filter((function(e){return!!e})));case 10:case"end":return r.stop()}}),r)})))()},_getMetaScene:function(e,t){var n=e.meta;if(n.scene){var r=e.metaScenes&&e.metaScenes[t];return r&&r.meta||n}return n},__checkAuthProviders:function(e){var t=this;return i(regeneratorRuntime.mark((function n(){var o,a,i,s,c,u,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=e.ctx,a=e.providers,i=e.state,s=[],c=r(a);try{for(c.s();!(u=c.n()).done;)(l=u.value)&&s.push(t.__checkAuthProvider({ctx:o,provider:l,state:i}))}catch(e){c.e(e)}finally{c.f()}return n.next=6,Promise.all(s);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()},__checkAuthProvider:function(e){var t=this;return i(regeneratorRuntime.mark((function n(){var r,o,a,i,s,c,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.ctx,o=e.provider,a=e.state,o.renderComponents={},i=0,s=Object.keys(o.scenes);case 3:if(!(i<s.length)){n.next=12;break}return c=s[i],n.next=7,t.__checkAuthProviderComponent({ctx:r,provider:o,state:a,sceneName:c});case 7:(u=n.sent)?o.renderComponents[c]=u:delete o.scenes[c];case 9:i++,n.next=3;break;case 12:if(0!==Object.keys(o.renderComponents).length){n.next=14;break}return n.abrupt("return",null);case 14:return n.abrupt("return",o);case 15:case"end":return n.stop()}}),n)})))()},__checkAuthProviderComponent:function(e){var t=this;return i(regeneratorRuntime.mark((function n(){var r,o,a,i,s,c,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.ctx,o=e.provider,a=e.state,i=e.sceneName,(s=t._getMetaScene(o,i)).render){n.next=4;break}return n.abrupt("return",null);case 4:if(!t.$meta.config.base.jwt||"redirect"!==s.mode){n.next=6;break}return n.abrupt("return",null);case 6:return n.next=8,t.$meta.module.use(s.render.module);case 8:if(c=n.sent,"migrate"!==a||s.inline){n.next=11;break}return n.abrupt("return",null);case 11:if("associate"!==a||!s.disableAssociate){n.next=13;break}return n.abrupt("return",null);case 13:return u=c.options.components[s.render.name],n.next=16,t.__checkAuthProviderDisable({ctx:r,component:u,provider:o,state:a,sceneName:i});case 16:if(!n.sent){n.next=19;break}return n.abrupt("return",null);case 19:return n.abrupt("return",u);case 20:case"end":return n.stop()}}),n)})))()},__checkAuthProviderDisable:function(e){return i(regeneratorRuntime.mark((function t(){var n,r,o,a,i,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.ctx,r=e.component,o=e.provider,a=e.state,i=e.sceneName,s={propsData:{ctxCaller:n,state:a,provider:o,providerModule:o.module,providerName:o.providerName,providerScene:o.meta.scene?i:null}},c=n.$meta.util.createComponentInstance(r,s),t.next=5,c.disable();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()}}}}},788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={}},933:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={SignInTheTargetAccount:"Sign In The Target Account",LookAround:"Look Around"}},978:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={OR:"或",SignInTheTargetAccount:"登录目标账户",LookAround:"随便看看","Sign In":"登录"}},137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={"en-us":n(933).Z,"zh-cn":n(978).Z}},644:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=[{path:"login",component:("login",n(990)("./".concat("login",".jsx")).default)},{path:"migrate",component:n(142)("./".concat("migrate",".vue")).default,meta:{auth:!0}}]},440:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});const r=window.Vue;var o=n.n(r);function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}const c={meta:{title:"Sign In",size:"small",sizeFixed:!0},data:function(){return{state:this.$f7route.query.state||"login",providers:null,showClose:!1,tabPrefix:o().prototype.$meta.util.nextId("tab")}},computed:{title:function(){return this.$store.getters["auth/title"]}},mounted:function(){this.showClose=this.$meta.vueLayout.backLink(this)},created:function(){this.loadAuthProviders()},render:function(){var e=arguments[0];return e("eb-page",{attrs:{"login-screen":!0,"no-toolbar":!1,"no-navbar":!0,"no-swipeback":!0}},[this._renderContainer()])},methods:{onClose:function(){this.$f7router.back()},_getMetaScene:function(e,t){var n=e.meta;if(n.scene){var r=e.metaScenes&&e.metaScenes[t];return r&&r.meta||n}return n},loadAuthProviders:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={actionModule:"a-login",actionComponent:"ebAuthProviders",name:"loadAuthProviders"},e.next=3,t.$meta.util.performAction({ctx:t,action:n,item:{state:t.state}});case 3:t.providers=e.sent;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))})()},_getRenderComponents:function(e){var t,n=e.inline,r=[],o=a(this.providers);try{for(o.s();!(t=o.n()).done;){var i=t.value;for(var s in i.renderComponents){var c=i.renderComponents[s],u=this._getMetaScene(i,s),l={provider:i,providerScene:s,renderComponent:c};Boolean(n)===Boolean(u.inline)&&r.push(l)}}}catch(e){o.e(e)}finally{o.f()}return r},_getComponentFullName:function(e,t){var n=this._getMetaScene(e,t),r="".concat(n.render.module,":").concat(n.render.name);return e.meta.scene&&(r="".concat(r,":").concat(t)),r},_getComponentProps:function(e,t){return{state:this.state,provider:e,providerModule:e.module,providerName:e.providerName,providerScene:e.meta.scene?t:null}},_renderLoginTop_single:function(e){var t=this.$createElement,n=e.provider,r=e.providerScene,o=this._getMetaScene(n,r),a={props:this._getComponentProps(n,r)};return t("eb-component",{attrs:{module:o.render.module,name:o.render.name,options:a}})},_renderLoginTop_multiple:function(e){var t=this.$createElement,n=[],r=[];for(var o in e){var a=e[o],i=a.provider,s=a.providerScene,c=this._getMetaScene(i,s),u=this._getComponentFullName(i,s),l="".concat(this.tabPrefix,"_").concat(u).replace(/[:-]/g,"_");n.push(t("f7-link",{key:u,attrs:{"tab-link":"#".concat(l),"tab-link-active":0===parseInt(o)}},[i.meta.titleLocale]));var p={props:this._getComponentProps(i,s)};r.push(t("f7-tab",{key:u,attrs:{id:l,"tab-active":0===parseInt(o)}},[t("eb-component",{attrs:{module:c.render.module,name:c.render.name,options:p}})]))}return t("div",[t("f7-toolbar",{attrs:{top:!0,tabbar:!0}},[n]),t("f7-tabs",[r])])},_renderLoginTop:function(){if(!this.providers)return null;var e=this._getRenderComponents({inline:!0});return 0===e.length?null:1===e.length?this._renderLoginTop_single(e[0]):this._renderLoginTop_multiple(e)},_renderLoginBottom:function(){var e=this.$createElement;if("migrate"===this.state)return null;if(!this.providers)return null;var t=this._getRenderComponents({inline:!1});if(0===t.length)return null;var n,r=[],o=a(t);try{for(o.s();!(n=o.n()).done;){var i=n.value,s=i.provider,c=i.providerScene,u=this._getMetaScene(s,c),l=this._getComponentFullName(s,c),p={attrs:{class:"btn"},props:this._getComponentProps(s,c)};r.push(e("eb-component",{key:l,attrs:{module:u.render.module,name:u.render.name,options:p}}))}}catch(e){o.e(e)}finally{o.f()}return e("div",{class:"btns"},[r])},_renderContainer:function(){var e,t=this.$createElement;if(!this.providers)return null;this.showClose&&(e=t("f7-link",{class:"close",attrs:{iconF7:":login:chevron-left"},on:{click:this.onClose}},["login"===this.state?this.$text("LookAround"):""]));var n,r=t("f7-login-screen-title",[this.title]);"migrate"===this.state&&(n=t("f7-login-screen-title",{class:"sub-title"},[this.$text("SignInTheTargetAccount")]));var o,a,i=this._renderLoginTop(),s=this._renderLoginBottom();return i&&s&&(o=t("div",{class:"line"},[t("div",{class:"text"},[this.$text("OR")])])),(o||s)&&(a=t("f7-block",[o,s])),t("div",{class:"eb-login-container"},[e,r,n,i,a])}}}},450:(e,t,n)=>{var r=n(233),o=n(361)(r);o.push([e.id,":root .login-screen-content,\n:root .login-screen-page,\n:root .login-screen .page {\n  background: var(--f7-page-bg-color);\n}\n:root .page.login-screen-page .login-screen-content {\n  margin-top: unset;\n  margin-bottom: unset;\n}\n:root .login-screen-page .close {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n}\n:root .login-screen-page .login-screen-title.sub-title {\n  font-size: 20px;\n}\n:root .login-screen-page .line {\n  height: 1px;\n  margin: 30px 0;\n  text-align: center;\n  border-top: 1px solid var(--f7-text-editor-border-color);\n}\n:root .login-screen-page .line .text {\n  position: relative;\n  top: -10px;\n  background: var(--f7-page-bg-color);\n  display: inline-block;\n  padding: 0 8px;\n}\n:root .login-screen-page .btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n:root .login-screen-page .btns .btn {\n  width: 36px;\n  height: 36px;\n  margin: 8px;\n  cursor: pointer;\n  padding: 0;\n}\n:root .login-screen-page .btns .btn img {\n  width: 100%;\n  height: 100%;\n}\n","",{version:3,sources:["webpack://./front/src/assets/css/module.less"],names:[],mappings:"AAAA;;;EAII,mCAAA;AAAJ;AAJA;EAQI,iBAAA;EACA,oBAAA;AADJ;AARA;EAcM,kBAAA;EACA,SAAA;EACA,UAAA;AAHN;AAbA;EAoBM,eAAA;AAJN;AAhBA;EAwBM,WAAA;EACA,cAAA;EACA,kBAAA;EACA,wDAAA;AALN;AAtBA;EA8BQ,kBAAA;EACA,UAAA;EACA,mCAAA;EACA,qBAAA;EACA,cAAA;AALR;AA7BA;EAuCM,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,mBAAA;AAPN;AApCA;EA8CQ,WAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;AAPR;AA3CA;EAqDU,WAAA;EACA,YAAA;AAPV",sourcesContent:[":root {\n  .login-screen-content,\n  .login-screen-page,\n  .login-screen .page {\n    background: var(--f7-page-bg-color);\n  }\n\n  .page.login-screen-page .login-screen-content {\n    margin-top: unset;\n    margin-bottom: unset;\n  }\n\n  .login-screen-page {\n    .close {\n      position: absolute;\n      top: 16px;\n      left: 16px;\n    }\n\n    .login-screen-title.sub-title {\n      font-size: 20px;\n    }\n\n    .line {\n      height: 1px;\n      margin: 30px 0;\n      text-align: center;\n      border-top: 1px solid var(--f7-text-editor-border-color);\n\n      .text {\n        position: relative;\n        top: -10px;\n        background: var(--f7-page-bg-color);\n        display: inline-block;\n        padding: 0 8px;\n      }\n    }\n\n    .btns {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      flex-wrap: wrap;\n      margin-bottom: 30px;\n\n      .btn {\n        width: 36px;\n        height: 36px;\n        margin: 8px;\n        cursor: pointer;\n        padding: 0;\n\n        img {\n          width: 100%;\n          height: 100%;\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),e.exports=o},361:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},233:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},694:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e,t,n,r,o,a,i,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=[],u._compiled=!0),u._scopeId="data-v-b932aade",c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:u}}({methods:{onPageAfterIn:function(){this.$meta.vueLayout.openLogin({query:{state:"migrate"}},{ctx:this,target:"_self",reloadCurrent:!0})}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("f7-page",{staticClass:"eb-page-empty",on:{"page:afterin":e.onPageAfterIn}})})).exports},65:(e,t,n)=>{var r=n(450);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(159).Z)("15fd7eab",r,!0,{})},159:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.d(t,{Z:()=>A});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},p=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function A(e,t,n,o){u=n,p=o||{};var i=r(e,t);return m(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o];(c=a[s.id]).refs--,n.push(c)}for(t?m(i=r(e,t)):i=[],o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(g(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(f){var o=c++;r=s||(s=v()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=v(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var h,b=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function x(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(d,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},990:(e,t,n)=>{var r={"./login.jsx":440};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=990},142:(e,t,n)=>{var r={"./migrate.vue":694};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=142}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";var e;n.r(r),n.d(r,{default:()=>t}),n(65);const t={install:function(t,r){return e?console.error("already installed."):(e=t,r({routes:n(644).Z,config:n(788).Z,locales:n(137).Z,components:n(792).Z}))}}})(),window["a-login"]=r})();
//# sourceMappingURL=front.js.map