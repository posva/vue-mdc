utils = require '../utils.coffee'

describe 'Badge', ->
  mdlCbSelector = 'label[for=check]'
  badge = null
  badge2 = null
  badgeNoBg = null
  badgeOverlap = null
  before (done) ->
    app.currentComponent = 'badge'
    utils.nextTick()
    .then ->
      badge = $ '#badge'
      badge2 = $ '#badge-2'
      badgeOverlap = $ '#badge-overlap'
      badgeNoBg = $ '#badge-overlap'
      done()
  it 'exists', ->
    badge.should.exist
    badge.should.be.visible
  it 'is updraded', ->
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
      done()
