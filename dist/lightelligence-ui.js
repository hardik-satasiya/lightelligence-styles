!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.lightelligence={})}(this,function(e){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function t(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=r(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var a=function(){function t(e){n(this,t),this.root=e,this.initialize(),this.initialSyncWithDOM()}return i(t,[{key:"initialize",value:function(){}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){}},{key:"unlisten",value:function(e,t){this.root.removeEventListener(e,t)}},{key:"listen",value:function(e,t){var n=this;return this.root.addEventListener(e,t),function(){return n.unlisten(e,t)}}}]),t}(),c=function(e){function r(e){return n(this,r),t(this,s(r).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(r,a),i(r,[{key:"initialize",value:function(){var e=this;this.listeners=[this.listen("focus",function(){e.onFocus()}),this.listen("blur",function(){e.onBlur()}),this.listen("focusin",function(){e.onFocus()}),this.listen("focusout",function(){e.onBlur()})],this.maybeAddFloatingLabel()}},{key:"initialSyncWithDOM",value:function(){var e=this.root;this.required=e.required}},{key:"destroy",value:function(){u(s(r.prototype),"destroy",this).call(this);var e=!0,t=!1,n=void 0;try{for(var o,i=this.listeners[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){(0,o.value)()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.listeners=null}},{key:"maybeAddFloatingLabel",value:function(){var e=this.root;this.hasText()&&this.addClass(e,"has-floating-label")}},{key:"hasText",value:function(){return 0<this.root.value.length}},{key:"addClass",value:function(e,t){e.classList.add(t)}},{key:"removeClass",value:function(e,t){e.classList.remove(t)}},{key:"onFocus",value:function(){var e=this.root;this.addClass(e,"has-floating-label"),this.addClass(e,"is-focused")}},{key:"onBlur",value:function(){var e=this.root,t=this.hasText();t||this.removeClass(e,"has-floating-label"),this.required&&(t?t&&(this.removeClass(e,"has-error"),this.removeClass(e.parentElement,"has-error-message")):(this.addClass(e,"has-error"),this.addClass(e.parentElement,"has-error-message"))),this.removeClass(e,"is-focused")}}]),r}(),f={bindToNode:!0,bindKey:"__olt-component"},h=[{selector:".olt-textfield__input",component:c}];e.bind=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t=t||document,o=Object.assign({mappingComponents:h},f,o),!t||"function"!=typeof t.querySelectorAll)throw new Error("Root not support child selection");var i=[];return o.mappingComponents.forEach(function(n){var e=t.querySelectorAll(n.selector);Array.from(e).forEach(function(e){var t=null;t=e[o.bindKey]?e[o.bindKey]:new n.component(e),o.bindToNode&&(e[o.bindKey]=t),i.push({node:e,component:t})})}),i},e.mappingComponents=h,e.OltTextfield=c,Object.defineProperty(e,"__esModule",{value:!0})});
