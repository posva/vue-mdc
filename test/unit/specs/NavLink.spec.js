import NavLink from '../../components/NavLink'
import { vueTest } from '../utils'

describe('NavLink', () => {
  let vm

  before((done) => {
    vm = vueTest(NavLink)
    vm.nextTick().then(done)
  })

  it('exists', () => {
    const el = vm.$('a')
    el.should.exist
    el.should.be.visible
    el.should.have.class('mdl-navigation__link')
    el.should.have.attr('href', '/href')
  })

  it('has icon', () => {
    const el = vm.$('a i')
    el.should.exist
    el.should.be.visible
    el.should.have.class('material-icons')
    el.should.have.text('account_box')
  })
})
