!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Pager=t(require("react")):e.Pager=t(e.react)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):y=-1,h.length&&s())}function s(){if(!v){var e=o(a);v=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,v=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],v=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||v||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),c=r(l),f=n(4),p=r(f),d={first:"First",prev:"«",prevSet:"...",nextSet:"...",next:"»",last:"Last"},h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFirstPage=n.handleFirstPage.bind(n),n.handlePreviousPage=n.handlePreviousPage.bind(n),n.handleNextPage=n.handleNextPage.bind(n),n.handleLastPage=n.handleLastPage.bind(n),n.handleMorePrevPages=n.handleMorePrevPages.bind(n),n.handleMoreNextPages=n.handleMoreNextPages.bind(n),n.handlePageChanged=n.handlePageChanged.bind(n),n.state={hovered:null},n}return a(t,e),u(t,[{key:"getTitles",value:function(e){return this.props.titles[e]||d[e]}},{key:"calcBlocks",value:function(){var e=this.props,t=e.total,n=e.visiblePages,r=e.current+1;return{total:Math.ceil(t/n),current:Math.ceil(r/n)-1,size:n}}},{key:"isPrevDisabled",value:function(){return this.props.current<=0}},{key:"isNextDisabled",value:function(){return this.props.current>=this.props.total-1}},{key:"isPrevMoreHidden",value:function(){var e=this.calcBlocks();return 1===e.total||0===e.current}},{key:"isNextMoreHidden",value:function(){var e=this.calcBlocks();return 1===e.total||e.current===e.total-1}},{key:"visibleRange",value:function(){var e=this.calcBlocks(),t=e.current*e.size,n=this.props.total-t;return[t+1,t+(n>e.size?e.size:n)+1]}},{key:"handleFirstPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(0)}},{key:"handlePreviousPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(this.props.current-1)}},{key:"handleNextPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.current+1)}},{key:"handleLastPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.total-1)}},{key:"handleMorePrevPages",value:function(){var e=this.calcBlocks();this.handlePageChanged(e.current*e.size-1)}},{key:"handleMoreNextPages",value:function(){var e=this.calcBlocks();this.handlePageChanged((e.current+1)*e.size)}},{key:"handlePageChanged",value:function(e){var t=this.props.onPageChanged;t&&t(e)}},{key:"renderPages",value:function(e){var t=this;return s(e[0],e[1]).map(function(e,n){var r=e-1,o=t.handlePageChanged.bind(t,r),i=t.props.current===r;return c.default.createElement(v,{key:n,index:n,isActive:i,className:"btn-numbered-page",style:i?t.props.activeStyle:t.state.hovered===e?t.props.hoverStyle:t.props.style,onMouseLeave:function(){t.setState({hovered:""})},onMouseOver:function(){t.setState({hovered:e})},onClick:o},e)})}},{key:"render",value:function(){var e=this,t=this.getTitles.bind(this),n="pagination";return this.props.className&&(n+=" "+this.props.className),c.default.createElement("nav",null,c.default.createElement("ul",{className:n},c.default.createElement(v,{className:"btn-first-page",key:"btn-first-page",isDisabled:this.isPrevDisabled(),onClick:this.handleFirstPage,style:"first-page"!==this.state.hovered||this.isPrevDisabled()?this.props.style:this.props.hoverStyle,onMouseOver:function(){e.setState({hovered:"first-page"})},onMouseLeave:function(){e.setState({hovered:""})}},t("first")),c.default.createElement(v,{className:"btn-prev-page",key:"btn-prev-page",isDisabled:this.isPrevDisabled(),onClick:this.handlePreviousPage,style:"prev-page"!==this.state.hovered||this.isPrevDisabled()?this.props.style:this.props.hoverStyle,onMouseOver:function(){e.setState({hovered:"prev-page"})},onMouseLeave:function(){e.setState({hovered:""})}},t("prev")),c.default.createElement(v,{className:"btn-prev-more",key:"btn-prev-more",isHidden:this.isPrevMoreHidden(),onClick:this.handleMorePrevPages,style:"prev-more"!==this.state.hovered||this.isPrevMoreHidden()?this.props.style:this.props.hoverStyle,onMouseOver:function(){e.setState({hovered:"prev-more"})},onMouseLeave:function(){e.setState({hovered:""})}},t("prevSet")),this.renderPages(this.visibleRange()),c.default.createElement(v,{className:"btn-next-more",key:"btn-next-more",isHidden:this.isNextMoreHidden(),onClick:this.handleMoreNextPages,style:"next-more"!==this.state.hovered||this.isNextMoreHidden()?this.props.style:this.props.hoverStyle,onMouseOver:function(){e.setState({hovered:"next-more"})},onMouseLeave:function(){e.setState({hovered:""})}},t("nextSet")),c.default.createElement(v,{className:"btn-next-page",key:"btn-next-page",isDisabled:this.isNextDisabled(),onClick:this.handleNextPage,style:"next-page"!==this.state.hovered||this.isNextDisabled()?this.props.style:this.props.hoverStyle,onMouseOver:function(){e.setState({hovered:"next-page"})},onMouseLeave:function(){e.setState({hovered:""})}},t("next")),c.default.createElement(v,{className:"btn-last-page",key:"btn-last-page",isDisabled:this.isNextDisabled(),onClick:this.handleLastPage,style:"last-page"!==this.state.hovered||this.isNextDisabled()?this.props.style:this.props.hoverStyle,onMouseOver:function(){e.setState({hovered:"last-page"})},onMouseLeave:function(){e.setState({hovered:""})}},t("last"))))}}]),t}(c.default.Component);h.propTypes={current:p.default.number.isRequired,total:p.default.number.isRequired,visiblePages:p.default.number.isRequired,titles:p.default.object,onPageChanged:p.default.func},h.defaultProps={titles:d};var v=function(e){if(e.isHidden)return null;var t=e.className?e.className+" ":"",n=t+(e.isActive?" active":"")+(e.isDisabled?" disabled":"");return c.default.createElement("li",{key:e.index,className:n},c.default.createElement("a",{style:e.style,onMouseOver:function(t){e.onMouseOver(t)},onMouseLeave:function(t){e.onMouseLeave(t)},onClick:e.onClick},e.children))};v.propTypes={isHidden:p.default.bool,isActive:p.default.bool,isDisabled:p.default.bool,className:p.default.string,activeStyle:p.default.object,style:p.default.object,onClick:p.default.func,onMouseOver:p.default.func,onMouseLeave:p.default.func},t.default=h},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(5)(o,!0)}else e.exports=n(8)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(6),i=n(1),a=n(7),s=function(){};"production"!==t.env.NODE_ENV&&(s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function u(e){var t=e&&(N&&e[N]||e[j]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e,this.stack=""}function f(e){function r(r,u,l,f,p,d,h){if(f=f||T,d=d||l,h!==i){if(n){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var y=f+":"+l;!o[y]&&a<3&&(s("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[y]=!0,a++)}}return null==u[l]?r?new c(null===u[l]?"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(u,l,f,p,d)}if("production"!==t.env.NODE_ENV)var o={},a=0;var u=r.bind(null,!1);return u.isRequired=r.bind(null,!0),u}function p(e){function t(t,n,r,o,i,a){var s=t[n];if(x(s)!==e)return new c("Invalid "+o+" `"+i+"` of type `"+k(s)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){return new c("Invalid "+o+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<s.length;u++){var l=e(s,u,r,o,a+"["+u+"]",i);if(l instanceof Error)return l}return null}return f(t)}function h(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||T;return new c("Invalid "+o+" `"+i+"` of type `"+E(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function v(e){function n(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(l(a,e[s]))return null;return new c("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&s("Invalid argument supplied to oneOf, expected an instance of array."),r)}function y(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],u=x(s);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(s.hasOwnProperty(l)){var f=e(s,l,r,o,a+"."+l,i);if(f instanceof Error)return f}return null}return f(t)}function b(e){function n(t,n,r,o,a){for(var s=0;s<e.length;s++){if(null==(0,e[s])(t,n,r,o,a,i))return null}return new c("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&s("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var a=e[o];if("function"!=typeof a)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(a)+" at index "+o+"."),r}return f(n)}function g(e){function t(t,n,r,o,a){var s=t[n],u=x(s);if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var f=e[l];if(f){var p=f(s,l,r,o,a+"."+l,i);if(p)return p}}return null}return f(t)}function m(e){function t(t,n,r,a,s){var u=t[n],l=x(u);if("object"!==l)return new c("Invalid "+a+" `"+s+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var f=o({},t[n],e);for(var p in f){var d=e[p];if(!d)return new c("Invalid "+a+" `"+s+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(u,p,r,a,s+"."+p,i);if(h)return h}return null}return f(t)}function P(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(P);if(null===t||e(t))return!0;var n=u(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!P(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!P(i[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function k(e){if(void 0===e||null===e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=k(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function E(e){return e.constructor&&e.constructor.name?e.constructor.name:T}var N="function"==typeof Symbol&&Symbol.iterator,j="@@iterator",T="<<anonymous>>",S={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r)}(),arrayOf:d,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new c("Invalid "+o+" `"+i+"` of type `"+x(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:h,node:function(){function e(e,t,n,r,o){return P(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:y,oneOf:v,oneOfType:b,shape:g,exact:m};return c.prototype=Error.prototype,S.checkPropTypes=a,S.PropTypes=S,S}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,u=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)i.call(n,c)&&(u[c]=n[c]);if(o){s=o(n);for(var f=0;f<s.length;f++)a.call(n,s[f])&&(u[s[f]]=n[s[f]])}}return u}},function(e,t,n){"use strict";(function(t){function r(e,n,r,s,u){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var c;try{if("function"!=typeof e[l]){var f=Error((s||"React class")+": "+r+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.");throw f.name="Invariant Violation",f}c=e[l](n,l,s,r,null,i)}catch(e){c=e}if(!c||c instanceof Error||o((s||"React class")+": type specification of "+r+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in a)){a[c.message]=!0;var p=u?u():"";o("Failed "+r+" type: "+c.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),a={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(){}var o=n(1);e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}}])});