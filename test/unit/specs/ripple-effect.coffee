utils = require '../utils.coffee'

rippleChecker = (element, name) ->
  el = $ element
  el.should.be.visible
  el.should.have.class 'mdl-js-ripple-effect'
  $ "#{element} span.mdl-#{name}__ripple-container"
  .should.be.visible

describe 'Ripple Effect', ->
  before (done) ->
    app.currentComponent = 'ripple-effect'
    utils.nextTick()
    .then ->
      done()
  it 'works on checkbox', ->
    rippleChecker 'label[for=checkbox-ripple]', 'checkbox'
  it 'works on radio', ->
    rippleChecker 'label[for=radio-ripple]', 'radio'
  it 'works on icon-toggle', ->
    rippleChecker 'label[for=icon-toggle-ripple]', 'icon-toggle'
  it 'works on switch', ->
    rippleChecker 'label[for=switch-ripple]', 'switch'
  it 'works on button', ->
    rippleChecker '#button-ripple', 'button'
