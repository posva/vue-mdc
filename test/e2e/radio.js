var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#radio';
var radioSel = 'label[for=check]';

module.exports = {
  'exists': function(browser) {
    browser.url(base)
      .refresh()
      .waitForElementVisible('#test', 1000)
      .expect.element('#banana')
      .to.be.present
      .and.to.be.an('input')
      .and.to.have.attribute('type')
      .equals('radio');
  },
  'can change the values': function(browser) {
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
  'updates the variable': function(browser) {
    browser.click('label[for=big]')
      .expect.element('#big')
      .to.be.selected;

    browser.expect.element('#text')
      .text.to.equal('Big Banana');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
