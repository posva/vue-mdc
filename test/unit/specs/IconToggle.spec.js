import IconToggle from '../../components/IconToggle'
import { vueTest } from '../utils'

describe('Icon toggle', () => {
  let vm
  let check, checkLabel
  before(() => {
    vm = vueTest(IconToggle)
    check = vm.$('#it')
    checkLabel = vm.$('label[for=it]')
  })

  it('exists', () => {
    check.should.exist
    check.should.have.attr('type', 'checkbox')
  })

  it('is upgraded', () => {
    let span = vm.$('label[for=it] i:nth-child(2)')
    check.should.have.class('mdl-icon-toggle__input')
    checkLabel.should.have.attr('data-upgraded')
    .match(/MaterialIconToggle/)
    span.should.have.class('mdl-icon-toggle__label')
  })

  it('is checked', () => {
    check.checked.should.be.true
    checkLabel.should.have.class('is-checked')
  })

  it('can change the icon', (done) => {
    let label = vm.$('label[for=dit] i:nth-child(2)')
    label.should.have.text('code')
    vm.icon = 'http'
    vm.nextTick()
    .then(() => {
      label.should.have.text('http')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can be unchecked', (done) => {
    vm.check = false
    vm.nextTick()
    .then(() => {
      check.checked.should.not.be.true
      checkLabel.should.not.have.class('is-checked')
      vm.check = true
      return vm.nextTick()
    }).then(() => {
      check.checked.should.be.true
      checkLabel.should.have.class('is-checked')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can be disabled', (done) => {
    check.disabled.should.be.false
    check.should.not.have.attr('disabled')
    checkLabel.should.not.have.class('is-disabled')
    vm.disabled = true
    vm.nextTick()
    .then(() => {
      check.disabled.should.be.true
      check.should.have.a.attr('disabled')
      checkLabel.should.have.class('is-disabled')
      return vm.nextTick()
    }).then(done, done)
  })

  it('updates when disabled', (done) => {
    check.checked.should.be.true
    vm.check = false
    vm.nextTick()
    .then(() => {
      check.checked.should.not.be.true
      vm.check = true
      vm.disabled = false
      return vm.nextTick()
    }).then(done, done)
  })

  it('keeps user added classes', () => {
    checkLabel.should.have.class('added-class')
  })

  it('can use an array', (done) => {
    let id0 = vm.$('#id-0')
    let id1 = vm.$('#id-1')
    let id2 = vm.$('#id-2')
    id0.checked.should.not.be.true
    id1.checked.should.not.be.true
    id2.checked.should.not.be.true
    vm.checks = ['id-0']
    vm.nextTick()
    .then(() => {
      id0.checked.should.be.true
      id1.checked.should.not.be.true
      id2.checked.should.not.be.true
      vm.checks = ['id-0', 'id-1']
      return vm.nextTick()
    }).then(() => {
      id0.checked.should.be.true
      id1.checked.should.be.true
      id2.checked.should.not.be.true
      vm.checks = ['id-1']
      return vm.nextTick()
    }).then(() => {
      id0.checked.should.not.be.true
      id1.checked.should.be.true
      id2.checked.should.not.be.true
      vm.checks = ['id-1', 'id-0']
      return vm.nextTick()
    }).then(() => {
      id0.checked.should.be.true
      id1.checked.should.be.true
      id2.checked.should.not.be.true
      return vm.nextTick()
    }).then(done, done)
  })
})
