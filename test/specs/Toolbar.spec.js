import Toolbar from 'src/Toolbar/Toolbar'
import ToolbarRow from 'src/Toolbar/ToolbarRow'
import ToolbarSection from 'src/Toolbar/ToolbarSection'
import {
  createVM,
  dataPropagationTest,
  nextTick,
} from '../helpers'

describe('Toolbar', function () {
  it('keeps original tag data', dataPropagationTest(Toolbar))

  it('has default icon', function () {
    const vm = createVM(this, function (h) {
      return (
        <Toolbar ref='toolbar'>
        </Toolbar>
      )
    })
    vm.$refs.toolbar.$el.should.have.class('mdc-toolbar')
    vm.$('.mdc-toolbar__icon--menu').should.have.text('menu')
  })

  it('can set the title', function () {
    const vm = createVM(this, function (h) {
      return (
        <Toolbar ref='toolbar' title='My Title'>
        </Toolbar>
      )
    })
    vm.$('.mdc-toolbar__title').should.have.text('My Title')
  })

  it('can set the icon', function () {
    const vm = createVM(this, function (h) {
      return (
        <Toolbar ref='toolbar' icon='star'>
        </Toolbar>
      )
    })
    vm.$('.mdc-toolbar__icon--menu').should.have.text('star')
  })

  it('emits when clicking the menu', function (done) {
    const spy = sinon.spy()
    const vm = createVM(this, function (h) {
      return (
        <Toolbar ref='toolbar' onMenu={spy}>
        </Toolbar>
      )
    })
    spy.should.have.not.been.called
    vm.$('.mdc-toolbar__icon--menu').click()
    nextTick().then(() => {
      spy.should.have.been.called
    }).then(done)
  })

  it('aligns start by default', function () {
    const vm = createVM(this, function (h) {
      return (
        <Toolbar ref='toolbar'>
        </Toolbar>
      )
    })
    vm.$('.mdc-toolbar__section')
      .should.have.class('mdc-toolbar__section--align-start')
      .and.not.have.class('mdc-toolbar__section--align-end')
  })

  it('can accomodate more sections')

  describe('ToolbarSection', function () {
    it('keeps original tag data', dataPropagationTest(ToolbarSection))

    it('aligns start by default', function () {
      const vm = createVM(this, function (h) {
        return (
          <ToolbarSection ref='toolbar'>Content</ToolbarSection>
        )
      })
      vm.$('.mdc-toolbar__section')
        .should.have.class('mdc-toolbar__section--align-start')
        .and.have.text('Content')
        .and.not.have.class('mdc-toolbar__section--align-end')
    })

    it('can align center', function () {
      const vm = createVM(this, function (h) {
        return (
          <ToolbarSection align='center' ref='toolbar'>
          </ToolbarSection>
        )
      })
      vm.$('.mdc-toolbar__section')
        .should.not.have.class('mdc-toolbar__section--align-start')
        .and.not.have.class('mdc-toolbar__section--align-end')
    })

    it('can align end', function () {
      const vm = createVM(this, function (h) {
        return (
          <ToolbarSection align='end' ref='toolbar'>
          </ToolbarSection>
        )
      })
      vm.$('.mdc-toolbar__section')
        .should.have.class('mdc-toolbar__section--align-end')
        .and.not.have.class('mdc-toolbar__section--align-start')
    })

    it('shrinks', function () {
      const vm = createVM(this, function (h) {
        return (
          <ToolbarSection shrink ref='toolbar'>
          </ToolbarSection>
        )
      })
      vm.$('.mdc-toolbar__section')
        .should.have.class('mdc-toolbar__section--shrink-to-fit')
    })
  })

  describe('ToolbarRow', function () {
    it('keeps original tag data', dataPropagationTest(ToolbarRow))
  })
})
