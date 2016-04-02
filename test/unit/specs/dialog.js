/* global describe it before $ app vm*/
import utils from '../utils'

describe('Dialog', function () {
  let info = null
  before(function (done) {
    app.currentComponent = 'dialog'
    utils.nextTick()
    .then(function () {
      info = $('#info')
      done()
    })
  })

  it('exists and is hidden', function () {
    info.should.exist
    info.should.not.be.visible
  })

  it('shows with an event', function (done) {
    vm.$broadcast('infoMessage')
    utils.nextTick()
    .then(function () {
      info.should.be.visible
      info.find('button').click()
      return utils.nextTick()
    }).then(function () {
      info.should.not.be.visible
    }).then(done, done)
  })

  it('has a title', function () {
    info.find('.mdl-dialog__title').should.have.text('Info message')
  })

  it('has a description', function () {
    info.find('.mdl-dialog__content').should.have.text('This is a modal example')
  })

  it('call a callback', function (done) {
    const modal = $('#callback')
    vm.number.should.be.eql(0)
    vm.$broadcast('messageWithCallback', () => vm.number++)
    utils.nextTick()
    .then(function () {
      vm.number.should.be.eql(0)
      modal.find('button').click()
      return utils.nextTick()
    }).then(function () {
      vm.number.should.be.eql(1)
    }).then(done, done)
  })

  it('calls a callback without closing', function (done) {
    const modal = $('#multiple')
    vm.number = 0
    vm.$broadcast('multipleActionsMessage', () => {
      vm.number++
      return false
    }, () => vm.number--)
    modal.should.not.be.visible
    utils.nextTick()
    .then(function () {
      vm.number.should.be.eql(0)
      modal.should.be.visible
      modal.find('button:nth-child(1)').click()
      return utils.nextTick()
    }).then(function () {
      modal.should.be.visible
      vm.number.should.be.eql(1)
      modal.find('button:nth-child(1)').click()
      return utils.nextTick()
    }).then(function () {
      modal.should.be.visible
      vm.number.should.be.eql(2)
      modal.find('button:nth-child(2)').click()
      return utils.nextTick()
    }).then(function () {
      modal.should.not.be.visible
      vm.number.should.be.eql(1)
      return utils.nextTick()
    }).then(done, done)
  })

  it('calls a different function when cancelling', function (done) {
    let modal = $('#cancellable')
    vm.number = 0
    vm.$broadcast('cancellableMessage', function () {
      vm.number = 10
    }, function () {
      vm.number = 5
    })

    let modalVm = vm.$children[5]

    utils.nextTick()
    .then(function () {
      modal.should.be.visible
      vm.number.should.be.eql(0)
      modalVm.cancel()
      // This doesn't work on phantomjs
      // modal.click()
      return utils.nextTick()
    }).then(function () {
      modal.should.not.be.visible
      vm.number.should.be.eql(5)
      vm.$broadcast('cancellableMessage', function () {
        vm.number = 10
      }, function () {
        vm.number = 5
      })
      return utils.nextTick()
    }).then(function () {
      modal.should.be.visible
      vm.number.should.be.eql(5)
      modal.find('button').click()
      return utils.nextTick()
    }).then(function () {
      modal.should.not.be.visible
      vm.number.should.be.eql(10)
      return utils.nextTick()
    }).then(done, done)
  })
})
