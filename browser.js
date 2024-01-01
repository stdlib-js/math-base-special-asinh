// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function r(n){return n!=n}var o,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,f=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,a="function"==typeof u?u.toStringTag:"",c=e&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,e,u;if(null==n)return i.call(n);r=n[a],u=a,t=null!=(e=n)&&f.call(e,u);try{n[a]=void 0}catch(t){return i.call(n)}return o=i.call(n),t?n[a]=r:delete n[a],o}:function(n){return i.call(n)},y="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var n,t,r;if("function"!=typeof l)return!1;try{t=new l(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(y&&r instanceof Uint32Array||"[object Uint32Array]"===c(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?p:function(){throw new Error("not implemented")};var A,v=o,b="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var n,t,r;if("function"!=typeof d)return!1;try{t=new d([1,3.14,-3.14,NaN]),r=t,n=(b&&r instanceof Float64Array||"[object Float64Array]"===c(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?U:function(){throw new Error("not implemented")};var m,w=A,s="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,256,257]),r=t,n=(s&&r instanceof Uint8Array||"[object Uint8Array]"===c(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var F,I=m,S="function"==typeof Uint16Array,T="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,t,r;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,65536,65537]),r=t,n=(S&&r instanceof Uint16Array||"[object Uint16Array]"===c(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var j,E={uint16:F,uint8:I};(j=new E.uint16(1))[0]=4660;var O=52===new E.uint8(j.buffer)[0],x=!0===O?1:0,P=new w(1),V=new v(P.buffer);function Y(n){return P[0]=n,V[x]}var _=!0===O?1:0,q=new w(1),G=new v(q.buffer);function M(n,t){return q[0]=n,G[_]=t>>>0,q[0]}var k=1023,z=.6931471803691238,B=1.9082149292705877e-10,C=Math.sqrt,D=.6931471803691238,H=1.9082149292705877e-10,J=1048575;function K(n){var o,e,i,f,u,a,c,y,l,p,A,v;return 0===n?t:r(n)||n<0?NaN:(u=0,(e=Y(n))<1048576&&(u-=54,e=Y(n*=0x40000000000000)),e>=2146435072?n+n:(u+=(e>>20)-k|0,u+=(y=614244+(e&=J)&1048576|0)>>20|0,c=(n=M(n,e|1072693248^y))-1,(J&2+e)<3?0===c?0===u?0:u*D+u*H:(a=c*c*(.5-.3333333333333333*c),0===u?c-a:u*D-(a-u*H-c)):(y=e-398458|0,l=440401-e|0,f=(A=(v=(p=c/(2+c))*p)*v)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(A),i=v*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(A),a=i+f,(y|=l)>0?(o=.5*c*c,0===u?c-(o-p*(o+a)):u*D-(o-(p*(o+a)+u*H)-c)):0===u?c-p*(c-a):u*D-(p*(c-a)-u*H-c))))}return function(o){var e,i,f;return r(o)||function(r){return r===n||r===t}(o)?o:(o<0&&(o=-o,e=!0),f=o<3.725290298461914e-9?o:o>268435456?K(o)+.6931471805599453:o>2?K(2*o+1/(C(o*o+1)+o)):function(o){var e,i,f,u,a,c,y,l,p,A;if(o<-1||r(o))return NaN;if(-1===o)return t;if(o===n)return o;if(0===o)return o;if(A=1,(f=o<0?-o:o)<.41421356237309503){if(f<1.862645149230957e-9)return f<5551115123125783e-32?o:o-o*o*.5;o>-.2928932188134525&&(A=0,u=o,i=1)}return 0!==A&&(f<9007199254740992?(a=(A=((i=Y(p=1+o))>>20)-k)>0?1-(p-o):o-(p-1),a/=p):(A=((i=Y(p=o))>>20)-k,a=0),(i&=1048575)<434334?p=M(p,1072693248|i):(A+=1,p=M(p,1071644672|i),i=1048576-i>>2),u=p-1),e=.5*u*u,0===i?0===u?A*z+(a+=A*B):A*z-((l=e*(1-.6666666666666666*u))-(A*B+a)-u):(l=(y=(c=u/(2+u))*c)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(y),0===A?u-(e-c*(e+l)):A*z-(e-(c*(e+l)+(A*B+a))-u))}(o+(i=o*o)/(1+C(1+i))),e?-f:f)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).asinh=t();
//# sourceMappingURL=browser.js.map
