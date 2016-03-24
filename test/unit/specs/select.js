/* global describe it before $ app vm*/
import utils from '../utils'

describe('Select', function () {
  let select = null
  let menu = null
  let menuUl = null
  before(function (done) {
    app.currentComponent = 'select'
    utils.nextTick()
    .then(function () {
      select = $('#select')
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
    vm.country = 'Belarus'
    utils.nextTick().then(function () {
      select.should.have.value('Belarus')
      return utils.nextTick()
    }).then(done, done)
  })

  it('shows a menu', function (done) {
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
})

