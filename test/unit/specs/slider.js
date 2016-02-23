/* global describe it before vm $ app*/
import utils from '../utils'

describe('Slider', function () {
  let slider = null
  let disable = null
  before(function (done) {
    app.currentComponent = 'slider'
    utils.nextTick()
    .then(function () {
      slider = $('#slider')
      disable = $('#disable')
      done()
    }
    )
  })

  it('exists', function () {
    slider.should.exist
    slider.should.have.prop('type', 'range')
  })

  it('is upgraded', function () {
    slider.should.have.class('mdl-slider')
    slider.should.have.attr('data-upgraded')
    .match(/MaterialSlider/)
  })

  it('applies classes even with empty strings in props', function () {
    let slid = $('#html-slider')
    slid.should.have.attr('disabled', 'disabled')
  })

  it('starts with the right value', function () {
    slider.should.have.value('25')
  })

  it('updates the value', function (done) {
    vm.value = 15
    utils.nextTick()
    .then(function () {
      slider.should.have.value('15')
      return utils.nextTick()
    }).then(done, done)
  })

  it('takes into account step', function () {
    disable.should.have.value('25')
  })

  it('always takes nearest value', function (done) {
    disable.should.have.value('25')
    vm.value = 13
    utils.nextTick()
    .then(function () {
      disable.should.have.value('25')
      vm.value = 12
      return utils.nextTick()
    }).then(function () {
      disable.should.have.value('0')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can change the step', function (done) {
    vm.step = 10
    utils.nextTick()
    .then(function () {
      disable.should.have.prop('step', '10')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can change the min', function (done) {
    vm.min = 10
    utils.nextTick()
    .then(function () {
      slider.should.have.prop('min', '10')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can change the max', function (done) {
    vm.max = 10
    utils.nextTick()
    .then(function () {
      slider.should.have.prop('max', '10')
      vm.max = 100
      return utils.nextTick()
    }).then(done, done)
  })

  it('adapts to the min value', function (done) {
    slider.should.not.have.value('50')
    vm.min = 50
    utils.nextTick()
    .then(function () {
      slider.should.have.value('50')
      return utils.nextTick()
    }).then(done, done)
  })

  it('but keeps the value outdated from min', function () {
    vm.value.should.equal(12)
  })

  it('adapts to the max value', function (done) {
    vm.value = 99
    utils.nextTick()
    .then(function () {
      slider.should.have.value('99')
      vm.max = 75
      return utils.nextTick()
    }).then(function () {
      slider.should.have.value('75')
      return utils.nextTick()
    }).then(done, done)
  })

  it('but keeps the value outdated max', function () {
    vm.value.should.equal(99)
  })
})
