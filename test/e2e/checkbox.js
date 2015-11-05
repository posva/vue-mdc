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
      .expect.element('#check').to.be.selected;
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
      .which.does.not.contain('is-checked');

    browser.click(selector)
      .expect.element('#check').to.be.selected;

    browser.expect.element(mdlCbSelector)
      .to.have.attribute('class')
      .which.contains('is-checked');
  },
  'checkbox can be disabled': function(browser) {
    var selector = '#disable';
    browser.expect.element('#check').to.be.enabled;
    browser.expect.element(mdlCbSelector)
      .to.have.attribute('class')
      .which.does.not.contain('is-disabled');

    browser.click(selector)
      .expect.element('#check').to.not.be.enabled;

    browser.expect.element(mdlCbSelector)
      .to.have.attribute('class')
      .which.contains('is-disabled');
  },
  'checkbox cannot be used while disabled': function(browser) {
    var selector = '#disable';
    browser.expect.element('#check').to.not.be.enabled;

    browser.click('#check')
      .expect.element('#check').to.be.selected;
    browser.click('#check')
      .expect.element('#check').to.be.selected;

    browser.click(selector)
      .expect.element('#check').to.be.enabled;

    browser.expect.element(mdlCbSelector)
      .to.have.attribute('class')
      .which.does.not.contain('is-disabled');
  },
  'checkbox keep working after being disabled': function(browser) {
    browser.click(mdlCbSelector)
      .expect.element('#check').to.not.be.selected;
    browser.click(mdlCbSelector)
      .expect.element('#check').to.be.selected;
  },
  'dynamically added elements should be upgraded': function(browser) {
    browser.click('#disable')
      .expect.element('label[for=v-if]')
      .to.be.present
      .and.to.have.attribute('class')
      .which.contains('is-upgraded');
  },
  'dynamically added elements should have the correct value': function(browser) {
    browser.expect.element('#v-if')
      .to.be.selected;

    browser.click('#disable')
      .expect.element('#v-if').to.not.be.present;
  },
  'added classes exist': function(browser) {
    browser.expect.element('label[for=check-dyn]')
      .to.have.attribute('class')
      .which.contains('added-class');
  },
  'checkboxes can use an Array instead of a Boolean': function(browser) {
    var selector = function(n) {
      return 'label[for=id-' + n + '] .mdl-checkbox__label';
    };
    browser.expect.element('#checks')
      .text.to.equal('[]');

    browser.click(selector(0))
      .expect.element('#checks')
      .text.to.equal('[ "id-0" ]');

    browser.click(selector(1))
      .expect.element('#checks')
      .text.to.equal('[ "id-0", "id-1" ]');

    browser.click(selector(0))
      .expect.element('#checks')
      .text.to.equal('[ "id-1" ]');

    browser.click(selector(2))
      .expect.element('#checks')
      .text.to.equal('[ "id-1", "id-2" ]');

    browser.click(selector(2))
      .click(selector(1))
      .expect.element('#checks')
      .text.to.equal('[]');
  },
  'teardown': function(browser) {
    browser.end();
  }
};
