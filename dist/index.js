"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=v(function(R,u){
var q=require('@stdlib/math-base-assert-is-infinite/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-log1p/dist'),s=require('@stdlib/math-base-special-sqrt/dist'),o=require('@stdlib/constants-float64-ln-two/dist'),t=require('@stdlib/math-base-special-ln/dist'),c=1/(1<<28),p=1<<28;function E(r){var e,a,i;return f(r)||q(r)?r:(r<0&&(r=-r,e=!0),r<c?i=r:r>p?i=t(r)+o:r>2?i=t(2*r+1/(s(r*r+1)+r)):(a=r*r,i=l(r+a/(1+s(1+a)))),e?-i:i)}u.exports=E
});var g=n();module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
