var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#slider';

module.exports = {
  'exists': function(browser) {
    browser.url(base)
      .refresh()
      .waitForElementVisible('#test', 1000)
      .expect.element('#slider')
      .to.be.present
      .and.to.be.an('input');
  },
  'is upgraded': function(browser) {
    browser.expect.element('#slider')
      .to.have.attribute('class')
      .which.contains('is-upgraded');
    browser.expect.element('#slider')
      .to.have.attribute('data-upgraded')
      .which.contains('MaterialSlider');
  },
  'value can be changed': function(browser) {
    browser.clearValue('#value');
    browser.setValue('#value', '15');
    browser.expect.element('#slider')
      .to.have.value.that.equals('15');
  },
  'with step have a different value': function(browser) {
    browser.expect.element('#disable')
      .to.have.value.that.equals('25');
  },
  'with step will take the round value': function(browser) {
    browser.clearValue('#value');
    browser.setValue('#value', '13');
    browser.expect.element('#disable')
      .to.have.value.that.equals('25');
    browser.clearValue('#value');
    browser.setValue('#value', '12');
    browser.expect.element('#disable')
      .to.have.value.that.equals('0');
  },
  'step can be changed': function(browser) {
    browser.clearValue('#step');
    browser.setValue('#step', '10');
    browser.expect.element('#disable')
      .to.have.attribute('step')
      .which.equals('10');
  },
  'min value can be changed': function(browser) {
    browser.clearValue('#min');
    browser.setValue('#min', '10');
    browser.expect.element('#slider')
      .to.have.attribute('min')
      .which.equals('10');
  },
  'max value can be changed': function(browser) {
    browser.clearValue('#max');
    browser.setValue('#max', '10');
    browser.expect.element('#slider')
      .to.have.attribute('max')
      .which.equals('10');
    browser.clearValue('#max');
    browser.setValue('#max', '100');
  },
  'changing min value adapts slider value': function(browser) {
    browser.clearValue('#min');
    browser.setValue('#min', '50');
    browser.expect.element('#slider')
      .to.have.value.that.equals('50');
  },
  'changing min value does not update the value outside the slider': function(browser) {
    browser.expect.element('#value')
      .to.have.value.that.equals('12');
  },
  'changing max value adapts slider value': function(browser) {
    browser.clearValue('#value');
    browser.setValue('#value', '99');
    browser.expect.element('#slider')
      .to.have.value.that.equals('99').after(30000);
    browser.clearValue('#max');
    browser.setValue('#max', '75');
    browser.expect.element('#slider')
      .to.have.value.that.equals('75');
  },
  'dynamic sliders are upgraded': function(browser) {
    browser.click('#disable-val');
    browser.expect.element('#vif')
      .to.be.present
      .and.to.be.an('input');
    browser.expect.element('#vif')
      .to.have.attribute('class')
      .which.contains('is-upgraded');
    browser.expect.element('#vif')
      .to.have.attribute('data-upgraded')
      .which.contains('MaterialSlider');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
