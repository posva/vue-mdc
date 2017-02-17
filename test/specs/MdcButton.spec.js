import MdcButton from 'src/Button.vue'
import { createVM } from '../helpers/utils.js'

describe('Button.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<MdcButton></MdcButton>
`, { components: { MdcButton }})
    // vm.$el.querySelector('.hello h1').textContent.should.eql('MdcButton World!')
  })
})
