import MdcButton from 'src/Button.vue'
import {
  createVM,
  dataPropagationTest,
  attrTest,
} from '../helpers'

describe('Button.vue', function () {
  it('renders an upgraded button', function () {
    const vm = createVM(this, `
<MdcButton class="my-button">Click me</MdcButton>
`, {
  components: { MdcButton },
})
    vm.$('button').should.have.text('Click me')
    vm.$('button').should.have.class('mdc-button')
  })

  it('keeps original tag data', dataPropagationTest(MdcButton))

  describe('attrs', function () {
    attrTest(it, 'mdc-button', MdcButton, [
      'dense',
      'raised',
      'compact',
      'primary',
      'accent',
      'theme-dark',
    ])
  })
})
