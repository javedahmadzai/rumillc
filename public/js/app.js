webpackJsonp([1],[,function(e,t){e.exports=function(e,t,n,r,a,o){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var u,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:s,options:l}}},,function(e,t,n){e.exports=n(59)},,,,,,,,,,,,,,,,,,,function(e,t,n){n(23),e.exports=n(96)},function(e,t,n){"use strict";n(24);var r=f(n(43)),a=f(n(48)),o=f(n(52)),i=f(n(56)),s=f(n(62)),c=f(n(82)),u=f(n(86)),l=f(n(20));function f(e){return e&&e.__esModule?e:{default:e}}window.Vue=n(21),Vue.component("slider-component",r.default),Vue.component("testimonials-component",a.default),Vue.component("gmap-component",o.default),Vue.component("contact-component",i.default),Vue.component("gallery-component",s.default),Vue.component("subscribe-component",c.default),Vue.component("categories-component",u.default),Vue.use(l.default),new Vue({strict:!0,el:"#app"}),document.getElementById("toggle").addEventListener("click",function(){this.classList.toggle("toggle--change"),document.getElementById("navbar").classList.toggle("navbar--toggle")});var d=document.getElementById("accordion");d&&d.addEventListener("click",function(e){var t=e.target;t!==e.currentTarget&&t.classList.contains("head")&&(t.classList.toggle("head--active"),t.nextElementSibling.classList.toggle("body--active")),e.stopPropagation()},!1);var p=document.getElementById("swaper");p&&(p=p.children,setInterval(function(){for(var e=null,t=0;t<p.length;t++)null===e&&(e=p[t].firstChild.src),t<p.length-1&&(p[t].firstChild.src=p[t+1].firstChild.src),t==p.length-1&&(p[t].firstChild.src=e);e=null},3e3))},function(e,t,n){"use strict";window.Popper=n(7).default,window.axios=n(8),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=r.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")},,,,,,,,,,,,,,,,,,,function(e,t,n){var r=n(1)(n(46),n(47),!1,function(e){n(44)},"data-v-0fd64004",null);e.exports=r.exports},function(e,t){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{current:0,size:null,loaded:!1,loading:!0,timer:null,slides:[]}},mounted:function(){var e=this;axios.get("/api/images?type=s").then(function(t){e.slides=t.data,e.size=e.slides.length-1,e.startRotation(),e.loaded=!0}).catch(function(e){console.log(e)})},methods:{change:function(e){this.current=e,this.loading=!0},move:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.current+e;t<0?t=this.size:t>this.size&&(t=0),this.current=t,this.loading=!0},startRotation:function(){this.timer=setInterval(this.move,5e3)},stopRotation:function(){clearTimeout(this.timer),this.timer=null}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider"},[n("div",{staticClass:"prev",on:{click:function(t){e.move(-1)}}},[n("svg",{staticClass:"arrow"},[n("path",{attrs:{d:"M 40 50 L 30 60 L 0 30 L 30 0 L 40 10 L 20 30 L 50 60"}})])]),e._v(" "),n("div",{staticClass:"next",on:{click:function(t){e.move(1)}}},[n("svg",{staticClass:"arrow"},[n("path",{attrs:{d:"M 0 10 L 10 0 L 40 30 L 10 60 L 0 50 L 20 30 L 0 10"}})])]),e._v(" "),n("div",{staticClass:"views"},e._l(e.slides,function(t,r){return n("img",{key:r,class:{active:r==e.current},attrs:{src:t.url},on:{click:function(t){e.change(r)}}})})),e._v(" "),n("div",{staticClass:"slide",on:{mouseover:e.stopRotation,mouseout:e.startRotation}},[n("transition",{attrs:{name:"slide"}},[e.loaded?n("img",{attrs:{src:e.slides[e.current].url,alt:e.slides[e.current].title},on:{load:function(t){e.loading=!e.loading}}}):e._e()])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"})])},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(50),n(51),!1,function(e){n(49)},"data-v-4fae83e0",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{current:1,prev:0,next:2,size:null,loaded:!1,testimonials:[]}},mounted:function(){var e=this;axios.get("/api/testimonials").then(function(t){e.testimonials=t.data,e.size=e.testimonials.length-1,e.loaded=!0}).catch(function(e){console.log(e)})},methods:{move:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.prev=this.check(this.prev+e),this.current=this.check(this.current+e),this.next=this.check(this.next+e)},check:function(e){return e<0?e=this.size:e>this.size&&(e=0),e}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loaded?n("div",{staticClass:"testimonials"},[n("img",{staticClass:"next",attrs:{src:e.testimonials[e.prev].image},on:{click:function(t){e.move(-1)}}}),e._v(" "),n("div",{staticClass:"testimonial"},[n("img",{attrs:{src:e.testimonials[e.current].image,alt:e.testimonials[e.current].name+"'s Message"}}),e._v(" "),n("p",[n("i",{staticClass:"fa fa-quote-left"}),e._v("\n            "+e._s(e.testimonials[e.current].message)+"\n            "),n("i",{staticClass:"fa fa-quote-right"})]),e._v(" "),n("h3",[e._v("- "+e._s(e.testimonials[e.current].name)+" -")])]),e._v(" "),n("img",{staticClass:"prev",attrs:{src:e.testimonials[e.next].image},on:{click:function(t){e.move(1)}}})]):e._e()},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(54),n(55),!1,function(e){n(53)},"data-v-e6e1003c",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(15),o=(r=a)&&r.__esModule?r:{default:r};t.default={data:function(){return{KEY:"AIzaSyCyHWm6orZclDIdEbPHVroYgdTEMkKpzc4",zoom:15,coords:{lat:34.544838,lng:69.152089},content:"Rumi Trading LLC"}},mounted:function(){var e=this;o.default.KEY=this.KEY,o.default.load(function(){var t=new google.maps.Map(document.getElementById("google-map"),{zoom:e.zoom,center:e.coords}),n=new google.maps.Marker({position:e.coords,map:t});new google.maps.InfoWindow({content:e.content}).open(t,n)})}}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"google-map",attrs:{id:"google-map"}})},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(58),n(61),!1,function(e){n(57)},"data-v-4e663c40",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(3),o=(r=a)&&r.__esModule?r:{default:r};t.default={data:function(){return{nameRules:{required:!0,alpha:!0,min:3,max:30},emailRules:{required:!0,email:!0},subjectRules:{required:!0,min:5,max:200},messageRules:{required:!0,min:5,max:2e3},name:null,email:null,subject:null,message:null}},methods:{submit:function(){var e,t=this;return(e=o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,axios.post("/contact",{params:{name:t.name,email:t.email,subject:t.subject,message:t.message}});case 8:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:alert("Submitted");case 15:case"end":return e.stop()}},e,t,[[5,11]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})})()}}}},function(e,t,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(60),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{(l=t.regeneratorRuntime=u?e.exports:{}).wrap=x;var f="suspendedStart",d="suspendedYield",p="executing",v="completed",m={},h={};h[i]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(O([])));_&&_!==r&&a.call(_,i)&&(h=_);var y=E.prototype=b.prototype=Object.create(h);C.prototype=y.constructor=E,E.constructor=C,E[c]=C.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(y),e},l.awrap=function(e){return{__await:e}},L(k.prototype),k.prototype[s]=function(){return this},l.AsyncIterator=k,l.async=function(e,t,n,r){var a=new k(x(e,t,n,r));return l.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},L(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return s.type="throw",s.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function x(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(e,t,n){var r=f;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===a)throw o;return M()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=R(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=w(e,t,n);if("normal"===c.type){if(r=n.done?v:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function w(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function b(){}function C(){}function E(){}function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,i){var s=w(e[n],e,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(u).then(function(e){c.value=e,o(c)},i)}i(s.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function R(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,R(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=w(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function O(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("label",{attrs:{for:"name"}},[e._v("Your Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate",value:e.nameRules,expression:"nameRules"}],class:{error:e.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}]},[e._v(e._s(e.errors.first("name")))]),e._v(" "),n("label",{attrs:{for:"email"}},[e._v("Your Email")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:e.emailRules,expression:"emailRules"}],class:{error:e.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}]},[e._v(e._s(e.errors.first("email")))]),e._v(" "),n("label",{attrs:{for:"subject"}},[e._v("Subject")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"},{name:"validate",rawName:"v-validate",value:e.subjectRules,expression:"subjectRules"}],class:{error:e.errors.has("subject")},attrs:{type:"text",name:"subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("subject"),expression:"errors.has('subject')"}]},[e._v(e._s(e.errors.first("subject")))]),e._v(" "),n("label",{attrs:{for:"message"}},[e._v("Your Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"},{name:"validate",rawName:"v-validate",value:e.messageRules,expression:"messageRules"}],class:{error:e.errors.has("message")},attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("message"),expression:"errors.has('message')"}]},[e._v(e._s(e.errors.first("message")))]),e._v(" "),n("input",{attrs:{type:"submit",value:"Send"}})])},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(64),n(81),!1,function(e){n(63)},"data-v-478d7b5e",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(3)),a=s(n(16)),o=s(n(78)),i=s(n(19));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{index:null,options:{urlProperty:"url"},images:[],pagination:{},offset:9,loading:!0}},mounted:function(){this.loadImages()},methods:{loadImages:function(){var e,t=this;return(e=r.default.mark(function e(){var n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,axios.get("/api/images",{params:{type:"g",offset:t.offset,page:t.pagination.current_page}});case 4:n=e.sent,t.images=n.data.data,t.pagination=n.data.meta,t.loading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,t,[[1,10]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})})()},changeOffset:function(e){this.offset=e,console.log(e)}},components:{gallery:a.default,pagination:o.default,popper:i.default}}},,,,,,,,,,,,,,function(e,t,n){var r=n(1)(n(79),n(80),!1,null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pagination:{type:Object,required:!0},offset:{type:Number,default:9}},computed:{pages:function(){if(!this.pagination.to)return[];var e=this.pagination.current_page-this.offset;e<1&&(e=1);var t=e+2*this.offset;t>=this.pagination.last_page&&(t=this.pagination.last_page);for(var n=[];e<=t;)n.push(e++);return n}},methods:{changePage:function(e){e>this.pagination.last_page||e<1||(this.pagination.current_page=e,this.$emit("paginate"))}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"pagination is-centered is-rounded",attrs:{role:"navigation","aria-label":"pagination"}},[n("a",{staticClass:"pagination-previous",on:{click:function(t){t.preventDefault(),e.changePage(e.pagination.current_page-1)}}},[e._v("Previous")]),e._v(" "),n("a",{staticClass:"pagination-next",on:{click:function(t){t.preventDefault(),e.changePage(e.pagination.current_page+1)}}},[e._v("Next page")]),e._v(" "),n("ul",{staticClass:"pagination-list"},e._l(e.pages,function(t){return n("li",{key:t},[n("a",{staticClass:"pagination-link",class:{"is-current":t==e.pagination.current_page},on:{click:function(n){n.preventDefault(),e.changePage(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("popper",{attrs:{trigger:"hover",options:{placement:"top"}}},[n("div",{staticClass:"popper"},[e._v("\n        Slide left for slow networks\n    ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.offset,expression:"offset",modifiers:{number:!0}}],staticClass:"range",attrs:{slot:"reference",step:"3",min:"3",max:"9",type:"range"},domProps:{value:e.offset},on:{change:function(t){e.loadImages()},__r:function(t){e.offset=e._n(t.target.value)},blur:function(t){e.$forceUpdate()}},slot:"reference"})]),e._v(" "),n("pagination",{staticClass:"pagination",attrs:{pagination:e.pagination,offset:e.offset},on:{paginate:function(t){e.loadImages()}}}),e._v(" "),1==this.loading?n("div",{staticClass:"loading"}):e._e(),e._v(" "),n("div",{staticClass:"images"},[n("gallery",{attrs:{images:e.images,options:e.options,index:e.index},on:{close:function(t){e.index=null}}}),e._v(" "),e._l(e.images,function(t,r){return n("figure",{key:r},[n("img",{attrs:{src:t.url},on:{click:function(t){e.index=r}}})])})],2)],1)},staticRenderFns:[]}},function(e,t,n){var r=n(1)(n(84),n(85),!1,function(e){n(83)},"data-v-7b250004",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},function(e,t){e.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"subscribe"},[t("form",{attrs:{action:""}},[t("input",{staticClass:"subscribe__input",attrs:{type:"email",placeholder:"example@mail.com"}}),this._v(" "),t("input",{staticClass:"subscribe__submit",attrs:{type:"submit",value:"subscribe"}})])])}]}},function(e,t,n){var r=n(1)(n(88),n(93),!1,function(e){n(87)},"data-v-53e51f59",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(3)),a=o(n(89));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{categories:{}}},mounted:function(){var e,t=this;return(e=r.default.mark(function e(){var n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/categories");case 3:n=e.sent,t.categories=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})})()},components:{products:a.default}}},function(e,t,n){var r=n(1)(n(91),n(92),!1,function(e){n(90)},"data-v-a9ad5096",null);e.exports=r.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(3),o=(r=a)&&r.__esModule?r:{default:r};t.default={props:{category:{type:Number,required:!0}},data:function(){return{products:null,loaded:!1}},mounted:function(){this.loadProducts()},methods:{refreshProducts:function(){this.loadProducts()},loadProducts:function(){var e,t=this;return(e=o.default.mark(function e(){var n;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loaded=!1,e.next=4,axios.get("/api/products",{params:{category:t.category}});case 4:n=e.sent,t.products=n.data,t.loaded=!0,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,o){try{var i=t[a](o),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})})()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"products"},[n("button",{on:{click:function(t){e.refreshProducts()}}},[e._v("reload")]),e._v(" "),n("ul",[0==e.loaded?n("div",{staticClass:"loading"}):e._e(),e._v(" "),e._l(e.products,function(t,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],key:r},[n("figure",{staticClass:"framer"},[n("img",{attrs:{src:"storage/app/"+t.image}})]),e._v(" "),n("p",{staticClass:"prodname"},[e._v(e._s(t.name))]),e._v(" "),n("p",{staticClass:"catname"},[e._v(e._s(t.category.name))]),e._v(" "),n("p",{staticClass:"pricetag"},[e._v(e._s(t.price))])])})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.categories,function(t,r){return n("div",{key:r,staticClass:"category"},[n("h2",[e._v(e._s(t.name))]),e._v(" "),n("products",{attrs:{category:t.id}})],1)}))},staticRenderFns:[]}},,,function(e,t){}],[22]);
//# sourceMappingURL=app.js.map