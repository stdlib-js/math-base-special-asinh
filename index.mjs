// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";function d(d){var r,a,l;return t(d)||s(d)?d:(d<0&&(d=-d,r=!0),l=d<3.725290298461914e-9?d:d>268435456?n(d)+m:d>2?n(2*d+1/(i(d*d+1)+d)):e(d+(a=d*d)/(1+i(1+a))),r?-l:l)}export{d as default};
//# sourceMappingURL=index.mjs.map
