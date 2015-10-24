var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#badge';

module.exports = {
  'badge directive adds badge css': function(browser) {
    browser.url(base)
      .waitForElementVisible('#test', 1000)
      .expect.element('#badge')
      .to.be.present
      .and.to.have.attribute('class')
      .which.contains('mdl-badge');
    browser.expect.element('#badge-2')
      .to.be.present
      .and.to.have.attribute('class')
      .which.contains('mdl-badge');
  },
  'badge can have no background': function(browser) {
    browser.expect.element('#badge')
      .to.have.attribute('class')
      .which.does.not.contain('mdl-badge--no-background');
    browser.expect.element('#badge-nb')
      .to.have.attribute('class')
      .which.contains('mdl-badge--no-background');
  },
  'badge can overlap': function(browser) {
    browser.expect.element('#badge')
      .to.have.attribute('class')
      .which.does.not.contain('mdl-badge--overlap');
    browser.expect.element('#badge-overlap')
      .to.have.attribute('class')
      .which.contains('mdl-badge--overlap');
  },
  'badge text is variable': function(browser) {
    browser.expect.element('#badge')
      .to.have.attribute('data-badge')
      .which.equals('♥');
    browser.clearValue('#badge-val')
      .setValue('#badge-val', '8')
      .expect.element('#badge')
      .to.have.attribute('data-badge')
      .which.equals('8');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
