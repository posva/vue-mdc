/* global describe it before $ app*/
import utils from '../utils'

describe('Tooltip', function () {
  let tooltip = null
  let large = null
  before(function (done) {
    app.currentComponent = 'tooltip'
    utils.nextTick()
    .then(function () {
      tooltip = $('[for=tooltip]')
      large = $('[for=large]')
      done()
    })
  })

  it('exists', function () {
    tooltip.should.exist
  })

  it('is upgraded', function () {
    tooltip.should.have.class('mdl-tooltip')
    tooltip.should.have.attr('data-upgraded')
    .match(/MaterialTooltip/)
  })

  it('applies classes even with empty strings in props', function () {
    let tool = $('[for=html]')
    tool.should.have.class('mdl-tooltip--large')
  })

  it('can be large', function () {
    large.should.have.class('mdl-tooltip--large')
  })

  it('can have user added classes', function () {
    large.should.have.class('added-class')
  })
})
