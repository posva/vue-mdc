import Tooltip from '../../components/Tooltip'
import { vueTest } from '../utils'

describe('Tooltip', () => {
  let vm
  let tooltip, large
  before(() => {
    vm = vueTest(Tooltip)
    tooltip = vm.$('[for=tooltip]')
    large = vm.$('[for=large]')
  })

  it('exists', () => {
    tooltip.should.exist
  })

  it('is upgraded', () => {
    tooltip.should.have.class('mdl-tooltip')
    tooltip.should.have.attr('data-upgraded')
    .match(/MaterialTooltip/)
  })

  it('applies classes even with empty strings in props', () => {
    let tool = vm.$('[for=html]')
    tool.should.have.class('mdl-tooltip--large')
  })

  it('can be large', () => {
    large.should.have.class('mdl-tooltip--large')
  })

  it('can have user added classes', () => {
    large.should.have.class('added-class')
  })
})
