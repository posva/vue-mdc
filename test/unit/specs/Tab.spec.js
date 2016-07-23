import Tabs from '../../components/Tabs'
import { vueTest } from '../utils'

describe.only('Tabs', () => {
  let vm, simple, dynamicTabs
  before((done) => {
    vm = vueTest(Tabs)
    simple = vm.$('#tabs')
    dynamicTabs = vm.$('#dyn-tabs')
    vm.$nextTick(done)
  })

  function getTabs (el) {
    return [...el.querySelectorAll('.mdl-tabs__tab-bar .mdl-tabs__tab')]
  }

  function getPanels (el) {
    return [...el.querySelectorAll('.mdl-tabs__panel')]
  }

  function checkTabIsSelected (tabs, panels, index) {
    tabs.forEach((tab, i) => {
      if (i === index) tab.should.have.class('is-active')
      else tab.should.not.have.class('is-active')
    })
    panels.forEach((panel, i) => {
      if (i === index) panel.should.have.class('is-active')
      else panel.should.not.have.class('is-active')
    })
  }

  describe('tab as a string', () => {
    it('has a selected tab', (done) => {
      vm.selected = 'Tab 1'
      vm.nextTick()
        .then(() => {
          const tabs = getTabs(simple)
          const panels = getPanels(simple)
          tabs.should.have.lengthOf(3)
          panels.should.have.lengthOf(3)
          checkTabIsSelected(tabs, panels, 0)
          tabs[0].textContent.should.contain('Tab 1')
          tabs[1].textContent.should.contain('Tab 2')
          tabs[2].textContent.should.contain('Tab 3')
        }).then(done, done)
    })

    it('updates selected tab', (done) => {
      vm.selected.should.eql('Tab 1')
      vm.selected = 'Tab 2'
      vm.nextTick().then(() => {
        const tabs = getTabs(simple)
        const panels = getPanels(simple)
        tabs.should.have.lengthOf(3)
        panels.should.have.lengthOf(3)
        checkTabIsSelected(tabs, panels, 1)
      }).then(done, done)
    })

    it('create dynamic tabs', (done) => {
      vm.tabs = ['Extra Tab']
      vm.selected = 'Tab 1'
      vm.nextTick().then(() => {
        const tabs = getTabs(simple)
        const panels = getPanels(simple)
        tabs.should.have.lengthOf(4)
        panels.should.have.lengthOf(4)
        checkTabIsSelected(tabs, panels, 0)
        tabs[3].textContent.should.contain('Extra Tab')
        vm.tabs = []
        return vm.nextTick()
      }).then(done, done)
    })

    it('renames tabs', (done) => {
      vm.tabs = ['Extra Tab']
      vm.nextTick().then(() => {
        const tabs = getTabs(simple)
        tabs.should.have.lengthOf(4)
        tabs[3].textContent.should.contain('Extra Tab')
        tabs[3].textContent.should.not.contain('Extra Tab Two')
        vm.tabs = ['Extra Tab Two']
        return vm.nextTick()
      }).then(() => {
        const tabs = getTabs(simple)
        tabs.should.have.lengthOf(4)
        tabs[3].textContent.should.contain('Extra Tab Two')
        vm.tabs = []
        return vm.nextTick()
      }).then(done, done)
    })

    it('removes dynamic tabs', (done) => {
      vm.tabs = ['Home', 'Profile', 'Other']
      vm.selected = 'Tab 1'
      vm.nextTick().then(() => {
        const tabs = getTabs(simple)
        const panels = getPanels(simple)
        tabs.should.have.lengthOf(6)
        panels.should.have.lengthOf(6)
        checkTabIsSelected(tabs, panels, 0)
        tabs[3].textContent.should.contain('Home')
        tabs[4].textContent.should.contain('Profile')
        tabs[5].textContent.should.contain('Other')
        vm.tabs = ['Home', 'Other']
        return vm.nextTick()
      }).then(() => {
        const tabs = getTabs(simple)
        const panels = getPanels(simple)
        tabs.should.have.lengthOf(5)
        panels.should.have.lengthOf(5)
        checkTabIsSelected(tabs, panels, 0)
        tabs[3].textContent.should.contain('Home')
        tabs[4].textContent.should.contain('Other')
      }).then(done, done)
    })
  })

  describe('tab as an object', () => {
    it.skip('handles tabs with the same name', (done) => {
      vm.tabs.should.have.lengthOf(0)
      let tabs = getTabs(dynamicTabs)
      let panels = getPanels(dynamicTabs)
      tabs.should.have.lengthOf(0)
      panels.should.have.lengthOf(0)
      vm.selected = 0
      vm.tabs.push('Home')
      vm.tabs.push('Home')
      vm.tabs.push('Home')
      vm.selected = 0
      vm.nextTick()
        .then(() => {
          tabs = getTabs(dynamicTabs)
          panels = getPanels(dynamicTabs)

          tabs.should.have.lengthOf(3)
          panels.should.have.lengthOf(3)
          tabs[0].should.have.class('is-active')
          tabs[1].should.not.have.class('is-active')
          tabs[2].should.not.have.class('is-active')
          panels[0].should.have.class('is-active')
          panels[1].should.not.have.class('is-active')
          panels[2].should.not.have.class('is-active')
        }).then(done, done)
    })
  })
})
