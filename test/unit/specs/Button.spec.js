import Button from '../../components/button'
import { vueTest } from '../utils'


describe('Button', function () {
  let vm
  let button
  function propChecker  (prop) {
    let but = vm.$('#button')
    but.should.not.have.class('mdl-button--' + prop)
    let variable = prop
    if (prop === 'mini-fab') {
      variable = 'miniFab'
    }
    vm[variable] = true
    return vm.nextTick()
      .then(function () {
        but.should.have.class('mdl-button--' + prop)
        vm[variable] = false
        return vm.nextTick()
      }).then(function () {
        but.should.not.have.class('mdl-button--' + prop)
        return vm.nextTick()
      })
  }

  before(() => {
    vm = vueTest(Button)
    button = vm.$('#button')
  })

  it('exists', function () {
    button.should.exist
    button.should.be.visible
  })

  it('is upgraded', function () {
    button.should.have.class('mdl-button')
    button.should.have.attr('data-upgraded')
    .match(/MaterialButton/)
  })

  it('can be an anchor link', function () {
    vm.$('a#anchor-button').should.exist
  })

  it('can be colored', function (done) {
    propChecker('colored')
    .then(done, done)
  })

  it('can be raised', function (done) {
    propChecker('raised')
    .then(done, done)
  })

  it('can be fab', function (done) {
    propChecker('fab')
    .then(done, done)
  })

  it('can be mini-fab', function (done) {
    propChecker('mini-fab')
    .then(done, done)
  })

  it('can be primary', function (done) {
    propChecker('primary')
    .then(done, done)
  })

  it('can be accent', function (done) {
    propChecker('accent')
    .then(done, done)
  })

  it('can be icon', function (done) {
    propChecker('icon')
    .then(done, done)
  })

  it('applies classes even with empty strings in props', function () {
    let but = vm.$('#html-button')
    but.should.have.class('mdl-button--raised')
    but.should.have.class('mdl-button--colored')
    but.should.not.have.class('mdl-button--accent')
  })
})

