(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],i=0,l=[];i<s.length;i++)a=s[i],Object.prototype.hasOwnProperty.call(_,a)&&_[a]&&l.push(_[a][0]),_[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==_[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},_={app:0},o=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+".css",_=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],i=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(i===r||i===_))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],i=c.getAttribute("data-href");if(i===r||i===_)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||_,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=_;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=_[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=_[e]=[t,n]}));t.push(r[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=_[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}_[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1f31":function(e,t,n){"use strict";n("ec342")},"3e9e":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_alexwang_git_health_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("2909"),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a434"),core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4de4"),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("e9c4"),core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__),_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("69d9"),storejs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("da7e"),storejs__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(storejs__WEBPACK_IMPORTED_MODULE_6__);__webpack_exports__["a"]={name:"Data",data:function(){return{token:"",names:["Davie","Jack","Mumu"],datas:[],showToken:0}},mounted:function mounted(){var self=this;Object(_common__WEBPACK_IMPORTED_MODULE_5__["a"])().then((function(resp){var _self$datas;self.datas.length=0,(_self$datas=self.datas).push.apply(_self$datas,Object(_Users_alexwang_git_health_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["a"])(eval(resp))),storejs__WEBPACK_IMPORTED_MODULE_6___default.a.set("health",{names:self.names,datas:self.datas})}))},methods:{uploadToken:function(){storejs__WEBPACK_IMPORTED_MODULE_6___default.a.set("token",this.token)},add:function(){var e=new Date;this.datas.unshift({date:e.getFullYear()+"-"+("0"+(e.getMonth()+1)).substr(-2),data:[]})},del:function(e){this.datas.splice(e,1)},save:function(){for(var e=this.datas.length>0,t=0;t<this.datas.length;t++)if(this.datas[t].data.filter((function(e){return e})).length!=this.names.length){e=0;break}if(e){var n=JSON.stringify(this.datas);console.log(n);var r=JSON.stringify({names:this.names,datas:this.datas}),a=JSON.stringify(storejs__WEBPACK_IMPORTED_MODULE_6___default.a.get("health"));if(console.log(r,a),r==a)return void alert("no change");var _=this;Object(_common__WEBPACK_IMPORTED_MODULE_5__["b"])(n).then((function(){alert("upload ok"),storejs__WEBPACK_IMPORTED_MODULE_6___default.a.set("health",r)})).catch((function(e){alert("upload error:"+e),_.showToken=1}))}else alert("还没填写完成")}},computed:{},components:{}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/data"}},[e._v("数据")]),e._v(" | "),n("router-link",{attrs:{to:"/chart"}},[e._v("图表")])],1),n("router-view")],1)},_=[],o=(n("034f"),n("2877")),s={},u=Object(o["a"])(s,a,_,!1,null,null,null),c=u.exports,i=n("313e"),l=n.n(i),d=n("8c4f"),p=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"data"},[e.showToken?n("div",[e._v(" Token:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],domProps:{value:e.token},on:{change:e.uploadToken,input:function(t){t.target.composing||(e.token=t.target.value)}}})]):e._e(),n("div",{staticClass:"tools"},[n("a",{on:{click:function(t){return e.add()}}},[e._v("添加+")]),n("a",{staticStyle:{float:"right"},on:{click:function(t){return e.save()}}},[e._v("保存")])]),n("table",{attrs:{border:"0"}},[n("tr",[n("th",[e._v("日期/身高")]),e._l(e.names,(function(t){return n("th",{key:t},[e._v(e._s(t))])})),n("th")],2),e._l(e.datas,(function(t,r){return n("tr",{key:r},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"row.date"}],domProps:{value:t.date},on:{input:function(n){n.target.composing||e.$set(t,"date",n.target.value)}}})]),e._l(e.names,(function(r,a){return n("td",{key:r+a},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.data[a],expression:"row.data[j]"}],domProps:{value:t.data[a]},on:{input:function(n){n.target.composing||e.$set(t.data,a,n.target.value)}}})])})),n("td",[n("a",{on:{click:function(n){return e.del(r,t)}}},[e._v("删除")])])],2)}))],2)])}),f=[],h=n("3e9e"),m=h["a"],v=(n("1f31"),Object(o["a"])(m,p,f,!1,null,"e8b37986",null)),b=v.exports;r["a"].use(d["a"]);var g=[{path:"/",name:"Home",redirect:"/chart"},{path:"/data",name:"Data",component:b},{path:"/chart",name:"Chart",component:function(){return n.e("about").then(n.bind(null,"5178"))}}],E=new d["a"]({mode:"history",base:"",routes:g}),O=E;r["a"].use(d["a"]),r["a"].prototype.$echarts=l.a,r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(e){return e(c)}}).$mount("#app")},"69d9":function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return v}));var r=n("1da1"),a=(n("96cf"),n("99af"),n("d3b7"),n("e9c4"),n("da7e")),_=n.n(a),o="SMLOG",s="data",u="health.json";function c(e){return window.btoa(unescape(encodeURIComponent(e)))}function i(e){return decodeURIComponent(escape(window.atob(e)))}function l(e,t,n,r){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var o,s,u,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=_.a.get("token"),s="token "+o,u="https://api.github.com/repos/".concat(t,"/").concat(n,"/contents/").concat(r),o){e.next=5;break}throw"token?";case 5:return e.next=7,fetch(u,{method:"get",headers:{accept:"application/vnd.github.v3+json"}}).then((function(e){return e.json()}));case 7:return i=e.sent,l=i.sha,e.next=11,fetch(u,{method:"put",body:JSON.stringify({message:"update"+new Date,branch:"main",content:c(a),sha:l}),headers:{accept:"application/vnd.github.v3+json",Authorization:s}}).then((function(e){return e.json()}));case 11:return i=e.sent,e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function p(e,t,n,r){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var o,s,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=_.a.get("token"),s="token "+o,u={accept:"application/vnd.github.v3+json"},o&&(u["Authorization"]=s),e.next=6,fetch("https://api.github.com/repos/".concat(t,"/").concat(n,"/contents/").concat(r)+(a?"?ref=".concat(a):""),{method:"get",headers:u,cache:"force-cache"}).then((function(e){return e.json()}));case 6:return c=e.sent,e.abrupt("return",i(c.content));case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",l(o,s,u,t));case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return b=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",p(o,s,u,t));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}},"85ec":function(e,t,n){},ec342:function(e,t,n){}});