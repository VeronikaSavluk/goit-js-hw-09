!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("iU1Pc"),i=document.querySelector(".form");function l(t,n){setTimeout((function(){Math.random()>.3?e(a).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms")):e(a).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}),n)}i.addEventListener("submit",(function(t){t.preventDefault(),i[t.target.name]=t.target.value;var n=Number.parseFloat(i.delay.value),r=Number.parseFloat(i.step.value),o=Number.parseFloat(i.amount.value);if(n>=0&&r>=0&&o>0)for(var u=1;u<=o;u+=1)l(u,n),n+=r;else e(a).Notify.failure("Please, enter valid values.")}))}();
//# sourceMappingURL=03-promises.c91f9aaa.js.map