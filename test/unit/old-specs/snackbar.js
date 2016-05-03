/* global describe it before $ app vm*/
import utils from '../utils'

describe('Snackbar', function () {
  let snackbar = null
  before(function (done) {
    app.currentComponent = 'snackbar'
    utils.nextTick()
    .then(function () {
      snackbar = $('#snackbar')
      done()
    })
  })

  it('exists', function () {
    snackbar.should.exist
    snackbar.should.be.visible
  })

  it('is upgraded', function () {
    snackbar.should.have.class('mdl-snackbar')
    snackbar.should.have.attr('data-upgraded')
    .match(/MaterialSnackbar/)
  })

  it('is hidden by default', function () {
    snackbar.find('.mdl-snackbar__text').should.be.empty
  })

  it('shows with an event', function (done) {
    vm.$broadcast('mailSent', {
      message: 'Test event',
      actionText: 'Undo',
      actionHandler (event) {},
      timeout: 10
    })
    utils.nextTick()
    .then(function () {
      snackbar.find('.mdl-snackbar__text').should.have.text('Test event')
      snackbar.find('.mdl-snackbar__action').should.have.text('Undo')
      return utils.nextTick()
    }).then(done, done)
  })
})

