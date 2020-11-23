const $ = require('jquery');

function preserveJQuery() {
  if (global.$?.fn?.jquery)
    return global.$.noConflict();
  if (global.jQuery?.fn?.jquery)
    return global.jQuery.noConflict();
}

// Preserve global jQuery
const preservedJQuery = preserveJQuery();

global.jQuery = global.$ = $;
require('owl.carousel');
$.noConflict();

// Assign back preserved jQuery
if (preservedJQuery)
  global.jQuery = global.$ = preservedJQuery;
