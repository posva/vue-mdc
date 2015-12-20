utils = require '../utils.coffee'

describe 'Spinner', ->
  spinner = null
  spinnerMulti = null
  before (done) ->
    app.currentComponent = 'spinner'
    utils.nextTick()
    .then ->
      spinner = $ '#spinner'
      spinnerMulti = $ '#spinner-multi'
      done()
  it 'exists', ->
    spinner.should.exist
    spinner.should.be.visible
  it 'is upgraded', ->
    spinner.should.have.class 'mdl-spinner'
    spinner.should.have.attr 'data-upgraded'
    .match /MaterialSpinner/
  it 'applies classes even with empty strings in props', ->
    spin = $ '#html-spin'
    spin.should.have.class 'mdl-spinner--single-color'
  it 'is multi color by default', ->
    spinner.should.not.have.class 'mdl-spinner--single-color'
  it 'is active by default', ->
    spinner.should.have.class 'is-active'
  it 'can be inactive', (done) ->
    spinnerMulti.should.have.class 'is-active'
    vm.active = false
    utils.nextTick()
    .then ->
      spinnerMulti.should.not.have.class 'is-active'
      vm.active = true
      utils.nextTick()
    .then done, done
  it 'can be colorless', (done) ->
    spinnerMulti.should.not.have.class 'mdl-spinner--single-color'
    vm.color = true
    utils.nextTick()
    .then ->
      spinnerMulti.should.have.class 'mdl-spinner--single-color'
      utils.nextTick()
    .then done, done
  it 'can have user added classes', ->
    spinnerMulti.should.have.class 'added-class'
