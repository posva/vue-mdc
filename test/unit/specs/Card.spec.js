import Card from '../../components/Card'
import { vueTest } from '../utils'

describe('Card', () => {
  let vm
  let card, emptyCard
  before((done) => {
    vm = vueTest(Card)
    card = vm.$('#card')
    emptyCard = vm.$('#empty-card')
    vm.$nextTick(done)
  })

  it('exists', () => {
    card.should.exist
    card.should.be.visible
  })
  it('has one title', () => {
    card.querySelectorAll('.mdl-card__title')
    .should.have.lengthOf(1)
  })
  it('has one subtitle-text', () => {
    card.querySelectorAll('.mdl-card__subtitle-text')
    .should.have.lengthOf(1)
  })
  it('has one supporting-text', () => {
    card.querySelectorAll('.mdl-card__supporting-text')
    .should.have.lengthOf(1)
  })
  it('has one media', () => {
    card.querySelectorAll('.mdl-card__media')
    .should.have.lengthOf(1)
  })
  it('has one actions', () => {
    card.querySelectorAll('.mdl-card__actions')
    .should.have.lengthOf(1)
  })
  it('has one menu', () => {
    card.querySelectorAll('.mdl-card__menu')
    .should.have.lengthOf(1)
  })

  it('can have no title', () => {
    emptyCard.querySelectorAll('.mdl-card__title')
    .should.have.lengthOf(0)
  })
  it('can have no subtitle-text', () => {
    emptyCard.querySelectorAll('.mdl-card__subtitle-text')
    .should.have.lengthOf(0)
  })
  it('can have no supporting-text', () => {
    emptyCard.querySelectorAll('.mdl-card__supporting-text')
    .should.have.lengthOf(0)
  })
  it('can have no media', () => {
    emptyCard.querySelectorAll('.mdl-card__media')
    .should.have.lengthOf(0)
  })
  it('can have no actions', () => {
    emptyCard.querySelectorAll('.mdl-card__actions')
    .should.have.lengthOf(0)
  })
  it('can have no menu', () => {
    emptyCard.querySelectorAll('.mdl-card__menu')
    .should.have.lengthOf(0)
  })

  it('has custom title', (done) => {
    vm.title = 'Another Title'
    card.querySelector('.mdl-card__title .mdl-card__title-text')
    .should.not.have.text('Another Title')
    vm.nextTick()
    .then(() => {
      card.querySelector('.mdl-card__title .mdl-card__title-text')
      .should.have.text('Another Title')
      return vm.nextTick()
    }).then(done, done)
  })

  it('has custom subtitle', (done) => {
    vm.subtitle = 'Another subtitle'
    card.querySelector('.mdl-card__subtitle-text')
    .should.not.have.text('Another subtitle')
    vm.nextTick()
    .then(() => {
      card.querySelector('.mdl-card__subtitle-text')
      .should.have.text('Another subtitle')
      return vm.nextTick()
    }).then(done, done)
  })

  it('has custom supporting text', (done) => {
    vm.supportingText = 'some text'
    card.querySelector('.mdl-card__supporting-text')
    .should.not.have.text('some text')
    vm.nextTick()
    .then(() => {
      card.querySelector('.mdl-card__supporting-text')
      .should.have.text('some text')
      return vm.nextTick()
    }).then(done, done)
  })

  it('has custom media', (done) => {
    vm.media = 'http://www.getmdl.io/assets/demos/dog.png'
    card.querySelector('.mdl-card__media img')
    .should.not.have.attr('src', 'http://www.getmdl.io/assets/demos/dog.png')
    vm.nextTick()
    .then(() => {
      card.querySelector('.mdl-card__media img')
      .should.have.attr('src', 'http://www.getmdl.io/assets/demos/dog.png')
      return vm.nextTick()
    }).then(done, done)
  })

  it('has custom actions text', (done) => {
    vm.actionsText = 'another text'
    card.querySelector('.mdl-card__actions .mdl-button')
    .should.not.have.text('another text')
    vm.nextTick()
    .then(() => {
      card.querySelector('.mdl-card__actions .mdl-button')
      .should.have.text('another text')
      return vm.nextTick()
    }).then(done, done)
  })

  it('dispatchs events for actions button', () => {
    const spy = sinon.spy()
    vm.$refs.increaseCard.$once('increaseNum', spy)
    vm.$('#actions-button button').click()
    spy.should.have.been.calledOnce
  })

  it('dispatchs events for menu button', () => {
    const spy = sinon.spy()
    vm.$refs.cardMenu.$once('cardMenu', spy)
    vm.$('#menu .mdl-card__menu button').click()
    spy.should.have.been.calledOnce
  })

  it('has an anchor if actions is an URL', (done) => {
    vm.actions = '//google.com'
    should.exist(card.querySelector('.mdl-card__actions button.mdl-button'))
    vm.nextTick()
    .then(() => {
      should.not.exist(card.querySelector('.mdl-card__actions button.mdl-button'))
      should.exist(card.querySelector('.mdl-card__actions a.mdl-button'))
      vm.actions = 'http://google.com'
      return vm.nextTick()
    }).then(() => {
      should.not.exist(card.querySelector('.mdl-card__actions button.mdl-button'))
      should.exist(card.querySelector('.mdl-card__actions a.mdl-button'))
      vm.actions = 'https://google.com'
      return vm.nextTick()
    }).then(done, done)
  })

  it('has custom target for anchor button', (done) => {
    vm.actions = '//google.com'
    vm.actionsTarget = '_self'
    card.querySelector('.mdl-card__actions a.mdl-button')
    .should.not.have.attr('target', '_self')
    vm.nextTick()
    .then(() => {
      card.querySelector('.mdl-card__actions a.mdl-button')
      .should.have.attr('target', '_self')
      return vm.nextTick()
    }).then(done, done)
  })
})
