import Snackbar from '../../components/Snackbar'
import { vueTest } from '../utils'

describe('Snackbar', () => {
  let vm
  let snackbar, sourceSnackbar
  before(() => {
    vm = vueTest(Snackbar)
    snackbar = vm.$('#snackbar')
    sourceSnackbar = vm.$('#source')
  })

  it('exists', () => {
    snackbar.should.exist
    snackbar.should.be.visible
  })

  it('is upgraded', () => {
    snackbar.should.have.class('mdl-snackbar')
    snackbar.should.have.attr('data-upgraded')
    .match(/MaterialSnackbar/)
  })

  it('is hidden by default', () => {
    snackbar.querySelector('.mdl-snackbar__text').should.be.empty
  })

  it('shows the snackbar by emitting events on $root by default', (done) => {
    vm.$root.$emit('sendMail', { message: 'Test event', actionText: 'Undo', actionHandler: (ev) => { }, timeout: 100 })
    vm.nextTick()
    .then(() => {
      snackbar.querySelector('.mdl-snackbar__text').should.have.text('Test event')
      snackbar.querySelector('.mdl-snackbar__action').should.have.text('Undo')
      return vm.nextTick()
    }).then(done, done)
  })

  it('shows the snackbar by emitting events on specified event source', (done) => {
    vm.bus.$emit('sendMail', { message: 'Test event', actionText: 'Undo', actionHandler: (ev) => { }, timeout: 100 })
    vm.nextTick()
    .then(() => {
      sourceSnackbar.querySelector('.mdl-snackbar__text').should.have.text('Test event')
      sourceSnackbar.querySelector('.mdl-snackbar__action').should.have.text('Undo')
      return vm.nextTick()
    }).then(done, done)
  })
})

