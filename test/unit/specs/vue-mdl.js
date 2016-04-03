/* global Vue describe it before app*/
import utils from '../utils'
import VueMdl from '../../../src/vue-mdl'
import { MdlCheckbox, MdlBadge, components, directives } from '../../../src/vue-mdl'

describe('Register', function () {
  before(function (done) {
    app.currentComponent = 'none'
    utils.nextTick()
    .then(done, done)
  })

  it('exports single components', function () {
    MdlCheckbox.should.exist.and.be.an.Object
    MdlCheckbox.should.have.property('template')
  })

  it('exports single directives', function () {
    MdlBadge.should.exist.and.be.an.Object
    MdlBadge.should.have.property('bind')
  })

  it('exports all components', function () {
    components.should.exist.and.be.an.Object
    components.should.have.property('MdlCheckbox')
    components.MdlCheckbox.should.eql(MdlCheckbox)
  })

  it('exports all directives', function () {
    directives.should.exist.and.be.an.Object
    directives.should.have.property('MdlBadge')
    directives.MdlBadge.should.eql(MdlBadge)
  })

  it('exports a Vue plugin', function () {
    VueMdl.should.have.property('install')
    ;(function () {
      Vue.use(VueMdl)
    }).should.not.throw()
  })

  it('has registered components', function () {
    Vue.component('MdlCheckbox').should.exist
  })

  it('has registered directives', function () {
    Vue.directive('MdlBadge').should.exist
  })
})
