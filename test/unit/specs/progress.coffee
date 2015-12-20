utils = require '../utils.coffee'

describe 'Progress', ->
  progress = null
  indeterminate = null
  pbar = null
  bbar = null
  before (done) ->
    app.currentComponent = 'progress'
    utils.nextTick()
    .then ->
      progress = $ '#progress'
      indeterminate = $ '#indeterminate'
      pbar = $ '#progress .progressbar'
      bbar = $ '#buffer .bufferbar'
      done()
  it 'exists', ->
    progress.should.exist
    progress.should.be.visible
  it 'is upgraded', ->
    progress.should.have.class 'mdl-progress'
    progress.should.have.attr 'data-upgraded'
    .match /MaterialProgress/
  it 'applies classes even with empty strings in props', ->
    prog = $ '#html-progress'
    prog.should.have.class 'mdl-progress__indeterminate'
  it 'starts with the right value', ->
    pbar.should.have.attr 'style'
    .match /width: 44%/
  it 'can bufferize', ->
    bbar.should.have.attr 'style'
    .match /width: 80%/
  it 'updates if the variable does', (done) ->
    vm.progress = 80
    utils.nextTick()
    .then ->
      pbar.should.have.attr 'style'
      .match /width: 80%/
      vm.buffer = 90
      utils.nextTick()
    .then ->
      bbar.should.have.attr 'style'
      .match /width: 90%/
      utils.nextTick()
    .then done, done
  it 'can change to indeterminate', (done) ->
    indeterminate.should.not.have.class 'mdl-progress__indeterminate'
    vm.indeterminate = true
    utils.nextTick()
    .then ->
      indeterminate.should.have.class 'mdl-progress__indeterminate'
      utils.nextTick()
    .then done, done
