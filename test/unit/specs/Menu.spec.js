import Menu from '../../components/Menu'
import { vueTest } from '../utils'

describe('Menu', function () {
  let vm
  let menu
  before(() => {
    vm = vueTest(Menu)
    menu = vm.$('[for=v-menu]')
  })

  it('exists', function () {
    menu.should.exist
  })

  it('is upgraded', function () {
    menu.should.have.class('mdl-menu')
    menu.should.have.attr('data-upgraded')
    .match(/MaterialMenu/)
  })
})
