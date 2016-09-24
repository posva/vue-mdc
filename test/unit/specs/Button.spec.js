import Button from '../../components/Button'
import { vueTest } from '../utils'

describe('Button', () => {
  let vm
  let button
  function propChecker (prop) {
    let but = vm.$('#button')
    but.should.not.have.class('mdl-button--' + prop)
    let variable = prop
    if (prop === 'mini-fab') {
      variable = 'miniFab'
    }
    vm[variable] = true
    return vm.nextTick()
      .then(() => {
        but.should.have.class('mdl-button--' + prop)
        vm[variable] = false
        return vm.nextTick()
      }).then(() => {
        but.should.not.have.class('mdl-button--' + prop)
        return vm.nextTick()
      })
  }

  before(() => {
    vm = vueTest(Button)
    button = vm.$('#button')
  })

  it('exists', () => {
    button.should.exist
    button.should.be.visible
  })

  it('is upgraded', () => {
    button.should.have.class('mdl-button')
    button.should.have.attr('data-upgraded')
    .match(/MaterialButton/)
  })

  it('can be an anchor link', () => {
    vm.$('a#anchor-button').should.exist
  })

  it('can be colored', (done) => {
    propChecker('colored')
    .then(done, done)
  })

  it('can be raised', (done) => {
    propChecker('raised')
    .then(done, done)
  })

  it('can be fab', (done) => {
    propChecker('fab')
    .then(done, done)
  })

  it('can be mini-fab', (done) => {
    propChecker('mini-fab')
    .then(done, done)
  })

  it('can be primary', (done) => {
    propChecker('primary')
    .then(done, done)
  })

  it('can be accent', (done) => {
    propChecker('accent')
    .then(done, done)
  })

  it('can be icon', (done) => {
    propChecker('icon')
    .then(done, done)
  })

  it('has the correct icon element when specified', (done) => {
    let but = vm.$('#icon-button')
    vm.icon = 'content_copy'

    vm.nextTick().then(() => {
      let i = but.querySelector('i')
      i.should.exist
      i.should.have.class('material-icons')
      i.should.have.text('content_copy')
    }).then(done, done)
  })

  it('applies classes even with empty strings in props', () => {
    let but = vm.$('#html-button')
    but.should.have.class('mdl-button--raised')
    but.should.have.class('mdl-button--colored')
    but.should.not.have.class('mdl-button--accent')
  })
})

