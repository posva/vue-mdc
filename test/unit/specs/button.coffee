utils = require '../utils.coffee'

propChecker = (prop) ->
  but = $ '#button'
  but.should.not.have.class 'mdl-button--' + prop
  variable = prop
  if prop is 'mini-fab'
    variable = 'miniFab'
  vm[variable] = true
  utils.nextTick()
  .then ->
    but.should.have.class 'mdl-button--' + prop
    vm[variable] = false
    utils.nextTick()
  .then ->
    but.should.not.have.class 'mdl-button--' + prop

describe 'Button', ->
  button = null
  before (done) ->
    app.currentComponent = 'button'
    utils.nextTick()
    .then ->
      button = $ '#button'
      done()
  it 'exists', ->
    button.should.exist
    button.should.be.visible
  it 'is updraded', ->
    button.should.have.class 'mdl-button'
    button.should.have.attr 'data-upgraded'
    .match /MaterialButton/
  it 'can be colored', (done) ->
    propChecker 'colored'
    .then -> done()
  it 'can be raised', (done) ->
    propChecker 'raised'
    .then -> done()
  it 'can be fab', (done) ->
    propChecker 'fab'
    .then -> done()
  it 'can be mini-fab', (done) ->
    propChecker 'mini-fab'
    .then -> done()
  it 'can be primary', (done) ->
    propChecker 'primary'
    .then -> done()
  it 'can be accent', (done) ->
    propChecker 'accent'
    .then -> done()
  it 'can be icon', (done) ->
    propChecker 'icon'
    .then -> done()
