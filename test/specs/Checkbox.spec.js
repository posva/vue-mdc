import MdcCheckbox from 'src/Checkbox.vue'
import { createVM } from '../helpers/utils.js'
import { nextTick } from '../helpers/wait-for-update.js'

describe('Checkbox.vue', function () {
  it('renders checkbox', function () {
    const vm = createVM(this, function (h) {
      return (
        <MdcCheckbox />
      )
    }, {
      components: { MdcCheckbox },
    })
    vm.$('input').should.have.attr('type', 'checkbox')
  })

  it('works with v-model and bool', function (done) {
    const vm = createVM(this, `<MdcCheckbox v-model="checked"/>`, {
      data: {
        checked: true,
      },
      components: { MdcCheckbox },
    })
    vm.checked.should.be.true
    vm.$('input').should.be.checked
    vm.checked = false
    nextTick().then(() => {
      vm.checked.should.be.false
      vm.$('input').should.not.be.checked
    }).then(done)
  })

  it('works with v-model and arrays', function (done) {
    const vm = createVM(this, `
<MdcCheckbox class="one" v-model="opts" value="one"/>
<MdcCheckbox class="two" v-model="opts" value="two"/>
    `, {
        data: {
          opts: ['one'],
        },
        components: { MdcCheckbox },
      })
    vm.opts.should.eql(['one'])
    vm.$('.one').should.be.checked
    vm.$('.two').should.not.be.checked
    vm.$('.one input').should.have.value('one')
    vm.opts = ['one', 'two']
    nextTick().then(() => {
      vm.opts.should.eql(['one', 'two'])
      vm.$('.one').should.be.checked
      vm.$('.two').should.be.checked
      vm.$('.one input').click()
    }).then(() => {
      vm.opts.should.eql(['two'])
      vm.$('.one').should.be.not.checked
      vm.$('.two').should.be.checked
    }).then(done)
  })

  it('can have classic attrs: id, disabled', function () {
    const vm = createVM(this, `
<MdcCheckbox id="foo" disabled />
    `, {
        components: { MdcCheckbox },
      })
    vm.$('input').should.have.attr('disabled')
    vm.$('input').should.have.id('foo')
  })
})
