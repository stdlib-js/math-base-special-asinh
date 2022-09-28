// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r!=r}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol.toStringTag:"";var f=o&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,o,f,u;if(null==r)return e.call(r);t=r[a],u=a,n=null!=(f=r)&&i.call(f,u);try{r[a]=void 0}catch(n){return e.call(r)}return o=e.call(r),n?r[a]=t:delete r[a],o}:function(r){return e.call(r)},u="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var y,l="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var v=y,p="function"==typeof Float64Array;var A="function"==typeof Float64Array?Float64Array:null;var U,w="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var b=U,m="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var d,h="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var s=d,F="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var S,E="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=n,r=(F&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var j,T={uint16:S,uint8:s};(j=new T.uint16(1))[0]=4660;var g=52===new T.uint8(j.buffer)[0],O=!0===g?1:0,x=new b(1),P=new v(x.buffer);function V(r){return x[0]=r,P[O]}var Y=!0===g?1:0,_=new b(1),q=new v(_.buffer);function G(r,n){return _[0]=r,q[Y]=n>>>0,_[0]}var M=.6931471803691238,k=1.9082149292705877e-10;var z=Math.sqrt;var B=.6931471803691238,C=1.9082149292705877e-10;function D(r){var o,e,i,a,f,u,c,y,l,v,p,A;return 0===r?n:t(r)||r<0?NaN:(f=0,(e=V(r))<1048576&&(f-=54,e=V(r*=0x40000000000000)),e>=2146435072?r+r:(f+=(e>>20)-1023|0,f+=(y=(e&=1048575)+614244&1048576|0)>>20|0,c=(r=G(r,e|1072693248^y))-1,(1048575&2+e)<3?0===c?0===f?0:f*B+f*C:(u=c*c*(.5-.3333333333333333*c),0===f?c-u:f*B-(u-f*C-c)):(y=e-398458|0,l=440401-e|0,a=(p=(A=(v=c/(2+c))*v)*A)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=A*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(y|=l)>0?(o=.5*c*c,0===f?c-(o-v*(o+u)):f*B-(o-(v*(o+u)+f*C)-c)):0===f?c-v*(c-u):f*B-(v*(c-u)-f*C-c))))}function H(o){var e,i,a;return t(o)||function(t){return t===r||t===n}(o)?o:(o<0&&(o=-o,e=!0),a=o<3.725290298461914e-9?o:o>268435456?D(o)+.6931471805599453:o>2?D(2*o+1/(z(o*o+1)+o)):function(o){var e,i,a,f,u,c,y,l,v,p;if(o<-1||t(o))return NaN;if(-1===o)return n;if(o===r)return o;if(0===o)return o;if(p=1,(a=o<0?-o:o)<.41421356237309503){if(a<1.862645149230957e-9)return a<5551115123125783e-32?o:o-o*o*.5;o>-.2928932188134525&&(p=0,f=o,i=1)}return 0!==p&&(a<9007199254740992?(u=(p=((i=V(v=1+o))>>20)-1023)>0?1-(v-o):o-(v-1),u/=v):(p=((i=V(v=o))>>20)-1023,u=0),(i&=1048575)<434334?v=G(v,1072693248|i):(p+=1,v=G(v,1071644672|i),i=1048576-i>>2),f=v-1),e=.5*f*f,0===i?0===f?p*M+(u+=p*k):p*M-((l=e*(1-.6666666666666666*f))-(p*k+u)-f):(l=(y=(c=f/(2+f))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(y),0===p?f-(e-c*(e+l)):p*M-(e-(c*(e+l)+(p*k+u))-f))}(o+(i=o*o)/(1+z(1+i))),e?-a:a)}export{H as default};
//# sourceMappingURL=mod.js.map