/* global describe it before vm $ app*/
import utils from '../utils'

describe('Radio', function () {
  let big = null
  let bigLabel = null
  let check = null
  let checkLabel = null
  before(function (done) {
    app.currentComponent = 'radio'
    utils.nextTick()
    .then(function () {
      check = $('#banana')
      checkLabel = $('label[for=banana]')
      big = $('#big')
      bigLabel = $('label[for=big]')
      done()
    })
  })

  it('exists', function () {
    check.should.exist
    check.should.have.prop('type', 'radio')
  })

  it('is upgraded', function () {
    let span = $('label[for=banana] span:nth-child(2)')
    check.should.have.class('mdl-radio__button')
    checkLabel.should.have.attr('data-upgraded')
    .match(/MaterialRadio/)
    span.should.have.class('mdl-radio__label')
    .and.have.text('Banana')
  })

  it('applies classes even with empty strings in props', function () {
    let radio = $('[for=html-radio]')
    radio.should.have.class('is-disabled')
  })

  it('is checked', function () {
    check.should.be.checked
    checkLabel.should.have.class('is-checked')
  })

  it('can be unchecked', function (done) {
    vm.fruit = 'Kiwi'
    utils.nextTick()
    .then(function () {
      check.should.not.be.checked
      checkLabel.should.not.have.class('is-checked')
      vm.fruit = 'Banana'
      return utils.nextTick()
    }).then(function () {
      check.should.be.checked
      checkLabel.should.have.class('is-checked')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can be disabled', function (done) {
    big.should.be.enabled
    big.should.have.a.prop('disabled', false)
    bigLabel.should.not.have.class('is-disabled')
    vm.disabled = true
    utils.nextTick()
    .then(function () {
      big.should.not.be.enabled
      big.should.have.a.prop('disabled', true)
      bigLabel.should.have.class('is-disabled')
      return utils.nextTick()
    }).then(done, done)
  })

  it('updates when disabled', function (done) {
    big.should.be.not.checked
    vm.size = 'Big'
    utils.nextTick()
    .then(function () {
      big.should.be.checked
      vm.size = 'Little'
      vm.disabled = false
      return utils.nextTick()
    }).then(done, done)
  })

  it('keeps user added classes', function () {
    checkLabel.should.have.class('added-class')
  })
})
