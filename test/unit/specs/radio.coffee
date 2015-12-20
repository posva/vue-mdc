utils = require '../utils.coffee'

describe 'Radio', ->
  mdlCbSelector = 'label[for=check]'
  big = null
  bigLabel = null
  check = null
  checkLabel = null
  before (done) ->
    app.currentComponent = 'radio'
    utils.nextTick()
    .then ->
      check = $ '#banana'
      checkLabel = $ 'label[for=banana]'
      big = $ '#big'
      bigLabel = $ 'label[for=big]'
      done()
  it 'exists', ->
    check.should.exist
    check.should.have.prop 'type', 'radio'
  it 'is upgraded', ->
    span = $ 'label[for=banana] span:nth-child(2)'
    check.should.have.class 'mdl-radio__button'
    checkLabel.should.have.attr 'data-upgraded'
    .match /MaterialRadio/
    span.should.have.class 'mdl-radio__label'
    .and.have.text 'Banana'
  it 'applies classes even with empty strings in props', ->
    radio = $ '[for=html-radio]'
    radio.should.have.class 'is-disabled'
  it 'is checked', ->
    check.should.be.checked
    checkLabel.should.have.class 'is-checked'
  it 'can be unchecked', (done) ->
    vm.fruit = 'Kiwi'
    utils.nextTick()
    .then ->
      check.should.not.be.checked
      checkLabel.should.not.have.class 'is-checked'
      vm.fruit = 'Banana'
      utils.nextTick()
    .then ->
      check.should.be.checked
      checkLabel.should.have.class 'is-checked'
      utils.nextTick()
    .then done, done
  it 'can be disabled', (done) ->
    big.should.be.enabled
    big.should.have.a.prop 'disabled', false
    bigLabel.should.not.have.class 'is-disabled'
    vm.disabled = true
    utils.nextTick()
    .then ->
      big.should.not.be.enabled
      big.should.have.a.prop 'disabled', true
      bigLabel.should.have.class 'is-disabled'
      utils.nextTick()
    .then done, done
  it 'updates when disabled', (done) ->
    big.should.be.not.checked
    vm.size = 'Big'
    utils.nextTick()
    .then ->
      big.should.be.checked
      vm.size = 'Little'
      vm.disabled = false
      utils.nextTick()
    .then done, done
  it 'keeps user added classes', ->
    checkLabel.should.have.class 'added-class'

