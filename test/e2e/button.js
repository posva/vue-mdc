var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#button';

module.exports = {
  'exists': function(browser) {
    browser.url(base)
      .refresh()
      .waitForElementVisible('#test', 2000)
      .expect.element('#button')
      .to.be.present
      .and.to.be.a('button');
  },
  'can have a v-on:click': function(browser) {
    browser.expect.element('#disable-btn')
      .to.be.enabled;
    browser.click('#disable-btn')
      .expect.element('#disable-btn')
      .to.not.be.enabled;
  },
  'teardown': function(browser) {
    browser.end();
  }
};
