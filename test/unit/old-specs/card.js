/* global describe it before vm vms $ app*/
import utils from '../utils'

describe('Card', function () {
  let card = null
  let emptyCard = null
  before(function (done) {
    app.currentComponent = 'card'
    utils.nextTick()
    .then(function () {
      card = $('#card')
      emptyCard = $('#empty-card')
      done()
    })
  })

  it('exists', function () {
    card.should.exist
    card.should.be.visible
  })
  it('has one title', function () {
    let title = card.find('.mdl-card__title')
    title.should.have.lengthOf(1)
  })
  it('has one subtitle-text', function () {
    let title = card.find('.mdl-card__subtitle-text')
    title.should.have.lengthOf(1)
  })
  it('has one supporting-text', function () {
    let title = card.find('.mdl-card__supporting-text')
    title.should.have.lengthOf(1)
  })
  it('has one media', function () {
    let title = card.find('.mdl-card__media')
    title.should.have.lengthOf(1)
  })
  it('has one actions', function () {
    let title = card.find('.mdl-card__actions')
    title.should.have.lengthOf(1)
  })
  it('has one menu', function () {
    let title = card.find('.mdl-card__menu')
    title.should.have.lengthOf(1)
  })

  it('can have no title', function () {
    let title = emptyCard.find('.mdl-card__title')
    title.should.have.lengthOf(0)
  })
  it('can have no subtitle-text', function () {
    let title = emptyCard.find('.mdl-card__subtitle-text')
    title.should.have.lengthOf(0)
  })
  it('can have no supporting-text', function () {
    let title = emptyCard.find('.mdl-card__supporting-text')
    title.should.have.lengthOf(0)
  })
  it('can have no media', function () {
    let title = emptyCard.find('.mdl-card__media')
    title.should.have.lengthOf(0)
  })
  it('can have no actions', function () {
    let title = emptyCard.find('.mdl-card__actions')
    title.should.have.lengthOf(0)
  })
  it('can have no menu', function () {
    let title = emptyCard.find('.mdl-card__menu')
    title.should.have.lengthOf(0)
  })

  it('has custom title', function (done) {
    vm.title = 'Another Title'
    card.find('.mdl-card__title .mdl-card__title-text')
    .should.not.have.text('Another Title')
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__title .mdl-card__title-text')
      .should.have.text('Another Title')
      return utils.nextTick()
    }).then(done, done)
  })

  it('has custom subtitle', function (done) {
    vm.subtitle = 'Another subtitle'
    card.find('.mdl-card__subtitle-text')
    .should.not.have.text('Another subtitle')
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__subtitle-text')
      .should.have.text('Another subtitle')
      return utils.nextTick()
    }).then(done, done)
  })

  it('has custom supporting text', function (done) {
    vm.supportingText = 'some text'
    card.find('.mdl-card__supporting-text')
    .should.not.have.text('some text')
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__supporting-text')
      .should.have.text('some text')
      return utils.nextTick()
    }).then(done, done)
  })

  it('has custom media', function (done) {
    vm.media = 'http://www.getmdl.io/assets/demos/dog.png'
    card.find('.mdl-card__media img')
    .should.not.have.attr('src', 'http://www.getmdl.io/assets/demos/dog.png')
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__media img')
      .should.have.attr('src', 'http://www.getmdl.io/assets/demos/dog.png')
      return utils.nextTick()
    }).then(done, done)
  })

  it('has custom actions text', function (done) {
    vm.actionsText = 'another text'
    card.find('.mdl-card__actions .mdl-button')
    .should.not.have.text('another text')
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__actions .mdl-button')
      .should.have.text('another text')
      return utils.nextTick()
    }).then(done, done)
  })

  it('dispatchs events for actions button', function (done) {
    let called = false
    vm.$once('someEventName', function () {
      called = true
    })
    vms.card.triggerActionsEvent()
    utils.nextTick()
    .then(function () {
      called.should.be.true
      return utils.nextTick()
    }).then(done, done)
  })

  it('dispatchs events for menu button', function (done) {
    let called = false
    vm.$once('cardMenu', function () {
      called = true
    })
    vms.card.triggerMenuEvent()
    utils.nextTick()
    .then(function () {
      called.should.be.true
      return utils.nextTick()
    }).then(done, done)
  })

  it('has an anchor if actions is an URL', function (done) {
    vm.actions = '//google.com'
    card.find('.mdl-card__actions button.mdl-button'
    .should.exist)
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__actions button.mdl-button')
      .should.not.exist
      card.find('.mdl-card__actions a.mdl-button')
      .should.exist
      vm.actions = 'http://google.com'
      return utils.nextTick()
    }).then(function () {
      card.find('.mdl-card__actions button.mdl-button')
      .should.not.exist
      card.find('.mdl-card__actions a.mdl-button')
      .should.exist
      vm.actions = 'https://google.com'
      return utils.nextTick()
    }).then(done, done)
  })

  it('has custom target for anchor button', function (done) {
    vm.actions = '//google.com'
    vm.actionsTarget = '_self'
    card.find('.mdl-card__actions a.mdl-button')
    .should.not.have.attr('target', '_self')
    utils.nextTick()
    .then(function () {
      card.find('.mdl-card__actions a.mdl-button')
      .should.have.attr('target', '_self')
      return utils.nextTick()
    }).then(done, done)
  })
})
