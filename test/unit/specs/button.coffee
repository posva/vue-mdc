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
    utils.nextTick()

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
  it 'is upgraded', ->
    button.should.have.class 'mdl-button'
    button.should.have.attr 'data-upgraded'
    .match /MaterialButton/
  it 'can be colored', (done) ->
    propChecker 'colored'
    .then done, done
  it 'can be raised', (done) ->
    propChecker 'raised'
    .then done, done
  it 'can be fab', (done) ->
    propChecker 'fab'
    .then done, done
  it 'can be mini-fab', (done) ->
    propChecker 'mini-fab'
    .then done, done
  it 'can be primary', (done) ->
    propChecker 'primary'
    .then done, done
  it 'can be accent', (done) ->
    propChecker 'accent'
    .then done, done
  it 'can be icon', (done) ->
    propChecker 'icon'
    .then done, done
  it 'applies classes even with empty strings in props', ->
    but = $ '#html-button'
    but.should.have.class 'mdl-button--raised'
    but.should.have.class 'mdl-button--colored'
    but.should.not.have.class 'mdl-button--accent'
