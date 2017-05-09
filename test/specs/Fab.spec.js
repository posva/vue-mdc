import Fab from 'src/Fab'
import {
  createVM,
  dataPropagationTest,
  attrTest,
} from '../helpers'

describe('Fab', function () {
  it('keeps original tag data', dataPropagationTest(Fab))

  it('renders a button by default', function () {
    const vm = createVM(this, function (h) {
      return (
        <Fab icon='favorite_border'/>
      )
    })
    vm.$('.mdc-fab')
      .should.have.match('button')
      .and.have.class('material-icons')
  })

  it('contains an icon', function () {
    const vm = createVM(this, function (h) {
      return (
        <Fab icon='favorite_border'/>
      )
    })
    vm.$('.mdc-fab__icon').should.have.match('span')
  })

  it('contains custom content', function () {
    const vm = createVM(this, function (h) {
      return (
        <Fab style={{ fontSize: '1.5rem' }}>💃🏻</Fab>
      )
    })
    vm.$('.mdc-fab').should.not.have.class('material-icons')
    vm.$('.mdc-fab__icon').should.not.exist
  })

  describe('attrs', function () {
    attrTest(it, 'mdc-fab', Fab, [
      'mini',
      'plain',
    ])
  })
})
