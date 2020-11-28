[owlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2/) is a jQuery plugin written in an IIFE pattern.

Plugin initialization relies on jQuery in global object.

Most users face an issue like `TypeError: $ is undefined` thrown by the plugin bundled with `browserify`, `webpack` or other bundlers, because jQuery isn't attached to the global object by default in a module execution context. It makes users to expose jQuery to global object what can be harmful - overwriting another version of jQuery which the rest of the code relies on.

Here's a small CommonJS wrapper which handles this issue.

It preserves existing jQuery, then exposes our jQuery, initializes owlCarousel2, and, in the end, exposes preserved jQuery back (if there was one before).

### Installation

Install peer dependencies
```
npm i jquery@^3
npm i owl.carousel@^2
```

Install module
```
npm i git://github.com/cpof-tea/owl.carousel-module#semver:^1
```

### Usage

```js
import $ from 'jquery';
import 'owl.carousel-module';

$('.owl-carousel').owlCarousel({ ... });
```
