/* global describe it before vm $ app*/
import utils from '../utils'

describe('Textfield', function () {
  let classic = null
  let expandable = null
  let custom = null
  let label = null
  let textarea = null
  before(function (done) {
    app.currentComponent = 'textfield'
    utils.nextTick()
    .then(function () {
      classic = $('#classic')
      expandable = $('#expandable')
      custom = $('#custom')
      textarea = $('#textarea')
      label = $('label[for=classic]')
      return utils.nextTick()
    }).then(done, done)
  })

  it('exists', function () {
    classic.should.exist
    classic.should.be.visible
  })

  it('is upgraded', function () {
    let parent = classic.parent().parent()
    classic.should.have.class('mdl-textfield__input')
    parent.should.exist
    .and.have.attr('data-upgraded')
    .match(/MaterialTextfield/)
  })

  it('applies classes even with empty strings in props', function () {
    let text = $('#html-text')
    text.should.exist.and.be.a.textarea
  })

  it('starts with the right value', function () {
    classic.should.have.value('Hello textfield')
  })

  it('starts with the right value', function (done) {
    vm.text = 'New'
    utils.nextTick()
    .then(function () {
      classic.should.have.value('New')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can have user added classes', function () {
    let parent = classic.parent().parent()
    parent.should.have.class('added-class')
  })

  it('can have a floating label', function () {
    let fly = $('#fly')
    fly.parent().parent()
    .should.have.class('mdl-textfield--floating-label')
    classic.parent().parent()
    .should.not.have.class('mdl-textfield--floating-label')
  })

  it('can have a floating label using only folating-label', function () {
    let fly = $('#fly2')
    fly.parent().parent()
    .should.have.class('mdl-textfield--floating-label')
    $('[for=fly2]')
    .should.have.text('I fly')
  })

  it('can have a dynamic floating label using only folating-label', function (done) {
    let dynLabel = $('[for=fly-label-dyn]')
    dynLabel.should.have.text('Dynamic floating label')
    vm.dynFloat = 'New label'
    utils.nextTick()
    .then(function () {
      dynLabel.should.have.text('New label')
      return utils.nextTick()
    }).then(done, done)
  })

  it('links the label to the input', function () {
    label.should.have.prop('for', 'classic')
    classic.should.have.prop('id', 'classic')
  })

  it('has a dynamic label', function (done) {
    let fly = $('label[for=fly-dyn]')
    fly.should.have.text('Can I fly? No')
    vm.float = true
    utils.nextTick()
    .then(function () {
      fly.should.have.text('Can I fly? Yes')
      vm.float = false
      return utils.nextTick()
    }).then(done, done)
  })

  it('can be a textarea', function () {
    textarea = $('textarea#textarea')
    textarea.should.exist
    textarea.parent().find('input')
    .should.not.exist
  })

  it('has number of rows on textarea', function (done) {
    textarea = $('#textarea')
    textarea.should.have.prop('rows', 2)
    vm.rows = 3
    utils.nextTick()
    .then(function () {
      textarea.should.have.prop('rows', 3)
      return utils.nextTick()
    }).then(done, done)
  })

  it('syncs the value with a textarea', function (done) {
    textarea.should.not.have.value('Multiline')
    let oldText = vm.multiText
    vm.multiText = 'Multiline'
    utils.nextTick()
    .then(function () {
      textarea.should.have.value('Multiline')
      vm.multiText = oldText
      return utils.nextTick()
    }).then(done, done)
  })

  it('can have a pattern for validation', function (done) {
    let number = $('#number')
    number.should.have.prop('pattern', '[0-9]*')
    vm.pattern = '[1-9][0-9]*'
    utils.nextTick()
    .then(function () {
      number.should.have.prop('pattern', '[1-9][0-9]*')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can have an error message', function (done) {
    let number = $('#number')
    let error = number.parent().find('.mdl-textfield__error')
    error.should.exist
    classic.parent().find('.mdl-textfield__error')
    .should.not.exist
    error.should.have.text('Nope')
    vm.error = 'No'
    utils.nextTick()
    .then(function () {
      error.should.have.text('No')
      return utils.nextTick()
    }).then(done, done)
  })

  it('can change the type of the input', function (done) {
    classic.should.have.prop('type', 'text')
    vm.type = 'number'
    utils.nextTick()
    .then(function () {
      classic.should.have.prop('type', 'number')
      vm.type = 'text'
      vm.text = 'Hello Again'
      return utils.nextTick()
    }).then(done, done)
  })

  it('can have custom input', function () {
    custom.should.exist
    .and.not.have.class('mdl-textfield__input'
    )
  })

  it('can have custom textarea', function () {
    let area = $('#custom-area')
    area.should.exist
    area.parent().find('.mdl-textfield__input')
    .should.not.exist
  })

  it('can have custom label', function () {
    label = custom.parent().find('.mdl-textfield__label')
    label.should.exist
    label.find('i.material-icons')
    .should.exist.and.have.text('vpn_key')
  })

  it('can have custom error', function () {
    let error = custom.parent().find('.mdl-textfield__error')
    error.should.exist
    error.find('i.material-icons')
    .should.exist.and.have.text('mood_bad')
  })

  it('can be expandable', function () {
    expandable.should.exist
    classic.parent().should.not.have.class('mdl-textfield__expandable-holder')
    expandable.parent().should.have.class('mdl-textfield__expandable-holder')
  })

  it('has a variable icon as an expandable', function () {
    let icon = expandable.parent().parent().find('i.material-icons')
    icon.should.exist.and.be.visible.and.have.text('search')
    expandable.should.exist
  })

  it('starts with the right value as an expandable', function () {
    expandable.should.have.value('Hello Again')
  })

  it('can change value as an expandable', function (done) {
    vm.text = 'Search'
    utils.nextTick()
    .then(function () {
      expandable.should.have.value('Search')
      return utils.nextTick()
    }).then(done, done)
  })
})
