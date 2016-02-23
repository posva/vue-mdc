/* global describe it before vm $ app*/
import utils from '../utils'

describe('Spinner', function () {
  let spinner = null
  let spinnerMulti = null
  before(function (done) {
    app.currentComponent = 'spinner'
    utils.nextTick()
    .then(function () {
      spinner = $('#spinner')
      spinnerMulti = $('#spinner-multi')
      done()
    })
  })

  it('exists', function () {
    spinner.should.exist
    spinner.should.be.visible
  })

  it('is upgraded', function () {
    spinner.should.have.class('mdl-spinner')
    spinner.should.have.attr('data-upgraded')
    .match(/MaterialSpinner/)
  })

  it('applies classes even with empty strings in props', function () {
    let spin = $('#html-spin')
    spin.should.have.class('mdl-spinner--single-color')
  })

  it('is multi color by default', function () {
    spinner.should.not.have.class('mdl-spinner--single-color')
  })

  it('is active by default', function () {
    spinner.should.have.class('is-active')
  })

  it('can be inactive', function (done) {
    spinnerMulti.should.have.class('is-active')
    vm.active = false
    utils.nextTick()
    .then(function () {
      spinnerMulti.should.not.have.class('is-active')
      vm.active = true
      return utils.nextTick()
    }).then(done, done)
  })

  it('can be colorless', function (done) {
    spinnerMulti.should.not.have.class('mdl-spinner--single-color')
    vm.color = true
    utils.nextTick()
    .then(function () {
      spinnerMulti.should.have.class('mdl-spinner--single-color')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can have user added classes', function () {
    spinnerMulti.should.have.class('added-class')
  })
})

