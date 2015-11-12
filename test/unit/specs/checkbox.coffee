Vue = require 'vue'
utils = require '../utils.coffee'

describe 'Checkbox', ->
  mdlCbSelector = 'label[for=check]'
  check = null
  checkLabel = null
  before (done) ->
    app.currentComponent = 'checkbox'
    Vue.nextTick ->
      document.utils = utils
      check = $('#check')
      checkLabel = $('label[for=check]')
      done()
  it 'exists', ->
    check.should.exists
    check.should.have.prop 'type', 'checkbox'
  it 'is updraded', ->
    span = $ 'label[for=check] span:nth-child(2)'
    check.should.have.class 'mdl-checkbox__input'
    span.should.have.class 'mdl-checkbox__label'
    .and.have.text 'Check me'
  it 'is checked', ->
    check.should.be.checked
    #check.should.have.class 'is-checked'
  it 'can be unchecked', (done) ->
    vm.check = false
    utils.nextTick()
    .then ->
      check.should.not.be.checked
      checkLabel.should.not.have.class 'is-checked'
      vm.check = true
      utils.nextTick()
    .then ->
      check.should.be.checked
      checkLabel.should.have.class 'is-checked'
      done()
  it 'can be disabled', (done) ->
    check.should.be.enabled
    check.should.have.a.prop 'disabled', false
    checkLabel.should.not.have.class 'is-disabled'
    vm.disabled = true
    utils.nextTick()
    .then ->
      check.should.not.be.enabled
      check.should.have.a.prop 'disabled', true
      checkLabel.should.have.class 'is-disabled'
      done()
  it 'updates when disabled', (done) ->
    check.should.be.checked
    vm.check = false
    utils.nextTick()
    .then ->
      check.should.not.be.checked
      vm.check = true
      vm.disabled = false
    utils.nextTick()
    .then -> done()
  it 'keeps user added classes', ->
    $ 'label[for=check-dyn]'
    .should.have.class 'added-class'
  it 'can use an array', ->
    debugger
