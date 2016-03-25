/* global describe it before $ app vm*/
import utils from '../utils'

describe('Select', function () {
  let select = null
  let menu = null
  let menuUl = null
  let selectVal = null
  before(function (done) {
    app.currentComponent = 'select'
    utils.nextTick()
    .then(function () {
      select = $('#select')
      selectVal = $('#select-val')
      menu = $('.mdl-textfield .mdl-menu__container')
      menuUl = $('.mdl-textfield .mdl-menu__container ul')
      done()
    })
  })

  it('exists', function () {
    select.should.exist
    select.should.have.prop('type', 'text')
  })

  it('is upgraded', function () {
    menu.should.exist
    select.should.have.class('mdl-textfield__input')
  })

  it('binds the value', function (done) {
    select.should.have.value('Russia')
    vm.country = 'Spain'
    utils.nextTick().then(function () {
      select.should.have.value('Spain')
      return utils.nextTick()
    }).then(done, done)
  })

  it.skip('shows a menu', function (done) {
    menuUl.should.have.css('clip').match(/rect\(0(px)? 0(px)? 0(px)? 0(px)?\)/)
    let changes = vm.changes
    select.click()
    utils.nextTick().then(function () {
      return utils.timeout(100)
    }).then(function () {
      menuUl.should.have.css('clip').match(/rect\(0(px)? [^0]/)
      menuUl.find('li:first').click()
      return utils.nextTick()
    }).then(function () {
      vm.country.should.equal('Russia')
      vm.changes.should.eql(changes + 1)
      return utils.nextTick()
    }).then(done, done)
  })

  it('uses an array of objects as options', function (done) {
    vm.countryVal = 'fr'
    selectVal.should.not.have.value('France')
    utils.nextTick().then(function () {
      selectVal.should.have.value('France')
      return utils.nextTick()
    }).then(done, done)
  })
})

