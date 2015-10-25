var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#spinner';

module.exports = {
  'spinner exists': function(browser) {
    browser.url(base)
      .waitForElementVisible('#test', 1000)
      .expect.element('#spinner')
      .to.be.present
      .and.to.be.a('div');
  },
  'spinner is upgraded': function(browser) {
    browser.expect.element('#spinner')
      .to.have.attribute('data-upgraded')
      .which.contains('MaterialSpinner');
  },
  'spinner is active by default': function(browser) {
    browser.expect.element('#spinner')
      .to.have.attribute('class')
      .which.contains('is-active');
  },
  'spinner is multi-color by default': function(browser) {
    browser.expect.element('#spinner')
      .to.have.attribute('class')
      .which.does.not.contain('mdl-spinner--single-color');
  },
  'spinner can be deactivated': function(browser) {
    browser.click('#active')
      .expect.element('#spinner-multi')
      .to.have.attribute('class')
      .which.does.not.contain('is-active');
    browser.click('#active')
      .expect.element('#spinner-multi')
      .to.have.attribute('class')
      .which.contains('is-active');
  },
  'spinner can be single color': function(browser) {
    browser.click('#color')
      .expect.element('#spinner-multi')
      .to.have.attribute('class')
      .which.contains('mdl-spinner--single-color');
    browser.click('#color')
      .expect.element('#spinner-multi')
      .to.have.attribute('class')
      .which.does.not.contain('mdl-spinner--single-color');
  },
  'dynamically added spinner is upgraded': function(browser) {
    browser.expect.element('#if')
      .to.not.be.present;

    browser.click('#v-if')
      .expect.element('#if')
      .to.be.present
      .and.to.have.attribute('data-upgraded')
      .which.contains('MaterialSpinner');

    browser.click('#v-if')
      .expect.element('#if')
      .to.not.be.present;
  },
  'spinner can have user added classes': function(browser) {
    browser.expect.element('#spinner')
      .to.have.attribute('class')
      .which.contains('added-class');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
