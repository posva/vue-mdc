import Badge from '../../components/Badge'
import { vueTest } from '../utils'

function testClassToggling ({ vm, selector, variable, cssClass }) {
  vm[variable] = true
  return vm.nextTick()
    .then(() => {
      const badge = vm.$(selector)
      badge.should.have.class(cssClass)
      vm[variable] = false
      return vm.nextTick()
    })
    .then(() => {
      const badge = vm.$(selector)
      badge.should.not.have.class(cssClass)
      vm[variable] = false
    })
}

describe('Badge', () => {
  let vm

  before((done) => {
    vm = vueTest(Badge)
    vm.nextTick().then(done)
  })

  it('exists', () => {
    const badge = vm.$('#badge')
    badge.should.exist
    badge.should.be.visible
  })

  it('is upgraded', (done) => {
    vm.badgeText = '3'
    vm.nextTick()
      .then(() => {
        const badge = vm.$('#badge')
        badge.should.have.class('mdl-badge')
        badge.should.have.attr('data-badge', '3')
      })
      .then(done, done)
  })

  it('can have no background', (done) => {
    const selector = '#badge'
    const variable = 'noBackground'
    const cssClass = 'mdl-badge--no-background'
    testClassToggling({ vm, selector, variable, cssClass })
      .then(() => {
        const badge = vm.$(selector)
        badge.should.have.class('mdl-badge')
        return vm.nextTick()
      })
      .then(done, done)
  })

  it('can overlap', (done) => {
    const selector = '#badge'
    const variable = 'overlap'
    const cssClass = 'mdl-badge--overlap'
    testClassToggling({ vm, selector, variable, cssClass })
      .then(() => {
        const badge = vm.$(selector)
        badge.should.have.class('mdl-badge')
        return vm.nextTick()
      })
      .then(done, done)
  })

  it('can hide the badge', (done) => {
    vm.badgeText = ''
    vm.nextTick()
      .then(() => {
        const badge = vm.$('#badge')
        badge.should.have.class('mdl-badge')
        badge.should.not.have.attr('data-badge')
        vm.badgeText = '1'
        return vm.nextTick()
      })
      .then(() => {
        const badge = vm.$('#badge')
        badge.should.have.class('mdl-badge')
        badge.should.have.attr('data-badge', '1')
        return vm.nextTick()
      })
      .then(done, done)
  })

  it('can hide badge with boolean', (done) => {
    vm.hide = true
    vm.badgeText = '1'
    vm.nextTick()
      .then(() => {
        const badge = vm.$('#badge')
        badge.should.have.class('mdl-badge')
        badge.should.not.have.attr('data-badge')
        vm.hide = false
        return vm.nextTick()
      })
      .then(() => {
        const badge = vm.$('#badge')
        badge.should.have.class('mdl-badge')
        badge.should.have.attr('data-badge', '1')
        return vm.nextTick()
      })
      .then(done, done)
  })
})
