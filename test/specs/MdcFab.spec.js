import MdcFab from 'src/Fab.vue'
import {
  createVM,
  attrTest,
} from '../helpers'

describe('Fab.vue', function () {
  it('renders a floating action button', function () {
    const vm = createVM(this, `
<MdcFab class="my-fab material-icons"><span class="mdc-fab__icon">favorite_border</span></MdcFab>
`, {
  components: { MdcFab },
})
    vm.$('button').should.have.class('mdc-fab')
  })

  describe('attrs', function () {
    attrTest(it, 'mdc-fab', MdcFab, [
      'mini',
      'plain',
    ])
  })
})
