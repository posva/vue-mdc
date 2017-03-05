import MdcButton from 'src/Button.vue'
import { createVM } from '../helpers/utils.js'
import { nextTick } from '../helpers/wait-for-update.js'

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

  it('keeps original tag data', function () {
    const spy = sinon.spy()
    const vm = createVM(this, function (h) {
      return (
        <MdcButton staticClass='custom' onClick={spy}>Hello</MdcButton>
      )
    })
    spy.should.have.not.been.called
    vm.$('button').click()
    spy.should.have.been.calledOnce
    vm.$('button').should.have.class('custom')
  })

  describe('attrs', function () {
    const attrs = [
      'dense',
      'raised',
      'compact',
      'primary',
      'accent',
    ]
    attrs.forEach(attr => {
      it(attr, function (done) {
        const vm = createVM(this, function (h) {
          const opts = {
            props: {
              [attr]: this.active,
            },
          }
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
