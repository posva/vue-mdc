var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#ripple-effect';

var rippleChecker = function(browser, el, name) {
  browser.expect.element(el)
    .to.be.present
    .and.to.have.attribute('class')
    .which.contains('mdl-js-ripple-effect');
  browser.expect.element(el + ' span.mdl-' + name + '__ripple-container')
    .to.be.present;
};

module.exports = {
  'init': function(browser) {
    browser.url(base)
      .waitForElementVisible('#test', 1000);
  },
  'ripple-effect directive works on checkbox': function(browser) {
    rippleChecker(browser, 'label[for=checkbox-ripple]', 'checkbox');
  },
  'ripple-effect directive works on radio': function(browser) {
    rippleChecker(browser, 'label[for=radio-ripple]', 'radio');
  },
  'ripple-effect directive works on icon-toggle': function(browser) {
    rippleChecker(browser, 'label[for=icon-toggle-ripple]', 'icon-toggle');
  },
  'ripple-effect directive works on switch': function(browser) {
    rippleChecker(browser, 'label[for=switch-ripple]', 'switch');
  },
  'ripple-effect directive works on button': function(browser) {
    rippleChecker(browser, '#button-ripple', 'button');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
