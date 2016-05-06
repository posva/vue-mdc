import Slider from '../../components/Slider'
import { vueTest } from '../utils'

describe('Slider', () => {
  let vm
  let slider, disable
  before(() => {
    vm = vueTest(Slider)
    slider = vm.$('#slider')
    disable = vm.$('#disable')
  })

  it('exists', () => {
    slider.should.exist
    slider.should.have.attr('type', 'range')
  })

  it('is upgraded', () => {
    slider.should.have.class('mdl-slider')
    slider.should.have.attr('data-upgraded')
    .match(/MaterialSlider/)
  })

  it('applies classes even with empty strings in props', () => {
    let slid = vm.$('#html-slider')
    slid.should.have.attr('disabled', 'disabled')
  })

  it('starts with the right value', () => {
    slider.should.have.value('25')
  })

  it('updates the value', (done) => {
    vm.value = 15
    vm.nextTick()
    .then(() => {
      slider.should.have.value('15')
      return vm.nextTick()
    }).then(done, done)
  })

  it('takes into account step', () => {
    disable.should.have.value('25')
  })

  it('always takes nearest value', (done) => {
    disable.should.have.value('25')
    vm.value = 13
    vm.nextTick()
    .then(() => {
      disable.should.have.value('25')
      vm.value = 12
      return vm.nextTick()
    }).then(() => {
      disable.should.have.value('0')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can change the step', (done) => {
    vm.step = 10
    vm.nextTick()
    .then(() => {
      disable.should.have.attr('step', '10')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can change the min', (done) => {
    vm.min = 10
    vm.nextTick()
    .then(() => {
      slider.should.have.attr('min', '10')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can change the max', (done) => {
    vm.max = 10
    vm.nextTick()
    .then(() => {
      slider.should.have.attr('max', '10')
      vm.max = 100
      return vm.nextTick()
    }).then(done, done)
  })

  it('adapts to the min value', (done) => {
    slider.should.not.have.value('50')
    vm.min = 50
    vm.nextTick()
    .then(() => {
      slider.should.have.value('50')
      return vm.nextTick()
    }).then(done, done)
  })

  it('but keeps the value outdated from min', () => {
    vm.value.should.equal(12)
  })

  it('adapts to the max value', (done) => {
    vm.value = 99
    vm.nextTick()
    .then(() => {
      slider.should.have.value('99')
      vm.max = 75
      return vm.nextTick()
    }).then(() => {
      slider.should.have.value('75')
      return vm.nextTick()
    }).then(done, done)
  })

  it('but keeps the value outdated max', () => {
    vm.value.should.equal(99)
  })
})
