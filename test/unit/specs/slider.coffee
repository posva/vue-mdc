utils = require '../utils.coffee'

describe 'Slider', ->
  slider = null
  disable = null
  before (done) ->
    app.currentComponent = 'slider'
    utils.nextTick()
    .then ->
      slider = $ '#slider'
      disable = $ '#disable'
      done()
  it 'exists', ->
    slider.should.exist
    slider.should.have.prop 'type', 'range'
  it 'is upgraded', ->
    slider.should.have.class 'mdl-slider'
    slider.should.have.attr 'data-upgraded'
    .match /MaterialSlider/
  it 'applies classes even with empty strings in props', ->
    slid = $ '#html-slider'
    slid.should.have.attr 'disabled', 'disabled'
  it 'starts with the right value', ->
    slider.should.have.value '25'
  it 'updates the value', (done) ->
    vm.value = 15
    utils.nextTick()
    .then ->
      slider.should.have.value '15'
      utils.nextTick()
    .then done, done
  it 'takes into account step', ->
    disable.should.have.value '25'
  it 'always takes nearest value', (done) ->
    disable.should.have.value '25'
    vm.value = 13
    utils.nextTick()
    .then ->
      disable.should.have.value '25'
      vm.value = 12
      utils.nextTick()
    .then ->
      disable.should.have.value '0'
      utils.nextTick()
    .then done, done
  it 'can change the step', (done) ->
    vm.step = 10
    utils.nextTick()
    .then ->
      disable.should.have.prop 'step', '10'
      utils.nextTick()
    .then done, done
  it 'can change the min', (done) ->
    vm.min = 10
    utils.nextTick()
    .then ->
      slider.should.have.prop 'min', '10'
      utils.nextTick()
    .then done, done
  it 'can change the max', (done) ->
    vm.max = 10
    utils.nextTick()
    .then ->
      slider.should.have.prop 'max', '10'
      vm.max = 100
      utils.nextTick()
    .then done, done
  it 'adapts to the min value', (done) ->
    slider.should.not.have.value '50'
    vm.min = 50
    utils.nextTick()
    .then ->
      slider.should.have.value '50'
      utils.nextTick()
    .then done, done
  it 'but keeps the value outdated from min', ->
    vm.value.should.equal 12
  it 'adapts to the max value', (done) ->
    vm.value = 99
    utils.nextTick()
    .then ->
      slider.should.have.value '99'
      vm.max = 75
      utils.nextTick()
    .then ->
      slider.should.have.value '75'
      utils.nextTick()
    .then done, done
  it 'but keeps the value outdated max', ->
    vm.value.should.equal 99
