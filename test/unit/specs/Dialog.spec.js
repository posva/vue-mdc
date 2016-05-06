import Dialog from '../../components/Dialog'
import { vueTest } from '../utils'

describe('Dialog', () => {
  let vm
  let info
  before(() => {
    vm = vueTest(Dialog)
    info = vm.$('#info')
  })

  it('exists and is hidden', () => {
    info.should.exist
    info.should.not.be.visible
  })

  it('shows with an event', (done) => {
    vm.$broadcast('infoMessage')
    vm.nextTick()
    .then(() => {
      info.should.be.visible
      info.querySelector('button').click()
      return vm.nextTick()
    }).then(() => {
      info.should.not.be.visible
    }).then(done, done)
  })

  it('has a title', () => {
    info.querySelector('.mdl-dialog__title').should.have.text('Info message')
  })

  it('has a description', () => {
    info.querySelector('.mdl-dialog__content').should.have.text('This is a modal example')
  })

  it('call a callback', (done) => {
    const modal = vm.$('#callback')
    vm.number.should.be.eql(0)
    vm.$broadcast('messageWithCallback', () => vm.number++)
    vm.nextTick()
    .then(() => {
      vm.number.should.be.eql(0)
      modal.querySelector('button').click()
      return vm.nextTick()
    }).then(() => {
      vm.number.should.be.eql(1)
    }).then(done, done)
  })

  it('calls a callback without closing', (done) => {
    const modal = vm.$('#multiple')
    vm.number = 0
    vm.$broadcast('multipleActionsMessage', () => {
      vm.number++
      return false
    }, () => vm.number--)
    modal.should.not.be.visible
    vm.nextTick()
    .then(() => {
      vm.number.should.be.eql(0)
      modal.should.be.visible
      modal.querySelector('button:nth-child(1)').click()
      return vm.nextTick()
    }).then(() => {
      modal.should.be.visible
      vm.number.should.be.eql(1)
      modal.querySelector('button:nth-child(1)').click()
      return vm.nextTick()
    }).then(() => {
      modal.should.be.visible
      vm.number.should.be.eql(2)
      modal.querySelector('button:nth-child(2)').click()
      return vm.nextTick()
    }).then(() => {
      modal.should.not.be.visible
      vm.number.should.be.eql(1)
      return vm.nextTick()
    }).then(done, done)
  })

  it('calls a different function when cancelling', (done) => {
    let modal = vm.$('#cancellable')
    vm.number = 0
    vm.$broadcast('cancellableMessage', () => {
      vm.number = 10
    }, () => {
      vm.number = 5
    })

    let modalVm = vm.$children[5]

    vm.nextTick()
    .then(() => {
      modal.should.be.visible
      vm.number.should.be.eql(0)
      modalVm.cancel()
      // This doesn't work on phantomjs
      // modal.click()
      return vm.nextTick()
    }).then(() => {
      modal.should.not.be.visible
      vm.number.should.be.eql(5)
      vm.$broadcast('cancellableMessage', () => {
        vm.number = 10
      }, () => {
        vm.number = 5
      })
      return vm.nextTick()
    }).then(() => {
      modal.should.be.visible
      vm.number.should.be.eql(5)
      modal.querySelector('button').click()
      return vm.nextTick()
    }).then(() => {
      modal.should.not.be.visible
      vm.number.should.be.eql(10)
      return vm.nextTick()
    }).then(done, done)
  })
})
