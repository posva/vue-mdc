import Dialog from '../../components/Dialog'
import { vueTest } from '../utils'

describe('Dialog', () => {
  let vm
  let info
  before(() => {
    vm = vueTest(Dialog)
    info = vm.$('#info')
  })

  it('exists and is hidden', () => {
    info.should.exist
    info.should.not.be.visible
  })

  it('opens', (done) => {
    const dialog = vm.$refs.info
    dialog.$el.style.should.have.property('display', 'none')
    // for some reason stubs doesn't work...
    vm.events.should.have.length(0)
    vm.$refs.info.open()
    vm.nextTick()
    .then(() => {
      vm.events.should.have.length(1)
      dialog.$el.style.should.not.have.property('display', 'none')
      info.querySelector('button').click()
      return vm.nextTick()
    }).then(() => {
      dialog.$el.style.should.have.property('display', 'none')
      vm.events.should.have.length(2)
    }).then(done, done)
  })

  it('has a title', () => {
    info.querySelector('.mdl-dialog__title').should.have.text('Info message')
  })

  it('has a description', () => {
    info.querySelector('.mdl-dialog__content').should.have.text('This is a modal example')
  })
})
