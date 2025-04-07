<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# asinh

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hyperbolic arcsine][hyperbolic-arcsine] of a double-precision floating-point number.



<section class="usage">

## Usage

```javascript
import asinh from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asinh@deno/mod.js';
```

#### asinh( x )

Computes the [hyperbolic arcsine][hyperbolic-arcsine] of a double-precision floating-point number.

```javascript
var v = asinh( 0.0 );
// returns 0.0

v = asinh( -0.0 );
// returns -0.0

v = asinh( 2.0 );
// returns ~1.444

v = asinh( -2.0 );
// returns ~-1.444

v = asinh( NaN );
// returns NaN

v = asinh( -Infinity );
// returns -Infinity

v = asinh( Infinity );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import asinh from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asinh@deno/mod.js';

var x = uniform( 100, -5.0, 5.0, {
    'dtype': 'float64'
});

logEachMap( 'asinh(%0.4f) = %0.4f', x, asinh );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acosh`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/asin`][@stdlib/math/base/special/asin]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-asinh.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-asinh

[test-image]: https://github.com/stdlib-js/math-base-special-asinh/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-asinh/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-asinh/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-asinh?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-asinh.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-asinh/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-asinh/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-asinh/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-asinh/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-asinh/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-asinh/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-asinh/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-asinh/blob/main/branches.md

[hyperbolic-arcsine]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math-base-special-acosh/tree/deno

[@stdlib/math/base/special/asin]: https://github.com/stdlib-js/math-base-special-asin/tree/deno

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math-base-special-atanh/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
