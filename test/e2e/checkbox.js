var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#checkbox';
var mdlCbSelector = 'label[for=check]';

module.exports = {
  'checkbox exists': function(browser) {
    browser.url(base)
    .waitForElementVisible('#test', 1000)
    .expect.element('#check')
    .to.be.present
    .and.to.be.an('input')
    .and.to.have.attribute('type')
    .equals('checkbox');

  },
  'checkbox has mdl classes': function(browser) {
    browser.expect.element('#check')
    .to.have.attribute('class')
    .equals('mdl-checkbox__input');
    browser.expect.element('label[for=check] span:nth-child(2)')
    .to.be.visible
    .and.text.to.equal('Check me');
    browser.expect.element('label[for=check] span:nth-child(2)')
    .and.to.have.attribute('class')
    .equals('mdl-checkbox__label');
  },
  'checkbox is checked': function(browser) {
    browser.expect.element('#check')
    .to.be.selected;
  },
  'checkbox can be unchecked': function(browser) {
    browser.click(mdlCbSelector)
    .expect.element('#check').to.not.be.selected;
    browser.click(mdlCbSelector)
    .expect.element('#check').to.be.selected
  },
  'checkbox can be unchecked with the label': function(browser) {
    var selector = 'label[for=check] .mdl-checkbox__label';
    browser.click(selector)
    .expect.element('#check').to.not.be.selected;
    browser.click(selector)
    .expect.element('#check').to.be.selected
  },
  'checkbox can be unchecked with the box': function(browser) {
    var selector = 'label[for=check] .mdl-checkbox__ripple-container';
    browser.expect.element('#check').to.be.selected;
    browser.click(selector)
    .expect.element('#check').to.not.be.selected;

    browser.click(selector)
    .expect.element('#check').to.be.selected
  },
  'checkbox have is-checked class': function(browser) {
    browser.click(mdlCbSelector)
    .expect.element(mdlCbSelector).to.not.be.selected;

    browser.expect.element(mdlCbSelector)
    .to.have.attribute('class')
    .which.does.not.contain('is-checked');

    browser.click(mdlCbSelector)
    .expect.element(mdlCbSelector)
    .to.have.attribute('class')
    .which.contains('is-checked');
  },
  'checkbox can be unchecked from somewhere else': function(browser) {
    var selector = '#classic';
    browser.expect.element('#check').to.be.selected;
    browser.expect.element(selector).to.be.selected;
    browser.click(selector)
    .expect.element('#check').to.not.be.selected;

    browser.expect.element(mdlCbSelector)
    .to.have.attribute('class')
    .which.does.not.contain('is-checked')

    browser.click(selector)
    .expect.element('#check').to.be.selected;

    browser.expect.element(mdlCbSelector)
    .to.have.attribute('class')
    .which.contains('is-checked')
  },
  'teardown': function(browser) {
    browser.end();
  }
};
