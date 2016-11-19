import Chip from '../../components/Chip'
import { vueTest } from '../utils'

describe('Chip', () => {
  let vm
  before((done) => {
    vm = vueTest(Chip)
    vm.$nextTick(done)
  })

  it('renders with text', () => {
    const el = vm.$('#chip')
    el.should.contain.text('Basic chip')
    el.should.not.have.class('mdl-chip--contact')
    el.should.not.have.class('mdl-chip--deletable')
  })

  it('renders with close button', () => {
    const el = vm.$('#delete')
    el.should.contain.text('Deletable chip')
    el.should.not.have.class('mdl-chip--contact')
    el.should.have.class('mdl-chip--deletable')
    const action = vm.$('#delete .mdl-chip__action')
    action.should.exist
    action.should.have.text('cancel')
  })

  it('has custom icon', (done) => {
    const action = vm.$('#delete .mdl-chip__action')
    action.should.have.text('cancel')
    vm.deleteIcon = 'star'
    vm.nextTick()
      .then(() => {
        action.should.have.text('star')
      })
      .then(done, done)
  })

  it('emits close event', (done) => {
    vm.deleted.should.be.false
    const action = vm.$('#delete .mdl-chip__action')
    action.click()
    vm.nextTick()
      .then(() => {
        vm.deleted.should.be.true
        vm.deleted = false
        return vm.nextTick()
      })
      .then(done, done)
  })

  it('renders text inside circle', (done) => {
    vm.$('#contact').should.have.class('mdl-chip--contact')
    const el = vm.$('#contact .mdl-chip__contact')
    el.should.contain.text(vm.contact)
    el.should.not.have.class('mdl-chip--deletable')
    vm.contact = 'A'
    vm.nextTick()
      .then(() => {
        el.should.have.text('A')
      })
      .then(done, done)
  })

  it('renders image inside circle', () => {
    vm.$('#image').should.have.class('mdl-chip--contact')
    const el = vm.$('#image .mdl-chip__contact')
    el.should.have.attr('src', 'https://getmdl.io/templates/dashboard/images/user.jpg')
    el.should.not.have.class('mdl-chip--deletable')
  })
})
