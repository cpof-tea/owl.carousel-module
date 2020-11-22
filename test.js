const assert = require('assert');
const browserify = require('browserify');
const bundler = browserify().add('dist/index.cjs').require('jquery');
const jsdom = require('jsdom');
const virtualConsole = new jsdom.VirtualConsole();

const { window } = new jsdom.JSDOM('<!DOCTYPE html><body>', {
  virtualConsole,
  runScripts: "dangerously"
});

const $ = require('jquery')(window);

describe('owlCarousel plugin', function() {
  let localJQueryHasOwlCarousel;

  before(function(done) {
    virtualConsole.once('log', (message) => {
      localJQueryHasOwlCarousel = message;
    });

    bundler
      .bundle((error, bundle) => {
        const script = window.document.createElement('script');

        let inline = window.document.createTextNode(bundle.toString());
        script.appendChild(inline);

        inline = window.document.createTextNode(`
          const $ = require('jquery');
          console.log('owlCarousel' in $.fn);
        `);
        script.appendChild(inline);
        window.document.body.appendChild(script);

        done();
      });
  })

  it('global jQuery should not contain owlCarousel plugin', function() {
    assert.strictEqual('owlCarousel' in $.fn, false);
  });

  it('local jQuery should contain owlCarousel plugin', function() {
    assert.strictEqual(localJQueryHasOwlCarousel, true);
  });
});
