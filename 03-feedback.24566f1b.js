!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var o,i,a,f,u,c,l=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,u=setTimeout(h,t),s?S(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function h(){var e=v();if(O(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return m?g(n,a-(e-l)):n}(e))}function w(e){return u=void 0,p&&o?S(e):(o=i=void 0,f)}function T(){var e=v(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(m)return u=setTimeout(h,t),S(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},T.flush=function(){return void 0===u?f:w(v())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})},ref={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]')};const S="feedback-form-state";let j={};ref.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(j))}),1e3)),ref.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log("Storage:",JSON.parse(localStorage.getItem(S))),localStorage.removeItem(S)})),function(){const e=JSON.parse(localStorage.getItem(S));e&&(ref.email.value=e.email,ref.message.value=e.message)}()}();
//# sourceMappingURL=03-feedback.24566f1b.js.map