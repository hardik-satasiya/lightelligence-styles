!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.lightelligence={})}(this,function(t){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=s(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var a=function(){function e(t){n(this,e),this.root=t,this.initialize(),this.initialSyncWithDOM()}return i(e,[{key:"initialize",value:function(){}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){}},{key:"unlisten",value:function(t,e){this.root.removeEventListener(t,e)}},{key:"listen",value:function(t,e){var n=this;return this.root.addEventListener(t,e),function(){return n.unlisten(t,e)}}}]),e}(),f=function(t,e){t.classList.add(e)},h=function(t,e){t.classList.remove(e)},e=function(t){function e(){return n(this,e),l(this,r(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,a),i(e,[{key:"initialize",value:function(){var t=this;this.listeners=[this.listen("focus",function(){t.onFocus()}),this.listen("blur",function(){t.onBlur()}),this.listen("focusin",function(){t.onFocus()}),this.listen("focusout",function(){t.onBlur()})],this.maybeAddFloatingLabel()}},{key:"initialSyncWithDOM",value:function(){var t=this.root;this.required=t.required}},{key:"destroy",value:function(){c(r(e.prototype),"destroy",this).call(this),this.listeners.forEach(function(t){return t()}),this.listeners=null}},{key:"maybeAddFloatingLabel",value:function(){var t=this.root;this.hasText()&&f(t,"has-floating-label")}},{key:"hasText",value:function(){return 0<this.root.value.length}},{key:"onFocus",value:function(){var t=this.root;f(t,"has-floating-label"),f(t,"is-focused")}},{key:"onBlur",value:function(){var t=this.root,e=this.hasText();e||h(t,"has-floating-label"),this.required&&(e?e&&(h(t,"has-error"),h(t.parentElement,"has-error-message")):(f(t,"has-error"),f(t.parentElement,"has-error-message"))),h(t,"is-focused")}}]),e}(),p={bindToNode:!0,bindKey:"__olt-component"},y=[{selector:".olt-textfield__input",component:e}];t.OltComponent=a,t.OltTextfield=e,t.mappingComponents=y,t.bind=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(e=e||document,o=Object.assign({mappingComponents:y},p,o),!e||"function"!=typeof e.querySelectorAll)throw new Error("Root not support child selection");var i=[];return o.mappingComponents.forEach(function(n){var t=e.querySelectorAll(n.selector);Array.from(t).forEach(function(t){var e=null;e=t[o.bindKey]?t[o.bindKey]:new n.component(t),o.bindToNode&&(t[o.bindKey]=e),i.push({node:t,component:e})})}),i},Object.defineProperty(t,"__esModule",{value:!0})});
