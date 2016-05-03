/* global describe it before $ app*/
import utils from '../utils'

describe('Menu', function () {
  let menu = null
  // let large = null
  before(function (done) {
    app.currentComponent = 'menu'
    utils.nextTick()
    .then(function () {
      menu = $('[for=v-menu]')
      done()
    })
  })

  it('exists', function () {
    menu.should.exist
  })

  it('is upgraded', function () {
    menu.should.have.class('mdl-menu')
    menu.should.have.attr('data-upgraded')
    .match(/MaterialMenu/)
  })
})
