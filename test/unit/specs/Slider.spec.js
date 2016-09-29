import Slider from '../../components/Slider'
import { vueTest } from '../utils'

describe('Slider', () => {
  let vm
  before(() => {
    vm = vueTest(Slider)
  })

  beforeEach((done) => {
    vm.min = 0
    vm.max = 100
    vm.step = 25
    vm.value = 25
    vm.$nextTick(done)
  })

  it('is upgraded', () => {
    const slider = vm.$('#slider')
    const input = vm.$('#slider input')
    slider.should.exist
    slider.should.have.class('mdl-slider__container')
    input.should.have.attr('data-upgraded')
    .match(/MaterialSlider/)
    input.should.have.attr('type', 'range')
    input.should.have.class('mdl-slider')
  })

  it('applies classes even with empty strings in props', () => {
    const slider = vm.$('#no-args-disabled input')
    slider.should.have.attr('disabled', 'disabled')
  })

  it('updates the value', (done) => {
    vm.value = 15
    vm.nextTick()
    .then(() => {
      const slider = vm.$('#slider input')
      slider.should.have.value('15')
      return vm.nextTick()
    }).then(done, done)
  })

  it('updates the step', (done) => {
    vm.step = 15
    vm.nextTick()
      .then(() => {
        const slider = vm.$('#step input')
        slider.should.have.attr('step', '15')
        return vm.nextTick()
      }).then(done, done)
  })

  it('updates the min', (done) => {
    vm.min = 5
    vm.nextTick()
      .then(() => {
        const slider = vm.$('#slider input')
        slider.should.have.attr('min', '5')
        return vm.nextTick()
      }).then(done, done)
  })

  it('updates the max', (done) => {
    vm.max = 50
    vm.nextTick()
      .then(() => {
        const slider = vm.$('#slider input')
        slider.should.have.attr('max', '50')
        return vm.nextTick()
      }).then(done, done)
  })

  it('has a default values', () => {
    const slider = vm.$('#default-values input')
    slider.should.have.attr('min', '0')
    slider.should.have.attr('step', '1')
  })

  it('displays the background according to value', (done) => {
    const lower = vm.$('#slider .mdl-slider__background-lower')
    const upper = vm.$('#slider .mdl-slider__background-upper')
    lower.should.have.attr('style')
      .match(/flex: 0.25[0-9]* 1 0%;/)
    upper.should.have.attr('style')
      .match(/flex: 0.75[0-9]* 1 0%;/)
    vm.value = 10
    vm.nextTick()
      .then(() => {
        const lower = vm.$('#slider .mdl-slider__background-lower')
        const upper = vm.$('#slider .mdl-slider__background-upper')
        lower.should.have.attr('style')
          .match(/flex: 0.10[0-9]* 1 0%;/)
        upper.should.have.attr('style')
          .match(/flex: 0.(90|89)[0-9]* 1 0%;/)
        return vm.nextTick()
      })
      .then(done, done)
  })

  it('displays the background according to value with a step', (done) => {
    vm.value = 20
    vm.$refs.step.relativeValue.should.be.within(0.24, 0.26)
    vm.nextTick()
      .then(() => {
        vm.$refs.step.relativeValue.should.be.within(0.24, 0.26)
        vm.value = 50
        return vm.nextTick()
      })
      .then(() => {
        vm.$refs.step.relativeValue.should.be.within(0.49, 0.51)
        return vm.nextTick()
      })
      .then(done, done)
  })

  it('displays the background according to value with a step with negative minimum', (done) => {
    vm.min = -100
    vm.value = -75
    vm.nextTick()
      .then(() => {
        vm.$refs.step.relativeValue.should.be.within(0.11, 0.13)
        vm.value = -100
        return vm.nextTick()
      })
      .then(() => {
        vm.$refs.step.relativeValue.should.equal(0)
        return vm.nextTick()
      })
      .then(done, done)
  })
})
