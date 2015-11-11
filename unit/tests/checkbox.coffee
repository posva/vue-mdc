Vue = require('vue')

describe 'Checkbox', ->
  mdlCbSelector = 'label[for=check]'
  check = null
  before (done) ->
    app.currentComponent = 'checkbox'
    Vue.nextTick ->
      check = $('#check')
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
  it 'can be unchecked', (done) ->
    vm.check = false
    Vue.nextTick ->
      check.should.not.be.checked
      done()
