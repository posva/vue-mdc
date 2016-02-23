/* global Vue describe expect it before app*/
import utils from '../utils'
import mdl from '../../../src/vue-mdl'

describe('Register', function () {
  before(function (done) {
    app.currentComponent = 'none'
    utils.nextTick()
    .then(done, done)
  })

  it('has register function', function () {
    mdl.should.have.property('register')
    mdl.should.have.property('registerAll')
  })

  it('throws when name does not exist', function () {
    (function () {
      mdl.register(Vue, 'nope')
    }).should.throw
  })

  it('registers single components', function () {
    expect(Vue.component('mdlCheckbox'))
    .to.be.ko
    mdl.register(Vue, 'mdlCheckbox')
    .should.exist
    Vue.component('mdlCheckbox')
    .should.exist
    expect(Vue.component('mdlRadio'))
    .to.be.ko
  })

  it('registers single directives', function () {
    expect(Vue.directive('mdlRippleEffect'))
    .to.be.ko
    mdl.register(Vue, 'mdlRippleEffect')
    .should.exist
    Vue.directive('mdlRippleEffect')
    .should.exist
    expect(Vue.directive('mdlBadge'))
    .to.be.ko
  })

  it('registers single components with short name', function () {
    expect(Vue.component('mdlRadio'))
    .to.be.ko
    mdl.register(Vue, 'radio')
    .should.exist
    Vue.component('mdlRadio')
    .should.exist
  })

  it('registers single directives with short name', function () {
    expect(Vue.directive('mdlBadge'))
    .to.be.ko
    mdl.register(Vue, 'badge')
    .should.exist
    Vue.directive('mdlBadge')
    .should.exist
    expect(Vue.directive('mdl'))
    .to.be.ko
  })

  it('can register all components and directives', function () {
    expect(Vue.directive('mdl'))
    .to.be.ko
    expect(Vue.component('mdlTooltip'))
    .to.be.ko
    mdl.registerAll(Vue)
    Vue.component('mdlTooltip')
    .should.exist
    Vue.directive('mdl')
    .should.exist
  })
})
