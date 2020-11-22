const $ = require('jquery');

function preserveJQuery() {
  var _global$$, _global$$$fn, _global$jQuery, _global$jQuery$fn;

  if ((_global$$ = global.$) !== null && _global$$ !== void 0 && (_global$$$fn = _global$$.fn) !== null && _global$$$fn !== void 0 && _global$$$fn.jquery) return global.$.noConflict();
  if ((_global$jQuery = global.jQuery) !== null && _global$jQuery !== void 0 && (_global$jQuery$fn = _global$jQuery.fn) !== null && _global$jQuery$fn !== void 0 && _global$jQuery$fn.jquery) return global.jQuery.noConflict();
} // Preserve global jQuery


const preservedJQuery = preserveJQuery();
global.jQuery = global.$ = $;

require('owl.carousel');

$.noConflict();
console.error('owlCarousel' in $.fn); // Assign back preserved jQuery

if (preservedJQuery) global.jQuery = global.$ = preservedJQuery;