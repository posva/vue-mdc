utils = require '../utils.coffee'

describe 'Tooltip', ->
  tooltip = null
  large = null
  before (done) ->
    app.currentComponent = 'tooltip'
    utils.nextTick()
    .then ->
      tooltip = $ '[for=tooltip]'
      large = $ '[for=large]'
      done()
  it 'exists', ->
    tooltip.should.exist
  it 'is upgraded', ->
    tooltip.should.have.class 'mdl-tooltip'
    tooltip.should.have.attr 'data-upgraded'
    .match /MaterialTooltip/
  it 'applies classes even with empty strings in props', ->
    tool = $ '[for=html]'
    tool.should.have.class 'mdl-tooltip--large'
  it 'can be large', ->
    large.should.have.class 'mdl-tooltip--large'
  it 'can have user added classes', ->
    large.should.have.class 'added-class'
