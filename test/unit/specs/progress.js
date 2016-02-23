/* global describe it before vm $ app*/
import utils from '../utils'

describe('Progress', function () {
  let progress = null
  let indeterminate = null
  let pbar = null
  let bbar = null
  before(function (done) {
    app.currentComponent = 'progress'
    utils.nextTick()
    .then(function () {
      progress = $('#progress')
      indeterminate = $('#indeterminate')
      pbar = $('#progress .progressbar')
      bbar = $('#buffer .bufferbar')
      done()
    })
  })

  it('exists', function () {
    progress.should.exist
    progress.should.be.visible
  })

  it('is upgraded', function () {
    progress.should.have.class('mdl-progress')
    progress.should.have.attr('data-upgraded')
    .match(/MaterialProgress/)
  })

  it('applies classes even with empty strings in props', function () {
    let prog = $('#html-progress')
    prog.should.have.class('mdl-progress__indeterminate')
  })

  it('starts with the right value', function () {
    pbar.should.have.attr('style')
    .match(/width: 44%/)
  })

  it('can bufferize', function () {
    bbar.should.have.attr('style')
    .match(/width: 80%/)
  })

  it('updates if the variable does', function (done) {
    vm.progress = 80
    utils.nextTick()
    .then(function () {
      pbar.should.have.attr('style')
      .match(/width: 80%/)
      vm.buffer = 90
      return utils.nextTick()
    }).then(function () {
      bbar.should.have.attr('style')
      .match(/width: 90%/)
      return utils.nextTick()
    }).then(done, done)
  })

  it('can change to indeterminate', function (done) {
    indeterminate.should.not.have.class('mdl-progress__indeterminate')
    vm.indeterminate = true
    utils.nextTick()
    .then(function () {
      indeterminate.should.have.class('mdl-progress__indeterminate')
      return utils.nextTick()
    }).then(done, done)
  })
})
