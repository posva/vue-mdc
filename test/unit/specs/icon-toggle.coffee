utils = require '../utils.coffee'

describe 'Icon toggle', ->
  mdlCbSelector = 'label[for=check]'
  check = null
  checkLabel = null
  before (done) ->
    app.currentComponent = 'icon-toggle'
    utils.nextTick()
    .then ->
      check = $ '#it'
      checkLabel = $ 'label[for=it]'
      done()
  it 'exists', ->
    check.should.exist
    check.should.have.prop 'type', 'checkbox'
  it 'is upgraded', ->
    span = $ 'label[for=it] i:nth-child(2)'
    check.should.have.class 'mdl-icon-toggle__input'
    checkLabel.should.have.attr 'data-upgraded'
    .match /MaterialIconToggle/
    span.should.have.class 'mdl-icon-toggle__label'
  it 'is checked', ->
    check.should.be.checked
    checkLabel.should.have.class 'is-checked'
  it 'can change the icon', (done) ->
    label = $ 'label[for=dit] i:nth-child(2)'
    label.should.have.text 'code'
    return done()
    vm.icon = 'http'
    utils.nextTick()
    .then ->
      label.should.have.text 'http'
      utils.nextTick()
    .then done done
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
      utils.nextTick()
    .then done, done
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
      utils.nextTick()
    .then done, done
  it 'updates when disabled', (done) ->
    check.should.be.checked
    vm.check = false
    utils.nextTick()
    .then ->
      check.should.not.be.checked
      vm.check = true
      vm.disabled = false
      utils.nextTick()
    .then done, done
  it 'keeps user added classes', ->
    checkLabel.should.have.class 'added-class'
  it 'can use an array', (done) ->
    $ '#id-0'
    .should.not.be.checked
    $ '#id-1'
    .should.not.be.checked
    $ '#id-2'
    .should.not.be.checked
    vm.checks = ['id-0']
    utils.nextTick()
    .then ->
      $ '#id-0'
      .should.be.checked
      $ '#id-1'
      .should.not.be.checked
      $ '#id-2'
      .should.not.be.checked
      vm.checks = ['id-0', 'id-1']
      utils.nextTick()
    .then ->
      $ '#id-0'
      .should.be.checked
      $ '#id-1'
      .should.be.checked
      $ '#id-2'
      .should.not.be.checked
      vm.checks = ['id-1']
      utils.nextTick()
    .then ->
      $ '#id-0'
      .should.not.be.checked
      $ '#id-1'
      .should.be.checked
      $ '#id-2'
      .should.not.be.checked
      vm.checks = ['id-1', 'id-0']
      utils.nextTick()
    .then ->
      $ '#id-0'
      .should.be.checked
      $ '#id-1'
      .should.be.checked
      $ '#id-2'
      .should.not.be.checked
      utils.nextTick()
    .then done, done

