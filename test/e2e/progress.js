var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#progress';
var radioSel = 'label[for=check]';

module.exports = {
  'progress exists': function(browser) {
    browser.url(base)
      .waitForElementVisible('#test', 1000)
      .expect.element('#progress .mdl-progress')
      .to.be.present
      .and.to.be.a('div');
  },
  'progress is upgraded': function(browser) {
    browser.expect.element('#progress .mdl-progress')
      .to.have.attribute('class')
      .which.contains('is-upgraded');
    browser.expect.element('#progress .mdl-progress')
      .to.have.attribute('data-upgraded')
      .which.contains('MaterialProgress');
  },
  'dynamically added progress is upgraded': function(browser) {
    browser.expect.element('#dynamic .mdl-progress')
      .to.not.be.present;

    browser.click('#v-if')
      .expect.element('#dynamic .mdl-progress')
      .to.be.present
      .and.to.have.attribute('class')
      .which.contains('is-upgraded');
    browser.expect.element('#dynamic .mdl-progress')
      .to.have.attribute('data-upgraded')
      .which.contains('MaterialProgress');

    browser.click('#v-if')
      .expect.element('#dynamic .mdl-progress')
      .to.not.be.present;
  },
  'progress starts with the rigth values': function(browser) {
    browser.expect.element('#progress .mdl-progress .progressbar')
      .to.have.attribute('style')
      .which.contains('width: 44%');
  },
  'variable updates update the progress': function(browser) {
    browser.clearValue('#progress-val')
      .setValue('#progress-val', '80')
      .expect.element('#progress .mdl-progress .progressbar')
      .to.have.attribute('style')
      .which.contains('width: 80%');
  },
  'progress bar have buffer': function(browser) {
    browser.expect.element('#buffer .mdl-progress .bufferbar')
      .to.have.attribute('style')
      .which.contains('width: 80%');
    browser.clearValue('#buffer-val')
      .setValue('#buffer-val', '90')
      .expect.element('#buffer .mdl-progress .bufferbar')
      .to.have.attribute('style')
      .which.contains('width: 90%');
  },
  'progress bar can be made indeterminate': function(browser) {
    browser.expect.element('#indeterminate .mdl-progress')
      .to.have.attribute('class')
      .which.does.not.contains('mdl-progress__indeterminate');
    browser.click('#v-if')
      .expect.element('#indeterminate .mdl-progress')
      .to.have.attribute('class')
      .which.contains('mdl-progress__indeterminate');
    browser.click('#v-if')
      .expect.element('#v-if')
      .to.not.be.selected;
  },
  'teardown': function(browser) {
    browser.end();
  }
};
