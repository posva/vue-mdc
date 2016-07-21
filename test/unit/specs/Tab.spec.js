import Tabs from '../../components/Tabs'
import { vueTest } from '../utils'

describe.only('Tabs', () => {
  let vm, simple, three, dynamicTabs
  before((done) => {
    vm = vueTest(Tabs)
    simple = vm.$('#tabs')
    three = vm.$('#three-tabs')
    dynamicTabs = vm.$('#dyn-tabs')
    three
    dynamicTabs
    vm.$nextTick(done)
  })

  function getTab (tabs, index) {
    return tabs.querySelectorAll('.mdl-tabs__tab-bar .mdl-tabs__tab')[index]
  }

  function getPanel (tabs, index) {
    return tabs.querySelectorAll('.mdl-tabs__panel')[index]
  }

  it('has a selected tab', () => {
    const tab = getTab(simple, vm.selected)
    should.exist(tab)
    tab.should.have.class('is-active')

    const panel = getPanel(simple, vm.selected)
    should.exist(panel)
    panel.should.have.class('is-active')
  })

  it('updates selected tab', (done) => {
    vm.selected = 1
    vm.nextTick().then(() => {
      const tab = getTab(simple, vm.selected)
      should.exist(tab)
      tab.should.have.class('is-active')
      getTab(simple, 0).should.not.have.class('is-active')

      const panel = getPanel(simple, vm.selected)
      should.exist(panel)
      panel.should.have.class('is-active')
      getPanel(simple, 0).should.not.have.class('is-active')
    }).then(done, done)
  })
})
