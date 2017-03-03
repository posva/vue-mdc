import ripple from 'src/ripple.js'
import { createVM } from '../helpers/utils.js'
import { nextTick } from '../helpers/wait-for-update.js'

describe('Ripple', function () {
  it('upgrades a div', function (done) {
    const vm = createVM(this, function (h) {
      return (
        <div class='my-ripple' v-ripple>Simple</div>
      )
    }, {
      directives: { ripple },
    })
    nextTick().then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.have.class('mdc-ripple-surface')
    }).then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.have.class('mdc-ripple-upgraded')
    }).then(done)
  })

  it('unbounds events and clases', function (done) {
    const vm = createVM(this, function (h) {
      const opts = {
        directives: [],
      }
      if (this.show) {
        opts.directives.push({
          name: 'ripple',
        })
      }
      return (
        <div class='my-ripple' {...opts}>Unbind</div>
      )
    }, {
      data: {
        show: true,
      },
      directives: { ripple },
    })
    vm.show = false
    nextTick().then(() => {
      const ripple = vm.$('.my-ripple')
      ripple.should.not.have.class('mdc-ripple-upgraded')
      ripple.should.not.have.class('mdc-ripple-surface')
    }).then(done)
  })
})
