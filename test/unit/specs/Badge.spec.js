import Badge from '../../components/Badge'
import { vueTest } from '../utils'

describe('Badge', () => {
  let vm
  let badge, badge2, hider, badgeOverlap, badgeNoBg

  before(() => {
    vm = vueTest(Badge)
    badge = vm.$('#badge')
    badge2 = vm.$('#badge-2')
    hider = vm.$('#hider')
    badgeOverlap = vm.$('#badge-overlap')
    badgeNoBg = vm.$('#badge-overlap')
  })

  it('exists', () => {
    badge.should.exist
    badge.should.be.visible
  })

  it('is upgraded', () => {
    badge.should.have.class('mdl-badge')
    badge2.should.have.class('mdl-badge')
  })

  it('can have no background', () => {
    badge.should.not.have.class('mdl-badge--no-background')
    badgeNoBg.should.have.class('mdl-badge--no-background')
  })

  it('can overlap', () => {
    badge.should.not.have.class('mdl-badge--overlap')
    badgeOverlap.should.have.class('mdl-badge--overlap')
  })

  it('can change the text', (done) => {
    badge.should.have.attr('data-badge', '♥')
    vm.badgeText = '8'
    vm.nextTick()
    .then(() => {
      badge.should.have.attr('data-badge', '8')
      return vm.nextTick()
    })
    .then(done, done)
  })

  it('can hide badge with function', (done) => {
    vm.badgeText = '0'
    vm.nextTick()
    .then(() => {
      hider.should.not.have.attr('data-badge')
      vm.badgeText = '2'
      return vm.nextTick()
    })
    .then(() => {
      hider.should.have.attr('data-badge', '2')
      return vm.nextTick()
    })
    .then(done, done)
  })

  it('can hide badge with number attribute', (done) => {
    const number = vm.$('#number')
    vm.badgeText = '0'
    vm.nextTick()
    .then(() => {
      number.should.not.have.attr('data-badge')
      vm.badgeText = '2'
      return vm.nextTick()
    })
    .then(() => {
      number.should.have.attr('data-badge', '2')
      return vm.nextTick()
    })
    .then(done, done)
  })

  it('can have hide-badge and .number at the same time', (done) => {
    hider = vm.$('#hider-multi')
    vm.badgeText = '0'
    vm.nextTick()
    .then(() => {
      hider.should.not.have.attr('data-badge')
      vm.badgeText = '2'
      return vm.nextTick()
    })
    .then(() => {
      hider.should.have.attr('data-badge', '2')
      vm.hide = true
      return vm.nextTick()
    })
    .then(() => {
      hider.should.not.have.attr('data-badge')
      vm.hide = false
      return vm.nextTick()
    })
    .then(() => {
      hider.should.have.attr('data-badge', '2')
      return vm.nextTick()
    })
    .then(done, done)
  })
})
