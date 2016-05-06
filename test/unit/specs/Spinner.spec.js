import Spinner from '../../components/Spinner'
import { vueTest } from '../utils'

describe('Spinner', () => {
  let vm
  let spinner, spinnerMulti
  before(() => {
    vm = vueTest(Spinner)
    spinner = vm.$('#spinner')
    spinnerMulti = vm.$('#spinner-multi')
  })

  it('exists', () => {
    spinner.should.exist
    spinner.should.be.visible
  })

  it('is upgraded', () => {
    spinner.should.have.class('mdl-spinner')
    spinner.should.have.attr('data-upgraded')
    .match(/MaterialSpinner/)
  })

  it('applies classes even with empty strings in props', () => {
    let spin = vm.$('#html-spin')
    spin.should.have.class('mdl-spinner--single-color')
  })

  it('is multi color by default', () => {
    spinner.should.not.have.class('mdl-spinner--single-color')
  })

  it('is active by default', () => {
    spinner.should.have.class('is-active')
  })

  it('can be inactive', (done) => {
    spinnerMulti.should.have.class('is-active')
    vm.active = false
    vm.nextTick()
    .then(() => {
      spinnerMulti.should.not.have.class('is-active')
      vm.active = true
      return vm.nextTick()
    }).then(done, done)
  })

  it('can be colorless', (done) => {
    spinnerMulti.should.not.have.class('mdl-spinner--single-color')
    vm.color = true
    vm.nextTick()
    .then(() => {
      spinnerMulti.should.have.class('mdl-spinner--single-color')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can have user added classes', () => {
    spinnerMulti.should.have.class('added-class')
  })
})

