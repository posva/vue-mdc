import Select from '../../components/Select'
import { vueTest, delay } from '../utils'

describe('Select', () => {
  let vm
  let select, menu, menuUl, selectVal
  before(() => {
    vm = vueTest(Select)
    select = vm.$('#select')
    selectVal = vm.$('#select-val')
    menu = vm.$('.mdl-textfield .mdl-menu__container')
    menuUl = vm.$('.mdl-textfield .mdl-menu__container ul')
  })

  it('exists', () => {
    select.should.exist
    select.should.have.attr('type', 'text')
  })

  it('is upgraded', () => {
    menu.should.exist
    select.should.have.class('mdl-textfield__input')
  })

  it('binds the value', (done) => {
    select.should.have.value('Russia')
    vm.country = 'Spain'
    vm.nextTick().then(() => {
      select.should.have.value('Spain')
      return vm.nextTick()
    }).then(done, done)
  })

  it.skip('shows a menu', (done) => {
    menuUl.should.have.css('clip').match(/rect\(0(px)? 0(px)? 0(px)? 0(px)?\)/)
    let changes = vm.changes
    select.click()
    vm.nextTick().then(() => {
      return delay(100)
    }).then(() => {
      menuUl.should.have.css('clip').match(/rect\(0(px)? [^0]/)
      menuUl.find('li:first').click()
      return vm.nextTick()
    }).then(() => {
      vm.country.should.equal('Russia')
      vm.changes.should.eql(changes + 1)
      return vm.nextTick()
    }).then(done, done)
  })

  it('uses an array of objects as options', (done) => {
    vm.countryVal = 'fr'
    selectVal.should.not.have.value('France')
    vm.nextTick().then(() => {
      selectVal.should.have.value('France')
      return vm.nextTick()
    }).then(done, done)
  })
})

