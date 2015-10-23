var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#radio';
var radioSel = 'label[for=check]';

module.exports = {
  'radio exists': function(browser) {
    browser.url(base)
      .waitForElementVisible('#test', 1000)
      .expect.element('#banana')
      .to.be.present
      .and.to.be.an('input')
      .and.to.have.attribute('type')
      .equals('radio');
  },
  'radio is upgraded': function(browser) {
    browser.expect.element('label[for=banana]')
      .to.have.attribute('class')
      .which.contains('is-upgraded');
  },
  'dynamically added radio is upgraded': function(browser) {
    browser.expect.element('label[for=extra]')
      .to.not.be.present;

    browser.click('#disable')
      .expect.element('label[for=extra]')
      .to.be.present
      .and.to.have.attribute('class')
      .which.contains('is-upgraded');

    browser.click('#disable')
      .expect.element('label[for=extra]')
      .to.not.be.present;
  },
  'dynamically added radio works fine': function(browser) {
    browser.click('#disable')
      .expect.element('label[for=extra]')
      .to.be.present;

    browser.click('label[for=extra]')
      .expect.element('#extra')
      .to.be.selected;

    browser.expect.element('#text')
      .text.to.equal('Extra Banana');

    browser.click('#disable')
      .expect.element('label[for=extra]')
      .to.not.be.present;

    browser.expect.element('#text')
      .text.to.equal('Extra Banana');

    browser.click('label[for=little]')
      .expect.element('#little')
      .to.be.selected;
  },
  'radio can be disabled': function(browser) {
    browser.click('#disable')
      .expect.element('#big')
      .to.not.be.enabled;

    browser.click('#disable')
      .expect.element('#big')
      .to.be.enabled;
  },
  'radio starts with the rigth values': function(browser) {
    browser.expect.element('#big')
      .to.not.be.selected;
    browser.expect.element('#medium')
      .to.not.be.selected;
    browser.expect.element('#little')
      .to.be.selected;

    browser.expect.element('#banana')
      .to.be.selected;
    browser.expect.element('#pineapple')
      .to.not.be.selected;
    browser.expect.element('#kiwi')
      .to.not.be.selected;

    browser.expect.element('#text')
      .text.to.equal('Little Banana');
  },
  'radio updates variable': function(browser) {
    browser.click('label[for=big]')
      .expect.element('#big')
      .to.be.selected;

    browser.expect.element('#text')
      .text.to.equal('Big Banana');
  },
  'variable updates update the radio': function(browser) {
    browser.click('#medium-or')
      .expect.element('#medium')
      .to.be.selected;
  },
  'teardown': function(browser) {
    browser.end();
  }
};
