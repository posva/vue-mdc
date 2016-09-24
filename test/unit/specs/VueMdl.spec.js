import Vue from 'vue'
import {
  default as VueMdl,
  MdlCheckbox,
  Mdl,
  components,
  directives
} from '../../../src/vue-mdl'

describe('Register', () => {
  it('exports single components', () => {
    MdlCheckbox.should.exist.and.be.an.Object
    MdlCheckbox.should.have.property('render')
  })

  it('exports single directives', () => {
    Mdl.should.exist.and.be.an.Object
    Mdl.should.have.property('bind')
  })

  it('exports all components', () => {
    components.should.exist.and.be.an.Object
    components.should.have.property('MdlCheckbox')
    components.MdlCheckbox.should.eql(MdlCheckbox)
  })

  it('exports all directives', () => {
    directives.should.exist.and.be.an.Object
    directives.should.have.property('Mdl')
    directives.Mdl.should.eql(Mdl)
  })

  it('exports a Vue plugin', () => {
    VueMdl.should.have.property('install')
    ;(() => Vue.use(VueMdl)).should.not.throw()
  })

  it('has registered components', () => {
    Vue.component('MdlCheckbox').should.exist
  })

  it('has registered directives', () => {
    Vue.directive('Mdl').should.exist
  })
})
