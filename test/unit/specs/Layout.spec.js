import Layout from '../../components/Layout'
import { vueTest } from '../utils'

describe('Layout', () => {
  let vm
  let layout
  function propChecker (prop) {
    let lay = vm.$('#layout')
    lay.should.not.have.class('mdl-layout--' + prop)
    let variable = prop

    if (prop === 'fixed-header') {
      variable = 'fixedHeader'
    } else if (prop === 'fixed-drawer') {
      variable = 'fixedDrawer'
    } else if (prop === 'fixed-tabs') {
      variable = 'fixedTabs'
    }

    vm[variable] = true
    return vm.nextTick()
      .then(() => {
        lay.should.have.class('mdl-layout--' + prop)
        vm[variable] = false
        return vm.nextTick()
      }).then(() => {
        lay.should.not.have.class('mdl-layout--' + prop)
        return vm.nextTick()
      })
  }

  before(() => {
    vm = vueTest(Layout)
    layout = vm.$('#layout')
  })

  it('exists', () => {
    layout.should.exist
  })

  it('is upgraded', () => {
    layout.should.have.class('mdl-layout')
    layout.should.have.attr('data-upgraded')
    .match(/MaterialLayout/)
  })

  it('can have fixed header', (done) => {
    propChecker('fixed-header')
    .then(done, done)
  })

  it('can have fixed drawer', (done) => {
    propChecker('fixed-drawer')
    .then(done, done)
  })
})
