var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#button';

var propChecker = function(browser, prop) {
  browser.expect.element('#button')
    .to.have.attribute('class')
    .which.does.not.contain('mdl-button--' + prop);
  browser.click('#' + prop)
    .expect.element('#button')
    .to.have.attribute('class')
    .which.contains('mdl-button--' + prop);
  browser.click('#' + prop)
    .expect.element('#button')
    .to.have.attribute('class')
    .which.does.not.contain('mdl-button--' + prop);
}

module.exports = {
  'button exists': function(browser) {
    browser.url(base)
      .waitForElementVisible('#test', 1000)
      .expect.element('#button')
      .to.be.present
      .and.to.be.a('button');
  },
  'button is upgraded': function(browser) {
    browser.expect.element('#button')
      .to.have.attribute('data-upgraded')
      .which.contains('MaterialButton');
  },
  'dynamically added button is upgraded': function(browser) {
    browser.expect.element('#if')
      .to.not.be.present;

    browser.click('#disable')
      .expect.element('#if')
      .to.be.present
      .and.to.have.attribute('data-upgraded')
      .which.contains('MaterialButton');

    browser.click('#disable')
      .expect.element('#if')
      .to.not.be.present;
  },
  'button can have a v-on:click': function(browser) {
    browser.expect.element('#disable-btn')
      .to.be.enabled;
    browser.click('#disable-btn')
      .expect.element('#disable-btn')
      .to.not.be.enabled;
  },
  'button can be colored': function(browser) {
    propChecker(browser, 'colored');
  },
  'button can be raised': function(browser) {
    propChecker(browser, 'raised');
  },
  'button can be fab': function(browser) {
    propChecker(browser, 'fab');
  },
  'button can be mini-fab': function(browser) {
    propChecker(browser, 'mini-fab');
  },
  'button can be primary': function(browser) {
    propChecker(browser, 'primary');
  },
  'button can be accent': function(browser) {
    propChecker(browser, 'accent');
  },
  'button can be icon': function(browser) {
    propChecker(browser, 'icon');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
