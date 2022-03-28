(()=>{var e={129:e=>{e.exports=e=>({})},521:(e,t,n)=>{function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw s}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,c,"next",e)}function c(e){o(s,r,a,i,c,"throw",e)}i(void 0)}))}}const i=n(638)("@zhennann/trim-html");e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname);class n extends e.meta.AtomBase{get moduleConfig(){return this.ctx.config.module(t.relativeName)}async create(e){var t=()=>super.create,n=this;return s(regeneratorRuntime.mark((function r(){var a,o,s,i,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.atomClass,o=e.item,s=e.options,i=e.user,r.next=3,t().call(n,{atomClass:a,item:o,options:s,user:i});case 3:return c=r.sent,r.next=6,n.ctx.model.note.insert({atomId:c.atomId});case 6:return u=r.sent,r.abrupt("return",{atomId:c.atomId,itemId:u.insertId});case 8:case"end":return r.stop()}}),r)})))()}async read(e){var t=()=>super.read,n=this;return s(regeneratorRuntime.mark((function r(){var a,o,s,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.atomClass,o=e.options,s=e.key,i=e.user,r.next=3,t().call(n,{atomClass:a,options:o,key:s,user:i});case 3:if(c=r.sent){r.next=6;break}return r.abrupt("return",null);case 6:return n._getMeta(c),r.abrupt("return",c);case 8:case"end":return r.stop()}}),r)})))()}async select(e){var t=()=>super.select,n=this;return s(regeneratorRuntime.mark((function a(){var o,s,i,c,u,m,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e.atomClass,s=e.options,i=e.items,c=e.user,a.next=3,t().call(n,{atomClass:o,options:s,items:i,user:c});case 3:u=r(i);try{for(u.s();!(m=u.n()).done;)l=m.value,n._getMeta(l)}catch(e){u.e(e)}finally{u.f()}case 5:case"end":return a.stop()}}),a)})))()}async write(e){var t=()=>super.write,n=this;return s(regeneratorRuntime.mark((function r(){var a,o,s,i,c,u,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.atomClass,o=e.target,s=e.key,i=e.item,c=e.options,u=e.user,r.next=3,t().call(n,{atomClass:a,target:o,key:s,item:i,options:c,user:u});case 3:return r.next=5,n.ctx.model.note.prepareData(i);case 5:return(m=r.sent).id=s.itemId,r.next=9,n._renderContent({item:i,atomId:s.atomId});case 9:return m.html=r.sent,m.summary=n._parseSummary({html:m.html}),r.next=13,n.ctx.model.note.update(m);case 13:case"end":return r.stop()}}),r)})))()}async delete(e){var t=()=>super.delete,n=this;return s(regeneratorRuntime.mark((function r(){var a,o,s,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.atomClass,o=e.key,s=e.options,i=e.user,r.next=3,t().call(n,{atomClass:a,key:o,options:s,user:i});case 3:return r.next=5,n.ctx.model.note.delete({id:o.itemId});case 5:case"end":return r.stop()}}),r)})))()}async _renderContent(e){var t=this;return s(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.item,a=e.atomId,n.next=3,t.ctx.bean.markdown.render({host:{atom:r,atomId:a},content:r.content,locale:t.ctx.locale});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}_parseSummary(e){let t=e.html,n="";return t&&(n=i(t,this.moduleConfig.note.trim).html.trim()),n}_getMeta(e){this._ensureItemMeta(e).summary=e.summary}}return n}},223:e=>{function t(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var s=e.apply(n,r);function i(e){t(s,a,o,i,c,"next",e)}function c(e){t(s,a,o,i,c,"throw",e)}i(void 0)}))}}e.exports=e=>{class t extends e.meta.BeanBase{async update(e){var t=this;return n(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1!==e.version){n.next=4;break}return n.next=4,t.ctx.model.query("\n          CREATE TABLE testNote (\n            id int(11) NOT NULL AUTO_INCREMENT,\n            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n            deleted int(11) DEFAULT '0',\n            iid int(11) DEFAULT '0',\n            atomId int(11) DEFAULT '0',\n            summary TEXT DEFAULT NULL,\n            content LONGTEXT DEFAULT NULL,\n            html LONGTEXT DEFAULT NULL,\n            PRIMARY KEY (id)\n          )\n        ");case 4:case"end":return n.stop()}}),n)})))()}async init(e){var t=this;return n(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1!==e.version){n.next=4;break}return r=[{roleName:"authenticated",action:"create"},{roleName:"authenticated",action:"read",scopeNames:0},{roleName:"authenticated",action:"write",scopeNames:0},{roleName:"authenticated",action:"delete",scopeNames:0},{roleName:"authenticated",action:"clone",scopeNames:0},{roleName:"authenticated",action:"deleteBulk"},{roleName:"authenticated",action:"exportBulk"},{roleName:"authenticated",action:"layoutBulk"},{roleName:"system",action:"read",scopeNames:"authenticated"},{roleName:"root",action:"layout",scopeNames:"root"}],n.next=4,t.ctx.bean.role.addRoleRightBatch({atomClassName:"note",roleRights:r});case 4:case"end":return n.stop()}}),n)})))()}async test(){return n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}return t}},313:(e,t,n)=>{const r=n(223),a=n(521);e.exports=e=>({"version.manager":{mode:"app",bean:r},"atom.note":{mode:"app",bean:a}})},731:(e,t,n)=>{const r=n(479),a=n(967),o=n(846),s=n(72);e.exports={"en-us":{"demo-1":r,"demo-2":a},"zh-cn":{"demo-1":o,"demo-2":s}}},479:e=>{e.exports={atomName:"CabloyJS",content:"## CabloyJS\n\n  A Node.js full-stack framework with workflow engine, based on koa + egg + vue + framework7 + mysql\n  \n  ### Features\n  \n  CableyJS provides a lot of features that shine in front of you. Here are only three examples:\n\n  1. Adaptive Layout: `pc = mobile + pad`\n  2. Automatic form rendering and data validation engine based on JSON Schema\n  3. Built-in NodeJS workflow engine\n  \n  ### Architectures\n  \n  CableyJS has developed many distinctive architecture designs. Here are only three examples:\n  \n  1. Business Modularization & Module Isolation\n  2. Frontend and Backend Separation & Multi Scenario Development\n  3. Cluster Framework\n"}},967:e=>{e.exports={atomName:"Today",content:'### Today\'s Music\n\n  $$$ a-markdownblock:audio\n  {\n    "audio": {\n      "name": "Roses and Gold",\n      "url": "https://admin2.zhennann.com/api/a/file/file/download/0d0990d0f68e495c98857252521032a4.mp3",\n      "artist": "Robin Jackson",\n      "cover": "https://admin2.zhennann.com/api/a/file/file/download/52e763b10a3a4b2e9567be64e10c5a18.jpg"\n    },\n    "autoplay": false,\n    "loop": true\n  }\n  $$$\n  \n  ### Today\'s Tasks \n  \n  1. [x]  Run for 30 minutes\n  2. [ ]  Keep one diary\n  3. [ ]  Read 20 pages\n'}},846:e=>{e.exports={atomName:"CabloyJS",content:"## CabloyJS\n\n  一款自带工作流引擎的Node.js全栈框架, `接单快手、创业神器`, 基于koa + egg + vue + framework7 + mysql\n  \n  ### 功能四大亮点\n  \n  CabloyJS提供了诸多`耳目一新`的功能，这里仅举四例：\n  \n  1. 自适应布局：`pc = mobile + pad`\n  2. 基于JSON Schema的表单自动渲染与数据验证引擎\n  3. 所见即所得的Markdown富文本编辑器及渲染引擎\n  4. 内置NodeJS工作流引擎\n  \n  ### 架构四大亮点\n  \n  CabloyJS研发了诸多`别具一格`的架构设计，这里仅举四例：\n  \n  1. 模块化开发体系与模块隔离\n  2. 原生分布式架构，支持集群部署\n  3. 原生`多实例/多域名/多租户`设计，支援SAAS系统开发\n  4. 前后端分离，全场景跨端开发，支持PC Web、PC Desktop、Mobile、IOS、Android、微信公众号、企业微信、钉钉、小程序，等等\n"}},72:e=>{e.exports={atomName:"今日",content:'### 今日金曲\n\n  $$$ a-markdownblock:audio\n  {\n    "audio": {\n      "name": "Roses and Gold",\n      "url": "https://admin2.zhennann.com/api/a/file/file/download/0d0990d0f68e495c98857252521032a4.mp3",\n      "artist": "Robin Jackson",\n      "cover": "https://admin2.zhennann.com/api/a/file/file/download/52e763b10a3a4b2e9567be64e10c5a18.jpg"\n    },\n    "autoplay": false,\n    "loop": true\n  }\n  $$$\n  \n  ### 今日任务 \n  \n  1. [x]  跑步30分钟\n  2. [ ]  日记1篇\n  3. [ ]  读书20页\n'}},817:e=>{e.exports=e=>({note:{trim:{limit:100,wordBreak:!1,preserveTags:!1}}})},971:e=>{e.exports={}},724:e=>{e.exports={}},995:e=>{e.exports={Note:"便签","Create Note":"新建便签","Note List":"便签列表","Note Test":"便签测试"}},266:(e,t,n)=>{e.exports={"en-us":n(724),"zh-cn":n(995)}},1:e=>{e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname);return[{atomName:"Create Note",atomStaticKey:"createNote",atomRevision:0,atomCategoryId:"a-base:menu.Create",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"note",atomAction:"create"}),resourceRoles:"authenticated"},{atomName:"Note List",atomStaticKey:"listNote",atomRevision:0,atomCategoryId:"a-base:menu.List",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"note",atomAction:"read"}),resourceRoles:"authenticated"},{atomName:"Note",atomStaticKey:"widgetNote",atomRevision:0,atomCategoryId:"a-dashboard:widget.Demonstration",resourceType:"a-dashboard:widget",resourceConfig:JSON.stringify({module:t.relativeName,component:"widgetNote"}),resourceRoles:"root"}]}},70:e=>{e.exports=e=>({note:{type:"object",properties:{atomName:{type:"string",ebType:"text",ebTitle:"Title",notEmpty:!0},content:{type:"string",ebType:"markdown-content",ebTitle:"Content"}}},noteSearch:{type:"object",properties:{content:{type:"string",ebType:"text",ebTitle:"Content"}}}})},326:(e,t,n)=>{const r=n(70);e.exports=e=>{const t={};return Object.assign(t,r(e)),t}},715:e=>{function t(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}e.exports=e=>{class n extends e.Controller{async createNote(){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ctx.service.demo.createNote({demoKey:n.ctx.request.body.demoKey,user:n.ctx.state.user.op});case 2:t=e.sent,n.ctx.success(t);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(a,o){var s=e.apply(n,r);function i(e){t(s,a,o,i,c,"next",e)}function c(e){t(s,a,o,i,c,"throw",e)}i(void 0)}))})()}}return n}},691:(e,t,n)=>{const r=n(715);e.exports=e=>({demo:r})},312:(e,t,n)=>{const r=n(817),a=n(266),o=n(971);e.exports=e=>{const t=n(129)(e),s=n(313)(e),i=n(788)(e),c=n(691)(e),u=n(481)(e),m=n(700)(e),l=n(730)(e);return{aops:t,beans:s,routes:i,controllers:c,services:u,models:m,config:r,locales:a,errors:o,meta:l}}},730:(e,t,n)=>{e.exports=e=>{const t=n(326)(e);return{base:{atoms:{note:{info:{bean:"note",title:"Note",tableName:"testNote",language:!1,category:!0,tag:!0,simple:!0,history:!1},actions:{},validator:"note",search:{validator:"noteSearch"}}},statics:{"a-base.resource":{items:n(1)(e)}}},validation:{validators:{note:{schemas:"note"},noteSearch:{schemas:"noteSearch"}},keywords:{},schemas:t},index:{indexes:{testNote:"createdAt,updatedAt,atomId"}}}}},732:e=>{e.exports=e=>{class t extends e.meta.Model{constructor(e){super(e,{table:"testNote",options:{disableDeleted:!1}})}}return t}},700:(e,t,n)=>{const r=n(732);e.exports=e=>({note:r})},788:e=>{e.exports=e=>[{method:"post",path:"demo/createNote",controller:"demo",meta:{auth:{user:!0}}}]},528:(e,t,n)=>{function r(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}const a=n(731);e.exports=e=>{const t={module:e.meta.mockUtil.parseInfoFromPackage(__dirname).relativeName,atomClassName:"note"};class n extends e.Service{async createNote(e){var n,o=this;return(n=regeneratorRuntime.mark((function n(){var r,s,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.demoKey,s=e.user,i=a[o.ctx.locale][r],n.next=4,o.ctx.bean.atom.create({atomClass:t,options:{preferredRole:!0},user:s});case 4:return c=n.sent,n.next=7,o.ctx.bean.atom.write({key:c,item:{atomName:i.atomName,content:i.content},user:s});case 7:return n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(a,o){var s=n.apply(e,t);function i(e){r(s,a,o,i,c,"next",e)}function c(e){r(s,a,o,i,c,"throw",e)}i(void 0)}))})()}}return n}},481:(e,t,n)=>{const r=n(528);e.exports=e=>({demo:r})},638:e=>{"use strict";e.exports=require("require3")}},t={},n=function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(312);module.exports=n})();