/* global describe it before $ app*/
import utils from '../utils'

const rippleChecker = function (element, name) {
  let el = $(element)
  el.should.be.visible
  el.should.have.class('mdl-js-ripple-effect')
  $(`${element} span.mdl-${name}__ripple-container`)
  .should.be.visible
}

describe('Ripple Effect', function () {
  before(function (done) {
    app.currentComponent = 'ripple-effect'
    utils.nextTick()
    .then(done, done)
  })

  it('works on checkbox', function () {
    rippleChecker('label[for=checkbox-ripple]', 'checkbox')
  })

  it('works on radio', function () {
    rippleChecker('label[for=radio-ripple]', 'radio')
  })

  it('works on icon-toggle', function () {
    rippleChecker('label[for=icon-toggle-ripple]', 'icon-toggle')
  })

  it('works on switch', function () {
    rippleChecker('label[for=switch-ripple]', 'switch')
  })

  it('works on button', function () {
    rippleChecker('#button-ripple', 'button')
  })
})
