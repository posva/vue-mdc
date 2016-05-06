import Menu from '../../components/Menu'
import { vueTest } from '../utils'

describe('Menu', () => {
  let vm
  let menu
  before(() => {
    vm = vueTest(Menu)
    menu = vm.$('[for=v-menu]')
  })

  it('exists', () => {
    menu.should.exist
  })

  it('is upgraded', () => {
    menu.should.have.class('mdl-menu')
    menu.should.have.attr('data-upgraded')
    .match(/MaterialMenu/)
  })
})
