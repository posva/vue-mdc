utils = require '../utils.coffee'

describe 'Menu', ->
  menu = null
  large = null
  before (done) ->
    app.currentComponent = 'menu'
    utils.nextTick()
    .then ->
      menu = $ '[for=v-menu]'
      button = $ '#menu'
      done()
  it 'exists', ->
    menu.should.exist
  it 'is upgraded', ->
    menu.should.have.class 'mdl-menu'
    menu.should.have.attr 'data-upgraded'
    .match /MaterialMenu/
