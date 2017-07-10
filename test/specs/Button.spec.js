import Button from 'src/Button.vue'
import {
  createVM,
  dataPropagationTest,
  attrTest,
} from '../helpers'

describe('Button.vue', function () {
  it('renders an upgraded button', function () {
    const vm = createVM(this, `
<Button class="my-button">Click me</Button>
`, {
        components: { Button },
      })
    vm.$('button').should.have.text('Click me')
    vm.$('button').should.have.class('mdc-button')
  })

  it('keeps original tag data', dataPropagationTest(Button))

  describe('attrs', function () {
    attrTest(it, 'mdc-button', Button, [
      'dense',
      'raised',
      'compact',
      'primary',
      'accent',
      'theme-dark',
    ])
  })
})
