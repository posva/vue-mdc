var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#checkbox';
var mdlCbSelector = 'label[for=check]';

module.exports = {
  'exists': function(browser) {
    browser.url(base)
      .refresh()
      .waitForElementVisible('#test', 1000)
      .expect.element('#check')
      .to.be.present
      .and.to.be.an('input')
      .and.to.have.attribute('type')
      .equals('checkbox');
  },
  'can be unchecked': function(browser) {
    browser.click(mdlCbSelector)
      .expect.element('#classic').to.not.be.selected;
    browser.click(mdlCbSelector)
      .expect.element('#classic').to.be.selected;
  },
  'cannot be used while disabled': function(browser) {
    var selector = '#disable';
    browser.click(selector)
      .expect.element('#check').to.not.be.enabled;

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
  'can use an Array instead of a Boolean': function(browser) {
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
