import MdcButton from 'src/Button.vue'
import ripple from 'src/ripple.js'
import { createVM } from '../helpers/utils.js'

describe('Button.vue', function () {
  it('works', function () {
    const vm = createVM(this, `
<MdcButton v-ripple raised compact primary>Click me</MdcButton>
`, {
  components: { MdcButton },
  directives: { ripple },
})
    vm
    // vm.$el.querySelector('.hello h1').textContent.should.eql('MdcButton World!')
  })

  it('is wrapped inside an MdcRipple', function () {
    const vm = createVM(this, `
  <MdcButton v-ripple>Click me</MdcButton>
`, {
  components: { MdcButton },
  directives: { ripple },
})
    vm
    // vm.$el.querySelector('.hello h1').textContent.should.eql('MdcButton World!')
  })

  it('lol ripple', function () {
    const vm = createVM(this, `
  <div style="min-height: 100px" v-ripple>Click me</div>
`, {
  components: { MdcButton },
  directives: { ripple },
})
    vm
    // vm.$el.querySelector('.hello h1').textContent.should.eql('MdcButton World!')
  })
})
