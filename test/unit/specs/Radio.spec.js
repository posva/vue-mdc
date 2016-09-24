import Radio from '../../components/Radio'
import { vueTest } from '../utils'

describe('Radio', () => {
  let vm
  let big, bigLabel, check, checkLabel
  before(() => {
    vm = vueTest(Radio)
    check = vm.$('#banana')
    checkLabel = vm.$('label[for=banana]')
    big = vm.$('#big')
    bigLabel = vm.$('label[for=big]')
  })

  it('exists', () => {
    check.should.exist
    check.should.have.attr('type', 'radio')
  })

  it('is upgraded', () => {
    let span = vm.$('label[for=banana] span:nth-child(2)')
    check.should.have.class('mdl-radio__button')
    checkLabel.should.have.attr('data-upgraded')
    .match(/MaterialRadio/)
    span.should.have.class('mdl-radio__label')
    .and.have.text('Banana')
  })

  it('applies classes even with empty strings in props', () => {
    let radio = vm.$('[for=html-radio]')
    radio.should.have.class('is-disabled')
  })

  it('is checked', () => {
    check.checked.should.be.true
    checkLabel.should.have.class('is-checked')
  })

  it('can be unchecked', (done) => {
    vm.fruit = 'Kiwi'
    vm.nextTick()
    .then(() => {
      check.checked.should.not.be.true
      checkLabel.should.not.have.class('is-checked')
      vm.fruit = 'Banana'
      return vm.nextTick()
    }).then(() => {
      check.checked.should.be.true
      checkLabel.should.have.class('is-checked')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can be disabled', (done) => {
    big.disabled.should.be.false
    big.should.not.have.attr('disabled')
    bigLabel.should.not.have.class('is-disabled')
    vm.disabled = true
    vm.nextTick()
    .then(() => {
      big = vm.$('#big')
      bigLabel = vm.$('label[for=big]')
      big.disabled.should.be.true
      big.should.have.attr('disabled')
      bigLabel.should.have.class('is-disabled')
      return vm.nextTick()
    }).then(done, done)
  })

  it('updates when disabled', (done) => {
    big.should.be.not.checked
    vm.size = 'Big'
    vm.nextTick()
    .then(() => {
      big.checked.should.be.true
      vm.size = 'Little'
      vm.disabled = false
      return vm.nextTick()
    }).then(done, done)
  })

  it('keeps user added classes', () => {
    checkLabel.should.have.class('added-class')
  })
})
