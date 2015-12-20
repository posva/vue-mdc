utils = require '../utils.coffee'

describe 'Textfield', ->
  classic = null
  expandable = null
  custom = null
  label = null
  before (done) ->
    app.currentComponent = 'textfield'
    utils.nextTick()
    .then ->
      classic = $ '#classic'
      expandable = $ '#expandable'
      custom = $ '#custom'
      label = $ 'label[for=classic]'
      utils.nextTick()
    .then done, done
  it 'exists', ->
    classic.should.exist
    classic.should.be.visible
  it 'is upgraded', ->
    parent = classic.parent().parent()
    classic.should.have.class 'mdl-textfield__input'
    parent.should.exist
    .and.have.attr 'data-upgraded'
    .match /MaterialTextfield/
  it 'applies classes even with empty strings in props', ->
    text = $ '#html-text'
    text.should.exist.and.be.a.textarea
  it 'starts with the right value', ->
    classic.should.have.value 'Hello textfield'
  it 'starts with the right value', (done) ->
    vm.text = 'New'
    utils.nextTick()
    .then ->
      classic.should.have.value 'New'
      utils.nextTick()
    .then done, done
  it 'can have user added classes', ->
    parent = classic.parent().parent()
    parent.should.have.class 'added-class'
  it 'can have a floating label', ->
    fly = $ '#fly'
    fly.parent().parent()
    .should.have.class 'mdl-textfield--floating-label'
    classic.parent().parent()
    .should.not.have.class 'mdl-textfield--floating-label'
  it 'can have a floating label using only folating-label', ->
    fly = $ '#fly2'
    fly.parent().parent()
    .should.have.class 'mdl-textfield--floating-label'
    $ '[for=fly2]'
    .should.have.text 'I fly'
  it 'can have a dynamic floating label using only folating-label', (done) ->
    dynLabel = $ '[for=fly-label-dyn]'
    dynLabel.should.have.text 'Dynamic floating label'
    vm.dynFloat = 'New label'
    utils.nextTick()
    .then ->
      dynLabel.should.have.text 'New label'
      utils.nextTick()
    .then done, done
  it 'links the label to the input', ->
    label.should.have.prop 'for', 'classic'
    classic.should.have.prop 'id', 'classic'
  it 'has a dynamic label', (done) ->
    fly = $ 'label[for=fly-dyn]'
    fly.should.have.text 'Can I fly? No'
    vm.float = true
    utils.nextTick()
    .then ->
      fly.should.have.text 'Can I fly? Yes'
      vm.float = false
      utils.nextTick()
    .then done, done
  it 'can be a textarea', ->
    textarea = $ 'textarea#textarea'
    textarea.should.exist
    textarea.parent().find 'input'
    .should.not.exist
  it 'has number of rows on textarea', (done) ->
    textarea = $ '#textarea'
    textarea.should.have.prop 'rows', 2
    vm.rows = 3
    utils.nextTick()
    .then ->
      textarea.should.have.prop 'rows', 3
      utils.nextTick()
    .then done, done
  it 'can have a pattern for validation', (done) ->
    number = $ '#number'
    number.should.have.prop 'pattern', '[0-9]*'
    vm.pattern = '[1-9][0-9]*'
    utils.nextTick()
    .then ->
      number.should.have.prop 'pattern', '[1-9][0-9]*'
      utils.nextTick()
    .then done, done
  it 'can have an error message', (done) ->
    number = $ '#number'
    error = number.parent().find '.mdl-textfield__error'
    error.should.exist
    classic.parent().find '.mdl-textfield__error'
    .should.not.exist
    error.should.have.text 'Nope'
    vm.error = 'No'
    utils.nextTick()
    .then ->
      error.should.have.text 'No'
      utils.nextTick()
    .then done, done
  it 'can change the type of the input', (done) ->
    classic.should.have.prop 'type', 'text'
    vm.type = 'number'
    utils.nextTick()
    .then ->
      classic.should.have.prop 'type', 'number'
      vm.type = 'text'
      vm.text = 'Hello Again'
      utils.nextTick()
    .then done, done
  it 'can have custom input', ->
    custom.should.exist
    .and.not.have.class 'mdl-textfield__input'
  it 'can have custom textarea', ->
    area = $ '#custom-area'
    area.should.exist
    area.parent().find '.mdl-textfield__input'
    .should.not.exist
  it 'can have custom label', ->
    label = custom.parent().find '.mdl-textfield__label'
    label.should.exist
    label.find 'i.material-icons'
    .should.exist.and.have.text 'vpn_key'
  it 'can have custom error', ->
    error = custom.parent().find '.mdl-textfield__error'
    error.should.exist
    error.find 'i.material-icons'
    .should.exist.and.have.text 'mood_bad'
  it 'can be expandable', ->
    expandable.should.exist
    classic.parent().should.not.have.class 'mdl-textfield__expandable-holder'
    expandable.parent().should.have.class 'mdl-textfield__expandable-holder'
  it 'has a variable icon as an expandable', ->
    icon = expandable.parent().parent().find 'i.material-icons'
    icon.should.exist.and.be.visible.and.have.text 'search'
    expandable.should.exist
  it 'starts with the right value as an expandable', ->
    expandable.should.have.value 'Hello Again'
  it 'can change value as an expandable', (done) ->
    vm.text = 'Search'
    utils.nextTick()
    .then ->
      expandable.should.have.value 'Search'
      utils.nextTick()
    .then done, done
