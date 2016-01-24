utils = require '../utils.coffee'

describe 'Card', ->
  card = null
  emptyCard = null
  before (done) ->
    app.currentComponent = 'card'
    utils.nextTick()
    .then ->
      card = $ '#card'
      emptyCard = $ '#empty-card'
      done()
  it 'exists', ->
    card.should.exist
    card.should.be.visible
  it 'has one title', ->
    title = card.find '.mdl-card__title'
    title.should.have.lengthOf 1
  it 'has one subtitle-text', ->
    title = card.find '.mdl-card__subtitle-text'
    title.should.have.lengthOf 1
  it 'has one supporting-text', ->
    title = card.find '.mdl-card__supporting-text'
    title.should.have.lengthOf 1

  it 'can have no title', ->
    title = emptyCard.find '.mdl-card__title'
    title.should.have.lengthOf 0
  it 'can have no subtitle-text', ->
    title = emptyCard.find '.mdl-card__subtitle-text'
    title.should.have.lengthOf 0
  it 'can have no supporting-text', ->
    title = emptyCard.find '.mdl-card__supporting-text'
    title.should.have.lengthOf 0

  it 'has custom title', (done) ->
    vm.title = 'Custom Title'
    done()
