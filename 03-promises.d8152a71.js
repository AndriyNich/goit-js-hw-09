!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc");function a(e){var n=e.position,o=e.delay;return new Promise((function(e,t){setTimeout((function(n){var o=n.position,i=n.delay;Math.random()>.3&&e({position:o,delay:i}),t({position:o,delay:i})}),o,{position:n,delay:o})}))}function u(n){var o=n.position,t=n.delay;e(r).Notify.success("Fulfilled promise ".concat(o," in ").concat(t,"ms"))}function l(n){var o=n.position,t=n.delay;e(r).Notify.failure("Rejected promise ".concat(o," in ").concat(t,"ms"))}e(r).Notify.init({position:"right-bottom"}),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=+document.querySelector("input[name='amount']").value,o=+document.querySelector("input[name='step']").value,t=+document.querySelector("input[name='delay']").value,i=0;i<n;i++)a({position:i+1,delay:t+i*o}).then(u).catch(l)}))}();
//# sourceMappingURL=03-promises.d8152a71.js.map