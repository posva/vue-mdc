/* global describe it before vm $ app*/
import utils from '../utils'

describe('Badge', function () {
  let badge = null
  let hider = null
  let badge2 = null
  let badgeNoBg = null
  let badgeOverlap = null
  before(function (done) {
    app.currentComponent = 'badge'
    utils.nextTick()
    .then(function () {
      badge = $('#badge')
      hider = $('#hider')
      badge2 = $('#badge-2')
      badgeOverlap = $('#badge-overlap')
      badgeNoBg = $('#badge-overlap')
      done()
    })
  })
  it('exists', function () {
    badge.should.exist
    badge.should.be.visible
  })
  it('is upgraded', function () {
    badge.should.have.class('mdl-badge')
    badge2.should.have.class('mdl-badge')
  })
  it('can have no background', function () {
    badge.should.not.have.class('mdl-badge--no-background')
    badgeNoBg.should.have.class('mdl-badge--no-background')
  })
  it('can overlap', function () {
    badge.should.not.have.class('mdl-badge--overlap')
    badgeOverlap.should.have.class('mdl-badge--overlap')
  })
  it('can change the text', function (done) {
    badge.should.have.attr('data-badge', '♥')
    vm.badgeText = '8'
    utils.nextTick()
    .then(function () {
      badge.should.have.attr('data-badge', '8')
      return utils.nextTick()
    })
    .then(done, done)
  })
  it('can hide badge with function', function (done) {
    vm.badgeText = '0'
    utils.nextTick()
    .then(function () {
      hider.should.not.have.attr('data-badge')
      vm.badgeText = '2'
      return utils.nextTick()
    })
    .then(function () {
      hider.should.have.attr('data-badge', '2')
      return utils.nextTick()
    })
    .then(done, done)
  })
  it('can hide badge with number attribute', function (done) {
    const number = $('#number')
    vm.badgeText = '0'
    utils.nextTick()
    .then(function () {
      number.should.not.have.attr('data-badge')
      vm.badgeText = '2'
      return utils.nextTick()
    })
    .then(function () {
      number.should.have.attr('data-badge', '2')
      return utils.nextTick()
    })
    .then(done, done)
  })
  it('can have hide-badge and .number at the same time', function (done) {
    hider = $('#hider-multi')
    vm.badgeText = '0'
    utils.nextTick()
    .then(function () {
      hider.should.not.have.attr('data-badge')
      vm.badgeText = '2'
      return utils.nextTick()
    })
    .then(function () {
      hider.should.have.attr('data-badge', '2')
      vm.hide = true
      return utils.nextTick()
    })
    .then(function () {
      hider.should.not.have.attr('data-badge')
      vm.hide = false
      return utils.nextTick()
    })
    .then(function () {
      hider.should.have.attr('data-badge', '2')
      return utils.nextTick()
    })
    .then(done, done)
  })
})

