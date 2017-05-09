import Fab from 'src/Fab'
import {
  createVM,
  attrTest,
} from '../helpers'

describe('Fab', function () {
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

  describe('attrs', function () {
    attrTest(it, 'mdc-fab', Fab, [
      'mini',
      'plain',
    ])
  })
})
