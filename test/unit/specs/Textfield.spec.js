import Textfield from '../../components/Textfield'
import { vueTest } from '../utils'

describe('Textfield', () => {
  let vm
  let classic, expandable, custom, label, textarea
  before(() => {
    vm = vueTest(Textfield)
    classic = vm.$('#classic')
    expandable = vm.$('#expandable')
    custom = vm.$('#custom')
    textarea = vm.$('#textarea')
    label = vm.$('label[for=classic]')
  })

  it('exists', () => {
    classic.should.exist
    classic.should.be.visible
  })

  it('is upgraded', () => {
    let parent = classic.parentElement.parentElement
    classic.should.have.class('mdl-textfield__input')
    parent.should.exist
    .and.have.attr('data-upgraded')
    .match(/MaterialTextfield/)
  })

  it('applies classes even with empty strings in props', () => {
    let text = vm.$('#html-text')
    text.should.exist.and.be.a.textarea
  })

  it('starts with the right value', () => {
    classic.should.have.value('Hello textfield')
  })

  it('starts with the right value', (done) => {
    vm.text = 'New'
    vm.nextTick()
    .then(() => {
      classic.should.have.value('New')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can have user added classes', () => {
    let parent = classic.parentElement.parentElement
    parent.should.have.class('added-class')
  })

  it('can have a floating label', () => {
    let fly = vm.$('#fly')
    fly.parentElement.parentElement
    .should.have.class('mdl-textfield--floating-label')
    classic.parentElement.parentElement
    .should.not.have.class('mdl-textfield--floating-label')
  })

  it('can have a floating label using only folating-label', () => {
    let fly = vm.$('#fly2')
    fly.parentElement.parentElement
    .should.have.class('mdl-textfield--floating-label')
    vm.$('[for=fly2]')
    .should.have.text('I fly')
  })

  it('can have a dynamic floating label using only folating-label', (done) => {
    let dynLabel = vm.$('[for=fly-label-dyn]')
    dynLabel.should.have.text('Dynamic floating label')
    vm.dynFloat = 'New label'
    vm.nextTick()
    .then(() => {
      dynLabel.should.have.text('New label')
      return vm.nextTick()
    }).then(done, done)
  })

  it('links the label to the input', () => {
    label.should.have.attr('for', 'classic')
    classic.should.have.attr('id', 'classic')
  })

  it('has a dynamic label', (done) => {
    let fly = vm.$('label[for=fly-dyn]')
    fly.should.have.text('Can I fly? No')
    vm.float = true
    vm.nextTick()
    .then(() => {
      fly.should.have.text('Can I fly? Yes')
      vm.float = false
      return vm.nextTick()
    }).then(done, done)
  })

  it('can be a textarea', () => {
    textarea = vm.$('textarea#textarea')
    textarea.should.exist
    should.not.exist(textarea.parentElement.querySelector('input'))
  })

  it('has number of rows on textarea', (done) => {
    textarea = vm.$('#textarea')
    textarea.should.have.attr('rows', '2')
    vm.rows = 3
    vm.nextTick()
    .then(() => {
      textarea.should.have.attr('rows', '3')
      return vm.nextTick()
    }).then(done, done)
  })

  it('syncs the value with a textarea', (done) => {
    textarea.should.not.have.value('Multiline')
    let oldText = vm.multiText
    vm.multiText = 'Multiline'
    vm.nextTick()
    .then(() => {
      textarea.should.have.value('Multiline')
      vm.multiText = oldText
      return vm.nextTick()
    }).then(done, done)
  })

  it('can have a pattern for validation', (done) => {
    let number = vm.$('#number')
    number.should.have.attr('pattern', '[0-9]*')
    vm.pattern = '[1-9][0-9]*'
    vm.nextTick()
    .then(() => {
      number.should.have.attr('pattern', '[1-9][0-9]*')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can have an error message', (done) => {
    let number = vm.$('#number')
    let error = number.parentElement.querySelector('.mdl-textfield__error')
    error.should.exist
    should.not.exist(classic.parentElement.querySelector('.mdl-textfield__error'))
    error.should.have.text('Nope')
    vm.error = 'No'
    vm.nextTick()
    .then(() => {
      error.should.have.text('No')
      return vm.nextTick()
    }).then(done, done)
  })

  it('can change the type of the input', (done) => {
    classic.should.have.attr('type', 'text')
    vm.type = 'number'
    vm.nextTick()
    .then(() => {
      classic.should.have.attr('type', 'number')
      vm.type = 'text'
      vm.text = 'Hello Again'
      return vm.nextTick()
    }).then(done, done)
  })

  it('can have custom input', () => {
    custom.should.exist
    .and.not.have.class('mdl-textfield__input'
    )
  })

  it('can have custom textarea', () => {
    let area = vm.$('#custom-area')
    area.should.exist
    should.not.exist(area.parentElement.querySelector('.mdl-textfield__input'))
  })

  it('can have custom label', () => {
    label = custom.parentElement.querySelector('.mdl-textfield__label')
    label.should.exist
    label.querySelector('i.material-icons')
    .should.exist.and.have.text('vpn_key')
  })

  it('can have custom error', () => {
    let error = custom.parentElement.querySelector('.mdl-textfield__error')
    error.should.exist
    error.querySelector('i.material-icons')
    .should.exist.and.have.text('mood_bad')
  })

  it('can be expandable', () => {
    expandable.should.exist
    classic.parentElement.should.not.have.class('mdl-textfield__expandable-holder')
    expandable.parentElement.should.have.class('mdl-textfield__expandable-holder')
  })

  it('has a variable icon as an expandable', () => {
    expandable.should.exist
    let icon = expandable.parentElement.parentElement.querySelector('i.material-icons')
    icon.should.exist.and.be.visible
    icon.should.have.text('search')
  })

  it('starts with the right value as an expandable', () => {
    expandable.should.have.value('Hello Again')
  })

  it('can change value as an expandable', (done) => {
    vm.text = 'Search'
    vm.nextTick()
    .then(() => {
      expandable.should.have.value('Search')
      return vm.nextTick()
    }).then(done, done)
  })

  it('updates mdl classes when value is changed outside of the input', (done) => {
    let testme = vm.$('#testme').parentElement.parentElement
    testme.should.not.have.class('is-dirty')
    vm.testme = 'hello'
    vm.nextTick()
    .then(() => {
      testme.should.have.class('is-dirty')
      vm.testme = ''
      return vm.nextTick()
    }).then(done, done)
  })

  it('shows the label when value is zero', (done) => {
    let testme = vm.$('#testme').parentElement.parentElement
    testme.should.not.have.class('is-dirty')
    vm.testme = 0
    vm.nextTick()
    .then(() => {
      testme.should.have.class('is-dirty')
      return vm.nextTick()
    }).then(done, done)
  })

  it('binds a required attr', () => {
    vm.$('#expandable').should.not.have.attr('required')
    vm.$('#required').should.have.attr('required')
    vm.$('#required-textarea').should.have.attr('required')
  })

  it('binds maxlength attr', () => {
    vm.$('#expandable').should.not.have.attr('maxlength')
    vm.$('#maxlength-input').should.have.attr('maxlength', '10')
    vm.$('#maxlength-textarea').should.have.attr('maxlength', '10')
  })
})
