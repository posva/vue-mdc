/* global describe it before vm $ app*/
import utils from '../utils'

describe('Checkbox', function () {
  let check = null
  let checkLabel = null
  before(function (done) {
    app.currentComponent = 'checkbox'
    utils.nextTick()
    .then(function () {
      check = $('#check')
      checkLabel = $('label[for=check]')
      done()
    })
  })

  it('exists', function () {
    check.should.exist
    check.should.have.prop('type', 'checkbox')
  })

  it('is upgraded', function () {
    let span = $('label[for=check] span:nth-child(2)')
    check.should.have.class('mdl-checkbox__input')
    checkLabel.should.have.attr('data-upgraded')
    .match(/MaterialCheckbox/)
    span.should.have.class('mdl-checkbox__label')
    .and.have.text('Check me')
  })

  it('is checked', function () {
    check.should.be.checked
    checkLabel.should.have.class('is-checked')
  })

  it('can be unchecked', function (done) {
    vm.check = false
    utils.nextTick()
    .then(function () {
      check.should.not.be.checked
      checkLabel.should.not.have.class('is-checked')
      vm.check = true
      return utils.nextTick()
    }).then(function () {
      check.should.be.checked
      checkLabel.should.have.class('is-checked')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can be disabled', function (done) {
    check.should.be.enabled
    check.should.have.a.prop('disabled', false)
    checkLabel.should.not.have.class('is-disabled')
    vm.disabled = true
    utils.nextTick()
    .then(function () {
      check.should.not.be.enabled
      check.should.have.a.prop('disabled', true)
      checkLabel.should.have.class('is-disabled')
      return utils.nextTick()
    }).then(done, done)
  })

  it('updates when disabled', function (done) {
    check.should.be.checked
    vm.check = false
    utils.nextTick()
    .then(function () {
      check.should.not.be.checked
      vm.check = true
      vm.disabled = false
      return utils.nextTick()
    }).then(done, done)
  })

  it('keeps user added classes', function () {
    $('label[for=check-dyn]')
    .should.have.class('added-class')
  })

  it('can use an array', function (done) {
    let id0 = $('#id-0')
    let id1 = $('#id-1')
    let id2 = $('#id-2')
    id0.should.not.be.checked
    id1.should.not.be.checked
    id2.should.not.be.checked
    vm.checks = ['id-0']
    utils.nextTick()
    .then(function () {
      id0.should.be.checked
      id1.should.not.be.checked
      id2.should.not.be.checked
      vm.checks = ['id-0', 'id-1']
      return utils.nextTick()
    }).then(function () {
      id0.should.be.checked
      id1.should.be.checked
      id2.should.not.be.checked
      vm.checks = ['id-1']
      return utils.nextTick()
    }).then(function () {
      id0.should.not.be.checked
      id1.should.be.checked
      id2.should.not.be.checked
      vm.checks = ['id-1', 'id-0']
      return utils.nextTick()
    }).then(function () {
      id0.should.be.checked
      id1.should.be.checked
      id2.should.not.be.checked
      return utils.nextTick()
    }).then(done, done)
  })

  // adding another test break phantomjs...
  // TODO move to karma
  it.skip('can start with a numeric value', function (done) {
    let numCheck = $('#number')
    vm.numCheck.should.be.eql(0)
    numCheck.should.not.be.checked
    vm.numCheck = 1
    utils.nextTick()
    .then(function () {
      numCheck.should.be.checked
    }).then(done, done)
  })
})
