utils = require '../utils.coffee'

describe 'Badge', ->
  badge = null
  hider = null
  badge2 = null
  badgeNoBg = null
  badgeOverlap = null
  before (done) ->
    app.currentComponent = 'badge'
    utils.nextTick()
    .then ->
      badge = $ '#badge'
      hider = $ '#hider'
      badge2 = $ '#badge-2'
      badgeOverlap = $ '#badge-overlap'
      badgeNoBg = $ '#badge-overlap'
      done()
  it 'exists', ->
    badge.should.exist
    badge.should.be.visible
  it 'is upgraded', ->
    badge.should.have.class 'mdl-badge'
    badge2.should.have.class 'mdl-badge'
  it 'can have no background', ->
    badge.should.not.have.class 'mdl-badge--no-background'
    badgeNoBg.should.have.class 'mdl-badge--no-background'
  it 'can overlap', ->
    badge.should.not.have.class 'mdl-badge--overlap'
    badgeOverlap.should.have.class 'mdl-badge--overlap'
  it 'can change the text', (done) ->
    badge.should.have.attr 'data-badge', '♥'
    vm.badgeText = '8'
    utils.nextTick()
    .then ->
      badge.should.have.attr 'data-badge', '8'
      utils.nextTick()
    .then done, done
  it 'can hide badge with function', (done) ->
    vm.badgeText = '0'
    utils.nextTick()
    .then ->
      hider.should.not.have.attr 'data-badge'
      vm.badgeText = '2'
      utils.nextTick()
    .then ->
      hider.should.have.attr 'data-badge', '2'
      utils.nextTick()
    .then done, done
  it 'can hide badge with number attribute', (done) ->
    number = $ '#number'
    vm.badgeText = '0'
    utils.nextTick()
    .then ->
      number.should.not.have.attr 'data-badge'
      vm.badgeText = '2'
      utils.nextTick()
    .then ->
      number.should.have.attr 'data-badge', '2'
      utils.nextTick()
    .then done, done
  it 'can have hide-badge and .number at the same time', (done) ->
    hider = $ '#hider-multi'
    vm.badgeText = '0'
    utils.nextTick()
    .then ->
      hider.should.not.have.attr 'data-badge'
      vm.badgeText = '2'
      utils.nextTick()
    .then ->
      hider.should.have.attr 'data-badge', '2'
      vm.hide = true
      utils.nextTick()
    .then ->
      hider.should.not.have.attr 'data-badge'
      vm.hide = false
      utils.nextTick()
    .then ->
      hider.should.have.attr 'data-badge', '2'
      utils.nextTick()
    .then done, done

