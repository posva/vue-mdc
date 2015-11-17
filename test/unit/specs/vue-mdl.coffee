utils = require '../utils.coffee'
mdl = require '../../../src/vue-mdl.js'

describe 'Register', ->
  before (done) ->
    app.currentComponent = 'none'
    utils.nextTick()
    .then done, done
  it 'has register function', ->
    mdl.should.have.property 'register'
    mdl.should.have.property 'registerAll'
  it 'throws when name does not exist', ->
    (-> mdl.register Vue, 'nope').should.throw
  it 'registers single components', ->
    expect Vue.component 'mdl-checkbox'
    .to.be.ko
    mdl.register Vue, 'mdl-checkbox'
    .should.exist
    Vue.component 'mdl-checkbox'
    .should.exist
    expect Vue.component 'mdl-radio'
    .to.be.ko
  it 'registers single directives', ->
    expect Vue.directive 'mdl-ripple-effect'
    .to.be.ko
    mdl.register Vue, 'mdl-ripple-effect'
    .should.exist
    Vue.directive 'mdl-ripple-effect'
    .should.exist
    expect Vue.directive 'mdl-badge'
    .to.be.ko
  it 'registers single components with short name', ->
    expect Vue.component 'mdl-radio'
    .to.be.ko
    mdl.register Vue, 'radio'
    .should.exist
    Vue.component 'mdl-radio'
    .should.exist
  it 'registers single directives with short name', ->
    expect Vue.directive 'mdl-badge'
    .to.be.ko
    mdl.register Vue, 'badge'
    .should.exist
    Vue.directive 'mdl-badge'
    .should.exist
    expect Vue.directive 'mdl'
    .to.be.ko
  it 'can register all components and directives', ->
    expect Vue.directive 'mdl'
    .to.be.ko
    expect Vue.component 'mdl-tooltip'
    .to.be.ko
    mdl.registerAll Vue
    Vue.component 'mdl-tooltip'
    .should.exist
    Vue.directive 'mdl'
    .should.exist
