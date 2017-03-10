import MdcButton from 'src/Button.vue'
import camelcase from 'camelcase'
import { createVM, nextTick, dataPropagationTest } from '../helpers'

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
    const attrs = [
      'dense',
      'raised',
      'compact',
      'primary',
      'accent',
      'theme-dark',
    ]
    attrs.forEach(attr => {
      it(attr, function (done) {
        const vm = createVM(this, function (h) {
          const opts = {
            props: {
              [camelcase(attr)]: this.active,
            },
          }
          console.log(opts.props)
          return (
            <MdcButton {...opts}>{attr}</MdcButton>
          )
        }, {
          data: { active: true },
        })
        vm.$('button').should.have.class(`mdc-button--${attr}`)
        vm.active = false
        nextTick().then(() => {
          vm.$('button').should.not.have.class(`mdc-button--${attr}`)
          vm.active = true
        }).then(done)
      })
    })
  })
})
