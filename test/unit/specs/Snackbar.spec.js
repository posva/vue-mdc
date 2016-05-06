import Snackbar from '../../components/Snackbar'
import { vueTest } from '../utils'

describe('Snackbar', () => {
  let vm
  let snackbar
  before(() => {
    vm = vueTest(Snackbar)
    snackbar = vm.$('#snackbar')
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

  it('shows with an event', (done) => {
    vm.$broadcast('mailSent', {
      message: 'Test event',
      actionText: 'Undo',
      actionHandler (event) {},
      timeout: 10
    })
    vm.nextTick()
    .then(() => {
      snackbar.querySelector('.mdl-snackbar__text').should.have.text('Test event')
      snackbar.querySelector('.mdl-snackbar__action').should.have.text('Undo')
      return vm.nextTick()
    }).then(done, done)
  })
})

